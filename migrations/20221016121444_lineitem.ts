import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('lineitem', (table) => {
    table.increments('id')
    table.string('productId').references('proructs.id')
    table.string('modifierIds').comment('Comma separated list of product')
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
