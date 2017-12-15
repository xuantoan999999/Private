'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.get('/', 'IndexController.index')

Route.group(() => {
    Route.post('check-login', 'AuthController.checkLogin')
    Route.post('login', 'AuthController.login')

    /**
     * Module User
     */
    Route.get('/nguoi-dung', 'UserController.index')
    Route.delete('/nguoi-dung/:id', 'UserController.destroy')
    Route.post('/nguoi-dung', 'UserController.store')
    Route.get('/nguoi-dung/:id', 'UserController.info')
    Route.post('/nguoi-dung/:id', 'UserController.update')
    Route.post('/nguoi-dung-doi-mat-khau/:id', 'UserController.changePassword')
}).prefix('auth')