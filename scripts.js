document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.classList.add(`r-page-${savedTheme}`);
        updateThemeIcon(savedTheme);
    }
    
    function toggleTheme() {
        const isDark = body.classList.contains('r-page-dark');
        const newTheme = isDark ? 'light' : 'dark';
        
        body.classList.replace(`r-page-${isDark ? 'dark' : 'light'}`, `r-page-${newTheme}`);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }
    
    function updateThemeIcon(theme) {
        const iconPath = theme === 'dark' ? 'resources/sun_icon.png' : 'resources/moon_icon.png';
        themeToggle.innerHTML = `<img src="${iconPath}" alt="Переключить тему" style="width: 32px; height: 32px;">`;
    }
    
    initTheme();
    
    themeToggle.addEventListener('click', toggleTheme);
});

document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    
    const translations = {
        'ru': {
            'title': 'Резюме',
            'name': 'Малевич Тимофей Вадимович',
            'profession': 'Инженер-программист',
            'contacts': 'Контакты',
            'personal': 'Личные данные',
            'skills': 'Навыки',
            'about': 'Про себя',
            'education': 'Образование',
            'languages': 'Языки программирования',
            'about-text' : 'Меня зовут Малевич Тимофей Вадимович и я учусь в "Белорусском Национальном Техническом Университете" (БНТУ) на факультете "Информационных технологий и робототехники" (ФИТР) по специальности "Информационные системы и технологии" (ИСИТ). Занимаюсь front-end разработкой, опыта работы нету.',
            'adress' : 'Республика Беларусь, г. Минск, ул. Герасименко 52/2, кв. 393',
            'birthday' : 'День рождения',
            'birthday-text' : ': 17 февраля 2005г.',
            'relationship' : 'Отношения',
            'relationship-text' : ': Женат',
            'national' : 'Национальность',
            'national-text' : ': Белорус',
            'r-languages' : 'Языки',
            'r-languages-text' : ': Белорусский, Английский, Русский',
            'communication' : 'Коммуникация',
            'creativity' : 'Креативность',
            'teamwork' : 'Работа в команде',
            'hobby' : 'Хобби',
            'school' : 'Законченное среднее общее образование',
            'univer' : 'Незаконченное высшее образование'
        },
        'en': {
            'title': 'Resume',
            'name': 'Malevich Timofei Vadimovich',
            'profession': 'Software Engineer',
            'contacts': 'Contacts',
            'personal': 'Personal',
            'skills': 'Skills',
            'about': 'About',
            'education': 'Education',
            'languages': 'Programming Languages',
            'about-text' : 'My name is Timofei Vadimovich Malevich and I am studying at the Belarusian National Technical University (BNTU) at the Faculty of Information Technology and Robotics (FITR) in the specialty Information Systems and Technologies (ISIT). I am engaged in frontend development, I have no work experience.',
            'adress' : 'Republic of Belarus, Minsk, Gerasimenko St. 52/2, apt. 393',
            'birthday' : 'Birthday',
            'birthday-text' : ': February 17, 2005',
            'relationship' : 'Relationships',
            'relationship-text' : ': Married',
            'national' : 'Nationality',
            'national-text' : ': Belarusian',
            'r-languages' : 'Languages',
            'r-languages-text' : ': Belarusian, English, Russian',
            'communication' : 'Communication',
            'creativity' : 'Creativity',
            'teamwork' : 'Teamwork',
            'hobby' : 'Hobby',
            'school' : 'Completed secondary general education',
            'univer' : 'Incomplete higher education'
        }
    };

    function initLanguage() {
        const savedLang = localStorage.getItem('lang') || 'ru';
        setLanguage(savedLang);
    }

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        
        languageToggle.textContent = lang === 'ru' ? 'EN' : 'RU';
        
        document.title = translations[lang]['title'];
        document.querySelector('.r-page__header-name').innerHTML = 
            `${translations[lang]['name']}<br>${translations[lang]['profession']}`;
        
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            el.textContent = translations[lang][key];
        });
    }

    function toggleLanguage() {
        const currentLang = localStorage.getItem('lang') || 'ru';
        const newLang = currentLang === 'ru' ? 'en' : 'ru';
        setLanguage(newLang);
    }

    initLanguage();
    
    languageToggle.addEventListener('click', toggleLanguage);
});