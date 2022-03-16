const wordsArray = [
  "sagaz",
  "negro",
  "âmago",
  "êxito",
  "mexer",
  "termo",
  "senso",
  "nobre",
  "algoz",
  "afeto",
  "plena",
  "ética",
  "mútua",
  "sutil",
  "tênue",
  "vigor",
  "aquém",
  "audaz",
  "porém",
  "fazer",
  "sanar",
  "seção",
  "inato",
  "assim",
  "cerne",
  "ideia",
  "desde",
  "fosse",
  "poder",
  "moral",
  "torpe",
  "honra",
  "muito",
  "justo",
  "anexo",
  "fútil",
  "razão",
  "quiçá",
  "etnia",
  "ícone",
  "sobre",
  "tange",
  "égide",
  "lapso",
  "mútuo",
  "sonho",
  "expor",
  "haver",
  "hábil",
  "amigo",
  "tempo",
  "posse",
  "ávido",
  "então",
  "boçal",
  "ardil",
  "coser",
  "genro",
  "corja",
  "seara",
  "dengo",
  "prole",
  "detém",
  "causa",
  "dizer",
  "tenaz",
  "digno",
  "dever",
  "crivo",
  "saber",
  "óbice",
  "ápice",
  "ânsia",
  "brado",
  "ceder",
  "ânimo",
  "gleba",
  "pária",
  "graça",
  "assaz",
  "comum",
  "atroz",
  "culto",
  "temor",
  "sendo",
  "mundo",
  "censo",
  "pauta",
  "fugaz",
  "denso",
  "cozer",
  "valha",
  "neném",
  "ainda",
  "vício",
  "forte",
  "revés",
  "vulgo",
  "estar",
  "pudor",
  "regra",
  "dogma",
  "louco",
  "banal",
  "criar",
  "pífio",
  "impor",
  "tenro",
  "desse",
  "apraz",
  "jeito",
  "reaça",
  "ordem",
  "round",
  "atrás",
  "pedir",
  "saúde",
  "clava",
  "viril",
  "mercê",
  "usura",
  "manso",
  "juízo",
  "sábio",
  "ontem",
  "servo",
  "prosa",
  "feliz",
  "presa",
  "coisa",
  "afago",
  "fluir",
  "falar",
  "ébrio",
  "cunho",
  "forma",
  "devir",
  "meiga",
  "vendo",
  "sério",
  "platô",
  "guisa",
  "pleno",
  "visar",
  "temer",
  "mesmo",
  "cisma",
  "limbo",
  "bruma",
  "mágoa",
  "acaso",
  "puder",
  "herói",
  "êxodo",
  "gerar",
  "óbvio",
  "afins",
  "obter",
  "valor",
  "lugar",
  "ímpio",
  "matiz",
  "praxe",
  "crise",
  "senil",
  "havia",
  "vênia",
  "certo",
  "fluxo",
  "enfim",
  "álibi",
  "tédio",
  "ritmo",
  "posso",
  "garbo",
  "tomar",
  "reter",
  "pulha",
  "parvo",
  "união",
  "valia",
  "grato",
  "todos",
  "vital",
  "visão",
  "favor",
  "abrir",
  "vivaz",
  "laico",
  "bravo",
  "parco",
  "prumo",
  "fácil",
  "ameno",
  "gênio",
  "reles",
  "óbito",
  "falso",
  "possa",
  "olhar",
  "prime",
  "levar",
  "tecer",
  "burro",
  "selar",
  "anelo",
  "casta",
  "fator",
  "citar",
  "rogar",
  "adiar",
  "farsa",
  "façam",
  "ranço",
  "achar",
  "coeso",
  "noção",
  "cisão",
  "épico",
  "legal",
  "cabal",
  "morte",
  "imune",
  "sábia",
  "sinto",
  "nicho",
  "fardo",
  "falta",
  "exato",
  "ativo",
  "gente",
  "lavra",
  "amplo",
  "força",
  "ouvir",
  "viver",
  "brega",
  "gesto",
  "labor",
  "dúbio",
  "revel",
  "cesta",
  "sonso",
  "sesta",
  "sulco",
  "deter",
  "passo",
  "leigo",
  "tendo",
  "único",
  "árduo",
  "vemos",
  "atuar",
  "feixe",
  "ótica",
  "rever",
  "calma",
  "ciúme",
  "igual",
  "toada",
  "humor",
  "débil",
  "tende",
  "sonsa",
  "ideal",
  "hiato",
  "vácuo",
  "pobre",
  "ponto",
  "ambos",
  "claro",
  "terno",
  "velho",
  "remir",
  "fusão",
  "probo",
  "outro",
  "leito",
  "senão",
  "advém",
  "doido",
  "horda",
  "carma",
  "linda",
  "marco",
  "jovem",
  "inata",
  "xeque",
  "capaz",
  "fonte",
  "relva",
  "ajuda",
  "tenra",
  "algum",
  "caçar",
  "velar",
  "anuir",
  "ficar",
  "noite",
  "apoio",
  "dorso",
  "vimos",
  "rigor",
  "farão",
  "série",
  "verso",
  "botar",
  "vazio",
  "tanto",
  "líder",
  "prece",
  "cruel",
  "terra",
  "morar",
  "ambas",
  "moção",
  "frase",
  "vírus",
  "peste",
  "massa",
  "entre",
  "casto",
  "coçar",
  "pouco",
  "covil",
  "coesa",
  "fauna",
  "faina",
  "signo",
  "sente",
  "preso",
  "furor",
  "credo",
  "dócil",
  "feito",
  "lazer",
  "minha",
  "vetor",
  "árido",
  "flora",
  "raiva",
  "aceso",
  "ciclo",
  "ímpar",
  "maior",
  "chata",
  "torço",
  "beata",
  "vulto",
  "brisa",
  "houve",
  "trama",
  "breve",
  "papel",
  "vasto",
  "liame",
  "setor",
  "adeus",
  "pegar",
  "manha",
  "salvo",
  "senda",
  "ardor",
  "seita",
  "banzo",
  "morro",
  "pecha",
  "átomo",
  "prado",
  "visse",
  "reger",
  "antro",
  "blasé",
  "avaro",
  "segue",
  "livro",
  "nossa",
  "anciã",
  "comer",
  "ocaso",
  "plano",
  "peixe",
  "rezar",
  "áureo",
  "saiba",
  "ótimo",
  "saída",
  "aliás",
  "meses",
  "acima",
  "sorte",
  "chulo",
  "junto",
  "nunca",
  "fitar",
  "chuva",
  "opção",
  "jazia",
  "serão",
  "mudar",
  "fruir",
  "pajem",
  "parar",
  "bando",
  "treta",
  "fugir",
  "motim",
  "gerir",
  "prazo",
  "nação",
  "séria",
  "carro",
  "alude",
  "tosco",
  "leite",
  "sinhá",
  "norma",
  "andar",
  "época",
  "grupo",
  "brava",
  "tenso",
  "exame",
  "arcar",
  "rapaz",
  "avião",
  "ídolo",
  "lenda",
  "venal",
  "soldo",
  "tirar",
  "parte",
  "virão",
  "reino",
  "campo",
  "quota",
  "praga",
  "malta",
  "exijo",
  "sumir",
  "pompa",
  "aonde",
  "logro",
  "traga",
  "vilão",
  "fixar",
  "preto",
  "anais",
  "voraz",
  "corpo",
  "antes",
  "quase",
  "solto",
  "cheio",
  "turva",
  "nódoa",
  "agora",
  "certa",
  "cópia",
  "oásis",
  "turba",
  "alado",
  "risco",
  "apego",
  "parva",
  "filho",
  "messe",
  "índio",
  "grave",
  "doído",
  "caixa",
  "praia",
  "estão",
  "acesa",
  "prova",
  "verve",
  "apelo",
  "nível",
  "pardo",
  "psico",
  "texto",
  "fenda",
  "ligar",
  "trupe",
  "retém",
  "tocar",
  "átrio",
  "viria",
  "lindo",
  "dessa",
  "sabia",
  "alçar",
  "ficha",
  "navio",
  "opaco",
  "livre",
  "áurea",
  "astro",
  "supra",
  "fraco",
  "ético",
  "afora",
  "verba",
  "faixa",
  "elite",
  "cioso",
  "glosa",
  "parca",
  "conta",
  "autor",
  "lidar",
  "mente",
  "firme",
  "grata",
  "tinha",
  "verbo",
  "calda",
  "bater",
  "privê",
  "fatal",
  "fatos",
  "cousa",
  "oxalá",
  "reses",
  "magia",
  "junco",
  "jirau",
  "molho",
  "irmão",
  "turvo",
  "macio",
  "douto",
  "deixa",
  "torso",
  "pagão",
  "salve",
  "abriu",
  "supor",
  "pique",
  "ígneo",
  "atual",
  "asilo",
  "light",
  "rouca",
  "festa",
  "órfão",
  "posto",
  "caber",
  "extra",
  "curso",
  "besta",
  "locus",
  "ruína",
  "sexta",
  "judeu",
  "manhã",
  "paira",
  "zelar",
  "vezes",
  "ereto",
  "desta",
  "finda",
  "sarça",
  "vídeo",
  "rádio",
  "bioma",
  "combo",
  "feudo",
  "agudo",
  "tetra",
  "facto",
  "culpa",
  "vinha",
  "porta",
  "menos",
  "urgia",
  "vosso",
  "longe",
  "cútis",
  "surja",
  "advir",
  "meigo",
  "traço",
  "bônus",
  "autos",
  "tento",
  "super",
  "sítio",
  "cânon",
  "cocho",
  "drops",
  "facho",
  "rumor",
  "museu",
  "pilar",
  "suave",
  "clean",
  "lasso",
  "geral",
  "amena",
  "acolá",
  "optar",
  "medir",
  "penta",
  "turma",
  "boato",
  "pífia",
  "ações",
  "chama",
  "mosto",
  "rubro",
  "crime",
  "letal",
  "louça",
  "pacto",
  "pódio",
  "ponha",
  "lápis",
  "cover",
  "local",
  "folga",
  "nosso",
  "cacho",
  "hobby",
  "hoste",
  "aroma",
  "vigia",
  "vetar",
  "refém",
  "finjo",
  "drama",
  "fazia",
  "pasmo",
  "açude",
  "brabo",
  "feroz",
  "axila",
  "rival",
  "troça",
  "móvel",
  "mesma",
  "monte",
  "poema",
  "golpe",
  "ecoar",
  "lesse",
  "metiê",
  "riste",
  "ávida",
  "plebe",
  "fórum",
  "súcia",
  "daqui",
  "lição",
  "páreo",
  "coral",
  "teste",
  "forem",
  "monge",
  "aluno",
  "clima",
  "viram",
  "carta",
  "ébano",
  "escol",
  "macro",
  "poeta",
  "venha",
  "falha",
  "légua",
  "chato",
  "sarau",
  "farta",
  "briga",
  "cargo",
  "cetro",
  "átimo",
  "ateia",
  "passa",
  "fruto",
  "tacha",
  "perco",
  "conto",
  "plaga",
  "calmo",
  "idoso",
  "plumo",
  "busca",
  "virar",
  "piada",
  "vento",
  "roupa",
  "tarde",
  "assar",
  "chefe",
  "arado",
  "tribo",
  "aviso",
  "verde",
  "surto",
  "recém",
  "grama",
  "catre",
  "seixo",
  "traje",
  "ímpia",
  "civil",
  "ornar",
  "deste",
  "bruta",
  "deram",
  "saldo",
  "arfar",
  "fosso",
  "vedar",
  "trato",
  "depor",
  "troca",
  "beijo",
  "nuvem",
  "tição",
  "corso",
  "irado",
  "porte",
  "pasma",
  "grota",
  "canso",
  "pedra",
  "âmbar",
  "úteis",
  "silvo",
  "cifra",
  "bazar",
  "gabar",
  "régio",
  "júlia",
  "segar",
  "gíria",
  "vazão",
  "casar",
  "amado",
  "pavor",
  "tutor",
  "laudo",
  "sósia",
  "bruto",
  "tiver",
  "bença",
  "troco",
  "magna",
  "perto",
  "rural",
  "vagar",
  "molde",
  "lesto",
  "mídia",
  "tchau",
  "itens",
  "única",
  "minar",
  "nesse",
  "artur",
  "renda",
  "odiar",
  "manga",
  "vadio",
  "meche",
  "fossa",
  "sótão",
  "clero",
  "jejum",
  "inter",
  "mangá",
  "berro",
  "feita",
  "aviar",
  "paiol",
  "ileso",
  "negar",
  "largo",
  "pomar",
  "cinto",
  "órgão",
  "cenho",
  "lesão",
  "pugna",
  "canto",
  "horto",
  "visto",
  "rocha",
  "amiga",
  "ruído",
  "podar",
  "pinho",
  "invés",
  "urdir",
  "proto",
  "cível",
  "bolsa",
  "marca",
  "ufano",
  "vista",
  "frota",
  "mocho",
  "vasta",
  "densa",
  "dúbia",
  "bulir",
  "penso",
  "piche",
  "úmido",
  "peita",
  "jogar",
  "culta",
  "morfo",
  "xucro",
  "esgar",
  "resto",
  "mamãe",
  "cheia",
  "close",
  "linha",
  "fazes",
  "apear",
  "úbere",
  "chula",
  "demão",
  "misto",
  "narco",
  "findo",
  "monta",
  "natal",
  "manto",
  "campa",
  "stand",
  "amada",
  "barão",
  "fundo",
  "ágape",
  "chaga",
  "símio",
  "mover",
  "retro",
  "jazer",
  "venho",
  "álbum",
  "tenha",
  "nessa",
  "preço",
  "ardis",
  "folia",
  "punha",
  "sigla",
  "cerca",
  "seiva",
  "sabor",
  "calça",
  "álamo",
  "cosmo",
  "firma",
  "matar",
  "rente",
  "banto",
  "louro",
  "pólis",
  "ferpa",
  "salva",
  "tumba",
  "ceita",
  "míope",
  "coevo",
  "barro",
  "arroz",
  "torna",
  "verão",
  "velha",
  "sinta",
  "redor",
  "volta",
  "enjoo",
  "solta",
  "ousar",
  "bolso",
  "etapa",
  "santo",
  "áudio",
  "trago",
  "lousa",
  "zumbi",
  "fugiu",
  "corar",
  "letra",
  "nesta",
  "obtém",
  "lutar",
  "final",
  "queda",
  "cacto",
  "mimar",
  "baixa",
  "troço",
  "farol",
  "reler",
  "fátuo",
  "penca",
  "veloz",
  "vário",
  "quite",
  "nácar",
  "longo",
  "vazia",
  "neste",
  "burra",
  "coroa",
  "folha",
  "mania",
  "farto",
  "sugar",
  "forro",
  "staff",
  "puído",
  "refil",
  "bedel",
  "dança",
  "justa",
  "ultra",
  "repor",
  "viger",
  "lucro",
  "subir",
  "logos",
  "passe",
  "urgir",
  "custo",
  "sadio",
  "chave",
  "hífen",
  "sexto",
  "gueto",
  "mimos",
  "valer",
  "mouro",
  "usual",
  "sócio",
  "lento",
  "cardo",
  "salmo",
  "versa",
  "calor",
  "desça",
  "lábil",
  "calvo",
  "rédea",
  "anzol",
  "árdua",
];

