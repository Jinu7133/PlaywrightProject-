class PurchasePhone{
    constructor(page){
        this.page = page
        this.addToCartLink = page.getByRole('link', { name: 'Add to cart' })
        this.cartLink = page.getByRole('link', { name: 'Cart', exact: true })
        this.firstCartRow = page.locator('#tbodyid tr').first()
        this.placeOrderbtn = page.getByRole('button', { name: 'Place Order' })
        this.name = page.locator("#name")
        this.country = page.locator("#country")
        this.city = page.locator("#city")
        this.card = page.locator("#card")
        this.month = page.locator("#month")
        this.year = page.locator("#year")
        this.purchasebtn = page.getByRole('button', { name: 'Purchase' })
        this.thankYouText = page.getByText('Thank you for your purchase!')
    }
 
    async selectCategory(category){
        await this.page.getByText(category, { exact: true }).click()
    }
 
    async selectProduct(product){
        await this.page.getByRole('link', { name: product }).click()
    }
 
    async addToCart(){
        const dialogPromise = this.page.waitForEvent('dialog')
        await this.addToCartLink.click()
        const dialog = await dialogPromise
        console.log('Message : ' + dialog.message())
        await dialog.accept()
    }
 
    async openCart(){
        await this.cartLink.click()
    }
 
    async placeOrder(orderName, orderCountry, orderCity, orderCard, orderMonth, orderYear){
        await this.placeOrderbtn.click()
        await this.name.fill(orderName)
        await this.country.fill(orderCountry)
        await this.city.fill(orderCity)
        await this.card.fill(orderCard)
        await this.month.fill(orderMonth)
        await this.year.fill(orderYear)
        await this.purchasebtn.click()
    }
}
module.exports = PurchasePhone