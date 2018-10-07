const knex = require("../db/knex.js");

module.exports = {
  show: (req,res) => {
    knex('petOwner').where('id', req.params.id).then((results)=>{
      res.render('seeking', {pet:results[0]})
    })
  },

  new: (req,res) => {
    knex('petOwner').where('id', req.params.id).then(()=>{
      knex('petSeeker').insert({
        seeker_name: req.body.seeker_name,
        seeker_email: req.body.seeker_email,
        seeker_age: req.body.seeker_age,
        seeker_location: req.body.seeker_location,
        seeker_pet: req.body.seeker_pet,
        years_owned: req.body.years_owned,
        bio: req.body.bio,
        pet_experience: req.body.pet_experience,
        status: req.body.status,
        fb_url: req.body.fb_url,
        owner_id: req.params.id
      }).then(()=>{
        res.redirect(`/seeking/${req.params.id}`)
      })
    })
  },

  showUpdate: (req,res) => {
    knex('booking').where('id', req.params.appointment_id).then((results)=>{
      res.render('edit', {booking:results[0]})
    })
  },

  delete: (req,res) => {
    knex('petSeeker').where('id', req.params.seeker_id)
    .del().then(() => {
      res.redirect('/seekers')
    })
  }
}