const wordLength = 5;
const flipAnimationTime = 500;

const boardGrid = document.querySelector("[data-guess-board]");
const keyboard = document.querySelector("[data-keyboard]");

const year = new Date().getFullYear();
const dayOneFromYear = new Date(year, 0, 1);
const timeFromDate = Date.now() - dayOneFromYear;
const daysFromDate = timeFromDate / 1000 / 60 / 60 / 24;

const correctWord = wordsArray[Math.floor(daysFromDate)];
console.log(correctWord);

startInteraction();

function startInteraction() {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleKey);
}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKey);
}

function handleMouseClick({ target }) {
  if (target.matches("[data-key]")) {
    pressKey(target.dataset.key);
    return;
  }

  if (target.matches("[data-enter]")) {
    enterGuess();
    return;
  }

  if (target.matches("[data-delete]")) {
    deleteGuess();
    return;
  }
}

function handleKey({ key }) {
  if (key === "Enter") {
    enterGuess();
    return;
  }

  if (key === "Backspace" || key === "Delete") {
    deleteGuess();
    return;
  }

  if (key.match(/^[a-z]$/)) {
    pressKey(key);
    return;
  }
}

function pressKey(key) {
  const activeLetter = getActiveLetter();
  if (activeLetter.length >= wordLength) return;

  const nextGuess = boardGrid.querySelector(":not([data-letter])");
  nextGuess.dataset.letter = key.toLowerCase();
  nextGuess.innerText = key;
  nextGuess.dataset.state = "active";
}

