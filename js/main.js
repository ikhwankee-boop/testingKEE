// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Reset hamburger animation
        const bars = hamburger.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }));
}

// Complete Translation dictionary
const translations = {
    ms: {
        // Navigation
        'nav_home': 'Utama',
        'nav_info': 'Info Jabatan',
        'nav_services': 'Perkhidmatan',
        'nav_contact': 'Hubungi Kami',
        'nav_history': 'Sejarah',
        'nav_vision': 'Visi & Misi',
        'nav_org': 'Carta Organisasi',
        'nav_license': 'Permohonan Lesen',
        'nav_consult': 'Konsultasi',
        'nav_aid': 'Bantuan Pertanian',
        
        // Welcome Section
        'welcome_title': 'Selamat Datang ke Jabatan Pertanian Negeri Pulau Pinang',
        'welcome_desc': 'Memacu Pertanian Moden & Mampan untuk Masa Depan yang Lebih Hijau dan Produktif',
        
        // News Section
        'news_title': 'Berita & Pengumuman',
        'view_all': 'Lihat Semua',
        'badge_new': 'TERKINI',
        'badge_important': 'PENTING',
        'news1_title': 'Program Bantuan Pertanian 2024',
        'news1_desc': 'Permohonan untuk Program Bantuan Pertanian 2024 kini dibuka kepada semua petani berdaftar.',
        'news1_date': '15 Mac 2024',
        'news2_title': 'Teknologi IoT Dalam Pertanian',
        'news2_desc': 'Pengenalan teknologi IoT mengubah landskap pertanian tradisional kepada pertanian pintar.',
        'news2_date': '10 Mac 2024',
        'news3_title': 'Kerjasama Strategik Dengan Universiti',
        'news3_desc': 'Jabatan bekerjasama dengan universiti tempatan untuk penyelidikan pertanian.',
        'news3_date': '5 Mac 2024',
        'read_more': 'Baca Selanjutnya',
        
        // Services Section
        'services_title': 'Perkhidmatan Kami',
        'services_desc': 'Kami menyediakan pelbagai perkhidmatan untuk memenuhi keperluan pertanian anda',
        'service1_title': 'Khidmat Nasihat & Teknikal',
        'service1_desc': 'Perkhidmatan nasihat teknikal untuk petani dan pengusaha pertanian',
        'service2_title': 'Lesen & Permit',
        'service2_desc': 'Permohonan lesen dan permit untuk aktiviti pertanian dan perniagaan berkaitan',
        'service3_title': 'Perkhidmatan Atas Talian',
        'service3_desc': 'Akses kepada sistem dan perkhidmatan dalam talian',
        'service4_title': 'Kursus & Latihan',
        'service4_desc': 'Program latihan dan kursus untuk meningkatkan kemahiran dalam bidang pertanian',
        'service5_title': 'Skim Sijil',
        'service5_desc': 'Pensijilan produk pertanian dan ladang mengikut piawaian yang ditetapkan',
        'service6_title': 'Bantuan & Sokongan',
        'service6_desc': 'Program bantuan kewangan dan sokongan untuk petani',
        
        // Footer
        'contact_title': 'Hubungi Kami',
        'contact_address': 'Jalan Sultan Azlan Shah, 11900 Bayan Lepas, Pulau Pinang',
        'hours_title': 'Waktu Operasi',
        'hours1': 'Isnin - Khamis: 8:00 PG - 5:00 PTG',
        'hours2': 'Jumaat: 8:00 PG - 12:15 PTG, 2:45 PTG - 5:00 PTG',
        'hours3': 'Sabtu & Ahad: Tutup',
        'links_title': 'Pautan Pantas',
        'link_portal': 'Portal Kerajaan',
        'link_privacy': 'Dasar Privasi',
        'link_disclaimer': 'Penafian',
        'link_sitemap': 'Peta Laman',
        'footer_rights': 'Hak Cipta Terpelihara.',

        // Service Pages
        'back_home': 'Kembali ke Laman Utama',
        'apply_now': 'Mohon Sekarang',
        'download_brochure': 'Muat Turun Brosur',
        'schedule_appointment': 'Buat Temujanji',
        'service_info': 'Maklumat Perkhidmatan',
        'contact_for_info': 'Hubungi Kami',
        'loading': 'Memuatkan halaman...',
        'service_features': 'Ciri-ciri Perkhidmatan'
    },
    // … (bahagian bahasa lain kekal sama)
};

