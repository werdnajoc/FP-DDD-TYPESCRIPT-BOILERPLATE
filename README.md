### Install mongo with docker
```
docker run --name localMongo -it -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -p27017:27017 -d mongo
```
