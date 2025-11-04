
 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingProdukKonstruksi = {
"https://www.betonjayareadymix.com/p/beton-precast.html": "Beton Precast",
  "https://www.betonjayareadymix.com/p/panel-beton-precast.html": "Panel Beton Precast",
  "https://www.betonjayareadymix.com/p/beton-ringan-precast.html": "Beton Ringan Precast",
  "https://www.betonjayareadymix.com/p/produk-alat-konstruksi.html": "Produk Alat Konstruksi",
 
  "https://www.betonjayareadymix.com/p/produk-pembatas.html": "Produk Pembatas",
  "https://www.betonjayareadymix.com/p/produk-saluran-drainase.html": "Produk Saluran Drainase",
  "https://www.betonjayareadymix.com/p/produk-jalan-lantai.html": "Produk Jalan Lantai",
  "https://www.betonjayareadymix.com/p/produk-pondasi-struktur.html": "Produk Pondasi Struktur",
  "https://www.betonjayareadymix.com/p/produk-jembatan-flyover.html": "Produk Jembatan Flyover",
  "https://www.betonjayareadymix.com/p/produk-dinding-bangunan-modular.html": "Produk Dinding Bangunan Modular",
  "https://www.betonjayareadymix.com/p/produk-pelabuhan-pesisir.html": "Produk Pelabuhan Pesisir",
  "https://www.betonjayareadymix.com/p/produk-custom-khusus.html": "Produk Custom Khusus"
};
const urlMappingProdukAlatKonstruksi = {	
"https://www.betonjayareadymix.com/p/jual-alat-konstruksi-ringan.html": "Jual Alat Konstruksi Ringan",
"https://www.betonjayareadymix.com/p/jual-alat-berat.html": "Jual Alat Berat",
"https://www.betonjayareadymix.com/p/jual-alat-berat-tambang.html": "Jual Alat Berat Tambang"

}

