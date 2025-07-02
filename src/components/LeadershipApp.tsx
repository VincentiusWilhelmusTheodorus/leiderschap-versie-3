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
    description: "Henry Mintzberg identificeerde 10 managementrollen die essentieel zijn voor effectief leiderschap in sport en bewegen.",
    content: {
      categories: [
        {
          name: "Interpersoonlijke Rollen",
          roles: [
            {
              name: "Boegbeeld (Figurehead)",
              description: "Representeert de organisatie bij officiële gelegenheden en ceremonies"
            },
            {
              name: "Leider (Leader)",
              description: "Motiveert en stuurt teamleden, creëert een positieve teamcultuur"
            },
            {
              name: "Verbindingspersoon (Liaison)",
              description: "Onderhoudt contacten met externe partijen en stakeholders"
            }
          ]
        },
        {
          name: "Informationele Rollen",
          roles: [
            {
              name: "Monitor",
              description: "Verzamelt informatie over prestaties, trends en ontwikkelingen"
            },
            {
              name: "Verspreider (Disseminator)",
              description: "Deelt relevante informatie met het team en de organisatie"
            },
            {
              name: "Woordvoerder (Spokesperson)",
              description: "Communiceert namens de organisatie naar buiten toe"
            }
          ]
        },
        {
          name: "Besluitvormingsrollen",
          roles: [
            {
              name: "Ondernemer (Entrepreneur)",
              description: "Initieert veranderingen en nieuwe projecten"
            },
            {
              name: "Probleemoplosser (Disturbance Handler)",
              description: "Lost conflicten en crises op binnen het team"
            },
            {
              name: "Hulpbronnenverdeler (Resource Allocator)",
              description: "Verdeelt tijd, geld en middelen effectief"
            },
            {
              name: "Onderhandelaar (Negotiator)",
              description: "Onderhandelt namens de organisatie met externe partijen"
            }
          ]
        }
      ],
      sportExample: "Een sportcoach vervult alle rollen: als boegbeeld bij wedstrijden, als leider van het team, als monitor van prestaties, als onderhandelaar met sponsors, en als probleemoplosser bij teamconflicten. In fitnesscentra combineren managers deze rollen door zowel klanten te motiveren als budgetten te beheren."
    }
  },
  {
    id: 'hersey-blanchard',
    title: "Situationeel Leidinggeven (SLII)",
    description: "Het model van Hersey en Blanchard toont hoe je je leiderschapsstijl moet aanpassen aan het ontwikkelingsniveau van je teamleden.",
    content: {
      introduction: {
        title: "Kern van Situationeel Leidinggeven",
        description: "Effectief leiderschap vereist flexibiliteit. Verschillende mensen hebben verschillende behoeften, afhankelijk van hun competentie en betrokkenheid.",
        keyInsight: "Er is geen 'beste' leiderschapsstijl - de situatie bepaalt wat werkt."
      },
      coreModel: {
        title: "Het Twee-Dimensionale Model",
        description: "SLII is gebaseerd op twee gedragsdimensies die leiders kunnen variëren:",
        dimensions: [
          {
            name: "Sturend Gedrag",
            description: "De mate waarin je specifieke instructies geeft",
            characteristics: [
              "Duidelijke doelen stellen",
              "Specifieke instructies geven",
              "Prestaties nauwlettend monitoren",
              "Deadlines en procedures vaststellen"
            ]
          },
          {
            name: "Ondersteunend Gedrag", 
            description: "De mate waarin je luistert, aanmoedigt en faciliteert",
            characteristics: [
              "Actief luisteren naar zorgen",
              "Emotionele steun bieden",
              "Samenwerking faciliteren",
              "Vertrouwen en motivatie opbouwen"
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
            "Beperkte vaardigheden en ervaring",
            "Optimistische verwachtingen",
            "Bereid om te leren"
          ],
          needs: "Heeft veel sturing nodig maar weinig ondersteuning - ze zijn al gemotiveerd",
          sportExample: "Een nieuwe atleet die net begint met een sport - vol enthousiasme maar heeft duidelijke instructies nodig over technieken en regels. Of een nieuwe fitnessinstructeur die gemotiveerd is maar nog moet leren hoe lessen te geven."
        },
        {
          level: "D2 - Ontgoochelde Leerling",
          competence: "Laag tot Gemiddeld",
          commitment: "Laag",
          characteristics: [
            "Realiteit is ingedaald - het is moeilijker dan verwacht",
            "Frustratie over langzame vooruitgang",
            "Twijfels over eigen kunnen",
            "Mogelijk demotivatie"
          ],
          needs: "Heeft zowel veel sturing als veel ondersteuning nodig",
          sportExample: "Een atleet die na enkele maanden training merkt dat vooruitgang langzaam gaat en begint te twijfelen. Of een beginnende personal trainer die worstelt met moeilijke klanten en overweegt te stoppen."
        },
        {
          level: "D3 - Voorzichtige Uitvoerder",
          competence: "Gemiddeld tot Hoog",
          commitment: "Variabel",
          characteristics: [
            "Heeft de vaardigheden ontwikkeld",
            "Onzeker over zelfstandig werken",
            "Wil het goed doen maar twijfelt",
            "Heeft vertrouwen nodig"
          ],
          needs: "Heeft weinig sturing maar veel ondersteuning nodig",
          sportExample: "Een ervaren atleet die technisch goed is maar onzeker is over tactische beslissingen tijdens wedstrijden. Of een fitnessinstructeur die alle oefeningen kent maar onzeker is over het aanpassen van programma's."
        },
        {
          level: "D4 - Zelfstandige Uitvoerder",
          competence: "Hoog",
          commitment: "Hoog",
          characteristics: [
            "Hoge vaardigheden en ervaring",
            "Sterk gemotiveerd en betrokken",
            "Kan zelfstandig beslissingen nemen",
            "Neemt verantwoordelijkheid"
          ],
          needs: "Heeft weinig sturing en weinig ondersteuning nodig - kan zelfstandig werken",
          sportExample: "Een ervaren teamkapitein die zowel technisch uitblinkt als het team kan motiveren. Of een senior personal trainer die zelfstandig klanten kan begeleiden en nieuwe collega's kan trainen."
        }
      ],
      leadershipStyles: [
        {
          style: "S1 - Sturend (Directing)",
          behavior: "Hoog Sturend, Laag Ondersteunend",
          when: "Voor D1 - Enthousiaste Beginners",
          description: "Geef duidelijke, specifieke instructies en monitor de prestaties nauwlettend.",
          approach: [
            "Stel duidelijke doelen en verwachtingen",
            "Geef stap-voor-stap instructies",
            "Monitor voortgang frequent",
            "Geef directe feedback op prestaties",
            "Maak beslissingen voor hen"
          ],
          sportExample: "Een coach die een nieuwe atleet exact laat zien hoe een techniek uitgevoerd moet worden, elke beweging corrigeert en een strak trainingsschema opstelt."
        },
        {
          style: "S2 - Coachend (Coaching)",
          behavior: "Hoog Sturend, Hoog Ondersteunend",
          when: "Voor D2 - Ontgoochelde Leerlingen",
          description: "Combineer duidelijke sturing met veel emotionele ondersteuning en motivatie.",
          approach: [
            "Blijf duidelijke instructies geven",
            "Luister naar zorgen en frustraties",
            "Leg uit waarom dingen gedaan moeten worden",
            "Moedig aan en bouw vertrouwen op",
            "Betrek hen bij besluitvorming"
          ],
          sportExample: "Een coach die een gedemotiveerde atleet niet alleen technische correcties geeft, maar ook tijd neemt om te luisteren naar frustraties en het 'waarom' achter training uitlegt."
        },
        {
          style: "S3 - Ondersteunend (Supporting)",
          behavior: "Laag Sturend, Hoog Ondersteunend",
          when: "Voor D3 - Voorzichtige Uitvoerders",
          description: "Faciliteer en ondersteun hun besluitvorming in plaats van instructies te geven.",
          approach: [
            "Luister meer dan je spreekt",
            "Stel vragen die hen laten nadenken",
            "Ondersteun hun ideeën en beslissingen",
            "Bouw hun zelfvertrouwen op",
            "Laat hen problemen oplossen"
          ],
          sportExample: "Een coach die een technisch vaardige maar onzekere atleet vraagt: 'Wat denk je dat de beste tactiek is?' en hen ondersteunt in hun keuzes in plaats van alles voor te schrijven."
        },
        {
          style: "S4 - Delegerend (Delegating)",
          behavior: "Laag Sturend, Laag Ondersteunend",
          when: "Voor D4 - Zelfstandige Uitvoerders",
          description: "Geef hen de vrijheid om zelfstandig te werken en neem een stap terug.",
          approach: [
            "Stel doelen maar laat hen de weg bepalen",
            "Wees beschikbaar voor ondersteuning als gevraagd",
            "Geef hen verantwoordelijkheid en autoriteit",
            "Monitor resultaten, niet processen",
            "Erken en waardeer hun bijdragen"
          ],
          sportExample: "Een coach die een ervaren teamkapitein de verantwoordelijkheid geeft voor teamtrainingen en tactische beslissingen tijdens wedstrijden, terwijl hij op de achtergrond beschikbaar blijft."
        }
      ],
      keyPrinciples: [
        "Diagnose eerst het ontwikkelingsniveau voordat je een stijl kiest",
        "Pas je stijl aan per persoon en per taak - iemand kan D4 zijn in techniek maar D2 in leiderschap",
        "Communiceer je stijl - leg uit waarom je een bepaalde aanpak kiest",
        "Monitor en pas aan - ontwikkelingsniveaus kunnen veranderen",
        "Het doel is mensen naar D4 te ontwikkelen in alle relevante gebieden"
      ]
    }
  },
  {
    id: 'french-raven',
    title: "French & Raven's Machtsbronnen",
    description: "Zes verschillende bronnen van macht die leiders kunnen gebruiken om invloed uit te oefenen in sport- en bewegingsorganisaties.",
    content: {
      powerSources: [
        {
          name: "Positiemacht (Legitimate Power)",
          description: "Macht die voortkomt uit je formele positie of rol",
          characteristics: [
            "Gebaseerd op hiërarchie en autoriteit",
            "Komt met de functie mee",
            "Verdwijnt als je de positie verlaat"
          ],
          sportExample: "Een hoofdcoach heeft positiemacht over assistent-coaches, een sportdirecteur over het hele team, of een manager van een fitnesscentrum over de instructeurs."
        },
        {
          name: "Beloningmacht (Reward Power)",
          description: "Macht gebaseerd op het kunnen geven van beloningen",
          characteristics: [
            "Controle over gewenste middelen",
            "Kan positieve consequenties geven",
            "Effectief voor motivatie"
          ],
          sportExample: "Een coach die speeltijd kan toekennen, bonussen kan uitdelen, of atleten kan selecteren voor belangrijke wedstrijden. Een fitnessmanager die promoties of extra voordelen kan geven."
        },
        {
          name: "Dwangmacht (Coercive Power)",
          description: "Macht gebaseerd op het kunnen straffen of negatieve consequenties geven",
          characteristics: [
            "Gebaseerd op angst voor straf",
            "Kan compliance afdwingen",
            "Risico op negatieve bijeffecten"
          ],
          sportExample: "Een coach die spelers kan schorsen, uit het team kan zetten, of extra trainingen kan opleggen als straf. Moet voorzichtig gebruikt worden om teammoraal niet te schaden."
        },
        {
          name: "Expertmacht (Expert Power)",
          description: "Macht gebaseerd op kennis, vaardigheden en expertise",
          characteristics: [
            "Gebaseerd op competentie",
            "Groeit met ervaring en kennis",
            "Zeer effectief en duurzaam"
          ],
          sportExample: "Een coach met bewezen trackrecord, een fysiotherapeut met specialistische kennis, of een personal trainer met uitgebreide certificeringen en ervaring."
        },
        {
          name: "Referentiemacht (Referent Power)",
          description: "Macht gebaseerd op persoonlijke aantrekkingskracht en charisma",
          characteristics: [
            "Mensen willen je graag volgen",
            "Gebaseerd op respect en bewondering",
            "Zeer krachtig maar moeilijk te ontwikkelen"
          ],
          sportExample: "Een inspirerende teamkapitein die anderen motiveert door hun persoonlijkheid, of een geliefde coach waar spelers alles voor willen doen."
        },
        {
          name: "Informatiemacht (Information Power)",
          description: "Macht gebaseerd op toegang tot belangrijke informatie",
          characteristics: [
            "Controle over waardevolle informatie",
            "Kan strategisch voordeel geven",
            "Tijdelijk van aard"
          ],
          sportExample: "Een analist die toegang heeft tot tegenstander-informatie, een manager die weet over transfers, of een trainer die insider-kennis heeft over nieuwe trainingsmethoden."
        }
      ],
      keyInsights: [
        "Effectieve leiders combineren meerdere machtsbronnen",
        "Expert- en referentiemacht zijn het meest duurzaam",
        "Dwangmacht moet spaarzaam gebruikt worden",
        "Informatiemacht is tijdelijk - deel kennis om vertrouwen op te bouwen",
        "Positiemacht alleen is niet genoeg voor effectief leiderschap"
      ],
      sportApplication: "In sport en bewegen is het cruciaal om niet alleen te vertrouwen op positiemacht. De beste coaches en managers bouwen expertmacht op door continu te leren, ontwikkelen referentiemacht door authentiek leiderschap, en gebruiken beloningmacht om positief gedrag te versterken. In fitnesscentra en sportorganisaties werkt een combinatie van deze machtsbronnen het beste voor langdurige motivatie en betrokkenheid."
    }
  },
  {
    id: 'keltner-macht',
    title: "Keltner's Macht Paradox",
    description: "Dacher Keltner's onderzoek toont aan hoe macht je brein kan beschadigen en empathie kan verminderen - cruciaal inzicht voor sportleiders.",
    content: {
      coreParadox: {
        title: "De Macht Paradox",
        description: "We krijgen macht door empathie, samenwerking en het helpen van anderen, maar macht zelf ondermijnt precies deze kwaliteiten.",
        keyInsight: "Macht beschadigt letterlijk je brein door empathie-circuits te onderdrukken."
      },
      brainEffects: {
        title: "Neurologische Impact van Macht",
        effects: [
          {
            name: "Verminderde Empathie",
            description: "Minder goed in staat om emoties van anderen te lezen",
            sportExample: "Een coach die niet meer merkt dat spelers gestrest of overtraind zijn"
          },
          {
            name: "Toegenomen Impulsiviteit",
            description: "Snellere beslissingen zonder alle gevolgen te overwegen",
            sportExample: "Een manager die overhaaste transfers doet zonder teamdynamiek te overwegen"
          },
          {
            name: "Verminderd Perspectief",
            description: "Moeilijker om situaties vanuit andermans oogpunt te bekijken",
            sportExample: "Een sportdirecteur die niet begrijpt waarom atleten ontevreden zijn met faciliteiten"
          },
          {
            name: "Verhoogde Risicobereidheid",
            description: "Meer geneigd om gevaarlijke keuzes te maken",
            sportExample: "Een coach die atleten te hard pusht en blessurerisico's negeert"
          }
        ]
      },
      preventionStrategies: {
        title: "Hoe Machtsmisbruik Voorkomen",
        strategies: [
          {
            name: "Regelmatige Zelfreflectie",
            description: "Bewust stilstaan bij je gedrag en impact op anderen",
            application: "Wekelijkse evaluatie: 'Hoe heb ik mijn team behandeld? Wat was hun reactie?'"
          },
          {
            name: "Feedback Zoeken",
            description: "Actief vragen om eerlijke feedback van teamleden",
            application: "Anonieme evaluaties, exit-interviews, of vertrouwenspersonen binnen het team"
          },
          {
            name: "Empathie Oefenen",
            description: "Bewust proberen situaties vanuit andermans perspectief te bekijken",
            application: "Voor elke beslissing vragen: 'Hoe zou dit voelen voor mijn atleten/medewerkers?'"
          },
          {
            name: "Macht Delen",
            description: "Verantwoordelijkheden en beslissingsbevoegdheid delegeren",
            application: "Teamkapiteins meer verantwoordelijkheid geven, coaches betrekken bij strategische beslissingen"
          },
          {
            name: "Nederigheid Cultiveren",
            description: "Erkennen dat je niet alles weet en fouten kunt maken",
            application: "Openlijk toegeven wanneer je het mis had, leren van anderen ongeacht hun positie"
          }
        ]
      },
      warningSignals: [
        "Je merkt dat mensen minder open tegen je zijn",
        "Je neemt sneller beslissingen zonder input van anderen",
        "Je voelt je geïrriteerd door 'kleine' zorgen van teamleden",
        "Je denkt dat regels niet voor jou gelden",
        "Je hoort achteraf over problemen in plaats van direct"
      ],
      sportSpecificRisks: "In sport en bewegen zijn de risico's extra groot omdat resultaten vaak direct zichtbaar zijn, wat macht kan versterken. Coaches kunnen denken dat succes hun gedrag rechtvaardigt, zelfs als het schadelijk is voor atleten. In fitnessorganisaties kunnen managers de menselijke kant vergeten door te focussen op cijfers en targets."
    }
  },
  {
    id: 'kets-de-vries',
    title: "Kets de Vries: Disfunctioneel Leiderschap",
    description: "Manfred Kets de Vries identificeerde veelvoorkomende disfunctionele patronen bij leiders die hun effectiviteit ondermijnen.",
    content: {
      introduction: {
        title: "Waarom Leiders Falen",
        description: "Veel leiderschapsproblemen komen niet voort uit gebrek aan technische vaardigheden, maar uit psychologische patronen en onbewuste gedragingen.",
        keyInsight: "Zelfkennis is de basis van effectief leiderschap - je kunt niet leiden wat je niet begrijpt."
      },
      dysfunctionalPatterns: [
        {
          name: "Micromanagement",
          description: "Obsessieve controle over elk detail",
          characteristics: [
            "Kan niet delegeren",
            "Wil alles zelf doen of controleren",
            "Vertrouwt teamleden niet",
            "Raakt gefocust op details in plaats van het grote plaatje"
          ],
          causes: [
            "Angst voor verlies van controle",
            "Perfectionisme",
            "Gebrek aan vertrouwen in anderen",
            "Onzekerheid over eigen competentie"
          ],
          sportExample: "Een coach die elke pass, elke beweging wil controleren tijdens een wedstrijd, of een fitnessmanager die elke klantinteractie wil monitoren en goedkeuren.",
          consequences: [
            "Teamleden voelen zich niet vertrouwd",
            "Creativiteit en initiatief worden onderdrukt",
            "Leider wordt een bottleneck",
            "Hoge stress voor iedereen"
          ]
        },
        {
          name: "Conflictvermijding",
          description: "Systematisch vermijden van moeilijke gesprekken en confrontaties",
          characteristics: [
            "Stelt moeilijke beslissingen uit",
            "Vermijdt directe feedback",
            "Hoopt dat problemen vanzelf oplossen",
            "Gebruikt indirecte communicatie"
          ],
          causes: [
            "Angst voor afwijzing",
            "Behoefte om aardig gevonden te worden",
            "Gebrek aan conflict-vaardigheden",
            "Angst voor emotionele reacties"
          ],
          sportExample: "Een coach die een underperformende speler niet aanspreekt, of een manager die teamconflicten negeert in de hoop dat ze vanzelf oplossen.",
          consequences: [
            "Problemen escaleren",
            "Prestaties blijven achter",
            "Frustratie bij teamleden",
            "Verlies van respect"
          ]
        },
        {
          name: "Manisch Gedrag",
          description: "Hyperactiviteit en onsamenhangende besluitvorming - 'heel hard rennen maar de verkeerde kant op'",
          characteristics: [
            "Constant in beweging",
            "Veel projecten tegelijk",
            "Impulsieve beslissingen",
            "Geen tijd voor reflectie"
          ],
          causes: [
            "Angst voor stilte en reflectie",
            "Behoefte om belangrijk te lijken",
            "Onzekerheid maskeren door activiteit",
            "Adrenaline-verslaving"
          ],
          sportExample: "Een sportdirecteur die constant nieuwe initiatieven start zonder oude af te maken, of een coach die elke week de tactiek verandert.",
          consequences: [
            "Team raakt verward en uitgeput",
            "Geen consistentie in aanpak",
            "Belangrijke details worden gemist",
            "Burnout bij leider en team"
          ]
        },
        {
          name: "Tiranniseren",
          description: "Gebruik van intimidatie en agressie om controle te behouden",
          characteristics: [
            "Schreeuwt of intimideert",
            "Gebruikt angst als motivatie-instrument",
            "Accepteert geen tegenspraak",
            "Straft dissidente stemmen"
          ],
          causes: [
            "Onzekerheid over eigen autoriteit",
            "Geloof dat angst effectief is",
            "Gebrek aan andere leiderschapsvaardigheden",
            "Eigen trauma of negatieve ervaringen"
          ],
          sportExample: "Een coach die constant schreeuwt tegen spelers, of een manager die medewerkers publiekelijk vernedert voor fouten.",
          consequences: [
            "Angstcultuur ontstaat",
            "Creativiteit en initiatief verdwijnen",
            "Hoog verloop van personeel",
            "Lange termijn schade aan prestaties"
          ]
        }
      ],
      selfAwarenessTools: {
        title: "Tools voor Zelfkennis",
        tools: [
          {
            name: "360-Graden Feedback",
            description: "Feedback verzamelen van alle kanten - bazen, collega's, ondergeschikten",
            application: "Regelmatige evaluaties door spelers, collega-coaches, en management"
          },
          {
            name: "Persoonlijkheidsassessments",
            description: "Tests zoals MBTI, DISC, of Big Five om patronen te herkennen",
            application: "Begrijpen van je natuurlijke tendensen en blinde vlekken"
          },
          {
            name: "Reflectie-journaling",
            description: "Dagelijks opschrijven van ervaringen en reacties",
            application: "Patronen herkennen in je gedrag en triggers identificeren"
          },
          {
            name: "Coaching of Therapie",
            description: "Professionele hulp bij het begrijpen van gedragspatronen",
            application: "Externe begeleiding voor persoonlijke ontwikkeling"
          }
        ]
      },
      preventionStrategies: [
        "Regelmatige zelfbeoordeling en reflectie",
        "Actief feedback zoeken van teamleden",
        "Bewust werken aan persoonlijke ontwikkeling",
        "Erkennen van eigen zwakke punten",
        "Professionele coaching of begeleiding zoeken",
        "Stress-management en work-life balance",
        "Leren van fouten in plaats van ze ontkennen"
      ]
    }
  },
  {
    id: 'maccoby-narcisme',
    title: "Maccoby's Narcistische Leider",
    description: "Michael Maccoby onderscheidt productief en destructief narcisme bij leiders - beide komen veel voor in de sportwereld.",
    content: {
      narcismDefinition: {
        title: "Wat is Narcisme in Leiderschap?",
        description: "Narcisme is niet per definitie slecht - het kan zowel productief als destructief zijn, afhankelijk van hoe het wordt ingezet.",
        keyInsight: "Het verschil zit in of het narcisme ten goede komt aan het team of alleen aan de leider zelf."
      },
      productiveNarcissism: {
        title: "Productief Narcisme",
        description: "Narcistische eigenschappen die bijdragen aan effectief leiderschap",
        characteristics: [
          {
            name: "Visionair Denken",
            description: "Kunnen grote dromen en ambities formuleren",
            sportExample: "Een coach die het team inspireert met een duidelijke visie op succes en grootsheid"
          },
          {
            name: "Zelfvertrouwen",
            description: "Geloof in eigen kunnen en beslissingen",
            sportExample: "Een manager die moedige beslissingen durft te nemen, zoals het aantrekken van onbekende talenten"
          },
          {
            name: "Charisma",
            description: "Natuurlijke aantrekkingskracht en overtuigingskracht",
            sportExample: "Een teamkapitein die anderen kan inspireren en meeslepen in hun enthousiasme"
          },
          {
            name: "Ambitie",
            description: "Sterke drang naar succes en excellentie",
            sportExample: "Een sportdirecteur die de organisatie naar een hoger niveau wil tillen"
          },
          {
            name: "Innovatie",
            description: "Bereidheid om nieuwe wegen te bewandelen",
            sportExample: "Een coach die nieuwe trainingsmethoden introduceert of tactische innovaties doorvoert"
          }
        ],
        benefits: [
          "Inspireert anderen tot betere prestaties",
          "Durft risico's te nemen voor vooruitgang",
          "Creëert een cultuur van excellentie",
          "Trekt talent aan door hun visie en energie"
        ]
      },
      destructiveNarcissism: {
        title: "Destructief Narcisme",
        description: "Narcistische eigenschappen die schadelijk zijn voor het team",
        characteristics: [
          {
            name: "Gebrek aan Empathie",
            description: "Onvermogen om zich in te leven in anderen",
            sportExample: "Een coach die niet merkt dat spelers overtraind of gestrest zijn"
          },
          {
            name: "Exploitatie van Anderen",
            description: "Anderen gebruiken voor eigen doelen",
            sportExample: "Een manager die spelers uitbuit voor eigen roem zonder oog voor hun welzijn"
          },
          {
            name: "Arrogantie",
            description: "Gevoel van superioriteit en minachting voor anderen",
            sportExample: "Een coach die denkt dat alleen hun mening telt en input van anderen afwijst"
          },
          {
            name: "Behoefte aan Bewondering",
            description: "Constante behoefte aan lof en erkenning",
            sportExample: "Een leider die alle credits opeist en nooit het team erkent"
          },
          {
            name: "Woede bij Kritiek",
            description: "Extreme reacties op feedback of tegenspraak",
            sportExample: "Een manager die agressief reageert op journalisten of critici"
          }
        ],
        consequences: [
          "Team voelt zich niet gewaardeerd",
          "Hoog verloop van talent",
          "Toxische werkcultuur",
          "Korte termijn denken ten koste van duurzaamheid"
        ]
      },
      managingNarcissisticLeaders: {
        title: "Omgaan met Narcistische Leiders",
        strategies: [
          {
            name: "Voor Narcistische Leiders Zelf",
            tips: [
              "Zoek bewust feedback en neem het serieus",
              "Ontwikkel empathie door actief te luisteren",
              "Erken de bijdragen van teamleden publiekelijk",
              "Werk aan zelfbewustzijn door coaching of therapie",
              "Stel het teambelang boven persoonlijke roem"
            ]
          },
          {
            name: "Voor Teamleden",
            tips: [
              "Geef feedback op een manier die hun ego niet bedreigt",
              "Focus op resultaten en teamvoordelen",
              "Documenteer belangrijke beslissingen en afspraken",
              "Zoek steun bij collega's en HR indien nodig",
              "Blijf professioneel en laat je niet provoceren"
            ]
          },
          {
            name: "Voor Organisaties",
            tips: [
              "Implementeer 360-graden feedback systemen",
              "Zorg voor checks and balances in besluitvorming",
              "Creëer een cultuur waar feedback gewaardeerd wordt",
              "Train managers in emotionele intelligentie",
              "Monitor teamtevredenheid en welzijn regelmatig"
            ]
          }
        ]
      },
      sportSpecificChallenges: "In sport en bewegen is narcisme extra uitdaagend omdat succes vaak publiekelijk en meetbaar is. Dit kan productief narcisme versterken (wat goed is) maar ook destructief narcisme voeden. De media-aandacht en fan-cultuur kunnen narcistische tendensen versterken. Het is cruciaal dat sportorganisaties systemen hebben om productief narcisme te kanaliseren en destructief narcisme te beperken."
    }
  },
  {
    id: 'ferguson-leiderschap',
    title: "Alex Ferguson's Leiderschapsfilosofie",
    description: "Sir Alex Ferguson leidde Manchester United 26 jaar lang naar ongekend succes. Zijn 9 leiderschapsprincipes zijn toepasbaar in alle sport- en bewegingscontexten.",
    content: {
      introduction: {
        title: "De Meest Succesvolle Manager Ooit",
        description: "26 jaar aan de top van het wereldvoetbal, 38 trofeeën, en een nalatenschap die veel verder reikt dan sport alleen.",
        keyAchievements: [
          "13 Premier League titels",
          "5 FA Cups", 
          "2 Champions League trofeeën",
          "Transformeerde Manchester United van degradatiekandidaat tot wereldtop"
        ]
      },
      nineElements: [
        {
          element: "1. Lange Termijn Visie",
          description: "Denk verder dan het volgende seizoen - bouw voor de toekomst",
          principles: [
            "Investeer in jeugdontwikkeling",
            "Bouw systemen die overleven na jouw vertrek",
            "Maak beslissingen met de lange termijn in gedachten",
            "Accepteer korte termijn pijn voor lange termijn winst"
          ],
          sportExample: "Ferguson bouwde meerdere generaties teams op, investeerde zwaar in de jeugdacademie, en nam soms impopulaire beslissingen (zoals Beckham verkopen) voor de lange termijn gezondheid van de club.",
          application: "In fitnesscentra: investeren in medewerkerontwikkeling en klantenretentie in plaats van alleen korte termijn omzetgroei. In sportteams: focus op talentontwikkeling naast directe resultaten."
        },
        {
          element: "2. Individuele Benadering",
          description: "Elke speler is anders - pas je aanpak aan per persoon",
          principles: [
            "Leer de persoonlijkheid van elk teamlid kennen",
            "Gebruik verschillende motivatietechnieken per persoon",
            "Respecteer culturele en persoonlijke verschillen",
            "Geef iedereen wat ze nodig hebben om te excelleren"
          ],
          sportExample: "Ferguson behandelde Cristiano Ronaldo anders dan Roy Keane, gaf jongere spelers meer begeleiding en ervaren spelers meer vrijheid. Hij kende de familie-omstandigheden van zijn spelers.",
          application: "Personal trainers moeten verschillende benaderingen gebruiken voor verschillende klanten. Teamcoaches moeten begrijpen dat niet iedereen op dezelfde manier gemotiveerd wordt."
        },
        {
          element: "3. Discipline en Standaarden",
          description: "Hoge standaarden gelden voor iedereen - geen uitzonderingen",
          principles: [
            "Stel duidelijke, niet-onderhandelbare regels",
            "Handhaaf consequent, ongeacht wie het betreft",
            "Laat zien dat niemand boven het team staat",
            "Maak onderscheid tussen persoon en gedrag"
          ],
          sportExample: "Ferguson stuurde David Beckham weg toen zijn gedrag niet meer paste bij de teamdiscipline, ondanks dat hij een superster was. Regels golden voor iedereen.",
          application: "In sportteams: geen verschillende regels voor sterren. In fitnesscentra: alle medewerkers houden zich aan dezelfde professionaliteitsstandaarden, ongeacht hun populariteit bij klanten."
        },
        {
          element: "4. Controle en Autoriteit",
          description: "Behoud altijd de uiteindelijke controle, maar delegeer waar mogelijk",
          principles: [
            "Maak duidelijk wie de eindverantwoordelijkheid heeft",
            "Delegeer taken maar behoud oversight",
            "Laat niet toe dat anderen je autoriteit ondermijnen",
            "Wees besluitvaardig in cruciale momenten"
          ],
          sportExample: "Ferguson gaf spelers en staf veel vrijheden, maar in belangrijke momenten was altijd duidelijk dat hij de beslissingen nam. Hij tolereerde geen publieke kritiek op zijn beslissingen.",
          application: "Managers moeten duidelijke hiërarchie handhaven terwijl ze medewerkers empoweren. In teams: de coach heeft het laatste woord, maar betrekt spelers bij besluitvorming."
        },
        {
          element: "5. Emotionele Intelligentie",
          description: "Begrijp en beheer emoties - van jezelf en je team",
          principles: [
            "Lees de emotionele staat van je team",
            "Pas je communicatiestijl aan op de situatie",
            "Beheer je eigen emoties onder druk",
            "Gebruik emoties als motivatie-instrument"
          ],
          sportExample: "Ferguson wist precies wanneer hij hard moest zijn (beroemde 'hairdryer treatment') en wanneer hij een arm om iemands schouder moest slaan. Hij voelde de stemming in de kleedkamer aan.",
          application: "Fitnessinstructeurs moeten aanvoelen wanneer klanten extra motivatie nodig hebben. Coaches moeten weten wanneer het team ontspanning nodig heeft en wanneer intensiteit."
        },
        {
          element: "6. Voortdurend Leren",
          description: "Blijf jezelf ontwikkelen en pas je aan veranderende omstandigheden",
          principles: [
            "Studeer andere succesvolle leiders",
            "Experimenteer met nieuwe methoden",
            "Leer van fouten en tegenslagen",
            "Blijf nieuwsgierig en open voor verandering"
          ],
          sportExample: "Ferguson paste zijn tactiek aan door de jaren heen, leerde van andere coaches, en bleef innoveren. Hij studeerde psychologie en management buiten voetbal.",
          application: "Sportprofessionals moeten bijblijven met nieuwe trainingsmethoden, voedingsinzichten, en technologische ontwikkelingen. Managers moeten leren van andere industrieën."
        },
        {
          element: "7. Teambuilding",
          description: "Creëer een sterke teamcultuur waar iedereen zich thuis voelt",
          principles: [
            "Investeer in teamactiviteiten buiten sport",
            "Creëer tradities en rituelen",
            "Zorg dat iedereen zich gewaardeerd voelt",
            "Bouw bruggen tussen verschillende groepen"
          ],
          sportExample: "Ferguson organiseerde teamdiners, kende de families van spelers, en zorgde dat nieuwe spelers snel geïntegreerd werden. Hij creëerde een 'familie-gevoel' bij United.",
          application: "Sportteams hebben teambuilding-activiteiten nodig. Fitnesscentra moeten een gemeenschapsgevoel creëren tussen medewerkers en tussen klanten."
        },
        {
          element: "8. Communicatie",
          description: "Wees duidelijk, eerlijk en consistent in je communicatie",
          principles: [
            "Geef duidelijke, specifieke feedback",
            "Communiceer je verwachtingen helder",
            "Wees eerlijk, ook als het moeilijk is",
            "Luister actief naar input van anderen"
          ],
          sportExample: "Ferguson was bekend om zijn directe, eerlijke feedback. Spelers wisten altijd waar ze stonden. Hij nam tijd voor individuele gesprekken en luisterde naar zorgen.",
          application: "Coaches moeten duidelijke feedback geven over prestaties. Managers moeten regelmatig één-op-één gesprekken hebben met medewerkers over hun ontwikkeling."
        },
        {
          element: "9. Mentale Veerkracht",
          description: "Ontwikkel mentale sterkte bij jezelf en je team",
          principles: [
            "Leer omgaan met druk en tegenslagen",
            "Bouw zelfvertrouwen op bij teamleden",
            "Creëer een cultuur van veerkracht",
            "Focus op wat je kunt controleren"
          ],
          sportExample: "Ferguson's teams waren beroemd om hun 'never give up' mentaliteit. Ze wonnen vaak in de laatste minuten omdat ze mentaal sterker waren dan tegenstanders.",
          application: "Atleten moeten leren omgaan met nederlagen en druk. Fitnessklanten hebben mentale ondersteuning nodig bij het bereiken van hun doelen. Medewerkers moeten veerkrachtig zijn bij uitdagingen."
        }
      ],
      keyLessons: [
        "Succes is een marathon, geen sprint - denk lange termijn",
        "Elke persoon is uniek - pas je leiderschap daarop aan",
        "Standaarden zijn niet onderhandelbaar - handhaaf ze consequent",
        "Emotionele intelligentie is net zo belangrijk als technische kennis",
        "Blijf leren en aanpassen - de wereld verandert constant",
        "Team komt altijd voor individu - geen uitzonderingen",
        "Communicatie is de basis van alles - wees duidelijk en eerlijk",
        "Mentale sterkte bepaalt vaak het verschil tussen winnen en verliezen"
      ],
      modernApplication: "Ferguson's principes zijn nog steeds relevant in de moderne sport- en bewegingswereld. Of je nu een voetbalcoach bent, een manager van een fitnesscentrum, een personal trainer, of leiding geeft aan een sportorganisatie - deze 9 elementen vormen een solide basis voor effectief leiderschap."
    }
  },
  {
    id: 'gezag-dominantie',
    title: "Van Vugt & Wiltschut: Gezag vs Dominantie",
    description: "Mark van Vugt en Wiltschut maken een cruciaal onderscheid tussen gezag (gebaseerd op respect) en dominantie (gebaseerd op macht) in leiderschap.",
    content: {
      coreDistinction: {
        title: "Het Fundamentele Verschil",
        description: "Niet alle leiderschap is hetzelfde - er zijn twee fundamenteel verschillende wegen naar invloed",
        keyInsight: "Gezag wordt gegeven door volgers, dominantie wordt genomen door leiders"
      },
      authorityBased: {
        title: "Gezag-gebaseerd Leiderschap",
        description: "Leiderschap gebaseerd op respect, vertrouwen en vrijwillige acceptatie",
        characteristics: [
          {
            name: "Respect en Vertrouwen",
            description: "Volgers respecteren de leider en vertrouwen hun beslissingen",
            sportExample: "Een ervaren coach die door spelers gerespecteerd wordt vanwege hun kennis en eerlijkheid"
          },
          {
            name: "Vrijwillige Acceptatie",
            description: "Mensen volgen omdat ze willen, niet omdat ze moeten",
            sportExample: "Atleten die extra hard trainen omdat ze geloven in de visie van hun coach"
          },
          {
            name: "Competentie-gebaseerd",
            description: "Gebaseerd op bewezen vaardigheden en expertise",
            sportExample: "Een fysiotherapeut die gezag heeft door hun medische kennis en succesvolle behandelingen"
          },
          {
            name: "Morele Autoriteit",
            description: "Doet het juiste, ook als het moeilijk is",
            sportExample: "Een manager die een populaire maar problematische speler wegdoet voor het teambelang"
          },
          {
            name: "Empowerment",
            description: "Maakt anderen sterker en zelfstandiger",
            sportExample: "Een coach die spelers leert zelfstandig beslissingen te nemen tijdens wedstrijden"
          }
        ],
        benefits: [
          "Hoge motivatie en betrokkenheid van teamleden",
          "Creativiteit en initiatief worden gestimuleerd",
          "Duurzame resultaten en loyaliteit",
          "Positieve teamcultuur en samenwerking",
          "Zelfstandige groei van teamleden"
        ]
      },
      dominanceBased: {
        title: "Dominantie-gebaseerd Leiderschap",
        description: "Leiderschap gebaseerd op macht, controle en dwang",
        characteristics: [
          {
            name: "Macht en Controle",
            description: "Gebruikt positie en macht om gehoorzaamheid af te dwingen",
            sportExample: "Een coach die spelers intimideert en bedreigt met bankzitten"
          },
          {
            name: "Angst-gebaseerd",
            description: "Mensen volgen uit angst voor consequenties",
            sportExample: "Atleten die alleen presteren omdat ze bang zijn voor straf of uitsluiting"
          },
          {
            name: "Hiërarchie Benadrukken",
            description: "Constant herinneren aan wie de baas is",
            sportExample: "Een manager die voortdurend hun autoriteit benadrukt en geen tegenspraak duldt"
          },
          {
            name: "Competitie Stimuleren",
            description: "Zet teamleden tegen elkaar op",
            sportExample: "Een coach die spelers tegen elkaar opzet in plaats van teamwork te stimuleren"
          },
          {
            name: "Korte Termijn Focus",
            description: "Richt zich op directe compliance in plaats van ontwikkeling",
            sportExample: "Een trainer die alleen focust op directe resultaten zonder oog voor lange termijn ontwikkeling"
          }
        ],
        consequences: [
          "Lage intrinsieke motivatie",
          "Angstcultuur en stress",
          "Verminderde creativiteit en initiatief",
          "Hoog verloop en burnout",
          "Afhankelijkheid van de leider"
        ]
      },
      recognizingDifference: {
        title: "Hoe Herken Je Het Verschil?",
        indicators: [
          {
            question: "Wat gebeurt er als de leider er niet is?",
            authority: "Team functioneert goed en neemt eigen verantwoordelijkheid",
            dominance: "Chaos, niemand neemt initiatief, wachten op instructies"
          },
          {
            question: "Hoe reageren mensen op de leider?",
            authority: "Enthousiasme, respect, willen bijdragen",
            dominance: "Angst, compliance, vermijden van risico's"
          },
          {
            question: "Hoe wordt feedback gegeven?",
            authority: "Open dialoog, constructieve discussie",
            dominance: "Eenrichtingsverkeer, geen ruimte voor input"
          },
          {
            question: "Wat is de focus?",
            authority: "Ontwikkeling van mensen en lange termijn succes",
            dominance: "Controle en korte termijn resultaten"
          }
        ]
      },
      buildingAuthority: {
        title: "Hoe Bouw Je Gezag Op?",
        strategies: [
          {
            name: "Competentie Ontwikkelen",
            description: "Word echt goed in wat je doet",
            actions: [
              "Investeer in je eigen ontwikkeling en certificeringen",
              "Blijf bij met nieuwe ontwikkelingen in je vakgebied",
              "Leer van andere succesvolle leiders",
              "Zoek feedback en werk aan je zwakke punten"
            ]
          },
          {
            name: "Integriteit Tonen",
            description: "Doe wat je zegt en zeg wat je doet",
            actions: [
              "Houd je aan afspraken en beloftes",
              "Wees eerlijk, ook als het moeilijk is",
              "Neem verantwoordelijkheid voor fouten",
              "Behandel iedereen eerlijk en consistent"
            ]
          },
          {
            name: "Anderen Ontwikkelen",
            description: "Investeer in de groei van je teamleden",
            actions: [
              "Geef constructieve feedback en coaching",
              "Creëer groeimogelijkheden voor anderen",
              "Erken en waardeer bijdragen van teamleden",
              "Deel je kennis en ervaring"
            ]
          },
          {
            name: "Vertrouwen Opbouwen",
            description: "Creëer een veilige omgeving waar mensen kunnen groeien",
            actions: [
              "Luister actief naar zorgen en ideeën",
              "Geef mensen ruimte om fouten te maken en te leren",
              "Wees voorspelbaar en betrouwbaar in je reacties",
              "Toon interesse in mensen als persoon, niet alleen als werknemer"
            ]
          }
        ]
      },
      sportApplications: "In sport en bewegen is het verschil tussen gezag en dominantie cruciaal. Dominantie-gebaseerd leiderschap kan korte termijn resultaten opleveren, maar leidt vaak tot burnout, blessures door overtraining, en mentale problemen bij atleten. Gezag-gebaseerd leiderschap creëert duurzame prestaties, intrinsieke motivatie, en helpt atleten ook buiten de sport te groeien als persoon."
    }
  }
]

