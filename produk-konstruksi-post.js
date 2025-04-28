/*"https://www.betonjayareadymix.com/p/beton-precast.html": "Beton Precast",
  "https://www.betonjayareadymix.com/p/panel-beton-precast.html": "Panel Beton Precast",
  "https://www.betonjayareadymix.com/p/beton-ringan-precast.html": "Beton Ringan Precast",
  "https://www.betonjayareadymix.com/p/alat-konstruksi.html": "Alat Konstruksi",
*/
 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingProdukBetonPrecast = {

};
const urlMappingProdukPanelBetonPrecast = {
};
const urlMappingProdukBetonRinganPrecast = {

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
        removeCondition('ProdukPanelBetonPrecast');
        removeCondition('ProdukBetonRinganPrecast');
        removeCondition('ProdukAlatKonstruksi');
       
        ProdukKonstruksiPostLink.style.visibility = 'visible';
        ProdukBetonPrecastLink.style.visibility = 'visible';
        pageNameProdukKonsPost.textContent = urlMappingProdukBetonPrecast[cleanUrlProdukKonsPost];
    }
    
   });
