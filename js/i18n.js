// 🌍 Global Translation System - i18n.js
const translations = {
  ar: {
    // Navigation
    'nav-how': 'كيف يعمل',
    'nav-about': 'حول',
    'nav-app': 'تحميل التطبيق',
    'nav-manifesto': 'البيان',
    'nav-join': 'انضم',
    'nav-login': 'دخول',
    'nav-communities': 'المجتمعات',
    'nav-contact': 'تواصل',
    'nav-faq': 'الأسئلة الشائعة',
    'nav-support': 'الدعم',
    'nav-profile': 'الملف الشخصي',
    
    // Hero
    'hero-title-1': 'ابحث عن',
    'hero-title-2': 'قبيلتك',
    'hero-title-3': 'أينما كنت',
    'hero-desc': 'ابحث عن المجتمع والأشخاص الذين تنسجم معهم بالقرب منك. اتصالك السحري التالي على بعد نقرة واحدة.',
    'hero-login': 'دخول',
    'hero-waitlist': 'انضم لقائمة الانتظار',
    'hero-invite': 'هل لديك كود دعوة؟',
    
    // How It Works
    'how-title': 'كيف يعمل؟',
    'card-1-title': 'انضم إلى Tribly',
    'card-1-desc': 'اشترك في Tribly وانضم إلى مجتمعنا المتنامي.',
    'card-2-title': 'أملأ اهتماماتك',
    'card-2-desc': 'أخبرنا بما تحب، وسنقوم بالباقي.',
    'card-3-title': 'احصل على توصيات',
    'card-3-desc': 'سيقترح عليك Tribly AI المجتمعات التي تنضم إليها والأنشطة التي تستمتع بها شخصياً',
    'card-4-title': 'التقابل وجهاً لوجه',
    'card-4-desc': 'اخرج وتواصل مع الأشخاص الذين نحن متأكدون من أنك ستنسجم معهم.',
    'card-5-title': 'قيّم تجربتك',
    'card-5-desc': 'ساعد Tribly AI في تحسين توصياته وجعل كل اتصال أفضل.',
    
    // Cities & Communities
    'cities-title': 'المدن',
    'cities-desc': '* يمكنك استخدام Tribly من أي مكان ولكن ميزة الالتقاء متاحة حالياً فقط في الإسكندرية، مصر *',
    'trusted-title': 'موثوق به من قبل المجتمعات',
    
    // Auth Pages
    'login-title': 'دخول',
    'login-desc': 'أدخل بيانات اعتمادك للدخول إلى حسابك',
    'signup-title': 'إنشاء حساب',
    'signup-desc': 'انضم إلى Tribly وابدأ رحلتك',
    'email': 'البريد الإلكتروني',
    'password': 'كلمة المرور',
    'confirm-password': 'تأكيد كلمة المرور',
    'submit': 'إرسال',
    'remember-me': 'تذكرني',
    'forgot-password': 'هل نسيت كلمة المرور؟',
    'signup-link': 'لا تملك حساباً؟ إنشاء واحد',
    'login-link': 'هل لديك حساب بالفعل؟ دخول',
    
    // About
    'about-title': 'عن Tribly',
    'about-desc': 'اكتشف المزيد عن مهمتنا ورؤيتنا',
    
    // Contact
    'contact-title': 'اتصل بنا',
    'contact-desc': 'نحن هنا للإجابة على أسئلتك',
    'name': 'الاسم',
    'message': 'الرسالة',
    'send': 'إرسال',
    
    // FAQ
    'faq-title': 'الأسئلة الشائعة',
    'faq-desc': 'إجابات على أسئلتك الشائعة',
    
    // Footer
    'footer-product': 'المنتج',
    'footer-company': 'الشركة',
    'footer-support': 'الدعم',
    'footer-legal': 'القانوني',
    'footer-home': 'الرئيسية',
    'footer-blog': 'المدونة',
    'footer-privacy': 'سياسة الخصوصية',
    'footer-terms': 'شروط الخدمة',
  },
  
  en: {
    // Navigation
    'nav-how': 'How It Works',
    'nav-about': 'About',
    'nav-app': 'Get The App',
    'nav-manifesto': 'Manifesto',
    'nav-join': 'Join',
    'nav-login': 'Login',
    'nav-communities': 'Communities',
    'nav-contact': 'Contact',
    'nav-faq': 'FAQ',
    'nav-support': 'Support',
    'nav-profile': 'Profile',
    
    // Hero
    'hero-title-1': 'Find Your',
    'hero-title-2': 'Tribe',
    'hero-title-3': 'Anywhere',
    'hero-desc': 'Find community and the people you click with closest to you. Your next magical connection is just a click away.',
    'hero-login': 'Login',
    'hero-waitlist': 'Join Waitlist',
    'hero-invite': 'Got An Invitation Code?',
    
    // How It Works
    'how-title': 'How Does It Work?',
    'card-1-title': 'Join Tribly',
    'card-1-desc': 'Subscribe to Tribly and join our growing community.',
    'card-2-title': 'Fill in your interests',
    'card-2-desc': 'Tell us what you love, and we\'ll do the rest.',
    'card-3-title': 'Get Recommendations',
    'card-3-desc': 'Tribly AI will suggest communities to join and activities to enjoy in person',
    'card-4-title': 'Meet IRL',
    'card-4-desc': 'Go out and connect with people we\'re sure you\'ll click with.',
    'card-5-title': 'Rate your Experience',
    'card-5-desc': 'Help Tribly AI improve its recommendations and make every connection even better.',
    
    // Cities & Communities
    'cities-title': 'cities',
    'cities-desc': '* You Can use Tribly from Anywhere but the meetup Feature is currently only available in Alexandria, Egypt*',
    'trusted-title': 'Trusted by communities',
    
    // Auth Pages
    'login-title': 'Login',
    'login-desc': 'Enter your credentials to login to your account',
    'signup-title': 'Sign Up',
    'signup-desc': 'Join Tribly and start your journey',
    'email': 'Email',
    'password': 'Password',
    'confirm-password': 'Confirm Password',
    'submit': 'Submit',
    'remember-me': 'Remember Me',
    'forgot-password': 'Forgot Password?',
    'signup-link': 'Don\'t have an account? Sign Up',
    'login-link': 'Already have an account? Login',
    
    // About
    'about-title': 'About Tribly',
    'about-desc': 'Discover more about our mission and vision',
    
    // Contact
    'contact-title': 'Contact Us',
    'contact-desc': 'We are here to answer your questions',
    'name': 'Name',
    'message': 'Message',
    'send': 'Send',
    
    // FAQ
    'faq-title': 'Frequently Asked Questions',
    'faq-desc': 'Answers to your common questions',
    
    // Footer
    'footer-product': 'Product',
    'footer-company': 'Company',
    'footer-support': 'Support',
    'footer-legal': 'Legal',
    'footer-home': 'Home',
    'footer-blog': 'Blog',
    'footer-privacy': 'Privacy Policy',
    'footer-terms': 'Terms of Service',
  },
  
  fr: {
    // Navigation
    'nav-how': 'Comment ça marche',
    'nav-about': 'À propos',
    'nav-app': 'Obtenir l\'application',
    'nav-manifesto': 'Manifeste',
    'nav-join': 'Rejoindre',
    'nav-login': 'Connexion',
    'nav-communities': 'Communautés',
    'nav-contact': 'Contact',
    'nav-faq': 'FAQ',
    'nav-support': 'Support',
    'nav-profile': 'Profil',
    
    // Hero
    'hero-title-1': 'Trouvez Votre',
    'hero-title-2': 'Tribu',
    'hero-title-3': 'N\'importe Où',
    'hero-desc': 'Trouvez une communauté et les personnes avec lesquelles vous avez une affinité près de chez vous. Votre prochain contact magique n\'est qu\'à un clic.',
    'hero-login': 'Connexion',
    'hero-waitlist': 'Rejoindre la liste d\'attente',
    'hero-invite': 'Avez-vous un code d\'invitation?',
    
    // How It Works
    'how-title': 'Comment ça marche?',
    'card-1-title': 'Rejoignez Tribly',
    'card-1-desc': 'Abonnez-vous à Tribly et rejoignez notre communauté en croissance.',
    'card-2-title': 'Remplissez vos intérêts',
    'card-2-desc': 'Dites-nous ce que vous aimez, et nous ferons le reste.',
    'card-3-title': 'Obtenir les recommandations',
    'card-3-desc': 'L\'IA Tribly vous suggérera des communautés à rejoindre et des activités à profiter en personne',
    'card-4-title': 'Se rencontrer en personne',
    'card-4-desc': 'Sortez et connectez-vous avec des personnes avec lesquelles nous sommes sûrs que vous allez bien vous entendre.',
    'card-5-title': 'Évaluez votre expérience',
    'card-5-desc': 'Aidez l\'IA Tribly à améliorer ses recommandations et à rendre chaque connexion encore meilleure.',
    
    // Cities & Communities
    'cities-title': 'Villes',
    'cities-desc': '* Vous pouvez utiliser Tribly de n\'importe où, mais la fonctionnalité de rencontre est actuellement disponible uniquement à Alexandrie, Égypte *',
    'trusted-title': 'Approuvé par les communautés',
    
    // Auth Pages
    'login-title': 'Connexion',
    'login-desc': 'Entrez vos identifiants pour vous connecter',
    'signup-title': 'S\'inscrire',
    'signup-desc': 'Rejoignez Tribly et commencez votre voyage',
    'email': 'Email',
    'password': 'Mot de passe',
    'confirm-password': 'Confirmer le mot de passe',
    'submit': 'Soumettre',
    'remember-me': 'Se souvenir de moi',
    'forgot-password': 'Mot de passe oublié?',
    'signup-link': 'Vous n\'avez pas de compte? S\'inscrire',
    'login-link': 'Vous avez déjà un compte? Connexion',
    
    // About
    'about-title': 'À propos de Tribly',
    'about-desc': 'Découvrez plus sur notre mission et notre vision',
    
    // Contact
    'contact-title': 'Nous Contacter',
    'contact-desc': 'Nous sommes ici pour répondre à vos questions',
    'name': 'Nom',
    'message': 'Message',
    'send': 'Envoyer',
    
    // FAQ
    'faq-title': 'Questions Fréquemment Posées',
    'faq-desc': 'Réponses à vos questions courantes',
    
    // Footer
    'footer-product': 'Produit',
    'footer-company': 'Entreprise',
    'footer-support': 'Support',
    'footer-legal': 'Juridique',
    'footer-home': 'Accueil',
    'footer-blog': 'Blog',
    'footer-privacy': 'Politique de Confidentialité',
    'footer-terms': 'Conditions d\'Utilisation',
  }
};

