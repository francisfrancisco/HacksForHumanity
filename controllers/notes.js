const knex = require("../db/knex.js");

module.exports = {
  notes: (req,res) => {
    knex('notes').insert({
      content: req.body.content,
      doctor_id: req.session.user_id,
      app_id: req.params.appointment_id
    }).then(() => {
      res.redirect(`/appointments/view/${req.params.appointment_id}`)
    })
  }

//   comments: (req,res)=>{
//   knex('comments').insert({
//     name: req.body.name,
//     content: req.body.content,
//     book_id: req.params.book_id
//   }).then(()=>{
//       res.redirect(`/books/${req.params.book_id}`)
//     });
// }
}
