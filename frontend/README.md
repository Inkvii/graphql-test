# Initialization

1. run `docker-compose.yml` to setup postgres database
2. Populate database with `graphql-api/resources/initdb.sql`
3. Start graphql api

```shell
   cd graphql-api
   npm i
   npm run start-graphql
```

4. Prepare and start next.js server

```shell
    cd frontend
    npm i
    npm run generate-graphql-types
    npm run dev
```

# Postgraphile

https://www.graphile.org/postgraphile/introduction/

See https://github.com/graphile-contrib/postgraphile-plugin-connection-filter for filter plugin options (by default contains security issues
with unbounded filtering options)

