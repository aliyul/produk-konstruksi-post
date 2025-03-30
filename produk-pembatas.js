 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingProdukPagarPanelBeton = {
  
};
const urlMappingProdukPagarBeton = {

};
const urlMappingProdukPagarRumah = {
 
};


// Menyimpan elemen yang dihapus dalam variabel
let removedElementsProdukPembatasKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsProdukPembatasKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsProdukPembatasKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsProdukPembatasKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsProdukPembatasKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlProdukPembatasKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var ProdukKonsPembatas = document.getElementById("ProdukKonsPembatas");
    if (!ProdukKonsPembatas) {
        console.error("elemen Id ProdukKonsPembatas kondisi terhapus");
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

    if (urlMappingProdukPagarPanelBeton[cleanUrlProdukPembatasKons]) {
        restoreCondition('JasaKonsPembatas');
        restoreCondition('JasaPasangPagarPanelBeton');
     
        //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('JasaKonsPerbaikan');
     
        //hapus elemen jasa pembatas lain
        removeCondition('JasaPasangPagarBeton');
        removeCondition('JasaPasangPagarRumah');
       
        ProdukKonstruksiPembatasLink.style.visibility = 'visible';
        ProdukPembatasLink.style.visibility = 'visible';
        ProdukPagarPanelBetonLink.style.visibility = 'visible';
        pageNameProdukPembatas.textContent = urlMappingProdukPagarPanelBeton[cleanUrlProdukPembatasKons];
    }
    if (urlMappingProdukPagarBeton[cleanUrlProdukPembatasKons]) {
        restoreCondition('JasaKonsPembatas');
        restoreCondition('JasaPasangPagarBeton');

       //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('JasaKonsPerbaikan');

        //hapus elemen jasa pembatas lain
        removeCondition('JasaPasangPagarPanelBeton');
        removeCondition('JasaPasangPagarRumah');
        
        ProdukKonstruksiPembatasLink.style.visibility = 'visible';
        ProdukPembatasLink.style.visibility = 'visible';
        ProdukPagarBetonLink.style.visibility = 'visible';
        pageNameProdukPembatas.textContent = urlMappingProdukPagarBeton[cleanUrlProdukPembatasKons];
    }
   if (urlMappingProdukPagarRumah[cleanUrlProdukPembatasKons]) {
        restoreCondition('JasaKonsPembatas');
        restoreCondition('JasaPasangPagarRumah');

       //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('JasaKonsPerbaikan');

        //hapus elemen jasa pembatas lain
        removeCondition('JasaPasangPagarPanelBeton');
        removeCondition('JasaPasangPagarBeton');
    
        ProdukKonstruksiPembatasLink.style.visibility = 'visible';
        ProdukPembatasLink.style.visibility = 'visible';
        ProdukPagarRumahLink.style.visibility = 'visible';
        pageNameProdukPembatas.textContent = urlMappingProdukPagarRumah[cleanUrlProdukPembatasKons];
    }
 
   });


