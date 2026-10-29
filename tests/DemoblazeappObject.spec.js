const { expect,test } = require("@playwright/test")
const Signup = require("../pagesproject/Signup")
const Login = require("../pagesproject/Login")
const AddToCart = require("../pagesproject/AddToCart")
const PurchasePhone = require("../pagesproject/PurchasePhone")
const PurchaseMonitor = require("../pagesproject/PurchaseMonitor")
const Logout = require("../pagesproject/Logout")
const data = require("../Utilsproject/testData.json")
 
test('@web Click Signup in Signup Dialog box', async({page})=>{
   const username = data.signup.username + Date.now()  
   const password = data.signup.password
   const signup = new Signup(page)
   await signup.goto()
   const message = await signup.Signup(username, password)
   console.log('Message : ' + message)
   expect(message).toContain('Sign up successful')  
})

test('@web Click Close in Signup Dialog box', async({page})=>{
    const username = data.signup.username 
    const password = data.signup.password 
    const signup = new Signup(page)
    await signup.goto()    
    await signup.Close(username,password)
})

test('@web Verify login with valid credentials',async({page})=>{
    const login = new Login(page)
    const username = data.login.valid.username
    const password = data.login.valid.password
    await login.goto()
    await login.Login(username,password)
    await expect(login.welcomeText).toHaveText('Welcome Jinu')
})
 
test('@web Verify login with invalid username and valid password',async({page})=>{
    const login = new Login(page)
    const username = data.login.invalidUsername.username
    const password = data.login.invalidUsername.password
    await login.goto()
    const message = await login.LoginAlerts(username,password)
    console.log('Error message : ' + message)
    expect(message).toContain('User does not exist.')
})
 
test('@web Verify login with valid username and invalid password',async({page})=>{ //change msg
    const login = new Login(page)
    const username = data.login.invalidPassword.username
    const password = data.login.invalidPassword.password
    await login.goto()
    const message = await login.LoginAlerts(username,password)
    console.log('Error message : ' + message)
    expect(message).toContain('Wrong password')
    await login.CloseModal()
})
 
test('@web Verify login with invalid username and invalid password',async({page})=>{
    const login = new Login(page)
    const username = data.login.invalidBoth.username
    const password = data.login.invalidBoth.password
    await login.goto()
    const message = await login.LoginAlerts(username,password)
    console.log('Error message : ' + message)
    expect(message).toContain('User does not exist.')
    await login.CloseModal()
})
 
test('@web Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup',async({page})=>{
    const login = new Login(page)
    const cart = new AddToCart(page)
    const username = data.login.valid.username
    const password = data.login.valid.password
    const product = data.products.phone.product
    await login.goto()
    await login.Login(username,password)
    await expect(login.welcomeText).toHaveText('Welcome Jinu')
    await cart.selectProduct(product)
    await cart.addToCart()

})
 
test('@web Select a product under Phones and purchase it ',async({page})=>{
    const login = new Login(page)
    const purchase = new PurchasePhone(page)
    const username = data.login.valid.username
    const password = data.login.valid.password
    const category = data.products.phone.category
    const product = data.products.phone.product
    const orderName = data.order.name
    const orderCountry = data.order.country
    const orderCity = data.order.city
    const orderCard = data.order.card
    const orderMonth = data.order.month
    const orderYear = data.order.year
    await login.goto()
    await login.Login(username,password)
    await expect(login.welcomeText).toHaveText('Welcome Jinu')
    await purchase.selectCategory(category)
    await purchase.selectProduct(product)
    await purchase.addToCart()
    await purchase.openCart()
    await expect(purchase.firstCartRow).toBeVisible()
    await purchase.placeOrder(orderName,orderCountry,orderCity,orderCard,orderMonth,orderYear)
    await expect(purchase.thankYouText).toBeVisible()
})
 
test('@web Select a product under Monitors and purchase it ',async({page})=>{
    const login = new Login(page)
    const purchase = new PurchaseMonitor(page)
    const username = data.login.valid.username
    const password = data.login.valid.password
    const category = data.products.monitor.category
    const product = data.products.monitor.product
    const orderName = data.order.name
    const orderCountry = data.order.country
    const orderCity = data.order.city
    const orderCard = data.order.card
    const orderMonth = data.order.month
    const orderYear = data.order.year
    await login.goto()
    await login.Login(username,password)
    await expect(login.welcomeText).toHaveText('Welcome Jinu')
    await purchase.selectCategory(category)
    await purchase.selectProduct(product)
    await purchase.addToCart()
    await purchase.openCart()
    await expect(purchase.firstCartRow).toBeVisible()
    await purchase.placeOrder(orderName,orderCountry,orderCity,orderCard,orderMonth,orderYear)
    await expect(purchase.thankYouText).toBeVisible()
}) 
test('@web Logout',async({page})=>{
    const login = new Login(page)
    const logout = new Logout(page)
    const username = data.login.valid.username
    const password = data.login.valid.password
    await login.goto()
    await login.Login(username,password)
    await expect(login.welcomeText).toHaveText('Welcome Jinu')
    await logout.logout()
    await expect(logout.loginLink).toBeVisible()
})
