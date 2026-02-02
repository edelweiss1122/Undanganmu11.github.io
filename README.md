# 💍 Template Undangan Pernikahan Elegant

Template undangan pernikahan modern dan elegan dengan fitur lengkap. Siap untuk di-upload ke GitHub Pages!

## ✨ Fitur-Fitur

### 🎨 **Tampilan & Desain**
- ✅ Desain modern dan elegan dengan palet warna gold & cream
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Animasi smooth dan interaktif
- ✅ Loading screen dengan animasi
- ✅ Cover page yang menarik
- ✅ Typography yang indah (Google Fonts)

### 🎵 **Multimedia**
- ✅ Music player dengan kontrol play/pause
- ✅ Background music otomatis
- ✅ Galeri foto dengan lightbox viewer
- ✅ Navigasi foto (prev/next)
- ✅ Keyboard navigation (arrow keys, ESC)

### ⏱️ **Fitur Interaktif**
- ✅ Countdown timer real-time
- ✅ Form RSVP lengkap
- ✅ Amplop digital (transfer bank)
- ✅ Copy rekening dengan satu klik
- ✅ Smooth scroll navigation
- ✅ Scroll animations

### 📋 **Konten**
- ✅ Profil mempelai (foto, biodata, Instagram)
- ✅ Detail acara (akad & resepsi)
- ✅ Google Maps integration
- ✅ Timeline cerita cinta
- ✅ Galeri foto
- ✅ Quotes Al-Quran
- ✅ Ucapan terima kasih

## 🚀 Cara Menggunakan

### 1. **Download File**
Download file `wedding-invitation.html` ke komputer Anda.

### 2. **Edit Konten**
Buka file dengan text editor (VS Code, Notepad++, Sublime Text, dll) dan ubah bagian berikut:

#### **Nama Mempelai**
```html
<!-- Cari dan ganti -->
<h1>Sarah & Daniel</h1>
<!-- Ganti dengan nama Anda -->
<h1>Nama Wanita & Nama Pria</h1>
```

#### **Tanggal Pernikahan**
```html
<!-- Cari bagian ini -->
<p class="cover-subtitle">15 JUNI 2025</p>

<!-- Dan ini untuk countdown -->
const weddingDate = new Date('June 15, 2025 08:00:00').getTime();
```

#### **Data Mempelai**
Ganti informasi di section couple:
```html
<h3 class="couple-name">Sarah Amelia</h3>
<p>Bapak Ahmad Wijaya</p>
<p>Ibu Siti Nurhaliza</p>
<p>📱 Instagram: @sarahamelia</p>
```

#### **Detail Acara**
```html
<!-- Akad Nikah -->
<span>Minggu, 15 Juni 2025</span>
<span>08.00 - 10.00 WIB</span>
<span>Masjid Al-Ikhlas, Jakarta</span>

<!-- Resepsi -->
<span>Minggu, 15 Juni 2025</span>
<span>11.00 - 14.00 WIB</span>
<span>Grand Ballroom Hotel Mulia, Jakarta</span>
```

#### **Google Maps Link**
```html
<a href="https://maps.google.com" target="_blank" class="map-button">
<!-- Ganti dengan link Google Maps lokasi Anda -->
<a href="https://goo.gl/maps/LINK-ANDA" target="_blank" class="map-button">
```

#### **Cerita Cinta**
Edit timeline di section story sesuai kisah Anda:
```html
<div class="timeline-date">Januari 2020</div>
<div class="timeline-title">Pertemuan Pertama</div>
<div class="timeline-description">
    Cerita Anda di sini...
</div>
```

#### **Rekening Bank**
```html
<div class="bank-logo">Bank BCA</div>
<div class="bank-info">a.n. Sarah Amelia</div>
<div class="account-number">1234567890</div>
```

### 3. **Ganti Foto**

#### **Cara Mudah (Menggunakan Placeholder)**
Foto saat ini menggunakan SVG placeholder. Untuk menggantinya:

1. Siapkan foto Anda (format JPG/PNG)
2. Upload ke layanan hosting gambar (Imgur, Cloudinary, atau GitHub)
3. Ganti URL di bagian `<img src="...">`

Contoh:
```html
<!-- Dari -->
<img src="data:image/svg+xml,..." alt="Mempelai Wanita" class="couple-photo">

<!-- Menjadi -->
<img src="https://i.imgur.com/FOTO-ANDA.jpg" alt="Mempelai Wanita" class="couple-photo">
```

#### **Foto yang Perlu Diganti**
- Foto mempelai wanita (couple section)
- Foto mempelai pria (couple section)
- 4 foto timeline (story section)
- 6 foto galeri (gallery section)

### 4. **Ganti Musik**

```html
<!-- Cari bagian ini di akhir file -->
<audio id="bgMusic" loop>
    <source src="https://cdn.pixabay.com/audio/2022/03/10/audio_d1718372c6.mp3" type="audio/mpeg">
</audio>

<!-- Ganti URL dengan musik pilihan Anda -->
<!-- Rekomendasi: upload ke Google Drive, Dropbox, atau hosting -->
```

**Tips Musik:**
- Format: MP3
- Durasi: 2-5 menit (akan loop otomatis)
- Ukuran: maksimal 5MB untuk loading cepat
- Pilih lagu instrumental atau romantis

## 📤 Upload ke GitHub Pages

