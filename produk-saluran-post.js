
 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
// ============================================================
// GORONG GORONG BETON POST - BLOG
// ============================================================
// CATATAN REVISI:
// 1. Ada typo domain: betonjayareaadymix.com (kelebihan huruf 'a')
// 2. Cluster ini masih kecil, perlu pengembangan konten
// 3. Gorong gorong beton = produk gorong-gorong bulat (berbeda dengan box culvert persegi)
// 4. Bedakan dengan box culvert (persegi) dan u ditch (terbuka)
// ============================================================

const urlMappingGorongBeton = {
  // ============================================================
  // [MONEY PAGE] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/harga-gorong-gorong-beton.html": "Harga Gorong Gorong Beton [MASTER]",
  
  // ============================================================
  // [MONEY PAGE] - JUAL (TRANSACTIONAL) - PERLU DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/jual-gorong-gorong-beton.html": "Jual Gorong Gorong Beton [HUB PAGE]", // [PERLU DIBUAT]
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-jakarta.html": "Gorong Gorong Beton Jakarta",
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-bogor.html": "Gorong Gorong Beton Bogor",
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-depok.html": "Gorong Gorong Beton Depok",
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-tangerang.html": "Gorong Gorong Beton Tangerang",
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-bekasi.html": "Gorong Gorong Beton Bekasi",
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-karawang.html": "Gorong Gorong Beton Karawang",
  
  // ============================================================
  // [MONEY PAGE] - TAMBAHAN LOKASI (PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-bandung.html": "Gorong Gorong Beton Bandung", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-surabaya.html": "Gorong Gorong Beton Surabaya", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-medan.html": "Gorong Gorong Beton Medan", // [PERLU DIBUAT]
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION) - PERLU DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/arti-gorong-gorong-beton.html": "Arti Gorong Gorong Beton", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/fungsi-gorong-gorong-beton.html": "Fungsi Gorong Gorong Beton", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/kelebihan-gorong-gorong-beton.html": "Kelebihan Gorong Gorong Beton", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/perbedaan-gorong-gorong-dan-box-culvert.html": "Perbedaan Gorong Gorong dan Box Culvert", // [PERLU DIBUAT]
  
  // [SUB2] - UKURAN & SPESIFIKASI (PERLU DIBUAT)
  // "https://www.betonjayareadymix.com/2022/02/ukuran-gorong-gorong-beton.html": "Ukuran Gorong Gorong Beton", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-diameter-40-cm.html": "Gorong Gorong Beton Diameter 40 cm", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-diameter-60-cm.html": "Gorong Gorong Beton Diameter 60 cm", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-diameter-80-cm.html": "Gorong Gorong Beton Diameter 80 cm", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-diameter-100-cm.html": "Gorong Gorong Beton Diameter 100 cm", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-diameter-120-cm.html": "Gorong Gorong Beton Diameter 120 cm", // [PERLU DIBUAT]
  
  // ============================================================
  // [SUB1] - SUB-PILLAR TIPE 1 (BRIDGE KE MONEY) - PERLU DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/panduan-memilih-gorong-gorong-beton.html": "Panduan Memilih Gorong Gorong Beton", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/cara-pemasangan-gorong-gorong-beton.html": "Cara Pemasangan Gorong Gorong Beton" // [PERLU DIBUAT]
};

// ============================================================
// 🔴 TYPO CORRECTION - GORONG GORONG BETON (WAJIB)
// ============================================================
/*
URL yang salah (typo):
https://www.betonjayareaadymix.com/2022/02/gorong-gorong-beton-jakarta.html

URL yang benar:
https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-jakarta.html

Redirect yang harus dibuat (di .htaccess):
Redirect 301 /2022/02/gorong-gorong-beton-jakarta.html /2022/02/gorong-gorong-beton-jakarta.html

CATATAN: URL di atas TIDAK DIMASUKKAN KE CONST KARENA TYPO DOMAIN
Gunakan hanya URL dari domain yang valid: betonjayareadymix.com
*/
// ============================================================
// SALURAN BETON POST - BLOG
// ============================================================
// CATATAN REVISI:
// 1. Cluster ini masih kecil, perlu pengembangan konten
// 2. Tambahkan URL untuk ukuran, tipe, dan lokasi
// 3. Bedakan dengan U Ditch (saluran terbuka) dan Box Culvert (persegi tertutup)
// 4. Saluran Beton lebih ke produk saluran beton pracetak secara umum
// ============================================================

const urlMappingSaluranBeton = {
  // ============================================================
  // [MONEY PAGE] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/harga-saluran-beton.html": "Harga Saluran Beton [MASTER]",
  
  // ============================================================
  // [MONEY PAGE] - JUAL (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/jual-saluran-beton.html": "Jual Saluran Beton [HUB PAGE]",
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-jakarta.html": "Saluran Beton Jakarta",
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-bogor.html": "Saluran Beton Bogor",
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-depok.html": "Saluran Beton Depok",
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-tangerang.html": "Saluran Beton Tangerang",
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-bekasi.html": "Saluran Beton Bekasi",
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-karawang.html": "Saluran Beton Karawang",
  
  // ============================================================
  // [MONEY PAGE] - TAMBAHAN LOKASI (PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-bandung.html": "Saluran Beton Bandung", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-surabaya.html": "Saluran Beton Surabaya", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-medan.html": "Saluran Beton Medan", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-makassar.html": "Saluran Beton Makassar", // [PERLU DIBUAT]
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/arti-saluran-beton.html": "Arti Saluran Beton",
  "https://www.betonjayareadymix.com/2022/02/kegunaan-saluran-beton.html": "Kegunaan Saluran Beton",
  "https://www.betonjayareadymix.com/2022/02/kelebihan-saluran-beton.html": "Kelebihan Saluran Beton",
  "https://www.betonjayareadymix.com/2022/02/kekurangan-saluran-beton.html": "Kekurangan Saluran Beton",
  "https://www.betonjayareadymix.com/2022/02/kekuatan-saluran-beton.html": "Kekuatan Saluran Beton",
  
  // [SUB2] - UKURAN & SPESIFIKASI
  "https://www.betonjayareadymix.com/2022/02/ukuran-saluran-beton.html": "Ukuran Saluran Beton",
  
  // ============================================================
  // [SUB2] - TAMBAHAN UKURAN (PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-40x40.html": "Saluran Beton 40x40", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-50x50.html": "Saluran Beton 50x50", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-60x60.html": "Saluran Beton 60x60", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-80x80.html": "Saluran Beton 80x80", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-100x100.html": "Saluran Beton 100x100", // [PERLU DIBUAT]
  
  // ============================================================
  // [SUB2] - TAMBAHAN TIPE (PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-terbuka.html": "Saluran Beton Terbuka", // [PERLU DIBUAT] - bedakan dengan U Ditch
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-tertutup.html": "Saluran Beton Tertutup", // [PERLU DIBUAT] - bedakan dengan Box Culvert
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-bertulang.html": "Saluran Beton Bertulang", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-tanpa-tulangan.html": "Saluran Beton Tanpa Tulangan", // [PERLU DIBUAT]
  
  // ============================================================
  // [SUB2] - TAMBAHAN APLIKASI (PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-untuk-drainase-perkotaan.html": "Saluran Beton Untuk Drainase Perkotaan", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-untuk-industri.html": "Saluran Beton Untuk Industri", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-untuk-pertanian.html": "Saluran Beton Untuk Pertanian", // [PERLU DIBUAT]
  
  // ============================================================
  // [SUB1] - SUB-PILLAR TIPE 1 (BRIDGE KE MONEY) - PERLU DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/panduan-memilih-saluran-beton.html": "Panduan Memilih Saluran Beton", // [PERLU DIBUAT]
  // "https://www.betonjayareadymix.com/2022/02/cara-pemasangan-saluran-beton.html": "Cara Pemasangan Saluran Beton" // [PERLU DIBUAT]
};

