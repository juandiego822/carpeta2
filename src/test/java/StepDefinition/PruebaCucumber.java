package StepDefinition;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class PruebaCucumber {
	
	WebDriver driver;
	String resultado;
	
	@Given("^que quiero convertir dolares en pesos$")
	public void que_quiero_convertir_dolares_en_pesos() throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://themoneyconverter.com/ES/USD/COP.aspx");
		driver.manage().window().maximize();
		
	}

	@When("^convierto 100 dolares en pesos$")
	public void convierto_dolares_en_pesos() throws Throwable {
	    
		driver.findElement(By.id("ta")).sendKeys("100");
		
	}

	
	@Then("^el resultado es 300000 pesos$")
	public void el_resultado_el_pesos() throws Throwable {
		resultado = driver.findElement(By.id("res1")).getText();
		System.out.println(resultado);
		//Assert.assertEquals("COP/USD = 2.865,2", driver.findElement(By.id("res1")).getText());
		assertEquals("100,00 USD = 293.717,06 COP", resultado);
		driver.close();
			
	}

	@When("^convierto \"([^\"]*)\" dolares en pesos$")
	public void convierto_dolares_en_pesos(String arg1) throws Throwable {
		
		driver.findElement(By.id("ta")).sendKeys(arg1);
		
	}

	@Then("^el resultado es \"([^\"]*)\"$")
	public void el_resultado_es(String arg1) throws Throwable {
	    
		resultado = driver.findElement(By.id("res1")).getText();
		System.out.println(resultado);
		//Assert.assertEquals("COP/USD = 2.865,2", driver.findElement(By.id("res1")).getText());
		assertEquals(arg1, resultado);
		driver.close();
		
	}

}
