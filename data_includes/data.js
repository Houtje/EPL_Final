var shuffleSequence = seq("intro", "instructions");

var defaults =
[
  "Form", { hideProgressBar: true },
  "Message", { hideProgressBar: true }
];

var items =
[
  ["intro", "Form", {continueMessage: "Click here to continue", html: { include: "example_intro.html" }}],
  ["instructions", "Message", {continueMessage: "Click here to continue", html: "<blockquote><p><h2>Instructions</h2></p></blockquote><p><blockquote>In this experiment, you will be shown several media items and asked questions about them.</blockquote></p>"}], 
];