// ============================================================
// 🔴 REKOMENDASI PERBAIKAN URL (REDIRECT)
// ============================================================
/*
| No | Masalah | Solusi |
|----|---------|--------|
| 1 | URL "saluran-beton-jakarta.html" dll sudah menggunakan format dengan kota | ✅ SUDAH BENAR |
| 2 | Belum ada URL dengan format "jual-saluran-beton-[kota].html" | ⚠️ PERLU DITAMBAHKAN |
| 3 | Belum ada URL dengan format "harga-saluran-beton-[ukuran].html" | ⚠️ PERLU DITAMBAHKAN |

CATATAN PENTING:
- Bedakan konten "Saluran Beton" dengan "U Ditch" (saluran terbuka) dan "Box Culvert" (persegi tertutup)
- Saluran Beton lebih ke produk saluran beton pracetak secara umum
- Gunakan internal link ke U Ditch dan Box Culvert untuk menghindari cannibal
*/

// ============================================================
// 🟡 REDIRECT NOTES UNTUK SALURAN BETON
// ============================================================
/*
| No | From URL | To URL | Type |
|----|----------|--------|------|
| (TIDAK ADA REDIRECT HIGH RISK UNTUK CLUSTER INI)

CATATAN:
- Cluster saluran beton masih kecil, potensi untuk dikembangkan
- Perhatikan bahwa "saluran beton" bisa tumpang tindih dengan "u ditch"
- Pastikan konten saluran beton fokus ke produk saluran beton pracetak secara umum
*/
// ============================================================
// PIPA BETON POST - BLOG
// ============================================================

const urlMappingPipaBeton = {
  // ============================================================
  // [MONEY PAGE] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton.html": "Harga Pipa Beton",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-precast.html": "Harga Pipa Beton Precast",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-murah.html": "Pipa Beton Murah",
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-jakarta.html": "Harga Pipa Beton Jakarta",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-bogor.html": "Harga Pipa Beton Bogor",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-depok.html": "Harga Pipa Beton Depok",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-tangerang.html": "Harga Pipa Beton Tangerang",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-bekasi.html": "Harga Pipa Beton Bekasi",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-karawang.html": "Harga Pipa Beton Karawang",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-bandung.html": "Harga Pipa Beton Bandung",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-purwakarta.html": "Harga Pipa Beton Purwakarta",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-surabaya.html": "Harga Pipa Beton Surabaya",
  
  // ============================================================
  // [MONEY PAGE] - PER BRAND (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-scg.html": "Harga Pipa Beton SCG",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg.html": "Pipa Beton SCG",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-jakarta.html": "Pipa Beton SCG Jakarta",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-bogor.html": "Pipa Beton SCG Bogor",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-depok.html": "Pipa Beton SCG Depok",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-tangerang.html": "Pipa Beton SCG Tangerang",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-bekasi.html": "Pipa Beton SCG Bekasi",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-karawang.html": "Pipa Beton SCG Karawang",
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-precast.html": "Pipa Beton Precast",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-cor.html": "Pipa Beton Cor",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-drainase.html": "Pipa Beton Drainase",
  
  // [SUB2] - UKURAN & SPESIFIKASI
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-ukuran.html": "Pipa Beton Ukuran",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-150-mm.html": "Ukuran Pipa Beton 150 mm",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-200-mm.html": "Ukuran Pipa Beton 200 mm",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-300-mm.html": "Ukuran Pipa Beton 300 mm",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-400-mm.html": "Ukuran Pipa Beton 400 mm",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-diameter.html": "Diameter Pipa Beton",
  "https://www.betonjayareadymix.com/2022/02/ketebalan-dinding-pipa-beton.html": "Ketebalan Dinding Pipa Beton",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-standar-sni.html": "Ukuran Pipa Beton Standar SNI",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-untuk-drainase.html": "Ukuran Pipa Beton untuk Drainase",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-untuk-gorong-gorong.html": "Ukuran Pipa Beton untuk Gorong-Gorong",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-vs-kapasitas-aliran.html": "Ukuran Pipa Beton vs Kapasitas Aliran",
  
  // [SUB2] - LOKASI (INFORMASIONAL, TANPA "HARGA")
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-jakarta.html": "Pipa Beton Jakarta",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-bogor.html": "Pipa Beton Bogor",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-depok.html": "Pipa Beton Depok",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-tangerang.html": "Pipa Beton Tangerang",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-bekasi.html": "Pipa Beton Bekasi",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-karawang.html": "Pipa Beton Karawang",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-terbaru.html": "Pipa Beton Terbaru",
  
  // [SUB2] - APLIKASI SPESIFIK
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-drainase-bandara.html": "Pipa Beton Drainase Bandara",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-drainase-pertanian.html": "Pipa Beton Drainase Pertanian",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-drainase-industri.html": "Pipa Beton Drainase Industri",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-drainase-perumahan.html": "Pipa Beton Drainase Perumahan",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-drainase-jalan-raya.html": "Pipa Beton Drainase Jalan Raya",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-gorong-gorong.html": "Pipa Beton Gorong-Gorong",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-saluran-air.html": "Pipa Beton Saluran Air",
  
  // [SUB2] - KEUNGGULAN & PERBANDINGAN
  "https://www.betonjayareadymix.com/2022/02/keunggulan-pipa-beton-scg.html": "Keunggulan Pipa Beton SCG",
  "https://www.betonjayareadymix.com/2022/02/perbandingan-pipa-scg-vs-lokal.html": "Perbandingan Pipa SCG vs Pipa Beton Lokal",
  "https://www.betonjayareadymix.com/2022/02/spesifikasi-pipa-scg.html": "Spesifikasi Pipa SCG"
};