// Enhanced Language Switcher with Animation
function enhanceLanguageSwitcher() {
    const languageSelect = document.getElementById('languageSelect');
    const languageWrapper = document.querySelector('.language-select-wrapper');
    const languageIcon = document.querySelector('.language-icon');

    if (languageSelect && languageWrapper && languageIcon) {
        // Add ripple effect on change
        languageSelect.addEventListener('change', function(e) {
            createRippleEffect(languageWrapper);
            
            // Add success animation
            languageIcon.style.color = '#4caf50';
            languageIcon.classList.add('bounce');
            setTimeout(() => {
                languageIcon.style.color = 'var(--primary-green)';
                languageIcon.classList.remove('bounce');
            }, 600);
        });

        // Add hover effects
        languageWrapper.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            if (languageIcon) {
                languageIcon.classList.add('rotate');
            }
        });

        languageWrapper.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            if (languageIcon) {
                languageIcon.classList.remove('rotate');
            }
        });

        // Add focus effects
        languageSelect.addEventListener('focus', function() {
            languageWrapper.style.transform = 'scale(1.02)';
        });

        languageSelect.addEventListener('blur', function() {
            languageWrapper.style.transform = 'scale(1)';
        });
    }
}

// Ripple effect function
function createRippleEffect(element) {
    if (!element) return;
    
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = rect.width / 2;
    const y = rect.height / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(76, 175, 80, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        width: ${size}px;
        height: ${size}px;
        left: ${x - size/2}px;
        top: ${y - size/2}px;
        z-index: 0;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentElement) {
            ripple.remove();
        }
    }, 600);
}

// Add CSS animations
function addCustomAnimations() {
    if (document.querySelector('#custom-animations')) return;
    
    const style = document.createElement('style');
    style.id = 'custom-animations';
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
                transform: translateY(-50%) scale(1);
            }
            40%, 43% {
                transform: translateY(-50%) scale(1.3);
            }
            70% {
                transform: translateY(-50%) scale(1.1);
            }
        }
        
        @keyframes rotate {
            from {
                transform: translateY(-50%) rotate(0deg);
            }
            to {
                transform: translateY(-50%) rotate(360deg);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .bounce { animation: bounce 1s ease; }
        .rotate { animation: rotate 2s linear infinite; }
        .fade-in-up { animation: fadeInUp 0.6s ease-out; }
        .pulse { animation: pulse 2s infinite; }
    `;
    document.head.appendChild(style);
}

// Improved Translation function
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            setTimeout(() => {
                element.textContent = translations[language][key];
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transition = 'all 0.3s ease';
            }, 150);
        }
    });
    updatePageTitle(language);
}

function updatePageTitle(language) {
    const titles = {
        'ms': 'Jabatan Pertanian Negeri Pulau Pinang',
        'en': 'Penang State Agriculture Department',
        'zh': '槟城州农业局',
        'ta': 'பினாங்கு மாநில விவசாயத் துறை'
    };
    document.title = titles[language] || titles['ms'];
}

// ✅ Updated Service Cards Navigation (Pilihan 2)
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href');
            showLoadingAnimation();
            setTimeout(() => {
                window.location.href = targetPage;
            }, 800);
        });
    });
}

// Show loading animation
function showLoadingAnimation() {
    const existingOverlay = document.querySelector('.loading-overlay');
    if (existingOverlay) existingOverlay.remove();
    
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner-circle">
                <i class="fas fa-leaf"></i>
            </div>
            <p data-translate="loading">Memuatkan halaman...</p>
        </div>
    `;
    document.body.appendChild(loadingOverlay);

    const currentLanguage = localStorage.getItem('preferredLanguage') || 'ms';
    const loadingText = loadingOverlay.querySelector('[data-translate="loading"]');
    if (loadingText && translations[currentLanguage] && translations[currentLanguage]['loading']) {
        loadingText.textContent = translations[currentLanguage]['loading'];
    }
}

// Auto initialize
document.addEventListener('DOMContentLoaded', () => {
    addCustomAnimations();
    enhanceLanguageSwitcher();
    initializeServiceCards();
});
