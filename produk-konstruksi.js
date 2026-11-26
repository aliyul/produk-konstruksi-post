// ============================================================
// PRODUK KONSTRUKSI — PILLAR & SUB-PILLAR
// v2.0.0 — Early Exit + PILLAR Guard + Fix Typo URL
// ============================================================

console.log('[produk-konstruksi-pillar] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

// ============================================================
// [PILLAR] - PRODUK KONSTRUKSI
// ============================================================
const urlMappingProdukKonstruksiPillar = {
    "https://www.betonjayareadymix.com/p/produk-konstruksi.html": "Produk Konstruksi"
};

// ============================================================
// [SUB2] - SUB-PILLAR (LANGSUNG DI BAWAH PILLAR)
// ============================================================
const urlMappingProdukKonstruksiFromPillarSub2 = {
    "https://www.betonjayareadymix.com/p/daftar-produk-alat-konstruksi.html": "Daftar Produk Alat Konstruksi",
    "https://www.betonjayareadymix.com/p/daftar-beton-precast.html": "Daftar Beton Precast",
    "https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html": "Daftar Produk Pembatas",
    "https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html": "Daftar Produk Saluran Drainase",
    "https://www.betonjayareadymix.com/p/daftar-produk-jalan-lantai.html": "Daftar Produk Jalan Lantai",
    "https://www.betonjayareadymix.com/p/daftar-produk-pondasi.html": "Daftar Produk Pondasi",
    "https://www.betonjayareadymix.com/p/daftar-produk-jembatan.html": "Daftar Produk Jembatan",
    "https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html": "Daftar Produk Dinding Bangunan Modular",
    "https://www.betonjayareadymix.com/p/daftar-produk-pelabuhan-pesisir.html": "Daftar Produk Pelabuhan Pesisir",
    "https://www.betonjayareadymix.com/p/daftar-produk-custom-khusus.html": "Daftar Produk Custom Khusus"
};

// ============================================================
// [SUB1] - BRIDGE KE MONEY (Perbandingan)
// ============================================================
const urlMappingProdukBetonPrecastFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-beton-precast.html": "Perbandingan Beton Precast"
};
const urlMappingProdukAlatKonstruksiFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-produk-alat-konstruksi.html": "Perbandingan Produk Alat Konstruksi"
};
const urlMappingProdukPembatasFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html": "Perbandingan Produk Pembatas"
};
const urlMappingProdukSaluranDrainaseFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html": "Perbandingan Produk Saluran Drainase"
};
const urlMappingProdukJalanLantaiFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-produk-jalan-lantai.html": "Perbandingan Produk Jalan Lantai"
};
const urlMappingProdukPondasiStrukturFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-produk-pondasi.html": "Perbandingan Produk Pondasi"
};
const urlMappingProdukJembatanFlyoverFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-produk-jembatan.html": "Perbandingan Produk Jembatan"
};
const urlMappingProdukDindingBangunanModularFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html": "Perbandingan Produk Dinding Bangunan Modular"
};
const urlMappingProdukPelabuhanPesisirFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-produk-pelabuhan-pesisir.html": "Perbandingan Produk Pelabuhan Pesisir"
};
const urlMappingProdukCustomKhususFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-produk-custom-khusus.html": "Perbandingan Produk Custom Khusus"
};

// ============================================================
// [SUB2] - PRODUK ALAT KONSTRUKSI
// ============================================================
const urlMappingProdukAlatKonstruksiFromSub1MoneyMaster = {
    "https://www.betonjayareadymix.com/p/produk-alat-konstruksi.html": "Produk Alat Konstruksi"
};
const urlMappingProdukAlatKonstruksiFromMoneyMasterMoneyMaster1 = {
    "https://www.betonjayareadymix.com/p/jual-alat-konstruksi.html": "Jual Alat Konstruksi"
};
const urlMappingProdukAlatKonstruksiFromMoneyMaster1MoneyMaster2 = {
    "https://www.betonjayareadymix.com/p/jual-alat-ringan.html": "Jual Alat Ringan",
    "https://www.betonjayareadymix.com/p/jual-alat-berat.html": "Jual Alat Berat"
};
const urlMappingJualAlatBeratFromMoneyMaster2MoneyPage = {
    "https://www.betonjayareadymix.com/p/jual-alat-berat-tambang.html": "Jual Alat Berat Tambang"
};

