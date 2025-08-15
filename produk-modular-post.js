/*
https://www.betonjayareadymix.com/p/bata-ringan-hebel-modular.html
https://www.betonjayareadymix.com/p/sandwich-panel-modular.html
https://www.betonjayareadymix.com/p/dinding-panel-beton-precast-modular.html
https://www.betonjayareadymix.com/p/bangunan-prefab-modular.html
https://www.betonjayareadymix.com/p/modular-kamar-mandi-toilet.html
*/
 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingModularKamarMandiToilet = {
//"https://www.betonjayareadymix.com/2021/03/harga-buis-beton-paling-murah.html": "Harga Buis Beton Paling Murah"
  "https://www.betonjayareadymix.com/2019/04/toilet-modular-3-pintu.html": "Toilet modular 3 pintu",
  "https://www.betonjayareadymix.com/2019/04/toilet-modular-custom-desain.html": "Toilet modular custom desain",
  "https://www.betonjayareadymix.com/2019/04/kamar-mandi-modular-portable.html": "Kamar mandi modular portable",
  "https://www.betonjayareadymix.com/2019/04/toilet-modular-site-office.html": "Toilet modular site office",
  "https://www.betonjayareadymix.com/2019/04/harga-toilet-modular.html": "Harga toilet modular"

};
const urlMappingBangunanPrefabModular = {
    "https://www.betonjayareadymix.com/2019/04/rumah-prefab-modular-indonesia.html": "Rumah Prefab Modular Indonesia",
  "https://www.betonjayareadymix.com/2019/04/rumah-modular-cepat-bangun.html": "Rumah Modular Cepat Bangun",
  "https://www.betonjayareadymix.com/2019/04/harga-rumah-prefab-modular.html": "Harga Rumah Prefab Modular",
  "https://www.betonjayareadymix.com/2019/04/rumah-prefab-modular-hemat-biaya.html": "Rumah Prefab Modular Hemat Biaya",
  "https://www.betonjayareadymix.com/2019/04/rumah-prefab-modular-ramah-lingkungan.html": "Rumah Prefab Modular Ramah Lingkungan",
  "https://www.betonjayareadymix.com/2019/04/desain-rumah-prefab-modular.html": "Desain Rumah Prefab Modular"

};
const urlMappingDindingPanelBetonPrecastModular = {
  "https://www.betonjayareadymix.com/2019/04/panel-modular-beton-precast.html": "Panel Modular Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/dinding-modular-beton-precast.html": "Dinding Modular Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/sistem-dinding-modular-beton.html": "Sistem Dinding Modular Beton",
  "https://www.betonjayareadymix.com/2019/04/rumah-modular-panel-beton-precast.html": "Rumah Modular Panel Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/bangunan-modular-panel-beton-precast.html": "Bangunan Modular Panel Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/konstruksi-modular-panel-beton.html": "Konstruksi Modular Panel Beton",
  "https://www.betonjayareadymix.com/2019/04/teknologi-dinding-panel-modular-beton.html": "Teknologi Dinding Panel Modular Beton",
  "https://www.betonjayareadymix.com/2019/04/material-modular-dinding-beton-precast.html": "Material Modular Dinding Beton Precast",
  "https://www.betonjayareadymix.com/2019/04/inovasi-panel-modular-beton-precast.html": "Inovasi Panel Modular Beton Precast"

};
const urlMappingSandwichPanelModular = {
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-eps.html": "Panel Sandwich EPS",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-pu.html": "Panel Sandwich PU",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-xps.html": "Panel Sandwich XPS",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-rockwool.html": "Panel Sandwich Rockwool",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-tahan-api.html": "Panel Sandwich Tahan Api",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-tahan-air.html": "Panel Sandwich Tahan Air",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-akustik.html": "Panel Sandwich Akustik",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-ringan.html": "Panel Sandwich Ringan",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-isolasi-termal.html": "Panel Sandwich Isolasi Termal",
  "https://www.betonjayareadymix.com/2019/04/panel-sandwich-untuk-rumah-modular.html": "Panel Sandwich Untuk Rumah Modular",
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

const urlMappingBataRinganHebelModular = {
  "https://www.betonjayareadymix.com/2019/04/kelebihan-bata-ringan-modular.html": "Kelebihan Bata Ringan Modular",
  "https://www.betonjayareadymix.com/2019/04/ukuran-bata-ringan-hebel-modular.html": "Ukuran Bata Ringan Hebel Modular",
  "https://www.betonjayareadymix.com/2019/04/konstruksi-dinding-bata-ringan-modular.html": "Konstruksi Dinding Bata Ringan Modular",
  "https://www.betonjayareadymix.com/2019/04/teknologi-bata-ringan-modular.html": "Teknologi Bata Ringan Modular",
  "https://www.betonjayareadymix.com/2019/04/pemasangan-bata-ringan-modular.html": "Pemasangan Bata Ringan Modular",
  "https://www.betonjayareadymix.com/2019/04/kekuatan-bata-ringan-modular.html": "Kekuatan Bata Ringan Modular",
  "https://www.betonjayareadymix.com/2019/04/modular-hebel-untuk-rumah.html": "Modular Hebel Untuk Rumah",
  "https://www.betonjayareadymix.com/2019/04/bata-ringan-modular-prefab.html": "Bata Ringan Modular Prefab",
  "https://www.betonjayareadymix.com/2019/04/bata-ringan-modular-vs-konvensional.html": "Bata Ringan Modular vs Konvensional"

 };


// Menyimpan elemen yang dihapus dalam variabel
let removedElementsProdukModularKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsProdukModularKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsProdukModularKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsProdukModularKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsProdukModularKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlProdukModularKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1
    var ProdukKonsDindingModularPost = document.getElementById("ProdukKonsDindingModularPost");
    if (!ProdukKonsDindingModularPost) {
        console.error("elemen Id ProdukKonsDindingModularPost kondisi terhapus");
        return;
    }
	
     // Menemukan elemen menggunakan Id
     var ProdukKonstruksiDindingModularLink = document.getElementById("ProdukKonstruksiDindingModular");
     var ProdukDindingModularLink = document.getElementById("ProdukDindingModular");
     var ModularKamarMandiToiletLink = document.getElementById("ModularKamarMandiToilet");
     var SandwichPanelModularLink = document.getElementById("SandwichPanelModular");
     var BataRinganHebelModularLink = document.getElementById("BataRinganHebelModular");
     var DindingPanelBetonPrecastModularLink = document.getElementById("DindingPanelBetonPrecastModular");
     var BangunanPrefabModularLink = document.getElementById("BangunanPrefabModular");
	
     var pageNameProdukDindingModularPost = document.getElementById("pageNameProdukDindingModularPost");
    

     // Default untuk menyembunyikan elemen
     ProdukKonstruksiDindingModularLink.style.visibility = 'hidden';
     ProdukDindingModularLink.style.visibility = 'hidden';
     ModularKamarMandiToiletLink.style.visibility = 'hidden';
     SandwichPanelModularLink.style.visibility = 'hidden';
     BataRinganHebelModularLink.style.visibility = 'hidden';
     DindingPanelBetonPrecastModularLink.style.visibility = 'hidden';
     BangunanPrefabModularLink.style.visibility = 'hidden';
     pageNameProdukDindingModularPost.textContent = "";

if (urlMappingModularKamarMandiToilet[cleanUrlProdukModularKons]) {
        restoreCondition('ProdukKonsDindingModularPost');
        restoreCondition('ModularKamarMandiToilet');

     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsSaluranPost');
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
        removeCondition('SandwichPanelModular');
        removeCondition('BataRinganHebelModular');
        removeCondition('DindingPanelBetonPrecastModular');
        removeCondition('BangunanPrefabModular');
       
        ProdukKonstruksiDindingModularLink.style.visibility = 'visible';
        ProdukDindingModularLink.style.visibility = 'visible';
        ModularKamarMandiToiletLink.style.visibility = 'visible';
        pageNameProdukDindingModularPost.textContent = urlMappingModularKamarMandiToilet[cleanUrlProdukModularKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingModularKamarMandiToilet[cleanUrlProdukModularKons]) {
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
                   "name": "Produk Dinding & Bangunan Modular",
                   "item": "https://www.betonjayareadymix.com/p/produk-dinding-bangunan-modular.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Modular Kamar Mandi Toilet",
                   "item": "https://www.betonjayareadymix.com/p/modular-kamar-mandi-toilet.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingModularKamarMandiToilet[cleanUrlProdukModularKons],
                   "item": cleanUrlProdukModularKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingSandwichPanelModular[cleanUrlProdukModularKons]) {
        restoreCondition('ProdukKonsDindingModularPost');
        restoreCondition('SandwichPanelModular');

     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsSaluranPost');
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
        removeCondition('ModularKamarMandiToilet');
        removeCondition('BataRinganHebelModular');
        removeCondition('DindingPanelBetonPrecastModular');
        removeCondition('BangunanPrefabModular');
       
        ProdukKonstruksiDindingModularLink.style.visibility = 'visible';
        ProdukDindingModularLink.style.visibility = 'visible';
        SandwichPanelModularLink.style.visibility = 'visible';
        pageNameProdukDindingModularPost.textContent = urlMappingSandwichPanelModular[cleanUrlProdukModularKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSandwichPanelModular[cleanUrlProdukModularKons]) {
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
                   "name": "Produk Dinding & Bangunan Modular",
                   "item": "https://www.betonjayareadymix.com/p/produk-dinding-bangunan-modular.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Sandwich Panel Modular",
                   "item": "https://www.betonjayareadymix.com/p/sandwich-panel-modular.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingSandwichPanelModular[cleanUrlProdukModularKons],
                   "item": cleanUrlProdukModularKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	if (urlMappingBangunanPrefabModular[cleanUrlProdukModularKons]) {
        restoreCondition('ProdukKonsDindingModularPost');
        restoreCondition('BangunanPrefabModular');

     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsSaluranPost');
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
        removeCondition('SandwichPanelModular');
        removeCondition('BataRinganHebelModular');
        removeCondition('DindingPanelBetonPrecastModular');
        removeCondition('ModularKamarMandiToilet');
       
        ProdukKonstruksiDindingModularLink.style.visibility = 'visible';
        ProdukDindingModularLink.style.visibility = 'visible';
        BangunanPrefabModularLink.style.visibility = 'visible';
        pageNameProdukDindingModularPost.textContent = urlMappingBangunanPrefabModular[cleanUrlProdukModularKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBangunanPrefabModular[cleanUrlProdukModularKons]) {
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
                   "name": "Produk Dinding & Bangunan Modular",
                   "item": "https://www.betonjayareadymix.com/p/produk-dinding-bangunan-modular.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Bangunan Prefab Modular",
                   "item": "https://www.betonjayareadymix.com/p/bangunan-prefab-modular.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBangunanPrefabModular[cleanUrlProdukModularKons],
                   "item": cleanUrlProdukModularKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	if (urlMappingDindingPanelBetonPrecastModular[cleanUrlProdukModularKons]) {
        restoreCondition('ProdukKonsDindingModularPost');
        restoreCondition('DindingPanelBetonPrecastModular');

     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsSaluranPost');
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
        removeCondition('SandwichPanelModular');
        removeCondition('BataRinganHebelModular');
        removeCondition('ModularKamarMandiToilet');
        removeCondition('BangunanPrefabModular');
       
        ProdukKonstruksiDindingModularLink.style.visibility = 'visible';
        ProdukDindingModularLink.style.visibility = 'visible';
        DindingPanelBetonPrecastModularLink.style.visibility = 'visible';
        pageNameProdukDindingModularPost.textContent = urlMappingDindingPanelBetonPrecastModular[cleanUrlProdukModularKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingDindingPanelBetonPrecastModular[cleanUrlProdukModularKons]) {
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
                   "name": "Produk Dinding & Bangunan Modular",
                   "item": "https://www.betonjayareadymix.com/p/produk-dinding-bangunan-modular.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Dinding Panel Beton Precast Modular",
                   "item": "https://www.betonjayareadymix.com/p/dinding-panel-beton-precast-modular.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingDindingPanelBetonPrecastModular[cleanUrlProdukModularKons],
                   "item": cleanUrlProdukModularKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	if (urlMappingBataRinganHebelModular[cleanUrlProdukModularKons]) {
        restoreCondition('ProdukKonsDindingModularPost');
        restoreCondition('BataRinganHebelModular');

     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsSaluranPost');
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
        removeCondition('SandwichPanelModular');
        removeCondition('ModularKamarMandiToilet');
        removeCondition('DindingPanelBetonPrecastModular');
        removeCondition('BangunanPrefabModular');
       
        ProdukKonstruksiDindingModularLink.style.visibility = 'visible';
        ProdukDindingModularLink.style.visibility = 'visible';
        BataRinganHebelModularLink.style.visibility = 'visible';
        pageNameProdukDindingModularPost.textContent = urlMappingBataRinganHebelModular[cleanUrlProdukModularKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBataRinganHebelModular[cleanUrlProdukModularKons]) {
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
                   "name": "Produk Dinding & Bangunan Modular",
                   "item": "https://www.betonjayareadymix.com/p/produk-dinding-bangunan-modular.html"
               },
             {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Bata Ringan Hebel Modular",
                   "item": "https://www.betonjayareadymix.com/p/bata-ringan-hebel-modular.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBataRinganHebelModular[cleanUrlProdukModularKons],
                   "item": cleanUrlProdukModularKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   });

