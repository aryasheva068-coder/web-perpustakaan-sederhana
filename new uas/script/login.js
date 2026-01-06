// Inisialisasi Feather Icons
feather.replace();

// Fungsi login sederhana tanpa database
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (username !== "" && password !== "") {
      window.location.href = "index.html";
    } else {
      // Jika salah satu kosong, tampilkan alert
      alert("Username dan password harus diisi!");
    }
  });
