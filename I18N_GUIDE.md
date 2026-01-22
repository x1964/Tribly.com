# 🌍 نظام الترجمة الشامل - Tribly i18n System

## مرحباً بك في نظام الترجمة المركزي!

هذا النظام يسمح بترجمة جميع صفحات الموقع بسهولة بـ 3 لغات:
- 🇸🇦 العربية (ar)
- 🇬🇧 الإنجليزية (en)
- 🇫🇷 الفرنسية (fr)

---

## 📋 الاستخدام

### 1. **إضافة ملف i18n.js إلى الصفحة**

```html
<script src="js/i18n.js"></script>
```

### 2. **وضع data-i18n على العناصر**

بدلاً من:
```html
<h1>Join Tribly</h1>
```

استخدم:
```html
<h1 data-i18n="card-1-title">Join Tribly</h1>
```

### 3. **إضافة الـ Language Switcher**

```html
<div id="languageSwitcher" style="position: relative; display: inline-block;">
  <button class="lang-toggle" style="padding: 8px 16px; background: #6ae44d; color: #000; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; transition: all 0.3s; display: flex; align-items: center; gap: 6px;">
    <i class="fas fa-globe"></i>
    <span id="currentLang">العربية</span>
    <i class="fas fa-chevron-down"></i>
  </button>
  <div id="langDropdown" style="position: absolute; top: 100%; right: 0; background: #fff; border: 1px solid #6ae44d; border-radius: 6px; min-width: 150px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: none; z-index: 1000; overflow: hidden;">
    <button class="lang-option" data-lang="ar">🇸🇦 العربية</button>
    <button class="lang-option" data-lang="en">🇬🇧 English</button>
    <button class="lang-option" data-lang="fr">🇫🇷 Français</button>
  </div>
</div>
```

---

## 📝 قائمة المفاتيح المتاحة

### Navigation Keys
- `nav-how` - كيف يعمل
- `nav-about` - حول
- `nav-app` - تحميل التطبيق
- `nav-manifesto` - البيان
- `nav-join` - انضم
- `nav-login` - دخول
- `nav-communities` - المجتمعات
- `nav-contact` - تواصل
- `nav-faq` - الأسئلة الشائعة
- `nav-support` - الدعم
- `nav-profile` - الملف الشخصي

### Hero Section
- `hero-title-1` - ابحث عن
- `hero-title-2` - قبيلتك
- `hero-title-3` - أينما كنت
- `hero-desc` - الوصف
- `hero-login` - دخول
- `hero-waitlist` - انضم لقائمة الانتظار
- `hero-invite` - هل لديك كود دعوة؟

### Cards
- `how-title` - كيف يعمل؟
- `card-1-title` / `card-1-desc` - البطاقة الأولى
- `card-2-title` / `card-2-desc` - البطاقة الثانية
- `card-3-title` / `card-3-desc` - البطاقة الثالثة
- `card-4-title` / `card-4-desc` - البطاقة الرابعة
- `card-5-title` / `card-5-desc` - البطاقة الخامسة

### Cities & Communities
- `cities-title` - المدن
- `cities-desc` - وصف المدن
- `trusted-title` - موثوق به

### Authentication
- `login-title` - عنوان الدخول
- `login-desc` - وصف الدخول
- `signup-title` - عنوان التسجيل
- `signup-desc` - وصف التسجيل
- `email` - البريد الإلكتروني
- `password` - كلمة المرور
- `confirm-password` - تأكيد كلمة المرور
- `submit` - إرسال
- `remember-me` - تذكرني
- `forgot-password` - هل نسيت كلمة المرور؟

### General
- `name` - الاسم
- `message` - الرسالة
- `send` - إرسال
- `contact-title` - اتصل بنا
- `faq-title` - الأسئلة الشائعة

---

## 🔧 إضافة ترجمات جديدة

لإضافة مفاتيح ترجمة جديدة، افتح `js/i18n.js` وأضفها إلى كل لغة:

```javascript
const translations = {
  ar: {
    'your-new-key': 'قيمة النص بالعربية',
  },
  en: {
    'your-new-key': 'English text value',
  },
  fr: {
    'your-new-key': 'Valeur de texte en français',
  }
};
```

---

## 📱 كيفية استخدام الدالة `t()`

يمكن الوصول إلى الترجمات برمجياً باستخدام:

```javascript
// الحصول على الترجمة الحالية
const text = t('nav-join');

// أو تحديد اللغة
const text = t('nav-join', 'en');
```

---

## ✅ معايير التطبيق على جميع الصفحات

### متطلبات كل صفحة:
1. ✅ إضافة `<script src="js/i18n.js"></script>`
2. ✅ وضع `data-i18n="key"` على جميع النصوص التي تحتاج ترجمة
3. ✅ إضافة Language Switcher في الـ navbar
4. ✅ استخدام `html.dir` و `html.lang` للاتجاه واللغة

### الصفحات المراد ترجمتها:
- [ ] index.html ✅ (مترجم بالفعل)
- [ ] login.html
- [ ] signup.html
- [ ] about.html
- [ ] contact-us.html
- [ ] faq.html
- [ ] manifesto.html
- [ ] profile.html
- [ ] communities.html
- [ ] waitlist.html
- [ ] get-app.html
- [ ] support.html

---

## 🎨 تخصيص النمط

يمكنك تخصيص نمط Language Switcher عن طريق تعديل الـ styles في الـ HTML أو CSS.

---

## 📞 التعليمات

للمزيد من المساعدة، تواصل مع فريق التطوير!
