const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const attempts = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter((time) => now - time < 60_000);
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (rateLimited(ip)) {
      return Response.json({ message: 'Too many attempts. Please try again shortly.' }, { status: 429 });
    }

    const body = await request.json();
    const email = `${body?.email || ''}`.trim().toLowerCase();
    if (body?.company) return Response.json({ message: 'You are on the launch list.' });
    if (!emailPattern.test(email) || email.length > 254) {
      return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anonKey) {
      console.error('Launch subscribe: Supabase environment variables are missing.');
      return Response.json({ message: 'Subscriptions are temporarily unavailable.' }, { status: 503 });
    }

    const result = await fetch(`${url}/rest/v1/rpc/subscribe_website_launch`, {
      method: 'POST',
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ p_email: email }),
      cache: 'no-store',
    });

    if (!result.ok) {
      console.error('Launch subscribe: Supabase insert failed.', result.status, await result.text());
      return Response.json({ message: 'Could not save your email. Please try again.' }, { status: 500 });
    }

    return Response.json({ message: 'You’re on the list! We’ll notify you at launch.' });
  } catch (error) {
    console.error('Launch subscribe route failed.', error);
    return Response.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
