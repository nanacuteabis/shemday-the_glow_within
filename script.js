const quotes = {
  "kucing": {
    "oren": [
      "Hidup ini lucu, nikmati setiap momennya 😎",
      "Jika kucing bisa tertawa, kamu juga bisa!",
      "Tertawa itu gratis, jadi pakai semua 😆"
    ],
    "hitam": [
      "Gelap? Tidak masalah, kucing hitam pun tetap lucu 😎",
      "Tertawa bisa mengalahkan kegelapan!",
      "Setiap tawa menambah cahaya dalam hati 🖤"
    ],
    "putih": [
      "Putih bersih, tawa juga bersih 😎",
      "Hari ini, buat senyuman jadi momen spesial!",
      "Tertawa bersama itu selalu menyenangkan 🤍"
    ]
  },
  "anjing": {
    "golden": [
      "Anjing lucu, hidup juga lucu 😎",
      "Tertawa seperti Golden Retriever, hangat dan menyenangkan!",
      "Setiap hari adalah kesempatan untuk senyum 🎉"
    ],
    "husky": [
      "Husky yang lucu = tawa tanpa batas 😎",
      "Jangan lupa ketawa hari ini!",
      "Hidup ini penuh petualangan dan tawa ❄️"
    ],
    "bulldog": [
      "Bulldog serius tapi lucu, seperti hidup kita 😎",
      "Tertawa itu kuat, bahkan untuk yang paling tenang!",
      "Senang hari ini, kuat esok hari 💛"
    ]
  }
};

let selectedAnimal = "";
let selectedSub = "";

// Deskripsi muncul 10 detik
setTimeout(() => {
  document.getElementById('description').style.display = 'none';
  showFirstQuestion();
}, 10000);

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
