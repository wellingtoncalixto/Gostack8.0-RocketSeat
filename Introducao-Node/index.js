const express = require('express');

const server = express();

server.use(express.json())

//query params = ?teste=1
//route params = teste/1
//request Body = { 'name' = 'Wellington', idade = 20}

//CRUD - CREATE, READ, UPDATE, DELETE

const users = ['Wellington', 'Pedro', 'Diego'];


//Middlewere Global
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; Url: ${req.url}`);

  return next();
  console.timeEnd('Request')
})
//Middlewere Local
function checkUserExist(req, res, next){
  if(!req.body.name){
    return res.status(400).json({error: 'user name is required'})
  }
  return next();
}

function checkUserInArray(req, res, next){
  const user = users[req.params.index];
  
  if(!user){
    return res.status(400).json({error: 'user dont not exist'});
  }
  req.user = user;
  return next();
}


server.get('/users', (req, res) => {

  return res.json(users);
})

//ROUTER
server.get('/users/:index', checkUserInArray, (req, res) => {
  return res.json(req.user);
})

server.post('/users',checkUserExist, (req, res) => {
  const { name } = req.body;

  users.push(name);
  
  return res.json(users)
});

server.put('/users/:index', checkUserExist, checkUserInArray, (req, res) => {
  const {index} = req.params;
  const {name} = req.body;
  users[index] = name;

  return res.json(users)
})

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const {index} = req.params;
  
  users.splice(index, 1)

  return res.send()
})



server.listen(3333);