export type Lesson = {
  id: number;
  title: string;
  content: string;
  level: string;
  domain: 'Formal Science';
};

export const lessons: Lesson[] = [
  { id: 1, title: 'Logic Foundations', level: 'Beginner', domain: 'Formal Science', content: 'Learn propositions, truth tables, and deduction.' },
  { id: 2, title: 'Discrete Mathematics Basics', level: 'Beginner', domain: 'Formal Science', content: 'Sets, functions, relations, and proof techniques.' },
  { id: 3, title: 'Algorithmic Thinking', level: 'Intermediate', domain: 'Formal Science', content: 'Step-by-step problem solving with abstraction and decomposition.' }
];

export const examQuestions = [
  {
    id: 1,
    question: 'Which statement best describes formal science?',
    options: ['Science based on symbolic systems and logic', 'Study of only physical experiments', 'History of civilizations', 'Artistic expression'],
    answer: 0
  },
  { id: 2, question: 'A truth table is used to:', options: ['Store user records', 'Evaluate logical statements', 'Draw graphs', 'Render websites'], answer: 1 },
  { id: 3, question: 'Discrete math mainly deals with:', options: ['Continuous waves', 'Infinite fluids', 'Countable structures', 'Chemical bonds'], answer: 2 },
  { id: 4, question: 'An algorithm is:', options: ['A random guess', 'A finite sequence of steps', 'A painting technique', 'A social rule'], answer: 1 },
  { id: 5, question: 'Which is a core proof method?', options: ['Proof by contradiction', 'Proof by decoration', 'Proof by color', 'Proof by opinion'], answer: 0 }
];
