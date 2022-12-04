import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('business', (table) => {
    table.string('id').primary()
    table.string('ownerId').notNullable().references('user.id')
    table.string('name').notNullable()
    table.string('contactName').notNullable()
    table.string('contactPhone').notNullable()
    table.string('contactEmail')
    table.string('categories')
    table.string('tags')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('business')
}
