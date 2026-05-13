import Link from 'next/link';
import { lessons } from '@/lib/data';

export default function LessonPage({ params }: { params: { id: string } }) {
  const lesson = lessons.find((item) => item.id === Number(params.id));

  if (!lesson) {
    return <main><p>Lesson not found.</p></main>;
  }

  return (
    <main>
      <h1 className="title">{lesson.title}</h1>
      <p style={{ color: 'var(--muted)' }}>{lesson.domain} • {lesson.level}</p>
      <div className="card">
        <p>{lesson.content}</p>
      </div>
      <p style={{ marginTop: '1rem' }}>
        <Link className="btn" href={`/exam/${lesson.id}`}>Take Exam</Link>
      </p>
    </main>
  );
}
