/*"https://www.betonjayareadymix.com/p/beton-precast.html": "Beton Precast",
  "https://www.betonjayareadymix.com/p/panel-beton-precast.html": "Panel Beton Precast",
  "https://www.betonjayareadymix.com/p/beton-ringan-precast.html": "Beton Ringan Precast",
  "https://www.betonjayareadymix.com/p/alat-konstruksi.html": "Alat Konstruksi",
*/
 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingProdukBetonPrecast = {
"https://www.betonjayareadymix.com/2022/01/scg-pipe-and-precast.html": "SCG Pipe And Precast",
  "https://www.betonjayareadymix.com/2021/04/merak-jaya-beton-precast.html": "Merak Jaya Beton Precast",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-indonesia.html": "Beton Precast Indonesia",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-untuk-jalan.html": "Beton Precast Untuk Jalan",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-jogja.html": "Beton Precast Jogja",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-depok.html": "Beton Precast Depok",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-bogor.html": "Beton Precast Bogor",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-bekasi.html": "Beton Precast Bekasi",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-subang.html": "Beton Precast Subang",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-bandung.html": "Beton Precast Bandung",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-ruspin.html": "Beton Precast Ruspin",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-untuk-saluran-irigasi.html": "Beton Precast Untuk Saluran Irigasi",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-untuk-lantai.html": "Beton Precast Untuk Lantai",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-untuk-rumah.html": "Beton Precast Untuk Rumah",
  "https://www.betonjayareadymix.com/2021/04/beton-precast-hcs.html": "Beton Precast HCS",
  "https://www.betonjayareadymix.com/2021/04/wika-beton-precast.html": "Wika Beton Precast"

};
const urlMappingProdukPanelBetonPrecast = {
};
const urlMappingProdukBetonRinganPrecast = {
  "https://www.betonjayareadymix.com/2021/07/berapa-ukuran-beton-ringan.html": "Berapa Ukuran Beton Ringan",
  "https://www.betonjayareadymix.com/2021/07/beton-ringan-struktural.html": "Beton Ringan Struktural",
	
"https://www.betonjayareadymix.com/2021/07/beton-ringan-tangerang.html": "Beton Ringan Tangerang",
  "https://www.betonjayareadymix.com/2021/07/beton-ringan-depok.html": "Beton Ringan Depok",
  "https://www.betonjayareadymix.com/2021/07/beton-ringan-jakarta.html": "Beton Ringan Jakarta",
  "https://www.betonjayareadymix.com/2021/07/beton-ringan-bekasi.html": "Beton Ringan Bekasi",
  "https://www.betonjayareadymix.com/2021/07/dak-beton-ringan-hebel.html": "Dak Beton Ringan Hebel",
  "https://www.betonjayareadymix.com/2021/07/panel-beton-ringan.html": "Panel Beton Ringan",
  "https://www.betonjayareadymix.com/2021/07/jual-beton-ringan-bandung.html": "Jual Beton Ringan Bandung",
  "https://www.betonjayareadymix.com/2021/07/jual-beton-ringan.html": "Jual Beton Ringan",
  "https://www.betonjayareadymix.com/2021/07/jual-beton-ringan-bogor.html": "Jual Beton Ringan Bogor",
  "https://www.betonjayareadymix.com/2021/07/beton-ringan-untuk-dak.html": "Beton Ringan Untuk Dak",
  "https://www.betonjayareadymix.com/2021/07/beton-ringan-blesscon.html": "Beton Ringan Blesscon",
  "https://www.betonjayareadymix.com/2021/07/papan-beton-ringan.html": "Papan Beton Ringan",
  "https://www.betonjayareadymix.com/2021/07/beton-ringan-hebel.html": "Beton Ringan Hebel",
  "https://www.betonjayareadymix.com/2021/07/beton-ringan-bogor.html": "Beton Ringan Bogor",
  "https://www.betonjayareadymix.com/2021/07/beton-ringan-untuk-lantai.html": "Beton Ringan Untuk Lantai"

};
const urlMappingProdukAlatKonstruksi = {

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsProdukKonsPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsProdukKonsPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsProdukKonsPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsProdukKonsPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsProdukKonsPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlProdukKonsPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var ProdukKonsPost = document.getElementById("ProdukKonsPost");
    if (!ProdukKonsPost) {
        console.error("elemen Id ProdukKonsPost kondisi terhapus");
        return;
    }

     var ProdukKonstruksiPostLink = document.getElementById("ProdukKonstruksiPost");
     var ProdukBetonPrecastLink = document.getElementById("ProdukBetonPrecast");
     var ProdukPanelBetonPrecastLink = document.getElementById("ProdukPanelBetonPrecast");
     var ProdukBetonRinganPrecastLink = document.getElementById("ProdukBetonRinganPrecast");
     var ProdukAlatKonstruksiLink = document.getElementById("ProdukAlatKonstruksi");
     
     var pageNameProdukKonsPost = document.getElementById("pageNameProdukKonsPost");
    

     // Default untuk menyembunyikan elemen
     ProdukKonstruksiPostLink.style.visibility = 'hidden';
     ProdukBetonPrecastLink.style.visibility = 'hidden';
     ProdukPanelBetonPrecastLink.style.visibility = 'hidden';
     ProdukBetonRinganPrecastLink.style.visibility = 'hidden';
     ProdukAlatKonstruksiLink.style.visibility = 'hidden';
	
     pageNameProdukKonsPost.textContent = "";

    if (urlMappingProdukBetonPrecast[cleanUrlProdukKonsPost]) {
        restoreCondition('ProdukKonsPost');
        restoreCondition('ProdukBetonPrecast');
     
        //hapus elemen div id lain
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');

        //hapus elemen ProdukKonstruksiPost lain SELAIN ProdukBetonPrecast
       // removeCondition('');
        removeCondition('ProdukPanelBetonPrecast');
        removeCondition('ProdukBetonRinganPrecast');
        removeCondition('ProdukAlatKonstruksi');
       
        ProdukKonstruksiPostLink.style.visibility = 'visible';
        ProdukBetonPrecastLink.style.visibility = 'visible';
        pageNameProdukKonsPost.textContent = urlMappingProdukBetonPrecast[cleanUrlProdukKonsPost];
    }
    if (urlMappingProdukPanelBetonPrecast[cleanUrlProdukKonsPost]) {
        restoreCondition('ProdukKonsPost');
        restoreCondition('ProdukPanelBetonPrecast');
     
        //hapus elemen div id lain
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');

        //hapus elemen ProdukKonstruksiPost lain SELAIN ProdukBetonPrecast
       // removeCondition('');
        removeCondition('ProdukBetonPrecast');
        removeCondition('ProdukBetonRinganPrecast');
        removeCondition('ProdukAlatKonstruksi');
       
        ProdukKonstruksiPostLink.style.visibility = 'visible';
        ProdukPanelBetonPrecastLink.style.visibility = 'visible';
        pageNameProdukKonsPost.textContent = urlMappingProdukPanelBetonPrecast[cleanUrlProdukKonsPost];
    }
   if (urlMappingProdukBetonRinganPrecast[cleanUrlProdukKonsPost]) {
        restoreCondition('ProdukKonsPost');
        restoreCondition('ProdukBetonRinganPrecast');
     
        //hapus elemen div id lain
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');

        //hapus elemen ProdukKonstruksiPost lain SELAIN ProdukBetonPrecast
       // removeCondition('');
        removeCondition('ProdukPanelBetonPrecast');
        removeCondition('ProdukBetonPrecast');
        removeCondition('ProdukAlatKonstruksi');
       
        ProdukKonstruksiPostLink.style.visibility = 'visible';
        ProdukBetonRinganPrecastLink.style.visibility = 'visible';
        pageNameProdukKonsPost.textContent = urlMappingProdukBetonRinganPrecast[cleanUrlProdukKonsPost];
    }
   if (urlMappingProdukAlatKonstruksi[cleanUrlProdukKonsPost]) {
        restoreCondition('ProdukKonsPost');
        restoreCondition('ProdukAlatKonstruksi');
     
        //hapus elemen div id lain
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');

        //hapus elemen ProdukKonstruksiPost lain SELAIN ProdukBetonPrecast
       // removeCondition('');
        removeCondition('ProdukPanelBetonPrecast');
        removeCondition('ProdukBetonRinganPrecast');
        removeCondition('ProdukBetonPrecast');
       
        ProdukKonstruksiPostLink.style.visibility = 'visible';
        ProdukAlatKonstruksiLink.style.visibility = 'visible';
        pageNameProdukKonsPost.textContent = urlMappingProdukAlatKonstruksi[cleanUrlProdukKonsPost];
    }
   });
