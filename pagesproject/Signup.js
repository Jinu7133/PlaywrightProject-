class Signup{
    constructor(page){
        this.page = page
        this.signupLink = page.getByRole('link',{name: 'Sign up'})
        this.username = page.locator("#sign-username")
        this.password = page.locator("#sign-password")
        this.signupbtn = page.getByRole('button',{name: 'Sign up'})
        this.closebtn = page.getByRole('button', { name: 'Close' })
    }
    async goto(){
        await this.page.goto('https://www.demoblaze.com/')
}

    async Signup(uname, pass){

         await this.signupLink.click()
         await this.username.fill(uname)
         await this.password.fill(pass)
         const dialogPromise = this.page.waitForEvent('dialog');
         await this.signupbtn.click();
         const dialog = await dialogPromise;
         const message = dialog.message();
         await dialog.accept();
         return message;
        }

    async Close(uname,pass){
        await this.signupLink.click()
        await this.username.fill(uname)
        await this.password.fill(pass)
        await this.closebtn.first().click()
    }
}
module.exports = Signup