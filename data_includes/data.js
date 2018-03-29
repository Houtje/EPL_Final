var shuffleSequence = seq("intro", "instructions", "item1");

var completionMessage = "Uw antwoorden zijn verzonden naar de server. Bedankt voor uw deelname!"

var progressBarText = "Voortgang"

var defaults =
[
  "Form", { hideProgressBar: true },
  "Message", { hideProgressBar: true, continueMessage: "Klik hier om door te gaan" }
];

var items =
[
  [ "intro", "Form", { continueMessage: "Klik hier om door te gaan", html: { include: "intro.html" } } ],
  [ "instructions", "Message", { html: { include: "instructions.html" } } ], 
  [ "item1",
    "Message", { s: {html: "<p>Multifex doorboort razendsnel de hemel.</p>"}},
    "Question", { q: "Zou je dit product kopen?", as: ["1", "2", "3", "4", "5", "6", "7"], presentAsScale: true }
  ]
];