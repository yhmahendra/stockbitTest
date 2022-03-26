package step_definition;

import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;
import io.cucumber.java.en.*;

public class stockbitHome {
	
	WebDriver driver = null;
	
	@Given("User go to the stockbit home page")
	public void user_go_to_the_stockbit_home_page() {
	    System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver");
		driver = new ChromeDriver();
		driver.get("https://stockbit.com/");
	}

	@And("User click the PlayStore button")
	public void user_click_the_playstore_button() {
		driver.findElement(By.xpath("//div[@class='home-badges depan']/a[@href='https://play.google.com/store/apps/details?id=com.stockbit.android&hl=en']")).click();
		driver.close();
	}
	
	@And("User click the sign up on the nav bar")
	public void user_click_the_sign_up_on_the_nav_bar() {
		driver.findElement(By.xpath("//div[@class='menuchild-parent desktop']//a[text()='Sign Up']")).click();
	}

	@Then("User validate the register page")
	public void user_validate_the_register_page() {
		String newBaseURL = "https://stockbit.com/#/register";
		String currentURL = driver.getCurrentUrl();
		Assert.assertEquals(newBaseURL, currentURL);
		driver.close();
	}

}
