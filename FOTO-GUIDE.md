# 📸 Panduan Upload & Kelola Foto

## 📋 Daftar Foto yang Dibutuhkan

### **Total: 12 Foto**
1. Foto Mempelai Wanita (1 foto - portrait)
2. Foto Mempelai Pria (1 foto - portrait)
3. Foto Timeline (4 foto - landscape/square)
4. Foto Galeri (6 foto - square/landscape)

---

## 🎨 Spesifikasi Foto yang Disarankan

### **Foto Profil Mempelai**
- **Format:** JPG atau PNG
- **Rasio:** 1:1 (Square/Kotak)
- **Ukuran:** 600x600px minimum
- **Maksimal:** 2MB per foto
- **Tips:** 
  - Gunakan foto close-up/portrait
  - Background bersih atau blur
  - Pencahayaan bagus
  - Tersenyum natural

### **Foto Timeline**
- **Format:** JPG atau PNG
- **Rasio:** 4:3 atau 16:9
- **Ukuran:** 800x600px atau 1200x800px
- **Maksimal:** 3MB per foto
- **Tips:**
  - Foto memorable moments
  - Kualitas HD
  - Cerita yang berurutan

### **Foto Galeri**
- **Format:** JPG atau PNG
- **Rasio:** 1:1 (Square) recommended
- **Ukuran:** 800x800px atau 1000x1000px
- **Maksimal:** 2MB per foto
- **Tips:**
  - Mix formal & candid
  - Variasi angle & mood
  - Hindari foto blur

---

## ☁️ Cara Upload Foto ke Cloud

### **METODE 1: Imgur (Paling Mudah & Gratis)**

#### **Langkah-langkah:**

1. **Buka Imgur**
   - Kunjungi: https://imgur.com

2. **Upload Foto**
   - Klik "New post"
   - Drag & drop foto atau click "Browse"
   - Upload semua foto sekaligus

3. **Dapatkan Link**
   - Klik foto yang sudah diupload
   - Klik kanan pada foto → "Copy image address"
   - Atau klik tombol "..." → "Get share links" → Copy "Direct link"

4. **Format Link**
   ```
   https://i.imgur.com/ABC123.jpg
   ```

**Kelebihan:**
✅ Gratis selamanya
✅ Unlimited upload
✅ Cepat dan mudah
✅ Link langsung ke gambar
✅ Tidak perlu daftar (opsional)

**Kekurangan:**
❌ Tidak bisa edit/hapus tanpa account
❌ Foto bisa dihapus imgur jika melanggar ToS

---

### **METODE 2: GitHub (Recommended untuk Project)**

#### **Langkah-langkah:**

1. **Buat Folder Images**
   - Di repository GitHub Anda
   - Buat folder baru bernama `images` atau `assets`

2. **Upload Foto**
   - Klik "Add file" → "Upload files"
   - Drag semua foto
   - Commit changes

3. **Dapatkan Link**
   - Klik foto yang diupload
   - Klik tombol "Download" (jangan download, cuma ambil link)
   - Copy URL dari address bar

4. **Format Link**
   ```
   https://raw.githubusercontent.com/username/repo-name/main/images/foto.jpg
   ```

**Kelebihan:**
✅ Terintegrasi dengan project
✅ Version control
✅ Tidak akan dihapus
✅ Professional

**Kekurangan:**
❌ Agak teknis untuk pemula
❌ Perlu punya GitHub account

---

### **METODE 3: Cloudinary (Professional)**

#### **Langkah-langkah:**

1. **Daftar Cloudinary**
   - Kunjungi: https://cloudinary.com
   - Sign up gratis (dapat 25GB storage)

2. **Upload Foto**
   - Dashboard → Media Library
   - Upload foto

3. **Dapatkan Link**
   - Klik foto → Copy URL

4. **Format Link**
   ```
   https://res.cloudinary.com/your-cloud/image/upload/v123/foto.jpg
   ```

**Kelebihan:**
✅ CDN cepat
✅ Auto optimization
✅ Image transformation
✅ Analytics

