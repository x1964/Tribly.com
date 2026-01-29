// 🌍 نظام إدارة اللغات العالمي

class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'ar';
    this.translations = {
      ar: {
        // Popup
        'popup.title': 'نسخة تجريبية (V0.2.1)',
        'popup.message': 'قد لا تعمل بعض الميزات بشكل صحيح حالياً. شكراً لاختبارك Tribly!',
        'popup.ok': 'حسناً',

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
        'how.subtitle': 'جد الأشخاص المناسبين في خطوات بسيطة قليلة. اتصالك الحقيقي التالي ينتظرك.',
        'how.step1.title': 'أنشئ ملفك الشخصي',
        'how.step1.desc': 'انضم إلى Tribly وأخبرنا عن نفسك. يستغرق دقيقتين فقط!',
        'how.step2.title': 'اختر اهتماماتك',
        'how.step2.desc': 'أخبرنا بما تحب: الموسيقى، الرياضة، الألعاب، السفر، والمزيد.',
        'how.step3.title': 'احصل على التوصيات',
        'how.step3.desc': 'سيقترح عليك Tribly مجتمعات وأشخاص يشاركونك الاهتمامات.',
        'how.step3.extra': 'مدعوم بخوارزميات مطابقة متقدمة',
        'how.step4.title': 'تواصل والدردشة',
        'how.step4.desc': 'رسائل للأشخاص الذين تتفاهم معهم والانضمام للمجتمعات المناسبة.',
        'how.step4.extra': 'جميع المحادثات آمنة وخاصة',
        'how.step5.title': 'اللقاء في الحياة الواقعية',
        'how.step5.desc': 'شارك في اللقاءات المحلية والفعاليات الحقيقية مع مجتمعك.',
        'how.step5.extra': 'بناء اتصالات حقيقية في العالم الحقيقي',
        'how.step6.title': 'تقييم وتحسين',
        'how.step6.desc': 'شارك تجربتك وساعدنا في تحسين المطابقات للجميع.',
        'how.cta.title': 'جاهز للبحث عن قبيلتك؟',
        'how.cta.button': 'ابدأ الآن',

        // Cities Section
        'cities.title': 'حيث ننمو',
        'cities.expanding': 'نشط حالياً في أكثر مدن مصر حيوية. التوسع قريباً!',

        // Trusted Section
        'trusted.title': 'موثوق به من المجتمعات',
        'trusted.desc': 'ننتظر بشغف جلب Tribly إلى أقوى الأماكن في الإسكندرية وباقي مصر',

        // Footer
        'footer.manifesto': 'الرؤية',
        'footer.contact': 'تواصل معنا',
        'footer.support': 'الدعم',
        'footer.blog': 'المدونة',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.terms': 'شروط الخدمة',
        'footer.rights': '© 2025 Tribly، جميع الحقوق محفوظة',
        'footer.home': 'الرئيسية',
        'footer.browse': 'التصفح',
        'footer.communities': 'المجتمعات',
        'footer.about': 'حول',

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
        // Popup
        'popup.title': 'Beta Version (V0.2.1)',
        'popup.message': 'Some features may not work correctly yet. Thanks for testing Tribly!',
        'popup.ok': 'OK',

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
        'how.subtitle': 'Find your people in a few simple steps. Your next meaningful connection is waiting.',
        'how.step1.title': 'Create Your Profile',
        'how.step1.desc': 'Join Tribly and tell us about yourself. It only takes 2 minutes!',
        'how.step2.title': 'Choose Your Interests',
        'how.step2.desc': 'Tell us what you love: Music, Sports, Gaming, Travel, and more.',
        'how.step3.title': 'Get Smart Recommendations',
        'how.step3.desc': 'Our AI suggests communities and people who share your interests.',
        'how.step3.extra': 'Powered by advanced matching algorithms',
        'how.step4.title': 'Connect & Chat',
        'how.step4.desc': 'Message people you click with and join communities that match your interests.',
        'how.step4.extra': 'All conversations are secure and private',
        'how.step5.title': 'Meet In Real Life',
        'how.step5.desc': 'Join local meetups and real-world events with your community.',
        'how.step5.extra': 'Build genuine connections in the real world',
        'how.step6.title': 'Rate & Improve',
        'how.step6.desc': 'Share your experience and help us improve the matches for everyone.',
        'how.cta.title': 'Ready to find your tribe?',
        'how.cta.button': 'Get Started Now',

        // Cities Section
        'cities.title': 'Where We\'re Growing',
        'cities.expanding': 'Currently active in Egypt\'s most vibrant city. Expanding soon!',

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
        'footer.home': 'Home',
        'footer.browse': 'Browse',
        'footer.communities': 'Communities',
        'footer.about': 'About',

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
        // Popup
        'popup.title': 'Version Bêta (V0.2.1)',
        'popup.message': 'Certaines fonctionnalités peuvent ne pas fonctionner correctement. Merci de tester Tribly!',
        'popup.ok': 'OK',

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
        'how.subtitle': 'Trouvez vos gens en quelques étapes simples. Votre prochaine connexion significative vous attend.',
        'how.step1.title': 'Créez votre profil',
        'how.step1.desc': 'Rejoignez Tribly et parlez-nous de vous. Cela ne prend que 2 minutes!',
        'how.step2.title': 'Choisissez vos intérêts',
        'how.step2.desc': 'Dites-nous ce que vous aimez: Musique, Sports, Jeux, Voyage, et plus.',
        'how.step3.title': 'Obtenir des recommandations intelligentes',
        'how.step3.desc': 'Notre IA suggère des communautés et des personnes qui partagent vos intérêts.',
        'how.step3.extra': 'Alimenté par des algorithmes de correspondance avancés',
        'how.step4.title': 'Se connecter et discuter',
        'how.step4.desc': 'Messagez les gens avec lesquels vous vous entendez et rejoignez les communautés qui vous correspondent.',
        'how.step4.extra': 'Toutes les conversations sont sécurisées et privées',
        'how.step5.title': 'Rencontrer dans la vie réelle',
        'how.step5.desc': 'Rejoignez les rencontres locales et les événements réels avec votre communauté.',
        'how.step5.extra': 'Construire des connexions authentiques dans le monde réel',
        'how.step6.title': 'Évaluer et améliorer',
        'how.step6.desc': 'Partagez votre expérience et aidez-nous à améliorer les correspondances pour tous.',
        'how.cta.title': 'Prêt à trouver votre tribu?',
        'how.cta.button': 'Commencer maintenant',

        // Cities Section
        'cities.title': 'Où nous grandissons',
        'cities.expanding': 'Actuellement actif dans la ville la plus dynamique d\'Égypte. Expansion bientôt!',

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
        'footer.home': 'Accueil',
        'footer.browse': 'Parcourir',
        'footer.communities': 'Communautés',
        'footer.about': 'À propos',

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
