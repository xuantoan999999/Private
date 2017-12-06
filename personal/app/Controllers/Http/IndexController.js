'use strict'

class IndexController {
    async index({ request, view, response }) {
        return view.render('index', {
        });
    }

    async testApi({ request, view, response }) {
        return response.send({
            success: true,
        })
    }
}

module.exports = IndexController
