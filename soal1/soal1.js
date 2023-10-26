const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// Membuat objek untuk menyimpan jumlah karakter
const characterCount = {};

// Mengiterasi melalui setiap karakter dalam paragraf
for (let i = 0; i < paragraph.length; i++) {
  const char = paragraph[i];
  // Memeriksa apakah karakter sudah ada di objek karakterCount
  if (characterCount[char]) {
    characterCount[char]++;
  } else {
    characterCount[char] = 1;
  }
}

// Menampilkan hasil perhitungan
for (const char in characterCount) {
  console.log(
    `Karakter "${char}" muncul sebanyak ${characterCount[char]} kali.`
  );
}
