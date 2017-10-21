# Changelog

Todas as anotações do projeto estarão neste documento

O formato é baseado em [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
e esse projeto segue [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.8.0] - 2017-10-21

+ Criado UserStats type

## [1.7.0] - 2017-10-12

+ Inserido mutation para colocar usuários como assinantes

## [1.6.0] - 2017-10-08

+ Inserido Bugsnag a plataforma com helpers para as rotas e as mutations do GraphQL
+ Inserido mutation para setar o usuário como assinante

## [1.5.0] - 2017-10-04

+ Inserido o conceito de avatar a plataforma

## [1.4.0] - 2017-10-01

+ Criado `scalars` para trabalhar com tempo
+ Insert mutation for login with facebook
+ Atualizado lógica na ação votar no tópico: o autor pode votar

## [1.3.0] - 2017-09-30

+ Inserido DataLoader no projeto, com suas configurações. O DataLoader será usado nas tags, posições, nos cards, tópicos e usuários.

## [1.2.0] - 2017-09-17

+ Atualizado relacionamento no campo `cards` presentes nos tipos `topic` e `user`
+ Atualizado relacionamento no campo `topics` no tipo `user`

## [1.1.0] - 2017-09-09

+ Inserido o tipo `Tag` e seu respectivo relacionamento com o tipo `Topic`

## [1.0.0] - 2017-09-08

+ Commit inicial
