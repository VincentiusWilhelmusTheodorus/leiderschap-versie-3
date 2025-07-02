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
    title: "Machtsbronnen",
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
    description: "Sir Alex Ferguson leidde Manchester United 26 jaar lang naar ongekend succes. Zijn 9 leiderschapselementen zijn toepasbaar in elke organisatie.",
    content: {
      introduction: "Sir Alex Ferguson (1941) is een van de meest succesvolle coaches aller tijden. In 26 jaar bij Manchester United won hij 38 trofeeën, waaronder 13 Premier League titels en 2 Champions League cups. Hij ontwikkelde 9 essentiële elementen voor effectief leiderschap.",
      nineElements: [
        {
          name: "1. Macht en Controle & Delegatie",
          description: "Macht is iets dat je krijgt van mensen - ze geven je vertrouwen zodat je macht en controle over hen hebt",
          keyPrinciples: [
            "Formeel heb je macht vanwege je positie, maar echte macht moet je verdienen",
            "Mensen moeten vertrouwen in je hebben",
            "Ken de mensen aan wie je rapporteert - zij hebben ook macht over jou",
            "Micromanagement is een teken van doorgeslagen leiderschap"
          ],
          fergusonQuote: "Omdat ik altijd wilde winnen wilde ik eigenlijk alles weten en controleren. Maar ik ontdekte dat extreme controle niet zo'n goed idee is.",
          lesson: "Echte leiders kennen hun mensen, weten wat ze kunnen en willen, en kunnen daarom delegeren zonder alles te hoeven controleren.",
          sportExample: "Ferguson leerde dat hij niet elke pass en elke beweging hoefde te controleren - door zijn spelers goed te kennen kon hij hen vertrouwen om zelfstandig beslissingen te nemen."
        },
        {
          name: "2. Mensen Overtuigen",
          description: "Als leider ben je eigenlijk een verkoper - je moet mensen overtuigen om met jou mee te doen",
          keyPrinciples: [
            "Je moet je visie kunnen 'verkopen' binnen en buiten de organisatie",
            "Overtuigen is essentieel voor succesvol leiderschap",
            "Mensen moeten geloven in wat jij wilt bereiken"
          ],
          fergusonInsight: "Je moet als je succesvol wil zijn als leider, dan moet je mensen overtuigen om met jou mee te doen.",
          sportExample: "Ferguson moest niet alleen zijn spelers overtuigen van zijn tactiek, maar ook de directie van zijn transferplannen en de media van zijn visie."
        },
        {
          name: "3. Kijken en Luisteren",
          description: "Observatie en luisteren zijn fundamentele vaardigheden voor effectief leiderschap",
          keyPrinciples: [
            "Ga nooit in het midden van de groep staan, maar aan de buitenkant - dan kan je beter observeren",
            "Als je in de groep staat is je aandacht op de bal gericht, niet op de mensen",
            "Zorg dat je alles van je mensen weet - hoe zijn ze opgevoed, wat motiveert hen",
            "Luister en kijk naar je mensen om ze goed te leren kennen"
          ],
          assistantAdvice: "Een assistent trainer zei ooit: 'Ga nooit in het midden van de groep staan. Maar ga aan de buitenkant staan. Dan kan je beter observeren.'",
          purpose: "Je moet mensen goed kennen om ze te motiveren en het beste uit ze te halen.",
          sportExample: "Ferguson stond tijdens trainingen vaak aan de zijlijn om het gedrag en de lichaamstaal van zijn spelers te observeren, niet alleen hun technische vaardigheden."
        },
        {
          name: "4. Discipline",
          description: "Discipline staat boven alles en is de basis voor succes",
          keyPrinciples: [
            "Wat we afspreken, gaan we doen",
            "Als we trainen, trainen we - je bent er",
            "Discipline is niet onveranderbaar, maar wel heel belangrijk voor succes",
            "Stilte kan een krachtig disciplinair middel zijn"
          ],
          fergusonMethod: "Als mensen geen discipline hadden, gebruikte Ferguson stilte. Hij zei gewoon niks. Dan wisten mensen dat ze in een soort beklaagdenbankje zaten.",
          insight: "Je hoeft niemand belachelijk te maken in het openbaar. Stilte is 'killing' op dit punt.",
          sportExample: "Ferguson's beroemde 'hairdryer treatment' was minder belangrijk dan zijn gebruik van stilte om discipline af te dwingen."
        },
        {
          name: "5. Organisatie",
          description: "Leiderschap is voor de lange termijn - zet een goede organisatie neer",
          keyPrinciples: [
            "Niet alleen je team, maar de hele organisatie eromheen",
            "Neem daar je tijd voor",
            "Als je succes wilt hebben, zorg dat je een goede organisatie neerzet"
          ],
          longTermFocus: "Ferguson bouwde niet alleen teams, maar een hele infrastructuur bij Manchester United die decennia zou meegaan.",
          sportExample: "Ferguson investeerde in de jeugdacademie, trainingscentra en de hele cultuur van Manchester United, niet alleen in het eerste elftal."
        },
        {
          name: "6. Teamwork",
          description: "Een goed team heeft balans, diversiteit en onderlinge verbondenheid",
          keyPrinciples: [
            "Er moet balans zijn - je kunt niet allemaal keepers in je team hebben",
            "Verschillende karakters en mensen die op verschillende posities kunnen spelen",
            "Realiseer je dat als één speler wegvalt, de puzzel opnieuw begint",
            "Zorg dat iedereen weet hoe hij in de puzzel past"
          ],
          fergusonCriteria: [
            "Spelers moeten altijd kunnen presteren (geen blessures)",
            "Je moet op ze kunnen vertrouwen",
            "Zorg voor spelers die op meerdere posities kunnen spelen"
          ],
          friendship: "Mensen moeten vriendschap worden, familie worden. Diepe relaties hebben. Daar moet je als leider op investeren.",
          mentorship: "Zorg dat oudere teamleden geduld hebben met nieuwkomers - een nieuwkomer in een team is altijd lastig en ongemakkelijk.",
          sportExample: "Ferguson zorgde ervoor dat ervaren spelers zoals Ryan Giggs en Paul Scholes jonge talenten onder hun hoede namen."
        },
        {
          name: "7. Afstand Houden",
          description: "Een leider moet bewust afstand creëren om effectief te kunnen zijn",
          keyPrinciples: [
            "Ga vooraan in de bus zitten - creëer bewust afstand",
            "Sta niet midden in de groep - 'I'm not one of the guys'",
            "Je hoeft niet geliefd te zijn, maar je moet respect hebben",
            "Soms is het handig als mensen een beetje bang voor je zijn"
          ],
          reasoning: "Je moet moeilijke beslissingen nemen. Het is niet belangrijk dat je geliefd bent, maar dat je respect hebt.",
          balance: "Als je je spelers goed kent en helpt als ze het moeilijk hebben, krijg je respect. Maar je moet ook moeilijke beslissingen kunnen nemen.",
          sportExample: "Ferguson zat altijd vooraan in de teambus en at apart van de spelers om zijn autoriteit te behouden, maar was er wel voor hen in moeilijke tijden."
        },
        {
          name: "8. Motivatie",
          description: "Motiveer mensen door positieve benadering, consistentie en loyaliteit",
          keyPrinciples: [
            "Geef complimenten - 'Well done' zijn de meest krachtige woorden",
            "Sla mensen niet, straf niet - dit leidt niet tot verbetering of respect",
            "Geef kritiek op een positieve manier",
            "Doe kritiek altijd face-to-face, nooit in een groep"
          ],
          positiveApproach: "Niet: 'Die 10 passes waren weer fout.' Maar: 'Als je wat breder speelt ga je beter presteren.'",
          consistency: "Wees consistent - je hebt een visie, een koers, je vereist discipline. Hou dat vol. Maak in principe geen uitzonderingen.",
          exceptionalTalent: "Tenzij een speler exceptioneel veel talent heeft - denk aan hoe Guus Hiddink met Romario omging.",
          loyalty: "Ga achter je spelers staan. Als een speler iets fout doet, zeg dat het fout is omdat je nog in hem gelooft.",
          presence: "Alleen je aanwezigheid als leider motiveert al. Ferguson nam 's nachts een privévliegtuig terug om de volgende ochtend bij de training te zijn.",
          sportExample: "Ferguson verdedigde Cantona na zijn beruchte karateschop omdat hij in hem geloofde, maar maakte wel duidelijk dat het gedrag onaceptabel was."
        },
        {
          name: "9. Omgaan met Verlies",
          description: "Verlies is een kans om te leren en een betere leider te worden",
          keyPrinciples: [
            "Leer van verlies - kijk wat je beter kunt doen",
            "Verlies maakt je scherper",
            "Zelfs van verliezen word je een betere leider"
          ],
          fergusonPhilosophy: "Ferguson zag elke nederlaag als een leermoment en gebruikte het om zijn team en zichzelf te verbeteren.",
          sportExample: "Na de pijnlijke nederlaag tegen Barcelona in 2009 analyseerde Ferguson wat er fout ging en paste zijn tactiek aan voor toekomstige Europese wedstrijden."
        }
      ],
      keyLessons: [
        "Macht moet je verdienen door vertrouwen, niet alleen door positie",
        "Observatie en luisteren zijn even belangrijk als spreken",
        "Discipline is de basis, maar motivatie door positieve benadering",
        "Balans tussen afstand houden en er zijn voor je mensen",
        "Consistentie in visie en waarden, flexibiliteit in aanpak",
        "Investeer in de hele organisatie, niet alleen het team",
        "Leer van elke nederlaag en gebruik het om sterker te worden"
      ],
      legacy: "Ferguson's succes kwam van 26 jaar consequent toepassen van deze 9 elementen. Hij toonde aan dat effectief leiderschap draait om mensen begrijpen, vertrouwen opbouwen en een cultuur creëren waarin iedereen kan excelleren.",
      modernApplication: "Ferguson's elementen zijn nog steeds relevant: echte macht komt van vertrouwen, observatie is belangrijker dan controle, en positieve motivatie werkt beter dan straffen."
    }
  },
  {
    id: 'van-vugt-wiltschut',
    title: "Van Vugt & Wiltschut: Gezag vs Dominantie",
    description: "Mark van Vugt en Wendy Wiltschut onderzochten het verschil tussen gezag (gebaseerd op respect) en dominantie (gebaseerd op macht) in leiderschap.",
    content: {
      introduction: {
        title: "Het Fundamentele Verschil",
        description: "Gezag en dominantie zijn twee totaal verschillende manieren om invloed uit te oefenen, met verschillende oorzaken en gevolgen.",
        contextualNote: "In sommige situaties kan dominantie effectiever zijn dan gezag - denk aan China's aanpak van coronavirus versus Nederland's aanpak. Maar over het algemeen, zeker in Nederland, is gezag de betere optie voor organisatieleiders."
      },
      fiveComparisons: [
        {
          dimension: "1. Volgen: Vrije Keuze vs Onder Dreiging",
          authority: "Volgen is een vrije keuze - mensen kiezen ervoor om je te volgen",
          dominance: "Volgen onder dreiging - mensen volgen uit dwang of vrees voor consequenties",
          explanation: "Dit is het meest fundamentele verschil tussen beide leiderschapsstijlen.",
          examples: {
            mandela: "Mensen volgden Mandela vrijwillig vanwege zijn morele autoriteit",
            bokito: "Andere apen volgen Bokito uit angst voor zijn fysieke dominantie"
          }
        },
        {
          dimension: "2. Perceptie: Respect vs Vrees",
          authority: "De leider wordt gerespecteerd en bewonderd",
          dominance: "De dominante wordt gevreesd en gemeden",
          explanation: "Respect creëert loyaliteit, vrees creëert alleen compliance.",
          examples: {
            biden: "Biden probeerde respect te winnen met zijn acceptance speech",
            trump: "Trump gebruikte vaak intimidatie en vrees als leiderschapsstijl"
          }
        },
        {
          dimension: "3. Legitimiteit: Informeel vs Formeel Leiderschap",
          authority: "Informeel leider - wordt gevolgd ook zonder formele positie",
          dominance: "Formeel leider - macht komt vooral van de positie",
          nuance: "De beste leiders zijn 'legitiem' - ze hebben zowel de formele positie als de informele acceptatie.",
          explanation: "Mandela was jarenlang informeel leider voordat hij president werd. Biden was informeel leider met veel volgers voordat hij president werd.",
          examples: {
            mandela: "Lange tijd informeel leider, later legitiem als president",
            bokito: "Vooral formeel leider door zijn dominante positie",
            biden: "Van informeel leider naar legitiem leider als president"
          }
        },
        {
          dimension: "4. Focus: Groepsbelang vs Eigenbelang",
          authority: "Het belang van de groep staat centraal - creëert meerwaarde voor iedereen",
          dominance: "Het belang van de dominante staat centraal - meerwaarde voor zichzelf",
          explanation: "Gezagsleiders offeren zichzelf op voor de groep, dominante leiders gebruiken de groep voor eigen gewin.",
          examples: {
            mandela: "Gaf alles op voor zijn volk - jarenlang in gevangenis voor de groep",
            bokito: "Staat bovenaan, krijgt alle vrouwen - het gaat om hem",
            biden: "Zei in zijn speech dat hij de visie van het volk wilde waarmaken",
            trump: "Weigerde nederlaag te accepteren - ging tegen groepsbelang in voor eigen ego"
          }
        },
        {
          dimension: "5. Groepsdynamiek: Samenwerking vs Verdeeldheid",
          authority: "Versterkt samenwerking en eenheid binnen de groep",
          dominance: "Stimuleert wantrouwen, competitie en verdeeldheid",
          explanation: "Gezagsleiders brengen mensen samen, dominante leiders verdelen om te heersen.",
          examples: {
            biden: "'Er zijn geen rode staten, geen blauwe staten, alleen de Verenigde Staten' - zoekt samenwerking",
            trump: "Creëerde meer verdeeldheid en polarisatie tijdens zijn presidentschap"
          }
        }
      ],
      realWorldExamples: {
        title: "Praktijkvoorbeelden",
        mandela: {
          name: "Nelson Mandela - Gezag",
          description: "Het perfecte voorbeeld van leiderschap op basis van gezag",
          characteristics: [
            "Mensen volgden hem vrijwillig vanwege zijn morele autoriteit",
            "Werd gerespecteerd, niet gevreesd",
            "Lange tijd informeel leider, later legitiem als president",
            "Offerde zichzelf op voor het groepsbelang",
            "Bracht verdeelde groepen samen"
          ]
        },
        bokito: {
          name: "Bokito - Dominantie",
          description: "Voorbeeld van puur dominante leiderschap",
          characteristics: [
            "Anderen volgen uit angst voor zijn fysieke kracht",
            "Wordt gevreesd, niet gerespecteerd",
            "Vooral formeel leider door dominante positie",
            "Gebruikt positie voor eigen voordeel (vrouwen, voedsel)",
            "Houdt groep in bedwang door intimidatie"
          ]
        },
        biden: {
          name: "Joe Biden - Complexe Mix",
          description: "Toont zowel gezag als dominantie aspecten",
          authorityAspects: [
            "Won met 'de meeste stemmen ooit' - suggereert vrijwillige keuze",
            "Benadrukte in acceptance speech dat hij voor het volk werkt",
            "Zocht samenwerking: 'We zijn allemaal Amerikanen'",
            "Van informeel naar legitiem leider"
          ],
          complexities: [
            "Won maar net - bijna helft van land wilde hem niet",
            "Veel mensen worden 'gedwongen' hem te volgen",
            "Vraag: in hoeverre is volgen dan echt vrije keuze?"
          ]
        },
        trump: {
          name: "Donald Trump - Genuanceerd Beeld",
          description: "Toont dat leiders niet zwart-wit zijn - mix van dominantie en gezag",
          dominanceAspects: [
            "Weigerde nederlaag te accepteren - eigen ego boven groepsbelang",
            "Gebruikte vaak intimidatie en vrees",
            "Creëerde verdeeldheid en polarisatie",
            "Focus op eigen imago en macht"
          ],
          authorityAspects: [
            "Werd wel gekozen tot president - suggereert respect van groot deel volk",
            "'America First' - probeerde wel Amerika beter te maken",
            "Creëerde meerwaarde voor veel Amerikanen",
            "Zocht samenwerking binnen Amerika"
          ],
          nuance: "Het is niet zo zwart-wit. Je moet dieper nadenken en genuanceerd analyseren hoe leiders scoren op verschillende aspecten."
        }
      },
      culturalContext: {
        title: "Culturele en Situationele Context",
        description: "De effectiviteit van gezag vs dominantie hangt af van cultuur en situatie.",
        example: "China's dominante aanpak van coronavirus was effectiever dan Nederland's gezagsgerichte aanpak met vrijheden en inspraak.",
        dutchContext: "In Nederland en vergelijkbare culturen is gezag meestal effectiever omdat mensen hoger opgeleid zijn en meer autonomie verwachten."
      },
      practicalApplication: {
        title: "Praktische Toepassing voor Analyse",
        analysis: "Bij het analyseren van een leider, kijk naar alle vijf dimensies en geef een genuanceerd beeld:",
        steps: [
          "Pak een voorbeeld van de leider",
          "Analyseer in welke aspecten hij/zij links scoort (gezag)",
          "Analyseer in welke aspecten hij/zij rechts scoort (dominantie)",
          "Sommige leiders zijn volledig links of rechts, anderen hebben een mix",
          "Geef een genuanceerd antwoord met concrete voorbeelden"
        ]
      },
      keyInsights: [
        "Gezag en dominantie zijn niet zwart-wit - de meeste leiders tonen aspecten van beide",
        "Context en cultuur bepalen welke stijl effectiever is",
        "In moderne, democratische samenlevingen is gezag meestal effectiever",
        "Analyse van leiders vereist nuance en concrete voorbeelden",
        "Legitiem leiderschap (formeel + informeel) is het meest effectief"
      ],
      sportApplication: "In sport zie je beide stijlen: sommige coaches regeren door angst (dominantie), anderen door respect en vertrouwen (gezag). De meest succesvolle sportleiders combineren formele autoriteit met echte expertise en persoonlijk charisma."
    }
  },
  {
    id: 'authority-development',
    title: "Ontwikkeling van Gezag",
    description: "Wiltschut en Van Vugt beschrijven vijf componenten die essentieel zijn voor het ontwikkelen van gezag als leider, geïllustreerd aan de hand van Virgil van Dijk als aanvoerder van het Nederlands elftal.",
    content: {
      introduction: {
        title: "Hoe Ontwikkel Je Gezag?",
        description: "Er zijn vijf componenten die bepalen of mensen je willen volgen als leider. Deze theorie laat zien hoe je gezag kunt opbouwen en behouden.",
        keyInsight: "Goede leiders worden niet geboren, maar ontwikkelen hun gezag door bewust aan deze vijf componenten te werken."
      },
      fiveComponents: [
        {
          name: "1. Vind Je Niche - Doe Waar Je Sterk In Bent",
          description: "Je moet wel bepaalde kwaliteiten hebben om een leider te zijn. Het is altijd een combinatie tussen de persoon die je bent en wat de omgeving nodig heeft.",
          keyPrinciple: "Kwaliteit ontstaat uit de match tussen jouw sterke punten en wat de groep nodig heeft.",
          characteristics: [
            "Je moet echt goed zijn in wat je doet",
            "Kwaliteit is een combinatie van persoon en omgevingsbehoeften",
            "Zonder competentie geen respect",
            "Je moet je waarde hebben bewezen"
          ],
          sportExample: {
            example: "Virgil van Dijk als aanvoerder Nederlands elftal",
            explanation: "Van Dijk is wereldtop en daarom logisch dat hij aanvoerder is. Het zou verbazingwekkend zijn als een speler zonder internationale reputatie aanvoerder zou worden.",
            lesson: "Je moet genoeg respect hebben verdiend met je kwaliteiten om een leiderschapspositie op te pakken."
          },
          practicalTips: [
            "Ontwikkel expertise in je vakgebied",
            "Zorg dat je prestaties zichtbaar zijn",
            "Begrijp wat je organisatie/team nodig heeft",
            "Bouw een track record op van successen"
          ]
        },
        {
          name: "2. Inlevingsvermogen - Begrijp Je Mensen",
          description: "Het is heel belangrijk dat je begrijpt hoe je teamleden in elkaar zitten. Iedereen is anders en vraagt een andere benadering.",
          keyPrinciple: "Effectieve leiders passen hun stijl aan per persoon omdat iedereen uniek is.",
          characteristics: [
            "Begrijp hoe mensen in elkaar zitten",
            "Iedereen is anders en vraagt andere benadering",
            "Leer hoe mensen leren en zich ontwikkelen",
            "Investeer tijd in het leren kennen van individuen"
          ],
          sportExample: {
            example: "Van Dijk's omgang met verschillende spelers",
            explanation: "Hij gaat anders om met jonge talenten zoals De Ligt en Frenkie de Jong dan met ervaren spelers zoals Wijnaldum. Beide groepen hebben verschillende behoeften.",
            lesson: "Als je goed begrijpt aan wie je leiding geeft en je leeft je echt in, word je meer gerespecteerd en zullen ze je eerder volgen."
          },
          practicalTips: [
            "Voer regelmatig één-op-één gesprekken",
            "Leer over achtergronden en motivaties van teamleden",
            "Pas je communicatiestijl aan per persoon",
            "Toon oprechte interesse in mensen als individu"
          ]
        },
        {
          name: "3. Dien de Groep - Groepsbelang Boven Eigenbelang",
          description: "Ga niet voor je eigen belang, maar ga voor het belang van de groep. Dan zullen mensen je eerder volgen omdat je hetzelfde doel hebt.",
          keyPrinciple: "Mensen volgen leiders die het groepsbelang boven hun eigenbelang stellen.",
          characteristics: [
            "Groepsbelang staat altijd voorop",
            "Niet bezig zijn met eigen imago of voordeel",
            "Voorbeeldfunctie nemen",
            "Anderen helpen ontwikkelen"
          ],
          sportExample: {
            example: "Van Dijk vs Ronaldo",
            explanation: "Van Dijk is duidelijk bezig met winnen voor het team. Ronaldo daarentegen schiet vaak zelf ook als een teamgenoot beter staat - is hij bezig met winnen of met goals maken?",
            lesson: "Mensen volgen eerder iemand die de groep dient dan iemand die vooral met zichzelf bezig is."
          },
          quote: "Ik ben nu een van de spelers aan wie de rest gaat optrekken en dat past ook bij me.",
          practicalTips: [
            "Neem beslissingen op basis van teambelang",
            "Geef anderen de credits voor successen",
            "Investeer in ontwikkeling van teamleden",
            "Toon voorbeeldgedrag in alles wat je doet"
          ]
        },
        {
          name: "4. Timing - Ken Je Moment",
          description: "Wanneer moet je optreden en wanneer niet? Je moet niet te veel doen, niet te weinig doen. Timing is cruciaal voor effectief leiderschap.",
          keyPrinciple: "Effectieve leiders weten wanneer ze moeten handelen en wanneer ze zich terug moeten trekken.",
          characteristics: [
            "Weten wanneer wel en niet op te treden",
            "Gevoel hebben voor de juiste momenten",
            "Niet te veel, niet te weinig doen",
            "Situationeel bewustzijn hebben"
          ],
          sportExample: {
            example: "Van Dijk's ontwikkeling als leider",
            explanation: "Eerder zei hij: 'Het team zat in overgangsperiode, het was zoeken. Ik had toen nog niet de status van volwaardige international.' Hij wist dat de timing toen verkeerd was om leiding te geven.",
            lesson: "Je moet wel de kwaliteit en status hebben om boven de groep te staan voordat je leiderschapsrol kunt pakken."
          },
          practicalTips: [
            "Bouw eerst je credibiliteit op voordat je leidt",
            "Lees de situatie goed - wanneer is interventie nodig?",
            "Weet wanneer je moet spreken en wanneer je moet zwijgen",
            "Respecteer de ontwikkelingsfase van je team"
          ]
        },
        {
          name: "5. Gedraag Je - Wees Eerlijk en Betrouwbaar",
          description: "Wees altijd eerlijk, betrouwbaar en ethisch. Het is een soort ethisch component - geef het goede voorbeeld.",
          keyPrinciple: "Integriteit en voorbeeldgedrag zijn fundamenteel voor gezag.",
          characteristics: [
            "Altijd eerlijk en betrouwbaar zijn",
            "Ethisch gedrag in alle situaties",
            "Goede voorbeeld geven",
            "Consistent zijn in woord en daad"
          ],
          sportExample: {
            example: "Van Dijk als rolmodel",
            explanation: "Hij wordt een rolmodel genoemd voor teamgenoten en jonge supporters. Hij is een echte professional, komt niet in problemen en doet geen gekke dingen.",
            lesson: "Als je extravagant leeft of gekke dingen doet, nemen mensen je minder serieus als leider van een groep."
          },
          practicalTips: [
            "Houd je aan afspraken en beloftes",
            "Wees transparant in je communicatie",
            "Neem verantwoordelijkheid voor je fouten",
            "Leef volgens de waarden die je predikt"
          ]
        }
      ],
      continuousDevelopment: {
        title: "Voortdurende Ontwikkeling",
        description: "Gezag is niet iets dat je eenmaal hebt en dan behoudt. Het vereist constante aandacht en ontwikkeling.",
        components: [
          "Blijf werken aan je competenties (niche)",
          "Blijf leren over je mensen (inlevingsvermogen)",
          "Blijf het groepsbelang voorop stellen",
          "Blijf je timing verbeteren",
          "Blijf integer en betrouwbaar"
        ]
      },
      practicalApplication: {
        title: "Praktische Toepassing",
        analysis: "Bij het analyseren van een leider kun je deze vijf componenten gebruiken:",
        steps: [
          "Heeft de leider de juiste kwaliteiten voor zijn/haar rol?",
          "Toont hij/zij inlevingsvermogen met verschillende teamleden?",
          "Stelt hij/zij het groepsbelang boven eigenbelang?",
          "Heeft hij/zij goed gevoel voor timing?",
          "Gedraagt hij/zij zich integer en betrouwbaar?"
        ]
      },
      keyInsights: [
        "Gezag moet je verdienen door competentie en karakter",
        "Verschillende mensen vragen verschillende leiderschapsbenaderingen",
        "Timing is cruciaal - je moet je moment kennen",
        "Integriteit en voorbeeldgedrag zijn niet onderhandelbaar",
        "Gezagsontwikkeling is een continu proces"
      ],
      sportApplication: "In sport zie je duidelijk het verschil tussen leiders die gezag hebben (zoals Van Dijk) en die alleen op positie vertrouwen. De beste sportleiders combineren alle vijf componenten en blijven zich ontwikkelen."
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