export default function LeadershipApp() {
  const [currentView, setCurrentView] = useState<'overview' | 'theory' | 'quiz'>('overview')
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null)
  const [readTheories, setReadTheories] = useState<Set<string>>(new Set())
  const [totalPoints, setTotalPoints] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizScore, setQuizScore] = useState<{score: number, total: number} | null>(null)

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('leadership-progress')
    if (savedProgress) {
      const progress = JSON.parse(savedProgress)
      setReadTheories(new Set(progress.readTheories || []))
      setTotalPoints(progress.totalPoints || 0)
      setQuizCompleted(progress.quizCompleted || false)
      setQuizScore(progress.quizScore || null)
    }
  }, [])

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    const progress = {
      readTheories: Array.from(readTheories),
      totalPoints,
      quizCompleted,
      quizScore
    }
    localStorage.setItem('leadership-progress', JSON.stringify(progress))
  }, [readTheories, totalPoints, quizCompleted, quizScore])

  const handleTheoryRead = (theoryId: string) => {
    if (!readTheories.has(theoryId)) {
      setReadTheories(prev => new Set([...prev, theoryId]))
      setTotalPoints(prev => prev + 50)
    }
  }

  const handleQuizComplete = (score: number, total: number) => {
    if (!quizCompleted) {
      setQuizCompleted(true)
      setQuizScore({score, total})
      setTotalPoints(prev => prev + (score * 10))
    }
  }

  const getProgressPercentage = () => {
    const theoriesRead = readTheories.size
    const maxTheories = theories.length
    const quizBonus = quizCompleted ? 1 : 0
    return Math.round(((theoriesRead + quizBonus) / (maxTheories + 1)) * 100)
  }

  const getProgressMessage = () => {
    const percentage = getProgressPercentage()
    if (percentage === 100) return "🏆 Gefeliciteerd! Je bent een echte leiderschap expert!"
    if (percentage >= 80) return "🌟 Bijna klaar! Je beheerst leiderschap al heel goed!"
    if (percentage >= 60) return "💪 Goed bezig! Je bent op de goede weg!"
    if (percentage >= 40) return "📚 Blijf lezen! Je maakt goede vooruitgang!"
    return "🚀 Welkom! Begin je leiderschapsreis hier!"
  }

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          🏃‍♂️ Leiderschap in de Wereld van Sport en Bewegen
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Ontdek hoe leiderschapstheorieën toegepast worden in sport, fitness, bewegen en fysieke activiteit
        </p>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-purple-800 mb-2">Voor HBO Sportkunde Studenten</h2>
          <p className="text-purple-700">
            Van professionele sport tot fitnesscentra, van jeugdtraining tot bewegingstherapie - 
            leer hoe je effectief leiding geeft in alle aspecten van sport en bewegen.
          </p>
        </div>
      </div>

      {/* Progress Dashboard */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Jouw Voortgang</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">{totalPoints}</div>
            <div className="text-gray-600">Totaal Punten</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{readTheories.size}/{theories.length}</div>
            <div className="text-gray-600">Theorieën Gelezen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{quizCompleted ? '✓' : '○'}</div>
            <div className="text-gray-600">Quiz Voltooid</div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Totale Voortgang</span>
            <span className="text-sm text-gray-600">{getProgressPercentage()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <p className="text-center mt-3 text-gray-700 font-medium">
            {getProgressMessage()}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <button
          onClick={() => setCurrentView('theory')}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-2xl font-bold mb-2">Leiderschapstheorieën</h3>
          <p className="text-blue-100">
            Ontdek 9 essentiële theorieën toegepast op sport en bewegen
          </p>
          <div className="mt-4 text-sm bg-white bg-opacity-20 rounded-full px-4 py-2 inline-block">
            {readTheories.size} van {theories.length} gelezen
          </div>
        </button>

        <button
          onClick={() => setCurrentView('quiz')}
          className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold mb-2">Kennisquiz</h3>
          <p className="text-green-100">
            Test je kennis met 10 uitdagende vragen
          </p>
          <div className="mt-4 text-sm bg-white bg-opacity-20 rounded-full px-4 py-2 inline-block">
            {quizCompleted ? `Voltooid: ${quizScore?.score}/${quizScore?.total}` : 'Nog niet gestart'}
          </div>
        </button>
      </div>

      {/* Theory Overview */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🎓 Leiderschapstheorieën Overzicht</h2>
        <div className="grid gap-4">
          {theories.map((theory) => (
            <div 
              key={theory.id}
              className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                readTheories.has(theory.id) 
                  ? 'border-green-400 bg-green-50' 
                  : 'border-gray-200 hover:border-purple-400 hover:bg-purple-50'
              }`}
              onClick={() => {
                setSelectedTheory(theory.id)
                setCurrentView('theory')
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">{theory.title}</h3>
                  <p className="text-gray-600 text-sm">{theory.description}</p>
                </div>
                <div className="ml-4 flex items-center space-x-2">
                  {readTheories.has(theory.id) ? (
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      ✓
                    </span>
                  ) : (
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      +50 punten
                    </span>
                  )}
                  <span className="text-gray-400">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sport & Movement Context */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg shadow-lg p-6 border-l-4 border-orange-400">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">🏃‍♀️ Sport en Bewegen Context</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-orange-700 mb-2">Toepassingsgebieden:</h3>
            <ul className="text-orange-600 space-y-1">
              <li>• Professionele sportteams</li>
              <li>• Fitnesscentra en sportscholen</li>
              <li>• Jeugdsport en talentontwikkeling</li>
              <li>• Bewegingstherapie en revalidatie</li>
              <li>• Sportorganisaties en federaties</li>
              <li>• Personal training en coaching</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-orange-700 mb-2">Leiderschapsrollen:</h3>
            <ul className="text-orange-600 space-y-1">
              <li>• Hoofdcoaches en assistent-coaches</li>
              <li>• Teamkapiteins en aanvoerders</li>
              <li>• Sportmanagers en directeuren</li>
              <li>• Fitnessinstructeurs en trainers</li>
              <li>• Fysiotherapeuten en begeleiders</li>
              <li>• Scheidsrechters en officials</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTheoryView = () => {
    const theoryToShow = selectedTheory ? theories.find(t => t.id === selectedTheory) : null
    
    return (
      <div className="space-y-6">
        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setCurrentView('overview')
                setSelectedTheory(null)
              }}
              className="flex items-center text-purple-600 hover:text-purple-800 font-medium"
            >
              ← Terug naar Overzicht
            </button>
            <div className="text-sm text-gray-600">
              {readTheories.size}/{theories.length} theorieën gelezen
            </div>
          </div>
        </div>

        {/* Theory Selection or Content */}
        {!theoryToShow ? (
          <div className="grid gap-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              📚 Kies een Leiderschapstheorie
            </h2>
            {theories.map((theory) => (
              <TheoryCard
                key={theory.id}
                theory={theory}
                isExpanded={false}
                onRead={() => handleTheoryRead(theory.id)}
                isRead={readTheories.has(theory.id)}
                onClick={() => setSelectedTheory(theory.id)}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Theory Navigation */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedTheory(null)}
                  className="text-purple-600 hover:text-purple-800 font-medium"
                >
                  ← Alle Theorieën
                </button>
                <div className="flex space-x-2">
                  {theories.map((theory, index) => {
                    const currentIndex = theories.findIndex(t => t.id === selectedTheory)
                    const isPrevious = index < currentIndex
                    const isCurrent = theory.id === selectedTheory
                    const isNext = index > currentIndex
                    
                    return (
                      <button
                        key={theory.id}
                        onClick={() => setSelectedTheory(theory.id)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          isCurrent 
                            ? 'bg-purple-600' 
                            : readTheories.has(theory.id)
                            ? 'bg-green-400'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        title={theory.title}
                      />
                    )
                  })}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      const currentIndex = theories.findIndex(t => t.id === selectedTheory)
                      if (currentIndex > 0) {
                        setSelectedTheory(theories[currentIndex - 1].id)
                      }
                    }}
                    disabled={theories.findIndex(t => t.id === selectedTheory) === 0}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Vorige
                  </button>
                  <button
                    onClick={() => {
                      const currentIndex = theories.findIndex(t => t.id === selectedTheory)
                      if (currentIndex < theories.length - 1) {
                        setSelectedTheory(theories[currentIndex + 1].id)
                      }
                    }}
                    disabled={theories.findIndex(t => t.id === selectedTheory) === theories.length - 1}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Volgende →
                  </button>
                </div>
              </div>
            </div>

            {/* Theory Content */}
            <TheoryCard
              theory={theoryToShow}
              isExpanded={true}
              onRead={() => handleTheoryRead(theoryToShow.id)}
              isRead={readTheories.has(theoryToShow.id)}
            />
          </div>
        )}
      </div>
    )
  }

  const renderQuizView = () => (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentView('overview')}
            className="flex items-center text-purple-600 hover:text-purple-800 font-medium"
          >
            ← Terug naar Overzicht
          </button>
          <div className="text-sm text-gray-600">
            Quiz: {quizCompleted ? 'Voltooid' : 'Nog niet voltooid'}
          </div>
        </div>
      </div>

      {/* Quiz Component */}
      <QuizComponent onComplete={handleQuizComplete} />
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {currentView === 'overview' && renderOverview()}
        {currentView === 'theory' && renderTheoryView()}
        {currentView === 'quiz' && renderQuizView()}
      </div>
    </div>
  )
}