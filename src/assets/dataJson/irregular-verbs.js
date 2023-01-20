const irregularVerbs = [
    {
        "Present": "arise",
        "Past": "arose",
        "Past Participle": "arisen",
        "Spanish": "surgir"
    },
    {
        "Present": "be",
        "Past": "was\/were",
        "Past Participle": "been",
        "Spanish": "ser"
    },
    {
        "Present": "beat",
        "Past": "beat",
        "Past Participle": "beaten",
        "Spanish": "golpear"
    },
    {
        "Present": "become",
        "Past": "became",
        "Past Participle": "become",
        "Spanish": "convertirse"
    },
    {
        "Present": "begin",
        "Past": "began",
        "Past Participle": "begun",
        "Spanish": "comenzar"
    },
    {
        "Present": "bet",
        "Past": "bet\/betted",
        "Past Participle": "bet\/betted",
        "Spanish": "apostar"
    },
    {
        "Present": "bite",
        "Past": "bit",
        "Past Participle": "bitten",
        "Spanish": "morder"
    },
    {
        "Present": "bleed",
        "Past": "bled",
        "Past Participle": "bled",
        "Spanish": "sangrar"
    },
    {
        "Present": "blow",
        "Past": "blew",
        "Past Participle": "blown",
        "Spanish": "soplar"
    },
    {
        "Present": "break",
        "Past": "broke",
        "Past Participle": "broken",
        "Spanish": "romper"
    },
    {
        "Present": "bring",
        "Past": "brought",
        "Past Participle": "brought",
        "Spanish": "traer"
    },
    {
        "Present": "build",
        "Past": "built",
        "Past Participle": "built",
        "Spanish": "construir"
    },
    {
        "Present": "buy",
        "Past": "bought",
        "Past Participle": "bought",
        "Spanish": "comprar"
    },
    {
        "Present": "catch",
        "Past": "caught",
        "Past Participle": "caught",
        "Spanish": "atrapar"
    },
    {
        "Present": "choose",
        "Past": "chose",
        "Past Participle": "chosen",
        "Spanish": "elegir"
    },
    {
        "Present": "come",
        "Past": "came",
        "Past Participle": "come",
        "Spanish": "venir"
    },
    {
        "Present": "cost",
        "Past": "cost",
        "Past Participle": "cost",
        "Spanish": "costar"
    },
    {
        "Present": "creep",
        "Past": "crept",
        "Past Participle": "crept",
        "Spanish": "arrastrarse"
    },
    {
        "Present": "cut",
        "Past": "cut",
        "Past Participle": "cut",
        "Spanish": "cortar"
    },
    {
        "Present": "deal",
        "Past": "dealt",
        "Past Participle": "dealt",
        "Spanish": "dar, repartir"
    },
    {
        "Present": "do",
        "Past": "did",
        "Past Participle": "done",
        "Spanish": "hacer"
    },
    {
        "Present": "draw",
        "Past": "drew",
        "Past Participle": "drawn",
        "Spanish": "dibujar"
    },
    {
        "Present": "dream",
        "Past": "dreamt\/dreamed",
        "Past Participle": "dreamt\/dreamed",
        "Spanish": "soñar"
    },
    {
        "Present": "drink",
        "Past": "drank",
        "Past Participle": "drunk",
        "Spanish": "beber"
    },
    {
        "Present": "drive",
        "Past": "drove",
        "Past Participle": "driven",
        "Spanish": "conducir"
    },
    {
        "Present": "eat",
        "Past": "ate",
        "Past Participle": "eaten",
        "Spanish": "comer"
    },
    {
        "Present": "fall",
        "Past": "fell",
        "Past Participle": "fallen",
        "Spanish": "caer"
    },
    {
        "Present": "feed",
        "Past": "fed",
        "Past Participle": "fed",
        "Spanish": "alimentar"
    },
    {
        "Present": "feel",
        "Past": "felt",
        "Past Participle": "felt",
        "Spanish": "sentir"
    },
    {
        "Present": "fight",
        "Past": "fought",
        "Past Participle": "fought",
        "Spanish": "pelear"
    },
    {
        "Present": "find",
        "Past": "found",
        "Past Participle": "found",
        "Spanish": "encontrar"
    },
    {
        "Present": "flee",
        "Past": "fled",
        "Past Participle": "fled",
        "Spanish": "huir"
    },
    {
        "Present": "fly",
        "Past": "flew",
        "Past Participle": "flown",
        "Spanish": "volar"
    },
    {
        "Present": "forget",
        "Past": "forgot",
        "Past Participle": "forgotten",
        "Spanish": "olvidar"
    },
    {
        "Present": "forgive",
        "Past": "forgave",
        "Past Participle": "forgiven",
        "Spanish": "perdonar"
    },
    {
        "Present": "forsake",
        "Past": "forsook",
        "Past Participle": "forsaken",
        "Spanish": "Olvidar"
    },
    {
        "Present": "freeze",
        "Past": "froze",
        "Past Participle": "frozen",
        "Spanish": "congelar"
    },
    {
        "Present": "get",
        "Past": "got",
        "Past Participle": "got",
        "Spanish": "tener, obtener"
    },
    {
        "Present": "give",
        "Past": "gave",
        "Past Participle": "given",
        "Spanish": "dar"
    },
    {
        "Present": "go",
        "Past": "went",
        "Past Participle": "gone",
        "Spanish": "ir"
    },
    {
        "Present": "grind",
        "Past": "ground",
        "Past Participle": "ground",
        "Spanish": "moler"
    },
    {
        "Present": "grow",
        "Past": "grew",
        "Past Participle": "grown",
        "Spanish": "crecer"
    },
    {
        "Present": "hang",
        "Past": "hung",
        "Past Participle": "hung",
        "Spanish": "colgar"
    },
    {
        "Present": "have",
        "Past": "had",
        "Past Participle": "had",
        "Spanish": "tener"
    },
    {
        "Present": "hear",
        "Past": "heard",
        "Past Participle": "heard",
        "Spanish": "oír"
    },
    {
        "Present": "hide",
        "Past": "hid",
        "Past Participle": "hidden",
        "Spanish": "esconderse"
    },
    {
        "Present": "hit",
        "Past": "hit",
        "Past Participle": "hit",
        "Spanish": "golpear"
    },
    {
        "Present": "hold",
        "Past": "held",
        "Past Participle": "held",
        "Spanish": "tener, mantener"
    },
    {
        "Present": "hurt",
        "Past": "hurt",
        "Past Participle": "hurt",
        "Spanish": "herir, doler"
    },
    {
        "Present": "keep",
        "Past": "kept",
        "Past Participle": "kept",
        "Spanish": "guardar"
    },
    {
        "Present": "kneel",
        "Past": "knelt",
        "Past Participle": "knelt",
        "Spanish": "arrodillarse"
    },
    {
        "Present": "know",
        "Past": "knew",
        "Past Participle": "known",
        "Spanish": "saber"
    },
    {
        "Present": "lead",
        "Past": "led",
        "Past Participle": "led",
        "Spanish": "encabezar"
    },
    {
        "Present": "learn",
        "Past": "learnt\/learned",
        "Past Participle": "learnt\/learned",
        "Spanish": "aprender"
    },
    {
        "Present": "leave",
        "Past": "left",
        "Past Participle": "left",
        "Spanish": "dejar"
    },
    {
        "Present": "lend",
        "Past": "lent",
        "Past Participle": "lent",
        "Spanish": "prestar"
    },
    {
        "Present": "let",
        "Past": "let",
        "Past Participle": "let",
        "Spanish": "dejar"
    },
    {
        "Present": "lie(lie down)",
        "Past": "lay",
        "Past Participle": "lain",
        "Spanish": "tumbarse"
    },
    {
        "Present": "lie",
        "Past": "lied",
        "Past Participle": "lied",
        "Spanish": "Mentir"
    },
    {
        "Present": "lay",
        "Past": "laid",
        "Past Participle": "laid",
        "Spanish": "tumbar a alguien"
    },
    {
        "Present": "lose",
        "Past": "lost",
        "Past Participle": "lost",
        "Spanish": "perder"
    },
    {
        "Present": "make",
        "Past": "made",
        "Past Participle": "made",
        "Spanish": "hacer"
    },
    {
        "Present": "mean",
        "Past": "meant",
        "Past Participle": "meant",
        "Spanish": "significar"
    },
    {
        "Present": "meet",
        "Past": "met",
        "Past Participle": "met",
        "Spanish": "conocer, encontrar"
    },
    {
        "Present": "pay",
        "Past": "paid",
        "Past Participle": "paid",
        "Spanish": "pagar"
    },
    {
        "Present": "put",
        "Past": "put",
        "Past Participle": "put",
        "Spanish": "poner"
    },
    {
        "Present": "quit",
        "Past": "quit\/quitted",
        "Past Participle": "quit\/quitted",
        "Spanish": "abandonar"
    },
    {
        "Present": "read",
        "Past": "read",
        "Past Participle": "read",
        "Spanish": "leer"
    },
    {
        "Present": "ride",
        "Past": "rode",
        "Past Participle": "ridden",
        "Spanish": "montar, ir"
    },
    {
        "Present": "ring",
        "Past": "rang",
        "Past Participle": "rung",
        "Spanish": "llamar por teléfono"
    },
    {
        "Present": "rise",
        "Past": "rose",
        "Past Participle": "risen",
        "Spanish": "elevar levantar"
    },
    {
        "Present": "run",
        "Past": "ran",
        "Past Participle": "run",
        "Spanish": "correr"
    },
    {
        "Present": "say",
        "Past": "said",
        "Past Participle": "said",
        "Spanish": "decir"
    },
    {
        "Present": "see",
        "Past": "saw",
        "Past Participle": "seen",
        "Spanish": "ver"
    },
    {
        "Present": "sell",
        "Past": "sold",
        "Past Participle": "sold",
        "Spanish": "vender"
    },
    {
        "Present": "send",
        "Past": "sent",
        "Past Participle": "sent",
        "Spanish": "enviar"
    },
    {
        "Present": "set",
        "Past": "set",
        "Past Participle": "set",
        "Spanish": "fijar"
    },
    {
        "Present": "sew",
        "Past": "sewed",
        "Past Participle": "sewn\/sewed",
        "Spanish": "coser ropa"
    },
    {
        "Present": "shake",
        "Past": "shook",
        "Past Participle": "shaken",
        "Spanish": "sacudir"
    },
    {
        "Present": "shine",
        "Past": "shone",
        "Past Participle": "shone",
        "Spanish": "brillar"
    },
    {
        "Present": "shoot",
        "Past": "shot",
        "Past Participle": "shot",
        "Spanish": "disparar"
    },
    {
        "Present": "show",
        "Past": "showed",
        "Past Participle": "shown\/showed",
        "Spanish": "mostrar"
    },
    {
        "Present": "shrink",
        "Past": "shrank\/shrunk",
        "Past Participle": "shrunk",
        "Spanish": "encoger"
    },
    {
        "Present": "shut",
        "Past": "shut",
        "Past Participle": "shut",
        "Spanish": "cerrar"
    },
    {
        "Present": "sing",
        "Past": "sang",
        "Past Participle": "sung",
        "Spanish": "cantar"
    },
    {
        "Present": "sink",
        "Past": "sank",
        "Past Participle": "sunk",
        "Spanish": "hundir"
    },
    {
        "Present": "sit",
        "Past": "sat",
        "Past Participle": "sat",
        "Spanish": "sentarse"
    },
    {
        "Present": "sleep",
        "Past": "slept",
        "Past Participle": "slept",
        "Spanish": "dormir"
    },
    {
        "Present": "slide",
        "Past": "slid",
        "Past Participle": "slid",
        "Spanish": "deslizar"
    },
    {
        "Present": "sow",
        "Past": "sowed",
        "Past Participle": "sown\/sowed",
        "Spanish": "sembrar"
    },
    {
        "Present": "speak",
        "Past": "spoke",
        "Past Participle": "spoken",
        "Spanish": "hablar"
    },
    {
        "Present": "spell",
        "Past": "spelt\/spelled",
        "Past Participle": "spelt\/spelled",
        "Spanish": "deletrear"
    },
    {
        "Present": "spend",
        "Past": "spent",
        "Past Participle": "spent",
        "Spanish": "gastar"
    },
    {
        "Present": "spill",
        "Past": "spilt\/spilled",
        "Past Participle": "spilt\/spilled",
        "Spanish": "derramar"
    },
    {
        "Present": "split",
        "Past": "split",
        "Past Participle": "split",
        "Spanish": "partir"
    },
    {
        "Present": "spoil",
        "Past": "spoilt\/spoiled",
        "Past Participle": "spoilt\/spoiled",
        "Spanish": "estropear"
    },
    {
        "Present": "spread",
        "Past": "spread",
        "Past Participle": "spread",
        "Spanish": "extenderse"
    },
    {
        "Present": "stand",
        "Past": "stood",
        "Past Participle": "stood",
        "Spanish": "estar de pie"
    },
    {
        "Present": "steal",
        "Past": "stole",
        "Past Participle": "stolen",
        "Spanish": "robar"
    },
    {
        "Present": "sting",
        "Past": "stung",
        "Past Participle": "stung",
        "Spanish": "picar"
    },
    {
        "Present": "stink",
        "Past": "stank\/stunk",
        "Past Participle": "stunk",
        "Spanish": "apestar"
    },
    {
        "Present": "strike",
        "Past": "struck",
        "Past Participle": "struck",
        "Spanish": "golpear"
    },
    {
        "Present": "swear",
        "Past": "swore",
        "Past Participle": "sworn",
        "Spanish": "jurar"
    },
    {
        "Present": "sweep",
        "Past": "swept",
        "Past Participle": "swept",
        "Spanish": "barrer"
    },
    {
        "Present": "swim",
        "Past": "swam",
        "Past Participle": "swum",
        "Spanish": "nadar"
    },
    {
        "Present": "take",
        "Past": "took",
        "Past Participle": "taken",
        "Spanish": "tomar"
    },
    {
        "Present": "teach",
        "Past": "taught",
        "Past Participle": "taught",
        "Spanish": "enseñar"
    },
    {
        "Present": "tear",
        "Past": "tore",
        "Past Participle": "torn",
        "Spanish": "romper rasgar"
    },
    {
        "Present": "tell",
        "Past": "told",
        "Past Participle": "told",
        "Spanish": "decir"
    },
    {
        "Present": "think",
        "Past": "thought",
        "Past Participle": "thought",
        "Spanish": "pensar"
    },
    {
        "Present": "throw",
        "Past": "threw",
        "Past Participle": "thrown",
        "Spanish": "lanzar"
    },
    {
        "Present": "tread",
        "Past": "trode",
        "Past Participle": "trodden\/trod",
        "Spanish": "pisar"
    },
    {
        "Present": "understand",
        "Past": "understood",
        "Past Participle": "understood",
        "Spanish": "entender"
    },
    {
        "Present": "wake",
        "Past": "woke",
        "Past Participle": "woken",
        "Spanish": "despertarse"
    },
    {
        "Present": "wear",
        "Past": "wore",
        "Past Participle": "worn",
        "Spanish": "llevar puesto"
    },
    {
        "Present": "weave",
        "Past": "wove",
        "Past Participle": "woven",
        "Spanish": "tejer"
    },
    {
        "Present": "weep",
        "Past": "wept",
        "Past Participle": "wept",
        "Spanish": "llorar"
    },
    {
        "Present": "win",
        "Past": "won",
        "Past Participle": "won",
        "Spanish": "ganar"
    },
    {
        "Present": "wring",
        "Past": "wrung",
        "Past Participle": "wrung",
        "Spanish": "retorcer"
    },
    {
        "Present": "write",
        "Past": "wrote",
        "Past Participle": "written",
        "Spanish": "escribir"
    }
]

export default irregularVerbs