var shuffleSequence = seq("intro", "instructions", rshuffle(endsWith("_1"), endsWith("_2")));

var completionMessage = "Uw antwoorden zijn verzonden naar de server. Bedankt voor uw deelname!"

var sendingResultsMessage = "Antwoorden aan het verzenden..."

var progressBarText = "Voortgang"

var defaults =
[
  "Form", { hideProgressBar: true },
  "Message", { hideProgressBar: true, continueMessage: "Klik hier om door te gaan" },
  "Question", { as: ["1", "2", "3", "4", "5", "6", "7"], presentAsScale: true, leftComment: "Nee", rightComment: "Ja" }
];

var items =
[
  [ "intro", "Form", { continueMessage: "Klik hier om door te gaan", html: { include: "intro.html" } } ],
  [ "instructions", "Message", { html: { include: "instructions.html" } } ], 
  [ "item1_1",
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Multifex doorboort razendsnel de hemel." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ]
  [ "item1_2",
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "De hemel wordt razendsnel doorboord door Multifex." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ]
  [ "item2_1",
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "<camera> fotografeert onmiddelijk jouw herinnering." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ]
  [ "item2_2",
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Jouw herinnering wordt onmiddelijk gefotografeerd door <camera>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ]
];