import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('groups', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.integer('uf').notNullable()
        table.integer('city').notNullable()
        table.string('facebook').nullable()
        table.string('instagram').nullable()
        table.string('youtube').nullable()
        table.string('parish').notNullable()
        table.string('community').nullable()
        table.integer('type').notNullable()
        table.integer('day').notNullable()
        table.time('hour').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('groups')
}