package step_definition;

import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;
import io.cucumber.java.en.*;

public class login {
	
	WebDriver driver = null;
	
	@Given("User go to the stockbit login page")
	public void user_go_to_the_stockbit_login_page() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver");
		driver = new ChromeDriver();
		driver.get("https://stockbit.com/#/login");
	}

	@And("User filling in the incorrect username")
	public void user_filling_in_the_incorrect_username() {
	    driver.findElement(By.name("username")).sendKeys("salahemail@salah.aja");
	}

	@And("User filling in the incorrect password")
	public void user_filling_in_the_incorrect_password() {
	    driver.findElement(By.name("password")).sendKeys("passwordsalah");
	}
	
	@And("User click login")
	public void user_click_login() {
	    driver.findElement(By.xpath("//input[@class='loginlogin']")).click();
	}

	@Then("Error message appear")
	public void error_message_appear() {
		String errorExpect = "Username atau password salah. Mohon coba lagi.";
		String errorMessage = driver.findElement(By.xpath("//div[text()='Username atau password salah. Mohon coba lagi.']")).getText();
		Assert.assertEquals(errorExpect, errorMessage);
		driver.close();
	}

}
