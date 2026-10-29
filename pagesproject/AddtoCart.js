class AddToCart{
    constructor(page){
        this.page = page
        this.addToCartLink = page.getByRole('link', { name: 'Add to cart' })
    }
 
    async selectProduct(product){
        await this.page.getByRole('link', { name: product }).click()
        await this.addToCartLink.waitFor({ state: 'visible' });
    }
 
    async addToCart(){
        const dialogPromise = this.page.waitForEvent('dialog')
        await this.addToCartLink.click()
        const dialog = await dialogPromise
        console.log('Message : ' + dialog.message())
        await dialog.accept() 
        
    }
}
module.exports = AddToCart