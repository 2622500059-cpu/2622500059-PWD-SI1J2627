const form = document.getElementById("formKontak");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  hasil.textContent =
    "Terima kasih! Pesan Anda berhasil ditampilkan.";

  hasil.style.color = "green";
  form.reset();
});