const urlMappingProdukPembatas = {
 "https://www.betonjayareadymix.com/p/pagar-rumah.html": "Pagar Rumah",
  "https://www.betonjayareadymix.com/p/pagar-panel-beton.html": "Pagar Panel Beton",
  "https://www.betonjayareadymix.com/p/pagar-grc.html": "Pagar GRC",
  "https://www.betonjayareadymix.com/p/pagar-brc.html": "Pagar BRC",
  "https://www.betonjayareadymix.com/p/pagar-beton.html": "Pagar Beton",
  "https://www.betonjayareadymix.com/p/pagar-batu-alam.html": "Pagar Batu Alam",
  "https://www.betonjayareadymix.com/p/pagar-besi.html": "Pagar Besi",
  "https://www.betonjayareadymix.com/p/kanstin-beton.html": "Kanstin Beton"

};
const urlMappingProdukSaluran = {
  "https://www.betonjayareadymix.com/p/buis-beton.html": "Buis Beton",
  "https://www.betonjayareadymix.com/p/box-culvert.html": "Box Culvert",
  "https://www.betonjayareadymix.com/p/u-ditch.html": "U Ditch",
  "https://www.betonjayareadymix.com/p/gorong-gorong-beton.html": "Gorong Gorong Beton",
  "https://www.betonjayareadymix.com/p/saluran-beton.html": "Saluran Beton",
  "https://www.betonjayareadymix.com/p/pipa-beton.html": "Pipa Beton"
};
const urlMappingProdukJalanLantai = {
 "https://www.betonjayareadymix.com/p/paving-block-conblock.html": "Paving Block Conblock",
  "https://www.betonjayareadymix.com/p/grass-block-paving-rumput.html": "Grass Block Paving Rumput",
 "https://www.betonjayareadymix.com/p/tactile-paving-ubin-pemandu-tuna-netra.html": "Tactile Paving Ubin Pemandu Tuna Netra",
 "https://www.betonjayareadymix.com/p/slab-beton-lapangan-parkir.html": "Slab Beton Lapangan Parkir",
 "https://www.betonjayareadymix.com/p/slab-beton-industri-heavy-duty.html": "Slab Beton Industri Heavy Duty",
 "https://www.betonjayareadymix.com/p/material-lantai-beton-lapangan-olahraga.html": "Material Lantai Beton Lapangan Olahraga"
};
const urlMappingProdukPondasi = {
   "https://www.betonjayareadymix.com/p/produk-tiang-pancang-beton.html": "Produk Tiang Pancang Beton",
  "https://www.betonjayareadymix.com/p/produk-bore-pile.html": "Produk Bore Pile",
  "https://www.betonjayareadymix.com/p/produk-mini-pile.html": "Produk Mini Pile",
  "https://www.betonjayareadymix.com/p/produk-strauss-pile.html": "Produk Strauss Pile",
  "https://www.betonjayareadymix.com/p/produk-soil-improvement-grouting.html": "Produk Soil Improvement Grouting",
  "https://www.betonjayareadymix.com/p/produk-pondasi-cakar-ayam.html": "Produk Pondasi Cakar Ayam",
  "https://www.betonjayareadymix.com/p/produk-pondasi-sumuran.html": "Produk Pondasi Sumuran",
  "https://www.betonjayareadymix.com/p/produk-pondasi-tapak-beton-bertulang.html": "Produk Pondasi Tapak Beton Bertulang"


};
const urlMappingProdukJembatan = {
    "https://www.betonjayareadymix.com/p/tender-proyek-jembatan-flyover.html": "Tender Proyek Jembatan Flyover",
  "https://www.betonjayareadymix.com/p/perawatan-jembatan-flyover.html": "Perawatan Jembatan Flyover",
  "https://www.betonjayareadymix.com/p/flyover-baja.html": "Flyover Baja",
  "https://www.betonjayareadymix.com/p/flyover-beton-precast.html": "Flyover Beton Precast",
  "https://www.betonjayareadymix.com/p/standar-konstruksi-flyover.html": "Standar Konstruksi Flyover",
  "https://www.betonjayareadymix.com/p/kontraktor-jembatan-flyover.html": "Kontraktor Jembatan Flyover",
  "https://www.betonjayareadymix.com/p/konstruksi-flyover-cepat.html": "Konstruksi Flyover Cepat",
  "https://www.betonjayareadymix.com/p/desain-jembatan-layang.html": "Desain Jembatan Layang",
  "https://www.betonjayareadymix.com/p/spesifikasi-jembatan-flyover.html": "Spesifikasi Jembatan Flyover",
  "https://www.betonjayareadymix.com/p/harga-jembatan-flyover.html": "Harga Jembatan Flyover"
};
const urlMappingProdukDinding = {
 "https://www.betonjayareadymix.com/p/roster-beton.html": "Roster Beton",
  "https://www.betonjayareadymix.com/p/bata-ringan-hebel-modular.html": "Bata ringan hebel modular",
  "https://www.betonjayareadymix.com/p/sandwich-panel-modular.html": "Sandwich panel modular",
  "https://www.betonjayareadymix.com/p/dinding-panel-beton-precast-modular.html": "Dinding panel beton precast modular",
  "https://www.betonjayareadymix.com/p/bangunan-prefab-modular.html": "Bangunan prefab modular",
  "https://www.betonjayareadymix.com/p/modular-kamar-mandi-toilet.html": "Modular kamar mandi toilet"
};
const urlMappingProdukPelabuhan = {
  "https://www.betonjayareadymix.com/p/sistem-proteksi-dermaga.html": "Sistem Proteksi Dermaga",
  "https://www.betonjayareadymix.com/p/dermaga-apung-modular.html": "Dermaga Apung Modular",
  "https://www.betonjayareadymix.com/p/alat-bongkar-muat-pelabuhan.html": "Alat Bongkar Muat Pelabuhan",
  "https://www.betonjayareadymix.com/p/crane-dermaga.html": "Crane Dermaga",
  "https://www.betonjayareadymix.com/p/ponton-dermaga.html": "Ponton Dermaga",
  "https://www.betonjayareadymix.com/p/kerangka-baja-dermaga.html": "Kerangka Baja Dermaga",
  "https://www.betonjayareadymix.com/p/sheet-pile-dermaga.html": "Sheet Pile Dermaga"
};
const urlMappingProdukCustom = {
  "https://www.betonjayareadymix.com/p/beton-precast-custom.html": "Beton Precast Custom",
  "https://www.betonjayareadymix.com/p/struktur-baja-kustom.html": "Struktur Baja Kustom",
  "https://www.betonjayareadymix.com/p/fitting-drainase-custom.html": "Fitting Drainase Custom",
  "https://www.betonjayareadymix.com/p/peralatan-konstruksi-custom.html": "Peralatan Konstruksi Custom"
};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsProdukKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsProdukKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsProdukKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsProdukKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsProdukKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlProdukKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

		/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */
