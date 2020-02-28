# SmartCycle

Team Tars project repository including both client-side and server-side code.

## Prerequisites

### Project dependencies

`npm install` to install all the dependencies including dev dependencies.

`npm install --production` to only install dependenies required in runtime.

### Database
As we don't have a database server right now, you need to install mongoDB locally. Simply follow the guide if you are using Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/.

After the database is installed, you need to create a .env file under project root. The `DATABASE_URL` should be based on you own database settings. As default, it could be like
`DATABASE_URL=mongodb://localhost:27017/trashInfos` .

## Basic commands

### Development

`npm run client` to start dev server (listening on port `3000`) for client-side code.

`npm run server` to start dev server (listening on port `8080`) for server-side code.

`npm run dev` runs both client and server at the same time.

### Production

`npm run build` to make production build on client-side code in webpack-build folder and served by the server.

`npm run start` to make production build and then start the server.

Server is listening on port `8080`.


## Interact with database via REST calls

You can use Postman to fire REST calls. Here are some basic exampels.

Note that client-side should call HashUtils.generateHash() to generate a **deterministic hash id** based on name for each entity. (If there is no hash id, server will append it). The hash id is used as reference among databased collections.

For example, `GET http://localhost:8080/trashInfos/296516010` will retrieve **paper cup** info.

### Create a trash info document
URL: `http://localhost:8080/trashInfos/`

Method: `POST`

Headers: `Content-Type:application/json`

Body (JSON):
```
{
	"name": "paper cup",
    	"hashId": "296516010",
	"category": "compost",
	"bin": "compost"
}
```

### Create a trash info detail document

URL: `http://localhost:8080/trashInfoDetails/`

Method: `POST`

Headers: `Content-Type:application/json`

Body (JSON):
```
{
	"name": "paper cup",
    	"hashId": "296516010",
	"description": "Sample description"
}
```

### Create a trash image document

URL: `http://localhost:8080/trashImages/`

Method: `POST`

Headers: `enctype:multipart/form-data`

Body (form-data):
```
    file (File): sample.png  //choose your image file
    name (Text): paper cup
    hashId (Text): 296516010
```


