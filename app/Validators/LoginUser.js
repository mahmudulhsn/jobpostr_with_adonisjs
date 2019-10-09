'use strict'

class LoginUser {
  get rules() {
    return {
      email: "required|email",
      password: "required"
    };
  }

  get messages() {
    return {
      required: "Hey! {{ field }} is required.",
      email: "Hey! Make Sure {{ field }} field contains an email."
    };
  }

  async fails(error) {
    this.ctx.session.withErrors(error).flashAll();

    return this.ctx.response.redirect("back");
  }
}

module.exports = LoginUser