function enterGuess() {
  const activeLetter = Array.from(getActiveLetter());
  if (activeLetter.length !== wordLength) {
    swal({
      title: "Um erro ocorreu!",
      text: "Você precisa preencher todos os espaços.",
      icon: "warning",
    });
    return;
  }

  const guess = activeLetter.reduce((word, letter) => {
    return word + letter.dataset.letter;
  }, "");

  if (!wordsArray.includes(guess)) {
    swal({
      title: "Um erro ocorreu!",
      text: "Essa palavra não existe no dicionário.",
      icon: "warning",
    });
    return;
  }

  stopInteraction();
  activeLetter.forEach((...args) => flipLetter(...args, guess));
}

function flipLetter(tile, index, array, guess) {
  const letter = tile.dataset.letter;
  const key = keyboard.querySelector(`[data-key="${letter}"i]`);

  setTimeout(() => {
    tile.classList.add("flip-letter");
  }, (index * flipAnimationTime) / 2);

  tile.addEventListener(
    "transitionend",
    () => {
      tile.classList.remove("flip-letter");

      if (correctWord[index] === letter) {
        tile.dataset.state = "correct";
        key.classList.add("correct");
      } else if (correctWord.includes(letter)) {
        tile.dataset.state = "wrong-location";
        key.classList.add("wrong-location");
      } else {
        tile.dataset.state = "wrong";
        key.classList.add("wrong");
      }

      if (index === array.length - 1) {
        startInteraction();
        checkIfWins(guess);
      }
    },
    { once: true }
  );
}

function checkIfWins(guess) {
  if (guess === correctWord) {
    swal({
      title: "Você acertou a palavra do dia!",
      text: `Após 4 tentativas, você acertou a palavra que era ${correctWord.toUpperCase()}`,
      icon: "success",
    });
    stopInteraction();
    return;
  }

  const remainingLetters = boardGrid.querySelectorAll(":not([data-letter])");

  if (remainingLetters.length === 0) {
    swal({
      title: "Você não conseguiu acertar!",
      text: `A palavra correta do dia era ${correctWord.toUpperCase()}`,
      icon: "error",
    });
    stopInteraction();
    return;
  }
}

function deleteGuess() {
  const activeLetter = getActiveLetter();
  const activeLetterLength = activeLetter.length;
  const lastLetter = activeLetter[activeLetterLength - 1];

  if (!lastLetter) return null;
  lastLetter.innerText = "";
  delete lastLetter.dataset.state;
  delete lastLetter.dataset.letter;
}

function getActiveLetter() {
  return boardGrid.querySelectorAll("[data-state=active]");
}
