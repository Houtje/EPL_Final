var shuffleSequence = seq("intro", "instructions");

var defaults =
[
  "Form", { hideProgressBar: true },
  "Message", { hideProgressBar: true }
];

var items =
[
  ["intro", "Form", {continueMessage: "Click here to continue", html: { include: "intro.html" } } ],
  ["instructions", "Message", {continueMessage: "Click here to continue", html: { include: "instructions.html" } } ], 
];