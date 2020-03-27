var express = require('express');
var router = express.Router();
var Todos = require('../data/todos')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {todos: Todos.getAll()});
});

router.post('/', function(req,res,next){
  req.body.done = false;
  Todos.create(req.body)
  res.redirect('/')
})

router.delete('/:id', function(req,res,next){
  Todos.delete(req.params.id)
  res.redirect('/')
})

module.exports = router;
