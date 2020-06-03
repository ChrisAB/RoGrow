# RoGrow

Web application meant to help local producers be discovered more.

## Current demo

Current demo is hosted at [Demo](http://18.196.100.201:3000).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

#### Docker

Make sure you have docker installed.

[Docker Docs Install guide](https://docs.docker.com/engine/install/)

#### Node.js & npm

Npm is downloaded and installed automatically with node.

[Node >=12.16.3](https://nodejs.org/en/)

#### MongoDB

You will need a MongoDB instance. Either hosted on the cloud (eg. Atlas) or locally.

[MongoDB](https://www.mongodb.com/)

### Installing

A step by step series of examples that tell you how to get a development environment running.

Clone this repository

```
git clone https://github.com/ChrisAB/RoGrow.git
```

#### Config files

Set up your config.env files.

server/config.env

```
NODE_ENV = development
PORT = 25030
DATABASE_ADDRESS= localhost
DATABASE_PORT= 25031
RUNNING_AT_IP=localhost

JWT_SECRET = <random_string_32_characters_or_more>
JWT_EXPIRES_IN = <expiration date in days followed by a 'd'. ex: 90d >
JWT_COOKIE_EXPIRES_IN= <same as above without a 'd' ex: 90 >
```

database/config.env

```
NODE_ENV = development
PORT = 25031
DATABASE_NAME = <mongodb database username>
DATABASE_PASSWORD = <mongodb database password>
DATABASE_SERVER = localhost
DATABASE_NAME = <name of database crated in mongodb>
```

client/.env

```
REACT_APP_API_URL = http://localhost:25030/api
```

#### Installing dependencies

Must install dependencies in all 3 folders!

```
cd ./client
npm i
cd ..
cd ./database
npm i
cd ..
cd ./server
npm i
```

#### Run docker-compose

```
docker-compose up --build
```

## Running the tests

404 Automated tests not found

### Break down into end to end tests

Explain what these tests test and why

404 Explanation not found

## Deployment

### Config files

server/config.env

```
NODE_ENV = production
PORT = 25030
DATABASE_ADDRESS= 172.17.0.1 (Change if running on different docker network than bridge)
DATABASE_PORT= 25031
RUNNING_AT_IP= <ip_of_the_server>

JWT_SECRET = <random_string_32_characters_or_more>
JWT_EXPIRES_IN = <expiration date in days followed by a 'd'. ex: 90d >
JWT_COOKIE_EXPIRES_IN= <same as above without a 'd' ex: 90 >
```

database/config.env

```
NODE_ENV = production
PORT = 25031
DATABASE_NAME = <mongodb database username>
DATABASE_PASSWORD = <mongodb database password>
DATABASE_SERVER = <mongodb_server_address>
DATABASE_NAME = <name of database crated in mongodb>
```

client/.env

```
REACT_APP_API_URL = http://<ip_of_the_server>:25030/api
```

#### Run docker-compose production

```
docker-compose up -f docker-compose-production.yml -d --build
```

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Bootstrap](https://getbootstrap.com/) - Frontend toolkit
- [Docker](https://www.docker.com/)
- [Express](https://expressjs.com/) - Used for backend API
- [Mongoose](https://mongoosejs.com/) - For Object Modeling
- [MongoDb](https://www.mongodb.com/) - DataBase

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

No versioning needed for now.

## Authors

- **Adrian-Cristian BATRIN** - Project Lead + Backend & Database - [ChrisAB](https://github.com/ChrisAB)
- **Andreea COSMA** - Frontend Developer - [andreeacosma](https://github.com/andreeacosma)
- **Alexandru ULEU** - Database Admin - [Alexis0900](https://github.com/Alexis0900)
- **Marian VASILESCU** - Database Admin - [IonutMarian27](https://github.com/IonutMarian27)

See also the list of [contributors](https://github.com/ChrisAB/RoGrow/contributors) who participated in this project.

## License

This project is licensed under the Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) License - see the [LICENSE.md](LICENSE.md) file for details.