// ============================================================
// [SUB2] - PRODUK BETON PRECAST
// ============================================================
const urlMappingProdukBetonPrecastFromSub1MoneyMaster = {
    "https://www.betonjayareadymix.com/p/beton-precast.html": "Beton Precast"
};

// ============================================================
// [VARIANT] - PRODUK PEMBATAS
// ============================================================
const urlMappingProdukPembatasFromSub1MoneyMaster = {
    "https://www.betonjayareadymix.com/p/pagar-rumah.html": "Pagar Rumah",
    "https://www.betonjayareadymix.com/p/pagar-panel.html": "Pagar Panel",
    "https://www.betonjayareadymix.com/p/harga-pagar-panel.html": "Harga Pagar Panel",
    "https://www.betonjayareadymix.com/p/pagar-grc.html": "Pagar GRC",
    "https://www.betonjayareadymix.com/p/pagar-brc.html": "Pagar BRC",
    "https://www.betonjayareadymix.com/p/pagar-beton.html": "Pagar Beton",
    "https://www.betonjayareadymix.com/p/pagar-batu.html": "Pagar Batu",
    "https://www.betonjayareadymix.com/p/pagar-besi.html": "Pagar Besi",
    "https://www.betonjayareadymix.com/p/kanstin-beton.html": "Kanstin Beton"
};
const urlMappingPagarBatuFromMoneyMasterMoneyPage = {
    "https://www.betonjayareadymix.com/p/pagar-batu-alam.html": "Pagar Batu Alam"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: perbandingan-produk-saluran-drainase (Sub-Pillar Tipe 1)
// ➔ CHILD: Money-Master (4 Produk Utama)
// ═════════════════════════════════════════════════════════════════════
const urlMappingPerbandinganProdukSaluranDrainaseFromSub1ToMoneyMaster = {
  "https://www.betonjayareadymix.com/p/buis-beton.html": "Buis Beton",
  "https://www.betonjayareadymix.com/p/box-culvert.html": "Box Culvert",
  "https://www.betonjayareadymix.com/p/u-ditch.html": "U-Ditch",
  "https://www.betonjayareadymix.com/p/gorong-gorong.html": "Gorong-Gorong",
   "https://www.betonjayareadymix.com/p/pipa-beton.html": "Pipa Beton",
  "https://www.betonjayareadymix.com/p/saluran-beton.html": "Saluran Beton"  
};

// ============================================================
// [VARIANT] - PRODUK JALAN LANTAI
// ============================================================
const urlMappingProdukJalanLantaiFromSub1MoneyMaster = {
    "https://www.betonjayareadymix.com/p/paving-block.html": "Paving Block",
    "https://www.betonjayareadymix.com/p/plat-beton.html": "Plat Beton",
    "https://www.betonjayareadymix.com/p/grass-block.html": "Grass Block"
};

// ============================================================
// [VARIANT] - PRODUK PONDASI STRUKTUR
// ============================================================
const urlMappingProdukPondasiFromSub1MoneyMaster = {
    "https://www.betonjayareadymix.com/p/produk-pondasi.html": "Produk Pondasi"
};
const urlMappingProdukPondasiFromMoneyMasterMoneyMaster1 = {
    "https://www.betonjayareadymix.com/p/tiang-pancang.html": "Tiang Pancang",
    "https://www.betonjayareadymix.com/p/bore-pile.html": "Bore Pile",
    "https://www.betonjayareadymix.com/p/mini-pile.html": "Mini Pile",
    "https://www.betonjayareadymix.com/p/strauss-pile.html": "Strauss Pile",
    "https://www.betonjayareadymix.com/p/cakar-ayam.html": "Cakar Ayam",
    "https://www.betonjayareadymix.com/p/pondasi-sumuran.html": "Pondasi Sumuran",
    "https://www.betonjayareadymix.com/p/pondasi-tapak.html": "Pondasi Tapak"
};
const urlMappingTiangPancangFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/tiang-pancang-beton.html": "Tiang Pancang Beton"
};

