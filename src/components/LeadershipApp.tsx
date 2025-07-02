'use client'

import { useState, useEffect } from 'react'
import TheoryCard from './TheoryCard'
import QuizComponent from './QuizComponent'

interface Theory {
  id: string
  title: string
  description: string
  content: any
}

const theories: Theory[] = [
  {
    id: 'mintzberg',
    title: "Mintzberg's Managementrollen",
    description: "Henry Mintzberg identificeerde 10 managementrollen verdeeld over 3 categorieën die elke effectieve leider moet beheersen.",
    content: {
      categories: [
        {
          name: "Interpersoonlijke Rollen",
          roles: [
            {
              name: "Boegbeeld",
              description: "Representeert de organisatie naar buiten toe en vervult ceremoniële taken"
            },
            {
              name: "Leider", 
              description: "Motiveert en stuurt teamleden aan, zorgt voor teamcohesie"
            },
            {
              name: "Verbindingspersoon",
              description: "Onderhoudt netwerk van contacten binnen en buiten de organisatie"
            }
          ]
        },
        {
          name: "Informationele Rollen",
          roles: [
            {
              name: "Monitor",
              description: "Verzamelt informatie uit de omgeving om op de hoogte te blijven"
            },
            {
              name: "Verspreider",
              description: "Deelt relevante informatie met teamleden en andere afdelingen"
            },
            {
              name: "Woordvoerder",
              description: "Communiceert namens de organisatie naar externe partijen"
            }
          ]
        },
        {
          name: "Besluitvormingsrollen",
          roles: [
            {
              name: "Ondernemer",
              description: "Initieert veranderingen en zoekt naar nieuwe kansen"
            },
            {
              name: "Probleemoplosser",
              description: "Reageert op onverwachte problemen en crises"
            },
            {
              name: "Hulpbronnenverdeler",
              description: "Bepaalt hoe tijd, geld en middelen worden ingezet"
            },
            {
              name: "Onderhandelaar",
              description: "Vertegenwoordigt de organisatie in belangrijke onderhandelingen"
            }
          ]
        }
      ],
      sportExample: "Een hoofdtrainer van een professioneel voetbalteam vervult alle 10 rollen: als boegbeeld bij persconferenties, als leider van het team, als verbindingspersoon met de directie, als monitor van spelersutvoeringen, als verspreider van tactische informatie, als woordvoerder naar de media, als ondernemer bij het ontwikkelen van nieuwe tactieken, als probleemoplosser bij blessures, als hulpbronnenverdeler van speeltijd, en als onderhandelaar bij transfers."
    }
  },
  {
    id: 'hersey-blanchard',
    title: "Situationeel Leidinggeven (SLII)",
    description: "Hersey en Blanchard ontwikkelden een model waarbij leiderschapsstijl wordt aangepast aan het ontwikkelingsniveau van de medewerker of sporter.",
    content: {
      introduction: {
        title: "Kern van Situationeel Leidinggeven",
        description: "Er is geen 'beste' leiderschapsstijl - de effectiviteit hangt af van de situatie en het ontwikkelingsniveau van je teamleden.",
        keyInsight: "Goede leiders passen hun stijl aan op basis van competentie en betrokkenheid van hun teamleden."
      },
      coreModel: {
        title: "Het SLII Model",
        description: "Het model is gebaseerd op twee dimensies van leiderschapsgedrag:",
        dimensions: [
          {
            name: "Sturend Gedrag",
            description: "De mate waarin een leider specifieke instructies geeft",
            characteristics: [
              "Duidelijke doelen stellen",
              "Taken gedetailleerd uitleggen", 
              "Prestaties nauwlettend volgen",
              "Deadlines en standaarden communiceren"
            ]
          },
          {
            name: "Ondersteunend Gedrag", 
            description: "De mate waarin een leider luistert en emotionele steun biedt",
            characteristics: [
              "Actief luisteren naar zorgen",
              "Aanmoedigen en complimenteren",
              "Betrekken bij besluitvorming",
              "Vertrouwen en zelfvertrouwen opbouwen"
            ]
          }
        ]
      },
      developmentLevels: [
        {
          level: "D1 - Enthousiaste Beginner",
          competence: "Laag",
          commitment: "Hoog", 
          characteristics: [
            "Hoge motivatie en enthousiasme",
            "Weinig ervaring of vaardigheden",
            "Optimistisch over mogelijkheden",
            "Heeft duidelijke sturing nodig"
          ],
          needs: "Veel sturing, weinig ondersteuning - ze zijn al gemotiveerd",
          sportExample: "Een nieuwe speler die net bij het team komt - vol enthousiasme maar moet alles nog leren over tactiek en teamcultuur."
        },
        {
          level: "D2 - Ontgoochelde Leerling", 
          competence: "Laag tot Gemiddeld",
          commitment: "Laag",
          characteristics: [
            "Realiseert dat het moeilijker is dan gedacht",
            "Motivatie neemt af door tegenslagen", 
            "Heeft wat vaardigheden ontwikkeld",
            "Twijfelt aan eigen kunnen"
          ],
          needs: "Veel sturing EN veel ondersteuning - coaching is essentieel",
          sportExample: "Een jonge sporter die na eerste successen tegen sterkere tegenstanders speelt en twijfelt aan zijn kunnen - heeft zowel technische begeleiding als mentale steun nodig."
        },
        {
          level: "D3 - Voorzichtige Uitvoerder",
          competence: "Gemiddeld tot Hoog", 
          commitment: "Wisselend",
          characteristics: [
            "Heeft de vaardigheden maar mist zelfvertrouwen",
            "Kan het werk aan maar aarzelt",
            "Wil meer verantwoordelijkheid maar is onzeker",
            "Heeft vooral vertrouwen nodig"
          ],
          needs: "Weinig sturing, veel ondersteuning - vooral vertrouwen geven",
          sportExample: "Een ervaren speler die technisch goed is maar moeite heeft met zelfvertrouwen na een blessure - kan het spel aan maar heeft mentale steun nodig."
        },
        {
          level: "D4 - Zelfstandige Uitvoerder",
          competence: "Hoog",
          commitment: "Hoog",
          characteristics: [
            "Heeft zowel vaardigheden als motivatie",
            "Kan zelfstandig werken en beslissingen nemen", 
            "Neemt verantwoordelijkheid voor resultaten",
            "Kan anderen begeleiden"
          ],
          needs: "Weinig sturing, weinig ondersteuning - ruimte geven om te excelleren",
          sportExample: "Een ervaren aanvoerder die zowel technisch uitblinkt als het team kan motiveren - heeft vooral autonomie nodig om zijn rol optimaal te vervullen."
        }
      ],
      leadershipStyles: [
        {
          style: "S1 - Sturend",
          behavior: "Hoog Sturend, Laag Ondersteunend",
          when: "Voor D1 - Enthousiaste Beginners",
          description: "Geef duidelijke instructies en controleer nauwlettend de uitvoering.",
          approach: [
            "Specifieke doelen en deadlines stellen",
            "Stap-voor-stap instructies geven",
            "Regelmatig controleren en feedback geven",
            "Beslissingen zelf nemen"
          ],
          sportExample: "Een trainer die een nieuwe speler exact uitlegt hoe een techniek uitgevoerd moet worden en elke herhaling corrigeert."
        },
        {
          style: "S2 - Coachend", 
          behavior: "Hoog Sturend, Hoog Ondersteunend",
          when: "Voor D2 - Ontgoochelde Leerlingen",
          description: "Combineer duidelijke sturing met veel emotionele ondersteuning en uitleg.",
          approach: [
            "Uitleggen waarom taken belangrijk zijn",
            "Luisteren naar zorgen en frustraties", 
            "Aanmoedigen bij tegenslagen",
            "Samen beslissingen nemen"
          ],
          sportExample: "Een coach die een speler door een moeilijke periode helpt door zowel technische correcties te geven als mentaal te ondersteunen."
        },
        {
          style: "S3 - Ondersteunend",
          behavior: "Laag Sturend, Hoog Ondersteunend", 
          when: "Voor D3 - Voorzichtige Uitvoerders",
          description: "Focus op het opbouwen van vertrouwen en betrek bij besluitvorming.",
          approach: [
            "Vragen stellen in plaats van vertellen",
            "Luisteren naar ideeën en zorgen",
            "Vertrouwen uitspreken in hun kunnen", 
            "Samen problemen oplossen"
          ],
          sportExample: "Een trainer die een ervaren maar onzekere speler helpt door te vragen wat hij denkt dat de beste aanpak is en hem te steunen in zijn keuzes."
        },
        {
          style: "S4 - Delegerend",
          behavior: "Laag Sturend, Laag Ondersteunend",
          when: "Voor D4 - Zelfstandige Uitvoerders", 
          description: "Geef autonomie en vertrouw op hun competentie en motivatie.",
          approach: [
            "Eindresultaten afspreken, niet de methode",
            "Beschikbaar zijn voor vragen",
            "Ruimte geven voor eigen beslissingen",
            "Erkenning geven voor prestaties"
          ],
          sportExample: "Een coach die zijn aanvoerder de vrijheid geeft om tijdens de wedstrijd tactische aanpassingen te maken en het team aan te sturen."
        }
      ],
      keyPrinciples: [
        "Er is geen beste leiderschapsstijl - het hangt af van de situatie",
        "Mensen ontwikkelen zich in verschillende tempo's en op verschillende gebieden",
        "Hetzelfde persoon kan op verschillende taken verschillende ontwikkelingsniveaus hebben",
        "Effectieve leiders zijn flexibel en passen hun stijl aan",
        "Het doel is mensen te helpen groeien naar D4 niveau"
      ]
    }
  },
  {
    id: 'french-raven',
    title: "French & Raven's Machtsbronnen",
    description: "French en Raven identificeerden zes bronnen van macht die leiders kunnen gebruiken om invloed uit te oefenen.",
    content: {
      powerSources: [
        {
          name: "Positiemacht (Legitimate Power)",
          description: "Macht die voortkomt uit je formele positie of functie in de organisatie",
          characteristics: [
            "Gebaseerd op hiërarchie en autoriteit",
            "Verdwijnt wanneer je je positie verlaat", 
            "Wordt geaccepteerd omdat het 'hoort'",
            "Kan leiden tot compliance maar niet altijd commitment"
          ],
          sportExample: "Een hoofdtrainer heeft positiemacht - spelers luisteren omdat hij de trainer is, niet per se omdat ze hem respecteren."
        },
        {
          name: "Beloningmacht (Reward Power)",
          description: "Macht gebaseerd op het kunnen geven van beloningen en voordelen",
          characteristics: [
            "Controle over gewenste middelen",
            "Kan materieel of immaterieel zijn",
            "Effectief voor korte termijn motivatie",
            "Risico van afhankelijkheid en manipulatie"
          ],
          sportExample: "Een coach die speeltijd, captaincy of nominaties kan toekennen heeft beloningmacht over zijn spelers."
        },
        {
          name: "Dwangmacht (Coercive Power)", 
          description: "Macht gebaseerd op het kunnen straffen of ongewenste gevolgen opleggen",
          characteristics: [
            "Gebaseerd op angst voor consequenties",
            "Kan leiden tot weerstand en sabotage",
            "Effectief voor compliance, niet voor commitment", 
            "Beschadigt vaak relaties op lange termijn"
          ],
          sportExample: "Een trainer die spelers kan schorsen, uit het team kan zetten of extra trainingen kan opleggen heeft dwangmacht."
        },
        {
          name: "Expertmacht (Expert Power)",
          description: "Macht gebaseerd op kennis, vaardigheden en expertise",
          characteristics: [
            "Gebaseerd op competentie en kennis",
            "Wordt gerespecteerd en gewaardeerd",
            "Moet constant onderhouden worden",
            "Leidt tot echte invloed en respect"
          ],
          sportExample: "Een fysiotherapeut heeft expertmacht - atleten luisteren naar zijn advies omdat hij de kennis heeft over blessurepreventie en herstel."
        },
        {
          name: "Referentiemacht (Referent Power)",
          description: "Macht gebaseerd op persoonlijke aantrekkingskracht, charisma en respect",
          characteristics: [
            "Gebaseerd op persoonlijke eigenschappen",
            "Mensen willen je volgen en op je lijken",
            "Zeer effectief voor motivatie en commitment",
            "Moeilijk te ontwikkelen maar zeer waardevol"
          ],
          sportExample: "Een gerespecteerde aanvoerder heeft referentiemacht - teamgenoten volgen hem omdat ze hem bewonderen en respecteren als persoon."
        },
        {
          name: "Informatiemacht (Information Power)",
          description: "Macht gebaseerd op toegang tot belangrijke informatie",
          characteristics: [
            "Controle over waardevolle informatie",
            "Kan strategisch gedeeld of achtergehouden worden",
            "Tijdelijk van aard - informatie verliest waarde",
            "Kan leiden tot afhankelijkheid"
          ],
          sportExample: "Een scout die exclusieve informatie heeft over tegenstanders of potentiële transfers heeft informatiemacht binnen de organisatie."
        }
      ],
      keyInsights: [
        "Effectieve leiders combineren meerdere machtsbronnen",
        "Expert- en referentiemacht zijn het meest duurzaam",
        "Positiemacht alleen is niet genoeg voor effectief leiderschap",
        "Dwangmacht moet spaarzaam gebruikt worden",
        "Macht moet ethisch en verantwoordelijk gebruikt worden"
      ],
      sportApplication: "In sport zijn expertmacht (kennis van het spel) en referentiemacht (respect van spelers) vaak belangrijker dan alleen positiemacht. De beste coaches combineren hun formele autoriteit met echte expertise en persoonlijk charisma."
    }
  },
  {
    id: 'keltner-power',
    title: "Keltner's Macht Paradox",
    description: "Dacher Keltner ontdekte dat macht letterlijk je brein verandert en empathie vermindert - de eigenschappen die je macht gaven, verdwijnen door macht zelf.",
    content: {
      paradox: {
        title: "De Macht Paradox",
        description: "De eigenschappen die je macht geven (empathie, samenwerking, luisteren) worden onderdrukt door macht zelf.",
        mechanism: "Macht activeert het beloningssysteem in je brein en onderdrukt de empathie-circuits, waardoor je minder goed wordt in het begrijpen van anderen."
      },
      brainChanges: [
        {
          name: "Verminderde Empathie",
          description: "Machtige mensen worden slechter in het herkennen van emoties bij anderen",
          sportExample: "Een succesvolle coach die niet meer doorheeft dat zijn spelers gestrest of onzeker zijn"
        },
        {
          name: "Toegenomen Impulsiviteit", 
          description: "Macht vermindert zelfcontrole en verhoogt risicogedrag",
          sportExample: "Een sportdirecteur die overhaaste beslissingen neemt zonder input van anderen"
        },
        {
          name: "Stereotype Denken",
          description: "Machtige mensen gaan meer in hokjes denken en individuele verschillen negeren",
          sportExample: "Een trainer die spelers alleen nog ziet als 'types' in plaats van als unieke individuen"
        },
        {
          name: "Verminderd Luisteren",
          description: "Naarmate macht toeneemt, neemt de neiging af om echt naar anderen te luisteren",
          sportExample: "Een hoofdcoach die geen feedback meer accepteert van assistenten of spelers"
        }
      ],
      consequences: [
        "Slechtere besluitvorming door gebrek aan diverse input",
        "Verminderde teamcohesie en vertrouwen", 
        "Hogere kans op ethische misstappen",
        "Verlies van de kwaliteiten die oorspronkelijk tot succes leidden"
      ],
      prevention: [
        {
          name: "Bewustwording",
          description: "Erken dat macht je brein verandert en blijf alert op de signalen",
          application: "Regelmatig zelfreflectie en feedback vragen aan vertrouwde personen"
        },
        {
          name: "Empathie Oefenen",
          description: "Bewust tijd besteden aan het begrijpen van anderen",
          application: "Regelmatige één-op-één gesprekken met teamleden zonder agenda"
        },
        {
          name: "Nederigheid Cultiveren",
          description: "Jezelf herinneren aan je eigen fouten en beperkingen",
          application: "Openlijk toegeven wanneer je het mis hebt en van anderen leert"
        },
        {
          name: "Diverse Input Zoeken",
          description: "Actief verschillende perspectieven en meningen vragen",
          application: "Een divers team van adviseurs en de moed om tegenspraak te accepteren"
        }
      ],
      sportExample: "Sir Alex Ferguson bleef gedurende zijn 26-jarige carrière bij Manchester United effectief omdat hij bewust empathie cultiveerde, individuele spelers bleef zien als unieke personen, en altijd open stond voor nieuwe ideeën van zijn staf."
    }
  },
  {
    id: 'kets-de-vries',
    title: "Kets de Vries: Disfunctioneel Leiderschap",
    description: "Manfred Kets de Vries identificeerde veelvoorkomende disfunctionele patronen bij leiders die effectiviteit ondermijnen.",
    content: {
      introduction: "Veel leiderschapsproblemen ontstaan door onbewuste psychologische patronen die leiders ontwikkelen als reactie op stress, onzekerheid of trauma.",
      dysfunctionalPatterns: [
        {
          name: "Conflictvermijding",
          description: "Systematisch vermijden van moeilijke gesprekken en confrontaties",
          characteristics: [
            "Problemen laten sudderen in plaats van aanpakken",
            "Hoop dat conflicten vanzelf oplossen",
            "Angst voor negatieve reacties",
            "Behoefte om aardig gevonden te worden"
          ],
          consequences: [
            "Problemen escaleren en worden groter",
            "Teamleden raken gefrustreerd",
            "Prestaties dalen door onduidelijkheid",
            "Verlies van respect en autoriteit"
          ],
          sportExample: "Een trainer die niet durft te zeggen dat een populaire speler slecht presteert, waardoor het hele team lijdt onder zijn slechte vorm."
        },
        {
          name: "Micromanagement",
          description: "Obsessieve controle over elk detail en onvermogen om te delegeren",
          characteristics: [
            "Wil alles zelf doen en controleren",
            "Vertrouwt anderen niet met belangrijke taken",
            "Bemoeit zich met kleinste details",
            "Angst om controle te verliezen"
          ],
          consequences: [
            "Teamleden voelen zich niet vertrouwd",
            "Creativiteit en initiatief worden onderdrukt",
            "Leider wordt overbelast en ineffectief",
            "Talent vertrekt naar andere organisaties"
          ],
          sportExample: "Een coach die elke pass, elke beweging wil controleren en spelers geen ruimte geeft om zelf beslissingen te nemen tijdens het spel."
        },
        {
          name: "Tiranniseren",
          description: "Gebruik van intimidatie, agressie en angst om controle te behouden",
          characteristics: [
            "Schreeuwen, bedreigen en vernederen",
            "Onvoorspelbare woede-uitbarstingen",
            "Geen tolerantie voor fouten of tegenspraak",
            "Macht gebruiken om anderen klein te houden"
          ],
          consequences: [
            "Angstcultuur in het team",
            "Creativiteit en risico's nemen verdwijnen",
            "Hoge verloop van personeel",
            "Lange termijn schade aan vertrouwen"
          ],
          sportExample: "Een trainer die spelers publiekelijk vernedert voor fouten, waardoor ze bang worden om risico's te nemen en hun natuurlijke spel verliezen."
        },
        {
          name: "Manisch Gedrag",
          description: "Hyperactiviteit en onsamenhangende beslissingen - 'heel hard rennen maar de verkeerde kant op'",
          characteristics: [
            "Constant bezig zijn zonder duidelijke focus",
            "Springen van project naar project",
            "Onrealistische deadlines en verwachtingen",
            "Geen tijd voor reflectie of planning"
          ],
          consequences: [
            "Team raakt uitgeput en verward",
            "Geen consistente richting of strategie",
            "Belangrijke details worden over het hoofd gezien",
            "Burnout bij leider en team"
          ],
          sportExample: "Een sportdirecteur die constant nieuwe initiatieven start, trainingsmethoden verandert en spelers haalt zonder duidelijke strategie, waardoor niemand weet waar ze aan toe zijn."
        }
      ],
      underlyingCauses: [
        "Onverwerkte trauma's uit het verleden",
        "Diepgewortelde onzekerheden en angsten", 
        "Gebrek aan zelfbewustzijn en reflectie",
        "Stress en druk van buitenaf",
        "Slechte rolmodellen in het verleden"
      ],
      solutions: [
        {
          name: "Zelfbewustzijn Ontwikkelen",
          description: "Herken je eigen patronen en triggers",
          methods: ["360-graden feedback", "Coaching", "Zelfreflectie", "Mindfulness"]
        },
        {
          name: "Professionele Hulp",
          description: "Werk met coaches of therapeuten aan onderliggende issues",
          methods: ["Executive coaching", "Therapie", "Mentoring", "Peer support groepen"]
        },
        {
          name: "Systemen Creëren",
          description: "Bouw structuren die disfunctioneel gedrag voorkomen",
          methods: ["Regelmatige feedback momenten", "Duidelijke procedures", "Checks and balances", "Team evaluaties"]
        }
      ],
      prevention: "De beste preventie is regelmatige zelfreflectie, het vragen van eerlijke feedback, en het creëren van een cultuur waarin mensen veilig de waarheid kunnen spreken."
    }
  },
  {
    id: 'maccoby',
    title: "Maccoby's Productief Narcisme",
    description: "Michael Maccoby ontdekte dat effectieve leiders vier narcistische elementen nodig hebben - maar alleen als ze niet doorslaan naar destructief narcisme.",
    content: {
      introduction: {
        title: "De Narcisme Paradox",
        description: "Effectieve leiders hebben bepaalde narcistische eigenschappen nodig om succesvol te zijn, maar deze mogen niet doorslaan naar destructief narcisme.",
        keyInsight: "Narcisme is niet per definitie slecht - in beperkte mate is het essentieel voor effectief leiderschap.",
        examples: "Denk aan leiders zoals Steve Jobs, Elon Musk, Mark Zuckerberg - allemaal hebben ze narcistische trekken die hen succesvol maken."
      },
      fourElements: [
        {
          name: "1. Visie - Het Grote Geheel Overzien",
          description: "Productief narcistische leiders hebben een duidelijke, grootse visie en weten precies waar ze naartoe willen.",
          characteristics: [
            "Zien het grote plaatje en lange termijn doelen",
            "Hebben een duidelijk beeld van de toekomst",
            "Kunnen complexe situaties overzien",
            "Durven grote, ambitieuze doelen te stellen"
          ],
          examples: [
            "Napoleon had een visie voor zijn wereldrijk",
            "Steve Jobs had een visie voor Apple en innovatie", 
            "Elon Musk heeft visies voor Tesla, ruimtevaart en duurzaamheid"
          ],
          sportExample: "Pep Guardiola heeft een duidelijke visie van hoe voetbal gespeeld moet worden - totaalvoetbal met balcontrole en positiespel. Deze visie past hij toe bij elk team waar hij komt.",
          questions: [
            "Heeft jouw leider een duidelijke visie?",
            "Kan hij/zij het grote geheel overzien?",
            "Weet iedereen waar het team naartoe wil?"
          ]
        },
        {
          name: "2. Charisma - Makkelijk Volgers Krijgen",
          description: "Ze zijn charismatisch en kunnen mensen overtuigen om hen te volgen, zelfs in moeilijke tijden.",
          characteristics: [
            "Natuurlijke uitstraling en aanwezigheid",
            "Kunnen mensen inspireren en motiveren",
            "Overtuigingskracht en enthousiasme",
            "Mensen willen hen volgen en geloven in hun ideeën"
          ],
          examples: [
            "Hitler (negatief voorbeeld) kon miljoenen mensen overtuigen",
            "Steve Jobs kon investeerders en klanten overtuigen van zijn producten",
            "Elon Musk haalt steeds weer miljarden op voor zijn projecten"
          ],
          sportExample: "Jürgen Klopp heeft een natuurlijk charisma waardoor spelers alles voor hem willen geven. Zijn enthousiasme en passie zijn aanstekelijk en creëren een sterke teamcultuur.",
          questions: [
            "Volgen mensen jouw leider graag?",
            "Kan hij/zij anderen overtuigen en inspireren?",
            "Heeft hij/zij natuurlijke uitstraling?"
          ]
        },
        {
          name: "3. Zelfvertrouwen - Vol Vertrouwen en Arrogant",
          description: "Ze hebben groot zelfvertrouwen, zijn overtuigend en niet bang om hun ideeën te verdedigen - soms grenzend aan arrogantie.",
          characteristics: [
            "Onwrikbaar geloof in eigen kunnen",
            "Durven grote beslissingen te nemen",
            "Laten zich niet snel ontmoedigen",
            "Kunnen overtuigend zijn ook bij tegenslag"
          ],
          examples: [
            "Donald Trump toont extreem zelfvertrouwen",
            "Steve Jobs was beroemd om zijn arrogantie en zelfvertrouwen",
            "Elon Musk blijft geloven in zijn projecten ondanks kritiek"
          ],
          sportExample: "Cristiano Ronaldo heeft een enorm zelfvertrouwen dat hem helpt om in cruciale momenten te presteren. Zijn 'arrogantie' motiveert hem om altijd de beste te willen zijn.",
          questions: [
            "Heeft jouw leider groot zelfvertrouwen?",
            "Durft hij/zij moeilijke beslissingen te nemen?",
            "Blijft hij/zij geloven in plannen ondanks tegenslag?"
          ]
        },
        {
          name: "4. Risicobereidheid - Niet Bang voor Risico's",
          description: "Ze durven grote risico's te nemen om hun doelen te bereiken en zijn bereid alles op het spel te zetten.",
          characteristics: [
            "Durven alles op één kaart te zetten",
            "Zien kansen waar anderen gevaar zien",
            "Bereid om radicale veranderingen door te voeren",
            "Laten zich niet tegenhouden door angst voor falen"
          ],
          examples: [
            "Elon Musk heeft meerdere keren zijn hele vermogen geïnvesteerd in zijn bedrijven",
            "Steve Jobs nam het risico om Apple compleet te heruitvinden",
            "Jeff Bezos verliet een veilige baan om Amazon te starten"
          ],
          sportExample: "Johan Cruyff nam het risico om als trainer een compleet nieuw systeem (totaalvoetbal) te introduceren bij Barcelona, wat revolutionair was maar ook kon mislukken.",
          questions: [
            "Durft jouw leider grote risico's te nemen?",
            "Is hij/zij bereid om alles te veranderen voor succes?",
            "Laat angst voor falen hem/haar tegenhouden?"
          ]
        }
      ],
      productiveVsDestructive: {
        title: "Productief vs Destructief Narcisme",
        productive: {
          description: "Wanneer deze vier elementen ten goede komen aan het team en de organisatie",
          characteristics: [
            "Visie wordt gedeeld en anderen worden erbij betrokken",
            "Charisma wordt gebruikt om het team te inspireren",
            "Zelfvertrouwen geeft anderen ook vertrouwen",
            "Risico's worden genomen voor het algemeen belang"
          ]
        },
        destructive: {
          description: "Wanneer deze elementen alleen het ego van de leider dienen",
          characteristics: [
            "Visie wordt opgedrongen zonder input van anderen",
            "Charisma wordt gebruikt voor persoonlijk gewin",
            "Zelfvertrouwen wordt arrogantie die anderen kleinhoudt",
            "Risico's worden genomen zonder rekening te houden met gevolgen voor anderen"
          ]
        }
      },
      keyMessage: {
        title: "De Balans is Cruciaal",
        description: "Deze vier narcistische elementen zijn essentieel voor effectief leiderschap, maar alleen als ze in balans blijven en ten goede komen aan het team.",
        warning: "Zodra ze doorslaan naar puur eigenbelang, wordt productief narcisme destructief narcisme."
      },
      sportApplication: "In sport zie je dit duidelijk: de beste coaches en aanvoerders hebben visie, charisma, zelfvertrouwen en durven risico's te nemen. Maar zodra het alleen nog om hun eigen ego gaat in plaats van het team, worden ze ineffectief."
    }
  },
  {
    id: 'ferguson',
    title: "Alex Ferguson's Leiderschapsfilosofie",
    description: "Sir Alex Ferguson leidde Manchester United 26 jaar lang naar ongekend succes. Zijn 9 leiderschapsprincipes zijn toepasbaar in elke organisatie.",
    content: {
      introduction: "Sir Alex Ferguson (1941) is een van de meest succesvolle coaches aller tijden. In 26 jaar bij Manchester United won hij 38 trofeeën, waaronder 13 Premier League titels en 2 Champions League cups.",
      nineElements: [
        {
          name: "1. Begin met de Basis",
          description: "Zorg dat de fundamenten op orde zijn voordat je aan verfijning begint",
          application: "Focus eerst op discipline, werkethiek en teamcultuur",
          sportExample: "Ferguson begon altijd met fysieke conditie en mentale instelling voordat hij aan tactiek werkte"
        },
        {
          name: "2. Discipline en Standaarden", 
          description: "Stel hoge standaarden en handhaaf deze consequent - geen uitzonderingen, zelfs niet voor sterren",
          application: "Regels gelden voor iedereen, ongeacht status of prestaties",
          sportExample: "Ferguson stuurde David Beckham weg toen deze de teamdiscipline ondermijnde, ondanks zijn sterrenstatuur"
        },
        {
          name: "3. Individuele Benadering",
          description: "Behandel elke speler als uniek individu met eigen behoeften en motivaties",
          application: "Pas je leiderschapsstijl aan per persoon",
          sportExample: "Ferguson behandelde Roy Keane anders dan Ryan Giggs, omdat ze verschillende persoonlijkheden hadden"
        },
        {
          name: "4. Lange Termijn Visie",
          description: "Denk in jaren, niet in wedstrijden - bouw voor de toekomst",
          application: "Investeer in jeugd en ontwikkeling, niet alleen in snelle resultaten",
          sportExample: "Ferguson bouwde meerdere generaties teams en investeerde zwaar in de jeugdacademie"
        },
        {
          name: "5. Controle en Autoriteit",
          description: "Behoud altijd de controle en laat nooit toe dat anderen je autoriteit ondermijnen",
          application: "Wees duidelijk over wie de beslissingen neemt",
          sportExample: "Ferguson tolereerde geen spelers die zijn autoriteit in twijfel trokken, ongeacht hun talent"
        },
        {
          name: "6. Teamwork boven Individualisme",
          description: "Het team gaat altijd voor individuele belangen",
          application: "Beloon teamspelers en ontmoedig ego's die het team schaden",
          sportExample: "Ferguson verkocht talentvolle spelers die het teambelang ondermijnden"
        },
        {
          name: "7. Voortdurende Verbetering",
          description: "Blijf leren, aanpassen en verbeteren - stilstand is achteruitgang",
          application: "Zoek constant naar nieuwe methoden en ideeën",
          sportExample: "Ferguson paste zijn tactieken aan naarmate het voetbal evolueerde en leerde van andere coaches"
        },
        {
          name: "8. Mentale Kracht Ontwikkelen",
          description: "Bouw veerkracht en mentale sterkte op bij je team",
          application: "Bereid je team voor op tegenslag en leer ze ermee om te gaan",
          sportExample: "Ferguson's teams waren beroemd om hun comebacks en mentale sterkte in moeilijke momenten"
        },
        {
          name: "9. Passie en Emotie",
          description: "Toon je passie en emotie - dit is aanstekelijk en motiveert anderen",
          application: "Laat zien dat je om het team en de doelen geeft",
          sportExample: "Ferguson's emotionele betrokkenheid bij wedstrijden motiveerde spelers om extra te presteren"
        }
      ],
      keyLessons: [
        "Consistentie in leiderschap over lange periode",
        "Balans tussen discipline en individuele aandacht",
        "Nooit compromissen sluiten met kernwaarden",
        "Investeren in mensen en hun ontwikkeling",
        "Aanpassingsvermogen zonder kernprincipes te verliezen"
      ],
      legacy: "Ferguson's succes kwam niet van één seizoen, maar van 26 jaar consequent toepassen van zijn principes. Hij toonde aan dat effectief leiderschap draait om mensen, niet alleen om tactiek.",
      modernApplication: "Ferguson's principes zijn nog steeds relevant in moderne sport en business: duidelijke waarden, individuele aandacht, lange termijn denken en het opbouwen van sterke culturen."
    }
  },
  {
    id: 'van-vugt-wiltschut',
    title: "Van Vugt & Wiltschut: Gezag vs Dominantie",
    description: "Mark van Vugt en Wendy Wiltschut onderzochten het verschil tussen gezag (gebaseerd op respect) en dominantie (gebaseerd op macht) in leiderschap.",
    content: {
      introduction: {
        title: "Het Fundamentele Verschil",
        description: "Gezag en dominantie zijn twee totaal verschillende manieren om invloed uit te oefenen. Mensen volgen leiders met gezag omdat ze willen, terwijl ze dominante leiders volgen omdat ze moeten.",
        contextualNote: "Het is niet altijd beter om op basis van gezag leiding te geven - in sommige situaties kan dominant leiderschap effectiever zijn, afhankelijk van cultuur en situatie."
      },
      fiveComparisons: [
        {
          dimension: "1. Volgen: Vrije Keuze vs Dreiging",
          authority: "Volgen is een vrije keuze - mensen kiezen ervoor om de leider te volgen",
          dominance: "Volgen onder dreiging - mensen volgen uit dwang of vrees voor consequenties",
          nuance: "Zelfs bij democratisch gekozen leiders kan er discussie zijn over hoe 'vrij' de keuze werkelijk is voor alle burgers."
        },
        {
          dimension: "2. Perceptie: Respect vs Vrees",
          authority: "De leider wordt gerespecteerd en bewonderd",
          dominance: "De dominante wordt gevreesd en gemeden",
          nuance: "Sommige leiders kunnen zowel gerespecteerd als gevreesd worden, afhankelijk van de context en de persoon."
        },
        {
          dimension: "3. Legitimiteit: Informeel vs Formeel Leiderschap",
          authority: "Vaak informeel leiderschap - mensen volgen ook zonder formele positie",
          dominance: "Meestal formeel leiderschap - gebaseerd op positie en hiërarchie",
          explanation: "Informele leiders worden gevolgd zonder officiële positie, formele leiders hebben een officiële functie. Legitiem leiderschap combineert beide.",
          examples: {
            mandela: "Mandela was jarenlang informeel leider tijdens zijn strijd, werd pas later formeel leider als president - toen legitiem leider",
            biden: "Biden was informeel leider met veel volgers, werd formeel leider als president - nu legitiem leider",
            trump: "Trump had formele positie als president en veel volgers - legitiem leider, hoewel controversieel"
          }
        },
        {
          dimension: "4. Focus: Groepsbelang vs Eigenbelang",
          authority: "Staat ten dienste van de groep en creëert meerwaarde voor iedereen",
          dominance: "Zet zichzelf centraal en creëert vooral meerwaarde voor zichzelf",
          examples: {
            mandela: "Gaf alles op voor de groep - jarenlang gevangenis voor de rechten van zijn volk",
            biden: "Zegt in acceptance speech: 'Het is mijn taak om die visie waar mensen op hebben gestemd waar te maken'",
            trump: "Weigert verkiezingsuitslag te accepteren - lijkt meer om zijn ego te gaan dan om het land"
          }
        },
        {
          dimension: "5. Groepsdynamiek: Samenwerking vs Verdeeldheid",
          authority: "Bevordert samenwerking en eenheid binnen de groep",
          dominance: "Creëert verdeeldheid, wantrouwen en interne competitie",
          examples: {
            biden: "'Er zijn geen rode staten, geen blauwe staten, alleen de Verenigde Staten' - zoekt samenwerking",
            trump: "Creëerde meer verdeeldheid en polarisatie tijdens zijn presidentschap"
          }
        }
      ],
      realWorldExamples: {
        title: "Voorbeelden uit de Praktijk",
        mandela: {
          name: "Nelson Mandela - Gezag",
          description: "Duidelijk voorbeeld van leiderschap op basis van gezag",
          characteristics: [
            "Jarenlang informeel leider zonder positie",
            "Werd gerespecteerd, niet gevreesd",
            "Zette groepsbelang boven eigenbelang",
            "Bevorderde verzoening en samenwerking"
          ]
        },
        bokito: {
          name: "Bokito (Gorilla) - Dominantie",
          description: "Voorbeeld van dominant leiderschap in dierenrijk",
          characteristics: [
            "Formeel leider door fysieke kracht",
            "Wordt gevolgd uit vrees",
            "Zet eigenbelang centraal (toegang tot vrouwtjes)",
            "Handhaaft positie door intimidatie"
          ]
        },
        biden: {
          name: "Joe Biden - Genuanceerd",
          description: "Combinatie van gezag en formeel leiderschap",
          authorityAspects: [
            "Had veel volgers voor hij president werd (informeel leider)",
            "Zoekt samenwerking: 'We zijn allemaal Amerikanen'",
            "Focus op groepsbelang in acceptance speech"
          ],
          complexities: [
            "Won maar net - bijna helft van land wilde hem niet",
            "Vraag: in hoeverre is volgen dan vrije keuze voor iedereen?"
          ]
        },
        trump: {
          name: "Donald Trump - Complex",
          description: "Moeilijk te categoriseren - heeft aspecten van beide",
          dominanceAspects: [
            "Weigert verkiezingsuitslag te accepteren",
            "Creëert verdeeldheid en polarisatie",
            "Lijkt soms eigenbelang boven landsbelang te stellen"
          ],
          authorityAspects: [
            "Werd democratisch gekozen - had veel volgers",
            "'America First' - focus op land verbeteren",
            "Wordt door veel Amerikanen gerespecteerd en bewonderd"
          ],
          nuance: "Niet zo zwart-wit als het lijkt - heeft elementen van beide stijlen"
        }
      },
      culturalContext: {
        title: "Culturele en Situationele Context",
        description: "De effectiviteit van gezag vs dominantie hangt af van cultuur en situatie",
        example: "China's aanpak van coronavirus (meer dominant) vs Nederland's aanpak (meer op basis van gezag) - beide hadden verschillende resultaten en consequenties",
        dutchContext: "In Nederland en vergelijkbare culturen is leiderschap op basis van gezag meestal effectiever, omdat mensen hoger opgeleid zijn en meer autonomie verwachten"
      },
      practicalApplication: {
        title: "Toepassing in de Praktijk",
        analysis: "Bij het analyseren van leiders, kijk naar alle vijf dimensies:",
        steps: [
          "Bepaal waar de leider scoort op elke dimensie (1-10 schaal)",
          "Sommige leiders scoren links op sommige aspecten, rechts op andere",
          "Geef een genuanceerde analyse - vermijd zwart-wit denken",
          "Verklaar waarom bepaalde aspecten meer gezag of dominantie tonen"
        ]
      },
      keyInsights: [
        "Geen enkele leider is 100% gezag of 100% dominantie",
        "Context en cultuur bepalen welke stijl effectiever is",
        "Democratische verkiezing betekent niet automatisch gezag",
        "Formele positie kan gecombineerd worden met informeel leiderschap",
        "Effectieve analyse vereist nuance en diepgang"
      ],
      sportApplication: "In sport zie je beide vormen: coaches die gerespecteerd worden om hun expertise en persoonlijkheid (gezag) versus coaches die vooral door positie en strafmacht leiden (dominantie). De beste sportleiders combineren formele autoriteit met echt respect van hun spelers."
    }
  }
]

