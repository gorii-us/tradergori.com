'use client';

import { FormEvent, useState } from 'react';
import { examQuestions, lessons } from '@/lib/data';

export default function ExamPage({ params }: { params: { lessonId: string } }) {
  const lesson = lessons.find((item) => item.id === Number(params.lessonId));
  const [score, setScore] = useState<number | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    let correct = 0;
    examQuestions.forEach((q) => {
      if (Number(form.get(`q-${q.id}`)) === q.answer) correct += 1;
    });
    setScore(correct);
  };

  if (!lesson) return <main><p>Exam not found.</p></main>;

  return (
    <main>
      <h1 className="title">{lesson.title} — Exam</h1>
      <form onSubmit={onSubmit} className="grid">
        {examQuestions.map((q) => (
          <fieldset className="card" key={q.id}>
            <legend>{q.id}. {q.question}</legend>
            {q.options.map((option, idx) => (
              <label key={option} style={{ display: 'block', marginTop: '0.5rem' }}>
                <input type="radio" name={`q-${q.id}`} value={idx} required /> {option}
              </label>
            ))}
          </fieldset>
        ))}
        <button className="btn" type="submit">Submit</button>
      </form>
      {score !== null && (
        <p style={{ marginTop: '1rem' }}>
          Your score: <strong>{score}/5</strong>
        </p>
      )}
    </main>
  );
}
