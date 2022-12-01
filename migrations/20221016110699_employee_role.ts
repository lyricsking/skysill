import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('employee_role', (table) => {
    table.increments('id')
    table.string('businessId').references('business.id')
    table.string('shopId').references('shop.id')
    table.enum('role', ['manager', 'assistance' ])
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('employee_role')
}
