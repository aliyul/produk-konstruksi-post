
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
     ProdukKonstruksiSaluranLink.style.visibility = 'hidden';
     ProdukSaluranLink.style.visibility = 'hidden';
     ProdukBuisLink.style.visibility = 'hidden';
     ProdukBoxCulvertLink.style.visibility = 'hidden';
     ProdukUditchLink.style.visibility = 'hidden';
     ProdukGorongBetonLink.style.visibility = 'hidden';
     pageNameProdukSaluran.textContent = "";
if (urlMappingProdukKonstruksi[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukBuis');
     //hapus elemen div id lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
         removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');

     //hapus elemen saluran lain
        removeCondition('ProdukUditch');
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukGorongBeton');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingProdukKonstruksi[cleanUrlProdukKons];
    }

    if (urlMappingBuis[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukBuis');
     //hapus elemen div id lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
         removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');

     //hapus elemen saluran lain
        removeCondition('ProdukUditch');
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukGorongBeton');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingBuis[cleanUrlProdukKons];
    }
    if (urlMappingBoxCulvert[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukBoxCulvert');
     //hapus elemen div id lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
         removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
     
     //hapus elemen saluran lain
        removeCondition('ProdukUditch');
        removeCondition('ProdukBuis');
        removeCondition('ProdukGorongBeton');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukBoxCulvertLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingBoxCulvert[cleanUrlProdukKons];
    }
   if (urlMappingUditch[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukUditch');
     //hapus elemen div id lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
         removeCondition('JasaKonsPembatas');
         removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
     //hapus elemen saluran lain
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukBuis');
        removeCondition('ProdukGorongBeton');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukUditchLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingUditch[cleanUrlProdukKons];
    }
    if (urlMappingGorongBeton[cleanUrlProdukKons]) {
        restoreCondition('ProdukKons');
        restoreCondition('ProdukGorongBeton');
     //hapus elemen div id lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsPembatas');
         removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
     //hapus elemen saluran lain
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukBuis');
        removeCondition('ProdukUditch');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukGorongBetonLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingGorongBeton[cleanUrlProdukKons];
    }
   });
