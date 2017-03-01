#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Conversor de monedas universal
  I want to use this template for my feature file

  @tag1
  Scenario: convertir dolares a pesos
    Given que quiero convertir dolares en pesos
    When convierto 100 dolares en pesos
    Then el resultado es 300000 pesos

  @tag2
  Scenario: convertir dolares a pesos con parametros
    Given que quiero convertir dolares en pesos
    When convierto "100" dolares en pesos
    Then el resultado es "100,00 USD = 293.717,06 COP"

  @tag5
  Scenario Outline: persona con sobrepeso
    Given que estoy en la calculadora de Indice de Masa Corporal
    When Ingreso los valores de peso y altura de una persona con sobrepeso
    Then la calculadora indica que está en sobrepeso
