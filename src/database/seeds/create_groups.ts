import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('groups').insert([
        {
            name: "Grupo de Oração Jovem Jesus Renasce",
            uf: 1,
            city: 1,
            facebook: "Jesus Renasce Jovem",
            instagram: "@jesusrenascejovem",
            youtube: "Jesus Renasce",
            parish: "Paróquia Santa Teresinha de Lisieux",
            community: "Comunidade São Paulo da Cruz",
            type: 2,
            day: 6,
            hour: "17:00:00",
            email: "fabio.versao.beta@gmail.com",
            whatsapp: "41984395789.0",
            latitude: -25.3554614,
            longitude: -49.1680761            
        }
    ])
}