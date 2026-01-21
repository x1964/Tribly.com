// 🌍 نظام إدارة اللغات العالمي

class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'ar';
    this.translations = {
      ar: {
        // Navbar
        'nav.howItWorks': 'كيف يعمل',
        'nav.about': 'حول',
        'nav.getApp': 'تحمل التطبيق',
        'nav.manifesto': 'الرؤية',
        'nav.join': 'انضم',
        'nav.login': 'دخول',

        // Hero Section
        'hero.findYourTribe': 'ابحث عن',
        'hero.tribe': 'قبيلتك',
        'hero.anywhere': 'في أي مكان',
        'hero.description': 'اعثر على مجتمع والأشخاص الذين تتشابه معهم. الاتصال التالي السحري لك على بعد نقرة واحدة فقط.',
        'hero.login': 'دخول',
        'hero.waitlist': 'قائمة الانتظار',
        'hero.invitation': 'هل لديك رمز دعوة؟',

        // How It Works
        'how.title': 'كيف يعمل؟',
        'how.step1.title': 'انضم إلى Tribly',
        'how.step1.desc': 'اشترك الآن وابدأ رحلتك',
        'how.step2.title': 'أضف اهتماماتك',
        'how.step2.desc': 'أخبرنا بما تحب وسنتولى الباقي',
        'how.step3.title': 'احصل على التوصيات',
        'how.step3.desc': 'سيقترح عليك Tribly مجتمعات وأنشطة',
        'how.step4.title': 'التقابل الحقيقي',
        'how.step4.desc': 'اخرج والتقي بالأشخاص الذين ستجد معهم توافقاً',
        'how.step5.title': 'قيّم تجربتك',
        'how.step5.desc': 'ساعدنا في تحسين التوصيات',
        'how.step6.title': 'نظم أفكارك',
        'how.step6.desc': 'استخدم MindFlow لتنظيم وقتك',

        // Cities Section
        'cities.title': 'المدن',
        'cities.note': '* يمكنك استخدام Tribly من أي مكان لكن ميزة اللقاءات متاحة فقط في الإسكندرية، مصر *',

        // Trusted Section
        'trusted.title': 'موثوق به من المجتمعات',
        'trusted.desc': 'نعتذر عن عدم توفر مقابلات الآن. انتظر Tribly في أقوى الأماكن في الإسكندرية وباقي مصر',

        // Footer
        'footer.manifesto': 'الرؤية',
        'footer.contact': 'تواصل معنا',
        'footer.support': 'الدعم',
        'footer.blog': 'المدونة',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.terms': 'شروط الخدمة',
        'footer.rights': '© 2025 Tribly، جميع الحقوق محفوظة',

        // Home Page
        'home.browse': 'تصفح الأشخاص',
        'home.filterByInterests': 'فلتر حسب الاهتمامات',
        'home.like': 'إعجاب',
        'home.message': 'رسالة',
        'home.pass': 'تخطي',
        'home.match': 'توافق',

        // Profile
        'profile.myProfile': 'ملفي الشخصي',
        'profile.personalInfo': 'معلومات شخصية',
        'profile.name': 'الاسم',
        'profile.age': 'العمر',
        'profile.gender': 'الجنس',
        'profile.city': 'المدينة',
        'profile.email': 'البريد الإلكتروني',
        'profile.bio': 'السيرة الذاتية',
        'profile.interests': 'الاهتمامات',
        'profile.preferences': 'التفضيلات',
        'profile.save': 'حفظ',
        'profile.uploadPhoto': 'رفع صورة',
      },
      en: {
        // Navbar
        'nav.howItWorks': 'How It Works',
        'nav.about': 'About',
        'nav.getApp': 'Get The App',
        'nav.manifesto': 'Manifesto',
        'nav.join': 'Join',
        'nav.login': 'Login',

        // Hero Section
        'hero.findYourTribe': 'Find Your',
        'hero.tribe': 'Tribe',
        'hero.anywhere': 'Anywhere',
        'hero.description': 'Find community and the people you click with closest to you. Your next magical connection is just a click away.',
        'hero.login': 'Login',
        'hero.waitlist': 'Join Waitlist',
        'hero.invitation': 'Got An Invitation Code?',

        // How It Works
        'how.title': 'How Does It Work?',
        'how.step1.title': 'Join Tribly',
        'how.step1.desc': 'Subscribe now and start your journey',
        'how.step2.title': 'Fill in your interests',
        'how.step2.desc': 'Tell us what you love, and we\'ll do the rest',
        'how.step3.title': 'Get Recommendations',
        'how.step3.desc': 'Tribly will suggest communities to join',
        'how.step4.title': 'Meet IRL',
        'how.step4.desc': 'Go out and connect with people you\'ll click with',
        'how.step5.title': 'Rate your Experience',
        'how.step5.desc': 'Help Tribly improve its recommendations',
        'how.step6.title': 'Organize Your Thoughts',
        'how.step6.desc': 'Use MindFlow to organize your time',

        // Cities Section
        'cities.title': 'Cities',
        'cities.note': '* You can use Tribly from anywhere but the meetup feature is currently only available in Alexandria, Egypt *',

        // Trusted Section
        'trusted.title': 'Trusted By Communities',
        'trusted.desc': 'We are looking forward to bringing Tribly to the most powerful places in Alexandria and the rest of Egypt',

        // Footer
        'footer.manifesto': 'Manifesto',
        'footer.contact': 'Contact',
        'footer.support': 'Support',
        'footer.blog': 'Blog',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.rights': '© 2025 Tribly, all rights reserved',

        // Home Page
        'home.browse': 'Browse People',
        'home.filterByInterests': 'Filter by Interests',
        'home.like': 'Like',
        'home.message': 'Message',
        'home.pass': 'Pass',
        'home.match': 'Match',

        // Profile
        'profile.myProfile': 'My Profile',
        'profile.personalInfo': 'Personal Information',
        'profile.name': 'Name',
        'profile.age': 'Age',
        'profile.gender': 'Gender',
        'profile.city': 'City',
        'profile.email': 'Email',
        'profile.bio': 'Bio',
        'profile.interests': 'Interests',
        'profile.preferences': 'Preferences',
        'profile.save': 'Save',
        'profile.uploadPhoto': 'Upload Photo',
      },
      fr: {
        // Navbar
        'nav.howItWorks': 'Comment ça marche',
        'nav.about': 'À propos',
        'nav.getApp': 'Obtenir l\'application',
        'nav.manifesto': 'Manifeste',
        'nav.join': 'Rejoindre',
        'nav.login': 'Connexion',

        // Hero Section
        'hero.findYourTribe': 'Trouvez votre',
        'hero.tribe': 'Tribu',
        'hero.anywhere': 'N\'importe où',
        'hero.description': 'Trouvez une communauté et les personnes avec lesquelles vous vous entendez. Votre prochaine connexion magique n\'est qu\'à un clic.',
        'hero.login': 'Connexion',
        'hero.waitlist': 'Rejoindre la liste d\'attente',
        'hero.invitation': 'Avez-vous un code d\'invitation?',

        // How It Works
        'how.title': 'Comment ça marche?',
        'how.step1.title': 'Rejoignez Tribly',
        'how.step1.desc': 'Abonnez-vous maintenant et commencez votre voyage',
        'how.step2.title': 'Remplissez vos intérêts',
        'how.step2.desc': 'Dites-nous ce que vous aimez, et nous ferons le reste',
        'how.step3.title': 'Obtenir les recommandations',
        'how.step3.desc': 'Tribly suggérera les communautés à rejoindre',
        'how.step4.title': 'Rencontrez en personne',
        'how.step4.desc': 'Allez rencontrer les gens avec lesquels vous vous entendrez',
        'how.step5.title': 'Évaluez votre expérience',
        'how.step5.desc': 'Aidez Tribly à améliorer ses recommandations',
        'how.step6.title': 'Organisez vos pensées',
        'how.step6.desc': 'Utilisez MindFlow pour organiser votre temps',

        // Cities Section
        'cities.title': 'Villes',
        'cities.note': '* Vous pouvez utiliser Tribly de n\'importe où, mais la fonction de rencontre n\'est actuellement disponible qu\'à Alexandrie, Égypte *',

        // Trusted Section
        'trusted.title': 'Approuvé par les communautés',
        'trusted.desc': 'Nous attendons avec impatience d\'apporter Tribly aux endroits les plus puissants d\'Alexandrie et du reste de l\'Égypte',

        // Footer
        'footer.manifesto': 'Manifeste',
        'footer.contact': 'Contact',
        'footer.support': 'Support',
        'footer.blog': 'Blog',
        'footer.privacy': 'Politique de confidentialité',
        'footer.terms': 'Conditions d\'utilisation',
        'footer.rights': '© 2025 Tribly, tous droits réservés',

        // Home Page
        'home.browse': 'Parcourir les personnes',
        'home.filterByInterests': 'Filtrer par intérêts',
        'home.like': 'J\'aime',
        'home.message': 'Message',
        'home.pass': 'Passer',
        'home.match': 'Match',

        // Profile
        'profile.myProfile': 'Mon profil',
        'profile.personalInfo': 'Informations personnelles',
        'profile.name': 'Nom',
        'profile.age': 'Âge',
        'profile.gender': 'Genre',
        'profile.city': 'Ville',
        'profile.email': 'E-mail',
        'profile.bio': 'Biographie',
        'profile.interests': 'Intérêts',
        'profile.preferences': 'Préférences',
        'profile.save': 'Enregistrer',
        'profile.uploadPhoto': 'Télécharger la photo',
      }
    };
    this.init();
  }

  init() {
    this.applyLanguage();
    this.createLanguageSwitcher();
  }

  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      this.applyLanguage();
      window.dispatchEvent(new Event('languageChanged'));
    }
  }

  get(key) {
    return this.translations[this.currentLanguage][key] || key;
  }

  applyLanguage() {
    // تحديث عنصر HTML
    document.documentElement.lang = this.currentLanguage;
    document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';

    // تحديث جميع العناصر بـ data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      const translation = this.get(key);
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    // تحديث الـ attributes
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
      const attr = element.dataset.i18nAttr;
      const key = element.dataset.i18nKey;
      element.setAttribute(attr, this.get(key));
    });
  }

  createLanguageSwitcher() {
    // البحث عن navbar
    const nav = document.querySelector('nav');
    if (!nav) return;

    // التحقق من وجود مفتاح اللغة
    let langSwitcher = document.getElementById('languageSwitcher');
    if (!langSwitcher) {
      langSwitcher = document.createElement('div');
      langSwitcher.id = 'languageSwitcher';
      langSwitcher.style.cssText = `
        display: flex;
        gap: 8px;
        align-items: center;
        margin-left: 15px;
      `;
      
      const languages = ['ar', 'en', 'fr'];
      languages.forEach(lang => {
        const btn = document.createElement('button');
        btn.textContent = lang.toUpperCase();
        btn.style.cssText = `
          padding: 6px 12px;
          background: ${this.currentLanguage === lang ? '#6ae44d' : '#f0f0f0'};
          color: ${this.currentLanguage === lang ? '#fff' : '#333'};
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 12px;
          transition: all 0.3s ease;
        `;
        
        btn.onmouseover = () => {
          if (this.currentLanguage !== lang) {
            btn.style.background = '#e0e0e0';
          }
        };
        
        btn.onmouseout = () => {
          btn.style.background = this.currentLanguage === lang ? '#6ae44d' : '#f0f0f0';
        };
        
        btn.onclick = () => this.setLanguage(lang);
        langSwitcher.appendChild(btn);
      });

      // إضافة المفتاح للـ navbar
      const navActions = nav.querySelector('.nav-actions');
      if (navActions) {
        navActions.insertBefore(langSwitcher, navActions.firstChild);
      }
    }
  }
}

// تهيئة نظام اللغات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  window.languageManager = new LanguageManager();
});
