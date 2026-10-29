class Logout{
    constructor(page){
        this.page =page
        this.logoutLink = page.locator('#logout2')
        this.loginLink = page.getByRole('link', { name: 'Log in' })
    }
 async logout() {
    await this.logoutLink.click();
  }    
}
module.exports = Logout
