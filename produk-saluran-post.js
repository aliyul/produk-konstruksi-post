
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

/**
 * ============================================================
 * generateBreadcrumbJasaKonstruksi v12.1
 * FIXED: PARENT TERDEKAT TIDAK PERNAH DI-SKIP (v12.1)
 * FIXED: PILLAR HANYA NAMA YANG SUDAH DITENTUKAN
 * FIXED: SUB-PILLAR-2 & SUB-PILLAR-1 TIDAK JADI MM/MP
 * FIXED: HIERARCHY WAJIB: PILLAR → SP2 → SP1 → MM → MP → MC → VARIANT
 * ============================================================
 *
 * ✅ UPDATE v12.1
 * ------------------------------------------------------------
 * - FIX: Parent terdekat TIDAK PERNAH di-skip (MAIN FIX)
 * - FIX: Hierarchy validator TIDAK menghapus item karena gap
 * - FIX: Force inject TIDAK override dengan entity pillar
 * - FIX: Scoring ditingkatkan untuk parent langsung
 * - FIX: Semua top-level parents diambil (bukan hanya 1)
 *
 * ============================================================
 * @version 12.1.0
 * @date 2026-08-23
 * ============================================================
 */

function generateBreadcrumbProdukSaluranPost(
    mappingObj,
    currentUrl,
    breadcrumbItems = [],
    entityType = 'PRODUK_KONSTRUKSI'
) {

    // ============================================================
    // 1. GLOBAL CONFIG
    // ============================================================

    const CONFIG = {
        DOMAIN: 'https://www.betonjayareadymix.com',
        DEBUG: true,
        CURRENT_YEAR: new Date().getFullYear()
    };

    // ============================================================
    // 2. LOGGER
    // ============================================================

    function log(message, type = 'INFO') {
        if (!CONFIG.DEBUG && type === 'INFO') return;
        const icons = { 
            INFO: '📘', 
            SUCCESS: '✅', 
            WARN: '⚠️', 
            ERROR: '❌', 
            DEBUG: '🔍', 
            VARIANT: '🔬', 
            PARENT: '👪', 
            URL: '🔗',
            SCORE: '🎯',
            CLEAN: '🧹',
            SKIP: '⏭️',
            PLD: '🔄',
            HIERARCHY: '🏛️'
        };
        console.log(`${icons[type] || '📘'} [Breadcrumb v12.1] ${message}`);
    }

    // ============================================================
    // 3. ENTITY NORMALIZATION
    // ============================================================

    const ENTITY_TYPE_MAP = {
        'JASA': 'JASA_KONSTRUKSI',
        'JASA_KONSTRUKSI': 'JASA_KONSTRUKSI',
        'JASA_DESAIN': 'JASA_DESAIN',
        'JASA_INTERIOR': 'JASA_KONSTRUKSI',
        'JASA_DESAIN_INTERIOR': 'JASA_DESAIN',
        'SEWA': 'SEWA_ALAT_KONSTRUKSI',
        'RENTAL': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_ALAT': 'SEWA_ALAT_KONSTRUKSI',
        'RENTAL_ALAT': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_RENTAL': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_ALAT_KONSTRUKSI': 'SEWA_ALAT_KONSTRUKSI',
        'PRODUK': 'PRODUK_KONSTRUKSI',
        'PRODUK_KONSTRUKSI': 'PRODUK_KONSTRUKSI',
        'PRODUK_INTERIOR': 'PRODUK_INTERIOR',
        'MATERIAL': 'MATERIAL_KONSTRUKSI',
        'MATERIAL_KONSTRUKSI': 'MATERIAL_KONSTRUKSI',
        'ARTIKEL': 'ARTIKEL'
    };

    entityType = ENTITY_TYPE_MAP[entityType] || entityType;

    // ============================================================
    // 4. VALID ENTITY TYPES
    // ============================================================

    const VALID_ENTITY_TYPES = [
        'JASA_KONSTRUKSI',
        'JASA_DESAIN',
        'SEWA_ALAT_KONSTRUKSI',
        'PRODUK_KONSTRUKSI',
        'PRODUK_INTERIOR',
        'MATERIAL_KONSTRUKSI',
        'ARTIKEL'
    ];

    // ============================================================
    // 5. VALID LEVELS
    // ============================================================

    const VALID_LEVELS = [
        'home', 'pillar', 'sub-pillar-tipe-2', 'sub-pillar-tipe-1',
        'money-master', 'money-page', 'money-child', 'variant', 'sub-variant'
    ];

    // ============================================================
    // 6. HIERARCHY ORDER (WAJIB - TIDAK BOLEH DIUBAH)
    // ============================================================

    const HIERARCHY_ORDER = [
        'home',
        'pillar',
        'sub-pillar-tipe-2',
        'sub-pillar-tipe-1',
        'money-master',
        'money-page',
        'money-child',
        'variant',
        'sub-variant'
    ];

    const TYPE_LEVEL_MAP = {
        'home': 0,
        'pillar': 1,
        'sub-pillar-tipe-2': 2,
        'sub-pillar-tipe-1': 3,
        'money-master': 4,
        'money-page': 5,
        'money-child': 6,
        'variant': 7,
        'sub-variant': 8
    };

    // ============================================================
    // 7. ENTITY PILLAR NAMES (HANYA INI YANG BISA JADI PILLAR)
    // ============================================================

    const ENTITY_PILLAR_NAMES = {
        'JASA_KONSTRUKSI': ['jasa konstruksi'],
        'JASA_DESAIN': ['jasa desain interior'],
        'SEWA_ALAT_KONSTRUKSI': ['sewa alat konstruksi', 'rental alat konstruksi'],
        'PRODUK_KONSTRUKSI': ['produk konstruksi'],
        'PRODUK_INTERIOR': ['produk interior', 'interior produk'],
        'MATERIAL_KONSTRUKSI': ['material konstruksi', 'bahan konstruksi'],
        'ARTIKEL': ['artikel konstruksi', 'blog konstruksi', 'tips konstruksi']
    };

    // ============================================================
    // 8. PLD ENTITY MAP
    // ============================================================

    const PLD_ENTITY_MAP = {
        'produk': 'PRODUK_KONSTRUKSI',
        'material': 'MATERIAL_KONSTRUKSI',
        'jasa': 'JASA_KONSTRUKSI',
        'desain': 'JASA_DESAIN',
        'sewa': 'SEWA_ALAT_KONSTRUKSI',
        'artikel': 'ARTIKEL'
    };

    // ============================================================
    // 9. GET PAGE LEVEL FROM PLD
    // ============================================================

    function getPageLevelFromPLD() {
        const pldVersions = [
            'pageLevelDetectorv22',
            'pageLevelDetectorv20', 
            'pageLevelDetectorv19',
            'pageLevelDetectorV18',
            'pageLevelDetectorV17',
            'pageLevelDetector'
        ];
        
        for (const pldName of pldVersions) {
            if (window[pldName] && typeof window[pldName].detect === 'function') {
                try {
                    const level = window[pldName].detect();
                    if (level && VALID_LEVELS.includes(level)) {
                        log(`PLD ${pldName}: "${level}" (${TYPE_LEVEL_MAP[level]})`, 'PLD');
                        return level;
                    }
                } catch(e) {
                    log(`Error calling ${pldName}: ${e.message}`, 'WARN');
                }
            }
        }
        
        const bodyLevel = document.body.getAttribute('data-page-level') || 
                          document.body.getAttribute('data-schema-page-level');
        if (bodyLevel && VALID_LEVELS.includes(bodyLevel)) {
            log(`PLD from body: "${bodyLevel}" (${TYPE_LEVEL_MAP[bodyLevel]})`, 'PLD');
            return bodyLevel;
        }
        
        log('PLD not available, using fallback', 'WARN');
        return null;
    }

    function getEntityTypeFromPLD() {
        const pldVersions = [
            'pageLevelDetectorv22',
            'pageLevelDetectorv20', 
            'pageLevelDetectorv19',
            'pageLevelDetectorV18',
            'pageLevelDetectorV17',
            'pageLevelDetector'
        ];
        
        for (const pldName of pldVersions) {
            if (window[pldName] && typeof window[pldName].detectEntityType === 'function') {
                try {
                    const entity = window[pldName].detectEntityType();
                    if (entity && PLD_ENTITY_MAP[entity]) {
                        log(`PLD Entity: ${entity} → ${PLD_ENTITY_MAP[entity]}`, 'PLD');
                        return PLD_ENTITY_MAP[entity];
                    }
                } catch(e) {
                    log(`Error getting entity from ${pldName}: ${e.message}`, 'WARN');
                }
            }
        }
        
        const bodyEntity = document.body.getAttribute('data-entity-type');
        if (bodyEntity && PLD_ENTITY_MAP[bodyEntity]) {
            log(`Entity from body: ${bodyEntity} → ${PLD_ENTITY_MAP[bodyEntity]}`, 'PLD');
            return PLD_ENTITY_MAP[bodyEntity];
        }
        
        return null;
    }

    // ============================================================
    // 10. HELPERS
    // ============================================================

    function isJasaEntity() { return entityType === 'JASA_KONSTRUKSI'; }
    function isDesainEntity() { return entityType === 'JASA_DESAIN'; }
    function isSewaEntity() { return entityType === 'SEWA_ALAT_KONSTRUKSI'; }
    function isProdukEntity() { return entityType === 'PRODUK_KONSTRUKSI'; }
    function isMaterialEntity() { return entityType === 'MATERIAL_KONSTRUKSI'; }
    function isInteriorEntity() { return entityType === 'PRODUK_INTERIOR'; }

    // ============================================================
    // 11. CLEAN TEXT
    // ============================================================

    function cleanText(text) {
        if (!text) return '';
        return text.replace(/\s+/g, ' ').trim();
    }

    // ============================================================
    // 12. CLEAN PAGE NAME FROM URL
    // ============================================================

    function getCleanPageNameFromUrl(url) {
        if (!url) return '';

        let path = url;
        path = path.replace(/^https?:\/\/[^\/]+/i, '');
        path = path.split('?')[0];
        path = path.replace(/\.(html|php|asp|jsp)$/i, '');
        
        path = path.replace(/\/\d{4}\/\d{2}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\//g, '/');
        
        path = path.replace(/^\/p\//, '/');
        path = path.replace(/\/p\//g, '/');
        
        const parts = path.split('/').filter(Boolean);
        let last = parts.pop() || '';
        
        if (!last && parts.length > 0) {
            last = parts.pop() || '';
        }
        
        last = last.replace(/-/g, ' ');
        last = last.replace(/[^a-z0-9\s]/gi, '');
        
        if (last.length < 3 && parts.length > 0) {
            const lastTwo = parts.slice(-2).join(' ');
            if (lastTwo.length > last.length) {
                last = lastTwo;
            }
        }
        
        const cleanResult = cleanText(last.toLowerCase());
        log(`Cleaned URL: "${url}" → "${cleanResult}"`, 'URL');
        
        return cleanResult;
    }

    // ============================================================
    // 13. SLUGIFY
    // ============================================================

    function slugify(text) {
        return cleanText(text)
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-');
    }

    // ============================================================
    // 14. KEYWORDS
    // ============================================================

    const SP1_KEYWORDS = [
        'vs', 'versus', 'perbandingan', 'lebih baik', 'kelebihan', 'kekurangan'
    ];

    const SP2_KEYWORDS = [
        'jenis', 'kategori', 'daftar', 'macam', 'tipe'
    ];

    const INFORMATIONAL_KEYWORDS = [
        'panduan', 'tutorial', 'cara', 'tips', 'apa itu', 'pengertian'
    ];

    const METHOD_KEYWORDS = ['metode', 'cara', 'tahapan', 'langkah', 'analisa'];

    // ============================================================
    // 15. VARIANT KEYWORDS PER ENTITY
    // ============================================================
    
    const VARIANT_KEYWORDS_PRODUK = [
        'spesifikasi', 'spec', 'detail spesifikasi',
        'mutu', 'kualitas', 'quality',
        'ukuran', 'dimensi',
        'grade', 'type', 'tipe', 'model',
        'standar', 'merk', 'brand', 'seri'
    ];

    const VARIANT_KEYWORDS_JASA = [
        'standar pelayanan', 'sop', 'metode kerja',
        'prosedur', 'tahapan', 'cara kerja',
        'durasi', 'waktu pengerjaan', 'garansi',
        'standar pengerjaan'
    ];

    const VARIANT_KEYWORDS_SEWA = [
        'spesifikasi alat', 'kapasitas alat',
        'spek alat', 'detail alat', 'spesifikasi'
    ];

    const TECHNICAL_SPECS = ['k225', 'k250', 'k300', 'k350', 'k400', 'k500', 'k600', 'fc', 'm6', 'm8', 'm10', 'm12'];
    
    const SPECIFIC_MODIFIERS = [
        'k225', 'k250', 'k300', 'm6', 'm8', 'm10',
        'diesel', 'hidrolik', 'mini pile', 'sheet pile', 'drop hammer',
        'breaker', 'long arm', 'vibrator', 'per jam', 'per hari',
        'per meter', 'per m2', 'terdekat', 'murah', 'kapasitas besar'
    ];

    // ============================================================
    // 16. JASA CLEAN FUNCTION
    // ============================================================

    const JASA_ULTRA_COMMON_WORDS = new Set([
        'jasa', 'kontraktor', 'tukang', 'borongan', 'renovasi',
        'pasang', 'bangun', 'perbaikan', 'instalasi', 'proyek',
        'cor', 'gali', 'urug', 'angkut', 'service', 'servis',
        'desain'
    ]);

    const STOPWORDS = new Set([
        'dan', 'atau', 'serta', 'yang', 'dari', 'ke', 'di', 'untuk', 
        'dengan', 'ini', 'itu', 'akan', 'telah', 'sudah', 'masih',
        'pada', 'oleh', 'karena', 'sehingga', 'setelah', 'sebelum',
        'plus', 'minus', 'tanpa', 'sampai', 'hingga', 'sambil'
    ]);

    const MATERIAL_SPEC_WORDS = new Set([
        'baja ringan', 'baja', 'ringan', 'beton', 'readymix', 
        'kanstin', 'pembatas', 'pengaman', 'struktur', 'dinding',
        'pondasi', 'atap', 'genteng', 'keramik', 'marmer', 'granit',
        'plafon', 'gypsum', 'partisi', 'dak', 'cor', 'pile', 'sheet',
        'tiang', 'balok', 'kolom', 'sloof', 'ring', 'balk', 'kuda-kuda',
        'drainase', 'irigasi', 'box culvert', 'u ditch', 'paving',
        'konstruksi', 'rangka', 'material', 'upah', 'tenaga'
    ]);

    const MODIFIER_WORDS = new Set([
        'murah', 'profesional', 'berkualitas', 'terbaik', 'spesialis',
        'ahli', 'berpengalaman', 'resmi', 'terpercaya', 'ekonomis',
        'cepat', 'tepat', 'garansi', 'kualitas', 'harga', 'biaya',
        'tarif', 'ongkos', 'estimasi', 'perhitungan', 'analisa',
        'modern', 'minimalis', 'mewah', 'klasik', 'tradisional',
        'kontemporer', 'sederhana', 'elegan', 'premium', 'luxury'
    ]);

    function cleanJasaText(text) {
        if (!text) return '';
        
        let cleaned = text.toLowerCase();
        
        for (const kw of JASA_ULTRA_COMMON_WORDS) {
            cleaned = cleaned.replace(new RegExp(`\\b${kw}\\b`, 'g'), ' ');
        }
        
        for (const sw of STOPWORDS) {
            cleaned = cleaned.replace(new RegExp(`\\b${sw}\\b`, 'g'), ' ');
        }
        
        cleaned = cleaned.replace(/\s+/g, ' ').trim();
        
        log(`Clean JASA: "${text}" → "${cleaned}"`, 'CLEAN');
        
        return cleaned;
    }

    function countCoreWords(text) {
        if (!text) return 0;
        const words = text.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
        return words.length;
    }

    function hasModifier(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const mod of MODIFIER_WORDS) {
            if (lower.includes(mod)) return true;
        }
        return false;
    }

    function isSpecificJasa(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        if (/\d/.test(lower)) return true;
        if (/(k225|k250|k300|k350|k400|k500|k600|m6|m8|m10|m12|sn|sni)/i.test(lower)) return true;
        const specWords = ['spesifikasi', 'mutu', 'dimensi', 'ukuran', 'standar', 'grade', 'tipe', 'type'];
        for (const sw of specWords) {
            if (lower.includes(sw)) return true;
        }
        return false;
    }

    function hasMaterialSpec(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const kw of MATERIAL_SPEC_WORDS) {
            if (lower.includes(kw)) return true;
        }
        return false;
    }

    // ============================================================
    // 17. DETEKSI JASA LEVEL OTOMATIS
    // ============================================================

    function detectJasaLevelAuto(pageName) {
        const lowerName = pageName.toLowerCase();
        
        const cleaned = cleanJasaText(lowerName);
        
        const remainingWords = cleaned.split(/\s+/).filter(w => w.length >= 2);
        const wordCount = remainingWords.length;
        
        const hasNumber = /\d/.test(cleaned);
        const hasLocation = isLocation(cleaned);
        const hasModifierWord = hasModifier(cleaned);
        const hasMaterialSpecWord = hasMaterialSpec(cleaned);
        
        log(`Auto detect JASA: "${pageName}" → remaining: "${cleaned}", words: ${wordCount}`, 'DEBUG');
        
        if (wordCount <= 1 && !hasNumber && !hasLocation && !hasModifierWord && !hasMaterialSpecWord) {
            log(`MM detected (auto): "${pageName}" → remaining words: ${wordCount}`, 'SUCCESS');
            return 'money-master';
        }
        
        log(`MP detected (auto): "${pageName}" → remaining words: ${wordCount}`, 'INFO');
        return 'money-page';
    }

    // ============================================================
    // 18. VARIANT DETECTION PER ENTITY
    // ============================================================
    
    function isVariantPage(pageName, currentEntityType) {
        const lowerName = pageName.toLowerCase();
        
        for (const spec of TECHNICAL_SPECS) {
            if (lowerName.includes(spec)) {
                return false;
            }
        }
        
        if (currentEntityType === 'PRODUK_KONSTRUKSI' || currentEntityType === 'MATERIAL_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_PRODUK) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (PRODUK/MATERIAL): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
        }
        
        if (currentEntityType === 'JASA_KONSTRUKSI' || currentEntityType === 'JASA_DESAIN') {
            for (const kw of VARIANT_KEYWORDS_JASA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (JASA/DESAIN): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
            return false;
        }
        
        if (currentEntityType === 'SEWA_ALAT_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_SEWA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (SEWA): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
            if (lowerName.includes('spesifikasi') && (lowerName.includes('alat') || lowerName.includes('excavator') || lowerName.includes('dump') || lowerName.includes('alat berat'))) {
                log(`Variant detected (SEWA): "${pageName}" contains spesifikasi + alat`, 'VARIANT');
                return true;
            }
            return false;
        }
        
        return false;
    }

    // ============================================================
    // 19. LOCATION DETECTION
    // ============================================================

    const LOCATION_WHITELIST = new Set([
        'jakarta', 'jakarta pusat', 'jakarta barat', 'jakarta selatan', 'jakarta timur', 'jakarta utara',
        'bogor', 'kota bogor', 'kabupaten bogor',
        'depok', 'kota depok',
        'tangerang', 'kota tangerang', 'kota tangerang selatan', 'kabupaten tangerang',
        'bekasi', 'kota bekasi', 'kabupaten bekasi',
        'bandung', 'kota bandung', 'kabupaten bandung',
        'karawang', 'kabupaten karawang',
        'purwakarta', 'kabupaten purwakarta',
        'cikarang', 'cikarang barat', 'cikarang pusat', 'cikarang selatan', 'cikarang timur', 'cikarang utara',
        'subang', 'kabupaten subang',
        'cirebon', 'kota cirebon', 'kabupaten cirebon',
        'semarang', 'kota semarang', 'kabupaten semarang',
        'solo', 'surakarta', 'kota surakarta',
        'pekalongan', 'tegal', 'magelang', 'sukoharjo', 'boyolali', 'klaten',
        'jogja', 'yogyakarta', 'kota yogyakarta', 'kabupaten sleman', 'bantul', 'gunungkidul', 'kulon progo',
        'surabaya', 'kota surabaya',
        'malang', 'kota malang', 'kabupaten malang',
        'kediri', 'kota kediri', 'kabupaten kediri',
        'gresik', 'sidoarjo', 'mojokerto', 'pasuruan', 'probolinggo', 'jember', 'banyuwangi', 'madiun',
        'medan', 'kota medan',
        'palembang', 'pekanbaru', 'padang', 'lampung', 'bandar lampung', 'batam', 'tanjungpinang',
        'aceh', 'banda aceh', 'jambi', 'bengkulu', 'pangkal pinang',
        'pontianak', 'balikpapan', 'samarinda', 'banjarmasin', 'palangkaraya',
        'makassar', 'kota makassar',
        'manado', 'palu', 'kendari', 'gorontalo',
        'bali', 'kabupaten badung', 'kota denpasar', 'denpasar', 'gianyar', 'tabanan', 'bangli', 'karangasem', 'klungkung', 'buleleng', 'jembrana',
        'mataram', 'kupang',
        'terdekat'
    ]);

    function isLocation(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const city of LOCATION_WHITELIST) {
            if (new RegExp(`\\b${city.replace(/\s+/g, '\\s+')}\\b`, 'i').test(lower)) {
                return true;
            }
        }
        return false;
    }

    // ============================================================
    // 20. SPECIFIC PRODUCT
    // ============================================================

    function isSpecificProduct(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const mod of SPECIFIC_MODIFIERS) {
            if (lower.includes(mod)) return true;
        }
        return /\d/.test(lower);
    }

    // ============================================================
    // 21. SUB VARIANT
    // ============================================================

    function isSubVariant(text) {
        if (!text) return false;
        let score = 0;
        if ((text.match(/\d+/g) || []).length >= 3) score++;
        if ((text.match(/x/g) || []).length >= 2) score++;
        if (/mm|cm|meter|kg|ton/i.test(text)) score++;
        return score >= 2;
    }

    // ============================================================
    // 22. ENTITY PILLAR EXACT MATCH (FIX v12.0)
    // ============================================================

    function isEntityPillarExactMatch(pageName) {
        const cleanName = cleanText(pageName.toLowerCase());
        const valid = ENTITY_PILLAR_NAMES[entityType] || [];
        return valid.includes(cleanName);
    }

    // ============================================================
    // 23. JASA KEYWORDS
    // ============================================================

    const JASA_KEYWORDS_PATTERN = 
        /\b(jasa|kontraktor|tukang|borongan|renovasi|pasang|bangun|perbaikan|instalasi|proyek|cor|gali|urug|angkut|desain|interior|eksterior|arsitektur|gedung|rumah|ruko|kantor|apartemen)\b/i;

    // ============================================================
    // 24. PAGE TYPE DETECTION (FIX v12.0)
    // ============================================================

    function detectPageTypeFallback(pageName, isHome = false) {
        const lowerName = cleanText(pageName.toLowerCase());

        if (isHome || lowerName === 'home' || lowerName === 'beranda') return 'home';
        
        // 🔥 FIX v12.0: PILLAR hanya nama yang sudah ditentukan
        if (isEntityPillarExactMatch(lowerName)) {
            log(`PILLAR detected (exact match): "${pageName}"`, 'HIERARCHY');
            return 'pillar';
        }
        
        // 🔥 FIX v12.0: Cek apakah ini PILLAR berdasarkan ENTITY_PILLAR_NAMES lain
        for (const [entity, names] of Object.entries(ENTITY_PILLAR_NAMES)) {
            if (names.some(name => lowerName === name)) {
                log(`PILLAR detected (other entity): "${pageName}" → ${entity}`, 'HIERARCHY');
                return 'pillar';
            }
        }
        
        // 🔥 FIX v12.0: SUB-VARIANT
        if (isSubVariant(lowerName)) {
            log(`SUB-VARIANT detected: "${pageName}"`, 'HIERARCHY');
            return 'sub-variant';
        }

        // 🔥 FIX v12.0: VARIANT
        if (isVariantPage(lowerName, entityType)) {
            log(`VARIANT detected: "${pageName}"`, 'HIERARCHY');
            return 'variant';
        }

        // 🔥 FIX v12.0: SUB-PILLAR-1 (perbandingan)
        for (const kw of SP1_KEYWORDS) {
            if (lowerName.includes(kw)) {
                log(`SUB-PILLAR-1 detected: "${pageName}"`, 'HIERARCHY');
                return 'sub-pillar-tipe-1';
            }
        }
        
        // 🔥 FIX v12.0: SUB-PILLAR-2 (daftar/jenis)
        for (const kw of SP2_KEYWORDS) {
            if (lowerName.includes(kw)) {
                log(`SUB-PILLAR-2 detected: "${pageName}"`, 'HIERARCHY');
                return 'sub-pillar-tipe-2';
            }
        }

        // 🔥 FIX v12.0: MONEY CHILD (lokasi)
        if (isLocation(lowerName)) {
            log(`MONEY-CHILD detected (location): "${pageName}"`, 'HIERARCHY');
            return 'money-child';
        }

        // 🔥 FIX v12.0: MONEY PAGE (harga)
        const HAS_PRICE_WORD = /\b(harga|biaya|tarif)\b/i.test(lowerName);
        if (HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(harga|biaya|tarif)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                log(`MONEY-MASTER detected (price + short): "${pageName}"`, 'HIERARCHY');
                return 'money-master';
            }
            log(`MONEY-PAGE detected (price): "${pageName}"`, 'HIERARCHY');
            return 'money-page';
        }

        // 🔥 FIX v12.0: JASA Auto Detect
        const HAS_JASA_WORD = JASA_KEYWORDS_PATTERN.test(lowerName);
        if ((isJasaEntity() || isDesainEntity()) && HAS_JASA_WORD) {
            const result = detectJasaLevelAuto(lowerName);
            log(`JASA auto detect: "${pageName}" → ${result}`, 'HIERARCHY');
            return result;
        }

        // 🔥 FIX v12.0: SEWA Auto Detect
        if (isSewaEntity()) {
            const HAS_SEWA_WORD = /\b(sewa|rental)\b/i.test(lowerName);
            if (HAS_SEWA_WORD) {
                const cleaned = lowerName.replace(/\b(sewa|rental)\b/gi, '').trim();
                const words = cleaned.split(/\s+/).filter(Boolean);
                const specific = isSpecificProduct(cleaned);
                if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                    log(`MONEY-MASTER detected (sewa + short): "${pageName}"`, 'HIERARCHY');
                    return 'money-master';
                }
                log(`MONEY-PAGE detected (sewa): "${pageName}"`, 'HIERARCHY');
                return 'money-page';
            }
        }

        // 🔥 FIX v12.0: PRODUK/MATERIAL
        if (isProdukEntity() || isMaterialEntity()) {
            const words = lowerName.split(/\s+/).filter(Boolean);
            if (words.length <= 2 && !isSpecificProduct(lowerName)) {
                log(`MONEY-MASTER detected (produk + short): "${pageName}"`, 'HIERARCHY');
                return 'money-master';
            }
            log(`MONEY-PAGE detected (produk): "${pageName}"`, 'HIERARCHY');
            return 'money-page';
        }

        // 🔥 FIX v12.0: DEFAULT - MONEY_MASTER
        log(`DEFAULT MONEY-MASTER: "${pageName}"`, 'HIERARCHY');
        return 'money-master';
    }

    // ============================================================
    // 25. AUTO DETECT PARENT (FIX v12.1 - TIDAK PERNAH SKIP)
    // ============================================================

    function findNearestParentFromItems(items, currentPageName) {
        if (!items || items.length === 0) return null;

        const currentLower = currentPageName.toLowerCase();
        const currentWords = currentLower.split(/\s+/);
        const currentLevel = TYPE_LEVEL_MAP[detectPageTypeFallback(currentPageName)] || 99;

        let bestMatch = null;
        let bestScore = 0;
        let bestLevelDiff = Infinity;

        for (const item of items) {
            const itemName = item.name?.toLowerCase() || '';
            if (itemName === currentLower) continue;

            const itemLevel = item.level || TYPE_LEVEL_MAP[detectPageTypeFallback(itemName)] || 99;
            
            // 🔥 FIX v12.1: Parent harus memiliki level yang lebih rendah (LEBIH TINGGI dalam hierarchy)
            // home(0) < pillar(1) < sp2(2) < sp1(3) < mm(4) < mp(5) < mc(6) < variant(7)
            if (itemLevel >= currentLevel) {
                log(`⏭️ SKIP: "${itemName}" (level ${itemLevel}) not higher than current (${currentLevel})`, 'SKIP');
                continue;
            }

            let score = 0;

            // Exact match dalam teks
            if (currentLower.includes(itemName) && itemName.length > 3) {
                score += itemName.length * 10;
            }

            // Word overlap
            const itemWords = itemName.split(/\s+/);
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    score += 5;
                }
            }

            // Prefix match
            for (let i = 1; i <= currentWords.length; i++) {
                const prefix = currentWords.slice(0, i).join(' ');
                if (itemName === prefix) {
                    score += 100;
                    break;
                }
            }

            // URL slug match
            if (item.url) {
                const urlSlug = item.url.split('/').pop()?.replace('.html', '').replace(/-/g, ' ');
                if (urlSlug && currentLower.includes(urlSlug)) {
                    score += 50;
                }
            }

            // Semantic match
            const semanticGroups = {
                'pagar': ['pagar', 'pagar panel', 'pagar beton', 'panel beton'],
                'pondasi': ['pondasi', 'tiang', 'pile', 'bored pile', 'strauss pile'],
                'cor': ['cor', 'readymix', 'ready mix', 'beton cor'],
                'bangunan': ['bangunan', 'gedung', 'rumah', 'ruko', 'kantor'],
                'interior': ['interior', 'dalam', 'ruangan', 'finishing'],
                'eksterior': ['eksterior', 'luar', 'fasad', 'taman']
            };
            
            for (const [group, keywords] of Object.entries(semanticGroups)) {
                const hasCurrent = keywords.some(kw => currentLower.includes(kw));
                const hasItem = keywords.some(kw => itemName.includes(kw));
                if (hasCurrent && hasItem) {
                    score += 20;
                }
            }

            // 🔥 FIX v12.1: Level difference bonus (semakin dekat levelnya, semakin baik)
            const levelDiff = currentLevel - itemLevel;
            if (levelDiff > 0 && levelDiff <= 2) {
                score += (3 - levelDiff) * 15; // diff 1 → +30, diff 2 → +15
            }

            // 🔥 FIX v12.1: Priority berdasarkan level
            if (itemLevel < bestLevelDiff) {
                bestLevelDiff = itemLevel;
            }

            log(`Score for "${itemName}" (level ${itemLevel}): ${score} (diff: ${levelDiff})`, 'SCORE');

            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }
        }

        // 🔥 FIX v12.1: Jika tidak ada match dengan score > 20, ambil yang levelnya paling tinggi (terdekat)
        if (!bestMatch || bestScore <= 20) {
            const sortedByLevel = [...items]
                .filter(item => {
                    const itemName = item.name?.toLowerCase() || '';
                    if (itemName === currentLower) return false;
                    const itemLevel = item.level || TYPE_LEVEL_MAP[detectPageTypeFallback(itemName)] || 99;
                    return itemLevel < currentLevel;
                })
                .sort((a, b) => {
                    const levelA = a.level || TYPE_LEVEL_MAP[detectPageTypeFallback(a.name)] || 99;
                    const levelB = b.level || TYPE_LEVEL_MAP[detectPageTypeFallback(b.name)] || 99;
                    return levelB - levelA; // level tertinggi dulu (terdekat)
                });
            
            if (sortedByLevel.length > 0) {
                bestMatch = sortedByLevel[0];
                log(`⚠️ FALLBACK parent: "${bestMatch.name}" (level ${bestMatch.level || 'unknown'})`, 'WARN');
            }
        }

        log(`Parent detection result: "${bestMatch?.name || 'none'}" with score ${bestScore}`, 'PARENT');
        return bestMatch;
    }

    function injectCurrentPageAndParent(breadcrumbItems, currentPageName, currentFullUrl) {
        let items = [...breadcrumbItems];
        const currentLower = currentPageName.toLowerCase();

        const hasCurrent = items.some(item => 
            item.name?.toLowerCase() === currentLower
        );

        if (!hasCurrent) {
            items.push({
                name: currentPageName,
                url: currentFullUrl
            });
        }

        // 🔥 FIX v12.1: SELALU cari parent, JANGAN PERNAH SKIP
        const detectedParent = findNearestParentFromItems(items, currentPageName);

        if (detectedParent) {
            const hasParent = items.some(item => 
                item.name?.toLowerCase() === detectedParent.name?.toLowerCase()
            );

            if (!hasParent) {
                log(`✅ AUTO-INJECTED PARENT: "${detectedParent.name}" → "${currentPageName}"`, 'SUCCESS');
                const currentIndex = items.findIndex(item => 
                    item.name?.toLowerCase() === currentLower
                );
                if (currentIndex > -1) {
                    items.splice(currentIndex, 0, detectedParent);
                } else {
                    items.push(detectedParent);
                }
            } else {
                log(`Parent already exists: "${detectedParent.name}"`, 'INFO');
            }
        } else {
            // 🔥 FIX v12.1: Jika tidak ada parent, coba cari dari entity pillar
            const entityPillarNames = ENTITY_PILLAR_NAMES[entityType] || [];
            if (entityPillarNames.length > 0) {
                const pillarName = entityPillarNames[0];
                const pillarExists = items.some(item => 
                    item.name?.toLowerCase() === pillarName
                );
                if (!pillarExists) {
                    items.unshift({
                        name: pillarName,
                        url: `${CONFIG.DOMAIN}/p/${slugify(pillarName)}.html`
                    });
                    log(`✅ INJECTED ENTITY PILLAR: "${pillarName}"`, 'SUCCESS');
                }
            }
        }

        return items;
    }

    // ============================================================
    // 26. FORCE PARENT INJECTION (FIX v12.1 - TIDAK OVERRIDE)
    // ============================================================

    function forceInjectDirectParent(lineageLevels, allLevels, currentPageTitle, entityType, breadcrumbItems) {
        const currentLower = currentPageTitle.toLowerCase();
        let modifiedLineage = [...lineageLevels];
        const words = currentLower.split(/\s+/);

        // 🔥 FIX v12.1: Cari parent terdekat dari breadcrumbItems
        const autoParent = findNearestParentFromItems(breadcrumbItems, currentPageTitle);
        if (autoParent && !modifiedLineage.some(l => l.name?.toLowerCase() === autoParent.name?.toLowerCase())) {
            const parentFromAll = allLevels.find(item => 
                item.name?.toLowerCase() === autoParent.name?.toLowerCase()
            );
            if (parentFromAll) {
                log(`✅ AUTO PARENT FROM ITEMS: "${parentFromAll.name}" (level ${parentFromAll.level})`, 'SUCCESS');
                modifiedLineage.push(parentFromAll);
            } else {
                // Buat parent baru
                const newParent = {
                    name: autoParent.name,
                    url: autoParent.url || `${CONFIG.DOMAIN}/p/${slugify(autoParent.name)}.html`,
                    type: detectPageTypeFallback(autoParent.name),
                    level: TYPE_LEVEL_MAP[detectPageTypeFallback(autoParent.name)] || 99,
                    position: modifiedLineage.length + 1
                };
                log(`✅ AUTO PARENT (new): "${newParent.name}" (level ${newParent.level})`, 'SUCCESS');
                modifiedLineage.push(newParent);
            }
        }

        // 🔥 FIX v12.1: Jika masih kosong, coba dari kata pertama
        if (modifiedLineage.length === lineageLevels.length && words.length >= 2) {
            for (let i = words.length - 1; i >= 1; i--) {
                const potentialParent = words.slice(0, i).join(' ');
                const parentItem = allLevels.find(item => 
                    item.name?.toLowerCase() === potentialParent
                );
                if (parentItem && !modifiedLineage.some(l => l.name?.toLowerCase() === parentItem.name?.toLowerCase())) {
                    log(`✅ PATTERN PARENT: "${parentItem.name}"`, 'SUCCESS');
                    modifiedLineage.push(parentItem);
                    break;
                }
            }
        }

        // 🔥 FIX v12.1: Jika masih kosong, cari dari semantic groups
        if (modifiedLineage.length === lineageLevels.length) {
            const semanticKeywords = {
                'pagar': ['pagar', 'pagar panel', 'pagar beton', 'panel beton'],
                'pondasi': ['pondasi', 'tiang', 'pile', 'bored pile', 'strauss pile'],
                'cor': ['cor', 'readymix', 'ready mix', 'beton cor'],
                'bangunan': ['bangunan', 'gedung', 'rumah', 'ruko', 'kantor'],
                'interior': ['interior', 'dalam', 'ruangan', 'finishing'],
                'eksterior': ['eksterior', 'luar', 'fasad', 'taman']
            };
            
            for (const [parentKeyword, childKeywords] of Object.entries(semanticKeywords)) {
                const isChildMatch = childKeywords.some(kw => currentLower.includes(kw));
                if (isChildMatch) {
                    const parentItem = allLevels.find(item => 
                        item.name?.toLowerCase().includes(parentKeyword)
                    );
                    if (parentItem && !modifiedLineage.some(l => l.name?.toLowerCase() === parentItem.name?.toLowerCase())) {
                        log(`✅ SEMANTIC PARENT: "${parentItem.name}"`, 'SUCCESS');
                        modifiedLineage.push(parentItem);
                        break;
                    }
                }
            }
        }

        // 🔥 FIX v12.1: HANYA GUNAKAN ENTITY PILLAR JIKA TIDAK ADA PARENT SAMA SEKALI
        // TIDAK OVERRIDE PARENT YANG SUDAH ADA DENGAN ENTITY PILLAR
        if (modifiedLineage.length === 0 || modifiedLineage.every(l => l.name?.toLowerCase() === currentLower)) {
            const entityPillarNames = ENTITY_PILLAR_NAMES[entityType] || [];
            if (entityPillarNames.length > 0) {
                const pillarName = entityPillarNames[0];
                const pillarItem = allLevels.find(item => 
                    item.name?.toLowerCase() === pillarName
                );
                if (pillarItem && !modifiedLineage.some(l => l.name?.toLowerCase() === pillarName)) {
                    log(`✅ ENTITY PILLAR (fallback): "${pillarName}"`, 'WARN');
                    modifiedLineage.push(pillarItem);
                }
            }
        }
        
        return modifiedLineage;
    }

    // ============================================================
    // 27. HIERARCHY VALIDATOR (FIX v12.1 - TIDAK HAPUS GAP)
    // ============================================================
    
    function validateAndFixHierarchy(lineage) {
        if (lineage.length <= 1) return lineage;
        
        const fixed = [];
        const sorted = [...lineage].sort((a, b) => {
            const levelA = a.level || TYPE_LEVEL_MAP[detectPageTypeFallback(a.name)] || 99;
            const levelB = b.level || TYPE_LEVEL_MAP[detectPageTypeFallback(b.name)] || 99;
            return levelA - levelB;
        });
        
        const uniqueNames = new Set();
        for (const item of sorted) {
            const key = item.name?.toLowerCase() || '';
            if (!uniqueNames.has(key)) {
                uniqueNames.add(key);
                // Pastikan levelnya benar
                if (!item.level) {
                    item.level = TYPE_LEVEL_MAP[detectPageTypeFallback(item.name)] || 99;
                }
                fixed.push(item);
            }
        }
        
        // 🔥 FIX v12.1: JANGAN HAPUS ITEM KARENA GAP
        // Jika ada gap, catat warning tapi tetap pertahankan
        for (let i = 1; i < fixed.length; i++) {
            const prevLevel = fixed[i-1].level || TYPE_LEVEL_MAP[detectPageTypeFallback(fixed[i-1].name)] || 99;
            const currLevel = fixed[i].level || TYPE_LEVEL_MAP[detectPageTypeFallback(fixed[i].name)] || 99;
            
            if (currLevel - prevLevel > 2) {
                log(`⚠️ Hierarchy gap detected: ${fixed[i-1].name}(${prevLevel}) → ${fixed[i].name}(${currLevel}) - KEEPING`, 'WARN');
                // 🔥 FIX v12.1: TIDAK HAPUS - tetap pertahankan
            }
        }
        
        return fixed;
    }

    // ============================================================
    // 28. SIMILARITY CALCULATION
    // ============================================================

    function calculateSimilarity(text1, text2) {
        const words1 = text1.toLowerCase().split(/\s+/);
        const words2 = text2.toLowerCase().split(/\s+/);
        
        if (words1.length === 0 || words2.length === 0) return 0;
        
        const commonWords = words1.filter(w => words2.includes(w));
        const union = new Set([...words1, ...words2]);
        const similarity = commonWords.length / union.size;
        
        return similarity;
    }

    // ============================================================
    // 29. GET CURRENT PAGE INFO
    // ============================================================

    const currentFullUrl = currentUrl.startsWith('http')
        ? currentUrl
        : CONFIG.DOMAIN + currentUrl;

    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);

    if (!currentPageTitle) {
        currentPageTitle = 'Halaman';
    }

    // ============================================================
    // 30. GET PAGE LEVEL & ENTITY FROM PLD
    // ============================================================

    const pldLevel = getPageLevelFromPLD();
    const pldEntity = getEntityTypeFromPLD();
    
    let finalPageLevel = pldLevel;
    let finalEntityType = entityType;
    
    if (pldEntity && VALID_ENTITY_TYPES.includes(pldEntity)) {
        finalEntityType = pldEntity;
        log(`Entity from PLD: ${pldEntity} (override from ${entityType})`, 'PLD');
    }
    
    entityType = finalEntityType;
    
    const isPLDSynced = !!pldLevel;
    log(`PLD Sync Status: ${isPLDSynced ? '✅ SINKRON' : '❌ FALLBACK'}`, 'PLD');
    if (pldLevel) {
        log(`PLD Level: "${pldLevel}" (${TYPE_LEVEL_MAP[pldLevel]})`, 'PLD');
    }

    // ============================================================
    // 31. INJECT CURRENT PAGE & AUTO PARENT (FIX v12.1)
    // ============================================================

    const enhancedBreadcrumbItems = injectCurrentPageAndParent(
        breadcrumbItems,
        currentPageTitle,
        currentFullUrl
    );

    // ============================================================
    // 32. BUILD ALL LEVELS
    // ============================================================

    const allLevels = [];

    for (let i = 0; i < enhancedBreadcrumbItems.length; i++) {
        const item = enhancedBreadcrumbItems[i];
        let name, url;

        if (typeof item === 'object') {
            name = item.name;
            url = item.url || null;
        } else {
            name = item;
            url = null;
        }

        const type = detectPageTypeFallback(name);
        allLevels.push({
            name,
            url,
            type,
            level: TYPE_LEVEL_MAP[type] || 99,
            position: i + 1
        });
    }

    // ============================================================
    // 33. URL FALLBACK
    // ============================================================

    for (const level of allLevels) {
        if (!level.url) {
            let foundUrl = null;
            if (mappingObj) {
                for (const [url, title] of Object.entries(mappingObj)) {
                    if (title === level.name) {
                        foundUrl = url.startsWith('http') ? url : CONFIG.DOMAIN + url;
                        break;
                    }
                }
            }
            if (!foundUrl) {
                foundUrl = `${CONFIG.DOMAIN}/p/${slugify(level.name)}.html`;
            }
            level.url = foundUrl;
        } else if (!level.url.startsWith('http')) {
            level.url = CONFIG.DOMAIN + level.url;
        }
    }

    // ============================================================
    // 34. CURRENT PAGE TYPE
    // ============================================================

    const currentPageType = pldLevel || detectPageTypeFallback(currentPageTitle);
    log(`Current page: "${currentPageTitle}" → type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`, 'INFO');

    // ============================================================
    // 35. SELECT BREADCRUMB LEVELS
    // ============================================================

    const selectedLevels = [];

    selectedLevels.push({
        name: 'Beranda',
        url: CONFIG.DOMAIN,
        type: 'home',
        level: 0,
        position: 1
    });

    const uniqueByUrl = new Map();
    for (const item of allLevels) {
        const key = item.url || item.name;
        if (!uniqueByUrl.has(key)) {
            uniqueByUrl.set(key, item);
        }
    }
    const uniqueItems = Array.from(uniqueByUrl.values());

    log('=== ALL LEVELS DEBUG ===', 'DEBUG');
    for (const level of allLevels) {
        log(`  ${level.name} → type: ${level.type}, level: ${level.level}`, 'DEBUG');
    }

    log('Unique items (' + uniqueItems.length + '): ' + uniqueItems.map(i => i.name + '(' + i.level + ')').join(' → '), 'INFO');

    // ============================================================
    // 36. FIND NEAREST PARENTS BY HIERARCHY (FIX v12.1 - TIDAK PERNAH SKIP)
    // ============================================================

    function findNearestParentsByHierarchy() {
        const lineage = [];
        const currentLevel = pldLevel ? TYPE_LEVEL_MAP[pldLevel] : (TYPE_LEVEL_MAP[currentPageType] || 99);
        const currentPageTitleLower = currentPageTitle.toLowerCase();
        
        const candidates = uniqueItems.filter(item => 
            item.name.toLowerCase() !== currentPageTitleLower
        );
        
        if (candidates.length === 0) {
            log('⚠️ No candidates found', 'WARN');
            return lineage;
        }
        
        // 🔥 FIX v12.1: Ambil SEMUA yang levelnya lebih rendah (LEBIH TINGGI)
        // TIDAK ADA FILTER YANG MEMBUANG CANDIDATES
        const validCandidates = candidates.filter(item => item.level < currentLevel);
        
        // 🔥 FIX v12.1: JANGAN PERNAH GUNAKAN "LAST RESORT" yang memaksa entity pillar
        // Entity pillar hanya digunakan jika TIDAK ADA candidates sama sekali
        
        if (validCandidates.length === 0) {
            // 🔥 FIX v12.1: Jika tidak ada candidates, gunakan entity pillar
            const entityPillarNames = ENTITY_PILLAR_NAMES[entityType] || [];
            if (entityPillarNames.length > 0) {
                const pillarName = entityPillarNames[0];
                const pillarItem = uniqueItems.find(item => 
                    item.name.toLowerCase() === pillarName
                );
                if (pillarItem) {
                    lineage.push(pillarItem);
                    log(`✅ ENTITY PILLAR as parent: "${pillarName}"`, 'SUCCESS');
                }
            }
            return lineage;
        }
        
        log('Valid candidates: ' + validCandidates.map(i => i.level + ':' + i.name).join(', '), 'DEBUG');
        
        const currentWords = currentPageTitleLower.split(/\s+/);
        const scoredCandidates = validCandidates.map(item => {
            const itemWords = item.name.toLowerCase().split(/\s+/);
            let relevanceScore = 0;
            
            // Word overlap
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    relevanceScore += 10;
                }
            }
            
            // 🔥 FIX v12.1: Jika item name ada di current title, score tinggi
            if (currentPageTitleLower.includes(item.name.toLowerCase()) && item.name.length > 3) {
                relevanceScore += 100; // ← DITINGKATKAN DARI 50 MENJADI 100
            }
            
            // 🔥 FIX v12.1: Parent langsung (1 level di atas) → bonus besar
            if (item.level === currentLevel - 1) {
                relevanceScore += 80; // ← DITINGKATKAN DARI 30 MENJADI 80
            }
            
            // 🔥 FIX v12.1: Level diff bonus
            const levelDiff = currentLevel - item.level;
            if (levelDiff > 0 && levelDiff <= 2) {
                relevanceScore += (3 - levelDiff) * 30; // diff 1 → +60, diff 2 → +30
            }
            
            // 🔥 FIX v12.1: Priority untuk level yang lebih tinggi (terdekat)
            const maxLevel = Math.max(...validCandidates.map(c => c.level));
            if (item.level === maxLevel) {
                relevanceScore += 50; // Bonus untuk level tertinggi
            }
            
            log(`🎯 Score for "${item.name}" (level ${item.level}): ${relevanceScore}`, 'SCORE');
            
            return { ...item, relevanceScore };
        });
        
        // Sort by level (descending) then score (descending)
        scoredCandidates.sort((a, b) => {
            if (a.level !== b.level) return b.level - a.level;
            return b.relevanceScore - a.relevanceScore;
        });
        
        log('Scored candidates (sorted): ' + scoredCandidates.map(i => i.level + ':' + i.name + '(' + i.relevanceScore + ')').join(' → '), 'DEBUG');
        
        // 🔥 FIX v12.1: Ambil SEMUA yang memiliki level tertinggi
        const highestLevel = scoredCandidates.length > 0 ? scoredCandidates[0].level : -1;
        const topLevelParents = scoredCandidates.filter(item => item.level === highestLevel);
        
        // 🔥 FIX v12.1: Tambahkan SEMUA top level parents (tidak hanya 1)
        for (const item of topLevelParents) {
            const exists = lineage.some(l => l.name === item.name);
            if (!exists) {
                lineage.push(item);
                log(`🎯 Selected: "${item.name}" (level ${item.level}) with score ${item.relevanceScore}`, 'SUCCESS');
            }
        }
        
        // 🔥 FIX v12.1: JIKA TIDAK ADA LINEAGE, ambil yang score tertinggi
        if (lineage.length === 0 && scoredCandidates.length > 0) {
            const best = scoredCandidates[0];
            lineage.push(best);
            log(`⚠️ FALLBACK: Using "${best.name}" as nearest parent`, 'WARN');
        }
        
        log('Lineage (prioritized): ' + lineage.map(i => i.level + ':' + i.name).join(' → '), 'SUCCESS');
        
        return lineage;
    }

    let lineageLevels = findNearestParentsByHierarchy();

    log('Initial lineage (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    // 🔥 FIX v12.1: Force inject parent - SELALU
    lineageLevels = forceInjectDirectParent(
        lineageLevels, 
        uniqueItems,
        currentPageTitle, 
        entityType,
        enhancedBreadcrumbItems
    );

    log('After force injection (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    const cleanLineage = [];
    const usedLineage = new Set();

    for (const item of lineageLevels) {
        const key = item.name.toLowerCase();
        if (usedLineage.has(key)) continue;
        usedLineage.add(key);
        cleanLineage.push(item);
    }

    const validatedLineage = validateAndFixHierarchy(cleanLineage);

    validatedLineage.sort((a, b) => {
        const idxA = HIERARCHY_ORDER.indexOf(a.type);
        const idxB = HIERARCHY_ORDER.indexOf(b.type);
        if (idxA !== idxB) return idxA - idxB;
        return a.position - b.position;
    });

    // ========================================================
    // 37. AMBIL SEMUA PARENT DENGAN LEVEL TERTINGGI (FIX v12.1)
    // ========================================================
    
    let finalParents = [];

    const parentOnly = validatedLineage.filter(item => 
        item.name.toLowerCase() !== currentPageTitle.toLowerCase()
    );

    log(`Parent candidates (${parentOnly.length}): ` + parentOnly.map(i => i.name + '(' + i.level + ')').join(', '), 'DEBUG');

    if (parentOnly.length > 0) {
        // 🔥 FIX v12.1: Ambil parent dengan level tertinggi (terdekat dengan current)
        const highestLevel = Math.max(...parentOnly.map(i => i.level));
        finalParents = parentOnly.filter(item => item.level === highestLevel);
        finalParents.sort((a, b) => a.position - b.position);
        
        log(`✅ PARENT FOUND: ${finalParents.length} parent(s) at level ${highestLevel}: ` + finalParents.map(i => i.name).join(', '), 'SUCCESS');
    } else {
        log('⚠️ No parent found (only current page)', 'WARN');
    }

    // 🔥 FIX v12.1: Jika tidak ada parent, cari dari entity pillar
    if (finalParents.length === 0) {
        const entityPillarNames = ENTITY_PILLAR_NAMES[entityType] || [];
        if (entityPillarNames.length > 0) {
            const pillarName = entityPillarNames[0];
            const pillarItem = uniqueItems.find(item => 
                item.name.toLowerCase() === pillarName
            );
            if (pillarItem) {
                finalParents.push(pillarItem);
                log(`✅ ENTITY PILLAR as parent: "${pillarName}"`, 'SUCCESS');
            }
        }
    }

    for (const item of finalParents) {
        const exists = selectedLevels.some(l => l.name.toLowerCase() === item.name.toLowerCase());
        if (!exists) {
            selectedLevels.push(item);
            log(`👪 Adding parent: "${item.name}" (level ${item.level})`, 'PARENT');
        }
    }

    const hasCurrentAlready = selectedLevels.some(item =>
        item.name.toLowerCase() === currentPageTitle.toLowerCase()
    );

    if (!hasCurrentAlready) {
        selectedLevels.push({
            name: currentPageTitle,
            url: currentFullUrl,
            type: currentPageType,
            level: pldLevel ? TYPE_LEVEL_MAP[pldLevel] : (TYPE_LEVEL_MAP[currentPageType] || 99),
            isCurrent: true,
            pldLevel: pldLevel
        });
    }

    // ============================================================
    // 38. FINAL UNIQUE LEVELS
    // ============================================================

    const uniqueLevels = [];
    const usedNames = new Set();

    for (const item of selectedLevels) {
        const key = item.name.toLowerCase();
        if (usedNames.has(key)) continue;
        usedNames.add(key);
        uniqueLevels.push(item);
    }

    uniqueLevels.forEach((item, index) => {
        item.position = index + 1;
    });

    log('Final breadcrumb (' + uniqueLevels.length + ' levels): ' + uniqueLevels.map(i => i.name + '(' + i.level + ')').join(' › '), 'SUCCESS');

    // ============================================================
    // 39. GENERATE HTML
    // ============================================================

    let breadcrumbHtml = `<div class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">\n`;

    for (let i = 0; i < uniqueLevels.length; i++) {
        const item = uniqueLevels[i];
        const isLast = i === uniqueLevels.length - 1;

        if (!isLast) {
            breadcrumbHtml +=
                `<span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<a href="${item.url}" itemprop="item" title="${item.name}">
<span itemprop="name">${item.name}</span>
</a>
<meta itemprop="position" content="${item.position}" />
</span>
<span class="separator"> › </span>\n`;
        } else {
            breadcrumbHtml +=
                `<span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<span itemprop="name">${item.name}</span>
<meta itemprop="position" content="${item.position}" />
</span>\n`;
        }
    }

    breadcrumbHtml += `</div>\n`;

    // ============================================================
    // 40. JSON LD
    // ============================================================

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": uniqueLevels.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    // ============================================================
    // 41. REMOVE OLD
    // ============================================================

    document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]')
        .forEach(el => el.remove());
    document.querySelectorAll('script[data-breadcrumb="true"]')
        .forEach(el => el.remove());

    // ============================================================
    // 42. TARGET ELEMENT
    // ============================================================

    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');

    if (targetElement) {
        targetElement.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }

    // ============================================================
    // 43. INJECT JSON LD
    // ============================================================

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);

    // ============================================================
    // 44. LOG SUMMARY
    // ============================================================

    console.log('📊 BREADCRUMB GENERATION SUMMARY (v12.1):');
    console.log(`   Page: "${currentPageTitle}"`);
    console.log(`   URL: "${currentFullUrl}"`);
    console.log(`   Type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`);
    console.log(`   Entity: ${entityType}`);
    console.log(`   🔄 PLD Sync: ${isPLDSynced ? '✅ SINKRON' : '❌ FALLBACK'}`);
    if (pldLevel) {
        console.log(`   📌 PLD Level: ${pldLevel} (${TYPE_LEVEL_MAP[pldLevel]})`);
    }
    if (currentPageType === 'variant') {
        console.log(`   🔬 Variant detected for entity: ${entityType}`);
    }
    if (currentPageType === 'money-child') {
        console.log(`   📍 Money Child with location detected`);
    }
    console.log(`   👪 Parents found: ${finalParents.length} at level ${finalParents.length > 0 ? finalParents[0].level : 'N/A'}`);
    console.log(`   📊 Total breadcrumb levels: ${uniqueLevels.length}`);
    console.log(`   🏛️ Hierarchy: ${uniqueLevels.map(i => i.type).join(' → ')}`);

    // ============================================================
    // 45. RETURN
    // ============================================================

    return {
        html: breadcrumbHtml,
        jsonLd,
        selectedLevels: uniqueLevels,
        currentPageType,
        entityType,
        version: '12.1.0',
        parentCount: finalParents.length,
        parents: finalParents,
        isVariant: currentPageType === 'variant',
        isMoneyChild: currentPageType === 'money-child',
        pldSync: isPLDSynced,
        pldLevel: pldLevel,
        pldEntity: pldEntity,
        hierarchy: uniqueLevels.map(i => i.type)
    };
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
