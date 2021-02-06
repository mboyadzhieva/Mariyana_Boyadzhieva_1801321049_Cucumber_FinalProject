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
        "Срокът за записване е изтекъл!"
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
  "duration": 518662300,
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
  "duration": 5840600,
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
  "duration": 138000,
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
  "duration": 129900,
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
  "duration": 176100,
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
  "duration": 573800,
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
  "duration": 151100,
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
  "duration": 112100,
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
  "duration": 984800,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 9876000,
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
  "duration": 26735700,
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
  "duration": 238400,
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
  "duration": 133000,
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
  "duration": 139300,
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
  "duration": 599200,
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
  "duration": 90800,
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
  "duration": 402700,
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
  "duration": 72700,
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
  "duration": 1311300,
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
  "duration": 499000,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 54400,
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
  "duration": 98000,
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
  "duration": 634100,
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
  "duration": 358100,
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
  "duration": 99800,
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
  "duration": 91900,
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
  "duration": 104400,
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
  "duration": 1808900,
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
  "duration": 89400,
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
  "duration": 88700,
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
  "duration": 396300,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 39600,
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
  "duration": 88700,
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
  "duration": 233600,
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
  "duration": 83400,
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
  "duration": 89900,
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
  "duration": 123300,
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
  "duration": 99500,
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
  "duration": 680400,
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
  "duration": 86200,
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
  "duration": 96200,
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
  "duration": 4636700,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 14636400,
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
  "duration": 95900,
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
  "duration": 524000,
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
  "duration": 134000,
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
  "duration": 116100,
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
  "duration": 94500,
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
  "duration": 128000,
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
  "duration": 425900,
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
  "duration": 104900,
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
  "duration": 167100,
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
  "duration": 1651300,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 98000,
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
  "duration": 89100,
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
  "duration": 245300,
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
  "duration": 102000,
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
  "duration": 86700,
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
  "duration": 1745400,
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
  "duration": 86000,
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
  "duration": 915900,
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
  "duration": 99300,
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
  "duration": 87300,
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
  "duration": 468500,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 46800,
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
  "duration": 97000,
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
  "duration": 226400,
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
  "duration": 154100,
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
  "duration": 85700,
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
  "duration": 86100,
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
  "duration": 104900,
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
  "duration": 495100,
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
  "duration": 1833900,
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
  "duration": 103600,
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
  "duration": 649400,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 67100,
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
  "duration": 1342700,
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
  "duration": 100300,
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
  "duration": 211300,
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
  "duration": 84700,
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
  "duration": 87300,
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
  "duration": 93300,
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
  "duration": 380300,
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
  "duration": 89900,
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
  "duration": 94200,
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
  "duration": 1035400,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 1293700,
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
  "duration": 75700,
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
  "duration": 237500,
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
  "duration": 84000,
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
  "duration": 113300,
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
  "duration": 106600,
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
  "duration": 127800,
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
  "duration": 8239300,
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
  "duration": 89100,
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
  "duration": 81900,
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
  "duration": 929800,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 3932100,
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
  "duration": 87200,
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
  "duration": 103200,
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
  "duration": 82600,
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
  "duration": 114000,
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
  "duration": 83500,
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
  "duration": 84500,
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
  "duration": 1643900,
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
  "duration": 110300,
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
  "duration": 211100,
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
  "duration": 10907000,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 8733700,
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
  "duration": 90000,
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
  "duration": 215600,
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
  "duration": 219900,
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
  "duration": 141000,
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
  "duration": 135600,
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
  "duration": 134200,
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
  "duration": 423500,
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
  "duration": 1540800,
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
  "duration": 91600,
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
  "duration": 401500,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 2461800,
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
  "duration": 100200,
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
  "name": "Вижда съобщение \"Срокът за записване е изтекъл!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 97700,
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
  "duration": 1858500,
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
  "duration": 96400,
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
  "duration": 70400,
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
  "duration": 80400,
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
  "duration": 2795800,
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
  "duration": 127800,
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
  "duration": 79300,
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
  "duration": 438100,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 1250800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Срокът за записване е изтекъл!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 83600,
  "status": "passed"
});
});