### 1. **Buat Repository Baru**
- Login ke GitHub
- Klik tombol "+" → "New repository"
- Nama repository: `wedding-invitation` atau `nama-anda-wedding`
- Centang "Public"
- Klik "Create repository"

### 2. **Upload File**
- Klik "uploading an existing file"
- Drag & drop file `wedding-invitation.html`
- **PENTING:** Rename file menjadi `index.html`
- Klik "Commit changes"

### 3. **Aktifkan GitHub Pages**
- Masuk ke Settings repository
- Scroll ke bagian "Pages"
- Di "Source", pilih branch "main"
- Pilih folder "/ (root)"
- Klik "Save"
- Tunggu beberapa menit

### 4. **Akses Website Anda**
URL akan menjadi:
```
https://username-anda.github.io/wedding-invitation/
```

## 🎨 Kustomisasi Warna

Ganti warna di bagian `:root` di CSS:

```css
:root {
    --primary-gold: #D4AF37;      /* Warna gold utama */
    --primary-dark: #2C1810;      /* Warna coklat gelap */
    --primary-cream: #F5F1E8;     /* Warna cream background */
    --accent-rose: #E8C4B8;       /* Warna rose/pink */
    --accent-sage: #9CAF88;       /* Warna hijau sage */
}
```

**Rekomendasi Palet Warna:**
- **Classic Gold:** `#D4AF37`
- **Rose Gold:** `#B76E79`
- **Navy Blue:** `#1B263B`
- **Emerald Green:** `#2D6A4F`
- **Burgundy:** `#800020`

## 🔧 Kustomisasi Font

Template menggunakan 3 font dari Google Fonts:
```html
<!-- Script font untuk judul -->
Great Vibes

<!-- Serif font untuk subtitle -->
Cormorant Garamond

<!-- Sans-serif untuk teks biasa -->
Montserrat
```

Untuk mengganti font:
1. Kunjungi [Google Fonts](https://fonts.google.com)
2. Pilih font favorit
3. Ganti link di bagian `<head>`

## 📱 Fitur Form RSVP

Form RSVP saat ini hanya menampilkan alert. Untuk integrasi dengan database:

### **Opsi 1: Google Sheets (Gratis)**
Gunakan [SheetDB](https://sheetdb.io) atau [Google Apps Script](https://developers.google.com/apps-script)

### **Opsi 2: Email**
Gunakan [EmailJS](https://www.emailjs.com) untuk kirim data via email

### **Opsi 3: WhatsApp**
Redirect ke WhatsApp dengan data pre-filled

Contoh kode untuk WhatsApp:
```javascript
function handleRSVP(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    
    const message = `Halo, saya ${name}. Saya konfirmasi kehadiran: ${attendance === 'yes' ? 'Hadir' : 'Tidak Hadir'}`;
    const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    
    window.open(waLink, '_blank');
}
```

## 🌐 Custom Domain (Opsional)

Jika Anda punya domain sendiri (misal: `pernikahan-sarah-daniel.com`):

1. Beli domain di Namecheap, GoDaddy, atau Niagahoster
2. Di GitHub repository → Settings → Pages
3. Masukkan custom domain
4. Di DNS provider, tambahkan CNAME record:
   ```
   CNAME → username.github.io
   ```

## 📊 Analytics (Opsional)

Untuk tracking pengunjung, tambahkan Google Analytics:

1. Buat akun di [Google Analytics](https://analytics.google.com)
2. Dapatkan tracking code
3. Paste di bagian `<head>` sebelum `</head>`

## 🐛 Troubleshooting

### **Musik tidak autoplay**
- Browser modern memblokir autoplay
- User harus klik tombol "Buka Undangan" terlebih dahulu
- Atau klik icon musik di pojok kanan bawah

### **Foto tidak muncul**
- Pastikan URL foto benar
- Gunakan https:// bukan http://
- Cek apakah link bisa diakses publik

### **Countdown tidak akurat**
- Pastikan format tanggal benar: `'Month DD, YYYY HH:MM:SS'`
- Contoh: `'June 15, 2025 08:00:00'`

### **Tampilan berantakan di mobile**
- Bersihkan cache browser
- Test di browser berbeda
- Pastikan tidak ada kode yang diedit error

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Baca dokumentasi dengan teliti
- Check console browser (F12) untuk error
- Google error message yang muncul

## 📄 Lisensi

Template ini gratis untuk digunakan untuk keperluan pribadi (undangan pernikahan Anda).

## 🎉 Tips Tambahan

1. **Test di berbagai device**: HP, tablet, laptop, desktop
2. **Minta feedback**: Kirim ke teman/keluarga untuk testing
3. **Backup file**: Simpan copy di Google Drive
4. **Screenshot template**: Untuk referensi jika ada yang rusak
5. **Share link**: Sebarkan via WhatsApp, Instagram Story, dll

## ⭐ Checklist Sebelum Launch

- [ ] Semua nama sudah diganti
- [ ] Tanggal dan jam sudah benar
- [ ] Lokasi dan maps link sudah benar
- [ ] Foto sudah diganti semua
- [ ] Musik sudah diganti
- [ ] Rekening bank sudah benar
- [ ] Form RSVP sudah ditest
- [ ] Timeline cerita sudah disesuaikan
- [ ] Test di mobile dan desktop
- [ ] Test semua tombol dan link
- [ ] Instagram username sudah benar

---

**Selamat! Template undangan pernikahan Anda siap digunakan! 💝**

*Made with ❤️ for your special day*
