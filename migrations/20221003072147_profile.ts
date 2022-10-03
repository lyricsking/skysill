import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('profiles', (table) => {
        table.string('id').unique()
        table.string('firstname')
        table.string('lastname')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('profiles')
}

