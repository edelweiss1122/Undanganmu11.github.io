// ====================================
// GOOGLE SHEETS RSVP INTEGRATION
// ====================================
// 
// Panduan Setup:
// 1. Buat Google Spreadsheet baru
// 2. Buka Tools → Script Editor
// 3. Paste kode bagian "Apps Script" di bawah
// 4. Deploy sebagai Web App
// 5. Copy URL dan paste di wedding-invitation.html
//

// ====================================
// APPS SCRIPT (Google Apps Script)
// ====================================
// Paste kode ini di Google Apps Script Editor

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Tambahkan timestamp
    var timestamp = new Date();
    
    // Append data ke sheet
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.attendance,
      data.guests,
      data.message
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Data berhasil disimpan!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("RSVP API is running")
    .setMimeType(ContentService.MimeType.TEXT);
}

// ====================================
// JAVASCRIPT (Untuk wedding-invitation.html)
// ====================================
// Ganti fungsi handleRSVP() yang ada dengan kode ini:

function handleRSVP(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // GANTI URL INI dengan Web App URL dari Google Apps Script
    const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        submitBtn.textContent = '✓ Terkirim!';
        submitBtn.style.background = '#4CAF50';
        
        alert('Terima kasih! Konfirmasi Anda telah kami terima. 🎉');
        event.target.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    })
    .catch(error => {
        console.error('Error:', error);
        submitBtn.textContent = 'Gagal Kirim';
        submitBtn.style.background = '#f44336';
        
        alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    });
}

// ====================================
// ALTERNATIF: INTEGRASI WHATSAPP
// ====================================
// Kirim RSVP langsung via WhatsApp

function handleRSVPWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value;
    
    const attendanceText = attendance === 'yes' ? '✅ Hadir' : '❌ Tidak bisa hadir';
    
    const waMessage = `
*RSVP KONFIRMASI PERNIKAHAN*
━━━━━━━━━━━━━━━━━

👤 *Nama:* ${name}
📧 *Email:* ${email}
📱 *No. HP:* ${phone}
${attendanceText}
👥 *Jumlah Tamu:* ${guests} orang

💌 *Ucapan:*
${message}

━━━━━━━━━━━━━━━━━
_Terima kasih atas konfirmasinya!_
    `.trim();
    
    // GANTI dengan nomor WhatsApp Anda (format: 628xxx tanpa +)
    const waNumber = '628123456789';
    const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    
    window.open(waURL, '_blank');
    event.target.reset();
}

// ====================================
// ALTERNATIF: INTEGRASI EMAIL.JS
// ====================================
// Panduan: https://www.emailjs.com/

// 1. Daftar di EmailJS.com
// 2. Setup email service (Gmail, Outlook, dll)
// 3. Buat email template
// 4. Copy Service ID, Template ID, dan Public Key

function handleRSVPEmail(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('.submit-btn');
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;
    
    // GANTI dengan credentials dari EmailJS
    const SERVICE_ID = 'your_service_id';
    const TEMPLATE_ID = 'your_template_id';
    const PUBLIC_KEY = 'your_public_key';
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
        .then(() => {
            submitBtn.textContent = '✓ Terkirim!';
            submitBtn.style.background = '#4CAF50';
            alert('Terima kasih! Konfirmasi Anda telah kami terima via email. 🎉');
            event.target.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            submitBtn.textContent = 'Gagal Kirim';
            submitBtn.style.background = '#f44336';
            alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
        })
        .finally(() => {
            setTimeout(() => {
                submitBtn.textContent = 'KIRIM KONFIRMASI';
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        });
}

// Tambahkan script EmailJS di <head> HTML:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// ====================================
// TIPS PENGGUNAAN
// ====================================

/*
PILIHAN 1: GOOGLE SHEETS (RECOMMENDED)
Pro:
- Gratis selamanya
- Data tersimpan di spreadsheet
- Mudah dikelola
- Bisa export ke Excel

Cons:
- Setup sedikit lebih kompleks
- Perlu Apps Script

---

PILIHAN 2: WHATSAPP
Pro:
- Paling mudah setup
- Langsung chat WA
- Instant notification

Cons:
- Data tidak terstruktur
- Harus manual input ke Excel
- Bisa spam jika banyak tamu

---

PILIHAN 3: EMAILJS
Pro:
- Data via email
- Setup mudah
- Professional

Cons:
- Free tier terbatas (200 email/bulan)
- Perlu email template
- Tidak real-time

---

REKOMENDASI:
Gunakan Google Sheets untuk data terstruktur,
+ WhatsApp untuk notification instant ke HP Anda
*/

// ====================================
// BONUS: AUTO REPLY WHATSAPP
// ====================================

// Setelah user klik WhatsApp, tampilkan pesan terima kasih
function showThankYouMessage() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        z-index: 10000;
        text-align: center;
        max-width: 400px;
    `;
    
    modal.innerHTML = `
        <h3 style="color: var(--primary-gold); font-family: 'Great Vibes', cursive; font-size: 2.5rem; margin-bottom: 20px;">
            Terima Kasih! 💝
        </h3>
        <p style="margin-bottom: 20px;">
            Anda akan diarahkan ke WhatsApp untuk mengirim konfirmasi.
        </p>
        <button onclick="this.parentElement.remove()" style="
            padding: 10px 30px;
            background: var(--primary-gold);
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
        ">OK</button>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => modal.remove(), 5000);
}

// ====================================
// STRUKTUR GOOGLE SHEETS
// ====================================

/*
Buat header di baris pertama spreadsheet:

A1: Timestamp
B1: Nama
C1: Email
D1: No. HP
E1: Kehadiran
F1: Jumlah Tamu
G1: Ucapan

Data akan otomatis terisi mulai baris ke-2
*/
