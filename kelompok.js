document.addEventListener('DOMContentLoaded', () => {
    // DATA RESMI 10 KELOMPOK BRIGHTON NOCHE 2026 (Update: kelompok updatee.xlsx - Total 101 Peserta)
    const teamsDataFull = [
        {
            "name": "BRIGHT",
            "members": [
                { "name": "Fira", "loc": "Brighton Real Estate", "div": "BPI" },
                { "name": "Keyza", "loc": "Brighton Real Estate", "div": "Marcom" },
                { "name": "Nita", "loc": "Brighton Priority Jemursari", "div": "Finance" },
                { "name": "Wachyu", "loc": "Brighton Real Estate", "div": "Finance" },
                { "name": "Rokhim", "loc": "Brighton Priority Jemursari", "div": "General Affair & Purchasing" },
                { "name": "Binsar", "loc": "Brighton Real Estate", "div": "IT" },
                { "name": "Annisa", "loc": "Brighton Central Sidoarjo", "div": "Operasional" },
                { "name": "Indah", "loc": "Brighton Signature HR Muhammad", "div": "Operasional" },
                { "name": "Sisca", "loc": "Brighton Real Estate", "div": "Relation - Primary - LSP - Fast Loan" },
                { "name": "Sharley", "loc": "Brighton Real Estate", "div": "Tax & Accounting" },
                { "name": "Adel", "loc": "Brighton Excellent Malang", "div": "Finance" },
            ]
        },
        {
            "name": "RESPECT",
            "members": [
                { "name": "Ely", "loc": "Brighton Real Estate", "div": "BPI" },
                { "name": "Cia", "loc": "Brighton Real Estate", "div": "Event" },
                { "name": "Eify", "loc": "Brighton Priority Jemursari", "div": "Finance" },
                { "name": "Duwi", "loc": "Brighton Real Estate", "div": "Finance" },
                { "name": "Bayu", "loc": "Brighton Signature HR Muhammad", "div": "General Affair & Purchasing" },
                { "name": "Yunda", "loc": "Brighton Real Estate", "div": "IT" },
                { "name": "Setya", "loc": "Brighton Excellent Malang", "div": "Operasional" },
                { "name": "Salsa", "loc": "Brighton Sky Infinite Darmo Hill", "div": "Operasional" },
                { "name": "Eidho", "loc": "Brighton Real Estate", "div": "Relation - Primary - LSP - Fast Loan" },
                { "name": "Kirana", "loc": "Brighton Real Estate", "div": "UNI" },
                { "name": "Nuril", "loc": "Brighton Real Estate", "div": "Tax & Accounting" }
            ]
        },
        {
            "name": "INTEGRITY",
            "members": [
                { "name": "Fara", "loc": "Brighton Real Estate", "div": "BPI" },
                { "name": "Fikri", "loc": "Brighton Real Estate", "div": "Event" },
                { "name": "Discha", "loc": "Brighton Prosperity Dieng Malang", "div": "Finance" },
                { "name": "Satria", "loc": "Brighton Central Sidoarjo", "div": "General Affair & Purchasing" },
                { "name": "Irfan", "loc": "Brighton Sky Infinite Darmo Hill", "div": "General Affair & Purchasing" },
                { "name": "Arfiyan", "loc": "Brighton Real Estate", "div": "IT" },
                { "name": "Nia", "loc": "Brighton Real Estate", "div": "Legal" },
                { "name": "Rachma", "loc": "Brighton Mulyosari", "div": "Operasional" },
                { "name": "Ratna", "loc": "Brighton Real Estate", "div": "Operasional" },
                { "name": "Zulfa", "loc": "Brighton Real Estate", "div": "Tax & Accounting" }
            ]
        },
        {
            "name": "GROW",
            "members": [
                { "name": "Farah", "loc": "Brighton Real Estate", "div": "BPI" },
                { "name": "Tio", "loc": "Brighton Real Estate", "div": "Event" },
                { "name": "Deva", "loc": "Brighton Signature HR Muhammad", "div": "Finance" },
                { "name": "Rosman", "loc": "Brighton Titanium Satelit", "div": "General Affair & Purchasing" },
                { "name": "Rizqi", "loc": "Brighton Suhat Malang", "div": "General Affair & Purchasing" },
                { "name": "Arman", "loc": "Brighton Real Estate", "div": "IT" },
                { "name": "Aji", "loc": "Brighton Real Estate", "div": "Legal" },
                { "name": "Azizah", "loc": "Brighton One CBD Surabaya", "div": "Operasional" },
                { "name": "Amal", "loc": "Brighton Real Estate", "div": "Operasional" },
                { "name": "Miranti", "loc": "Brighton Real Estate", "div": "UNI" }
            ]
        },
        {
            "name": "HARMONY",
            "members": [
                { "name": "Arief", "loc": "Brighton Real Estate", "div": "BPI" },
                { "name": "Indah", "loc": "Brighton Central Sidoarjo", "div": "Finance" },
                { "name": "Dynar", "loc": "Brighton Sky Infinite Darmo Hill", "div": "Finance" },
                { "name": "Sokhib", "loc": "Brighton Excellent Malang", "div": "General Affair & Purchasing" },
                { "name": "Arul", "loc": "Brighton Champion Citraland", "div": "General Affair & Purchasing" },
                { "name": "Hasan", "loc": "Brighton Real Estate", "div": "IT" },
                { "name": "Tasya", "loc": "Brighton Real Estate", "div": "Legal" },
                { "name": "Ineke", "loc": "Brighton Pakuwon Indah", "div": "Operasional" },
                { "name": "Atika", "loc": "Brighton Real Estate", "div": "Relation" },
                { "name": "Kafit", "loc": "Brighton Real Estate", "div": "Tax & Accounting" }
            ]
        },
        {
            "name": "TEAMWORK",
            "members": [
                { "name": "Awan", "loc": "Brighton Real Estate", "div": "BPI" },
                { "name": "Nabila", "loc": "Brighton First Graha", "div": "Finance" },
                { "name": "Pipit", "loc": "Brighton Suhat Malang", "div": "Finance" },
                { "name": "Putra", "loc": "Brighton Gedangan Sidoarjo", "div": "General Affair & Purchasing" },
                { "name": "Ayu", "loc": "Brighton Real Estate", "div": "IT" },
                { "name": "Shania", "loc": "Brighton Real Estate", "div": "Marketing Communication" },
                { "name": "Ita", "loc": "Brighton Pakuwon Indah", "div": "Operasional" },
                { "name": "Reza", "loc": "Brighton Real Estate", "div": "Relation - Primary - LSP - Fast Loan" },
                { "name": "Mitia", "loc": "Brighton Real Estate", "div": "UNI" },
                { "name": "Meme", "loc": "Brighton Real Estate", "div": "Finance" }
            ]
        },
        {
            "name": "AGILE",
            "members": [
                { "name": "Jessi", "loc": "Brighton Real Estate", "div": "Customer Service" },
                { "name": "Erni", "loc": "Brighton Gresik", "div": "Finance" },
                { "name": "Andien", "loc": "Brighton Real Estate", "div": "Finance" },
                { "name": "Samsul", "loc": "Brighton First Graha", "div": "General Affair & Purchasing" },
                { "name": "Dodik", "loc": "Brighton Real Estate", "div": "General Affair & Purchasing" },
                { "name": "Frendy", "loc": "Brighton Real Estate", "div": "IT" },
                { "name": "Vaneza", "loc": "Brighton Gedangan Sidoarjo", "div": "Operasional" },
                { "name": "Vero", "loc": "Brighton Wisata Bukit Mas (WBM)", "div": "Operasional" },
                { "name": "Rendy", "loc": "Brighton Real Estate", "div": "Relation - Primary - LSP - Fast Loan" },
                { "name": "Kania", "loc": "Brighton Real Estate", "div": "UNI" }
            ]
        },
        {
            "name": "RISE",
            "members": [
                { "name": "Refo", "loc": "Brighton Real Estate", "div": "Design & Multimedia" },
                { "name": "Dwi", "loc": "Brighton Mulyosari", "div": "Finance" },
                { "name": "Jauzaa", "loc": "Brighton Real Estate", "div": "Finance" },
                { "name": "Syafi'i", "loc": "Brighton One CBD Surabaya", "div": "General Affair & Purchasing" },
                { "name": "Martin", "loc": "Brighton Real Estate", "div": "General Affair & Purchasing" },
                { "name": "Rudi", "loc": "Brighton Real Estate", "div": "IT" },
                { "name": "Intan", "loc": "Brighton First Graha", "div": "Operasional" },
                { "name": "Dina", "loc": "Brighton Real Estate", "div": "Operasional" },
                { "name": "Syar", "loc": "Brighton Real Estate", "div": "Relation - Primary - LSP - Fast Loan" },
                { "name": "Rois", "loc": "Brighton Real Estate", "div": "IT" }
            ]
        },
        {
            "name": "HELPFUL",
            "members": [
                { "name": "Aji", "loc": "Brighton Real Estate", "div": "Design & Multimedia" },
                { "name": "Syelin", "loc": "Brighton Pakuwon Indah", "div": "Finance" },
                { "name": "Iryne", "loc": "Brighton Real Estate", "div": "Finance" },
                { "name": "Anggik", "loc": "Brighton Pakuwon Indah", "div": "General Affair & Purchasing" },
                { "name": "Fikri", "loc": "Brighton Real Estate", "div": "General Affair & Purchasing" },
                { "name": "Kelvin C.", "loc": "Brighton Real Estate", "div": "IT" },
                { "name": "Alam", "loc": "Brighton Gresik", "div": "Operasional" },
                { "name": "Djinin", "loc": "Brighton Real Estate", "div": "Operasional" },
                { "name": "Saiful", "loc": "Brighton Real Estate", "div": "Tax & Accounting" },
                { "name": "Ajeng", "loc": "Brighton Real Estate", "div": "Finance" }
            ]
        },
        {
            "name": "MULTIPLY",
            "members": [
                { "name": "Ipin", "loc": "Brighton Real Estate", "div": "Customer Service" },
                { "name": "Yuyun", "loc": "Brighton Pakuwon Indah", "div": "Finance" },
                { "name": "Ida", "loc": "Brighton Real Estate", "div": "Finance" },
                { "name": "Hafiz", "loc": "Brighton Premier Bukit Mas", "div": "General Affair & Purchasing" },
                { "name": "Juli", "loc": "Brighton Real Estate", "div": "General Affair & Purchasing" },
                { "name": "Kiki", "loc": "Brighton Real Estate", "div": "IT" },
                { "name": "Ghani", "loc": "Brighton Mulyosari", "div": "General Affair & Purchasing" },
                { "name": "Fanisa", "loc": "Brighton Real Estate", "div": "Operasional" },
                { "name": "Dona", "loc": "Brighton Real Estate", "div": "Tax & Accounting" },
                { "name": "Atika", "loc": "Brighton Real Estate", "div": "Relation - Primary - LSP - Fast Loan" }
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