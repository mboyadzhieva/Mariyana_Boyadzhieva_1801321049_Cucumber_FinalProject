package uni.pu.fmi;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features", plugin = {"pretty", "html:target/cucumberReport"}, monochrome = true)
public class CucumberStarter {
}
