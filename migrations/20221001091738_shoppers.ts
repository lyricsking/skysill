import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('shoppers', (table) => {
    table.increments('id')
    table.string('text')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('shoppers')
}
