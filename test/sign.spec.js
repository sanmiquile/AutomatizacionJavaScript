const {Builder, By} = require("selenium-webdriver");


describe ('Sign', ()=>{
   it ("Login with credentials", async() => {
       let driver = new Builder().forBrowser('chrome').build();
       await driver.get ('http://189.50.209.188/');


       await driver.findElement(By.name("nombreUsuario")).sendKeys('sami')
       await driver.findElement(By.id("clave")).sendKeys('1234')
       await  driver.findElement(By.xpath("//span[@class='ui-button-text ui-c' and text()='Ingresar']")).click();


       await driver.sleep (5000)
       await  driver.quit();
   });
});