export default function LeadershipApp() {
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null)
  const [readTheories, setReadTheories] = useState<string[]>([])
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)

  // Load progress from localStorage
  useEffect(() => {
    const savedReadTheories = localStorage.getItem('readTheories')
    const savedQuizCompleted = localStorage.getItem('quizCompleted')
    const savedQuizScore = localStorage.getItem('quizScore')
    const savedTotalPoints = localStorage.getItem('totalPoints')

    if (savedReadTheories) {
      setReadTheories(JSON.parse(savedReadTheories))
    }
    if (savedQuizCompleted) {
      setQuizCompleted(JSON.parse(savedQuizCompleted))
    }
    if (savedQuizScore) {
      setQuizScore(JSON.parse(savedQuizScore))
    }
    if (savedTotalPoints) {
      setTotalPoints(JSON.parse(savedTotalPoints))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('readTheories', JSON.stringify(readTheories))
    localStorage.setItem('quizCompleted', JSON.stringify(quizCompleted))
    localStorage.setItem('quizScore', JSON.stringify(quizScore))
    localStorage.setItem('totalPoints', JSON.stringify(totalPoints))
  }, [readTheories, quizCompleted, quizScore, totalPoints])

  const handleTheoryClick = (theoryId: string) => {
    if (selectedTheory === theoryId) {
      setSelectedTheory(null)
    } else {
      setSelectedTheory(theoryId)
      setShowQuiz(false)
    }
  }

  const handleTheoryRead = (theoryId: string) => {
    if (!readTheories.includes(theoryId)) {
      setReadTheories([...readTheories, theoryId])
      setTotalPoints(totalPoints + 50)
    }
  }

  const handleQuizComplete = (score: number, total: number) => {
    if (!quizCompleted) {
      setQuizCompleted(true)
      setQuizScore(score)
      setTotalPoints(totalPoints + (score * 10))
    }
  }

  const handleShowQuiz = () => {
    setShowQuiz(true)
    setSelectedTheory(null)
  }

  const getProgressPercentage = () => {
    const theoriesRead = readTheories.length
    const quizDone = quizCompleted ? 1 : 0
    const total = theories.length + 1 // theories + quiz
    return Math.round(((theoriesRead + quizDone) / total) * 100)
  }

  const selectedTheoryData = theories.find(t => t.id === selectedTheory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🏃‍♂️ Leiderschap in de Wereld van Sport en Bewegen
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Ontdek hoe leiderschapstheorieën toegepast worden in sport, fitness, bewegen en fysieke activiteit
          </p>
          
          {/* Progress and Points */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{getProgressPercentage()}%</div>
                <div className="text-gray-600">Voortgang</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{totalPoints}</div>
                <div className="text-gray-600">Totaal Punten</div>
                <div className="text-sm text-gray-500 mt-1">
                  50 punten per theorie + 10 per quiz vraag
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {readTheories.length}/{theories.length}
                </div>
                <div className="text-gray-600">Theorieën Gelezen</div>
                <div className="text-sm text-gray-500 mt-1">
                  Quiz: {quizCompleted ? `${quizScore}/10` : '0/10'}
                </div>
              </div>
            </div>
          </div>

          {/* Context Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Toepassingsgebieden</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🏆 Professionele Sport</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Hoofdtrainers en coaches</li>
                  <li>• Sportdirecteuren</li>
                  <li>• Teamcaptains en aanvoerders</li>
                  <li>• Performance managers</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">💪 Fitness & Wellness</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Fitnesscentrum managers</li>
                  <li>• Personal trainers</li>
                  <li>• Groepsinstructeurs</li>
                  <li>• Wellness coaches</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">🧒 Jeugdsport</h3>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Jeugdtrainers</li>
                  <li>• Talentontwikkelaars</li>
                  <li>• Schoolsport begeleiders</li>
                  <li>• Verenigingsbestuurders</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">🏥 Bewegingstherapie</h3>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Fysiotherapeuten</li>
                  <li>• Bewegingstherapeuten</li>
                  <li>• Revalidatie specialisten</li>
                  <li>• Gezondheidscoaches</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🏢 Sportorganisaties</h3>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Sportbond directeuren</li>
                  <li>• Evenement managers</li>
                  <li>• Facility managers</li>
                  <li>• Scheidsrechters</li>
                </ul>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-800 mb-2">🌲 Recreatie & Outdoor</h3>
                <ul className="text-teal-700 text-sm space-y-1">
                  <li>• Outdoor instructeurs</li>
                  <li>• Recreatie coördinatoren</li>
                  <li>• Avontuurlijke activiteiten</li>
                  <li>• Natuursport begeleiders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => {
              setSelectedTheory(null)
              setShowQuiz(false)
            }}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              !selectedTheory && !showQuiz
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            📚 Alle Theorieën
          </button>
          <button
            onClick={handleShowQuiz}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              showQuiz
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-600 hover:bg-purple-50'
            }`}
          >
            🎯 Quiz {quizCompleted && '✓'}
          </button>
        </div>

        {/* Content */}
        {showQuiz ? (
          <QuizComponent onComplete={handleQuizComplete} />
        ) : selectedTheory ? (
          <div className="mb-8">
            <button
              onClick={() => setSelectedTheory(null)}
              className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              ← Terug naar overzicht
            </button>
            <TheoryCard
              theory={selectedTheoryData!}
              isExpanded={true}
              onRead={() => handleTheoryRead(selectedTheory)}
              isRead={readTheories.includes(selectedTheory)}
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theories.map((theory) => (
              <div key={theory.id} onClick={() => handleTheoryClick(theory.id)}>
                <TheoryCard
                  theory={theory}
                  isExpanded={false}
                  onRead={() => handleTheoryRead(theory.id)}
                  isRead={readTheories.includes(theory.id)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            🎓 <strong>Ontwikkeld voor HBO Sportkunde</strong> - Leer leiderschap in de praktijk van sport en bewegen
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Alle theorieën zijn toegepast op sport, fitness, bewegingstherapie en fysieke activiteit
          </p>
        </div>
      </div>
    </div>
  )
}