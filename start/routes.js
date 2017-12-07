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
}).prefix('auth')