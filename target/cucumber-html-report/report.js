$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("convertirMonedas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Conversor de monedas universal",
  "description": "I want to use this template for my feature file",
  "id": "conversor-de-monedas-universal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "convertir dolares a pesos",
  "description": "",
  "id": "conversor-de-monedas-universal;convertir-dolares-a-pesos",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "que quiero convertir dolares en pesos",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "convierto 100 dolares en pesos",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "el resultado es 300000 pesos",
  "keyword": "Then "
});
formatter.match({
  "location": "PruebaCucumber.que_quiero_convertir_dolares_en_pesos()"
});
formatter.result({
  "duration": 11254073061,
  "status": "passed"
});
formatter.match({
  "location": "PruebaCucumber.convierto_dolares_en_pesos()"
});
formatter.result({
  "duration": 72426817,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"ta\"}\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 63 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027DESKTOP-UKTI5BI\u0027, ip: \u0027192.168.146.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\JUANDI~1\\AppData\\Local\\Temp\\scoped_dir8604_1983}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 81d2ebec1e8fd6f7d19ffbe7ae424245\n*** Element info: {Using\u003did, value\u003dta}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat StepDefinition.PruebaCucumber.convierto_dolares_en_pesos(PruebaCucumber.java:32)\r\n\tat ✽.When convierto 100 dolares en pesos(convertirMonedas.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PruebaCucumber.el_resultado_el_pesos()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "convertir dolares a pesos con parametros",
  "description": "",
  "id": "conversor-de-monedas-universal;convertir-dolares-a-pesos-con-parametros",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "que quiero convertir dolares en pesos",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "convierto \"100\" dolares en pesos",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "el resultado es \"100,00 USD \u003d 293.717,06 COP\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PruebaCucumber.que_quiero_convertir_dolares_en_pesos()"
});
formatter.result({
  "duration": 8685609903,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom chrome not reachable\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3.04 seconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027DESKTOP-UKTI5BI\u0027, ip: \u0027192.168.146.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\JUANDI~1\\AppData\\Local\\Temp\\scoped_dir11000_13147}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 44c355b5afdbf5278a574e79be337648\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:882)\r\n\tat StepDefinition.PruebaCucumber.que_quiero_convertir_dolares_en_pesos(PruebaCucumber.java:25)\r\n\tat ✽.Given que quiero convertir dolares en pesos(convertirMonedas.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "PruebaCucumber.convierto_dolares_en_pesos(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100,00 USD \u003d 293.717,06 COP",
      "offset": 17
    }
  ],
  "location": "PruebaCucumber.el_resultado_es(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "persona con sobrepeso",
  "description": "",
  "id": "conversor-de-monedas-universal;persona-con-sobrepeso",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "que estoy en la calculadora de Indice de Masa Corporal",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Ingreso los valores de peso y altura de una persona con sobrepeso",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "la calculadora indica que est� en sobrepeso",
  "keyword": "Then "
});
});