// ============================================================
// [SUB2] - PRODUK JEMBATAN FLYOVER
// ============================================================
const urlMappingProdukJembatanFromSub1MoneyMaster = {
    "https://www.betonjayareadymix.com/p/jual-jembatan-girder.html": "Jual Jembatan Girder"
};
const urlMappingJualJembatanGirderFromMoneyMasterMoneyPage = {
    "https://www.betonjayareadymix.com/p/harga-jembatan-girder-per-unit.html": "Harga Jembatan Girder Per Unit",
    "https://www.betonjayareadymix.com/p/harga-jembatan-beton-prategang.html": "Harga Jembatan Beton Prategang",
    "https://www.betonjayareadymix.com/p/harga-jembatan-girder-baja.html": "Harga Jembatan Girder Baja",
    "https://www.betonjayareadymix.com/p/harga-jembatan-girder-beton.html": "Harga Jembatan Girder Beton",
    "https://www.betonjayareadymix.com/p/harga-jembatan-box-girder.html": "Harga Jembatan Box Girder"
};

// ============================================================
// [VARIANT] - PRODUK DINDING BANGUNAN MODULAR
// ============================================================
const urlMappingProdukDindingFromSub1MoneyMaster = {
    "https://www.betonjayareadymix.com/p/panel-beton.html": "Panel Beton",
    "https://www.betonjayareadymix.com/p/beton-ringan.html": "Beton Ringan",
    "https://www.betonjayareadymix.com/p/roster-beton.html": "Roster Beton",
    "https://www.betonjayareadymix.com/p/bata-ringan.html": "Bata Ringan",
    "https://www.betonjayareadymix.com/p/sandwich-panel.html": "Sandwich Panel"
};
const urlMappingPanelBetonFromMoneyMasterMoneyPage = {
    "https://www.betonjayareadymix.com/p/dinding-panel-beton-precast-modular.html": "Dinding Panel Beton Precast Modular",
    "https://www.betonjayareadymix.com/p/bangunan-ruspin-modular.html": "Bangunan Ruspin Modular"
};
const urlMappingSandwichPanelFromMoneyMasterMoneyPage = {
    "https://www.betonjayareadymix.com/p/dinding-panel-sandwich-modular.html": "Dinding Panel Sandwich Modular",
    "https://www.betonjayareadymix.com/p/bangunan-panel-sandwich-modular.html": "Bangunan Panel Sandwich Modular"
};

// ============================================================
// [VARIANT] - PRODUK PELABUHAN PESISIR
// ============================================================
const urlMappingProdukPelabuhanFromSub1MoneyMaster = {
    "https://www.betonjayareadymix.com/p/produk-pelabuhan.html": "Produk Pelabuhan"
};
const urlMappingProdukPelabuhanFromMoneyMasterMoneyPage = {
    "https://www.betonjayareadymix.com/p/sistem-proteksi-dermaga.html": "Sistem Proteksi Dermaga",
    "https://www.betonjayareadymix.com/p/dermaga-apung-modular.html": "Dermaga Apung Modular",
    "https://www.betonjayareadymix.com/p/alat-bongkar-muat-pelabuhan.html": "Alat Bongkar Muat Pelabuhan",
    "https://www.betonjayareadymix.com/p/crane-dermaga.html": "Crane Dermaga",
    "https://www.betonjayareadymix.com/p/ponton-dermaga.html": "Ponton Dermaga",
    "https://www.betonjayareadymix.com/p/kerangka-baja-dermaga.html": "Kerangka Baja Dermaga",
    "https://www.betonjayareadymix.com/p/sheet-pile-dermaga.html": "Sheet Pile Dermaga"
};

