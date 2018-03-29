var shuffleSequence = seq("intro", "instructions", "item1");

var completionMessage = "Uw antwoorden zijn verzonden naar de server. Bedankt voor uw deelname!"

var progressBarText = "Voortgang"

var defaults =
[
  "Form", { hideProgressBar: true },
  "Message", { hideProgressBar: true }
];

var items =
[
  ["intro", "Form", {continueMessage: "Klik hier om door te gaan", html: { include: "intro.html" } } ],
  ["instructions", "Message", {continueMessage: "Klik hier om door te gaan", html: { include: "instructions.html" } } ], 
  ["item1", "AcceptabilityJudgment", { s: "Multifex doorboort razendsnel de hemel", q: "Zou je dit product kopen?", as: ["1", "2", "3", "4", "5", "6", "7"], presentAsScale: true } ]
];