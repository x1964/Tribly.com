# دليل إعداد Firebase الكامل - Tribly

## 🚀 خطوات الإعداد السريع

### الخطوة 1: إنشاء مشروع Firebase
1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. انقر على **"Create Project"** أو **"إضافة مشروع"**
3. أدخل اسم المشروع: `tribly-app`
4. اختر الدول التي تخدمها، ثم انقر **Continue**
5. تجاهل Google Analytics (يمكنك تفعيله لاحقاً)
6. انقر **Create Project**

### الخطوة 2: تفعيل خدمات Firebase

#### تفعيل Realtime Database:
1. من لوحة التحكم الرئيسية، اذهب إلى **Build** > **Realtime Database**
2. انقر على **Create Database**
3. اختر الموقع الأقرب لك (مثلاً: `europe-west1`)
4. في النافذة المنبثقة، اختر **Start in test mode**
5. انقر **Enable**

#### تفعيل Authentication:
1. اذهب إلى **Build** > **Authentication**
2. انقر على **Get Started**
3. انقر على **Email/Password**
4. فعّل **Email/Password** بالنقر على الزر
5. انقر **Save**

#### تفعيل Cloud Storage (اختياري):
1. اذهب إلى **Build** > **Storage**
2. انقر على **Get Started**
3. اختر الموقع الأقرب لك
4. اختر **Start in test mode**
5. انقر **Create**

### الخطوة 3: الحصول على مفاتيح المشروع

1. في Firebase Console، انقر على **⚙️ (Project Settings)** أعلى يسار الشاشة
2. اختر تبويب **General** (عام)
3. ابحث عن قسم **Your apps** وانقر على رمز `</>`
4. إذا لم تضف تطبيق ويب بعد، انقر على الزر الأول
5. أدخل اسم التطبيق: `Tribly Web`
6. انقر **Register app**
7. انسخ كود الإعداد الكامل الذي يظهر

### الخطوة 4: تحديث ملف Configuration

افتح [js/firebase-init.js](js/firebase-init.js) واستبدل المتغيرات التالية بالقيم من الخطوة السابقة:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",              // من Firebase Console
    authDomain: "YOUR_AUTH_DOMAIN",      // مثل: tribly-app.firebaseapp.com
    projectId: "YOUR_PROJECT_ID",        // مثل: tribly-app
    storageBucket: "YOUR_STORAGE_BUCKET", // مثل: tribly-app.appspot.com
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID",
    databaseURL: "YOUR_DATABASE_URL"     // مثل: https://tribly-app.firebaseio.com
};
```

### الخطوة 5: إعداد قواعد أمان قاعدة البيانات

1. في Firebase Console، اذهب إلى **Build** > **Realtime Database**
2. انقر على تبويب **Rules** (القواعد)
3. استبدل القواعس الحالية برمز:

```json
{
  "rules": {
    ".read": false,
    ".write": false,
    
    "waitlist": {
      ".read": true,
      "$uid": {
        ".read": "auth != null",
        ".write": "auth != null && auth.uid == $uid",
        ".validate": "newData.hasChildren(['email', 'queueNumber', 'timestamp'])"
      }
    },
    
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && auth.uid == $uid",
        ".validate": "newData.hasChildren(['email', 'name'])"
      }
    },
    
    "communities": {
      ".read": true,
      "$communityId": {
        ".write": "auth != null"
      }
    },
    
    "stats": {
      ".read": true,
      ".write": false
    }
  }
}
```

4. انقر **Publish**

### الخطوة 6: اختبار الاتصال

1. افتح صفحة المشروع في المتصفح
2. افتح **Developer Console** (F12 أو Right-click > Inspect)
3. اذهب إلى تبويب **Console**
4. يجب أن ترى رسالة: `✅ Firebase initialized successfully`
5. إذا رأيت خطأ، تأكد من:
   - المفاتيح صحيحة في [js/firebase-init.js](js/firebase-init.js)
   - قاعدة البيانات مُفعّلة
   - Authentication مُفعّل

---

## 📊 هيكل قاعدة البيانات

### جدول Waitlist (قائمة الانتظار):
```
/waitlist/
├── user_12345678_abc123
│   ├── email: "user@example.com"
│   ├── queueNumber: 1001
│   ├── registrationDate: "21 يناير 2026"
│   ├── timestamp: "2026-01-21T10:30:00Z"
│   ├── priority: "عادية" | "عالية"
│   ├── status: "في الانتظار" | "موافق عليه" | "مرفوض"
│   ├── referralCount: 0
│   ├── notified: false
│   └── shares
│       ├── whatsapp: 0
│       ├── twitter: 0
│       ├── facebook: 0
│       └── email: 0
└── user_12345679_def456
    └── ... (نفس الهيكل)
