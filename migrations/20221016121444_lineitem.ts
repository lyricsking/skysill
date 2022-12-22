import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('lineitem', (table) => {
    table.increments('id')
    table.string('productId').references('proructs.id')
    table.string('orderId').references('order.id').comment('The order to which this line item belongs')
    table.string('optionsId').comment('Comma separated list of selected product options')
    table.decimal('price',19,4)
    table.decimal('discount', 19, 4)
    table.decimal('finalItemPrice', 19, 4)
    table.integer('quantity').unsigned()
    table.decimal('finalPrice', 19, 4)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('lineitem')
}
