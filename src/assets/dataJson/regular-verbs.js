 const regularVerbs = [
    {
        "Present": "Act",
        "Past": "Acted",
        "Past Participle": "Acted",
        "Spanish": "Actuar"
    },
    {
        "Present": "Add",
        "Past": "Added",
        "Past Participle": "Added",
        "Spanish": "Añadir"
    },
    {
        "Present": "Arrest",
        "Past": "Arrested",
        "Past Participle": "Arrested",
        "Spanish": "Arrestar"
    },
    {
        "Present": "Assist",
        "Past": "Assisted",
        "Past Participle": "Assisted",
        "Spanish": "Asistir"
    },
    {
        "Present": "Address",
        "Past": "Addressed",
        "Past Participle": "Addressed",
        "Spanish": "Dirigirse"
    },
    {
        "Present": "Advertise",
        "Past": "Advertised",
        "Past Participle": "Advertised",
        "Spanish": "Anunciar"
    },
    {
        "Present": "Amuse",
        "Past": "Amused",
        "Past Participle": "Amused",
        "Spanish": "Entretener"
    },
    {
        "Present": "Approach",
        "Past": "Approached",
        "Past Participle": "Approached",
        "Spanish": "Acercarse"
    },
    {
        "Present": "Ask",
        "Past": "Asked",
        "Past Participle": "Asked",
        "Spanish": "Preguntar"
    },
    {
        "Present": "Agree",
        "Past": "Agreed",
        "Past Participle": "Agreed",
        "Spanish": "Concordar"
    },
    {
        "Present": "Annoy",
        "Past": "Annoyed",
        "Past Participle": "Annoyed",
        "Spanish": "Molestar"
    },
    {
        "Present": "Answer",
        "Past": "Answered",
        "Past Participle": "Answered",
        "Spanish": "Responder"
    },
    {
        "Present": "Appear",
        "Past": "Appeared",
        "Past Participle": "Appeared",
        "Spanish": "Aparecer"
    },
    {
        "Present": "Arrange",
        "Past": "Arranged",
        "Past Participle": "Arranged",
        "Spanish": "Arreglar"
    },
    {
        "Present": "Arrive",
        "Past": "Arrived",
        "Past Participle": "Arrived",
        "Spanish": "Llegar"
    },
    {
        "Present": "Abandon",
        "Past": "Abandoned",
        "Past Participle": "Abandoned",
        "Spanish": "Abandonar"
    },
    {
        "Present": "Abuse",
        "Past": "Abused",
        "Past Participle": "Abused",
        "Spanish": "Abusar"
    },
    {
        "Present": "Acquire",
        "Past": "Acquired",
        "Past Participle": "Acquired",
        "Spanish": "Adquirir"
    },
    {
        "Present": "Admire",
        "Past": "Admired",
        "Past Participle": "Admired",
        "Spanish": "Admirar"
    },
    {
        "Present": "Adore",
        "Past": "Adored",
        "Past Participle": "Adored",
        "Spanish": "Adorar"
    },
    {
        "Present": "Advance",
        "Past": "Advanced",
        "Past Participle": "Advanced",
        "Spanish": "Avanzar"
    },
    {
        "Present": "Advice",
        "Past": "Adviced",
        "Past Participle": "Adviced",
        "Spanish": "Aconsejar"
    },
    {
        "Present": "Announce",
        "Past": "Announced",
        "Past Participle": "Announced",
        "Spanish": "Anunciar"
    },
    {
        "Present": "Attempt",
        "Past": "Attempted",
        "Past Participle": "Attempted",
        "Spanish": "Intentar"
    },
    {
        "Present": "Avoid",
        "Past": "Avoided",
        "Past Participle": "Avoided",
        "Spanish": "Evitar"
    },
    {
        "Present": "Attack",
        "Past": "Attacked",
        "Past Participle": "Attacked",
        "Spanish": "Atacar"
    },
    {
        "Present": "Assure",
        "Past": "Assured",
        "Past Participle": "Assured",
        "Spanish": "Asegurar"
    },
    {
        "Present": "Apologize",
        "Past": "Apologized",
        "Past Participle": "Apologized",
        "Spanish": "Disculparse"
    },
    {
        "Present": "Allow",
        "Past": "Allowed",
        "Past Participle": "Allowed",
        "Spanish": "Permitir"
    },
    {
        "Present": "Admit",
        "Past": "Admited",
        "Past Participle": "Admited",
        "Spanish": "Admitir"
    },
    {
        "Present": "Accuse",
        "Past": "Accused",
        "Past Participle": "Accused",
        "Spanish": "Acusar"
    },
    {
        "Present": "Accede",
        "Past": "Acceded",
        "Past Participle": "Acceded",
        "Spanish": "Acceder"
    },
    {
        "Present": "Absorb",
        "Past": "Absorbed",
        "Past Participle": "Absorbed",
        "Spanish": "Absorber"
    },
    {
        "Present": "Abolish",
        "Past": "Abolished",
        "Past Participle": "Abolished",
        "Spanish": "Abolir"
    },
    {
        "Present": "Accent",
        "Past": "Accented",
        "Past Participle": "Accented",
        "Spanish": "Acentuar"
    },
    {
        "Present": "Beg",
        "Past": "Begged",
        "Past Participle": "Begged",
        "Spanish": "Rogar"
    },
    {
        "Present": "Believe",
        "Past": "Believed",
        "Past Participle": "Believed",
        "Spanish": "Creer"
    },
    {
        "Present": "Blame",
        "Past": "Blamed",
        "Past Participle": "Blamed",
        "Spanish": "Culpar"
    },
    {
        "Present": "Belong",
        "Past": "Belonged",
        "Past Participle": "Belonged",
        "Spanish": "Pertenecer"
    },
    {
        "Present": "Balance",
        "Past": "Balanced",
        "Past Participle": "Balanced",
        "Spanish": "Equilibrar"
    },
    {
        "Present": "Bless",
        "Past": "Blessed",
        "Past Participle": "Blessed",
        "Spanish": "Bendecir"
    },
    {
        "Present": "Brush",
        "Past": "Brushed",
        "Past Participle": "Brushed",
        "Spanish": "Cepillar"
    },
    {
        "Present": "Behave",
        "Past": "Behaved",
        "Past Participle": "Behaved",
        "Spanish": "Comportarse"
    },
    {
        "Present": "Breathe",
        "Past": "Breathed",
        "Past Participle": "Breathed",
        "Spanish": "Respirar"
    },
    {
        "Present": "Complete",
        "Past": "Completed",
        "Past Participle": "Completed",
        "Spanish": "Completar"
    },
    {
        "Present": "Consist",
        "Past": "Consisted",
        "Past Participle": "Consisted",
        "Spanish": "Consistir"
    },
    {
        "Present": "Count",
        "Past": "Counted",
        "Past Participle": "Counted",
        "Spanish": "Contar"
    },
    {
        "Present": "Close",
        "Past": "Closed",
        "Past Participle": "Closed",
        "Spanish": "Cerrar"
    },
    {
        "Present": "Cook",
        "Past": "Cooked",
        "Past Participle": "Cooked",
        "Spanish": "Cocinar"
    },
    {
        "Present": "Crash",
        "Past": "Crashed",
        "Past Participle": "Crashed",
        "Spanish": "Chocar"
    },
    {
        "Present": "Cross",
        "Past": "Crossed",
        "Past Participle": "Crossed",
        "Spanish": "Cruzar"
    },
    {
        "Present": "Call",
        "Past": "Called",
        "Past Participle": "Called",
        "Spanish": "Llamar"
    },
    {
        "Present": "Care",
        "Past": "Cared",
        "Past Participle": "Cared",
        "Spanish": "Cuidar"
    },
    {
        "Present": "Carry",
        "Past": "Carried",
        "Past Participle": "Carried",
        "Spanish": "Llevar"
    },
    {
        "Present": "Change",
        "Past": "Changed",
        "Past Participle": "Changed",
        "Spanish": "Cambiar"
    },
    {
        "Present": "Check",
        "Past": "Checked",
        "Past Participle": "Checked",
        "Spanish": "Chequear"
    },
    {
        "Present": "Charge",
        "Past": "Charged",
        "Past Participle": "Charged",
        "Spanish": "Cargar"
    },
    {
        "Present": "Clean",
        "Past": "Cleaned",
        "Past Participle": "Cleaned",
        "Spanish": "Limpiar"
    },
    {
        "Present": "Climb",
        "Past": "Climbed",
        "Past Participle": "Climbed",
        "Spanish": "Escalar"
    },
    {
        "Present": "Cover",
        "Past": "Covered",
        "Past Participle": "Covered",
        "Spanish": "Cubrir"
    },
    {
        "Present": "Cry",
        "Past": "Cried",
        "Past Participle": "Cried",
        "Spanish": "Llorar"
    },
    {
        "Present": "Cash",
        "Past": "Cashed",
        "Past Participle": "Cashed",
        "Spanish": "Cobrar"
    },
    {
        "Present": "Claim",
        "Past": "Claimed",
        "Past Participle": "Claimed",
        "Spanish": "Reclamar"
    },
    {
        "Present": "Command",
        "Past": "Commanded",
        "Past Participle": "Commanded",
        "Spanish": "Mandar"
    },
    {
        "Present": "Compare",
        "Past": "Compared",
        "Past Participle": "Compared",
        "Spanish": "Comparar"
    },
    {
        "Present": "Compose",
        "Past": "Composed",
        "Past Participle": "Composed",
        "Spanish": "Componer"
    },
    {
        "Present": "Consider",
        "Past": "Considered",
        "Past Participle": "Considered",
        "Spanish": "Considerar"
    },
    {
        "Present": "Contain",
        "Past": "Contained",
        "Past Participle": "Contained",
        "Spanish": "Contener"
    },
    {
        "Present": "Copy",
        "Past": "Copied",
        "Past Participle": "Copied",
        "Spanish": "Copiar"
    },
    {
        "Present": "Crown",
        "Past": "Crowned",
        "Past Participle": "Crowned",
        "Spanish": "Coronar"
    },
    {
        "Present": "Continue",
        "Past": "Continued",
        "Past Participle": "Continued",
        "Spanish": "Continuar"
    },
    {
        "Present": "Commit",
        "Past": "Commited",
        "Past Participle": "Commited",
        "Spanish": "Cometer"
    },
    {
        "Present": "Combine",
        "Past": "Combined",
        "Past Participle": "Combined",
        "Spanish": "Combinar"
    },
    {
        "Present": "Collect",
        "Past": "Collected",
        "Past Participle": "Collected",
        "Spanish": "Colectar"
    },
    {
        "Present": "Dance",
        "Past": "Danced",
        "Past Participle": "Danced",
        "Spanish": "Bailar"
    },
    {
        "Present": "Dress",
        "Past": "Dressed",
        "Past Participle": "Dressed",
        "Spanish": "Vestir"
    },
    {
        "Present": "Dropp",
        "Past": "Dropped",
        "Past Participle": "Dropped",
        "Spanish": "Dejar Caer"
    },
    {
        "Present": "Die",
        "Past": "Died",
        "Past Participle": "Died",
        "Spanish": "Morir"
    },
    {
        "Present": "Declare",
        "Past": "Declared",
        "Past Participle": "Declared",
        "Spanish": "Declarar"
    },
    {
        "Present": "Delay",
        "Past": "Delayed",
        "Past Participle": "Delayed",
        "Spanish": "Demorar"
    },
    {
        "Present": "Deliver",
        "Past": "Delivered",
        "Past Participle": "Delivered",
        "Spanish": "Entregar"
    },
    {
        "Present": "Deny",
        "Past": "Denied",
        "Past Participle": "Denied",
        "Spanish": "Denegar"
    },
    {
        "Present": "Dry",
        "Past": "Dried",
        "Past Participle": "Dried",
        "Spanish": "Secar"
    },
    {
        "Present": "Destroy",
        "Past": "Destroyed",
        "Past Participle": "Destroyed",
        "Spanish": "Destruir"
    },
    {
        "Present": "Devote",
        "Past": "Devoted",
        "Past Participle": "Devoted",
        "Spanish": "Dedicar"
    },
    {
        "Present": "Enjoy",
        "Past": "Enjoyed",
        "Past Participle": "Enjoyed",
        "Spanish": "Disfrutar"
    },
    {
        "Present": "Engage",
        "Past": "Engaged",
        "Past Participle": "Engaged",
        "Spanish": "Comprometer"
    },
    {
        "Present": "Envy",
        "Past": "Envied",
        "Past Participle": "Envied",
        "Spanish": "Envidiar"
    },
    {
        "Present": "Express",
        "Past": "Expressed",
        "Past Participle": "Expressed",
        "Spanish": "Expresar"
    },
    {
        "Present": "Exclaim",
        "Past": "Exclaimed",
        "Past Participle": "Exclaimed",
        "Spanish": "Exclamar"
    },
    {
        "Present": "Explain",
        "Past": "Explained",
        "Past Participle": "Explained",
        "Spanish": "Explicar"
    },
    {
        "Present": "Fail",
        "Past": "Failed",
        "Past Participle": "Failed",
        "Spanish": "Fracasar"
    },
    {
        "Present": "File",
        "Past": "Filed",
        "Past Participle": "Filed",
        "Spanish": "Archivar"
    },
    {
        "Present": "Fire",
        "Past": "Fired",
        "Past Participle": "Fired",
        "Spanish": "Despedir"
    },
    {
        "Present": "Fill",
        "Past": "Filled",
        "Past Participle": "Filled",
        "Spanish": "Llenar"
    },
    {
        "Present": "Follow",
        "Past": "Followed",
        "Past Participle": "Followed",
        "Spanish": "Seguir"
    },
    {
        "Present": "Fry",
        "Past": "Fried",
        "Past Participle": "Fried",
        "Spanish": "Freir"
    },
    {
        "Present": "Finish",
        "Past": "Finished",
        "Past Participle": "Finished",
        "Spanish": "Terminar"
    },
    {
        "Present": "Fish",
        "Past": "Fished",
        "Past Participle": "Fished",
        "Spanish": "Pescar"
    },
    {
        "Present": "Fix",
        "Past": "Fixed",
        "Past Participle": "Fixed",
        "Spanish": "Arreglar"
    },
    {
        "Present": "Gain",
        "Past": "Gained",
        "Past Participle": "Gained",
        "Spanish": "Ganar"
    },
    {
        "Present": "Guess",
        "Past": "Guessed",
        "Past Participle": "Guessed",
        "Spanish": "Adivinar"
    },
    {
        "Present": "Help",
        "Past": "Helped",
        "Past Participle": "Helped",
        "Spanish": "Ayudar"
    },
    {
        "Present": "Hope",
        "Past": "Hope",
        "Past Participle": "Hope",
        "Spanish": "Desear"
    },
    {
        "Present": "Happen",
        "Past": "Happened",
        "Past Participle": "Happened",
        "Spanish": "Suceder"
    },
    {
        "Present": "Hurry",
        "Past": "Hurried",
        "Past Participle": "Hurried",
        "Spanish": "Apurarse"
    },
    {
        "Present": "Imagine",
        "Past": "Imagined",
        "Past Participle": "Imagined",
        "Spanish": "Imaginar"
    },
    {
        "Present": "Judge",
        "Past": "Judged",
        "Past Participle": "Judged",
        "Spanish": "Juzgar"
    },
    {
        "Present": "Kiss",
        "Past": "Kissed",
        "Past Participle": "Kissed",
        "Spanish": "Besar"
    },
    {
        "Present": "Kill",
        "Past": "Killed",
        "Past Participle": "Killed",
        "Spanish": "Matar"
    },
    {
        "Present": "Laugh",
        "Past": "Laughed",
        "Past Participle": "Laughed",
        "Spanish": "Reir"
    },
    {
        "Present": "Like",
        "Past": "Liked",
        "Past Participle": "Liked",
        "Spanish": "Gustar"
    },
    {
        "Present": "Look",
        "Past": "Looked",
        "Past Participle": "Looked",
        "Spanish": "Mirar"
    },
    {
        "Present": "Mark",
        "Past": "Marked",
        "Past Participle": "Marked",
        "Spanish": "Marcar"
    },
    {
        "Present": "Miss",
        "Past": "Missed",
        "Past Participle": "Missed",
        "Spanish": "Extrañar"
    },
    {
        "Present": "Manage",
        "Past": "Managed",
        "Past Participle": "Managed",
        "Spanish": "Manejar"
    },
    {
        "Present": "Maintain",
        "Past": "Maintained",
        "Past Participle": "Maintained",
        "Spanish": "Mantener"
    },
    {
        "Present": "Marry",
        "Past": "Married",
        "Past Participle": "Married",
        "Spanish": "Casarse"
    },
    {
        "Present": "Massage",
        "Past": "Massaged",
        "Past Participle": "Massaged",
        "Spanish": "Masajear"
    },
    {
        "Present": "Measure",
        "Past": "Measured",
        "Past Participle": "Measured",
        "Spanish": "Medir"
    },
    {
        "Present": "Move",
        "Past": "Moved",
        "Past Participle": "Moved",
        "Spanish": "Mover"
    },
    {
        "Present": "Notice",
        "Past": "Notice",
        "Past Participle": "Notice",
        "Spanish": "Notificar"
    },
    {
        "Present": "Number",
        "Past": "Numbered",
        "Past Participle": "Numbered",
        "Spanish": "Enumerar"
    },
    {
        "Present": "Name",
        "Past": "Named",
        "Past Participle": "Named",
        "Spanish": "Nombrar"
    },
    {
        "Present": "Note",
        "Past": "Noted",
        "Past Participle": "Noted",
        "Spanish": "Notar"
    },
    {
        "Present": "Observe",
        "Past": "Observed",
        "Past Participle": "Observed",
        "Spanish": "Observar"
    },
    {
        "Present": "Offer",
        "Past": "Offered",
        "Past Participle": "Offered",
        "Spanish": "Ofrecer"
    },
    {
        "Present": "Open",
        "Past": "Opened",
        "Past Participle": "Opened",
        "Spanish": "Abrir"
    },
    {
        "Present": "Order",
        "Past": "Ordered",
        "Past Participle": "Ordered",
        "Spanish": "Ordenar"
    },
    {
        "Present": "Perform",
        "Past": "Performed",
        "Past Participle": "Performed",
        "Spanish": "Ejecutar"
    },
    {
        "Present": "Phone",
        "Past": "Phoned",
        "Past Participle": "Phoned",
        "Spanish": "Telefonear"
    },
    {
        "Present": "Plan",
        "Past": "Planned",
        "Past Participle": "Planned",
        "Spanish": "Planificar"
    },
    {
        "Present": "Play",
        "Past": "Played",
        "Past Participle": "Played",
        "Spanish": "Jugar"
    },
    {
        "Present": "Pray",
        "Past": "Prayed",
        "Past Participle": "Prayed",
        "Spanish": "Orar"
    },
    {
        "Present": "Prefer",
        "Past": "Prefered",
        "Past Participle": "Prefered",
        "Spanish": "Preferir"
    },
    {
        "Present": "Prepare",
        "Past": "Prepared",
        "Past Participle": "Prepared",
        "Spanish": "Preparar"
    },
    {
        "Present": "Park",
        "Past": "Parked",
        "Past Participle": "Parked",
        "Spanish": "Estacionar"
    },
    {
        "Present": "Pass",
        "Past": "Passed",
        "Past Participle": "Passed",
        "Spanish": "Pasar"
    },
    {
        "Present": "Pick",
        "Past": "Picked",
        "Past Participle": "Picked",
        "Spanish": "Recoger"
    },
    {
        "Present": "Please",
        "Past": "Pleased",
        "Past Participle": "Pleased",
        "Spanish": "Complacer"
    },
    {
        "Present": "Practice",
        "Past": "Practiced",
        "Past Participle": "Practiced",
        "Spanish": "Practicar"
    },
    {
        "Present": "Promise",
        "Past": "Promised",
        "Past Participle": "Promised",
        "Spanish": "Prometer"
    },
    {
        "Present": "Pronounce",
        "Past": "Pronounced",
        "Past Participle": "Pronounced",
        "Spanish": "Pronunciar"
    },
    {
        "Present": "Punish",
        "Past": "Punished",
        "Past Participle": "Punished",
        "Spanish": "Castigar"
    },
    {
        "Present": "Push",
        "Past": "Pushed",
        "Past Participle": "Pushed",
        "Spanish": "Empujar"
    },
    {
        "Present": "Repeat",
        "Past": "Repeated",
        "Past Participle": "Repeated",
        "Spanish": "Repetir"
    },
    {
        "Present": "Report",
        "Past": "Reported",
        "Past Participle": "Reported",
        "Spanish": "Reportar"
    },
    {
        "Present": "Request",
        "Past": "Requested",
        "Past Participle": "Requested",
        "Spanish": "Solicitar"
    },
    {
        "Present": "Refuse",
        "Past": "Refused",
        "Past Participle": "Refused",
        "Spanish": "Rechazar"
    },
    {
        "Present": "Raise",
        "Past": "Raised",
        "Past Participle": "Raised",
        "Spanish": "Levantar"
    },
    {
        "Present": "Register",
        "Past": "Registered",
        "Past Participle": "Registered",
        "Spanish": "Registrar"
    },
    {
        "Present": "Receive",
        "Past": "Received",
        "Past Participle": "Received",
        "Spanish": "Recibir"
    },
    {
        "Present": "Remember",
        "Past": "Remembered",
        "Past Participle": "Remembered",
        "Spanish": "Recordar"
    },
    {
        "Present": "Repair",
        "Past": "Repaired",
        "Past Participle": "Repaired",
        "Spanish": "Reparar"
    },
    {
        "Present": "Require",
        "Past": "Required",
        "Past Participle": "Required",
        "Spanish": "Requerir"
    },
    {
        "Present": "Reserve",
        "Past": "Reserved",
        "Past Participle": "Reserved",
        "Spanish": "Reservar"
    },
    {
        "Present": "Resolve",
        "Past": "Resolved",
        "Past Participle": "Resolved",
        "Spanish": "Resolver"
    },
    {
        "Present": "Search",
        "Past": "Searched",
        "Past Participle": "Searched",
        "Spanish": "Buscar"
    },
    {
        "Present": "Save",
        "Past": "Saved",
        "Past Participle": "Saved",
        "Spanish": "Salvar"
    },
    {
        "Present": "Serve",
        "Past": "Served",
        "Past Participle": "Served",
        "Spanish": "Servir"
    },
    {
        "Present": "Sign",
        "Past": "Signed",
        "Past Participle": "Signed",
        "Spanish": "Firmar"
    },
    {
        "Present": "Smile",
        "Past": "Smiled",
        "Past Participle": "Smiled",
        "Spanish": "Sonreír"
    },
    {
        "Present": "Stay",
        "Past": "Stayed",
        "Past Participle": "Stayed",
        "Spanish": "Permanecer"
    },
    {
        "Present": "Study",
        "Past": "Studied",
        "Past Participle": "Studied",
        "Spanish": "Estudiar"
    },
    {
        "Present": "Suffer",
        "Past": "Suffered",
        "Past Participle": "Suffered",
        "Spanish": "Sufrir"
    },
    {
        "Present": "Smoke",
        "Past": "Smoked",
        "Past Participle": "Smoked",
        "Spanish": "Fumar"
    },
    {
        "Present": "Stop",
        "Past": "Stopped",
        "Past Participle": "Stopped",
        "Spanish": "Detener"
    },
    {
        "Present": "Start",
        "Past": "Started",
        "Past Participle": "Started",
        "Spanish": "Comenzar"
    },
    {
        "Present": "Sound",
        "Past": "Sounded",
        "Past Participle": "Sounded",
        "Spanish": "Sonar"
    },
    {
        "Present": "Surprise",
        "Past": "Surprised",
        "Past Participle": "Surprised",
        "Spanish": "Sorprender"
    },
    {
        "Present": "Sail",
        "Past": "Sailed",
        "Past Participle": "Sailed",
        "Spanish": "Navegar"
    },
    {
        "Present": "Talk",
        "Past": "Talked",
        "Past Participle": "Talked",
        "Spanish": "Conversar"
    },
    {
        "Present": "Touch",
        "Past": "Touched",
        "Past Participle": "Touched",
        "Spanish": "Tocar"
    },
    {
        "Present": "Train",
        "Past": "Trained",
        "Past Participle": "Trained",
        "Spanish": "Entrenar"
    },
    {
        "Present": "Taste",
        "Past": "Tasted",
        "Past Participle": "Tasted",
        "Spanish": "Probar"
    },
    {
        "Present": "Translate",
        "Past": "Translated",
        "Past Participle": "Translated",
        "Spanish": "Traducir"
    },
    {
        "Present": "Travel",
        "Past": "Traveled",
        "Past Participle": "Traveled",
        "Spanish": "Viajar"
    },
    {
        "Present": "Trouble",
        "Past": "Troubled",
        "Past Participle": "Troubled",
        "Spanish": "Molestar"
    },
    {
        "Present": "Tie",
        "Past": "Tied",
        "Past Participle": "Tied",
        "Spanish": "Atar"
    },
    {
        "Present": "Test",
        "Past": "Tested",
        "Past Participle": "Tested",
        "Spanish": "Probar"
    },
    {
        "Present": "Try",
        "Past": "Tried",
        "Past Participle": "Tried",
        "Spanish": "Intentar"
    },
    {
        "Present": "Trust",
        "Past": "Trusted",
        "Past Participle": "Trusted",
        "Spanish": "Confiar"
    },
    {
        "Present": "Turn",
        "Past": "Turned",
        "Past Participle": "Turned",
        "Spanish": "Girar"
    },
    {
        "Present": "Use",
        "Past": "Used",
        "Past Participle": "Used",
        "Spanish": "Usar"
    },
    {
        "Present": "Unite",
        "Past": "United",
        "Past Participle": "United",
        "Spanish": "Unir"
    },
    {
        "Present": "Visit",
        "Past": "Visited",
        "Past Participle": "Visited",
        "Spanish": "Visitar"
    },
    {
        "Present": "Vary",
        "Past": "Varied",
        "Past Participle": "Varied",
        "Spanish": "Variar"
    },
    {
        "Present": "Wait",
        "Past": "Waited",
        "Past Participle": "Waited",
        "Spanish": "Esperar"
    },
    {
        "Present": "Want",
        "Past": "Wanted",
        "Past Participle": "Wanted",
        "Spanish": "Querer"
    },
    {
        "Present": "Walk",
        "Past": "Walked",
        "Past Participle": "Walked",
        "Spanish": "Caminar"
    },
    {
        "Present": "Wash",
        "Past": "Washed",
        "Past Participle": "Washed",
        "Spanish": "Lavar"
    },
    {
        "Present": "Watch",
        "Past": "Watched",
        "Past Participle": "Watched",
        "Spanish": "Observar"
    },
    {
        "Present": "Wish",
        "Past": "Wished",
        "Past Participle": "Wished",
        "Spanish": "Desear"
    },
    {
        "Present": "Work",
        "Past": "Worked",
        "Past Participle": "Worked",
        "Spanish": "Trabajar"
    },
    {
        "Present": "Warm",
        "Past": "Warmed",
        "Past Participle": "Warmed",
        "Spanish": "Calentar"
    },
    {
        "Present": "Water",
        "Past": "Watered",
        "Past Participle": "Watered",
        "Spanish": "Regar"
    },
    {
        "Present": "Weigh",
        "Past": "Weighed",
        "Past Participle": "Weighed",
        "Spanish": "Pesar"
    },
    {
        "Present": "Whistle",
        "Past": "Whistled",
        "Past Participle": "Whistled",
        "Spanish": "Silbar"
    },
    {
        "Present": "Worry",
        "Past": "Worried",
        "Past Participle": "Worried",
        "Spanish": "Preocuparse"
    },
    {
        "Present": "Wound",
        "Past": "Wounded",
        "Past Participle": "Wounded",
        "Spanish": "Herir"
    }
]

export default regularVerbs