**Kekurangan:**
❌ Free tier terbatas
❌ Setup lebih kompleks

---

### **METODE 4: Google Drive (Alternatif)**

#### **Langkah-langkah:**

1. **Upload ke Google Drive**
   - Buat folder baru
   - Upload semua foto

2. **Set Sharing**
   - Klik kanan foto → Share
   - Change to "Anyone with the link"
   - Copy link

3. **Convert Link**
   - Link asli: `https://drive.google.com/file/d/FILE_ID/view`
   - Ubah jadi: `https://drive.google.com/uc?export=view&id=FILE_ID`

**Kelebihan:**
✅ Unlimited storage (15GB free)
✅ Familiar interface
✅ Easy sharing

**Kekurangan:**
❌ Link agak panjang
❌ Kadang lambat loading
❌ Perlu convert link

---

## 🔧 Cara Mengganti Link Foto di HTML

### **1. Foto Mempelai**

Cari kode ini:
```html
<!-- Foto Mempelai Wanita -->
<img src="data:image/svg+xml,..." alt="Mempelai Wanita" class="couple-photo">
```

Ganti dengan:
```html
<img src="https://i.imgur.com/LINK-FOTO-ANDA.jpg" alt="Mempelai Wanita" class="couple-photo">
```

**Ulangi untuk foto mempelai pria**

---

### **2. Foto Timeline (4 Foto)**

Cari bagian timeline:
```html
<div class="timeline-image">
    <img src="data:image/svg+xml,..." alt="Pertemuan Pertama">
</div>
```

Ganti dengan foto Anda:
```html
<div class="timeline-image">
    <img src="https://i.imgur.com/FOTO1.jpg" alt="Pertemuan Pertama">
</div>
```

**Total ada 4 timeline-image yang perlu diganti**

---

### **3. Foto Galeri (6 Foto)**

Cari bagian gallery:
```html
<div class="gallery-item" onclick="openLightbox(0)">
    <img src="data:image/svg+xml,..." alt="Gallery 1">
</div>
```

Ganti dengan:
```html
<div class="gallery-item" onclick="openLightbox(0)">
    <img src="https://i.imgur.com/GALERI1.jpg" alt="Gallery 1">
</div>
```

**Total ada 6 gallery-item**

---

### **4. Update Array Lightbox**

Di bagian JavaScript, cari:
```javascript
const galleryImages = [
    "data:image/svg+xml,...",
    "data:image/svg+xml,...",
    // ... 6 items
];
```

Ganti dengan link foto Anda:
```javascript
const galleryImages = [
    "https://i.imgur.com/GALERI1.jpg",
    "https://i.imgur.com/GALERI2.jpg",
    "https://i.imgur.com/GALERI3.jpg",
    "https://i.imgur.com/GALERI4.jpg",
    "https://i.imgur.com/GALERI5.jpg",
    "https://i.imgur.com/GALERI6.jpg"
];
```

---

## 🎨 Tips Edit Foto Sebelum Upload

### **Tools Online Gratis:**

