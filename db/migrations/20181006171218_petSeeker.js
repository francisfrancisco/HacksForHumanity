
exports.up = function(knex, Promise) {
  return knex.schema.createTable('petSeeker', (table) => {
    table.increments();
    table.string('seeker_name');
    table.string('seeker_email');
    table.integer('seeker_age');
    table.string('seeker_location');
    table.bool('seeker_pet').defaultsTo(false);
    table.integer('years_owned').defaultsTo(0);
    table.text('bio');
    table.text('pet_experience');
    table.string('status').defaultsTo('matched')
    table.text('fb_url');
    table.integer('owner_id')
      .references('id')
      .inTable('petOwner')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('petSeeker');
};
