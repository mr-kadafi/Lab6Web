# Praktikum 6 — JavaScript DOM dan Event Handling

## Identitas Praktikum

- **Nama:** Mu’ammar Kadafi
- **NIM:** 312510192
- **Program Studi/Semester:** Teknik Informatika / 3
- **Mata Kuliah:** Pemrograman Web
- **Dosen Pengampu:** Agung Nugroho, S.Kom., M.Kom.
- **Kelas:** I253C
- **Hari/Tanggal:** Sabtu, 31 Oktober 2026
- **Pertemuan:** 7 (Online)

## Tujuan Praktikum

- Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
- Menggunakan id, class, dan selector CSS untuk memilih elemen HTML.
- Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
- Menangani event pengguna menggunakan addEventListener().
- Membuat validasi form dan menampilkan pesan sesuai kondisi input.
- Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

## Struktur

![Screenshot struktur](screenshots/struktur.png)

## Langkah-Langkah Praktikum

### 1. Mempersiapkan Text Editor

Mempersiapkan text editor yang akan digunakan untuk menulis kode program, misalnya Visual Studio Code.

### 2. Membuat Folder Kerja

Membuat folder kerja dengan nama ` lab6_dom_event` sebagai tempat menyimpan file praktikum.

### 3. Membuat File

Membuat file baru dengan nama `index.html`, `style.css` dan `script.js` di dalam folder kerja yang telah dibuat. Hubungkan file CSS dan JavaScript dari index.html.

### 4. Menuliskan kode

Pada file index.html, isi dengan kode berikut.

![Screenshot langkah 4](screenshots/4.1.png)

Pada file  script.js, isi dengan kode berikut.

![Screenshot langkah 4](screenshots/4.2.png)

Tampilan akan terlihat seperti pada gambar berikut.

![Screenshot langkah 4](screenshots/4.3.png)

### 5. Event click

Saat tombol diklik, ubah teks paragraf dan tampilkan waktu saat tindakan dilakukan.

![Screenshot langkah 5](screenshots/5.1.png)

Tampilan akan terlihat seperti pada gambar berikut.

![Screenshot langkah 5](screenshots/5.2.png)

Tampilan setelah menekan tombol beberapa kali 

![Screenshot langkah 5](screenshots/5.3.png)

### 6. Mengubah kelas dan gaya CSS

Tambahkan aturan CSS berikut ke style.css dan buat paragraf id teksGaya serta tombol id tombolGaya. 

Tambahkan kode berikut pada index.html.

![Screenshot langkah 6](screenshots/6.1.png)

Tambahkan kode berikut pada style.css. 

![Screenshot langkah 6](screenshots/6.2.png)

Tambahkan kode berikut pada script.js.

![Screenshot langkah 6](screenshots/6.3.png)

Tampilan akan terlihat seperti pada gambar berikut.

![Screenshot langkah 6](screenshots/6.4.png)

Tampilan setelah menekan tombol ubah gaya seperti gambar berikut. 

![Screenshot langkah 6](screenshots/6.5.png)

### 7. MengEvent input dan penghitung karakter

Buat input teks dan indikator jumlah karakter yang diperbarui saat pengguna mengetik.  

Tambahkan kode berikut pada index.html.

![Screenshot langkah 7](screenshots/7.1.png)

Tambahkan kode berikut pada script.js.

![Screenshot langkah 7](screenshots/7.2.png)

Tampilan akan terlihat seperti pada gambar berikut.

![Screenshot langkah 7](screenshots/7.3.png)

Tampilan sedang mengetik seperti pada gambar berikut.

![Screenshot langkah 7](screenshots/7.4.png)

Tampilan sedang menghapus seperti pada gambar berikut.

![Screenshot langkah 7](screenshots/7.5.png)

Tampilan sedang menempelkan teks seperti pada gambar berikut. 

![Screenshot langkah 7](screenshots/7.6.png)

### 8. Validasi form pendaftaran 

Buat form nama, email, dan usia. Program menampilkan pesan jika input tidak sesuai.  

Tambahkan kode berikut pada index.html.

![Screenshot langkah 8](screenshots/8.1.png)

Tambahkan kode berikut pada script.js.

![Screenshot langkah 8](screenshots/8.2.png)

Tampilan tanpa mengisi data seperti pada gambar berikut. 

![Screenshot langkah 8](screenshots/8.3.png)

Tampilan kosongkan nama, kemudian isi email dan usia seperti pada gambar berikut.

![Screenshot langkah 8](screenshots/8.4.png)

Tampilan masukkan email dengan format yang tidak valid seperti pada gambar berikut.

![Screenshot langkah 8](screenshots/8.5.png)

Tampilan masukkan usia di bawah 17 tahun seperti pada gambar berikut.

![Screenshot langkah 8](screenshots/8.6.png)

Tampilan masukkan data yang benar pada semua kolom seperti pada gambar berikut.

![Screenshot langkah 8](screenshots/8.7.png)

### 9. Daftar tugas sederhana (To-do List)  

Buat aplikasi kecil untuk menambahkan tugas dan menandai tugas selesai.  

Tambahkan kode berikut pada index.html.

![Screenshot langkah 9](screenshots/9.1.png)

Tambahkan kode berikut pada script.js.

![Screenshot langkah 9](screenshots/9.2.png)

Tambahkan kode berikut pada style.css.

![Screenshot langkah 9](screenshots/9.3.png)

Tampilan akan terlihat seperti pada gambar berikut.

![Screenshot langkah 9](screenshots/9.4.png)

Tampilan kosongkan tugas baru seperti pada gambar berikut.

![Screenshot langkah 9](screenshots/9.5.png)

Tampilan masukkan tugas baru seperti pada gambar berikut.

![Screenshot langkah 9](screenshots/9.6.png)

Tampilan menekan tombol tandai selesai seperti pada gambar berikut. 

![Screenshot langkah 9](screenshots/9.7.png)

### 10. Mini Projek – Form Pendaftaran Workshop

Buat folder Form-Pendaftaran-Workshop baru di dalam folder lab6_dom_event. Buat file di `index.html`, `style.css`, dan `script.js`, yang mencakup berikut ini:

- Validasi nama, email, dan pilihan sesi.
- Penghitung karakter atau ringkasan input secara langsung.
- Pesan kesalahan dan pesan sukses yang tampil pada halaman.
- Tombol reset atau hapus input.Gunakan addEventListener() untuk event input, change, click, atau submit.

Tambahkan kode berikut pada index.html.

![Screenshot langkah 10](screenshots/10.1.png)

![Screenshot langkah 10](screenshots/10.2.png)

Tambahkan kode berikut pada style.css.

![Screenshot langkah 10](screenshots/10.3.png)

![Screenshot langkah 10](screenshots/10.4.png)

![Screenshot langkah 10](screenshots/10.5.png)

Tambahkan kode berikut pada script.js.

![Screenshot langkah 10](screenshots/10.6.png)

![Screenshot langkah 10](screenshots/10.7.png)

![Screenshot langkah 10](screenshots/10.8.png)

Tampilan akan terlihat seperti gambar berikut.

![Screenshot langkah 10](screenshots/10.9.png)

Tampilan gagal pendaftaran. 

![Screenshot langkah 10](screenshots/10.10.png)

Tampilan berhasil pendaftaran.

![Screenshot langkah 10](screenshots/10.11.png)
