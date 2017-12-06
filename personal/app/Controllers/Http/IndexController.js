'use strict'
const Helpers = use('Helpers');
const mongoose = require('mongoose');
const Hash = use('Hash')
const _ = use('lodash')

const User = mongoose.model('User');

class IndexController {
    async index({ request, view, response }) {
        return view.render('index', {
        });
    }

    async testApi({ request, view, response }) {
        let params = request.all();
        let page = parseInt(params.page) || 1;
        let itemsPerPage = parseInt(params.limit) || 10;

        let usersQuery = () => {
            return new Promise((resolve, reject) => {
                User.find().select('email name roles').sort('-_id').lean()
                    .paginate(page, itemsPerPage, (err, items, total) => {
                        return resolve({
                            totalItems: total,
                            totalPage: Math.ceil(total / itemsPerPage),
                            currentPage: page,
                            itemsPerPage: itemsPerPage,
                            users: items,
                        });
                    });
            })
        }
        let usersList = await usersQuery();

        return response.send({
            success: true,
            params,
            page,
            itemsPerPage,
            usersList
        })

        return response.send({
            success: true,
        })
    }
}

module.exports = IndexController
