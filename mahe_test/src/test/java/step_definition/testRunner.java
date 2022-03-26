package step_definition;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features",
glue = {"step_definition"},
monochrome = true,
plugin = {"pretty", "html:target/HtmlReports"},
tags = "@login")
public class testRunner {

}
