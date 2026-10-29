const AddToCart = require("./AddtoCart")
const Login = require("./Login")
const Logout = require("./Logout")
const PurchaseMonitor = require("./PurchaseMobile")
const PurchasePhone = require("./PurchasePhone")
const Signup = require("./Signup")



class POManager{
    constructor(page){
    this.page =page
    this.signup = new Signup(page)
    this.login = new Login(page)
    this.addtocart = new AddToCart(page)
    this.purchasephone = new PurchasePhone(page)
    this.purchasemonitor = new PurchaseMonitor(page)
    this.logout = new Logout(page)
    }
    getSignup(){
        return this.signup
    }
     getLogin(){
        return this.login
    }
     getAddToCart(){
        return this.addtocart
    }
    getPurchasePhone(){
        return this.purchasephone
    }
    getPurchaseMonitor(){
        return this.purchasemonitor
    }
     getLogout(){
        return this.logout
    }
}
module.exports = POManager