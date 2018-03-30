var shuffleSequence = seq("intro", "instructions", rshuffle(startsWith("item")));

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
  [ [ "item1_1", 1 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Multifex doorboort razendsnel de hemel." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item1_2", 1 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "De hemel wordt razendsnel doorboord door Multifex." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item1_3", 1 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Multifex die de hemel razendsnel doorboort." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item1_4", 1 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is de hemel die razendsnel doorboord wordt door Multifex." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item2_1", 2 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "<camera> fotografeert onmiddelijk jouw herinnering." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item2_2", 2 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Jouw herinnering wordt onmiddelijk gefotografeerd door <camera>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item2_3", 2 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is <camera> die onmiddelijk jouw herinnering fotografeert." ] ] },
    "Question", { q: "Zou je dit product kopen?" },
  ],
  [ [ "item2_4", 2 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is jouw herinnering die onmiddelijk gefotografeerd wordt door <camera>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item3_1", 3 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "<medicijn> verlicht langdurig de pijn." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item3_2", 3 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "De pijn wordt langdurig verlicht door <medicijn>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item3_3", 3 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is <medicijn> wat langdurig de pijn verlicht." ] ] },
    "Question", { q: "Zou je dit product kopen?" },
  ],
  [ [ "item4_4", 3 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is de pijn die langdurig verlicht wordt door <medicijn>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
];