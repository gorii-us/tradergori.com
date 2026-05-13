'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LandingPage() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <section className="card" style={{ width: '100%', maxWidth: 520, textAlign: 'center' }}>
        <h1 className="title" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>ЭРДЭМ</h1>
        <p style={{ color: 'var(--muted)' }}>Mongolia&apos;s first Skill-Based Learning Platform</p>
        <button className="btn" onClick={signInWithGoogle} style={{ marginTop: '1rem', width: '100%' }}>
          Sign in with Google
        </button>
        <button className="btn secondary" onClick={() => router.push('/skills')} style={{ marginTop: '0.75rem', width: '100%' }}>
          Browse Skill Tree
        </button>
      </section>
    </main>
  );
}
