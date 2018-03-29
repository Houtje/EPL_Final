var shuffleSequence = seq("intro", "instructions");

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
];