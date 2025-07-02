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
    description: "Henry Mintzberg identificeerde 10 managementrollen die leiders vervullen, verdeeld over drie categorieën: interpersoonlijk, informationeel en besluitvorming.",
    content: {
      categories: [
        {
          name: "Interpersoonlijke Rollen",
          roles: [
            {
              name: "Boegbeeld",
              description: "Ceremoniële en symbolische taken uitvoeren als representant van de organisatie"
            },
            {
              name: "Leider",
              description: "Motiveren en aansturen van medewerkers, verantwoordelijk voor personeelszaken"
            },
            {
              name: "Verbindingspersoon",
              description: "Netwerken onderhouden met externe contacten en stakeholders"
            }
          ]
        },
        {
          name: "Informationele Rollen",
          roles: [
            {
              name: "Monitor",
              description: "Informatie verzamelen over interne en externe ontwikkelingen"
            },
            {
              name: "Verspreider",
              description: "Informatie doorspelen aan medewerkers binnen de organisatie"
            },
            {
              name: "Woordvoerder",
              description: "Informatie naar buiten brengen namens de organisatie"
            }
          ]
        },
        {
          name: "Besluitvormingsrollen",
          roles: [
            {
              name: "Ondernemer",
              description: "Nieuwe projecten initiëren en veranderingen doorvoeren"
            },
            {
              name: "Probleemoplosser",
              description: "Reageren op onverwachte gebeurtenissen en crises"
            },
            {
              name: "Hulpbronnenverdeler",
              description: "Beslissen over de toewijzing van middelen, tijd en personeel"
            },
            {
              name: "Onderhandelaar",
              description: "Namens de organisatie onderhandelen met externe partijen"
            }
          ]
        }
      ],
      sportExample: "Een voetbaltrainer vervult alle rollen: als boegbeeld bij persconferenties, als leider van het team, als verbindingspersoon met de clubleiding, als monitor van spelprestaties, als verspreider van tactische informatie, als woordvoerder naar de media, als ondernemer bij nieuwe trainingsmethoden, als probleemoplosser bij blessures, als hulpbronnenverdeler van speeltijd, en als onderhandelaar bij transfers."
    }
  },
  {
    id: 'hersey-blanchard',
    title: "Situationeel Leidinggeven (SLII)",
    description: "Het SLII-model van Hersey en Blanchard stelt dat er geen beste leiderschapsstijl is - de effectiviteit hangt af van het ontwikkelingsniveau van de persoon voor een specifieke taak.",
    content: {
      introduction: {
        title: "Kernprincipe van SLII",
        description: "Situationeel Leidinggeven is gebaseerd op het idee dat effectief leiderschap afhangt van het aanpassen van je leiderschapsstijl aan het ontwikkelingsniveau van je teamleden voor specifieke taken.",
        keyInsight: "Er is geen beste leiderschapsstijl - het hangt af van de situatie en de persoon."
      },
      coreModel: {
        title: "Het SLII Model",
        description: "Het model combineert twee gedragsdimensies om vier verschillende leiderschapsstijlen te creëren:",
        dimensions: [
          {
            name: "Sturend Gedrag",
            description: "Eenrichtingscommunicatie waarbij de leider definieert wat, hoe, waar en wanneer taken uitgevoerd moeten worden.",
            characteristics: [
              "Duidelijke instructies geven",
              "Taken en rollen definiëren", 
              "Nauw toezicht houden",
              "Prestaties monitoren"
            ]
          },
          {
            name: "Ondersteunend Gedrag", 
            description: "Tweerichtingscommunicatie waarbij de leider luistert, ondersteunt, faciliteert en betrokkenheid stimuleert.",
            characteristics: [
              "Actief luisteren",
              "Ondersteuning bieden",
              "Faciliteren van probleemoplossing",
              "Betrokkenheid stimuleren"
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
            "Weinig specifieke vaardigheden",
            "Bereid om te leren",
            "Overschat soms eigen kunnen"
          ],
          needs: "Veel sturing en duidelijke instructies, weinig ondersteuning nodig vanwege hoge motivatie",
          sportExample: "Een nieuwe speler die net bij het team komt - zeer gemotiveerd maar moet nog de tactiek en teamspel leren"
        },
        {
          level: "D2 - Ontgoochelde Leerling", 
          competence: "Laag tot Gemiddeld",
          commitment: "Laag",
          characteristics: [
            "Heeft wat ervaring opgedaan",
            "Realiseert zich dat het moeilijker is dan gedacht", 
            "Motivatie en vertrouwen dalen",
            "Kan gefrustreerd raken"
          ],
          needs: "Zowel veel sturing als veel ondersteuning om door de moeilijke periode te komen",
          sportExample: "Een speler die na enkele maanden merkt dat het niveau hoger ligt dan verwacht en begint te twijfelen aan eigen kunnen"
        },
        {
          level: "D3 - Voorzichtige Uitvoerder",
          competence: "Gemiddeld tot Hoog", 
          commitment: "Variabel",
          characteristics: [
            "Heeft de vaardigheden ontwikkeld",
            "Twijfelt aan eigen kunnen om zelfstandig te werken",
            "Wil het goed doen maar mist vertrouwen",
            "Zoekt bevestiging"
          ],
          needs: "Weinig sturing maar veel ondersteuning en vertrouwen",
          sportExample: "Een ervaren speler die de vaardigheden heeft maar twijfelt of hij/zij de verantwoordelijkheid van aanvoerder aankan"
        },
        {
          level: "D4 - Zelfstandige Uitvoerder",
          competence: "Hoog",
          commitment: "Hoog",
          characteristics: [
            "Heeft zowel vaardigheden als vertrouwen",
            "Kan zelfstandig werken en beslissingen nemen", 
            "Neemt verantwoordelijkheid",
            "Motiveert zichzelf"
          ],
          needs: "Weinig sturing en weinig ondersteuning - kan gedelegeerd worden",
          sportExample: "Een ervaren aanvoerder die zelfstandig kan functioneren en andere spelers kan begeleiden"
        }
      ],
      leadershipStyles: [
        {
          style: "S1 - Sturend",
          behavior: "Hoog sturend, laag ondersteunend",
          when: "Bij D1 - Enthousiaste Beginner",
          description: "De leider geeft specifieke instructies en houdt nauw toezicht op de uitvoering van taken.",
          approach: [
            "Duidelijke instructies en verwachtingen communiceren",
            "Taken stap voor stap uitleggen",
            "Regelmatig controleren en feedback geven",
            "Beslissingen nemen voor de persoon"
          ],
          sportExample: "Een trainer die een nieuwe speler exact vertelt waar te staan, wanneer te lopen en hoe te verdedigen"
        },
        {
          style: "S2 - Coachend", 
          behavior: "Hoog sturend, hoog ondersteunend",
          when: "Bij D2 - Ontgoochelde Leerling",
          description: "De leider geeft nog steeds veel sturing maar biedt ook ondersteuning en luistert naar zorgen.",
          approach: [
            "Uitleggen waarom taken belangrijk zijn",
            "Luisteren naar zorgen en frustraties", 
            "Ondersteuning bieden bij moeilijkheden",
            "Samen beslissingen nemen"
          ],
          sportExample: "Een trainer die een worstelde speler niet alleen corrigeert maar ook uitlegt waarom, luistert naar frustraties en moed inspreekt"
        },
        {
          style: "S3 - Ondersteunend",
          behavior: "Laag sturend, hoog ondersteunend", 
          when: "Bij D3 - Voorzichtige Uitvoerder",
          description: "De leider faciliteert en ondersteunt bij probleemoplossing en besluitvorming.",
          approach: [
            "Vragen stellen in plaats van antwoorden geven",
            "Luisteren en ondersteuning bieden",
            "Vertrouwen uitspreken in hun kunnen", 
            "Samen problemen oplossen"
          ],
          sportExample: "Een trainer die een ervaren speler vraagt wat hij/zij denkt dat de beste aanpak is en vertrouwen uitspreekt"
        },
        {
          style: "S4 - Delegerend",
          behavior: "Laag sturend, laag ondersteunend",
          when: "Bij D4 - Zelfstandige Uitvoerder", 
          description: "De leider delegeert verantwoordelijkheid en autoriteit aan de competente en gemotiveerde persoon.",
          approach: [
            "Verantwoordelijkheid volledig overdragen",
            "Beschikbaar blijven voor ondersteuning indien nodig",
            "Resultaten monitoren zonder micromanagement",
            "Erkenning geven voor prestaties"
          ],
          sportExample: "Een trainer die de aanvoerder de vrijheid geeft om tactische wijzigingen door te voeren tijdens de wedstrijd"
        }
      ],
      keyPrinciples: [
        "Er is geen beste leiderschapsstijl - het hangt af van de situatie",
        "Ontwikkelingsniveau is taakspecifiek - iemand kan D4 zijn voor één taak en D2 voor een andere",
        "Het doel is om mensen te ontwikkelen naar D4 niveau",
        "Flexibiliteit in leiderschapsstijl is essentieel",
        "Communicatie over verwachtingen en ontwikkelingsniveau is cruciaal"
      ],
      diagnosticProcess: [
        "Bepaal het ontwikkelingsniveau van de persoon voor de specifieke taak",
        "Kies de bijpassende leiderschapsstijl",
        "Communiceer duidelijk over verwachtingen en aanpak", 
        "Monitor de voortgang en pas de stijl aan indien nodig",
        "Werk toe naar meer zelfstandigheid (D4 niveau)"
      ],
      commonMistakes: [
        "Eén stijl gebruiken voor alle situaties en mensen",
        "Aannemen dat ervaren mensen altijd D4 zijn",
        "Te snel overgaan naar delegeren zonder voldoende ontwikkeling",
        "Niet communiceren over de gekozen aanpak",
        "Ontwikkelingsniveau niet regelmatig hervalueren"
      ],
      benefits: [
        "Betere ontwikkeling van teamleden",
        "Verhoogde effectiviteit van leiderschap",
        "Meer gemotiveerde en competente medewerkers", 
        "Duidelijkere communicatie over verwachtingen",
        "Flexibele en adaptieve leiderschapsaanpak"
      ]
    }
  },
  {
    id: 'macht-in-leiderschap',
    title: "Macht in Leiderschap",
    description: "Inzichten van Keltner over hoe macht het brein beïnvloedt en Marcus & Van Dam's zes machtsbronnen voor effectief leiderschap in de sport.",
    content: {
      introduction: {
        title: "Macht en Leiderschap",
        description: "Macht is een fundamenteel aspect van leiderschap, maar het brengt ook risico's met zich mee. Verschillende wetenschappers hebben onderzocht hoe macht werkt en hoe het effectief en ethisch gebruikt kan worden.",
        keyInsight: "Macht kan zowel een krachtig instrument voor positieve verandering zijn als een bron van corruptie en disfunctioneel gedrag."
      },
      keltnerTheory: {
        problem: {
          description: "Volgens Dacher Keltner beschadigt macht letterlijk je brein door empathie-circuits te onderdrukken.",
          effects: [
            "Verminderde empathie voor anderen",
            "Verhoogde impulsiviteit en risicogedrag", 
            "Minder aandacht voor sociale signalen",
            "Toegenomen egocentrisme",
            "Verlies van perspectief op anderen"
          ]
        },
        preventionStrategies: [
          {
            name: "1. Perspectief Nemen",
            description: "Bewust proberen de wereld te zien vanuit het perspectief van anderen.",
            practice: "Regelmatig vragen stellen zoals 'Hoe zou dit voelen voor mijn teamleden?' en actief luisteren naar verschillende standpunten."
          },
          {
            name: "2. Empathie Oefenen", 
            description: "Actief werken aan het begrijpen en voelen van emoties van anderen.",
            practice: "Tijd besteden aan persoonlijke gesprekken met teamleden en oprecht interesse tonen in hun welzijn en ontwikkeling."
          },
          {
            name: "3. Nederigheid Cultiveren",
            description: "Erkennen van eigen beperkingen en de waarde van anderen.",
            practice: "Regelmatig feedback vragen, fouten toegeven en erkenning geven aan de bijdragen van teamleden."
          },
          {
            name: "4. Macht Delen",
            description: "Bewust macht en verantwoordelijkheid delegeren aan anderen.",
            practice: "Besluitvorming decentraliseren, teamleden autonomie geven en leiderschap ontwikkelen bij anderen."
          }
        ]
      },
      marcusVanDam: {
        positionBased: [
          {
            name: "Positiemacht",
            description: "Macht die voortkomt uit je formele functie of positie in de hiërarchie.",
            advantages: [
              "Onmiddellijk beschikbaar bij aanstelling",
              "Duidelijke autoriteit en verantwoordelijkheid",
              "Effectief voor snelle besluitvorming"
            ],
            disadvantages: [
              "Verdwijnt wanneer je de positie verlaat",
              "Kan weerstand en compliance in plaats van commitment creëren",
              "Beperkt effectief bij gelijken of externe partijen"
            ],
            sportExample: "Een hoofdtrainer die spelers kan opstellen of wegsturen vanwege zijn formele positie"
          },
          {
            name: "Beloningmacht",
            description: "Macht gebaseerd op het vermogen om beloningen toe te kennen.",
            advantages: [
              "Kan motiverend werken",
              "Duidelijke koppeling tussen prestatie en beloning",
              "Flexibel in toepassing"
            ],
            disadvantages: [
              "Kan afhankelijkheid creëren",
              "Werkt alleen zolang beloningen waardevol zijn",
              "Kan externe motivatie bevorderen ten koste van intrinsieke motivatie"
            ],
            sportExample: "Een trainer die speeltijd, bonussen of erkenning kan toekennen aan goed presterende spelers"
          },
          {
            name: "Dwangmacht",
            description: "Macht gebaseerd op het vermogen om straffen op te leggen.",
            advantages: [
              "Kan snel gedrag veranderen",
              "Effectief bij het handhaven van regels",
              "Duidelijke consequenties"
            ],
            disadvantages: [
              "Creëert angst en weerstand",
              "Kan relaties beschadigen",
              "Werkt alleen bij aanwezigheid van de machthebber"
            ],
            sportExample: "Een trainer die spelers kan schorsen, beboeten of uit het team zetten bij regelovertreding"
          }
        ],
        personBased: [
          {
            name: "Persoonlijke Macht",
            description: "Macht gebaseerd op persoonlijke kwaliteiten, competenties en karakter.",
            advantages: [
              "Duurzaam en overdraagbaar",
              "Creëert echte commitment",
              "Onafhankelijk van formele positie"
            ],
            disadvantages: [
              "Duurt lang om op te bouwen",
              "Moeilijk te meten",
              "Kan verloren gaan bij verkeerde beslissingen"
            ],
            sportExample: "Een trainer die respect verdient door zijn expertise, integriteit en de manier waarop hij spelers ontwikkelt"
          },
          {
            name: "Informatiemacht",
            description: "Macht gebaseerd op toegang tot en controle over belangrijke informatie.",
            advantages: [
              "Kan snel impact hebben",
              "Waardevol in besluitvorming",
              "Flexibel in gebruik"
            ],
            disadvantages: [
              "Kan verloren gaan wanneer informatie veroudert",
              "Vereist constante update",
              "Kan leiden tot informatiehoarding"
            ],
            sportExample: "Een trainer die uitgebreide kennis heeft van tegenstanders, spelersstatistieken en tactische trends"
          },
          {
            name: "Verbindingsmacht",
            description: "Macht gebaseerd op je netwerk en connecties met invloedrijke personen of groepen.",
            advantages: [
              "Kan deuren openen",
              "Vergroot invloedssfeer",
              "Waardevol voor samenwerking"
            ],
            disadvantages: [
              "Afhankelijk van anderen",
              "Kan verloren gaan bij veranderende relaties",
              "Vereist onderhoud van netwerk"
            ],
            sportExample: "Een trainer met goede contacten bij de voetbalbond, media en andere clubs die hem helpen bij transfers en besluitvorming"
          }
        ]
      },
      integration: {
        title: "Integratie van Keltner en Marcus & Van Dam",
        description: "Door Keltner's waarschuwingen te combineren met Marcus & Van Dam's machtsbronnen krijgen we een compleet beeld van effectief machtgebruik.",
        keyPoints: [
          "Persoonlijke Macht is het minst risicovol voor Keltner's 'macht beschadigt je brein' effecten",
          "Positie-gebonden macht (Positiemacht, Dwangmacht) heeft het hoogste risico voor machtsmisbruik",
          "Keltner's preventiestrategieën zijn vooral belangrijk bij het gebruik van formele macht",
          "Een combinatie van verschillende machtsbronnen is meestal effectiever dan afhankelijkheid van één bron",
          "Ethisch machtgebruik vereist constant zelfbewustzijn en feedback van anderen"
        ]
      },
      practicalApplications: [
        {
          situation: "Nieuwe trainer bij een team",
          approach: "Begin met Positiemacht maar investeer snel in Persoonlijke Macht",
          powerSources: ["Positiemacht", "Informatiemacht", "Persoonlijke Macht"]
        },
        {
          situation: "Ervaren trainer met weerstand van spelers",
          approach: "Focus op Persoonlijke Macht en Verbindingsmacht, vermijd Dwangmacht",
          powerSources: ["Persoonlijke Macht", "Verbindingsmacht", "Informatiemacht"]
        },
        {
          situation: "Crisis situatie die snelle actie vereist",
          approach: "Gebruik Positiemacht en Dwangmacht maar herstel relaties daarna",
          powerSources: ["Positiemacht", "Dwangmacht", "Informatiemacht"]
        },
        {
          situation: "Lange termijn teamontwikkeling",
          approach: "Investeer in Persoonlijke Macht en deel macht via delegatie",
          powerSources: ["Persoonlijke Macht", "Beloningmacht", "Verbindingsmacht"]
        }
      ],
      warningSignals: [
        "Je luistert minder naar feedback van teamleden",
        "Je neemt steeds meer beslissingen alleen",
        "Je voelt je superieur aan anderen",
        "Je hebt minder empathie voor de problemen van teamleden",
        "Je omringt jezelf alleen met mensen die het met je eens zijn",
        "Je wordt ongeduldig met vragen of kritiek",
        "Je denkt dat regels niet voor jou gelden"
      ],
      ethicalGuidelines: [
        "Gebruik macht ten dienste van het team, niet voor persoonlijk gewin",
        "Wees transparant over besluitvorming waar mogelijk",
        "Zoek regelmatig feedback en wees open voor kritiek",
        "Investeer in de ontwikkeling van anderen",
        "Erken je fouten en neem verantwoordelijkheid",
        "Behandel alle teamleden met respect, ongeacht hun status",
        "Gebruik de minst invasieve vorm van macht die effectief is"
      ]
    }
  },
  {
    id: 'narcisme',
    title: "Disfunctioneel Leiderschap (Kets de Vries)",
    description: "Manfred Kets de Vries beschrijft disfunctionele leiderschapspatronen die ontstaan wanneer leiders 'ontsporen' en niet meer effectief kunnen functioneren.",
    content: {
      dysfunctionalPatterns: [
        {
          name: "De Conflictvermijdende Leider",
          description: "Leiders die geen moeilijke beslissingen kunnen nemen en iedereen aardig willen vinden.",
          characteristics: [
            "Vermijdt confrontaties en moeilijke gesprekken",
            "Wil door iedereen aardig gevonden worden", 
            "Kan geen grenzen stellen",
            "Stelt beslissingen uit of delegeert ze weg",
            "Zoekt vaak iemand anders om moeilijke beslissingen te nemen"
          ],
          consequences: [
            "Problemen worden niet opgelost",
            "Team verliest respect voor de leider",
            "Onduidelijkheid over richting en prioriteiten",
            "Prestaties van het team dalen"
          ],
          recognition: [
            "Beslissingen worden constant uitgesteld",
            "Leider zoekt altijd consensus, ook bij dringende zaken",
            "Vermijdt directe feedback aan teamleden",
            "Delegeert alle 'vervelende' taken"
          ],
          sportExample: "Een trainer die geen basisspelers durft te wisselen uit angst voor conflict, ook al presteren ze slecht. Voorbeelden: Bill Clinton (wilde door iedereen aardig gevonden worden) en Richard Branson (delegeerde moeilijke beslissingen)."
        },
        {
          name: "De Tirannieke Leider", 
          description: "Leiders die agressief en destructief gedrag vertonen tegen teamleden.",
          characteristics: [
            "Verbaal of emotioneel agressief tegen mensen",
            "Vernietigt de zelfvertrouwen van anderen",
            "Gebruikt angst als primaire motivatiemethode",
            "Toont geen empathie voor teamleden",
            "Ziet anderen als bedreigingen"
          ],
          consequences: [
            "Hoog verloop van getalenteerde mensen",
            "Angstcultuur binnen het team",
            "Verminderde creativiteit en innovatie",
            "Psychologische schade bij teamleden"
          ],
          recognition: [
            "Mensen zijn bang om fouten toe te geven",
            "Teamleden vermijden contact met de leider",
            "Hoge ziekteverzuim en verloop",
            "Geen open communicatie"
          ],
          sportExample: "Een trainer die spelers publiekelijk vernedert, schreeuwt en intimideert. Voorbeelden uit de geschiedenis: Stalin, Kim Jong-un, en in mindere mate Donald Trump (verbaal agressief)."
        },
        {
          name: "De Micromanager",
          description: "Leiders die alles willen controleren en geen controle kunnen loslaten.",
          characteristics: [
            "Wil alle details weten en controleren",
            "Kan niet delegeren",
            "Leest alle contracten en documenten persoonlijk",
            "Bemoeit zich met taken van ondergeschikten",
            "Vertrouwt niemand anders met belangrijke zaken"
          ],
          consequences: [
            "Teamleden voelen zich niet vertrouwd",
            "Verminderde efficiëntie en snelheid",
            "Geen ontwikkeling van teamleden",
            "Leider wordt een bottleneck"
          ],
          recognition: [
            "Alle beslissingen moeten via de leider",
            "Teamleden wachten constant op goedkeuring",
            "Leider is betrokken bij kleinste details",
            "Geen autonomie voor teamleden"
          ],
          sportExample: "Een trainer die elke pass, elke beweging wil controleren en spelers geen vrijheid geeft om eigen beslissingen te nemen. Elon Musk wordt soms genoemd als voorbeeld van micromanagement."
        },
        {
          name: "De Manische Leider",
          description: "Leiders die hyperactief zijn en onsamenhangende beslissingen nemen - 'heel hard rennen maar de verkeerde kant op'.",
          characteristics: [
            "Extreem hyperactief en energiek",
            "Neemt impulsieve, onsamenhangende beslissingen",
            "Maakt anderen 'gek' met constant veranderende prioriteiten",
            "Heeft moeite met focus en consistentie",
            "Springt van project naar project"
          ],
          consequences: [
            "Team raakt gedesoriënteerd",
            "Geen duidelijke richting of strategie",
            "Verspilling van energie en middelen",
            "Stress en verwarring bij teamleden"
          ],
          recognition: [
            "Constant veranderende prioriteiten",
            "Veel projecten worden gestart maar niet afgemaakt",
            "Teamleden weten niet waar ze aan toe zijn",
            "Chaos en verwarring in de organisatie"
          ],
          sportExample: "Een trainer die elke week een nieuwe tactiek introduceert, spelers constant van positie wisselt en geen consistente lijn heeft. Het citaat van Kets de Vries: 'We zagen hem heel hard rennen, hij raakte nog net met zijn voeten de grond, maar de leider liep wel de verkeerde kant op.'"
        },
        {
          name: "De Ontoegankelijke Leider",
          description: "Leiders die zich compleet afschermen van de realiteit en hun teamleden.",
          characteristics: [
            "Isoleert zichzelf van het team",
            "Heeft geen contact met de dagelijkse praktijk",
            "Omringt zich met 'ja-knikkers'",
            "Weet niet wat er echt speelt in de organisatie",
            "Vermijdt directe communicatie met teamleden"
          ],
          consequences: [
            "Verlies van contact met de realiteit",
            "Slechte besluitvorming door gebrek aan informatie",
            "Team voelt zich genegeerd",
            "Geen begrip voor praktische problemen"
          ],
          recognition: [
            "Leider is fysiek of emotioneel afwezig",
            "Geen directe communicatie met teamleden",
            "Beslissingen gebaseerd op verouderde informatie",
            "Team voelt zich niet gehoord"
          ],
          sportExample: "Een trainer die alleen met assistenten praat, nooit direct met spelers communiceert en niet weet wat er leeft in de kleedkamer. Kim Jong-un wordt genoemd als extreem voorbeeld van ontoegankelijkheid."
        },
        {
          name: "De Machtsspelletjes Leider",
          description: "Leiders die uitsluitend bezig zijn met het behouden van macht en mensen tegen elkaar uitspelen.",
          characteristics: [
            "Speelt mensen tegen elkaar uit",
            "Ziet anderen alleen als bedreiging of instrument",
            "Zorgt ervoor dat potentiële rivalen verdwijnen",
            "Alle beslissingen gericht op machtsbehoud",
            "Geen loyaliteit naar teamleden"
          ],
          consequences: [
            "Giftige teamcultuur",
            "Geen samenwerking tussen teamleden",
            "Verlies van getalenteerde mensen",
            "Focus op politiek in plaats van prestaties"
          ],
          recognition: [
            "Teamleden concurreren tegen elkaar in plaats van samen te werken",
            "Informatie wordt achtergehouden",
            "Geen vertrouwen binnen het team",
            "Beslissingen gebaseerd op machtspolitiek"
          ],
          sportExample: "Een trainer die spelers tegen elkaar uitspeelt, geruchten verspreidt en ervoor zorgt dat niemand te populair wordt die zijn positie zou kunnen bedreigen."
        }
      ],
      narcissisticCharacteristics: [
        "Slechte verliezers en slechte winnaars - het is nooit goed genoeg",
        "Voelen zich voortdurend ondergewaardeerd en zoeken constant waardering",
        "Denken dat iedereen dom is en zij de slimste zijn",
        "Superioriteitsgevoelens - hun kijk op dingen is altijd beter",
        "Houden ervan anderen te vertellen wat ze moeten doen (dominant)",
        "Zijn entertainers - hoog entertainment gehalte in speeches en presentaties",
        "Emotieloos - willen geen emoties voelen of tonen",
        "Luisteren niet - willen vooral zelf aan het woord zijn",
        "Ontrouw in relaties - vaak meerdere scheidingen",
        "Micromanagement - altijd alles willen controleren",
        "Hebben vaak een veel jongere partner (ego-boost)",
        "Willen gebouwen met hun naam erop"
      ],
      powerAndCorruption: {
        description: "Volgens Kets de Vries leidt extreme macht tot corruptie en narcistisch gedrag.",
        characteristics: [
          "Van 'hero tot zero' - mensen die alle macht krijgen worden corrupt",
          "Omringd door leugenaars en ja-knikkers",
          "Hebben allemaal een heel groot ego",
          "Eenzaamheid - 'lonely at the top'",
          "Geen echte vrijheid - moeten voortdurend controleren en op hun hoede zijn"
        ]
      },
      preventionStrategies: {
        title: "Preventie en Herstel",
        description: "Kets de Vries ontwikkelde methoden om disfunctionele leiders te helpen veranderen.",
        strategies: [
          {
            strategy: "Legacy Reflectie",
            description: "Leiders laten nadenken over hoe ze herinnerd willen worden.",
            implementation: [
              "Vraag: 'Wat wil je achterlaten als je er niet meer bent?'",
              "Confronteer met huidige reputatie vs gewenste legacy",
              "Help bij het definiëren van betekenisvolle doelen"
            ]
          },
          {
            strategy: "360-graden Feedback",
            description: "Feedback verzamelen van alle kanten, inclusief familie.",
            implementation: [
              "Feedback van collega's, ondergeschikten en bazen",
              "Ook feedback van familie en vrienden",
              "Confrontatie met impact op anderen"
            ]
          },
          {
            strategy: "Eenzaamheid Aanpakken",
            description: "Helpen bij het opbouwen van echte relaties.",
            implementation: [
              "Leren hoe echte relaties op te bouwen",
              "Omgaan met de eenzaamheid van leiderschap",
              "Netwerk van vertrouwde adviseurs ontwikkelen"
            ]
          },
          {
            strategy: "Controle Loslaten",
            description: "Leren omgaan met de angst voor verlies van controle.",
            implementation: [
              "Delegeren oefenen",
              "Vertrouwen in anderen ontwikkelen",
              "Accepteren dat perfecte controle onmogelijk is"
            ]
          },
          {
            strategy: "Creativiteit Herwinnen",
            description: "Weer verbinding maken met dromen en creativiteit.",
            implementation: [
              "Tijd maken voor reflectie en creativiteit",
              "Herinneren aan oorspronkelijke motivaties",
              "Nieuwe uitdagingen zoeken buiten machtsspelletjes"
            ]
          }
        ]
      },
      warningSignals: [
        "Hoog verloop van getalenteerde medewerkers",
        "Angstcultuur binnen de organisatie",
        "Geen open communicatie of feedback",
        "Alle beslissingen lopen via één persoon",
        "Teamleden vermijden contact met de leider",
        "Constant veranderende prioriteiten zonder duidelijke reden",
        "Leider is fysiek of emotioneel afwezig",
        "Focus op machtspolitiek in plaats van resultaten"
      ],
      healthyLeadership: {
        title: "Kenmerken van Gezond Leiderschap",
        description: "Het tegenovergestelde van disfunctionele patronen.",
        characteristics: [
          "Zelfbewustzijn en emotionele intelligentie",
          "Open voor feedback en bereid tot verandering",
          "Empathie en begrip voor teamleden",
          "Duidelijke communicatie en transparantie",
          "Delegeert effectief en vertrouwt anderen",
          "Neemt verantwoordelijkheid voor fouten",
          "Focus op ontwikkeling van teamleden",
          "Balans tussen resultaten en relaties"
        ]
      }
    }
  },
  {
    id: 'maccoby',
    title: "Maccoby's Narcistische Leider",
    description: "Michael Maccoby onderscheidt productief en destructief narcisme bij leiders, waarbij narcistische eigenschappen zowel kracht als zwakte kunnen zijn.",
    content: {
      introduction: {
        title: "Narcisme in Leiderschap",
        description: "Michael Maccoby erkent dat narcistische eigenschappen zowel voordelig als schadelijk kunnen zijn voor leiderschap, afhankelijk van hoe ze worden toegepast.",
        keyInsight: "Narcisme is niet per definitie slecht - het kan productief zijn als het wordt gekanaliseerd naar teamdoelen."
      },
      narcissismTypes: [
        {
          type: "Productief Narcisme",
          description: "Narcistische eigenschappen die ten goede komen aan het team en de organisatie.",
          characteristics: [
            "Visionair denken en grote ambities",
            "Zelfvertrouwen en charisma",
            "Bereidheid om risico's te nemen",
            "Inspirerend voor anderen",
            "Competitieve drive gericht op teamdoelen"
          ],
          benefits: [
            "Motiveert teams tot uitzonderlijke prestaties",
            "Creëert duidelijke visie en richting",
            "Durft moeilijke beslissingen te nemen",
            "Bouwt vertrouwen en optimisme",
            "Bereikt ambitieuze doelen"
          ],
          sportExample: "Een trainer zoals Pep Guardiola die extreem perfectionistisch is en hoge eisen stelt, maar dit gebruikt om het team naar het hoogste niveau te tillen en iedereen beter te maken."
        },
        {
          type: "Destructief Narcisme", 
          description: "Narcistische eigenschappen die ten koste gaan van het team en de organisatie.",
          characteristics: [
            "Alleen luisteren naar mensen die het met je eens zijn",
            "Geen kritiek accepteren",
            "Alles draait om persoonlijke glorie",
            "Gebrek aan empathie voor teamleden",
            "Macht gebruiken voor persoonlijk gewin"
          ],
          consequences: [
            "Team wordt genegeerd of misbruikt",
            "Slechte besluitvorming door gebrek aan diverse input",
            "Verlies van getalenteerde teamleden",
            "Toxische cultuur",
            "Korte termijn succes, lange termijn falen"
          ],
          sportExample: "Een trainer die alleen zijn eigen tactiek wil spelen, geen input accepteert van spelers of assistenten, en spelers de schuld geeft van nederlagen terwijl hij zichzelf de eer geeft van overwinningen."
        }
      ],
      productiveNarcissistTraits: [
        {
          trait: "Visionair Leiderschap",
          description: "Het vermogen om een inspirerende toekomstvisie te creëren en anderen mee te nemen.",
          application: "Gebruik je charisma en overtuigingskracht om het team te inspireren voor gemeenschappelijke doelen.",
          balance: "Zorg dat de visie realistisch blijft en input van anderen integreert."
        },
        {
          trait: "Competitieve Drive",
          description: "Intense wil om te winnen en het beste uit jezelf en anderen te halen.",
          application: "Kanaliseer je competitieve natuur naar teamdoelen en collectief succes.",
          balance: "Vermijd dat competitie ten koste gaat van samenwerking binnen het team."
        },
        {
          trait: "Zelfvertrouwen",
          description: "Geloof in eigen kunnen en beslissingen, ook onder druk.",
          application: "Gebruik je zelfvertrouwen om moeilijke beslissingen te nemen en het team gerust te stellen.",
          balance: "Blijf open voor feedback en erken wanneer je het mis hebt."
        },
        {
          trait: "Risicobereidheid",
          description: "Bereidheid om gewaagde beslissingen te nemen voor potentieel grote winst.",
          application: "Durf innovatieve tactieken of strategieën te proberen die anderen niet durven.",
          balance: "Weeg risico's zorgvuldig af en betrek experts bij belangrijke beslissingen."
        }
      ],
      managingNarcissism: {
        title: "Narcisme Managen",
        description: "Strategieën om narcistische eigenschappen productief te houden en destructieve tendensen te voorkomen.",
        strategies: [
          {
            strategy: "Empathie Ontwikkelen",
            description: "Bewust werken aan begrip voor en interesse in teamleden.",
            implementation: [
              "Regelmatig één-op-één gesprekken met teamleden",
              "Actief luisteren naar zorgen en ideeën",
              "Vragen stellen over hun welzijn en ontwikkeling",
              "Tijd besteden aan het leren kennen van persoonlijke omstandigheden"
            ]
          },
          {
            strategy: "Diverse Input Zoeken",
            description: "Bewust verschillende perspectieven en meningen verzamelen.",
            implementation: [
              "Regelmatig feedback vragen aan verschillende teamleden",
              "Adviseurs aanstellen die durven tegen te spreken",
              "Open forums creëren voor ideeën en kritiek",
              "Externe experts raadplegen"
            ]
          },
          {
            strategy: "Nederigheid Praktiseren",
            description: "Erkennen van eigen beperkingen en de waarde van anderen.",
            implementation: [
              "Publiekelijk erkenning geven aan teamleden",
              "Fouten toegeven en verantwoordelijkheid nemen",
              "Leren van anderen, ook van minder ervaren teamleden",
              "Eigen ontwikkeling blijven nastreven"
            ]
          },
          {
            strategy: "Teamfocus Behouden",
            description: "Ervoor zorgen dat persoonlijke ambities aansluiten bij teamdoelen.",
            implementation: [
              "Doelen formuleren in termen van teamsucces",
              "Persoonlijke prestaties koppelen aan teamresultaten",
              "Anderen in de schijnwerpers zetten bij successen",
              "Collectieve verantwoordelijkheid nemen bij tegenslagen"
            ]
          }
        ]
      },
      warningSignals: [
        "Je luistert alleen nog naar mensen die het met je eens zijn",
        "Je accepteert geen kritiek meer",
        "Je neemt alle eer voor successen en geeft anderen de schuld van mislukkingen",
        "Je hebt geen interesse meer in de persoonlijke ontwikkeling van teamleden",
        "Je maakt beslissingen zonder input van anderen",
        "Je voelt je superieur aan je teamleden",
        "Je gebruikt je positie voor persoonlijke voordelen"
      ],
      developmentPath: [
        "Zelfbewustzijn ontwikkelen over eigen narcistische tendensen",
        "Regelmatig feedback zoeken van vertrouwde adviseurs",
        "Empathie oefenen door actief te luisteren naar teamleden",
        "Nederigheid praktiseren door fouten toe te geven",
        "Teamdoelen centraal stellen in plaats van persoonlijke glorie",
        "Diverse perspectieven actief opzoeken en waarderen",
        "Anderen ontwikkelen en in de schijnwerpers zetten",
        "Balans vinden tussen zelfvertrouwen en openheid voor kritiek"
      ]
    }
  },
  {
    id: 'ferguson',
    title: "Alex Ferguson's Leiderschapsfilosofie",
    description: "Sir Alex Ferguson leidde Manchester United 26 jaar lang naar ongekend succes. Zijn leiderschapsfilosofie combineert discipline, individuele benadering en lange termijn visie.",
    content: {
      introduction: {
        title: "De Meest Succesvolle Voetbalmanager",
        description: "Sir Alex Ferguson transformeerde Manchester United van een middelmatige club naar de meest succesvolle voetbalclub ter wereld, met 38 trofeeën in 26 jaar.",
        keyInsight: "Succes komt niet van één factor, maar van het consistent toepassen van fundamentele leiderschapsprincipes over een lange periode."
      },
      leadershipElements: [
        {
          number: 1,
          name: "Discipline en Standaarden",
          description: "Onwrikbare regels en hoge standaarden voor iedereen, zonder uitzonderingen.",
          keyPoints: [
            "Geen uitzonderingen, zelfs niet voor sterren",
            "Duidelijke regels die voor iedereen gelden",
            "Consequent handhaven van standaarden",
            "Discipline als basis voor succes"
          ],
          quote: "Als je een uitzondering maakt voor één speler, verlies je het hele team.",
          example: "Ferguson stuurde David Beckham weg toen deze te veel aandacht kreeg voor zaken buiten het voetbal. Ondanks Beckham's talent en populariteit, gingen de teamregels voor."
        },
        {
          number: 2,
          name: "Individuele Benadering",
          description: "Elke speler anders behandelen op basis van hun persoonlijkheid en behoeften.",
          keyPoints: [
            "Verschillende motivatietechnieken per speler",
            "Begrip voor individuele persoonlijkheden",
            "Aangepaste communicatiestijl",
            "Persoonlijke ontwikkeling van elke speler"
          ],
          quote: "Je moet elke speler anders behandelen, maar wel eerlijk.",
          example: "Roy Keane had directe confrontatie nodig om gemotiveerd te blijven, terwijl Ryan Giggs subtiele begeleiding en vertrouwen nodig had. Ferguson paste zijn aanpak aan per speler."
        },
        {
          number: 3,
          name: "Controle en Autoriteit",
          description: "Duidelijke hiërarchie en onbetwiste autoriteit van de leider.",
          keyPoints: [
            "Duidelijke besluitvorming",
            "Onbetwiste autoriteit",
            "Controle over alle aspecten",
            "Leider heeft het laatste woord"
          ],
          quote: "In voetbal, zoals in het leven, moet iemand de beslissingen nemen.",
          example: "Ferguson's beroemde 'hairdryer treatment' - intense kritiek op het juiste moment om spelers wakker te schudden. Dit was vaak berekend en strategisch, niet uit echte boosheid."
        },
        {
          number: 4,
          name: "Lange Termijn Visie",
          description: "Denken in jaren en decennia, niet in wedstrijden of seizoenen.",
          keyPoints: [
            "Investeren in jeugdspelers",
            "Duurzame organisatie opbouwen",
            "Cultuur die generaties overstijgt",
            "Geduld met ontwikkeling"
          ],
          quote: "Ik bouw niet voor vandaag, ik bouw voor de volgende 20 jaar.",
          example: "Ferguson's investering in de jeugdacademie leverde spelers op zoals Beckham, Scholes, Giggs en de Neville broers - de basis van jarenlang succes."
        },
        {
          number: 5,
          name: "Mentale Sterkte",
          description: "Het ontwikkelen van veerkracht en doorzettingsvermogen bij spelers.",
          keyPoints: [
            "Nooit opgeven mentaliteit",
            "Omgaan met tegenslagen",
            "Druk omzetten in prestatie",
            "Geloof in comeback mogelijkheden"
          ],
          quote: "Het spel is pas afgelopen als de scheidsrechter fluit.",
          example: "Manchester United stond bekend om late goals en comebacks. De 'Fergie Time' werd een begrip - het team gaf nooit op en vocht tot het laatste moment."
        },
        {
          number: 6,
          name: "Voortdurende Vernieuwing",
          description: "Constant verbeteren en aanpassen aan nieuwe omstandigheden.",
          keyPoints: [
            "Nooit tevreden met status quo",
            "Aanpassen aan nieuwe trends",
            "Investeren in nieuwe talenten",
            "Leren van nederlagen"
          ],
          quote: "Stilstand is achteruitgang.",
          example: "Ferguson bouwde meerdere succesvolle teams op verschillende tijdstippen, telkens aangepast aan nieuwe spelers en veranderende voetbaltrends."
        },
        {
          number: 7,
          name: "Teamgeest en Cultuur",
          description: "Een sterke cultuur creëren waarin iedereen zich verantwoordelijk voelt.",
          keyPoints: [
            "Samen winnen, samen verliezen",
            "Loyaliteit naar elkaar",
            "Trots op de club",
            "Onderlinge steun"
          ],
          quote: "Voetbal is een teamsport - individuele talenten winnen geen kampioenschappen.",
          example: "Ferguson creëerde een familiegevoel bij Manchester United waar spelers bereid waren alles te geven voor elkaar en de club."
        },
        {
          number: 8,
          name: "Communicatie en Motivatie",
          description: "Het juiste bericht op het juiste moment aan de juiste persoon.",
          keyPoints: [
            "Timing van boodschappen",
            "Verschillende motivatietechnieken",
            "Publieke en private communicatie",
            "Emotionele intelligentie"
          ],
          quote: "Weten wat te zeggen is belangrijk, maar weten wanneer je het moet zeggen is cruciaal.",
          example: "Ferguson wist precies wanneer hij een speler moest prijzen, kritiseren of negeren om de beste prestatie eruit te halen."
        },
        {
          number: 9,
          name: "Besluitvaardigheid",
          description: "Moeilijke beslissingen nemen, ook als ze impopulair zijn.",
          keyPoints: [
            "Snelle besluitvorming",
            "Moeilijke keuzes durven maken",
            "Verantwoordelijkheid nemen",
            "Niet terugkomen op beslissingen"
          ],
          quote: "Als je twijfelt, ben je al te laat.",
          example: "Ferguson's beslissing om ervaren spelers zoals Roy Keane en Ruud van Nistelrooy te laten gaan toen ze niet meer pasten in zijn plannen, ondanks hun kwaliteiten."
        }
      ],
      corePhilosophy: {
        title: "Ferguson's Kernfilosofie",
        description: "De onderliggende principes die al zijn beslissingen stuurden.",
        principles: [
          "Het team gaat altijd boven het individu",
          "Discipline en hard werken zijn de basis van succes",
          "Nooit opgeven, ongeacht de situatie",
          "Investeren in mensen en hun ontwikkeling",
          "Respect verdienen door consequent gedrag",
          "Lange termijn denken boven korte termijn winst",
          "Cultuur is belangrijker dan tactiek"
        ]
      },
      modernApplications: {
        title: "Toepassing in Moderne Context",
        description: "Hoe Ferguson's principes toegepast kunnen worden in verschillende leiderschapscontexten.",
        applications: [
          {
            context: "Bedrijfsleiderschap",
            approach: "Discipline en standaarden combineren met individuele ontwikkeling",
            result: "Hogere prestaties en betere retentie van talent"
          },
          {
            context: "Teammanagement",
            approach: "Lange termijn visie met korte termijn resultaten balanceren",
            result: "Duurzame teamprestaties en cultuur"
          },
          {
            context: "Verandermanagement",
            approach: "Voortdurende vernieuwing met behoud van kernwaarden",
            result: "Succesvolle adaptatie aan nieuwe omstandigheden"
          },
          {
            context: "Crisisleiderschap",
            approach: "Mentale sterkte en besluitvaardigheid onder druk",
            result: "Effectieve probleemoplossing en teamvertrouwen"
          }
        ]
      },
      keyLessons: [
        "Consistentie in principes is belangrijker dan flexibiliteit in regels",
        "Investeren in mensen levert op lange termijn het beste rendement",
        "Discipline en zorg kunnen en moeten samengaan",
        "Echte leiders nemen moeilijke beslissingen als het nodig is",
        "Cultuur verslaat strategie op de lange termijn",
        "Individuele benadering binnen duidelijke kaders werkt het beste",
        "Mentale sterkte is net zo belangrijk als technische vaardigheden",
        "Voortdurende verbetering is essentieel voor blijvend succes"
      ]
    }
  },
  {
    id: 'wiltschut',
    title: "Gezag vs Dominantie (Van Vugt & Wiltschut)",
    description: "Mark van Vugt en Marieke Wiltschut maken onderscheid tussen gezag (gewenst) en dominantie (vermijden) als twee verschillende vormen van leiderschap.",
    content: {
      mainConcept: "Effectief leiderschap is gebaseerd op gezag (respect en vertrouwen) in plaats van dominantie (macht en controle). Gezag leidt tot betere prestaties en welzijn van het team.",
      gezag: [
        {
          characteristic: "Gebaseerd op Respect",
          description: "Leiderschap dat voortkomt uit erkenning van competentie en integriteit",
          sportExample: "Een trainer die respect verdient door zijn kennis, eerlijkheid en zorg voor spelers"
        },
        {
          characteristic: "Vertrouwen en Veiligheid",
          description: "Teamleden voelen zich veilig om fouten te maken en te leren",
          sportExample: "Spelers durven risico's te nemen omdat ze weten dat de trainer hen steunt"
        },
        {
          characteristic: "Vrijwillige Volging",
          description: "Mensen volgen de leider omdat ze willen, niet omdat ze moeten",
          sportExample: "Spelers geven extra inzet omdat ze geloven in de trainer en zijn visie"
        },
        {
          characteristic: "Empowerment",
          description: "De leider helpt anderen om beter te worden en eigen verantwoordelijkheid te nemen",
          sportExample: "Een trainer die spelers helpt groeien en hen leiderschap geeft op het veld"
        },
        {
          characteristic: "Lange Termijn Oriëntatie",
          description: "Focus op duurzame ontwikkeling en relaties",
          sportExample: "Investeren in spelersontwikkeling ook als het korte termijn resultaten kost"
        }
      ],
      dominantie: [
        {
          characteristic: "Gebaseerd op Macht",
          description: "Leiderschap door positie, dwang of intimidatie",
          sportExample: "Een trainer die alleen gehoorzaamd wordt uit angst voor consequenties"
        },
        {
          characteristic: "Angst en Stress",
          description: "Teamleden zijn gespannen en bang om fouten te maken",
          sportExample: "Spelers spelen verkrampt omdat ze bang zijn voor de reactie van de trainer"
        },
        {
          characteristic: "Gedwongen Gehoorzaamheid",
          description: "Mensen volgen uit angst of omdat ze geen keuze hebben",
          sportExample: "Spelers doen wat gevraagd wordt maar zonder enthousiasme of eigen initiatief"
        },
        {
          characteristic: "Onderdrukking",
          description: "De leider houdt anderen klein en afhankelijk",
          sportExample: "Een trainer die spelers niet laat groeien omdat hij bang is zijn controle te verliezen"
        },
        {
          characteristic: "Korte Termijn Focus",
          description: "Alleen gericht op directe resultaten en controle",
          sportExample: "Alleen focussen op winnen van de volgende wedstrijd zonder oog voor ontwikkeling"
        }
      ],
      consequences: {
        gezag: "Leidt tot hogere prestaties, meer creativiteit, betere samenwerking, persoonlijke groei van teamleden en duurzaam succes.",
        dominantie: "Resulteert in lagere prestaties op lange termijn, verminderde creativiteit, angstcultuur, hoog verloop en burn-out van teamleden."
      },
      developingAuthority: [
        "Investeer in je competentie en kennis - word echt goed in wat je doet",
        "Toon oprechte interesse in de ontwikkeling van je teamleden",
        "Wees consistent in je gedrag en beslissingen",
        "Luister actief naar input en feedback van anderen",
        "Neem verantwoordelijkheid voor fouten en geef erkenning aan anderen",
        "Bouw vertrouwensrelaties op door betrouwbaar en eerlijk te zijn",
        "Help anderen om te groeien en eigen verantwoordelijkheid te nemen",
        "Toon empathie en begrip voor de situatie van teamleden"
      ]
    }
  }
]

