const quotes = {
  "kucing": {
    "oren": "Like an orange cat that brightens every room it enters, your warmth and laughter light up the lives of everyone around you. Remember to take a moment for yourself too, because your heart deserves the same care that you give to others. ✨",
    "hitam": "Mysterious and elegant like a black cat, your presence leaves a mark wherever you go. You always support and uplift others, and today is a reminder to let yourself shine and feel the love that you freely give. 🖤",
    "putih": "Pure and gentle as a white cat, your kindness touches everyone around you. You carry so much love for others; don’t forget to nurture your own heart as you brighten the world. 🤍"
  },
  "anjing": {
    "golden": "Loyal and radiant like a Golden Retriever, you bring joy and comfort effortlessly. Your patience and warmth are gifts to everyone around you, and today is a moment to celebrate the amazing person you are. 🐾",
    "husky": "Adventurous and spirited like a Husky running through snow, your energy inspires everyone who meets you. You give so much to others, yet your own dreams and happiness matter just as much. ❄️",
    "bulldog": "Strong, steady, and caring like a Bulldog, your calm presence makes others feel safe and valued. Remember to honor your own journey and give yourself the love that you so freely share. 💛"
  }
};

let selectedAnimal = "";
let selectedSub = "";

setTimeout(() => {
  document.getElementById('description').style.display = 'none';
  showFirstQuestion();
}, 10000); // 10 detik

function showFirstQuestion() {
  const q = document.getElementById('question');
  const opts = document.getElementById('options');
  q.style.display = 'block';
  opts.style.display = 'block';
  q.innerText = "Pertanyaan 1: Kalo kamu terlahir kembali, kamu pilih jadi apa?";
  opts.innerHTML = `
    <button onclick="choose('kucing')">Kucing 🐱</button>
    <button onclick="choose('anjing')">Anjing 🐶</button>
  `;
  changeBackground();
}

function choose(animal) {
  selectedAnimal = animal;
  const q = document.getElementById('question');
  const opts = document.getElementById('options');
  if (animal === "kucing") {
    q.innerText = "Pilih warna kucing:";
    opts.innerHTML = `
      <button onclick="chooseSub('oren')">Oren</button>
      <button onclick="chooseSub('hitam')">Hitam</button>
      <button onclick="chooseSub('putih')">Putih</button>
    `;
  } else {
    q.innerText = "Pilih jenis anjing:";
    opts.innerHTML = `
      <button onclick="chooseSub('golden')">Golden Retriever</button>
      <button onclick="chooseSub('husky')">Husky</button>
      <button onclick="chooseSub('bulldog')">Bulldog</button>
    `;
  }
  changeBackground();
}

function chooseSub(sub) {
  selectedSub = sub;
  document.getElementById('options').style.display = 'none';
  document.getElementById('question').style.display = 'none';
  const amplop = document.getElementById('amplop');
  amplop.style.display = 'block';
  changeBackground();
}

function bukaAmplop() {
  const amplop = document.getElementById('amplop');
  amplop.classList.add('open');
  const qArray = quotes[selectedAnimal][selectedSub];
  const randomQuote = qArray[Math.floor(Math.random() * qArray.length)];

  setTimeout(() => {
    const quoteDiv = document.getElementById('quote');
    quoteDiv.innerText = randomQuote;
    quoteDiv.style.opacity = 1;

    // tombol Main Lagi muncul
    const mainLagiBtn = document.createElement('button');
    mainLagiBtn.innerText = "Main Lagi 🔄";
    mainLagiBtn.onclick = resetGame;
    mainLagiBtn.id = "mainLagiBtn";
    document.body.appendChild(mainLagiBtn);
  }, 1000);

  changeBackground();
}

function resetGame() {
  selectedAnimal = "";
  selectedSub = "";

  const amplop = document.getElementById('amplop');
  amplop.style.display = 'none';
  amplop.classList.remove('open');

  const quoteDiv = document.getElementById('quote');
  quoteDiv.style.opacity = 0;
  quoteDiv.innerText = "";

  const btn = document.getElementById('mainLagiBtn');
  if (btn) btn.remove();

  showFirstQuestion();
}

function changeBackground() {
  const colors = [
    'linear-gradient(45deg, #ff9a9e, #fad0c4)',
    'linear-gradient(45deg, #a1c4fd, #c2e9fb)',
    'linear-gradient(45deg, #fbc2eb, #a6c1ee)',
    'linear-gradient(45deg, #fdfbfb, #ebedee)',
    'linear-gradient(45deg, #84fab0, #8fd3f4)',
    'linear-gradient(45deg, #ffecd2, #fcb69f)'
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}
