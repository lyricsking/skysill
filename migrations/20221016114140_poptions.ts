import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('poptions', (table) => {
    table.string('id').primary()
    table.string('modifierId').references('pmodifiers.id')
    table.string('name').notNullable()
    table.decimal('price', 19, 4)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('poptions')
}
