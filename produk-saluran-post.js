
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
  // [MONEY_MASTER] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/harga-gorong-gorong-beton.html": "Harga Gorong Gorong Beton [MASTER]",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-jakarta.html": "Gorong Gorong Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-bogor.html": "Gorong Gorong Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-depok.html": "Gorong Gorong Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-tangerang.html": "Gorong Gorong Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-bekasi.html": "Gorong Gorong Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-karawang.html": "Gorong Gorong Beton Karawang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - SARAN ITEM (PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/arti-gorong-gorong-beton.html": "Arti Gorong Gorong Beton",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2022/02/fungsi-gorong-gorong-beton.html": "Fungsi Gorong Gorong Beton",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2022/02/kelebihan-gorong-gorong-beton.html": "Kelebihan Gorong Gorong Beton",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2022/02/ukuran-gorong-gorong-beton.html": "Ukuran Gorong Gorong Beton",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2022/02/panduan-memilih-gorong-gorong-beton.html": "Panduan Memilih Gorong Gorong Beton",  // TYPE: SUB1
};

// ============================================================
// SALURAN BETON POST - BLOG
// ============================================================
// CATATAN REVISI:
// 1. Cluster ini masih kecil, perlu pengembangan konten
// 2. Bedakan dengan U Ditch (saluran terbuka) dan Box Culvert (persegi tertutup)
// 3. Saluran Beton lebih ke produk saluran beton pracetak secara umum
// ============================================================

const urlMappingSaluranBeton = {
  // ============================================================
  // [MONEY_MASTER] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/harga-saluran-beton.html": "Harga Saluran Beton [MASTER]",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-jakarta.html": "Saluran Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-bogor.html": "Saluran Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-depok.html": "Saluran Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-tangerang.html": "Saluran Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-bekasi.html": "Saluran Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/saluran-beton-karawang.html": "Saluran Beton Karawang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/arti-saluran-beton.html": "Arti Saluran Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/kegunaan-saluran-beton.html": "Kegunaan Saluran Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/kelebihan-saluran-beton.html": "Kelebihan Saluran Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/kekurangan-saluran-beton.html": "Kekurangan Saluran Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/ukuran-saluran-beton.html": "Ukuran Saluran Beton",  // TYPE: SUB2
  
  // ============================================================
  // [SUB2] - JUAL (TRANSACTIONAL) - SUDAH ADA
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/jual-saluran-beton.html": "Jual Saluran Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB2] - SARAN ITEM (PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-40x40.html": "Saluran Beton 40x40",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-50x50.html": "Saluran Beton 50x50",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/2022/02/saluran-beton-terbuka.html": "Saluran Beton Terbuka",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2022/02/panduan-memilih-saluran-beton.html": "Panduan Memilih Saluran Beton",  // TYPE: SUB1
};

// ============================================================
// PIPA BETON POST - BLOG
// ============================================================

const urlMappingPipaBeton = {
  // ============================================================
  // [MONEY_MASTER] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton.html": "Harga Pipa Beton [MASTER]",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-precast.html": "Harga Pipa Beton Precast",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-jakarta.html": "Harga Pipa Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-bogor.html": "Harga Pipa Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-depok.html": "Harga Pipa Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-tangerang.html": "Harga Pipa Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-bekasi.html": "Harga Pipa Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-karawang.html": "Harga Pipa Beton Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-bandung.html": "Harga Pipa Beton Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-purwakarta.html": "Harga Pipa Beton Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-surabaya.html": "Harga Pipa Beton Surabaya",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - PER BRAND (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-scg.html": "Harga Pipa Beton SCG",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-jakarta.html": "Pipa Beton SCG Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-bogor.html": "Pipa Beton SCG Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-depok.html": "Pipa Beton SCG Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-tangerang.html": "Pipa Beton SCG Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-bekasi.html": "Pipa Beton SCG Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-karawang.html": "Pipa Beton SCG Karawang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION)
  // ============================================================
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-precast.html": "Pipa Beton Precast",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-cor.html": "Pipa Beton Cor",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-drainase.html": "Pipa Beton Drainase",  // TYPE: SUB2
  
  // [SUB2] - UKURAN & SPESIFIKASI
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-150-mm.html": "Ukuran Pipa Beton 150 mm",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-200-mm.html": "Ukuran Pipa Beton 200 mm",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-300-mm.html": "Ukuran Pipa Beton 300 mm",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-400-mm.html": "Ukuran Pipa Beton 400 mm",  // TYPE: VARIANT
  
  // [SUB2] - LOKASI (INFORMASIONAL)
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-jakarta.html": "Pipa Beton Jakarta",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-bogor.html": "Pipa Beton Bogor",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-depok.html": "Pipa Beton Depok",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-tangerang.html": "Pipa Beton Tangerang",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-bekasi.html": "Pipa Beton Bekasi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-karawang.html": "Pipa Beton Karawang",  // TYPE: SUB2
  
  // ============================================================
  // [SUB1] - SARAN ITEM (PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2022/02/cara-memilih-pipa-beton.html": "Cara Memilih Pipa Beton",  // TYPE: SUB1
};

