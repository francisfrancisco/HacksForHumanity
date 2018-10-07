
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', (table) => {
    table.increments();
    table.text('content');
    table.integer('pet_owner')
      .references('id')
      .inTable('petOwner')
      .onDelete('CASCADE');
      table.integer('seeker_id')
        .references('id')
        .inTable('petSeeker')
        .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
