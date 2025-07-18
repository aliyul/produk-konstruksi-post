
 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingProdukKonstruksi = {
"https://www.betonjayareadymix.com/p/beton-precast.html": "Beton Precast",
  "https://www.betonjayareadymix.com/p/panel-beton-precast.html": "Panel Beton Precast",
  "https://www.betonjayareadymix.com/p/beton-ringan-precast.html": "Beton Ringan Precast",
  "https://www.betonjayareadymix.com/p/alat-konstruksi.html": "Alat Konstruksi",
 
  "https://www.betonjayareadymix.com/p/produk-pembatas.html": "Produk Pembatas",
  "https://www.betonjayareadymix.com/p/produk-saluran-drainase.html": "Produk Saluran Drainase",
  "https://www.betonjayareadymix.com/p/produk-jalan-lantai.html": "Produk Jalan Lantai",
  "https://www.betonjayareadymix.com/p/produk-pondasi-struktur.html": "Produk Pondasi Struktur",
  "https://www.betonjayareadymix.com/p/produk-jembatan-flyover.html": "Produk Jembatan Flyover",
  "https://www.betonjayareadymix.com/p/produk-dinding-bangunan-modular.html": "Produk Dinding Bangunan Modular",
  "https://www.betonjayareadymix.com/p/produk-pelabuhan-pesisir.html": "Produk Pelabuhan Pesisir",
  "https://www.betonjayareadymix.com/p/produk-custom-khusus.html": "Produk Custom Khusus"
};
const urlMappingProdukPembatas = {
 "https://www.betonjayareadymix.com/p/pagar-rumah.html": "Pagar Rumah",
  "https://www.betonjayareadymix.com/p/pagar-panel-beton.html": "Pagar Panel Beton",
  "https://www.betonjayareadymix.com/p/pagar-grc.html": "Pagar GRC",
  "https://www.betonjayareadymix.com/p/pagar-brc.html": "Pagar BRC",
  "https://www.betonjayareadymix.com/p/pagar-beton.html": "Pagar Beton",
  "https://www.betonjayareadymix.com/p/pagar-batu-alam.html": "Pagar Batu Alam",
  "https://www.betonjayareadymix.com/p/pagar-besi.html": "Pagar Besi",
  "https://www.betonjayareadymix.com/p/kanstin-beton-precast.html": "Kanstin Beton Precast"

};
const urlMappingProdukSaluran = {
  "https://www.betonjayareadymix.com/p/buis-beton-precast.html": "Buis Beton Precast",
  "https://www.betonjayareadymix.com/p/box-culvert-beton-precast.html": "Box Culvert Beton Precast",
  "https://www.betonjayareadymix.com/p/u-ditch-tutup-beton-precast.html": "U Ditch Tutup Beton Precast",
  "https://www.betonjayareadymix.com/p/gorong-gorong-saluran-beton-precast.html": "Gorong Gorong Saluran Beton Precast"
};
const urlMappingProdukJalanLantai = {
 "https://www.betonjayareadymix.com/p/paving-block.html": "Paving Block",
  "https://www.betonjayareadymix.com/p/grass-block.html": "Grass Block"
};
const urlMappingProdukPondasi = {
  
};
const urlMappingProdukJembatan = {
  
};
const urlMappingProdukDinding = {
  
};
const urlMappingProdukPelabuhan = {
  
};
const urlMappingProdukCustom = {
  
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
    var ProdukKons = document.getElementById("ProdukKons");
    if (!ProdukKons) {
        console.error("elemen Id ProdukKons kondisi terhapus");
        return;
    }
     // Menemukan elemen menggunakan Id
     var ProdukKonstruksiLink = document.getElementById("ProdukKonstruksi");
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
//SUB PRODUK KONSTRUSI
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
        removeCondition('ProdukSaluranDrainase');
        removeCondition('ProdukJalanLantai');
        removeCondition('ProdukPondasiStruktur');
        removeCondition('ProdukJembatanFlyover');
        removeCondition('ProdukPembatas');
        removeCondition('ProdukPelabuhanPesisir');
        removeCondition('ProdukCustomKhusus');
       
        ProdukKonstruksiLink.style.visibility = 'visible';
        ProdukPembatasLink.style.visibility = 'visible';
        //ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukKons.textContent = urlMappingProdukDinding[cleanUrlProdukKons];
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

   });