1. **Canva** (https://canva.com)
   - Crop & resize
   - Filter & effects
   - Text overlay
   - Template ready

2. **Remove.bg** (https://remove.bg)
   - Hapus background otomatis
   - Gratis untuk low-res

3. **Pixlr** (https://pixlr.com)
   - Online Photoshop
   - Advanced editing

4. **TinyPNG** (https://tinypng.com)
   - Kompres ukuran file
   - Tetap kualitas HD

### **Edit yang Disarankan:**

✅ **Crop** - Sesuaikan rasio (1:1 untuk profil, 4:3 untuk galeri)
✅ **Brightness** - Pastikan tidak terlalu gelap
✅ **Saturation** - Warna yang hidup tapi natural
✅ **Compress** - Kurangi ukuran file untuk loading cepat
✅ **Filters** - Konsisten untuk semua foto (misal: warm tone)

---

## 📱 Naming Convention (Penamaan File)

**Format yang Baik:**
```
bride-sarah.jpg
groom-daniel.jpg
timeline-1-first-meeting.jpg
timeline-2-together.jpg
timeline-3-proposal.jpg
timeline-4-wedding.jpg
gallery-1-prewedding.jpg
gallery-2-couple-outdoor.jpg
gallery-3-candid.jpg
gallery-4-romantic.jpg
gallery-5-fun-moment.jpg
gallery-6-sunset.jpg
```

**Tips Naming:**
- Lowercase semua
- Gunakan hyphen (-) bukan spasi
- Deskriptif tapi singkat
- Urut berdasarkan nomor

---

## ✅ Checklist Upload Foto

- [ ] Edit semua foto (crop, brightness, filter)
- [ ] Kompres ukuran file (<2MB per foto)
- [ ] Rename dengan format yang baik
- [ ] Upload ke cloud storage pilihan
- [ ] Copy semua link foto
- [ ] Ganti link di HTML (12 tempat)
- [ ] Update array lightbox JavaScript
- [ ] Test di browser (cek semua foto muncul)
- [ ] Test lightbox gallery (next/prev foto)
- [ ] Test di mobile (loading cepat?)

---

## 🐛 Troubleshooting

### **Foto tidak muncul?**

1. **Cek link bisa diakses:**
   - Paste link di browser baru
   - Jika tidak bisa dibuka → link salah atau private

2. **Pastikan format link benar:**
   ```
   ✅ https://i.imgur.com/ABC123.jpg
   ❌ https://imgur.com/ABC123 (tanpa .jpg)
   ❌ https://imgur.com/gallery/ABC123
   ```

3. **Cek https vs http:**
   - Gunakan `https://` bukan `http://`
   - Mixed content bisa di-block browser

4. **Cek quotation marks:**
   ```html
   ✅ src="https://..."
   ❌ src='https://...' atau src=https://...
   ```

### **Foto loading lambat?**

1. **Compress foto:**
   - Gunakan TinyPNG
   - Target: <500KB per foto

2. **Resize dimensi:**
   - Profil: 600x600px
   - Galeri: 800x800px
   - Timeline: 1000x750px

3. **Gunakan CDN:**
   - Cloudinary atau Imgur
   - Lebih cepat dari Google Drive

### **Foto pecah/blur?**

- Upload foto dengan resolusi lebih tinggi
- Minimum 800px untuk lebar
- Gunakan format JPG dengan quality 80-90%

---

## 💡 Pro Tips

1. **Konsistensi Warna:**
   - Edit semua foto dengan filter yang sama
   - Gunakan Lightroom preset atau Canva filter

2. **Storytelling:**
   - Timeline: susun kronologis
   - Galeri: mix formal & candid

3. **Backup:**
   - Simpan semua foto original
   - Jangan hapus dari cloud storage

4. **Preview:**
   - Test di berbagai device
   - Cek kecepatan loading

5. **SEO (Optional):**
   - Rename file dengan keyword
   - Alt text yang deskriptif

---

## 📊 Comparison Table

| Storage | Free | Speed | Unlimited | Pros | Best For |
|---------|------|-------|-----------|------|----------|
| **Imgur** | ✅ | 🚀🚀🚀 | ✅ | Mudah, cepat | Pemula |
| **GitHub** | ✅ | 🚀🚀 | ❌ (1GB) | Terintegrasi | Developer |
| **Cloudinary** | ✅ | 🚀🚀🚀🚀 | ❌ (25GB) | Professional | Advanced |
| **Google Drive** | ✅ | 🚀 | ❌ (15GB) | Familiar | Simple |

---

## 🎯 Rekomendasi

**Untuk pemula:** Gunakan **Imgur**
- Paling mudah
- Tidak perlu daftar
- Langsung dapat link

**Untuk yang sudah punya GitHub:** Gunakan **GitHub**
- File terintegrasi dengan website
- Version control

**Untuk professional:** Gunakan **Cloudinary**
- Optimasi otomatis
- CDN tercepat

---

Selamat mencoba! Jika ada pertanyaan, jangan ragu untuk bertanya. 📸✨
