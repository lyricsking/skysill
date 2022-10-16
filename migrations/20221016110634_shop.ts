import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('shops', (table) => {
    table.string('id').primary()
    table.string('businessId').references('business.id')
    table.string('description')
    table.point('coordinate')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('shops')
}
