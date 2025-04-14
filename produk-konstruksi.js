
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
  
};
const urlMappingProdukSaluran = {
  
};
const urlMappingProdukJalanLantai = {
  
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
     var pageNameProdukSaluran = document.getElementById("pageNameProdukSaluran");
    

     // Default untuk menyembunyikan elemen
     ProdukKonstruksiSaluranLink.style.visibility = 'hidden';
     ProdukSaluranLink.style.visibility = 'hidden';
     ProdukBuisLink.style.visibility = 'hidden';
     ProdukBoxCulvertLink.style.visibility = 'hidden';
     ProdukUditchLink.style.visibility = 'hidden';
     ProdukGorongBetonLink.style.visibility = 'hidden';
     pageNameProdukSaluran.textContent = "";

    if (urlMappingBuis[cleanUrlProdukSaluranKons]) {
        restoreCondition('ProdukKonsSaluranPost');
        restoreCondition('ProdukBuis');
     //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
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
        pageNameProdukSaluran.textContent = urlMappingBuis[cleanUrlProdukSaluranKons];
    }
    if (urlMappingBoxCulvert[cleanUrlProdukSaluranKons]) {
        restoreCondition('ProdukKonsSaluranPost');
        restoreCondition('ProdukBoxCulvert');
     //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
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
        pageNameProdukSaluran.textContent = urlMappingBoxCulvert[cleanUrlProdukSaluranKons];
    }
   if (urlMappingUditch[cleanUrlProdukSaluranKons]) {
        restoreCondition('ProdukKonsSaluranPost');
        restoreCondition('ProdukUditch');
     //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
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
        pageNameProdukSaluran.textContent = urlMappingUditch[cleanUrlProdukSaluranKons];
    }
    if (urlMappingGorongBeton[cleanUrlProdukSaluranKons]) {
        restoreCondition('ProdukKonsSaluranPost');
        restoreCondition('ProdukGorongBeton');
     //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
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
        pageNameProdukSaluran.textContent = urlMappingGorongBeton[cleanUrlProdukSaluranKons];
    }
   });
