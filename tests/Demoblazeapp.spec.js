const {test,expect} = require("@playwright/test");
test('Click Signup in Signup Dialog box', async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByRole('link', { name: 'Sign up' }).click()
    await page.locator("#sign-username").fill('Jinu2121')
    await page.locator("#sign-password").fill('Jinu@123')
    page.on('dialog',async dialog=>{ 
    //await page.waitForTimeout(4000)
    console.log('Message : ' +dialog.message());
    await dialog.accept()
    })
    await page.getByRole('button',{name : 'Sign up'}).click()
  

})

test('Click Close in Signup Dialog box', async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByRole('link', { name: 'Sign up' }).click()
    await page.locator("#sign-username").fill('Jinu')
    await page.locator("#sign-password").fill('Jinu@123')
    await page.getByRole('button', { name: 'Close' }).first().click()
  
})

test('Verify login with valid credentials',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByRole('link', { name: 'Log in' }).click()
    await page.locator("#loginusername").fill('Jinu')
    await page.locator("#loginpassword").fill('Jinu@123')
    await page.getByRole('button',{name : 'Log in'}).click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome Jinu')
})

test('Verify login with invalid username and valid password',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByRole('link', { name: 'Log in' }).click()
    await page.locator("#loginusername").fill('Jin')
    await page.locator("#loginpassword").fill('Jinu@123')
    page.on('dialog',async dialog=>{ 
        console.log('Error message : ' +dialog.message());
        await page.waitForTimeout(3000)
        await dialog.accept()
    })
    await page.getByRole('button',{name : 'Log in'}).click()
  
})

test('Verify login with valid username and invalid password',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByRole('link', { name: 'Log in' }).click()
    await page.locator("#loginusername").fill('Jinu')
    await page.locator("#loginpassword").fill('#@123')
    page.on('dialog',async dialog=>{ 
    console.log('Error message : ' +dialog.message()); 
    await page.waitForTimeout(3000)
    await dialog.accept()
    })
    await page.getByRole('button',{name : 'Log in'}).click()
    await page.locator('#logInModal').getByRole('button', { name: 'Close', exact: true }).last().click();
  
})


test('Verify login with invalid username and invalid password',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByRole('link', { name: 'Log in' }).click()
    await page.locator("#loginusername").fill('inu')
    await page.locator("#loginpassword").fill('#@123')
    page.on('dialog',async dialog=>{ 
    console.log('Error message : ' +dialog.message()); 
    await page.waitForTimeout(3000)
    await dialog.accept()
    })
    await page.getByRole('button',{name : 'Log in'}).click()
    await page.locator('#logInModal').getByRole('button', { name: 'Close', exact: true }).last().click();
 
})

test.only('Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByRole('link', { name: 'Log in' }).click()
    await page.locator("#loginusername").fill('Jinu')
    await page.locator("#loginpassword").fill('Jinu@123')
    await page.getByRole('button',{name : 'Log in'}).click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome Jinu');
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    page.on('dialog',async dialog=>{ 
    console.log('Message : ' +dialog.message()); 
    await page.waitForTimeout(3000)
    await dialog.accept()
    })
    await page.getByRole('link', { name: 'Add to cart' }).click();
})

test('Select a product under Phones and purchase it ',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByRole('link', { name: 'Log in' }).click()
    await page.locator("#loginusername").fill('Jinu')
    await page.locator("#loginpassword").fill('Jinu@123')
    await page.getByRole('button',{name : 'Log in'}).click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome Jinu');
    await page.getByText('Phones').click();
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    page.on('dialog',async dialog=>{ 
    console.log('Message : ' +dialog.message()); 
    await page.waitForTimeout(3000)
    await dialog.accept()
    })
    await page.getByRole('link', { name: 'Add to cart' }).click()
    await page.getByRole('link', { name: 'Cart',exact: true }).click()
    await expect(page.locator('#tbodyid tr').first()).toBeVisible();
    page.on('dialog',async dialog=>{ 
    console.log('Message : ' +dialog.message()); 
    await page.waitForTimeout(3000)
    await dialog.accept()
    })
    await page.getByRole('button',{name : 'Place Order'}).click()
    await page.locator("#name").fill('Jinu Ann John')
    await page.locator("#country").fill('Australia')
    await page.locator("#city").fill('Melbourne')
    await page.locator("#card").fill('000 1111')
    await page.locator("#month").fill('October')
    await page.locator("#year").fill('2026')
    await page.getByRole('button',{name : 'Purchase'}).click()
    await expect(page.getByText('Thank you for your purchase!')).toBeVisible()
    await page.pause()
})

test('Select a product under Monitors and purchase it ',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByRole('link', { name: 'Log in' }).click()
    await page.locator("#loginusername").fill('Jinu')
    await page.locator("#loginpassword").fill('Jinu@123')
    await page.getByRole('button',{name : 'Log in'}).click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome Jinu');
    await page.getByText('Monitors', { exact: true }).click();
    await page.getByRole('link', { name: 'ASUS Full HD' }).click();
    page.on('dialog',async dialog=>{ 
    console.log('Message : ' +dialog.message()); 
    await page.waitForTimeout(3000)
    await dialog.accept()
    })
    await page.getByRole('link', { name: 'Add to cart' }).click()
    await page.getByRole('link', { name: 'Cart',exact: true }).click()
    await expect(page.locator('#tbodyid tr').first()).toBeVisible();
    page.on('dialog',async dialog=>{ 
    console.log('Message : ' +dialog.message()); 
    await page.waitForTimeout(3000)
    await dialog.accept()
    })
    await page.getByRole('button',{name : 'Place Order'}).click()
    await page.locator("#name").fill('Jinu Ann John')
    await page.locator("#country").fill('Australia')
    await page.locator("#city").fill('Melbourne')
    await page.locator("#card").fill('000 1111')
    await page.locator("#month").fill('October')
    await page.locator("#year").fill('2026')
    await page.getByRole('button',{name : 'Purchase'}).click()
    await expect(page.getByText('Thank you for your purchase!')).toBeVisible()
   
})

test('Logout',async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.getByRole('link', { name: 'Log in' }).click()
    await page.locator("#loginusername").fill('Jinu')
    await page.locator("#loginpassword").fill('Jinu@123')
    await page.getByRole('button',{name : 'Log in'}).click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome Jinu');
    await page.locator("#logout2").click()
  
})


