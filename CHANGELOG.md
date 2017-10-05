# Changelog

Todas as anotações do projeto estarão neste documento

O formato é baseado em [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
e esse projeto segue [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2017-09-08

+ Commit inicial

## [1.1.0] - 2017-09-09

+ Inserido o tipo `Tag` e seu respectivo relacionamento com o tipo `Topic`

## [1.2.0] - 2017-09-17

+ Atualizado relacionamento no campo `cards` presentes nos tipos `topic` e `user`
+ Atualizado relacionamento no campo `topics` no tipo `user`

## [1.3.0] - 2017-09-30

+ Inserido DataLoader no projeto, com suas configurações. O DataLoader será usado nas tags, posições, nos cards, tópicos e usuários.

## [1.4.0] - 2017-10-01

+ Criado `scalars` para trabalhar com tempo
+ Insert mutation for login with facebook
+ Atualizado lógica na ação votar no tópico: o autor pode votar

## [1.5.0] - 2017-10-04

+ Inserido o conceito de avatar a plataforma
