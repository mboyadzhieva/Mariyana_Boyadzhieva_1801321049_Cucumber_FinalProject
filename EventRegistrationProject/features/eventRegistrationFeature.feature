Feature: Регистрация и плащане за събитие

  Scenario Outline: Регистрация за събитие
    Given Потребителят отваря страницата за записване за събитие.
    When Въвежда име "<firstName>"
    And Въвежда фамилия "<lastName>"
    And Въвежда имейл "<email>"
    And Въвежда номер на кредитна карта "<creditCardNum>"
    And Въвежда дата на изтичане на кредитната карта "<creditCardExpiration>"
    And Въвежда CVC номер на кредитната карта "<creditCardCVC>"
    And Въвежда името на събитието "<eventTopic>"
    And Въвежда датата на събитието "<eventDate>"
    And Натиска върху бутона за изпращане на данните.
    Then Вижда съобщение "<message>" за резултата от регистрацията.

    Examples:
      | firstName | lastName | email | creditCardNum | creditCardExpiration | creditCardCVC  | eventTopic | eventDate | message |
      | Jane | Doe | janedoe@gmail.com | 2020202020667687 | 23-04-2023 | 298 | Social media marketing | 23-02-2021 | Успешно се регистрирахте и заплатихте за избраното събитие! |
      | | Doe | janedoe@gmail.com | 2020202020667687 | 23-04-2023 | 298 | Social media marketing | 23-02-2021 | Всички полета са задължителни! |
      | | | janedoe@gmail.com | 2020202020667687 | 23-04-2023 | 298 | Social media marketing | 23-02-2021 | Всички полета са задължителни! |
      | Jane | Doe | johndoe@gmail.com | 2020202020667687 | 23-04-2023 | 298 | Social media marketing | 23-02-2021 | Този имейл се използва от друг потребител! |
      | Jane | Doe | janedoe@gmail.com | 202020202066768 | 23-04-2023 | 298 | Social media marketing | 23-02-2021 | Номерът на кредитната Ви карта е невалиден! |
      | Jane | Doe | janedoe@gmail.com | 2020202020667687 | 23-04-2023 | 29833 | Social media marketing | 23-02-2021 | Невалиден CVC номер! |
      | Jane | Doe | janedoe@gmail.com | 2020202020667687 | 03-02-2021 | 298 | Social media marketing | 23-02-2021 | Картата Ви е с изтекъл срок! |
      | Jane | Doe | janedoe@gmail.com | 2020202020667687 | 03-02-2023 | 298 | Social marketing | 23-02-2021 | Няма такова събитие. Моля проверете въведените данни! |
      | Jane | Doe | janedoe@gmail.com | 2020202020667687 | 03-02-2023 | 298 | Social media marketing | 22-02-2021 | Няма такова събитие. Моля проверете въведените данни! |
      | Jane | Doe | janedoe@gmail.com | 2020202020667687 | 03-02-2023 | 298 | Software Engineering | 22-02-2021 | Всички места са заети! |
      | John | Doe | johndoe@gmail.com | 2121212121667687 | 13-12-2025 | 138 | Social media marketing | 23-02-2021 | Вече сте регистрирани за това събитие! |
      | Jane | Doe | janedoe@gmail.com | 2020202020667687 | 23-04-2023 | 298 | Skincare | 07-02-2021 | Събитието е след по-малко от 24 часа. Срокът за записване е изтекъл! |