import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('group_participator', table => {
        table.increments('id').primary()

        table.integer('group_id')
            .notNullable()
            .references('id')
            .inTable('groups')

        table.integer('participator_id')
            .notNullable()
            .references('id')
            .inTable('participators')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('group_participator')
}