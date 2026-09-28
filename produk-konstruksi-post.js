// ============================================================
// PRODUK KONSTRUKSI — POST
// v2.1.0 — Early Exit + generateBreadcrumbShared + Fix Missing Mappings
// ============================================================

console.log('[produk-konstruksi-post] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

// ============================================================
// 📁 PRODUK BETON PRECAST
// Parent: Beton Precast (/p/beton-precast.html)
// ============================================================
const urlMappingProdukBetonPrecastPost = {
    // [MONEY_MASTER]
    "https://www.betonjayareadymix.com/2021/09/harga-beton-precast.html": "Harga Beton Precast",
    // [MONEY_CHILD]
    "https://www.betonjayareadymix.com/2021/09/harga-beton-precast-jembatan.html": "Harga Beton Precast Jembatan",
    "https://www.betonjayareadymix.com/2021/09/harga-beton-precast-lantai.html": "Harga Beton Precast Lantai",
    "https://www.betonjayareadymix.com/2021/09/harga-beton-precast-dinding.html": "Harga Beton Precast Dinding",
    "https://www.betonjayareadymix.com/2021/09/jual-beton-precast.html": "Jual Beton Precast",
    "https://www.betonjayareadymix.com/2021/09/jual-beton-precast-jakarta.html": "Jual Beton Precast Jakarta",
    "https://www.betonjayareadymix.com/2021/09/jual-beton-precast-malang.html": "Jual Beton Precast Malang",
    "https://www.betonjayareadymix.com/2021/09/jual-beton-precast-tangerang.html": "Jual Beton Precast Tangerang",
    "https://www.betonjayareadymix.com/2021/09/jual-beton-precast-depok.html": "Jual Beton Precast Depok",
    "https://www.betonjayareadymix.com/2021/09/jual-beton-precast-bandung.html": "Jual Beton Precast Bandung",
    "https://www.betonjayareadymix.com/2021/09/jual-beton-precast-bogor.html": "Jual Beton Precast Bogor",
    "https://www.betonjayareadymix.com/2021/09/jual-beton-precast-solo.html": "Jual Beton Precast Solo",
    // [SUB2]
    "https://www.betonjayareadymix.com/2022/01/scg-pipe-and-precast.html": "SCG Pipe And Precast",
    "https://www.betonjayareadymix.com/2021/04/merak-jaya-beton-precast.html": "Merak Jaya Beton Precast",
    "https://www.betonjayareadymix.com/2021/04/wika-beton-precast.html": "Wika Beton Precast",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-indonesia.html": "Beton Precast Indonesia",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-hcs.html": "Beton Precast HCS",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-untuk-jalan.html": "Beton Precast Untuk Jalan",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-untuk-saluran-irigasi.html": "Beton Precast Untuk Saluran Irigasi",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-untuk-lantai.html": "Beton Precast Untuk Lantai",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-untuk-rumah.html": "Beton Precast Untuk Rumah",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-jogja.html": "Beton Precast Jogja",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-depok.html": "Beton Precast Depok",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-bogor.html": "Beton Precast Bogor",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-bekasi.html": "Beton Precast Bekasi",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-subang.html": "Beton Precast Subang",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-bandung.html": "Beton Precast Bandung",
    "https://www.betonjayareadymix.com/2021/04/beton-precast-ruspin.html": "Beton Precast Ruspin",
    // [SUB1]
    "https://www.betonjayareadymix.com/2022/01/standar-pabrik-precast.html": "Standar Pabrik Precast"
};

// ============================================================
// 📁 PRODUK PANEL BETON PRECAST
// Parent: Panel Beton Precast (/p/panel-beton-precast.html)
// ============================================================
const urlMappingProdukPanelBetonPrecastPost = {
    // [MONEY_MASTER]
    "https://www.betonjayareadymix.com/2022/02/harga-panel-beton-precast.html": "Harga Panel Beton Precast",
    // [MONEY_CHILD]
    "https://www.betonjayareadymix.com/2022/02/panel-beton-precast-jakarta.html": "Panel Beton Precast Jakarta",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-precast-bogor.html": "Panel Beton Precast Bogor",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-precast-depok.html": "Panel Beton Precast Depok",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-precast-tangerang.html": "Panel Beton Precast Tangerang",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-precast-bekasi.html": "Panel Beton Precast Bekasi",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-precast-karawang.html": "Panel Beton Precast Karawang",
    // [SUB2]
    "https://www.betonjayareadymix.com/2022/02/jual-panel-beton-precast.html": "Jual Panel Beton Precast",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-precast-ready-stock.html": "Panel Beton Precast Ready Stock",
    "https://www.betonjayareadymix.com/2022/02/spesifikasi-panel-beton-precast.html": "Spesifikasi Panel Beton Precast",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-precast-untuk-dinding.html": "Panel Beton Precast Untuk Dinding",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-precast-pabrik.html": "Panel Beton Precast Pabrik",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-dinding-precast.html": "Panel Beton Dinding Precast",
    "https://www.betonjayareadymix.com/2022/02/panel-lantai-beton-precast.html": "Panel Lantai Beton Precast",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-pracetak-bangunan.html": "Panel Beton Pracetak Bangunan",
    "https://www.betonjayareadymix.com/2022/02/panel-dinding-pracetak-beton.html": "Panel Dinding Pracetak Beton",
    "https://www.betonjayareadymix.com/2022/02/panel-dinding-beton-pracetak-ringan.html": "Panel Dinding Beton Pracetak Ringan",
    "https://www.betonjayareadymix.com/2022/02/panel-beton-pracetak-untuk-gedung.html": "Panel Beton Pracetak Untuk Gedung"
};

// ============================================================
// 📁 PRODUK BETON RINGAN PRECAST
// Parent: Beton Ringan Precast (/p/beton-ringan-precast.html)
// ============================================================
const urlMappingProdukBetonRinganPrecastPost = {
    // [MONEY_MASTER]
    "https://www.betonjayareadymix.com/2021/07/harga-beton-ringan-precast.html": "Harga Beton Ringan Precast",
    // [MONEY_CHILD]
    "https://www.betonjayareadymix.com/2021/07/beton-ringan-precast-jakarta.html": "Beton Ringan Precast Jakarta",
    "https://www.betonjayareadymix.com/2021/07/beton-ringan-precast-bogor.html": "Beton Ringan Precast Bogor",
    "https://www.betonjayareadymix.com/2021/07/beton-ringan-precast-depok.html": "Beton Ringan Precast Depok",
    "https://www.betonjayareadymix.com/2021/07/beton-ringan-precast-tangerang.html": "Beton Ringan Precast Tangerang",
    "https://www.betonjayareadymix.com/2021/07/beton-ringan-precast-bekasi.html": "Beton Ringan Precast Bekasi",
    "https://www.betonjayareadymix.com/2021/07/beton-ringan-precast-karawang.html": "Beton Ringan Precast Karawang",
    "https://www.betonjayareadymix.com/2021/07/jual-beton-ringan-precast-jakarta.html": "Jual Beton Ringan Precast Jakarta",
    // [SUB2]
    "https://www.betonjayareadymix.com/2021/07/spesifikasi-beton-ringan-precast.html": "Spesifikasi Beton Ringan Precast",
    "https://www.betonjayareadymix.com/2021/07/kelebihan-beton-ringan-precast.html": "Kelebihan Beton Ringan Precast",
    "https://www.betonjayareadymix.com/2021/07/beton-ringan-precast-untuk-bangunan.html": "Beton Ringan Precast Untuk Bangunan",
    "https://www.betonjayareadymix.com/2021/07/beton-ringan-precast-berkualitas.html": "Beton Ringan Precast Berkualitas",
    "https://www.betonjayareadymix.com/2021/07/pabrik-beton-ringan-precast.html": "Pabrik Beton Ringan Precast",
    "https://www.betonjayareadymix.com/2021/07/beton-ringan-precast-siap-pakai.html": "Beton Ringan Precast Siap Pakai"
};

// ============================================================
// 📁 PRODUK TIANG PANCANG BETON
// Parent: Produk Pondasi Struktur (/p/produk-pondasi-struktur.html)
// ============================================================
const urlMappingProdukTiangPancangBeton = {
    // [MONEY_MASTER]
    "https://www.betonjayareadymix.com/2022/02/harga-tiang-pancang-beton.html": "Harga Tiang Pancang Beton",
    // [MONEY_CHILD]
    "https://www.betonjayareadymix.com/2022/02/harga-tiang-pancang-bogor.html": "Harga Tiang Pancang Beton Bogor",
    "https://www.betonjayareadymix.com/2022/02/harga-tiang-pancang-bekasi.html": "Harga Tiang Pancang Beton Bekasi",
    "https://www.betonjayareadymix.com/2022/02/harga-tiang-pancang-tangerang.html": "Harga Tiang Pancang Beton Tangerang",
    "https://www.betonjayareadymix.com/2022/02/harga-tiang-pancang-jakarta.html": "Harga Tiang Pancang Beton Jakarta",
    "https://www.betonjayareadymix.com/2022/02/harga-tiang-pancang-depok.html": "Harga Tiang Pancang Beton Depok",
    "https://www.betonjayareadymix.com/2022/02/harga-tiang-pancang-karawang.html": "Harga Tiang Pancang Beton Karawang",
    "https://www.betonjayareadymix.com/2022/02/harga-tiang-pancang-surabaya.html": "Harga Tiang Pancang Beton Surabaya",
    // [SUB2]
    "https://www.betonjayareadymix.com/2022/02/tiang-pancang-beton-ready-mix.html": "Tiang Pancang Beton Ready Mix",
    "https://www.betonjayareadymix.com/2022/02/jual-tiang-pancang-beton.html": "Jual Tiang Pancang Beton",
    "https://www.betonjayareadymix.com/2022/02/tiang-pancang-beton-cor.html": "Tiang Pancang Beton Cor",
    "https://www.betonjayareadymix.com/2022/02/pabrik-tiang-pancang-beton.html": "Pabrik Tiang Pancang Beton",
    "https://www.betonjayareadymix.com/2022/02/tiang-pancang-beton-precast.html": "Tiang Pancang Beton Precast",
    "https://www.betonjayareadymix.com/2022/02/tiang-pancang-beton-diameter-30-cm.html": "Tiang Pancang Beton Diameter 30 Cm",
    "https://www.betonjayareadymix.com/2022/02/tiang-pancang-beton-pondasi-rumah.html": "Tiang Pancang Beton Pondasi Rumah",
    "https://www.betonjayareadymix.com/2022/02/harga-tiang-pancang-beton-per-batang.html": "Harga Tiang Pancang Beton Per Batang"
};

// ============================================================
// 📁 PRODUK JUAL ALAT BERAT
// Parent: Produk Alat Konstruksi (/p/produk-alat-konstruksi.html)
// ============================================================
const urlMappingProdukJualAlatBerat = {
    // [MONEY_MASTER]
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-terbaru.html": "Harga Alat Berat Terbaru",
    // [MONEY_CHILD] - tipe spesifik
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-excavator.html": "Harga Alat Berat Excavator",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-excavator-baru.html": "Harga Alat Berat Excavator Baru",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-excavator-hitachi.html": "Harga Alat Berat Excavator Hitachi",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-excavator-komatsu.html": "Harga Alat Berat Excavator Komatsu",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-excavator-sany.html": "Harga Alat Berat Excavator Sany",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-excavator-mini.html": "Harga Alat Berat Excavator Mini",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-bulldozer.html": "Harga Alat Berat Bulldozer",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-bulldozer-baru.html": "Harga Alat Berat Bulldozer Baru",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-crane.html": "Harga Alat Berat Crane",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-forklift.html": "Harga Alat Berat Forklift",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-wheel-loader.html": "Harga Alat Berat Wheel Loader",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-motor-grader.html": "Harga Alat Berat Motor Grader",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-grader.html": "Harga Alat Berat Grader",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-loader.html": "Harga Alat Berat Loader",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-backhoe-loader.html": "Harga Alat Berat Backhoe Loader",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-beko.html": "Harga Alat Berat Beko",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-dump-truck.html": "Harga Alat Berat Dump Truck",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-boom-lift.html": "Harga Alat Berat Boom Lift",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-vibro.html": "Harga Alat Berat Vibro",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-roller.html": "Harga Alat Berat Roller",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-asphalt-mixing-plant.html": "Harga Alat Berat Asphalt Mixing Plant",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-asphalt-distributor.html": "Harga Alat Berat Asphalt Distributor",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-asphalt-paver-finisher.html": "Harga Alat Berat Asphalt Paver Finisher",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-asphalt-sprayer.html": "Harga Alat Berat Asphalt Sprayer",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-aspal.html": "Harga Alat Berat Aspal",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-amp.html": "Harga Alat Berat AMP",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-pc-75.html": "Harga Alat Berat PC 75",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-pc-100.html": "Harga Alat Berat PC 100",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-pc-200.html": "Harga Alat Berat PC 200",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-wales-baru.html": "Harga Alat Berat Wales Baru",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-sumitomo.html": "Harga Alat Berat Sumitomo",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-caterpillar.html": "Harga Alat Berat Caterpillar",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-kobelco.html": "Harga Alat Berat Kobelco",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-kobelco-baru.html": "Harga Alat Berat Kobelco Baru",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-komatsu.html": "Harga Alat Berat Komatsu",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-hitachi.html": "Harga Alat Berat Hitachi",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-sany.html": "Harga Alat Berat Sany",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-sheep-foot-tamping.html": "Harga Alat Berat Sheep Foot Tamping",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-three-wheel-macadam.html": "Harga Alat Berat Three Wheel Macadam",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-track-loader.html": "Harga Alat Berat Track Loader",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-drum-handler.html": "Harga Alat Berat Drum Handler",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-skid-steer-loader.html": "Harga Alat Berat Skid Steer Loader",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-beko-hitachi.html": "Harga Alat Berat Beko Hitachi",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-mini.html": "Harga Alat Berat Mini",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-mini-bekas.html": "Harga Alat Berat Mini Bekas",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-baru.html": "Harga Alat Berat Baru",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-bekas.html": "Harga Alat Berat Bekas",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-murah.html": "Harga Alat Berat Murah",
    "https://www.betonjayareadymix.com/2019/02/harga-1-unit-alat-berat.html": "Harga 1 Unit Alat Berat",
    "https://www.betonjayareadymix.com/2019/02/daftar-harga-alat-berat.html": "Daftar Harga Alat Berat",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-terkecil.html": "Harga Alat Berat Terkecil",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-tiang-pancang.html": "Harga Alat Tiang Pancang",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-lift-barang.html": "Harga Alat Lift Barang",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-hydraulic-jack-in-pile.html": "Harga Alat Hydraulic Jack In Pile",
    // [MONEY_CHILD] - jual per lokasi
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-jakarta.html": "Jual Alat Berat Jakarta",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-bandung.html": "Jual Alat Berat Bandung",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-tangerang.html": "Jual Alat Berat Tangerang",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-bekas-jakarta.html": "Jual Alat Berat Bekas Jakarta",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-bekas-murah.html": "Jual Alat Berat Bekas Murah",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-bekas.html": "Jual Alat Berat Bekas",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-baru.html": "Jual Alat Berat Baru",
    "https://www.betonjayareadymix.com/2019/02/jual-beli-alat-berat.html": "Jual Beli Alat Berat",
    "https://www.betonjayareadymix.com/2019/02/jual-beli-alat-berat-terdekat.html": "Jual Beli Alat Berat Terdekat",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-excavator.html": "Jual Alat Berat Excavator",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-excavator-bekas.html": "Jual Alat Berat Excavator Bekas",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-excavator-hitachi.html": "Jual Alat Berat Excavator Hitachi",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-berat-excavator-kobelco.html": "Jual Alat Berat Excavator Kobelco",
    "https://www.betonjayareadymix.com/2019/02/jual-beko.html": "Jual Beko",
    // [SUB2] - sub-pillar
    "https://www.betonjayareadymix.com/2019/02/alat-berat-wales.html": "Alat Berat Wales",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-grader.html": "Alat Berat Grader",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-caterpillar.html": "Alat Berat Caterpillar",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-crane.html": "Alat Berat Crane",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-loader.html": "Alat Berat Loader",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-excavator.html": "Alat Berat Excavator",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-untuk-meratakan-jalan.html": "Alat Berat Untuk Meratakan Jalan",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-untuk-angkat-barang.html": "Alat Berat Untuk Angkat Barang",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-untuk-pembersihan-lahan.html": "Alat Berat Untuk Pembersihan Lahan",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-untuk-pemadatan-tanah.html": "Alat Berat Untuk Pemadatan Tanah",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-untuk-meratakan-tanah.html": "Alat Berat Untuk Meratakan Tanah",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-untuk-meratakan-aspal.html": "Alat Berat Untuk Meratakan Aspal",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-tandem-roller.html": "Alat Berat Tandem Roller",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-roller.html": "Alat Berat Roller",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-sumitomo.html": "Alat Berat Sumitomo",
    "https://www.betonjayareadymix.com/2019/02/alat-alat-berat-untuk-pembuatan-jalan.html": "Alat Alat Berat Untuk Pembuatan Jalan",
    "https://www.betonjayareadymix.com/2019/02/alat-alat-berat-konstruksi.html": "Alat Alat Berat Konstruksi",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-beko.html": "Alat Berat Beko",
    // [SUB2] - lokasi
    "https://www.betonjayareadymix.com/2019/02/alat-berat-terdekat.html": "Alat Berat Terdekat",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-pandeglang.html": "Alat Berat Pandeglang",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-di-serang.html": "Alat Berat Di Serang",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-cilegon.html": "Alat Berat Cilegon",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-pangandaran.html": "Alat Berat Pangandaran",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-kuningan.html": "Alat Berat Kuningan",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-indramayu.html": "Alat Berat Indramayu",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-cianjur.html": "Alat Berat Cianjur",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-ciamis.html": "Alat Berat Ciamis",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-cirebon.html": "Alat Berat Cirebon",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-garut.html": "Alat Berat Garut",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-tasikmalaya.html": "Alat Berat Tasikmalaya",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-sumedang.html": "Alat Berat Sumedang",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-majalengka.html": "Alat Berat Majalengka",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-bandung.html": "Alat Berat Bandung",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-purwakarta.html": "Alat Berat Purwakarta",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-karawang.html": "Alat Berat Karawang",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-depok.html": "Alat Berat Depok",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-tangerang.html": "Alat Berat Tangerang",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-bekasi.html": "Alat Berat Bekasi",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-bogor.html": "Alat Berat Bogor",
    "https://www.betonjayareadymix.com/2019/02/alat-berat-lebak.html": "Alat Berat Lebak"
};

// ============================================================
// 📁 PRODUK JUAL ALAT BERAT TAMBANG
// ============================================================
const urlMappingProdukJualAlatBeratTambang = {
    // [MONEY_MASTER]
    "https://www.betonjayareadymix.com/2019/02/alat-berat-tambang.html": "Alat Berat Tambang",
    // [MONEY_CHILD]
    "https://www.betonjayareadymix.com/2019/02/alat-berat-tambang-batu-bara.html": "Alat Berat Tambang Batu Bara",
    "https://www.betonjayareadymix.com/2019/02/harga-alat-berat-pertambangan.html": "Harga Alat Berat Pertambangan",
    "https://www.betonjayareadymix.com/2019/03/harga-mesin-bor-tambang.html": "Harga Mesin Bor Tambang",
    "https://www.betonjayareadymix.com/2019/03/jual-mesin-bor-tambang.html": "Jual Mesin Bor Tambang",
    "https://www.betonjayareadymix.com/2019/03/harga-alat-bor-tambang.html": "Harga Alat Bor Tambang",
    "https://www.betonjayareadymix.com/2019/03/jual-alat-bor-tambang.html": "Jual Alat Bor Tambang",
    // [SUB2]
    "https://www.betonjayareadymix.com/2019/03/core-drill-bor-tambang.html": "Core Drill Bor Tambang",
    "https://www.betonjayareadymix.com/2019/03/harga-mesin-bor-hidrolik-tambang.html": "Harga Mesin Bor Hidrolik Tambang"
};

// ============================================================
// 📁 PRODUK JUAL ALAT KONSTRUKSI RINGAN
// ============================================================
const urlMappingProdukJualAlatKonstruksiRinganPost = {
    // [MONEY_MASTER] + [MONEY_CHILD]
    "https://www.betonjayareadymix.com/2019/02/harga-alat-konstruksi-ringan.html": "Harga Alat Konstruksi Ringan",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-konstruksi-ringan-murah.html": "Jual Alat Konstruksi Ringan Murah",
    "https://www.betonjayareadymix.com/2019/02/harga-molen-beton.html": "Harga Molen Beton",
    "https://www.betonjayareadymix.com/2019/02/jual-molen-beton.html": "Jual Molen Beton",
    "https://www.betonjayareadymix.com/2019/02/harga-vibrator-beton.html": "Harga Vibrator Beton",
    "https://www.betonjayareadymix.com/2019/02/jual-vibrator-beton.html": "Jual Vibrator Beton",
    "https://www.betonjayareadymix.com/2019/02/harga-bar-bender.html": "Harga Bar Bender",
    "https://www.betonjayareadymix.com/2019/02/jual-bar-bender.html": "Jual Bar Bender",
    "https://www.betonjayareadymix.com/2019/02/harga-bar-cutter.html": "Harga Bar Cutter",
    "https://www.betonjayareadymix.com/2019/02/jual-bar-cutter.html": "Jual Bar Cutter",
    "https://www.betonjayareadymix.com/2019/02/harga-concrete-cutter.html": "Harga Concrete Cutter",
    "https://www.betonjayareadymix.com/2019/02/jual-concrete-cutter.html": "Jual Concrete Cutter",
    "https://www.betonjayareadymix.com/2019/02/harga-concrete-pump.html": "Harga Concrete Pump",
    "https://www.betonjayareadymix.com/2019/02/jual-concrete-pump.html": "Jual Concrete Pump",
    "https://www.betonjayareadymix.com/2019/02/harga-stamper-kuda.html": "Harga Stamper Kuda",
    "https://www.betonjayareadymix.com/2019/02/jual-stamper-kuda.html": "Jual Stamper Kuda",
    "https://www.betonjayareadymix.com/2019/02/harga-compactor-roller-ringan.html": "Harga Compactor Roller Ringan",
    "https://www.betonjayareadymix.com/2019/02/jual-compactor-roller-ringan.html": "Jual Compactor Roller Ringan",
    "https://www.betonjayareadymix.com/2019/02/harga-generator-set.html": "Harga Generator Set",
    "https://www.betonjayareadymix.com/2019/02/jual-generator-set.html": "Jual Generator Set",
    "https://www.betonjayareadymix.com/2019/02/harga-water-pump.html": "Harga Water Pump",
    "https://www.betonjayareadymix.com/2019/02/jual-water-pump.html": "Jual Water Pump",
    "https://www.betonjayareadymix.com/2019/02/harga-las-listrik.html": "Harga Las Listrik",
    "https://www.betonjayareadymix.com/2019/02/jual-las-listrik.html": "Jual Las Listrik",
    "https://www.betonjayareadymix.com/2019/02/harga-gerinda-tangan.html": "Harga Gerinda Tangan",
    "https://www.betonjayareadymix.com/2019/02/jual-gerinda-tangan.html": "Jual Gerinda Tangan",
    "https://www.betonjayareadymix.com/2019/02/harga-bor-tangan.html": "Harga Bor Tangan",
    "https://www.betonjayareadymix.com/2019/02/jual-bor-tangan.html": "Jual Bor Tangan",
    "https://www.betonjayareadymix.com/2019/02/harga-dongkrak-hidrolik.html": "Harga Dongkrak Hidrolik",
    "https://www.betonjayareadymix.com/2019/02/jual-dongkrak-hidrolik.html": "Jual Dongkrak Hidrolik",
    "https://www.betonjayareadymix.com/2019/02/harga-hoist.html": "Harga Hoist",
    "https://www.betonjayareadymix.com/2019/02/jual-hoist.html": "Jual Hoist",
    "https://www.betonjayareadymix.com/2019/02/harga-roda-kontraktor.html": "Harga Roda Kontraktor",
    "https://www.betonjayareadymix.com/2019/02/jual-roda-kontraktor.html": "Jual Roda Kontraktor",
    "https://www.betonjayareadymix.com/2019/02/harga-kompresor-angin.html": "Harga Kompresor Angin",
    "https://www.betonjayareadymix.com/2019/02/jual-kompresor-angin.html": "Jual Kompresor Angin",
    "https://www.betonjayareadymix.com/2019/02/harga-jackhammer.html": "Harga Jackhammer",
    "https://www.betonjayareadymix.com/2019/02/jual-jackhammer.html": "Jual Jackhammer",
    "https://www.betonjayareadymix.com/2019/02/harga-bobok-beton.html": "Harga Bobok Beton",
    "https://www.betonjayareadymix.com/2019/02/jual-bobok-beton.html": "Jual Bobok Beton",
    "https://www.betonjayareadymix.com/2019/02/harga-scaffolding.html": "Harga Scaffolding",
    "https://www.betonjayareadymix.com/2019/02/jual-scaffolding.html": "Jual Scaffolding",
    "https://www.betonjayareadymix.com/2019/02/harga-steger.html": "Harga Steger",
    "https://www.betonjayareadymix.com/2019/02/jual-steger.html": "Jual Steger",
    "https://www.betonjayareadymix.com/2019/02/harga-concrete-trowel.html": "Harga Concrete Trowel",
    "https://www.betonjayareadymix.com/2019/02/jual-concrete-trowel.html": "Jual Concrete Trowel",
    "https://www.betonjayareadymix.com/2019/02/harga-power-trowel.html": "Harga Power Trowel",
    "https://www.betonjayareadymix.com/2019/02/jual-power-trowel.html": "Jual Power Trowel",
    // [MONEY_CHILD] - lokasi
    "https://www.betonjayareadymix.com/2019/02/jual-alat-konstruksi-ringan-jakarta.html": "Jual Alat Konstruksi Ringan Jakarta",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-konstruksi-ringan-bogor.html": "Jual Alat Konstruksi Ringan Bogor",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-konstruksi-ringan-depok.html": "Jual Alat Konstruksi Ringan Depok",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-konstruksi-ringan-tangerang.html": "Jual Alat Konstruksi Ringan Tangerang",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-konstruksi-ringan-bekasi.html": "Jual Alat Konstruksi Ringan Bekasi",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-konstruksi-ringan-bandung.html": "Jual Alat Konstruksi Ringan Bandung",
    "https://www.betonjayareadymix.com/2019/02/jual-alat-konstruksi-ringan-surabaya.html": "Jual Alat Konstruksi Ringan Surabaya",
    // [SUB2]
    "https://www.betonjayareadymix.com/2019/02/alat-dongkrak-hidrolik.html": "Alat Dongkrak Hidrolik",
    "https://www.betonjayareadymix.com/2019/02/molen-beton.html": "Molen Beton",
    "https://www.betonjayareadymix.com/2019/02/vibrator-beton.html": "Vibrator Beton",
    "https://www.betonjayareadymix.com/2019/02/bar-bender-besi.html": "Bar Bender Besi",
    "https://www.betonjayareadymix.com/2019/02/bar-cutter-besi.html": "Bar Cutter Besi",
    "https://www.betonjayareadymix.com/2019/02/concrete-cutter.html": "Concrete Cutter",
    "https://www.betonjayareadymix.com/2019/02/concrete-pump.html": "Concrete Pump",
    "https://www.betonjayareadymix.com/2019/02/stamper-kuda.html": "Stamper Kuda",
    "https://www.betonjayareadymix.com/2019/02/compactor-roller.html": "Compactor Roller",
    "https://www.betonjayareadymix.com/2019/02/genset-konstruksi.html": "Genset Konstruksi",
    "https://www.betonjayareadymix.com/2019/02/water-pump-konstruksi.html": "Water Pump Konstruksi",
    "https://www.betonjayareadymix.com/2019/02/mesin-las-konstruksi.html": "Mesin Las Konstruksi",
    "https://www.betonjayareadymix.com/2019/02/gerinda-tangan.html": "Gerinda Tangan",
    "https://www.betonjayareadymix.com/2019/02/mesin-bor-tangan.html": "Mesin Bor Tangan",
    "https://www.betonjayareadymix.com/2019/02/hoist-angkat-barang.html": "Hoist Angkat Barang",
    "https://www.betonjayareadymix.com/2019/02/kompresor-angin.html": "Kompresor Angin",
    "https://www.betonjayareadymix.com/2019/02/jackhammer-beton.html": "Jackhammer Beton",
    "https://www.betonjayareadymix.com/2019/02/mesin-bobok-beton.html": "Mesin Bobok Beton",
    "https://www.betonjayareadymix.com/2019/02/scaffolding-besi.html": "Scaffolding Besi",
    "https://www.betonjayareadymix.com/2019/02/steger-bangunan.html": "Steger Bangunan",
    "https://www.betonjayareadymix.com/2019/02/concrete-trowel.html": "Concrete Trowel",
    "https://www.betonjayareadymix.com/2019/02/power-trowel.html": "Power Trowel",
    // [SUB2] - lokasi
    "https://www.betonjayareadymix.com/2019/02/alat-konstruksi-ringan-jakarta.html": "Alat Konstruksi Ringan Jakarta",
    "https://www.betonjayareadymix.com/2019/02/alat-konstruksi-ringan-bogor.html": "Alat Konstruksi Ringan Bogor",
    "https://www.betonjayareadymix.com/2019/02/alat-konstruksi-ringan-depok.html": "Alat Konstruksi Ringan Depok",
    "https://www.betonjayareadymix.com/2019/02/alat-konstruksi-ringan-tangerang.html": "Alat Konstruksi Ringan Tangerang",
    "https://www.betonjayareadymix.com/2019/02/alat-konstruksi-ringan-bekasi.html": "Alat Konstruksi Ringan Bekasi",
    "https://www.betonjayareadymix.com/2019/02/alat-konstruksi-ringan-bandung.html": "Alat Konstruksi Ringan Bandung",
    // [SUB1] - bridge
    "https://www.betonjayareadymix.com/2019/02/cara-memilih-alat-konstruksi-ringan.html": "Cara Memilih Alat Konstruksi Ringan",
    "https://www.betonjayareadymix.com/2019/02/standar-keamanan-alat-konstruksi-ringan.html": "Standar Keamanan Alat Konstruksi Ringan",
    "https://www.betonjayareadymix.com/2019/02/perawatan-alat-konstruksi-ringan.html": "Perawatan Alat Konstruksi Ringan"
};

// ============================================================
// 📁 PRODUK JEMBATAN FLYOVER — Standar & Spesifikasi
// ⚠️ FIX: mapping ini sebelumnya TIDAK dimasukkan ke urlMappingGabungan
// ============================================================
const urlMappingProdukJembatanFlyoverStandarSpesifikasiFlyoverPost = {
    // [MONEY_MASTER]
    "https://www.betonjayareadymix.com/2022/02/harga-jembatan-flyover.html": "Harga Jembatan Flyover",
    // [SUB2]
    "https://www.betonjayareadymix.com/2022/02/spesifikasi-jembatan-flyover.html": "Spesifikasi Jembatan Flyover",
    "https://www.betonjayareadymix.com/2022/02/standar-konstruksi-flyover.html": "Standar Konstruksi Flyover"
};

// ============================================================
// 📁 PRODUK JEMBATAN FLYOVER — Layanan & Proyek
// ⚠️ FIX: mapping ini sebelumnya TIDAK dimasukkan ke urlMappingGabungan
// ============================================================
const urlMappingProdukJembatanFlyoverLayananProyekFlyoverPost = {
    // [MONEY_CHILD]
    "https://www.betonjayareadymix.com/2022/02/perawatan-jembatan-flyover.html": "Perawatan Jembatan Flyover",
    "https://www.betonjayareadymix.com/2022/02/konstruksi-flyover-cepat.html": "Konstruksi Flyover Cepat",
    "https://www.betonjayareadymix.com/2022/02/kontraktor-jembatan-flyover.html": "Kontraktor Jembatan Flyover",
    // [SUB2]
    "https://www.betonjayareadymix.com/2022/02/tender-proyek-jembatan-flyover.html": "Tender Proyek Jembatan Flyover"
};

// ============================================================
// 📁 PRODUK JEMBATAN FLYOVER — Tipe & Material
// ⚠️ FIX: mapping ini sebelumnya TIDAK dimasukkan ke urlMappingGabungan
// ============================================================
const urlMappingProdukJembatanFlyoverTipeMaterialFlyoverPost = {
    // [SUB2]
    "https://www.betonjayareadymix.com/2022/02/desain-jembatan-layang.html": "Desain Jembatan Layang",
    "https://www.betonjayareadymix.com/2022/02/flyover-beton-precast.html": "Flyover Beton Precast",
    "https://www.betonjayareadymix.com/2022/02/flyover-baja.html": "Flyover Baja"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT — PENDEKATAN C
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[produk-konstruksi-post] 🔍 Check URL: ' + cleanUrl);

    var ALL_MAPPINGS = [
        urlMappingProdukBetonPrecastPost,
        urlMappingProdukPanelBetonPrecastPost,
        urlMappingProdukBetonRinganPrecastPost,
        urlMappingProdukTiangPancangBeton,
        urlMappingProdukJualAlatBeratTambang,
        urlMappingProdukJualAlatBerat,
        urlMappingProdukJualAlatKonstruksiRinganPost,
        // ✅ FIX: mapping Flyover yang sebelumnya hilang
        urlMappingProdukJembatanFlyoverStandarSpesifikasiFlyoverPost,
        urlMappingProdukJembatanFlyoverLayananProyekFlyoverPost,
        urlMappingProdukJembatanFlyoverTipeMaterialFlyoverPost
    ];

    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[produk-konstruksi-post] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }

    if (foundIndex === -1) {
        console.log('[produk-konstruksi-post] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__produkKonsPostActive = false;
        return;
    }

    window.__produkKonsPostActive = true;
    window.__produkKonsPostMatchIndex = foundIndex;
    window.__produkKonsPostMatchMappingName = foundMappingName;

    console.log(
        '[produk-konstruksi-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '" — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════

function initProdukKonsPost() {
    // ⚡ Guard flag
    if (!window.__produkKonsPostActive) {
        console.log('[produk-konstruksi-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    console.log('[produk-konstruksi-post] 🚀 Execute — URL cocok');

    var cleanUrlProdukKons = window.location.href.split(/[?#]/)[0];

    // ✅ Guard elemen DOM
    var ProdukKonsPost = document.getElementById("ProdukKonsPost");
    if (!ProdukKonsPost) {
        console.error("[produk-konstruksi-post] ❌ elemen Id ProdukKonsPost kondisi terhapus");
        return;
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 1] PRODUK BETON PRECAST
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukBetonPrecastPost[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukBetonPrecastPost,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Beton Precast', url: 'https://www.betonjayareadymix.com/p/beton-precast.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 2] PRODUK PANEL BETON PRECAST
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukPanelBetonPrecastPost[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPanelBetonPrecastPost,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Panel Beton Precast', url: 'https://www.betonjayareadymix.com/p/panel-beton-precast.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 3] PRODUK BETON RINGAN PRECAST
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukBetonRinganPrecastPost[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukBetonRinganPrecastPost,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Beton Ringan Precast', url: 'https://www.betonjayareadymix.com/p/beton-ringan-precast.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 4] PRODUK TIANG PANCANG BETON
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukTiangPancangBeton[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukTiangPancangBeton,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Produk Pondasi dan Struktur', url: 'https://www.betonjayareadymix.com/p/produk-pondasi-struktur.html' },
                { name: 'Produk Tiang Pancang Beton', url: 'https://www.betonjayareadymix.com/p/produk-tiang-pancang-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 5] PRODUK JUAL ALAT BERAT TAMBANG
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukJualAlatBeratTambang[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukJualAlatBeratTambang,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-alat-konstruksi.html' },
                { name: 'Jual Alat Berat Tambang', url: 'https://www.betonjayareadymix.com/p/jual-alat-berat-tambang.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 6] PRODUK JUAL ALAT BERAT
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukJualAlatBerat[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukJualAlatBerat,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-alat-konstruksi.html' },
                { name: 'Jual Alat Berat', url: 'https://www.betonjayareadymix.com/p/jual-alat-berat.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 7] PRODUK JUAL ALAT KONSTRUKSI RINGAN
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukJualAlatKonstruksiRinganPost[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukJualAlatKonstruksiRinganPost,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-alat-konstruksi.html' },
                { name: 'Jual Alat Konstruksi Ringan', url: 'https://www.betonjayareadymix.com/p/jual-alat-konstruksi-ringan.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 8] PRODUK JEMBATAN FLYOVER — Standar & Spesifikasi
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukJembatanFlyoverStandarSpesifikasiFlyoverPost[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukJembatanFlyoverStandarSpesifikasiFlyoverPost,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Produk Jembatan Flyover', url: 'https://www.betonjayareadymix.com/p/produk-jembatan-flyover.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 9] PRODUK JEMBATAN FLYOVER — Layanan & Proyek
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukJembatanFlyoverLayananProyekFlyoverPost[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukJembatanFlyoverLayananProyekFlyoverPost,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Produk Jembatan Flyover', url: 'https://www.betonjayareadymix.com/p/produk-jembatan-flyover.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 10] PRODUK JEMBATAN FLYOVER — Tipe & Material
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukJembatanFlyoverTipeMaterialFlyoverPost[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukJembatanFlyoverTipeMaterialFlyoverPost,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Produk Jembatan Flyover', url: 'https://www.betonjayareadymix.com/p/produk-jembatan-flyover.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] AUTO-INIT
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProdukKonsPost);
} else {
    initProdukKonsPost();
}
