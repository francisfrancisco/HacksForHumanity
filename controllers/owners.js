const knex = require("../db/knex.js");

module.exports = {
  // index: (req, res) => {
  //   knex('doctor').then((results)=>{
  //     res.render('index', {doctors:results});
  //   })
  // },
  index: (req,res) => {
    knex('petOwner').then((results)=>{
        res.render('index', {pet:results});
    })
  },

  show: (req,res) => {
    res.render('login');
  },


  login: (req,res) => {
    knex('petOwner').where('owner_email', req.body.email).then((results)=>{
          let user = results[0];
          if(!user){
            res.redirect('/owners/login');
            return;
          }
          if(user.password === req.body.password){
            req.session.user_id = user.id;
            req.session.save(()=>{
              res.redirect('/seekers');
            })
          }else{
            res.redirect('/owners/login');
          }
        })
  },

  new: (req,res) => {
    knex('petOwner').insert({
      owner_name: req.body.owner_name,
      owner_email: req.body.owner_email,
      password: req.body.password,
      owner_location: req.body.owner_location,
      org_name: req.body.org_name,
      pet_name: req.body.pet_name,
      pet_bio: req.body.pet_bio,
      img_url: req.body.img_url,
    }).then(()=>{
      res.redirect('/owners/login');
    })
  },
  //
  // //the path i started when i thought i wanted sperate ejs files for status of appointments
  // // appointments: (req,res) => {
  // //   knex('doctor').where('id', req.session.user_id).then((results)=>{
  // //     knex('booking').select('booking.*', 'doctor.name').where({
  // //       doctor_id: req.session.user_id,
  // //       status: 'unconfirmed'
  // //     }).join('doctor', 'doctor.id', 'booking.doctor_id').then((result)=>{
  // //       res.render('appointments', {doctors:results[0], booking:result});
  // //     })
  // //   })
  // // }
  seekers: (req,res) => {
    knex('petOwner').where('id', req.session.user_id).then((results)=>{
      knex('petSeeker').select('petSeeker.*', 'petOwner.owner_name')
      .where({owner_id: req.session.user_id, status: 'matched'})
      .join('petOwner', 'petOwner.id', 'petSeeker.owner_id').then((result)=>{
        res.render('seekers', {owners:results[0], seekers:result});
      })
    })
  },

  Oneseeker: (req,res) => {
    knex('petSeeker').where('id', req.params.seeker_id).then((result)=>{
      knex('notes').where('seeker_id', req.params.seeker_id).then((note)=> {
        res.render('oneSeeker', {seeker:result[0], note:note});
      })
    })
  }
}
