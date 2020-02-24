# Sensorhub monorepo
This repository contains software for manipulate and collecting data from various IoT devices.

## Backend (server)
Project is written in Typescript. It implements repeatable and scalable structure.

Stack:
* NodeJS
* PostgreSQL
* Express
* Sequelize
* sequelize-typescript

## Monorepo
Monorepo is managed by [rush](https://rushjs.io/) backed by [pnpm](https://github.com/pnpm/pnpm) package manager. I strongly recommend to get familliar with this projects. They are easy to use and helps with some common monorepo problems. pnpm is also ultra fast! At this point repo contains only backend code.

## Build & run
Project is dockerized, feel free to execute `docker-compose up`. Inspect `docker-compose.yml` for informations about software running on given ports.
