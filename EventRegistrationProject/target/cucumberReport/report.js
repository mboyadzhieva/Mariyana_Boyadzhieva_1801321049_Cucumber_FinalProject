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
        "",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "23-04-2023",
        "298",
        "Social media marketing",
        "23-02-2021 17:30",
        "Всички полета са задължителни!"
      ],
      "line": 18,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;2"
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
        "23-02-2021 17:30",
        "Всички полета са задължителни!"
      ],
      "line": 19,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;3"
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
        "9999",
        "Датата на събитието не е в правилния формат!"
      ],
      "line": 20,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;4"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "23/04/2023",
        "298",
        "Social media marketing",
        "23-02-2021 17:30",
        "Датата на изтичане на валидността на кредитната карта не е в правилния формат!"
      ],
      "line": 21,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;5"
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
        "23-02-2021 17:30",
        "Няма такова събитие. Моля проверете въведените данни!"
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
        "03-02-2023",
        "298",
        "Social media marketing",
        "22-02-2021 14:30",
        "Няма такова събитие. Моля проверете въведените данни!"
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
        "03-02-2023",
        "298",
        "Software Engineering",
        "22-02-2021 12:30",
        "Всички места са заети!"
      ],
      "line": 24,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;8"
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
        "23-02-2021 17:30",
        "Вече сте регистрирани за това събитие!"
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
        "23-04-2023",
        "298",
        "Skincare",
        "09-02-2021 08:00",
        "Срокът за записване е изтекъл!"
      ],
      "line": 26,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;10"
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
        "23-02-2021 17:30",
        "Този имейл се използва от друг потребител!"
      ],
      "line": 27,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;11"
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
        "23-02-2021 17:30",
        "Номерът на кредитната Ви карта е невалиден!"
      ],
      "line": 28,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;12"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "20202020206676873921",
        "23-04-2023",
        "298",
        "Social media marketing",
        "23-02-2021 17:30",
        "Номерът на кредитната Ви карта е невалиден!"
      ],
      "line": 29,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;13"
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
        "23-02-2021 17:30",
        "Невалиден CVC номер!"
      ],
      "line": 30,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;14"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        "janedoe@gmail.com",
        "2020202020667687",
        "23-04-2023",
        "29",
        "Social media marketing",
        "23-02-2021 17:30",
        "Невалиден CVC номер!"
      ],
      "line": 31,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;15"
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
        "23-02-2021 17:30",
        "Картата Ви е с изтекъл срок!"
      ],
      "line": 32,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;16"
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
        "23-02-2021 17:30",
        "Успешно се регистрирахте и заплатихте за избраното събитие!"
      ],
      "line": 33,
      "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;17"
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 455614000,
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
  "duration": 6515600,
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
  "duration": 125300,
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
  "duration": 1308400,
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
  "duration": 112800,
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
  "duration": 125500,
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
  "duration": 580900,
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
  "duration": 108500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 130800,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 143300,
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
  "duration": 5623900,
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 108200,
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
  "duration": 115700,
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
  "duration": 942000,
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
  "duration": 99000,
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
  "duration": 160800,
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
  "duration": 91200,
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
  "duration": 100500,
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
  "duration": 106600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 85300,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 35700,
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
  "duration": 111400,
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
  "name": "Въвежда датата на събитието \"9999\"",
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
  "name": "Вижда съобщение \"Датата на събитието не е в правилния формат!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 239600,
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
  "duration": 130000,
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
  "duration": 94500,
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
  "duration": 111500,
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
  "duration": 399700,
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
  "duration": 104600,
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
  "duration": 119300,
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
  "duration": 101200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 87800,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 5084400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Датата на събитието не е в правилния формат!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 95800,
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
  "name": "Въвежда дата на изтичане на кредитната карта \"23/04/2023\"",
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "name": "Вижда съобщение \"Датата на изтичане на валидността на кредитната карта не е в правилния формат!\" за резултата от регистрацията.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EventRegistrationSteps.openHomeScreen()"
});
formatter.result({
  "duration": 99800,
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
  "duration": 93700,
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
  "duration": 108700,
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
  "duration": 104400,
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
  "duration": 91100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23/04/2023",
      "offset": 46
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardExpiration(String)"
});
formatter.result({
  "duration": 222800,
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
  "duration": 81700,
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
  "duration": 127100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 87900,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 2264600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Датата на изтичане на валидността на кредитната карта не е в правилния формат!",
      "offset": 17
    }
  ],
  "location": "EventRegistrationSteps.getMessage(String)"
});
formatter.result({
  "duration": 1400000,
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 99100,
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
  "duration": 100700,
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
  "duration": 87500,
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
  "duration": 89000,
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
  "duration": 87500,
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
  "duration": 111300,
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
  "duration": 104400,
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
  "duration": 2234800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 104900,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 27848900,
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
  "duration": 87600,
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
  "name": "Въвежда датата на събитието \"22-02-2021 14:30\"",
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
  "duration": 259300,
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
  "duration": 190700,
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
  "duration": 434500,
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
  "duration": 98500,
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
  "duration": 89400,
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
  "duration": 99600,
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
  "duration": 122800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22-02-2021 14:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 111800,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 4868400,
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
  "duration": 109100,
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
  "name": "Въвежда датата на събитието \"22-02-2021 12:30\"",
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
  "duration": 89800,
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
  "duration": 98700,
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
  "duration": 106100,
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
  "duration": 102600,
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
  "duration": 103300,
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
  "duration": 83400,
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
  "duration": 1747000,
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
  "duration": 88400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22-02-2021 12:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 117400,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 2589500,
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
  "duration": 1661200,
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 2236800,
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
  "duration": 195500,
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
      "val": "johndoe@gmail.com",
      "offset": 15
    }
  ],
  "location": "EventRegistrationSteps.addEmail(String)"
});
formatter.result({
  "duration": 88700,
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
  "duration": 82800,
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
  "duration": 88300,
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
  "duration": 94600,
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
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 81700,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 10790900,
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
  "duration": 100300,
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
  "name": "Въвежда датата на събитието \"09-02-2021 08:00\"",
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
  "duration": 108800,
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
  "duration": 86200,
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
  "duration": 83200,
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
  "duration": 80600,
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
  "duration": 93100,
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
  "duration": 79800,
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
  "duration": 93400,
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
  "duration": 88700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09-02-2021 08:00",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 78400,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 10131600,
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
  "duration": 1412700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Срокът за записване е изтекъл]!\u003e but was:\u003c[Успешно се регистрирахте и заплатихте за избраното събитие]!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uni.pu.fmi.EventRegistrationSteps.getMessage(EventRegistrationSteps.java:66)\r\n\tat ✽.Then Вижда съобщение \"Срокът за записване е изтекъл!\" за резултата от регистрацията.(eventRegistrationFeature.feature:14)\r\n",
  "status": "failed"
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 219600,
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
  "duration": 86200,
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
  "duration": 90200,
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
  "duration": 82700,
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
  "duration": 93000,
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
  "duration": 167600,
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
  "duration": 146100,
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
  "duration": 86100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 94200,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 2300100,
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
  "duration": 111200,
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 98700,
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
  "duration": 102200,
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
  "duration": 98100,
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
  "duration": 80500,
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
  "duration": 77000,
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
  "duration": 172000,
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
  "duration": 82800,
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
  "duration": 74400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 63600,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 1274600,
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
  "duration": 78000,
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
  "name": "Въвежда номер на кредитна карта \"20202020206676873921\"",
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 164600,
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
  "duration": 156000,
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
  "duration": 67300,
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
  "duration": 90800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20202020206676873921",
      "offset": 33
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardNum(String)"
});
formatter.result({
  "duration": 77900,
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
  "duration": 69700,
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
  "duration": 76500,
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
  "duration": 73000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 69900,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 2176600,
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
  "duration": 82300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;14",
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 104600,
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
  "duration": 73400,
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
  "duration": 69200,
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
  "duration": 95600,
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
  "duration": 94100,
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
  "duration": 81700,
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
  "duration": 100800,
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
  "duration": 84500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 77300,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 1299900,
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
  "duration": 99700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;15",
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
  "name": "Въвежда CVC номер на кредитната карта \"29\"",
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 82400,
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
  "duration": 82800,
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
  "duration": 78800,
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
  "duration": 83400,
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
  "duration": 87200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 39
    }
  ],
  "location": "EventRegistrationSteps.addCreditCardCSV(String)"
});
formatter.result({
  "duration": 87000,
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
  "duration": 75600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 77200,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 1479000,
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
  "duration": 81700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;16",
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 127400,
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
  "duration": 127800,
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
  "duration": 93800,
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
  "duration": 77300,
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
  "duration": 85000,
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
  "duration": 87300,
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
  "duration": 81800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 128900,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 1138100,
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
  "duration": 99400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Регистрация за събитие",
  "description": "",
  "id": "регистрация-и-плащане-за-събитие;регистрация-за-събитие;;17",
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
  "name": "Въвежда датата на събитието \"23-02-2021 17:30\"",
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
  "duration": 1399100,
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
  "duration": 648100,
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
  "duration": 669000,
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
  "duration": 1025100,
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
  "duration": 677800,
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
  "duration": 708200,
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
  "duration": 676900,
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
  "duration": 1439700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23-02-2021 17:30",
      "offset": 29
    }
  ],
  "location": "EventRegistrationSteps.addEventDate(String)"
});
formatter.result({
  "duration": 700700,
  "status": "passed"
});
formatter.match({
  "location": "EventRegistrationSteps.clickSendDataBtn()"
});
formatter.result({
  "duration": 2692800,
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
  "duration": 1015700,
  "status": "passed"
});
});