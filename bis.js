document.addEventListener('DOMContentLoaded', () => {
    // DATA RESMI ARMADA & PENUMPANG (Update Titik Sidoarjo: Halte Pondok Jati)
    const vehiclesData = [
        {
            name: "Bis 1 - Spazio - Halte Pondok Jati",
            icon: "fa-bus",
            passengers: [
                { no: "1", name: "Emma", div: "HRD", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: true },
                { no: "2", name: "Raka", div: "HRD", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: true },
                { no: "3", name: "Vara", div: "HRD", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: true },
                { no: "4", name: "Ipin", div: "CS", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: true },
                { no: "5", name: "Annisa", div: "OPERASIONAL", kantor: "Brighton Central Sidoarjo", titik: "Halte Pondok Jati", is_pic: true },
                { no: "6", name: "Arief", div: "BPI", kantor: "Brighton Real Estate", titik: "Halte Pondok Jati", is_pic: false },
                { no: "7", name: "Vaneza", div: "OPERASIONAL", kantor: "Brighton Hub Sidoarjo", titik: "Halte Pondok Jati", is_pic: false },
                { no: "8", name: "Dina", div: "OPERASIONAL", kantor: "Brighton Real Estate", titik: "Halte Pondok Jati", is_pic: false },
                { no: "9", name: "Nita", div: "FINANCE", kantor: "Brighton Priority Jemursari", titik: "Halte Pondok Jati", is_pic: false },
                { no: "10", name: "Djinin", div: "OPERASIONAL", kantor: "Brighton Real Estate", titik: "Halte Pondok Jati", is_pic: false },
                { no: "11", name: "Indah", div: "FINANCE", kantor: "Brighton Central Sidoarjo", titik: "Halte Pondok Jati", is_pic: false },
                { no: "12", name: "Eify", div: "FINANCE", kantor: "Brighton Priority Jemursari", titik: "Halte Pondok Jati", is_pic: false },
                { no: "13", name: "Putra", div: "General Affair & Purchasing", kantor: "Brighton Gedangan Sidoarjo", titik: "Halte Pondok Jati", is_pic: false },
                { no: "14", name: "Satria", div: "GENERAL AFFAIR", kantor: "Brighton Central Sidoarjo", titik: "Halte Pondok Jati", is_pic: false },
                { no: "15", name: "Shania", div: "MARCOM", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "16", name: "Mitia", div: "UNI", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "17", name: "Eidho", div: "RELATION - LSP - FAST LOAN - PRIMARY", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "18", name: "Sharley", div: "TAX & ACCOUNTING", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "19", name: "Reza", div: "RELATION - LSP - FAST LOAN - PRIMARY", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "20", name: "Ayu", div: "IT", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "21", name: "Alam", div: "OPERASIONAL", kantor: "Brighton Gresik", titik: "Spazio Office", is_pic: false },
                { no: "22", name: "Aji", div: "LEGAL", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "23", name: "Ita", div: "OPERASIONAL", kantor: "Brighton Winner Pakuwon Indah", titik: "Spazio Office", is_pic: false },
                { no: "24", name: "Fira", div: "BPI", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "25", name: "Vero", div: "OPERASIONAL", kantor: "Brighton Premier Bukit Mas", titik: "Spazio Office", is_pic: false },
                { no: "26", name: "Jessi", div: "CS", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "27", name: "Andien", div: "FINANCE", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "28", name: "Kezya", div: "MARKOM", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "29", name: "Binsar", div: "IT", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "30", name: "Miranti", div: "UNI", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "31", name: "Azizah", div: "OPERASIONAL", kantor: "Brighton One CBD", titik: "Spazio Office", is_pic: false },
                { no: "32", name: "Deva", div: "FINANCE", kantor: "Brighton Signature HR Muhammad", titik: "Spazio Office", is_pic: false },
                { no: "33", name: "Zulfa", div: "TAX & ACCOUNTING", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "34", name: "Irfan", div: "GENERAL AFFAIR", kantor: "Brighton Infinite & Sky Mayjen Sungkono", titik: "Spazio Office", is_pic: false },
                { no: "35", name: "Cia", div: "EVENT", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "36", name: "Fara", div: "BPI", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "37", name: "Erni", div: "FINANCE", kantor: "Brighton Gresik", titik: "Spazio Office", is_pic: false },
                { no: "38", name: "Refo", div: "DESIGN & MULTIMEDIA", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "39", name: "Syar", div: "RELATION - LSP - FAST LOAN - PRIMARY", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "40", name: "Kiki", div: "IT", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "41", name: "Jauza", div: "FINANCE", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "42", name: "Anggik", div: "GENERAL AFFAIR", kantor: "Brighton Winner Pakuwon Indah", titik: "Spazio Office", is_pic: false },
                { no: "43", name: "Nia", div: "LEGAL", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "44", name: "Dona", div: "TAX & ACCOUNTING", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "45", name: "Iryne", div: "FINANCE", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "46", name: "Aji", div: "DESIGN & MULTIMEDIA", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "47", name: "Hafiz", div: "General Affair & Purchasing", kantor: "Brighton Premier Bukit Mas", titik: "Spazio Office", is_pic: false }
            ]
        },
        {
            name: "Bis 2 - Manyar - Spazio",
            icon: "fa-bus",
            passengers: [
                { no: "1", name: "Dewi", div: "HRD", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: true },
                { no: "2", name: "Syelin", div: "FINANCE", kantor: "Brighton Winner Pakuwon Indah", titik: "Spazio Office", is_pic: true },
                { no: "3", name: "Ratna", div: "OPERASIONAL", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: true },
                { no: "4", name: "Ghani", div: "GENERAL AFFAIR", kantor: "Brighton Mulyosari", titik: "Home Manyar", is_pic: false },
                { no: "5", name: "Frendy", div: "IT", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "6", name: "Fikri", div: "GENERAL AFFAIR", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "7", name: "Samsul", div: "GENERAL AFFAIR", kantor: "Brighton First Graha", titik: "Home Manyar", is_pic: false },
                { no: "8", name: "Dynar", div: "FINANCE", kantor: "Brighton Infinite & Sky Mayjen Sungkono", titik: "Home Manyar", is_pic: false },
                { no: "9", name: "Dodik", div: "GENERAL AFFAIR", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "10", name: "Arman", div: "IT", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "11", name: "Rohim", div: "GENERAL AFFAIR", kantor: "Brighton Priority Jemursari", titik: "Home Manyar", is_pic: false },
                { no: "12", name: "Wachyu", div: "FINANCE", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "13", name: "Dwi", div: "FINANCE", kantor: "Brighton Mulyosari", titik: "Home Manyar", is_pic: false },
                { no: "14", name: "Ely", div: "BPI", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "15", name: "Yunda", div: "IT", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "16", name: "Martin", div: "GENERAL AFFAIR", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "17", name: "Awan", div: "BPI", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "18", name: "Juli", div: "GENERAL AFFAIR", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "19", name: "Rosman", div: "GENERAL AFFAIR", kantor: "Brighton Titanium Satelit", titik: "Home Manyar", is_pic: false },
                { no: "20", name: "Fikri", div: "EVENT", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "21", name: "Ida", div: "FINANCE", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "22", name: "Rachma", div: "OPERASIONAL", kantor: "Brighton Mulyosari", titik: "Home Manyar", is_pic: false },
                { no: "23", name: "Tio", div: "EVENT", kantor: "Brighton Real Estate", titik: "Home Manyar", is_pic: false },
                { no: "24", name: "Kafit", div: "TAX & ACCOUNTING", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "25", name: "Indah", div: "OPERASIONAL", kantor: "Brighton Signature HR Muhammad", titik: "Spazio Office", is_pic: false },
                { no: "26", name: "Ais", div: "OPERASIONAL", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "27", name: "Kirana", div: "UNI", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "28", name: "Sisca", div: "RELATION - LSP - FAST LOAN - PRIMARY", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "29", name: "Intan", div: "OPERASIONAL", kantor: "Brighton First Graha", titik: "Spazio Office", is_pic: false },
                { no: "30", name: "Yuyun", div: "FINANCE", kantor: "Brighton Winner Pakuwon Indah", titik: "Spazio Office", is_pic: false },
                { no: "31", name: "Rendy", div: "RELATION - LSP - FAST LOAN - PRIMARY", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "32", name: "Kelvin C.", div: "IT", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "33", name: "Arul", div: "GENERAL AFFAIR", kantor: "Brighton Champion Citraland", titik: "Spazio Office", is_pic: false },
                { no: "34", name: "Ineke", div: "OPERASIONAL", kantor: "Brighton Winner Pakuwon Indah", titik: "Spazio Office", is_pic: false },
                { no: "35", name: "Fanisa", div: "OPERASIONAL", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "36", name: "Farah", div: "BPI", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "37", name: "Salsa", div: "OPERASIONAL", kantor: "Brighton Infinite & Sky Mayjen Sungkono", titik: "Spazio Office", is_pic: false },
                { no: "38", name: "Duwi", div: "FINANCE", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "39", name: "Kania", div: "UNI", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "40", name: "Arfiyan", div: "IT", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "41", name: "Syafi'i", div: "GENERAL AFFAIR", kantor: "Brighton One CBD", titik: "Spazio Office", is_pic: false },
                { no: "42", name: "Bayu", div: "OPERASIONAL", kantor: "Brighton Signature HR Muhammad", titik: "Spazio Office", is_pic: false },
                { no: "43", name: "Nabila", div: "FINANCE", kantor: "Brighton First Graha", titik: "Spazio Office", is_pic: false },
                { no: "44", name: "Hasan", div: "IT", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "45", name: "Tasya", div: "LEGAL", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "46", name: "Saiful", div: "TAX & ACCOUNTING", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "47", name: "Amal", div: "OPERASIONAL", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false }
            ]
        },
        {
            name: "Mobil Malang - Soehat",
            icon: "fa-car",
            passengers: [
                { no: "1", name: "Pipit", div: "OPERASIONAL", kantor: "Brighton Suhat Malang", titik: "Soekarno Hatta Malang", is_pic: true },
                { no: "2", name: "Salman", div: "DESIGN & MULTIMEDIA", kantor: "Brighton Suhat Malang", titik: "Soekarno Hatta Malang", is_pic: false },
                { no: "3", name: "Discha", div: "FINANCE", kantor: "Brighton Prosperity", titik: "Soekarno Hatta Malang", is_pic: false },
                { no: "4", name: "Rizqi", div: "GENERAL AFFAIR", kantor: "Brighton Suhat Malang", titik: "Soekarno Hatta Malang", is_pic: false },
                { no: "5", name: "Shokib", div: "GENERAL AFFAIR", kantor: "Brighton Excellent", titik: "Soekarno Hatta Malang", is_pic: false },
                { no: "6", name: "Setya", div: "OPERASIONAL", kantor: "Brighton Excellent", titik: "Soekarno Hatta Malang", is_pic: false }
            ]
        },
        {
            name: "Hiace Panitia - Spazio",
            icon: "fa-van-shuttle",
            passengers: [
                { no: "1", name: "Widya", div: "HRD", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "2", name: "Rudiyanto", div: "HRD", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "3", name: "Rudi", div: "IT", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "4", name: "Hanita", div: "HRD", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "5", name: "Tria", div: "HOA", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "6", name: "Siftiyan", div: "HRD", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "7", name: "Indah", div: "Finance", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "8", name: "Ayu", div: "Operasional", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "9", name: "Tika", div: "HOA", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "10", name: "Reny", div: "HOA", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "11", name: "Luke", div: "RELATION - LSP - FAST LOAN - PRIMARY", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false },
                { no: "12", name: "Rosemini", div: "EVENT", kantor: "Brighton Real Estate", titik: "Spazio Office", is_pic: false }
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

    filterWrap.addEventListener('click', (e) => {
        if (!e.target.classList.contains('filter-pill')) return;
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-vehicle');
        renderVehicles(searchInput.value, currentFilter);
    });

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