export default function LeadershipApp() {
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null)
  const [readTheories, setReadTheories] = useState<Set<string>>(new Set())
  const [currentView, setCurrentView] = useState<'theories' | 'quiz'>('theories')
  const [points, setPoints] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizScore, setQuizScore] = useState<{score: number, total: number} | null>(null)

  // Load saved progress from localStorage
  useEffect(() => {
    const savedReadTheories = localStorage.getItem('readTheories')
    const savedPoints = localStorage.getItem('points')
    const savedQuizCompleted = localStorage.getItem('quizCompleted')
    const savedQuizScore = localStorage.getItem('quizScore')
    
    if (savedReadTheories) {
      setReadTheories(new Set(JSON.parse(savedReadTheories)))
    }
    if (savedPoints) {
      setPoints(parseInt(savedPoints))
    }
    if (savedQuizCompleted) {
      setQuizCompleted(JSON.parse(savedQuizCompleted))
    }
    if (savedQuizScore) {
      setQuizScore(JSON.parse(savedQuizScore))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('readTheories', JSON.stringify(Array.from(readTheories)))
    localStorage.setItem('points', points.toString())
    localStorage.setItem('quizCompleted', JSON.stringify(quizCompleted))
    if (quizScore) {
      localStorage.setItem('quizScore', JSON.stringify(quizScore))
    }
  }, [readTheories, points, quizCompleted, quizScore])

  const handleTheoryRead = (theoryId: string) => {
    if (!readTheories.has(theoryId)) {
      setReadTheories(prev => new Set([...prev, theoryId]))
      setPoints(prev => prev + 50)
    }
  }

  const handleQuizComplete = (score: number, total: number) => {
    if (!quizCompleted) {
      setQuizCompleted(true)
      setQuizScore({score, total})
      setPoints(prev => prev + (score * 10))
    }
  }

  const getProgressPercentage = () => {
    const totalItems = theories.length + 1 // theories + quiz
    const completedItems = readTheories.size + (quizCompleted ? 1 : 0)
    return Math.round((completedItems / totalItems) * 100)
  }

  const canTakeQuiz = readTheories.size >= theories.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Leiderschap in de Sport
              </h1>
              <p className="text-gray-600 mt-1">HBO Sportkunde - Leiderschapstheorieën</p>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Progress */}
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{getProgressPercentage()}%</div>
                <div className="text-sm text-gray-600">Voortgang</div>
              </div>
              
              {/* Points */}
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{points}</div>
                <div className="text-sm text-gray-600">Punten</div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>{readTheories.size}/{theories.length} theorieën gelezen</span>
              <span>{quizCompleted ? 'Quiz voltooid' : 'Quiz nog niet gedaan'}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => {
                setCurrentView('theories')
                setSelectedTheory(null)
              }}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                currentView === 'theories'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              📚 Theorieën ({readTheories.size}/{theories.length})
            </button>
            <button
              onClick={() => setCurrentView('quiz')}
              disabled={!canTakeQuiz}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                currentView === 'quiz'
                  ? 'border-blue-500 text-blue-600'
                  : canTakeQuiz
                  ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  : 'border-transparent text-gray-400 cursor-not-allowed'
              }`}
            >
              🎯 Quiz {quizCompleted ? '✅' : canTakeQuiz ? '' : '🔒'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'theories' && (
          <div>
            {selectedTheory ? (
              <div>
                <button
                  onClick={() => setSelectedTheory(null)}
                  className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  ← Terug naar overzicht
                </button>
                <TheoryCard
                  theory={theories.find(t => t.id === selectedTheory)!}
                  isExpanded={true}
                  onRead={() => handleTheoryRead(selectedTheory)}
                  isRead={readTheories.has(selectedTheory)}
                />
              </div>
            ) : (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Leiderschapstheorieën voor Sport
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Ontdek de belangrijkste leiderschapstheorieën toegepast op sport. 
                    Lees alle theorieën om de quiz te kunnen maken en punten te verdienen!
                  </p>
                </div>

                {!canTakeQuiz && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                    <div className="flex items-center">
                      <div className="text-yellow-600 mr-3">🔒</div>
                      <div>
                        <h3 className="font-medium text-yellow-800">Quiz nog niet beschikbaar</h3>
                        <p className="text-yellow-700 text-sm">
                          Lees eerst alle {theories.length} theorieën om de quiz te kunnen maken.
                          Je hebt er nog {theories.length - readTheories.size} te gaan!
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {theories.map((theory) => (
                    <div
                      key={theory.id}
                      onClick={() => setSelectedTheory(theory.id)}
                      className="cursor-pointer"
                    >
                      <TheoryCard
                        theory={theory}
                        isExpanded={false}
                        onRead={() => handleTheoryRead(theory.id)}
                        isRead={readTheories.has(theory.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {currentView === 'quiz' && (
          <div>
            {!canTakeQuiz ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔒</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz Vergrendeld</h2>
                <p className="text-gray-600 mb-6">
                  Je moet eerst alle {theories.length} theorieën lezen voordat je de quiz kunt maken.
                </p>
                <p className="text-lg font-medium text-blue-600">
                  Nog {theories.length - readTheories.size} theorieën te gaan!
                </p>
                <button
                  onClick={() => setCurrentView('theories')}
                  className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ga naar Theorieën
                </button>
              </div>
            ) : (
              <QuizComponent onComplete={handleQuizComplete} />
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              Gemaakt voor HBO Sportkunde studenten - Leiderschap in de Sport
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Gebaseerd op de theorieën van Mintzberg, Hersey & Blanchard, Kets de Vries, 
              Maccoby, Ferguson, en Van Vugt & Wiltschut
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}