// Function to get translation
function t(key, lang = null) {
  const currentLang = lang || localStorage.getItem('language') || 'ar';
  return translations[currentLang]?.[key] || key;
}

// Initialize language switcher and apply translations
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.querySelector('.lang-toggle');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-option');
  const currentLangSpan = document.getElementById('currentLang');
  
  // تحميل اللغة المحفوظة من localStorage
  const savedLang = localStorage.getItem('language') || 'ar';
  changeLanguage(savedLang);
  
  // Toggle dropdown عند الضغط على الزر
  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.style.display = langDropdown.style.display === 'none' ? 'block' : 'none';
    });
  }
  
  // إغلاق dropdown عند الضغط خارجه
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#languageSwitcher')) {
      if (langDropdown) {
        langDropdown.style.display = 'none';
      }
    }
  });
  
  // معالجة اختيار اللغة
  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      localStorage.setItem('language', lang);
      changeLanguage(lang);
      if (langDropdown) {
        langDropdown.style.display = 'none';
      }
    });
    
    // تأثير عند التمرير
    option.addEventListener('mouseover', () => {
      option.style.background = '#6ae44d';
      option.style.color = '#000';
    });
    
    option.addEventListener('mouseout', () => {
      const lang = option.getAttribute('data-lang');
      if (localStorage.getItem('language') === lang) {
        option.style.background = '#f5f5f5';
      } else {
        option.style.background = '#fff';
      }
      option.style.color = '#000';
    });
  });
  
  function changeLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث نص الزر الرئيسي
    const langNames = {
      ar: 'العربية',
      en: 'English',
      fr: 'Français'
    };
    if (currentLangSpan) {
      currentLangSpan.textContent = langNames[lang];
    }
    
    // تحديث خلفية الخيار النشط
    langOptions.forEach(option => {
      if (option.getAttribute('data-lang') === lang) {
        option.style.background = '#f5f5f5';
      } else {
        option.style.background = '#fff';
      }
    });
    
    // تطبيق الترجمات
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key, lang);
    });
  }
});
