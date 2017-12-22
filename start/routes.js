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

Route.group(() => {
  /**
   * Module User
   */
  Route.get('/nguoi-dung', 'UserController.index')
  Route.delete('/nguoi-dung/:id', 'UserController.destroy')
  Route.post('/nguoi-dung', 'UserController.store')
  Route.get('/nguoi-dung/:id', 'UserController.info')
  Route.post('/nguoi-dung/:id', 'UserController.update')
  Route.post('/nguoi-dung-doi-mat-khau/:id', 'UserController.changePassword')

  /**
     * Module Account
     */
    Route.get('/tai-khoan', 'AccountController.index')
    Route.post('/tai-khoan', 'AccountController.store')
    Route.get('/tai-khoan/:id', 'AccountController.info')
    Route.post('/tai-khoan/:id', 'AccountController.update')
    Route.delete('/tai-khoan/:id', 'AccountController.destroy')

     /**
     * Module Website
     */
    Route.get('/website', 'WebsiteController.index')
    Route.post('/website', 'WebsiteController.store')
    Route.get('/website/:id', 'WebsiteController.info')
    Route.post('/website/:id', 'WebsiteController.update')
    Route.delete('/website/:id', 'WebsiteController.destroy')
}).prefix('api')
