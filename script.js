const quotes = {
  "kucing": {
    "oren": [
      "Today is all about your light. Shine bright like your favorite orange cat! 🌅",
      "May your day be as warm and radiant as an orange sunrise. 🍊",
      "Remember, every small step you take adds light to your path. ✨"
    ],
    "hitam": [
      "Born to bloom, and bloom again—mysterious as a black cat, yet full of wonder. 🖤",
      "Even in darkness, your light can shine through. 🌌",
      "Embrace the mystery and magic of today. ✨"
    ],
    "putih": [
      "Wishing you a special day that is as wonderful and pure as a white cat's heart. 🤍",
      "Let your heart be light, and your spirit be free today. 🕊️",
      "A pure heart always attracts joy and love. 💖"
    ]
  },
  "anjing": {
    "golden": [
      "Congratulations on successfully making it through another year, just like a loyal Golden Retriever 🐾",
      "Your kindness and loyalty make the world brighter! ✨",
      "Celebrate today knowing you are truly valued. 🎉"
    ],
    "husky": [
      "Wishing you adventures and joy as boundless as a playful Husky ❄️",
      "Keep chasing your dreams with energy and courage! 🐾",
      "Your spirit is as unstoppable as the wind through snowy mountains. 🌨️"
    ],
    "bulldog": [
      "Birthdays are the universe's way of saying you are worth celebrating—happy day, like a calm Bulldog! 🎉",
      "May your day be filled with calm, joy, and warm moments. ☀️",
      "Strong, steady, and wonderful—you are appreciated today and always. 💛"
    ]
  }
};

let selectedAnimal = "";
let selectedSub = "";

// Deskripsi awal muncul 5 detik
setTimeout(() => {
  document.getElementById('description').style.display = 'none';
  showFirstQuestion();
}, 5000);

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

    // Buat tombol Main Lagi
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

  // Reset amplop
  const amplop = document.getElementById('amplop');
  amplop.style.display = 'none';
  amplop.classList.remove('open');

  // Reset quote
  const quoteDiv = document.getElementById('quote');
  quoteDiv.style.opacity = 0;
  quoteDiv.innerText = "";

  // Hapus tombol Main Lagi
  const btn = document.getElementById('mainLagiBtn');
  if (btn) btn.remove();

  // Tampilkan pertanyaan awal lagi
  showFirstQuestion();
}

function changeBackground() {
  const colors = [
    'linear-gradient(45deg, #ff9a9e, #fad0c4)',
    'linear-gradient(45deg, #a1c4fd, #c2e9fb)',
    'linear-gradient(45deg, #fbc2eb, #a6c1ee)',
    'linear-gradient(45deg, #fdfbfb, #ebedee)',
    'linear-gradient(45deg
