document.addEventListener('DOMContentLoaded', () => {
    // DATA RESMI 10 KELOMPOK BRIGHTON NOCHE 2026
    const teamsDataFull = [
        {
            name: "BRIGHT",
            members: [
                { name: "Duta Rahma Safira", loc: "Pusat", div: "BPI" },
                { name: "Keyza/Rois", loc: "Pusat", div: "Marcom/IT" },
                { name: "PUTRI YUNITA SARI", loc: "Brighton Priority Jemursari", div: "Finance" },
                { name: "Wachyu Pujiyanto", loc: "Pusat", div: "Finance" },
                { name: "Saikhu Rokhim", loc: "Brighton Priority Jemursari", div: "General Affair & Purchasing" },
                { name: "Binsar Damanik", loc: "Pusat", div: "IT" },
                { name: "ANNISA RIZKI UTAMI", loc: "Brighton Central Sidoarjo", div: "Operasional" },
                { name: "INDAH NAFITRI", loc: "Brighton Signature HR Muhammad", div: "Operasional" },
                { name: "Fransisca Margareth Putri", loc: "Pusat", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "SHARLEY GITA DWI WULANDARI", loc: "Pusat", div: "Tax & Accounting" }
            ]
        },
        {
            name: "RESPECT",
            members: [
                { name: "ELY ERMAWATI", loc: "Pusat", div: "BPI" },
                { name: "Leticia Amora Loviani", loc: "Pusat", div: "Event" },
                { name: "eify tafrichadhea", loc: "Brighton Priority Jemursari", div: "Finance" },
                { name: "duwi khusnul", loc: "Pusat", div: "Finance" },
                { name: "Bayu Hariadi", loc: "Brighton Signature HR Muhammad", div: "General Affair & Purchasing" },
                { name: "Dewi Nur Ayundari", loc: "Pusat", div: "IT" },
                { name: "Setya Reyhannino Osa", loc: "Brighton Excellent Malang", div: "Operasional" },
                { name: "Salsabila Atikah Febrianti", loc: "Brighton Sky Infinite Darmo Hill", div: "Operasional" },
                { name: "Muhamad Eidho Isnaeni Harhestian", loc: "Pusat", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "KIRANA PRAMUDITA", loc: "Pusat", div: "UNI" }
            ]
        },
        {
            name: "INTEGRITY",
            members: [
                { name: "FARA SAHIRA NUR AISYAH", loc: "Pusat", div: "BPI" },
                { name: "Mochammad Fikri Firmansyah", loc: "Pusat", div: "Event" },
                { name: "Discha Farinda (Discha)", loc: "Brighton Prosperity Dieng Malang", div: "Finance" },
                { name: "SATRIA FEBRIAN DWI HIDAYAT", loc: "Brighton Central Sidoarjo", div: "General Affair & Purchasing" },
                { name: "irfan zanuaris anto", loc: "Brighton Sky Infinite Darmo Hill", div: "General Affair & Purchasing" },
                { name: "Arfiyan Wahyu Pratama", loc: "Pusat", div: "IT" },
                { name: "Fenica Shannia Tampubolon", loc: "Pusat", div: "Legal" },
                { name: "rachma dwi oktaviani", loc: "Brighton Mulyosari", div: "Operasional" },
                { name: "Ratna", loc: "Pusat", div: "Operasional" },
                { name: "Zulfatul Nikmah", loc: "Pusat", div: "Tax & Accounting" }
            ]
        },
        {
            name: "GROW",
            members: [
                { name: "Farah ainul khaq", loc: "Pusat", div: "BPI" },
                { name: "Tio Satrio Wibisono", loc: "Pusat", div: "Event" },
                { name: "DEVA GHANY AZIZAH", loc: "Brighton Signature HR Muhammad", div: "Finance" },
                { name: "M.ROSMAN", loc: "Brighton Titanium Satelit", div: "General Affair & Purchasing" },
                { name: "Rizqi Achmad Subagya", loc: "Brighton Suhat Malang", div: "General Affair & Purchasing" },
                { name: "Arman Maulana Saputra", loc: "Pusat", div: "IT" },
                { name: "Rahullah Qoidun Santiaji Dinan", loc: "Pusat", div: "Legal" },
                { name: "azizah nur kholifah", loc: "Brighton One CBD Surabaya", div: "Operasional" },
                { name: "Rizky Amalia", loc: "Pusat", div: "Operasional" },
                { name: "Miranti", loc: "Pusat", div: "UNI" }
            ]
        },
        {
            name: "HARMONY",
            members: [
                { name: "Muchammad Arief", loc: "Pusat", div: "BPI" },
                { name: "ADITYA INDAH FEBRIANTI", loc: "Brighton Central Sidoarjo", div: "Finance" },
                { name: "Dynar Anindya Damayanti", loc: "Brighton Sky Infinite Darmo Hill", div: "Finance" },
                { name: "Sokhib maulana", loc: "Brighton Excellent Malang", div: "General Affair & Purchasing" },
                { name: "Arul", loc: "Brighton Champion Citraland", div: "General Affair & Purchasing" },
                { name: "AHMAD ABU HASAN", loc: "Pusat", div: "IT" },
                { name: "Anastasya Maylan Anggraini", loc: "Pusat", div: "Legal" },
                { name: "Ineke Permata", loc: "Brighton Pakuwon Indah", div: "Operasional" },
                { name: "Nur Aisyah Wahyu Safitri", loc: "Pusat", div: "Operasional" },
                { name: "Kafit Nur Rohman", loc: "Pusat", div: "Tax & Accounting" }
            ]
        },
        {
            name: "TEAMWORK",
            members: [
                { name: "Wahyu Aldi Setiwan", loc: "Pusat", div: "BPI" },
                { name: "Nabila Rizky Amalia Putri", loc: "Brighton First Graha", div: "Finance" },
                { name: "PIPIT", loc: "Brighton Suhat Malang", div: "Finance" },
                { name: "Hanjaya Mandala Putra", loc: "Brighton Gedangan Sidoarjo", div: "General Affair & Purchasing" },
                { name: "Agus susilo", loc: "Pusat", div: "General Affair & Purchasing" },
                { name: "Ayu Aulia Andhani", loc: "Pusat", div: "IT" },
                { name: "Shania Hendra G", loc: "Pusat", div: "Marketing Communication" },
                { name: "Rizky Puspita Arum", loc: "Brighton Pakuwon Indah", div: "Operasional" },
                { name: "Reza Ayu", loc: "Pusat", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "Mitia Eka Renisa", loc: "Pusat", div: "UNI" }
            ]
        },
        {
            name: "AGILE",
            members: [
                { name: "Jessi kevita", loc: "Pusat", div: "Customer Service" },
                { name: "Erni Damayanti", loc: "Brighton Gresik", div: "Finance" },
                { name: "Andien Faysha Rahmatul Adha", loc: "Pusat", div: "Finance" },
                { name: "Samsul maarif", loc: "Brighton First Graha", div: "General Affair & Purchasing" },
                { name: "Dodik Susanto", loc: "Pusat", div: "General Affair & Purchasing" },
                { name: "Frendy hariyono", loc: "Pusat", div: "IT" },
                { name: "vaneza teresya awanda putri", loc: "Brighton Gedangan Sidoarjo", div: "Operasional" },
                { name: "Verona Wulanmu Haji", loc: "Brighton Wisata Bukit Mas (WBM)", div: "Operasional" },
                { name: "Rendy Tridolok Silaban", loc: "Pusat", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "kania", loc: "Pusat", div: "UNI" }
            ]
        },
        {
            name: "RISE",
            members: [
                { name: "Refo Gustian", loc: "Pusat", div: "Design & Multimedia" },
                { name: "Wahyu Dwi Anggraeni", loc: "Brighton Mulyosari", div: "Finance" },
                { name: "Jauzaa H", loc: "Pusat", div: "Finance" },
                { name: "IMAM SYAFI'I", loc: "Brighton One CBD Surabaya", div: "General Affair & Purchasing" },
                { name: "Timotius Martin U", loc: "Pusat", div: "General Affair & Purchasing" },
                { name: "JAENAL RUDINI", loc: "Pusat", div: "IT" },
                { name: "Intan Maulidah", loc: "Brighton First Graha", div: "Operasional" },
                { name: "DINA AINIS SYIFA'", loc: "Pusat", div: "Operasional" },
                { name: "syarindra mutiara", loc: "Pusat", div: "Relation - Primary - LSP - Fast Loan" }
            ]
        },
        {
            name: "HELPFUL",
            members: [
                { name: "Aji Novianto Pradana", loc: "Pusat", div: "Design & Multimedia" },
                { name: "Syelin Triakartika", loc: "Brighton Pakuwon Indah", div: "Finance" },
                { name: "IRYNE INDAHS", loc: "Pusat", div: "Finance" },
                { name: "Anggik suprianto", loc: "Brighton Pakuwon Indah", div: "General Affair & Purchasing" },
                { name: "fikri amirullah", loc: "Pusat", div: "General Affair & Purchasing" },
                { name: "Kelvin Christian Sanger", loc: "Pusat", div: "IT" },
                { name: "Zulkifli Alamsyah", loc: "Brighton Gresik", div: "Operasional" },
                { name: "Djinin", loc: "Pusat", div: "Operasional" },
                { name: "Dipo", loc: "Pusat", div: "Tax & Accounting" }
            ]
        },
        {
            name: "MULTIPLY",
            members: [
                { name: "Moh. Samsul Arifin", loc: "Pusat", div: "Customer Service" },
                { name: "Yuyun Kurniawati", loc: "Brighton Pakuwon Indah", div: "Finance" },
                { name: "IDA KURNIA", loc: "Pusat", div: "Finance" },
                { name: "Maulana akhtar al hafiz", loc: "Brighton Premier Bukit Mas", div: "General Affair & Purchasing" },
                { name: "juli arianto", loc: "Pusat", div: "General Affair & Purchasing" },
                { name: "Mochamad Rizky Ramadhan", loc: "Pusat", div: "IT" },
                { name: "Abdurahman Ghani", loc: "Brighton Mulyosari", div: "Operasional" },
                { name: "Fanisa Risalia", loc: "Pusat", div: "Operasional" },
                { name: "Dona Agustina", loc: "Pusat", div: "Tax & Accounting" }
            ]
        }
    ];

    const container = document.getElementById('teamsListContainer');
    const filterWrap = document.getElementById('teamFilterPills');
    const searchInput = document.getElementById('memberSearch');
    let currentFilter = 'ALL';

    // Buat filter button pills
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
                            <th>Nama & Kantor Cabang</th>
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
                    <p style="margin-top:10px;">Tidak ditemukan data anggota yang cocok dengan pencarian.</p>
                </div>`;
        }
    }

    // Filter pills click
    filterWrap.addEventListener('click', (e) => {
        if (!e.target.classList.contains('filter-pill')) return;
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-team');
        renderCards(searchInput.value, currentFilter);
    });

    // Real-time search
    searchInput.addEventListener('input', (e) => {
        renderCards(e.target.value, currentFilter);
    });

    renderCards();

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