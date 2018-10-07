exports.up = function(knex, Promise) {
  return knex.schema.createTable('petOwner', (table) => {
    table.increments();
    table.string('owner_name');
    table.string('owner_email').unique();
    table.string('password');
    table.text('pet_name');
    table.text('pet_bio');
    table.text('img_url');
    table.text('owner_location');
    table.string('org_name').defaultsTo(' ');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('petOwner');
};
