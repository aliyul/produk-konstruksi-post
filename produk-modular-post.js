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
    "https://www.betonjayareadymix.com/2021/04/arti-box-culvert.html": "Arti Box Culvert"
  
};
const urlMappingDindingPanelBetonPrecastModular = {
    "https://www.betonjayareadymix.com/2021/04/fungsi-u-ditch.html": "Fungsi U Ditch"
};
const urlMappingSandwichPanelModular = {


 };

const urlMappingBataRinganHebelModular = {


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
    var ProdukKonsModularPost = document.getElementById("ProdukKonsModularPost");
    if (!ProdukKonsModularPost) {
        console.error("elemen Id ProdukKonsModularPost kondisi terhapus");
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

    if (urlMappingBuis[cleanUrlProdukModularKons]) {
        restoreCondition('ProdukKonsModularPost');
        restoreCondition('ProdukBuis');
     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
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
        removeCondition('ProdukUditch');
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukGorongBeton');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukBuisLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingBuis[cleanUrlProdukModularKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBuis[cleanUrlProdukModularKons]) {
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
                   "name": "Buis Beton Precast",
                   "item": "https://www.betonjayareadymix.com/p/buis-beton-precast.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBuis[cleanUrlProdukModularKons],
                   "item": cleanUrlProdukModularKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingBoxCulvert[cleanUrlProdukModularKons]) {
        restoreCondition('ProdukKonsModularPost');
        restoreCondition('ProdukBoxCulvert');
     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
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
        removeCondition('ProdukUditch');
        removeCondition('ProdukBuis');
        removeCondition('ProdukGorongBeton');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukBoxCulvertLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingBoxCulvert[cleanUrlProdukModularKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBoxCulvert[cleanUrlProdukModularKons]) {
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
                   "name": "Box Culvert Beton Precast",
                   "item": "https://www.betonjayareadymix.com/p/box-culvert-beton-precast.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingBoxCulvert[cleanUrlProdukModularKons],
                   "item": cleanUrlProdukModularKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   if (urlMappingUditch[cleanUrlProdukModularKons]) {
        restoreCondition('ProdukKonsModularPost');
        restoreCondition('ProdukUditch');
	   
     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');        
        removeCondition('ProdukKonsPembatasPost');
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
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukBuis');
        removeCondition('ProdukGorongBeton');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukUditchLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingUditch[cleanUrlProdukModularKons];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingUditch[cleanUrlProdukModularKons]) {
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
                   "name": "U ditch Tutup Beton Precast",
                   "item": "https://www.betonjayareadymix.com/p/u-ditch-tutup-beton-precast.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingUditch[cleanUrlProdukModularKons],
                   "item": cleanUrlProdukModularKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingGorongBeton[cleanUrlProdukModularKons]) {
        restoreCondition('ProdukKonsModularPost');
        restoreCondition('ProdukGorongBeton');
	    
     //hapus elemen div id lain
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsPembatasPost');
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
        removeCondition('ProdukBoxCulvert');
        removeCondition('ProdukBuis');
        removeCondition('ProdukUditch');
       
        ProdukKonstruksiSaluranLink.style.visibility = 'visible';
        ProdukSaluranLink.style.visibility = 'visible';
        ProdukGorongBetonLink.style.visibility = 'visible';
        pageNameProdukSaluran.textContent = urlMappingGorongBeton[cleanUrlProdukModularKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingGorongBeton[cleanUrlProdukModularKons]) {
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
                   "name": "Gorong gorong Saluran Beton Precast",
                   "item": "https://www.betonjayareadymix.com/p/gorong-gorong-saluran-beton-precast.html"
               },
              
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingGorongBeton[cleanUrlProdukModularKons],
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

