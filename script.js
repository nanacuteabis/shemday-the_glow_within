// ===== Quotes versi Bahasa Indonesia santai & menyentuh =====
const quotes = {
  "kucing": {
    "oren": "Like an orange cat curiously exploring its world, kamu selalu penasaran sama hal-hal baru dan berani coba sesuatu yang berbeda, dan itu menurutku sangat keren. Even if u feel unsure sometimes, remember that every step u take is progress, dan kamu layak banget diapresiasi hari ini dan setiap hari ✨",
    "hitam": "U move through the world with quiet mystery, like a black cat slipping through moonlight. Your presence lifts others, and even in the shadows, your light shines bright. Remember to care for yourself with the same love u give to everyone around u yh kak 🖤",
    "putih": "Pure and gentle like a white cat, kamu selalu bikin orang di sekitar kamu merasa diperhatikan. Your kindness touches everyone, remember that your heart deserves love too 🤍"
  },
  "anjing": {
    "golden": "Kamu punya cahaya sendiri, like a Golden Retriever, Kamu selalu bikin orang lain ngerasa dicintai dan dihargai. Bahkan ketika kamu lagi capek, kamu masih bisa menyebar kehangatan buat orang lain. Dunia ini jadi lebih berwarna karena ada kamu di dalamnya kak 💕",
    "husky": "Kamu itu sgt berharga, never forget that. Bahkan saat kamu ngerasa lelah atau ragu, everything about u matters dan setiap langkah kecil yang kamu ambil itu sgt berarti entah buat kamu sendiri atau buat orang lain. Kamu amat sgt pantas buat dicintai, dihargai, dan dihormati, jangan lupa untuk menghargai diri kamu sendiri juga yaa 🌼🌟",
    "bulldog": "Like a Bulldog enjoying the warm sun, kamu tu dari luar keliatan kuat bgt, but i know deep down kadang kamu nggak sekuat itu untuk menghadapi hari-hari ini. It's okay kalau kamu mau berhenti sejenak, take a deep breath and everything will be fine...💛"
  }
};

let selectedAnimal = "";
let selectedSub = "";

// Deskripsi awal muncul 10 detik
setTimeout(() => {
  const desc = document.getElementById('description');
  if (desc) desc.style.display = 'none';
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

  const quoteDiv = document.getElementById('quote');
  const quoteText = quotes[selectedAnimal][selectedSub];

  setTimeout(() => {
    quoteDiv.innerText = quoteText;
    quoteDiv.style.opacity = 1;

    // tombol Main Lagi
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
    }  showFirstQuestion();
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
}  showFirstQuestion();
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
