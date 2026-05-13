import Link from 'next/link';
import { lessons } from '@/lib/data';

export default function SkillTreePage() {
  return (
    <main>
      <h1 className="title">Formal Science Skill Tree</h1>
      <div className="grid grid-2">
        {lessons.map((lesson) => (
          <article className="card" key={lesson.id}>
            <h3>{lesson.title}</h3>
            <p style={{ color: 'var(--muted)' }}>Level: {lesson.level}</p>
            <Link className="btn" href={`/lesson/${lesson.id}`}>Open Lesson</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
