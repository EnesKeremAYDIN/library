document.addEventListener('DOMContentLoaded', function () {
    const kitapListesi = [
        {
            "resim": "kitap1.jpg",
            "ad": "Harry Potter ve Felsefe Taşı",
            "yazar": "J.K. Rowling",
            "yayinevi": "YKY",
            "yil": 1997
        },
        {
            "resim": "kitap2.jpg",
            "ad": "1984",
            "yazar": "George Orwell",
            "yayinevi": "Can Yayınları",
            "yil": 1949
        },
        {
            "resim": "kitap3.jpg",
            "ad": "Beyaz Diş",
            "yazar": "Jack London",
            "yayinevi": "İş Bankası Kültür Yayınları",
            "yil": 1906
        },
        // Ek kitaplar buraya eklenebilir
    ];

    let currentPage = 1;
    let booksPerPage = 10;
    let currentSortOption = "a-z";
    let currentSearchOption = "ad";
    let currentSearchQuery = "";

    const kitapContainer = document.getElementById("kitap-container");
    const aramaInput = document.getElementById("arama-input");
    const sıralamaSelect = document.getElementById("sıralama-select");
    const sayfaSecimiSelect = document.getElementById("sayfa-secimi-select");

    // Kitap listesini sayfalara bölen fonksiyon
    function displayBooks() {
        const startIndex = (currentPage - 1) * booksPerPage;
        const endIndex = startIndex + booksPerPage;
        const displayedBooks = kitapListesi.slice(startIndex, endIndex);

        kitapContainer.innerHTML = ""; // Kitapları temizle

        displayedBooks.forEach((kitap) => {
            const kitapDiv = document.createElement("div");
            kitapDiv.classList.add("kitap");

            // Kitap bilgilerini ekleme işlemleri burada yapılacak
            const kitapResim = document.createElement("img");
            kitapResim.src = kitap.resim;
            kitapResim.alt = kitap.ad;
            kitapDiv.appendChild(kitapResim);

            const kitapAd = document.createElement("p");
            kitapAd.textContent = "Kitap Adı: " + kitap.ad;
            kitapDiv.appendChild(kitapAd);

            const kitapYazar = document.createElement("p");
            kitapYazar.textContent = "Yazar: " + kitap.yazar;
            kitapDiv.appendChild(kitapYazar);

            const kitapYayinevi = document.createElement("p");
            kitapYayinevi.textContent = "Yayınevi: " + kitap.yayinevi;
            kitapDiv.appendChild(kitapYayinevi);

            const kitapYil = document.createElement("p");
            kitapYil.textContent = "Yıl: " + kitap.yil;
            kitapDiv.appendChild(kitapYil);

            // Kitap div'ini sayfaya ekleme işlemi
            kitapContainer.appendChild(kitapDiv);
        });

        // Sayfa numaralarını güncelleme işlemleri burada yapılacak
    }

    // Kitapları sıralama fonksiyonu
    function sortBooks() {
        const selectedSortOption = sıralamaSelect.value;
        currentSortOption = selectedSortOption;
        // Kitapları istenilen sıralama seçeneğine göre sıralama işlemleri burada yapılacak
        displayBooks();
    }

    // Kitapları arama fonksiyonu
    function searchBooks() {
        const selectedSearchOption = document.querySelector('input[name="aramaSecenekleri"]:checked').value;
        currentSearchOption = selectedSearchOption;
        currentSearchQuery = aramaInput.value.toLowerCase();
        // Kitapları istenilen arama seçeneğine göre filtreleme işlemleri burada yapılacak
        displayBooks();
    }

    // Sayfa numarasını güncelleme fonksiyonu
    function updatePageNumber(newPage) {
        currentPage = newPage;
        displayBooks();
    }

    // Popup görüntüleme fonksiyonu
    function showPopup(imageURL) {
        // Popup'ı görüntüleme işlemleri burada yapılacak
    }

    // Event listener'lar
    aramaInput.addEventListener('input', searchBooks);
    sıralamaSelect.addEventListener('change', sortBooks);
    sayfaSecimiSelect.addEventListener('change', function () {
        booksPerPage = parseInt(sayfaSecimiSelect.value);
        currentPage = 1; // Sayfa numarasını sıfırla
        displayBooks();
    });

    // İlk kitap listesini göster
    displayBooks();
});
