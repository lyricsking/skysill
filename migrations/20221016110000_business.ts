import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('businesses', (table) => {
    table.string('id').unique()
    table.string('ownerId').notNullable().references('users.id')
   table.string('name').notNullable()
   table.string('contactName').notNullable()
    table.string('contactPhone').notNullable()
    table.string('contactMail')
})
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('business')
}
