# Firebase Setup Guide - دليل إعداد Firebase

## ✅ الخطوات الأساسية

### 1️⃣ إنشاء مشروع Firebase
1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. انقر على "Create Project" (إنشاء مشروع)
3. أدخل اسم المشروع: `tribly-app`
4. قبول الشروط وإنشاء المشروع

### 2️⃣ تفعيل Realtime Database
1. في Firebase Console، انقر على **Realtime Database** من القائمة اليسرى
2. انقر على **Create Database**
3. اختر المنطقة: `europe-west1` (أقرب منطقة لك)
4. ابدأ في وضع الاختبار (Test Mode)

### 3️⃣ إعداد Authentication
1. انقر على **Authentication** من القائمة اليسرى
2. اذهب إلى تبويب **Sign-in method**
3. فعّل **Email/Password** و **Anonymous** إذا لزم الأمر

### 4️⃣ الحصول على مفاتيح المشروع
1. انقر على ⚙️ (Settings) أعلى القائمة اليسرى
2. اذهب إلى **Project settings**
3. في تبويب **General**، انسخ `firebaseConfig`:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID",
    databaseURL: "YOUR_DATABASE_URL"
};
```

### 5️⃣ تحديث firebase.js
أفتح ملف `js/firebase.js` واستبدل `firebaseConfig` بالقيم الحقيقية من خطوة 4.

---

## 📊 هيكل قاعدة البيانات

```
/waitlist
├── user_1234567890_abc123
│   ├── email: "user@example.com"
│   ├── queueNumber: 1001
│   ├── registrationDate: "21 يناير 2026"
│   ├── timestamp: "2026-01-21T10:30:00Z"
│   ├── priority: "عالية" / "عادية"
│   ├── status: "في الانتظار"
│   ├── referralCount: 2
│   ├── notified: false
│   └── shares
│       ├── whatsapp: 1
│       ├── twitter: 0
│       ├── facebook: 1
│       └── email: 0
└── user_1234567891_def456
    └── ... (نفس الهيكل)

/stats
└── completionPercentage: 35
```

---

## 🔐 قواعد أمان Firebase

انسخ هذا في **Realtime Database Rules**:

```json
{
  "rules": {
    "waitlist": {
      ".read": true,
      ".write": false,
      "$uid": {
        ".read": "auth != null",
        ".write": "auth != null && auth.uid == $uid"
      }
    },
    "stats": {
      ".read": true,
      ".write": false
    }
  }
}
```

---

## 🚀 الميزات المتاحة

### ✨ WaitlistManager Class

```javascript
// Register new user
await waitlistManager.registerUser('user@example.com');

// Get user position in queue
await waitlistManager.getUserPosition(queueNumber);

// Track social shares
await waitlistManager.trackShare(userId, 'whatsapp');

// Add referral
await waitlistManager.addReferral(userId);

// Get leaderboard
await waitlistManager.getLeaderboard(10);

// Get queue size
await waitlistManager.getQueueSize();
```

---

## 📱 الحالات المدعومة

### ✅ عند توفر Firebase
- حفظ البيانات في قاعدة البيانات
- حساب رقم الدور التلقائي
- تحديث الأولوية بناءً على المشاركات
- عرض الترتيب في القائمة

### 🔄 في حالة عدم توفر Firebase (Fallback)
- حفظ البيانات في localStorage
- أرقام عشوائية للدور والموقع
- عمل الصفحة بشكل كامل بدون اتصال

---

## 🧪 الاختبار

### 1. بدء الاختبار المحلي
```bash
# إذا كان لديك Python
python -m http.server 8000

# أو استخدم Live Server في VS Code
```

### 2. افتح في المتصفح
```
http://localhost:8000/waitlist.html
```

### 3. جرّب الميزات
- ✅ التسجيل بالبريد الإلكتروني
- ✅ نسخ رقم الدور
- ✅ المشاركة على وسائل التواصل
- ✅ التحقق من البيانات في Firebase Console

---

## 📧 إرسال الإشعارات (اختياري)

### استخدام Firebase Cloud Messaging:

```javascript
// In waitlist.html
messaging.onMessage((payload) => {
    console.log('Message received:', payload);
    alert(payload.notification.body);
});
```

---

## 🆘 استكشاف الأخطاء

### خطأ: "Firebase is not defined"
- تأكد من تحميل Firebase SDK قبل firebase.js
- تحقق من ترتيب السكريبتات في HTML

### خطأ: "PERMISSION_DENIED"
- تحقق من قواعد الأمان في Firebase Console
- تأكد أن المستخدم مصرح له بالقراءة/الكتابة

### عدم ظهور البيانات
- افتح Firebase Console وتحقق من البيانات
- استخدم devTools (F12) لمراجعة Errors

---

## 🔗 الروابط المفيدة

- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Docs](https://firebase.google.com/docs)
- [Realtime Database Guide](https://firebase.google.com/docs/database)
- [Security Rules](https://firebase.google.com/docs/database/security)

---

**التاريخ**: 21 يناير 2026
**الإصدار**: 1.0
**الحالة**: جاهز للاستخدام الفوري ✅
