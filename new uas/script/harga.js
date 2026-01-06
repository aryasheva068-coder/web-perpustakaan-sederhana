function updateHarga() {
  const hargaBuku = {
    mikrotik1: 75000,
    mikrotik2: 85000,
    mikrotik3: 95000,
    mikrotik4: 105000,
    wuthering: 82000,
    se7en: 90000,
    outsider: 88000,
    spectre: 87000,
    comeback: 86000,
    hobbit: 92000,
    dragon: 89000,
    lightfall: 82000,
    kungfu: 90000,
    beasts: 88000,
  };

  const buku = document.getElementById("buku").value;
  const nominal = document.getElementById("nominal");

  if (buku && hargaBuku[buku]) {
    nominal.value = "Rp " + hargaBuku[buku].toLocaleString("id-ID");
  } else {
    nominal.value = "";
  }
}

function validasiForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();
  const buku = document.getElementById("buku").value;
  const nominal = document.getElementById("nominal").value.trim();
  const pembayaran = document.getElementById("pembayaran").value;

  if (
    username === "" ||
    password === "" ||
    email === "" ||
    buku === "" ||
    nominal === "" ||
    pembayaran === ""
  ) {
    alert("Semua data wajib diisi!");
    return false;
  }

  return true;
}