// ============================================================
// BUIS BETON POST - BLOG
// ============================================================

const urlMappingBuis = {
  // ============================================================
  // [MONEY_MASTER] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton.html": "Harga Buis Beton [MASTER]",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - HARGA PER UKURAN (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-30-cm.html": "Harga Buis Beton Diameter 30 CM",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-40-cm.html": "Harga Buis Beton Diameter 40 CM",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-50-cm.html": "Harga Buis Beton Diameter 50 CM",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-60-cm.html": "Harga Buis Beton Diameter 60 CM",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-80-cm.html": "Harga Buis Beton Diameter 80 CM",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-100-cm.html": "Harga Buis Beton Diameter 100 CM",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-150-cm.html": "Harga Buis Beton Diameter 150 CM",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA PER JENIS (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bertulang.html": "Harga Buis Beton Bertulang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bulat.html": "Harga Buis Beton Bulat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-kotak.html": "Harga Buis Beton Kotak",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-jakarta.html": "Harga Buis Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bogor.html": "Harga Buis Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-depok.html": "Harga Buis Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-tangerang.html": "Harga Buis Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bekasi.html": "Harga Buis Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bandung.html": "Harga Buis Beton Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-karawang.html": "Harga Buis Beton Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-surabaya.html": "Harga Buis Beton Surabaya",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/buis-beton-precon.html": "Buis Beton Precon",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/03/buis-beton-asiacon.html": "Buis Beton Asiacon",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/03/buis-beton-dusaspun.html": "Buis Beton Dusaspun",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/03/buis-beton-scg.html": "Buis Beton SCG",  // TYPE: SUB2
  
  // [SUB2] - JENIS & BENTUK
  "https://www.betonjayareadymix.com/2021/03/buis-beton-bulat.html": "Buis Beton Bulat",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/03/buis-beton-kotak.html": "Buis Beton Kotak",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/03/buis-beton-bertulang.html": "Buis Beton Bertulang",  // TYPE: SUB2
  
  // [SUB2] - APLIKASI SPESIFIK
  "https://www.betonjayareadymix.com/2021/03/buis-beton-septic-tank.html": "Buis Beton Septic Tank",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/03/buis-beton-sumur-resapan.html": "Buis Beton Sumur Resapan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/03/buis-beton-gorong-gorong.html": "Buis Beton Gorong Gorong",  // TYPE: SUB2
  
  // ============================================================
  // [SUB1] - SUB-PILLAR TIPE 1 (BRIDGE KE MONEY)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/buis-beton-untuk-sumur.html": "Buis Beton Untuk Sumur",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2021/03/buis-beton-untuk-septic-tank.html": "Buis Beton Untuk Septic Tank",  // TYPE: SUB1
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI (PERLU 301 REDIRECT)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-murah.html": "Harga Buis Beton Murah",  // TYPE: REDIRECT (ke master)
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-termurah.html": "Harga Buis Beton Termurah",  // TYPE: REDIRECT (ke master)
};

// ============================================================
// BOX CULVERT POST - BLOG
// ============================================================

