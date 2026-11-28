// ============================================================
// PRODUK SALURAN & DRAINASE — POST
// v2.0.0 — Early Exit + generateBreadcrumbShared + Fix Label
// ============================================================

console.log('[produk-saluran-post] 📄 File loaded, waiting for DOM...');

const urlMappingBuisBetonFromMoneyMasterToMoneyPage = {
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton.html": "Harga Buis Beton" // Pricing Hub
};

const urlMappingBoxCulvertFromMoneyMasterToMoneyPage = {
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-beton-precast.html": "Harga Box Culvert Beton Precast"
};

const urlMappingUDitchFromMoneyMasterToMoneyPage = {
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch.html": "Harga U-Ditch" // Pricing Hub
};

const urlMappingGorongGorongFromMoneyMasterToMoneyPage = {
  "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton.html": "Gorong-Gorong Beton",
  "https://www.betonjayareadymix.com/2022/02/harga-gorong-gorong-beton.html": "Harga Gorong-Gorong Beton"
};

const urlMappingPipaBetonFromMoneyMasterToMoneyPage = {
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg.html": "Pipa Beton SCG", 
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-scg.html": "Harga Pipa Beton SCG",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-precast.html": "Pipa Beton Precast",
  "https://www.betonjayareadymix.com/2022/02/pipa-beton-cor.html": "Pipa Beton Cor",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton.html": "Harga Pipa Beton",
  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-precast.html": "Harga Pipa Beton Precast"
};

// Saluran Beton tidak memiliki MP terpisah di bawahnya
// Semua variant langsung di bawah MM


