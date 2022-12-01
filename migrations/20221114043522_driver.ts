import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('drivers', (table) => {
    table.increments('id')
    table.string('userId').references('users.id')
    table.enum('vehicleType', ['bike', 'tricycle', 'car', 'walking'])
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('drivers')
}