const urlMappingBoxCulvert = {
  // ============================================================
  // [MONEY_MASTER] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-beton-precast.html": "Harga Box Culvert Beton Precast [MASTER]",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - HARGA PER UKURAN (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-40x40.html": "Harga Box Culvert 40x40",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-50x50.html": "Harga Box Culvert 50x50",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-60x60.html": "Harga Box Culvert 60x60",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-80x80x100.html": "Harga Box Culvert 80x80x100",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-100x100x100.html": "Harga Box Culvert 100x100x100",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-150x150.html": "Harga Box Culvert 150x150",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-200x200.html": "Harga Box Culvert 200x200",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-300x300.html": "Harga Box Culvert 300x300",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-jakarta.html": "Harga Box Culvert Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bogor.html": "Harga Box Culvert Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-depok.html": "Harga Box Culvert Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-tangerang.html": "Harga Box Culvert Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bekasi.html": "Harga Box Culvert Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bandung.html": "Harga Box Culvert Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-surabaya.html": "Harga Box Culvert Surabaya",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/box-culvert-adalah.html": "Box Culvert Adalah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/04/kegunaan-box-culvert.html": "Kegunaan Box Culvert",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/04/kelebihan-box-culvert.html": "Kelebihan Box Culvert",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/04/ukuran-box-culvert-precast.html": "Ukuran Box Culvert Precast",  // TYPE: SUB2
  
  // [SUB2] - BRAND & MANUFAKTUR
  "https://www.betonjayareadymix.com/2021/04/box-culvert-dusaspun.html": "Box Culvert Dusaspun",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/04/box-culvert-wika-beton.html": "Box Culvert Wika Beton",  // TYPE: SUB2
  
  // ============================================================
  // [SUB1] - SUB-PILLAR TIPE 1 (BRIDGE KE MONEY)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/saluran-box-culvert.html": "Saluran Box Culvert",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2021/04/box-culvert-jalan-tol.html": "Box Culvert Jalan Tol",  // TYPE: SUB1
};

// ============================================================
// U DITCH POST - BLOG
// ============================================================

const urlMappingUditch = {
  // ============================================================
  // [MONEY_MASTER] - MASTER HARGA (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch.html": "Harga U Ditch [MASTER]",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - HARGA PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-jakarta.html": "Harga U Ditch Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-bogor.html": "Harga U Ditch Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-depok.html": "Harga U Ditch Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-tangerang.html": "Harga U Ditch Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-bekasi.html": "Harga U Ditch Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-bandung.html": "Harga U Ditch Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-karawang.html": "Harga U Ditch Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-surabaya.html": "Harga U Ditch Surabaya",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (COMMERCIAL INVESTIGATION)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/fungsi-u-ditch.html": "Fungsi U Ditch",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/04/u-ditch-precast.html": "U Ditch Precast",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/04/ukuran-u-ditch-beton.html": "Ukuran U Ditch Beton",  // TYPE: SUB2
  
  // [SUB2] - BRAND & MANUFAKTUR
  "https://www.betonjayareadymix.com/2021/04/u-ditch-dusaspun.html": "U Ditch Dusaspun",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/04/u-ditch-scg.html": "U Ditch SCG",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/04/u-ditch-wika-beton.html": "U Ditch Wika Beton",  // TYPE: SUB2
  
  // [SUB2] - UKURAN SPESIFIK
  "https://www.betonjayareadymix.com/2021/04/u-ditch-40x40x120.html": "U Ditch 40x40x120",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2021/04/u-ditch-60x60.html": "U Ditch 60x60",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2021/04/u-ditch-80x80.html": "U Ditch 80x80",  // TYPE: VARIANT
  
  // [SUB2] - TUTUP U DITCH (COVER)
  "https://www.betonjayareadymix.com/2021/04/harga-cover-tutup-u-ditch.html": "Harga Cover Tutup U Ditch",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2021/04/ukuran-cover-u-ditch.html": "Ukuran Cover U Ditch",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2021/04/jual-tutup-u-ditch.html": "Jual Tutup U Ditch",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB1] - SUB-PILLAR TIPE 1 (BRIDGE KE MONEY)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/04/analisa-pemasangan-u-ditch.html": "Analisa Pemasangan U Ditch",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2021/04/biaya-pemasangan-u-ditch.html": "Biaya Pemasangan U Ditch",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2021/04/saluran-u-ditch-jalan.html": "Saluran U Ditch Jalan",  // TYPE: SUB1
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
