document.addEventListener('DOMContentLoaded', () => {
    // DATA RESMI 10 KELOMPOK BRIGHTON NOCHE 2026 (Sumber: Nama kelompok noche.xlsx)
    const teamsDataFull = [
        {
            name: "BRIGHT",
            members: [
                { name: "Duta Rahma Safira", loc: "BRIND", div: "BPI" },
                { name: "Keyza", loc: "BRIND", div: "Marcom" },
                { name: "Putri Yunita Sari", loc: "Brighton Priority Jemursari", div: "Finance" },
                { name: "Wachyu Pujiyanto", loc: "BRIND", div: "Finance" },
                { name: "Saikhu Rokhim", loc: "Brighton Priority Jemursari", div: "General Affair & Purchasing" },
                { name: "Binsar Damanik", loc: "BRIND", div: "IT" },
                { name: "Annisa Rizki Utami", loc: "Brighton Central Sidoarjo", div: "Operasional" },
                { name: "Indah Nafitri", loc: "Brighton Signature HR Muhammad", div: "Operasional" },
                { name: "Fransisca Margareth Putri Sayogo", loc: "BRIND", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "Sharley Gita Dwi Wulandari", loc: "BRIND", div: "Tax & Accounting" }
            ]
        },
        {
            name: "RESPECT",
            members: [
                { name: "Ely Ermawati", loc: "BRIND", div: "BPI" },
                { name: "Leticia Amora Loviani", loc: "BRIND", div: "Event" },
                { name: "Eify Tafrichadhea", loc: "Brighton Priority Jemursari", div: "Finance" },
                { name: "Duwi Khusnul", loc: "BRIND", div: "Finance" },
                { name: "Bayu Hariadi", loc: "Brighton Signature HR Muhammad", div: "General Affair & Purchasing" },
                { name: "Dewi Nur Ayundari", loc: "BRIND", div: "IT" },
                { name: "Setya Reyhannino Osa", loc: "Brighton Excellent Malang", div: "Operasional" },
                { name: "Salsabila Atikah Febrianti", loc: "Brighton Sky Infinite Darmo Hill", div: "Operasional" },
                { name: "Muhamad Eidho Isnaeni Harhestian", loc: "BRIND", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "Kirana Pramudita", loc: "BRIND", div: "UNI" }
            ]
        },
        {
            name: "INTEGRITY",
            members: [
                { name: "Fara Sahira Nur Aisyah", loc: "BRIND", div: "BPI" },
                { name: "Mochammad Fikri Firmansyah", loc: "BRIND", div: "Event" },
                { name: "Discha Farinda (Discha)", loc: "Brighton Prosperity Dieng Malang", div: "Finance" },
                { name: "Satria Febrian Dwi Hidayat", loc: "Brighton Central Sidoarjo", div: "General Affair & Purchasing" },
                { name: "Irfan Zanuaris Anto", loc: "Brighton Sky Infinite Darmo Hill", div: "General Affair & Purchasing" },
                { name: "Arfiyan Wahyu Pratama", loc: "BRIND", div: "IT" },
                { name: "Fenica Shannia Tampubolon", loc: "BRIND", div: "Legal" },
                { name: "Rachma Dwi Oktaviani", loc: "Brighton Mulyosari", div: "Operasional" },
                { name: "Ratna", loc: "BRIND", div: "Operasional" },
                { name: "Zulfatul Nikmah", loc: "BRIND", div: "Tax & Accounting" }
            ]
        },
        {
            name: "GROW",
            members: [
                { name: "Farah Ainul Khaq", loc: "BRIND", div: "BPI" },
                { name: "Tio Satrio Wibisono", loc: "BRIND", div: "Event" },
                { name: "Deva Ghany Azizah", loc: "Brighton Signature HR Muhammad", div: "Finance" },
                { name: "M.Rosman", loc: "Brighton Titanium Satelit", div: "General Affair & Purchasing" },
                { name: "Rizqi Achmad Subagya", loc: "Brighton Suhat Malang", div: "General Affair & Purchasing" },
                { name: "Arman Maulana Saputra", loc: "BRIND", div: "IT" },
                { name: "Rahullah Qoidun Santiaji Dinan", loc: "BRIND", div: "Legal" },
                { name: "Azizah Nur Kholifah", loc: "Brighton One CBD Surabaya", div: "Operasional" },
                { name: "Rizky Amalia", loc: "BRIND", div: "Operasional" },
                { name: "Miranti", loc: "BRIND", div: "UNI" }
            ]
        },
        {
            name: "HARMONY",
            members: [
                { name: "Muchammad Arief", loc: "BRIND", div: "BPI" },
                { name: "Aditya Indah Febrianti", loc: "Brighton Central Sidoarjo", div: "Finance" },
                { name: "Dynar Anindya Damayanti", loc: "Brighton Sky Infinite Darmo Hill", div: "Finance" },
                { name: "Sokhib Maulana", loc: "Brighton Excellent Malang", div: "General Affair & Purchasing" },
                { name: "Arul", loc: "Brighton Champion Citraland", div: "General Affair & Purchasing" },
                { name: "Ahmad Abu Hasan", loc: "BRIND", div: "IT" },
                { name: "Anastasya Maylan Anggraini", loc: "BRIND", div: "Legal" },
                { name: "Ineke Permata", loc: "Brighton Pakuwon Indah", div: "Operasional" },
                { name: "Nur Aisyah Wahyu Safitri", loc: "BRIND", div: "Operasional" },
                { name: "Kafit Nur Rohman", loc: "BRIND", div: "Tax & Accounting" }
            ]
        },
        {
            name: "TEAMWORK",
            members: [
                { name: "Wahyu Aldi Setiwan", loc: "BRIND", div: "BPI" },
                { name: "Nabila Rizky Amalia Putri", loc: "Brighton First Graha", div: "Finance" },
                { name: "Pipit", loc: "Brighton Suhat Malang", div: "Finance" },
                { name: "Hanjaya Mandala Putra", loc: "Brighton Gedangan Sidoarjo", div: "General Affair & Purchasing" },
                { name: "Agus Susilo", loc: "BRIND", div: "General Affair & Purchasing" },
                { name: "Ayu Aulia Andhani", loc: "BRIND", div: "IT" },
                { name: "Shania Hendra G", loc: "BRIND", div: "Marketing Communication" },
                { name: "Rizky Puspita Arum", loc: "Brighton Pakuwon Indah", div: "Operasional" },
                { name: "Reza Ayu", loc: "BRIND", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "Mitia Eka Renisa", loc: "BRIND", div: "UNI" }
            ]
        },
        {
            name: "AGILE",
            members: [
                { name: "Jessi Kevita", loc: "BRIND", div: "Customer Service" },
                { name: "Erni Damayanti", loc: "Brighton Gresik", div: "Finance" },
                { name: "Andien Faysha Rahmatul Adha", loc: "BRIND", div: "Finance" },
                { name: "Samsul Maarif", loc: "Brighton First Graha", div: "General Affair & Purchasing" },
                { name: "Dodik Susanto", loc: "BRIND", div: "General Affair & Purchasing" },
                { name: "Frendy Hariyono", loc: "BRIND", div: "IT" },
                { name: "Vaneza Teresya Awanda Putri", loc: "Brighton Gedangan Sidoarjo", div: "Operasional" },
                { name: "Verona Wulanmu Haji", loc: "Brighton Wisata Bukit Mas (WBM)", div: "Operasional" },
                { name: "Rendy Tridolok Silaban", loc: "BRIND", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "Kania", loc: "BRIND", div: "UNI" }
            ]
        },
        {
            name: "RISE",
            members: [
                { name: "Refo Gustian", loc: "BRIND", div: "Design & Multimedia" },
                { name: "Wahyu Dwi Anggraeni", loc: "Brighton Mulyosari", div: "Finance" },
                { name: "Jauzaa H", loc: "BRIND", div: "Finance" },
                { name: "Imam Syafi'I", loc: "Brighton One CBD Surabaya", div: "General Affair & Purchasing" },
                { name: "Timotius Martin U", loc: "BRIND", div: "General Affair & Purchasing" },
                { name: "Jaenal Rudini", loc: "BRIND", div: "IT" },
                { name: "Intan Maulidah", loc: "Brighton First Graha", div: "Operasional" },
                { name: "Dina Ainis Syifa'", loc: "BRIND", div: "Operasional" },
                { name: "Syarindra Mutiara", loc: "BRIND", div: "Relation - Primary - LSP - Fast Loan" }
            ]
        },
        {
            name: "HELPFUL",
            members: [
                { name: "Aji Novianto Pradana", loc: "BRIND", div: "Design & Multimedia" },
                { name: "Syelin Triakartika", loc: "Brighton Pakuwon Indah", div: "Finance" },
                { name: "Iryne Indahs", loc: "BRIND", div: "Finance" },
                { name: "Anggik Suprianto", loc: "Brighton Pakuwon Indah", div: "General Affair & Purchasing" },
                { name: "Fikri Amirullah", loc: "BRIND", div: "General Affair & Purchasing" },
                { name: "Kelvin Christian Sanger", loc: "BRIND", div: "IT" },
                { name: "Zulkifli Alamsyah", loc: "Brighton Gresik", div: "Operasional" },
                { name: "Djinin", loc: "BRIND", div: "Operasional" },
                { name: "Dipo", loc: "BRIND", div: "Tax & Accounting" }
            ]
        },
        {
            name: "MULTIPLY",
            members: [
                { name: "Moh. Samsul Arifin", loc: "BRIND", div: "Customer Service" },
                { name: "Yuyun Kurniawati", loc: "Brighton Pakuwon Indah", div: "Finance" },
                { name: "Ida Kurnia", loc: "BRIND", div: "Finance" },
                { name: "Maulana Akhtar Al Hafiz", loc: "Brighton Premier Bukit Mas", div: "General Affair & Purchasing" },
                { name: "Juli Arianto", loc: "BRIND", div: "General Affair & Purchasing" },
                { name: "Mochamad Rizky Ramadhan", loc: "BRIND", div: "IT" },
                { name: "Abdurahman Ghani", loc: "Brighton Mulyosari", div: "Operasional" },
                { name: "Fanisa Risalia", loc: "BRIND", div: "Operasional" },
                { name: "Dona Agustina", loc: "BRIND", div: "Tax & Accounting" }
            ]
        }
    ];

    const container = document.getElementById('teamsListContainer');
    const filterWrap = document.getElementById('teamFilterPills');
    const searchInput = document.getElementById('memberSearch');
    let currentFilter = 'ALL';

    // Inisialisasi tombol filter pills
    teamsDataFull.forEach(t => {
        const btn = document.createElement('button');
        btn.className = 'filter-pill';
        btn.setAttribute('data-team', t.name);
        btn.textContent = t.name;
        filterWrap.appendChild(btn);
    });

    function renderCards(keyword = '', filter = 'ALL') {
        const q = keyword.toLowerCase().trim();
        container.innerHTML = '';
        let totalShown = 0;

        teamsDataFull.forEach(team => {
            if (filter !== 'ALL' && team.name !== filter) return;

            const filteredMembers = team.members.filter(m => {
                if (!q) return true;
                return m.name.toLowerCase().includes(q) ||
                       m.loc.toLowerCase().includes(q) ||
                       m.div.toLowerCase().includes(q) ||
                       team.name.toLowerCase().includes(q);
            });

            if (filteredMembers.length === 0) return;
            totalShown++;

            const card = document.createElement('div');
            card.className = 'team-detail-card';

            const rows = filteredMembers.map(m => `
                <tr>
                    <td>
                        <span class="member-name">${m.name}</span>
                        <span class="member-loc"><i class="fa-solid fa-location-dot"></i> ${m.loc}</span>
                    </td>
                    <td><span class="member-div">${m.div}</span></td>
                </tr>
            `).join('');

            card.innerHTML = `
                <div class="team-card-head">
                    <h3>TIM ${team.name}</h3>
                    <span class="team-badge-count"><i class="fa-solid fa-user-group"></i> ${filteredMembers.length} Peserta</span>
                </div>
                <table class="team-member-table">
                    <thead>
                        <tr>
                            <th>Nama & Kantor</th>
                            <th>Divisi</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            `;
            container.appendChild(card);
        });

        if (totalShown === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fa-solid fa-user-slash fa-2x"></i>
                    <p style="margin-top:10px;">Tidak ditemukan data anggota yang cocok dengan kata kunci pencarian Anda.</p>
                </div>`;
        }
    }

    // Filter klik
    filterWrap.addEventListener('click', (e) => {
        if (!e.target.classList.contains('filter-pill')) return;
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-team');
        renderCards(searchInput.value, currentFilter);
    });

    // Real-time Search
    searchInput.addEventListener('input', (e) => {
        renderCards(e.target.value, currentFilter);
    });

    renderCards();

    // Mobile Drawer Toggle
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