// ============================================================
// [VARIANT] - PRODUK CUSTOM KHUSUS
// ============================================================
const urlMappingProdukCustom = {
    "https://www.betonjayareadymix.com/p/beton-precast-custom.html": "Beton Precast Custom",
    "https://www.betonjayareadymix.com/p/struktur-baja-kustom.html": "Struktur Baja Kustom",
    "https://www.betonjayareadymix.com/p/fitting-drainase-custom.html": "Fitting Drainase Custom",
    "https://www.betonjayareadymix.com/p/peralatan-konstruksi-custom.html": "Peralatan Konstruksi Custom"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT — PENDEKATAN C
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[produk-konstruksi-pillar] 🔍 Check URL: ' + cleanUrl);

    var ALL_MAPPINGS = [
        // ✅ FIX: PILLAR utama sekarang dimasukkan
        urlMappingProdukKonstruksiPillar,
        urlMappingProdukKonstruksiFromPillarSub2,
        urlMappingProdukBetonPrecastFromSub2Sub1,
        urlMappingProdukBetonPrecastFromSub1MoneyMaster,
        urlMappingProdukAlatKonstruksiFromSub2Sub1,
        urlMappingProdukAlatKonstruksiFromSub1MoneyMaster,
        urlMappingProdukAlatKonstruksiFromMoneyMasterMoneyMaster1,
        urlMappingProdukAlatKonstruksiFromMoneyMaster1MoneyMaster2,
        urlMappingJualAlatBeratFromMoneyMaster2MoneyPage,
        urlMappingProdukPembatasFromSub2Sub1,
        urlMappingProdukPembatasFromSub1MoneyMaster,
        urlMappingPagarBatuFromMoneyMasterMoneyPage,
        urlMappingProdukSaluranDrainaseFromSub2Sub1,
        urlMappingPerbandinganProdukSaluranDrainaseFromSub1ToMoneyMaster,
        urlMappingProdukJalanLantaiFromSub2Sub1,
        urlMappingProdukJalanLantaiFromSub1MoneyMaster,
        urlMappingProdukPondasiStrukturFromSub2Sub1,
        urlMappingProdukPondasiFromSub1MoneyMaster,
        urlMappingProdukPondasiFromMoneyMasterMoneyMaster1,
        urlMappingTiangPancangFromMoneyMaster1MoneyPage,
        urlMappingProdukJembatanFlyoverFromSub2Sub1,
        urlMappingProdukJembatanFromSub1MoneyMaster,
        urlMappingJualJembatanGirderFromMoneyMasterMoneyPage,
        urlMappingProdukDindingBangunanModularFromSub2Sub1,
        urlMappingProdukDindingFromSub1MoneyMaster,
        urlMappingPanelBetonFromMoneyMasterMoneyPage,
        urlMappingSandwichPanelFromMoneyMasterMoneyPage,
        urlMappingProdukPelabuhanPesisirFromSub2Sub1,
        urlMappingProdukPelabuhanFromSub1MoneyMaster,
        urlMappingProdukPelabuhanFromMoneyMasterMoneyPage,
        urlMappingProdukCustomKhususFromSub2Sub1,
        // ✅ FIX: mapping ProdukCustom sekarang dimasukkan
        urlMappingProdukCustom
    ];

    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[produk-konstruksi-pillar] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }

    if (foundIndex === -1) {
        console.log('[produk-konstruksi-pillar] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__produkKonsPillarActive = false;
        return;
    }

    window.__produkKonsPillarActive = true;
    window.__produkKonsPillarMatchIndex = foundIndex;
    window.__produkKonsPillarMatchMappingName = foundMappingName;

    console.log(
        '[produk-konstruksi-pillar] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '" — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════

function initProdukKonsPillar() {
    // ⚡ Guard flag
    if (!window.__produkKonsPillarActive) {
        console.log('[produk-konstruksi-pillar] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    console.log('[produk-konstruksi-pillar] 🚀 Execute — URL cocok');

    var cleanUrlProdukKons = window.location.href.split(/[?#]/)[0];

    // ✅ Guard elemen DOM
    var ProdukKons = document.getElementById("ProdukKons");
    if (!ProdukKons) {
        console.error("[produk-konstruksi-pillar] ❌ elemen Id ProdukKons kondisi terhapus");
        return;
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 0] PILLAR — PRODUK KONSTRUKSI (2 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukKonstruksiPillar[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukKonstruksiPillar,
            cleanUrlProdukKons,
            [], // PILLAR = root, tidak ada parent
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 1] SUB2 — DAFTAR PRODUK (3 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukKonstruksiFromPillarSub2[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukKonstruksiFromPillarSub2,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 2] SUB1 — PERBANDINGAN (4 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukBetonPrecastFromSub2Sub1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukBetonPrecastFromSub2Sub1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Beton Precast', url: 'https://www.betonjayareadymix.com/p/daftar-beton-precast.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukAlatKonstruksiFromSub2Sub1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukAlatKonstruksiFromSub2Sub1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-produk-alat-konstruksi.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukPembatasFromSub2Sub1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPembatasFromSub2Sub1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukSaluranDrainaseFromSub2Sub1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukSaluranDrainaseFromSub2Sub1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukJalanLantaiFromSub2Sub1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukJalanLantaiFromSub2Sub1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Jalan Lantai', url: 'https://www.betonjayareadymix.com/p/daftar-produk-jalan-lantai.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukPondasiStrukturFromSub2Sub1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPondasiStrukturFromSub2Sub1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pondasi.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukJembatanFlyoverFromSub2Sub1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukJembatanFlyoverFromSub2Sub1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Jembatan', url: 'https://www.betonjayareadymix.com/p/daftar-produk-jembatan.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukDindingBangunanModularFromSub2Sub1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukDindingBangunanModularFromSub2Sub1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukPelabuhanPesisirFromSub2Sub1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPelabuhanPesisirFromSub2Sub1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pelabuhan Pesisir', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pelabuhan-pesisir.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukCustomKhususFromSub2Sub1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukCustomKhususFromSub2Sub1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Custom Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-produk-custom-khusus.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 3] SUB2 — HALAMAN KATEGORI (4 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukAlatKonstruksiFromSub1MoneyMaster[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukAlatKonstruksiFromSub1MoneyMaster,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-produk-alat-konstruksi.html' },
                { name: 'Perbandingan Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-alat-konstruksi.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukBetonPrecastFromSub1MoneyMaster[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukBetonPrecastFromSub1MoneyMaster,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Beton Precast', url: 'https://www.betonjayareadymix.com/p/daftar-beton-precast.html' },
                { name: 'Perbandingan Beton Precast', url: 'https://www.betonjayareadymix.com/p/perbandingan-beton-precast.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukPembatasFromSub1MoneyMaster[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPembatasFromSub1MoneyMaster,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    
    if (urlMappingProdukJalanLantaiFromSub1MoneyMaster[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukJalanLantaiFromSub1MoneyMaster,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Jalan Lantai', url: 'https://www.betonjayareadymix.com/p/daftar-produk-jalan-lantai.html' },
                { name: 'Perbandingan Produk Jalan Lantai', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-jalan-lantai.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukPondasiFromSub1MoneyMaster[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPondasiFromSub1MoneyMaster,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pondasi.html' },
                { name: 'Perbandingan Produk Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pondasi.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukJembatanFromSub1MoneyMaster[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukJembatanFromSub1MoneyMaster,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Jembatan', url: 'https://www.betonjayareadymix.com/p/daftar-produk-jembatan.html' },
                { name: 'Perbandingan Produk Jembatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-jembatan.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukDindingFromSub1MoneyMaster[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukDindingFromSub1MoneyMaster,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukPelabuhanFromSub1MoneyMaster[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPelabuhanFromSub1MoneyMaster,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pelabuhan Pesisir', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pelabuhan-pesisir.html' },
                { name: 'Perbandingan Produk Pelabuhan Pesisir', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pelabuhan-pesisir.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 4] MONEY_MASTER — HALAMAN PRODUK (5 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukAlatKonstruksiFromMoneyMasterMoneyMaster1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukAlatKonstruksiFromMoneyMasterMoneyMaster1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-produk-alat-konstruksi.html' },
                { name: 'Perbandingan Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-alat-konstruksi.html' },
                { name: 'Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-alat-konstruksi.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukAlatKonstruksiFromMoneyMaster1MoneyMaster2[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukAlatKonstruksiFromMoneyMaster1MoneyMaster2,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-produk-alat-konstruksi.html' },
                { name: 'Perbandingan Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-alat-konstruksi.html' },
                { name: 'Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-alat-konstruksi.html' },
                { name: 'Jual Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jual-alat-konstruksi.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingPerbandinganProdukSaluranDrainaseFromSub1ToMoneyMaster[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingPerbandinganProdukSaluranDrainaseFromSub1ToMoneyMaster,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-produk-saluran-drainase.html' },
                { name: 'Perbandingan Produk Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-saluran-drainase.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukPondasiFromMoneyMasterMoneyMaster1[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPondasiFromMoneyMasterMoneyMaster1,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pondasi.html' },
                { name: 'Perbandingan Produk Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pondasi.html' },
                // ✅ FIX: hapus tanda kutip nyasar
                { name: 'Produk Pondasi', url: 'https://www.betonjayareadymix.com/p/produk-pondasi.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingPanelBetonFromMoneyMasterMoneyPage[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingPanelBetonFromMoneyMasterMoneyPage,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Panel Beton', url: 'https://www.betonjayareadymix.com/p/panel-beton.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingSandwichPanelFromMoneyMasterMoneyPage[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingSandwichPanelFromMoneyMasterMoneyPage,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/daftar-produk-dinding-bangunan-modular.html' },
                { name: 'Perbandingan Produk Dinding Bangunan Modular', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-dinding-modular.html' },
                { name: 'Sandwich Panel', url: 'https://www.betonjayareadymix.com/p/sandwich-panel.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingProdukPelabuhanFromMoneyMasterMoneyPage[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukPelabuhanFromMoneyMasterMoneyPage,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pelabuhan Pesisir', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pelabuhan-pesisir.html' },
                { name: 'Perbandingan Produk Pelabuhan Pesisir', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pelabuhan-pesisir.html' },
                { name: 'Produk Pelabuhan', url: 'https://www.betonjayareadymix.com/p/produk-pelabuhan.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 5] MONEY_PAGE — HALAMAN SPESIFIK (6 level)
    // ───────────────────────────────────────────────────────
    if (urlMappingJualAlatBeratFromMoneyMaster2MoneyPage[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingJualAlatBeratFromMoneyMaster2MoneyPage,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-produk-alat-konstruksi.html' },
                { name: 'Perbandingan Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-alat-konstruksi.html' },
                { name: 'Produk Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-alat-konstruksi.html' },
                { name: 'Jual Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jual-alat-konstruksi.html' },
                { name: 'Jual Alat Berat', url: 'https://www.betonjayareadymix.com/p/jual-alat-berat.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingPagarBatuFromMoneyMasterMoneyPage[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingPagarBatuFromMoneyMasterMoneyPage,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pembatas.html' },
                { name: 'Perbandingan Produk Pembatas', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pembatas.html' },
                { name: 'Pagar Batu', url: 'https://www.betonjayareadymix.com/p/pagar-batu.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
    
    if (urlMappingTiangPancangFromMoneyMaster1MoneyPage[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingTiangPancangFromMoneyMaster1MoneyPage,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-produk-pondasi.html' },
                { name: 'Perbandingan Produk Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-pondasi.html' },
                // ✅ FIX: hapus tanda kutip nyasar
                { name: 'Produk Pondasi', url: 'https://www.betonjayareadymix.com/p/produk-pondasi.html' },
                { name: 'Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/tiang-pancang.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    if (urlMappingJualJembatanGirderFromMoneyMasterMoneyPage[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingJualJembatanGirderFromMoneyMasterMoneyPage,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Jembatan', url: 'https://www.betonjayareadymix.com/p/daftar-produk-jembatan.html' },
                { name: 'Perbandingan Produk Jembatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-jembatan.html' },
                { name: 'Jual Jembatan Girder', url: 'https://www.betonjayareadymix.com/p/jual-jembatan-girder.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────
    // [BLOK 6] PRODUK CUSTOM KHUSUS
    // ───────────────────────────────────────────────────────
    if (urlMappingProdukCustom[cleanUrlProdukKons]) {
        generateBreadcrumbShared(
            urlMappingProdukCustom,
            cleanUrlProdukKons,
            [
                { name: 'Produk Konstruksi', url: 'https://www.betonjayareadymix.com/p/produk-konstruksi.html' },
                { name: 'Daftar Produk Custom Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-produk-custom-khusus.html' },
                { name: 'Perbandingan Produk Custom Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-produk-custom-khusus.html' }
            ],
            'PRODUK_KONSTRUKSI'
        );
    }
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] AUTO-INIT
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProdukKonsPillar);
} else {
    initProdukKonsPillar();
}
