## Prerequisites

|Dependency|Version|
|:---------|:-----:|
|Node      | 12.16.1 |
|NPM       | 6.13.4 |

## Installing and Running
- Clone project `git clone git@github.com:werdnajoc/FP-DDD-TYPESCRIPT-BOILERPLATE.git`
- In folder project run `npm install`
- Run `npm run ts` and another console tab `npm run dev`.

### Installing mongo with docker
```
docker run --name localMongo -it -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -p27017:27017 -d mongo
```
