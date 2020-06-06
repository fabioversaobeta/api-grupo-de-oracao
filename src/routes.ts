import express from 'express'
import { celebrate, Joi } from 'celebrate'

import GroupsController from './controller/GroupsController'

// index, show, create, update, delete

const routes = express.Router()

const groupsController = new GroupsController()

// Groups
routes.post(
    '/groups', 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            facebook: Joi.string(),
            instagram: Joi.string(),
            youtube: Joi.string(),
            parish: Joi.string().required(),
            community: Joi.string(),
            hour: Joi.string().required(),
            day: Joi.string().required(),
            city: Joi.number().required(),
            uf: Joi.number().required(),
            type: Joi.number().required(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
        })
    }, {
        abortEarly: false
    }), 
    groupsController.create
)

routes.get('/groups', groupsController.index)
routes.get('/groups/:id', groupsController.show)

export default routes

