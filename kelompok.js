document.addEventListener('DOMContentLoaded', () => {
    // DATA RESMI 10 KELOMPOK BRIGHTON NOCHE 2026 (Update Terbaru dari kelompok update.xlsx)
    const teamsDataFull = [
        {
            name: "BRIGHT",
            members: [
                { name: "Fira", loc: "BRIND", div: "BPI" },
                { name: "Keyza", loc: "BRIND", div: "Marcom" },
                { name: "Nita", loc: "Brighton Priority Jemursari", div: "Finance" },
                { name: "Wachyu", loc: "BRIND", div: "Finance" },
                { name: "Rokhim", loc: "Brighton Priority Jemursari", div: "General Affair & Purchasing" },
                { name: "Binsar", loc: "BRIND", div: "IT" },
                { name: "Annisa", loc: "Brighton Central Sidoarjo", div: "Operasional" },
                { name: "Indah", loc: "Brighton Signature HR Muhammad", div: "Operasional" },
                { name: "Sisca", loc: "BRIND", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "Sharley", loc: "BRIND", div: "Tax & Accounting" }
            ]
        },
        {
            name: "RESPECT",
            members: [
                { name: "Ely", loc: "BRIND", div: "BPI" },
                { name: "Cia", loc: "BRIND", div: "Event" },
                { name: "Eify", loc: "Brighton Priority Jemursari", div: "Finance" },
                { name: "Duwi", loc: "BRIND", div: "Finance" },
                { name: "Bayu", loc: "Brighton Signature HR Muhammad", div: "General Affair & Purchasing" },
                { name: "Yunda", loc: "BRIND", div: "IT" },
                { name: "Setya", loc: "Brighton Excellent Malang", div: "Operasional" },
                { name: "Salsa", loc: "Brighton Sky Infinite Darmo Hill", div: "Operasional" },
                { name: "Eidho", loc: "BRIND", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "Kirana", loc: "BRIND", div: "UNI" }
            ]
        },
        {
            name: "INTEGRITY",
            members: [
                { name: "Fara", loc: "BRIND", div: "BPI" },
                { name: "Fikri", loc: "BRIND", div: "Event" },
                { name: "Discha", loc: "Brighton Prosperity Dieng Malang", div: "Finance" },
                { name: "Satria", loc: "Brighton Central Sidoarjo", div: "General Affair & Purchasing" },
                { name: "Irfan", loc: "Brighton Sky Infinite Darmo Hill", div: "General Affair & Purchasing" },
                { name: "Arfiyan", loc: "BRIND", div: "IT" },
                { name: "Nia", loc: "BRIND", div: "Legal" },
                { name: "Rachma", loc: "Brighton Mulyosari", div: "Operasional" },
                { name: "Ratna", loc: "BRIND", div: "Operasional" },
                { name: "Zulfa", loc: "BRIND", div: "Tax & Accounting" }
            ]
        },
        {
            name: "GROW",
            members: [
                { name: "Farah", loc: "BRIND", div: "BPI" },
                { name: "Tio", loc: "BRIND", div: "Event" },
                { name: "Deva", loc: "Brighton Signature HR Muhammad", div: "Finance" },
                { name: "Rosman", loc: "Brighton Titanium Satelit", div: "General Affair & Purchasing" },
                { name: "Rizqi", loc: "Brighton Suhat Malang", div: "General Affair & Purchasing" },
                { name: "Arman", loc: "BRIND", div: "IT" },
                { name: "Aji", loc: "BRIND", div: "Legal" },
                { name: "Azizah", loc: "Brighton One CBD Surabaya", div: "Operasional" },
                { name: "Amal", loc: "BRIND", div: "Operasional" },
                { name: "Miranti", loc: "BRIND", div: "UNI" }
            ]
        },
        {
            name: "HARMONY",
            members: [
                { name: "Arief", loc: "BRIND", div: "BPI" },
                { name: "Indah", loc: "Brighton Central Sidoarjo", div: "Finance" },
                { name: "Dynar", loc: "Brighton Sky Infinite Darmo Hill", div: "Finance" },
                { name: "Sokhib", loc: "Brighton Excellent Malang", div: "General Affair & Purchasing" },
                { name: "Arul", loc: "Brighton Champion Citraland", div: "General Affair & Purchasing" },
                { name: "Hasan", loc: "BRIND", div: "IT" },
                { name: "Tasya", loc: "BRIND", div: "Legal" },
                { name: "Ineke", loc: "Brighton Pakuwon Indah", div: "Operasional" },
                { name: "Ais", loc: "BRIND", div: "Operasional" },
                { name: "Kafit", loc: "BRIND", div: "Tax & Accounting" }
            ]
        },
        {
            name: "TEAMWORK",
            members: [
                { name: "Awan", loc: "BRIND", div: "BPI" },
                { name: "Nabila", loc: "Brighton First Graha", div: "Finance" },
                { name: "Pipit", loc: "Brighton Suhat Malang", div: "Finance" },
                { name: "Putra", loc: "Brighton Gedangan Sidoarjo", div: "General Affair & Purchasing" },
                { name: "Ayu", loc: "BRIND", div: "IT" },
                { name: "Shania", loc: "BRIND", div: "Marketing Communication" },
                { name: "Ita", loc: "Brighton Pakuwon Indah", div: "Operasional" },
                { name: "Reza", loc: "BRIND", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "Mitia", loc: "BRIND", div: "UNI" }
            ]
        },
        {
            name: "AGILE",
            members: [
                { name: "Jessi", loc: "BRIND", div: "Customer Service" },
                { name: "Erni", loc: "Brighton Gresik", div: "Finance" },
                { name: "Andien", loc: "BRIND", div: "Finance" },
                { name: "Samsul", loc: "Brighton First Graha", div: "General Affair & Purchasing" },
                { name: "Dodik", loc: "BRIND", div: "General Affair & Purchasing" },
                { name: "Frendy", loc: "BRIND", div: "IT" },
                { name: "Vaneza", loc: "Brighton Gedangan Sidoarjo", div: "Operasional" },
                { name: "Vero", loc: "Brighton Wisata Bukit Mas (WBM)", div: "Operasional" },
                { name: "Rendy", loc: "BRIND", div: "Relation - Primary - LSP - Fast Loan" },
                { name: "Kania", loc: "BRIND", div: "UNI" }
            ]
        },
        {
            name: "RISE",
            members: [
                { name: "Refo", loc: "BRIND", div: "Design & Multimedia" },
                { name: "Dwi", loc: "Brighton Mulyosari", div: "Finance" },
                { name: "Jauzaa", loc: "BRIND", div: "Finance" },
                { name: "Syafi'i", loc: "Brighton One CBD Surabaya", div: "General Affair & Purchasing" },
                { name: "Martin", loc: "BRIND", div: "General Affair & Purchasing" },
                { name: "Rudi", loc: "BRIND", div: "IT" },
                { name: "Intan", loc: "Brighton First Graha", div: "Operasional" },
                { name: "Dina", loc: "BRIND", div: "Operasional" },
                { name: "Syar", loc: "BRIND", div: "Relation - Primary - LSP - Fast Loan" }
            ]
        },
        {
            name: "HELPFUL",
            members: [
                { name: "Aji", loc: "BRIND", div: "Design & Multimedia" },
                { name: "Syelin", loc: "Brighton Pakuwon Indah", div: "Finance" },
                { name: "Iryne", loc: "BRIND", div: "Finance" },
                { name: "Anggik", loc: "Brighton Pakuwon Indah", div: "General Affair & Purchasing" },
                { name: "Fikri", loc: "BRIND", div: "General Affair & Purchasing" },
                { name: "Kelvin C.", loc: "BRIND", div: "IT" },
                { name: "Alam", loc: "Brighton Gresik", div: "Operasional" },
                { name: "Djinin", loc: "BRIND", div: "Operasional" },
                { name: "Saiful", loc: "BRIND", div: "Tax & Accounting" }
            ]
        },
        {
            name: "MULTIPLY",
            members: [
                { name: "Ipin", loc: "BRIND", div: "Customer Service" },
                { name: "Yuyun", loc: "Brighton Pakuwon Indah", div: "Finance" },
                { name: "Ida", loc: "BRIND", div: "Finance" },
                { name: "Hafiz", loc: "Brighton Premier Bukit Mas", div: "General Affair & Purchasing" },
                { name: "Juli", loc: "BRIND", div: "General Affair & Purchasing" },
                { name: "Kiki", loc: "BRIND", div: "IT" },
                { name: "Ghani", loc: "Brighton Mulyosari", div: "Operasional" },
                { name: "Fanisa", loc: "BRIND", div: "Operasional" },
                { name: "Dona", loc: "BRIND", div: "Tax & Accounting" }
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