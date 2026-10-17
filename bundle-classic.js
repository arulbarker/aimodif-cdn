
        document.addEventListener('DOMContentLoaded', () => {

            // === i18n engine ===
            const T = {
                id: {
                    'app.title': 'AI Modif Studio',
                    'login.subtitle': 'Masuk dengan email pembelianmu',
                    'login.email-ph': 'email@kamu.com',
                    'login.btn': 'Masuk',
                    'login.checking': 'Memeriksa...',
                    'login.no-license': 'Belum punya lisensi?',
                    'login.buy': 'Beli di Lynk.id',
                    'nav.garasi': 'Garasi Saya',
                    'nav.tersimpan': 'Hasil Tersimpan',
                    'nav.section-studio': 'Studio Modifikasi',
                    'nav.modif': 'Modif Studio',
                    'nav.warna': 'Warna & Wrap',
                    'nav.suasana': 'Foto Studio / Suasana',
                    'nav.angle': 'Multi-Angle',
                    'nav.section-bantuan': 'Bantuan AI',
                    'nav.konsultan': 'Konsultan Modif',
                    'nav.logout': 'Keluar',
                    'nav.cepat': 'Cepat',
                    'nav.help': 'Panduan',
                    'nav.wa': 'Chat Admin',
                    'login.wa': 'Butuh bantuan? Chat Admin',
                    'wa.prefill': 'Halo Admin AI Modif Studio, saya butuh bantuan: ',
                    'tut.title': 'Panduan Singkat',
                    'tut.s1-title': 'Langsung pakai saja',
                    'tut.s1-body': 'Pilih fitur di menu, isi kolom dan pilihan yang tersedia (upload foto, tulis instruksi, pilih gaya / angle), lalu tekan tombol Generate. Semua fitur lain (Garasi, Modif Studio, Warna, Suasana, Multi-Angle, Konsultan) ada di menu.',
                    'tut.free': 'Jangan takut salah - generate GRATIS tanpa batas. Coba sebanyak yang kamu mau.',
                    'tut.s2-title': 'Hasil gagal atau tidak muncul?',
                    'tut.s2-body': 'Kemungkinan besar kamu belum login akun Google di halaman Gemini. Tekan tombol "Login" / "Sign in" di pojok kanan atas (seperti contoh di bawah), login dengan akun Google, lalu buka ulang aplikasi dan generate lagi.',
                    'tut.s2-inapp': 'Buka link dari Instagram / TikTok / WhatsApp? Pindahkan ke browser Chrome atau Safari supaya login Google tersimpan.',
                    'tut.img-alt': 'Contoh tombol login Google di halaman Gemini',
                    'tut.s3-title': 'Pasang di layar utama HP',
                    'tut.s3-body': 'Supaya bisa dibuka seperti aplikasi biasa, tanpa cari link lagi.',
                    'tut.android': 'Android (Chrome)',
                    'tut.and-1': 'Buka link aplikasi di Chrome',
                    'tut.and-2': 'Tekan ikon titik tiga ⋮ di kanan atas',
                    'tut.and-3': 'Pilih "Tambahkan ke layar utama"',
                    'tut.and-4': 'Tekan "Tambahkan" - ikon muncul di layar utama',
                    'tut.ios': 'iPhone / iPad (Safari)',
                    'tut.ios-1': 'Buka link aplikasi di Safari',
                    'tut.ios-2': 'Tekan tombol Bagikan (kotak dengan panah ke atas)',
                    'tut.ios-3': 'Gulir ke bawah, pilih "Tambahkan ke Layar Utama"',
                    'tut.ios-4': 'Tekan "Tambah" di kanan atas',
                    'tut.s4-title': 'Masih bingung?',
                    'tut.s4-body': 'Chat admin lewat WhatsApp, kami bantu.',
                    'tut.ok': 'Mengerti, mulai pakai',
                    'qk.title': 'Cepat',
                    'qk.subtitle': 'Upload foto kendaraan, tulis mau diapakan, pilih angle. Acak = 10 angle berbeda, satu angle = 5 variasi.',
                    'qk.prompt': 'Mau dimodif seperti apa?',
                    'qk.prompt-ph': 'contoh: ganti velg 19 inci hitam, body kit lebar, stiker racing merah',
                    'qk.step-angle': 'Angle hasil',
                    'qk.angle-hint': 'Acak = 10 angle berbeda, 1 hasil per angle. Pilih satu angle = 5 variasi dari sudut itu.',
                    'qk.generate-random': 'Generate 10 hasil',
                    'qk.generate-single': 'Generate 5 variasi',
                    'qk.tip1': 'Tulis instruksi spesifik: ukuran velg, warna, part yang diganti. Boleh bahasa Indonesia.',
                    'qk.tip2': 'Foto referensi velg/body kit paling berpengaruh: AI meniru desainnya ke kendaraanmu.',
                    'qk.tip3': 'Butuh pilihan gaya, part, atau latar? Buka Modif Studio, Warna & Wrap, atau Foto Studio di menu.',
                    'err.quick-empty': 'Tulis instruksi modifikasi atau tambahkan minimal satu foto referensi.',
                    'tips.title': 'Tips',
                    'btn.cancel': 'Batal',
                    'btn.delete': 'Hapus',
                    'btn.close': 'Tutup',
                    'btn.copy': 'Salin',
                    'btn.copied': 'Tersalin!',
                    'btn.clear-photos': 'Hapus foto',
                    'btn.use': 'Pakai',
                    'btn.active': 'Aktif',
                    'gr.title': 'Garasi Saya',
                    'gr.subtitle': 'Daftarkan kendaraanmu sekali, lalu pakai di semua studio tanpa upload ulang.',
                    'gr.step1': 'Foto Kendaraan',
                    'gr.upload-ph': 'Klik untuk upload 1-4 foto (depan, samping, belakang)',
                    'gr.step2': 'Identitas',
                    'gr.type': 'Jenis kendaraan',
                    'gr.name': 'Nama / merek & tipe',
                    'gr.name-ph': 'Honda Brio RS 2020 / Yamaha NMAX',
                    'gr.notes': 'Catatan (opsional)',
                    'gr.notes-ph': 'warna putih, masih standar',
                    'gr.save': 'Simpan ke Garasi',
                    'gr.list-title': 'Kendaraan Tersimpan',
                    'gr.list-empty': 'Belum ada kendaraan. Upload foto di kiri lalu simpan.',
                    'gr.tip1': 'Foto pertama jadi acuan utama. Pilih yang paling jelas, kendaraan utuh, tidak terpotong.',
                    'gr.tip2': 'Tambahkan foto dari sisi lain supaya AI paham bentuk kendaraan saat ganti angle.',
                    'gr.tip3': 'Kendaraan tersimpan di perangkat ini (bukan di server) dan jadi "kendaraan aktif" di semua studio.',
                    'gr.saved': 'Kendaraan tersimpan & jadi kendaraan aktif. Buka Modif Studio untuk mulai.',
                    'gr.del-confirm': 'Hapus kendaraan ini dari garasi?',
                    'gr.photos': 'foto',
                    'err.gr-no-photo': 'Upload minimal 1 foto kendaraan dulu.',
                    'err.gr-no-name': 'Isi nama / tipe kendaraan dulu.',
                    'err.gr-limit': 'Maksimal 6 kendaraan. Hapus salah satu dulu.',
                    'err.gr-max-photos': 'Maksimal 4 foto per kendaraan.',
                    'err.img-read': 'Gagal membaca gambar. Coba file lain.',
                    'st.step-vehicle': 'Kendaraan',
                    'st.src-garage': 'Dari Garasi',
                    'st.src-upload': 'Upload Langsung',
                    'st.active-vehicle': 'Kendaraan aktif',
                    'st.no-vehicle': 'Belum ada kendaraan aktif. Daftarkan dulu di Garasi atau upload langsung.',
                    'st.upload-ph': 'Klik untuk upload foto kendaraan',
                    'st.type': 'Jenis',
                    'st.refs-title': 'Foto Referensi Part (opsional)',
                    'st.refs-hint': 'Upload foto velg, ban, body kit, atau kendaraan lain sebagai referensi. Pilih jenis referensinya.',
                    'st.ref-wheel': 'Velg',
                    'st.ref-tire': 'Ban',
                    'st.ref-bodykit': 'Body Kit',
                    'st.ref-color': 'Warna / Wrap',
                    'st.ref-vehicle': 'Kendaraan Lain',
                    'st.ref-part': 'Part Lain',
                    'st.ref-add': 'Tambah referensi',
                    'st.extra': 'Instruksi tambahan (opsional)',
                    'st.extra-ph': 'contoh: velg 17 inci hitam doff, spion carbon',
                    'st.ratio': 'Rasio foto',
                    'st.count': 'Jumlah hasil',
                    'st.plate': 'Plat nomor',
                    'st.plate-keep': 'Pertahankan',
                    'st.plate-blur': 'Blur',
                    'st.plate-remove': 'Hapus',
                    'st.generate': 'Generate',
                    'st.results': 'Hasil',
                    'st.dl-all': 'Download Semua',
                    'st.empty': 'Hasil generate akan muncul di sini.',
                    'st.scene-mode': 'Suasana / latar',
                    'st.scene-keep': 'Pertahankan foto asli',
                    'st.scene-studio': 'Pindah ke studio',
                    'st.scene-custom': 'Pilih suasana',
                    'st.random': 'Acak',
                    'st.generating': 'Merender...',
                    'st.preview': 'Preview',
                    'st.compare': 'Bandingkan',
                    'st.regen': 'Ulangi',
                    'st.download': 'Download',
                    'st.video': 'Prompt Video',
                    'st.selected': 'dipilih',
                    'md.title': 'Modif Studio',
                    'md.subtitle': 'Upload foto kendaraan, pilih gaya & part, AI merender hasil modifikasinya. Bentuk dasar kendaraan tetap, hanya part yang berubah.',
                    'md.step-style': 'Gaya modifikasi',
                    'md.style-hint': '"Tanpa gaya" = hanya part / referensi / instruksi yang diterapkan, tanpa arahan gaya tambahan.',
                    'md.step-parts': 'Part yang dimodif',
                    'md.parts-hint': 'Pilih beberapa sekaligus. Detailkan di instruksi tambahan.',
                    'md.tip1': 'Pilih gaya dulu, lalu centang part. Makin spesifik instruksi tambahan, makin presisi hasilnya.',
                    'md.tip2': 'Foto referensi velg/body kit paling berpengaruh: AI meniru desainnya ke kendaraanmu.',
                    'md.tip3': 'Mode "Pertahankan foto asli" menjaga latar & angle persis seperti foto kamu.',
                    'md.step-angle': 'Angle hasil (opsional)',
                    'md.angle-hint': 'Kosongkan = ikut angle foto asli. Pilih 1 atau beberapa angle = satu hasil per angle (maks 10). "Acak" = angle acak sejumlah "Jumlah hasil".',
                    'st.sel-all': 'Pilih semua',
                    'st.sel-none': 'Kosongkan',
                    'st.save': 'Simpan',
                    'st.use': 'Jadikan kendaraan',
                    'st.saved': 'Tersimpan di Hasil Tersimpan.',
                    'rs.title': 'Hasil Tersimpan',
                    'rs.subtitle': 'Hasil generate yang kamu simpan. Tersimpan di perangkat ini, maksimal 10 foto.',
                    'rs.list-title': 'Koleksi',
                    'rs.empty': 'Belum ada hasil tersimpan. Klik ikon simpan di kartu hasil studio.',
                    'rs.del-confirm': 'Hapus foto ini dari koleksi?',
                    'rs.tip1': 'Simpan hanya hasil terbaik, kuota 10 foto per perangkat. Hapus yang lama kalau penuh.',
                    'rs.tip2': 'Tombol "Jadikan kendaraan" memakai hasil ini sebagai foto dasar di studio lain, misalnya lihat dari angle lain.',
                    'rs.tip3': 'Tersimpan di browser perangkat ini, bukan di server. Hapus data browser = koleksi ikut hilang, jadi download yang penting.',
                    'ct.title': 'Jadikan kendaraan di...',
                    'ct.hint': 'Hasil ini dipakai sebagai foto kendaraan (Upload Langsung) di studio yang kamu pilih.',
                    'err.rs-limit': 'Koleksi penuh (10 foto). Hapus salah satu di Hasil Tersimpan dulu.',
                    'wr.title': 'Warna & Wrap',
                    'wr.subtitle': 'Ganti warna cat atau wrap kendaraan. Bentuk, part, dan latar tetap sama.',
                    'wr.step-finish': 'Jenis finishing',
                    'wr.step-color': 'Warna',
                    'wr.custom-color': 'Warna custom',
                    'wr.custom-ph': 'contoh: hijau british racing, ungu midnight',
                    'wr.step-area': 'Area',
                    'wr.tip1': 'Finishing matte/satin lebih terlihat di foto outdoor; chrome paling bagus di studio.',
                    'wr.tip2': 'Area "Two-tone" = body warna pilihan + atap hitam (bisa diubah di instruksi tambahan).',
                    'wr.tip3': 'Mau livery/stripe? Tulis detailnya di instruksi tambahan, misal "stripe putih dua garis di kap".',
                    'su.title': 'Foto Studio / Suasana',
                    'su.subtitle': 'Kendaraan TIDAK diubah sama sekali. Hanya latar, suasana, dan pencahayaan yang diganti.',
                    'su.step-scene': 'Pilih suasana',
                    'su.step-light': 'Pencahayaan',
                    'su.step-time': 'Waktu',
                    'su.tip1': 'Studio cyclorama hitam/putih = tampilan katalog profesional untuk jualan.',
                    'su.tip2': 'Pilih "Acak" untuk dapat beberapa suasana berbeda sekaligus dalam satu generate.',
                    'su.tip3': 'Hasil di sini bisa dilanjutkan ke Multi-Angle dengan upload langsung.',
                    'an.title': 'Multi-Angle',
                    'an.subtitle': 'Dari satu foto, AI membuat kendaraan yang sama dari berbagai sudut pandang. Latar bisa ikut foto asli atau studio.',
                    'an.step-angles': 'Pilih angle',
                    'an.angles-hint': 'Satu hasil per angle yang dipilih (maks 10).',
                    'an.tip1': 'Foto kendaraan utuh dari 3/4 depan menghasilkan angle paling akurat.',
                    'an.tip2': 'Semua angle menampilkan kendaraan utuh seperti foto showroom: depan, samping, belakang kiri-kanan, agak rendah, agak tinggi.',
                    'an.tip3': 'Daftarkan 2-4 foto sisi berbeda di Garasi supaya detail belakang & samping lebih tepat.',
                    'ks.title': 'Konsultan Modif AI',
                    'ks.subtitle': 'AI menganalisis kendaraanmu lalu menyarankan 5 konsep modifikasi lengkap dengan daftar part. Satu klik untuk langsung dirender.',
                    'ks.step2': 'Tujuan & Budget',
                    'ks.goal': 'Tujuan modifikasi',
                    'ks.budget': 'Budget',
                    'ks.notes': 'Keinginan khusus (opsional)',
                    'ks.notes-ph': 'contoh: jangan ceper banget, tetap nyaman buat keluarga',
                    'ks.generate': 'Minta Saran Konsep',
                    'ks.result-title': 'Konsep Rekomendasi',
                    'ks.empty': 'Pilih kendaraan & tujuan, lalu minta saran konsep.',
                    'ks.analyzing': 'Menganalisis kendaraan...',
                    'ks.render': 'Render Konsep Ini',
                    'ks.parts': 'Part yang dipakai',
                    'ks.est': 'Estimasi biaya',
                    'ks.tip1': 'Tombol "Render Konsep Ini" otomatis membuka Modif Studio dengan daftar part terisi.',
                    'ks.tip2': 'Estimasi biaya hanya gambaran kasar pasar Indonesia, bukan harga pasti.',
                    'ks.tip3': 'Tulis keinginan khusus supaya konsep tidak melenceng dari seleramu.',
                    'ks.sent': 'Konsep dikirim ke Modif Studio. Klik Generate di sana.',
                    'err.ks-failed': 'Gagal mendapat saran. Coba lagi.',
                    'vp.title': 'Prompt Video (Image-to-Video)',
                    'vp.hint': 'Tempel prompt ini ke Veo / Kling / Runway bersama foto hasilnya.',
                    'vp.motion': 'Gerakan kamera',
                    'vp.generate': 'Buat Prompt',
                    'vp.loading': 'Menyusun prompt...',
                    'err.vp-failed': 'Gagal membuat prompt video. Coba lagi.',
                    'cmp.before': 'SEBELUM',
                    'cmp.after': 'SESUDAH',
                    'cmp.hint': 'Geser garis untuk membandingkan',
                    'wn.title': 'Apa yang Baru',
                    'wn.empty': 'Belum ada catatan rilis.',
                    'err.gen-failed': 'Generate gagal. Coba lagi beberapa saat lagi.',
                    'err.gen-rate': 'Terlalu banyak permintaan sekaligus / kuota harian akun Google ini habis. Tunggu sebentar, kurangi jumlah hasil, atau ganti akun Google.',
                    'err.gen-key': 'Permintaan ditolak Google. Paling sering karena belum login akun Google di halaman Gemini - login dulu, lalu muat ulang halaman dan coba lagi. Bisa juga karena foto terlalu besar.',
                    'btn.see-guide': 'Lihat panduan',
                    'err.gen-server': 'Server Google sedang bermasalah. Sudah dicoba ulang otomatis, coba lagi beberapa menit lagi.',
                    'err.gen-blocked': 'Foto / instruksi ini ditolak filter keamanan AI. Coba foto lain atau ubah instruksinya.',
                    'err.gen-network': 'Koneksi internet terputus / terlalu lambat. Cek sinyal lalu klik Ulangi di kartu yang gagal.',
                    'err.gen-partial': '{n} dari {m} hasil gagal. Klik Ulangi di kartu yang gagal.',
                    'err.storage': 'Penyimpanan perangkat penuh atau tidak tersedia (mode privat?). Hapus kendaraan / hasil lama atau download dulu.',
                    'st.ratio-auto': 'Ikut foto',
                    'err.no-vehicle': 'Pilih kendaraan dari garasi atau upload foto dulu.',
                    'err.no-angle': 'Pilih minimal 1 angle.',
                    'err.no-part': 'Pilih minimal 1 part atau isi instruksi tambahan.',
                    'err.login.invalid-email': 'Format email tidak valid.',
                    'err.login.failed': 'Login gagal. Coba lagi.',
                    'err.server-busy': 'Server sedang sibuk, coba lagi sebentar.',
                    'warn.session-ended': 'Sesi berakhir. Akun login di perangkat lain.',
                    'ios.save-title': 'Simpan Gambar',
                    'ios.save-hint': 'Tekan dan tahan gambar di bawah, lalu pilih "Simpan ke Foto".'
                },
                en: {
                    'app.title': 'AI Modif Studio',
                    'login.subtitle': 'Sign in with your purchase email',
                    'login.email-ph': 'you@email.com',
                    'login.btn': 'Sign In',
                    'login.checking': 'Checking...',
                    'login.no-license': 'No license yet?',
                    'login.buy': 'Buy on Lynk.id',
                    'nav.garasi': 'My Garage',
                    'nav.tersimpan': 'Saved Results',
                    'nav.section-studio': 'Modification Studio',
                    'nav.modif': 'Modif Studio',
                    'nav.warna': 'Color & Wrap',
                    'nav.suasana': 'Photo Studio / Scene',
                    'nav.angle': 'Multi-Angle',
                    'nav.section-bantuan': 'AI Assistant',
                    'nav.konsultan': 'Mod Consultant',
                    'nav.logout': 'Sign out',
                    'nav.cepat': 'Quick',
                    'nav.help': 'Guide',
                    'nav.wa': 'Chat Admin',
                    'login.wa': 'Need help? Chat Admin',
                    'wa.prefill': 'Hi AI Modif Studio Admin, I need help with: ',
                    'tut.title': 'Quick Guide',
                    'tut.s1-title': 'Just start using it',
                    'tut.s1-body': 'Pick a feature in the menu, fill in the fields and options (upload a photo, write your request, choose a style / angle), then tap Generate. All other features (Garage, Modif Studio, Color, Scene, Multi-Angle, Consultant) are in the menu.',
                    'tut.free': "Don't be afraid to make mistakes - generating is FREE and unlimited. Try as much as you like.",
                    'tut.s2-title': 'Result failed or nothing shows up?',
                    'tut.s2-body': 'Most likely you are not signed in to a Google account on the Gemini page. Tap "Sign in" at the top right (see the example below), sign in with Google, then reopen the app and generate again.',
                    'tut.s2-inapp': 'Opened the link from Instagram / TikTok / WhatsApp? Move it to Chrome or Safari so your Google sign-in is kept.',
                    'tut.img-alt': 'Example of the Google sign-in button on the Gemini page',
                    'tut.s3-title': 'Add to your phone home screen',
                    'tut.s3-body': 'Open it like a regular app, no need to look for the link again.',
                    'tut.android': 'Android (Chrome)',
                    'tut.and-1': 'Open the app link in Chrome',
                    'tut.and-2': 'Tap the three-dot icon ⋮ at the top right',
                    'tut.and-3': 'Choose "Add to Home screen"',
                    'tut.and-4': 'Tap "Add" - the icon appears on your home screen',
                    'tut.ios': 'iPhone / iPad (Safari)',
                    'tut.ios-1': 'Open the app link in Safari',
                    'tut.ios-2': 'Tap the Share button (square with an up arrow)',
                    'tut.ios-3': 'Scroll down, choose "Add to Home Screen"',
                    'tut.ios-4': 'Tap "Add" at the top right',
                    'tut.s4-title': 'Still confused?',
                    'tut.s4-body': 'Chat with the admin on WhatsApp, we will help.',
                    'tut.ok': 'Got it, start using',
                    'qk.title': 'Quick',
                    'qk.subtitle': 'Upload a vehicle photo, describe the mod, pick an angle. Random = 10 different angles, one angle = 5 variations.',
                    'qk.prompt': 'What should be modified?',
                    'qk.prompt-ph': 'e.g. 19-inch black wheels, wide body kit, red racing stripes',
                    'qk.step-angle': 'Output angle',
                    'qk.angle-hint': 'Random = 10 different angles, 1 result each. Pick one angle = 5 variations from that viewpoint.',
                    'qk.generate-random': 'Generate 10 results',
                    'qk.generate-single': 'Generate 5 variations',
                    'qk.tip1': 'Be specific: wheel size, color, parts to replace. Any language works.',
                    'qk.tip2': 'Wheel / body kit reference photos matter most: the AI copies their design onto your vehicle.',
                    'qk.tip3': 'Need style, parts or backdrop options? Open Modif Studio, Color & Wrap or Photo Studio in the menu.',
                    'err.quick-empty': 'Write a modification request or add at least one reference photo.',
                    'tips.title': 'Tips',
                    'btn.cancel': 'Cancel',
                    'btn.delete': 'Delete',
                    'btn.close': 'Close',
                    'btn.copy': 'Copy',
                    'btn.copied': 'Copied!',
                    'btn.clear-photos': 'Clear photos',
                    'btn.use': 'Use',
                    'btn.active': 'Active',
                    'gr.title': 'My Garage',
                    'gr.subtitle': 'Register your vehicle once, then use it in every studio without re-uploading.',
                    'gr.step1': 'Vehicle Photos',
                    'gr.upload-ph': 'Click to upload 1-4 photos (front, side, rear)',
                    'gr.step2': 'Identity',
                    'gr.type': 'Vehicle type',
                    'gr.name': 'Name / make & model',
                    'gr.name-ph': 'Honda Civic Type R / Yamaha NMAX',
                    'gr.notes': 'Notes (optional)',
                    'gr.notes-ph': 'white, still stock',
                    'gr.save': 'Save to Garage',
                    'gr.list-title': 'Saved Vehicles',
                    'gr.list-empty': 'No vehicles yet. Upload photos on the left and save.',
                    'gr.tip1': 'The first photo is the main reference. Pick the clearest one with the whole vehicle visible.',
                    'gr.tip2': 'Add photos from other sides so the AI understands the shape when switching angles.',
                    'gr.tip3': 'Vehicles are stored on this device (not on a server) and become the "active vehicle" in every studio.',
                    'gr.saved': 'Vehicle saved and set as active. Open Modif Studio to start.',
                    'gr.del-confirm': 'Remove this vehicle from the garage?',
                    'gr.photos': 'photos',
                    'err.gr-no-photo': 'Upload at least 1 vehicle photo first.',
                    'err.gr-no-name': 'Fill in the vehicle name / model first.',
                    'err.gr-limit': 'Maximum 6 vehicles. Delete one first.',
                    'err.gr-max-photos': 'Maximum 4 photos per vehicle.',
                    'err.img-read': 'Could not read the image. Try another file.',
                    'st.step-vehicle': 'Vehicle',
                    'st.src-garage': 'From Garage',
                    'st.src-upload': 'Direct Upload',
                    'st.active-vehicle': 'Active vehicle',
                    'st.no-vehicle': 'No active vehicle. Register one in the Garage or upload directly.',
                    'st.upload-ph': 'Click to upload a vehicle photo',
                    'st.type': 'Type',
                    'st.refs-title': 'Part Reference Photos (optional)',
                    'st.refs-hint': 'Upload photos of wheels, tires, body kits, or another vehicle as reference. Pick the reference type.',
                    'st.ref-wheel': 'Wheels',
                    'st.ref-tire': 'Tires',
                    'st.ref-bodykit': 'Body Kit',
                    'st.ref-color': 'Color / Wrap',
                    'st.ref-vehicle': 'Other Vehicle',
                    'st.ref-part': 'Other Part',
                    'st.ref-add': 'Add reference',
                    'st.extra': 'Extra instructions (optional)',
                    'st.extra-ph': 'e.g. 17 inch matte black wheels, carbon mirrors',
                    'st.ratio': 'Aspect ratio',
                    'st.count': 'Number of results',
                    'st.plate': 'License plate',
                    'st.plate-keep': 'Keep',
                    'st.plate-blur': 'Blur',
                    'st.plate-remove': 'Remove',
                    'st.generate': 'Generate',
                    'st.results': 'Results',
                    'st.dl-all': 'Download All',
                    'st.empty': 'Generated results will appear here.',
                    'st.scene-mode': 'Scene / background',
                    'st.scene-keep': 'Keep original photo',
                    'st.scene-studio': 'Move to studio',
                    'st.scene-custom': 'Choose a scene',
                    'st.random': 'Random',
                    'st.generating': 'Rendering...',
                    'st.preview': 'Preview',
                    'st.compare': 'Compare',
                    'st.regen': 'Regenerate',
                    'st.download': 'Download',
                    'st.video': 'Video Prompt',
                    'st.selected': 'selected',
                    'md.title': 'Modif Studio',
                    'md.subtitle': 'Upload a vehicle photo, pick a style & parts, and the AI renders the modified result. The base vehicle stays the same, only the parts change.',
                    'md.step-style': 'Modification style',
                    'md.style-hint': '"No style" = only the parts / references / instructions are applied, no extra style direction.',
                    'md.step-parts': 'Parts to modify',
                    'md.parts-hint': 'Select several at once. Add details in the extra instructions.',
                    'md.tip1': 'Pick a style first, then tick the parts. The more specific the extra instructions, the more precise the result.',
                    'md.tip2': 'Wheel / body kit reference photos matter most: the AI copies their design onto your vehicle.',
                    'md.tip3': '"Keep original photo" keeps the background & angle exactly like your photo.',
                    'md.step-angle': 'Output angle (optional)',
                    'md.angle-hint': 'Leave empty = same angle as the original photo. Pick 1 or more angles = one result per angle (max 10). "Random" = random angles, as many as "Number of results".',
                    'st.sel-all': 'Select all',
                    'st.sel-none': 'Clear',
                    'st.save': 'Save',
                    'st.use': 'Use as vehicle',
                    'st.saved': 'Saved to Saved Results.',
                    'rs.title': 'Saved Results',
                    'rs.subtitle': 'Generated results you saved. Stored on this device, up to 10 photos.',
                    'rs.list-title': 'Collection',
                    'rs.empty': 'Nothing saved yet. Tap the save icon on a studio result card.',
                    'rs.del-confirm': 'Remove this photo from the collection?',
                    'rs.tip1': 'Save only your best results, 10 photos per device. Delete old ones when full.',
                    'rs.tip2': '"Use as vehicle" uses this result as the base photo in another studio, e.g. to view it from other angles.',
                    'rs.tip3': 'Stored in the browser of this device, not on a server. Clearing browser data clears the collection, so download what matters.',
                    'ct.title': 'Use as vehicle in...',
                    'ct.hint': 'This result becomes the vehicle photo (Direct Upload) in the studio you pick.',
                    'err.rs-limit': 'Collection is full (10 photos). Delete one in Saved Results first.',
                    'wr.title': 'Color & Wrap',
                    'wr.subtitle': 'Change the paint color or wrap. Shape, parts, and background stay the same.',
                    'wr.step-finish': 'Finish type',
                    'wr.step-color': 'Color',
                    'wr.custom-color': 'Custom color',
                    'wr.custom-ph': 'e.g. british racing green, midnight purple',
                    'wr.step-area': 'Area',
                    'wr.tip1': 'Matte/satin finishes show best outdoors; chrome looks best in a studio.',
                    'wr.tip2': '"Two-tone" = body in your color + black roof (change it in the extra instructions).',
                    'wr.tip3': 'Want a livery/stripes? Describe it in the extra instructions, e.g. "two white stripes on the hood".',
                    'su.title': 'Photo Studio / Scene',
                    'su.subtitle': 'The vehicle is NOT changed at all. Only the background, scene, and lighting are replaced.',
                    'su.step-scene': 'Choose a scene',
                    'su.step-light': 'Lighting',
                    'su.step-time': 'Time of day',
                    'su.tip1': 'Black/white cyclorama studio = professional catalog look for selling.',
                    'su.tip2': 'Pick "Random" to get several different scenes in one generate.',
                    'su.tip3': 'Results here can be continued in Multi-Angle via direct upload.',
                    'an.title': 'Multi-Angle',
                    'an.subtitle': 'From one photo, the AI creates the same vehicle from different viewpoints. Background can follow the original photo or a studio.',
                    'an.step-angles': 'Choose angles',
                    'an.angles-hint': 'One result per selected angle (max 10).',
                    'an.tip1': 'A full-vehicle photo from the front 3/4 gives the most accurate angles.',
                    'an.tip2': 'Every angle shows the whole vehicle like a showroom photo: front, side, rear left-right, slightly low, slightly high.',
                    'an.tip3': 'Register 2-4 photos from different sides in the Garage so rear & side details are more accurate.',
                    'ks.title': 'AI Mod Consultant',
                    'ks.subtitle': 'The AI analyzes your vehicle and suggests 5 complete modification concepts with a parts list. One click to render.',
                    'ks.step2': 'Goal & Budget',
                    'ks.goal': 'Modification goal',
                    'ks.budget': 'Budget',
                    'ks.notes': 'Special wishes (optional)',
                    'ks.notes-ph': 'e.g. not too low, still comfortable for the family',
                    'ks.generate': 'Get Concept Ideas',
                    'ks.result-title': 'Recommended Concepts',
                    'ks.empty': 'Pick a vehicle & goal, then ask for concepts.',
                    'ks.analyzing': 'Analyzing the vehicle...',
                    'ks.render': 'Render This Concept',
                    'ks.parts': 'Parts used',
                    'ks.est': 'Estimated cost',
                    'ks.tip1': '"Render This Concept" opens Modif Studio with the parts list pre-filled.',
                    'ks.tip2': 'Cost estimates are rough Indonesian market figures, not exact prices.',
                    'ks.tip3': 'Write your special wishes so the concepts match your taste.',
                    'ks.sent': 'Concept sent to Modif Studio. Click Generate there.',
                    'err.ks-failed': 'Could not get suggestions. Try again.',
                    'vp.title': 'Video Prompt (Image-to-Video)',
                    'vp.hint': 'Paste this prompt into Veo / Kling / Runway together with the result photo.',
                    'vp.motion': 'Camera motion',
                    'vp.generate': 'Create Prompt',
                    'vp.loading': 'Writing the prompt...',
                    'err.vp-failed': 'Could not create the video prompt. Try again.',
                    'cmp.before': 'BEFORE',
                    'cmp.after': 'AFTER',
                    'cmp.hint': 'Drag the line to compare',
                    'wn.title': "What's New",
                    'wn.empty': 'No release notes yet.',
                    'err.gen-failed': 'Generation failed. Try again in a moment.',
                    'err.gen-rate': 'Too many requests at once / this Google account hit its daily quota. Wait a bit, lower the number of results, or switch Google accounts.',
                    'err.gen-key': 'Request rejected by Google. Most often you are not signed in to a Google account on the Gemini page - sign in, then reload the page and try again. The photo may also be too large.',
                    'btn.see-guide': 'See guide',
                    'err.gen-server': 'Google server trouble. Retried automatically, please try again in a few minutes.',
                    'err.gen-blocked': 'This photo / instruction was rejected by the AI safety filter. Try another photo or change the instructions.',
                    'err.gen-network': 'Internet connection dropped / too slow. Check your signal, then tap Retry on the failed card.',
                    'err.gen-partial': '{n} of {m} results failed. Tap Retry on the failed cards.',
                    'err.storage': 'Device storage is full or unavailable (private mode?). Delete old vehicles / results or download first.',
                    'st.ratio-auto': 'Same as photo',
                    'err.no-vehicle': 'Pick a vehicle from the garage or upload a photo first.',
                    'err.no-angle': 'Select at least 1 angle.',
                    'err.no-part': 'Select at least 1 part or fill in the extra instructions.',
                    'err.login.invalid-email': 'Invalid email format.',
                    'err.login.failed': 'Sign in failed. Try again.',
                    'err.server-busy': 'Server is busy, try again in a moment.',
                    'warn.session-ended': 'Session ended. This account signed in on another device.',
                    'ios.save-title': 'Save Image',
                    'ios.save-hint': 'Press and hold the image below, then choose "Save to Photos".'
                }
            };

            function detectLang() {
                const list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
                for (const raw of list) {
                    const p = String(raw).toLowerCase().split('-')[0];
                    if (p === 'id' || p === 'in' || p === 'ms') return 'id';
                    if (p === 'en') return 'en';
                }
                return 'en';
            }
            function getLang() { return localStorage.getItem('app_language') || detectLang(); }
            function tr(lang, key) {
                const d = T[lang] || T.id;
                if (d[key] != null) return d[key];
                if (T.id[key] != null) return T.id[key];
                return null;
            }
            function t(key) { const v = tr(getLang(), key); return v != null ? v : key; }
            window.t = t;
            window.getLang = getLang;

            // Label chip: nilai kanonik (data-val/data-scene/data-part) DIKUNCI - hanya text node label yang di-swap per bahasa.
            window.CHIP_LABELS = {
                id: {},
                en: {
                    'Mobil': 'Car', 'Motor': 'Motorcycle',
                    'Acak': 'Random',
                    'Harian Rapi': 'Clean Daily', 'Kontes / Show': 'Show Car', 'Racing / Track': 'Racing / Track', 'Touring / Adventure': 'Touring / Adventure', 'Offroad': 'Offroad', 'Elegan / VIP': 'Elegant / VIP',
                    'Hemat': 'Low', 'Menengah': 'Medium', 'Sultan': 'High',
                    'Pertahankan': 'Keep', 'Blur': 'Blur', 'Hapus': 'Remove',
                    'Pertahankan foto asli': 'Keep original photo', 'Pindah ke studio': 'Move to studio', 'Pilih suasana': 'Choose a scene',
                    'Tanpa gaya': 'No style', 'Stance / Ceper': 'Stance / Lowered', 'Sleeper / OEM+': 'Sleeper / OEM+', 'Street Racing': 'Street Racing', 'Drift': 'Drift', 'Rally': 'Rally', 'Time Attack / Track': 'Time Attack / Track',
                    'Offroad / Overland': 'Offroad / Overland', 'VIP / Bippu': 'VIP / Bippu', 'Luxury Elegan': 'Elegant Luxury', 'Retro / Klasik': 'Retro / Classic', 'Widebody': 'Widebody', 'Minimalis Bersih': 'Clean Minimal',
                    'Cafe Racer': 'Cafe Racer', 'Scrambler': 'Scrambler', 'Bobber': 'Bobber', 'Chopper': 'Chopper', 'Supermoto': 'Supermoto', 'Thailook': 'Thailook', 'Touring': 'Touring', 'Sport Fairing': 'Sport Fairing', 'Matic Elegan': 'Elegant Scooter', 'Tracker': 'Tracker', 'Street Fighter': 'Street Fighter',
                    'Velg': 'Wheels', 'Ban': 'Tires', 'Body Kit': 'Body Kit', 'Spoiler / Wing': 'Spoiler / Wing', 'Ceper / Lowering': 'Lowering', 'Lift Kit / Tinggi': 'Lift Kit', 'Lampu': 'Lights', 'Knalpot': 'Exhaust',
                    'Stiker / Livery': 'Decals / Livery', 'Kaca Film': 'Window Tint', 'Roof Rack': 'Roof Rack', 'Fender Flare': 'Fender Flares', 'Grill': 'Grille', 'Kap Mesin / Carbon': 'Hood / Carbon', 'Spion': 'Mirrors', 'Interior': 'Interior', 'Diffuser': 'Diffuser', 'Lampu Kolong': 'Underglow',
                    'Fairing / Body': 'Fairing / Body', 'Setang': 'Handlebars', 'Jok': 'Seat', 'Windshield': 'Windshield', 'Box / Pannier': 'Box / Pannier', 'Crash Bar': 'Crash Bar', 'Shock / Suspensi': 'Suspension', 'Cakram / Kaliper': 'Brakes / Calipers', 'Lampu Depan': 'Headlight',
                    'Glossy': 'Glossy', 'Matte / Doff': 'Matte', 'Satin': 'Satin', 'Metallic': 'Metallic', 'Pearl / Mutiara': 'Pearl', 'Chrome': 'Chrome', 'Candy': 'Candy', 'Chameleon': 'Color-shift', 'Carbon Look': 'Carbon Look',
                    'Hitam': 'Black', 'Putih': 'White', 'Abu Nardo': 'Nardo Gray', 'Silver': 'Silver', 'Merah': 'Red', 'Biru Navy': 'Navy Blue', 'Biru Muda': 'Light Blue', 'Hijau Army': 'Army Green', 'Hijau Racing': 'Racing Green', 'Kuning': 'Yellow', 'Oranye': 'Orange', 'Ungu': 'Purple', 'Emas / Champagne': 'Gold / Champagne', 'Pink': 'Pink', 'Cokelat / Bronze': 'Brown / Bronze', 'Custom': 'Custom',
                    'Seluruh body': 'Full body', 'Two-tone (atap hitam)': 'Two-tone (black roof)', 'Aksen saja': 'Accents only', 'Velg saja': 'Wheels only',
                    'Studio Hitam': 'Black Studio', 'Studio Putih': 'White Studio', 'Showroom': 'Showroom', 'Garasi Industrial': 'Industrial Garage', 'Rooftop Kota': 'City Rooftop', 'Jalan Neon Malam': 'Neon Night Street', 'Jalan Basah Hujan': 'Wet Rainy Street', 'Pantai Golden Hour': 'Golden Hour Beach',
                    'Pegunungan': 'Mountains', 'Hutan Pinus': 'Pine Forest', 'Padang Pasir': 'Desert', 'Sirkuit': 'Race Track', 'Parkiran Gedung': 'Parking Deck', 'Terowongan': 'Tunnel', 'Bengkel Modif': 'Custom Workshop', 'Car Wash': 'Car Wash', 'Pedesaan': 'Countryside', 'Pom Bensin Malam': 'Gas Station at Night', 'Pelabuhan': 'Harbor', 'Jalan Tol': 'Highway', 'Perkotaan Siang': 'Downtown Day',
                    'Softbox Studio': 'Studio Softbox', 'Rim Light Dramatis': 'Dramatic Rim Light', 'Natural': 'Natural', 'Neon': 'Neon', 'Mendung Lembut': 'Soft Overcast', 'Golden Hour': 'Golden Hour', 'Lampu Jalan': 'Street Lights',
                    'Siang': 'Day', 'Sore': 'Sunset', 'Malam': 'Night', 'Subuh': 'Dawn',
                    '3/4 Depan': 'Front 3/4', 'Samping': 'Side Profile', '3/4 Belakang': 'Rear 3/4', 'Belakang': 'Rear', 'Depan Lurus': 'Front Straight', 'Low Angle': 'Low Angle', 'Top-down': 'Top-down', 'Close-up Velg': 'Wheel Close-up', 'Close-up Lampu Depan': 'Headlight Close-up', 'Close-up Lampu Belakang': 'Taillight Close-up', 'Close-up Knalpot': 'Exhaust Close-up', 'Interior / Dashboard': 'Interior / Dashboard', 'Detail Emblem': 'Badge Detail', 'Rolling Shot': 'Rolling Shot', 'Mesin': 'Engine', 'Speedometer': 'Speedometer',
                    '3/4 Depan Kiri': 'Front 3/4 Left', '3/4 Depan Kanan': 'Front 3/4 Right', 'Samping Kiri': 'Left Side', 'Samping Kanan': 'Right Side', '3/4 Belakang Kiri': 'Rear 3/4 Left', '3/4 Belakang Kanan': 'Rear 3/4 Right', '3/4 Depan Rendah': 'Front 3/4 Low', '3/4 Depan Atas': 'Front 3/4 High',
                    'Orbit 360': 'Orbit 360', 'Rolling / Tracking': 'Rolling / Tracking', 'Dolly In': 'Dolly In', 'Low Fly-by': 'Low Fly-by', 'Reveal dari Detail': 'Detail Reveal', 'Statis Sinematik': 'Static Cinematic'
                }
            };
            window.DYN_LABELS = { id: {}, en: {} };

            function swapLastTextNode(elm, label) {
                let node = null;
                for (const n of elm.childNodes) if (n.nodeType === 3 && n.textContent.trim()) node = n;
                if (node) node.textContent = label;
                else elm.appendChild(document.createTextNode(label));
            }
            function applyChipLabels(lang) {
                document.querySelectorAll('.option-btn:not([data-no-i18n])').forEach(btn => {
                    if (!btn.dataset.i18nId) {
                        const txt = (btn.textContent || '').trim();
                        if (!txt) return;
                        btn.dataset.i18nId = txt;
                    }
                    const idLabel = btn.dataset.i18nId;
                    const map = window.CHIP_LABELS[lang] || {};
                    const label = (lang === 'id') ? idLabel : (map[idLabel] != null ? map[idLabel] : idLabel);
                    swapLastTextNode(btn, label);
                });
            }
            function applyDynLabels(lang) {
                document.querySelectorAll('[data-i18n-dyn]').forEach(elm => {
                    if (!elm.dataset.i18nId) {
                        const txt = (elm.textContent || '').trim();
                        if (!txt) return;
                        elm.dataset.i18nId = txt;
                    }
                    const idLabel = elm.dataset.i18nId;
                    const map = window.DYN_LABELS[lang] || {};
                    const label = (lang === 'id') ? idLabel : (map[idLabel] != null ? map[idLabel] : idLabel);
                    elm.textContent = label;
                });
            }
            function applyLanguage() {
                const lang = getLang();
                document.querySelectorAll('[data-i18n]').forEach(elm => {
                    const v = tr(lang, elm.getAttribute('data-i18n'));
                    if (v != null) elm.textContent = v;
                });
                document.querySelectorAll('[data-i18n-placeholder]').forEach(elm => {
                    const v = tr(lang, elm.getAttribute('data-i18n-placeholder'));
                    if (v != null) elm.setAttribute('placeholder', v);
                });
                document.querySelectorAll('[data-i18n-title]').forEach(elm => {
                    const v = tr(lang, elm.getAttribute('data-i18n-title'));
                    if (v != null) { elm.setAttribute('title', v); elm.setAttribute('aria-label', v); }
                });
                applyChipLabels(lang);
                applyDynLabels(lang);
            }
            window._i18nApplyNow = applyLanguage;

            function syncLangButtons() {
                const lang = getLang();
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
            }
            window.setAppLanguage = function (lang) {
                localStorage.setItem('app_language', lang);
                document.documentElement.lang = lang;
                applyLanguage();
                syncLangButtons();
                document.dispatchEvent(new CustomEvent('app-lang-changed'));
            };
            document.querySelectorAll('.lang-btn').forEach(b => {
                b.addEventListener('click', () => window.setAppLanguage(b.dataset.lang));
            });
            document.documentElement.lang = getLang();
            applyLanguage();
            syncLangButtons();
            // === end i18n engine ===

            window.escHtml = function (s) {
                return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
            };

            // ==================== DEBUG LOG (panel tersembunyi: klik badge versi 5x) ====================
            window.__debugLog = [];
            window.logDebug = function (tag, msg) {
                window.__debugLog.push({ t: new Date().toISOString().slice(11, 19), tag, msg: String(msg).slice(0, 400) });
                if (window.__debugLog.length > 60) window.__debugLog.shift();
                console.warn('[AMS]', tag, msg);
            };

            // ==================== UNIVERSAL MODAL ====================
            const universalModal = document.getElementById('universal-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalBody = document.getElementById('modal-body');
            const closeModalBtn = document.getElementById('close-modal-btn');
            function showUniversalModal(title, content) {
                modalTitle.innerText = title;
                modalBody.innerHTML = content;
                universalModal.classList.add('visible');
                if (window._i18nApplyNow) window._i18nApplyNow();
            }
            window.showUniversalModal = showUniversalModal;
            window.closeUniversalModal = () => universalModal.classList.remove('visible');
            closeModalBtn.addEventListener('click', window.closeUniversalModal);
            document.addEventListener('keydown', (e) => {
                if (e.key !== 'Escape') return;
                const top = [...document.querySelectorAll('.image-preview-modal.show')].pop();
                if (top) { top.click(); return; }
                if (universalModal.classList.contains('visible')) window.closeUniversalModal();
            });
            universalModal.addEventListener('click', (e) => { if (e.target === universalModal) window.closeUniversalModal(); });

            // ==================== DIALOG HELPERS (pengganti alert/confirm - diblokir sandbox Canvas) ====================
            function buildUiDialog(pesan, buttonsHtml) {
                const modal = document.createElement('div');
                modal.className = 'image-preview-modal';
                modal.style.zIndex = '90';
                modal.innerHTML = `<div class="bg-white rounded-xl p-6 max-w-sm w-full" onclick="event.stopPropagation()">
                  <p class="text-sm text-gray-700 mb-5 leading-relaxed" data-msg></p>
                  <div class="flex gap-2 justify-end" data-btns></div>
                </div>`;
                modal.querySelector('[data-msg]').textContent = pesan;
                modal.querySelector('[data-btns]').innerHTML = buttonsHtml;
                document.body.appendChild(modal);
                setTimeout(() => modal.classList.add('show'), 10);
                const close = () => { modal.classList.remove('show'); setTimeout(() => modal.remove(), 200); };
                return { modal, close };
            }
            window.uiNotify = function (pesan) {
                return new Promise((res) => {
                    const { modal, close } = buildUiDialog(pesan,
                        '<button type="button" data-ok class="btn-primary font-semibold py-2 px-5 rounded-lg text-sm">OK</button>');
                    const done = () => { close(); res(); };
                    modal.querySelector('[data-ok]').addEventListener('click', done);
                    modal.addEventListener('click', (e) => { if (e.target === modal) done(); });
                });
            };
            window.uiNotifyGenError = function (errKey) {
                const withGuide = /^err\.gen-/.test(errKey) && errKey !== 'err.gen-blocked';
                if (!withGuide) return window.uiNotify(t(errKey));
                return new Promise((res) => {
                    const { modal, close } = buildUiDialog(t(errKey),
                        `<button type="button" data-guide class="btn-secondary font-semibold py-2 px-4 rounded-lg text-sm"><i class="fas fa-circle-question mr-1"></i>${window.escHtml(t('btn.see-guide'))}</button>` +
                        '<button type="button" data-ok class="btn-primary font-semibold py-2 px-5 rounded-lg text-sm">OK</button>');
                    const done = () => { close(); res(); };
                    modal.querySelector('[data-ok]').addEventListener('click', done);
                    modal.querySelector('[data-guide]').addEventListener('click', () => { done(); window.showTutorial(); });
                    modal.addEventListener('click', (e) => { if (e.target === modal) done(); });
                });
            };
            document.addEventListener('click', (e) => { if (e.target.closest('[data-open-guide]')) window.showTutorial(); });
            window.uiConfirm = function (pesan, labelYa) {
                return new Promise((res) => {
                    const { modal, close } = buildUiDialog(pesan,
                        '<button type="button" data-no class="btn-secondary font-semibold py-2 px-5 rounded-lg text-sm">' + window.escHtml(t('btn.cancel')) + '</button>' +
                        `<button type="button" data-yes class="font-semibold py-2 px-5 rounded-lg text-sm" style="background:#dc2626;color:#fff;">${window.escHtml(labelYa || t('btn.delete'))}</button>`);
                    const done = (v) => { close(); res(v); };
                    modal.querySelector('[data-yes]').addEventListener('click', () => done(true));
                    modal.querySelector('[data-no]').addEventListener('click', () => done(false));
                    modal.addEventListener('click', (e) => { if (e.target === modal) done(false); });
                });
            };

            // ==================== iOS DOWNLOAD HELPERS ====================
            window.__isIOS = function () {
                var ua = navigator.userAgent || '';
                if (/iPad|iPhone|iPod/.test(ua)) return true;
                if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) return true;
                return false;
            };
            window.__iosShareOrSaveImage = async function (blob, filename) {
                var mimeType = blob.type || 'image/png';
                var file = null;
                try { file = new File([blob], filename, { type: mimeType }); } catch (e) { file = null; }
                if (file && navigator.canShare) {
                    try {
                        if (navigator.canShare({ files: [file] })) {
                            await navigator.share({ files: [file], title: filename });
                            return;
                        }
                    } catch (err) {
                        if (err && err.name === 'AbortError') return;
                    }
                }
                var url = URL.createObjectURL(blob);
                var html =
                    '<p class="mb-4 text-gray-700 text-sm">' + window.escHtml(t('ios.save-hint')) + '</p>' +
                    '<div class="bg-gray-100 p-3 rounded-lg"><img src="' + url + '" alt="" class="w-full rounded-lg" style="-webkit-touch-callout: default; pointer-events: auto;"></div>' +
                    '<p class="mt-3 text-xs text-gray-500 break-all">' + window.escHtml(filename) + '</p>';
                showUniversalModal(t('ios.save-title'), html);
            };

            async function downloadImage(imageUrl, filename) {
                try {
                    if (window.__isIOS && window.__isIOS()) {
                        const iosResp = await fetch(imageUrl);
                        if (!iosResp.ok) throw new Error('Network response was not ok');
                        const iosBlob = await iosResp.blob();
                        await window.__iosShareOrSaveImage(iosBlob, filename);
                        return;
                    }
                    const response = await fetch(imageUrl);
                    if (!response.ok) throw new Error('Network response was not ok');
                    const blob = await response.blob();
                    if (typeof saveAs !== 'undefined') { saveAs(blob, filename); return; }
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url; a.download = filename; a.style.display = 'none';
                    document.body.appendChild(a);
                    setTimeout(() => { a.click(); setTimeout(() => { window.URL.revokeObjectURL(url); document.body.removeChild(a); }, 100); }, 10);
                } catch (error) {
                    window.logDebug('download', error);
                    showUniversalModal(t('ios.save-title'), `
                        <p class="mb-4 text-gray-700 text-sm">${window.escHtml(t('ios.save-hint'))}</p>
                        <div class="bg-gray-100 p-3 rounded-lg"><img src="${imageUrl}" class="w-full rounded-lg" alt="" style="-webkit-touch-callout: default;"></div>
                        <p class="mt-3 text-xs text-gray-500 break-all">${window.escHtml(filename)}</p>`);
                }
            }
            window.downloadImage = downloadImage;
            window.downloadDataURINew = downloadImage;

            // ==================== KOMPRES GAMBAR + UTIL ====================
            window.compressImage = function (source, maxSide = 1280, quality = 0.88) {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => {
                        const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
                        const canvas = document.createElement('canvas');
                        canvas.width = Math.round(img.width * scale);
                        canvas.height = Math.round(img.height * scale);
                        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
                        canvas.toBlob((blob) => {
                            if (!blob) { reject(new Error('Compress failed')); return; }
                            const reader = new FileReader();
                            reader.onload = () => resolve({ b64: String(reader.result).split(',')[1], blob, dataUrl: String(reader.result) });
                            reader.readAsDataURL(blob);
                        }, 'image/jpeg', quality);
                    };
                    img.onerror = () => reject(new Error('Image load failed'));
                    img.src = (typeof source === 'string') ? source : URL.createObjectURL(source);
                });
            };
            // File (termasuk HEIC iPhone) -> { b64, blob, dataUrl } terkompres
            window.fileToCompressed = async function (file, maxSide, quality) {
                let src = file;
                if (file.type === 'image/heic' || file.type === 'image/heif' || /\.hei[cf]$/i.test(file.name || '')) {
                    if (typeof heic2any === 'undefined') throw new Error('heic2any missing');
                    const out = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.9 });
                    src = Array.isArray(out) ? out[0] : out;
                }
                return window.compressImage(src, maxSide, quality);
            };
            window.blobToB64 = (blob) => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(String(reader.result).split(',')[1]);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
            window.b64ToBlob = function (b64, mime) {
                const bytes = atob(b64);
                const arr = new Uint8Array(bytes.length);
                for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
                return new Blob([arr], { type: mime || 'image/jpeg' });
            };

            // ==================== SIDEBAR + TAB SWITCHING ====================
            const sidebar = document.getElementById('sidebar');
            const sidebarBackdrop = document.getElementById('sidebar-backdrop');
            const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
            function closeSidebar() { sidebar.classList.remove('open'); sidebarBackdrop.classList.remove('show'); }
            toggleSidebarBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                sidebarBackdrop.classList.toggle('show', sidebar.classList.contains('open'));
            });
            sidebarBackdrop.addEventListener('click', closeSidebar);
            document.getElementById('nav-hide').addEventListener('click', closeSidebar);

            const mainTabButtons = document.querySelectorAll('.main-tab-btn');
            const mainContentPanels = document.querySelectorAll('.main-content-panel');
            function switchTab(tabName) {
                mainTabButtons.forEach(btn => btn.classList.remove('active'));
                const sidebarBtn = document.querySelector(`.main-tab-btn[data-tab="${tabName}"]`);
                if (sidebarBtn) sidebarBtn.classList.add('active');
                mainContentPanels.forEach(panel => panel.classList.toggle('hidden', panel.id !== `content-${tabName}`));
                closeSidebar();
                window.scrollTo({ top: 0 });
                if (window._i18nApplyNow) window._i18nApplyNow();
                document.dispatchEvent(new CustomEvent('ams-tab-changed', { detail: { tab: tabName } }));
            }
            window.switchTab = switchTab;
            mainTabButtons.forEach(button => { if (button.dataset.tab) button.addEventListener('click', () => switchTab(button.dataset.tab)); });
            document.addEventListener('click', function (e) {
                const pill = e.target.closest('[data-goto]');
                if (!pill) return;
                switchTab(pill.dataset.goto);
            });

            // === LOGIN SYSTEM (lisensi via Worker modif-auth + D1, Sheet = panel admin) ===
            const LOGIN_CFG = {
                SCRIPT_URL: "https://modif-auth.mursalinasrul.workers.dev",
                APP_SECRET: "AMS9xQ4vTk2LpW7nRs8bYc3FdHm6",
                PRODUCT_ID: "ai-modif-studio",
                BUY_LYNK_URL: "https://lynk.id/arullagi/p588or4x3w5v",
                ADMIN_WA: "6285157914468"
            };
            window.adminWaUrl = () => 'https://wa.me/' + LOGIN_CFG.ADMIN_WA + '?text=' + encodeURIComponent(t('wa.prefill'));
            document.addEventListener('click', (e) => {
                const a = e.target.closest('#wa-admin-login, #wa-admin-nav, [data-wa-admin]');
                if (a) a.href = window.adminWaUrl();
            }, true);
            (function () {
                const overlay = document.getElementById('login-overlay');
                const mainApp = document.getElementById('main-app');
                const emailInput = document.getElementById('login-email');
                const loginBtn = document.getElementById('login-btn');
                const errEl = document.getElementById('login-error');
                const loadingEl = document.getElementById('login-loading');
                let sesInterval = null;

                let deviceToken = localStorage.getItem('ams_device');
                if (!deviceToken) {
                    deviceToken = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now());
                    localStorage.setItem('ams_device', deviceToken);
                }
                const api = (action, email) => fetch(
                    `${LOGIN_CFG.SCRIPT_URL}?action=${action}&email=${encodeURIComponent(email)}&token=${encodeURIComponent(deviceToken)}&app_secret=${encodeURIComponent(LOGIN_CFG.APP_SECRET)}&product=${LOGIN_CFG.PRODUCT_ID}`
                ).then(r => r.json());

                function showError(msg) { errEl.textContent = msg; errEl.classList.remove('hidden'); }
                function setLoading(on) { loadingEl.classList.toggle('hidden', !on); loginBtn.disabled = on; }
                function clearSession() { localStorage.removeItem('ams_email'); localStorage.removeItem('ams_name'); }
                function openApp(nama) {
                    overlay.classList.add('hidden');
                    mainApp.classList.remove('hidden');
                    document.getElementById('user-name').textContent = nama;
                    if (!sesInterval) sesInterval = setInterval(jagaSesi, 60000);
                    try {
                        if (!localStorage.getItem('ams_seen_tutorial')) {
                            localStorage.setItem('ams_seen_tutorial', '1');
                            setTimeout(() => { if (window.showTutorial) window.showTutorial(); }, 300);
                        }
                    } catch (e) {}
                }
                async function jagaSesi() {
                    const email = localStorage.getItem('ams_email');
                    if (!email) return;
                    try {
                        const d = await api('cek', email);
                        if (d.status === 'INVALID') {
                            clearInterval(sesInterval);
                            await window.uiNotify(t('warn.session-ended'));
                            clearSession();
                            location.reload();
                        }
                    } catch (e) {}
                }

                loginBtn.addEventListener('click', async () => {
                    errEl.classList.add('hidden');
                    const email = emailInput.value.trim().toLowerCase();
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(t('err.login.invalid-email')); return; }
                    setLoading(true);
                    try {
                        const d = await api('login', email);
                        if (d.status === 'SUKSES') {
                            localStorage.setItem('ams_email', email);
                            localStorage.setItem('ams_name', d.nama || email);
                            openApp(d.nama || email);
                        } else {
                            showError(d.message || t('err.login.failed'));
                        }
                    } catch (e) {
                        showError(e instanceof SyntaxError ? t('err.server-busy') : t('err.login.failed'));
                    }
                    setLoading(false);
                });
                emailInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') loginBtn.click(); });

                document.getElementById('logout-btn').addEventListener('click', async () => {
                    const email = localStorage.getItem('ams_email');
                    clearInterval(sesInterval);
                    if (email) { try { await api('logout', email); } catch (e) {} }
                    clearSession();
                    location.reload();
                });

                const buyLink = document.getElementById('buy-link');
                if (LOGIN_CFG.BUY_LYNK_URL.indexOf('YOUR-') === -1) buyLink.href = LOGIN_CFG.BUY_LYNK_URL;
                else buyLink.parentElement.classList.add('hidden');

                const savedEmail = localStorage.getItem('ams_email');
                const savedName = localStorage.getItem('ams_name');
                if (savedEmail && savedName) {
                    setLoading(true);
                    api('cek', savedEmail)
                        .then(d => { setLoading(false); if (d.status === 'VALID') openApp(savedName); else clearSession(); })
                        .catch(() => { setLoading(false); openApp(savedName); });
                }
            })();
            // === END LOGIN ===

            // ==================== GARASI: IndexedDB kendaraan + kendaraan aktif ====================
            // record: { id, name, type: 'car'|'motorcycle', notes, photos: [b64 jpeg x1-4], createdAt }
            const GR_MAX_VEHICLES = 6;
            const GR_MAX_PHOTOS = 4;
            const RS_MAX_RESULTS = 10;
            // record results: { id, b64 (png), before (jpeg), kind, caption, tab, prompt, createdAt }
            function makeLocalStore(STORE) {
                const DB = 'ams_garage', STORES = ['vehicles', 'results'];
                function open() {
                    return new Promise((resolve, reject) => {
                        const req = indexedDB.open(DB, 2);
                        req.onupgradeneeded = () => {
                            STORES.forEach(s => { if (!req.result.objectStoreNames.contains(s)) req.result.createObjectStore(s, { keyPath: 'id' }); });
                        };
                        req.onsuccess = () => resolve(req.result);
                        req.onerror = () => reject(req.error);
                    });
                }
                async function tx(mode, fn) {
                    const db = await open();
                    return new Promise((resolve, reject) => {
                        const tr = db.transaction(STORE, mode);
                        const out = fn(tr.objectStore(STORE));
                        tr.oncomplete = () => { db.close(); resolve(out.result !== undefined ? out.result : out.value); };
                        tr.onerror = () => { db.close(); reject(tr.error); };
                        tr.onabort = () => { db.close(); reject(tr.error || new Error('IndexedDB transaction aborted')); };
                    });
                }
                return {
                    list() { return tx('readonly', s => s.getAll()).then(r => (r || []).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))); },
                    get(id) { return tx('readonly', s => s.get(id)); },
                    put(rec) { return tx('readwrite', s => s.put(rec)); },
                    remove(id) { return tx('readwrite', s => s.delete(id)); }
                };
            }
            window.vehicleDB = makeLocalStore('vehicles');
            window.resultDB = makeLocalStore('results');
            window.saveResult = async function (rec) {
                const list = await window.resultDB.list();
                if (list.length >= RS_MAX_RESULTS) { await window.uiNotify(t('err.rs-limit')); return false; }
                const id = 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
                try {
                    await window.resultDB.put(Object.assign({ id, createdAt: Date.now() }, rec));
                } catch (e) { window.logDebug('rs-save', e); await window.uiNotify(t('err.storage')); return false; }
                document.dispatchEvent(new CustomEvent('ams-results-changed'));
                await window.uiNotify(t('st.saved'));
                return true;
            };
            window.getActiveVehicle = async function () {
                const list = await window.vehicleDB.list();
                if (!list.length) return null;
                const id = localStorage.getItem('ams_active_vehicle');
                return list.find(v => String(v.id) === String(id)) || list[0];
            };
            window.setActiveVehicle = function (id) {
                localStorage.setItem('ams_active_vehicle', String(id));
                document.dispatchEvent(new CustomEvent('ams-vehicles-changed'));
            };
            window.VEHICLE_TYPE_LABEL = { car: 'Mobil', motorcycle: 'Motor' };
            window.DYN_LABELS.en['Mobil'] = 'Car';
            window.DYN_LABELS.en['Motor'] = 'Motorcycle';

            // === TAB: GARASI ===
            (function () {
                const box = document.getElementById('gr-upload');
                const fileInput = document.getElementById('gr-files');
                const countEl = document.getElementById('gr-count');
                const clearBtn = document.getElementById('gr-clear');
                const typeGroup = document.getElementById('gr-type');
                const nameInput = document.getElementById('gr-name');
                const notesInput = document.getElementById('gr-notes');
                const saveBtn = document.getElementById('gr-save');
                const listEl = document.getElementById('gr-list');
                const listCount = document.getElementById('gr-list-count');
                let photos = [];   // [{ b64, dataUrl }]
                let selType = 'car';
                let busy = false;

                function renderBox() {
                    const ph = box.querySelector('.ph');
                    let grid = box.querySelector('.thumb-grid');
                    if (!photos.length) {
                        box.classList.remove('has-image');
                        if (ph) ph.classList.remove('hidden');
                        if (grid) grid.remove();
                    } else {
                        box.classList.add('has-image');
                        if (ph) ph.classList.add('hidden');
                        if (!grid) { grid = document.createElement('div'); grid.className = 'thumb-grid'; box.insertBefore(grid, fileInput); }
                        grid.innerHTML = photos.map((p, i) => `<img src="${p.dataUrl}" alt="${i + 1}">`).join('');
                    }
                    countEl.textContent = `${photos.length}/${GR_MAX_PHOTOS}`;
                    clearBtn.classList.toggle('hidden', photos.length === 0);
                }
                fileInput.addEventListener('change', async () => {
                    const files = [...(fileInput.files || [])];
                    fileInput.value = '';
                    for (const f of files) {
                        if (photos.length >= GR_MAX_PHOTOS) { await window.uiNotify(t('err.gr-max-photos')); break; }
                        try {
                            const c = await window.fileToCompressed(f, 1280, 0.88);
                            photos.push({ b64: c.b64, dataUrl: c.dataUrl });
                        } catch (e) { window.logDebug('gr-upload', e); await window.uiNotify(t('err.img-read')); }
                    }
                    renderBox();
                });
                clearBtn.addEventListener('click', () => { photos = []; renderBox(); });
                typeGroup.addEventListener('click', (e) => {
                    const btn = e.target.closest('.option-btn'); if (!btn) return;
                    typeGroup.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    selType = btn.dataset.val;
                });

                saveBtn.addEventListener('click', async () => {
                    if (busy) return;
                    if (!photos.length) { await window.uiNotify(t('err.gr-no-photo')); return; }
                    const name = nameInput.value.trim();
                    if (!name) { await window.uiNotify(t('err.gr-no-name')); return; }
                    const list = await window.vehicleDB.list();
                    if (list.length >= GR_MAX_VEHICLES) { await window.uiNotify(t('err.gr-limit')); return; }
                    busy = true;
                    const id = 'v' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
                    try {
                        await window.vehicleDB.put({ id, name, type: selType, notes: notesInput.value.trim(), photos: photos.map(p => p.b64), createdAt: Date.now() });
                    } catch (e) {
                        window.logDebug('gr-save', e);
                        await window.uiNotify(t('err.storage'));
                        return;
                    } finally { busy = false; }
                    photos = []; renderBox(); nameInput.value = ''; notesInput.value = '';
                    window.setActiveVehicle(id);
                    await window.uiNotify(t('gr.saved'));
                });

                async function renderList() {
                    const list = await window.vehicleDB.list();
                    const active = await window.getActiveVehicle();
                    listCount.textContent = `${list.length}/${GR_MAX_VEHICLES}`;
                    if (!list.length) {
                        listEl.innerHTML = `<p id="gr-empty" class="text-sm text-gray-400 col-span-full" data-i18n="gr.list-empty"></p>`;
                    } else {
                        listEl.innerHTML = list.map(v => {
                            const isActive = active && v.id === active.id;
                            return `<div class="vehicle-card${isActive ? ' active' : ''}">
                                <img src="data:image/jpeg;base64,${v.photos[0]}" alt="">
                                <div class="min-w-0 flex-1">
                                    <p class="font-semibold text-sm text-gray-800 truncate">${window.escHtml(v.name)}</p>
                                    <p class="text-xs text-gray-400"><span class="badge-type" data-i18n-dyn>${window.VEHICLE_TYPE_LABEL[v.type] || 'Mobil'}</span> &middot; ${v.photos.length} <span data-i18n="gr.photos"></span></p>
                                    ${v.notes ? `<p class="text-[11px] text-gray-400 truncate">${window.escHtml(v.notes)}</p>` : ''}
                                </div>
                                <div class="flex flex-col gap-1">
                                    <button class="text-xs font-semibold rounded-lg px-2.5 py-1.5 ${isActive ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-700'}" data-action="select" data-id="${v.id}" style="min-height:44px;"><span data-i18n="${isActive ? 'btn.active' : 'btn.use'}"></span></button>
                                    <button class="text-xs text-red-500 rounded-lg px-2.5 py-1.5" data-action="delete" data-id="${v.id}" style="min-height:44px;min-width:44px;" aria-label="Hapus"><i class="fas fa-trash"></i></button>
                                </div>
                            </div>`;
                        }).join('');
                    }
                    if (window._i18nApplyNow) window._i18nApplyNow();
                }
                listEl.addEventListener('click', async (e) => {
                    const btn = e.target.closest('button[data-action]'); if (!btn) return;
                    const id = btn.dataset.id;
                    if (btn.dataset.action === 'select') { window.setActiveVehicle(id); return; }
                    if (btn.dataset.action === 'delete') {
                        if (!(await window.uiConfirm(t('gr.del-confirm')))) return;
                        await window.vehicleDB.remove(id);
                        if (localStorage.getItem('ams_active_vehicle') === String(id)) localStorage.removeItem('ams_active_vehicle');
                        document.dispatchEvent(new CustomEvent('ams-vehicles-changed'));
                    }
                });
                document.addEventListener('ams-vehicles-changed', renderList);
                renderList();
            })();
            // === END TAB: GARASI ===

            // ==================== KOMPONEN PEMILIH KENDARAAN (dipakai semua studio) ====================
            // mountVehiclePicker(host, prefix) -> { getVehicle(): Promise<{type, name, notes, photos:[b64]}|null> }
            window.mountVehiclePicker = function (host, p, opts) {
                const o = opts || {};
                host.innerHTML = `
                    <div class="card">
                        <div class="flex items-center gap-3 mb-4"><span class="step-num">1</span><h3 class="font-semibold text-gray-800" data-i18n="st.step-vehicle"></h3></div>
                        <div class="grid grid-cols-2 gap-2 mb-3" data-src-group>
                            <button type="button" class="option-btn selected" data-src="garage" data-no-i18n><i class="fas fa-warehouse mr-1"></i><span data-i18n="st.src-garage"></span></button>
                            <button type="button" class="option-btn" data-src="upload" data-no-i18n><i class="fas fa-upload mr-1"></i><span data-i18n="st.src-upload"></span></button>
                        </div>
                        <div data-garage-pane>
                            <div data-garage-strip></div>
                        </div>
                        <div data-upload-pane class="hidden">
                            <div class="upload-box" style="min-height:140px;">
                                <div class="ph"><i class="fas fa-car-side"></i><span data-i18n="st.upload-ph"></span></div>
                                <img class="preview hidden" alt="">
                                <input type="file" accept="image/*,.heic">
                            </div>
                            <div class="flex items-center justify-between mt-2 mb-3">
                                <span class="text-xs text-gray-400" data-i18n="st.type"></span>
                                <button class="text-xs text-red-500 hidden" data-rm data-i18n="btn.clear-photos"></button>
                            </div>
                            <div class="grid grid-cols-2 gap-2" data-type-group>
                                <button type="button" class="option-btn selected" data-val="car"><i class="fas fa-car mr-1"></i>Mobil</button>
                                <button type="button" class="option-btn" data-val="motorcycle"><i class="fas fa-motorcycle mr-1"></i>Motor</button>
                            </div>
                        </div>
                    </div>`;
                const srcGroup = host.querySelector('[data-src-group]');
                const garagePane = host.querySelector('[data-garage-pane]');
                const uploadPane = host.querySelector('[data-upload-pane]');
                const strip = host.querySelector('[data-garage-strip]');
                const ubox = uploadPane.querySelector('.upload-box');
                const uinput = ubox.querySelector('input[type=file]');
                const uimg = ubox.querySelector('img.preview');
                const uph = ubox.querySelector('.ph');
                const urm = uploadPane.querySelector('[data-rm]');
                const typeGroup = uploadPane.querySelector('[data-type-group]');
                let src = 'garage';
                let upload = null;      // { b64, dataUrl }
                let uType = 'car';
                let autoPicked = false;

                async function currentType() {
                    if (src === 'upload') return uType;
                    const v = await window.getActiveVehicle();
                    return v ? v.type : uType;
                }
                async function notify() {
                    host.dispatchEvent(new CustomEvent('ams-picker-changed', { detail: { type: await currentType(), src } }));
                }
                function setSrc(s) {
                    src = s;
                    srcGroup.querySelectorAll('.option-btn').forEach(b => b.classList.toggle('selected', b.dataset.src === s));
                    garagePane.classList.toggle('hidden', s !== 'garage');
                    uploadPane.classList.toggle('hidden', s !== 'upload');
                    notify();
                }
                srcGroup.addEventListener('click', (e) => { const b = e.target.closest('[data-src]'); if (b) setSrc(b.dataset.src); });
                if (o.uploadOnly) { srcGroup.classList.add('hidden'); setSrc('upload'); }
                typeGroup.addEventListener('click', (e) => {
                    const b = e.target.closest('.option-btn'); if (!b) return;
                    typeGroup.querySelectorAll('.option-btn').forEach(x => x.classList.remove('selected'));
                    b.classList.add('selected'); uType = b.dataset.val;
                    notify();
                });
                uinput.addEventListener('change', async () => {
                    const f = uinput.files && uinput.files[0]; uinput.value = '';
                    if (!f) return;
                    try {
                        const c = await window.fileToCompressed(f, 1280, 0.88);
                        upload = { b64: c.b64, dataUrl: c.dataUrl };
                        uimg.src = c.dataUrl; uimg.classList.remove('hidden'); uph.classList.add('hidden'); ubox.classList.add('has-image'); urm.classList.remove('hidden');
                    } catch (e) { window.logDebug(p + '-upload', e); await window.uiNotify(t('err.img-read')); }
                });
                urm.addEventListener('click', () => { upload = null; uimg.src = ''; uimg.classList.add('hidden'); uph.classList.remove('hidden'); ubox.classList.remove('has-image'); urm.classList.add('hidden'); });
                // Terima foto dari luar (mis. hasil tab lain "lanjutkan ke ...")
                host.setUpload = function (b64, type) {
                    upload = { b64, dataUrl: 'data:image/jpeg;base64,' + b64 };
                    uimg.src = upload.dataUrl; uimg.classList.remove('hidden'); uph.classList.add('hidden'); ubox.classList.add('has-image'); urm.classList.remove('hidden');
                    if (type) { uType = type; typeGroup.querySelectorAll('.option-btn').forEach(x => x.classList.toggle('selected', x.dataset.val === type)); }
                    setSrc('upload');
                };

                async function renderStrip() {
                    const list = await window.vehicleDB.list();
                    const v = await window.getActiveVehicle();
                    if (!v) {
                        strip.innerHTML = `<div class="warn-box flex items-center gap-3">
                            <i class="fas fa-triangle-exclamation"></i>
                            <p class="flex-1" data-i18n="st.no-vehicle"></p>
                            <button class="btn-primary rounded-lg px-3 py-2 text-xs font-semibold whitespace-nowrap" data-goto="garasi"><span data-i18n="nav.garasi"></span></button>
                        </div>`;
                        if (!o.uploadOnly && !autoPicked) { autoPicked = true; setSrc('upload'); }
                    } else {
                        if (autoPicked && !upload && src === 'upload') { autoPicked = false; setSrc('garage'); }
                        strip.innerHTML = `<div class="vehicle-card active">
                            <img src="data:image/jpeg;base64,${v.photos[0]}" alt="">
                            <div class="min-w-0 flex-1">
                                <p class="text-[10px] uppercase tracking-wide text-gray-400" data-i18n="st.active-vehicle"></p>
                                <p class="font-semibold text-sm text-gray-800 truncate">${window.escHtml(v.name)}</p>
                                <p class="text-xs text-gray-400"><span class="badge-type" data-i18n-dyn>${window.VEHICLE_TYPE_LABEL[v.type] || 'Mobil'}</span> &middot; ${v.photos.length} <span data-i18n="gr.photos"></span></p>
                            </div>
                        </div>
                        ${list.length > 1 ? `<select class="ams-select w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm mt-2 bg-white" data-vsel>
                            ${list.map(x => `<option value="${x.id}"${x.id === v.id ? ' selected' : ''}>${window.escHtml(x.name)}</option>`).join('')}
                        </select>` : ''}`;
                        const sel = strip.querySelector('[data-vsel]');
                        if (sel) sel.addEventListener('change', () => window.setActiveVehicle(sel.value));
                    }
                    if (window._i18nApplyNow) window._i18nApplyNow();
                    notify();
                }
                document.addEventListener('ams-vehicles-changed', renderStrip);
                renderStrip();

                return {
                    currentType,
                    async getVehicle() {
                        if (src === 'upload') {
                            if (!upload) return null;
                            return { type: uType, name: '', notes: '', photos: [upload.b64], source: 'upload' };
                        }
                        const v = await window.getActiveVehicle();
                        if (!v) return null;
                        return { type: v.type, name: v.name, notes: v.notes || '', photos: v.photos.slice(0, 4), source: 'garage' };
                    },
                    setUpload: host.setUpload
                };
            };

            // ==================== MESIN GENERATE (Gemini - key di-inject Canvas, lihat gemini-canvas-cdn.md) ====================
            const apiKey = "";
            window.AMS_GEN = {
                IMG_MODEL: 'gemini-2.5-flash-image-preview',
                TXT_MODEL: 'gemini-2.0-flash',
                API_URL: m => `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${apiKey}`,
                SAFETY: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
                ]
            };
            // Error API bertipe: code = NETWORK | RATE_LIMIT | KEY | SERVER | BLOCKED | EMPTY
            function apiError(code, detail) { const e = new Error(code + (detail ? ': ' + String(detail).slice(0, 200) : '')); e.code = code; return e; }
            window.AMS_RETRYABLE = (code) => code === 'NETWORK' || code === 'SERVER' || code === 'RATE_LIMIT';
            window.genErrorKey = (err) => ({ RATE_LIMIT: 'err.gen-rate', KEY: 'err.gen-key', SERVER: 'err.gen-server', BLOCKED: 'err.gen-blocked', NETWORK: 'err.gen-network' })[err && err.code] || 'err.gen-failed';
            async function callGemini(model, parts) {
                const g = window.AMS_GEN;
                let response;
                try {
                    response = await fetch(g.API_URL(model), {
                        method: 'POST', headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ contents: [{ parts }], safetySettings: g.SAFETY }),
                        signal: (typeof AbortSignal !== 'undefined' && AbortSignal.timeout) ? AbortSignal.timeout(90000) : undefined
                    });
                } catch (e) { throw apiError('NETWORK', e && e.name); }
                let result = null;
                try { result = await response.json(); } catch (e) { result = null; }
                const em = result && result.error ? result.error.message : '';
                if (response.status === 429) throw apiError('RATE_LIMIT', em);
                if (response.status === 400 || response.status === 401 || response.status === 403 || response.status === 404) throw apiError('KEY', em || response.status);
                if (!response.ok) throw apiError('SERVER', em || response.status);
                const block = result?.promptFeedback?.blockReason;
                const finish = result?.candidates?.[0]?.finishReason;
                if (block || (finish && finish !== 'STOP' && finish !== 'MAX_TOKENS')) throw apiError('BLOCKED', block || finish);
                return result;
            }
            async function genImageWithRefs(promptText, refs) {
                const g = window.AMS_GEN;
                const parts = [];
                (refs || []).forEach(r => parts.push({ inlineData: { mimeType: 'image/jpeg', data: r } }));
                parts.push({ text: promptText });
                const result = await callGemini(g.IMG_MODEL, parts);
                const imageData = result?.candidates?.[0]?.content?.parts?.find(pp => pp.inlineData)?.inlineData?.data;
                if (!imageData) throw apiError('EMPTY', 'No image data received');
                return imageData;
            }
            window.genImageWithRefs = genImageWithRefs;
            async function genText(promptText, refs) {
                const g = window.AMS_GEN;
                const parts = [];
                (refs || []).forEach(r => parts.push({ inlineData: { mimeType: 'image/jpeg', data: r } }));
                parts.push({ text: promptText });
                const result = await callGemini(g.TXT_MODEL, parts);
                const txt = result?.candidates?.[0]?.content?.parts?.map(pp => pp.text || '').join('') || '';
                if (!txt.trim()) throw apiError('EMPTY', 'No text received');
                return txt.trim();
            }
            window.genText = genText;

            // ==================== DATA KANONIK (EN, DIKUNCI - hanya label yang diterjemahkan) ====================
            const RATIO_TEXT = {
                'auto': 'the SAME aspect ratio, framing and crop as IMAGE 1',
                '4:3': 'landscape 4:3 format',
                '16:9': 'wide 16:9 cinematic landscape format',
                '1:1': 'square 1:1 format',
                '4:5': 'portrait 4:5 format (Instagram feed)',
                '9:16': 'vertical 9:16 format (story / reels)',
                '3:4': 'portrait 3:4 format'
            };
            const PLATE_TEXT = {
                keep: 'Keep the license plate exactly as in the reference photo.',
                blur: 'Render the license plate blurred and unreadable.',
                remove: 'Render the vehicle WITHOUT a license plate (clean plate area).'
            };
            const STUDIO_SCENE = 'a professional automotive photo studio: seamless dark charcoal cyclorama background, large softbox reflections running along the body lines, clean polished floor with a subtle reflection, no clutter, catalog-quality commercial lighting';
            const SCENES = [
                { val: 'a professional automotive photo studio with a seamless black cyclorama background, dramatic rim lighting outlining the body, glossy dark floor reflection', label: 'Studio Hitam', studio: true },
                { val: 'a bright professional photo studio with a seamless pure white cyclorama background, soft even catalog lighting, clean white floor with a faint reflection', label: 'Studio Putih', studio: true },
                { val: 'a luxury dealership showroom with polished marble floor, glass walls, soft ceiling spotlights and reflections', label: 'Showroom' },
                { val: 'a moody industrial garage with exposed brick, concrete floor, hanging warm bulb lights and tool shelves in the background', label: 'Garasi Industrial' },
                { val: 'a city rooftop parking deck at dusk with a skyline of glowing skyscrapers behind', label: 'Rooftop Kota' },
                { val: 'a neon-lit city street at night, wet asphalt reflecting pink and cyan neon signs, cinematic cyberpunk mood', label: 'Jalan Neon Malam' },
                { val: 'a rain-soaked city street at night, wet asphalt with glowing reflections of street lights, light drizzle in the air', label: 'Jalan Basah Hujan' },
                { val: 'a coastal road by the beach at golden hour, warm low sun, ocean and palm trees in the background', label: 'Pantai Golden Hour' },
                { val: 'a winding mountain road with misty green highlands and pine trees, soft morning light', label: 'Pegunungan' },
                { val: 'a quiet pine forest road with tall trees and soft light rays filtering through', label: 'Hutan Pinus' },
                { val: 'a desert highway with golden sand dunes and a clear blue sky, harsh warm sunlight', label: 'Padang Pasir' },
                { val: 'a race track pit lane with red-and-white curbs, grandstands and pit garages in the background', label: 'Sirkuit' },
                { val: 'an empty multi-storey parking deck with concrete pillars and fluorescent lights', label: 'Parkiran Gedung' },
                { val: 'a long road tunnel with orange sodium lights streaking along the ceiling', label: 'Terowongan' },
                { val: 'a custom modification workshop with a car lift, tool chests, wheels on racks and warm workshop lighting', label: 'Bengkel Modif' },
                { val: 'a car wash bay with water droplets on the body, foam on the floor and soft overhead lights', label: 'Car Wash' },
                { val: 'a countryside road between green rice fields with mountains in the distance, Indonesian rural scenery', label: 'Pedesaan' },
                { val: 'a gas station forecourt at night with bright canopy lights and a dark sky', label: 'Pom Bensin Malam' },
                { val: 'a harbor dock at sunset with shipping containers, cranes and warm orange sky', label: 'Pelabuhan' },
                { val: 'a wide empty highway at sunrise with long shadows and soft pastel sky', label: 'Jalan Tol' },
                { val: 'a modern downtown street in daylight with glass buildings and clean sidewalks', label: 'Perkotaan Siang' }
            ];
            const LIGHTS = [
                { val: 'soft large softbox studio lighting with clean highlights along the body lines', label: 'Softbox Studio' },
                { val: 'dramatic rim lighting from behind and the side, deep shadows, high contrast', label: 'Rim Light Dramatis' },
                { val: 'natural ambient daylight', label: 'Natural' },
                { val: 'colorful neon light spill in cyan and magenta reflecting on the body', label: 'Neon' },
                { val: 'soft overcast diffused light with gentle shadows', label: 'Mendung Lembut' },
                { val: 'warm golden hour sunlight with long shadows and lens flare', label: 'Golden Hour' },
                { val: 'warm street lights and headlights glowing at night', label: 'Lampu Jalan' }
            ];
            const TIMES = [
                { val: 'daytime', label: 'Siang' },
                { val: 'sunset', label: 'Sore' },
                { val: 'night', label: 'Malam' },
                { val: 'early dawn with soft blue light', label: 'Subuh' }
            ];
            const STYLES = {
                car: [
                    { val: '', label: 'Tanpa gaya' },
                    { val: 'stance / hellaflush build: aggressively lowered ride height, wide wheels with deep lips and slight negative camber, flush fitment, tucked wheels', label: 'Stance / Ceper' },
                    { val: 'clean OEM+ look: tasteful factory-style upgrades, subtle drop, premium OEM-style wheels, nothing flashy', label: 'Sleeper / OEM+' },
                    { val: 'street racing look: sporty body kit, rear wing, lowered, lightweight racing wheels, aggressive front splitter', label: 'Street Racing' },
                    { val: 'drift car build: wide fenders, lowered with extreme front camber, deep-dish wheels, ducktail spoiler, front splitter, roll cage visible through the windows', label: 'Drift' },
                    { val: 'rally car build: raised rally suspension, gravel rally wheels, roof scoop, mud flaps, auxiliary light pod on the hood, rally livery', label: 'Rally' },
                    { val: 'time attack track car: large carbon GT rear wing, front splitter with canards, rear diffuser, wide track, aero fenders, lightweight racing wheels', label: 'Time Attack / Track' },
                    { val: 'offroad overland build: lift kit, all-terrain tires on beadlock-style wheels, roof rack with cargo, LED light bar, snorkel, fender flares, skid plates', label: 'Offroad / Overland' },
                    { val: 'Japanese VIP (bippu) style: extremely low, large polished multi-spoke wheels with deep lips, elegant lip kit, chrome accents, dark tinted windows', label: 'VIP / Bippu' },
                    { val: 'elegant luxury styling: refined aero kit, large diamond-cut wheels, subtle lowering, gloss black trim, premium clean look', label: 'Luxury Elegan' },
                    { val: 'retro classic inspired styling: period-correct style wheels, chrome details, vintage racing stripes, classic touches', label: 'Retro / Klasik' },
                    { val: 'widebody conversion: bolt-on wide fender flares, extremely wide wheels with deep concave dish, massive rear wing, very low stance', label: 'Widebody' },
                    { val: 'clean minimalist build: debadged, gloss black trim, slight drop, simple monoblock wheels, no decals', label: 'Minimalis Bersih' }
                ],
                motorcycle: [
                    { val: '', label: 'Tanpa gaya' },
                    { val: 'cafe racer build: clip-on handlebars, single seat with a rear cowl hump, round headlight, bar-end mirrors, slim tank, rearset footpegs, exposed engine', label: 'Cafe Racer' },
                    { val: 'scrambler build: high-mounted exhaust with heat shield, knobby dual-sport tires, flat bench seat, wide handlebars, headlight grille, fork gaiters', label: 'Scrambler' },
                    { val: 'bobber build: chopped rear fender, solo sprung seat, fat tires, low stance, minimal bodywork, blacked-out finish', label: 'Bobber' },
                    { val: 'chopper build: extended raked front fork, ape hanger handlebars, long low frame, tall sissy bar, custom painted tank', label: 'Chopper' },
                    { val: 'supermoto build: 17-inch wheels with sticky road tires, oversized front brake disc, number plate side panels, handguards, slim bodywork', label: 'Supermoto' },
                    { val: 'Thai-look (Thailook) scooter style: slim racing wheels with very thin tires, extremely low stance, stripped body panels, bright racing paint with decals, aftermarket exhaust', label: 'Thailook' },
                    { val: 'touring setup: tall windshield, side panniers and top box, crash bars, auxiliary LED lights, comfort seat, handguards', label: 'Touring' },
                    { val: 'full sport fairing look: aerodynamic racing fairings, winglets, racing livery, tail tidy, aftermarket slip-on exhaust', label: 'Sport Fairing' },
                    { val: 'elegant premium scooter styling: color-matched body, chrome and gloss black accents, stitched premium seat, sleek LED lighting, two-tone wheels', label: 'Matic Elegan' },
                    { val: 'flat tracker build: flat track number plates, wide flat handlebars, short tail, dual-purpose tires, minimal fenders', label: 'Tracker' },
                    { val: 'streetfighter build: naked bike with an aggressive mini headlight, stubby exhaust, tail tidy, bar-end mirrors, bold decals', label: 'Street Fighter' }
                ]
            };
            const PARTS = {
                car: [
                    { val: 'new aftermarket wheels matching the style (larger diameter, fitted flush to the fenders)', label: 'Velg' },
                    { val: 'new tires with the correct profile for the style', label: 'Ban' },
                    { val: 'full body kit: front lip/splitter, side skirts and rear bumper extension', label: 'Body Kit' },
                    { val: 'a rear spoiler / wing matching the style', label: 'Spoiler / Wing' },
                    { val: 'lowered ride height with a reduced wheel gap', label: 'Ceper / Lowering' },
                    { val: 'raised ride height with a lift kit and larger tires', label: 'Lift Kit / Tinggi' },
                    { val: 'upgraded modern LED headlights and smoked taillights', label: 'Lampu' },
                    { val: 'an aftermarket exhaust with visible tips', label: 'Knalpot' },
                    { val: 'custom decals / livery / stripes on the body', label: 'Stiker / Livery' },
                    { val: 'dark tinted windows', label: 'Kaca Film' },
                    { val: 'a roof rack', label: 'Roof Rack' },
                    { val: 'wide fender flares', label: 'Fender Flare' },
                    { val: 'a custom front grille', label: 'Grill' },
                    { val: 'a carbon fiber vented hood', label: 'Kap Mesin / Carbon' },
                    { val: 'carbon fiber aftermarket side mirrors', label: 'Spion' },
                    { val: 'a rear diffuser', label: 'Diffuser' },
                    { val: 'underglow LED lighting visible beneath the car', label: 'Lampu Kolong' },
                    { val: 'a visible interior upgrade: sport bucket seats and a sport steering wheel seen through the windows', label: 'Interior' }
                ],
                motorcycle: [
                    { val: 'new aftermarket wheels matching the style', label: 'Velg' },
                    { val: 'new tires with the right profile for the style', label: 'Ban' },
                    { val: 'custom fairing / body panels matching the style', label: 'Fairing / Body' },
                    { val: 'an aftermarket exhaust', label: 'Knalpot' },
                    { val: 'new handlebars matching the style', label: 'Setang' },
                    { val: 'a custom seat matching the style', label: 'Jok' },
                    { val: 'a custom headlight', label: 'Lampu Depan' },
                    { val: 'a windshield', label: 'Windshield' },
                    { val: 'a top box and side panniers', label: 'Box / Pannier' },
                    { val: 'crash bars', label: 'Crash Bar' },
                    { val: 'upgraded suspension / rear shocks', label: 'Shock / Suspensi' },
                    { val: 'upgraded brake discs and colored calipers', label: 'Cakram / Kaliper' },
                    { val: 'custom decals / livery', label: 'Stiker / Livery' },
                    { val: 'aftermarket mirrors', label: 'Spion' }
                ]
            };
            const FINISHES = [
                { val: 'high-gloss', label: 'Glossy' },
                { val: 'matte (flat, non-reflective)', label: 'Matte / Doff' },
                { val: 'satin (soft sheen)', label: 'Satin' },
                { val: 'metallic with fine metal flake', label: 'Metallic' },
                { val: 'pearlescent pearl', label: 'Pearl / Mutiara' },
                { val: 'mirror chrome', label: 'Chrome' },
                { val: 'deep candy', label: 'Candy' },
                { val: 'color-shifting chameleon', label: 'Chameleon' },
                { val: 'carbon fiber weave look', label: 'Carbon Look' }
            ];
            const COLORS = [
                { val: 'black', label: 'Hitam', hex: '#111111' },
                { val: 'pure white', label: 'Putih', hex: '#f5f5f5' },
                { val: 'Nardo gray', label: 'Abu Nardo', hex: '#8d8f93' },
                { val: 'silver', label: 'Silver', hex: '#c9ccd1' },
                { val: 'bright red', label: 'Merah', hex: '#d41f2a' },
                { val: 'navy blue', label: 'Biru Navy', hex: '#1b2a63' },
                { val: 'light sky blue', label: 'Biru Muda', hex: '#7cb6e8' },
                { val: 'army green', label: 'Hijau Army', hex: '#4b5d3a' },
                { val: 'British racing green', label: 'Hijau Racing', hex: '#0f4a2e' },
                { val: 'bright yellow', label: 'Kuning', hex: '#f5c400' },
                { val: 'orange', label: 'Oranye', hex: '#f26a1b' },
                { val: 'deep purple', label: 'Ungu', hex: '#5b2a86' },
                { val: 'champagne gold', label: 'Emas / Champagne', hex: '#c9a86a' },
                { val: 'pink', label: 'Pink', hex: '#ef7ab0' },
                { val: 'bronze brown', label: 'Cokelat / Bronze', hex: '#8a5a2b' }
            ];
            const AREAS = [
                { val: 'the entire body', label: 'Seluruh body' },
                { val: 'the body, with the roof and pillars in gloss black (two-tone)', label: 'Two-tone (atap hitam)' },
                { val: 'only the accents (mirrors, spoiler, trim, lips)', label: 'Aksen saja' },
                { val: 'only the wheels', label: 'Velg saja' }
            ];
            const ANGLES = {
                car: [
                    { val: 'front three-quarter view from the front-left, camera at eye level, the whole car in frame', label: '3/4 Depan Kiri' },
                    { val: 'front three-quarter view from the front-right, camera at eye level, the whole car in frame', label: '3/4 Depan Kanan' },
                    { val: 'exact left side profile view, camera at door-handle height, the whole car in frame', label: 'Samping Kiri' },
                    { val: 'exact right side profile view, camera at door-handle height, the whole car in frame', label: 'Samping Kanan' },
                    { val: 'rear three-quarter view from the rear-left, camera at eye level, the whole car in frame', label: '3/4 Belakang Kiri' },
                    { val: 'rear three-quarter view from the rear-right, camera at eye level, the whole car in frame', label: '3/4 Belakang Kanan' },
                    { val: 'straight front view, camera at eye level, symmetrical composition, the whole car in frame', label: 'Depan Lurus' },
                    { val: 'straight rear view, camera at eye level, symmetrical composition, the whole car in frame', label: 'Belakang' },
                    { val: 'front three-quarter view from a slightly low camera at knee height, the whole car in frame', label: '3/4 Depan Rendah' },
                    { val: 'front three-quarter view from a slightly raised camera at about two meters high, the whole car in frame', label: '3/4 Depan Atas' }
                ],
                motorcycle: [
                    { val: 'front three-quarter view from the front-left, camera at seat height, the whole motorcycle in frame', label: '3/4 Depan Kiri' },
                    { val: 'front three-quarter view from the front-right, camera at seat height, the whole motorcycle in frame', label: '3/4 Depan Kanan' },
                    { val: 'exact left side profile view, camera at axle height, the whole motorcycle in frame', label: 'Samping Kiri' },
                    { val: 'exact right side profile view, camera at axle height, the whole motorcycle in frame', label: 'Samping Kanan' },
                    { val: 'rear three-quarter view from the rear-left, camera at seat height, the whole motorcycle in frame', label: '3/4 Belakang Kiri' },
                    { val: 'rear three-quarter view from the rear-right, camera at seat height, the whole motorcycle in frame', label: '3/4 Belakang Kanan' },
                    { val: 'straight front view, camera at headlight height, symmetrical composition, the whole motorcycle in frame', label: 'Depan Lurus' },
                    { val: 'straight rear view, camera at taillight height, symmetrical composition, the whole motorcycle in frame', label: 'Belakang' },
                    { val: 'front three-quarter view from a slightly low camera at knee height, the whole motorcycle in frame', label: '3/4 Depan Rendah' },
                    { val: 'front three-quarter view from a slightly raised camera at about chest height, the whole motorcycle in frame', label: '3/4 Depan Atas' }
                ]
            };
            const REF_TYPES = [
                { val: 'wheel', key: 'st.ref-wheel', text: 'a WHEEL reference: fit these exact wheels (same spoke design, lip, finish and color) onto the vehicle, scaled correctly to its wheel wells' },
                { val: 'tire', key: 'st.ref-tire', text: 'a TIRE reference: use these tires (same tread pattern, sidewall profile and lettering)' },
                { val: 'bodykit', key: 'st.ref-bodykit', text: 'a BODY KIT / aero reference: replicate this body kit design (bumpers, splitter, side skirts, diffuser, wing) adapted to the subject vehicle\'s body lines' },
                { val: 'color', key: 'st.ref-color', text: 'a COLOR / WRAP reference: paint or wrap the subject vehicle in exactly this color, finish and pattern' },
                { val: 'vehicle', key: 'st.ref-vehicle', text: 'a STYLE INSPIRATION vehicle: copy its stance, wheels, aero, color scheme and overall vibe onto the subject vehicle - but the subject MUST remain the vehicle from IMAGE 1, never this one' },
                { val: 'part', key: 'st.ref-part', text: 'a PART / ACCESSORY reference: install this exact part on the subject vehicle as shown' }
            ];
            window.AMS_DATA = { SCENES, LIGHTS, TIMES, STYLES, PARTS, FINISHES, COLORS, AREAS, ANGLES, REF_TYPES, RATIO_TEXT, PLATE_TEXT, STUDIO_SCENE };

            // ==================== PROMPT BUILDERS (fungsi murni) ====================
            function kindOf(v) { return v && v.type === 'motorcycle' ? 'motorcycle' : 'car'; }
            function lockText(v) {
                const kind = kindOf(v);
                const n = v.photos.length;
                const ident = v.name ? ` (${v.name}${v.notes ? ', ' + v.notes : ''})` : '';
                const imgs = n > 1 ? `IMAGE 1 to IMAGE ${n} show the SAME ${kind}${ident} photographed from different sides` : `IMAGE 1 shows a ${kind}${ident}`;
                return `${imgs}. This exact ${kind} is the subject. Keep its make, model, generation, body shape, proportions, panel lines, headlight and taillight design, grille, windows, badges and every distinctive detail EXACTLY as photographed. Do NOT replace it with a different ${kind} and do NOT redesign it. `;
            }
            function refsText(v, refs) {
                if (!refs || !refs.length) return '';
                const base = v.photos.length;
                return refs.map((r, i) => {
                    const rt = REF_TYPES.find(x => x.val === r.type) || REF_TYPES[5];
                    return `IMAGE ${base + i + 1} is ${rt.text}.`;
                }).join(' ') + ' ';
            }
            function sceneText(v, sel) {
                const kind = kindOf(v);
                if (sel.sceneMode === 'studio') return `Place the ${kind} in ${STUDIO_SCENE}. Keep the same camera angle and framing as IMAGE 1. `;
                if (sel.sceneMode === 'custom' && sel.scene) return `Place the ${kind} in ${sel.scene}. Keep the same camera angle and framing as IMAGE 1. Lighting, reflections and shadows on the ${kind} must match the new environment realistically. `;
                return `Keep the ORIGINAL background, environment, camera angle, framing, perspective, lighting direction, shadows and reflections of IMAGE 1 exactly as they are - the result must look like the same photograph with only the described changes applied to the ${kind}. `;
            }
            function tailText(sel) {
                return `${PLATE_TEXT[sel.plate] || PLATE_TEXT.keep} Photorealistic, sharp, professional automotive photography quality, correct scale and physically plausible fitment. ${RATIO_TEXT[sel.ratio] || RATIO_TEXT.auto}. No text overlay, no watermark.`;
            }
            const VAR_HINTS = ['balanced, tasteful execution', 'bolder, more aggressive execution', 'subtle OEM-plus execution', 'show-level, maximal execution', 'daily-driver friendly execution', 'premium elegant execution'];

            function angleEnvText(sel) {
                if (sel.sceneMode === 'studio') return `Environment: ${STUDIO_SCENE}. `;
                if (sel.sceneMode === 'custom' && sel.scene) return `Environment: ${sel.scene}. `;
                return `Environment: the SAME location, lighting and time of day as IMAGE 1, re-projected consistently for the new viewpoint. `;
            }
            function framingText(kind) {
                return `Show the WHOLE ${kind} in frame with natural, standard automotive photography framing - no extreme close-up, no top-down or bird's-eye view, no fisheye distortion. `;
            }
            function refGuardText(kind, refs) {
                return refs && refs.length ? `The extra reference photos are part references only: install those parts ON the subject ${kind} and never show the reference items as separate loose objects in the scene. ` : '';
            }
            window.buildModifPrompt = function (sel, v, pick, refs) {
                const kind = kindOf(v);
                const parts = (sel.parts || []).length ? `Apply these modifications: ${sel.parts.join('; ')}. ` : '';
                const style = sel.style ? `MODIFICATION BRIEF - ${sel.style}. ` : '';
                const variation = pick && pick.variant ? `Interpretation for this render: ${pick.variant}. ` : '';
                const extra = sel.extra ? `Additional instructions from the owner (highest priority): ${sel.extra}. ` : '';
                const viewpoint = pick && pick.angle
                    ? `Then render the MODIFIED ${kind} from a NEW viewpoint: ${pick.angle}. Infer unseen sides consistently from the visible design and the extra reference photos; the modifications must be visible and consistent from this viewpoint. ` + framingText(kind) + refGuardText(kind, refs) + angleEnvText(sel)
                    : sceneText(v, sel);
                return lockText(v) + refsText(v, refs) + style + parts + extra + variation +
                    `Everything NOT listed stays exactly as in the reference photos (same paint color unless a color change is listed, same body, same ride height unless listed). Render every modification realistically fitted to this specific ${kind}. ` +
                    viewpoint + tailText(sel);
            };
            window.buildColorPrompt = function (sel, v, pick, refs) {
                const kind = kindOf(v);
                const color = sel.colorCustom ? sel.colorCustom : (sel.color || 'black');
                return lockText(v) + refsText(v, refs) +
                    `Change ONLY the paint / wrap of this ${kind}: ${color} with a ${sel.finish || 'high-gloss'} finish, applied to ${sel.area || 'the entire body'}. ` +
                    (sel.extra ? `Additional instructions from the owner (highest priority): ${sel.extra}. ` : '') +
                    `Keep the wheels, trim, glass, lights, badges, stance and every other part identical to the reference. Reflections and highlights must behave realistically for that finish. ` +
                    (pick && pick.angle
                        ? `Then render the recolored ${kind} from a NEW viewpoint: ${pick.angle}. Infer unseen sides consistently from the visible design and the extra reference photos; the new paint / wrap must be consistent from this viewpoint. ` + framingText(kind) + refGuardText(kind, refs) + angleEnvText(sel)
                        : sceneText(v, sel)) + tailText(sel);
            };
            window.buildScenePrompt = function (sel, v, pick, refs) {
                const kind = kindOf(v);
                const scene = (pick && pick.scene) || sel.scene || SCENES[0].val;
                return lockText(v) +
                    `The ${kind} must remain 100% IDENTICAL to the reference: same paint color, same wheels, same stance, same parts, same decals - it is NOT modified in any way. ` +
                    `Only replace the environment: place the ${kind} in ${scene}. Lighting: ${sel.light || LIGHTS[0].val}. Time: ${sel.time || 'daytime'}. ` +
                    `Reflections, highlights and shadows on the ${kind} must match the new environment realistically; the ${kind} must be grounded on the surface with a correct contact shadow. Keep the same camera angle and framing as IMAGE 1. ` +
                    (sel.extra ? `Additional instructions from the owner (highest priority): ${sel.extra}. ` : '') +
                    tailText(sel);
            };
            window.buildAnglePrompt = function (sel, v, pick, refs) {
                const kind = kindOf(v);
                const angle = (pick && pick.angle) || sel.angle;
                const env = angleEnvText(sel);
                return lockText(v) +
                    `Render this exact ${kind} from a NEW viewpoint: ${angle}. ` +
                    `The ${kind} itself stays 100% identical: same paint color, same wheels, same stance, same modifications, same decals. Infer unseen sides consistently from the visible design and the extra reference photos. ` +
                    framingText(kind) + env +
                    (sel.extra ? `Additional instructions from the owner (highest priority): ${sel.extra}. ` : '') +
                    tailText(sel);
            };

            window.buildQuickPrompt = function (sel, v, pick, refs) {
                const kind = kindOf(v);
                const request = sel.extra
                    ? `Requested modification from the owner (highest priority): ${sel.extra}. `
                    : `Apply the changes shown in the reference photos to the subject ${kind}. `;
                const variation = pick && pick.variant ? `Interpretation for this render: ${pick.variant}. ` : '';
                const viewpoint = pick && pick.angle
                    ? `Then render the MODIFIED ${kind} from this viewpoint: ${pick.angle}. Infer unseen sides consistently from the visible design and the extra reference photos; the modifications must be visible and consistent from this viewpoint. `
                    : '';
                return lockText(v) + refsText(v, refs) + request + variation +
                    `Everything NOT requested stays exactly as in the reference photos (same paint color unless a color change is requested, same body, same ride height unless requested). Render every change realistically fitted to this specific ${kind}. ` +
                    viewpoint + framingText(kind) + refGuardText(kind, refs) + angleEnvText({ sceneMode: 'keep' }) + tailText({ plate: 'keep', ratio: sel.ratio || 'auto' });
            };

            // ==================== FACTORY: TAB STUDIO ====================
            function chipGroup(attrs, options, opts) {
                const o = opts || {};
                const cols = o.cols || 'grid-cols-2';
                return `<div class="grid ${cols} gap-2" ${attrs}>` +
                    (o.random ? `<button type="button" class="option-btn selected" data-val="__random">Acak</button>` : '') +
                    options.map((x, i) => `<button type="button" class="option-btn${(!o.random && !o.multi && i === 0) ? ' selected' : ''}" data-val="${window.escHtml(x.val)}"${o.forType ? ` data-for="${o.forType}"` : ''}>${x.hex ? `<span class="sw" style="background:${x.hex}"></span>` : ''}${x.label}</button>`).join('') +
                    `</div>`;
            }
            function typedGroup(attrs, byType, opts) {
                const rnd = opts.random ? `<button type="button" class="option-btn${opts.multi ? '' : ' selected'}" data-val="__random">Acak</button>` : '';
                const first = (i) => (!opts.multi && !opts.random && i === 0) ? ' selected' : '';
                return `<div ${attrs}>` +
                    `<div data-for="car" class="grid ${opts.cols || 'grid-cols-2'} gap-2">` + rnd + byType.car.map((x, i) => `<button type="button" class="option-btn${first(i)}" data-val="${window.escHtml(x.val)}">${x.label}</button>`).join('') + `</div>` +
                    `<div data-for="motorcycle" class="grid ${opts.cols || 'grid-cols-2'} gap-2 hidden">` + rnd + byType.motorcycle.map((x, i) => `<button type="button" class="option-btn${first(i)}" data-val="${window.escHtml(x.val)}">${x.label}</button>`).join('') + `</div>` +
                    `</div>`;
            }
            function sceneSelect(p) {
                return `<select id="${p}-scene-select" class="ams-select w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white mt-2 hidden">` +
                    SCENES.map(s => `<option value="${window.escHtml(s.val)}" data-i18n-dyn>${s.label}</option>`).join('') + `</select>`;
            }
            window.DYN_LABELS.en = Object.assign(window.DYN_LABELS.en, {
                'Studio Hitam': 'Black Studio', 'Studio Putih': 'White Studio', 'Showroom': 'Showroom', 'Garasi Industrial': 'Industrial Garage', 'Rooftop Kota': 'City Rooftop', 'Jalan Neon Malam': 'Neon Night Street', 'Jalan Basah Hujan': 'Wet Rainy Street', 'Pantai Golden Hour': 'Golden Hour Beach',
                'Pegunungan': 'Mountains', 'Hutan Pinus': 'Pine Forest', 'Padang Pasir': 'Desert', 'Sirkuit': 'Race Track', 'Parkiran Gedung': 'Parking Deck', 'Terowongan': 'Tunnel', 'Bengkel Modif': 'Custom Workshop', 'Car Wash': 'Car Wash', 'Pedesaan': 'Countryside', 'Pom Bensin Malam': 'Gas Station at Night', 'Pelabuhan': 'Harbor', 'Jalan Tol': 'Highway', 'Perkotaan Siang': 'Downtown Day'
            });

            function createStudioTab(cfg) {
                const p = cfg.tab;
                const host = document.getElementById('content-' + p);
                let step = 1;
                const nextStep = () => ++step;
                const stepHead = (key) => `<div class="flex items-center gap-3 mb-4"><span class="step-num">${nextStep()}</span><h3 class="font-semibold text-gray-800" data-i18n="${key}"></h3></div>`;

                const sections = {
                    steps: () => {
                        let h = '';
                        for (const s of cfg.steps) {
                            h += `<div class="card">${stepHead(s.titleKey)}`;
                            if (s.hintKey) h += `<p class="text-xs text-gray-400 mb-2" data-i18n="${s.hintKey}"></p>`;
                            if (s.selectAll) h += `<div class="flex gap-3 mb-2"><button type="button" class="text-xs font-semibold text-orange-600 min-h-[44px] px-2" data-sel-all="${s.key}" data-i18n="st.sel-all"></button><button type="button" class="text-xs font-semibold text-slate-500 min-h-[44px] px-2" data-sel-none="${s.key}" data-i18n="st.sel-none"></button></div>`;
                            if (s.type === 'typed') h += typedGroup(`data-group="${s.key}" data-multi="${s.multi ? 1 : 0}" data-typed="1"`, s.byType, { multi: s.multi, cols: s.cols, random: s.random });
                            else h += chipGroup(`data-group="${s.key}" data-multi="${s.multi ? 1 : 0}"`, s.options, { random: s.random, multi: s.multi, cols: s.cols });
                            if (s.customInput) h += `<input id="${p}-${s.key}-custom" type="text" maxlength="80" class="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm mt-2" data-i18n-placeholder="${s.customInput.phKey}">`;
                            h += `</div>`;
                        }
                        return h;
                    },
                    refs: () => cfg.refs ? `<div class="card">${stepHead('st.refs-title')}
                        <p class="text-xs text-gray-400 mb-2" data-i18n="st.refs-hint"></p>
                        <div id="${p}-refs" class="grid grid-cols-3 gap-2"></div>
                        <button type="button" id="${p}-ref-add" class="btn-secondary w-full rounded-lg py-2.5 text-xs font-semibold mt-2"><i class="fas fa-plus mr-1"></i><span data-i18n="st.ref-add"></span></button>
                        <input id="${p}-ref-file" type="file" accept="image/*,.heic" class="hidden">
                    </div>` : '',
                    scene: () => cfg.sceneMode ? `<div class="card">${stepHead('st.scene-mode')}
                        <div class="grid grid-cols-1 gap-2" data-scene-mode>
                            <button type="button" class="option-btn selected" data-val="keep" data-no-i18n><i class="fas fa-image mr-1"></i><span data-i18n="st.scene-keep"></span></button>
                            <button type="button" class="option-btn" data-val="studio" data-no-i18n><i class="fas fa-lightbulb mr-1"></i><span data-i18n="st.scene-studio"></span></button>
                            <button type="button" class="option-btn" data-val="custom" data-no-i18n><i class="fas fa-mountain-sun mr-1"></i><span data-i18n="st.scene-custom"></span></button>
                        </div>${sceneSelect(p)}
                    </div>` : '',
                    extra: () => {
                        const ratioBlock = `<div>
                                        <p class="text-xs font-medium text-gray-500 mb-1" data-i18n="st.ratio"></p>
                                        <div class="grid grid-cols-4 gap-1.5" data-ratio-group><button type="button" class="option-btn selected" data-val="auto" data-no-i18n style="padding:.4rem .2rem;font-size:.75rem;"><span data-i18n="st.ratio-auto"></span></button>${['4:3', '16:9', '1:1', '4:5', '3:4', '9:16'].map(r => `<button type="button" class="option-btn" data-val="${r}" data-no-i18n style="padding:.4rem .2rem;font-size:.75rem;">${r}</button>`).join('')}</div>
                                    </div>`;
                        const plateBlock = `<div>
                                        <p class="text-xs font-medium text-gray-500 mb-1" data-i18n="st.plate"></p>
                                        <div class="grid grid-cols-1 gap-1.5" data-plate-group>
                                            <button type="button" class="option-btn selected" data-val="keep" data-no-i18n style="padding:.4rem .2rem;font-size:.75rem;"><span data-i18n="st.plate-keep"></span></button>
                                            <button type="button" class="option-btn" data-val="blur" data-no-i18n style="padding:.4rem .2rem;font-size:.75rem;"><span data-i18n="st.plate-blur"></span></button>
                                            <button type="button" class="option-btn" data-val="remove" data-no-i18n style="padding:.4rem .2rem;font-size:.75rem;"><span data-i18n="st.plate-remove"></span></button>
                                        </div>
                                    </div>`;
                        return `<div class="card">${stepHead(cfg.extraKey || 'st.extra')}
                                <textarea id="${p}-extra" rows="${cfg.hidePlate ? 3 : 2}" maxlength="400" class="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm" data-i18n-placeholder="${cfg.extraPhKey || 'st.extra-ph'}"></textarea>
                                ${cfg.hidePlate ? `<div class="mt-3">${ratioBlock}</div>` : `<div class="grid grid-cols-2 gap-3 mt-3">${ratioBlock}${plateBlock}</div>`}
                            </div>`;
                    },
                    count: () => cfg.countMode === 'count' ? `<div class="card">${stepHead('st.count')}
                        <div class="grid grid-cols-6 gap-2" data-count-group>${[1, 2, 3, 4, 5, 6].map(n => `<button type="button" class="option-btn${n === 2 ? ' selected' : ''}" data-val="${n}" data-no-i18n>${n}</button>`).join('')}</div>
                    </div>` : ''
                };
                const layout = cfg.layout || ['steps', 'refs', 'scene', 'extra', 'count'];
                const formHtml = layout.map(k => sections[k]()).join('');

                host.innerHTML = `
                    <h2 class="text-lg font-bold text-gray-800 mb-1" data-i18n="${cfg.prefix}.title"></h2>
                    <p class="text-sm text-gray-500 mb-4" data-i18n="${cfg.prefix}.subtitle"></p>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        <div class="lg:col-span-1 space-y-6">
                            <div id="${p}-picker"></div>
                            ${formHtml}
                            <button id="${p}-generate" class="btn-primary w-full rounded-lg py-3 font-semibold text-sm"><i class="fas fa-wand-magic-sparkles mr-2"></i><span data-i18n="st.generate"></span></button>
                        </div>
                        <div class="lg:col-span-2 space-y-6">
                            <div class="card">
                                <div class="flex items-center justify-between mb-3">
                                    <h3 class="font-semibold text-gray-800" data-i18n="st.results"></h3>
                                    <button id="${p}-dl-all" class="btn-secondary rounded-lg px-3 py-2 text-xs font-semibold hidden"><i class="fas fa-download mr-1"></i><span data-i18n="st.dl-all"></span></button>
                                </div>
                                <div id="${p}-empty" class="text-center py-12 text-gray-400">
                                    <i class="fas fa-${cfg.icon || 'image'} text-4xl mb-3"></i>
                                    <p class="text-sm" data-i18n="st.empty"></p>
                                </div>
                                <div id="${p}-grid" class="result-grid"></div>
                            </div>
                            <div class="tips-box">
                                <p class="font-semibold mb-1"><i class="fas fa-lightbulb mr-1"></i><span data-i18n="tips.title"></span></p>
                                <ul class="list-disc list-inside space-y-0.5">
                                    <li data-i18n="${cfg.prefix}.tip1"></li><li data-i18n="${cfg.prefix}.tip2"></li><li data-i18n="${cfg.prefix}.tip3"></li>
                                </ul>
                            </div>
                        </div>
                    </div>`;

                const pickerHost = document.getElementById(`${p}-picker`);
                const picker = window.mountVehiclePicker(pickerHost, p, cfg.pickerOpts);
                const grid = document.getElementById(`${p}-grid`);
                const emptyState = document.getElementById(`${p}-empty`);
                const dlAll = document.getElementById(`${p}-dl-all`);
                const genBtn = document.getElementById(`${p}-generate`);
                const extraEl = document.getElementById(`${p}-extra`);
                let results = [];
                let busy = false;
                let refs = [];   // [{ type, b64, dataUrl }]
                let currentType = 'car';

                // --- chip handling (single / multi) ---
                host.addEventListener('click', (e) => {
                    const bulk = e.target.closest('[data-sel-all], [data-sel-none]');
                    if (bulk) {
                        const key = bulk.dataset.selAll || bulk.dataset.selNone;
                        const g = host.querySelector(`[data-group="${key}"]`); if (!g) return;
                        const scope = g.dataset.typed === '1' ? g.querySelector(`[data-for="${currentType}"]`) : g;
                        let picked = 0;
                        scope.querySelectorAll('.option-btn').forEach(b => {
                            const on = bulk.hasAttribute('data-sel-all') && b.dataset.val !== '__random' && picked < 10;
                            if (on) picked++;
                            b.classList.toggle('selected', on);
                        });
                        return;
                    }
                    const btn = e.target.closest('.option-btn');
                    if (!btn || pickerHost.contains(btn)) return;
                    const group = btn.closest('[data-group], [data-scene-mode], [data-count-group], [data-ratio-group], [data-plate-group]');
                    if (!group) return;
                    const multi = group.dataset.multi === '1';
                    const container = btn.parentElement;
                    if (multi) {
                        btn.classList.toggle('selected');
                    } else {
                        container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                    }
                    if (group.hasAttribute('data-scene-mode')) {
                        const sceneSel = document.getElementById(`${p}-scene-select`);
                        if (sceneSel) sceneSel.classList.toggle('hidden', btn.dataset.val !== 'custom');
                    }
                    if (group.dataset.group && cfg.onChipChange) cfg.onChipChange(group.dataset.group, btn, host);
                    refreshGenLabel();
                });
                function refreshType(type) {
                    currentType = type || currentType;
                    host.querySelectorAll('[data-typed="1"]').forEach(g => {
                        g.querySelectorAll('[data-for]').forEach(sub => sub.classList.toggle('hidden', sub.dataset.for !== currentType));
                    });
                    refreshGenLabel();
                }
                pickerHost.addEventListener('ams-picker-changed', (e) => refreshType(e.detail.type));
                picker.currentType().then(refreshType);

                function readGroup(key) {
                    const g = host.querySelector(`[data-group="${key}"]`);
                    if (!g) return null;
                    const multi = g.dataset.multi === '1';
                    const scope = g.dataset.typed === '1' ? g.querySelector(`[data-for="${currentType}"]`) : g;
                    const vals = [...scope.querySelectorAll('.option-btn.selected')].map(b => b.dataset.val);
                    return multi ? vals : (vals[0] || null);
                }
                function readSel() {
                    const sel = {};
                    for (const s of cfg.steps) {
                        sel[s.key] = readGroup(s.key);
                        if (s.customInput) {
                            const ci = document.getElementById(`${p}-${s.key}-custom`);
                            sel[s.key + 'Custom'] = ci ? ci.value.trim() : '';
                        }
                    }
                    const sm = host.querySelector('[data-scene-mode] .option-btn.selected');
                    sel.sceneMode = sm ? sm.dataset.val : 'keep';
                    const sceneSel = document.getElementById(`${p}-scene-select`);
                    sel.scene = sceneSel ? sceneSel.value : '';
                    sel.ratio = (host.querySelector('[data-ratio-group] .option-btn.selected') || {}).dataset?.val || 'auto';
                    sel.plate = (host.querySelector('[data-plate-group] .option-btn.selected') || {}).dataset?.val || 'keep';
                    const cg = host.querySelector('[data-count-group] .option-btn.selected');
                    sel.count = cg ? Number(cg.dataset.val) : 1;
                    sel.extra = extraEl.value.trim();
                    return sel;
                }
                host.readSel = readSel;
                host.setExtra = (txt) => { extraEl.value = txt; };
                host.selectByLabel = (key, labels) => {
                    const g = host.querySelector(`[data-group="${key}"]`); if (!g) return;
                    const scope = g.dataset.typed === '1' ? g.querySelector(`[data-for="${currentType}"]`) : g;
                    scope.querySelectorAll('.option-btn').forEach(b => {
                        const lbl = (b.dataset.i18nId || b.textContent || '').trim();
                        const hit = labels.some(l => l.toLowerCase() === lbl.toLowerCase());
                        if (g.dataset.multi === '1') b.classList.toggle('selected', hit);
                        else if (hit) { scope.querySelectorAll('.option-btn').forEach(x => x.classList.remove('selected')); b.classList.add('selected'); }
                    });
                };
                host.setVehicleUpload = (b64, type) => picker.setUpload(b64, type);
                function refreshGenLabel() {
                    if (!cfg.generateKey) return;
                    const span = genBtn.querySelector('[data-i18n]');
                    if (!span) return;
                    const key = cfg.generateKey(readSel());
                    span.setAttribute('data-i18n', key);
                    span.textContent = t(key);
                }
                refreshGenLabel();

                // --- referensi part ---
                if (cfg.refs) {
                    const refsEl = document.getElementById(`${p}-refs`);
                    const refFile = document.getElementById(`${p}-ref-file`);
                    document.getElementById(`${p}-ref-add`).addEventListener('click', () => { if (refs.length >= 4) return; refFile.click(); });
                    refFile.addEventListener('change', async () => {
                        const f = refFile.files && refFile.files[0]; refFile.value = '';
                        if (!f) return;
                        try {
                            const c = await window.fileToCompressed(f, 1024, 0.85);
                            refs.push({ type: 'wheel', b64: c.b64, dataUrl: c.dataUrl });
                            renderRefs();
                        } catch (e) { window.logDebug(p + '-ref', e); await window.uiNotify(t('err.img-read')); }
                    });
                    function renderRefs() {
                        refsEl.innerHTML = refs.map((r, i) => `<div class="ref-slot has-image">
                            <img src="${r.dataUrl}" alt="">
                            <button type="button" class="rm" data-ref-rm="${i}" aria-label="Hapus"><i class="fas fa-xmark"></i></button>
                            <select class="lbl ams-select" data-ref-type="${i}" style="appearance:none;-webkit-appearance:none;background-image:none;border:0;">
                                ${REF_TYPES.map(rt => `<option value="${rt.val}"${rt.val === r.type ? ' selected' : ''}>${window.escHtml(t(rt.key))}</option>`).join('')}
                            </select>
                        </div>`).join('');
                        document.getElementById(`${p}-ref-add`).classList.toggle('hidden', refs.length >= 4);
                    }
                    refsEl.addEventListener('click', (e) => {
                        const rm = e.target.closest('[data-ref-rm]'); if (!rm) return;
                        refs.splice(Number(rm.dataset.refRm), 1); renderRefs();
                    });
                    refsEl.addEventListener('change', (e) => {
                        const s = e.target.closest('[data-ref-type]'); if (!s) return;
                        refs[Number(s.dataset.refType)].type = s.value;
                    });
                    document.addEventListener('app-lang-changed', renderRefs);
                    host.addRef = (type, b64, dataUrl) => { if (refs.length < 4) { refs.push({ type, b64, dataUrl }); renderRefs(); } };
                }

                // --- kartu hasil ---
                const spinnerCard = (index, cap) => `<div id="${p}-card-${index}" class="result-card"><span class="image-counter">#${index}</span><div class="spin-box"><i class="fas fa-circle-notch fa-spin text-2xl"></i><span data-i18n="st.generating"></span>${cap ? `<span class="text-slate-400" data-i18n-dyn>${window.escHtml(cap)}</span>` : ''}</div></div>`;
                const cardInner = (index, r) => `
                    <span class="image-counter">#${index}</span>
                    <img src="data:image/png;base64,${r.b64}" alt="#${index}">
                    ${r.caption ? `<p class="cap pt-2" data-i18n-dyn>${window.escHtml(r.caption)}</p>` : ''}
                    <div class="result-card-actions">
                        <button class="icon-btn" style="background:#3b82f6;" data-action="preview" data-index="${index - 1}" data-i18n-title="st.preview"><i class="fas fa-eye"></i></button>
                        <button class="icon-btn" style="background:#f59e0b;" data-action="compare" data-index="${index - 1}" data-i18n-title="st.compare"><i class="fas fa-left-right"></i></button>
                        <button class="icon-btn" style="background:#22c55e;" data-action="regen" data-index="${index - 1}" data-i18n-title="st.regen"><i class="fas fa-rotate"></i></button>
                        <button class="icon-btn" style="background:#0891b2;" data-action="download" data-index="${index - 1}" data-i18n-title="st.download"><i class="fas fa-download"></i></button>
                        <button class="icon-btn" style="background:#d946ef;" data-action="video" data-index="${index - 1}" data-i18n-title="st.video"><i class="fas fa-video"></i></button>
                        <button class="icon-btn" style="background:#7c3aed;" data-action="save" data-index="${index - 1}" data-i18n-title="st.save"><i class="fas fa-bookmark"></i></button>
                        <button class="icon-btn" style="background:#0f766e;" data-action="use" data-index="${index - 1}" data-i18n-title="st.use"><i class="fas fa-car-side"></i></button>
                    </div>`;
                const errorCard = (index, cap, errKey) => `
                    <span class="image-counter">#${index}</span>
                    <div class="spin-box" style="color:#fca5a5;aspect-ratio:auto;min-height:180px;padding:1rem;">
                        <i class="fas fa-triangle-exclamation text-2xl"></i>
                        <span class="text-center" style="max-width:320px;">${window.escHtml(t(errKey))}</span>
                        ${cap ? `<span class="text-slate-400" data-i18n-dyn>${window.escHtml(cap)}</span>` : ''}
                        <button type="button" class="btn-primary rounded-lg px-4 text-xs font-semibold mt-1" data-action="retry" data-index="${index - 1}" style="min-height:44px;"><i class="fas fa-rotate mr-1"></i><span data-i18n="st.regen"></span></button>
                        ${errKey !== 'err.gen-blocked' ? `<button type="button" class="text-xs text-slate-300 underline" data-open-guide style="min-height:36px;"><i class="fas fa-circle-question mr-1"></i><span data-i18n="btn.see-guide"></span></button>` : ''}
                    </div>`;
                let lastRun = null;   // { picks, sel, vehicle, refList, refB64 }
                async function genOne(index) {
                    const { picks, sel, vehicle, refList, refB64 } = lastRun;
                    const pk = picks[index - 1];
                    const promptText = cfg.promptFn(sel, vehicle, pk, refList);
                    const b64 = await genImageWithRefs(promptText, refB64);
                    results[index - 1] = { b64, prompt: promptText, pick: pk, caption: pk.caption || '', before: vehicle.photos[0], photos: vehicle.photos.slice(), kind: kindOf(vehicle), filename: `${p}-${index}.png` };
                    const card = document.getElementById(`${p}-card-${index}`);
                    if (card) { card.innerHTML = cardInner(index, results[index - 1]); if (window._i18nApplyNow) window._i18nApplyNow(); }
                }
                // Jalankan indeks (0-based) dengan pool 3 request; retry maks 3x hanya untuk error jaringan/server/limit
                async function runPicks(indices) {
                    const POOL = 3, failed = {};
                    let attempt = 0, pending = indices.slice();
                    while (pending.length && attempt < 3) {
                        attempt++;
                        if (attempt > 1) await new Promise(r => setTimeout(r, 2500 * (attempt - 1)));
                        const queue = pending.slice(), next = [];
                        await Promise.all(Array.from({ length: Math.min(POOL, queue.length) }, async () => {
                            while (queue.length) {
                                const i = queue.shift();
                                try { await genOne(i + 1); delete failed[i]; }
                                catch (err) { failed[i] = err; window.logDebug(p + '-gen', err); if (window.AMS_RETRYABLE(err.code)) next.push(i); }
                            }
                        }));
                        pending = next;
                    }
                    const failedIdx = Object.keys(failed).map(Number);
                    failedIdx.forEach(i => {
                        const card = document.getElementById(`${p}-card-${i + 1}`);
                        if (card) card.innerHTML = errorCard(i + 1, lastRun.picks[i].caption, window.genErrorKey(failed[i]));
                    });
                    dlAll.classList.toggle('hidden', results.filter(Boolean).length === 0);
                    if (window._i18nApplyNow) window._i18nApplyNow();
                    if (failedIdx.length === indices.length) await window.uiNotifyGenError(window.genErrorKey(failed[failedIdx[0]]));
                    else if (failedIdx.length) await window.uiNotify(t('err.gen-partial').replace('{n}', failedIdx.length).replace('{m}', indices.length));
                }

                genBtn.addEventListener('click', async () => {
                    if (busy) return;
                    busy = true;
                    genBtn.disabled = true;
                    try {
                        const vehicle = await picker.getVehicle();
                        if (!vehicle) { await window.uiNotify(t('err.no-vehicle')); return; }
                        const sel = readSel();
                        const errKey = cfg.validate ? cfg.validate(sel, cfg.refs ? refs.length : 0) : null;
                        if (errKey) { await window.uiNotify(t(errKey)); return; }
                        const picks = cfg.makePicks(sel, vehicle);
                        if (!picks.length) { await window.uiNotify(t(cfg.emptyPickKey || 'err.gen-failed')); return; }
                        results = [];
                        emptyState.classList.add('hidden');
                        dlAll.classList.add('hidden');
                        grid.innerHTML = picks.map((pk, i) => spinnerCard(i + 1, pk.caption)).join('');
                        if (window._i18nApplyNow) window._i18nApplyNow();
                        const refList = cfg.refs ? refs.map(r => ({ type: r.type, b64: r.b64 })) : [];
                        lastRun = { picks, sel, vehicle, refList, refB64: [...vehicle.photos, ...refList.map(r => r.b64)] };
                        await runPicks(picks.map((_, i) => i));
                    } finally {
                        busy = false;
                        genBtn.disabled = false;
                    }
                });

                grid.addEventListener('click', async (e) => {
                    const btn = e.target.closest('button[data-action]');
                    if (!btn) return;
                    const action = btn.dataset.action;
                    const idx = Number(btn.dataset.index);
                    if (action === 'retry') {
                        if (busy || !lastRun || !lastRun.picks[idx]) return;
                        busy = true; genBtn.disabled = true;
                        const card = document.getElementById(`${p}-card-${idx + 1}`);
                        if (card) { card.innerHTML = spinnerCard(idx + 1, lastRun.picks[idx].caption).replace(/^<div[^>]*>|<\/div>$/g, ''); if (window._i18nApplyNow) window._i18nApplyNow(); }
                        try { await runPicks([idx]); } finally { busy = false; genBtn.disabled = false; }
                        return;
                    }
                    const r = results[idx];
                    if (!r) return;
                    if (action === 'preview') window.showImagePreview('data:image/png;base64,' + r.b64);
                    if (action === 'compare') window.showCompare('data:image/jpeg;base64,' + r.before, 'data:image/png;base64,' + r.b64);
                    if (action === 'download') await window.downloadImage('data:image/png;base64,' + r.b64, r.filename);
                    if (action === 'video') window.showVideoPromptModal({ b64: r.b64, kind: r.kind, card: btn.closest('.result-card') });
                    if (action === 'save') await window.saveResult({ b64: r.b64, before: r.before, kind: r.kind, caption: r.caption, tab: p, prompt: r.prompt });
                    if (action === 'use') window.showContinueModal(r.b64, r.kind);
                    if (action === 'regen') {
                        if (busy) return;
                        busy = true; genBtn.disabled = true;
                        const card = document.getElementById(`${p}-card-${idx + 1}`);
                        card.innerHTML = spinnerCard(idx + 1, r.caption).replace(/^<div[^>]*>|<\/div>$/g, '');
                        if (window._i18nApplyNow) window._i18nApplyNow();
                        try {
                            // Pakai foto kendaraan yang dipakai saat prompt dibuat (penomoran IMAGE n tetap cocok)
                            const photos = (r.photos && r.photos.length) ? r.photos : [r.before];
                            const refList = cfg.refs ? refs.map(x => ({ type: x.type, b64: x.b64 })) : [];
                            const b64 = await genImageWithRefs(r.prompt, [...photos, ...refList.map(x => x.b64)]);
                            results[idx] = Object.assign({}, r, { b64 });
                            card.innerHTML = cardInner(idx + 1, results[idx]);
                        } catch (err) {
                            window.logDebug(p + '-regen', err);
                            card.innerHTML = cardInner(idx + 1, r);
                            await window.uiNotifyGenError(window.genErrorKey(err));
                        } finally {
                            if (window._i18nApplyNow) window._i18nApplyNow();
                            busy = false; genBtn.disabled = false;
                        }
                    }
                });

                dlAll.addEventListener('click', async () => {
                    const list = results.filter(Boolean);
                    for (let i = 0; i < list.length; i++) {
                        await window.downloadImage('data:image/png;base64,' + list[i].b64, list[i].filename);
                        await new Promise(res => setTimeout(res, 600));
                    }
                });

                if (window._i18nApplyNow) window._i18nApplyNow();
                return host;
            }
            window.createStudioTab = createStudioTab;

            window.showImagePreview = function (src) {
                const m = document.createElement('div');
                m.className = 'image-preview-modal';
                m.innerHTML = `<img src="${src}" style="max-height:85vh;max-width:92vw;border-radius:0.75rem;" alt="">`;
                m.addEventListener('click', () => { m.classList.remove('show'); setTimeout(() => m.remove(), 200); });
                document.body.appendChild(m);
                setTimeout(() => m.classList.add('show'), 10);
            };
            // Slider before/after (drag mouse / sentuh)
            window.showCompare = function (beforeSrc, afterSrc) {
                const m = document.createElement('div');
                m.className = 'image-preview-modal';
                m.innerHTML = `<div class="flex flex-col items-center gap-2" style="max-width:92vw;" onclick="event.stopPropagation()">
                    <div class="cmp-wrap">
                        <img src="${beforeSrc}" alt="">
                        <div class="cmp-after"><img src="${afterSrc}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;"></div>
                        <div class="cmp-line"></div>
                        <div class="cmp-knob"><i class="fas fa-left-right"></i></div>
                        <span class="cmp-tag" style="left:.5rem;">${window.escHtml(t('cmp.before'))}</span>
                        <span class="cmp-tag" style="right:.5rem;">${window.escHtml(t('cmp.after'))}</span>
                    </div>
                    <p class="text-xs text-slate-300">${window.escHtml(t('cmp.hint'))}</p>
                    <button type="button" class="btn-secondary rounded-lg px-5 py-2 text-sm font-semibold" data-close>${window.escHtml(t('btn.close'))}</button>
                </div>`;
                const wrap = m.querySelector('.cmp-wrap');
                const after = m.querySelector('.cmp-after');
                const line = m.querySelector('.cmp-line');
                const knob = m.querySelector('.cmp-knob');
                function setPos(clientX) {
                    const rect = wrap.getBoundingClientRect();
                    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
                    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
                    line.style.left = pct + '%';
                    knob.style.left = pct + '%';
                }
                let dragging = false;
                wrap.addEventListener('pointerdown', (e) => { dragging = true; setPos(e.clientX); });
                window.addEventListener('pointermove', (e) => { if (dragging) setPos(e.clientX); });
                window.addEventListener('pointerup', () => { dragging = false; });
                const close = () => { m.classList.remove('show'); setTimeout(() => m.remove(), 200); };
                m.addEventListener('click', close);
                m.querySelector('[data-close]').addEventListener('click', close);
                document.body.appendChild(m);
                setTimeout(() => m.classList.add('show'), 10);
            };

            window.showContinueModal = function (b64, kind) {
                const targets = [['angle', 'nav.angle', 'cube'], ['warna', 'nav.warna', 'fill-drip'], ['suasana', 'nav.suasana', 'camera'], ['modif', 'nav.modif', 'screwdriver-wrench']];
                window.showUniversalModal(t('ct.title'), `<p class="text-xs text-gray-500 mb-3">${window.escHtml(t('ct.hint'))}</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${targets.map(([tab, key, icon]) => `<button type="button" class="option-btn" data-continue="${tab}" data-no-i18n><i class="fas fa-${icon} mr-1"></i><span data-i18n="${key}"></span></button>`).join('')}</div>`);
                document.getElementById('modal-body').querySelectorAll('[data-continue]').forEach(b => b.addEventListener('click', async () => {
                    const tab = b.dataset.continue;
                    window.closeUniversalModal();
                    try {
                        const c = await window.compressImage(window.b64ToBlob(b64, 'image/png'), 1280, 0.88);
                        const host = window.studioHosts && window.studioHosts[tab];
                        if (host) host.setVehicleUpload(c.b64, kind);
                        window.switchTab(tab);
                    } catch (e) { window.logDebug('continue', e); await window.uiNotify(t('err.img-read')); }
                }));
            };

            // ==================== INSTANSIASI TAB STUDIO ====================
            window.DYN_LABELS.en = Object.assign({}, window.CHIP_LABELS.en || {}, window.DYN_LABELS.en);
            const LABEL_OF = {};
            [].concat(SCENES, LIGHTS, TIMES, STYLES.car, STYLES.motorcycle, PARTS.car, PARTS.motorcycle, FINISHES, COLORS, AREAS, ANGLES.car, ANGLES.motorcycle)
                .forEach(x => { LABEL_OF[x.val] = x.label; });
            const VAR_CAPTIONS = ['Seimbang', 'Lebih agresif', 'Subtle OEM+', 'Level kontes', 'Ramah harian', 'Elegan premium'];
            Object.assign(window.DYN_LABELS.en, { 'Seimbang': 'Balanced', 'Lebih agresif': 'More aggressive', 'Subtle OEM+': 'Subtle OEM+', 'Level kontes': 'Show level', 'Ramah harian': 'Daily friendly', 'Elegan premium': 'Premium elegant' });
            // Angle hasil: '__random' = sel.count angle acak tanpa ulang (shuffle-bag); selain itu angle terpilih (maks 10)
            function anglePicks(sel, vehicle) {
                const chosen = sel.outAngle || [];
                if (!chosen.length) return null;
                const kind = vehicle && vehicle.type === 'motorcycle' ? 'motorcycle' : 'car';
                if (chosen.includes('__random')) {
                    let pool = [];
                    while (pool.length < sel.count) pool = pool.concat(shuffled(ANGLES[kind].map(a => a.val)));
                    return pool.slice(0, sel.count);
                }
                return chosen.slice(0, 10);
            }
            function shuffled(arr) {
                const a = arr.slice();
                for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
                return a;
            }
            window.quickPicks = function (sel, vehicle) {
                const kind = vehicle && vehicle.type === 'motorcycle' ? 'motorcycle' : 'car';
                if (!sel.outAngle || sel.outAngle === '__random') {
                    return shuffled(ANGLES[kind].map(a => a.val)).slice(0, 10).map(a => ({ angle: a, caption: LABEL_OF[a] || '' }));
                }
                return VAR_HINTS.slice(0, 5).map((h, i) => ({ angle: sel.outAngle, variant: h, caption: VAR_CAPTIONS[i] }));
            };

            const cepatHost = createStudioTab({
                tab: 'cepat', prefix: 'qk', icon: 'bolt', refs: true, sceneMode: false,
                pickerOpts: { uploadOnly: true },
                layout: ['extra', 'refs', 'steps'],
                extraKey: 'qk.prompt', extraPhKey: 'qk.prompt-ph', hidePlate: true,
                steps: [
                    { key: 'outAngle', titleKey: 'qk.step-angle', hintKey: 'qk.angle-hint', type: 'typed', byType: ANGLES, multi: false, random: true, cols: 'grid-cols-2' }
                ],
                generateKey: (sel) => (!sel.outAngle || sel.outAngle === '__random') ? 'qk.generate-random' : 'qk.generate-single',
                makePicks: (sel, vehicle) => window.quickPicks(sel, vehicle),
                validate: (sel, refCount) => (!sel.extra && !refCount) ? 'err.quick-empty' : null,
                promptFn: window.buildQuickPrompt
            });
            const modifHost = createStudioTab({
                tab: 'modif', prefix: 'md', icon: 'screwdriver-wrench', refs: true, sceneMode: true, countMode: 'count',
                steps: [
                    { key: 'style', titleKey: 'md.step-style', hintKey: 'md.style-hint', type: 'typed', byType: STYLES, cols: 'grid-cols-2' },
                    { key: 'parts', titleKey: 'md.step-parts', hintKey: 'md.parts-hint', type: 'typed', byType: PARTS, multi: true, cols: 'grid-cols-2' },
                    { key: 'outAngle', titleKey: 'md.step-angle', hintKey: 'md.angle-hint', type: 'typed', byType: ANGLES, multi: true, cols: 'grid-cols-2', selectAll: true, random: true }
                ],
                makePicks: (sel, vehicle) => {
                    const angles = anglePicks(sel, vehicle);
                    if (angles) return angles.map(a => ({ angle: a, caption: LABEL_OF[a] || '' }));
                    return Array.from({ length: sel.count }, (_, i) => ({
                        variant: sel.count > 1 ? VAR_HINTS[i % VAR_HINTS.length] : '',
                        caption: sel.count > 1 ? VAR_CAPTIONS[i % VAR_CAPTIONS.length] : ''
                    }));
                },
                validate: (sel, refCount) => (!sel.style && !(sel.parts || []).length && !refCount && !sel.extra) ? 'err.no-part' : null,
                promptFn: window.buildModifPrompt
            });

            const warnaHost = createStudioTab({
                tab: 'warna', prefix: 'wr', icon: 'fill-drip', refs: true, sceneMode: true, countMode: 'count',
                steps: [
                    { key: 'finish', titleKey: 'wr.step-finish', type: 'chips', options: FINISHES, cols: 'grid-cols-3' },
                    { key: 'color', titleKey: 'wr.step-color', type: 'chips', options: COLORS, cols: 'grid-cols-3', customInput: { phKey: 'wr.custom-ph' } },
                    { key: 'area', titleKey: 'wr.step-area', type: 'chips', options: AREAS, cols: 'grid-cols-2' },
                    { key: 'outAngle', titleKey: 'md.step-angle', hintKey: 'md.angle-hint', type: 'typed', byType: ANGLES, multi: true, cols: 'grid-cols-2', selectAll: true, random: true }
                ],
                makePicks: (sel, vehicle) => {
                    const colorCap = sel.colorCustom || LABEL_OF[sel.color] || '';
                    const angles = anglePicks(sel, vehicle);
                    if (angles) return angles.map(a => ({ angle: a, caption: LABEL_OF[a] || '' }));
                    return Array.from({ length: sel.count }, () => ({ caption: colorCap }));
                },
                promptFn: window.buildColorPrompt
            });

            const suasanaHost = createStudioTab({
                tab: 'suasana', prefix: 'su', icon: 'camera', refs: false, sceneMode: false, countMode: 'count',
                steps: [
                    { key: 'scene', titleKey: 'su.step-scene', type: 'chips', options: SCENES, random: true, cols: 'grid-cols-2' },
                    { key: 'light', titleKey: 'su.step-light', type: 'chips', options: LIGHTS, cols: 'grid-cols-2' },
                    { key: 'time', titleKey: 'su.step-time', type: 'chips', options: TIMES, cols: 'grid-cols-4' }
                ],
                makePicks: (sel) => {
                    if (sel.scene === '__random') {
                        let pool = [];
                        while (pool.length < sel.count) pool = pool.concat(shuffled(SCENES.map(s => s.val)));
                        return pool.slice(0, sel.count).map(v => ({ scene: v, caption: LABEL_OF[v] || '' }));
                    }
                    return Array.from({ length: sel.count }, () => ({ scene: sel.scene, caption: LABEL_OF[sel.scene] || '' }));
                },
                promptFn: window.buildScenePrompt
            });

            const angleHost = createStudioTab({
                tab: 'angle', prefix: 'an', icon: 'cube', refs: false, sceneMode: true, countMode: 'angles',
                steps: [
                    { key: 'angles', titleKey: 'an.step-angles', hintKey: 'an.angles-hint', type: 'typed', byType: ANGLES, multi: true, cols: 'grid-cols-2', selectAll: true }
                ],
                validate: (sel) => (!sel.angles || !sel.angles.length) ? 'err.no-angle' : null,
                makePicks: (sel) => (sel.angles || []).slice(0, 10).map(a => ({ angle: a, caption: LABEL_OF[a] || '' })),
                promptFn: window.buildAnglePrompt
            });
            window.studioHosts = { cepat: cepatHost, modif: modifHost, warna: warnaHost, suasana: suasanaHost, angle: angleHost };

            // === TAB: KONSULTAN MODIF (teks - model vision) ===
            (function () {
                const pickerHost = document.getElementById('ks-vehicle-host');
                const picker = window.mountVehiclePicker(pickerHost, 'ks');
                const goalGroup = document.getElementById('ks-goal');
                const budgetGroup = document.getElementById('ks-budget');
                const notesEl = document.getElementById('ks-notes');
                const genBtn = document.getElementById('ks-generate');
                const emptyEl = document.getElementById('ks-empty');
                const loadingEl = document.getElementById('ks-loading');
                const resultsEl = document.getElementById('ks-results');
                let concepts = [];
                let lastVehicle = null;
                let busy = false;

                [goalGroup, budgetGroup].forEach(g => g.addEventListener('click', (e) => {
                    const b = e.target.closest('.option-btn'); if (!b) return;
                    g.querySelectorAll('.option-btn').forEach(x => x.classList.remove('selected'));
                    b.classList.add('selected');
                }));
                const selVal = (g) => (g.querySelector('.option-btn.selected') || {}).dataset?.val || '';

                function buildConsultPrompt(v, goal, budget, notes) {
                    const kind = kindOf(v);
                    const styles = STYLES[kind].map(s => s.label);
                    const parts = PARTS[kind].map(s => s.label);
                    const lang = window.getLang() === 'id' ? 'Indonesian (bahasa Indonesia, casual but professional)' : 'English';
                    return `You are a professional vehicle modification consultant in Indonesia. The attached photo(s) show the owner's ${kind}${v.name ? ` (${v.name})` : ''}${v.notes ? `, notes: ${v.notes}` : ''}. ` +
                        `Goal: ${goal}. Budget: ${budget}. ${notes ? `Owner's wishes: ${notes}. ` : ''}` +
                        `First identify the vehicle (make/model/generation if recognizable) and its current condition. Then propose exactly 5 distinct modification concepts that suit THIS vehicle, goal and budget. ` +
                        `Return ONLY valid JSON (no markdown, no code fence) with this shape: ` +
                        `{"vehicle":"<short identification>","concepts":[{"name":"<catchy concept name>","style":"<EXACTLY one of: ${styles.join(' | ')}>","summary":"<2 sentences in ${lang}>","parts":["<EXACTLY from this list only: ${parts.join(' | ')}>"],"detail":"<one paragraph in English, max 60 words, describing the specific wheels (size/design/finish), ride height, colors and key parts for rendering - no brand names>","estimate":"<rough total cost range in IDR, e.g. Rp 8-15 juta>"}]}. ` +
                        `Write "name", "summary" and "estimate" in ${lang}. Use 3-6 parts per concept. Make the 5 concepts clearly different from each other.`;
                }
                function parseJson(txt) {
                    const cleaned = txt.replace(/```json|```/g, '').trim();
                    const start = cleaned.indexOf('{'); const end = cleaned.lastIndexOf('}');
                    return JSON.parse(cleaned.slice(start, end + 1));
                }
                function renderConcepts(data) {
                    const list = Array.isArray(data.concepts) ? data.concepts.slice(0, 5) : [];
                    concepts = list;
                    resultsEl.innerHTML = (data.vehicle ? `<p class="text-xs text-gray-500 mb-1"><i class="fas fa-car-side mr-1 text-orange-500"></i>${window.escHtml(data.vehicle)}</p>` : '') +
                        list.map((c, i) => `<div class="concept-card">
                            <div class="flex items-start justify-between gap-2 mb-1">
                                <h4>${i + 1}. ${window.escHtml(c.name || '')}</h4>
                                <span class="badge-type whitespace-nowrap">${window.escHtml(c.style || '')}</span>
                            </div>
                            <p class="text-sm text-gray-600 mb-2">${window.escHtml(c.summary || '')}</p>
                            <p class="text-xs font-semibold text-gray-500 mb-1" data-i18n="ks.parts"></p>
                            <ul class="mb-2">${(c.parts || []).map(x => `<li>${window.escHtml(x)}</li>`).join('')}</ul>
                            <p class="text-xs text-gray-500 mb-3"><span class="font-semibold" data-i18n="ks.est"></span>: ${window.escHtml(c.estimate || '-')}</p>
                            <button class="btn-primary w-full rounded-lg py-2.5 text-sm font-semibold" data-render="${i}"><i class="fas fa-wand-magic-sparkles mr-1"></i><span data-i18n="ks.render"></span></button>
                        </div>`).join('');
                    resultsEl.classList.remove('hidden');
                    if (window._i18nApplyNow) window._i18nApplyNow();
                }

                genBtn.addEventListener('click', async () => {
                    if (busy) return;
                    const v = await picker.getVehicle();
                    if (!v) { await window.uiNotify(t('err.no-vehicle')); return; }
                    busy = true; genBtn.disabled = true;
                    emptyEl.classList.add('hidden'); resultsEl.classList.add('hidden'); loadingEl.classList.remove('hidden');
                    try {
                        const txt = await genText(buildConsultPrompt(v, selVal(goalGroup), selVal(budgetGroup), notesEl.value.trim()), v.photos.slice(0, 2));
                        const data = parseJson(txt);
                        lastVehicle = v;
                        renderConcepts(data);
                    } catch (e) {
                        window.logDebug('ks', e);
                        emptyEl.classList.remove('hidden');
                        await window.uiNotifyGenError(e && e.code && e.code !== 'EMPTY' ? window.genErrorKey(e) : 'err.ks-failed');
                    } finally {
                        loadingEl.classList.add('hidden');
                        busy = false; genBtn.disabled = false;
                    }
                });

                resultsEl.addEventListener('click', async (e) => {
                    const btn = e.target.closest('[data-render]'); if (!btn) return;
                    const c = concepts[Number(btn.dataset.render)]; if (!c) return;
                    if (lastVehicle && lastVehicle.source === 'upload') modifHost.setVehicleUpload(lastVehicle.photos[0], lastVehicle.type);
                    // tunggu picker modif sinkron tipe kendaraan dulu, baru pilih chip
                    await new Promise(res => setTimeout(res, 50));
                    modifHost.selectByLabel('style', [c.style || '']);
                    modifHost.selectByLabel('parts', c.parts || []);
                    modifHost.setExtra(String(c.detail || '').slice(0, 400));
                    window.switchTab('modif');
                    await window.uiNotify(t('ks.sent'));
                });
            })();
            // === END TAB: KONSULTAN ===

            // === TAB: HASIL TERSIMPAN (IndexedDB perangkat, maks RS_MAX_RESULTS) ===
            (function () {
                const grid = document.getElementById('rs-grid');
                const emptyEl = document.getElementById('rs-empty');
                const countEl = document.getElementById('rs-count');
                let items = [];
                async function render() {
                    items = await window.resultDB.list();
                    countEl.textContent = `${items.length}/${RS_MAX_RESULTS}`;
                    emptyEl.classList.toggle('hidden', items.length > 0);
                    grid.innerHTML = items.map((r, i) => `<div class="result-card">
                        <span class="image-counter">#${i + 1}</span>
                        <img src="data:image/png;base64,${r.b64}" alt="#${i + 1}">
                        <p class="cap pt-2"><span data-i18n="nav.${window.escHtml(r.tab || 'modif')}"></span>${r.caption ? ` &middot; <span data-i18n-dyn>${window.escHtml(r.caption)}</span>` : ''} &middot; ${new Date(r.createdAt || 0).toLocaleDateString(window.getLang() === 'id' ? 'id-ID' : 'en-US')}</p>
                        <div class="result-card-actions">
                            <button class="icon-btn" style="background:#3b82f6;" data-action="preview" data-id="${r.id}" data-i18n-title="st.preview"><i class="fas fa-eye"></i></button>
                            <button class="icon-btn" style="background:#f59e0b;" data-action="compare" data-id="${r.id}" data-i18n-title="st.compare"><i class="fas fa-left-right"></i></button>
                            <button class="icon-btn" style="background:#0891b2;" data-action="download" data-id="${r.id}" data-i18n-title="st.download"><i class="fas fa-download"></i></button>
                            <button class="icon-btn" style="background:#d946ef;" data-action="video" data-id="${r.id}" data-i18n-title="st.video"><i class="fas fa-video"></i></button>
                            <button class="icon-btn" style="background:#0f766e;" data-action="use" data-id="${r.id}" data-i18n-title="st.use"><i class="fas fa-car-side"></i></button>
                            <button class="icon-btn" style="background:#dc2626;" data-action="delete" data-id="${r.id}" data-i18n-title="btn.delete"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>`).join('');
                    if (window._i18nApplyNow) window._i18nApplyNow();
                }
                grid.addEventListener('click', async (e) => {
                    const btn = e.target.closest('button[data-action]'); if (!btn) return;
                    const action = btn.dataset.action;
                    const r = items.find(x => x.id === btn.dataset.id); if (!r) return;
                    if (action === 'preview') window.showImagePreview('data:image/png;base64,' + r.b64);
                    if (action === 'compare') window.showCompare('data:image/jpeg;base64,' + r.before, 'data:image/png;base64,' + r.b64);
                    if (action === 'download') await window.downloadImage('data:image/png;base64,' + r.b64, `tersimpan-${r.id}.png`);
                    if (action === 'video') window.showVideoPromptModal({ b64: r.b64, kind: r.kind, card: btn.closest('.result-card') });
                    if (action === 'use') window.showContinueModal(r.b64, r.kind);
                    if (action === 'delete') {
                        if (!(await window.uiConfirm(t('rs.del-confirm')))) return;
                        await window.resultDB.remove(r.id);
                        document.dispatchEvent(new CustomEvent('ams-results-changed'));
                    }
                });
                document.addEventListener('ams-results-changed', render);
                document.addEventListener('app-lang-changed', render);
                render();
            })();
            // === END TAB: HASIL TERSIMPAN ===

            // ==================== PROMPT VIDEO (image-to-video) ====================
            const VIDEO_MOTIONS = [
                { val: 'slow 360-degree orbit around the vehicle', label: 'Orbit 360' },
                { val: 'rolling tracking shot alongside the moving vehicle, wheels spinning, background motion blur', label: 'Rolling / Tracking' },
                { val: 'slow dolly-in toward the front of the vehicle', label: 'Dolly In' },
                { val: 'low fast fly-by drone shot skimming the ground past the vehicle', label: 'Low Fly-by' },
                { val: 'starts on a close-up detail (wheel / headlight) then pulls back to reveal the whole vehicle', label: 'Reveal dari Detail' },
                { val: 'static cinematic shot with subtle light flicker and reflections moving on the body', label: 'Statis Sinematik' }
            ];
            window.showVideoPromptModal = function ({ b64, kind, card }) {
                const chips = VIDEO_MOTIONS.map((m, i) => `<button type="button" class="option-btn${i === 0 ? ' selected' : ''}" data-val="${window.escHtml(m.val)}" style="font-size:.75rem;">${m.label}</button>`).join('');
                window.showUniversalModal(t('vp.title'), `
                    <p class="text-xs text-gray-500 mb-2" data-i18n="vp.hint"></p>
                    <p class="text-xs font-semibold text-gray-500 mb-1" data-i18n="vp.motion"></p>
                    <div id="vp-motions" class="grid grid-cols-2 gap-1.5 mb-3">${chips}</div>
                    <button id="vp-gen" class="btn-primary w-full rounded-lg py-2.5 text-sm font-semibold mb-3"><i class="fas fa-video mr-1"></i><span data-i18n="vp.generate"></span></button>
                    <p id="vp-loading" class="hidden text-xs text-orange-500 mb-2"><i class="fas fa-circle-notch fa-spin mr-1"></i><span data-i18n="vp.loading"></span></p>
                    <textarea id="vp-out" rows="7" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs hidden" readonly></textarea>
                    <button id="vp-copy" class="btn-secondary w-full rounded-lg py-2.5 text-sm font-semibold mt-2 hidden"><i class="fas fa-copy mr-1"></i><span data-i18n="btn.copy"></span></button>`);
                const motions = document.getElementById('vp-motions');
                const out = document.getElementById('vp-out');
                const copyBtn = document.getElementById('vp-copy');
                const loading = document.getElementById('vp-loading');
                const genB = document.getElementById('vp-gen');
                let motion = VIDEO_MOTIONS[0].val;
                motions.addEventListener('click', (e) => {
                    const b = e.target.closest('.option-btn'); if (!b) return;
                    motions.querySelectorAll('.option-btn').forEach(x => x.classList.remove('selected'));
                    b.classList.add('selected'); motion = b.dataset.val;
                    const cached = card && card.dataset['vp' + VIDEO_MOTIONS.findIndex(m => m.val === motion)];
                    if (cached) { out.value = cached; out.classList.remove('hidden'); copyBtn.classList.remove('hidden'); }
                });
                genB.addEventListener('click', async () => {
                    genB.disabled = true; loading.classList.remove('hidden');
                    try {
                        const prompt = `Look at the attached photo of a ${kind}. Write ONE image-to-video prompt in English for tools like Veo / Kling / Runway (5-8 second clip). ` +
                            `Structure: (1) describe the ${kind} exactly as seen - color, finish, wheels, stance, modifications, environment and lighting, so the video keeps it identical; (2) camera motion: ${motion}; (3) mood and lighting continuity; (4) end with: "keep the vehicle exactly as in the image, no deformation, no text, no watermark". ` +
                            `Output only the prompt text, 60-110 words, no headings, no quotes.`;
                        const txt = await genText(prompt, [b64]);
                        out.value = txt; out.classList.remove('hidden'); copyBtn.classList.remove('hidden');
                        if (card) card.dataset['vp' + VIDEO_MOTIONS.findIndex(m => m.val === motion)] = txt;
                    } catch (e) {
                        window.logDebug('vp', e);
                        await window.uiNotify(t('err.vp-failed'));
                    }
                    loading.classList.add('hidden'); genB.disabled = false;
                });
                copyBtn.addEventListener('click', async () => {
                    try { await navigator.clipboard.writeText(out.value); } catch (e) { out.select(); document.execCommand('copy'); }
                    copyBtn.querySelector('span').textContent = t('btn.copied');
                    setTimeout(() => { copyBtn.querySelector('span').textContent = t('btn.copy'); }, 1500);
                });
                if (window._i18nApplyNow) window._i18nApplyNow();
            };

            // ==================== PANDUAN SINGKAT ====================
            const TUTOR_LOGIN_IMG = 'data:image/jpeg;base64,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AQQQQQQQQQVTGvjxakjy6QgQQQQQQQQQQQQRRYwxiNENzTXkwgQQQQQQQQQQRmkQeoWQggYAQYQQgQQQQQQQQoYShowAUg0QZAKjTRwQQQQQQQQR2EIQQQQRTwQQR208RgQQQQQQQQQQQQQQQQQQQQQQUUkwggQTTTTTTTTTSSQQQQQQQQQQQQQQgZccNPPMMNTzwnucTwleZil/ViQgWc9//wD/ALzysc5zG4le7N4H/gfICBaxxxxxxxz3OKxFe6FdyH4gfioCBYxxx22xxx1MO6zNcwHbwN6G9nCBZzyy2yyyyzPNcw3P6wN7iN4mDCB7wwwwwwwwznPP4wlNyGN42exrCBRwwwwwwwww1NPSyuN94ufxEeCCBT3xxxxxxxymCCG89hBxiO/7OCCBaH888888888888888888888WoCBwU88888888vp7j088888888wwCByU88888888DJpxc88888888bJCBzU88888888VR1tU88888888WpCBxU88888888foyTU88888888NDCByU888888888csc888888888mqCBwU888881DOJuhYh21088888NiCBwU888888889fcuf/s888888rCCBzU884OZ6yPScvuXW+quU888rCCB9U8888888s888s888888888DCCB8U888888888888888888848rCCB8Uo4048w0w0888888888848DCCB8Uo48rz6Mk8c888888888o8DCCB8Us888888888888888884c8DCCB8UvU3lG2kL5rI6pLZsOV3H8DCCB8U6lnmknCYN4TTba4tmkl08LCCB8UpnmkliYZL5IYacTGklji8jCCB8cvOe+PN9NN/vf/8A3ffTHLPCwggaJscccccccccccccccccccbgAggaAAAAAAAAAAAAAAAAAAAAAAAAgv//EACgRAAIBAgQGAwADAAAAAAAAAAABETFhECEwkSBAQVGh0XGB8FCxwf/aAAgBAwEBPxDk1zOiw0PPpQ21YhRIxRAmlpG7Npg27I7XE51FMnsdMgfTbE6pKsGJSQ+SDU4ReLwkdR+VQWXMJwZqV1dDWWgqGY1yn8DklIECjKZkIVMhmYp6lL5DOKIr+bG0meSFNZ+CaFEi1tVkgKpVxBTZiEhatFYcqg6dLEcsOZJA1lpOwCHJiR6kQGSdHrNQ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';
            window.showTutorial = function () {
                const e = window.escHtml;
                const sec = (n, title, body) => `<div class="mb-4"><div class="flex items-center gap-2 mb-1.5"><span class="step-num">${n}</span><h4 class="font-semibold text-gray-800 text-sm">${e(title)}</h4></div><div class="text-sm text-gray-600 pl-1">${body}</div></div>`;
                const steps = (keys) => `<ol class="list-decimal pl-5 space-y-1 text-xs text-gray-600">${keys.map(k => `<li>${e(t(k))}</li>`).join('')}</ol>`;
                const loginImg = `<img src="${TUTOR_LOGIN_IMG}" alt="${e(t('tut.img-alt'))}" class="w-full max-w-[280px] mx-auto block rounded-lg border border-gray-200 mt-2">`;
                const body =
                    sec(1, t('tut.s1-title'), `<p>${e(t('tut.s1-body'))}</p><p class="mt-2 text-xs font-semibold text-green-700 bg-green-50 rounded-lg px-3 py-2"><i class="fas fa-infinity mr-1"></i>${e(t('tut.free'))}</p>`) +
                    sec(2, t('tut.s2-title'), `<p>${e(t('tut.s2-body'))}</p>${loginImg}<p class="mt-2 text-xs text-gray-500"><i class="fas fa-circle-info mr-1"></i>${e(t('tut.s2-inapp'))}</p>`) +
                    sec(3, t('tut.s3-title'), `<p class="mb-2">${e(t('tut.s3-body'))}</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div class="rounded-lg border border-gray-200 p-3"><p class="text-xs font-semibold text-gray-800 mb-1.5"><i class="fab fa-android text-green-600 mr-1"></i>${e(t('tut.android'))}</p>${steps(['tut.and-1', 'tut.and-2', 'tut.and-3', 'tut.and-4'])}</div>
                        <div class="rounded-lg border border-gray-200 p-3"><p class="text-xs font-semibold text-gray-800 mb-1.5"><i class="fab fa-apple text-gray-800 mr-1"></i>${e(t('tut.ios'))}</p>${steps(['tut.ios-1', 'tut.ios-2', 'tut.ios-3', 'tut.ios-4'])}</div>
                    </div>`) +
                    `<div class="rounded-lg bg-gray-50 p-3 flex items-center gap-3 mb-4"><div class="flex-1 min-w-0"><p class="text-sm font-semibold text-gray-800">${e(t('tut.s4-title'))}</p><p class="text-xs text-gray-500">${e(t('tut.s4-body'))}</p></div><a href="#" data-wa-admin target="_blank" rel="noopener" class="flex-shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-medium px-3 min-h-[40px]"><i class="fab fa-whatsapp text-sm"></i>${e(t('nav.wa'))}</a></div>` +
                    `<button type="button" data-tut-ok class="btn-primary w-full rounded-lg py-3 font-semibold text-sm">${e(t('tut.ok'))}</button>`;
                window.showUniversalModal(t('tut.title'), body);
                document.getElementById('modal-body').querySelector('[data-tut-ok]').addEventListener('click', window.closeUniversalModal);
            };
            ['help-btn-nav', 'help-btn-header'].forEach(id => {
                const b = document.getElementById(id);
                if (b) b.addEventListener('click', () => { closeSidebar(); window.showTutorial(); });
            });

            // ==================== VERSI + WHAT'S NEW + DEBUG PANEL ====================
            window.APP_VERSION = '1.3.6';
            window.CHANGELOG = [
                { version: '1.3.6', date: '17 Okt 2026', changes: [
                    { id: 'Generate gagal? Pesan error dan kartu yang gagal kini punya tombol "Lihat panduan" (cara login akun Google, pasang aplikasi, chat admin)',
                      en: 'Generation failed? Error messages and failed cards now have a "See guide" button (Google sign-in, installing the app, chat with admin)' },
                    { id: 'Pesan "permintaan ditolak Google" kini langsung menyebut penyebab paling umum: belum login akun Google',
                      en: 'The "request rejected by Google" message now names the most common cause: not signed in to a Google account' }
                ] },
                { version: '1.3.5', date: '17 Okt 2026', changes: [
                    { id: 'Semua menu (Garasi, Hasil Tersimpan, Modif Studio, Warna & Wrap, Foto Studio, Multi-Angle, Konsultan) kini selalu tampil - tombol "Mode Lanjutan" dihapus',
                      en: 'All menu items (Garage, Saved Results, Modif Studio, Color & Wrap, Photo Studio, Multi-Angle, Consultant) are now always visible - the "Advanced Mode" button is removed' }
                ] },
                { version: '1.3.4', date: '17 Okt 2026', changes: [
                    { id: 'Panduan singkat (muncul sekali setelah masuk, buka lagi lewat tombol Panduan): cara pakai, solusi kalau hasil gagal (login akun Google), dan cara pasang aplikasi di layar utama Android & iPhone',
                      en: 'Quick guide (shown once after signing in, reopen with the Guide button): how to use, what to do when a result fails (Google sign-in), and how to add the app to your Android & iPhone home screen' },
                    { id: 'Tombol "Chat Admin" WhatsApp di halaman login, menu, dan panduan',
                      en: '"Chat Admin" WhatsApp button on the login page, the menu, and the guide' }
                ] },
                { version: '1.3.3', date: '17 Okt 2026', changes: [
                    { id: 'Tombol "Beli di Lynk.id" di halaman login sekarang langsung membuka halaman pembelian AI Modif Studio',
                      en: 'The "Buy on Lynk.id" button on the login page now opens the AI Modif Studio purchase page directly' }
                ] },
                { version: '1.3.2', date: '16 Okt 2026', changes: [
                    { id: 'Server login baru yang lebih cepat dan stabil saat ramai - mungkin diminta login ulang sekali setelah update ini',
                      en: 'New faster and more stable login server, even at busy times - you may be asked to log in again once after this update' },
                    { id: 'Satu akun bisa dipakai di 2 perangkat sekaligus; login di perangkat ke-3 akan mengeluarkan perangkat yang paling lama',
                      en: 'One account can be used on 2 devices at once; logging in on a 3rd device signs out the oldest one' }
                ] },
                { version: '1.3.1', date: '8 Okt 2026', changes: [
                    { id: 'Mode Cepat: pilihan rasio foto (Ikut foto, 4:3, 16:9, 1:1, 4:5, 3:4, 9:16) di bawah kolom instruksi',
                      en: 'Quick mode: aspect ratio picker (Same as photo, 4:3, 16:9, 1:1, 4:5, 3:4, 9:16) below the request box' },
                    { id: 'Semua fitur (Cepat, Modif Studio, Warna & Wrap, Multi-Angle): angle diganti 10 sudut foto umum (3/4 depan & belakang kiri-kanan, samping kiri-kanan, depan, belakang, agak rendah, agak tinggi) - tidak ada lagi top-down, close-up, atau interior; seluruh kendaraan selalu terlihat dan foto referensi tidak lagi muncul sebagai benda lepas',
                      en: 'All features (Quick, Modif Studio, Color & Wrap, Multi-Angle): angles replaced with 10 common photo angles (front & rear 3/4 left-right, left-right side, front, rear, slightly low, slightly high) - no more top-down, close-ups or interior; the whole vehicle is always in frame and reference photos no longer appear as loose objects' }
                ] },
                { version: '1.3', date: '8 Okt 2026', changes: [
                    { id: 'Tab baru "Cepat" jadi layar pembuka: upload foto, tulis instruksi, foto referensi opsional, pilih satu angle (5 variasi) atau Acak (10 angle) - langsung generate',
                      en: 'New "Quick" tab as the opening screen: upload a photo, write your request, optional reference photos, pick one angle (5 variations) or Random (10 angles) - generate right away' },
                    { id: 'Tombol "Mode Lanjutan" di menu menampilkan Garasi, Modif Studio, Warna & Wrap, Suasana, Multi-Angle, Konsultan; pilihan diingat di perangkat ini',
                      en: '"Advanced Mode" button in the menu reveals Garage, Modif Studio, Color & Wrap, Scene, Multi-Angle, Consultant; your choice is remembered on this device' }
                ] },
                { version: '1.2', date: '7 Okt 2026', changes: [
                    { id: 'Modif Studio: opsi "Tanpa gaya" (default) - cocok kalau cuma mau coba velg referensi atau satu part saja tanpa arahan gaya',
                      en: 'Modif Studio: "No style" option (default) - for trying just reference wheels or a single part without any style direction' },
                    { id: 'Warna & Wrap: step "Angle hasil" (1 / beberapa / semua angle) seperti di Modif Studio',
                      en: 'Color & Wrap: "Output angle" step (1 / several / all angles) like in Modif Studio' },
                    { id: 'Chip "Acak" di pemilih angle Modif Studio & Warna: angle acak sejumlah "Jumlah hasil", tanpa pengulangan',
                      en: '"Random" chip in the Modif Studio & Color angle picker: random angles as many as "Number of results", no repeats' },
                    { id: 'Pesan error generate kini spesifik (kuota, koneksi, filter keamanan, server) dan kartu yang gagal punya tombol Ulangi - tidak lagi hilang diam-diam',
                      en: 'Generation errors are now specific (quota, connection, safety filter, server) and failed cards get a Retry button - no more silent drops' },
                    { id: 'Rasio foto default "Ikut foto" (foto portrait tidak lagi dipaksa 4:3); label teks di bawah ikon aksi; dropdown suasana & caption ikut bahasa EN',
                      en: 'Default aspect ratio "Same as photo" (portrait photos no longer forced to 4:3); text labels under action icons; scene dropdown & captions follow EN' },
                    { id: 'Perbaikan: pemilih kendaraan otomatis kembali ke "Dari Garasi" setelah kendaraan pertama disimpan; penyimpanan penuh kini memberi pesan; Esc menutup dialog',
                      en: 'Fix: vehicle picker returns to "From Garage" after the first vehicle is saved; full storage now shows a message; Esc closes dialogs' }
                ] },
                { version: '1.1', date: '7 Okt 2026', changes: [
                    { id: 'Modif Studio: step "Angle hasil" - pilih 1 atau semua angle, hasil modif langsung dirender dari sudut pandang itu (kosongkan = ikut foto asli)',
                      en: 'Modif Studio: "Output angle" step - pick 1 or all angles, the modified result is rendered from those viewpoints (empty = same as the original photo)' },
                    { id: 'Tab Hasil Tersimpan: tombol simpan di tiap kartu hasil, koleksi maks 10 foto di perangkat ini',
                      en: 'Saved Results tab: save button on every result card, collection of up to 10 photos on this device' },
                    { id: 'Tombol "Jadikan kendaraan": hasil generate langsung jadi foto dasar di Multi-Angle / Warna / Suasana / Modif tanpa download-upload ulang',
                      en: '"Use as vehicle" button: a generated result becomes the base photo in Multi-Angle / Color / Scene / Modif without re-uploading' },
                    { id: 'Tombol "Pilih semua / Kosongkan" di pemilih angle', en: '"Select all / Clear" buttons on the angle picker' }
                ] },
                { version: '1.0', date: '7 Okt 2026', changes: [
                    { id: 'Rilis perdana: Garasi (simpan kendaraan di perangkat), Modif Studio (gaya + part + foto referensi velg/body kit), Warna & Wrap, Foto Studio / Suasana (21 latar), Multi-Angle (14 sudut), Konsultan Modif AI, slider Before/After, dan Prompt Video',
                      en: 'First release: Garage (vehicles saved on device), Modif Studio (style + parts + wheel/body kit reference photos), Color & Wrap, Photo Studio / Scene (21 backdrops), Multi-Angle (14 viewpoints), AI Mod Consultant, Before/After slider, and Video Prompt' }
                ] }
            ];
            function showWhatsNew() {
                const lang = window.getLang();
                const body = (window.CHANGELOG || []).map(rel => {
                    const lines = (rel.changes || []).map(c =>
                        `<li class="flex gap-2 text-sm text-gray-600 mb-1.5"><i class="fas fa-check text-orange-500 mt-1" style="font-size:.7rem;"></i><span>${window.escHtml(c[lang] || c.id)}</span></li>`
                    ).join('');
                    return `<div class="mb-4"><div class="flex items-center gap-2 mb-2"><span class="text-sm font-bold text-white px-2 py-0.5 rounded-full brand-gradient">v${window.escHtml(rel.version)}</span><span class="text-xs text-gray-400">${window.escHtml(rel.date)}</span></div><ul>${lines}</ul></div>`;
                }).join('') || `<p class="text-sm text-gray-500">${window.escHtml(window.t('wn.empty'))}</p>`;
                window.showUniversalModal(window.t('wn.title'), body);
            }
            function showDebugPanel() {
                const rows = (window.__debugLog || []).slice().reverse().map(l => `<div class="text-[11px] text-gray-600 border-b border-gray-100 py-1"><span class="text-gray-400">${l.t}</span> <b>${window.escHtml(l.tag)}</b>: ${window.escHtml(l.msg)}</div>`).join('') || '<p class="text-xs text-gray-400">Log kosong.</p>';
                window.showUniversalModal('Debug v' + window.APP_VERSION, `<p class="text-[11px] text-gray-400 mb-2">${window.escHtml(navigator.userAgent)}</p>${rows}`);
            }
            (function initVersionBadge() {
                const badge = document.getElementById('version-badge');
                const label = document.getElementById('version-badge-label');
                const dot = document.getElementById('version-badge-dot');
                if (!badge || !label) return;
                label.textContent = 'v' + window.APP_VERSION;
                if (dot) dot.classList.toggle('hidden', localStorage.getItem('ams_seen_version') === window.APP_VERSION);
                let clicks = 0, timer = null;
                badge.addEventListener('click', () => {
                    clicks++;
                    clearTimeout(timer);
                    timer = setTimeout(() => { clicks = 0; }, 2000);
                    if (clicks >= 5) { clicks = 0; showDebugPanel(); return; }
                    showWhatsNew();
                    localStorage.setItem('ams_seen_version', window.APP_VERSION);
                    if (dot) dot.classList.add('hidden');
                });
            })();
            // === END VERSI ===
        });
    