// JavaScript: Live 10 Teams Tournament Bagan & Parallax System (Mobile Optimized)

document.addEventListener('DOMContentLoaded', () => {
    // 1. DATA 10 KELOMPOK (Disesuaikan dengan manifes 96 peserta resmi)
    const initialTeams = [
        { id: 1, name: "BRIGHT", title: "BRIGHT", members: 10, loves: 5 },
        { id: 2, name: "RESPECT", title: "RESPECT", members: 10, loves: 5 },
        { id: 3, name: "INTEGRITY", title: "INTEGRITY", members: 10, loves: 5 },
        { id: 4, name: "GROW", title: "GROW", members: 10, loves: 5 },
        { id: 5, name: "HARMONY", title: "HARMONY", members: 10, loves: 5 },
        { id: 6, name: "TEAMWORK", title: "TEAMWORK", members: 9, loves: 5 },
        { id: 7, name: "AGILE", title: "AGILE", members: 10, loves: 5 },
        { id: 8, name: "RISE", title: "RISE", members: 9, loves: 5 },
        { id: 9, name: "HELPFUL", title: "HELPFUL", members: 9, loves: 5 },
        { id: 10, name: "MULTIPLY", title: "MULTIPLY", members: 9, loves: 5 }
    ];
    
    let teamsData = JSON.parse(localStorage.getItem('brighton_noche_teams')) || initialTeams;
    const teamsContainer = document.getElementById('teamsContainer');
    let teamsChart = null;

    // Helper untuk mengecek layar mobile
    const isMobile = () => window.innerWidth < 768;

    // 2. INITIALIZE CHART.JS (Responsif & Mobile Touch Friendly)
    function initOrUpdateChart() {
        const ctx = document.getElementById('teamsBarChart');
        if (!ctx) return;

        const labels = teamsData.map(t => isMobile() ? t.title : t.name);
        const dataValues = teamsData.map(t => t.loves);

        const backgroundColors = teamsData.map(t => {
            if (t.loves >= 14) return 'rgba(197, 168, 128, 0.95)';
            if (t.loves >= 12) return 'rgba(117, 76, 41, 0.85)';
            return 'rgba(43, 56, 43, 0.75)';
        });

        if (teamsChart) {
            teamsChart.data.labels = labels;
            teamsChart.data.datasets[0].data = dataValues;
            teamsChart.data.datasets[0].backgroundColor = backgroundColors;
            teamsChart.options.scales.x.ticks.font.size = isMobile() ? 10 : 12;
            teamsChart.update();
        } else {
            teamsChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Total Jatah Love',
                        data: dataValues,
                        backgroundColor: backgroundColors,
                        borderColor: 'rgba(197, 168, 128, 1)',
                        borderWidth: 1.5,
                        borderRadius: isMobile() ? 6 : 10,
                        borderSkipped: false
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 700,
                        easing: 'easeOutQuart'
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            padding: 10,
                            titleFont: { size: 13 },
                            bodyFont: { size: 12 },
                            callbacks: {
                                label: function(context) {
                                    return ` Total: ${context.parsed.y} Token Love ❤️`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            suggestedMax: 20,
                            ticks: {
                                stepSize: 2,
                                font: { family: 'Plus Jakarta Sans', size: isMobile() ? 10 : 12 }
                            },
                            grid: { color: 'rgba(197, 168, 128, 0.15)' }
                        },
                        x: {
                            ticks: {
                                font: { family: 'Plus Jakarta Sans', weight: '600', size: isMobile() ? 10 : 12 }
                            },
                            grid: { display: false }
                        }
                    }
                }
            });
        }
    }

    // 3. RENDER LEADERBOARD CARDS
    function renderLeaderboard() {
        if (!teamsContainer) return;

        const sortedTeams = [...teamsData].sort((a, b) => b.loves - a.loves);

        teamsContainer.innerHTML = '';
        sortedTeams.forEach((team, index) => {
            const rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : '';
            const card = document.createElement('div');
            card.className = 'team-card';
            
            if (index >= 8) {
                card.classList.add('centered-last-items');
            }

            card.innerHTML = `
                <div class="team-rank-badge ${rankClass}">#${index + 1}</div>
                <div class="team-meta">
                    <h3>TIM ${team.title}</h3>
                    <div class="team-members-count"><i class="fa-solid fa-users"></i> ${team.members} Peserta / Tim</div>
                </div>
                <div class="team-love-box">
                    <div>
                        <span class="love-label">TOTAL PEROLEHAN</span>
                    </div>
                    <div class="love-score-wrap">
                        <i class="fa-solid fa-heart"></i>
                        <span class="love-points-count">${team.loves}</span>
                    </div>
                </div>
            `;
            teamsContainer.appendChild(card);
        });

        const syncEl = document.getElementById('lastSyncTime');
        if (syncEl) {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            syncEl.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> Data Terupdate: ${timeStr} WIB`;
        }

        initOrUpdateChart();
    }

    renderLeaderboard();

    // Auto-refresh interval setiap 15 detik
    setInterval(() => {
        renderLeaderboard();
    }, 15000);

    // Resize event untuk penyesuaian label chart di mobile secara dinamis
    window.addEventListener('resize', () => {
        if (teamsChart) {
            initOrUpdateChart();
        }
    });

    // 4. PARALLAX SCROLL (Ringan pada perangkat Touch/Mobile)
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const heroContent = document.querySelector('.hero-content');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    if (scrolled < window.innerHeight * 1.5) {
                        parallaxLayers.forEach(layer => {
                            const speed = parseFloat(layer.getAttribute('data-speed') || '0.3');
                            layer.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
                        });

                        if (heroContent) {
                            const contentSpeed = parseFloat(heroContent.getAttribute('data-speed') || '0.2');
                            heroContent.style.transform = `translate3d(0, ${scrolled * contentSpeed}px, 0)`;
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }
    }, { passive: true });

    // 5. LIVE COUNTDOWN TIMER (11 OKTOBER 2026)
    const targetDate = new Date('2026-10-11T05:30:00+07:00').getTime();
    function updateCountdown() {
        const now = new Date().getTime();
        const diff = targetDate - now;
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);

            const dEl = document.getElementById('cd-days');
            const hEl = document.getElementById('cd-hours');
            const mEl = document.getElementById('cd-mins');
            const sEl = document.getElementById('cd-secs');

            if (dEl) dEl.textContent = String(days).padStart(2, '0');
            if (hEl) hEl.textContent = String(hours).padStart(2, '0');
            if (mEl) mEl.textContent = String(mins).padStart(2, '0');
            if (sEl) sEl.textContent = String(secs).padStart(2, '0');
        }
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // 6. NAVBAR SCROLL & MOBILE TOGGLE + CLOSE ON CLICK OUTSIDE
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        document.querySelectorAll('.nav-item, .nav-cta-btn').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target) && navLinks.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});