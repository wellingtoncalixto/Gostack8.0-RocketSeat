const express = require("express");

const server = express();

server.use(express.json());

let count = 0;
const projects = [];

server.use((req, res, next)=>{
  count++;
  console.log(count)
  return next();
})

function checkProject(req, res, next){
  const {id} = req.params;
  const project = projects.find(p => p.id === id)

    if(!project){
      return res.status(400).json({error: 'project dont not exist'})
    }
   return next();
}

server.post('/projects', (req,res)=>{
  const { id } = req.body;
  const { title } = req.body;
  const {tasks} = req.body
  projects.push({id, title, tasks});

  return res.json(`id: ${id}, title: ${title}, tasks: ${tasks}`);
});

server.get('/projects', (req, res) => {
  return res.json(projects)
});

server.get('/projects/:id', checkProject, (req, res) => {
  const {id} = req.params;

  projects.find(project => {
    project.id === id
      
    return res.json(project.title) 
  });
});

server.put('/projects/:id',checkProject, (req, res) => {
  const {id} = req.params;
  const {title} = req.body;
  
  projects.find(project => {
    project.id === id; 
    project.title = title;
    return res.json(project.title) ;
  });
});

server.delete('/projects/:id', checkProject, (req, res) => {
  const {id} = req.params;
  
  const index = projects.find(project => {
    project.id === id
  })
  projects.splice(index, 1)

  return res.send()
});

server.post('/projects/:id/tasks', checkProject, (req, res) => {
  const {id} = req.params;
  const {title} = req.body;

  projects.find(project => {
    project.id === id;
    project.tasks.push(title);
    return res.json(project.tasks)
  });

});





server.listen(3333);