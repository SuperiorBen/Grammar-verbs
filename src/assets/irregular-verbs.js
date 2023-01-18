const irregularVerbs = [
    {
        "Present": "arise",
        "Past": "arose",
        "PastParticiple": "arisen",
        "Spanish": "surgir"
    },
    {
        "Present": "be",
        "Past": "was \/ were",
        "PastParticiple": "been",
        "Spanish": "ser"
    },
    {
        "Present": "be",
        "Past": "was \/ were",
        "PastParticiple": "been",
        "Spanish": "ser"
    },
    {
        "Present": "beat",
        "Past": "beat",
        "PastParticiple": "beaten",
        "Spanish": "golpear"
    },
    {
        "Present": "become",
        "Past": "became",
        "PastParticiple": "become",
        "Spanish": "convertirse"
    },
    {
        "Present": "begin",
        "Past": "began",
        "PastParticiple": "begun",
        "Spanish": "comenzar"
    },
    {
        "Present": "bet",
        "Past": "bet\/betted",
        "PastParticiple": "bet\/betted",
        "Spanish": "apostar"
    },
    {
        "Present": "bite",
        "Past": "bit",
        "PastParticiple": "bitten",
        "Spanish": "morder"
    },
    {
        "Present": "bleed",
        "Past": "bled",
        "PastParticiple": "bled",
        "Spanish": "sangrar"
    },
    {
        "Present": "blow",
        "Past": "blew",
        "PastParticiple": "blown",
        "Spanish": "soplar"
    },
    {
        "Present": "break",
        "Past": "broke",
        "PastParticiple": "broken",
        "Spanish": "romper"
    },
    {
        "Present": "bring",
        "Past": "brought",
        "PastParticiple": "brought",
        "Spanish": "traer"
    },
    {
        "Present": "build",
        "Past": "built",
        "PastParticiple": "built",
        "Spanish": "construir"
    },
    {
        "Present": "buy",
        "Past": "bought",
        "PastParticiple": "bought",
        "Spanish": "comprar"
    },
    {
        "Present": "catch",
        "Past": "caught",
        "PastParticiple": "caught",
        "Spanish": "atrapar"
    },
    {
        "Present": "choose",
        "Past": "chose",
        "PastParticiple": "chosen",
        "Spanish": "elegir"
    },
    {
        "Present": "come",
        "Past": "came",
        "PastParticiple": "come",
        "Spanish": "venir"
    },
    {
        "Present": "cost",
        "Past": "cost",
        "PastParticiple": "cost",
        "Spanish": "costar"
    },
    {
        "Present": "creep",
        "Past": "crept",
        "PastParticiple": "crept",
        "Spanish": "arrastrarse"
    },
    {
        "Present": "cut",
        "Past": "cut",
        "PastParticiple": "cut",
        "Spanish": "cortar"
    },
    {
        "Present": "deal",
        "Past": "dealt",
        "PastParticiple": "dealt",
        "Spanish": "dar, repartir"
    },
    {
        "Present": "do",
        "Past": "did",
        "PastParticiple": "done",
        "Spanish": "hacer"
    },
    {
        "Present": "draw",
        "Past": "drew",
        "PastParticiple": "drawn",
        "Spanish": "dibujar"
    },
    {
        "Present": "dream",
        "Past": "dreamt\/dreamed",
        "PastParticiple": "dreamt\/dreamed",
        "Spanish": "soñar"
    },
    {
        "Present": "drink",
        "Past": "drank",
        "PastParticiple": "drunk",
        "Spanish": "beber"
    },
    {
        "Present": "drive",
        "Past": "drove",
        "PastParticiple": "driven",
        "Spanish": "conducir"
    },
    {
        "Present": "eat",
        "Past": "ate",
        "PastParticiple": "eaten",
        "Spanish": "comer"
    },
    {
        "Present": "fall",
        "Past": "fell",
        "PastParticiple": "fallen",
        "Spanish": "caer"
    },
    {
        "Present": "feed",
        "Past": "fed",
        "PastParticiple": "fed",
        "Spanish": "alimentar"
    },
    {
        "Present": "feel",
        "Past": "felt",
        "PastParticiple": "felt",
        "Spanish": "sentir"
    },
    {
        "Present": "fight",
        "Past": "fought",
        "PastParticiple": "fought",
        "Spanish": "pelear"
    },
    {
        "Present": "find",
        "Past": "found",
        "PastParticiple": "found",
        "Spanish": "encontrar"
    },
    {
        "Present": "flee",
        "Past": "fled",
        "PastParticiple": "fled",
        "Spanish": "huir"
    },
    {
        "Present": "fly",
        "Past": "flew",
        "PastParticiple": "flown",
        "Spanish": "volar"
    },
    {
        "Present": "forget",
        "Past": "forgot",
        "PastParticiple": "forgotten",
        "Spanish": "olvidar"
    },
    {
        "Present": "forgive",
        "Past": "forgave",
        "PastParticiple": "forgiven",
        "Spanish": "perdonar"
    },
    {
        "Present": "forsake",
        "Past": "forsook",
        "PastParticiple": "forsaken",
        "Spanish": "Olvidar"
    },
    {
        "Present": "freeze",
        "Past": "froze",
        "PastParticiple": "frozen",
        "Spanish": "congelar"
    },
    {
        "Present": "get",
        "Past": "got",
        "PastParticiple": "got",
        "Spanish": "tener, obtener"
    },
    {
        "Present": "give",
        "Past": "gave",
        "PastParticiple": "given",
        "Spanish": "dar"
    },
    {
        "Present": "go",
        "Past": "went",
        "PastParticiple": "gone",
        "Spanish": "ir"
    },
    {
        "Present": "grind",
        "Past": "ground",
        "PastParticiple": "ground",
        "Spanish": "moler"
    },
    {
        "Present": "grow",
        "Past": "grew",
        "PastParticiple": "grown",
        "Spanish": "crecer"
    },
    {
        "Present": "hang",
        "Past": "hung",
        "PastParticiple": "hung",
        "Spanish": "colgar"
    },
    {
        "Present": "have",
        "Past": "had",
        "PastParticiple": "had",
        "Spanish": "tener"
    },
    {
        "Present": "hear",
        "Past": "heard",
        "PastParticiple": "heard",
        "Spanish": "oír"
    },
    {
        "Present": "hide",
        "Past": "hid",
        "PastParticiple": "hidden",
        "Spanish": "esconderse"
    },
    {
        "Present": "hit",
        "Past": "hit",
        "PastParticiple": "hit",
        "Spanish": "golpear"
    },
    {
        "Present": "hold",
        "Past": "held",
        "PastParticiple": "held",
        "Spanish": "tener, mantener"
    },
    {
        "Present": "hurt",
        "Past": "hurt",
        "PastParticiple": "hurt",
        "Spanish": "herir, doler"
    },
    {
        "Present": "keep",
        "Past": "kept",
        "PastParticiple": "kept",
        "Spanish": "guardar"
    },
    {
        "Present": "kneel",
        "Past": "knelt",
        "PastParticiple": "knelt",
        "Spanish": "arrodillarse"
    },
    {
        "Present": "know",
        "Past": "knew",
        "PastParticiple": "known",
        "Spanish": "saber"
    },
    {
        "Present": "lead",
        "Past": "led",
        "PastParticiple": "led",
        "Spanish": "encabezar"
    },
    {
        "Present": "learn",
        "Past": "learnt\/learned",
        "PastParticiple": "learnt\/learned",
        "Spanish": "aprender"
    },
    {
        "Present": "leave",
        "Past": "left",
        "PastParticiple": "left",
        "Spanish": "dejar"
    },
    {
        "Present": "lend",
        "Past": "lent",
        "PastParticiple": "lent",
        "Spanish": "prestar"
    },
    {
        "Present": "let",
        "Past": "let",
        "PastParticiple": "let",
        "Spanish": "dejar"
    },
    {
        "Present": "lie",
        "Past": "lay",
        "PastParticiple": "lain",
        "Spanish": "tumbarse"
    },
    {
        "Present": "lie",
        "Past": "lied",
        "PastParticiple": "lied",
        "Spanish": "Mentir"
    },
    {
        "Present": "lay ",
        "Past": "laid",
        "PastParticiple": "laid",
        "Spanish": "tumbar a alguien"
    },
    {
        "Present": "lose",
        "Past": "lost",
        "PastParticiple": "lost",
        "Spanish": "perder"
    },
    {
        "Present": "make",
        "Past": "made",
        "PastParticiple": "made",
        "Spanish": "hacer"
    },
    {
        "Present": "mean",
        "Past": "meant",
        "PastParticiple": "meant",
        "Spanish": "significar"
    },
    {
        "Present": "meet",
        "Past": "met",
        "PastParticiple": "met",
        "Spanish": "conocer, encontrar"
    },
    {
        "Present": "pay",
        "Past": "paid",
        "PastParticiple": "paid",
        "Spanish": "pagar"
    },
    {
        "Present": "put",
        "Past": "put",
        "PastParticiple": "put",
        "Spanish": "poner"
    },
    {
        "Present": "quit",
        "Past": "quit\/quitted",
        "PastParticiple": "quit\/quitted",
        "Spanish": "abandonar"
    },
    {
        "Present": "read",
        "Past": "read",
        "PastParticiple": "read",
        "Spanish": "leer"
    },
    {
        "Present": "ride",
        "Past": "rode",
        "PastParticiple": "ridden",
        "Spanish": "montar, ir"
    },
    {
        "Present": "ring",
        "Past": "rang",
        "PastParticiple": "rung",
        "Spanish": "llamar por teléfono"
    },
    {
        "Present": "rise",
        "Past": "rose",
        "PastParticiple": "risen",
        "Spanish": "elevar levantar"
    },
    {
        "Present": "run",
        "Past": "ran",
        "PastParticiple": "run",
        "Spanish": "correr"
    },
    {
        "Present": "say",
        "Past": "said",
        "PastParticiple": "said",
        "Spanish": "decir"
    },
    {
        "Present": "see",
        "Past": "saw",
        "PastParticiple": "seen",
        "Spanish": "ver"
    },
    {
        "Present": "sell",
        "Past": "sold",
        "PastParticiple": "sold",
        "Spanish": "vender"
    },
    {
        "Present": "send",
        "Past": "sent",
        "PastParticiple": "sent",
        "Spanish": "enviar"
    },
    {
        "Present": "set",
        "Past": "set",
        "PastParticiple": "set",
        "Spanish": "fijar"
    },
    {
        "Present": "sew",
        "Past": "sewed",
        "PastParticiple": "sewn\/sewed",
        "Spanish": "coser ropa"
    },
    {
        "Present": "shake",
        "Past": "shook",
        "PastParticiple": "shaken",
        "Spanish": "sacudir"
    },
    {
        "Present": "shine",
        "Past": "shone",
        "PastParticiple": "shone",
        "Spanish": "brillar"
    },
    {
        "Present": "shoot",
        "Past": "shot",
        "PastParticiple": "shot",
        "Spanish": "disparar"
    },
    {
        "Present": "show",
        "Past": "showed",
        "PastParticiple": "shown\/showed",
        "Spanish": "mostrar"
    },
    {
        "Present": "shrink",
        "Past": "shrank\/shrunk",
        "PastParticiple": "shrunk",
        "Spanish": "encoger"
    },
    {
        "Present": "shut",
        "Past": "shut",
        "PastParticiple": "shut",
        "Spanish": "cerrar"
    },
    {
        "Present": "sing",
        "Past": "sang",
        "PastParticiple": "sung",
        "Spanish": "cantar"
    },
    {
        "Present": "sink",
        "Past": "sank",
        "PastParticiple": "sunk",
        "Spanish": "hundir"
    },
    {
        "Present": "sit",
        "Past": "sat",
        "PastParticiple": "sat",
        "Spanish": "sentarse"
    },
    {
        "Present": "sleep",
        "Past": "slept",
        "PastParticiple": "slept",
        "Spanish": "dormir"
    },
    {
        "Present": "slide",
        "Past": "slid",
        "PastParticiple": "slid",
        "Spanish": "deslizar"
    },
    {
        "Present": "sow",
        "Past": "sowed",
        "PastParticiple": "sown\/sowed",
        "Spanish": "sembrar"
    },
    {
        "Present": "speak",
        "Past": "spoke",
        "PastParticiple": "spoken",
        "Spanish": "hablar"
    },
    {
        "Present": "spell",
        "Past": "spelt\/spelled",
        "PastParticiple": "spelt\/spelled",
        "Spanish": "deletrear"
    },
    {
        "Present": "spend",
        "Past": "spent",
        "PastParticiple": "spent",
        "Spanish": "gastar"
    },
    {
        "Present": "spill",
        "Past": "spilt\/spilled",
        "PastParticiple": "spilt\/spilled",
        "Spanish": "derramar"
    },
    {
        "Present": "split",
        "Past": "split",
        "PastParticiple": "split",
        "Spanish": "partir"
    },
    {
        "Present": "spoil",
        "Past": "spoilt\/spoiled",
        "PastParticiple": "spoilt\/spoiled",
        "Spanish": "estropear"
    },
    {
        "Present": "spread",
        "Past": "spread",
        "PastParticiple": "spread",
        "Spanish": "extenderse"
    },
    {
        "Present": "stand",
        "Past": "stood",
        "PastParticiple": "stood",
        "Spanish": "estar de pie"
    },
    {
        "Present": "steal",
        "Past": "stole",
        "PastParticiple": "stolen",
        "Spanish": "robar"
    },
    {
        "Present": "sting",
        "Past": "stung",
        "PastParticiple": "stung",
        "Spanish": "picar"
    },
    {
        "Present": "stink",
        "Past": "stank\/stunk",
        "PastParticiple": "stunk",
        "Spanish": "apestar"
    },
    {
        "Present": "strike",
        "Past": "struck",
        "PastParticiple": "struck",
        "Spanish": "golpear"
    },
    {
        "Present": "swear",
        "Past": "swore",
        "PastParticiple": "sworn",
        "Spanish": "jurar"
    },
    {
        "Present": "sweep",
        "Past": "swept",
        "PastParticiple": "swept",
        "Spanish": "barrer"
    },
    {
        "Present": "swim",
        "Past": "swam",
        "PastParticiple": "swum",
        "Spanish": "nadar"
    },
    {
        "Present": "take",
        "Past": "took",
        "PastParticiple": "taken",
        "Spanish": "tomar"
    },
    {
        "Present": "teach",
        "Past": "taught",
        "PastParticiple": "taught",
        "Spanish": "enseñar"
    },
    {
        "Present": "tear",
        "Past": "tore",
        "PastParticiple": "torn",
        "Spanish": "romper rasgar"
    },
    {
        "Present": "tell",
        "Past": "told",
        "PastParticiple": "told",
        "Spanish": "decir"
    },
    {
        "Present": "think",
        "Past": "thought",
        "PastParticiple": "thought",
        "Spanish": "pensar"
    },
    {
        "Present": "throw",
        "Past": "threw",
        "PastParticiple": "thrown",
        "Spanish": "lanzar"
    },
    {
        "Present": "tread",
        "Past": "trode",
        "PastParticiple": "trodden\/trod",
        "Spanish": "pisar"
    },
    {
        "Present": "understand",
        "Past": "understood",
        "PastParticiple": "understood",
        "Spanish": "entender"
    },
    {
        "Present": "wake",
        "Past": "woke",
        "PastParticiple": "woken",
        "Spanish": "despertarse"
    },
    {
        "Present": "wear",
        "Past": "wore",
        "PastParticiple": "worn",
        "Spanish": "llevar puesto"
    },
    {
        "Present": "weave",
        "Past": "wove",
        "PastParticiple": "woven",
        "Spanish": "tejer"
    },
    {
        "Present": "weep",
        "Past": "wept",
        "PastParticiple": "wept",
        "Spanish": "llorar"
    },
    {
        "Present": "win",
        "Past": "won",
        "PastParticiple": "won",
        "Spanish": "ganar"
    },
    {
        "Present": "wring",
        "Past": "wrung",
        "PastParticiple": "wrung",
        "Spanish": "retorcer"
    },
    {
        "Present": "write",
        "Past": "wrote",
        "PastParticiple": "written",
        "Spanish": "escribir"
    }
]

export default irregularVerbs