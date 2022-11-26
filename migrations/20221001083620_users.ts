import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.string('id').primary()
    table.string('firstname').nullable()
    table.string('lastname').nullable()
    table.string('phone').unique()
    table.datetime('mobileVerifiedAt')
    table.string('email').unique()
    table.dateTime('emailVerifiedAt')
    table.string('password')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users')
}