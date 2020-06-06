import { Request, Response} from 'express'
import knex from '../database/connection'

class GroupsController {
    async index(request: Request, response: Response) {
        const { city, uf, day } = request.query

        const paredDays = String(day)
            .split(',')
            .map(d => Number(d.trim()))

        const groups = await knex('groups')
            .whereIn('day', paredDays)
            .andWhere('city', String(city))
            .andWhere('uf', String(uf))
            .select('*')

        return response.json(groups)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params
        const messageErroNotFound = 'Grupo não encontrado'

        const group = await knex('groups').where('id', id).first()

        if (!group) {
            return response.status(400).json({ message: messageErroNotFound })
        }

        return response.json({ group })
    }

    async create(request: Request, response: Response) {
        try {
            await knex.transaction(async trx => {
                const {
                    name,
                    uf,
                    city,
                    latitude,
                    longitude,
                    facebook,
                    instagram,
                    youtube,
                    parish,
                    community,
                    type,
                    day,
                    hour,
                    email,
                    whatsapp
                } = request.body

                const group = {
                    name,
                    uf,
                    city,
                    latitude,
                    longitude,
                    facebook,
                    instagram,
                    youtube,
                    parish,
                    community,
                    type,
                    day,
                    hour,
                    email,
                    whatsapp
                }

                const insertedIds = await knex('groups')
                    .insert(group)
                    .transacting(trx)

                const group_id = insertedIds[0]

                return response.json({
                    success: true,
                    id: group_id
                })
            })
        } catch(error) {
            return response.json({
                error: error
            })
        }
    }
}

export default GroupsController