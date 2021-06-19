
exports.up = function(knex) {
  return knex.schema.createTable('data', function(table) {
      table.increments();
      table.string('product').notNullable();
      table.string('date').notNullable();
      table.string('platform').notNullable();
      table.integer('impressions').notNullable();
      table.integer('clicks').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('data')
};