(async function runHybridDateModified() {
  try {
    // --- helper untuk load eksternal JS secara promise ---
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

	
     // --- loader evergreen JS dengan sessionStorage (anti 429) ---
    async function loadEvergreenScript() {
      const KEY = "evergreenScriptLoaded";

      const needReload =
        !sessionStorage.getItem(KEY) ||
        !window.AEDMetaDates ||
        !window.detectEvergreenReady;

      if (!needReload) {
        console.log("⚡ detect-evergreen.js sudah aktif & variable ready — SKIP load");
      } else {
        console.log("⏳ load detect-evergreen.js dari GitHack…");
        try {
          await loadExternalJSAsync(
            "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
          );
          window.detectEvergreenReady = true;
          sessionStorage.setItem(KEY, "true");
          console.log("✅ detect-evergreen.js LOADED & READY");
        } catch (err) {
          console.error("❌ Gagal load detect-evergreen.js", err);
          sessionStorage.removeItem(KEY);
        }
      }

      // --- ALWAYS run evergreen check tiap halaman ---
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
		urlMappingProdukKonstruksi,
		urlMappingProdukAlatKonstruksi,
		urlMappingProdukPembatas,
		urlMappingProdukSaluran,
		urlMappingProdukJalanLantai,
		urlMappingProdukPondasi,
		urlMappingProdukJembatan,
		urlMappingProdukDinding,
		urlMappingProdukPelabuhan,
		urlMappingProdukCustom	
	
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlProdukKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlProdukKons}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-02-21T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected produk-konstruksi: ${cleanUrlProdukKons}`);

    // --- pastikan meta nextUpdate1 ada ---
    let metaNextUpdate1 = document.querySelector('meta[name="nextUpdate1"]');
    if (!metaNextUpdate1) {
      metaNextUpdate1 = document.createElement("meta");
      metaNextUpdate1.setAttribute("name", "nextUpdate1");
      metaNextUpdate1.setAttribute("content", globalNextUpdate1);
      document.head.appendChild(metaNextUpdate1);
      console.log(`🆕 [AutoMeta] Meta nextUpdate1 ditambahkan → ${globalNextUpdate1}`);
    } else {
      console.log("✅ [AutoMeta] Meta nextUpdate1 sudah ada, tidak dibuat ulang.");
    }

    // --- pastikan detect-evergreen.js selesai dimuat ---
    await loadEvergreenScript();
    console.log("✅ detect-evergreen.js selesai dimuat.");

    // --- pastikan AEDMetaDates sudah tersedia ---
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type } = window.AEDMetaDates;

    // 🔒 Stable hash untuk variasi waktu stabil
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    const hash = stableHash(cleanUrlProdukKons);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = finalDate.toISOString();

    // 🧱 Update meta dateModified
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
	
				// Pastikan AEDMetaDates sudah ada minimal sebagai objek kosong
	window.AEDMetaDates = window.AEDMetaDates || {};
	
	// Update hanya properti dateModified tanpa menghapus lainnya
	window.AEDMetaDates = {
	  ...window.AEDMetaDates,
	  dateModified: isoDate
	};
	
	console.log("✅ AEDMetaDates updated produk-konstruksi:", window.AEDMetaDates);  
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlProdukKons} → ${isoDate} | type=${type || "-"}`);

    // 🧩 Perbarui schema jika ada
    const schemaEl = document.querySelector('script[data-schema="evergreen-maintenance"]');
    if (schemaEl) {
      try {
        const data = JSON.parse(schemaEl.textContent.trim());
        data.dateModified = isoDate;
        if (data.maintenanceSchedule) data.maintenanceSchedule.scheduledTime = nextUpdate;
        schemaEl.textContent = JSON.stringify(data, null, 2);
        console.log(`🔄 Schema maintenance diperbarui → dateModified: ${isoDate}`);
      } catch (err) {
        console.error("❌ Gagal update schema:", err);
      }
    }

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();
	
    var ProdukKons = document.getElementById("ProdukKons");
    if (!ProdukKons) {
        console.error("elemen Id ProdukKons kondisi terhapus");
        return;
    }
     // Menemukan elemen menggunakan Id
     var ProdukKonstruksiLink = document.getElementById("ProdukKonstruksi");
 
     var ProdukAlatKonstruksiLink = document.getElementById("ProdukAlatKonstruksi");
     var JualAlatBeratTambangLink = document.getElementById("JualAlatBeratTambang");
     var JualAlatKonstruksiRinganLink = document.getElementById("JualAlatKonstruksiRingan");
     var JualAlatBeratLink = document.getElementById("JualAlatBerat");
 
     var ProdukPembatasLink = document.getElementById("ProdukPembatas");
     var ProdukSaluranDrainaseLink = document.getElementById("ProdukSaluranDrainase");
     var ProdukJalanLantaiLink = document.getElementById("ProdukJalanLantai");
     var ProdukPondasiStrukturLink = document.getElementById("ProdukPondasiStruktur");
     var ProdukJembatanFlyoverLink = document.getElementById("ProdukJembatanFlyover");
     var ProdukDindingBangunanModularLink = document.getElementById("ProdukDindingBangunanModular");
     var ProdukPelabuhanPesisirLink = document.getElementById("ProdukPelabuhanPesisir");
     var ProdukCustomKhususLink = document.getElementById("ProdukCustomKhusus");

     var pageNameProdukKons = document.getElementById("pageNameProdukKons");
    

     // Default untuk menyembunyikan elemen
     ProdukKonstruksiLink.style.visibility = 'hidden';
     ProdukAlatKonstruksiLink.style.visibility = 'hidden';
     JualAlatBeratTambangLink.style.visibility = 'hidden';
     JualAlatKonstruksiRinganLink.style.visibility = 'hidden';
     JualAlatBeratLink.style.visibility = 'hidden';
 
     ProdukPembatasLink.style.visibility = 'hidden';
     ProdukSaluranDrainaseLink.style.visibility = 'hidden';
     ProdukJalanLantaiLink.style.visibility = 'hidden';
     ProdukPondasiStrukturLink.style.visibility = 'hidden';
     ProdukJembatanFlyoverLink.style.visibility = 'hidden';
     ProdukDindingBangunanModularLink.style.visibility = 'hidden';
     ProdukPelabuhanPesisirLink.style.visibility = 'hidden';
     ProdukCustomKhususLink.style.visibility = 'hidden';
 
     pageNameProdukKons.textContent = "";
if (urlMappingProdukKonstruksi[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukKonstruksi');
        //restoreCondition('ProdukKonstruksi');
 
     //hapus elemen div id lain
        removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPerbaikan');

     //hapus elemen ID DIV SUB PRODUK KONSTRUKSI SEMUA NYA
        removeCondition('ProdukAlatKonstruksi');
        removeCondition('JualAlatBeratTambang');
        removeCondition('JualAlatKonstruksiRingan');
        removeCondition('JualAlatBerat');
 
        removeCondition('ProdukPembatas');
        removeCondition('ProdukSaluranDrainase');
        removeCondition('ProdukJalanLantai');
        removeCondition('ProdukPondasiStruktur');
        removeCondition('ProdukJembatanFlyover');
        removeCondition('ProdukDindingBangunanModular');
        removeCondition('ProdukPelabuhanPesisir');
        removeCondition('ProdukCustomKhusus');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        //ProdukSaluranLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukKonstruksi[cleanUrlProdukKons];
    }
    // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingProdukKonstruksi[cleanUrlProdukKons]) {
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
                   "name": urlMappingProdukKonstruksi[cleanUrlProdukKons],
                   "item": cleanUrlProdukKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//SUB PRODUK KONSTRUSI
if (urlMappingProdukAlatKonstruksi[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukKonstruksi');
 
        restoreCondition('ProdukAlatKonstruksi');
 
     //hapus elemen div id lain
        removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPerbaikan');

     //hapus elemen ID DIV SUB PRODUK KONSTRUKSI SEMUA NYA SELAIN ProdukPembatas
        removeCondition('JualAlatBeratTambang');
        removeCondition('JualAlatKonstruksiRingan');
        removeCondition('JualAlatBerat');
 
        removeCondition('ProdukPembatas');
        removeCondition('ProdukSaluranDrainase');
        removeCondition('ProdukJalanLantai');
        removeCondition('ProdukPondasiStruktur');
        removeCondition('ProdukJembatanFlyover');
        removeCondition('ProdukDindingBangunanModular');
        removeCondition('ProdukPelabuhanPesisir');
        removeCondition('ProdukCustomKhusus');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        ProdukAlatKonstruksiLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukAlatKonstruksi[cleanUrlProdukKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingProdukAlatKonstruksi[cleanUrlProdukKons]) {
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
                   "name": "Produk Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/produk-alat-konstruksi.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingProdukAlatKonstruksi[cleanUrlProdukKons],
                   "item": cleanUrlProdukKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingProdukPembatas[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukKonstruksi');
 
        restoreCondition('ProdukPembatas');
 
     //hapus elemen div id lain
        removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPerbaikan');

     //hapus elemen ID DIV SUB PRODUK KONSTRUKSI SEMUA NYA SELAIN ProdukPembatas
       // removeCondition('');
        removeCondition('ProdukAlatKonstruksi');
        removeCondition('JualAlatBeratTambang');
        removeCondition('JualAlatKonstruksiRingan');
        removeCondition('JualAlatBerat');
 
        removeCondition('ProdukSaluranDrainase');
        removeCondition('ProdukJalanLantai');
        removeCondition('ProdukPondasiStruktur');
        removeCondition('ProdukJembatanFlyover');
        removeCondition('ProdukDindingBangunanModular');
        removeCondition('ProdukPelabuhanPesisir');
        removeCondition('ProdukCustomKhusus');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        ProdukPembatasLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukPembatas[cleanUrlProdukKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingProdukPembatas[cleanUrlProdukKons]) {
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
                   "name": "Produk Pembatas",
                   "item": "https://www.betonjayareadymix.com/p/produk-pembatas.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingProdukPembatas[cleanUrlProdukKons],
                   "item": cleanUrlProdukKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

 if (urlMappingProdukSaluran[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukKonstruksi');
 
        restoreCondition('ProdukSaluranDrainase');
 
     //hapus elemen div id lain
        removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPerbaikan');

     //hapus elemen ID DIV SUB PRODUK KONSTRUKSI SEMUA NYA SELAIN ProdukPembatas
       // removeCondition('');
        removeCondition('ProdukAlatKonstruksi');
        removeCondition('JualAlatBeratTambang');
        removeCondition('JualAlatKonstruksiRingan');
        removeCondition('JualAlatBerat');
  
        removeCondition('ProdukPembatas');
        removeCondition('ProdukJalanLantai');
        removeCondition('ProdukPondasiStruktur');
        removeCondition('ProdukJembatanFlyover');
        removeCondition('ProdukDindingBangunanModular');
        removeCondition('ProdukPelabuhanPesisir');
        removeCondition('ProdukCustomKhusus');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        ProdukSaluranDrainaseLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukSaluran[cleanUrlProdukKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingProdukSaluran[cleanUrlProdukKons]) {
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
                   "name": urlMappingProdukSaluran[cleanUrlProdukKons],
                   "item": cleanUrlProdukKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingProdukJalanLantai[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukKonstruksi');
 
        restoreCondition('ProdukJalanLantai');
 
     //hapus elemen div id lain
        removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPerbaikan');

     //hapus elemen ID DIV SUB PRODUK KONSTRUKSI SEMUA NYA SELAIN ProdukPembatas
       // removeCondition('');
        removeCondition('ProdukAlatKonstruksi');
        removeCondition('JualAlatBeratTambang');
        removeCondition('JualAlatKonstruksiRingan');
        removeCondition('JualAlatBerat');
 
        removeCondition('ProdukSaluranDrainase');
        removeCondition('ProdukPembatas');
        removeCondition('ProdukPondasiStruktur');
        removeCondition('ProdukJembatanFlyover');
        removeCondition('ProdukDindingBangunanModular');
        removeCondition('ProdukPelabuhanPesisir');
        removeCondition('ProdukCustomKhusus');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        ProdukJalanLantaiLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukJalanLantai[cleanUrlProdukKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingProdukJalanLantai[cleanUrlProdukKons]) {
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
                   "name": "Produk Jalan & Lantai",
                   "item": "https://www.betonjayareadymix.com/p/produk-jalan-lantai.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingProdukJalanLantai[cleanUrlProdukKons],
                   "item": cleanUrlProdukKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingProdukPondasi[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukKonstruksi');
 
        restoreCondition('ProdukPondasiStruktur');
 
     //hapus elemen div id lain
        removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPerbaikan');

     //hapus elemen ID DIV SUB PRODUK KONSTRUKSI SEMUA NYA SELAIN ProdukPembatas
       // removeCondition('');
        removeCondition('ProdukAlatKonstruksi');
        removeCondition('JualAlatBeratTambang');
        removeCondition('JualAlatKonstruksiRingan');
        removeCondition('JualAlatBerat');
 
        removeCondition('ProdukSaluranDrainase');
        removeCondition('ProdukJalanLantai');
        removeCondition('ProdukPembatas');
        removeCondition('ProdukJembatanFlyover');
        removeCondition('ProdukDindingBangunanModular');
        removeCondition('ProdukPelabuhanPesisir');
        removeCondition('ProdukCustomKhusus');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        ProdukPondasiStrukturLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukPondasi[cleanUrlProdukKons];
    }

 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingProdukPondasi[cleanUrlProdukKons]) {
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
                   "name": "Produk Pondasi Struktur",
                   "item": "https://www.betonjayareadymix.com/p/produk-pondasi-struktur.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingProdukPondasi[cleanUrlProdukKons],
                   "item": cleanUrlProdukKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingProdukJembatan[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukKonstruksi');
 
        restoreCondition('ProdukJembatanFlyover');
 
     //hapus elemen div id lain
        removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPerbaikan');

     //hapus elemen ID DIV SUB PRODUK KONSTRUKSI SEMUA NYA SELAIN ProdukPembatas
       // removeCondition('');
        removeCondition('ProdukAlatKonstruksi');
        removeCondition('JualAlatBeratTambang');
        removeCondition('JualAlatKonstruksiRingan');
        removeCondition('JualAlatBerat');
 
        removeCondition('ProdukSaluranDrainase');
        removeCondition('ProdukJalanLantai');
        removeCondition('ProdukPondasiStruktur');
        removeCondition('ProdukPembatas');
        removeCondition('ProdukDindingBangunanModular');
        removeCondition('ProdukPelabuhanPesisir');
        removeCondition('ProdukCustomKhusus');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        ProdukJembatanFlyoverLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukJembatan[cleanUrlProdukKons];
    }

 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingProdukJembatan[cleanUrlProdukKons]) {
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
                   "name": "Produk Jembatan & Flyover",
                   "item": "https://www.betonjayareadymix.com/p/produk-jembatan-flyover.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingProdukJembatan[cleanUrlProdukKons],
                   "item": cleanUrlProdukKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingProdukDinding[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukKonstruksi');
 
        restoreCondition('ProdukDindingBangunanModular');
 
     //hapus elemen div id lain
        removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPerbaikan');

     //hapus elemen ID DIV SUB PRODUK KONSTRUKSI SEMUA NYA SELAIN ProdukPembatas
       // removeCondition('');
        removeCondition('ProdukAlatKonstruksi');
        removeCondition('JualAlatBeratTambang');
        removeCondition('JualAlatKonstruksiRingan');
        removeCondition('JualAlatBerat');
 
        removeCondition('ProdukSaluranDrainase');
        removeCondition('ProdukJalanLantai');
        removeCondition('ProdukPondasiStruktur');
        removeCondition('ProdukJembatanFlyover');
        removeCondition('ProdukPembatas');
        removeCondition('ProdukPelabuhanPesisir');
        removeCondition('ProdukCustomKhusus');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        ProdukDindingBangunanModularLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukDinding[cleanUrlProdukKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingProdukDinding[cleanUrlProdukKons]) {
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
                   "name": "Produk Dinding Bangunan Modular",
                   "item": "https://www.betonjayareadymix.com/p/produk-dinding-bangunan-modular.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingProdukDinding[cleanUrlProdukKons],
                   "item": cleanUrlProdukKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingProdukPelabuhan[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukKonstruksi');
 
        restoreCondition('ProdukPelabuhanPesisir');
 
     //hapus elemen div id lain
        removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPerbaikan');

     //hapus elemen ID DIV SUB PRODUK KONSTRUKSI SEMUA NYA SELAIN ProdukPembatas
       // removeCondition('');
        removeCondition('ProdukAlatKonstruksi');
        removeCondition('JualAlatBeratTambang');
        removeCondition('JualAlatKonstruksiRingan');
        removeCondition('JualAlatBerat');
 
        removeCondition('ProdukSaluranDrainase');
        removeCondition('ProdukJalanLantai');
        removeCondition('ProdukPondasiStruktur');
        removeCondition('ProdukJembatanFlyover');
        removeCondition('ProdukDindingBangunanModular');
        removeCondition('ProdukPembatas');
        removeCondition('ProdukCustomKhusus');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        ProdukPelabuhanPesisirLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukPelabuhan[cleanUrlProdukKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingProdukPelabuhan[cleanUrlProdukKons]) {
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
                   "name": "Produk Pelabuhan",
                   "item": "https://www.betonjayareadymix.com/p/produk-pelabuhan.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingProdukPelabuhan[cleanUrlProdukKons],
                   "item": cleanUrlProdukKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingProdukCustom[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukKonstruksi');
 
        restoreCondition('ProdukCustomKhusus');
 
     //hapus elemen div id lain
        removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPerbaikan');

     //hapus elemen ID DIV SUB PRODUK KONSTRUKSI SEMUA NYA SELAIN ProdukPembatas
       // removeCondition('');
        removeCondition('ProdukAlatKonstruksi');
        removeCondition('JualAlatBeratTambang');
        removeCondition('JualAlatKonstruksiRingan');
        removeCondition('JualAlatBerat');
 
        removeCondition('ProdukSaluranDrainase');
        removeCondition('ProdukJalanLantai');
        removeCondition('ProdukPondasiStruktur');
        removeCondition('ProdukJembatanFlyover');
        removeCondition('ProdukDindingBangunanModular');
        removeCondition('ProdukPelabuhanPesisir');
        removeCondition('ProdukPembatas');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        ProdukCustomKhususLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukCustom[cleanUrlProdukKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingProdukCustom[cleanUrlProdukKons]) {
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
                   "name": "Produk Custom Khusus",
                   "item": "https://www.betonjayareadymix.com/p/produk-custom-khusus.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingProdukCustom[cleanUrlProdukKons],
                   "item": cleanUrlProdukKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   });
