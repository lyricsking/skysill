import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('product', (table) => {
    table.string('id').primary()
    table.string('shopId').references('shop.id')
    table.string('categoryId').references ('product_category.id')
    table.string('name')
    table.string('description')
    table.string('details')
    table.decimal('price',19,4)
    table.decimal('discount',19,4)
    table.enum('discountType', [ 'flat', 'percent' ])
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('product')
}
