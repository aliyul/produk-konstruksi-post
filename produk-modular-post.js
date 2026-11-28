// ============================================================
// PRODUK MODULAR (DINDING & BANGUNAN MODULAR) — POST
// v2.0.0 — Early Exit + generateBreadcrumbShared + Auto-Init
// ============================================================

console.log('[produk-modular-post] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: bangunan-prefab-modular (Money-Master)
// ➔ CHILD: Money-Page (Kategori Produk Spesifik)
// ═════════════════════════════════════════════════════════════════════
const urlMappingBangunanPrefabModularFromMoneyMasterToMoneyPage = {
    "https://www.betonjayareadymix.com/2019/04/modular-kamar-mandi-toilet.html": "Modular Kamar Mandi Toilet",
  "https://www.betonjayareadymix.com/2019/04/bangunan-ruspin-modular.html": "Bangunan Ruspin Modular"
  // (Tambahkan MP lain di sini jika ada, misal: bangunan-ruspin-modular)
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: modular-kamar-mandi-toilet (Money-Page)
// ➔ CHILD: Variant (Tipe, Aplikasi, & Harga Spesifik)
// ═════════════════════════════════════════════════════════════════════
const urlMappingModularKamarMandiToiletFromMoneyPageToVariant = {
  // Berdasarkan Kapasitas/Desain
  "https://www.betonjayareadymix.com/2019/04/toilet-modular-3-pintu.html": "Toilet Modular 3 Pintu",
  "https://www.betonjayareadymix.com/2019/04/toilet-modular-custom-desain.html": "Toilet Modular Custom Desain",
  
  // Berdasarkan Aplikasi/Mobilitas
  "https://www.betonjayareadymix.com/2019/04/kamar-mandi-modular-portable.html": "Kamar Mandi Modular Portable",
  "https://www.betonjayareadymix.com/2019/04/toilet-modular-site-office.html": "Toilet Modular Site Office",
  
  // Pricing Hub Spesifik
  "https://www.betonjayareadymix.com/2019/04/harga-toilet-modular.html": "Harga Toilet Modular"
};
// Panel Beton
const urlMappingPanelBetonFromMoneyMasterToVariant = {
  "https://www.betonjayareadymix.com/2019/04/dinding-panel-beton-precast-modular.html": "Dinding Panel Beton Precast Modular",
  "https://www.betonjayareadymix.com/2019/04/sistem-dinding-modular-beton.html": "Sistem Dinding Modular Beton",
  "https://www.betonjayareadymix.com/2019/04/rumah-modular-panel-beton-precast.html": "Rumah Modular Panel Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/bangunan-modular-panel-beton-precast.html": "Bangunan Modular Panel Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/konstruksi-modular-panel-beton.html": "Konstruksi Modular Panel Beton",
  "https://www.betonjayareadymix.com/2019/04/teknologi-dinding-panel-modular-beton.html": "Teknologi Dinding Panel Modular Beton",
  "https://www.betonjayareadymix.com/2019/04/material-modular-dinding-beton-precast.html": "Material Modular Dinding Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/inovasi-panel-modular-beton-precast.html": "Inovasi Panel Modular Beton Precast"
};

// Bangunan Prefab Modular
const urlMappingBangunanPrefabModularFromMoneyMasterToVariant = {
  "https://www.betonjayareadymix.com/2019/04/toilet-modular-custom-desain.html": "Toilet Modular Custom Desain",
  "https://www.betonjayareadymix.com/2019/04/kamar-mandi-modular-portable.html": "Kamar Mandi Modular Portable",
  "https://www.betonjayareadymix.com/2019/04/toilet-modular-site-office.html": "Toilet Modular Site Office",
  "https://www.betonjayareadymix.com/2019/04/rumah-prefab-modular-indonesia.html": "Rumah Prefab Modular Indonesia",
  "https://www.betonjayareadymix.com/2019/04/rumah-modular-cepat-bangun.html": "Rumah Modular Cepat Bangun",
  "https://www.betonjayareadymix.com/2019/04/harga-rumah-prefab-modular.html": "Harga Rumah Prefab Modular",
  "https://www.betonjayareadymix.com/2019/04/rumah-prefab-modular-hemat-biaya.html": "Rumah Prefab Modular Hemat Biaya",
  "https://www.betonjayareadymix.com/2019/04/rumah-prefab-modular-ramah-lingkungan.html": "Rumah Prefab Modular Ramah Lingkungan",
  "https://www.betonjayareadymix.com/2019/04/desain-rumah-prefab-modular.html": "Desain Rumah Prefab Modular"
};
// ============================================================
// 📁 SANDWICH PANEL MODULAR
// Parent: /p/sandwich-panel-modular.html
// ============================================================
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: sandwich-panel (Money-Master)
// ➔ CHILD: Variant (Tipe Material, Spesifikasi, & Harga Spesifik)
// ═════════════════════════════════════════════════════════════════════
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: sandwich-panel (Money-Master)
// ➔ CHILD: Variant (Tipe Material, Spesifikasi, Harga, & Aplikasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingSandwichPanelFromMoneyMasterToVariant = {
  
  // ── GRUP 1: TIPE & MATERIAL INTI ──
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-eps.html": "Panel Sandwich EPS",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-pu.html": "Panel Sandwich PU",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-xps.html": "Panel Sandwich XPS",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-rockwool.html": "Panel Sandwich Rockwool",
  
  // ── GRUP 2: SPESIFIKASI & KEUNGGULAN ──
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-tahan-api.html": "Panel Sandwich Tahan Api",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-tahan-air.html": "Panel Sandwich Tahan Air",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-akustik.html": "Panel Sandwich Akustik",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-ringan.html": "Panel Sandwich Ringan",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-isolasi-termal.html": "Panel Sandwich Isolasi Termal",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-untuk-rumah-modular.html": "Panel Sandwich Untuk Rumah Modular",
  
  // ── GRUP 3: APLIKASI LANGSUNG (✅ SUDAH DIKOREKSI MENJADI VARIANT) ──
  "https://www.betonjayareadymix.com/2019/04/dinding-panel-sandwich-modular.html": "Dinding Panel Sandwich Modular",
  "https://www.betonjayareadymix.com/2019/04/bangunan-panel-sandwich-modular.html": "Bangunan Panel Sandwich Modular",
  
  // ── GRUP 4: HARGA SPESIFIK (Variant Pricing) ──
  "https://www.betonjayareadymix.com/2019/04/harga-sandwich-panel-modular-per-m2.html": "Harga Sandwich Panel Modular Per M2",
  "https://www.betonjayareadymix.com/2019/04/harga-panel-sandwich-eps-per-lembar.html": "Harga Panel Sandwich EPS Per Lembar",
  "https://www.betonjayareadymix.com/2019/04/harga-panel-sandwich-dinding-ringan.html": "Harga Panel Sandwich Dinding Ringan",
  "https://www.betonjayareadymix.com/2019/04/harga-panel-sandwich-lantai-ringan.html": "Harga Panel Sandwich Lantai Ringan",
  "https://www.betonjayareadymix.com/2019/04/harga-panel-sandwich-anti-api.html": "Harga Panel Sandwich Anti Api",
  "https://www.betonjayareadymix.com/2019/04/harga-panel-sandwich-isolasi-termal.html": "Harga Panel Sandwich Isolasi Termal",
  "https://www.betonjayareadymix.com/2019/04/harga-panel-sandwich-akustik.html": "Harga Panel Sandwich Akustik",
  "https://www.betonjayareadymix.com/2019/04/harga-panel-sandwich-tahan-air.html": "Harga Panel Sandwich Tahan Air",
  "https://www.betonjayareadymix.com/2019/04/harga-panel-sandwich-tahan-gempa.html": "Harga Panel Sandwich Tahan Gempa",
  "https://www.betonjayareadymix.com/2019/04/harga-panel-sandwich-untuk-rumah-modular.html": "Harga Panel Sandwich Untuk Rumah Modular"
};


// ============================================================
// 📁 BATA RINGAN HEBEL MODULAR
// Parent: /p/bata-ringan-hebel-modular.html
// ============================================================
const urlMappingBataRinganFromMoneyMasterToVariant = {
  "https://www.betonjayareadymix.com/2019/04/ukuran-bata-ringan-hebel-modular.html": "Ukuran Bata Ringan Hebel Modular",
  "https://www.betonjayareadymix.com/2019/04/kelebihan-bata-ringan-modular.html": "Kelebihan Bata Ringan Modular",
  "https://www.betonjayareadymix.com/2019/04/bata-ringan-hebel-modular.html": "Bata Ringan Hebel Modular",
  "https://www.betonjayareadymix.com/2019/04/konstruksi-dinding-bata-ringan-modular.html": "Konstruksi Dinding Bata Ringan Modular",
  "https://www.betonjayareadymix.com/2019/04/teknologi-bata-ringan-modular.html": "Teknologi Bata Ringan Modular",
  "https://www.betonjayareadymix.com/2019/04/pemasangan-bata-ringan-modular.html": "Pemasangan Bata Ringan Modular",
  "https://www.betonjayareadymix.com/2019/04/kekuatan-bata-ringan-modular.html": "Kekuatan Bata Ringan Modular",
  "https://www.betonjayareadymix.com/2019/04/modular-hebel-untuk-rumah.html": "Modular Hebel untuk Rumah",
  "https://www.betonjayareadymix.com/2019/04/bata-ringan-modular-prefab.html": "Bata Ringan Modular Prefab",
  "https://www.betonjayareadymix.com/2019/04/bata-ringan-modular-vs-konvensional.html": "Bata Ringan Modular vs Konvensional"
};


// ============================================================
// 📁 ROSTER BETON
// Parent: /p/roster-beton.html
// ============================================================
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: roster-beton (Money-Master)
// ➔ CHILD: Money-Page (Pricing Hub)
// ═════════════════════════════════════════════════════════════════════
const urlMappingRosterBetonFromMoneyMasterToMoneyPage = {
  "https://www.betonjayareadymix.com/2020/12/harga-roster-beton.html": "Harga Roster Beton"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: roster-beton (Money-Master)
// ➔ CHILD: Variant (Ukuran, Tipe, Harga Spesifik)
// ═════════════════════════════════════════════════════════════════════
const urlMappingRosterBetonFromMoneyMasterToVariant = {
  "https://www.betonjayareadymix.com/2021/03/ukuran-roster-beton-kotak.html": "Ukuran Roster Beton Kotak",
  "https://www.betonjayareadymix.com/2021/03/ukuran-roster-beton-minimalis.html": "Ukuran Roster Beton Minimalis",
  "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-murah.html": "Harga Roster Beton Murah",
  "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-20-x-20.html": "Harga Roster Beton 20x20",
  "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-minimalis.html": "Harga Roster Beton Minimalis",
  "https://www.betonjayareadymix.com/2021/03/roster-beton-murah.html": "Roster Beton Murah",
  "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-per-m2.html": "Harga Roster Beton per m2",
  "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-masjid.html": "Harga Roster Beton Masjid",
  "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-cisangkan.html": "Harga Roster Beton Cisangkan",
  "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-per-buah.html": "Harga Roster Beton per Buah",
  "https://www.betonjayareadymix.com/2018/09/harga-pagar-roster-beton.html": "Harga Pagar Roster Beton",
  "https://www.betonjayareadymix.com/2021/03/pagar-roster-beton-minimalis.html": "Pagar Roster Beton Minimalis",
  "https://www.betonjayareadymix.com/2021/03/jual-roster-beton-minimalis.html": "Jual Roster Beton Minimalis",
  "https://www.betonjayareadymix.com/2021/03/roster-beton-cisangkan.html": "Roster Beton Cisangkan",
  "https://www.betonjayareadymix.com/2021/03/roster-beton-kotak.html": "Roster Beton Kotak"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: roster-beton (Money-Master)
// ➔ CHILD: Money-Child (Lokasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingRosterBetonFromMoneyMasterToMoneyChild = {
   // [MONEY_CHILD] — lokasi
    "https://www.betonjayareadymix.com/2021/03/roster-beton-minimalis-purwakarta.html": "Roster Beton Minimalis Purwakarta",
    "https://www.betonjayareadymix.com/2021/03/roster-beton-minimalis-bandung.html": "Roster Beton Minimalis Bandung",
    "https://www.betonjayareadymix.com/2021/03/pagar-roster-beton-minimalis.html": "Pagar Roster Beton Minimalis",
    "https://www.betonjayareadymix.com/2021/03/jual-roster-beton-minimalis.html": "Jual Roster Beton Minimalis",
    "https://www.betonjayareadymix.com/2021/03/roster-beton-cianjur.html": "Roster Beton Cianjur",
    "https://www.betonjayareadymix.com/2021/03/roster-beton-cirebon.html": "Roster Beton Cirebon",
    "https://www.betonjayareadymix.com/2021/03/roster-beton-banjarbaru.html": "Roster Beton Banjarbaru",
    "https://www.betonjayareadymix.com/2021/03/roster-beton-bekasi.html": "Roster Beton Bekasi",
    "https://www.betonjayareadymix.com/2021/03/roster-beton-bogor.html": "Roster Beton Bogor",
    "https://www.betonjayareadymix.com/2021/03/roster-beton-bandung.html": "Roster Beton Bandung",
  "https://www.betonjayareadymix.com/2021/03/roster-beton-banjarbaru.html": "Roster Beton Banjarbaru",

    "https://www.betonjayareadymix.com/2021/03/jual-roster-beton-terdekat.html": "Jual Roster Beton Terdekat",
    "https://www.betonjayareadymix.com/2021/03/jual-roster-beton-di-jakarta.html": "Jual Roster Beton di Jakarta",
    "https://www.betonjayareadymix.com/2021/03/jual-roster-beton-cimahi.html": "Jual Roster Beton Cimahi",
    "https://www.betonjayareadymix.com/2021/03/jual-roster-beton-cikarang.html": "Jual Roster Beton Cikarang",
    "https://www.betonjayareadymix.com/2021/03/jual-roster-beton-bogor.html": "Jual Roster Beton Bogor",
    "https://www.betonjayareadymix.com/2021/03/jual-roster-beton-bekasi.html": "Jual Roster Beton Bekasi",
    "https://www.betonjayareadymix.com/2021/03/jual-roster-beton-bandung.html": "Jual Roster Beton Bandung",
    
    "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-di-bali.html": "Harga Roster Beton di Bali",
    "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-di-bogor.html": "Harga Roster Beton di Bogor",
    "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-bandung.html": "Harga Roster Beton Bandung",
    "https://www.betonjayareadymix.com/2021/03/harga-roster-beton-tangerang.html": "Harga Roster Beton Tangerang",
    
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT — PENDEKATAN C
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[produk-modular-post] 🔍 Check URL: ' + cleanUrl);

    var ALL_MAPPINGS = [
        urlMappingBangunanPrefabModularFromMoneyMasterToMoneyPage,
        urlMappingModularKamarMandiToiletFromMoneyPageToVariant,
        urlMappingBangunanPrefabModularFromMoneyMasterToVariant,
        urlMappingPanelBetonFromMoneyMasterToVariant,
        urlMappingSandwichPanelFromMoneyMasterToVariant,
        urlMappingBataRinganFromMoneyMasterToVariant,
        urlMappingRosterBetonFromMoneyMasterToMoneyPage,
        urlMappingRosterBetonFromMoneyMasterToVariant,
        urlMappingRosterBetonFromMoneyMasterToMoneyChild
        
    ];

    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[produk-modular-post] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }

    if (foundIndex === -1) {
        console.log('[produk-modular-post] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__produkModularPostActive = false;
        return;
    }

    window.__produkModularPostActive = true;
    window.__produkModularPostMatchIndex = foundIndex;
    window.__produkModularPostMatchMappingName = foundMappingName;

    console.log(
        '[produk-modular-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '" — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════

function initProdukModularPost() {
    // ⚡ Guard flag
    if (!window.__produkModularPostActive) {
        console.log('[produk-modular-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    console.log('[produk-modular-post] 🚀 Execute — URL cocok');

    var cleanUrlProdukModularKons = window.location.href.split(/[?#]/)[0];

    // ✅ Guard elemen DOM
    var ProdukKonsDindingModularPost = document.getElementById("ProdukKonsDindingModularPost");
    if (!ProdukKonsDindingModularPost) {
        console.error("[produk-modular-post] ❌ elemen Id ProdukKonsDindingModularPost kondisi terhapus");
        return;
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 1] MODULAR KAMAR MANDI TOILET
    // ───────────────────────────────────────────────────────
    if (urlMappingModularKamarMandiToiletFromMoneyPageToVariant[cleanUrlProdukModularKons]) {
        generateBreadcrumbShared(
            urlMappingModularKamarMandiToiletFromMoneyPageToVariant,
            cleanUrlProdukModularKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Bangunan Prefab Modular', url: 'https://www.betonjayareadymix.com/p/bangunan-prefab-modular.html' },
                { name: 'Modular Kamar Mandi Toilet', url: 'https://www.betonjayareadymix.com/p/modular-kamar-mandi-toilet.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 2] BANGUNAN PREFAB MODULAR
    // ───────────────────────────────────────────────────────
     if (urlMappingBangunanPrefabModularFromMoneyMasterToMoneyPage[cleanUrlProdukModularKons]) {
        generateBreadcrumbShared(
            urlMappingBangunanPrefabModularFromMoneyMasterToMoneyPage,
            cleanUrlProdukModularKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Bangunan Prefab Modular', url: 'https://www.betonjayareadymix.com/p/bangunan-prefab-modular.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingBangunanPrefabModularFromMoneyMasterToVariant[cleanUrlProdukModularKons]) {
        generateBreadcrumbShared(
            urlMappingBangunanPrefabModularFromMoneyMasterToVariant,
            cleanUrlProdukModularKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Bangunan Prefab Modular', url: 'https://www.betonjayareadymix.com/p/bangunan-prefab-modular.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 3] DINDING PANEL BETON PRECAST MODULAR
    // ───────────────────────────────────────────────────────
    if (urlMappingPanelBetonFromMoneyMasterToVariant[cleanUrlProdukModularKons]) {
        generateBreadcrumbShared(
            urlMappingPanelBetonFromMoneyMasterToVariant,
            cleanUrlProdukModularKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Panel Beton', url: 'https://www.betonjayareadymix.com/p/panel-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 4] SANDWICH PANEL MODULAR
    // ───────────────────────────────────────────────────────
    if (urlMappingSandwichPanelFromMoneyMasterToVariant[cleanUrlProdukModularKons]) {
        generateBreadcrumbShared(
            urlMappingSandwichPanelFromMoneyMasterToVariant,
            cleanUrlProdukModularKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Sandwich Panel', url: 'https://www.betonjayareadymix.com/p/sandwich-panel.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 5] BATA RINGAN HEBEL MODULAR
    // ───────────────────────────────────────────────────────
    if (urlMappingBataRinganFromMoneyMasterToVariant[cleanUrlProdukModularKons]) {
        generateBreadcrumbShared(
            urlMappingBataRinganFromMoneyMasterToVariant,
            cleanUrlProdukModularKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Bata Ringan', url: 'https://www.betonjayareadymix.com/p/bata-ringan.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 6] ROSTER BETON
    // ───────────────────────────────────────────────────────
    if (urlMappingRosterBetonFromMoneyMasterToMoneyPage[cleanUrlProdukModularKons]) {
        generateBreadcrumbShared(
            urlMappingRosterBetonFromMoneyMasterToMoneyPage,
            cleanUrlProdukModularKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Roster Beton', url: 'https://www.betonjayareadymix.com/p/roster-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingRosterBetonFromMoneyMasterToVariant[cleanUrlProdukModularKons]) {
        generateBreadcrumbShared(
            urlMappingRosterBetonFromMoneyMasterToVariant,
            cleanUrlProdukModularKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Roster Beton', url: 'https://www.betonjayareadymix.com/p/roster-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    if (urlMappingRosterBetonFromMoneyMasterToMoneyChild[cleanUrlProdukModularKons]) {
        generateBreadcrumbShared(
            urlMappingRosterBetonFromMoneyMasterToMoneyChild,
            cleanUrlProdukModularKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Roster Beton', url: 'https://www.betonjayareadymix.com/p/roster-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] AUTO-INIT
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProdukModularPost);
} else {
    initProdukModularPost();
}
