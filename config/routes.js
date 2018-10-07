//Update the name of the controller below and rename the file.
const owners = require("../controllers/owners.js")
const seekers = require("../controllers/seekers.js")
const notes = require("../controllers/notes.js")
module.exports = function(app){

  //user w/ no login
  app.get('/', owners.index);
  app.get('/owners/login', owners.show);
  app.post('/login', owners.login);
  app.post('/register', owners.new);


  // seekings
  app.get('/seeking/:id', seekers.show);
  app.post('/newSeek/:id', seekers.new);

  app.use(authMiddleware);
  //
  //user logged in
  app.get('/seekers', owners.seekers);
  app.get('/seekers/view/:seeker_id', owners.Oneseeker);

  app.post('/seekers/delete/:seeker_id', seekers.delete);
}



const authMiddleware = (req, res, next) => {
  if(!req.session.user_id){
    res.redirect('/');
  }else{
    next();
  }
}
