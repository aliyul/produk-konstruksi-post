
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

// ============================================================
// FUNGSI GENERATE BREADCRUMB - VERSI FINAL
// UNTUK SEMUA PILLAR (PRODUK, MATERIAL, JASA, INTERIOR, DLL)
// MAX_LEVEL = 4 (TERMASUK HOME)
// SKIP LEVEL BEKERJA UNTUK PILLAR & SUB2
// ============================================================

function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], pillarType = 'JASA_KONSTRUKSI') {
    
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    // ============================================================
    // 1. VALIDASI PILLAR TYPE
    // ============================================================
    const validPillarTypes = ['PRODUK_KONSTRUKSI', 'MATERIAL_KONSTRUKSI', 'JASA_KONSTRUKSI', 
                               'PRODUK_INTERIOR', 'JASA_DESAIN_INTERIOR'];
    if (!validPillarTypes.includes(pillarType)) {
        console.error(`❌ ERROR: "${pillarType}" BUKAN PILLAR TYPE yang valid!`);
        console.error(`   Gunakan salah satu dari: ${validPillarTypes.join(', ')}`);
        return null;
    }
    
    const pageTitle = mappingObj[currentUrl];
    if (!pageTitle) {
        console.error(`❌ ERROR: URL "${currentUrl}" tidak ditemukan di mapping`);
        return null;
    }
    
    // ============================================================
    // 2. KUMPULKAN SEMUA NAMA HALAMAN DARI MAPPING (UNTUK REFERENSI)
    // ============================================================
    const knownPages = [];
    for (const [url, name] of Object.entries(mappingObj)) {
        if (name && typeof name === 'string') {
            knownPages.push(name.toLowerCase());
        }
    }
    
    // ============================================================
    // 3. DETEKSI TYPE OTOMATIS
    // ============================================================
    function detectPageType(pageName, position, totalLevels) {
        const lowerName = pageName.toLowerCase();
        const parts = pageName.split(' ');
        const lastWord = parts[parts.length - 1].toLowerCase();
        const firstWord = parts[0].toLowerCase();
        const wordCount = parts.length;
        
        // PILLAR: posisi pertama
        if (position === 0) return 'PILLAR';
        
        // MONEY_LEADGEN
        if (lowerName.startsWith('konsultasi')) return 'MONEY_LEADGEN';
        
        // MONEY_MASTER (deteksi transaksi)
        const transactionWords = ['harga', 'sewa', 'jual', 'beli', 'pesan', 'booking', 'order', 'rental',
            'biaya', 'tarif', 'rate', 'cost', 'price', 'fee', 'charge', 'promo', 'diskon', 'obral',
            'gratis', 'voucher', 'cashback', 'cicilan', 'kredit', 'dp', 'angsuran', 'quote', 'penawaran', 'estimasi'];
        
        for (const word of transactionWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'MONEY_MASTER';
            }
        }
        
        // SUB1 (deteksi panduan)
        const guideWords = ['panduan', 'cara', 'tips', 'tutorial', 'langkah', 'petunjuk', 'pedoman', 'instruksi',
            'guide', 'how to', 'step by step', 'strategi', 'metode', 'teknik', 'rahasia', 'kunci sukses',
            'wajib tahu', 'perlu diketahui', 'edukasi', 'belajar', 'mempelajari', 'pemahaman', 'solusi', 'jawaban'];
        
        for (const word of guideWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ')) {
                return 'SUB1';
            }
        }
        
        // VARIANT (deteksi angka atau kata kunci)
        if (/\d/.test(lowerName)) return 'VARIANT';
        
        const variantWords = ['tipe', 'type', 'ukuran', 'model', 'varian', 'warna', 'bentuk', 'seri', 'versi',
            'grade', 'kelas', 'standar', 'jenis', 'macam', 'ragam', 'kategori', 'spesifikasi', 'detail', 'rinci',
            'kapasitas', 'volume', 'berat', 'panjang', 'lebar', 'tinggi', 'tebal', 'diameter', 'radius', 'luas',
            'bahan', 'material', 'komposisi', 'kualitas', 'mutu', 'kode', 'plus', 'minus', 'kelebihan', 'kekurangan',
            'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'putih', 'hitam', 'merah', 'biru', 'hijau',
            'kecil', 'besar', 'sedang', 'mini', 'maxi', 'jumbo', 'extra', 'super'];
        
        for (const word of variantWords) {
            if (lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'VARIANT';
            }
        }
        
        // MONEY_CHILD (deteksi lokasi)
        function isLikelyLocation(word) {
            if (word.length < 3 || word.length > 25) return false;
            if (!/^[a-zA-Z]+$/.test(word)) return false;
            if (word === firstWord) return false;
            
            const notLocationWords = ['mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra',
                'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 'murah', 'mahal', 'hemat',
                'premium', 'standar', 'ekonomis', 'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis',
                'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat'];
            if (notLocationWords.includes(word)) return false;
            
            const isKnownProduct = knownPages.some(known => known === word || (known.includes(word) && word.length > 3));
            if (isKnownProduct) return false;
            
            if (word.length >= 4 && word.length <= 12) return true;
            if (/[aiueo]$/.test(word) && word.length >= 4) return true;
            
            const locationPatterns = ['ang', 'ung', 'eng', 'ong', 'an', 'in', 'un', 'en', 
                'ap', 'ip', 'op', 'ar', 'ur', 'er', 'or', 'karta', 'jaya', 'pura', 'sari', 'mulya', 'agung', 'asih', 'ayem'];
            for (const pattern of locationPatterns) {
                if (word.endsWith(pattern) && word.length >= 4) return true;
            }
            
            if (word.length >= 5 && /[aiueo].*[aiueo]/.test(word)) return true;
            return false;
        }
        
        if (wordCount >= 2 && isLikelyLocation(lastWord)) return 'MONEY_CHILD';
        
        return 'SUB2';
    }
    
    // ============================================================
    // 4. FUNGSI BANTUAN
    // ============================================================
    function generateIdFromName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '') + 'Post';
    }
    
    // ============================================================
    // 5. BANGUN LEVELS DARI ARRAY OBJECT (NAMA + URL)
    // ============================================================
    const allLevels = [];
    for (let i = 0; i < breadcrumbItems.length; i++) {
        const item = breadcrumbItems[i];
        const name = typeof item === 'string' ? item : item.name;
        const url = typeof item === 'string' ? null : item.url;
        
        allLevels.push({
            name: name,
            url: url,
            type: detectPageType(name, i, breadcrumbItems.length),
            id: generateIdFromName(name),
            position: i
        });
    }
    
    // ============================================================
    // 6. VALIDASI & FALLBACK URL
    // ============================================================
    for (const level of allLevels) {
        if (!level.url) {
            let foundUrl = null;
            for (const [url, name] of Object.entries(mappingObj)) {
                if (name === level.name) {
                    foundUrl = url.startsWith('http') ? url : DOMAIN + url;
                    break;
                }
            }
            if (!foundUrl) {
                const slug = level.name.toLowerCase().replace(/ /g, '-');
                foundUrl = `${DOMAIN}/p/${slug}.html`;
            }
            level.url = foundUrl;
        } else if (!level.url.startsWith('http')) {
            level.url = DOMAIN + level.url;
        }
    }
    
    // ============================================================
    // 7. TENTUKAN LEVEL YANG AKAN DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Level 1: Home (WAJIB)
    selectedLevels.push({ name: 'BJR', url: DOMAIN, isHome: true });
    
    // Hitung slot tersisa (MAX_LEVEL - 1 untuk home - 1 untuk halaman saat ini)
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator - SEO Tercanggih`);
    console.log(`📊 Max level: ${MAX_LEVEL}, slot untuk parent: ${remainingSlots}`);
    console.log(`📊 Breadcrumb items: ${allLevels.map(l => l.name).join(' → ')}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (level terakhir) - WAJIB tampil
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Level lainnya (dari awal sampai sebelum parent terdekat)
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)].reverse();
    const canSkipTypes = ['PILLAR', 'SUB2'];
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - tidak ada slot tersisa`);
            continue;
        }
        
        if (canSkipTypes.includes(level.type)) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - type boleh skip`);
            continue;
        }
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    selectedLevels.push({
        name: pageTitle,
        url: currentFullUrl,
        isCurrent: true
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => l.name).join(' → ')}`);
    
    // ============================================================
    // 8. GENERATE HTML BREADCRUMB
    // ============================================================
    let breadcrumbHtml = `<div class="breadcrumbs">\n<span>\n`;
    breadcrumbHtml += `<a href="${DOMAIN}/" itemprop="item" title="Beton Jaya Readymix">`;
    breadcrumbHtml += `<meta content="1" itemprop="position">`;
    breadcrumbHtml += `<span itemprop="name">BJR</span></a>\n`;
    breadcrumbHtml += `</span>\n &nbsp;›&nbsp;\n\n`;
    breadcrumbHtml += `<span>\n<div id="breadcrumbContainer" style="display: inline;">\n`;
    
    for (let i = 1; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        const isLast = (i === selectedLevels.length - 1);
        
        if (!isLast) {
            breadcrumbHtml += `<a href="${level.url}" id="${level.id}" title="${level.name.toUpperCase()}" style="visibility: visible;">`;
            breadcrumbHtml += `<span id="${level.id}Name">${level.name}</span>&nbsp;›&nbsp;\n`;
            breadcrumbHtml += `</a>\n`;
        } else {
            breadcrumbHtml += `<span id="pageNameBreadcrumb">${level.name}</span>\n`;
        }
    }
    
    breadcrumbHtml += `</div>\n</span>\n</div>`;
    
    // ============================================================
    // 9. GENERATE JSON-LD SCHEMA
    // ============================================================
    const jsonLdItems = [];
    jsonLdItems.push({ "@type": "ListItem", "position": 1, "name": "Beton Jaya Readymix", "item": DOMAIN });
    
    for (let i = 1; i < selectedLevels.length; i++) {
        jsonLdItems.push({
            "@type": "ListItem",
            "position": i + 1,
            "name": selectedLevels[i].name,
            "item": selectedLevels[i].url
        });
    }
    
    // ============================================================
    // 10. HAPUS BREADCRUMB LAMA & INJECT YANG BARU
    // ============================================================
    // Hapus semua breadcrumb lama (manual)
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    // Hapus JSON-LD lama
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    // Inject HTML breadcrumb baru
    const mainContent = document.querySelector('main, article, .content, #main-content, .post-content');
    if (mainContent?.firstChild) {
        mainContent.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }
    
    // Inject JSON-LD baru
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    });
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected ke DOM`);
    return breadcrumbHtml;
}
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
