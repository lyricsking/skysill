import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('product_category', (table) => {
    table.string('id').primary()
    table.string('businessId').references('business.id')
    table.string('name')
    table.dateTime('availableAt').nullable()
    table.dateTime('unAvailableAt').nullable()
    
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('product_category')
}
