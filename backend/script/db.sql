create extension if not exists "uuid-ossp"

create table usuario (
  id uuid primary key,
  nome varchar(255) not null,
  email varchar(255) not null,
  senha varchar(255) not null
);