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
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is <camera> die jouw herinnering onmiddelijk fotografeert." ] ] },
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
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is <medicijn> wat de pijn langdurig verlicht." ] ] },
    "Question", { q: "Zou je dit product kopen?" },
  ],
  [ [ "item3_4", 3 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is de pijn die langdurig verlicht wordt door <medicijn>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item4_1", 4 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "<> verleent altijd zekerheid." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item4_2", 4 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Zekerheid wordt altijd verleend door <>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item4_3", 4 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is <> die zekerheid altijd verleent." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item4_4", 4 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is zekerheid wat altijd verleend wordt door <>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item5_1", 5 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "<> vermindert effectief rugklachten." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item5_2", 5 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Rugklachten worden effectief verminderd door <>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item5_3", 5 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is <> die rugklachten effectief vermindert." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item5_4", 5 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het zijn rugklachten die effectief verminderd worden door <>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item6_1", 6 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "<> reinigt grondig jouw huis." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item6_2", 6 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Jouw huis wordt grondig gereinigd door <>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item6_3", 6 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is <> dat jouw huis grondig reinigt." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
  [ [ "item6_4", 6 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is jouw huis dat grondig gereinigd wordt door <>." ] ] },
    "Question", { q: "Zou je dit product kopen?" }
  ],
];