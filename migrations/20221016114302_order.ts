import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('order', (table) => {
    table.string('id').primary()
    table.string('shopperId').references('users.id')
    table.string('shopId').references('shops.id')
    table.decimal('subtotal',19, 4).defaultTo(0)
    table.decimal('deliveryFee', 19, 4).defaultTo(0)
    table.string('deliveryAddress').nullable()
    table.point('deliveryGeopoint').nullable()
    table.enum('preferredMedium', ['bike', 'tricycle', 'car', 'walking']).nullable()
    table.boolean('isCart').comment('If this order is still in cart')
    table.enum('deliveryStatus', ['pending', 'accepted', 'confirmed', 'assigned', 'awaitingPickup', 'inTransit', 'delivered', 'cancelled']).defaultTo('pending')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('order')
}
