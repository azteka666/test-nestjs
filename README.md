## BE

### Requirements

```
$ Git --version
>= v2.19

$ Docker --version
>= v19.03.5

$ Docker Compose --version
>= v1.24.1

$ node --version
>= v10.11.0

$ NPM --version
>= v6.4.1

```
### How to run with Docker
```
From the terminal, enter the folder where you want to keep the project and perform the following steps:
$ cp .env.sample .env
$ docker-compose up
```

### How to run without Docker
```
From the terminal, enter the folder where you want to keep the project and perform the following steps:
$ cp .env.sample .env
$ yarn install
$ yarn run start:dev
```

### Tech stack: ⚙️
- NestJS - the main BE framework, scalable and maintainable.
- MongoDB - NoSQL database that provides high scalability, flexibility, and performance
- TypeORM - Object-Relational Mapping (ORM) library that enables developers to interact with relational databases using TypeScript
- RRule - a library to work with iCalendar standard

[The link to the standart](https://datatracker.ietf.org/doc/html/rfc5545)

Why we decided to use the standart:
Using the RFC5545 standard for defining recurring events and schedules is considered a best practice because it ensures interoperability between different calendar systems, provides a comprehensive specification for recurrence rules, future-proofs your application, benefits from an established ecosystem of tools and libraries, and offers flexibility and expressiveness in defining complex patterns.

### Folder structure 📁
-- Default NestJS module structure

### Framework
--- NestJS
Nest.js provides a strong architectural framework that encourages best practices and modular development. It offers excellent support for building RESTful APIs and integrates well with TypeScript, which helps catch errors at compile-time. Nest.js also has a vibrant and active community, making it easier to find resources and support when needed.

### Database
--- MongoDB
MongoDB is a good choice for projects that require flexible data schemas and scalability. Its document-oriented model aligns well with modern application development practices, allowing for quick iterations and changes to the data structure. MongoDB also provides features like horizontal scaling, automatic sharding, and built-in replication, making it suitable for handling large volumes of data and ensuring high availability.

### ORM
--- TypeORM
TypeORM simplifies database operations by abstracting away the underlying SQL syntax and providing a TypeScript-friendly interface. Its query builder and repository patterns make it easy to work with complex database operations, and its support for migrations helps manage changes to the database schema over time. TypeORM's compatibility with different database systems allows for flexibility in choosing the most suitable database for the project.

### Additional libraries
--- RRule.js
RRule.js is a valuable tool when working with scheduling and event management systems that involve recurring patterns. It provides a convenient and reliable way to handle various types of recurring events, such as daily, weekly, monthly, or yearly occurrences, as well as more complex patterns. RRule.js simplifies the implementation of recurrence rules, saving development time and ensuring accurate and consistent scheduling functionality.

