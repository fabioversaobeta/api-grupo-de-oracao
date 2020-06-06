import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('participators', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('uf').notNullable()
        table.integer('city').notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('participators')
}