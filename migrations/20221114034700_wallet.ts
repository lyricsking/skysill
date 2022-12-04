import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('wallet', (table) => {
    table.increments('id')
    table.string('owner')
    table.string('ownerId')
    table.decimal('balance', 19, 4)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('wallet')
}