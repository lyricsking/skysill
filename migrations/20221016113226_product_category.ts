import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('business_category', (table) => {
    table.string('id').primary()
    table.string('businessId').references('business.id')
    table.string('name')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('business_category')
}
