const icons = [
  "👁", // Eye symbol
  "🔺", // Triangle symbol
  "𓂀",
];

const phrases = [
  "fear the army",
  "network together, we are strong",
  "duvall duvall duvall",
  "trust the neighbors",
  "HOA",
  "mistrust the denetworker",
  "watch for the eagle",
  "love 5G signallers",
  "the man with the bucket hat",
  "stay vigilant",
  "trust in the authority",
  "trust in the state",
  "renetwork your area",
  "network",
  "the web",
  "power",
  "peace",
  "compliance",
  "we are watching",
  "you",
  "杜瓦尔华盛顿网络",
  "electric amplification",
  "carnation",
  "who and where you are",
  "war on domestic organizations",
  "fear lrads",
  "activize",
  "LRAD",
  "the eagle",
  "anonymize",
  "chameleon",
  "global nation",
  "we are strong",
  "we are everywhere",
  "everywhere",
  "networked",
  "every landmass",
  "every nationality",
  "associated with everyone",
  "we will find you.",
  "suspicious?",
  "be safe",
  "community",
];

const container = document.getElementById("animationContainer");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPolygon() {
  const polygon = document.createElement("div");
  polygon.classList.add("polygon", "flicker", "warp", "static");
  polygon.style.width = `${getRandomInt(200) + 50}px`;
  polygon.style.height = `${getRandomInt(200) + 50}px`;
  polygon.style.background = getRandomInt(2) ? "white" : "black";
  polygon.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
  polygon.style.top = `${getRandomInt(window.innerHeight)}px`;
  polygon.style.left = `${getRandomInt(window.innerWidth)}px`;
  container.appendChild(polygon);

  setTimeout(() => {
    container.removeChild(polygon);
  }, getRandomInt(500) + 500);
}

function createIcon() {
  const icon = document.createElement("div");
  icon.classList.add("icon", "flicker", "warp", "static");
  icon.innerText = icons[getRandomInt(icons.length)];
  icon.style.fontSize = `${getRandomInt(50) + 20}px`;
  icon.style.top = `${getRandomInt(window.innerHeight)}px`;
  icon.style.left = `${getRandomInt(window.innerWidth)}px`;
  container.appendChild(icon);

  setTimeout(() => {
    container.removeChild(icon);
  }, getRandomInt(500) + 500);
}

async function fetchNames() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    return data.results.map((user) => `${user.name.first} ${user.name.last}`);
  } catch (error) {
    console.error("Error fetching names:", error);
    return [];
  }
}

function createText(name) {
  const text = document.createElement("div");
  text.classList.add("name", "flicker", "warp", "static");
  text.innerText = name;
  text.style.top = `${getRandomInt(window.innerHeight)}px`;
  text.style.left = `${getRandomInt(window.innerWidth)}px`;
  container.appendChild(text);

  setTimeout(() => {
    container.removeChild(text);
  }, getRandomInt(500) + 500);
}

function createPhrase() {
  const phrase = document.createElement("div");
  phrase.classList.add("phrase", "flicker", "warp", "static");
  phrase.innerText = phrases[getRandomInt(phrases.length)];
  phrase.style.fontSize = `${getRandomInt(30) + 30}px`;
  phrase.style.top = `${getRandomInt(window.innerHeight)}px`;
  phrase.style.left = `${getRandomInt(window.innerWidth)}px`;
  container.appendChild(phrase);

  setTimeout(() => {
    container.removeChild(phrase);
  }, getRandomInt(500) + 500);
}

async function animate() {
  const names = await fetchNames();

  function animateElements() {
    createPolygon();
    if (names.length) {
      createText(names[getRandomInt(names.length)]);
    }
    createIcon();
    createPhrase();
    setTimeout(animateElements, getRandomInt(300) + 200);
  }

  animateElements();
}

animate();

// Add static overlay
const staticOverlay = document.createElement("div");
staticOverlay.classList.add("filter-static");
document.body.appendChild(staticOverlay);
