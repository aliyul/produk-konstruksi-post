// ============================================================
// PRODUK PEMBATAS — POST
// v2.0.0 — Early Exit + generateBreadcrumbShared + Unifikasi
// ============================================================

console.log('[produk-pembatas-post] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pagar-panel-beton (Money-Page)
// ➔ CHILD: Variant (Spesifikasi & Harga)
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pagar-panel-beton (Money-Page)
// ➔ CHILD: Variant (Spesifikasi, Mutu, & Tipe Produk)
// ═════════════════════════════════════════════════════════════════════
const urlMappingPagarPanelBetonFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/04/pagar-panel-beton-murah.html": "Pagar Panel Beton Murah",
  "https://www.betonjayareadymix.com/2019/04/pagar-panel-beton-precast.html": "Pagar Panel Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/jual-pagar-panel-beton-precast.html": "Jual Pagar Panel Beton Precast",
  
  // Berdasarkan Mutu
  "https://www.betonjayareadymix.com/2019/04/pagar-panel-beton-k225.html": "Pagar Panel Beton K225",
  "https://www.betonjayareadymix.com/2019/04/pagar-panel-beton-k250.html": "Pagar Panel Beton K250",
  "https://www.betonjayareadymix.com/2019/04/pagar-panel-beton-k300.html": "Pagar Panel Beton K300",
  
  // Berdasarkan Tampilan/Finishing
  "https://www.betonjayareadymix.com/2019/04/pagar-panel-beton-motif.html": "Pagar Panel Beton Motif",
  "https://www.betonjayareadymix.com/2019/04/pagar-panel-beton-polos.html": "Pagar Panel Beton Polos"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: harga-pagar-panel-beton (Money-Page / Pricing Hub)
// ➔ CHILD: Variant (Rincian Harga, Biaya, & Estimasi per Satuan)
// ═════════════════════════════════════════════════════════════════════
const urlMappingHargaPagarPanelBetonFromMoneyPageToVariant = {
  // Harga berdasarkan Mutu
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-panel-beton-k225.html": "Harga Pagar Panel Beton K225",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-panel-beton-k250.html": "Harga Pagar Panel Beton K250",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-panel-beton-k300.html": "Harga Pagar Panel Beton K300",
  
  // Harga berdasarkan Tampilan/Finishing
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-panel-beton-motif.html": "Harga Pagar Panel Beton Motif",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-panel-beton-polos.html": "Harga Pagar Panel Beton Polos",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-panel-beton-pracetak.html": "Harga Pagar Panel Beton Pracetak",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-panel-beton-murah.html": "Harga Pagar Panel Beton Murah",
  
  // Harga berdasarkan Satuan / Komponen
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-panel-beton-per-meter.html": "Harga Pagar Panel Beton per Meter",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-panel-beton-per-lembar.html": "Harga Pagar Panel Beton per Lembar",
  "https://www.betonjayareadymix.com/2019/04/harga-tiang-pagar-panel-beton.html": "Harga Tiang Pagar Panel Beton",
  "https://www.betonjayareadymix.com/2019/04/biaya-pagar-panel-beton-per-meter.html": "Biaya Pagar Panel Beton per Meter"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pagar-beton (Money-Page)
// ➔ CHILD: Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingPagarBetonFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-beton.html": "Harga Pagar Beton",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-murah.html": "Pagar Beton Murah",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-pracetak.html": "Pagar Beton Pracetak",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-gazebo.html": "Pagar Beton Gazebo",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-precast.html": "Pagar Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/jual-pagar-beton-precast.html": "Jual Pagar Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-beton-motif.html": "Harga Pagar Beton Motif",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-beton-per-meter.html": "Harga Pagar Beton per Meter",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-motif.html": "Pagar Beton Motif",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-per-meter.html": "Pagar Beton per Meter",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-keliling.html": "Pagar Beton Keliling",
  "https://www.betonjayareadymix.com/2019/04/pagarbeton-jadi.html": "Pagar Beton Jadi",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-eser.html": "Pagar Beton Eser",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-modern.html": "Pagar Beton Modern",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-balkon.html": "Pagar Beton Balkon",
  "https://www.betonjayareadymix.com/2019/04/tiang-pagar-beton.html": "Tiang Pagar Beton",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-beton.html": "Pagar Rumah Beton",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-minimalis.html": "Pagar Beton Minimalis",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-lantai-2.html": "Pagar Beton Lantai 2",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-cantik.html": "Pagar Beton Cantik",
  "https://www.betonjayareadymix.com/2019/04/pagar-beton-terbaik.html": "Pagar Beton Terbaik"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pagar-rumah (Money-Page)
// ➔ CHILD: Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingPagarRumahFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-murah.html": "Pagar Rumah Murah",
  "https://www.betonjayareadymix.com/2019/04/gerbang-rumah.html": "Gerbang Rumah",
  "https://www.betonjayareadymix.com/2019/04/pagar-perumahan.html": "Pagar Perumahan",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-rumah.html": "Harga Pagar Rumah",
  "https://www.betonjayareadymix.com/2019/04/harga-gerbang-rumah.html": "Harga Gerbang Rumah",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-minimalis.html": "Pagar Rumah Minimalis",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-mewah.html": "Pagar Rumah Mewah",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-cantik.html": "Pagar Rumah Cantik",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-modern.html": "Pagar Rumah Modern",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-simple.html": "Pagar Rumah Simple",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-sederhana.html": "Pagar Rumah Sederhana",
  "https://www.betonjayareadymix.com/2019/04/pagar-teras-rumah.html": "Pagar Teras Rumah",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-estetik.html": "Pagar Rumah Estetik",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-industrial.html": "Pagar Rumah Industrial",
  "https://www.betonjayareadymix.com/2019/04/pagar-samping-rumah.html": "Pagar Samping Rumah",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-type-36.html": "Pagar Rumah Type 36",
  "https://www.betonjayareadymix.com/2019/04/rumah-pagar-minimalis.html": "Rumah Pagar Minimalis",
  "https://www.betonjayareadymix.com/2019/04/gerbang-rumah-mewah.html": "Gerbang Rumah Mewah",
  "https://www.betonjayareadymix.com/2019/04/gerbang-rumah-modern.html": "Gerbang Rumah Modern",
  "https://www.betonjayareadymix.com/2019/04/pagar-rumah-terbaru.html": "Pagar Rumah Terbaru",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-rumah-per-meter.html": "Harga Pagar Rumah per Meter",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-rumah-minimalis.html": "Harga Pagar Rumah Minimalis"
};

/*
const urlMappingPagarPanelBetonFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/2019/04/pagar-panel-beton-murah.html": "Pagar Panel Beton Murah"
};
*/

const urlMappingHargaPagarPanelBetonFromMoneyPageToMoneyChild = {
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-jakarta.html": "Harga Pagar Panel Beton Jakarta",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-bogor.html": "Harga Pagar Panel Beton Bogor",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-karawang.html": "Harga Pagar Panel Beton Karawang",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-depok.html": "Harga Pagar Panel Beton Depok",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-bekasi.html": "Harga Pagar Panel Beton Bekasi",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-tangerang.html": "Harga Pagar Panel Beton Tangerang",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-bandung.html": "Harga Pagar Panel Beton Bandung",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-cianjur.html": "Harga Pagar Panel Beton Cianjur",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-purwakarta.html": "Harga Pagar Panel Beton Purwakarta",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-tasikmalaya.html": "Harga Pagar Panel Beton Tasikmalaya",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-cirebon.html": "Harga Pagar Panel Beton Cirebon",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-indramayu.html": "Harga Pagar Panel Beton Indramayu",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-sukabumi.html": "Harga Pagar Panel Beton Sukabumi",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-subang.html": "Harga Pagar Panel Beton Subang",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-majalengka.html": "Harga Pagar Panel Beton Majalengka",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-garut.html": "Harga Pagar Panel Beton Garut",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-ciamis.html": "Harga Pagar Panel Beton Ciamis",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-kuningan.html": "Harga Pagar Panel Beton Kuningan",
    "https://www.betonjayareadymix.com/2019/05/harga-pagar-panel-beton-semarang.html": "Harga Pagar Panel Beton Semarang"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pagar-beton (Money-Page)
// ➔ CHILD: Money-Child (Lokasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingPagarBetonFromMoneyPageToMoneyChild = {
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-jakarta.html": "Pagar Beton Jakarta",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-bogor.html": "Pagar Beton Bogor",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-depok.html": "Pagar Beton Depok",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-bekasi.html": "Pagar Beton Bekasi",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-tangerang.html": "Pagar Beton Tangerang",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-bandung.html": "Pagar Beton Bandung",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-karawang.html": "Pagar Beton Karawang",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-cianjur.html": "Pagar Beton Cianjur",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-cirebon.html": "Pagar Beton Cirebon",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-indramayu.html": "Pagar Beton Indramayu",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-purwakarta.html": "Pagar Beton Purwakarta",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-sukabumi.html": "Pagar Beton Sukabumi",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-tasikmalaya.html": "Pagar Beton Tasikmalaya",
  "https://www.betonjayareadymix.com/2019/05/pagar-beton-subang.html": "Pagar Beton Subang",
  "https://www.betonjayareadymix.com/2019/05/harga-pagar-beton-jakarta.html": "Harga Pagar Beton Jakarta",
  "https://www.betonjayareadymix.com/2019/05/harga-pagar-beton-bogor.html": "Harga Pagar Beton Bogor",
  "https://www.betonjayareadymix.com/2019/05/harga-pagar-beton-depok.html": "Harga Pagar Beton Depok",
  "https://www.betonjayareadymix.com/2019/05/harga-pagar-beton-bekasi.html": "Harga Pagar Beton Bekasi",
  "https://www.betonjayareadymix.com/2019/05/harga-pagar-beton-tangerang.html": "Harga Pagar Beton Tangerang",
  "https://www.betonjayareadymix.com/2019/05/harga-pagar-beton-karawang.html": "Harga Pagar Beton Karawang"
};


// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pagar-panel-beton (Money-Page)
// ➔ CHILD: Money-Child (Lokasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingPagarPanelBetonFromMoneyPageToMoneyChild = {
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-jakarta.html": "Pagar Panel Beton Jakarta",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-bogor.html": "Pagar Panel Beton Bogor",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-depok.html": "Pagar Panel Beton Depok",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-tangerang.html": "Pagar Panel Beton Tangerang",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-bekasi.html": "Pagar Panel Beton Bekasi",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-karawang.html": "Pagar Panel Beton Karawang",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-bandung.html": "Pagar Panel Beton Bandung",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-cianjur.html": "Pagar Panel Beton Cianjur",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-purwakarta.html": "Pagar Panel Beton Purwakarta",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-tasikmalaya.html": "Pagar Panel Beton Tasikmalaya",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-cirebon.html": "Pagar Panel Beton Cirebon",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-indramayu.html": "Pagar Panel Beton Indramayu",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-sukabumi.html": "Pagar Panel Beton Sukabumi",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-subang.html": "Pagar Panel Beton Subang",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-majalengka.html": "Pagar Panel Beton Majalengka",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-garut.html": "Pagar Panel Beton Garut",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-ciamis.html": "Pagar Panel Beton Ciamis",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-kuningan.html": "Pagar Panel Beton Kuningan",
  "https://www.betonjayareadymix.com/2019/05/pagar-panel-beton-semarang.html": "Pagar Panel Beton Semarang"
};
// ============================================================
// 📁 PAGAR RUMAH
// ============================================================
const urlMappingProdukPagarRumah = {
    
};


