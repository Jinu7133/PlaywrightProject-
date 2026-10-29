class Login{
    constructor(page){
        this.page = page
        this.loginLink = page.getByRole('link', { name: 'Log in' })
        this.username = page.locator("#loginusername")
        this.password = page.locator("#loginpassword")
        this.loginbtn = page.getByRole('button',{name : 'Log in'})
        this.welcomeText = page.locator('#nameofuser')
        this.closebtn = page.locator('#logInModal').getByRole('button', { name: 'Close', exact: true }).last()
    }
async goto() {
    await this.page.goto('https://www.demoblaze.com/');
  }
   async Login(username,password){
    await this.loginLink.click()
    await this.username.fill(username)
    await this.password.fill(password)
    await this.loginbtn.click()
   }

   async LoginAlerts(username,password){
    await this.loginLink.click()
    await this.username.fill(username)
    await this.password.fill(password)
    const dialogPromise = this.page.waitForEvent('dialog')
    await this.loginbtn.click()
    const dialog = await dialogPromise
    const message = dialog.message()
    await dialog.accept()
    return message
   }
   async CloseModal(){
        await this.closebtn.click()
    }
}
module.exports = Login