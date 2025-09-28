const triggerElements = document.querySelectorAll('.post-card');
triggerElements.forEach(card => {
    card.addEventListener('click', () => {
        buatDanTampilkanModal(card);
    });
});

function buatDanTampilkanModal(clickedCard) {
    let postTitle = clickedCard.querySelector('h3').textContent;
    const convertTitle = postTitle.trim().toLowerCase();
    
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    const modalKonten = document.createElement('div');
    modalKonten.className = 'modal-konten';
    const tombolTutup = document.createElement('span');
    tombolTutup.className = 'close-button';
    tombolTutup.innerHTML = '&times;';
    const judulModal = document.createElement('h1');
    judulModal.textContent = `${postTitle}`;
    const blogContent = document.createElement('div');

    let pageUrl = '';
    let blogHTML = '';

    if (convertTitle === "harapan") {
        pageUrl = 'harapan.html';
        blogHTML = `<p>Harapan saya terhadap mata kuliah Basis Data adalah untuk memahami konsep fundamental dan prinsip desain database yang efisien. Saya ingin mempelajari cara merancang skema database yang optimal untuk berbagai jenis aplikasi, serta memahami bagaimana mengelola data dengan cara yang aman dan terstruktur.</p>
        <p>Selain itu, saya berharap dapat menguasai bahasa query seperti SQL untuk melakukan operasi data yang kompleks. Kemampuan ini sangat penting dalam pengembangan aplikasi web modern yang membutuhkan penyimpanan dan pengambilan data yang efisien.</p>`;
    } else if (convertTitle === "basis data") {
        pageUrl = 'basis-data.html';
        blogHTML = `<p>Apa itu Basis data? Mari kita bedah. Bayangkan basis data seperti sebuah perpustakaan yang sangat rapi dan terorganisir. Setiap buku memiliki tempat khusus, katalog yang terstruktur, dan sistem untuk menemukan buku dengan cepat.</p>
        <p>Dalam konteks digital, basis data adalah kumpulan data yang terorganisir yang disimpan dan diakses secara elektronik. Basis data memungkinkan kita untuk menyimpan, mengelola, dan mengambil informasi dengan efisien.</p>`;
    } else if (convertTitle === "conceptual db"){
        pageUrl = 'conceptual-db.html';
        blogHTML = `<p>Apa itu Conceptual DB? Yuk kita bedah lagi. Bayangkan kita ingin membuat sebuah lukisan yang indah dan bermakna. Sebelum mulai melukis, kita perlu membuat sketsa kasar terlebih dahulu untuk merencanakan komposisi, warna, dan elemen-elemen penting dalam lukisan tersebut.</p>
        <p>Conceptual Database Model adalah "sketsa" tersebut dalam dunia basis data. Ini adalah representasi tingkat tinggi dari struktur data, tanpa mempertimbangkan detail implementasi teknis.</p>`;
    } else if (convertTitle === "physical model"){
        pageUrl = 'physical-model.html';
        blogHTML = `<p>Apa itu Physical Model? Menurut penalaran saya, Physical Model adalah tahapan di mana kita menentukan setiap detail teknis dari basis data. Jika Conceptual Model adalah "sketsa" dan Logical Model adalah "blueprint", maka Physical Model adalah "rencana pembangunan" yang sangat detail.</p>
        <p>Pada tahap ini, kita menentukan struktur penyimpanan data yang sebenarnya, termasuk tipe data yang tepat, indeks, partisi, dan optimasi performa lainnya.</p>`;
    } else {
        blogHTML = `<p>Konten pratinjau tidak tersedia.</p>`;
    }

    blogContent.innerHTML = blogHTML + `<a href="${pageUrl}" class="full-page-link">Baca Selengkapnya &rarr;</a>`;

    modalKonten.appendChild(tombolTutup);
    modalKonten.appendChild(judulModal);
    modalKonten.appendChild(blogContent);
    modalOverlay.appendChild(modalKonten);
    document.body.appendChild(modalOverlay);

    setTimeout(() => { modalOverlay.classList.add('show'); }, 10);

    function tutupModal() {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(modalOverlay)) {
                document.body.removeChild(modalOverlay);
            }
        }, 400);
    }

    tombolTutup.addEventListener('click', tutupModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            tutupModal();
        }
    });
}