```

### جدول Users (الملفات الشخصية):
```
/users/
├── auth_uid_123456
│   ├── email: "user@example.com"
│   ├── name: "اسم المستخدم"
│   ├── phoneNumber: "+966501234567"
│   ├── bio: "نبذة شخصية"
│   ├── avatar: "https://..."
│   ├── interests: ["اهتمام1", "اهتمام2"]
│   ├── location: "الرياض"
│   ├── createdAt: "2026-01-21T10:30:00Z"
│   └── lastUpdated: "2026-01-21T10:30:00Z"
└── auth_uid_234567
    └── ... (نفس الهيكل)
```

### جدول Communities (المجتمعات):
```
/communities/
├── community_001
│   ├── name: "اسم المجتمع"
│   ├── description: "وصف المجتمع"
│   ├── creator: "auth_uid"
│   ├── members: {"uid1": true, "uid2": true}
│   ├── createdAt: "2026-01-21"
│   └── icon: "https://..."
└── community_002
    └── ... (نفس الهيكل)
```

---

## 🔧 استخدام Firebase في الكود

### مثال 1: التسجيل في قائمة الانتظار:
```javascript
import { addUser } from './js/firebase-utils.js';

const newUser = await addUser({
    email: 'user@example.com',
    queueNumber: 1001,
    timestamp: new Date().toISOString()
});

console.log('User registered:', newUser);
```

### مثال 2: الحصول على بيانات المستخدم:
```javascript
import { getUser } from './js/firebase-utils.js';

const userData = await getUser('user_email@example.com');
console.log('User data:', userData);
```

### مثال 3: إنشاء مجتمع:
```javascript
import { createCommunity } from './js/firebase-utils.js';

const community = await createCommunity({
    name: 'مجتمعي',
    description: 'وصف المجتمع',
    creator: 'auth_uid'
});

console.log('Community created:', community);
```

---

## 🛡️ نصائح الأمان المهمة

1. **لا تشارك المفاتيح العامة**: ملف `firebase-init.js` يحتوي على مفاتيح عامة آمنة فقط
2. **استخدم القواعد**: قواعس Realtime Database تحمي بيانات المستخدمين
3. **تجنب البيانات الحساسة**: لا تخزن كلمات المرور أو المعلومات الحساسة في Firebase
4. **مراقب الاستخدام**: راقب استخدامك الشهري في Firebase Console لتجنب تجاوز الحد المجاني

---

## 📞 حل المشاكل الشائعة

### المشكلة: "Firebase is not defined"
**الحل**: تأكد من تحميل Firebase SDK قبل ملف `firebase-init.js`:
```html
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"></script>
<script src="js/firebase-init.js"></script>
```

### المشكلة: "Permission denied" عند الكتابة إلى قاعدة البيانات
**الحل**: تحقق من قواعس Realtime Database - قد تحتاج إلى تفعيل الكتابة للمستخدمين المصرح لهم

### المشكلة: البيانات لا تظهر
**الحل**:
1. تأكد من وجود بيانات في Firebase Console
2. تحقق من المسار الصحيح في الكود
3. افحص Console في Developer Tools للأخطاء

---

## 🚀 الخطوات التالية

1. ✅ إعداد Firebase
2. ✅ إضافة قواعد الأمان
3. ⬜ تحديث جميع الصفحات لاستخدام Firebase
4. ⬜ اختبار الميزات المختلفة
5. ⬜ نشر الموقع للإنتاج

---

## 📚 مراجع إضافية

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)