// ============================================================
// 🟡 REDIRECT NOTES UNTUK PIPA BETON
// ============================================================
/*
| No | From URL | To URL | Type |
|----|----------|--------|------|
| (TIDAK ADA REDIRECT HIGH RISK UNTUK CLUSTER INI)

CATATAN:
- Hati-hati dengan duplikasi: pipa-beton-scg.html dan harga-pipa-beton-scg.html
- Pastikan konsistensi antara konten harga dan spesifikasi
*/
// ============================================================
// BUIS BETON POST - BLOG
// ============================================================

const urlMappingBuis = {
  // ============================================================
  // [MONEY PAGE] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton.html": "Harga Buis Beton",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-paling-murah.html": "Harga Buis Beton Paling Murah",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-murah.html": "Harga Buis Beton Murah",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-termurah.html": "Harga Buis Beton Termurah",
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER UKURAN (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-30-cm.html": "Harga Buis Beton Diameter 30 CM",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-40-cm.html": "Harga Buis Beton Diameter 40 CM",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-50-cm.html": "Harga Buis Beton Diameter 50 CM",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-60-cm.html": "Harga Buis Beton Diameter 60 CM",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-80-cm.html": "Harga Buis Beton Diameter 80 CM",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-100-cm.html": "Harga Buis Beton Diameter 100 CM",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-150-cm.html": "Harga Buis Beton Diameter 150 CM",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-80-cm.html": "Harga Buis Beton 80 cm",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-kecil.html": "Harga Buis Beton Kecil",
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER JENIS (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bertulang.html": "Harga Buis Beton Bertulang",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-tanpa-tulangan.html": "Harga Buis Beton Tanpa Tulangan",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bulat.html": "Harga Buis Beton Bulat",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-kotak.html": "Harga Buis Beton Kotak",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-setengah-lingkaran.html": "Harga Buis Beton Setengah Lingkaran",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-12-lingkaran.html": "Harga Buis Beton 1/2 Lingkaran",
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-jakarta.html": "Harga Buis Beton Jakarta",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bogor.html": "Harga Buis Beton Bogor",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-depok.html": "Harga Buis Beton Depok",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-tangerang.html": "Harga Buis Beton Tangerang",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bekasi.html": "Harga Buis Beton Bekasi",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bandung.html": "Harga Buis Beton Bandung",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-karawang.html": "Harga Buis Beton Karawang",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-cirebon.html": "Harga Buis Beton Cirebon",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-semarang.html": "Harga Buis Beton Semarang",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-surabaya.html": "Harga Buis Beton Surabaya",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-mojokerto.html": "Harga Buis Beton Mojokerto",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-gresik.html": "Harga Buis Beton Gresik",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-tasikmalaya.html": "Harga Buis Beton Tasikmalaya",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bali.html": "Harga Buis Beton Bali",
  
  // ============================================================
  // [MONEY PAGE] - JUAL (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/jual-buis-beton-murah.html": "Jual Buis Beton Murah",
  "https://www.betonjayareadymix.com/2021/03/jual-buis-beton-terdekat.html": "Jual Buis Beton Terdekat",
  "https://www.betonjayareadymix.com/2021/03/jual-buis-beton-bertulang.html": "Jual Buis Beton Bertulang",
  "https://www.betonjayareadymix.com/2021/03/jual-buis-beton-bekasi.html": "Jual Buis Beton Bekasi",
  "https://www.betonjayareadymix.com/2021/03/jual-buis-beton-bandung.html": "Jual Buis Beton Bandung",
  "https://www.betonjayareadymix.com/2021/03/jual-buis-beton-di-bogor.html": "Jual Buis Beton di Bogor",
  "https://www.betonjayareadymix.com/2021/03/jual-buis-beton-depok.html": "Jual Buis Beton Depok",
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/buis-beton-precon.html": "Buis Beton Precon",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-asiacon.html": "Buis Beton Asiacon",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-dusaspun.html": "Buis Beton Dusaspun",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-scg.html": "Buis Beton SCG",
  
  // [SUB2] - JENIS & BENTUK
  "https://www.betonjayareadymix.com/2021/03/buis-beton-bulat.html": "Buis Beton Bulat",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-kotak.html": "Buis Beton Kotak",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-persegi.html": "Buis Beton Persegi",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-u.html": "Buis Beton Bentuk U",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-setengah-lingkaran.html": "Buis Beton Setengah Lingkaran",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-belah.html": "Buis Beton Belah",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-bertulang.html": "Buis Beton Bertulang",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-tanpa-lubang.html": "Buis Beton Tanpa Lubang",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-pori-lubang.html": "Buis Beton Pori Lubang",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-rcp.html": "Buis Beton RCP",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-riol.html": "Buis Beton Riol",
  
  // [SUB2] - UKURAN & SPESIFIKASI
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-diameter-80-cm.html": "Ukuran Buis Beton Diameter 80 CM",
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-diameter-100-cm.html": "Ukuran Buis Beton Diameter 100 CM",
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-u.html": "Ukuran Buis Beton U",
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-belah.html": "Ukuran Buis Beton Belah",
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-untuk-sumur.html": "Ukuran Buis Beton untuk Sumur",
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-untuk-septic-tank.html": "Ukuran Buis Beton untuk Septic Tank",
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-saluran-air.html": "Ukuran Buis Beton Saluran Air",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-80-x-50.html": "Buis Beton 80 x 50",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-100-x-100.html": "Buis Beton 100 x 100",
  
  // [SUB2] - LOKASI (INFORMASIONAL, TANPA "HARGA"/"JUAL")
  "https://www.betonjayareadymix.com/2021/03/buis-beton-jakarta.html": "Buis Beton Jakarta",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-bogor.html": "Buis Beton Bogor",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-depok.html": "Buis Beton Depok",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-tangerang.html": "Buis Beton Tangerang",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-bekasi.html": "Buis Beton Bekasi",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-bandung.html": "Buis Beton Bandung",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-purwakarta.html": "Buis Beton Purwakarta",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-cirebon.html": "Buis Beton Cirebon",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-serang.html": "Buis Beton Serang",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-cisangkan.html": "Buis Beton Cisangkan",
  
  // [SUB2] - APLIKASI SPESIFIK
  "https://www.betonjayareadymix.com/2021/03/buis-beton-proyek.html": "Buis Beton Proyek",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-kolam.html": "Buis Beton Kolam",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-resapan.html": "Buis Beton Resapan",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-sumur-resapan.html": "Buis Beton Sumur Resapan",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-septic-tank.html": "Buis Beton Septic Tank",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-pondasi-cyclop.html": "Buis Beton Pondasi Cyclop",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-biopori.html": "Buis Beton Biopori",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-saluran.html": "Buis Beton Saluran",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-gorong-gorong.html": "Buis Beton Gorong Gorong",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-saluran-air.html": "Buis Beton Saluran Air",
  
  // ============================================================
  // [SUB1] - SUB-PILLAR TIPE 1 (BRIDGE KE MONEY)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/sumur-resapan-buis-beton-scg.html": "Sumur Resapan Buis Beton SCG",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-untuk-sumur.html": "Buis Beton Untuk Sumur",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-untuk-septic-tank.html": "Buis Beton Untuk Septic Tank"
};

// ============================================================
// 🔴 REDIRECT NOTES UNTUK BUIS BETON
// ============================================================
/*
| No | From URL | To URL | Type |
|----|----------|--------|------|
| 1 | /2021/03/daftar-harga-buis-beton.html | /2021/03/harga-buis-beton.html | 301 |
| 2 | /2021/03/harga-buis-beton-untuk-saluran-air.html | /2021/03/harga-buis-beton.html | 301 |
| 3 | /2021/03/harga-buis-beton-buat-sumur.html | /2021/03/harga-buis-beton-sumur-resapan.html | 301 |

CATATAN:
- Hati-hati dengan duplikasi konten untuk ukuran yang sama
- Pastikan konsistensi antara "harga-buis-beton-diameter-X-cm" dan "harga-buis-beton-X-cm"
*/
// ============================================================
// BOX CULVERT POST - BLOG
// ============================================================

const urlMappingBoxCulvert = {
  // ============================================================
  // [MONEY PAGE] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-beton-precast.html": "Harga Box Culvert Beton Precast",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-beton.html": "Harga Box Culvert Beton",
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER UKURAN (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-40x40.html": "Harga Box Culvert 40x40",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-50x50.html": "Harga Box Culvert 50x50",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-60x60.html": "Harga Box Culvert 60x60",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-80x80x100.html": "Harga Box Culvert 80x80x100",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-100-x-100.html": "Harga Box Culvert 100 x 100",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-100x100x100.html": "Harga Box Culvert 100x100x100",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-150x150.html": "Harga Box Culvert 150x150",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-200x200.html": "Harga Box Culvert 200x200",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-300x300.html": "Harga Box Culvert 300x300",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-600-x-600.html": "Harga Box Culvert 600 x 600",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-1200-x-1200.html": "Harga Box Culvert 1200 x 1200",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-1500x1500.html": "Harga Box Culvert 1500 x 1500",
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-jakarta.html": "Harga Box Culvert Jakarta",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bogor.html": "Harga Box Culvert Bogor",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-depok.html": "Harga Box Culvert Depok",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-tangerang.html": "Harga Box Culvert Tangerang",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bekasi.html": "Harga Box Culvert Bekasi",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bandung.html": "Harga Box Culvert Bandung",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-purwakarta.html": "Harga Box Culvert Purwakarta",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-majalengka.html": "Harga Box Culvert Majalengka",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bali.html": "Harga Box Culvert Bali",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-surabaya.html": "Harga Box Culvert Surabaya",
  
  // ============================================================
  // [MONEY PAGE] - JUAL (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/jual-box-culvert.html": "Jual Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/jual-box-culvert-jakarta.html": "Jual Box Culvert Jakarta",
  "https://www.betonjayareadymix.com/2021/04/jual-box-culvert-semarang.html": "Jual Box Culvert Semarang",
  "https://www.betonjayareadymix.com/2021/04/jual-box-culvert-surabaya.html": "Jual Box Culvert Surabaya",
  "https://www.betonjayareadymix.com/2021/04/jual-box-culvert-balikpapan.html": "Jual Box Culvert Balikpapan",
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/box-culvert-adalah.html": "Box Culvert Adalah",
  "https://www.betonjayareadymix.com/2021/04/arti-box-culvert.html": "Arti Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/kegunaan-box-culvert.html": "Kegunaan Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/kelebihan-box-culvert.html": "Kelebihan Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/kekurangan-box-culvert.html": "Kekurangan Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/kekuatan-box-culvert.html": "Kekuatan Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/aplikasi-box-culvert.html": "Aplikasi Box Culvert",
  
  // [SUB2] - UKURAN & SPESIFIKASI
  "https://www.betonjayareadymix.com/2021/04/ukuran-box-culvert-precast.html": "Ukuran Box Culvert Precast",
  "https://www.betonjayareadymix.com/2021/04/ukuran-box-culvert-dusaspun.html": "Ukuran Box Culvert Dusaspun",
  "https://www.betonjayareadymix.com/2021/04/ukuran-box-culvert-calvary.html": "Ukuran Box Culvert Calvary",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-80x80.html": "Box Culvert 80x80",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-100-x-100.html": "Box Culvert 100 x 100",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-200x200.html": "Box Culvert 200x200",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-300x300.html": "Box Culvert 300x300",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-600-x-600.html": "Box Culvert 600 x 600",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-1500x1500.html": "Box Culvert 1500x1500",
  
  // [SUB2] - BRAND & MANUFAKTUR
  "https://www.betonjayareadymix.com/2021/04/box-culvert-calvary.html": "Box Culvert Calvary",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-dusaspun.html": "Box Culvert Dusaspun",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-wika-beton.html": "Box Culvert Wika Beton",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-indonesia.html": "Box Culvert Indonesia",
  
  // [SUB2] - LOKASI (INFORMASIONAL, TANPA "HARGA"/"JUAL")
  "https://www.betonjayareadymix.com/2021/04/box-culvert-jakarta.html": "Box Culvert Jakarta",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-bogor.html": "Box Culvert Bogor",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-bekasi.html": "Box Culvert Bekasi",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-tangerang.html": "Box Culvert Tangerang",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-depok.html": "Box Culvert Depok",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-bandung.html": "Box Culvert Bandung",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-malang.html": "Box Culvert Malang",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-jogja.html": "Box Culvert Jogja",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-surabaya.html": "Box Culvert Surabaya",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-majalengka.html": "Box Culvert Majalengka",
  
  // [SUB2] - ANALISA & PANDUAN
  "https://www.betonjayareadymix.com/2021/04/analisa-pemasangan-box-culvert.html": "Analisa Pemasangan Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-sni.html": "Box Culvert SNI",
  
  // ============================================================
  // [SUB1] - SUB-PILLAR TIPE 1 (BRIDGE KE MONEY)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/saluran-box-culvert.html": "Saluran Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/gorong-gorong-box-culvert.html": "Gorong Gorong Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-jalan-tol.html": "Box Culvert Jalan Tol",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-irigasi.html": "Box Culvert Irigasi",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-jembatan.html": "Box Culvert Jembatan",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-jalan-umum.html": "Box Culvert Jalan Umum"
};

// ============================================================
// 🟡 REDIRECT NOTES UNTUK BOX CULVERT
// ============================================================
/*
| No | From URL | To URL | Type |
|----|----------|--------|------|
| (TIDAK ADA REDIRECT HIGH RISK UNTUK CLUSTER INI)

CATATAN:
- Cluster box culvert sudah cukup terstruktur
- Hati-hati dengan duplikasi ukuran (contoh: 100-x-100 vs 100x100x100)
- Pastikan konsistensi format ukuran
*/
// ============================================================
// U DITCH POST - BLOG
// ============================================================

const urlMappingUditch = {
  // ============================================================
  // [MONEY PAGE] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch.html": "Harga U Ditch",
  "https://www.betonjayareadymix.com/2021/04/harga-beton-precast-u-ditch.html": "Harga Beton Precast U Ditch",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-murah.html": "Harga U Ditch Murah",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-per-meter.html": "Harga U Ditch Per Meter",
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-jakarta.html": "Harga U Ditch Jakarta",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-bogor.html": "Harga U Ditch Bogor",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-depok.html": "Harga U Ditch Depok",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-tangerang.html": "Harga U Ditch Tangerang",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-bekasi.html": "Harga U Ditch Bekasi",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-bandung.html": "Harga U Ditch Bandung",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-karawang.html": "Harga U Ditch Karawang",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-cirebon.html": "Harga U Ditch Cirebon",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-surabaya.html": "Harga U Ditch Surabaya",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-jogja.html": "Harga U Ditch Jogja",
  
  // ============================================================
  // [MONEY PAGE] - JUAL (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/jual-u-ditch-bekasi.html": "Jual U Ditch Bekasi",
  "https://www.betonjayareadymix.com/2021/04/jual-u-ditch-bandung.html": "Jual U Ditch Bandung",
  "https://www.betonjayareadymix.com/2021/04/jual-u-ditch-depok.html": "Jual U Ditch Depok",
  "https://www.betonjayareadymix.com/2021/04/jual-u-ditch-cikarang.html": "Jual U Ditch Cikarang",
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/fungsi-u-ditch.html": "Fungsi U Ditch",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-precast.html": "U Ditch Precast",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-calvary.html": "U Ditch Calvary",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-dusaspun.html": "U Ditch Dusaspun",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-megacon.html": "U Ditch Megacon",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-precon.html": "U Ditch Precon",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-scg.html": "U Ditch SCG",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-wika-beton.html": "U Ditch Wika Beton",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-varia-usaha-beton.html": "U Ditch Varia Usaha Beton",
  
  // [SUB2] - UKURAN & SPESIFIKASI
  "https://www.betonjayareadymix.com/2021/04/ukuran-u-ditch-beton.html": "Ukuran U Ditch Beton",
  "https://www.betonjayareadymix.com/2021/04/ukuran-u-ditch-type-ds-1.html": "Ukuran U Ditch Type DS 1",
  "https://www.betonjayareadymix.com/2021/04/ukuran-u-ditch-type-ds-2.html": "Ukuran U Ditch Type DS 2",
  "https://www.betonjayareadymix.com/2021/04/ukuran-u-ditch-type-ds-3.html": "Ukuran U Ditch Type DS 3",
  "https://www.betonjayareadymix.com/2021/04/ukuran-u-ditch-type-ds-4.html": "Ukuran U Ditch Type DS 4",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-30x40x120.html": "U Ditch 30x40x120",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-40x40x120.html": "U Ditch 40x40x120",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-40-x-40.html": "U Ditch 40 x 40",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-40-x-60.html": "U Ditch 40 x 60",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-50-x-60.html": "U Ditch 50 x 60",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-60x60.html": "U Ditch 60x60",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-60-x-60.html": "U Ditch 60 x 60",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-60-x-80.html": "U Ditch 60 x 80",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-70x70.html": "U Ditch 70x70",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-80x80.html": "U Ditch 80x80",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-90x90.html": "U Ditch 90x90",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-100x100x120.html": "U Ditch 100x100x120",
  
  // [SUB2] - LOKASI (INFORMASIONAL, TANPA "HARGA"/"JUAL")
  "https://www.betonjayareadymix.com/2021/04/u-ditch-jakarta.html": "U Ditch Jakarta",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-bogor.html": "U Ditch Bogor",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-depok.html": "U Ditch Depok",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-tangerang.html": "U Ditch Tangerang",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-bekasi.html": "U Ditch Bekasi",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-bandung.html": "U Ditch Bandung",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-karawang.html": "U Ditch Karawang",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-cirebon.html": "U Ditch Cirebon",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-surabaya.html": "U Ditch Surabaya",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-jogja.html": "U Ditch Jogja",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-semarang.html": "U Ditch Semarang",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-sidoarjo.html": "U Ditch Sidoarjo",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-pasuruan.html": "U Ditch Pasuruan",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-mojokerto.html": "U Ditch Mojokerto",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-gresik.html": "U Ditch Gresik",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-cilegon.html": "U Ditch Cilegon",
  
  // [SUB2] - ANALISA & PANDUAN
  "https://www.betonjayareadymix.com/2021/04/analisa-pemasangan-u-ditch.html": "Analisa Pemasangan U Ditch",
  "https://www.betonjayareadymix.com/2021/04/analisa-pemasangan-u-ditch-sni.html": "Analisa Pemasangan U Ditch SNI",
  "https://www.betonjayareadymix.com/2021/04/biaya-pemasangan-u-ditch.html": "Biaya Pemasangan U Ditch",
  "https://www.betonjayareadymix.com/2021/04/harga-pasang-u-ditch.html": "Harga Pasang U Ditch",
  "https://www.betonjayareadymix.com/2021/04/harga-upah-borongan-pasang-u-ditch.html": "Harga Upah Borongan Pasang U Ditch",
  "https://www.betonjayareadymix.com/2021/04/metode-pelaksanaan-pemasangan-cover-u.html": "Metode Pelaksanaan Pemasangan Cover U Ditch",
  
  // [SUB2] - TUTUP U DITCH (COVER)
  "https://www.betonjayareadymix.com/2021/04/harga-cover-tutup-u-ditch.html": "Harga Cover Tutup U Ditch",
  "https://www.betonjayareadymix.com/2021/04/harga-cover-u-ditch-dusaspun.html": "Harga Cover U Ditch Dusaspun",
  "https://www.betonjayareadymix.com/2021/04/harga-tutup-u-ditch-30-x-30.html": "Harga Tutup U Ditch 30 x 30",
  "https://www.betonjayareadymix.com/2021/04/harga-tutup-u-ditch-40x40x120.html": "Harga Tutup U Ditch 40x40x120",
  "https://www.betonjayareadymix.com/2021/04/ukuran-cover-u-ditch.html": "Ukuran Cover U Ditch",
  "https://www.betonjayareadymix.com/2021/04/berat-cover-u-ditch.html": "Berat Cover U Ditch",
  "https://www.betonjayareadymix.com/2021/04/cetakan-tutup-u-ditch.html": "Cetakan Tutup U Ditch",
  "https://www.betonjayareadymix.com/2021/04/jual-tutup-u-ditch.html": "Jual Tutup U Ditch",
  
  // ============================================================
  // [SUB1] - SUB-PILLAR TIPE 1 (BRIDGE KE MONEY)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/saluran-u-ditch-jalan.html": "Saluran U Ditch Jalan",
  "https://www.betonjayareadymix.com/2021/04/gorong-gorong-u-ditch.html": "Gorong Gorong U Ditch"
};

// ============================================================
// 🔴 REDIRECT NOTES UNTUK U DITCH
// ============================================================
/*
| No | From URL | To URL | Type |
|----|----------|--------|------|
| 1 | /2021/04/daftar-harga-u-ditch-beton.html | /2021/04/harga-u-ditch.html | 301 |
| 2 | /2021/04/daftar-harga-u-ditch-calvary.html | /2021/04/harga-u-ditch-calvary.html | 301 |
| 3 | /2021/04/harga-u-ditch-precast-jakarta.html | /2021/04/harga-u-ditch-jakarta.html | 301 |
| 4 | /2021/04/harga-u-ditch-terbaru.html | /2021/04/harga-u-ditch.html | 301 |

CATATAN: 
- Hati-hati dengan duplikasi harga-u-ditch-60x60.html dan harga-u-ditch-60-x-60.html
- Pilih satu master untuk ukuran yang sama
*/
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsProdukSaluranKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsProdukSaluranKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsProdukSaluranKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsProdukSaluranKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsProdukSaluranKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlProdukSaluranKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

			/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */
/*
(async function runHybridDateModified() {
  try {
    // --- Loader JS eksternal dengan Promise ---
    function loadExternalJSAsync(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve(src);
        s.onerror = () => reject(new Error("Gagal load " + src));
        document.head.appendChild(s);
      });
    }

  // ✅ Anti Spam GitHack (session based)
  async function loadEvergreenScript() {
    const KEY = "evergreenScriptLoaded";

    const needReload =
      !sessionStorage.getItem(KEY) ||     // belum pernah load di tab
      !window.AEDMetaDates ||             // variable hilang
      !window.detectEvergreenReady;       // marker tidak ada

    if (!needReload) {
      console.log("⚡ detect-evergreen.js sudah aktif — SKIP download");
    } else {
      console.log("⏳ load detect-evergreen.js dari GitHack…");

      try {
        await loadExternalJSAsync(
          "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
        );

        window.detectEvergreenReady = true;
        sessionStorage.setItem(KEY, "true");

        console.log("✅ detect-evergreen.js LOADED");
      } catch (err) {
        console.error("❌ Gagal load detect-evergreen.js", err);
        sessionStorage.removeItem(KEY);
      }
    }

    // ✅ Jalankan ALWAYS: detection tiap page
    if (typeof window.runEvergreenCheck === "function") {
      console.log("🔁 Running evergreen check for this page...");
      window.runEvergreenCheck(); 
    } else {
      console.warn("⚠️ runEvergreenCheck tidak ditemukan!");
    }
  }
    // --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
      urlMappingGorongBeton,
      urlMappingSaluranBeton,
      urlMappingPipaBeton,
      urlMappingBuis,
      urlMappingBoxCulvert,
      urlMappingUditch
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlProdukSaluranKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlProdukSaluranKons}`);
      return;
    }
    // === Tanggal nextUpdate1 global ===
    const globalNextUpdate1 = "2026-02-25T00:00:00.000Z";
    console.log(`🌐 [AutoMeta] Detected produk-saluran-post: ${cleanUrlProdukSaluranKons}`);

    // --- pastikan meta nextUpdate1 ada ---
    let metaNextUpdate1 = document.querySelector('meta[name="nextUpdate1"]');
    if (!metaNextUpdate1) {
      metaNextUpdate1 = document.createElement("meta");
      metaNextUpdate1.setAttribute("name", "nextUpdate1");
      metaNextUpdate1.setAttribute("content", globalNextUpdate1);
      document.head.appendChild(metaNextUpdate1);
      console.log(`🆕 [AutoMeta] Meta nextUpdate1 ditambahkan → ${globalNextUpdate1}`);
    } else {
      console.log("✅ [AutoMeta] Meta nextUpdate1 sudah ada");
    }

    // ✅ Load evergreen JS (anti 429)
    await loadEvergreenScript();

    // --- pastikan AEDMetaDates tersedia ---
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type } = window.AEDMetaDates;

    // Stable Hash
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    const hash = stableHash(cleanUrlProdukSaluranKons);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = finalDate.toISOString();

    // Update meta
    [
      ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
      ['meta[name="dateModified"]', 'name', 'dateModified'],
      ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
    ].forEach(([selector, attr, val]) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, val);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", isoDate);
    });

    // Update global
    window.AEDMetaDates = window.AEDMetaDates || {};
    window.AEDMetaDates = {
      ...window.AEDMetaDates,
      dateModified: isoDate
    };

    console.log("✅ AEDMetaDates updated:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.6] ${cleanUrlProdukSaluranKons} → ${isoDate} | type=${type}`);

    // Update schema
    const schemaEl = document.querySelector('script[data-schema="evergreen-maintenance"]');
    if (schemaEl) {
      try {
        const data = JSON.parse(schemaEl.textContent.trim());
        data.dateModified = isoDate;
        if (data.maintenanceSchedule) data.maintenanceSchedule.scheduledTime = nextUpdate;
        schemaEl.textContent = JSON.stringify(data, null, 2);
        console.log(`🔄 Schema maintenance diperbarui → ${isoDate}`);
      } catch (err) {
        console.error("❌ Gagal update schema:", err);
      }
    }

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();
*/

	 // --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
      urlMappingGorongBeton,
      urlMappingSaluranBeton,
      urlMappingPipaBeton,
      urlMappingBuis,
      urlMappingBoxCulvert,
      urlMappingUditch
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlProdukSaluranKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlProdukSaluranKons}`);
      return;
    }

	(async function runHybridDateModified() {
		  try {
		
		    function loadExternalJS(src) {
		      return new Promise((resolve) => {
		        if (document.querySelector(`script[src="${src}"]`)) {
		          resolve();
		          return;
		        }
		
		        const s = document.createElement("script");
		        s.src = src;
		        s.defer = true; // 🔥 PENTING
		        s.onload = resolve;
		        s.onerror = () => {
		          console.warn("[Evergreen] Gagal load:", src);
		          resolve(); // ❗ jangan reject
		        };
		        document.head.appendChild(s);
		      });
		    }
		
		    function waitForDetectEvergreen() {
		      return new Promise((resolve) => {
		        if (
		          window.__detectEvergreenReady &&
		          typeof window.detectEvergreen === "function"
		        ) {
		          resolve(true);
		        } else {
		          window.addEventListener(
		            "detectEvergreenReady",
		            () => resolve(true),
		            { once: true }
		          );
		        }
		      });
		    }
		
		    async function loadEvergreenScript(manualDate = null) {
		
		      if (typeof window.detectEvergreen !== "function") {
		        console.log("⏳ Loading detectEvergreen...");
		
		        await loadExternalJS(
		          "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
		        );
		
		        await waitForDetectEvergreen();
		        console.log("✅ detectEvergreen READY");
		      } else {
		        console.log("⚡ detectEvergreen already available");
		      }
		
		      const config = manualDate
		        ? { customDateModified: manualDate }
		        : {};
		
		      console.log("🧠 detectEvergreen config:", config);
		
		      try {
		        window.detectEvergreen(config);
		      } catch (e) {
		        console.error("[Evergreen] Execution failed:", e);
		      }
		    }
		
		    // =============================
		    // MODE PEMANGGILAN
		    // =============================
		
		    // ✔ MANUAL (ONCE UPDATE EVERGREEN)
		    await loadEvergreenScript("2026-01-30T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();
    var ProdukKonsSaluranPost = document.getElementById("ProdukKonsSaluranPost");
    if (!ProdukKonsSaluranPost) {
        console.error("elemen Id ProdukKonsSaluranPost kondisi terhapus");
        return;
    }
     
     // Menemukan elemen menggunakan Id
     var ProdukKonstruksiSaluranLink = document.getElementById("ProdukKonstruksiSaluran");
     var ProdukSaluranLink = document.getElementById("ProdukSaluran");
     var ProdukBuisLink = document.getElementById("ProdukBuis");
     var ProdukBoxCulvertLink = document.getElementById("ProdukBoxCulvert");
     var ProdukUditchLink = document.getElementById("ProdukUditch");
     var ProdukGorongBetonLink = document.getElementById("ProdukGorongBeton");
     var ProdukSaluranBetonLink = document.getElementById("ProdukSaluranBeton");
     var ProdukPipaBetonLink = document.getElementById("ProdukPipaBeton");
	
	
	  var pageNameProdukSaluran = document.getElementById("pageNameProdukSaluran");
    

     // Default untuk menyembunyikan elemen
     ProdukKonstruksiSaluranLink.style.visibility = 'hidden';
     ProdukSaluranLink.style.visibility = 'hidden';
     ProdukBuisLink.style.visibility = 'hidden';
     ProdukBoxCulvertLink.style.visibility = 'hidden';
     ProdukUditchLink.style.visibility = 'hidden';
     ProdukGorongBetonLink.style.visibility = 'hidden';
	 ProdukSaluranBetonLink.style.visibility = 'hidden';
	 ProdukPipaBetonLink.style.visibility = 'hidden';
     pageNameProdukSaluran.textContent = "";

    if (urlMappingBuis[cleanUrlProdukSaluranKons]) {
        restoreCondition('ProdukKonsSaluranPost');
        restoreCondition('ProdukBuis');
     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
     //hapus elemen saluran lain
        removeCondition('ProdukUditch');
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukGorongBeton');
        removeCondition('ProdukSaluranBeton');
        removeCondition('ProdukPipaBeton');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingBuis[cleanUrlProdukSaluranKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBuis[cleanUrlProdukSaluranKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Produk Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/produk-konstruksi.html"
               },
             {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Produk Saluran & Drainase",
                   "item": "https://www.betonjayareadymix.com/p/produk-saluran-drainase.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Buis Beton Precast",
                   "item": "https://www.betonjayareadymix.com/p/buis-beton-precast.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBuis[cleanUrlProdukSaluranKons],
                   "item": cleanUrlProdukSaluranKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingBoxCulvert[cleanUrlProdukSaluranKons]) {
        restoreCondition('ProdukKonsSaluranPost');
        restoreCondition('ProdukBoxCulvert');
     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
     //hapus elemen saluran lain
        removeCondition('ProdukUditch');
        removeCondition('ProdukBuis');
        removeCondition('ProdukGorongBeton');
        removeCondition('ProdukSaluranBeton');
        removeCondition('ProdukPipaBeton');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukBoxCulvertLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingBoxCulvert[cleanUrlProdukSaluranKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBoxCulvert[cleanUrlProdukSaluranKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Produk Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/produk-konstruksi.html"
               },
             {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Produk Saluran & Drainase",
                   "item": "https://www.betonjayareadymix.com/p/produk-saluran-drainase.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Box Culvert Beton Precast",
                   "item": "https://www.betonjayareadymix.com/p/box-culvert-beton-precast.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBoxCulvert[cleanUrlProdukSaluranKons],
                   "item": cleanUrlProdukSaluranKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   if (urlMappingUditch[cleanUrlProdukSaluranKons]) {
        restoreCondition('ProdukKonsSaluranPost');
        restoreCondition('ProdukUditch');
	   
     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');        
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
     //hapus elemen saluran lain
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukBuis');
        removeCondition('ProdukGorongBeton');
        removeCondition('ProdukSaluranBeton');
        removeCondition('ProdukPipaBeton');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukUditchLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingUditch[cleanUrlProdukSaluranKons];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingUditch[cleanUrlProdukSaluranKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Produk Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/produk-konstruksi.html"
               },
             {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Produk Saluran & Drainase",
                   "item": "https://www.betonjayareadymix.com/p/produk-saluran-drainase.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "U ditch Tutup Beton Precast",
                   "item": "https://www.betonjayareadymix.com/p/u-ditch-tutup-beton-precast.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingUditch[cleanUrlProdukSaluranKons],
                   "item": cleanUrlProdukSaluranKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);

   }
    if (urlMappingGorongBeton[cleanUrlProdukSaluranKons]) {
        restoreCondition('ProdukKonsSaluranPost');
        restoreCondition('ProdukGorongBeton');
	    
     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
     
     //hapus elemen saluran lain
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukBuis');
        removeCondition('ProdukUditch');
        removeCondition('ProdukSaluranBeton');
        removeCondition('ProdukPipaBeton');
		
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukGorongBetonLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingGorongBeton[cleanUrlProdukSaluranKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingGorongBeton[cleanUrlProdukSaluranKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Produk Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/produk-konstruksi.html"
               },
             {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Produk Saluran & Drainase",
                   "item": "https://www.betonjayareadymix.com/p/produk-saluran-drainase.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Gorong gorong Beton",
                   "item": "https://www.betonjayareadymix.com/p/gorong-gorong-beton.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingGorongBeton[cleanUrlProdukSaluranKons],
                   "item": cleanUrlProdukSaluranKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 
    if (urlMappingSaluranBeton[cleanUrlProdukSaluranKons]) {
        restoreCondition('ProdukKonsSaluranPost');
        restoreCondition('ProdukSaluranBeton');
	    
     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
     
     //hapus elemen saluran lain
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukBuis');
        removeCondition('ProdukUditch');
        removeCondition('ProdukGorongBeton');
        removeCondition('ProdukPipaBeton');
		
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukSaluranBetonLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingSaluranBeton[cleanUrlProdukSaluranKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSaluranBeton[cleanUrlProdukSaluranKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Produk Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/produk-konstruksi.html"
               },
             {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Produk Saluran & Drainase",
                   "item": "https://www.betonjayareadymix.com/p/produk-saluran-drainase.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Saluran Beton",
                   "item": "https://www.betonjayareadymix.com/p/saluran-beton.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingSaluranBeton[cleanUrlProdukSaluranKons],
                   "item": cleanUrlProdukSaluranKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
    if (urlMappingPipaBeton[cleanUrlProdukSaluranKons]) {
        restoreCondition('ProdukKonsSaluranPost');
        restoreCondition('ProdukPipaBeton');
	    
     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
     
     //hapus elemen saluran lain
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukBuis');
        removeCondition('ProdukUditch');
        removeCondition('ProdukGorongBeton');
        removeCondition('ProdukSaluranBeton');
		
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukPipaBetonLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingPipaBeton[cleanUrlProdukSaluranKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPipaBeton[cleanUrlProdukSaluranKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Produk Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/produk-konstruksi.html"
               },
             {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Produk Saluran & Drainase",
                   "item": "https://www.betonjayareadymix.com/p/produk-saluran-drainase.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Pipa Beton",
                   "item": "https://www.betonjayareadymix.com/p/pipa-beton.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingPipaBeton[cleanUrlProdukSaluranKons],
                   "item": cleanUrlProdukSaluranKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   });
