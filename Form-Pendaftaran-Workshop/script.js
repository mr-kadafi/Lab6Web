
// =====================================
// MENGAMBIL ELEMEN HTML
// =====================================

const form = document.getElementById("formWorkshop");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const jumlahKarakter = document.getElementById("jumlahKarakter");

const ringkasanNama = document.getElementById("ringkasanNama");
const ringkasanEmail = document.getElementById("ringkasanEmail");
const ringkasanSesi = document.getElementById("ringkasanSesi");

const pesanStatus = document.getElementById("pesanStatus");
const tombolReset = document.getElementById("tombolReset");


// =====================================
// 1. PENGHITUNG KARAKTER NAMA
// =====================================

nama.addEventListener("input", function () {

    jumlahKarakter.textContent = nama.value.length + "/50 karakter";

    perbaruiRingkasan();

    hapusPesanStatus();
});


// =====================================
// 2. RINGKASAN INPUT SECARA LANGSUNG
// =====================================

function perbaruiRingkasan() {

    ringkasanNama.textContent = nama.value.trim() || "-";

    ringkasanEmail.textContent = email.value.trim() || "-";

    ringkasanSesi.textContent = sesi.value || "-";
}


// Perbarui ringkasan ketika email diketik
email.addEventListener("input", function () {

    perbaruiRingkasan();

    hapusPesanStatus();
});


// Perbarui ringkasan ketika pilihan sesi berubah
sesi.addEventListener("change", function () {

    perbaruiRingkasan();

    hapusPesanStatus();
});


// =====================================
// 3. VALIDASI FORM PENDAFTARAN
// =====================================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const sesiValue = sesi.value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset pesan kesalahan sebelumnya
    document.getElementById("errorNama").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorSesi").textContent = "";

    pesanStatus.className = "status";

    // Validasi nama
    if (namaValue === "") {

        tampilkanError("Nama wajib diisi.", "errorNama");

    } else if (namaValue.length < 3) {

        tampilkanError("Nama minimal terdiri dari 3 karakter.", "errorNama");

    }

    // Validasi email
    else if (!polaEmail.test(emailValue)) {

        tampilkanError("Masukkan alamat email yang valid.", "errorEmail");

    }

    // Validasi pilihan sesi
    else if (sesiValue === "") {

        tampilkanError("Silakan pilih sesi workshop.", "errorSesi");

    }

    // Jika seluruh data valid
    else {

        pesanStatus.textContent =
            "Pendaftaran berhasil! Terima kasih, " +
            namaValue +
            ". Data pendaftaran Anda sudah berhasil divalidasi.";

        pesanStatus.className = "status success";

    }

});


// =====================================
// 4. FUNGSI MENAMPILKAN ERROR
// =====================================

function tampilkanError(pesan, elemenId) {

    document.getElementById(elemenId).textContent = pesan;

    pesanStatus.textContent =
        "Pendaftaran gagal. Silakan periksa kembali data Anda.";

    pesanStatus.className = "status failed";

}


// =====================================
// 5. MENGHAPUS PESAN STATUS
// =====================================

function hapusPesanStatus() {

    pesanStatus.textContent = "";

    pesanStatus.className = "status";

}


// =====================================
// 6. TOMBOL RESET FORM
// =====================================

tombolReset.addEventListener("click", function () {

    // Mengosongkan seluruh input
    form.reset();

    // Mengembalikan jumlah karakter
    jumlahKarakter.textContent = "0/50 karakter";

    // Mengembalikan ringkasan
    perbaruiRingkasan();

    // Menghapus pesan kesalahan
    document.getElementById("errorNama").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorSesi").textContent = "";

    // Menghapus pesan status
    hapusPesanStatus();

});
