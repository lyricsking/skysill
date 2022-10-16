import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('pmodifiers', (table) => {
    table.string('id').primary()
    table.string('name')
    table.integer('minSelectable').unsigned()
    table.integer('maxSelectable').unsigned()
    table.integer('noFree').unsigned()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('pmodifiers')
}
