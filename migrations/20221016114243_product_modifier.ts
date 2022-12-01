import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('product_modifier', (table) => {
        table.string('productId').references('product.id')
        table.string('modifierId').references('modifier.id')

        table.primary(['productId', 'modifierId'])
    })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('product_modifier')
}

