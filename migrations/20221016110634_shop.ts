import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('shops', (table) => {
    table.string('id').primary()
    table.string('shopName')
    table.string('businessId').references('business.id')
    table.string('description').comment('Address description of coordinate')
    table.point('coordinate')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('shops')
}
