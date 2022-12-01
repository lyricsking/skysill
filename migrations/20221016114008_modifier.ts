import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('modifier', (table) => {
    table.string('id').primary()
    table.string('businessId').references('business.id')
    table.string('name')
    table.integer('minSelectable').unsigned()
    table.integer('maxSelectable').unsigned()
    table.integer('noFree').unsigned()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('modifier')
}
