const songs = [
  {
      "name": "TAKE ON ME",
      "artist": "A-HA",
      "firstLine": "WE'RE TALKING AWAY...",
      "id": "515"
  },
  {
      "name": "DANCING QUEEN",
      "artist": "ABBA",
      "firstLine": "YOU CAN DANCE, YOU CAN JIVE...",
      "id": "1490"
  },
  {
      "name": "THE WINNER TAKES IT ALL",
      "artist": "ABBA",
      "firstLine": "I DON’T WANNA TALK...",
      "id": "1883"
  },
  {
      "name": "ROLLING IN THE DEEP",
      "artist": "ADELE",
      "firstLine": "THERE’S A FIRE STARTING IN MY HEART...",
      "id": "480"
  },
  {
      "name": "I LOVE YOU BABY",
      "artist": "ADRIANA",
      "firstLine": "DIFíCIL E VIVER SEM TEU AMOR,",
      "id": "1613"
  },
  {
      "name": "I DON'T WANT TO MISS A THING",
      "artist": "AEROSMITH",
      "firstLine": "I COULD STAY AWAKE...",
      "id": "1619"
  },
  {
      "name": "CAMA E MESA",
      "artist": "AGEPÊ",
      "firstLine": "EU QUERO SER SUA CANÇÃO...",
      "id": "1204"
  },
  {
      "name": "DEIXA EU TE AMAR",
      "artist": "AGEPÊ",
      "firstLine": "QUERO IR NA FONTE DO MEU SER...",
      "id": "819"
  },
  {
      "name": "ME LEVA",
      "artist": "AGEPÊ",
      "firstLine": "TUDO NASCEU DE BRINCADEIRA...",
      "id": "1203"
  },
  {
      "name": "ALL OUT OF LOVE",
      "artist": "AIR SUPPLY",
      "firstLine": "I’M LYING ALONE WITH MY HEAD ON...",
      "id": "1239"
  },
  {
      "name": "LOST IN LOVE",
      "artist": "AIR SUPPLY",
      "firstLine": "I REALIZE THE BEST PART OF LOVE...",
      "id": "1226"
  },
  {
      "name": "HANDS CLEAN",
      "artist": "ALANIS MORISSETTE",
      "firstLine": "IF IT WEREN’T FOR YOUR MATURITY...",
      "id": "1213"
  },
  {
      "name": "HEAD OVER FEET",
      "artist": "ALANIS MORISSETTE",
      "firstLine": "I HAD NO CHOICE BUT TO HEAR YOU...",
      "id": "237"
  },
  {
      "name": "IRONIC",
      "artist": "ALANIS MORISSETTE",
      "firstLine": "AN OLD MAN TURNED NINETY-EIGHT...",
      "id": "1209"
  },
  {
      "name": "THAT I WOULD BE GOOD",
      "artist": "ALANIS MORISSETTE",
      "firstLine": "THAT I WOULD BE GOOD.. EVEN IF I DID NOTHING...",
      "id": "1211"
  },
  {
      "name": "YOU LEARN",
      "artist": "ALANIS MORISSETTE",
      "firstLine": "I RECOMMEND GETTING YOUR HEART...",
      "id": "1212"
  },
  {
      "name": "YOU OUGHTA KNOW",
      "artist": "ALANIS MORISSETTE",
      "firstLine": "I WANT YOU TO KNOW...",
      "id": "576"
  },
  {
      "name": "ANUNCIAÇÃO",
      "artist": "ALCEU VALENÇA",
      "firstLine": "NA BRUMA LEVE DAS PAIXõES QUE VÊM DE DENTRO...",
      "id": "577"
  },
  {
      "name": "FREVO MULHER",
      "artist": "ALCEU VALENÇA",
      "firstLine": "QUANTOS AQUI OUVEM OS OLHOS ERAM DE FÉ...",
      "id": "1721"
  },
  {
      "name": "LA BELLE DE JOUR",
      "artist": "ALCEU VALENÇA",
      "firstLine": "EU LEMBRO DA MOÇA BONITA DA PRAIA DE BOA VIAGEM..",
      "id": "1821"
  },
  {
      "name": "TROPICANA (MORENA TROPICANA)",
      "artist": "ALCEU VALENÇA",
      "firstLine": "DA MANGA ROSA QUERO O GOSTO E O SUMO...",
      "id": "1214"
  },
  {
      "name": "ALÉM DA CAMA",
      "artist": "ALCIONE",
      "firstLine": "DE AMOR EU NÃO MORRO...",
      "id": "1012"
  },
  {
      "name": "ESTRANHA LOUCURA",
      "artist": "ALCIONE",
      "firstLine": "MINHA ESTRANHA LOUCURA É TENTAR TE ENTENDER..",
      "id": "1011"
  },
  {
      "name": "GAROTO MAROTO",
      "artist": "ALCIONE",
      "firstLine": "VOCÊ F DE CONTA QUE QUER MEU PERDÃO...",
      "id": "1014"
  },
  {
      "name": "LOBA",
      "artist": "ALCIONE",
      "firstLine": "SOU DOCE, DENGOSA, POLIDA...",
      "id": "1015"
  },
  {
      "name": "MEU ÉBANO",
      "artist": "ALCIONE",
      "firstLine": "É, VOCE É UM NEGÃO DE TIRAR O CHAPÉU...",
      "id": "1009"
  },
  {
      "name": "MEU VÍCIO É VOCÊ",
      "artist": "ALCIONE",
      "firstLine": "MEU CIGARRO É O PERFUME DO MATO...",
      "id": "1013"
  },
  {
      "name": "NÃO DEIXE O SAMBA MORRER",
      "artist": "ALCIONE",
      "firstLine": "QUANDO EU NÃO PUDER PISAR MAIS NA AVENIDA...",
      "id": "1617"
  },
  {
      "name": "NEM MORTA",
      "artist": "ALCIONE",
      "firstLine": "EU SÓ FICO EM TEUS BRAÇOS...",
      "id": "1010"
  },
  {
      "name": "VOCÊ ME VIRA A CABEÇA",
      "artist": "ALCIONE",
      "firstLine": "VOCÊ ME VIRA A CABEÇA, ME TIRA DO SÉRIO...",
      "id": "1824"
  },
  {
      "name": "CORAZÓN PARTÍO",
      "artist": "ALEJANDRO SANZ",
      "firstLine": "TIRITAS PA ESTE CORAZóN PARTIó...",
      "id": "1044"
  },
  {
      "name": "DEPOIS DO PRAZER",
      "artist": "ALEXANDRE PIRES",
      "firstLine": "TÔ FAZENDO AMOR COM OUTRA PESSOA...",
      "id": "1683"
  },
  {
      "name": "DÓI DEMAIS",
      "artist": "ALEXANDRE PIRES",
      "firstLine": "TÁ DOENDO SIM... TÁ DOENDO EM MIM...",
      "id": "1697"
  },
  {
      "name": "ESSA TAL LIBERDADE",
      "artist": "ALEXANDRE PIRES",
      "firstLine": "O QUE É QUE EU VOU FAZER COM ESSA...",
      "id": "1675"
  },
  {
      "name": "MEU JEITO DE SER",
      "artist": "ALEXANDRE PIRES",
      "firstLine": "ERA Só DIZER PRA MIM, QUE NÃO SENTIA...",
      "id": "1681"
  },
  {
      "name": "MINEIRINHO",
      "artist": "ALEXANDRE PIRES",
      "firstLine": "EU NÃO TENHO CULPA DE COMER QUIETINHO...",
      "id": "1773"
  },
  {
      "name": "OUTDOOR",
      "artist": "ALEXANDRE PIRES",
      "firstLine": "JÁ COMOQUEI O OUTDOOR EM TODOS OS JORNAIS...",
      "id": "1696"
  },
  {
      "name": "QUE SE CHAMA AMOR",
      "artist": "ALEXANDRE PIRES",
      "firstLine": "COMO É QUE UMA COISA ASSIM MACHUCA TANTO...",
      "id": "1684"
  },
  {
      "name": "SAI DA MINHA ABA",
      "artist": "ALEXANDRE PIRES",
      "firstLine": "SAI PRA LÁ, SE MANCA, VÊ SE ME ESQUECE...",
      "id": "1774"
  },
  {
      "name": "DOMINGO",
      "artist": "ALEXANDRE PIRES / SÓ PRA CONTRARIAR",
      "firstLine": "DOMINGO QUERO TE ENCONTRAR...",
      "id": "1778"
  },
  {
      "name": "MAN IN THE BOX",
      "artist": "ALICE IN CHAINS",
      "firstLine": "I'M THE MAN IN THE BOX...",
      "id": "1104"
  },
  {
      "name": "IF I AIN’T GOT YOU",
      "artist": "ALICIA KEYS",
      "firstLine": "SOME PEOPLE LIVE FOR THE FORTUNE...",
      "id": "579"
  },
  {
      "name": "NO ONE",
      "artist": "ALICIA KEYS",
      "firstLine": "I JUST WANT YOU CLOSE...",
      "id": "1171"
  },
  {
      "name": "RECOMEÇAR",
      "artist": "ALINE BARROS - GOSPEL",
      "firstLine": "PAI, TÁ DIFíCIL MANTER O CAMINHO...",
      "id": "1604"
  },
  {
      "name": "SONDA-ME, USA-ME",
      "artist": "ALINE BARROS - GOSPEL",
      "firstLine": "SONDA-ME, SENHOR, E ME CONHECE...",
      "id": "1570"
  },
  {
      "name": "CONSELHO",
      "artist": "ALMIR GUINETO",
      "firstLine": "DEIXE DE LADO ESSE BAIXO ASTRAL",
      "id": "1582"
  },
  {
      "name": "PRINCESA",
      "artist": "AMADO BATISTA",
      "firstLine": "AO TE VER PELA PRIMEIRA VEZ EU TREMI TODO...",
      "id": "1818"
  },
  {
      "name": "BACK TO BLACK",
      "artist": "AMY WINEHOUSE",
      "firstLine": "HE LEFT NO TIME TO REGRET...",
      "id": "1488"
  },
  {
      "name": "REHAB",
      "artist": "AMY WINEHOUSE",
      "firstLine": "THEY TRIED TO MAKE ME GO..",
      "id": "1124"
  },
  {
      "name": "VALERIE",
      "artist": "AMY WINEHOUSE",
      "firstLine": "WELL SOMETIMES I GO OUT BY MYSELF...",
      "id": "578"
  },
  {
      "name": "A CANÇÃO TOCOU NA HORA ERRADA",
      "artist": "ANA CAROLINA",
      "firstLine": "A CANÇÃO TOCOU NA HORA ERRADA...",
      "id": "1191"
  },
  {
      "name": "ELEVADOR",
      "artist": "ANA CAROLINA",
      "firstLine": "PRA QUE TE ESPERO DE BRAÇOS ABERTOS...",
      "id": "1193"
  },
  {
      "name": "ENCOSTAR NA TUA",
      "artist": "ANA CAROLINA",
      "firstLine": "EU QUERO TE ROUBAR PRA MIM...",
      "id": "1185"
  },
  {
      "name": "GARGANTA",
      "artist": "ANA CAROLINA",
      "firstLine": "MINHA GARGANTA ESTRANHA...",
      "id": "219"
  },
  {
      "name": "NADA PRA MIM",
      "artist": "ANA CAROLINA",
      "firstLine": "EU NÃO VIM AQUI PRA ENTENDER...",
      "id": "1192"
  },
  {
      "name": "NUA",
      "artist": "ANA CAROLINA",
      "firstLine": "OLHO A CIDADE AO REDOR...",
      "id": "1188"
  },
  {
      "name": "QUEM DE NÓS DOIS",
      "artist": "ANA CAROLINA",
      "firstLine": "EU E VOCÊ... NÃO É ASSIM TÃO COMPLICADO...",
      "id": "1183"
  },
  {
      "name": "UMA LOUCA TEMPESTADE",
      "artist": "ANA CAROLINA",
      "firstLine": "EU QUERO UMA LUA PLENA...",
      "id": "1189"
  },
  {
      "name": "VAI",
      "artist": "ANA CAROLINA",
      "firstLine": "ESPERA Aí, NEM VEM COM ESSA HISTóRIA...",
      "id": "1194"
  },
  {
      "name": "PRA RUA ME LEVAR",
      "artist": "ANA CAROLINA / SEU JORGE",
      "firstLine": "NÃO VOU VIVER COMO ALGUÉM QUE Só ESPERA UM NOVO AMOR...",
      "id": "1184"
  },
  {
      "name": "É ISSO AÍ",
      "artist": "ANA CAROLINA E SEU JORGE",
      "firstLine": "É ISSO Aí... COMO A GENTE ACHOU QUE IA SER...",
      "id": "95"
  },
  {
      "name": "TREM BALA",
      "artist": "ANA VILELA",
      "firstLine": "NÃO É SOBRE TER TODAS PESSOAS DO MUNDO...",
      "id": "597"
  },
  {
      "name": "TREVO (TU)",
      "artist": "ANAVITÓRIA",
      "firstLine": "TU É TREVO DE QUATRO FOLHAS...",
      "id": "599"
  },
  {
      "name": "PUPILA",
      "artist": "ANAVITÓRIA / VITOR CLEY",
      "firstLine": "COMO QUE EU VOU DIZER PRA ELA...",
      "id": "1700"
  },
  {
      "name": "RARIDADE",
      "artist": "ANDERSON FREIRE - GOSPEL",
      "firstLine": "NÃO CONSIGO IR ALÉM DO TEU OLHAR...",
      "id": "1868"
  },
  {
      "name": "MISHALE",
      "artist": "ANDRU DONALDS",
      "firstLine": "FROM THE FIRST TIME THAT I LOVED YOU...",
      "id": "1829"
  },
  {
      "name": "BANG",
      "artist": "ANITTA",
      "firstLine": "VEM NA MALDADE, COM VONTADE...",
      "id": "601"
  },
  {
      "name": "SHOW DAS PODEROSAS",
      "artist": "ANITTA",
      "firstLine": "PREPARA, QUE AGORA É A HORA...",
      "id": "496"
  },
  {
      "name": "ZEN",
      "artist": "ANITTA",
      "firstLine": "OLHA, CÊ ME FAZ TÃO BEM...",
      "id": "565"
  },
  {
      "name": "LOKA",
      "artist": "ANITTA / SIMONE & SIMARIA",
      "firstLine": "CADÊ VOCÊ QUE NINGUEM VIU...",
      "id": "298"
  },
  {
      "name": "SONHOS DE UM PALHAÇO",
      "artist": "ANTONIO MARCOS",
      "firstLine": "VEJAM Só... QUE HISTóRIA BOBA EU TENHO PRA CONTAR...",
      "id": "1872"
  },
  {
      "name": "ARA KETU BOM DEMAIS",
      "artist": "ARAKETU",
      "firstLine": "NÃO DÁ PRA ESCONDER O QUE EU SINTO...",
      "id": "602"
  },
  {
      "name": "MAL-ACOSTUMADO",
      "artist": "ARAKETU",
      "firstLine": "AMOR DE VERDADE EU Só SENTI...",
      "id": "1895"
  },
  {
      "name": "SEMPRE SERÁ",
      "artist": "ARAKETU",
      "firstLine": "GOSTO DE FICAR TE OLHANDO ...",
      "id": "1823"
  },
  {
      "name": "THANK U, NEXT",
      "artist": "ARIANA GRANDE",
      "firstLine": "THOUGHT I’D END UP WITH SEAN...",
      "id": "1263"
  },
  {
      "name": "O SHOW TEM QUE CONTINUAR",
      "artist": "ARLINDO CRUZ",
      "firstLine": "TEU CHORO JÁ NÃO TOCA MEU BANDOLIM...",
      "id": "1274"
  },
  {
      "name": "DESENHO DE DEUS",
      "artist": "ARMADINHO",
      "firstLine": "QUANDO DEUS TE DESENHOU ...",
      "id": "85"
  },
  {
      "name": "DERÊ",
      "artist": "ART POPULAR",
      "firstLine": "DERÊ DERÊRERE DERERERERÊ...",
      "id": "1764"
  },
  {
      "name": "PIMPOLHO",
      "artist": "ART POPULAR",
      "firstLine": "PIMPOLHO É UM CARA BEM LEGAL...",
      "id": "816"
  },
  {
      "name": "TEMPORAL",
      "artist": "ART POPULAR",
      "firstLine": "FAZ TEMPO QUE A GENTE NÃO É AQUELE MESMO PAR...",
      "id": "1836"
  },
  {
      "name": "DANÇA DO VAMPIRO",
      "artist": "ASA DE ÁGUIA",
      "firstLine": "VOCÊ É O AMOR QUE EU SEMPRE QUIS VEM PRA MIM...",
      "id": "1495"
  },
  {
      "name": "MANIVELA",
      "artist": "ASA DE ÁGUIA",
      "firstLine": "EU FUI PERGUNTAR PRA ELA MEU AMOR...",
      "id": "1494"
  },
  {
      "name": "CERVEJA DE GARRAFA",
      "artist": "ATITUDE 67",
      "firstLine": "BACANA, COMO TA LEGAL AQUI...",
      "id": "961"
  },
  {
      "name": "LIKE A STONE",
      "artist": "AUDIOSLAVE",
      "firstLine": "ON A COBWEB AFTERNOON...",
      "id": "1057"
  },
  {
      "name": "CORAÇÃO CACHORRO (LATE CORAÇÃO)",
      "artist": "AVINE E MATHEUS FERNANDES",
      "firstLine": "LOGO HOJE QUE EU TAVA BEM...",
      "id": "1551"
  },
  {
      "name": "COMPLICATED",
      "artist": "AVRIL LAVIGNE",
      "firstLine": "CHILL OUT WHATCHA YELLING FOR?...",
      "id": "1106"
  },
  {
      "name": "I’M WITH YOU",
      "artist": "AVRIL LAVIGNE",
      "firstLine": "I’M STANDING ON THE BRIDGE...",
      "id": "1105"
  },
  {
      "name": "BOLA DE SABÃO",
      "artist": "BABADO NOVO",
      "firstLine": "BABY.. QUERIA TANTO TE VER...",
      "id": "1036"
  },
  {
      "name": "CORDA DO CARANGUEIJO",
      "artist": "BABADO NOVO",
      "firstLine": "VOU CATAR CARANGUEIJO LÁ NO MANGUEZAL...",
      "id": "1672"
  },
  {
      "name": "ALL I HAVE TO GIVE",
      "artist": "BACKSTREET BOYS",
      "firstLine": "I DON’T KNOW WHAT HE DOES TO MAKE...",
      "id": "23"
  },
  {
      "name": "AS LONG AS YOU LOVE ME",
      "artist": "BACKSTREET BOYS",
      "firstLine": "ALTHOUGH LONELINESS HAS ALWAYS BEEN A FRIEND...",
      "id": "820"
  },
  {
      "name": "EVERYBODY",
      "artist": "BACKSTREET BOYS",
      "firstLine": "EVERYBODY ... ROCK YOUR BODY",
      "id": "824"
  },
  {
      "name": "I WANT IT THAT WAY",
      "artist": "BACKSTREET BOYS",
      "firstLine": "YOU ARE, MY FIRE...",
      "id": "574"
  },
  {
      "name": "I’LL NEVER BREAK YOUR HEART",
      "artist": "BACKSTREET BOYS",
      "firstLine": "FROM THE FIRST DAY. THAT I SAW YOUR SMILING FACE",
      "id": "1003"
  },
  {
      "name": "QUIT PLAY GAMES",
      "artist": "BACKSTREET BOYS",
      "firstLine": "EVEN IN MY HEART, I SEE...",
      "id": "470"
  },
  {
      "name": "LINDO BALÃO AZUL",
      "artist": "BALÃO MÁGICO",
      "firstLine": "EU VIVO SEMPRE NO MUNDO DA LUA...",
      "id": "291"
  },
  {
      "name": "SUPERFANTÁSTICO",
      "artist": "BALÃO MÁGICO",
      "firstLine": "SUPERFANTÁSTICO AMIGO! ...",
      "id": "513"
  },
  {
      "name": "ALÔ PAIXÃO",
      "artist": "BANDA EVA",
      "firstLine": "EU NÃO VOU PERDER VOCÊ.. FAZ PARTE DESSA HIST..",
      "id": "1037"
  },
  {
      "name": "AMOR PERFEITO",
      "artist": "BANDA EVA",
      "firstLine": "FECHO OS OLHOS PRA NAO VER PASSAR O TEMPO...",
      "id": "1035"
  },
  {
      "name": "BELEZA RARA",
      "artist": "BANDA EVA",
      "firstLine": "EU NÃO POSSO DEIXAR QUE O TEMPO...",
      "id": "580"
  },
  {
      "name": "EVA",
      "artist": "BANDA EVA",
      "firstLine": "MEU AMOR, OLHA Só, HOJE O SOL...",
      "id": "193"
  },
  {
      "name": "ME ABRAÇA E ME BEIJA",
      "artist": "BANDA EVA",
      "firstLine": "QUANDO VOCÊ PASSA EU SINTO O SEU CHEIRO...",
      "id": "581"
  },
  {
      "name": "WE ARE CARNAVAL",
      "artist": "BANDA EVA",
      "firstLine": "AH, QUE BOM VOCÊ CHEGOU...",
      "id": "1719"
  },
  {
      "name": "ME USA",
      "artist": "BANDA MAGNíFICOS",
      "firstLine": "MOMENTOS DE AMOR QUERO COM VOCÊ...",
      "id": "1825"
  },
  {
      "name": "BAIANIDADE NAGÔ",
      "artist": "BANDA MEL",
      "firstLine": "JA PINTOU VERÃO,CALOR NO CORAÇÃO....",
      "id": "42"
  },
  {
      "name": "PREFIXO DE VERÃO",
      "artist": "BANDA MEL",
      "firstLine": "AÊ, AÊ, AÊ, AÊ ÊH, ÊH, ÊH, EH ÔH, Ô...",
      "id": "1718"
  },
  {
      "name": "BETE BALANÇO",
      "artist": "BARÃO VERMELHO",
      "firstLine": "PODE SEGUIR A TUA ESTRELA. O TEU BRINQUEDO...",
      "id": "47"
  },
  {
      "name": "O POETA ESTÁ VIVO",
      "artist": "BARÃO VERMELHO",
      "firstLine": "BABY, COMPRA O JORNAL E VEM VER O SOL...",
      "id": "1736"
  },
  {
      "name": "POR VOCÊ",
      "artist": "BARÃO VERMELHO",
      "firstLine": "POR VOCÊ. EU DANÇARIA TANGO NO TETO...",
      "id": "450"
  },
  {
      "name": "PRO DIA NASCER FELIZ",
      "artist": "BARÃO VERMELHO",
      "firstLine": "TODO DIA A INSÔNIA ME CONVENCE...",
      "id": "456"
  },
  {
      "name": "PURO ÊXTASE",
      "artist": "BARÃO VERMELHO",
      "firstLine": "TODA BRINCADEIRA NÃO DEVIA TER HORA...",
      "id": "1793"
  },
  {
      "name": "ESQUEMA PREFERIDO",
      "artist": "BARÕES DA PISADINHA",
      "firstLine": "TÁ VENDO Aí, ELA JÁ TÁ FALANDO QUE TÁ COM...",
      "id": "1043"
  },
  {
      "name": "RECAIREI",
      "artist": "BARÕES DA PISADINHA",
      "firstLine": "JÁ TEM UMA SEMANA QUE TO LIMPO DE VOCÊ...",
      "id": "1693"
  },
  {
      "name": "TÁ ROCHEDA",
      "artist": "BARÕES DA PISADINHA",
      "firstLine": "ENTREI NA RUA DELA ...",
      "id": "1060"
  },
  {
      "name": "HEY JUDE",
      "artist": "BEATLES",
      "firstLine": "HEY, JUDE, DON’T MAKE IT BAD...",
      "id": "604"
  },
  {
      "name": "TWIST AND SHOUT",
      "artist": "BEATLES",
      "firstLine": "WELL, SHAKE IT UP BABY NOW...",
      "id": "539"
  },
  {
      "name": "HOW DEEP IS YOUR LOVE",
      "artist": "BEE GEES",
      "firstLine": "I KNOW IN YOUR EYES IN THE MORNING SUN...",
      "id": "247"
  },
  {
      "name": "DERÊ",
      "artist": "BELO",
      "firstLine": "DERÊ DERÊRERE DERERERERÊ...",
      "id": "1765"
  },
  {
      "name": "MOMENTOS",
      "artist": "BELO / SOWETO",
      "firstLine": "DEIXA O NOSSO MUNDO SE ENCONTRAR...",
      "id": "1691"
  },
  {
      "name": "QUEM SERÁ",
      "artist": "BELO / SOWETO",
      "firstLine": "ESCUTA MEU AMOR ENTENDA DE UMA VEZ...",
      "id": "1685"
  },
  {
      "name": "REFÉM DO CORAÇÃO",
      "artist": "BELO / SOWETO",
      "firstLine": "SEMPRE ALGUEM ME DESPERTA...",
      "id": "1699"
  },
  {
      "name": "NEGRA ÂNGELA",
      "artist": "BELO E NEGUINHO",
      "firstLine": "EU PREFIRO ACRDITAR QUE É MENTIRA...",
      "id": "1692"
  },
  {
      "name": "ÁGUA DE CHUVA DO MAR",
      "artist": "BETH CARVALHO",
      "firstLine": "O MEU CORAÇÃO, HOJE TEM PAZ...",
      "id": "1581"
  },
  {
      "name": "DO FUNDO DO NOSSO QUINTAL",
      "artist": "BETH CARVALHO",
      "firstLine": "MAIS UM POUCO E VAI CLAREAR...",
      "id": "1724"
  },
  {
      "name": "O SHOW TEM QUE CONTINUAR",
      "artist": "BETH CARVALHO",
      "firstLine": "TEU CHORO JÁ NÃO TOCA MEU BANDOLIM...",
      "id": "1727"
  },
  {
      "name": "O SAL DA TERRA",
      "artist": "BETO GUEDES",
      "firstLine": "ANDA, QUERO TE DIZER NENHUM SEGREDO...",
      "id": "1841"
  },
  {
      "name": "PAISAGEM NA JANELA",
      "artist": "BETO GUEDES",
      "firstLine": "DA JANELA LATERAL DO QUARTO DE DORMIR",
      "id": "1847"
  },
  {
      "name": "QUANDO TE VI",
      "artist": "BETO GUEDES",
      "firstLine": "NEM O SOL, NEM O MAR, NEM O BRILHO DAS ESTRELAS...",
      "id": "1831"
  },
  {
      "name": "HALO",
      "artist": "BEYONCÉ",
      "firstLine": "REMEMBER THOSE WALLS I BUILT...",
      "id": "1146"
  },
  {
      "name": "LOVE ON TOP",
      "artist": "BEYONCÉ",
      "firstLine": "HONEY, HONEY. I CAN SEE THE STARS ALL THE WAY...",
      "id": "1006"
  },
  {
      "name": "THE TIME OF MY LIFE (I’VE HAD)",
      "artist": "BILL MEDLEY / DIRTY DANCE",
      "firstLine": "NOW I’VE HAD THE TIME OF MY LIFE...",
      "id": "1705"
  },
  {
      "name": "UPTOWN GIRL",
      "artist": "BILLY JOEL",
      "firstLine": "UPTOWN GIRL... SHE’S BEEN LIVING IN HER UPTOWN WORLD...",
      "id": "1464"
  },
  {
      "name": "TÉDIO",
      "artist": "BIQUINI CAVADÃO",
      "firstLine": "SABE ESSES DIAS EM QUE HORAS DIZEM...",
      "id": "1311"
  },
  {
      "name": "ALL THE SMALL THINGS",
      "artist": "BLINK-182",
      "firstLine": "ALL THE SMALL THINGS...TRUE CARE, TRUTH BRINGS...",
      "id": "575"
  },
  {
      "name": "A DOIS PASSOS DO PARAÍSO",
      "artist": "BLITZ",
      "firstLine": "LONGE DE CASA. A MAIS DE UMA SEMANA...",
      "id": "6"
  },
  {
      "name": "GEME GEME",
      "artist": "BLITZ",
      "firstLine": "PERDI MEU AMOR (NO PARAíSO)...",
      "id": "227"
  },
  {
      "name": "DUVIDO",
      "artist": "BOKALOCA",
      "firstLine": "EU ME DEI TODO PRA VOCÊ...",
      "id": "1757"
  },
  {
      "name": "NÃO PEDI PRA ME APAIXONAR",
      "artist": "BOKALOKA",
      "firstLine": "ELA MEXE COMIGO.. E PIOR QUE NEM SABE...",
      "id": "1040"
  },
  {
      "name": "QUE SITUAÇÃO",
      "artist": "BOKALOKA",
      "firstLine": "LOGO QUE CHEGUEI ...PAREI E VI VOCÊ",
      "id": "1039"
  },
  {
      "name": "CAÇAMBA",
      "artist": "BOM GOSTO",
      "firstLine": "TRAZ A CAÇAMBA, TRAZ A CAÇAMBA...",
      "id": "1732"
  },
  {
      "name": "ALWAYS",
      "artist": "BON JOVI",
      "firstLine": "THIS ROMEU IS BLEEDING...",
      "id": "1098"
  },
  {
      "name": "BORN TO BE MY BABY",
      "artist": "BON JOVI",
      "firstLine": "RAINY NIGHT AND WE WORKED ALL DAY...",
      "id": "54"
  },
  {
      "name": "I'LL BE THERE FOR YOU",
      "artist": "BON JOVI",
      "firstLine": "I GUESS THIS TIME YOU´RE REALLY LEAVIN...",
      "id": "254"
  },
  {
      "name": "IT’S MY LIFE",
      "artist": "BON JOVI",
      "firstLine": "THIS AIN’T A SONG FOR THE BROKEN...",
      "id": "1122"
  },
  {
      "name": "LIVING ON A PRAYER",
      "artist": "BON JOVI",
      "firstLine": "TOMMY USED TO WORK ON THE DOCKS...",
      "id": "297"
  },
  {
      "name": "MIRACLE",
      "artist": "BON JOVI",
      "firstLine": "A PENNY FOR YOUR THOUGHTS NOW BABY...",
      "id": "1430"
  },
  {
      "name": "MISUNDERSTOOD",
      "artist": "BON JOVI",
      "firstLine": "SHOULD I? COULD I?...",
      "id": "1657"
  },
  {
      "name": "THIS AIN’T A LOVE SONG",
      "artist": "BON JOVI",
      "firstLine": "I SHOULD HAVE SEEN IT COMING...",
      "id": "1431"
  },
  {
      "name": "YOU GIVE LOVE A BAD NAME",
      "artist": "BON JOVI",
      "firstLine": "SHOT THROUGH THE HEART AND YOU’RE TO BLAME...",
      "id": "1429"
  },
  {
      "name": "MILK SHAKE",
      "artist": "BONDE DO FORRÓ",
      "firstLine": "EU GOSTO ASSIM...EU GOSTO QUANDO VOCÊ...",
      "id": "1075"
  },
  {
      "name": "TOTAL ECLIPSE OF THE HEART",
      "artist": "BONNIE TYLER",
      "firstLine": "(TURN AROUND) EVERY NOW AND THEN, I GET A LITTLE...",
      "id": "1633"
  },
  {
      "name": "BACK AT ONE",
      "artist": "BRIAN MCKNIGHT",
      "firstLine": "IT’S UNDENIABLE THAT WE SHOULD BE TOGETHER...",
      "id": "1635"
  },
  {
      "name": "SOMETIMES",
      "artist": "BRITNEY SPEARS",
      "firstLine": "YOU TELL ME YOU’RE IN LOVE WITH ME...",
      "id": "1576"
  },
  {
      "name": "BOATE AZUL",
      "artist": "BRUNO E MARRONE",
      "firstLine": "DOENTE DE AMOR PROCUREI REMÉDIO NA VIDA NOTURNA",
      "id": "1094"
  },
  {
      "name": "CHORAM AS ROSAS",
      "artist": "BRUNO E MARRONE",
      "firstLine": "CHORAM AS ROSAS... SEU PERFUME AGORA",
      "id": "1083"
  },
  {
      "name": "DORMI NA PRAÇA",
      "artist": "BRUNO E MARRONE",
      "firstLine": "CAMINHEI SOZINHO PELA RUA...",
      "id": "781"
  },
  {
      "name": "PODE IR EMBORA",
      "artist": "BRUNO E MARRONE",
      "firstLine": "PROCUREI EM OUTROS BRAÇOS ...",
      "id": "1085"
  },
  {
      "name": "QUER CASAR COMIGO",
      "artist": "BRUNO E MARRONE",
      "firstLine": "QUER? QUER? QUER?QUER CASAR COMIGO?...",
      "id": "1088"
  },
  {
      "name": "VAI DAR NAMORO",
      "artist": "BRUNO E MARRONE",
      "firstLine": "DO JEITO QUE VOCÊ ME OLHA,VAI DAR NAMORO...",
      "id": "1087"
  },
  {
      "name": "DOCE DESEJO",
      "artist": "BRUNO E MARRONE / CLAUDIA LEITE",
      "firstLine": "TÁ NO JEITO DE OLHAR,",
      "id": "1708"
  },
  {
      "name": "COUNT ON ME",
      "artist": "BRUNO MARS",
      "firstLine": "IF YOU EVER FIND YOURSELF",
      "id": "1426"
  },
  {
      "name": "JUST THE WAY YOU ARE",
      "artist": "BRUNO MARS",
      "firstLine": "OH, HER EYES, HER EYES...",
      "id": "262"
  },
  {
      "name": "LOCKED OUT OF HEAVEN",
      "artist": "BRUNO MARS",
      "firstLine": "NEVER HAD MUCH FAITH IN LOVE OR MIRACLES...",
      "id": "607"
  },
  {
      "name": "THE LAZY SONG",
      "artist": "BRUNO MARS",
      "firstLine": "TODAY I DON’T FEEL LIKE DOING ANYTHING...",
      "id": "526"
  },
  {
      "name": "TREASURE",
      "artist": "BRUNO MARS",
      "firstLine": "BABY SQUIRREL, YOU’S A SEXY MOTHER FUCKER...",
      "id": "533"
  },
  {
      "name": "WHEN I WAS YOUR MAN",
      "artist": "BRUNO MARS",
      "firstLine": "SAME BED, BUT IT FEELS JUST...",
      "id": "1058"
  },
  {
      "name": "(EVERYTHING I DO) I DO IT FOR YOU",
      "artist": "BRYAN ADAMS",
      "firstLine": "LOOK INTO MY EYES...",
      "id": "1634"
  },
  {
      "name": "HEAVEN",
      "artist": "BRYAN ADAMS",
      "firstLine": "OH!! THINKING ABOUT ALL OUR YOUNGER YEARS...",
      "id": "239"
  },
  {
      "name": "LEÃOZINHO",
      "artist": "CAETANO VELOSO",
      "firstLine": "GOSTO MUITO DE TE VER, LEÃOZINHO...",
      "id": "1660"
  },
  {
      "name": "QUEIXA",
      "artist": "CAETANO VELOSO",
      "firstLine": "UM AMOR ASSIM DELICADO...",
      "id": "1661"
  },
  {
      "name": "SORTE",
      "artist": "CAETANO VELOSO",
      "firstLine": "TUDO DE BOM QUE VOCÊ ME FIZER...",
      "id": "1658"
  },
  {
      "name": "SOZINHO",
      "artist": "CAETANO VELOSO",
      "firstLine": "ÀS VEZES, NO SILÊNCIO DA NOITE...",
      "id": "509"
  },
  {
      "name": "VOCÊ É LINDA",
      "artist": "CAETANO VELOSO",
      "firstLine": "FONTE DE MEL NOS OLHOS DE GUEIXA...",
      "id": "1659"
  },
  {
      "name": "SEÑORITA",
      "artist": "CAMILA CABELLO & SHAWN MENDES",
      "firstLine": "I LOVE IT WHEN YOU CALL ME SEñORITA...",
      "id": "1709"
  },
  {
      "name": "À SUA MANEIRA",
      "artist": "CAPITAL INICIAL",
      "firstLine": "ELA DORMIU NO CALOR DOS MEUS BRAÇOS...",
      "id": "15"
  },
  {
      "name": "FÁTIMA",
      "artist": "CAPITAL INICIAL",
      "firstLine": "VOCÊS ESPERAM UMA INTERVENÇÃO DIVINA...",
      "id": "1313"
  },
  {
      "name": "MUSICA URBANA",
      "artist": "CAPITAL INICIAL",
      "firstLine": "CONTRA TODOS E CONTRA NINGUÉM...",
      "id": "367"
  },
  {
      "name": "NÃO OLHE PRA TRÁS",
      "artist": "CAPITAL INICIAL",
      "firstLine": "NEM TUDO É COMO VOCÊ QUER...",
      "id": "1499"
  },
  {
      "name": "NATASHA",
      "artist": "CAPITAL INICIAL",
      "firstLine": "DEZESSETE ANOS E FUGIU DE CASA...",
      "id": "387"
  },
  {
      "name": "PRIMEIROS ERROS",
      "artist": "CAPITAL INICIAL",
      "firstLine": "MEU CAMINHO É CADA MANHÃ...",
      "id": "455"
  },
  {
      "name": "TUDO QUE VAI",
      "artist": "CAPITAL INICIAL",
      "firstLine": "HOJE É O DIA...",
      "id": "538"
  },
  {
      "name": "COMING AROUND AGAIN",
      "artist": "CARLY SIMON",
      "firstLine": "BABY SNEEZES .... MOMY PLEASES...",
      "id": "1534"
  },
  {
      "name": "ALL STAR",
      "artist": "CÁSSIA ELLER",
      "firstLine": "ESTRANHO SERIA SE EU NÃO ME APAIXONASSE...",
      "id": "582"
  },
  {
      "name": "E.T.C",
      "artist": "CASSIA ELLER",
      "firstLine": "TAVA COM CARA. QUE CARIMBA POSTAIS...",
      "id": "100"
  },
  {
      "name": "MALANDRAGEM",
      "artist": "CÁSSIA ELLER",
      "firstLine": "QUEM SABE EU AINDA SOU UMA GAROTINHA...",
      "id": "312"
  },
  {
      "name": "POR ENQUANTO",
      "artist": "CÁSSIA ELLER",
      "firstLine": "MUDARAM AS ESTAÇõES, NADA MUDOU...",
      "id": "448"
  },
  {
      "name": "COLEÇÕES",
      "artist": "CASSIANO",
      "firstLine": "SEI QUE VOCÊ GOSTA DE BRINCAR DE AMORES...",
      "id": "1695"
  },
  {
      "name": "PEGASUS FANTASY",
      "artist": "CAVALEIROS DO ZODIACO",
      "firstLine": "FAÇA ELEVAR O COSMO NO SEU CORAÇÃO...",
      "id": "1478"
  },
  {
      "name": "CODINOME BEIJA FLOR",
      "artist": "CAZUZA",
      "firstLine": "PRA QUE MENTIR. FINGIR QUE PERDOOU...",
      "id": "70"
  },
  {
      "name": "EXAGERADO",
      "artist": "CAZUZA",
      "firstLine": "AMOR DA MINHA VIDA. DAQUI ATÉ A ETERNIDADE...",
      "id": "201"
  },
  {
      "name": "MAIOR ABANDONADO",
      "artist": "CAZUZA",
      "firstLine": "EU TÔ PERDIDO. SEM PAI NEM MÃE...",
      "id": "308"
  },
  {
      "name": "O NOSSO AMOR A GENTE INVENTA",
      "artist": "CAZUZA",
      "firstLine": "O TEU AMOR É UMA MENTIRA...",
      "id": "401"
  },
  {
      "name": "FINALLY",
      "artist": "CE CE PENISTON",
      "firstLine": "MEETING MR. RIGHT, THE MAN OF MY DREAMS",
      "id": "1144"
  },
  {
      "name": "BANHO DE LUA",
      "artist": "CELLY CAMPELO",
      "firstLine": "TOMO UM BANHO DE LUA...",
      "id": "43"
  },
  {
      "name": "ESTÚPIDO CUPIDO",
      "artist": "CELLY CAMPELO",
      "firstLine": "OH! CUPIDO, VÊ SE DEIXA EM PAZ...",
      "id": "179"
  },
  {
      "name": "CLOSER",
      "artist": "CHAINSMOKERS",
      "firstLine": "HEY, I WAS DOING JUST FINE BEFORE...",
      "id": "1715"
  },
  {
      "name": "PAPO RETO",
      "artist": "CHARLIE BROWN",
      "firstLine": "OTÁRIO, EU VOU TE AVISAR...",
      "id": "431"
  },
  {
      "name": "TE LEVAR",
      "artist": "CHARLIE BROWN",
      "firstLine": "TIVE PENSANDO EM ME MUDAR...",
      "id": "521"
  },
  {
      "name": "ZOIO DE LUA",
      "artist": "CHARLIE BROWN",
      "firstLine": "TIROU A ROUPA, ENTROU NO MAR...",
      "id": "566"
  },
  {
      "name": "PROIBIDA PRA MIM",
      "artist": "CHARLIE BROWN JR",
      "firstLine": "ELA ACHOU MEU CABELO ENGRAÇADO...",
      "id": "1523"
  },
  {
      "name": "SÓ OS LOUCOS SABEM",
      "artist": "CHARLIE BROWN JR",
      "firstLine": "AGORA EU SEI EXATAMENTE O QUE FAZER",
      "id": "1522"
  },
  {
      "name": "SÓ POR UMA NOITE",
      "artist": "CHARLIE BROWN JR",
      "firstLine": "EU PROCUREI EM OUTROS CORPOS ENCONTRAR VOCÊ...",
      "id": "1524"
  },
  {
      "name": "ATTENTION",
      "artist": "CHARLIE PUTH",
      "firstLine": "YOU'VE BEEN RUNNIN' ROUND, RUNNIN' ROUND...",
      "id": "1475"
  },
  {
      "name": "CARA CARAMBA SOU CAMALEÃO",
      "artist": "CHICLETE COM BANANA",
      "firstLine": "CARA CARAMBA, CARA CARAÔ",
      "id": "1496"
  },
  {
      "name": "PRAIEIRO",
      "artist": "CHICLETE COM BANANA",
      "firstLine": "SOU PRAIEIRO. SOU GUERREIRO. TO SOLTEIRO...",
      "id": "453"
  },
  {
      "name": "QUERO CHICLETE",
      "artist": "CHICLETE COM BANANA",
      "firstLine": "CHICLETE PRA GRUDAR NO SEU OUVIDO...",
      "id": "468"
  },
  {
      "name": "EVIDENCIAS",
      "artist": "CHITÃOZINHO & XORORó",
      "firstLine": "QUANDO EU DIGO QUE DEIXEI DE TE AMAR...",
      "id": "199"
  },
  {
      "name": "FIO DE CABELO",
      "artist": "CHITÃOZINHO & XORORó",
      "firstLine": "QUANDO A GENTE AMA QUALQUER COISA SERVE...",
      "id": "209"
  },
  {
      "name": "NUVEM DE LÁGRIMAS",
      "artist": "CHITÃOZINHO E XORORó",
      "firstLine": "HÁ UMA NUVEM DE LÁGRIMAS SOBRE OS MEUS OLHOS...",
      "id": "1808"
  },
  {
      "name": "I TURN TO YOU",
      "artist": "CHRISTINA AGUILERA",
      "firstLine": "WHEN I’M LOST... IN THE RAIN,",
      "id": "1839"
  },
  {
      "name": "THOUSAND YEARS",
      "artist": "CHRISTINA PERRI",
      "firstLine": "HEART BEATS FAST ... COLORS AND PROMISES...",
      "id": "1000"
  },
  {
      "name": "A ESTRADA",
      "artist": "CIDADE NEGRA",
      "firstLine": "VOCÊ NÃO SABE O QUANTO EU CAMINHEI...",
      "id": "7"
  },
  {
      "name": "AONDE VOCÊ MORA",
      "artist": "CIDADE NEGRA",
      "firstLine": "AMOR IGUAL AO TEU. EU NUNCA MAIS TEREI...",
      "id": "33"
  },
  {
      "name": "GIRASSOL",
      "artist": "CIDADE NEGRA",
      "firstLine": "A FAVOR DA COMUNIDADE, QUE ESPERA O BLOCO PASSAR...",
      "id": "1318"
  },
  {
      "name": "JOHNNY B. GOODE",
      "artist": "CIDADE NEGRA",
      "firstLine": "LÁ NO MEIO DA BAIXADA...",
      "id": "1627"
  },
  {
      "name": "PENSAMENTO",
      "artist": "CIDADE NEGRA",
      "firstLine": "VOCÊ PRECISA SABER O QUE PASSA AQUI DENTRO...",
      "id": "1324"
  },
  {
      "name": "SOLTEIRO",
      "artist": "CIDADE NEGRA",
      "firstLine": "SOLTEIRO NO RIO DE JANEIRO...",
      "id": "504"
  },
  {
      "name": "SOMBRA DA MALDADE",
      "artist": "CIDADE NEGRA",
      "firstLine": "EU SEI QUE ELA NUNCA MAIS APARECEU...",
      "id": "506"
  },
  {
      "name": "TIME AFTER TIME",
      "artist": "CINDI LAUPER",
      "firstLine": "LYING IN MY BED. I HEAR THE CLOCK...",
      "id": "528"
  },
  {
      "name": "CORDA DO CARANGUEIJO",
      "artist": "CLÁUDIA LEITE",
      "firstLine": "VOU CATAR CARANGUEIJO LÁ NO MANGUEZAL...",
      "id": "80"
  },
  {
      "name": "DOCE DESEJO",
      "artist": "CLAUDIA LEITE / BRUNO E MARRONE",
      "firstLine": "TÁ NO JEITO DE OLHAR ...",
      "id": "1086"
  },
  {
      "name": "CONQUISTA",
      "artist": "CLAUDINHO E BUCHECHA",
      "firstLine": "SABE CHURURUDU ESTOU LOUCO...",
      "id": "77"
  },
  {
      "name": "EU NÃO EXISTO LONGE DE VOCÊ",
      "artist": "CLAUDINHO E BUCHECHA",
      "firstLine": "AVIÃO SEM ASA. FOGUEIRA SEM BRASA...",
      "id": "183"
  },
  {
      "name": "NOSSO SONHO",
      "artist": "CLAUDINHO E BUCHECHA",
      "firstLine": "NAQUELE LUGAR, NAQUELE LOCAL...",
      "id": "395"
  },
  {
      "name": "QUERO TE ENCONTRAR",
      "artist": "CLAUDINHO E BUCHECHA",
      "firstLine": "QUANDO VOCÊ VEM PRA PASSAR O FIM...",
      "id": "469"
  },
  {
      "name": "Só LOVE",
      "artist": "CLAUDINHO E BUCHECHA",
      "firstLine": "QUERO, DE NOVO COM VOCÊ ME ATRACAR...",
      "id": "500"
  },
  {
      "name": "XERETA",
      "artist": "CLAUDINHO E BUCHECHA",
      "firstLine": "EU TE FALEI QUE ERA PRA NÃO BRINCAR...",
      "id": "809"
  },
  {
      "name": "A NAMORADEIRA",
      "artist": "CLÁUDIO ZOLLI",
      "firstLine": "FOI BOM TE VER. SABER QUE VOCÊ, É FELIZ...",
      "id": "13"
  },
  {
      "name": "NOITE DO PRAZER",
      "artist": "CLÁUDIO ZOLLI",
      "firstLine": "A NOITE VAI SER BÔA . DE TUDO VAI ROLAR...",
      "id": "391"
  },
  {
      "name": "ESPERA NA JANELA",
      "artist": "COGUMELO PLUTÃO",
      "firstLine": "QUANDO ME PERDI. VOCÊ APARECEU...",
      "id": "171"
  },
  {
      "name": "MIDNIGHT BOTTLE",
      "artist": "COLBIE CAILLAT",
      "firstLine": "MIDNIGHT BOTTLE TAKE ME COME...",
      "id": "1451"
  },
  {
      "name": "VIVA LA VIDA",
      "artist": "COLDPLAY",
      "firstLine": "I USED TO RULE THE WORLD...",
      "id": "1507"
  },
  {
      "name": "EASY",
      "artist": "COMODORES",
      "firstLine": "KNOW IT SOUNDS FUNNY...",
      "id": "101"
  },
  {
      "name": "MEL DA SUA BOCA",
      "artist": "COPACABANA BEAT",
      "firstLine": "COMO É DOCE O BEIJO QUANDO VEM DA SUA BOCA..",
      "id": "754"
  },
  {
      "name": "PUT YOUR RECORDS ON",
      "artist": "CORINNE BAILEY RAE",
      "firstLine": "THREE LITTLE BIRDS, SAT ON MY WINDOW...",
      "id": "1815"
  },
  {
      "name": "ACIDENTALLY IN LOVE",
      "artist": "COUTING CROWS",
      "firstLine": "SO SHE SAID \"WHAT'S THE PROBLEM BABY?...",
      "id": "17"
  },
  {
      "name": "DIAS ATRAS",
      "artist": "CPM 22",
      "firstLine": "NUNCA MAIS ESPERO TE ENCONTRAR...",
      "id": "1350"
  },
  {
      "name": "NÃO SEI VIVER SEM TER VOCÊ",
      "artist": "CPM 22",
      "firstLine": "NÃO HÁ MAIS DESCULPAS, VOCÊ VAI TER QUE ME ENTENDER...",
      "id": "1351"
  },
  {
      "name": "UM MINUTO PARA O FIM DO MUNDO",
      "artist": "CPM 22",
      "firstLine": "ME SINTO Só, MAS QUEM É QUE NUNCA SE SENTIU ASSIM...",
      "id": "1352"
  },
  {
      "name": "LINGER",
      "artist": "CRANBERRIES",
      "firstLine": "IF YOU, IF YOU COULD RETURN...",
      "id": "1712"
  },
  {
      "name": "ZOMBIE",
      "artist": "CRANBERRIES",
      "firstLine": "ANOTHER HEAD HANGS LOWLY...",
      "id": "1711"
  },
  {
      "name": "DON´T STOP DANCING",
      "artist": "CREED",
      "firstLine": "AT TIMES LIFE IS WICKED AND I JUST...",
      "id": "1129"
  },
  {
      "name": "MY SACRIFICE",
      "artist": "CREED",
      "firstLine": "HELLO MY FRIEND WE MEET AGAIN...",
      "id": "1130"
  },
  {
      "name": "ONE LAST BREATH",
      "artist": "CREED",
      "firstLine": "PLEASE COME NOW, I THINK I’M FALLING...",
      "id": "1652"
  },
  {
      "name": "WITH ARMS WIDE OPEN",
      "artist": "CREED",
      "firstLine": "WELL I JUST HEARD THE NEWS TODAY...",
      "id": "584"
  },
  {
      "name": "HAVE YOU EVER SEEN THE RAIN",
      "artist": "CREEDENCE",
      "firstLine": "SOMEONE TOLD ME LONG AGO...",
      "id": "235"
  },
  {
      "name": "KARMA CHAMELEON",
      "artist": "CULTURE CLUB",
      "firstLine": "DESERT LOVING IN YOUR EYES ALL THE WAY...",
      "id": "1235"
  },
  {
      "name": "GIRLS JUST WANT TO HAVE FUN",
      "artist": "CYNDI LAUPER",
      "firstLine": "I COME HOME IN THE MORNING LIGHT...",
      "id": "1651"
  },
  {
      "name": "SEM AR",
      "artist": "D'BLACK",
      "firstLine": "MEUS PÉS NÃO TOCAM MAIS O CHÃO...",
      "id": "1152"
  },
  {
      "name": "GET LUCKY",
      "artist": "DAFT PUNK",
      "firstLine": "LIKE THE LEGEND OF THE PHOENIX...",
      "id": "1509"
  },
  {
      "name": "CLIMA DE RODEIO (ALÔ GALERA...)",
      "artist": "DALLAS COMPANY",
      "firstLine": "A MAGIA ESTÁ NO AR...",
      "id": "1625"
  },
  {
      "name": "MUITO ESTRANHO",
      "artist": "DALTO",
      "firstLine": "HUM! MAS SE UM DIA EU CHEGAR MUITO ESTRANHO...",
      "id": "1891"
  },
  {
      "name": "TONES AND I",
      "artist": "DANCE MONKEY",
      "firstLine": "THEY SAY OH MY GOD I SEE...",
      "id": "1109"
  },
  {
      "name": "ADORO AMAR VOCÊ",
      "artist": "DANIEL",
      "firstLine": "TÁ NO MEU PALADAR ...",
      "id": "586"
  },
  {
      "name": "BAD DAY",
      "artist": "DANIEL POWTER",
      "firstLine": "WHERE IS THE MOMENT WE NEEDED THE MOST",
      "id": "1463"
  },
  {
      "name": "ELECTRIC YOUTH",
      "artist": "DEBBIE GIBSON",
      "firstLine": "ZAPPIN´ IT TO YA...",
      "id": "1572"
  },
  {
      "name": "LOST IN YOUR EYES",
      "artist": "DEBBIE GIBSON",
      "firstLine": "I GET LOST IN YOUR EYES...",
      "id": "1501"
  },
  {
      "name": "ENJOY THE SILENCE",
      "artist": "DEPECHE MODE",
      "firstLine": "WORDS LIKE VIOLENCE... BREAK THE SILENCE...",
      "id": "1630"
  },
  {
      "name": "STRANGELOVE",
      "artist": "DEPECHE MODE",
      "firstLine": "STRANGELOVE STRANGE HIGHS AND STRANGE LOWS...",
      "id": "1631"
  },
  {
      "name": "LIFE",
      "artist": "DES'REE",
      "firstLine": "I’M AFRAID OF THE DARK...",
      "id": "1503"
  },
  {
      "name": "YOU GOTTA BE",
      "artist": "DES'REE",
      "firstLine": "LISTEN AS YOUR DAY UNFOLDS...",
      "id": "1502"
  },
  {
      "name": "OLHOS CERTOS",
      "artist": "DETONAUTAS",
      "firstLine": "TENTO TE ENCONTRAR TANTO PRA DIZER...",
      "id": "1608"
  },
  {
      "name": "OUTRO LUGAR",
      "artist": "DETONAUTAS",
      "firstLine": "AINDA VOU TE LEVAR PROUTRO LUGAR...",
      "id": "1609"
  },
  {
      "name": "QUANDO O SOL SE FOR",
      "artist": "DETONAUTAS",
      "firstLine": "PENSO NO QUE FAÇO. NO QUE FIZ ...",
      "id": "459"
  },
  {
      "name": "PÉSSIMO NEGóCIO",
      "artist": "DILSINHO",
      "firstLine": "PRECISEI DE MIL FRASES CERTAS PRA TE CONQUISTAR...",
      "id": "1886"
  },
  {
      "name": "REFÉM",
      "artist": "DILSINHO",
      "firstLine": "ACONTECEU... MINHA VIDA ESTAVA NO LUGAR...",
      "id": "1885"
  },
  {
      "name": "BABY, ME ATENDE",
      "artist": "DILSINHO E MATHEUS FERNANDES",
      "firstLine": "BABY ME ATENDE",
      "id": "1779"
  },
  {
      "name": "DO FUNDO DO NOSSO QUINTAL",
      "artist": "DIOGO NOGUEIRA",
      "firstLine": "MAIS UM POUCO E VAI CLAREAR...",
      "id": "1725"
  },
  {
      "name": "EU E VOCÊ SEMPRE",
      "artist": "DIOGO NOGUEIRA",
      "firstLine": "LOGO, LOGO, ASSIM QUE PUDER, VOU TELEFONAR...",
      "id": "1722"
  },
  {
      "name": "PÉ NA AREIA",
      "artist": "DIOGO NOGUEIRA",
      "firstLine": "VAMOS AMOR...VAMOS FUGIR, BORA PRA BEIRA DO MAR..",
      "id": "1059"
  },
  {
      "name": "MONEY FOR NOTHING",
      "artist": "DIRE STRAITS",
      "firstLine": "NOW LOOK AT THEM YO-YO’S THAT’S...",
      "id": "357"
  },
  {
      "name": "THE TIME OF MY LIFE (I’VE HAD)",
      "artist": "DIRTY DANCE / BILL MEDLEY",
      "firstLine": "NOW I’VE HAD THE TIME OF MY LIFE...",
      "id": "1030"
  },
  {
      "name": "ACELEROU",
      "artist": "DJAVAN",
      "firstLine": "ANDO TÃO PERDIDO EM MEUS PENSAMENTOS...",
      "id": "1373"
  },
  {
      "name": "BOA NOITE",
      "artist": "DJAVAN",
      "firstLine": "MEU AR DE DOMINADOR...",
      "id": "1375"
  },
  {
      "name": "SAMURAI",
      "artist": "DJAVAN",
      "firstLine": "AAAAAIII... QUANTO QUERER...",
      "id": "483"
  },
  {
      "name": "SE",
      "artist": "DJAVAN",
      "firstLine": "VOCÊ DISSE QUE NÃO SABE “SE NÃO”...",
      "id": "486"
  },
  {
      "name": "SINA",
      "artist": "DJAVAN",
      "firstLine": "PAI E MÃE, OURO DE MINA...",
      "id": "497"
  },
  {
      "name": "TE DEVORO",
      "artist": "DJAVAN",
      "firstLine": "TEUS SINAIS. ME CONFUNDEM...",
      "id": "520"
  },
  {
      "name": "SAY SO",
      "artist": "DOJA CAT",
      "firstLine": "DAY TO NIGHT TO MORNING...",
      "id": "1114"
  },
  {
      "name": "DE VOLTA PRO MEU ACONCHEGO",
      "artist": "DOMINGUINHOS",
      "firstLine": "ESTOU DE VOLTA PRO MEU ACONCHEGO...",
      "id": "1851"
  },
  {
      "name": "EU SÓ QUERO UM XODÓ",
      "artist": "DOMINGUINHOS",
      "firstLine": "QUE FALTA EU SINTO DE UM BEM...",
      "id": "1404"
  },
  {
      "name": "MANEQUIM",
      "artist": "DOMINÓ",
      "firstLine": "UM SONHO VINDO NA PASSARELA. ..",
      "id": "318"
  },
  {
      "name": "LOOKING AT MY GIRL",
      "artist": "DOUBLE YOU",
      "firstLine": "IT HAPPENED LONG AGO WHEN I DON’T KNOW...",
      "id": "300"
  },
  {
      "name": "AMANTE PROFISSIONAL",
      "artist": "DR. SILVANA",
      "firstLine": "MORENO ALTO, BONITO E SENSUAL...",
      "id": "24"
  },
  {
      "name": "SERÃO EXTRA (EU FUI DAR MAMÃE)",
      "artist": "DR. SILVANA & CIA",
      "firstLine": "TUDO ACONTECEU QUANDO ELA CHEGOU ATRASADA...",
      "id": "1316"
  },
  {
      "name": "BREAK MY HEART",
      "artist": "DUA LIPA",
      "firstLine": "I’VE ALWAYS BEEN THE ONE TO SAY...",
      "id": "1111"
  },
  {
      "name": "DON'T START NOW",
      "artist": "DUA LIPA",
      "firstLine": "IF YOU DON’T WANNA SEE ME...",
      "id": "1110"
  },
  {
      "name": "LEVITATING",
      "artist": "DUA LIPA",
      "firstLine": "IF YOU WANNA RUN AWAY WITH ME...",
      "id": "1164"
  },
  {
      "name": "NEW RULES",
      "artist": "DUA LIPA",
      "firstLine": "TALKIN’ IN MY SLEEP AT NIGHT...",
      "id": "1154"
  },
  {
      "name": "A MATTER OF FEELING",
      "artist": "DURAN DURAN",
      "firstLine": "HOW DOES IT FEEL WHEN EVERYONE SURROUNDS YOU...",
      "id": "1466"
  },
  {
      "name": "NOTORIOUS",
      "artist": "DURAN DURAN",
      "firstLine": "I.. CAN’T READ ABOUT IT...",
      "id": "1467"
  },
  {
      "name": "ORDINARY WORLD",
      "artist": "DURAN DURAN",
      "firstLine": "CAME IN FROM A RAINY THURSDAY...",
      "id": "1465"
  },
  {
      "name": "SAVE TONIGHT",
      "artist": "EAGLE EYE CHERRY",
      "firstLine": "GO ON AND CLOSE THE CURTAINS...",
      "id": "485"
  },
  {
      "name": "HOTEL CALIFORNIA",
      "artist": "EAGLES",
      "firstLine": "ON A DARK DESERT HIGHWAY, COOL WIND...",
      "id": "245"
  },
  {
      "name": "COLOMBINA",
      "artist": "ED MOTTA",
      "firstLine": "SE VOCÊ VOLTAR PRA MIM...",
      "id": "72"
  },
  {
      "name": "MANUEL",
      "artist": "ED MOTTA",
      "firstLine": "MANUEL FOI PRO CÉU...",
      "id": "322"
  },
  {
      "name": "VAMOS DANÇAR",
      "artist": "ED MOTTA",
      "firstLine": "EU NÃO NASCI PRA TRABALHO…",
      "id": "1486"
  },
  {
      "name": "PHOTOGRAPH",
      "artist": "ED SHEERAN",
      "firstLine": "LOVING CAN HURT...",
      "id": "1584"
  },
  {
      "name": "THINKING OUT LOUD",
      "artist": "ED SHEERAN",
      "firstLine": "WHEN YOUR LEGS DON’T WORK LIKE...",
      "id": "1473"
  },
  {
      "name": "CHÃO DE GIZ",
      "artist": "ELBA RAMALHO",
      "firstLine": "EU DESÇO DESSA SOLIDÃO...",
      "id": "1798"
  },
  {
      "name": "DE VOLTA PRO MEU ACONCHEGO",
      "artist": "ELBA RAMALHO",
      "firstLine": "ESTOU DE VOLTA PRO MEU ACONCHEGO...",
      "id": "1850"
  },
  {
      "name": "PAISAGEM NA JANELA",
      "artist": "ELBA RAMALHO",
      "firstLine": "DA JANELA LATERAL DO QUARTO DE DORMIR",
      "id": "1849"
  },
  {
      "name": "UNDERERÊ - DESEJO DE AMAR",
      "artist": "ELIANA DE LIMA",
      "firstLine": "FOI SEM QUERER QUE DERRAMEI TODA EMOÇÃO..",
      "id": "818"
  },
  {
      "name": "COMO NOSSOS PAIS",
      "artist": "ELIS REGINA",
      "firstLine": "",
      "id": "75"
  },
  {
      "name": "O BÊBADO E O EQUILIBRISTA",
      "artist": "ELIS REGINA",
      "firstLine": "CAIA A TARDE FEITO UMVIADUTO...",
      "id": "1028"
  },
  {
      "name": "TALISMÃ",
      "artist": "ELSON DO FORROGODE",
      "firstLine": "SABE. QUANDO TEMPO NÃO TE VEJO...",
      "id": "817"
  },
  {
      "name": "CANDLE IN THE WIND",
      "artist": "ELTON JOHN",
      "firstLine": "GOODBYE ENGLAND’S ROSE...",
      "id": "1246"
  },
  {
      "name": "DON'T GO BREAKING MY HEART",
      "artist": "ELTON JOHN",
      "firstLine": "DON’T GO BREAKING MY HEART... I COULDN’T IF I TRIED...",
      "id": "1243"
  },
  {
      "name": "I GUESS THAT’S WHY THEY CALL IT THE BLUES",
      "artist": "ELTON JOHN",
      "firstLine": "DON’T WISH IT AWAY...",
      "id": "1244"
  },
  {
      "name": "NIKITA",
      "artist": "ELTON JOHN",
      "firstLine": "HEY NIKITA IS IT COLD...",
      "id": "1242"
  },
  {
      "name": "SKYLINE PIGEON",
      "artist": "ELTON JOHN",
      "firstLine": "TURN ME LOOSE FROM YOUR HANDS...",
      "id": "1245"
  },
  {
      "name": "DON’T GO BREAKING MY HEART",
      "artist": "ELTON JOHN / KIKI DEE",
      "firstLine": "DON’T GO BREAKING MY HEART...",
      "id": "1049"
  },
  {
      "name": "BLUE SUEDE SHOES",
      "artist": "ELVIS PRESTLEY",
      "firstLine": "WELL, IT'S ONE FOR THE MONEY, TWO...",
      "id": "50"
  },
  {
      "name": "EU E VOCÊ (ESCANCARANDO)",
      "artist": "ELYMAR SANTOS",
      "firstLine": "TEM CERTAS COISAS QUE SÃO MUITO PERIGOSAS...",
      "id": "768"
  },
  {
      "name": "SAIGON",
      "artist": "EMíLIO SANTIAGO",
      "firstLine": "TANTAS PALAVRAS, MEIAS PALAVRAS...",
      "id": "1834"
  },
  {
      "name": "VERDADE CHINESA",
      "artist": "EMíLIO SANTIAGO",
      "firstLine": "ERA Só ISSO QUE EU QUERIA DA VIDA...",
      "id": "1835"
  },
  {
      "name": "TUDO QUE SE QUER",
      "artist": "EMíLIO SANTIAGO & VERÔNICA SABINO",
      "firstLine": "OLHA NOS MEUS OLHOS, ESQUECE O QUE PASSOU...",
      "id": "1840"
  },
  {
      "name": "ERA UM GAROTO",
      "artist": "ENGENHEIROS DO HAWAI",
      "firstLine": "ERA UM GAROTO QUE COMO EU...",
      "id": "162"
  },
  {
      "name": "LITTLE RESPECT",
      "artist": "ERASURE",
      "firstLine": "I TRY TO DISCOVER. A LITTLE SOMETHING...",
      "id": "293"
  },
  {
      "name": "BRING ME TO LIFE",
      "artist": "EVANESCENCE",
      "firstLine": "HOW CAN YOU SEE INTO MY EYES...",
      "id": "1126"
  },
  {
      "name": "MY IMMORTAL",
      "artist": "EVANESCENSE",
      "firstLine": "I´M SO TRIED OF BEGIN HERE",
      "id": "1574"
  },
  {
      "name": "SEPTEMBER",
      "artist": "EWF",
      "firstLine": "DO YOU REMEMBER THE 21ST NIGHT ...",
      "id": "491"
  },
  {
      "name": "APAIXONEI PELA PESSOA ERRADA",
      "artist": "EXALTASAMBA",
      "firstLine": "EU NÃO TENHO CULPA DE ESTAR TE AMANDO...",
      "id": "328"
  },
  {
      "name": "DESLIGA E VEM",
      "artist": "EXALTASAMBA",
      "firstLine": "POR FAVOR ME DIZ QUEM É VOCÊ...",
      "id": "1673"
  },
  {
      "name": "LIVRE PRA VOAR",
      "artist": "EXALTASAMBA",
      "firstLine": "QUANDO A GENTE SE ENCONTRAR...",
      "id": "1737"
  },
  {
      "name": "SUPRA SUMO DO AMOR",
      "artist": "EXALTASAMBA",
      "firstLine": "PEÇO PERDÃO EU NÃO QUIS...",
      "id": "1698"
  },
  {
      "name": "TCHAU E BENÇA",
      "artist": "EXALTASAMBA",
      "firstLine": "EU BEM QUE TE FALEI POR FAVOR!...",
      "id": "1745"
  },
  {
      "name": "TELEGRAMA",
      "artist": "EXALTASAMBA",
      "firstLine": "AHH QUE SAUDADE DE VOCÊ....",
      "id": "1704"
  },
  {
      "name": "TELEGRAMA",
      "artist": "EXALTASAMBA",
      "firstLine": "AHH QUE SAUDADE DE VOCÊ....",
      "id": "1008"
  },
  {
      "name": "TA VENDO AQUELA LUA",
      "artist": "EXALTASAMBA/TIAGUINHO",
      "firstLine": "TE FILMANDO EU TAVA QUIETO NO MEU CANTO...",
      "id": "1686"
  },
  {
      "name": "GAMEI",
      "artist": "EXALTASSAMBA",
      "firstLine": "QUANDO EU VI, ME AMARREI...",
      "id": "218"
  },
  {
      "name": "SEPARAÇÃO",
      "artist": "EXALTASSAMBA",
      "firstLine": "MELHOR ASSIM... A GENTE JÁ NÃO SE ENTENDIA MUITO BEM...",
      "id": "1768"
  },
  {
      "name": "MORE THAN WORDS",
      "artist": "EXTREME",
      "firstLine": "SAYING I LOVE YOU IS NOT THE WORDS...",
      "id": "359"
  },
  {
      "name": "ALMA GÊMEA",
      "artist": "FÁBIO JUNIOR",
      "firstLine": "POR VOCÊ EU TENHO FEITO ...",
      "id": "611"
  },
  {
      "name": "CAÇA E CAÇADOR",
      "artist": "FÁBIO JUNIOR",
      "firstLine": "VOCÊ PINTOU COMO UM SONHO ...",
      "id": "59"
  },
  {
      "name": "CASINHA BRANCA",
      "artist": "FÁBIO JUNIOR",
      "firstLine": "EU TENHO ANDADO TÃO SOZINHO ULTIMAMENTE...",
      "id": "1854"
  },
  {
      "name": "ENROSCA",
      "artist": "FÁBIO JUNIOR",
      "firstLine": "ENROSCA O MEU PESCOÇO... DÁ UM BEIJO...",
      "id": "156"
  },
  {
      "name": "IMPOSSIVEL ACREDITAR QUE PERDI VOCÊ",
      "artist": "FÁBIO JÚNIOR",
      "firstLine": "NÃO EU NÃO CONSIGO ACREDITAR NO QUE ACONTECEU...",
      "id": "1890"
  },
  {
      "name": "QUANDO GIRA O MUNDO",
      "artist": "FÁBIO JUNIOR",
      "firstLine": "TUDO, TUDO PODE ACONTECER...",
      "id": "458"
  },
  {
      "name": "SÓ VOCÊ",
      "artist": "FÁBIO JUNIOR",
      "firstLine": "DEMOREI MUITO PRA TE ENCONTRAR...",
      "id": "502"
  },
  {
      "name": "ABANDONADA",
      "artist": "FAFÁ DE BELÉM",
      "firstLine": "ABANDONADA POR VOCÊ... TENHO TENTADO TE ESQUECER...",
      "id": "1827"
  },
  {
      "name": "CORAÇÃO DO AGRESTE",
      "artist": "FAFÁ DE BELÉM",
      "firstLine": "REGRESSAR É REUNIR DOIS LADOS...",
      "id": "1810"
  },
  {
      "name": "NUVEM DE LÁGRIMAS",
      "artist": "FAFÁ DE BELÉM",
      "firstLine": "HÁ UMA NUVEM DE LÁGRIMAS SOBRE OS MEUS OLHOS...",
      "id": "1809"
  },
  {
      "name": "BORBULHAS DE AMOR",
      "artist": "FAGNER",
      "firstLine": "TENHO UM CORAÇÃO....",
      "id": "53"
  },
  {
      "name": "DESLIZES",
      "artist": "FAGNER",
      "firstLine": "NÃO SEI PORQUE INSISTO TANTO EM TE QUERER...",
      "id": "810"
  },
  {
      "name": "ESPUMAS AO VENTO",
      "artist": "FAGNER",
      "firstLine": "SEI QUE Aí DENTRO AINDA MORA UM PEDACINHO DE MIM...",
      "id": "1820"
  },
  {
      "name": "EPIC",
      "artist": "FAITH NO MORE",
      "firstLine": "CAN YOU FEEL IT, SEE IT, HEAR IT TODAY?...",
      "id": "1329"
  },
  {
      "name": "XOTE DOS MILAGRES",
      "artist": "FALAMANSA",
      "firstLine": "ESCREVI SEU NOME NA AREIA....",
      "id": "563"
  },
  {
      "name": "UMA HISTORIA DE AMOR",
      "artist": "FANZINE",
      "firstLine": "DEIXA EU LEMBRAR DE VOCÊ...",
      "id": "543"
  },
  {
      "name": "THE WAY",
      "artist": "FASTBALL",
      "firstLine": "THEY MADE UP THEIR MINDS ...",
      "id": "1583"
  },
  {
      "name": "EU NÃO VOU NÃO",
      "artist": "FAT FAMILY",
      "firstLine": "SE VOCÊ DEMORAR EU NÃO VOU TE PROCURAR...",
      "id": "185"
  },
  {
      "name": "JEITO SEXY",
      "artist": "FAT FAMILY",
      "firstLine": "OH BABY DANCE DANCE DANCE...",
      "id": "1906"
  },
  {
      "name": "ATRASADINHA",
      "artist": "FELIPE ARAÚJO & FERRUGEM",
      "firstLine": "BOTEI A MELHOR ROUPA ...",
      "id": "1716"
  },
  {
      "name": "MUSA DO VERÃO",
      "artist": "FELIPE DYLON",
      "firstLine": "VOCÊ, SEREIA TROPICAL VESTIDA DE AREIA E SAL...",
      "id": "365"
  },
  {
      "name": "BIG GIRLS DON´T CRY",
      "artist": "FERGIE",
      "firstLine": "THE SMELL OF YOUR SKIN. LINGERS ON ME NOW...",
      "id": "48"
  },
  {
      "name": "CHORA ME LIGA",
      "artist": "FERNANDO E SOROCABA",
      "firstLine": "NÃO ERA PRA VOCÊ SE APAIXONAR...",
      "id": "1671"
  },
  {
      "name": "ATÉ QUE ENFIM",
      "artist": "FERRUGEM",
      "firstLine": "QUEM MANDOU VOCÊ ROUBAR O BRILHO DO SOL...",
      "id": "999"
  },
  {
      "name": "SINTO A SUA FALTA",
      "artist": "FERRUGEM",
      "firstLine": "E SE EU TE DISSER QUE NÃO ESTOU NEM DORMINDO?...",
      "id": "1819"
  },
  {
      "name": "TRISTINHA",
      "artist": "FERRUGEM",
      "firstLine": "TODO FIM É UM RECOMEÇO PRA UMA NOVA...",
      "id": "853"
  },
  {
      "name": "ATRASADINHA",
      "artist": "FERRUGEM & FELIPE ARAÚJO",
      "firstLine": "BOTEI A MELHOR ROUPA ...",
      "id": "1153"
  },
  {
      "name": "WHAT A FELLING",
      "artist": "FLASHDANCE",
      "firstLine": "FIRST WHEN THERE’S NOTHING...",
      "id": "1713"
  },
  {
      "name": "PAISAGEM NA JANELA",
      "artist": "FLAVIO VENTURINI",
      "firstLine": "DA JANELA LATERAL DO QUARTO DE DORMIR",
      "id": "1848"
  },
  {
      "name": "BEST OF YOU",
      "artist": "FOO FIGHTER",
      "firstLine": "I’VE GOT ANOTHER CONFESSION TO MAKE...",
      "id": "1118"
  },
  {
      "name": "EVERLONG",
      "artist": "FOO FIGHTER",
      "firstLine": "HELLO, I’VE WAITED HERE FOR YOU...",
      "id": "1121"
  },
  {
      "name": "TIMES LIKE THESE",
      "artist": "FOO FIGHTER",
      "firstLine": "I, I’M A ONE WAY MOTORWAY",
      "id": "1119"
  },
  {
      "name": "LEARN TO FLY",
      "artist": "FOO FIGHTERS",
      "firstLine": "RUN AND TELL ALL OF THE ANGELS...",
      "id": "281"
  },
  {
      "name": "I WANT TO KNOW WHAT LOVE IS",
      "artist": "FOREIGNER",
      "firstLine": "I GOTTA TAKE A LITTLE TIME...",
      "id": "1632"
  },
  {
      "name": "HISTÓRIA DE VERÃO",
      "artist": "FORFUN",
      "firstLine": "QUE PENA, QUE NÃO VALEU A PENA...",
      "id": "1535"
  },
  {
      "name": "WHAT'S UP",
      "artist": "FOUR NO BLOND",
      "firstLine": "TWENTY-FIVE YEARS AND MY LIFE IS STILL...",
      "id": "557"
  },
  {
      "name": "O POETA ESTÁ VIVO",
      "artist": "FREJAT",
      "firstLine": "BABY, COMPRA O JORNAL E VEM VER O SOL...",
      "id": "1317"
  },
  {
      "name": "PURO ÊXTASE",
      "artist": "FREJAT",
      "firstLine": "TODA BRINCADEIRA NÃO DEVIA TER HORA...",
      "id": "1618"
  },
  {
      "name": "DANCING DAYS",
      "artist": "FRENÉTICAS",
      "firstLine": "ABRA SUAS ASAS ... SOLTE SUAS FERAS...",
      "id": "82"
  },
  {
      "name": "CONSELHO",
      "artist": "FUNDO DE QUINTAL",
      "firstLine": "DEIXE DE LADO ESSE BAIXO ASTRAL",
      "id": "1792"
  },
  {
      "name": "DO FUNDO DO NOSSO QUINTAL",
      "artist": "FUNDO DE QUINTAL",
      "firstLine": "MAIS UM POUCO E VAI CLAREAR...",
      "id": "1726"
  },
  {
      "name": "HOJE EU VOU PAGODEAR",
      "artist": "FUNDO DE QUINTAL",
      "firstLine": "A LUA ILUMINA O TERREIRO CONVIDANDO...",
      "id": "1731"
  },
  {
      "name": "O SHOW TEM QUE CONTINUAR",
      "artist": "FUNDO DE QUINTAL",
      "firstLine": "TEU CHORO JÁ NÃO TOCA MEU BANDOLIM...",
      "id": "1728"
  },
  {
      "name": "JENIFER",
      "artist": "GABRIEL DINIZ",
      "firstLine": "MAS ELA VEIO ME XINGANDO ENCHENDO O SACO...",
      "id": "260"
  },
  {
      "name": "2345MEIA78",
      "artist": "GABRIEL O PENSADOR",
      "firstLine": "FIM DE SEMANA CHEGANDO. E O COITADO...",
      "id": "4"
  },
  {
      "name": "OUT OF REACH",
      "artist": "GABRIELLE",
      "firstLine": "KNEW THE SIGNS. WASN’T RIGHT...",
      "id": "1814"
  },
  {
      "name": "NADA MAIS",
      "artist": "GAL COSTA",
      "firstLine": "SINTO QUANDO ALGUÉM TE INTERESSA...",
      "id": "1826"
  },
  {
      "name": "SORTE",
      "artist": "GAL COSTA",
      "firstLine": "TUDO DE BOM QUE VOCÊ ME FIZER...",
      "id": "1797"
  },
  {
      "name": "CARELESS WHISPER",
      "artist": "GEORGE MICHAEL",
      "firstLine": "I FELL SO UNSURE...",
      "id": "1566"
  },
  {
      "name": "FAITH",
      "artist": "GEORGE MICHAEL",
      "firstLine": "WELL, I GUESSIT WOULD BE NICE...",
      "id": "1096"
  },
  {
      "name": "FATHER FIGURE",
      "artist": "GEORGE MICHAEL",
      "firstLine": "THAT’S ALL I WANTED...",
      "id": "1248"
  },
  {
      "name": "FREEDOM",
      "artist": "GEORGE MICHAEL",
      "firstLine": "HEAVEN KNOWS I WAS JUST A YOUNG BOY...",
      "id": "1045"
  },
  {
      "name": "WAKE ME UP BEFORE YOU GO GO",
      "artist": "GEORGE MICHAEL",
      "firstLine": "YOU PUT THE BOOM BOOM INTO MY HEART...",
      "id": "1046"
  },
  {
      "name": "A NOVIDADE",
      "artist": "GILBERTO GIL",
      "firstLine": "A NOVIDADE VEIO DAR A PRAIA...",
      "id": "14"
  },
  {
      "name": "NÃO CHORE MAIS",
      "artist": "GILBERTO GIL",
      "firstLine": "BEM QUE EU ME LEMBRO...",
      "id": "379"
  },
  {
      "name": "PALCO",
      "artist": "GILBERTO GIL",
      "firstLine": "SUBO NESSE PALCO, MINHA ALMA CHEIRA A TALCO",
      "id": "1381"
  },
  {
      "name": "CASINHA BRANCA",
      "artist": "GILSON",
      "firstLine": "EU TENHO ANDADO TÃO SOZINHO ULTIMAMENTE...",
      "id": "1852"
  },
  {
      "name": "FOLLOW YOU DOWN",
      "artist": "GIN BLOSSOMS",
      "firstLine": "DID YOU SEE THE SKY...",
      "id": "1439"
  },
  {
      "name": "MENINA SOLTA",
      "artist": "GIULIA BE",
      "firstLine": "ELA ERA LÁ DA BARRA E ELE DE IPANEMA...",
      "id": "1042"
  },
  {
      "name": "THE HEAT IS ON",
      "artist": "GLENN FREY",
      "firstLine": "THE HEAT IS ON, ON THE STREET...",
      "id": "1254"
  },
  {
      "name": "CAN’T TAKE MY EYES OFF OF YOU",
      "artist": "GLORIA GAYNOR",
      "firstLine": "YOU’RE JUST TOO GOOD TO BE TRUE...",
      "id": "1580"
  },
  {
      "name": "I WILL SURVIVE",
      "artist": "GLORIA GAYNOR",
      "firstLine": "AT FIRST I WAS AFRAID, I WAS PETRIFIED...",
      "id": "252"
  },
  {
      "name": "A QUEDA",
      "artist": "GLORIA GROOVE",
      "firstLine": "RESPEITAVEL PÚBLICO... UM SHOW TÃO MALUCO...",
      "id": "1578"
  },
  {
      "name": "A TUA VOZ",
      "artist": "GLORIA GROOVE",
      "firstLine": "A CAMA AMANHECEU VAZIA...",
      "id": "1888"
  },
  {
      "name": "RADAR",
      "artist": "GLORIA GROOVE",
      "firstLine": "OLHANDO NOSSAS FOTOS DO PASSADO...",
      "id": "1887"
  },
  {
      "name": "VERMELHO",
      "artist": "GLORIA GROOVE",
      "firstLine": "PAIXÃO... FAZ UM TMEPO QUE EU QUERO...",
      "id": "1579"
  },
  {
      "name": "CRAZY",
      "artist": "GNARLS BARKLEY",
      "firstLine": "I REMEMBER WHEN, I REMEMBER",
      "id": "1371"
  },
  {
      "name": "EXPLODE CORAÇÃO",
      "artist": "GONZAGUINHA",
      "firstLine": "CHEGA DE TENTAR DISSIMULAR...",
      "id": "1833"
  },
  {
      "name": "O QUE É O QUE É?",
      "artist": "GONZAGUINHA",
      "firstLine": "EU FICO COM A PUREZA DAS RESPOSTAS DAS CRIANÇAS...",
      "id": "1069"
  },
  {
      "name": "SANGRANDO",
      "artist": "GONZAGUINHA",
      "firstLine": "QUANDO EU SOLTAR A MINHA VOZ POR FAVOR ENTENDA...",
      "id": "1877"
  },
  {
      "name": "YOU ARE THE ONE THAT I WANT",
      "artist": "GREASE - J. TRAVOLTA & OLIVIA",
      "firstLine": "I GOT CHILLS. THEY´RE MULTIPLYIN´...",
      "id": "1629"
  },
  {
      "name": "BASCKETCASE",
      "artist": "GREEN DAY",
      "firstLine": "DO YOU HAVE THE TIME TO LISTEN...",
      "id": "44"
  },
  {
      "name": "BOULEVARD OF BROKEN DREAMS",
      "artist": "GREEN DAY",
      "firstLine": "I WALK A LONELY ROAD...",
      "id": "1468"
  },
  {
      "name": "SHE",
      "artist": "GREEN DAY",
      "firstLine": "SHE. SHE SCREAMS IN SILENCE...",
      "id": "494"
  },
  {
      "name": "WAKE ME UP WHEN SEPTEMBER ENDS",
      "artist": "GREEN DAY",
      "firstLine": "SUMMER HAS COME AND PASSED...",
      "id": "1469"
  },
  {
      "name": "WHEN I COME AROUND",
      "artist": "GREEN DAY",
      "firstLine": "I HEARD YOU CRYING LOUD...",
      "id": "558"
  },
  {
      "name": "SHAKE YOU DOWN",
      "artist": "GREGORY ABBOTT",
      "firstLine": "GIRL… I’VE BEEN WATCHING YOU...",
      "id": "1435"
  },
  {
      "name": "AMOR ESTOU SOFRENDO",
      "artist": "GRUPO 100%",
      "firstLine": "AMOR ESTOU SOFRENDO,PASSANDO UM PEDAÇO...",
      "id": "1734"
  },
  {
      "name": "HOJE EU VOU PAGODEAR",
      "artist": "GRUPO 100%",
      "firstLine": "A LUA ILUMINA O TERREIRO CONVIDANDO",
      "id": "1276"
  },
  {
      "name": "A AMIZADE É TUDO",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "UM SENTIMENTO NATURAL QUE ACONTECE COM RAZÃO...",
      "id": "1563"
  },
  {
      "name": "BEIJO DOCE",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "NAMORAR AONDE O SOL SE ESCONDE...",
      "id": "1784"
  },
  {
      "name": "DEIXA ACONTECER NATURALMENTE",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "DEIXA ACONTECER NATURALMENTE, EU NÃO QUERO VER...",
      "id": "1754"
  },
  {
      "name": "DERÊ",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "DERÊ DERÊRERE DERERERERÊ...",
      "id": "1766"
  },
  {
      "name": "DESENCANA",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "NÃO SEI POR QUE QUIS SE ESCONDER...",
      "id": "1752"
  },
  {
      "name": "DUVIDO",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "EU ME DEI TODO PRA VOCÊ...",
      "id": "1758"
  },
  {
      "name": "EU NUNCA AMEI ASSIM",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "MELHOR A GENTE SE ENTENDER...",
      "id": "1787"
  },
  {
      "name": "EU TÔ QUERENDO",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "POR QUE VOCÊ NÃO LARGA DE BOBEIRA...",
      "id": "1748"
  },
  {
      "name": "FATALMENTE",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "PASSEI A VIDA INTEIRA PROCURANDO ALGUÉM COMO VOCÊ...",
      "id": "1743"
  },
  {
      "name": "LIGANDO OS FATOS",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "PODE ATÉ FALAR QUE NADA ACONTECEU...",
      "id": "1780"
  },
  {
      "name": "LIVRE PRA VOAR",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "QUANDO A GENTE SE ENCONTRAR...",
      "id": "1738"
  },
  {
      "name": "PALAVRAS DE AMIGO",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "QUANTAS VEZES EU VOU TER QUE TE FALAR...",
      "id": "1740"
  },
  {
      "name": "PÁRA DE PIRRAÇA",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "PRA TER FELICIDADE PRECISO DE VOCÊ AO LADO MEU...",
      "id": "1782"
  },
  {
      "name": "PELA VIDA INTEIRA",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "QUERO TER VOCÊ CUSTE O QUE CUSTAR...",
      "id": "1760"
  },
  {
      "name": "SEPARAÇÃO",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "MELHOR ASSIM... A GENTE JÁ NÃO SE ENTENDIA MUITO BEM...",
      "id": "1769"
  },
  {
      "name": "SONHO DE AMOR",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "VOCÊ ESTÁ ME TIRANDO O SONO...",
      "id": "1701"
  },
  {
      "name": "TCHAU E BENÇA",
      "artist": "GRUPO MENOS É MAIS",
      "firstLine": "EU BEM QUE TE FALEI POR FAVOR!...",
      "id": "1746"
  },
  {
      "name": "DEIXA ACONTECER NATURALMENTE",
      "artist": "GRUPO REVELAÇÃO",
      "firstLine": "DEIXA ACONTECER NATURALMENTE, EU NÃO QUERO VER...",
      "id": "1755"
  },
  {
      "name": "PRESENTINHO",
      "artist": "GUGA NANDES",
      "firstLine": "EU NÃO O QUE É QUE ESSA MINA TEM...",
      "id": "988"
  },
  {
      "name": "E DAí",
      "artist": "GUILHERME & SANTIAGO",
      "firstLine": "E DAí SE EU QUISER FARREAR...",
      "id": "94"
  },
  {
      "name": "PATIENTE",
      "artist": "GUN´S AND ROSES",
      "firstLine": "SHED A TEAR ‘CAUSE I’M MISSING YOU...",
      "id": "433"
  },
  {
      "name": "SWEET CHILD OF MINE",
      "artist": "GUN´S AND ROSES",
      "firstLine": "SHE’S GOT A SMILE THAT IT SEEMS TO ME...",
      "id": "514"
  },
  {
      "name": "A GENTE FEZ AMOR",
      "artist": "GUSTTAVO LIMA",
      "firstLine": "A GENTE TINHA COMBINADO...",
      "id": "1092"
  },
  {
      "name": "APELIDO CARINHOSO",
      "artist": "GUSTTAVO LIMA",
      "firstLine": "AMOR, NÃO É SEGREDO ENTRE A GENTE...",
      "id": "1093"
  },
  {
      "name": "CRUISIN'",
      "artist": "GWYNETH PALTROW",
      "firstLine": "BABY LET’S CRUISE, AWAY FROM HERE...",
      "id": "81"
  },
  {
      "name": "TOTALMENTE DEMAIS!",
      "artist": "HANOI-HANOI",
      "firstLine": "LINDA COMO UM NENÉM...",
      "id": "1312"
  },
  {
      "name": "ADORE YOU",
      "artist": "HARRY STYLES",
      "firstLine": "WALK IN YOUR RAINBOW PARADISE...",
      "id": "1343"
  },
  {
      "name": "WATERMELON SUGAR",
      "artist": "HARRY STYLES",
      "firstLine": "TASTES LIKE STRAWBERRIES",
      "id": "1062"
  },
  {
      "name": "FLOR E O BEIJA-FLOR",
      "artist": "HENRIQUE E JULIANO",
      "firstLine": "ESSA É UMA VELHA HISTóRIA DE UMA FLOR E UM BEIJA-FLOR...",
      "id": "1875"
  },
  {
      "name": "THE REASON",
      "artist": "HOOBASTANK",
      "firstLine": "I’M NOT A PERFECT PERSON…",
      "id": "1487"
  },
  {
      "name": "THE POWER OF LOVE (DE VOLTA PARA O FUTURO)",
      "artist": "HUEY LEWIS AND THE NEWS",
      "firstLine": "THE POWER OF LOVE IS A CURIOUS THING...",
      "id": "1240"
  },
  {
      "name": "DUVIDO",
      "artist": "IMAGINASSAMBA",
      "firstLine": "EU ME DEI TODO PRA VOCÊ...",
      "id": "1759"
  },
  {
      "name": "PÁRA DE PIRRAÇA",
      "artist": "IMAGINASSAMBA",
      "firstLine": "PRA TER FELICIDADE PRECISO DE VOCÊ AO LADO MEU...",
      "id": "1783"
  },
  {
      "name": "BELIEVER",
      "artist": "IMAGINE DRAGONS",
      "firstLine": "FIRST THINGS FIRST...",
      "id": "1108"
  },
  {
      "name": "RADIOACTIVE",
      "artist": "IMAGINE DRAGONS",
      "firstLine": "I’M WAKING UP TO ASH AND DUST...",
      "id": "1107"
  },
  {
      "name": "ADELAIDE",
      "artist": "INIMIGOS DO REI",
      "firstLine": "ANDAVA NA RUA à NOITE, TOTALMENTE Só...",
      "id": "1325"
  },
  {
      "name": "ENVELHEÇO NA CIDADE",
      "artist": "IRA",
      "firstLine": "MAIS UM ANO QUE SE PASSA...",
      "id": "160"
  },
  {
      "name": "NÚCLEO BASE",
      "artist": "IRA!",
      "firstLine": "MEU AMOR EU SINTO MUITO, MUITO, MUITO...",
      "id": "1506"
  },
  {
      "name": "FLASHDANCE... WHAT A FELLING",
      "artist": "IRENA CARA",
      "firstLine": "FIRST WHEN THERE’S NOTHING...",
      "id": "1714"
  },
  {
      "name": "WHAT A FELLING... FLASHDANCE",
      "artist": "IRENA CARA",
      "firstLine": "FIRST WHEN THERE’S NOTHING...",
      "id": "1145"
  },
  {
      "name": "BATOM DE CEREJA",
      "artist": "ISRAEL & RODOLFFO",
      "firstLine": "PAREI, PENSEI, QUASE TRAVEI...",
      "id": "1549"
  },
  {
      "name": "A FESTA",
      "artist": "IVETE SANGALO",
      "firstLine": "FESTA NO GUETO. PODE VIR, PODE CHEGAR...",
      "id": "10"
  },
  {
      "name": "ABALOU",
      "artist": "IVETE SANGALO",
      "firstLine": "VOCÊ COMIGO É PAR... É MAIS DO QUE SONHAR...",
      "id": "1861"
  },
  {
      "name": "COLEÇÕES",
      "artist": "IVETE SANGALO",
      "firstLine": "SEI QUE VOCÊ GOSTA DE BRINCAR DE AMORES...",
      "id": "918"
  },
  {
      "name": "COMPLETO",
      "artist": "IVETE SANGALO",
      "firstLine": "É TÃO BOM TER ALGUÉM POR PERTO...",
      "id": "613"
  },
  {
      "name": "EVA",
      "artist": "IVETE SANGALO",
      "firstLine": "MEU AMOR, OLHA Só.....",
      "id": "1676"
  },
  {
      "name": "LEVANTOU POEIRA",
      "artist": "IVETE SANGALO",
      "firstLine": "POEIRA,POEIRA,POEIRA,LEVANTOU POEIRA...",
      "id": "285"
  },
  {
      "name": "QUANDO A CHUVA PASSAR",
      "artist": "IVETE SANGALO",
      "firstLine": "PRA QUÊ FALAR SE VOCÊ NÃO QUER ME OUVIR?...",
      "id": "1512"
  },
  {
      "name": "SE EU NÃO TE AMASSE TANTO ASSIM",
      "artist": "IVETE SANGALO",
      "firstLine": "MEU CORAÇÃO. SEM DIREÇÃO...",
      "id": "488"
  },
  {
      "name": "SORTE GRANDE",
      "artist": "IVETE SANGALO",
      "firstLine": "A MINHA SORTE GRANDE...",
      "id": "508"
  },
  {
      "name": "NÃO PRECISA MUDAR",
      "artist": "IVETE SANGALO / SAULO",
      "firstLine": "NÃO PRECISA MUDAR, VOU ME ADAPTAR AO SEU...",
      "id": "1703"
  },
  {
      "name": "DONA DE MIM",
      "artist": "IZA",
      "firstLine": "JÁ ME PERDI TENTANDO ME ENCONTRAR...",
      "id": "829"
  },
  {
      "name": "MEU TALISMÃ",
      "artist": "IZA",
      "firstLine": "EI, VOCÊ AINDA NÃO PERCEBEU...",
      "id": "827"
  },
  {
      "name": "PESADÃO",
      "artist": "IZA / MARCELO FALCÃO",
      "firstLine": "VOU REERGUER O MEU CASTELO...",
      "id": "1624"
  },
  {
      "name": "COLORIR PAPEL",
      "artist": "JAMMIL E UMA NOITES",
      "firstLine": "É UM VENTO QUE PASSA E QUE LEVA...",
      "id": "71"
  },
  {
      "name": "Ê SAUDADE",
      "artist": "JAMMIL E UMA NOITES",
      "firstLine": "QUAL A MELHOR FORMA DE SENTIR CALOR...",
      "id": "98"
  },
  {
      "name": "WE ARE CARNAVAL",
      "artist": "JAMMIL E UMA NOITES",
      "firstLine": "AH, QUE BOM VOCÊ CHEGOU...",
      "id": "1720"
  },
  {
      "name": "SONHOS",
      "artist": "JANE DUBOC",
      "firstLine": "OLHAR VOCÊ DORMINDO E VER SEU SONO TÃO LINDO..",
      "id": "1811"
  },
  {
      "name": "SAVAGE LOVE",
      "artist": "JASON DERULO",
      "firstLine": "IF I WOKE UP WITHOUT YA...",
      "id": "1156"
  },
  {
      "name": "WANT TO WANT ME",
      "artist": "JASON DERULO",
      "firstLine": "IT’S TOO HARD TO SLEEP...",
      "id": "1155"
  },
  {
      "name": "I'M YOURS",
      "artist": "JASON MARZ",
      "firstLine": "WELL YOU DONE DONE ME AND YOU BET...",
      "id": "258"
  },
  {
      "name": "LUCKY",
      "artist": "JASON MRAZ & COLBIE CAILLAT",
      "firstLine": "DO YOU HEAR ME... I'M TALKING TO YOU...",
      "id": "1616"
  },
  {
      "name": "A FALTA QUE A FALTA FAZ",
      "artist": "JAY VAQUER",
      "firstLine": "OUTRA VEZ, AS COISAS FICAM FORA DO LUGAR...",
      "id": "1362"
  },
  {
      "name": "COTIDIANO DE UM CASAL FELIZ",
      "artist": "JAY VAQUER",
      "firstLine": "ALGUÉM SABE DIZER O QUE É NORMAL?...",
      "id": "1360"
  },
  {
      "name": "EU NUNCA AMEI ASSIM",
      "artist": "JEITO MOLEQUE",
      "firstLine": "MELHOR A GENTE SE ENTENDER...",
      "id": "1788"
  },
  {
      "name": "PELA VIDA INTEIRA",
      "artist": "JEITO MOLEQUE",
      "firstLine": "QUERO TER VOCÊ CUSTE O QUE CUSTAR...",
      "id": "1761"
  },
  {
      "name": "A AMIZADE É TUDO",
      "artist": "JEITO MOLEQUE/ THIAGUINHO",
      "firstLine": "UM SENTIMENTO NATURAL QUE ACONTECE COM RAZÃO...",
      "id": "1789"
  },
  {
      "name": "DOMINO",
      "artist": "JESSIE J",
      "firstLine": "I’M FEELING SEXY AND FREE...",
      "id": "1147"
  },
  {
      "name": "PRICE TAG",
      "artist": "JESSIE J",
      "firstLine": "SEEMS LIKE EVERYBODY’S GOT A PRICE",
      "id": "742"
  },
  {
      "name": "ARE YOU GONNA BE MY GIRL",
      "artist": "JET",
      "firstLine": "SO 1,2,3, TAKE MY HAND AND COME WITH ME...",
      "id": "1228"
  },
  {
      "name": "ONE OF US",
      "artist": "JOAN OSBORNE",
      "firstLine": "IF GOD HAD A NAME WHAT WOULD IT BE?...",
      "id": "1033"
  },
  {
      "name": "AMANHÃ TALVEZ",
      "artist": "JOANA",
      "firstLine": "FAZ, QUE DESSE JEITO SÓ VOCÊ SABE FAZER...",
      "id": "1071"
  },
  {
      "name": "UM SONHO A DOIS",
      "artist": "JOANA / ROUPA NOVA",
      "firstLine": "ELA SABE, O JEITO DE AGRADAR...",
      "id": "1707"
  },
  {
      "name": "CHORA ME LIGA",
      "artist": "JOÃO BOSCO E VINíCIUS",
      "firstLine": "NÃO ERA PRA VOCÊ SE APAIXONAR...",
      "id": "67"
  },
  {
      "name": "LÁGRIMAS DE CROCODILO",
      "artist": "JOÃO PENCA",
      "firstLine": "NO MEIO DO DESERTO ENCONTREI A SUA IRMÃ...",
      "id": "270"
  },
  {
      "name": "POP STAR",
      "artist": "JOÃO PENCA E SEUS MIQUINHOS",
      "firstLine": "PEGUEI UMA ONDA MANEIRA...",
      "id": "446"
  },
  {
      "name": "DAUGHTERS",
      "artist": "JOHN MAYER",
      "firstLine": "I KNOW A GIRL SHE PUTS THE COLOR...",
      "id": "1421"
  },
  {
      "name": "ANGEL",
      "artist": "JON SECADA",
      "firstLine": "I, I CAN'T READ THE FUTURE...",
      "id": "1828"
  },
  {
      "name": "AMO NOITE E DIA",
      "artist": "JORGE & MATEUS",
      "firstLine": "TEM UM PEDAÇO DO MEU PEITO BEM COLADO...",
      "id": "1091"
  },
  {
      "name": "PRA SEMPRE COM VOCÊ",
      "artist": "JORGE & MATEUS",
      "firstLine": "A GENTE SE CONHECEU HÁ POUCO TEMPO...",
      "id": "1089"
  },
  {
      "name": "AMOR ESTOU SOFRENDO",
      "artist": "JORGE ARAGÃO",
      "firstLine": "AMOR ESTOU SOFRENDO,PASSANDO UM PEDAÇO...",
      "id": "1299"
  },
  {
      "name": "COISA DE PELE",
      "artist": "JORGE ARAGÃO",
      "firstLine": "PODEMOS SORRIR, NADA MAIS NOS IMPEDE...",
      "id": "1271"
  },
  {
      "name": "DO FUNDO DO NOSSO QUINTAL",
      "artist": "JORGE ARAGÃO",
      "firstLine": "MAIS UM POUCO E VAI CLAREAR...",
      "id": "1272"
  },
  {
      "name": "EU E VOCÊ SEMPRE",
      "artist": "JORGE ARAGÃO",
      "firstLine": "LOGO, LOGO, ASSIM QUE PUDER, VOU TELEFONAR...",
      "id": "1723"
  },
  {
      "name": "PAíS TROPICAL",
      "artist": "JORGE BEM JOR",
      "firstLine": "MORO NUM PAíS TROPICAL...",
      "id": "421"
  },
  {
      "name": "5 REGRAS",
      "artist": "JORGE E MATEUS",
      "firstLine": "SEU BEIJO É COISA DE LOUCO...",
      "id": "1907"
  },
  {
      "name": "FINAL FELIZ",
      "artist": "JORGE VERCILO",
      "firstLine": "CHEGA DE FINGIR. EU NÃO TENHO NADA...",
      "id": "207"
  },
  {
      "name": "QUE NEM MARÉ",
      "artist": "JORGE VERCILO",
      "firstLine": "FAZ UM TEMPÃO. QUE EU NÃO DOU TRÉGUA...",
      "id": "463"
  },
  {
      "name": "AGUENTA CORAÇÃO",
      "artist": "JOSÉ AUGUSTO",
      "firstLine": "CORAÇÃO DIZ PRA MIM PORQUE É QUE...",
      "id": "798"
  },
  {
      "name": "FANTASIAS",
      "artist": "JOSÉ AUGUSTO",
      "firstLine": "ME CHAMA. ME CONTA. ME DIZ COMO VAI SUA VIDA?...",
      "id": "1611"
  },
  {
      "name": "SÁBADO",
      "artist": "JOSÉ AUGUSTO",
      "firstLine": "TODO SÁBADO É ASSIM EU ME LEMBRO...",
      "id": "1806"
  },
  {
      "name": "SONHO POR SONHO",
      "artist": "JOSÉ AUGUSTO",
      "firstLine": "NUNCA IMAGINEI QUE VOCÊ QUISESSE DE MIM...",
      "id": "1610"
  },
  {
      "name": "ALÉM DO HORIZONTE",
      "artist": "JOTA QUEST",
      "firstLine": "ALÉM DO HORIZONTE. EXISTE UM LUGAR...",
      "id": "21"
  },
  {
      "name": "AMOR MAIOR",
      "artist": "JOTA QUEST",
      "firstLine": "EU QUERO FICAR Só. MAS COMIGO Só EU NÃO...",
      "id": "30"
  },
  {
      "name": "DIAS MELHORES",
      "artist": "JOTA QUEST",
      "firstLine": "VIVEMOS ESPERANDO DIAS MELHORES...",
      "id": "1871"
  },
  {
      "name": "DO SEU LADO",
      "artist": "JOTA QUEST",
      "firstLine": "FAZ MUITO TEMPO, MAS EU ME LEMBRO...",
      "id": "89"
  },
  {
      "name": "DORES DO MUNDO",
      "artist": "JOTA QUEST",
      "firstLine": "O TEU OLHAR CAIU NO MEU... A TUA BOCA...",
      "id": "93"
  },
  {
      "name": "ENCONTRAR ALGUÉM",
      "artist": "JOTA QUEST",
      "firstLine": "ENCONTRAR ALGUÉM, QUE ME DÊ AMOR...",
      "id": "152"
  },
  {
      "name": "FÁCIL",
      "artist": "JOTA QUEST",
      "firstLine": "TUDO É TÃO BOM E AZUL...",
      "id": "203"
  },
  {
      "name": "MAIS UMA VEZ",
      "artist": "JOTA QUEST",
      "firstLine": "TE TENHO COM A CERTEZA. DE Q VOCÊ PODE IR...",
      "id": "310"
  },
  {
      "name": "NA MORAL",
      "artist": "JOTA QUEST",
      "firstLine": "VIVENDO DE FOLIA E CAOS...",
      "id": "371"
  },
  {
      "name": "O SOL",
      "artist": "JOTA QUEST",
      "firstLine": "EI, DOR! EU NÃO TE ESCUTO MAIS...",
      "id": "403"
  },
  {
      "name": "O VENTO",
      "artist": "JOTA QUEST",
      "firstLine": "VOE POR TODO MAR, E VOLTE AQUI...",
      "id": "407"
  },
  {
      "name": "PALAVRAS DE UM FUTURO BOM",
      "artist": "JOTA QUEST",
      "firstLine": "ANDA. ENQUANTO O DIA ACORDA A GENTE AMA...",
      "id": "423"
  },
  {
      "name": "SEMPRE ASSIM",
      "artist": "JOTA QUEST",
      "firstLine": "7:15 EU ACORDO...",
      "id": "1358"
  },
  {
      "name": "SÓ HOJE",
      "artist": "JOTA QUEST",
      "firstLine": "HOJE EU PRECISO TE ENCONTRAR...",
      "id": "499"
  },
  {
      "name": "DON’T STOP BELIEVIN’",
      "artist": "JOURNEY",
      "firstLine": "JUST A SMALL TOWN GIRL...",
      "id": "1654"
  },
  {
      "name": "ACORDA PEDRINHO",
      "artist": "JOVEM DIONÍSIO",
      "firstLine": "NÃO SEI MAIS PRA ONDE IR...",
      "id": "1621"
  },
  {
      "name": "SPLISH SPLASH",
      "artist": "JOVEM GUARDA",
      "firstLine": "SPLISH SPLASH! FEZ O BEIJO QUE EU DEI...",
      "id": "510"
  },
  {
      "name": "BABY",
      "artist": "JUSTIN BIEBER",
      "firstLine": "YOU KNOW YOU LOVE ME, I KNOW YOU CARE...",
      "id": "1882"
  },
  {
      "name": "CAN’T STOP THE FEELING",
      "artist": "JUSTIN TIMBERLAKE",
      "firstLine": "I GOT THIS FEELING INSIDE MY BONES...",
      "id": "1460"
  },
  {
      "name": "LOVE NEVER FELT SO GOOD",
      "artist": "JUSTIN TIMBERLAKE",
      "firstLine": "BABY... LOVE NEVER FELT SO GOOD...",
      "id": "1706"
  },
  {
      "name": "SAY SOMETHING",
      "artist": "JUSTIN TIMBERLAKE",
      "firstLine": "EVERYONE KNOWS ALL ABOUT MY DIRECTION...",
      "id": "1452"
  },
  {
      "name": "ALL MY LIFE",
      "artist": "K-CI & JOJO",
      "firstLine": "I WILL NEVER FIND ANOTHER LOVER...",
      "id": "1615"
  },
  {
      "name": "MORANGO DO NORDESTE",
      "artist": "KARAMETADE",
      "firstLine": "ESTAVA TÃO TRISTONHO QUANDO ELA APARECEU",
      "id": "1896"
  },
  {
      "name": "QUALQUER JEITO",
      "artist": "KÁTIA",
      "firstLine": "TODO DIA AO AMANHECER...",
      "id": "1612"
  },
  {
      "name": "ENGRAÇADINHA",
      "artist": "KATINGUELÊ",
      "firstLine": "LINDA DE VIVER, QUE GRACINHA MINHA TENTAÇÃO...",
      "id": "1893"
  },
  {
      "name": "INARAÍ",
      "artist": "KATINGUELÊ",
      "firstLine": "SEU CORPO É O MAR POR ONDE QUERO NAVEGAR...",
      "id": "1167"
  },
  {
      "name": "LUA VAI",
      "artist": "KATINGUELE",
      "firstLine": "LUA VAI.. ILUMINAR OS PENSAMENTOS...",
      "id": "306"
  },
  {
      "name": "MUNDO DOS SONHOS",
      "artist": "KATINGUELÊ",
      "firstLine": "VOCÊ NÃO SABE MAS EU TE PROCURO HÁ MUITOS SONHOS...",
      "id": "1538"
  },
  {
      "name": "NO COMPASSO DO CRIADOR",
      "artist": "KATINGUELÊ",
      "firstLine": "AO TEU LADO EU SOU CRIANÇA",
      "id": "1537"
  },
  {
      "name": "FIREWORK",
      "artist": "KATY PERRY",
      "firstLine": "DO YOU EVER FEEL ... LIKE A PLASTIC BAG",
      "id": "1476"
  },
  {
      "name": "EVERYBODY’S CHANGING",
      "artist": "KEANE",
      "firstLine": "YOU SAY YOU WANDER YOUR OWN LAND...",
      "id": "1328"
  },
  {
      "name": "SOMEWHERE ONLY WE KNOW",
      "artist": "KEANE",
      "firstLine": "I WALKED ACROSS AN EMPTY LAND...",
      "id": "1327"
  },
  {
      "name": "BABA BABY",
      "artist": "KELLY KEY",
      "firstLine": "VOCÊ NÃO ACREDITOU, VOCÊ NEM ME OLHOU",
      "id": "39"
  },
  {
      "name": "CACHORRINHO",
      "artist": "KELLY KEY",
      "firstLine": "SE TEM UMA COISA QUE ME DEIXA PASSADA",
      "id": "60"
  },
  {
      "name": "FOOTLOOSE",
      "artist": "KENNY LOGGINS",
      "firstLine": "BEEN WORKING SO HARD...",
      "id": "614"
  },
  {
      "name": "ALICE NÃO ESCREVA AQUELA CARTA DE AMOR",
      "artist": "KID ABELHA",
      "firstLine": "TANTOS SONHOS MORREM EM POUCAS PALAVRAS...",
      "id": "1309"
  },
  {
      "name": "COMO EU QUERO",
      "artist": "KID ABELHA",
      "firstLine": "DIZ PRA EU FICAR MUDA... FAZ CARA DE MISTÉRIO...",
      "id": "74"
  },
  {
      "name": "FIXAÇÃO",
      "artist": "KID ABELHA",
      "firstLine": "SEU ROSTO NA TV PARECE UM MILAGRE...",
      "id": "211"
  },
  {
      "name": "LÁGRIMAS E CHUVA",
      "artist": "KID ABELHA",
      "firstLine": "EU PERCO O SONO E CHORO...",
      "id": "272"
  },
  {
      "name": "NA RUA, NA CHUVA, NA FAZENDA",
      "artist": "KID ABELHA",
      "firstLine": "NÃO ESTOU DISPOSTO A ESQUECER...",
      "id": "373"
  },
  {
      "name": "PINTURA ÍNTIMA",
      "artist": "KID ABELHA",
      "firstLine": "VEM AMOR QUE A HORA É ESSA...",
      "id": "442"
  },
  {
      "name": "TE AMO PRA SEMPRE",
      "artist": "KID ABELHA",
      "firstLine": "PRÁ CONSERVAR O AMOR...",
      "id": "519"
  },
  {
      "name": "FóRMULA DO AMOR",
      "artist": "KID ABELHA / LEO JAIME",
      "firstLine": "EU TENHO O GESTO EXATO. SEI COMO DEVO ANDAR...",
      "id": "1735"
  },
  {
      "name": "PELA VIDA INTEIRA",
      "artist": "KILOUCURA",
      "firstLine": "QUERO TER VOCÊ CUSTE O QUE CUSTAR",
      "id": "1762"
  },
  {
      "name": "SEX ON FIRE",
      "artist": "KINGS OF LEON",
      "firstLine": "LAY WHERE YOU’RE LAYING, DON’T MAKE...",
      "id": "1257"
  },
  {
      "name": "USE SOMEBODY",
      "artist": "KINGS OF LEON",
      "firstLine": "I’VE BEEN ROAMING AROUND...",
      "id": "1066"
  },
  {
      "name": "FOREVER",
      "artist": "KISS",
      "firstLine": "I GOTTA TELL YOU WHAT I›M FEELING INSIDE...",
      "id": "215"
  },
  {
      "name": "ROCK AND ROLL ALL NIGHT",
      "artist": "KISS",
      "firstLine": "YOU SHOW US EVERYTHING YOU’VE GOT...",
      "id": "477"
  },
  {
      "name": "WE ARE ONE",
      "artist": "KISS",
      "firstLine": "YOU ARE NOT ALONE BUT HOW LONG CAN YOU RUN...",
      "id": "1481"
  },
  {
      "name": "PAIXÃO",
      "artist": "KLEITON E KLEDIR",
      "firstLine": "AMO TUA VOZ E TUA COR...",
      "id": "1844"
  },
  {
      "name": "10 INDIOZINHOS",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "1,2,3 INDIOZINHOS...",
      "id": "1590"
  },
  {
      "name": "A BARATA",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "A BARATA DIZ QUE TEM SETE SAIAS DE FILó...",
      "id": "1599"
  },
  {
      "name": "ALECRIM DOURADO",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "ALECRIM. ALECRIM DOURADO...",
      "id": "1592"
  },
  {
      "name": "BEBÊ TUBARÃO-BABY SHARK",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "BEBÊ TUBARÃO .TCHUTCHURURU..",
      "id": "1607"
  },
  {
      "name": "BORBOLETINHA",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "BORBOLETINHA TÁ NA COZINHA...",
      "id": "1587"
  },
  {
      "name": "CIRANDA CIRANDINHA",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "CIRANDA CIRANDINHA VAMOS TODOS CIRANDAR...",
      "id": "1602"
  },
  {
      "name": "DONA ARANHA",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "A DONA ARANHA SUBIU PELA PAREDE...",
      "id": "1589"
  },
  {
      "name": "FUI MORAR NUMA CASINHA",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "FUI MORAR NUMA CASINHA, NHA...",
      "id": "1605"
  },
  {
      "name": "O SAPO NÃO LAVA O PÉ",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "O SAPO NÃO LAVA O PÉ...",
      "id": "1588"
  },
  {
      "name": "PATINHO COLORIDO",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "O PATINHO AMARELINHO RESOLVEU MUDAR DE COR...",
      "id": "1593"
  },
  {
      "name": "PINTINHO AMARELINHO",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "MEU PINTINHO AMARELINHO CABE AQUI NA MINHA MÃO...",
      "id": "1591"
  },
  {
      "name": "PIUí PIUí PIUí",
      "artist": "KZ_KARAOKIDS",
      "firstLine": "PIUí PIUí PIUí.. COLOCA A MÃO NO MEU OMBRO",
      "id": "1606"
  },
  {
      "name": "COMO É VERDE NA FLORESTA",
      "artist": "KZ_KARAOKIDS - BITA",
      "firstLine": "VENHA VER COMO É VERDE NA FLORESTA...",
      "id": "1598"
  },
  {
      "name": "FAZENDINHA",
      "artist": "KZ_KARAOKIDS - BITA",
      "firstLine": "BOM DIA, O SOL JÁ NASCEU LÁ NA FAZENDINHA...",
      "id": "1595"
  },
  {
      "name": "NO FUNDO DO MAR",
      "artist": "KZ_KARAOKIDS - BITA",
      "firstLine": "COMO É LEGAL LA NO FUNDO DO MAR...",
      "id": "1596"
  },
  {
      "name": "VIAJAR PELO SAFARI",
      "artist": "KZ_KARAOKIDS - BITA",
      "firstLine": "VAMOS VIAJAR, ATÉ ONDE O SOL POSSA NOS GUIAR...",
      "id": "1597"
  },
  {
      "name": "HOMENZINHO TORTO",
      "artist": "KZ_KARAOKIDS - GOSPEL",
      "firstLine": "HAVIA UM HOMENZINHO TORTO...",
      "id": "1594"
  },
  {
      "name": "PEDRO, TIAGO, JOÃO NO BARQUINHO",
      "artist": "KZ_KARAOKIDS - GOSPEL",
      "firstLine": "PEDRO, TIAGO, JOÃO NO BARQUINHO...",
      "id": "1601"
  },
  {
      "name": "REI DAVI",
      "artist": "KZ_KARAOKIDS - GOSPEL",
      "firstLine": "SE O ESPíRITO DE DEUS SE MOVE EM MIM",
      "id": "1600"
  },
  {
      "name": "OUVI DIZER",
      "artist": "KZ_KARAOKIDS - MELIM",
      "firstLine": "AH. SE EU ACORDASSE TODO DIA...",
      "id": "1687"
  },
  {
      "name": "O SOL",
      "artist": "KZ_KARAOKIDS - VITOR KLEY",
      "firstLine": "Ô SOL VE SE NÃO ESQUECE E ME ILUMINA...",
      "id": "1682"
  },
  {
      "name": "ABECEDÁRIO DA XUXA",
      "artist": "KZ_KARAOKIDS - XUXA",
      "firstLine": "A DE AMOR.. B DE BAIXINHO...",
      "id": "1670"
  },
  {
      "name": "ARCO-íRIS",
      "artist": "KZ_KARAOKIDS - XUXA",
      "firstLine": "VOU PINTAR UM ARCO-íRIS DE ENERGIA...",
      "id": "1796"
  },
  {
      "name": "BRINCAR DE ÍNDIO",
      "artist": "KZ_KARAOKIDS - XUXA",
      "firstLine": "VAMOS BRINCAR DE íNDIO...",
      "id": "1795"
  },
  {
      "name": "DOCE MEL",
      "artist": "KZ_KARAOKIDS - XUXA",
      "firstLine": "BOM ESTAR COM VOCÊ...",
      "id": "1690"
  },
  {
      "name": "ILARIÊ",
      "artist": "KZ_KARAOKIDS - XUXA",
      "firstLine": "TÁ NA HORA. TÁ NA HORA...",
      "id": "1677"
  },
  {
      "name": "LUA DE CRISTAL",
      "artist": "KZ_KARAOKIDS - XUXA",
      "firstLine": "TUDO PODE SER. SE QUISER SERÁ...",
      "id": "1679"
  },
  {
      "name": "NEED YOU NOW",
      "artist": "LADY ANTEBELLUM",
      "firstLine": "PICTURE PERFECT MEMORIES...",
      "id": "1498"
  },
  {
      "name": "BAD ROMANCE",
      "artist": "LADY GAGA",
      "firstLine": "OOH-OH-OH! CAUGHT IN A BAD ROMANCE...",
      "id": "1166"
  },
  {
      "name": "POKER FACE",
      "artist": "LADY GAGA",
      "firstLine": "I WANNA HOLD EM' LIKE THEY DO IN TEXAS PLAYS....",
      "id": "1904"
  },
  {
      "name": "SHALLOW",
      "artist": "LADY GAGA",
      "firstLine": "TELL ME SOMETHIN’ GIRL...",
      "id": "587"
  },
  {
      "name": "ME LEVA",
      "artist": "LATINO",
      "firstLine": "MOÇA EU NÃO SEI MAIS O QUE PENSAR...",
      "id": "334"
  },
  {
      "name": "VITRINE",
      "artist": "LATINO",
      "firstLine": "NEM MESMO LÁ NO HAWAí TEM UMA ONDA...",
      "id": "551"
  },
  {
      "name": "LA SOLITUDINE",
      "artist": "LAURA PAUSINI",
      "firstLine": "MARCO SE N’è ANDATO E NON RITORNA PIù...",
      "id": "615"
  },
  {
      "name": "SE FUE",
      "artist": "LAURA PAUSINI",
      "firstLine": "YA NO RESPONDE NI AL TELÉFONO...",
      "id": "1353"
  },
  {
      "name": "KILLING ME SOFTLY WITH HIS SONG",
      "artist": "LAURYN HILL",
      "firstLine": "STRUMMING MY PAIN WITH HIS FINGERS...",
      "id": "1772"
  },
  {
      "name": "CADÊ VOCÊ?",
      "artist": "LEANDRO & LEONARDO",
      "firstLine": "O TEMPO VAI... O TEMPO VEM...",
      "id": "1892"
  },
  {
      "name": "ENTRE TAPAS E BEIJOS",
      "artist": "LEANDRO & LEONARDO",
      "firstLine": "PERGUNTARAM PRA MIM. SE AINDA GOSTO...",
      "id": "158"
  },
  {
      "name": "NÃO APRENDI DIZER ADEUS",
      "artist": "LEANDRO & LEONARDO",
      "firstLine": "NÃO APRENDI DIZER ADEUS...",
      "id": "377"
  },
  {
      "name": "PENSE EM MIM",
      "artist": "LEANDRO & LEONARDO",
      "firstLine": "EM VEZ DE VOCÊ FICAR PENSANDO NELE...",
      "id": "437"
  },
  {
      "name": "ROCK 'N' ROLL",
      "artist": "LED ZEPELIN",
      "firstLine": "IT’S BEEN A LONG TIME SINCE I ROCK...",
      "id": "478"
  },
  {
      "name": "AINDA É CEDO",
      "artist": "LEGIÃO URBANA",
      "firstLine": "UMA MENINA ME ENSINOU QUASE TUDO QUE EU SEI...",
      "id": "1322"
  },
  {
      "name": "DANIEL NA COVA DOS LEÕES",
      "artist": "LEGIÃO URBANA",
      "firstLine": "AQUELE GOSTO AMARGO DO TEU CORPO...",
      "id": "1485"
  },
  {
      "name": "EDUARDO E MÔNICA",
      "artist": "LEGIÃO URBANA",
      "firstLine": "QUEM UM DIA IRÁ DIZER QUE EXISTE RAZÃO...",
      "id": "1326"
  },
  {
      "name": "EU SEI",
      "artist": "LEGIÃO URBANA",
      "firstLine": "SEXO VERBAL NÃO FAZ MEU ESTILO...",
      "id": "187"
  },
  {
      "name": "GERAÇÃO COCA-COLA",
      "artist": "LEGIÃO URBANA",
      "firstLine": "QUANDO NASCEMOS FOMOS PROGRAMADOS...",
      "id": "1484"
  },
  {
      "name": "MENINOS E MENINAS",
      "artist": "LEGIÃO URBANA",
      "firstLine": "QUERO ME ENCONTRAR, MAS NÃO SEI...",
      "id": "338"
  },
  {
      "name": "PAIS E FILHOS",
      "artist": "LEGIÃO URBANA",
      "firstLine": "ESTÁTUAS E COFRES...",
      "id": "419"
  },
  {
      "name": "QUANDO O SOL BATER NA JANELA DO TEU QUARTO",
      "artist": "LEGIÃO URBANA",
      "firstLine": "QUANDO O SOL BATER NA JANELA DO TEU QUARTO...",
      "id": "1837"
  },
  {
      "name": "QUASE SEM QUERER",
      "artist": "LEGIÃO URBANA",
      "firstLine": "TENHO ANDADO DISTRAíDO...",
      "id": "461"
  },
  {
      "name": "QUE PAÍS É ESSE",
      "artist": "LEGIÃO URBANA",
      "firstLine": "NAS FAVELAS, NO SENADO...",
      "id": "464"
  },
  {
      "name": "SERÁ",
      "artist": "LEGIÃO URBANA",
      "firstLine": "TIRE SUAS MÃOS DE MIM...",
      "id": "492"
  },
  {
      "name": "SETE CIDADES",
      "artist": "LEGIÃO URBANA",
      "firstLine": "JÁ ME ACOSTUMEI COM A TUA VOZ…",
      "id": "1150"
  },
  {
      "name": "TEMPO PERDIDO",
      "artist": "LEGIÃO URBANA",
      "firstLine": "TODOS OS DIAS QUANDO ACORDO...",
      "id": "523"
  },
  {
      "name": "HOJE EU QUERO SAIR SÓ",
      "artist": "LENINE",
      "firstLine": "SE VOCÊ QUER ME SEGUIR, NÃO É SEGURO...",
      "id": "1065"
  },
  {
      "name": "FLY AWAY",
      "artist": "LENNY KRAVITZ",
      "firstLine": "I WISH THAT I COULD FLY...",
      "id": "1157"
  },
  {
      "name": "CONQUISTADOR BARATO",
      "artist": "LEO JAIME",
      "firstLine": "EU MANDO OS MESMOS VERSOS PARA UM BANDO DE GAROTAS...",
      "id": "1319"
  },
  {
      "name": "SETE VAMPIRAS",
      "artist": "LEO JAIME",
      "firstLine": "EU NÃO DESCANSO NEM DURANTE O SONO...",
      "id": "493"
  },
  {
      "name": "FORMULA DO AMOR",
      "artist": "LEO JAIME / KID ABELHA",
      "firstLine": "EU TENHO O GESTO EXATO. SEI COMO DEVO ANDAR...",
      "id": "1315"
  },
  {
      "name": "ZONA DE PERIGO",
      "artist": "LÉO SANTANA",
      "firstLine": "SENSACIONAL O JEITO QUE ELA FAZ COMIGO...",
      "id": "1878"
  },
  {
      "name": "GAROTOS",
      "artist": "LEONI",
      "firstLine": "SEUS OLHOS E SEUS OLHARES...",
      "id": "225"
  },
  {
      "name": "SÓ PRO MEU PRAZER",
      "artist": "LEONI",
      "firstLine": "NÃO FALA NADA. DEIXA TUDO ASSIM...",
      "id": "501"
  },
  {
      "name": "IN THE END",
      "artist": "LINKIN PARK",
      "firstLine": "ONE THING, I DON’T KNOW WHY...",
      "id": "588"
  },
  {
      "name": "NUMB",
      "artist": "LINKIN PARK",
      "firstLine": "I’M TIRED OF BEING WHAT YOU WANT ME TO BE...",
      "id": "1032"
  },
  {
      "name": "ENDLESS LOVE",
      "artist": "LIONEL RICHIE",
      "firstLine": "MY LOVE, THERE’S ONLY YOU IN MY LIFE...",
      "id": "1643"
  },
  {
      "name": "HEAVEN",
      "artist": "LIVE",
      "firstLine": "YOU DON’T NEED NO FRIENDS...",
      "id": "1134"
  },
  {
      "name": "PAIN LIES ON THE RIVERSIDE",
      "artist": "LIVE",
      "firstLine": "I HAVE NEVER TAKEN LIFE...",
      "id": "417"
  },
  {
      "name": "PAISAGEM NA JANELA",
      "artist": "LÔ BORGES",
      "firstLine": "DA JANELA LATERAL DO QUARTO DE DORMIR",
      "id": "1846"
  },
  {
      "name": "CORAÇÕES PSICODÉLICOS",
      "artist": "LOBÃO",
      "firstLine": "AINDA ME LEMBRO DAQUELE BEIJO...",
      "id": "79"
  },
  {
      "name": "ME CHAMA",
      "artist": "LOBÃO",
      "firstLine": "CHOVE LÁ FORA E AQUI FAZ TANTO FRIO...",
      "id": "330"
  },
  {
      "name": "RADIO BLA",
      "artist": "LOBÃO",
      "firstLine": "ELA ADORA ME FAZER DE OTÁRIO...",
      "id": "471"
  },
  {
      "name": "I'D LOVE YOU TO WANT ME",
      "artist": "LOBO",
      "firstLine": "WHEN I SAW YOU STANDING THERE...",
      "id": "1479"
  },
  {
      "name": "ANA JÚLIA",
      "artist": "LOS HERMANOS",
      "firstLine": "QUEM TE VÊ PASSAR ASSIM POR MIM...",
      "id": "31"
  },
  {
      "name": "LA BAMBA",
      "artist": "LOS LOBOS",
      "firstLine": "PARA BAILAR LA BAMBA...",
      "id": "266"
  },
  {
      "name": "CARLA",
      "artist": "LS JACK",
      "firstLine": "EU CHEGUEI, A DEIXAR, VESTíGIOS PRA VOCÊ...",
      "id": "63"
  },
  {
      "name": "SEM RADAR",
      "artist": "LS JACK",
      "firstLine": "É Só ME RECOMPOR. MAS EU NÃO SEI...",
      "id": "490"
  },
  {
      "name": "UMA CARTA",
      "artist": "LS JACK",
      "firstLine": "COLOQUEI UMA CARTA NUMA VELHA GARRAFA...",
      "id": "1356"
  },
  {
      "name": "VOCÊ CHEGOU",
      "artist": "LS JACK",
      "firstLine": "LEMBRA ENTÃO DAQUELA VEZ QUE TE VI...",
      "id": "554"
  },
  {
      "name": "METEORO",
      "artist": "LUAN SANTANA",
      "firstLine": "TE DEI O SOL, TE DEI O MAR...",
      "id": "342"
  },
  {
      "name": "ASSIM QUE SE FAZ",
      "artist": "LUCIANA MELO",
      "firstLine": "VOCÊ VIVE INVENTANDO MANEIRA",
      "id": "37"
  },
  {
      "name": "CHEGUEI",
      "artist": "LUDMILLA",
      "firstLine": "CHEGUEI CHEGANDO BAGUNÇANDO A ZORRA TODA..",
      "id": "616"
  },
  {
      "name": "HOJE",
      "artist": "LUDMILLA",
      "firstLine": "HOJE EU TENHO UMA PROPOSTA...",
      "id": "617"
  },
  {
      "name": "DESPACITO",
      "artist": "LUIS FONSI",
      "firstLine": "Sí, SABES QUE YA LLEVO UN RATO MIRÁNDOTE...",
      "id": "1646"
  },
  {
      "name": "ASA BRANCA",
      "artist": "LUIZ GONZAGA",
      "firstLine": "QUANDO OLHEI A TERRA ARDENDO...",
      "id": "1650"
  },
  {
      "name": "O XOTE DAS MENINAS",
      "artist": "LUIZ GONZAGA",
      "firstLine": "MANDACARU QUANDO FLORA NA SECA...",
      "id": "409"
  },
  {
      "name": "TO NEM AÍ",
      "artist": "LUKA",
      "firstLine": "DE MÃOS ATADAS, DE PÉS DESCALÇOS...",
      "id": "530"
  },
  {
      "name": "A CURA",
      "artist": "LULU SANTOS",
      "firstLine": "EXISTIRÁ, EM TODO PORTO TREMULARÁ...",
      "id": "1300"
  },
  {
      "name": "ADIVINHA O QUE",
      "artist": "LULU SANTOS",
      "firstLine": "AINDA LEMBRO AQUELA NOITE. Só PORQUE...",
      "id": "18"
  },
  {
      "name": "ASSIM CAMINHA A HUMANINDADE",
      "artist": "LULU SANTOS",
      "firstLine": "AINDA VAI LEVAR UM TEMPO",
      "id": "36"
  },
  {
      "name": "CERTAS COISAS",
      "artist": "LULU SANTOS",
      "firstLine": "NÃO EXISTIRIA SOM SE NÃO HOUVESSE O SILÊNCIO...",
      "id": "1647"
  },
  {
      "name": "COMO UMA ONDA",
      "artist": "LULU SANTOS",
      "firstLine": "NADA DO QUE FOI SERÁ ... DE NOVO DO JEITO,,,",
      "id": "76"
  },
  {
      "name": "DE REPENTE CALIFÓRNIA",
      "artist": "LULU SANTOS",
      "firstLine": "GAROTA EU VOU PRÁ CALIFóRNIA... VIVER A VIDA,,,",
      "id": "83"
  },
  {
      "name": "TÃO BEM",
      "artist": "LULU SANTOS",
      "firstLine": "ELA ME ENCONTROU. EU TAVA POR Aí...",
      "id": "516"
  },
  {
      "name": "TEMPOS MODERNOS",
      "artist": "LULU SANTOS",
      "firstLine": "EU VEJO A VIDA MELHOR NO FUTURO...",
      "id": "524"
  },
  {
      "name": "TODA FORMA DE AMOR",
      "artist": "LULU SANTOS",
      "firstLine": "EU NÃO PEDI PRA NASCER...",
      "id": "531"
  },
  {
      "name": "TUDO AZUL",
      "artist": "LULU SANTOS",
      "firstLine": "TUDO AZUL. TODO MUNDO NU...",
      "id": "536"
  },
  {
      "name": "TUDO BEM",
      "artist": "LULU SANTOS",
      "firstLine": "JÁ NÃO TENHO DEDOS PRA CONTAR...",
      "id": "537"
  },
  {
      "name": "ÚLTIMO ROMÂNTICO",
      "artist": "LULU SANTOS",
      "firstLine": "FALTAVA ABANDONAR A VELHA ESCOLA...",
      "id": "540"
  },
  {
      "name": "UM CERTO ALGUÉM",
      "artist": "LULU SANTOS",
      "firstLine": "QUIS EVITAR TEUS OLHOS...",
      "id": "541"
  },
  {
      "name": "BODERLINE",
      "artist": "MADONNA",
      "firstLine": "SOMETHING IN THE WAY YOU LOVE ...",
      "id": "51"
  },
  {
      "name": "LIKE A PRAYER",
      "artist": "MADONNA",
      "firstLine": "LIFE IS A MYSTERY...",
      "id": "1573"
  },
  {
      "name": "LIKE A VIRGIN",
      "artist": "MADONNA",
      "firstLine": "I MADE IT THROUGH THE WILDERNESS...",
      "id": "289"
  },
  {
      "name": "MATERIAL GIRL",
      "artist": "MADONNA",
      "firstLine": "SOME BOYS KISS ME, SOME BOYS...",
      "id": "326"
  },
  {
      "name": "PAPA DONT PREACH",
      "artist": "MADONNA",
      "firstLine": "PAPA I KNOW YOU’RE GOING TO BE UPSET...",
      "id": "427"
  },
  {
      "name": "RUDE",
      "artist": "MAGIC!",
      "firstLine": "SATURDAY MORNING JUMPED OUT OF BED...",
      "id": "618"
  },
  {
      "name": "10%.",
      "artist": "MAí­ARA E MARAISA",
      "firstLine": "TO ESCORADA NA MESA,CONFESSO QUASE CAí...",
      "id": "2"
  },
  {
      "name": "MEDO BOBO",
      "artist": "MAIARA E MARAISA",
      "firstLine": "AH, ESSE TOM DE VOZ EU RECONHEÇO...",
      "id": "1454"
  },
  {
      "name": "CABEÇA DE BAGRE",
      "artist": "MAMONAS ASSASSINAS",
      "firstLine": "LOUCURA, INSENSATEZ, ESTADO INEVITÁVEL...",
      "id": "969"
  },
  {
      "name": "CHOPIS CENTIS",
      "artist": "MAMONAS ASSASSINAS",
      "firstLine": "EU Dí UM BEIJO NELA. ...",
      "id": "66"
  },
  {
      "name": "LÁ VEM O ALEMÃO",
      "artist": "MAMONAS ASSASSINAS",
      "firstLine": "Só DE PENSAR QUE NóS DOIS ÉRAMOS DOIS...",
      "id": "268"
  },
  {
      "name": "PELADOS EM SANTOS",
      "artist": "MAMONAS ASSASSINAS",
      "firstLine": "MINA, SEUS CABELO É DA HORA...",
      "id": "435"
  },
  {
      "name": "ROBOCOP GAY",
      "artist": "MAMONAS ASSASSINAS",
      "firstLine": "UM TANTO QUANTO MÁSCULO...",
      "id": "476"
  },
  {
      "name": "VIRA-VIRA",
      "artist": "MAMONAS ASSASSINAS",
      "firstLine": "FUI CONVIDADO PRA UMA TAL DE SURUBA...",
      "id": "550"
  },
  {
      "name": "CORAZóN ESPINADO",
      "artist": "MANÁ",
      "firstLine": "ESA MUJER ME ESTÁ MATANDO",
      "id": "1471"
  },
  {
      "name": "FELICIDADE",
      "artist": "MARCELO JENECI",
      "firstLine": "HAVERÁ UM DIA EM QUE VOCÊ NÃO HAVERÁ DE SER FELIZ...",
      "id": "1510"
  },
  {
      "name": "IMPOSSIVEL ACREDITAR QUE PERDI VOCÊ",
      "artist": "MARCIO GREYK",
      "firstLine": "NÃO EU NÃO CONSIGO ACREDITAR NO QUE ACONTECEU...",
      "id": "1889"
  },
  {
      "name": "UM POR CENTO",
      "artist": "MARCOS E BELUTTI",
      "firstLine": "EU ABRA A PORTA E PUXO A CADEIRA DO JANTAR...",
      "id": "542"
  },
  {
      "name": "RELUZ",
      "artist": "MARCOS SABINO",
      "firstLine": "BRILHA NO CÉU DE NOVO UMA ESTRELA AH AH...",
      "id": "1064"
  },
  {
      "name": "NÃO, VOU NÃO (PASSA LÁ EM CASA)",
      "artist": "MARI FERNANDEZ",
      "firstLine": "OLHA QUEM TÁ ME MANDANDO MENSAGEM...",
      "id": "1363"
  },
  {
      "name": "BRINCAR DE VIVER",
      "artist": "MARIA BETHâNIA",
      "firstLine": "QUEM ME CHAMOU QUEM VAI QUERER VOLTAR....",
      "id": "1805"
  },
  {
      "name": "CASINHA BRANCA",
      "artist": "MARIA BETHâNIA",
      "firstLine": "EU TENHO ANDADO TÃO SOZINHO ULTIMAMENTE...",
      "id": "1855"
  },
  {
      "name": "EXPLODE CORAÇÃO",
      "artist": "MARIA BETHâNIA",
      "firstLine": "CHEGA DE TENTAR DISSIMULAR...",
      "id": "1832"
  },
  {
      "name": "ALWAYS BE MY BABY",
      "artist": "MARIAH CAREY",
      "firstLine": "WE WERE AS ONE BABE",
      "id": "1140"
  },
  {
      "name": "DREAMLOVER",
      "artist": "MARIAH CAREY",
      "firstLine": "I NEED A LOVER TO GIVE ME...",
      "id": "1141"
  },
  {
      "name": "HERO",
      "artist": "MARIAH CAREY",
      "firstLine": "THERE’S A HERO, IF YOU LOOK INSIDE YOUR HEART...",
      "id": "1139"
  },
  {
      "name": "I WANT TO KNOW WHAT LOVE IS",
      "artist": "MARIAH CAREY",
      "firstLine": "I GOTTA TAKE A LITTLE TIME...",
      "id": "1794"
  },
  {
      "name": "TOUCH MY BODY",
      "artist": "MARIAH CAREY",
      "firstLine": "I KNOW THAT YOU BEEN WAITIN...",
      "id": "1138"
  },
  {
      "name": "WE BELONG TOGHETER",
      "artist": "MARIAH CAREY",
      "firstLine": "I DIDN’T MEAN IT WHEN I SAID...",
      "id": "1137"
  },
  {
      "name": "APAIXONADINHA",
      "artist": "MARÍLIA MENDONÇA",
      "firstLine": "SABE PORQUE FICO MANDANDO MENSAGEM...",
      "id": "837"
  },
  {
      "name": "BEBI LIGUEI",
      "artist": "MARÍLIA MENDONÇA",
      "firstLine": "ACORDEI MAIS UMA VEZ EMBRIAGADO...",
      "id": "856"
  },
  {
      "name": "EU SEI DE COR",
      "artist": "MARÍLIA MENDONÇA",
      "firstLine": "É.. JÁ TÁ FICANDO CHATO NÉ?...",
      "id": "994"
  },
  {
      "name": "FLOR E O BEIJA-FLOR",
      "artist": "MARíLIA MENDONÇA",
      "firstLine": "ESSA É UMA VELHA HISTóRIA DE UMA FLOR E UM BEIJA-FLOR...",
      "id": "1876"
  },
  {
      "name": "GRAVETO",
      "artist": "MARÍLIA MENDONÇA",
      "firstLine": "VOU SER SINCERO COM VOCÊ...",
      "id": "1076"
  },
  {
      "name": "INFIEL",
      "artist": "MARÍLIA MENDONÇA",
      "firstLine": "ISSO NÃO É UMA DISPUTA EU NÃO QUERO TE PROVOCAR...",
      "id": "1812"
  },
  {
      "name": "SUPERA",
      "artist": "MARÍLIA MENDONÇA",
      "firstLine": "TÁ DE NOVO COM ESSA PESSOA?...",
      "id": "857"
  },
  {
      "name": "A FRANCESA",
      "artist": "MARINA",
      "firstLine": "MEU AMOR SE VOCÊ FOR EMBORA...",
      "id": "11"
  },
  {
      "name": "UMA NOITE E MEIA",
      "artist": "MARINA",
      "firstLine": "VEM CHEGANDO O VERÃO...",
      "id": "544"
  },
  {
      "name": "MARINA ELALI",
      "artist": "MARINA ELALI",
      "firstLine": "MY SHATTERED DREAMS AND BROKEN HEART...",
      "id": "1813"
  },
  {
      "name": "FULLGÁS",
      "artist": "MARINA LIMA",
      "firstLine": "MEU MUNDO VOCÊ É QUEM FAZ. MÚSICA, ...",
      "id": "217"
  },
  {
      "name": "NADA POR MIM",
      "artist": "MARINA LIMA",
      "firstLine": "VOCÊ ME TEM FÁCIL DEMAIS E NÃO PARECE CAPAZ...",
      "id": "1346"
  },
  {
      "name": "A ESTRADA",
      "artist": "MARISA MONTE",
      "firstLine": "ELA VAI VOLTAR, VAI CHEGAR...",
      "id": "8"
  },
  {
      "name": "AINDA LEMBRO",
      "artist": "MARISA MONTE",
      "firstLine": "INDA LEMBRO O QUE PASSOU...",
      "id": "20"
  },
  {
      "name": "AMOR I LOVE YOU",
      "artist": "MARISA MONTE",
      "firstLine": "DEIXA EU DIZER QUE TE AMO. ..",
      "id": "29"
  },
  {
      "name": "BEM QUE SE QUIS",
      "artist": "MARISA MONTE",
      "firstLine": "BEM QUE SE QUIS, DEPOIS DE TUDO AINDA SER...",
      "id": "45"
  },
  {
      "name": "NÃO É FÁCIL",
      "artist": "MARISA MONTE",
      "firstLine": "NÃO É FÁCIL, NÃO PENSAR EM VOCÊ...",
      "id": "381"
  },
  {
      "name": "NÃO VÁ EMBORA",
      "artist": "MARISA MONTE",
      "firstLine": "E NO MEIO DE TANTA GENTE EU ENCONTREI VOCÊ...",
      "id": "1843"
  },
  {
      "name": "VILAREJO",
      "artist": "MARISA MONTE",
      "firstLine": "HÁ UM VILAREJO ALI...",
      "id": "1131"
  },
  {
      "name": "SEMPRE SERÁ",
      "artist": "MARJORIE ESTIANO",
      "firstLine": "QUANDO A LUA TENTAR ME ENCONTRAR...",
      "id": "1531"
  },
  {
      "name": "GIRLS LIKE YOU",
      "artist": "MAROON 5",
      "firstLine": "SPENT 24 HOURS, I NEED MORE HOURS...",
      "id": "1518"
  },
  {
      "name": "MEMORIES",
      "artist": "MAROON 5",
      "firstLine": "HERE’S TO THE ONES THAT WE GOT",
      "id": "1860"
  },
  {
      "name": "SHE WILL BE LOVED",
      "artist": "MAROON 5",
      "firstLine": "BEAUTY QUEEN OF ONLY EIGHTEEN...",
      "id": "1457"
  },
  {
      "name": "WHATS LOVERS DO",
      "artist": "MAROON 5",
      "firstLine": "SAY SAY SAY, HEY HEY NOW BABY...",
      "id": "1148"
  },
  {
      "name": "THIS LOVE",
      "artist": "MAROON FIVE",
      "firstLine": "I WAS SO HIGH I DID NOT RECOGNIZE...",
      "id": "527"
  },
  {
      "name": "MULHERES",
      "artist": "MARTINHO DA VILA",
      "firstLine": "JÁ TIVE MULHERES DE TODAS AS CORES...",
      "id": "1500"
  },
  {
      "name": "3 AM",
      "artist": "MATCHBOX TWENTY",
      "firstLine": "SHE SAID IT’S COLD OUTSIDE",
      "id": "1519"
  },
  {
      "name": "PUSH",
      "artist": "MATCHBOX TWENTY",
      "firstLine": "SHE SAID I DON’T KNOW IF I’VE EVER BEEN...",
      "id": "1260"
  },
  {
      "name": "QUE SORTE A NOSSA",
      "artist": "MATHEUS E KAUAN",
      "firstLine": "DIZ QUE PENSA TANTO EM MIM...",
      "id": "1859"
  },
  {
      "name": "BABY, ME ATENDE",
      "artist": "MATHEUS FERNANDES E DILSINHO",
      "firstLine": "ABANDONADO DENTRO DE UM APARTAMENTO",
      "id": "1543"
  },
  {
      "name": "BEM QUERER",
      "artist": "MAURICIO MANIERI",
      "firstLine": "UH, UH, UH, BABY ONTEM TIVE UM SONHO",
      "id": "46"
  },
  {
      "name": "RAP DA FELICIDADE",
      "artist": "MC CIDINHO E DOCA",
      "firstLine": "EU Só QUERO É SER FELIZ ANDAR TRANQüILAMENTE..",
      "id": "767"
  },
  {
      "name": "SE ELA DANÇA EU DANÇO",
      "artist": "MC LEOZINHO",
      "firstLine": "SE ELA DANÇA EU DANÇO. FALEI COM DJ...",
      "id": "487"
  },
  {
      "name": "Só ZOEIRA",
      "artist": "MC LEOZINHO",
      "firstLine": "FALTA Só VOCÊ NESSA FESTA...",
      "id": "503"
  },
  {
      "name": "TÔ TRANQUILÃO",
      "artist": "MC LEOZINHO",
      "firstLine": "QUE BATIDA É ESSA QUE NA BALADA...",
      "id": "1173"
  },
  {
      "name": "GAROTA NOTA 100",
      "artist": "MC MARCINHO",
      "firstLine": "HOJE EU VIM PARA PODER FALAR...",
      "id": "759"
  },
  {
      "name": "GLAMOROUSA",
      "artist": "MC MARCINHO",
      "firstLine": "GLAMUROSA! RAINHA DO FUNK...",
      "id": "231"
  },
  {
      "name": "TÔ TRANQUILÃO",
      "artist": "MC SAPÃO",
      "firstLine": "QUE BATIDA É ESSA QUE NA BALADA...",
      "id": "1717"
  },
  {
      "name": "GELO",
      "artist": "MELIM",
      "firstLine": "NÃO SOU DE ME APAIXONAR DE PRIMEIRA...",
      "id": "962"
  },
  {
      "name": "OUVI DIZER",
      "artist": "MELIM",
      "firstLine": "AH SE EU ACORDASSE TODO DIA...",
      "id": "619"
  },
  {
      "name": "EVERYTHING I NEED",
      "artist": "MEN AT WORK",
      "firstLine": "MOVING UP AND DOWN AND FROM SIDE TO SIDE...",
      "id": "1252"
  },
  {
      "name": "OVERKILL",
      "artist": "MEN AT WORK",
      "firstLine": "I CAN’T GET TO SLEEP...",
      "id": "1250"
  },
  {
      "name": "WHO CAN IT BE NOW?",
      "artist": "MEN AT WORK",
      "firstLine": "WHO CAN IT BE KNOCKING AT MY DOOR?...",
      "id": "1251"
  },
  {
      "name": "A AMIZADE É TUDO",
      "artist": "MENOS É MAIS",
      "firstLine": "UM SENTIMENTO NATURAL QUE ACONTECE COM RAZÃO...",
      "id": "1790"
  },
  {
      "name": "BEIJO DOCE",
      "artist": "MENOS É MAIS",
      "firstLine": "NAMORAR AONDE O SOL SE ESCONDE...",
      "id": "1785"
  },
  {
      "name": "DEIXA ACONTECER NATURALMENTE",
      "artist": "MENOS É MAIS",
      "firstLine": "DEIXA ACONTECER NATURALMENTE, EU NÃO QUERO VER...",
      "id": "1756"
  },
  {
      "name": "DERÊ",
      "artist": "MENOS É MAIS",
      "firstLine": "DERÊ DERÊRERE DERERERERÊ...",
      "id": "1767"
  },
  {
      "name": "DESENCANA",
      "artist": "MENOS É MAIS",
      "firstLine": "NÃO SEI POR QUE QUIS SE ESCONDER...",
      "id": "1753"
  },
  {
      "name": "DUVIDO",
      "artist": "MENOS É MAIS",
      "firstLine": "EU ME DEI TODO PRA VOCÊ...",
      "id": "1408"
  },
  {
      "name": "EU NUNCA AMEI ASSIM",
      "artist": "MENOS É MAIS",
      "firstLine": "MELHOR A GENTE SE ENTENDER...",
      "id": "1560"
  },
  {
      "name": "EU TÔ QUERENDO",
      "artist": "MENOS É MAIS",
      "firstLine": "POR QUE VOCÊ NÃO LARGA DE BOBEIRA...",
      "id": "1749"
  },
  {
      "name": "FATALMENTE",
      "artist": "MENOS É MAIS",
      "firstLine": "PASSEI A VIDA INTEIRA PROCURANDO ALGUÉM COMO VOCÊ...",
      "id": "1744"
  },
  {
      "name": "LIGANDO OS FATOS",
      "artist": "MENOS É MAIS",
      "firstLine": "PODE ATÉ FALAR QUE NADA ACONTECEU...",
      "id": "1781"
  },
  {
      "name": "LIVRE PRA VOAR",
      "artist": "MENOS É MAIS",
      "firstLine": "QUANDO A GENTE SE ENCONTRAR...",
      "id": "1739"
  },
  {
      "name": "PALAVRAS DE AMIGO",
      "artist": "MENOS É MAIS",
      "firstLine": "QUANTAS VEZES EU VOU TER QUE TE FALAR...",
      "id": "1741"
  },
  {
      "name": "PÁRA DE PIRRAÇA",
      "artist": "MENOS É MAIS",
      "firstLine": "PRA TER FELICIDADE PRECISO DE VOCÊ AO LADO MEU...",
      "id": "1555"
  },
  {
      "name": "PELA VIDA INTEIRA",
      "artist": "MENOS É MAIS",
      "firstLine": "QUERO TER VOCÊ CUSTE O QUE CUSTAR...",
      "id": "1763"
  },
  {
      "name": "SEPARAÇÃO",
      "artist": "MENOS É MAIS",
      "firstLine": "MELHOR ASSIM... A GENTE JÁ NÃO SE ENTENDIA MUITO BEM...",
      "id": "1414"
  },
  {
      "name": "SONHO DE AMOR",
      "artist": "MENOS É MAIS",
      "firstLine": "VOCÊ ESTÁ ME TIRANDO O SONO...",
      "id": "1702"
  },
  {
      "name": "TCHAU E BENÇA",
      "artist": "MENOS É MAIS",
      "firstLine": "EU BEM QUE TE FALEI POR FAVOR!...",
      "id": "1747"
  },
  {
      "name": "ENTER SANDMAN",
      "artist": "METALLICA",
      "firstLine": "SAY YOUR PRAYERS, LITTLE ONE...",
      "id": "1667"
  },
  {
      "name": "NOTHING ELSE MATTERS",
      "artist": "METALLICA",
      "firstLine": "SO CLOSE NO MATTER HOW FAR...",
      "id": "1668"
  },
  {
      "name": "TUDO PODE MUDAR",
      "artist": "METRÔ",
      "firstLine": "NADA ULTRAPASSA A VELOCIDADE DO AMOR...",
      "id": "1838"
  },
  {
      "name": "WHEN A MAN LOVES A WOMAN",
      "artist": "MICHAEL BOLTON",
      "firstLine": "WHEN A MAN LOVES A WOMAN",
      "id": "1047"
  },
  {
      "name": "EVERYTHING",
      "artist": "MICHAEL BUBLÉ",
      "firstLine": "YOU’RE A FALLING STAR...",
      "id": "1179"
  },
  {
      "name": "HOME",
      "artist": "MICHAEL BUBLÉ",
      "firstLine": "ANOTHER SUMMER DAY ...",
      "id": "1180"
  },
  {
      "name": "BAD",
      "artist": "MICHAEL JACKSON",
      "firstLine": "YOUR BUTT IS MINE ... GOIN’ TO TELL YOU RIGHT..",
      "id": "1302"
  },
  {
      "name": "HEAL THE WORLD",
      "artist": "MICHAEL JACKSON",
      "firstLine": "THERE’S A PLACE IN YOUR HEART...",
      "id": "1303"
  },
  {
      "name": "I WANNA BE WHERE YOU ARE",
      "artist": "MICHAEL JACKSON",
      "firstLine": "CAN IT BE I STAYED AWAY TOO LONG...",
      "id": "1097"
  },
  {
      "name": "ROCK WITH YOU",
      "artist": "MICHAEL JACKSON",
      "firstLine": "GIRL, CLOSE YOUR EYES...",
      "id": "479"
  },
  {
      "name": "LOVE NEVER FELT SO GOOD",
      "artist": "MICHAEL JACKSON / JUSTIN",
      "firstLine": "BABY... LOVE NEVER FELT SO GOOD...",
      "id": "1031"
  },
  {
      "name": "LEVA",
      "artist": "MICHAEL SULLIVAN",
      "firstLine": "FOI BOM EU FICAR COM VOCÊ O ANO INTEIRO...",
      "id": "1900"
  },
  {
      "name": "FUGIDINHA",
      "artist": "MICHEL TELó",
      "firstLine": "TÔ BEM NA PARADA.. NINGUÉM CONSEGUE ENTENDER...",
      "id": "622"
  },
  {
      "name": "OVER MY SHOULDER",
      "artist": "MIKE & THE MECHANICS",
      "firstLine": "LOOKING BACK OVER MY SHOULDER...",
      "id": "1483"
  },
  {
      "name": "PAISAGEM NA JANELA",
      "artist": "MILTOM NASCIMENTO",
      "firstLine": "DA JANELA LATERAL DO QUARTO DE DORMIR",
      "id": "1845"
  },
  {
      "name": "BRINCADEIRA DE CRIANÇA",
      "artist": "MOLEJO",
      "firstLine": "ACORDA CRIANÇADA TÁ NA HORA DA GENTE BRINCAR...",
      "id": "1283"
  },
  {
      "name": "CAÇAMBA",
      "artist": "MOLEJO",
      "firstLine": "TRAZ A CAÇAMBA, TRAZ A CAÇAMBA",
      "id": "1278"
  },
  {
      "name": "CILADA",
      "artist": "MOLEJO",
      "firstLine": "QUASE MORRI DO CORAÇÃO...",
      "id": "1733"
  },
  {
      "name": "DANÇA DA VASSOURA",
      "artist": "MOLEJO",
      "firstLine": "DIGA AONDE VOCÊ VAI, QUE EU VOU VARRENDO",
      "id": "1282"
  },
  {
      "name": "PAPARICO",
      "artist": "MOLEJO",
      "firstLine": "MENINA EU VOU LHE SER SINCERO...",
      "id": "1281"
  },
  {
      "name": "SAMBA DIFERENTE",
      "artist": "MOLEJO",
      "firstLine": "QUEM SAMBA COM MOLEJO SAMBA DIFERENTE VIU...",
      "id": "1285"
  },
  {
      "name": "VOLTEI",
      "artist": "MOLEJO",
      "firstLine": "VENHO TRABALHANDO, VENHO ME ESFORÇANDO..",
      "id": "1280"
  },
  {
      "name": "SUEDEHEAD",
      "artist": "MORRISSEY (THE SMITHS)",
      "firstLine": "WHY DO YOU COME HERE?...",
      "id": "1649"
  },
  {
      "name": "CURTO CIRCUITO",
      "artist": "MUMUZINHO",
      "firstLine": "QUEM SOU EU NÃO SEI QUEM SOU...",
      "id": "1540"
  },
  {
      "name": "FULMINANTE",
      "artist": "MUMUZINHO",
      "firstLine": "EU AMEI... NEM SEMPRE SE CALCULA O RISCO...",
      "id": "1539"
  },
  {
      "name": "CONFIANÇA",
      "artist": "MUMUZINHO / DILSINHO",
      "firstLine": "EU Só TÔ QUERENDO SUA CONFIANÇA...",
      "id": "1541"
  },
  {
      "name": "50 REAIS",
      "artist": "NAIARA AZEVEDO",
      "firstLine": "QUE BONITO HEIN, QUE CENA MAIS LINDA....",
      "id": "5"
  },
  {
      "name": "AMOR DE CHOCOLATE",
      "artist": "NALDO",
      "firstLine": "VODKA OU ÁGUA DE COCO...",
      "id": "27"
  },
  {
      "name": "CHANTILY",
      "artist": "NALDO",
      "firstLine": "ABRE MAIS A BLUSA, ME USA...",
      "id": "65"
  },
  {
      "name": "MUITO ESTRANHO",
      "artist": "NANDO REIS",
      "firstLine": "HUM! MAS SE UM DIA EU CHEGAR MUITO ESTRANHO...",
      "id": "1903"
  },
  {
      "name": "DE JANEIRO A JANEIRO",
      "artist": "NANDO REIS & ROBERTA CAMPOS",
      "firstLine": "NÃO CONSIGO OLHAR NO FUNDO DOS SEUS OLHOS...",
      "id": "1771"
  },
  {
      "name": "TORN",
      "artist": "NATALIE IMBRUGLIA",
      "firstLine": "I THOUGHT I SAW A MAN BROUGHT TO LIFE...",
      "id": "1526"
  },
  {
      "name": "LIBERDADE PRA DENTRO DA CABEÇA",
      "artist": "NATIRUTS",
      "firstLine": "LIBERDADE PRÁ DENTRO DA CABEÇA...",
      "id": "287"
  },
  {
      "name": "QUERO SER FELIZ TAMBÉM",
      "artist": "NATIRUTS",
      "firstLine": "CRESÇA.. INDEPENDENTE DO QUE ACONTEÇA...",
      "id": "886"
  },
  {
      "name": "NÃO ME DEIXE SOZINHO",
      "artist": "NEGO DO BOREL",
      "firstLine": "AMOR... EU GOSTO TANTO DE SENTIR O TEU SABOR...",
      "id": "383"
  },
  {
      "name": "VOCÊ PARTIU MEU CORAÇÃO",
      "artist": "NEGO DO BOREL",
      "firstLine": "VOCÊ PARTIU MEU CORAÇÃO....",
      "id": "555"
  },
  {
      "name": "NEGRA ÂNGELA",
      "artist": "NEGUINHO DA BEIJA-FLOR",
      "firstLine": "EU PREFIRO ACRDITAR QUE É MENTIRA...",
      "id": "833"
  },
  {
      "name": "CAMILA",
      "artist": "NENHUM DE NOIS",
      "firstLine": "DEPOIS DA ÚLTIMA NOITE DE FESTA...",
      "id": "62"
  },
  {
      "name": "MILA",
      "artist": "NETINHO",
      "firstLine": "E TUDO COMEÇOU HÁ UM TEMPO ATRÁS...",
      "id": "351"
  },
  {
      "name": "PREFIXO DE VERÃO",
      "artist": "NETINHO",
      "firstLine": "AÊ, AÊ, AÊ, AÊ ÊH, ÊH, ÊH, EH ÔH, Ô...",
      "id": "1174"
  },
  {
      "name": "WE ARE CARNAVAL",
      "artist": "NETINHO",
      "firstLine": "AH, QUE BOM VOCÊ CHEGOU...",
      "id": "1175"
  },
  {
      "name": "FAR AWAY",
      "artist": "NICKELBACK",
      "firstLine": "THIS TIME, THIS PLACE ...",
      "id": "1128"
  },
  {
      "name": "HOW YOU REMIND ME",
      "artist": "NICKELBACK",
      "firstLine": "NEVER MADE IT AS A WISE MAN...",
      "id": "1127"
  },
  {
      "name": "SOMEDAY",
      "artist": "NICKELBACK",
      "firstLine": "HOW THE HELL DID WE WIND UP LIKE THIS...",
      "id": "1448"
  },
  {
      "name": "LITHIUM",
      "artist": "NIRVANA",
      "firstLine": "I’M SO HAPPY ‘CAUSE TODAY...",
      "id": "1135"
  },
  {
      "name": "SMELL LIKE TEEN SPIRIT",
      "artist": "NIRVANA",
      "firstLine": "LOAD UP ON GUNS, BRING YOUR FRIENDS...",
      "id": "498"
  },
  {
      "name": "DON´T SPEAK",
      "artist": "NO DOUBT",
      "firstLine": "YOU AND ME... WE USED TO BE TOGETHER...",
      "id": "92"
  },
  {
      "name": "SONHO DE AMOR",
      "artist": "NOSSO SENTIMENTO",
      "firstLine": "VOCÊ TÁ ME TIRANDO O SONO...",
      "id": "990"
  },
  {
      "name": "CEDO OU TARDE",
      "artist": "NX ZERO",
      "firstLine": "QUANDO PERCO A FÉ, FICO SEM CONTROLE...",
      "id": "1626"
  },
  {
      "name": "RAZÕES E EMOÇÕES",
      "artist": "NX ZERO",
      "firstLine": "DIZER, O QUE EU POSSO DIZER...",
      "id": "473"
  },
  {
      "name": "A FEIRA",
      "artist": "O RAPPA",
      "firstLine": "É DIA DE FEIRA. QUARTA-FEIRA. SEXTA-FEIRA...",
      "id": "9"
  },
  {
      "name": "ANJOS",
      "artist": "O RAPPA",
      "firstLine": "EM ALGUM LUGAR, PRA RELAXAR...",
      "id": "1529"
  },
  {
      "name": "ME DEIXA",
      "artist": "O RAPPA",
      "firstLine": "PODEM AVISAR, PODE AVISAR...",
      "id": "332"
  },
  {
      "name": "MINHA ALMA",
      "artist": "O RAPPA",
      "firstLine": "A MINHA ALMA TÁ ARMADA E APONTADA...",
      "id": "355"
  },
  {
      "name": "O QUE SOBROU DO CÉU",
      "artist": "O RAPPA",
      "firstLine": "FALTOU LUZ MAS ERA DIA... O SOL INVADIU A SALA...",
      "id": "1477"
  },
  {
      "name": "PESCADOR DE ILUSÕES",
      "artist": "O RAPPA",
      "firstLine": "SE MEUS JOELHOS NÃO DOESSEM MAIS...",
      "id": "439"
  },
  {
      "name": "PRA QUEM TEM FÉ (ANJOS)",
      "artist": "O RAPPA",
      "firstLine": "EM ALGUM LUGAR, PRA RELAXAR...",
      "id": "1775"
  },
  {
      "name": "VAPOR BARATO",
      "artist": "O RAPPA",
      "firstLine": "SIM... EU ESTOU TÃO CANSADO...",
      "id": "548"
  },
  {
      "name": "DON´T LOOK BACK IN ANGER",
      "artist": "OASIS",
      "firstLine": "SLIP INSIDE THE EYE OF YOUR MIND...",
      "id": "91"
  },
  {
      "name": "WONDERWALL",
      "artist": "OASIS",
      "firstLine": "TODAY IS GONNA BE THE DAY...",
      "id": "562"
  },
  {
      "name": "STAY",
      "artist": "OINGO BOINGO",
      "firstLine": "THIS IS NOT THE FIRST TIME",
      "id": "921"
  },
  {
      "name": "BEST SONG EVER",
      "artist": "ONE DIRECTION",
      "firstLine": "MAYBE IT’S THE WAY SHE WALKED...",
      "id": "1565"
  },
  {
      "name": "WHAT MAKES YOU BEAUTIFUL",
      "artist": "ONE DIRECTION",
      "firstLine": "YOU’RE INSECURE... DON’T KNOW WHAT FOR...",
      "id": "1564"
  },
  {
      "name": "O PROBLEMA É QUE CÊ SABE",
      "artist": "ONZE:20",
      "firstLine": "PROBLEMA É QUE CÊ SABE O QUANTO EU GOSTO DE VOCÊ...",
      "id": "1234"
  },
  {
      "name": "RECAIREI",
      "artist": "OS BARÕES DA PISADINHA",
      "firstLine": "JÁ TEM UMA SEMANA QUE TO LIMPO DE VOCÊ...",
      "id": "881"
  },
  {
      "name": "AMOR DE VERÃO",
      "artist": "OS MORENOS",
      "firstLine": "AQUELA GAROTA TA SEMPRE NO MEU PENSAMENTO...",
      "id": "1341"
  },
  {
      "name": "MARROM BOMBOM",
      "artist": "OS MORENOS",
      "firstLine": "A GENTE TEM TUDO PRA DAR CERTO...",
      "id": "324"
  },
  {
      "name": "EU TÔ QUERENDO",
      "artist": "OS TRAVESSOS",
      "firstLine": "POR QUE VOCÊ NÃO LARGA DE BOBEIRA...",
      "id": "1750"
  },
  {
      "name": "TÔ TE FILMANDO (SORRIA)",
      "artist": "OS TRAVESSOS",
      "firstLine": "TODA VEZ QUE EU VEJO VOCÊ...",
      "id": "621"
  },
  {
      "name": "TU MANDAS NO MEU CORAÇÃO",
      "artist": "OS TRAVESSOS",
      "firstLine": "NÃO SEI QUANTO TEMPO O TEMPO DEIXOU...",
      "id": "1770"
  },
  {
      "name": "LUA E FLOR",
      "artist": "OSWALDO MONTENEGRO",
      "firstLine": "EU AMAVA COMO AMAVA ALGUM CANTOR...",
      "id": "1491"
  },
  {
      "name": "NÃO OLHA ASSIM PRA MIM",
      "artist": "OUTROEU",
      "firstLine": "NÃO ME AFASTA DO TOM DA TUA PELE...",
      "id": "1528"
  },
  {
      "name": "PAPO DE JACARÉ",
      "artist": "P.O. BOX",
      "firstLine": "TÔ VIAJANDO NA ONDA DESSA MENINA...",
      "id": "429"
  },
  {
      "name": "K.O",
      "artist": "PABLLO VITTAR",
      "firstLine": "SEU AMOR ME PEGOU... CÊ BATEU TÃO FORTE...",
      "id": "1881"
  },
  {
      "name": "LANTERNA DOS AFOGADOS",
      "artist": "PARALAMAS",
      "firstLine": "QUANDO TÁ ESCURO. E NINGUÉM TE OUVE...",
      "id": "276"
  },
  {
      "name": "MEU ERRO",
      "artist": "PARALAMAS",
      "firstLine": "EU QUIS DIZER. VOCÊ NÃO QUIS ESCUTAR...",
      "id": "346"
  },
  {
      "name": "UMA BRASILEIRA",
      "artist": "PARALAMAS",
      "firstLine": "RODAS EM SOL, TROVAS EM DO...",
      "id": "624"
  },
  {
      "name": "VOCÊ",
      "artist": "PARALAMAS",
      "firstLine": "VOCÊ, É ALGO ASSIM. É TUDO PRA MIM...",
      "id": "553"
  },
  {
      "name": "CALEIDOSCóPIO",
      "artist": "PARALAMAS DO SUCESSO",
      "firstLine": "NÃO É PRECISO APAGAR A LUZ...",
      "id": "1897"
  },
  {
      "name": "SKA",
      "artist": "PARALAMAS DO SUCESSO",
      "firstLine": "A VIDA NÃO É FILME, VOCÊ NÃO ENTENDEU...",
      "id": "1314"
  },
  {
      "name": "AIN’T IT FUN",
      "artist": "PARAMORE",
      "firstLine": "I DON’T MIND... LETTING YOU DOWN EASY...",
      "id": "1231"
  },
  {
      "name": "AONDE VOCÊ QUISER",
      "artist": "PATRÍCIA MARX",
      "firstLine": "QUANDO EU TE VI FECHEI OS OLHOS...",
      "id": "34"
  },
  {
      "name": "ESPELHOS D'ÁGUA",
      "artist": "PATRICIA MARX",
      "firstLine": "OS SEUS OLHOS SÃO ESPELHOS D'ÁGUA...",
      "id": "168"
  },
  {
      "name": "QUANDO CHOVE",
      "artist": "PATRÍCIA MARX",
      "firstLine": "QUANDO OLHO NOS TEUS OLHOS...",
      "id": "457"
  },
  {
      "name": "EVERY TIME YOU GO AWAY",
      "artist": "PAUL YOUNG",
      "firstLine": "HEY! IF WE CAN SOLVE ANY PROBLEM...",
      "id": "1249"
  },
  {
      "name": "PÁSSARO DE FOGO",
      "artist": "PAULA FERNANDES",
      "firstLine": "VAI SE ENTREGAR PRA MIM COMO A PRIMEIRA VEZ...",
      "id": "1364"
  },
  {
      "name": "ALIVE",
      "artist": "PEARL JAM",
      "firstLine": "SON, SHE SAID, HAVE I GOT A LITTLE STORY FOR YOU..",
      "id": "626"
  },
  {
      "name": "BLACK",
      "artist": "PEARL JAM",
      "firstLine": "SHEETS OF EMPTY CANVAS...",
      "id": "49"
  },
  {
      "name": "LAST KISS",
      "artist": "PEARL JAM",
      "firstLine": "OH WHERE, OH WHERE, CAN MY BABY BE?",
      "id": "279"
  },
  {
      "name": "JEREMY",
      "artist": "PEARL JAN",
      "firstLine": "AT HOME... DRAWING PICTURE...",
      "id": "1575"
  },
  {
      "name": "CASINHA BRANCA",
      "artist": "PENINHA",
      "firstLine": "EU TENHO ANDADO TÃO SOZINHO ULTIMAMENTE...",
      "id": "1853"
  },
  {
      "name": "SONHOS",
      "artist": "PENINHA",
      "firstLine": "TUDO ERA APENAS UMA BRINCADEIRA...",
      "id": "1623"
  },
  {
      "name": "APAIXONEI PELA PESSOA ERRADA",
      "artist": "PÉRICLES",
      "firstLine": "EU NÃO TENHO CULPA DE ESTAR TE AMANDO...",
      "id": "1680"
  },
  {
      "name": "BEIJO DOCE",
      "artist": "PÉRICLES",
      "firstLine": "NAMORAR AONDE O SOL SE ESCONDE...",
      "id": "1786"
  },
  {
      "name": "CILADA",
      "artist": "PÉRICLES",
      "firstLine": "QUASE MORRI DO CORAÇÃO...",
      "id": "1279"
  },
  {
      "name": "DESLIGA E VEM",
      "artist": "PÉRICLES",
      "firstLine": "POR FAVOR ME DIZ QUEM É VOCÊ...",
      "id": "86"
  },
  {
      "name": "SUPRA SUMO DO AMOR",
      "artist": "PÉRICLES",
      "firstLine": "PEÇO PERDÃO EU NÃO QUIS...",
      "id": "948"
  },
  {
      "name": "EU E VOCÊ SEMPRE",
      "artist": "PÉRICLES / JORGE ARAGÃO",
      "firstLine": "LOGO, LOGO, ASSIM QUE PUDER, VOU TELEFONAR...",
      "id": "1270"
  },
  {
      "name": "TREMENDO VACILÃO",
      "artist": "PERLLA",
      "firstLine": "NA MADRUGADA. ABANDONADA",
      "id": "535"
  },
  {
      "name": "GLORY OF LOVE",
      "artist": "PETER CETERA",
      "firstLine": "TONIGHT IT’S VERY CLEAR...",
      "id": "1241"
  },
  {
      "name": "HAPPY",
      "artist": "PHARRELL WILLIAMS",
      "firstLine": "IT MIGHT SEEM CRAZY WHAT I’M ABOUT TO SAY...",
      "id": "1459"
  },
  {
      "name": "HAPPY",
      "artist": "PHARRELL WILLIAMS",
      "firstLine": "IT MIGHT SEEM CRAZY WHAT I’M ABOUT TO SAY...",
      "id": "628"
  },
  {
      "name": "ANOTHER DAY IN PARADISE",
      "artist": "PHIL COLLINS",
      "firstLine": "SHE CALLS OUT TO THE MAN ON THE STREET...",
      "id": "1656"
  },
  {
      "name": "EASY LOVER",
      "artist": "PHILL COLLINS",
      "firstLine": "EASY LOVER, SHE'LL GET A HOLD ON ...",
      "id": "102"
  },
  {
      "name": "LIGANDO OS FATOS",
      "artist": "PIQUE NOVO",
      "firstLine": "PODE ATÉ FALAR QUE NADA ACONTECEU...",
      "id": "1552"
  },
  {
      "name": "EQUALIZE",
      "artist": "PITTY",
      "firstLine": "ÀS VEZES SE EU ME DISTRAIO...",
      "id": "629"
  },
  {
      "name": "MÁSCARA",
      "artist": "PITTY",
      "firstLine": "DIGA QUEM VOCÊ É, ME DIGA...",
      "id": "630"
  },
  {
      "name": "ME ADORA",
      "artist": "PITTY",
      "firstLine": "TANTAS DECEPÇõES EU JÁ VIVI...",
      "id": "631"
  },
  {
      "name": "NA SUA ESTANTE",
      "artist": "PITTY",
      "firstLine": "TE VEJO ERRANDO E ISSO NÃO É PECADO",
      "id": "632"
  },
  {
      "name": "TETO DE VIDRO",
      "artist": "PITTY",
      "firstLine": "ANDEI POR TANTAS RUAS E LUGARES...",
      "id": "633"
  },
  {
      "name": "BEIJO DOCE",
      "artist": "PIXOTE",
      "firstLine": "NAMORAR AONDE O SOL SE ESCONDE...",
      "id": "1557"
  },
  {
      "name": "IDEM",
      "artist": "PIXOTE",
      "firstLine": "VOCÊ TEM MALíCIA NO OLHAR...",
      "id": "1628"
  },
  {
      "name": "INSEGURANÇA",
      "artist": "PIXOTE",
      "firstLine": "ESSA NOITE EU NOTEI QUE VOCÊ DEMOROU PRA DORMIR...",
      "id": "1585"
  },
  {
      "name": "MANDE UM SINAL",
      "artist": "PIXOTE",
      "firstLine": "SONHEI CONTIGO ..... AGORA EU SEI...",
      "id": "1542"
  },
  {
      "name": "FICA COMIGO",
      "artist": "PLACA LUMINOSA",
      "firstLine": "AMO VOCÊ, FICA COMIGO...",
      "id": "1804"
  },
  {
      "name": "MAIS UMA VEZ",
      "artist": "PLACA LUMINOSA",
      "firstLine": "TELEFONO, TE PROCURO. MIL LOUCURAS PRA PODE TE VER...",
      "id": "1817"
  },
  {
      "name": "ATÉ QUANDO ESPERAR",
      "artist": "PLEBE RUDE",
      "firstLine": "NÃO É NOSSA CULPA NASCEMOS JÁ COM....",
      "id": "1220"
  },
  {
      "name": "PROTEÇÃO",
      "artist": "PLEBE RUDE",
      "firstLine": "SERÁ VERDADE, SERÁ QUE NÃO...",
      "id": "1505"
  },
  {
      "name": "VAGALUMES",
      "artist": "POLLO",
      "firstLine": "VOU CAÇAR MAIS DE UM MILHÃO DE VAGALUMES POR Aí...",
      "id": "1366"
  },
  {
      "name": "SINAIS DE FOGO",
      "artist": "PRETA GIL",
      "firstLine": "QUANDO VOCÊ ME VÊ EU VEJO ACENDER...",
      "id": "635"
  },
  {
      "name": "BACK ON THE CHAIN GANG",
      "artist": "PRETENDERS",
      "firstLine": "O FOUND A PICTURAL OF YOU…",
      "id": "1224"
  },
  {
      "name": "DON’T GET ME WRONG",
      "artist": "PRETENDERS",
      "firstLine": "DON’T GET ME WRONG... IF I’M LOOKING KIND OF DAZZLED...",
      "id": "1225"
  },
  {
      "name": "NINGUÉM EXPLICA DEUS",
      "artist": "PRETO NO BRANCO - GOSPEL",
      "firstLine": "NADA É IGUAL AO SEU REDOR...",
      "id": "1567"
  },
  {
      "name": "GIRASSOL",
      "artist": "PRISCILLA ALCÂNTARA - GOSPEL",
      "firstLine": "SE A VIDA FOSSE FÁCIL COMO A GENTE QUER...",
      "id": "1568"
  },
  {
      "name": "BLURRY",
      "artist": "PUDDLE OF MUDD",
      "firstLine": "EVERYTHING’S SO BLURRY",
      "id": "1436"
  },
  {
      "name": "CRAZY LITTLE THING CALLED LOVE",
      "artist": "QUEEN",
      "firstLine": "THIS THING CALLED LOVE I JUST CAN’T HANDLE IT...",
      "id": "1024"
  },
  {
      "name": "DON’T STOP ME NOW",
      "artist": "QUEEN",
      "firstLine": "TONIGHT I’M GONNA HAVE MYSELF A REAL GOOD TIME",
      "id": "1337"
  },
  {
      "name": "I WANT TO BREAK FREE",
      "artist": "QUEEN",
      "firstLine": "I WANT TO BREAK FREE..",
      "id": "1023"
  },
  {
      "name": "LOVE OF MY LIFE",
      "artist": "QUEEN",
      "firstLine": "LOVE OF MY LIFE, YOU’VE HURT ME.",
      "id": "1025"
  },
  {
      "name": "RADIO GA GA",
      "artist": "QUEEN",
      "firstLine": "I’D SIT ALONE ... AND WATCH YOUR LIGHT...",
      "id": "1022"
  },
  {
      "name": "WE ARE THE CHAMPIONS",
      "artist": "QUEEN",
      "firstLine": "I’VE PAID MY DUES ... TIME AFTER TIME...",
      "id": "1021"
  },
  {
      "name": "LOSING MY RELIGION",
      "artist": "R.E.M.",
      "firstLine": "OH, LIFE IS BIGGER. IT’S BIGGER THAN YOU...",
      "id": "302"
  },
  {
      "name": "CHEIA DE MANIAS",
      "artist": "RAÇA NEGRA",
      "firstLine": "CHEIA DE MANIAS. TODA DENGOSA...",
      "id": "637"
  },
  {
      "name": "CIGANA",
      "artist": "RAÇA NEGRA",
      "firstLine": "NÃO DEIXE O TEMPO ACABAR COM NOSSO AMOR...",
      "id": "1862"
  },
  {
      "name": "É TARDE DEMAIS",
      "artist": "RAÇA NEGRA",
      "firstLine": "OLHA Só VOCÊ . DEPOIS DE ME PERDER",
      "id": "99"
  },
  {
      "name": "ME LEVA JUNTO COM VOCÊ",
      "artist": "RAÇA NEGRA",
      "firstLine": "O MEU DO SEU BEIJO TEM O GOSTO DO AMOR...",
      "id": "925"
  },
  {
      "name": "GAROTA DOURADA",
      "artist": "RÁDIO TAXI",
      "firstLine": "NAVEGANDO NO TEU MAR. FLUTUANDO...",
      "id": "221"
  },
  {
      "name": "A MAIS PEDIDA",
      "artist": "RAIMUNDOS",
      "firstLine": "NESSE SHOW NÃO ENTRA MENOR...",
      "id": "1504"
  },
  {
      "name": "I SAW YOU SAYING",
      "artist": "RAIMUNDOS",
      "firstLine": "RECONHECI... A MADONNA ALI PARADA NO JARDIM",
      "id": "1227"
  },
  {
      "name": "MULHER DE FASES",
      "artist": "RAIMUNDOS",
      "firstLine": "QUE MULHER RUIM JOGOU MINHAS COISAS...",
      "id": "363"
  },
  {
      "name": "PET SEMATARY",
      "artist": "RAMONES",
      "firstLine": "UNDER THE ARC OF A WEATHER STAIN BOARDS...",
      "id": "440"
  },
  {
      "name": "CORAÇÃO",
      "artist": "RAPAZOLLA",
      "firstLine": "CORAÇÃO, PARA QUE SE APAIXONOU...",
      "id": "78"
  },
  {
      "name": "A FEIRA",
      "artist": "RAPPA",
      "firstLine": "É DIA DE FEIRA. QUARTA-FEIRA. SEXTA-FEIRA...",
      "id": "1863"
  },
  {
      "name": "ANJOS",
      "artist": "RAPPA",
      "firstLine": "EM ALGUM LUGAR, PRA RELAXAR...",
      "id": "1776"
  },
  {
      "name": "ME DEIXA",
      "artist": "RAPPA",
      "firstLine": "PODE AVISAR, PODEM AVISAR...",
      "id": "1864"
  },
  {
      "name": "MINHA ALMA",
      "artist": "RAPPA",
      "firstLine": "A MINHA ALMA TÁ ARMADA E APONTADA...",
      "id": "1865"
  },
  {
      "name": "O QUE SOBROU DO CÉU",
      "artist": "RAPPA",
      "firstLine": "FALTOU LUZ MAS ERA DIA... O SOL INVADIU A SALA...",
      "id": "1866"
  },
  {
      "name": "PESCADOR DE ILUSÕES",
      "artist": "RAPPA",
      "firstLine": "SE MEUS JOELHOS NÃO DOESSEM MAIS...",
      "id": "1867"
  },
  {
      "name": "PRA QUEM TEM FÉ (ANJOS)",
      "artist": "RAPPA",
      "firstLine": "EM ALGUM LUGAR, PRA RELAXAR...",
      "id": "1777"
  },
  {
      "name": "CAWBOY FORA DA LEI",
      "artist": "RAUL SEIXAS",
      "firstLine": "MAMÃE, NÃO QUERO SER PREFEITO...",
      "id": "64"
  },
  {
      "name": "GITÁ",
      "artist": "RAUL SEIXAS",
      "firstLine": "ÀS VEZES VOCÊ ME PERGUNTA...",
      "id": "229"
  },
  {
      "name": "MALUCO BELEZA",
      "artist": "RAUL SEIXAS",
      "firstLine": "ENQUANTO VOCÊ SE ESFORÇA PRA SER...",
      "id": "314"
  },
  {
      "name": "DANI CALIFORNIA",
      "artist": "RED HOT CHILI PEPPERS",
      "firstLine": "GETTIN’ BORN IN THE STATE OF MISSISSIPPI...",
      "id": "1053"
  },
  {
      "name": "OTHERSIDE",
      "artist": "RED HOT CHILI PEPPERS",
      "firstLine": "HOW LONG, HOW LONG WILL I SLIDE",
      "id": "1801"
  },
  {
      "name": "THE ZEPHYR SONG",
      "artist": "RED HOT CHILI PEPPERS",
      "firstLine": "CAN I GET YOUR HAND TO WRITE ON...",
      "id": "1653"
  },
  {
      "name": "UNDER THE BRIDGE",
      "artist": "RED HOT CHILI PEPPERS",
      "firstLine": "SOMETIMES I FEEL...",
      "id": "545"
  },
  {
      "name": "GARÇOM",
      "artist": "REGINALDO ROSSI",
      "firstLine": "GARÇOM, AQUI NESSA MESA DE BAR...",
      "id": "787"
  },
  {
      "name": "FAZ UM MILAGRE EM MIM",
      "artist": "REGIS DANESE - GOSPEL",
      "firstLine": "COMO ZAQUEU EU QUERO SUBIR...",
      "id": "1571"
  },
  {
      "name": "CORAÇÃO RADIANTE",
      "artist": "REVELAÇÃO",
      "firstLine": "O QUE MAIS QUERO É TE DAR UM BEIJO...",
      "id": "1622"
  },
  {
      "name": "DEIXA ACONTECER NATURALMENTE",
      "artist": "REVELAÇÃO",
      "firstLine": "DEIXA ACONTECER NATURALMENTE, EU NÃO QUERO VER...",
      "id": "1407"
  },
  {
      "name": "O SHOW TEM QUE CONTINUAR",
      "artist": "REVELAÇÃO",
      "firstLine": "TEU CHORO JÁ NÃO TOCA MEU BANDOLIM...",
      "id": "1729"
  },
  {
      "name": "RIGHT HERE WAITING",
      "artist": "RICHARD MARX",
      "firstLine": "OCEANS APART DAY AFTER DAY...",
      "id": "475"
  },
  {
      "name": "ELA É DEMAIS",
      "artist": "RICK & RENNER",
      "firstLine": "ELA TEM UM JEITO LINDO DE ME...",
      "id": "1800"
  },
  {
      "name": "LIVIN' LA VIDA LOCA",
      "artist": "RICKY MARTIN",
      "firstLine": "SHE’S INTO SUPERSTITION...",
      "id": "1370"
  },
  {
      "name": "TAKE A BOW",
      "artist": "RIHANNA",
      "firstLine": "HOW ABOUT A ROUND OF APPLAUSE?...",
      "id": "1879"
  },
  {
      "name": "UMBRELLA",
      "artist": "RIHANNA",
      "firstLine": "YOU HAVE MY HEART…",
      "id": "1151"
  },
  {
      "name": "AMOR E SEXO",
      "artist": "RITA LEE",
      "firstLine": "AMOR É UM LIVRO .....SEXO É ESPORTE...",
      "id": "1199"
  },
  {
      "name": "BAILA COMIGO",
      "artist": "RITA LEE",
      "firstLine": "SE DEUS QUISER, UM DIA EU QUERO SER íNDIO...",
      "id": "1383"
  },
  {
      "name": "DESCULPE O AUÊ",
      "artist": "RITA LEE",
      "firstLine": "DESCULPE O AUÊ EU NÃO QUERIA MAGOAR VOCÊ...",
      "id": "1384"
  },
  {
      "name": "DOCE VAMPIRO",
      "artist": "RITA LEE",
      "firstLine": "VENHA ME BEIJAR...",
      "id": "1620"
  },
  {
      "name": "ERVA VENENOSA",
      "artist": "RITA LEE",
      "firstLine": "PARECE UMA ROSA. DE LONGE É FORMOSA...",
      "id": "164"
  },
  {
      "name": "LANÇA PERFUME",
      "artist": "RITA LEE",
      "firstLine": "LANÇA MENINA. LANÇA TODO ESSE PERFUME...",
      "id": "274"
  },
  {
      "name": "MANIA DE VOCÊ",
      "artist": "RITA LEE",
      "firstLine": "MEU BEM VOCÊ ME DÁ ÁGUA NA BOCA...",
      "id": "320"
  },
  {
      "name": "MENINA VENENO",
      "artist": "RITCHIE",
      "firstLine": "MEIA NOITE NO MEU QUARTO...",
      "id": "336"
  },
  {
      "name": "ANGELS",
      "artist": "ROBBIE WILLIAMS",
      "firstLine": "I SIT AND WAIT DOES AN ANGEL",
      "id": "1517"
  },
  {
      "name": "DE JANEIRO A JANEIRO",
      "artist": "ROBERTA CAMPOS & NANDO REIS",
      "firstLine": "NÃO CONSIGO OLHAR NO FUNDO DOS SEUS OLHOS...",
      "id": "1423"
  },
  {
      "name": "KILLING ME SOFTLY WITH HIS SONG",
      "artist": "ROBERTA FLACK",
      "firstLine": "STRUMMING MY PAIN WITH HIS FINGERS...",
      "id": "1456"
  },
  {
      "name": "COMO É GRANDE O MEU AMOR...",
      "artist": "ROBERTO CARLOS",
      "firstLine": "EU TENHO TANTO PRA LHE FALAR...",
      "id": "73"
  },
  {
      "name": "DETALHES",
      "artist": "ROBERTO CARLOS",
      "firstLine": "NÃO ADIANTA NEM TENTAR ... ME ESQUECER...",
      "id": "87"
  },
  {
      "name": "É PRECISO SABER VIVER",
      "artist": "ROBERTO CARLOS",
      "firstLine": "QUEM ESPERA QUE A VIDA SEJA FEITA DE ILUSÃO...",
      "id": "1674"
  },
  {
      "name": "EMOÇõES",
      "artist": "ROBERTO CARLOS",
      "firstLine": "QUANDO EU ESTOU AQUI...",
      "id": "150"
  },
  {
      "name": "ESQUEÇA",
      "artist": "ROBERTO CARLOS",
      "firstLine": "ESQUEÇA. SE ELE NÃO TE AMA...",
      "id": "173"
  },
  {
      "name": "QUE TUDO VÁ PARA O INFERNO",
      "artist": "ROBERTO CARLOS",
      "firstLine": "DE QUE VALE O CÉU AZUL E O SOL...",
      "id": "465"
  },
  {
      "name": "SE VOCÊ PENSA",
      "artist": "ROBERTO CARLOS",
      "firstLine": "SE VOCÊ PENSA QUE VAI FAZER DE MIM...",
      "id": "489"
  },
  {
      "name": "PRA SEMPRE VOU TE AMAR",
      "artist": "ROBINSON MONTEIRO",
      "firstLine": "SEI... QUE NADA VAI MUDAR...",
      "id": "1869"
  },
  {
      "name": "EU TÔ QUERENDO",
      "artist": "RODRIGUINHO",
      "firstLine": "PORQUE VOCÊ NÃO LARGA DE BOBEIRA…",
      "id": "1751"
  },
  {
      "name": "PALAVRAS DE AMIGO",
      "artist": "RODRIGUINHO E THIAGUINHO",
      "firstLine": "QUANTAS VEZES EU VOU TER QUE TE FALAR...",
      "id": "1742"
  },
  {
      "name": "CUSTE O QUE CUSTAR",
      "artist": "ROSANA",
      "firstLine": "GUARDE UM PEDACINHO DE VOCÊ...",
      "id": "1803"
  },
  {
      "name": "NENHUM TOQUE",
      "artist": "ROSANA",
      "firstLine": "TANTA COISA PRA DIZER, E A GENTE NEM...",
      "id": "389"
  },
  {
      "name": "O AMOR E O PODER",
      "artist": "ROSANA",
      "firstLine": "A MÚSICA NA SOMBRA. O RITMO NO AR...",
      "id": "399"
  },
  {
      "name": "ANJO (UM ANJO VEIO ME FALAR)",
      "artist": "ROUGE",
      "firstLine": "TÃO DIFíCIL ENTENDER O CORAÇÃO...",
      "id": "1898"
  },
  {
      "name": "RAGATANGA",
      "artist": "ROUGE",
      "firstLine": "OLHA LÁ QUEM VEM VIRANDO A ESQUINA!...",
      "id": "639"
  },
  {
      "name": "A FORÇA DO AMOR",
      "artist": "ROUPA NOVA",
      "firstLine": "ABRIU MINHA VISÃO O JEITO QUE O AMOR...",
      "id": "1899"
  },
  {
      "name": "AMAR",
      "artist": "ROUPA NOVA",
      "firstLine": "AMAR. É QUANDO NÃO DÁ MAIS PRA DISFARÇAR...",
      "id": "25"
  },
  {
      "name": "ANJO",
      "artist": "ROUPA NOVA",
      "firstLine": "SE VOCÊ VÊ ESTRELAS DEMAIS...",
      "id": "32"
  },
  {
      "name": "COMEÇO, MEIO E FIM",
      "artist": "ROUPA NOVA",
      "firstLine": "A VIDA TEM SONS QUE PRA GENTE OUVIR...",
      "id": "1223"
  },
  {
      "name": "CORAÇÃO PIRATA",
      "artist": "ROUPA NOVA",
      "firstLine": "QUANDO A PAIXÃO NÃO DA CERTO...",
      "id": "802"
  },
  {
      "name": "DONA",
      "artist": "ROUPA NOVA",
      "firstLine": "DONA DESSES TRAIÇOEIROS...",
      "id": "1894"
  },
  {
      "name": "TREM AZUL",
      "artist": "ROUPA NOVA",
      "firstLine": "CONFESSAR . SEM MEDO DE MENTIR...",
      "id": "534"
  },
  {
      "name": "VOLTA PRA MIM",
      "artist": "ROUPA NOVA",
      "firstLine": "AMANHECI SOZINHO NA CAMA UM VAZIO...",
      "id": "1822"
  },
  {
      "name": "WHISKY A GO GO",
      "artist": "ROUPA NOVA",
      "firstLine": "FOI NUMA FESTA. GELO E CUBA LIBRE...",
      "id": "560"
  },
  {
      "name": "UM SONHO A DOIS",
      "artist": "ROUPA NOVA / JOANA",
      "firstLine": "ELA SABE, O JEITO DE AGRADAR...",
      "id": "1070"
  },
  {
      "name": "IT MUST HAVE BEEN LOVE",
      "artist": "ROXETTE",
      "firstLine": "LAY A WHISPER ON MY PILLOW...",
      "id": "1056"
  },
  {
      "name": "LISTEN TO YOUR HEART",
      "artist": "ROXETTE",
      "firstLine": "I KNOW THERE’S SOMETHING IN THE WAKE...",
      "id": "1262"
  },
  {
      "name": "SPENDING MY TIME",
      "artist": "ROXETTE",
      "firstLine": "WHAT’S THE TIME? .. SEEMS IT’S ALREADY MORNING...",
      "id": "1055"
  },
  {
      "name": "OLHAR 43",
      "artist": "RPM",
      "firstLine": "SEU CORPO É FRUTO PROIBIDO...",
      "id": "411"
  },
  {
      "name": "RÁDIO PIRATA",
      "artist": "RPM",
      "firstLine": "ABORDAR NAVIOS MERCANTES...",
      "id": "472"
  },
  {
      "name": "BYE BYE TRISTEZA",
      "artist": "SANDRA DE SÁ",
      "firstLine": "NINGUÉM AQUI É PURO ANJO OU DEMÔNIO...",
      "id": "58"
  },
  {
      "name": "JOGA FORA",
      "artist": "SANDRA DE SÁ",
      "firstLine": "É CANSEI JÁ NÃO DÁ MAIS...",
      "id": "1074"
  },
  {
      "name": "NÃO VÁ",
      "artist": "SANDRA DE SÁ",
      "firstLine": "DE REPENTE ME DEU ESTA LOUCA VONTADE...",
      "id": "1858"
  },
  {
      "name": "OLHOS COLORIDOS",
      "artist": "SANDRA DE SÁ",
      "firstLine": "OS MEUS OLHOS COLORIDOS...",
      "id": "413"
  },
  {
      "name": "RETRATOS E CANÇÕES",
      "artist": "SANDRA DE SÁ",
      "firstLine": "HOJE EU ME PEGUEI, PENSANDO EM VOCÊ...",
      "id": "1072"
  },
  {
      "name": "SOLIDÃO",
      "artist": "SANDRA DE SÁ",
      "firstLine": "SOLIDÃO, DÁ UM TEMPO E VÁ SAINDO.",
      "id": "1073"
  },
  {
      "name": "SOZINHA",
      "artist": "SANDRA DE SÁ",
      "firstLine": "AS VEZES NO SILÊNCIO DA NOITE...",
      "id": "1857"
  },
  {
      "name": "A LENDA",
      "artist": "SANDY & JÚNIOR",
      "firstLine": "BEM LÁ NO CÉU UMA LUA EXISTE...",
      "id": "12"
  },
  {
      "name": "NÃO TER",
      "artist": "SANDY & JÚNIOR",
      "firstLine": "O TELEFONE CHAMA SEM PARAR...",
      "id": "1354"
  },
  {
      "name": "QUATRO ESTAÇÕES",
      "artist": "SANDY & JÚNIOR",
      "firstLine": "A NOITE CAI. O FRIO DESCE...",
      "id": "849"
  },
  {
      "name": "TURO TURO",
      "artist": "SANDY & JÚNIOR",
      "firstLine": "ESSE TURO TURO AQUI DENTRO...",
      "id": "848"
  },
  {
      "name": "NÃO PRECISA MUDAR",
      "artist": "SAULO FERNANDES / IVETE",
      "firstLine": "NÃO PRECISA MUDAR, VOU ME ADAPTAR AO SEU...",
      "id": "992"
  },
  {
      "name": "CRAZY",
      "artist": "SEAL",
      "firstLine": "A MAN DECIDES AFTER SEVENTY YEARS...",
      "id": "1176"
  },
  {
      "name": "CLOSING TIME",
      "artist": "SEMISONIC",
      "firstLine": "CLOSING TIME, OPEN ALL THE DOORS...",
      "id": "1441"
  },
  {
      "name": "BURGUESINHA",
      "artist": "SEU JORGE",
      "firstLine": "VAI NO CABELEIREIRO... NO ESTETICISTA...",
      "id": "57"
  },
  {
      "name": "FELICIDADE",
      "artist": "SEU JORGE",
      "firstLine": "FELICIDADE, É VIVER NA SUA COMPANHIA...",
      "id": "591"
  },
  {
      "name": "MINA DO CONDOMíNIO",
      "artist": "SEU JORGE",
      "firstLine": "TÔ NAMORANDO AQUELA MINA...",
      "id": "1123"
  },
  {
      "name": "SÃO GONÇA",
      "artist": "SEU JORGE",
      "firstLine": "PRETINHA. FAÇO TUDO PELO NOSSO AMOR...",
      "id": "592"
  },
  {
      "name": "ESTOY AQUI",
      "artist": "SHAKIRA",
      "firstLine": "YA SÉ QUE NO VENDRÁS...",
      "id": "177"
  },
  {
      "name": "OJOS ASí",
      "artist": "SHAKIRA",
      "firstLine": "AYER YO CONOCí UN CIELO SIN SOL...",
      "id": "1379"
  },
  {
      "name": "FROM THIS MOMENT ON",
      "artist": "SHANIA TWAIN",
      "firstLine": "FROM THIS MOMENT, LIFE HAS BEGUN...",
      "id": "1884"
  },
  {
      "name": "MAN I FELL LIKE A WOMAN",
      "artist": "SHANIA TWAIN",
      "firstLine": "I’M GOING OUT TONIGHT",
      "id": "316"
  },
  {
      "name": "YOU’RE STILL THE ONE",
      "artist": "SHANIA TWAIN",
      "firstLine": "LOOKS LIKE WE MADE IT...",
      "id": "1165"
  },
  {
      "name": "STITCHES",
      "artist": "SHAWN MENDES",
      "firstLine": "I THOUGHT THAT I’VE BEEN HURT BEFORE...",
      "id": "1470"
  },
  {
      "name": "THERE’S NOTHING HOLDIN’ ME BACK",
      "artist": "SHAWN MENDES",
      "firstLine": "I WANNA FOLLOW WHERE SHE GOES...",
      "id": "998"
  },
  {
      "name": "SEÑORITA",
      "artist": "SHAWN MENDES & CAMILA CABELLO",
      "firstLine": "I LOVE IT WHEN YOU CALL ME SEñORITA...",
      "id": "1112"
  },
  {
      "name": "MEU SANGUE FERVE POR VOCÊ",
      "artist": "SIDNEY MAGAL",
      "firstLine": "TEU! TODO TEU ... MINHA! TODA MINHA...",
      "id": "349"
  },
  {
      "name": "LOKA",
      "artist": "SIMONE & SIMARIA",
      "firstLine": "CADÊ VOCÊ QUE NINGUEM VIU...",
      "id": "1678"
  },
  {
      "name": "QUANDO TE VI",
      "artist": "SIMONY",
      "firstLine": "NEM O SOL, NEM O MAR, NEM O BRILHO DAS ESTRELAS...",
      "id": "1830"
  },
  {
      "name": "STARS",
      "artist": "SIMPLY RED",
      "firstLine": "ANYONE WHO EVER HELD YOU...",
      "id": "1002"
  },
  {
      "name": "ALL FOR YOU",
      "artist": "SISTER HEZEL",
      "firstLine": "FINALLY I FIGURED OUT, BUT IT TOOK A LONG...",
      "id": "22"
  },
  {
      "name": "KISS ME",
      "artist": "SIXPENCE NONE THE RICHER",
      "firstLine": "KISS ME OUT OF THE BEARDED BARLEY...",
      "id": "1493"
  },
  {
      "name": "É UMA PARTIDA DE FUTEBOL",
      "artist": "SKANK",
      "firstLine": "BOLA NA TRAVE NÃO ALTERA O PLACAR...",
      "id": "1348"
  },
  {
      "name": "GAROTA NACIONAL",
      "artist": "SKANK",
      "firstLine": "AQUI! NESSE MUNDINHO FECHADO...",
      "id": "223"
  },
  {
      "name": "RESPOSTA",
      "artist": "SKANK",
      "firstLine": "BEM MAIS QUE O TEMPO...",
      "id": "474"
  },
  {
      "name": "SUTILMENTE",
      "artist": "SKANK",
      "firstLine": "E QUANDO EU ESTIVER TRISTE...",
      "id": "1102"
  },
  {
      "name": "TÃO SEU",
      "artist": "SKANK",
      "firstLine": "SINTO SUA FALTA. NÃO POSSO ESPERAR...",
      "id": "517"
  },
  {
      "name": "VAMOS FUGIR",
      "artist": "SKANK",
      "firstLine": "VAMOS FUGIR! DESTE LUGAR...",
      "id": "547"
  },
  {
      "name": "VOU DEIXAR",
      "artist": "SKANK",
      "firstLine": "VOU DEIXAR A VIDA ME LEVAR...",
      "id": "556"
  },
  {
      "name": "I REMEMBER YOU",
      "artist": "SKID ROW",
      "firstLine": "WOKE UP TO SOOTHING SOUND OF POURING...",
      "id": "249"
  },
  {
      "name": "JUST TO SEE HER",
      "artist": "SMOKEY ROBINSON",
      "firstLine": "JUST TO SEE HE.R JUST TO TOUCH HER...",
      "id": "1816"
  },
  {
      "name": "OPEN YOUR EYES",
      "artist": "SNOW PATROL",
      "firstLine": "ALL THIS FEELS STRANGE AND UNTRUE...",
      "id": "1377"
  },
  {
      "name": "BARATA",
      "artist": "SÓ PRA CONTRARIAR",
      "firstLine": "TODA VEZ QUE EU CHEGO EM CASA,",
      "id": "1641"
  },
  {
      "name": "DEPOIS DO PRAZER",
      "artist": "Só PRA CONTRARIAR",
      "firstLine": "TÔ FAZENDO AMOR COM OUTRA PESSOA...",
      "id": "594"
  },
  {
      "name": "DÓI DEMAIS",
      "artist": "Só PRA CONTRARIAR",
      "firstLine": "TÁ DOENDO SIM... TÁ DOENDO EM MIM...",
      "id": "934"
  },
  {
      "name": "É BOM DEMAIS",
      "artist": "SÓ PRA CONTRARIAR",
      "firstLine": "NÃO LARGA DO MEU PÉ...",
      "id": "1639"
  },
  {
      "name": "ESSA TAL LIBERDADE",
      "artist": "Só PRA CONTRARIAR",
      "firstLine": "O QUE É QUE EU VOU FAZER COM ESSA...",
      "id": "175"
  },
  {
      "name": "INTERFONE",
      "artist": "SÓ PRA CONTRARIAR",
      "firstLine": "A CIDADE JÁ PEGOU NO SONO..",
      "id": "1638"
  },
  {
      "name": "MEU JEITO DE SER",
      "artist": "Só PRA CONTRARIAR",
      "firstLine": "ERA Só DIZER PRA MIM, QUE NÃO SENTIA...",
      "id": "348"
  },
  {
      "name": "MINEIRINHO",
      "artist": "Só PRA CONTRARIAR",
      "firstLine": "EU NÃO TENHO CULPA DE COMER QUIETINHO...",
      "id": "1514"
  },
  {
      "name": "NOSSO SONHO NÃO É ILUSÃO",
      "artist": "Só PRA CONTRARIAR",
      "firstLine": "TÃO FALANDO PRA EU TOMAR CUIDADO...",
      "id": "1305"
  },
  {
      "name": "O AMOR VOCÊ E EU",
      "artist": "SÓ PRA CONTRARIAR",
      "firstLine": "SE OLHAR NOS MEUS OLHOS VERÁ...",
      "id": "1642"
  },
  {
      "name": "OUTDOOR",
      "artist": "Só PRA CONTRARIAR",
      "firstLine": "JÁ COMOQUEI O OUTDOOR EM TODOS OS JORNAIS...",
      "id": "933"
  },
  {
      "name": "QUANDO É AMOR",
      "artist": "SÓ PRA CONTRARIAR",
      "firstLine": "A GENTE SABE QUE É AMOR...",
      "id": "1637"
  },
  {
      "name": "QUE SE CHAMA AMOR",
      "artist": "Só PRA CONTRARIAR",
      "firstLine": "COMO É QUE UMA COISA ASSIM MACHUCA TANTO...",
      "id": "595"
  },
  {
      "name": "SAI DA MINHA ABA",
      "artist": "Só PRA CONTRARIAR",
      "firstLine": "SAI PRA LÁ, SE MANCA, VÊ SE ME ESQUECE...",
      "id": "1515"
  },
  {
      "name": "TÃO SÓ",
      "artist": "SÓ PRA CONTRARIAR",
      "firstLine": "EU FIQUEI SOZINHO, MAIS UMA NOITE SEM VOCÊ...",
      "id": "1636"
  },
  {
      "name": "VOCÊ VAI VOLTAR PRA MIM",
      "artist": "SÓ PRA CONTRARIAR",
      "firstLine": "TÔ QUERENDO TE ENCONTRAR...",
      "id": "1640"
  },
  {
      "name": "DOMINGO",
      "artist": "Só PRA CONTRARIAR / ALEXANDRE PIRES",
      "firstLine": "DOMINGO QUERO TE ENCONTRAR...",
      "id": "1530"
  },
  {
      "name": "LISTEN TO YOUR HEART",
      "artist": "SONIA",
      "firstLine": "CAN YOU SEE IN MY EYES...",
      "id": "1004"
  },
  {
      "name": "YOU’LL NEVER STOP ME LOVING YOU",
      "artist": "SONIA",
      "firstLine": "EVEN WHEN YOU’RE HOME",
      "id": "1005"
  },
  {
      "name": "AINDA GOSTO DE VOCÊ",
      "artist": "SORRISO MAROTO",
      "firstLine": "BATEU SAUDADE. LEMBREI DO TEMPO EM QUE...",
      "id": "977"
  },
  {
      "name": "DISFARÇA",
      "artist": "SORRISO MAROTO",
      "firstLine": "DEIXA QUE ME VIRO, DEIXA...",
      "id": "978"
  },
  {
      "name": "EM SUAS MÃOS",
      "artist": "SORRISO MAROTO",
      "firstLine": "NÃO SEI POR QUE TE QUERO ASSIM...",
      "id": "976"
  },
  {
      "name": "FUTURO PROMETIDO",
      "artist": "SORRISO MAROTO",
      "firstLine": "A LUA QUE PROMETI ESTÁ ALI...",
      "id": "980"
  },
  {
      "name": "JÁ ERA",
      "artist": "SORRISO MAROTO",
      "firstLine": "JÁ ERA.. O NOSSO AMOR JÁ ERA...",
      "id": "981"
  },
  {
      "name": "O QUE TINHA QUE DAR",
      "artist": "SORRISO MAROTO",
      "firstLine": "Só VOCÊ JURANDO QUE VAI MELHORAR PRA EU FICAR",
      "id": "975"
  },
  {
      "name": "TENHO MEDO",
      "artist": "SORRISO MAROTO",
      "firstLine": "SERÁ QUE É MELHOR AGORA EU SER SINCERO...",
      "id": "979"
  },
  {
      "name": "DERÊ",
      "artist": "SOWETO",
      "firstLine": "DERÊ DERÊRERE DERERERERÊ...",
      "id": "1413"
  },
  {
      "name": "MOMENTOS",
      "artist": "SOWETO / BELO",
      "firstLine": "DEIXA O NOSSO MUNDO SE ENCONTRAR...",
      "id": "730"
  },
  {
      "name": "QUEM SERÁ",
      "artist": "SOWETO / BELO",
      "firstLine": "ESCUTA MEU AMOR ENTENDA DE UMA VEZ...",
      "id": "605"
  },
  {
      "name": "REFÉM DO CORAÇÃO",
      "artist": "SOWETO / BELO",
      "firstLine": "SEMPRE ALGUEM ME DESPERTA...",
      "id": "956"
  },
  {
      "name": "SAY YOU'LL BE THERE",
      "artist": "SPICE GIRLS",
      "firstLine": "I’M GIVING YOU EVERYTHING...",
      "id": "1237"
  },
  {
      "name": "TOO MUCH",
      "artist": "SPICE GIRLS",
      "firstLine": "LOVE IS BLIND, AS FAR AS THE EYE CAN SEE...",
      "id": "1238"
  },
  {
      "name": "WANNABE",
      "artist": "SPICE GIRLS",
      "firstLine": "YO I’LL TELL YOU WHAT I WANT, WHAT I REALLY...",
      "id": "1236"
  },
  {
      "name": "TWO PRINCES",
      "artist": "SPIN DOCTORS",
      "firstLine": "ONE, TWO, PRINCES KNEEL BEFORE YOU...",
      "id": "1061"
  },
  {
      "name": "CLARITY OF MIND",
      "artist": "SPY VS. SPY",
      "firstLine": "BEEN YEARS GONE BY...",
      "id": "1161"
  },
  {
      "name": "BORN TO BE WILD",
      "artist": "STEPPENWOLF",
      "firstLine": "GET YOUR MOTOR RUNNING...",
      "id": "55"
  },
  {
      "name": "IN MY EYES",
      "artist": "STEVE B",
      "firstLine": "YOU’VE GOT TO BELIEVE THAT ...",
      "id": "511"
  },
  {
      "name": "ISN´T SHE LOVELY",
      "artist": "STEVIE WONDER",
      "firstLine": "ISN´T SHE LOVELY? ISN´T SHE WONDERFUL?",
      "id": "1101"
  },
  {
      "name": "PLUSH",
      "artist": "STONE TEMPLE PIRROTS",
      "firstLine": "AND I FEEL THAT TIME’S A WASTED GO...",
      "id": "444"
  },
  {
      "name": "LUKA",
      "artist": "SUZANNE VEGA",
      "firstLine": "MY NAME IS LUKA. I LIVE ON THE SECOND FLOOR...",
      "id": "1136"
  },
  {
      "name": "AERIALS",
      "artist": "SYSTEM OF A DOWN",
      "firstLine": "LIFE IS A WATERFALL...",
      "id": "1511"
  },
  {
      "name": "TOXICITY",
      "artist": "SYSTEM OF A DOWN",
      "firstLine": "CONVERSION, SOFTWARE VERSION 7.0...",
      "id": "1269"
  },
  {
      "name": "BACK FOR GOOD",
      "artist": "TAKE THAT",
      "firstLine": "I GUESS NOW IT'S TIME ... FOR ME TO GIVE UP ...",
      "id": "41"
  },
  {
      "name": "SHAKE IT OFF",
      "artist": "TAYLOR SWIFT",
      "firstLine": "I STAY OUT TOO LATE...",
      "id": "1427"
  },
  {
      "name": "ONDA",
      "artist": "TCHAKABUM",
      "firstLine": "VOU TE PEGAR.. ESSA É A GALERA DO AVIÃO...",
      "id": "415"
  },
  {
      "name": "EVERYBODY WANTS TO RULE THE WORLD",
      "artist": "TEARS FOR FEARS",
      "firstLine": "WELCOME TO YOUR LIFE...",
      "id": "1256"
  },
  {
      "name": "ESCRITO NAS ESTRELAS",
      "artist": "TETÊ SPÍNDOLA",
      "firstLine": "VOCÊ PRA MIM FOI O SOL...",
      "id": "166"
  },
  {
      "name": "WHEREVER YOU´LL GO",
      "artist": "THE CALLING",
      "firstLine": "SO LATELY, BEEN WONDERING...",
      "id": "559"
  },
  {
      "name": "CLOSER",
      "artist": "THE CHAINSMOKERS",
      "firstLine": "HEY, I WAS DOING JUST FINE BEFORE...",
      "id": "1149"
  },
  {
      "name": "LINGER",
      "artist": "THE CRANBERRIES",
      "firstLine": "IF YOU, IF YOU COULD RETURN...",
      "id": "1133"
  },
  {
      "name": "ZOMBIE",
      "artist": "THE CRANBERRIES",
      "firstLine": "ANOTHER HEAD HANGS LOWLY...",
      "id": "1132"
  },
  {
      "name": "BOYS DON'T CRY",
      "artist": "THE CURE",
      "firstLine": "I WOULD SAY I'M SORRY IF I THOUGHT THAT...",
      "id": "56"
  },
  {
      "name": "IN BETWEEN DAYS",
      "artist": "THE CURE",
      "firstLine": "YESTERDAY I GOT SO OLD...",
      "id": "1438"
  },
  {
      "name": "MR. BRIGHTSIDE",
      "artist": "THE KILLERS",
      "firstLine": "I’M COMING OUT OF MY CAGE...",
      "id": "1267"
  },
  {
      "name": "SOMEBODY TOLD ME",
      "artist": "THE KILLERS",
      "firstLine": "BREAKING MY BACK JUST TO KNOW YOUR NAME...",
      "id": "1339"
  },
  {
      "name": "FOREVER BY YOUR SIDE",
      "artist": "THE MANHATTANS",
      "firstLine": "HEY, WE STARTED OUT AS FRIENDS...",
      "id": "1870"
  },
  {
      "name": "YOUR LOVE",
      "artist": "THE OUTFIELD",
      "firstLine": "JOSIE’S ON A VACATION FAR AWAY...",
      "id": "564"
  },
  {
      "name": "EVERY BREAHT YOU TAKE",
      "artist": "THE POLICE",
      "firstLine": "EVERY BREATH YOU TAKE. EVERY MOVE...",
      "id": "197"
  },
  {
      "name": "KING OF PAIN",
      "artist": "THE POLICE",
      "firstLine": "THERE’S A LITTLE BLACK SPOT ON THE SUN TODAY...",
      "id": "1207"
  },
  {
      "name": "MESSAGE IN A BOTTLE",
      "artist": "THE POLICE",
      "firstLine": "JUST A CASTAWAY, AN ISLAND LOST AT SEA, OH...",
      "id": "340"
  },
  {
      "name": "STICKWITU",
      "artist": "THE PUSSYCAT DOLLS",
      "firstLine": "I DON’T WANNA GO ANOTHER DAY...",
      "id": "1117"
  },
  {
      "name": "ASK",
      "artist": "THE SMITHS",
      "firstLine": "SHYNESS IS NICE, AND SHYNESS CAN STOP YOU...",
      "id": "1648"
  },
  {
      "name": "MY GIRL",
      "artist": "THE TEMPTATIONS",
      "firstLine": "I'VE GOT SUNSHINE ON A CLOUDY DAY...",
      "id": "968"
  },
  {
      "name": "BLINDING LIGHTS",
      "artist": "THE WEEKEND",
      "firstLine": "I BEEN TRYNA CALL...",
      "id": "1710"
  },
  {
      "name": "I FEEL IT COMING",
      "artist": "THE WEEKEND",
      "firstLine": "TELL ME WHAT YOU REALLY LIKE...",
      "id": "1694"
  },
  {
      "name": "THAT THING YOU DO",
      "artist": "THE WONDERS",
      "firstLine": "YOU DOING THAT THING YOU DO...",
      "id": "525"
  },
  {
      "name": "DESENCANA",
      "artist": "THIAGUINHO",
      "firstLine": "NÃO SEI POR QUE QUIS SE ESCONDER...",
      "id": "1406"
  },
  {
      "name": "ENERGIA SURREAL",
      "artist": "THIAGUINHO",
      "firstLine": "OLHA.. A CHUVA CAINDO LÁ FORA...",
      "id": "1614"
  },
  {
      "name": "FALTA VOCÊ",
      "artist": "THIAGUINHO",
      "firstLine": "JURO QUE EU NÃO SEI MAIS O QUE EU VOU FALAR...",
      "id": "1842"
  },
  {
      "name": "FATALMENTE",
      "artist": "THIAGUINHO",
      "firstLine": "PASSEI A VIDA INTEIRA PROCURANDO ALGUÉM COMO VOCÊ...",
      "id": "1401"
  },
  {
      "name": "FUGIDINHA",
      "artist": "THIAGUINHO",
      "firstLine": "TÔ BEM NA PARADA.. NINGUÉM CONSEGUE ENTENDER...",
      "id": "1689"
  },
  {
      "name": "LIVRE PRA VOAR",
      "artist": "THIAGUINHO",
      "firstLine": "QUANDO A GENTE SE ENCONTRAR...",
      "id": "1397"
  },
  {
      "name": "O SHOW TEM QUE CONTINUAR",
      "artist": "THIAGUINHO",
      "firstLine": "TEU CHORO JÁ NÃO TOCA MEU BANDOLIM...",
      "id": "1730"
  },
  {
      "name": "PELA VIDA INTEIRA",
      "artist": "THIAGUINHO",
      "firstLine": "QUERO TER VOCÊ CUSTE O QUE CUSTAR...",
      "id": "1409"
  },
  {
      "name": "TCHAU E BENÇA",
      "artist": "THIAGUINHO",
      "firstLine": "EU BEM QUE TE FALEI POR FAVOR!...",
      "id": "1402"
  },
  {
      "name": "A AMIZADE É TUDO",
      "artist": "THIAGUINHO / JEITO MOLEQUE",
      "firstLine": "UM SENTIMENTO NATURAL QUE ACONTECE COM RAZÃO...",
      "id": "1791"
  },
  {
      "name": "VIVER SEM TI",
      "artist": "THIAGUINHO / MARIANA RIOS",
      "firstLine": "EU NÃO VOU SABER VIVER SEM TI...",
      "id": "1533"
  },
  {
      "name": "PALAVRAS DE AMIGO",
      "artist": "THIAGUINHO E RODRIGUINHO",
      "firstLine": "QUANTAS VEZES EU VOU TER QUE TE FALAR...",
      "id": "1399"
  },
  {
      "name": "TA VENDO AQUELA LUA",
      "artist": "THIAGUINHO/EXALTA...",
      "firstLine": "TE FILMANDO EU TAVA QUIETO NO MEU CANTO...",
      "id": "609"
  },
  {
      "name": "I HATE EVERYTHING ABOUT YOU",
      "artist": "THREE DAYS GRACE",
      "firstLine": "EVERY TIME WE LIE AWAKE...",
      "id": "1143"
  },
  {
      "name": "HERE WITHOUT YOU",
      "artist": "THREE DOORS DOWN",
      "firstLine": "A HUNDRED DAYS HAVE MADE ME OLDER...",
      "id": "1142"
  },
  {
      "name": "AMEI TE VER",
      "artist": "TIAGO IORC",
      "firstLine": "AH, QUASE NINGUÉM VÊ...",
      "id": "702"
  },
  {
      "name": "QUEM?",
      "artist": "TIEE",
      "firstLine": "QUEM VAI FAZER O ARROZ?",
      "id": "845"
  },
  {
      "name": "RITA",
      "artist": "TIERRY",
      "firstLine": "SUA AUSÊNCIA TÁ FAZENDO MAIS ESTRAGO...",
      "id": "861"
  },
  {
      "name": "QUE VÊS",
      "artist": "TIHUANA",
      "firstLine": "OLHANDO NO OLHO POSSO VIAJA...",
      "id": "1586"
  },
  {
      "name": "AZUL DA COR DO MAR",
      "artist": "TIM MAIA",
      "firstLine": "AH! SE O MUNDO INTEIRO ME PUDESSE OUVIR...",
      "id": "38"
  },
  {
      "name": "DESCOBRIDOR DOS SETE MARES",
      "artist": "TIM MAIA",
      "firstLine": "UMA LUZ AZUL ME GUIA COM A FIRMEZA,,,",
      "id": "84"
  },
  {
      "name": "DIA DE DOMINGO",
      "artist": "TIM MAIA",
      "firstLine": "EU PRECISO TE FALAR... TE ENCONTRAR...",
      "id": "88"
  },
  {
      "name": "DO LEME AO PONTAL",
      "artist": "TIM MAIA",
      "firstLine": "DO LEME AO PONTAL NÃO HÁ NADA IGUÃL...",
      "id": "1856"
  },
  {
      "name": "GOSTAVA TANTO DE VOCÊ",
      "artist": "TIM MAIA",
      "firstLine": "NÃO SEI PORQUE VOCÊ SE FOI...",
      "id": "233"
  },
  {
      "name": "LEVA",
      "artist": "TIM MAIA",
      "firstLine": "FOI BOM EU FICAR COM VOCÊ O ANO INTEIRO...",
      "id": "1901"
  },
  {
      "name": "NÃO QUERO DINHEIRO",
      "artist": "TIM MAIA",
      "firstLine": "VOU PEDIR PRA VOCÊ FICAR...",
      "id": "385"
  },
  {
      "name": "PRIMAVERA",
      "artist": "TIM MAIA",
      "firstLine": "QUANDO O INVERNO CHEGAR...",
      "id": "454"
  },
  {
      "name": "I DON’T WANNA LOSE YOU",
      "artist": "TINA TURNER",
      "firstLine": "WOMEN OF A CERTAIN AGE...",
      "id": "1001"
  },
  {
      "name": "É PRECISO SABER VIVER",
      "artist": "TITÃS",
      "firstLine": "QUEM ESPERA QUE A VIDA SEJA FEITA DE ILUSÃO...",
      "id": "97"
  },
  {
      "name": "EPITÁFIO",
      "artist": "TITÃS",
      "firstLine": "DEVIA TER AMADO MAIS TER CHORADO MAIS...",
      "id": "1368"
  },
  {
      "name": "FLORES",
      "artist": "TITÃS",
      "firstLine": "OLHEI ATÉ FICAR CANSADO DE VER OS MEUS OLHOS...",
      "id": "1323"
  },
  {
      "name": "PRA DIZER ADEUS",
      "artist": "TITÃS",
      "firstLine": "VOCÊ APARECEU DO NADA...",
      "id": "1424"
  },
  {
      "name": "SONÍFERA ILHA",
      "artist": "TITÃS",
      "firstLine": "NÃO POSSO MAIS VIVER ASSIM...",
      "id": "507"
  },
  {
      "name": "EU SEI QUE VOU TE AMAR",
      "artist": "TOM JOBIM",
      "firstLine": "EU SEI QUE VOU TE AMAR...",
      "id": "1799"
  },
  {
      "name": "DANC MONKEY",
      "artist": "TONES AND I",
      "firstLine": "THEY SAY OH MY GOD I SEE THE WAY YOU SHINE...",
      "id": "896"
  },
  {
      "name": "AQUARELA",
      "artist": "TOQUINHO",
      "firstLine": "NUMA FOLHA QUALQUER...",
      "id": "1665"
  },
  {
      "name": "O CADERNO",
      "artist": "TOQUINHO",
      "firstLine": "SOU EU QUE VOU SEGUIR VOCÊ...",
      "id": "1664"
  },
  {
      "name": "BABY CAN I HOLD YOU",
      "artist": "TRACY CHAPMAN",
      "firstLine": "SORRY ... IS ALL THAT YOU CAN'T SAY...",
      "id": "40"
  },
  {
      "name": "EU TÔ QUERENDO",
      "artist": "TRAVESSOS",
      "firstLine": "PORQUE VOCÊ NÃO LARGA DE BOBEIRA..",
      "id": "1405"
  },
  {
      "name": "TÔ TE FILMANDO (SORRIA)",
      "artist": "TRAVESSOS",
      "firstLine": "TODA VEZ QUE EU VEJO VOCÊ...",
      "id": "1688"
  },
  {
      "name": "TU MANDAS NO MEU CORAÇÃO",
      "artist": "TRAVESSOS",
      "firstLine": "NÃO SEI QUANTO TEMPO O TEMPO DEIXOU...",
      "id": "1416"
  },
  {
      "name": "CHOCOLATE",
      "artist": "TREM DA ALEGRIA",
      "firstLine": "POR DETRÁS DO ARCO-íRIS ALÉM DO HORIZONTE...",
      "id": "708"
  },
  {
      "name": "HE-MAN",
      "artist": "TREM DA ALEGRIA",
      "firstLine": "NO MUNDO DE ETÉRNIA BEM DISTANTE DAQUI...",
      "id": "243"
  },
  {
      "name": "PIUí ABACAXI",
      "artist": "TREM DA ALEGRIA",
      "firstLine": "PIUí PIUí PIUí ABACAXI...",
      "id": "709"
  },
  {
      "name": "PRA VER SE COLA",
      "artist": "TREM DA ALEGRIA",
      "firstLine": "ENTRE BORRACHAS E APONTADORES...",
      "id": "997"
  },
  {
      "name": "UNI DUNI TE",
      "artist": "TREM DA ALEGRIA",
      "firstLine": "EU QUIS SABER DA MINHA ESTRELA-GUIA...",
      "id": "546"
  },
  {
      "name": "LOVEZINHO",
      "artist": "TREYCE",
      "firstLine": "TÔ INDO NA TUA CASA CONVERSAR SEM ROUPA",
      "id": "1880"
  },
  {
      "name": "JÁ SEI NAMORAR",
      "artist": "TRIBALISTAS",
      "firstLine": "JÁ SEI NAMORAR ... JÁ SIE BEIJAR DE LÍNGUA...",
      "id": "572"
  },
  {
      "name": "VELHA INFÂNCIA",
      "artist": "TRIBALISTAS",
      "firstLine": "VOCÊ É ASSIM, UM SONHO PRA MIM...",
      "id": "549"
  },
  {
      "name": "I STILL HAVEN'T FOUND ..",
      "artist": "U2",
      "firstLine": "I HAVE CLIMBED THE HIGHEST MOUNTAINS...",
      "id": "250"
  },
  {
      "name": "WITH OR WITHOUT",
      "artist": "U2",
      "firstLine": "SEE THE STONE SET IN YOUR EYES...",
      "id": "561"
  },
  {
      "name": "CIÚME",
      "artist": "ULTRAJE A RIGOR",
      "firstLine": "EU QUERO LEVAR UMA VIDA MODERNINHA...",
      "id": "69"
  },
  {
      "name": "NADA A DECLARAR",
      "artist": "ULTRAJE A RIGOR",
      "firstLine": "EU TÔ SENTINDO QUE A GALERA ANDA ENTEDIADA...",
      "id": "1321"
  },
  {
      "name": "NÓS VAMOS INVADIR SUA PRAIA",
      "artist": "ULTRAJE A RIGOR",
      "firstLine": "DAQUI DO MORRO DÁ PRA VER TÃO LEGAL...",
      "id": "393"
  },
  {
      "name": "PELADO",
      "artist": "ULTRAJE A RIGOR",
      "firstLine": "QUE LEGAL VOCÊS PELADOS AQUI...",
      "id": "1100"
  },
  {
      "name": "SEXO",
      "artist": "ULTRAJE A RIGOR",
      "firstLine": "SEXO! COMO É QUE EU FICO SEM SEXO?",
      "id": "1099"
  },
  {
      "name": "CARTA AOS MISSIONÁRIOS",
      "artist": "UNS E OUTROS",
      "firstLine": "MISSIONÁRIOS DE UM MUNDO PAGÃO...",
      "id": "1508"
  },
  {
      "name": "AI, AI, AI",
      "artist": "VANESSA DA MATTA",
      "firstLine": "SE VOCÊ QUISER. EU VOU TE DAR UM AMOR...",
      "id": "19"
  },
  {
      "name": "PALPITE",
      "artist": "VANESSA RANGEL",
      "firstLine": "TO COM SAUDADE DE VOCÊ...",
      "id": "425"
  },
  {
      "name": "SONHOS DE UM PALHAÇO",
      "artist": "VANUSA",
      "firstLine": "VEJAM Só... QUE HISTóRIA BOBA EU TENHO PRA CONTAR...",
      "id": "1873"
  },
  {
      "name": "EU SEI QUE VOU TE AMAR",
      "artist": "VINICIUS DE MORAES",
      "firstLine": "EU SEI QUE VOU TE AMAR...",
      "id": "1666"
  },
  {
      "name": "BORBOLETAS",
      "artist": "VITOR E LEO",
      "firstLine": "PERCEBO QUE O TEMPO JÁ NÃO PASSA...",
      "id": "52"
  },
  {
      "name": "ANJO OU MULHER",
      "artist": "VITOR KLEY",
      "firstLine": "ELA CHEGOU QUANDO NINGUÉM ESPERAVA...",
      "id": "1492"
  },
  {
      "name": "MORENA",
      "artist": "VITOR KLEY",
      "firstLine": "ELA RIU DO MEU CABELO SEM ME CONHECER...",
      "id": "1433"
  },
  {
      "name": "O SOL",
      "artist": "VITOR KLEY",
      "firstLine": "O SOL VÊ SE NÃO ESQUECE E ME ILUMINA....",
      "id": "405"
  },
  {
      "name": "PUPILA",
      "artist": "VITOR KLEY / ANAVITÓRIA",
      "firstLine": "COMO QUE EU VOU DIZER PRA ELA...",
      "id": "966"
  },
  {
      "name": "A TAL CANÇÃO PRA LUA",
      "artist": "VITOR KLEY & SAMUEL ROSA",
      "firstLine": "DEIXA EU QUERER VOAR...",
      "id": "1103"
  },
  {
      "name": "FOGO E PAIXÃO",
      "artist": "WANDO",
      "firstLine": "VOCÊ É LUZ, É RAIO ESTRELA E LUAR...",
      "id": "213"
  },
  {
      "name": "RIGHT BETWEEN THE EYES",
      "artist": "WAX",
      "firstLine": "TRUE LOVE FOR ME WAS NOTHING BUT...",
      "id": "1050"
  },
  {
      "name": "BLINDING LIGHTS",
      "artist": "WEEKEND",
      "firstLine": "I BEEN TRYNA CALL...",
      "id": "1113"
  },
  {
      "name": "I FEEL IT COMING",
      "artist": "WEEKEND",
      "firstLine": "TELL ME WHAT YOU REALLY LIKE...",
      "id": "905"
  },
  {
      "name": "AR CONDICIONADO NO 15",
      "artist": "WESLEY SAFADÃO",
      "firstLine": "CINCO DIAS,UMA HORA,DEZ MINUTOS....",
      "id": "35"
  },
  {
      "name": "CAMAROTE",
      "artist": "WESLEY SAFADÃO",
      "firstLine": "COMO É QUE VOCÊ,AINDA TEM CORAGEM....",
      "id": "61"
  },
  {
      "name": "IS THIS LOVE",
      "artist": "WHITESNAKE",
      "firstLine": "I SHOULD HAVE KNOWN BETTER",
      "id": "1482"
  },
  {
      "name": "LOVE AIN’T NO STRANGER",
      "artist": "WHITESNAKE",
      "firstLine": "WHO KNOWS WHERE THE COLD WIND BLOWS...",
      "id": "1655"
  },
  {
      "name": "I HAVE NOTHING",
      "artist": "WHITNEY HOUSTON",
      "firstLine": "SHARE MY LIFE ... TAKE ME FOR WHAT I AM...",
      "id": "1068"
  },
  {
      "name": "I WILL ALWAYS LOVE YOU",
      "artist": "WHITNEY HOUSTON",
      "firstLine": "IF I SHOULD STAY...",
      "id": "1067"
  },
  {
      "name": "ABECEDÁRIO DA XUXA",
      "artist": "XUXA",
      "firstLine": "A DE AMOR, \"B\" DE BAIXINHO...",
      "id": "16"
  },
  {
      "name": "ARCO-íRIS",
      "artist": "XUXA",
      "firstLine": "VOU PINTAR UM ARCO-íRIS DE ENERGIA...",
      "id": "1645"
  },
  {
      "name": "BRINCAR DE ÍNDIO",
      "artist": "XUXA",
      "firstLine": "VAMOS BRINCAR DE íNDIO...",
      "id": "1644"
  },
  {
      "name": "DOCE MEL",
      "artist": "XUXA",
      "firstLine": "BOM ESTAR COM VOCÊ...",
      "id": "721"
  },
  {
      "name": "ILARIÊ",
      "artist": "XUXA",
      "firstLine": "TÁ NA HORA, TÁ NA HORA...",
      "id": "256"
  },
  {
      "name": "LUA DE CRISTAL",
      "artist": "XUXA",
      "firstLine": "TUDO PODE SER, SE QUISER SERÁ...",
      "id": "304"
  },
  {
      "name": "TINDOLELÊ",
      "artist": "XUXA",
      "firstLine": "TODO MUNDO TÁ FELIZ? ...",
      "id": "529"
  },
  {
      "name": "CAMINHOS DE SOL",
      "artist": "YAHOO",
      "firstLine": "SEM VOCÊ A VIDA PODE PARECER...",
      "id": "1807"
  },
  {
      "name": "MORDIDA DE AMOR",
      "artist": "YAHOO",
      "firstLine": "QUANDO FAZ AMOR, SE OLHA NO ESPELHO...",
      "id": "1802"
  },
  {
      "name": "TOMA TOMA VAPO VAPO",
      "artist": "ZÉ FELIPE",
      "firstLine": "AH MEU CORAÇÃO SE APAIXONOU...",
      "id": "1902"
  },
  {
      "name": "LARGADO AS TRAÇAS",
      "artist": "ZÉ NETO E CRISTIANO",
      "firstLine": "MEU ORGULHO CAIU QUANDO SUBIU O ÁLCOOL...",
      "id": "277"
  },
  {
      "name": "CHÃO DE GIZ",
      "artist": "ZÉ RAMALHO",
      "firstLine": "EU DESÇO DESSA SOLIDÃO...",
      "id": "1663"
  },
  {
      "name": "CIDADÃO",
      "artist": "ZÉ RAMALHO",
      "firstLine": "TÁ VENDO AQUELE EDIFíCIO MOÇO..",
      "id": "1662"
  },
  {
      "name": "FREVO MULHER",
      "artist": "ZÉ RAMALHO",
      "firstLine": "QUANTOS AQUI OUVEM OS OLHOS ERAM DE FÉ...",
      "id": "1219"
  },
  {
      "name": "LETíCIA",
      "artist": "ZÉ VAQUEIRO",
      "firstLine": "POR QUE VOCÊ FOI ME ILUDIR",
      "id": "1054"
  },
  {
      "name": "TELEGRAMA",
      "artist": "ZECA BALEIRO",
      "firstLine": "EU TAVA TRISTE, TRISTINHO....",
      "id": "522"
  },
  {
      "name": "OGUM",
      "artist": "ZECA PAGODINHO",
      "firstLine": "EU SOU DESCENDENTE ZULÚ...",
      "id": "1521"
  },
  {
      "name": "CATEDRAL",
      "artist": "ZÉLIA DUNCAN",
      "firstLine": "NO DESERTO QUE ATRAVESSEI, NINGUEM ME VIU...",
      "id": "774"
  },
  {
      "name": "É O AMOR",
      "artist": "ZEZÉ DI CAMARGO LUCIANO",
      "firstLine": "EU NÃO VOU NEGAR QUE SOU LOUCO POR VOCÊ...",
      "id": "96"
  },
  {
      "name": "SEM MEDO DE SER FELIZ",
      "artist": "ZEZÉ DI CAMARGO LUCIANO",
      "firstLine": "TIRA ESSA PAIXÃO DA CABEÇA...",
      "id": "1874"
  },
  {
      "name": "VOCÊ VAI VER",
      "artist": "ZEZÉ DI CAMARGO LUCIANO",
      "firstLine": "VOCÊ PODE ENCONTRAR MUITOS AMORES...",
      "id": "1525"
  },
  {
      "name": "ASA MORENA",
      "artist": "ZIZI POSSI",
      "firstLine": "ME FAZ PEQUENA, ASA MORENA...",
      "id": "1222"
  },
  {
      "name": "PERIGO",
      "artist": "ZIZI POSSI",
      "firstLine": "NEM QUERO SABER SE O CLIMA É PRA ROMANCE...",
      "id": "1221"
  }
]