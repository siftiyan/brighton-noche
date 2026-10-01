document.addEventListener('DOMContentLoaded', () => {
    // DATA RESMI ARMADA & PENUMPANG (Dengan Penanda PIC Warna Oranye dari Excel)
    const vehiclesData = [
        {
            name: "Bis 1 - Spazio - Taman Pinang",
            icon: "fa-bus",
            passengers: [
                { no: "1", name: "Emma", div: "HRD", kantor: "BRIND", titik: "Spazio Office", is_pic: true },
                { no: "2", name: "Raka", div: "HRD", kantor: "BRIND", titik: "Spazio Office", is_pic: true },
                { no: "3", name: "Zavara", div: "HRD", kantor: "BRIND", titik: "Spazio Office", is_pic: true },
                { no: "4", name: "Annisa", div: "OPERASIONAL", kantor: "Brighton Central Sidoarjo", titik: "Taman Pinang Sidoarjo", is_pic: true },
                { no: "5", name: "Muchammad Arief", div: "BPI", kantor: "BRIND", titik: "Taman Pinang Sidoarjo", is_pic: false },
                { no: "6", name: "Vaneza", div: "OPERASIONAL", kantor: "Brighton Hub Sidoarjo", titik: "Taman Pinang Sidoarjo", is_pic: false },
                { no: "7", name: "Dina", div: "OPERASIONAL", kantor: "BRIND", titik: "Taman Pinang Sidoarjo", is_pic: false },
                { no: "8", name: "Nita", div: "FINANCE", kantor: "Brighton Priority Jemursari", titik: "Taman Pinang Sidoarjo", is_pic: false },
                { no: "9", name: "Djinin Tiar Az-Zukhruf", div: "OPERASIONAL", kantor: "BRIND", titik: "Taman Pinang Sidoarjo", is_pic: false },
                { no: "10", name: "Aditya Indah Febrianti", div: "FINANCE", kantor: "Brighton Central Sidoarjo", titik: "Taman Pinang Sidoarjo", is_pic: false },
                { no: "11", name: "Eify Tafrichadhea Nuritasari", div: "FINANCE", kantor: "Brighton Priority Jemursari", titik: "Taman Pinang Sidoarjo", is_pic: false },
                { no: "12", name: "Hanjaya Mandala Putra", div: "General Affair & Purchasing", kantor: "Brighton Gedangan Sidoarjo", titik: "Taman Pinang Sidoarjo", is_pic: false },
                { no: "13", name: "Satria Febrian Dwi Hidayat", div: "GENERAL AFFAIR", kantor: "Brighton Central Sidoarjo", titik: "Taman Pinang Sidoarjo", is_pic: false },
                { no: "14", name: "Shania", div: "MARCOM", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "15", name: "Mitia Eka Renisa", div: "UNI", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "16", name: "Muhamad Eidho Isnaeni Harhestian", div: "RELATION - LSP - FAST LOAN - PRIMARY", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "17", name: "Sharley Gita Dwi Wulandari", div: "TAX & ACCOUNTING", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "18", name: "Reza", div: "RELATION - LSP - FAST LOAN - PRIMARY", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "19", name: "Ayu Aulia Andhani", div: "IT", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "20", name: "Alamsyah", div: "OPERASIONAL", kantor: "Brighton Gresik", titik: "Spazio Office", is_pic: false },
                { no: "21", name: "Rahullah Aji", div: "LEGAL", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "22", name: "Rizky Puspita Arum", div: "OPERASIONAL", kantor: "Brighton Winner Pakuwon Indah", titik: "Spazio Office", is_pic: false },
                { no: "23", name: "Duta Rahma Safira", div: "BPI", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "24", name: "Erni Damayanti", div: "FINANCE", kantor: "Brighton Gresik", titik: "Spazio Office", is_pic: false },
                { no: "25", name: "Anggik Suprianto", div: "GENERAL AFFAIR", kantor: "Brighton Winner Pakuwon Indah", titik: "Spazio Office", is_pic: false },
                { no: "26", name: "Arul", div: "GENERAL AFFAIR", kantor: "Brighton Champion Citraland", titik: "Spazio Office", is_pic: false },
                { no: "27", name: "Ely Ermawati", div: "BPI", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "28", name: "Ineke Permata", div: "OPERASIONAL", kantor: "Brighton Winner Pakuwon Indah", titik: "Spazio Office", is_pic: false },
                { no: "29", name: "Maulana Akhtar Al Hafiz", div: "GENERAL AFFAIR", kantor: "Brighton Premier Bukit Mas", titik: "Spazio Office", is_pic: false },
                { no: "30", name: "Verona Wulanmu Haji", div: "OPERASIONAL", kantor: "Brighton Wisata Bukit Mas (WBM)", titik: "Spazio Office", is_pic: false },
                { no: "31", name: "Rendy", div: "RELATION - LSP - FAST LOAN - PRIMARY", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "32", name: "Yuyun", div: "FINANCE", kantor: "Brighton Winner Pakuwon Indah", titik: "Spazio Office", is_pic: false },
                { no: "33", name: "Siti Zulfatul Nikmah", div: "TAX & ACCOUNTING", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "34", name: "Farah Ainul Khaq", div: "BPI", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "35", name: "Fanisa Risalia", div: "OPERASIONAL", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "36", name: "Binsar Damanik", div: "IT", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "37", name: "Dipo", div: "TAX & ACCOUNTING", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "38", name: "Mochamad Rizky Ramadhan", div: "IT", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "39", name: "Wahyu Setiawan", div: "BPI", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "40", name: "Leticia Amora Loviani", div: "EVENT", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "41", name: "Miranti", div: "UNI", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "42", name: "Fenica Shannia Tampubolon", div: "LEGAL", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "43", name: "Dona Agustina", div: "TAX & ACCOUNTING", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "44", name: "Iryne", div: "FINANCE", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "45", name: "Aji Novianto Pradana", div: "DESIGN & MULTIMEDIA", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "46", name: "Maulana Akhtar Al Hafiz", div: "General Affair & Purchasing", kantor: "Brighton Premier Bukit Mas", titik: "Spazio Office", is_pic: false },
                { no: "47", name: "Ipin", div: "CS", kantor: "BRIND", titik: "Spazio Office", is_pic: true }
            ]
        },
        {
            name: "Bis 2 - Manyar - Spazio",
            icon: "fa-bus",
            passengers: [
                { no: "1", name: "Dewi Hardiyanti", div: "HRD", kantor: "BRIND", titik: "Home Manyar", is_pic: true },
                { no: "2", name: "Syelin", div: "FINANCE", kantor: "Brighton Winner Pakuwon Indah", titik: "Spazio Office", is_pic: true },
                { no: "3", name: "Abdurahman Ghani", div: "GENERAL AFFAIR", kantor: "Brighton Mulyosari", titik: "Home Manyar", is_pic: false },
                { no: "4", name: "Ahmad Abu Hasan", div: "IT", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "5", name: "Aji", div: "DESIGN & MULTIMEDIA", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "6", name: "Andien Faysha Rahmatul Adha", div: "FINANCE", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "7", name: "Arfiyan", div: "IT", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "8", name: "Arman Maulana Saputra", div: "IT", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "9", name: "Azizah Nur Kholifah", div: "OPERASIONAL", kantor: "Brighton One CBD Surabaya", titik: "Home Manyar", is_pic: false },
                { no: "10", name: "Bayu", div: "GENERAL AFFAIR", kantor: "Brighton Signature HR Muhammad", titik: "Spazio Office", is_pic: false },
                { no: "11", name: "Deva Ghany Azizah", div: "FINANCE", kantor: "Brighton Signature HR Muhammad", titik: "Spazio Office", is_pic: false },
                { no: "12", name: "Dewi Nur Ayundari", div: "IT", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "13", name: "Dodik Susanto", div: "GENERAL AFFAIR", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "14", name: "Duwi Khusnul", div: "FINANCE", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "15", name: "Dynar Anindya Damayanti", div: "FINANCE", kantor: "Brighton Sky Infinite Darmo Hill", titik: "Spazio Office", is_pic: false },
                { no: "16", name: "Fara Sahira Nur Aisyah", div: "BPI", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "17", name: "Fenica Shannia Tampubolon", div: "LEGAL", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "18", name: "Fikri Amirullah", div: "GENERAL AFFAIR", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "19", name: "Ida Kurnia", div: "FINANCE", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "20", name: "Imam Syafi'i", div: "GENERAL AFFAIR", kantor: "Brighton One CBD Surabaya", titik: "Home Manyar", is_pic: false },
                { no: "21", name: "Indah Nafitri", div: "OPERASIONAL", kantor: "Brighton Signature HR Muhammad", titik: "Spazio Office", is_pic: false },
                { no: "22", name: "Intan Maulidah", div: "OPERASIONAL", kantor: "Brighton First Graha", titik: "Spazio Office", is_pic: false },
                { no: "23", name: "Irfan Zanuaris Anto", div: "GENERAL AFFAIR", kantor: "Brighton Sky Infinite Darmo Hill", titik: "Spazio Office", is_pic: false },
                { no: "24", name: "Iryne Indahs", div: "FINANCE", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "25", name: "Jaenal Rudini", div: "IT", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "26", name: "Jessi Kevita", div: "CUSTOMER SERVICE", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "27", name: "Juli Arianto", div: "GENERAL AFFAIR", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "28", name: "Kafit Nur Rohman", div: "TAX & ACCOUNTING", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "29", name: "Kania", div: "UNI", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "30", name: "Kelvin Christian Sanger", div: "IT", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "31", name: "Keyza", div: "MARCOM", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "32", name: "Kirana Pramudita", div: "UNI", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "33", name: "M. Rosman", div: "GENERAL AFFAIR", kantor: "Brighton Titanium Satelit", titik: "Spazio Office", is_pic: false },
                { no: "34", name: "Maylan", div: "LEGAL", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "35", name: "Moh. Samsul Arifin", div: "CUSTOMER SERVICE", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "36", name: "Nabila Rizky Amalia Putri", div: "FINANCE", kantor: "Brighton First Graha", titik: "Spazio Office", is_pic: false },
                { no: "37", name: "Nur Aisyah", div: "OPERASIONAL", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "38", name: "Rachma Dwi Oktaviani", div: "OPERASIONAL", kantor: "Brighton Mulyosari", titik: "Home Manyar", is_pic: false },
                { no: "39", name: "Ratna", div: "OPERASIONAL", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "40", name: "Refo Gustian", div: "DESIGN & MULTIMEDIA", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "41", name: "Rizky Amalia", div: "OPERASIONAL", kantor: "BRIND", titik: "Home Manyar", is_pic: false },
                { no: "42", name: "Anastasya Maylan Anggraini", div: "LEGAL", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "43", name: "Saiful", div: "TAX & ACCOUNTING", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "44", name: "Kezya", div: "MARKOM", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "45", name: "Nur Aisyah Wahyu Safitri", div: "OPERASIONAL", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "46", name: "Rizky Amalia", div: "OPERASIONAL", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "47", name: "Ratna", div: "OPERASIONAL", kantor: "BRIND", titik: "Spazio Office", is_pic: true }
            ]
        },
        {
            name: "Mobil Malang - Soehat",
            icon: "fa-car",
            passengers: [
                { no: "1", name: "Pipit", div: "OPERASIONAL", kantor: "Brighton Suhat Malang", titik: "Soekarno Hatta Malang", is_pic: true },
                { no: "2", name: "Salman Al Farisi", div: "DESIGN & MULTIMEDIA", kantor: "Brighton Suhat Malang", titik: "Soekarno Hatta Malang", is_pic: false },
                { no: "3", name: "Discha", div: "FINANCE", kantor: "Brighton Prosperity", titik: "Soekarno Hatta Malang", is_pic: false },
                { no: "4", name: "Rizqi Achmad Subagya", div: "GENERAL AFFAIR", kantor: "Brighton Suhat Malang", titik: "Soekarno Hatta Malang", is_pic: false },
                { no: "5", name: "Setya Reyhannino Osa", div: "OPERASIONAL", kantor: "Brighton Excellent Malang", titik: "Soekarno Hatta Malang", is_pic: false },
                { no: "6", name: "Sokhib Maulana", div: "GENERAL AFFAIR", kantor: "Brighton Excellent Malang", titik: "Soekarno Hatta Malang", is_pic: false }
            ]
        },
        {
            name: "Hiace Panitia - Spazio",
            icon: "fa-van-shuttle",
            passengers: [
                { no: "1", name: "Widya", div: "HRD", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "2", name: "Rudiyanto", div: "HRD", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "3", name: "Rudi", div: "IT", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "4", name: "Hanita", div: "HRD", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "5", name: "Tria", div: "HOA", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "6", name: "Siftiyan", div: "HRD", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "7", name: "Indah", div: "Finance", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "8", name: "Ayu", div: "Operasional", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "9", name: "Tika", div: "HOA", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "10", name: "Reny", div: "HOA", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "11", name: "Luke", div: "RELATION - LSP - FAST LOAN - PRIMARY", kantor: "BRIND", titik: "Spazio Office", is_pic: false },
                { no: "12", name: "Rosemini", div: "EVENT", kantor: "BRIND", titik: "Spazio Office", is_pic: false }
            ]
        }
    ];

    const container = document.getElementById('vehiclesContainer');
    const filterWrap = document.getElementById('vehicleFilterPills');
    const searchInput = document.getElementById('busSearchInput');
    let currentFilter = 'ALL';

    // Buat filter pills armada
    vehiclesData.forEach(v => {
        const btn = document.createElement('button');
        btn.className = 'filter-pill';
        btn.setAttribute('data-vehicle', v.name);
        btn.textContent = v.name;
        filterWrap.appendChild(btn);
    });

    function renderVehicles(keyword = '', filter = 'ALL') {
        const q = keyword.toLowerCase().trim();
        container.innerHTML = '';
        let totalMatches = 0;

        vehiclesData.forEach(veh => {
            if (filter !== 'ALL' && veh.name !== filter) return;

            const filteredPax = veh.passengers.filter(p => {
                if (!q) return true;
                return p.name.toLowerCase().includes(q) ||
                       p.div.toLowerCase().includes(q) ||
                       p.kantor.toLowerCase().includes(q) ||
                       p.titik.toLowerCase().includes(q) ||
                       veh.name.toLowerCase().includes(q) ||
                       (p.is_pic && 'pic penanggung jawab'.includes(q));
            });

            if (filteredPax.length === 0) return;
            totalMatches++;

            const card = document.createElement('div');
            card.className = 'vehicle-detail-card';

            // Dapatkan list nama PIC untuk info di header card
            const picList = veh.passengers.filter(p => p.is_pic).map(p => p.name).join(', ');

            const rows = filteredPax.map(p => {
                const picRowClass = p.is_pic ? 'row-pic' : '';
                const picBadge = p.is_pic ? `<span class="badge-pic"><i class="fa-solid fa-crown"></i> PIC BIS</span>` : '';
                return `
                    <tr class="${picRowClass}">
                        <td class="col-no">${p.no}</td>
                        <td>
                            <div class="name-pic-wrap">
                                <span class="pax-name">${p.name}</span>
                                ${picBadge}
                            </div>
                            <span class="pax-kantor">${p.kantor}</span>
                        </td>
                        <td><span class="badge-divisi">${p.div}</span></td>
                        <td><span class="badge-titik"><i class="fa-solid fa-map-pin"></i> ${p.titik}</span></td>
                    </tr>
                `;
            }).join('');

            card.innerHTML = `
                <div class="vehicle-card-head">
                    <div>
                        <h3><i class="fa-solid ${veh.icon}"></i> ${veh.name}</h3>
                        ${picList ? `<div class="header-pic-info"><i class="fa-solid fa-user-shield"></i> <strong>PIC:</strong> ${picList}</div>` : ''}
                    </div>
                    <span class="vehicle-badge-count"><i class="fa-solid fa-users"></i> ${filteredPax.length} Penumpang</span>
                </div>
                <div class="vehicle-table-wrap">
                    <table class="vehicle-member-table">
                        <thead>
                            <tr>
                                <th class="col-no">No</th>
                                <th>Nama & Asal Kantor</th>
                                <th>Divisi</th>
                                <th>Titik Jemput Resmi</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            `;
            container.appendChild(card);
        });

        if (totalMatches === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fa-solid fa-circle-exclamation fa-2x"></i>
                    <p style="margin-top:10px;">Data penumpang atau armada tidak ditemukan untuk pencarian "${keyword}".</p>
                </div>`;
        }
    }

    // Filter pills event
    filterWrap.addEventListener('click', (e) => {
        if (!e.target.classList.contains('filter-pill')) return;
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-vehicle');
        renderVehicles(searchInput.value, currentFilter);
    });

    // Pencarian real-time
    searchInput.addEventListener('input', (e) => {
        renderVehicles(e.target.value, currentFilter);
    });

    renderVehicles();

    // Mobile Navbar Handler
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
});