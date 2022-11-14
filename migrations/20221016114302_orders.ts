import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('orders', (table) => {
    table.string('id')
    table.string('shopperId').references('users.id')
    table.string('shopId').references('shops.id')
    table.decimal('subtotal',19,4)
    table.decimal('deliveryFee', 19, 4)
    table.string('deliveryAddress')
    table.point('deliveryGeopoint')
    table.enum('preferredMedium', ['bike', 'tricycle', 'car'])
    table.enum('deliveryStatus', ['pending', 'accepted', 'confirmed', 'assigned', 'awaitingPickup', 'inTransit', 'delivered', 'cancelled'])
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('orders')
}
