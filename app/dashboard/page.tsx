'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { lessons } from '@/lib/data';

export default function DashboardPage() {
  const [name, setName] = useState('Learner');

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user) return;
      setName(user.user_metadata?.full_name || user.email?.split('@')[0] || 'Learner');
    };
    loadUser();
  }, []);

  return (
    <main>
      <h1 className="title">Dashboard</h1>
      <p>Welcome, <strong>{name}</strong>.</p>
      <div className="card">
        <h2>Skill Tree</h2>
        <p style={{ color: 'var(--muted)' }}>Domain: Formal Science</p>
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id} style={{ marginBottom: '0.5rem' }}>
              <Link href={`/lesson/${lesson.id}`}>{lesson.title} ({lesson.level})</Link>
            </li>
          ))}
        </ul>
      </div>
      <p style={{ marginTop: '1rem' }}><Link className="btn secondary" href="/skills">Open Skill Tree Page</Link></p>
    </main>
  );
}
