import type { Knex } from 'knex'
import {OrderStatus} from '../src/services/order/order.schema';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('order', (table) => {
    table.string('id').primary()
    table.string('shopperId').references('user.id')
    table.string('shopId').references('shop.id')
    table.decimal('subtotal',19, 4).defaultTo(0)
    table.decimal('deliveryFee', 19, 4).defaultTo(0)
    table.string('deliveryAddress').nullable()
    table.point('deliveryGeopoint').nullable()
    table.enum('preferredMedium', ['bike', 'tricycle', 'car', 'walking']).nullable()
    table.enum('orderStatus', Object.values(OrderStatus)).defaultTo('pending')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('order')
}