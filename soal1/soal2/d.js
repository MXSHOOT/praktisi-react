const n = parseInt(prompt("Masukkan jumlah angka yang ingin ditampilkan:"));
let a = 0;
let b = 0;
for (let i = 0; i < n; i++) {
  console.log(a);
  const temp = a + i;
  a = b;
  b = temp;
}
//Deret yang diberikan