const urlMappingPagarGrcFromMoneyMasterToVariant = {
  // ... (variant lain) ...
  "https://www.betonjayareadymix.com/2018/11/pagar-beton-grc.html": "Pagar Beton GRC"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pagar-grc (Money-Master)
// ➔ CHILD: Money-Child (Lokasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingPagarGrcFromMoneyMasterToMoneyChild = {
  "https://www.betonjayareadymix.com/2018/11/pagar-grc-terdekat.html": "Pagar GRC Terdekat",
  "https://www.betonjayareadymix.com/2018/11/pagar-grc-jakarta.html": "Pagar GRC Jakarta",
  "https://www.betonjayareadymix.com/2018/11/pagar-grc-bogor.html": "Pagar GRC Bogor",
  "https://www.betonjayareadymix.com/2018/11/pagar-grc-depok.html": "Pagar GRC Depok",
  "https://www.betonjayareadymix.com/2018/11/pagar-grc-tangerang.html": "Pagar GRC Tangerang",
  "https://www.betonjayareadymix.com/2018/11/pagar-grc-bekasi.html": "Pagar GRC Bekasi",
  "https://www.betonjayareadymix.com/2018/11/pagar-grc-cianjur.html": "Pagar GRC Cianjur"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pagar-brc (Money-Master)
// ➔ CHILD: Variant (Tipe, Harga Satuan, & Aplikasi Umum)
// ═════════════════════════════════════════════════════════════════════
const urlMappingPagarBrcFromMoneyMasterToVariant = {
  "https://www.betonjayareadymix.com/2019/04/pagar-brc-harga.html": "Pagar BRC Harga",
  "https://www.betonjayareadymix.com/2019/04/pagar-brc-murah.html": "Pagar BRC Murah",
  "https://www.betonjayareadymix.com/2019/04/brc-pagar.html": "BRC Pagar",
  "https://www.betonjayareadymix.com/2019/04/jual-pagar-brc.html": "Jual Pagar BRC",
  "https://www.betonjayareadymix.com/2019/04/pagar-brc-galvanis.html": "Pagar BRC Galvanis",
  "https://www.betonjayareadymix.com/2019/04/pagar-brc-per-meter.html": "Pagar BRC per Meter",
  "https://www.betonjayareadymix.com/2019/04/pagar-besi-brc.html": "Pagar Besi BRC",
  "https://www.betonjayareadymix.com/2019/04/harga-brc-pagar.html": "Harga BRC Pagar",
  "https://www.betonjayareadymix.com/2019/04/besi-pagar-brc.html": "Besi Pagar BRC",
  "https://www.betonjayareadymix.com/2019/04/tinggi-pagar-brc.html": "Tinggi Pagar BRC",
  "https://www.betonjayareadymix.com/2019/04/pagar-brc-rumah.html": "Pagar BRC Rumah",
  "https://www.betonjayareadymix.com/2019/04/harga-besi-pagar-brc.html": "Harga Besi Pagar BRC",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-brc-per-meter.html": "Harga Pagar BRC per Meter",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-brc-90-x-240.html": "Harga Pagar BRC 90x240",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-brc-120-cm.html": "Harga Pagar BRC 120 cm",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-brc-8mm.html": "Harga Pagar BRC 8mm",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-brc-galvanis.html": "Harga Pagar BRC Galvanis",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-brc-120-x-240.html": "Harga Pagar BRC 120x240",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-brc-190-x-240.html": "Harga Pagar BRC 190x240",
  "https://www.betonjayareadymix.com/2019/04/besi-brc-pagar.html": "Besi BRC Pagar",
  "https://www.betonjayareadymix.com/2019/04/harga-besi-brc-pagar.html": "Harga Besi BRC Pagar",
  "https://www.betonjayareadymix.com/2019/04/harga-besi-pagar-brc-per-meter.html": "Harga Besi Pagar BRC per Meter"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pagar-besi (Money-Master)
// ➔ CHILD: Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingPagarBesiFromMoneyMasterToVariant = {
  "https://www.betonjayareadymix.com/2019/04/pagar-besi-murah.html": "Pagar Besi Murah",
  "https://www.betonjayareadymix.com/2019/04/pagar-besi-tempa.html": "Pagar Besi Tempa",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-besi-per-meter.html": "Harga Pagar Besi per Meter",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-besi-permeter.html": "Harga Pagar Besi Permeter",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-minimalis.html": "Harga Pagar Minimalis",
  "https://www.betonjayareadymix.com/2019/04/pagar-besi-minimalis.html": "Pagar Besi Minimalis",
  "https://www.betonjayareadymix.com/2019/04/besi-pagar.html": "Besi Pagar",
  "https://www.betonjayareadymix.com/2019/04/pagar-besi-rumah.html": "Pagar Besi Rumah",
  "https://www.betonjayareadymix.com/2019/04/tralis-pagar.html": "Tralis Pagar",
  "https://www.betonjayareadymix.com/2019/04/pagar-lipat.html": "Pagar Lipat",
  "https://www.betonjayareadymix.com/2019/04/pagar-hollow-minimalis.html": "Pagar Hollow Minimalis",
  "https://www.betonjayareadymix.com/2019/04/pagar-tralis.html": "Pagar Tralis",
  "https://www.betonjayareadymix.com/2019/04/pintu-pagar-besi.html": "Pintu Pagar Besi",
  "https://www.betonjayareadymix.com/2019/04/pagar-besi-hollow-galvanis.html": "Pagar Besi Hollow Galvanis",
  "https://www.betonjayareadymix.com/2019/04/harga-pagar-minimalis-per-meter.html": "Harga Pagar Minimalis per Meter",
  "https://www.betonjayareadymix.com/2019/04/pagar-besi-minimalis-terbaru.html": "Pagar Besi Minimalis Terbaru",
  "https://www.betonjayareadymix.com/2019/04/pagar-plat-cutting.html": "Pagar Plat Cutting",
  "https://www.betonjayareadymix.com/2019/04/pagar-holo-minimalis.html": "Pagar Holo Minimalis",
  "https://www.betonjayareadymix.com/2019/04/pagar-terali-minimalis.html": "Pagar Terali Minimalis"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: kanstin-beton (Money-Master)
// ➔ CHILD: Variant (Tipe, Ukuran, & Harga)
// ═════════════════════════════════════════════════════════════════════
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: kanstin-beton (Money-Master)
// ➔ CHILD: Variant (Ukuran, Dimensi, Spesifikasi, Tipe, Harga, & Aplikasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingKanstinBetonFromMoneyMasterToVariant = {
  
  // ── GRUP 1: UKURAN (Lengkap, termasuk yang baru ditambahkan) ──
  "https://www.betonjayareadymix.com/2021/08/ukuran-kanstin-jalan-raya.html": "Ukuran Kanstin Jalan Raya",
  "https://www.betonjayareadymix.com/2021/08/ukuran-kanstin-paving-block.html": "Ukuran Kanstin Paving Block",
  "https://www.betonjayareadymix.com/2021/08/ukuran-kanstin-untuk-trotoar.html": "Ukuran Kanstin Untuk Trotoar",
  "https://www.betonjayareadymix.com/2021/08/ukuran-kanstin-sepatu.html": "Ukuran Kanstin Sepatu",
  "https://www.betonjayareadymix.com/2021/08/ukuran-kanstin-parkir.html": "Ukuran Kanstin Parkir",
  "https://www.betonjayareadymix.com/2021/08/ukuran-kanstin-s.html": "Ukuran Kanstin S",
  "https://www.betonjayareadymix.com/2021/04/ukuran-kanstin-trotoar.html": "Ukuran Kanstin Trotoar",
  "https://www.betonjayareadymix.com/2021/04/ukuran-kanstin-jalan.html": "Ukuran Kanstin Jalan",
  "https://www.betonjayareadymix.com/2021/04/ukuran-kanstin-paving.html": "Ukuran Kanstin Paving",
  "https://www.betonjayareadymix.com/2021/04/ukuran-kanstin-taman.html": "Ukuran Kanstin Taman",
  "https://www.betonjayareadymix.com/2021/04/ukuran-kanstin-beton.html": "Ukuran Kanstin Beton",

  // ── GRUP 2: DIMENSI & SPESIFIKASI TEKNIS (Lengkap) ──
  "https://www.betonjayareadymix.com/2021/04/dimensi-kanstin.html": "Dimensi Kanstin",
  "https://www.betonjayareadymix.com/2021/08/dimensi-kanstin-jalan.html": "Dimensi Kanstin Jalan",
  "https://www.betonjayareadymix.com/2021/08/dimensi-kanstin-trotoar.html": "Dimensi Kanstin Trotoar",
  "https://www.betonjayareadymix.com/2021/08/dimensi-kanstin-paving.html": "Dimensi Kanstin Paving",
  "https://www.betonjayareadymix.com/2021/08/spesifikasi-kanstin-jalan.html": "Spesifikasi Kanstin Jalan", // ✅ Ditambahkan
  "https://www.betonjayareadymix.com/2021/04/berat-kanstin.html": "Berat Kanstin",
  "https://www.betonjayareadymix.com/2021/04/tinggi-kanstin.html": "Tinggi Kanstin",
  "https://www.betonjayareadymix.com/2021/04/volume-kanstin.html": "Volume Kanstin",
  "https://www.betonjayareadymix.com/2021/04/sni-kanstin.html": "SNI Kanstin",
  "https://www.betonjayareadymix.com/2021/08/mutu-beton-untuk-kanstin.html": "Mutu Beton Untuk Kanstin", // ✅ Ditambahkan

  // ── GRUP 3: JENIS, TIPE & BENTUK (Lengkap) ──
  "https://www.betonjayareadymix.com/2021/04/jenis-kanstin.html": "Jenis Kanstin", // ✅ Ditambahkan
  "https://www.betonjayareadymix.com/2021/08/macam-kanstin.html": "Macam Kanstin", // ✅ Ditambahkan
  "https://www.betonjayareadymix.com/2021/04/type-kanstin.html": "Type Kanstin",
  "https://www.betonjayareadymix.com/2021/04/bentuk-kanstin.html": "Bentuk Kanstin",
  "https://www.betonjayareadymix.com/2021/04/cetakan-kanstin.html": "Cetakan Kanstin",
  "https://www.betonjayareadymix.com/2021/08/kanstin-l.html": "Kanstin L",
  "https://www.betonjayareadymix.com/2021/04/kanstin-s.html": "Kanstin S",
  "https://www.betonjayareadymix.com/2021/08/kanstin-conblock.html": "Kanstin Conblock",
  "https://www.betonjayareadymix.com/2021/08/kanstin-sepatu.html": "Kanstin Sepatu",
  "https://www.betonjayareadymix.com/2021/04/kanstin-slipform.html": "Kanstin Slipform",
  "https://www.betonjayareadymix.com/2021/04/kanstin-dki.html": "Kanstin DKI",
  "https://www.betonjayareadymix.com/2021/04/kanstin-cisangkan.html": "Kanstin Cisangkan",
  "https://www.betonjayareadymix.com/2021/04/kanstin-saluran.html": "Kanstin Saluran",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-kanstin.html": "Beton Precast Kanstin",
  "https://www.betonjayareadymix.com/2021/04/kanstin-paving-block.html": "Kanstin Paving Block",
  "https://www.betonjayareadymix.com/2021/09/kanstin-taman-cor.html": "Kanstin Taman Cor",
  "https://www.betonjayareadymix.com/2021/04/kanstin-car-stopper.html": "Kanstin Car Stopper",
  "https://www.betonjayareadymix.com/2021/04/car-stopper-beton.html": "Car Stopper Beton",
  "https://www.betonjayareadymix.com/2021/04/kanstin-tali-air.html": "Kanstin Tali Air",
  "https://www.betonjayareadymix.com/2021/08/kanstin-beton-pembatas-jalan.html": "Kanstin Beton Pembatas Jalan",
  "https://www.betonjayareadymix.com/2021/08/kanstin-jalan-raya.html": "Kanstin Jalan Raya",
  "https://www.betonjayareadymix.com/2021/08/kanstin-trotoar-jalan.html": "Kanstin Trotoar Jalan",

  // ── GRUP 4: HARGA SPESIFIK ──
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-murah.html": "Harga Kanstin Murah",
  "https://www.betonjayareadymix.com/2021/04/kanstin-murah.html": "Kanstin Murah",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-beton-paving-block.html": "Harga Kanstin Beton Paving Block",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-conblock.html": "Harga Kanstin Conblock",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-trotoar.html": "Harga Kanstin Trotoar",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-paving-block.html": "Harga Kanstin Paving Block",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-dki.html": "Harga Kanstin DKI",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-jalan.html": "Harga Kanstin Jalan",
  "https://www.betonjayareadymix.com/2021/04/harga-kanstin-paving.html": "Harga Kanstin Paving",
  "https://www.betonjayareadymix.com/2021/04/harga-kanstin-taman.html": "Harga Kanstin Taman",
  "https://www.betonjayareadymix.com/2021/04/harga-kanstin-per-meter.html": "Harga Kanstin per Meter",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-k-250.html": "Harga Kanstin K-250",
  "https://www.betonjayareadymix.com/2021/04/harga-kanstin-cisangkan.html": "Harga Kanstin Cisangkan",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-slip-form.html": "Harga Kanstin Slip Form",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-taman-10x20x40.html": "Harga Kanstin Taman 10x20x40",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-pembatas-jalan.html": "Harga Kanstin Pembatas Jalan",
  "https://www.betonjayareadymix.com/2021/04/harga-car-stopper-beton.html": "Harga Car Stopper Beton",

  // ── GRUP 5: JUAL & FUNGSI ──
  "https://www.betonjayareadymix.com/2021/08/jual-kanstin-beton.html": "Jual Kanstin Beton",
  "https://www.betonjayareadymix.com/2021/09/jual-kanstin-taman.html": "Jual Kanstin Taman",
  "https://www.betonjayareadymix.com/2021/08/jual-kanstin-jalan.html": "Jual Kanstin Jalan",
  "https://www.betonjayareadymix.com/2021/08/fungsi-kanstin-beton.html": "Fungsi Kanstin Beton",
  "https://www.betonjayareadymix.com/2021/08/cat-kanstin-jalan.html": "Cat Kanstin Jalan"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: pagar-brc (Money-Master)
// ➔ CHILD: Money-Child (Lokasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingPagarBrcFromMoneyMasterToMoneyChild = {
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-ciampea.html": "Pagar BRC Ciampea",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-rancaekek.html": "Pagar BRC Rancaekek",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-nagreg.html": "Pagar BRC Nagreg",
  "https://www.betonjayareadymix.com/2019/04/pagar-brc-terdekat.html": "Pagar BRC Terdekat",
  "https://www.betonjayareadymix.com/2019/04/jual-pagar-brc-terdekat.html": "Jual Pagar BRC Terdekat",
  "https://www.betonjayareadymix.com/2019/04/toko-pagar-brc-terdekat.html": "Toko Pagar BRC Terdekat",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-jakarta.html": "Pagar BRC Jakarta",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-bogor.html": "Pagar BRC Bogor",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-depok.html": "Pagar BRC Depok",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-tangerang.html": "Pagar BRC Tangerang",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-bekasi.html": "Pagar BRC Bekasi",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-karawang.html": "Pagar BRC Karawang",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-ciamis.html": "Pagar BRC Ciamis",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-sumedang.html": "Pagar BRC Sumedang",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-cianjur.html": "Pagar BRC Cianjur",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-bandung.html": "Pagar BRC Bandung",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-kuningan.html": "Pagar BRC Kuningan",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-subang.html": "Pagar BRC Subang",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-karawang-barat.html": "Pagar BRC Karawang Barat",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-purwakarta.html": "Pagar BRC Purwakarta",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-tasikmalaya.html": "Pagar BRC Tasikmalaya",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-garut.html": "Pagar BRC Garut",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-telukjambe-timur.html": "Pagar BRC Telukjambe Timur",
  "https://www.betonjayareadymix.com/2019/05/pagar-brc-kelapa-nunggal.html": "Pagar BRC Kelapa Nunggal"
};

// ============================================================
// 📁 PAGAR BESI
// ============================================================
const urlMappingProdukPagarBesi = {
   
};

// ============================================================
// 📁 PAGAR BATU ALAM (KOSONG - SARAN ITEM)
// ============================================================
const urlMappingProdukPagarBatuAlam = {
    // SARAN ITEM (BELUM AKTIF)
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: kanstin-beton (Money-Master)
// ➔ CHILD: Money-Child (Lokasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingKanstinBetonFromMoneyMasterToMoneyChild = {
  "https://www.betonjayareadymix.com/2021/08/kanstin-trotoar-tangerang.html": "Kanstin Trotoar Tangerang",
  "https://www.betonjayareadymix.com/2021/08/kanstin-trotoar-sukabumi.html": "Kanstin Trotoar Sukabumi",
  "https://www.betonjayareadymix.com/2021/08/kanstin-trotoar-bandung.html": "Kanstin Trotoar Bandung",
  "https://www.betonjayareadymix.com/2021/08/kanstin-trotoar-depok.html": "Kanstin Trotoar Depok",
  "https://www.betonjayareadymix.com/2021/08/kanstin-trotoar-bekasi.html": "Kanstin Trotoar Bekasi",
  "https://www.betonjayareadymix.com/2021/08/kanstin-trotoar-bogor.html": "Kanstin Trotoar Bogor",
  "https://www.betonjayareadymix.com/2021/08/kanstin-trotoar-jakarta.html": "Kanstin Trotoar Jakarta",
  "https://www.betonjayareadymix.com/2021/08/kanstin-kebumen.html": "Kanstin Kebumen",
  "https://www.betonjayareadymix.com/2021/04/kanstin-surabaya.html": "Kanstin Surabaya",
  "https://www.betonjayareadymix.com/2021/04/kanstin-malang.html": "Kanstin Malang",
  "https://www.betonjayareadymix.com/2021/04/kanstin-bandung.html": "Kanstin Bandung",
  "https://www.betonjayareadymix.com/2021/04/kanstin-bogor.html": "Kanstin Bogor",
  "https://www.betonjayareadymix.com/2021/04/kanstin-depok.html": "Kanstin Depok",
  "https://www.betonjayareadymix.com/2021/04/kanstin-bekasi.html": "Kanstin Bekasi",
  "https://www.betonjayareadymix.com/2021/09/jual-kanstin-taman-di-jakarta.html": "Jual Kanstin Taman di Jakarta",
  "https://www.betonjayareadymix.com/2021/09/jual-kanstin-taman-di-tangerang.html": "Jual Kanstin Taman di Tangerang",
  "https://www.betonjayareadymix.com/2021/09/jual-kanstin-taman-di-sukabumi.html": "Jual Kanstin Taman di Sukabumi",
  "https://www.betonjayareadymix.com/2021/09/jual-kanstin-taman-di-bandung.html": "Jual Kanstin Taman di Bandung",
  "https://www.betonjayareadymix.com/2021/09/jual-kanstin-taman-di-depok.html": "Jual Kanstin Taman di Depok",
  "https://www.betonjayareadymix.com/2021/09/jual-kanstin-taman-di-bekasi.html": "Jual Kanstin Taman di Bekasi",
  "https://www.betonjayareadymix.com/2021/09/jual-kanstin-taman-di-bogor.html": "Jual Kanstin Taman di Bogor",
  "https://www.betonjayareadymix.com/2021/08/jual-kanstin-jalan-di-bogor.html": "Jual Kanstin Jalan di Bogor",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-garut.html": "Harga Kanstin Garut",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-beton-bogor.html": "Harga Kanstin Beton Bogor",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-tangerang.html": "Harga Kanstin Tangerang",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-sukabumi.html": "Harga Kanstin Sukabumi",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-bekasi.html": "Harga Kanstin Bekasi",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-bogor.html": "Harga Kanstin Bogor",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-bandung.html": "Harga Kanstin Bandung",
  "https://www.betonjayareadymix.com/2021/08/harga-kanstin-di-malang.html": "Harga Kanstin di Malang",
  "https://www.betonjayareadymix.com/2021/04/harga-kanstin-surabaya.html": "Harga Kanstin Surabaya",
  "https://www.betonjayareadymix.com/2021/04/jual-kanstin-terdekat.html": "Jual Kanstin Terdekat",
  "https://www.betonjayareadymix.com/2021/04/jual-kanstin-di-surabaya.html": "Jual Kanstin di Surabaya",
  "https://www.betonjayareadymix.com/2021/08/jual-kanstin-jalan-di-jawa-barat.html": "Jual Kanstin Jalan di Jawa Barat",
  "https://www.betonjayareadymix.com/2021/04/jual-kanstin-di-jawa-barat.html": "Jual Kanstin di Jawa Barat"
};


// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT — PENDEKATAN C
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[produk-pembatas-post] 🔍 Check URL: ' + cleanUrl);

    var ALL_MAPPINGS = [
        urlMappingPagarPanelBetonFromMoneyPageToVariant,
        urlMappingHargaPagarPanelBetonFromMoneyPageToVariant,
        urlMappingPagarBetonFromMoneyPageToVariant,
        urlMappingPagarRumahFromMoneyPageToVariant,
        urlMappingPagarBrcFromMoneyMasterToVariant,
        urlMappingPagarBesiFromMoneyMasterToVariant,
        urlMappingKanstinBetonFromMoneyMasterToVariant,
    
        urlMappingPagarPanelBetonFromMoneyPageToMoneyChild,
        urlMappingHargaPagarPanelBetonFromMoneyPageToMoneyChild,

        urlMappingPagarBetonFromMoneyPageToMoneyChild,
        urlMappingProdukPagarRumah,
        urlMappingPagarGrcFromMoneyMasterToVariant,
        urlMappingPagarGrcFromMoneyMasterToMoneyChild,
        urlMappingPagarBrcFromMoneyMasterToMoneyChild,
        urlMappingProdukPagarBesi,
        urlMappingProdukPagarBatuAlam,
        urlMappingKanstinBetonFromMoneyMasterToMoneyChild
    ];

    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[produk-pembatas-post] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }

    if (foundIndex === -1) {
        console.log('[produk-pembatas-post] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__produkPembatasPostActive = false;
        return;
    }

    window.__produkPembatasPostActive = true;
    window.__produkPembatasPostMatchIndex = foundIndex;
    window.__produkPembatasPostMatchMappingName = foundMappingName;

    console.log(
        '[produk-pembatas-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '" — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════

function initProdukPembatasPost() {
    // ⚡ Guard flag
    if (!window.__produkPembatasPostActive) {
        console.log('[produk-pembatas-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    console.log('[produk-pembatas-post] 🚀 Execute — URL cocok');

    var cleanUrlProdukPembatasKons = window.location.href.split(/[?#]/)[0];

    // ✅ Guard elemen DOM
    var ProdukKonsPembatasPost = document.getElementById("ProdukKonsPembatasPost");
    if (!ProdukKonsPembatasPost) {
        console.error("[produk-pembatas-post] ❌ elemen Id ProdukKonsPembatasPost kondisi terhapus");
        return;
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 1] PAGAR PANEL (Header Page)
    // ───────────────────────────────────────────────────────
    if (urlMappingPagarPanelBetonFromMoneyPageToVariant[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPagarPanelBetonFromMoneyPageToVariant,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Panel', url: 'https://www.betonjayareadymix.com/p/pagar-panel.html' },
                { name: 'Pagar Panel Beton', url: 'https://www.betonjayareadymix.com/p/pagar-panel-beton.html'}
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingHargaPagarPanelBetonFromMoneyPageToVariant[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingHargaPagarPanelBetonFromMoneyPageToVariant,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },,
                { name: 'Pagar Panel', url: 'https://www.betonjayareadymix.com/p/pagar-panel.html' },
                { name: 'Harga Pagar Panel Beton', url: 'https://www.betonjayareadymix.com/p/harga-pagar-panel-beton.html'}
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingPagarBetonFromMoneyPageToVariant[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPagarBetonFromMoneyPageToVariant,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Besi', url: 'https://www.betonjayareadymix.com/p/pagar-besi.html' },
                { name: 'Pagar Beton', url: 'https://www.betonjayareadymix.com/p/pagar-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingPagarRumahFromMoneyPageToVariant[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPagarRumahFromMoneyPageToVariant,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Besi', url: 'https://www.betonjayareadymix.com/p/pagar-besi.html' },
                { name: 'Pagar Runah', url: 'https://www.betonjayareadymix.com/p/pagar-rumah.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    
    if (urlMappingPagarBrcFromMoneyMasterToVariant[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPagarBrcFromMoneyMasterToVariant,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Brc', url: 'https://www.betonjayareadymix.com/p/pagar-brc.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingPagarBesiFromMoneyMasterToVariant[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPagarBesiFromMoneyMasterToVariant,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Besi', url: 'https://www.betonjayareadymix.com/p/pagar-besi.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingKanstinBetonFromMoneyMasterToVariant[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingKanstinBetonFromMoneyMasterToVariant,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Kanstin Beton', url: 'https://www.betonjayareadymix.com/p/kanstin-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    
    if (urlMappingPagarPanelBetonFromMoneyPageToMoneyChild[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPagarPanelBetonFromMoneyPageToMoneyChild,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Panel', url: 'https://www.betonjayareadymix.com/p/pagar-panel.html' },
                { name: 'Pagar Panel Beton', url: 'https://www.betonjayareadymix.com/p/pagar-panel-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingHargaPagarPanelBetonFromMoneyPageToMoneyChild[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingHargaPagarPanelBetonFromMoneyPageToMoneyChild,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Panel', url: 'https://www.betonjayareadymix.com/p/pagar-panel.html' },
                { name: 'Harga Pagar Panel Beton', url: 'https://www.betonjayareadymix.com/p/harga-pagar-panel-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
  
    // ───────────────────────────────────────────────────────
    // [BLOK 2] PAGAR BETON
    // ───────────────────────────────────────────────────────
    if (urlMappingPagarBetonFromMoneyPageToMoneyChild[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPagarBetonFromMoneyPageToMoneyChild,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Beton', url: 'https://www.betonjayareadymix.com/p/pagar-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 3] PAGAR RUMAH
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukPagarRumah[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPagarRumah,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Rumah', url: 'https://www.betonjayareadymix.com/p/pagar-rumah.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 4] PAGAR GRC
    // ───────────────────────────────────────────────────────
    if (urlMappingPagarGrcFromMoneyMasterToVariant[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPagarGrcFromMoneyMasterToVariant,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar GRC', url: 'https://www.betonjayareadymix.com/p/pagar-grc.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingPagarGrcFromMoneyMasterToMoneyChild[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPagarGrcFromMoneyMasterToMoneyChild,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar GRC', url: 'https://www.betonjayareadymix.com/p/pagar-grc.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 5] PAGAR BRC
    // ───────────────────────────────────────────────────────
    if (urlMappingPagarBrcFromMoneyMasterToMoneyChild[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPagarBrcFromMoneyMasterToMoneyChild,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar BRC', url: 'https://www.betonjayareadymix.com/p/pagar-brc.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 6] PAGAR BESI
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukPagarBesi[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPagarBesi,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Besi', url: 'https://www.betonjayareadymix.com/p/pagar-besi.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 7] PAGAR BATU ALAM (mapping kosong — skip)
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukPagarBatuAlam[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPagarBatuAlam,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Batu Alam', url: 'https://www.betonjayareadymix.com/p/pagar-batu-alam.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 8] KANSTIN BETON
    // ───────────────────────────────────────────────────────
    if (urlMappingKanstinBetonFromMoneyMasterToMoneyChild[cleanUrlProdukPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingKanstinBetonFromMoneyMasterToMoneyChild,
            cleanUrlProdukPembatasKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Kanstin Beton', url: 'https://www.betonjayareadymix.com/p/kanstin-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] AUTO-INIT
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProdukPembatasPost);
} else {
    initProdukPembatasPost();
}
