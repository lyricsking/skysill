import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('shop', (table) => {
    table.string('id').primary()
    table.string('shopName').comment("Shops name derived from concatenating the business name and location name.") 
    table.string('businessId').references('business.id')
    table.string('description').comment('Address description of coordinate')
    table.point('coordinate')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('shop')
}
