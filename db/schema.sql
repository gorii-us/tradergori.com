create table if not exists users (
  id uuid primary key,
  name text not null,
  email text unique not null
);

create table if not exists lessons (
  id bigint generated always as identity primary key,
  title text not null,
  content text not null,
  level text not null,
  domain text not null
);

create table if not exists exams (
  id bigint generated always as identity primary key,
  lesson_id bigint references lessons(id) on delete cascade,
  questions jsonb not null
);

create table if not exists progress (
  user_id uuid references users(id) on delete cascade,
  lesson_id bigint references lessons(id) on delete cascade,
  completed boolean default false,
  score integer default 0,
  primary key (user_id, lesson_id)
);
