import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transaction', (table) => {
    table.increments('id')
    table.string('walletId').references('wallet.id')
    table.decimal('amount', 19, 4).comment('The transaction amount credited or debited. A negative amount represent debit, while positive amount rep credit.')
    table.boolean('pend').comment('If transaction should be recorded as pending account').defaultTo(true)
    table.string('narrations').comment('The description including the reference, transaction medium etc.')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transaction')
}
