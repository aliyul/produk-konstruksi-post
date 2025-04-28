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
    var ProdukKonsPembatasPost = document.getElementById("ProdukKonsPembatasPost");
    if (!ProdukKonsPembatasPost) {
        console.error("elemen Id ProdukKonsPembatasPost kondisi terhapus");
        return;
    }
     var ProdukKonstruksiPembatasLink = document.getElementById("ProdukKonstruksiPembatas");
     var ProdukPembatasLink = document.getElementById("ProdukPembatas");
     var ProdukPagarPanelBetonLink = document.getElementById("ProdukPagarPanelBeton");
     var ProdukPagarBetonLink = document.getElementById("ProdukPagarBeton");
     var ProdukPagarRumahLink = document.getElementById("ProdukPagarRumah");
     //var JasaBongkarKeramikLink = document.getElementById("JasaBongkarKeramik");
     var pageNameProdukPembatas = document.getElementById("pageNameProdukPembatas");
    

     // Default untuk menyembunyikan elemen
     ProdukKonstruksiPembatasLink.style.visibility = 'hidden';
     ProdukPembatasLink.style.visibility = 'hidden';
     ProdukPagarPanelBetonLink.style.visibility = 'hidden';
     ProdukPagarBetonLink.style.visibility = 'hidden';
     ProdukPagarRumahLink.style.visibility = 'hidden';
     //JasaBongkarKeramikLink.style.visibility = 'hidden';
     pageNameProdukPembatas.textContent = "";

    if (urlMappingProdukBetonPrecast[cleanUrlProdukKonsPost]) {
        restoreCondition('ProdukKonsPembatasPost');
        restoreCondition('ProdukPagarPanelBeton');
     
        //hapus elemen div id lain
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
     
        //hapus elemen jasa pembatas lain
        removeCondition('ProdukPagarBeton');
        removeCondition('ProdukPagarRumah');
       
        ProdukKonstruksiPembatasLink.style.visibility = 'visible';
        ProdukPembatasLink.style.visibility = 'visible';
        ProdukPagarPanelBetonLink.style.visibility = 'visible';
        pageNameProdukPembatas.textContent = urlMappingProdukBetonPrecast[cleanUrlProdukKonsPost];
    }
    
   });
