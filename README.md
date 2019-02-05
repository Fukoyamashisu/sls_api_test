# sls-api-test

## Getting started
```
nvm use
yarn install
```

### offline
```
yarn start
```

### deploy
```
yarn deploy
```

# OFFLINE

## CREATE
curl -d '{"email":"dede@yahoo.fr", "name":"dede"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/create
curl -d '{"email":"bernard@gmail.com", "name":"bernard"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/create
curl -d '{"email":"ted@msn.fr", "name":"ted"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/create
curl -d '{"email":"travis@rehjer.fr", "name":"travis"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/create

## UPDATE
curl -d '{"email":"dede@yahoo.fr", "phone":"0978954533"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/api/update
curl -d '{"email":"bernard@gmail.com", "phone":"0923454533"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/api/update
curl -d '{"email":"ted@msn.fr", "phone":"0907454533"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/api/update
curl -d '{"email":"travis@rehjer.fr", "phone":"0907654678"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/api/update

## DELETE
curl -d '{"email":"dede@yahoo.fr"}' -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/delete
curl -d '{"email":"bernard@gmail.com"}' -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/delete
curl -d '{"email":"ted@msn.fr"}' -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/delete
curl -d '{"email":"travis@rehjer.fr"}' -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/delete

## GET
curl -X GET http://localhost:3000/api/get/bernard@gmail.com

## LIST
curl -X GET http://localhost:3000/api/list

# ONLINE

## CREATE
curl -d '{"email":"dede@yahoo.fr", "name":"dede"}' -H "Content-Type: application/json" -X POST https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/create
curl -d '{"email":"bernard@gmail.com", "name":"bernard"}' -H "Content-Type: application/json" -X POST https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/create
curl -d '{"email":"ted@msn.fr", "name":"ted"}' -H "Content-Type: application/json" -X POST https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/create
curl -d '{"email":"travis@rehjer.fr", "name":"travis"}' -H "Content-Type: application/json" -X POST https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/create

## UPDATE
curl -d '{"email":"dede@yahoo.fr", "phone":"0978954533"}' -H "Content-Type: application/json" -X PUT https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/update
curl -d '{"email":"bernard@gmail.com", "phone":"0923454533"}' -H "Content-Type: application/json" -X PUT https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/update
curl -d '{"email":"ted@msn.fr", "phone":"0907454533"}' -H "Content-Type: application/json" -X PUT https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/update
curl -d '{"email":"travis@rehjer.fr", "phone":"0907654678"}' -H "Content-Type: application/json" -X PUT https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/update

## DELETE
curl -d '{"email":"dede@yahoo.fr"}' -H "Content-Type: application/json" -X DELETE https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/delete
curl -d '{"email":"bernard@gmail.com"}' -H "Content-Type: application/json" -X DELETE https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/delete
curl -d '{"email":"ted@msn.fr"}' -H "Content-Type: application/json" -X DELETE https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/delete
curl -d '{"email":"travis@rehjer.fr"}' -H "Content-Type: application/json" -X DELETE https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/delete

## GET
curl -X GET https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/get/ted@msn.fr

## LIST
curl -X GET https://giek78ons9.execute-api.eu-west-1.amazonaws.com/staging/api/list
