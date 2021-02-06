$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("eventRegistrationFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Регистрация и плащане за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"\u003ccreditCardNum\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"\u003ccreditCardExpiration\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"\u003ccreditCardCVC\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"\u003ceventTopic\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"\u003ceventDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"\u003cmessage\u003e\" за резултата от регистрацията.",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "creditCardNum",
        "creditCardExpiration",
        "creditCardCVC",
        "eventTopic",
        "eventDate",
        "message"
      ],
      "line": 17,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;1"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "23-04-2023",
        "298",
        "Social media marketing",
        "23-02-2021",
        "Успешно се регистрирахте и заплатихте за избраното събитие!"
      ],
      "line": 18,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;2"
    },
    {
      "cells": [
        "",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "23-04-2023",
        "298",
        "Social media marketing",
        "23-02-2021",
        "Всички полета са задължителни!"
      ],
      "line": 19,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;3"
    },
    {
      "cells": [
        "",
        "",
        "janedoe@gmail.com",
        "2020202020667687",
        "23-04-2023",
        "298",
        "Social media marketing",
        "23-02-2021",
        "Всички полета са задължителни!"
      ],
      "line": 20,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;4"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "johndoe@gmail.com",
        "2020202020667687",
        "23-04-2023",
        "298",
        "Social media marketing",
        "23-02-2021",
        "Този имейл се използва от друг потребител!"
      ],
      "line": 21,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;5"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "202020202066768",
        "23-04-2023",
        "298",
        "Social media marketing",
        "23-02-2021",
        "Номерът на кредитната Ви карта е невалиден!"
      ],
      "line": 22,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;6"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "23-04-2023",
        "29833",
        "Social media marketing",
        "23-02-2021",
        "Невалиден CVC номер!"
      ],
      "line": 23,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;7"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "03-02-2021",
        "298",
        "Social media marketing",
        "23-02-2021",
        "Картата Ви е с изтекъл срок!"
      ],
      "line": 24,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;8"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "03-02-2023",
        "298",
        "Social marketing",
        "23-02-2021",
        "Няма такова събитие. Моля проверете въведените данни!"
      ],
      "line": 25,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;9"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "03-02-2023",
        "298",
        "Social media marketing",
        "22-02-2021",
        "Няма такова събитие. Моля проверете въведените данни!"
      ],
      "line": 26,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;10"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "03-02-2023",
        "298",
        "Software Engineering",
        "22-02-2021",
        "Всички места са заети!"
      ],
      "line": 27,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;11"
    },
    {
      "cells": [
        "John",
        "Doe",
        "johndoe@gmail.com",
        "2121212121667687",
        "13-12-2025",
        "138",
        "Social media marketing",
        "23-02-2021",
        "Вече сте регистрирани за това събитие!"
      ],
      "line": 28,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;12"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "23-04-2023",
        "298",
        "Skincare",
        "07-02-2021",
        "Събитието е след по-малко от 24 часа. Срокът за записване е изтекъл!"
      ],
      "line": 29,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"Jane\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"janedoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2020202020667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"23-04-2023\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"298\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Social media marketing\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"23-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Успешно се регистрирахте и заплатихте за избраното събитие!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 564578000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jane",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 4323000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 176900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janedoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 125200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020202020667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 142900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-04-2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 1393700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "298",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 148500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social media marketing",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 154400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 709800,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 14176900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно се регистрирахте и заплатихте за избраното събитие!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 8029100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"janedoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2020202020667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"23-04-2023\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"298\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Social media marketing\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"23-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Всички полета са задължителни!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 113800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 93400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 121100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janedoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 177700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020202020667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 148700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-04-2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 463600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "298",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 90700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social media marketing",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 98400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 1519300,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Всички полета са задължителни!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 95100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"janedoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2020202020667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"23-04-2023\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"298\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Social media marketing\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"23-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Всички полета са задължителни!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 221200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 2861900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 137600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janedoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 110700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020202020667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 82500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-04-2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 542000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "298",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 102900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social media marketing",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 86600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 394300,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Всички полета са задължителни!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 93900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"Jane\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"johndoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2020202020667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"23-04-2023\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"298\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Social media marketing\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"23-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Този имейл се използва от друг потребител!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 252500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jane",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 119200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 103200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johndoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 123700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020202020667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 76100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-04-2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 813300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "298",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 110600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social media marketing",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 157700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 3359800,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 25821700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Този имейл се използва от друг потребител!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 80900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"Jane\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"janedoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"202020202066768\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"23-04-2023\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"298\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Social media marketing\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"23-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Номерът на кредитната Ви карта е невалиден!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 91700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jane",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 120000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janedoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 82900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202020202066768",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 117900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-04-2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 1873900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "298",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 114300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social media marketing",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 271800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 394600,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 57500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Номерът на кредитната Ви карта е невалиден!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 121500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"Jane\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"janedoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2020202020667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"23-04-2023\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"29833\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Social media marketing\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"23-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Невалиден CVC номер!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 96500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jane",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 151200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 95700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janedoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 88400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020202020667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 79600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-04-2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 714200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29833",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 124800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social media marketing",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 91400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 967200,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалиден CVC номер!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 99900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"Jane\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"janedoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2020202020667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"03-02-2021\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"298\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Social media marketing\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"23-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Картата Ви е с изтекъл срок!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 90200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jane",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 117200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 93700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janedoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 99700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020202020667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03-02-2021",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 431800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "298",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 2124500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social media marketing",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 85600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 983300,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 60900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Картата Ви е с изтекъл срок!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 1157300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"Jane\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"janedoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2020202020667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"03-02-2023\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"298\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Social marketing\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"23-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Няма такова събитие. Моля проверете въведените данни!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 236200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jane",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 689100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 90700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janedoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 105200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020202020667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 98100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03-02-2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 440000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "298",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 114600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social marketing",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 2705800,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 3117500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Няма такова събитие. Моля проверете въведените данни!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 90700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"Jane\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"janedoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2020202020667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"03-02-2023\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"298\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Social media marketing\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"22-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Няма такова събитие. Моля проверете въведените данни!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 225600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jane",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 91900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janedoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 90500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020202020667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 82300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03-02-2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 4276200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "298",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 80300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social media marketing",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 79500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 1397200,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 792800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Няма такова събитие. Моля проверете въведените данни!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 81200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"Jane\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"janedoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2020202020667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"03-02-2023\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"298\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Software Engineering\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"22-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Всички места са заети!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 347900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jane",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 78000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 90600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janedoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 83000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020202020667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 1442900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03-02-2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 2735400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "298",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 79500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Engineering",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 86100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 1031600,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 820900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Всички места са заети!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 77500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"John\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"johndoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2121212121667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"13-12-2025\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"138\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Social media marketing\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"23-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Вече сте регистрирани за това събитие!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 209800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 92800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 78600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johndoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 113700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2121212121667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 76900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13-12-2025",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 452100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "138",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 162800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social media marketing",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 492100,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 1763800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Вече сте регистрирани за това събитие!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 93600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря страницата за записване за събитие.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име \"Jane\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда фамилия \"Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда имейл \"janedoe@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда номер на кредитна карта \"2020202020667687\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда дата на изтичане на кредитната карта \"23-04-2023\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въвежда CVC номер на кредитната карта \"298\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въвежда името на събитието \"Skincare\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Въвежда датата на събитието \"07-02-2021\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Натиска върху бутона за изпращане на данните.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Вижда съобщение \"Събитието е след по-малко от 24 часа. Срокът за записване е изтекъл!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 87600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jane",
      "offset": 13
    }
  ],
  "location": "EventRegistrationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 199700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doe",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.addLastName(String)"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "janedoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 69100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020202020667687",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-04-2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 1025400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "298",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 122900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Skincare",
      "offset": 28
    }
  ],
  "location": "EventRegistrationSteps.addEventTopic(String)"
});
formatter.result({
  "duration": 85100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07-02-2021",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 435800,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 860000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Събитието е след по-малко от 24 часа. Срокът за записване е изтекъл!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 76700,
  "status": "passed"
});
});