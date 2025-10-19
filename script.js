document.addEventListener('DOMContentLoaded', () => {
    const triggerElements = document.querySelectorAll('.post-card');

    const postData = {
        "harapan": {
            pageUrl: 'harapan.html',
            content: `<p>Harapan saya terhadap mata kuliah Basis Data adalah untuk memahami konsep fundamental dan prinsip desain database yang efisien. Saya ingin mempelajari cara merancang skema database yang optimal untuk berbagai jenis aplikasi, serta memahami bagaimana mengelola data dengan cara yang aman dan terstruktur.</p>
                      <p>Selain itu, saya berharap dapat menguasai bahasa query seperti SQL untuk melakukan operasi data yang kompleks. Kemampuan ini sangat penting dalam pengembangan aplikasi web modern yang membutuhkan penyimpanan dan pengambilan data yang efisien.</p>`
        },
        "basis data": {
            pageUrl: 'basis-data.html',
            content: `<p>Apa itu Basis data? Mari kita bedah. Bayangkan basis data seperti sebuah perpustakaan yang sangat rapi dan terorganisir. Setiap buku memiliki tempat khusus, katalog yang terstruktur, dan sistem untuk menemukan buku dengan cepat.</p>
                      <p>Dalam konteks digital, basis data adalah kumpulan data yang terorganisir yang disimpan dan diakses secara elektronik. Basis data memungkinkan kita untuk menyimpan, mengelola, dan mengambil informasi dengan efisien.</p>`
        },
        "conceptual db": {
            pageUrl: 'conceptual-db.html',
            content: `<p>Apa itu Conceptual DB? Yuk kita bedah lagi. Bayangkan kita ingin membuat sebuah lukisan yang indah dan bermakna. Sebelum mulai melukis, kita perlu membuat sketsa kasar terlebih dahulu untuk merencanakan komposisi, warna, dan elemen-elemen penting dalam lukisan tersebut.</p>
                      <p>Conceptual Database Model adalah "sketsa" tersebut dalam dunia basis data. Ini adalah representasi tingkat tinggi dari struktur data, tanpa mempertimbangkan detail implementasi teknis.</p>`
        },
        "physical model": {
            pageUrl: 'physical-model.html',
            content: `<p>Apa itu Physical Model? Menurut penalaran saya, Physical Model adalah tahapan di mana kita menentukan setiap detail teknis dari basis data. Jika Conceptual Model adalah "sketsa" dan Logical Model adalah "blueprint", maka Physical Model adalah "rencana pembangunan" yang sangat detail.</p>
                      <p>Pada tahap ini, kita menentukan struktur penyimpanan data yang sebenarnya, termasuk tipe data yang tepat, indeks, partisi, dan optimasi performa lainnya.</p>`
        },
        "tutorial install dbms": {
            pageUrl: 'videotutorial.html',
            content: `<p>Mari kita coba instalasi Aplikasi DBMS Salah satunya laragon.</p>
                      <p>Tutorial singkat menginstal Laragon.</p>`
        },
        "mengenal komponen erd: entitas, atribut, dan relasi": {
            pageUrl: 'erd.html',
            content: `<p>Artikel ini membahas tiga komponen fundamental dalam sebuah ERD (Entity-Relationship Diagram) yang menjadi dasar perancangan database.</p>
                      <p>Pelajari apa itu Entitas (objek), Atribut (deskripsi), dan Relasi (penghubung) dengan analogi sederhana untuk memahami bagaimana sebuah database distrukturkan.</p>`
        },
        "apa itu primary key, foreign key, dan candidate key?":{
            pageUrl: 'primary-key.html',
            content: `<p>Apa itu Primary Key? dalam kasus ERD, Primary Key adalah sebuah kolom (atau beberapa kolom) yang dipilih untuk menjadi identitas unik bagi setiap baris data dalam sebuah tabel.</p>
                      <p>Memahami apa itu Primary Key, Foreign Key, dan Candidate Key</p>`
        },
        "relasi pada erd dan masalah many-to-many": {
            pageUrl: "many-tomany.html",
            content: "<p>Relasi adalah fondasi dari database yang terstruktur, menghubungkan satu tabel dengan tabel lainnya. Namun, tidak semua hubungan bisa diimplementasikan dengan mudah.</p><p>Artikel ini membahas mengapa relasi Many-to-Many (M:N).</p>"
        },
        "5 contoh intersection pada erd": {
            pageUrl: 'videointersection.html',
            content: `<h3>5 Contoh Intersection pada ERD</h3>
                      <p>Intersection dalam ERD terjadi ketika dua entitas memiliki hubungan Many-to-Many (M:N) dan perlu dibuatkan tabel penghubung (intermediate table) untuk merepresentasikannya secara benar di dalam database.</p>
                      <p>Pada video ini, dijelaskan 5 contoh kasus intersection yang sering muncul dalam perancangan basis data, seperti relasi antara <strong>Mahasiswa dan Mata Kuliah</strong>, <strong>Dokter dan Pasien</strong>, hingga <strong>Produk dan Supplier</strong>.</p>
                      <p>Dengan memahami intersection, kamu akan tahu bagaimana cara menghindari duplikasi data dan menjaga integritas relasi antar tabel di database relasional.</p>`
        },
        
        "normalisasi erd": {
            pageUrl: 'normalisasi-erd.html',
            content: `<h3>Normalisasi ERD</h3>
                      <p>Normalisasi adalah proses penyusunan tabel dalam database agar data tersimpan secara efisien, bebas dari duplikasi, dan mudah dikelola. Konsep ini menjadi langkah penting setelah perancangan ERD selesai dibuat.</p>
                      <p>Artikel ini membahas tahapan normalisasi dari <strong>1NF</strong>, <strong>2NF</strong>, hingga <strong>3NF</strong> disertai contoh konkret agar mudah dipahami. Setiap tahap akan dijelaskan tujuannya serta perubahan struktur tabel yang terjadi.</p>
                      <p>Dengan memahami normalisasi, kamu akan mampu membuat desain database yang lebih optimal, konsisten, dan siap digunakan untuk sistem berskala besar.</p>`
        }
    };

    triggerElements.forEach(card => {
        card.addEventListener('click', () => {
            createAndShowModal(card);
        });
    });

    function createAndShowModal(clickedCard) {
        let postTitle = clickedCard.querySelector('h3').textContent;
        const lookupKey = postTitle.trim().toLowerCase();
        
        const data = postData[lookupKey] || { content: '<p>Konten pratinjau tidak tersedia.</p>', pageUrl: '#' };

        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';

        const modalContent = `
            <div class="modal-konten">
                <span class="close-button">&times;</span>
                <h1>${postTitle}</h1>
                <div>${data.content}</div>
                <a href="${data.pageUrl}" class="full-page-link">Baca Selengkapnya →</a>
            </div>
        `;
        modalOverlay.innerHTML = modalContent;
        document.body.appendChild(modalOverlay);

        setTimeout(() => modalOverlay.classList.add('show'), 10);

        function closeModal() {
            modalOverlay.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(modalOverlay)) {
                    document.body.removeChild(modalOverlay);
                }
            }, 400);
        }

        modalOverlay.querySelector('.close-button').addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }
});
