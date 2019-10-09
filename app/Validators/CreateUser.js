'use strict'

class CreateUser {
  get rules () {
    return {
      username: "required|email|unique:users",
      email: "required|unique:users",
      password: "required"
    };
  }

  get messages() {
    return {
      required: "Hey! {{ field }} is required.",
      unique: "OPS! {{ field }} is already exists.",
      email: "Hey! Make Sure {{ field }} field is an email."
    };
  }

  async fails(error) {
    this.ctx.session.withErrors(error).flashAll();
    return this.ctx.response.redirect('back');
  }

}

module.exports = CreateUser