// VARIANT
// Gorong-Gorong tidak memiliki variant langsung di bawah MM
// Semua variant berada di bawah MP gorong-gorong-beton
// 📂 PARENT: buis-beton (Money-Master)
// ➔ CHILD: Variant (Aplikasi, Merek, & Spesifikasi Harga)
// ═════════════════════════════════════════════════════════════════════
const urlMappingBuisBetonFromMoneyMasterToVariant = {
  // Berdasarkan Aplikasi
  "https://www.betonjayareadymix.com/2021/03/buis-beton-sumur-resapan.html": "Buis Beton Sumur Resapan",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-gorong-gorong.html": "Buis Beton Gorong-Gorong",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-riol.html": "Buis Beton Riol",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-saluran.html": "Buis Beton Saluran",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-u.html": "Buis Beton U",
  
  // Berdasarkan Merek
  "https://www.betonjayareadymix.com/2021/03/buis-beton-precon.html": "Buis Beton Precon",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-asiacon.html": "Buis Beton Asiacon",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-dusaspun.html": "Buis Beton Dusaspun",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-scg.html": "Buis Beton SCG",
  
  // Berdasarkan Bentuk/Spesifikasi
  "https://www.betonjayareadymix.com/2021/03/buis-beton-bulat.html": "Buis Beton Bulat",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-kotak.html": "Buis Beton Kotak",
  "https://www.betonjayareadymix.com/2021/03/buis-beton-bertulang.html": "Buis Beton Bertulang",
  
  // Variant Harga Spesifik
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-30-cm.html": "Harga Buis Beton Diameter 30 cm",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-40-cm.html": "Harga Buis Beton Diameter 40 cm",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-50-cm.html": "Harga Buis Beton Diameter 50 cm",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-60-cm.html": "Harga Buis Beton Diameter 60 cm",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-80-cm.html": "Harga Buis Beton Diameter 80 cm",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bertulang.html": "Harga Buis Beton Bertulang",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bulat.html": "Harga Buis Beton Bulat",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-kotak.html": "Harga Buis Beton Kotak",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-dusaspun.html": "Harga Buis Beton Dusaspun",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-saluran-air.html": "Harga Buis Beton Saluran Air",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-setengah-lingkaran.html": "Harga Buis Beton Setengah Lingkaran",
  "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-tanpa-tulangan.html": "Harga Buis Beton Tanpa Tulangan",
  
  // Variant Ukuran (dikoreksi dari Sub-Pillar)
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-diameter-80-cm.html": "Ukuran Buis Beton Diameter 80 cm",
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-diameter-100-cm.html": "Ukuran Buis Beton Diameter 100 cm",
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-untuk-sumur.html": "Ukuran Buis Beton untuk Sumur",
  "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-saluran-air.html": "Ukuran Buis Beton Saluran Air"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pipa-beton (Money-Page)
// ➔ CHILD: Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingPipaBetonFromMoneyMasterToVariant = {
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-150-mm.html": "Ukuran Pipa Beton 150 mm",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-200-mm.html": "Ukuran Pipa Beton 200 mm",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-300-mm.html": "Ukuran Pipa Beton 300 mm",
  "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-400-mm.html": "Ukuran Pipa Beton 400 mm"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: saluran-beton (Money-Page)
// ➔ CHILD: Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingSaluranBetonFromMoneyMasterToVariant = {
  "https://www.betonjayareadymix.com/2022/02/harga-saluran-beton.html": "Harga Saluran Beton",
  "https://www.betonjayareadymix.com/2022/02/jual-saluran-beton.html": "Jual Saluran Beton",
  "https://www.betonjayareadymix.com/2022/02/ukuran-saluran-beton.html": "Ukuran Saluran Beton",
  "https://www.betonjayareadymix.com/2022/02/kelebihan-saluran-beton.html": "Kelebihan Saluran Beton",
  "https://www.betonjayareadymix.com/2022/02/kekurangan-saluran-beton.html": "Kekurangan Saluran Beton"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: box-culvert (Money-Master)
// ➔ CHILD: Variant (Ukuran, Merek, & Aplikasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingBoxCulvertFromMoneyMasterToVariant = {
  // Ukuran
  "https://www.betonjayareadymix.com/2021/04/box-culvert-80x80.html": "Box Culvert 80x80",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-600-x-600.html": "Box Culvert 600 x 600",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-40x40.html": "Harga Box Culvert 40x40",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-50x50.html": "Harga Box Culvert 50x50",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-60x60.html": "Harga Box Culvert 60x60",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-80x80x100.html": "Harga Box Culvert 80x80x100",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-100x100x100.html": "Harga Box Culvert 100x100x100",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-150x150.html": "Harga Box Culvert 150x150",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-200x200.html": "Harga Box Culvert 200x200",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-300x300.html": "Harga Box Culvert 300x300",
  
  // Merek
  "https://www.betonjayareadymix.com/2021/04/box-culvert-dusaspun.html": "Box Culvert Dusaspun",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-wika-beton.html": "Box Culvert Wika Beton",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-wika-beton.html": "Harga Box Culvert Wika Beton",
  "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-calvary.html": "Harga Box Culvert Calvary",
  
  // Aplikasi
  "https://www.betonjayareadymix.com/2021/04/kegunaan-box-culvert.html": "Kegunaan Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/saluran-box-culvert.html": "Saluran Box Culvert",
  "https://www.betonjayareadymix.com/2021/04/box-culvert-jalan-tol.html": "Box Culvert Jalan Tol",
  "https://www.betonjayareadymix.com/2021/04/ukuran-box-culvert-precast.html": "Ukuran Box Culvert Precast",
  "https://www.betonjayareadymix.com/2021/04/kelebihan-box-culvert.html": "Kelebihan Box Culvert"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: u-ditch (Money-Master)
// ➔ CHILD: Variant (Ukuran, Merek, & Biaya)
// ═════════════════════════════════════════════════════════════════════
const urlMappingUDitchFromMoneyMasterToVariant = {
  // Ukuran
  "https://www.betonjayareadymix.com/2021/04/u-ditch-40x40x120.html": "U-Ditch 40x40x120",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-60x60.html": "U-Ditch 60x60",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-70x70.html": "U-Ditch 70x70",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-80x80.html": "U-Ditch 80x80",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-90x90.html": "U-Ditch 90x90",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-40-x-40.html": "Harga U-Ditch 40x40",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-40-x-60.html": "Harga U-Ditch 40x60",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-k350.html": "Harga U-Ditch K350",
  
  // Merek
  "https://www.betonjayareadymix.com/2021/04/u-ditch-precast.html": "U-Ditch Precast",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-dusaspun.html": "U-Ditch Dusaspun",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-scg.html": "U-Ditch SCG",
  "https://www.betonjayareadymix.com/2021/04/u-ditch-wika-beton.html": "U-Ditch Wika Beton",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-dusaspun.html": "Harga U-Ditch Dusaspun",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-duracon.html": "Harga U-Ditch Duracon",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-precon.html": "Harga U-Ditch Precon",
  "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-asiacon.html": "Harga U-Ditch Asiacon",
  
  // Informasi & Biaya
  "https://www.betonjayareadymix.com/2021/04/fungsi-u-ditch.html": "Fungsi U-Ditch",
  "https://www.betonjayareadymix.com/2021/04/analisa-pemasangan-u-ditch.html": "Analisa Pemasangan U-Ditch",
  "https://www.betonjayareadymix.com/2021/04/saluran-u-ditch-jalan.html": "Saluran U-Ditch Jalan",
  "https://www.betonjayareadymix.com/2021/04/harga-cover-tutup-u-ditch.html": "Harga Cover Tutup U-Ditch",
  "https://www.betonjayareadymix.com/2021/04/jual-tutup-u-ditch.html": "Jual Tutup U-Ditch",
  "https://www.betonjayareadymix.com/2021/04/biaya-pemasangan-u-ditch.html": "Biaya Pemasangan U-Ditch",
  "https://www.betonjayareadymix.com/2021/04/ukuran-u-ditch-beton.html": "Ukuran U-Ditch Beton",
  "https://www.betonjayareadymix.com/2021/04/ukuran-cover-u-ditch.html": "Ukuran Cover U-Ditch"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

// ============================================================
// 📁 GORONG-GORONG BETON
// Parent: Gorong Gorong Beton (/p/gorong-gorong-beton.html)
// ============================================================
const urlMappingGorongBeton = {
    // [MONEY_MASTER]
  //  "https://www.betonjayareadymix.com/2022/02/harga-gorong-gorong-beton.html": "Harga Gorong Gorong Beton",
   // "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-sesuai-kapasitas-air.html": "Gorong gorong beton Kapasitas Air",
    // [MONEY_CHILD]
    "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-jakarta.html": "Gorong Gorong Beton Jakarta",
    "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-bogor.html": "Gorong Gorong Beton Bogor",
    "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-depok.html": "Gorong Gorong Beton Depok",
    "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-tangerang.html": "Gorong Gorong Beton Tangerang",
    "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-bekasi.html": "Gorong Gorong Beton Bekasi",
    "https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton-karawang.html": "Gorong Gorong Beton Karawang"
};

// ============================================================
// 📁 SALURAN BETON
// Parent: Saluran Beton (/p/saluran-beton.html)
// ============================================================
const urlMappingSaluranBeton = {
    // [MONEY_MASTER]
    //"https://www.betonjayareadymix.com/2022/02/harga-saluran-beton.html": "Harga Saluran Beton",
    // [MONEY_CHILD]
    "https://www.betonjayareadymix.com/2022/02/saluran-beton-jakarta.html": "Saluran Beton Jakarta",
    "https://www.betonjayareadymix.com/2022/02/saluran-beton-bogor.html": "Saluran Beton Bogor",
    "https://www.betonjayareadymix.com/2022/02/saluran-beton-depok.html": "Saluran Beton Depok",
    "https://www.betonjayareadymix.com/2022/02/saluran-beton-tangerang.html": "Saluran Beton Tangerang",
    "https://www.betonjayareadymix.com/2022/02/saluran-beton-bekasi.html": "Saluran Beton Bekasi",
    "https://www.betonjayareadymix.com/2022/02/saluran-beton-karawang.html": "Saluran Beton Karawang"
    /*
    // [SUB2]
    "https://www.betonjayareadymix.com/2022/02/arti-saluran-beton.html": "Arti Saluran Beton",
    "https://www.betonjayareadymix.com/2022/02/kegunaan-saluran-beton.html": "Kegunaan Saluran Beton",
    "https://www.betonjayareadymix.com/2022/02/kelebihan-saluran-beton.html": "Kelebihan Saluran Beton",
    "https://www.betonjayareadymix.com/2022/02/kekurangan-saluran-beton.html": "Kekurangan Saluran Beton",
    "https://www.betonjayareadymix.com/2022/02/ukuran-saluran-beton.html": "Ukuran Saluran Beton",
    // [MONEY_MASTER] - jual
    "https://www.betonjayareadymix.com/2022/02/jual-saluran-beton.html": "Jual Saluran Beton"
    */
};

// ============================================================
// 📁 PIPA BETON
// Parent: Pipa Beton (/p/pipa-beton.html)
// ============================================================
const urlMappingPipaBeton = {
    // [MONEY_MASTER]
  //  "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton.html": "Harga Pipa Beton",
   // "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-precast.html": "Harga Pipa Beton Precast",
    // [MONEY_CHILD] - lokasi
    "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-jakarta.html": "Harga Pipa Beton Jakarta",
    "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-bogor.html": "Harga Pipa Beton Bogor",
    "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-depok.html": "Harga Pipa Beton Depok",
    "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-tangerang.html": "Harga Pipa Beton Tangerang",
    "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-bekasi.html": "Harga Pipa Beton Bekasi",
    "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-karawang.html": "Harga Pipa Beton Karawang",
    "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-bandung.html": "Harga Pipa Beton Bandung",
    "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-purwakarta.html": "Harga Pipa Beton Purwakarta",
    "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-surabaya.html": "Harga Pipa Beton Surabaya",
    // [MONEY_CHILD] - brand SCG
   // "https://www.betonjayareadymix.com/2022/02/harga-pipa-beton-scg.html": "Harga Pipa Beton SCG",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-jakarta.html": "Pipa Beton SCG Jakarta",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-bogor.html": "Pipa Beton SCG Bogor",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-depok.html": "Pipa Beton SCG Depok",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-tangerang.html": "Pipa Beton SCG Tangerang",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-bekasi.html": "Pipa Beton SCG Bekasi",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-scg-karawang.html": "Pipa Beton SCG Karawang",
    // [SUB2]
    /*
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-precast.html": "Pipa Beton Precast",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-cor.html": "Pipa Beton Cor",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-drainase.html": "Pipa Beton Drainase",
    // [VARIANT] - ukuran
    "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-150-mm.html": "Ukuran Pipa Beton 150 mm",
    "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-200-mm.html": "Ukuran Pipa Beton 200 mm",
    "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-300-mm.html": "Ukuran Pipa Beton 300 mm",
    "https://www.betonjayareadymix.com/2022/02/ukuran-pipa-beton-400-mm.html": "Ukuran Pipa Beton 400 mm",
    */
    // [SUB2] - lokasi
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-jakarta.html": "Pipa Beton Jakarta",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-bogor.html": "Pipa Beton Bogor",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-depok.html": "Pipa Beton Depok",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-tangerang.html": "Pipa Beton Tangerang",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-bekasi.html": "Pipa Beton Bekasi",
    "https://www.betonjayareadymix.com/2022/02/pipa-beton-karawang.html": "Pipa Beton Karawang"
};

// ============================================================
// 📁 BUIS BETON
// Parent: Buis Beton Precast (/p/buis-beton-precast.html)
// ============================================================
const urlMappingBuis = {
    // [MONEY_MASTER]
    /*
    "https://www.betonjayareadymix.com/2021/03/jual-buis-beton-terdekat.html": "Jual Buis Beton Terdekat",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton.html": "Harga Buis Beton",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-saluran-air.html": "Harga Buis Beton Saluran Air",
    // [MONEY_CHILD] - ukuran
    "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-diameter-100-cm.html": "Ukuran Buis Beton Diameter 100 cm",
    "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-untuk-sumur.html": "Ukuran Buis Beton Untuk Sumur",
    "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-saluran-air.html": "Ukuran Buis Beton Saluran Air",
    "https://www.betonjayareadymix.com/2021/03/ukuran-buis-beton-diameter-80-cm.html": "Ukuran Buis Beton Diameter 80 cm",
    
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-30-cm.html": "Harga Buis Beton Diameter 30 CM",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-40-cm.html": "Harga Buis Beton Diameter 40 CM",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-50-cm.html": "Harga Buis Beton Diameter 50 CM",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-60-cm.html": "Harga Buis Beton Diameter 60 CM",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-80-cm.html": "Harga Buis Beton Diameter 80 CM",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-100-cm.html": "Harga Buis Beton Diameter 100 CM",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-diameter-150-cm.html": "Harga Buis Beton Diameter 150 CM",
    // [MONEY_CHILD] - jenis
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bertulang.html": "Harga Buis Beton Bertulang",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bulat.html": "Harga Buis Beton Bulat",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-kotak.html": "Harga Buis Beton Kotak",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-setengah-lingkaran.html": "Harga Buis Beton Setengah Lingkaran",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-tanpa-tulangan.html": "Harga Buis Beton Tanpa Tulangan",
    */
    // [MONEY_CHILD] - lokasi
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-jakarta.html": "Harga Buis Beton Jakarta",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bogor.html": "Harga Buis Beton Bogor",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-depok.html": "Harga Buis Beton Depok",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-tangerang.html": "Harga Buis Beton Tangerang",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bekasi.html": "Harga Buis Beton Bekasi",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-bandung.html": "Harga Buis Beton Bandung",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-karawang.html": "Harga Buis Beton Karawang",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-surabaya.html": "Harga Buis Beton Surabaya",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-semarang.html": "Harga Buis Beton Semarang",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-tasikmalaya.html": "Harga Buis Beton Tasikmalaya",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-cirebon.html": "Harga Buis Beton Cirebon",
    
    "https://www.betonjayareadymix.com/2021/03/buis-beton-jakarta.html": "Buis Beton Jakarta",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-bogor.html": "Buis Beton Bogor",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-depok.html": "Buis Beton Depok",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-tangerang.html": "Buis Beton Tangerang",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-bekasi.html": "Buis Beton Bekasi",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-bandung.html": "Buis Beton Bandung",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-karawang.html": "Buis Beton Karawang",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-surabaya.html": "Buis Beton Surabaya",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-serang.html": "Buis Beton Serang",

    "https://www.betonjayareadymix.com/2021/03/buis-beton-cirebon.html": "Buis Beton Cirebon",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-purwakarta.html": "Buis Beton Purwakarta",
    "https://www.betonjayareadymix.com/2021/03/jual-buis-beton-bekasi.html": "Jual Buis Beton Bekasi",
    "https://www.betonjayareadymix.com/2021/03/jual-buis-beton-depok.html": "Jual Buis Beton Depok"
    /*
    // [SUB2] - brand
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-dusaspun.html": "Harga Buis Beton Dusaspun",
    
    "https://www.betonjayareadymix.com/2021/03/buis-beton-precon.html": "Buis Beton Precon",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-asiacon.html": "Buis Beton Asiacon",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-dusaspun.html": "Buis Beton Dusaspun",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-scg.html": "Buis Beton SCG",
    // [SUB2] - jenis
    "https://www.betonjayareadymix.com/2021/03/buis-beton-bulat.html": "Buis Beton Bulat",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-kotak.html": "Buis Beton Kotak",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-bertulang.html": "Buis Beton Bertulang",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-u.html": "Buis Beton U",
    // [SUB2] - aplikasi
    "https://www.betonjayareadymix.com/2021/03/buis-beton-septic-tank.html": "Buis Beton Septic Tank",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-sumur-resapan.html": "Buis Beton Sumur Resapan",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-gorong-gorong.html": "Buis Beton Gorong Gorong",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-riol.html": "Buis Beton Riol",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-saluran.html": "Buis Beton Saluran",
    
    // [SUB1] - bridge
    "https://www.betonjayareadymix.com/2021/03/buis-beton-untuk-sumur.html": "Buis Beton Untuk Sumur",
    "https://www.betonjayareadymix.com/2021/03/buis-beton-untuk-septic-tank.html": "Buis Beton Untuk Septic Tank",
    // [REDIRECT]
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-murah.html": "Harga Buis Beton Murah",
    "https://www.betonjayareadymix.com/2021/03/harga-buis-beton-termurah.html": "Harga Buis Beton Termurah"
    */
};

// ============================================================
// 📁 BOX CULVERT
// Parent: Box Culvert Beton Precast (/p/box-culvert-beton-precast.html)
// ============================================================
const urlMappingBoxCulvert = {
    /*
    // [MONEY_MASTER]
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-beton-precast.html": "Harga Box Culvert Beton Precast",
    // [MONEY_CHILD] - ukuran
    "https://www.betonjayareadymix.com/2021/04/box-culvert-80x80.html": "Box Culvert 80x80",
    "https://www.betonjayareadymix.com/2021/04/box-culvert-600-x-600.html": "Box Culvert 600 x 600",
    
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-40x40.html": "Harga Box Culvert 40x40",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-50x50.html": "Harga Box Culvert 50x50",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-60x60.html": "Harga Box Culvert 60x60",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-80x80x100.html": "Harga Box Culvert 80x80x100",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-100x100x100.html": "Harga Box Culvert 100x100x100",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-150x150.html": "Harga Box Culvert 150x150",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-200x200.html": "Harga Box Culvert 200x200",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-300x300.html": "Harga Box Culvert 300x300",
    */
    // [MONEY_CHILD] - lokasi
    "https://www.betonjayareadymix.com/2021/04/box-culvert-malang.html": "Box Culvert Malang",
    
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-jakarta.html": "Harga Box Culvert Jakarta",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bogor.html": "Harga Box Culvert Bogor",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-depok.html": "Harga Box Culvert Depok",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-tangerang.html": "Harga Box Culvert Tangerang",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bekasi.html": "Harga Box Culvert Bekasi",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bandung.html": "Harga Box Culvert Bandung",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-surabaya.html": "Harga Box Culvert Surabaya",

    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-majalengka.html": "Harga Box Culvert Majalengka",
    
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-bali.html": "Harga Box Culvert Bali"
    /*
    // [SUB2]
    "https://www.betonjayareadymix.com/2021/04/box-culvert-adalah.html": "Box Culvert Adalah",
    "https://www.betonjayareadymix.com/2021/04/kegunaan-box-culvert.html": "Kegunaan Box Culvert",
    "https://www.betonjayareadymix.com/2021/04/kelebihan-box-culvert.html": "Kelebihan Box Culvert",
    "https://www.betonjayareadymix.com/2021/04/ukuran-box-culvert-precast.html": "Ukuran Box Culvert Precast",
    "https://www.betonjayareadymix.com/2021/04/box-culvert-dusaspun.html": "Box Culvert Dusaspun",
    "https://www.betonjayareadymix.com/2021/04/box-culvert-wika-beton.html": "Box Culvert Wika Beton",

    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-wika-beton.html": "Harga Box Culvert Wika Beton",
    "https://www.betonjayareadymix.com/2021/04/harga-box-culvert-calvary.html": "Harga Box Culvert Calvary",
    
    // [SUB1]
    "https://www.betonjayareadymix.com/2021/04/saluran-box-culvert.html": "Saluran Box Culvert",
    "https://www.betonjayareadymix.com/2021/04/box-culvert-jalan-tol.html": "Box Culvert Jalan Tol"
    */
};

// ============================================================
// 📁 U DITCH
// Parent: U Ditch Tutup Beton Precast (/p/u-ditch-tutup-beton-precast.html)
// ============================================================
const urlMappingUditch = {
    // [MONEY_MASTER]
   // "https://www.betonjayareadymix.com/2021/04/harga-u-ditch.html": "Harga U Ditch",
    //"https://www.betonjayareadymix.com/2021/04/u-ditch-murah.html": "U Ditch Murah",
    
    // [MONEY_CHILD] - lokasi
    "https://www.betonjayareadymix.com/2021/04/u-ditch-terdekat.html": "U Ditch Terdekat",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-jakarta.html": "U Ditch Jakarta",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-bogor.html": "U Ditch Bogor",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-depok.html": "U Ditch Depok",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-tangerang.html": "U Ditch Tangerang",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-bekasi.html": "U Ditch Bekasi",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-bandung.html": "U Ditch Bandung",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-karawang.html": "U Ditch Karawang",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-surabaya.html": "U Ditch Surabaya",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-mojokerto.html": "U Ditch Mojokerto",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-cirebon.html": "U Ditch Cirebon",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-sidoarjo.html": "U Ditch Sidoarjo",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-gresik.html": "U Ditch Gresik",

    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-jakarta.html": "Harga U Ditch Jakarta",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-bogor.html": "Harga U Ditch Bogor",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-depok.html": "Harga U Ditch Depok",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-tangerang.html": "Harga U Ditch Tangerang",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-bekasi.html": "Harga U Ditch Bekasi",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-bandung.html": "Harga U Ditch Bandung",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-karawang.html": "Harga U Ditch Karawang",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-surabaya.html": "Harga U Ditch Surabaya",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-mojokerto.html": "Harga U Ditch Mojokerto",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-cirebon.html": "Harga U Ditch Cirebon",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-sidoarjo.html": "Harga U Ditch Sidoarjo",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-gresik.html": "Harga U Ditch Gresik"

    /*
    // [SUB2]
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-dusaspun.html": "Harga U Ditch Dusaspun",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-duracon.html": "Harga U Ditch Duracon",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-precon.html": "Harga U Ditch Precon",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-asiacon.html": "Harga U Ditch Asiacon",
    
    
    "https://www.betonjayareadymix.com/2021/04/fungsi-u-ditch.html": "Fungsi U Ditch",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-precast.html": "U Ditch Precast",
    "https://www.betonjayareadymix.com/2021/04/ukuran-u-ditch-beton.html": "Ukuran U Ditch Beton",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-dusaspun.html": "U Ditch Dusaspun",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-scg.html": "U Ditch SCG",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-wika-beton.html": "U Ditch Wika Beton",
    // [VARIANT] - ukuran
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-40-x-60.html": "Harga U Ditch 40 x 60",
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-40-x-40.html": "Harga U Ditch 40 x 40",
    
    "https://www.betonjayareadymix.com/2021/04/u-ditch-40x40x120.html": "U Ditch 40x40x120",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-60x60.html": "U Ditch 60x60",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-80x80.html": "U Ditch 80x80",
    "http://www.betonjayareadymix.com/2021/04/u-ditch-90x90.html": "U ditch 90x90",
    "https://www.betonjayareadymix.com/2021/04/u-ditch-70x70.html": "U Ditch 70x70",
    
    "https://www.betonjayareadymix.com/2021/04/harga-u-ditch-k350.html": "Harga U Ditch k350",
    
    // [MONEY_MASTER] - cover
    "https://www.betonjayareadymix.com/2021/04/harga-cover-tutup-u-ditch.html": "Harga Cover Tutup U Ditch",
    "https://www.betonjayareadymix.com/2021/04/jual-tutup-u-ditch.html": "Jual Tutup U Ditch",
    // [SUB2]
    "https://www.betonjayareadymix.com/2021/04/ukuran-cover-u-ditch.html": "Ukuran Cover U Ditch",
    // [SUB1] - bridge
    "https://www.betonjayareadymix.com/2021/04/analisa-pemasangan-u-ditch.html": "Analisa Pemasangan U Ditch",
    "https://www.betonjayareadymix.com/2021/04/biaya-pemasangan-u-ditch.html": "Biaya Pemasangan U Ditch",
    "https://www.betonjayareadymix.com/2021/04/saluran-u-ditch-jalan.html": "Saluran U Ditch Jalan"
    */
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT — PENDEKATAN C
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[produk-saluran-post] 🔍 Check URL: ' + cleanUrl);

    var ALL_MAPPINGS = [
        urlMappingGorongGorongFromMoneyMasterToMoneyPage,
        urlMappingGorongBeton,
        urlMappingSaluranBetonFromMoneyMasterToVariant,
        urlMappingSaluranBeton,
        urlMappingPipaBetonFromMoneyMasterToMoneyPage,
        urlMappingPipaBetonFromMoneyMasterToVariant,
        urlMappingPipaBeton,
        urlMappingBuisBetonFromMoneyMasterToMoneyPage,
        urlMappingBuisBetonFromMoneyMasterToVariant,  
        urlMappingBuis,
        urlMappingBoxCulvertFromMoneyMasterToMoneyPage,
        urlMappingBoxCulvertFromMoneyMasterToVariant,
        urlMappingBoxCulvert,
        urlMappingUDitchFromMoneyMasterToMoneyPage,
        urlMappingUDitchFromMoneyMasterToVariant,
        urlMappingUditch
    ];

    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[produk-saluran-post] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }

    if (foundIndex === -1) {
        console.log('[produk-saluran-post] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__produkSaluranPostActive = false;
        return;
    }

    window.__produkSaluranPostActive = true;
    window.__produkSaluranPostMatchIndex = foundIndex;
    window.__produkSaluranPostMatchMappingName = foundMappingName;

    console.log(
        '[produk-saluran-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '" — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════

function initProdukSaluranPost() {
    // ⚡ Guard flag
    if (!window.__produkSaluranPostActive) {
        console.log('[produk-saluran-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    console.log('[produk-saluran-post] 🚀 Execute — URL cocok');

    var cleanUrlProdukSaluranKons = window.location.href.split(/[?#]/)[0];

    // ✅ Guard elemen DOM
    var ProdukKonsSaluranPost = document.getElementById("ProdukKonsSaluranPost");
    if (!ProdukKonsSaluranPost) {
        console.error("[produk-saluran-post] ❌ elemen Id ProdukKonsSaluranPost kondisi terhapus");
        return;
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 1] GORONG-GORONG BETON
    // ───────────────────────────────────────────────────────
  if (urlMappingGorongGorongFromMoneyMasterToMoneyPage[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingGorongGorongFromMoneyMasterToMoneyPage,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Gorong Gorong', url: 'https://www.betonjayareadymix.com/p/gorong-gorong.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingGorongBeton[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingGorongBeton,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                 { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Gorong Gorong', url: 'https://www.betonjayareadymix.com/p/gorong-gorong.html' },
                { name: 'Gorong Gorong Beton', url: 'https://www.betonjayareadymix.com/2022/02/gorong-gorong-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 2] SALURAN BETON
    // ───────────────────────────────────────────────────────
    if (urlMappingSaluranBetonFromMoneyMasterToVariant[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingSaluranBetonFromMoneyMasterToVariant,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Saluran Beton', url: 'https://www.betonjayareadymix.com/p/saluran-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingSaluranBeton[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingSaluranBeton,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Saluran Beton', url: 'https://www.betonjayareadymix.com/p/saluran-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 3] PIPA BETON
    // ───────────────────────────────────────────────────────
    if (urlMappingPipaBetonFromMoneyMasterToMoneyPage[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingPipaBetonFromMoneyMasterToMoneyPage,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Pipa Beton', url: 'https://www.betonjayareadymix.com/p/pipa-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingPipaBetonFromMoneyMasterToVariant[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingPipaBetonFromMoneyMasterToVariant,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Pipa Beton', url: 'https://www.betonjayareadymix.com/p/pipa-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingPipaBeton[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingPipaBeton,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Pipa Beton', url: 'https://www.betonjayareadymix.com/p/pipa-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 4] BUIS BETON
    // ───────────────────────────────────────────────────────
    if (urlMappingBuisBetonFromMoneyMasterToMoneyPage[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingBuisBetonFromMoneyMasterToMoneyPage,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Buis Beton', url: 'https://www.betonjayareadymix.com/p/buis-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingBuisBetonFromMoneyMasterToVariant[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingBuisBetonFromMoneyMasterToVariant,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Buis Beton', url: 'https://www.betonjayareadymix.com/p/buis-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingBuis[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingBuis,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Buis Beton', url: 'https://www.betonjayareadymix.com/p/buis-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 5] BOX CULVERT
    // ───────────────────────────────────────────────────────
    if (urlMappingBoxCulvertFromMoneyMasterToMoneyPage[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingBoxCulvertFromMoneyMasterToMoneyPage,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Box Culvert', url: 'https://www.betonjayareadymix.com/p/box-culvert.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingBoxCulvertFromMoneyMasterToVariant[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingBoxCulvertFromMoneyMasterToVariant,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Box Culvert', url: 'https://www.betonjayareadymix.com/p/box-culvert.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingBoxCulvert[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingBoxCulvert,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'Box Culvert', url: 'https://www.betonjayareadymix.com/p/box-culvert.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 6] U DITCH
    // ───────────────────────────────────────────────────────
  if (urlMappingUDitchFromMoneyMasterToMoneyPage[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingUDitchFromMoneyMasterToMoneyPage,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'U Ditch', url: 'https://www.betonjayareadymix.com/p/u-ditch.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingUDitchFromMoneyMasterToVariant[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingUDitchFromMoneyMasterToVariant,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'U Ditch', url: 'https://www.betonjayareadymix.com/p/u-ditch.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingUditch[cleanUrlProdukSaluranKons]) {
        generateBreadcrumbShared(
            urlMappingUditch,
            cleanUrlProdukSaluranKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' },
                { name: 'U Ditch', url: 'https://www.betonjayareadymix.com/p/u-ditch.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
//akhir tag initProdukSaluranPost
}
// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] AUTO-INIT
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProdukSaluranPost);
} else {
    initProdukSaluranPost();
}
