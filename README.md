
# Yassir air quality Nodejs backend challenge.

## Installation

### Local Installation

- Ensure you have an instance of postgres running locally.

- Substitute the env variables.

```
# Service variables
APP_ENV = DEVELOPMENT
PORT = 8081
HOST = http://localhost
BASE_URL = ${HOST}:${PORT}

# PG local DB variables
PG_HOST=localhost
PG_USER=postgres
PG_DATABASE=air_quality
PG_PASSWORD=postgres
PG_PORT=5432

# PG docker DB variables
PGADMIN_DEFAULT_EMAIL=postgres@mail.com
PGADMIN_DEFAULT_PASSWORD=admin12
PGADMIN_LISTEN_PORT=80

# IQAIR Variable
IQAIR_BASE_URL=replace this with your own
IQAIR_API_KEY=replace this with your own

#Paris Coordinates
PARIS_LAT=48.856613
PARIS_LON=2.352222

```

- run `npm i`

### Docker Installation
- Ensure you have docker running on your local machine.
- run `docker-compose build`
- run ` docker-compose up`
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```

## Stay in touch

- Author - [Faith Omojola](https://github.com/codemutatio)
