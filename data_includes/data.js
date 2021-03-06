var shuffleSequence = seq("intro", "instructions", sepWith("sep", rshuffle(startsWith("item"))), "comments");
// 
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
  [ "sep", "Separator", { transfer: 900, normalMessage: "Hierna volgt nog een slogan." } ],
  [ "intro", "Form", { continueMessage: "Klik hier om door te gaan", html: { include: "intro.html" } } ],
  [ "comments", "Form", { continueMessage: "Klik hier om door te gaan", html: { include: "comments.html" } } ],
  [ "instructions", "Message", { html: { include: "instructions.html" } } ], 
  [ [ "item1_1", 1 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Multifex doorboort razendsnel de hemel." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item1_2", 1 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "De hemel wordt razendsnel doorboord door Multifex." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item1_3", 1 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Multifex die de hemel razendsnel doorboort." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item1_4", 1 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is de hemel die razendsnel doorboord wordt door Multifex." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item2_1", 2 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Flashclick fotografeert onmiddelijk jouw herinnering." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item2_2", 2 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Jouw herinnering wordt onmiddelijk gefotografeerd door Flashclick." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item2_3", 2 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Flashclick die jouw herinnering onmiddelijk fotografeert." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item2_4", 2 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is jouw herinnering die onmiddelijk gefotografeerd wordt door Flashclick." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item3_1", 3 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Dolormed verlicht langdurig de pijn." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item3_2", 3 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "De pijn wordt langdurig verlicht door Dolormed." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item3_3", 3 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Dolormed dat de pijn langdurig verlicht." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item3_4", 3 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is de pijn die langdurig verlicht wordt door Dolormed." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item4_1", 4 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Baremal vermindert effectief rugklachten." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item4_2", 4 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Rugklachten worden effectief verminderd door Baremal." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item4_3", 4 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Baremal dat rugklachten effectief vermindert." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item4_4", 4 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het zijn rugklachten die effectief verminderd worden door Baremal." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item5_1", 5 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Coluni reinigt grondig jouw huis." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item5_2", 5 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Jouw huis wordt grondig gereinigd door Coluni." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item5_3", 5 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Coluni die jouw huis grondig reinigt." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item5_4", 5 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is jouw huis dat grondig gereinigd wordt door Coluni." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item6_1", 6 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Chaya begint verwarmend uw dag." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item6_2", 6 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Uw dag wordt verwarmend begonnen door Chaya." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item6_3", 6 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Chaya dat uw dag verwarmend begint." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item6_4", 6 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is uw dag die verwarmend begonnen wordt door Chaya." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item7_1", 7 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Ferva bedekt gelijkmatig elke muur." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item7_2", 7 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Elke muur wordt gelijkmatig bedekt door Ferva." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item7_3", 7 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Ferva dat elke muur gelijkmatig bedekt." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item7_4", 7 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is elke muur die gelijkmatig bedekt wordt door Ferva." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item8_1", 8 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Dengir beschermt zorgvuldig uw geld." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item8_2", 8 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Uw geld wordt zorgvuldig beschermd door Dengir." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item8_3", 8 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Dengir die uw geld zorgvuldig beschermt." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item8_4", 8 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is uw geld dat zorgvuldig beschermd wordt door Dengir." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item9_1", 9 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Paraz verdrijft veilig al het ongedierte." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item9_2", 9 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Al het ongedierte wordt veilig verdreven door Paraz." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item9_3", 9 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Paraz dat al het ongedierte veilig verdrijft." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item9_4", 9 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is al het ongedierte dat veilig verdreven wordt door Paraz." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item10_1", 10 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Planara verbreedt informatief uw horizon." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item10_2", 10 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Uw horizon wordt informatief verbreed door Planara." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item10_3", 10 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Planara die uw horizon informatief verbreedt." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item10_4", 10 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is uw horizon die informatief verbreed wordt door Planara." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item11_1", 11 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Salsaco verscherpt verrassend elk gerecht." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item11_2", 11 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Elk gerecht wordt verrassend verscherpt door Salsaco." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item11_3", 11 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Salsaco dat elk gerecht verrassend verscherpt." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item11_4", 11 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is elk gerecht dat verrassend verscherpt wordt door Salsaco." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item12_1", 12 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Grammasta draait ruisloos jouw muziek." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item12_2", 12 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Jouw muziek wordt ruisloos gedraaid door Grammasta." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item12_3", 12 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is Grammasta die jouw muziek ruisloos draait." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ],
  [ [ "item12_4", 12 ],
    "Message", { html: [ [ "div", { style: "text-align: center;" } ], [ "p", "Het is jouw muziek die ruisloos gedraaid wordt door Grammasta." ] ] },
    "Question", { q: "Was de inhoud van de slogan helder?" },
    "Question", { q: "Vond u dit product interessant?" },
    "Question", { q: "Zou u dit product aan anderen aanbevelen?" },
    "Question", { q: "Zou u dit product kopen?" }
  ]
];