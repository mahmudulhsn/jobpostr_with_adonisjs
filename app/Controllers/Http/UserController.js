'use strict'
const User = use('App/Models/User')

class UserController {
  async create({ request, view, response, auth }){
    const user = await User.create(request.only(['username', 'email', 'password']));
    await auth.login(user);
    return response.redirect('/');
  }

  async logout({ request, view, response, auth }){
    await auth.logout();
    return response.redirect('/');
  }

  async login({ request, view, response, auth }){
    const {email, password} = request.all();
    try {
      await auth.attempt(email, password );
      return response.redirect('/')
    } catch (error) {
      session.flash({ loginError: 'These credentials do not match.' })
      return response.redirect('/login')
    }
  }

}


module.exports = UserController
