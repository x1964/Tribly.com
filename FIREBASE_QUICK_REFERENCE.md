# 🔥 Firebase Quick Reference - مرجع سريع Firebase

## 📋 جدول المحتويات
1. [التهيئة والإعداد](#التهيئة-والإعداد)
2. [الدوال المتاحة](#الدوال-المتاحة)
3. [أمثلة عملية](#أمثلة-عملية)
4. [مشاكل شائعة وحلولها](#مشاكل-شائعة-وحلولها)

---

## التهيئة والإعداد

### 1. تأكد من وجود Firebase SDK في HTML
```html
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"></script>
<script src="js/firebase-init.js"></script>
```

### 2. تحديث المفاتيح في firebase-init.js
```javascript
const firebaseConfig = {
    apiKey: "YOUR_KEY_HERE",
    authDomain: "tribly-app.firebaseapp.com",
    projectId: "tribly-app",
    storageBucket: "tribly-app.appspot.com",
    messagingSenderId: "YOUR_ID_HERE",
    appId: "YOUR_APP_ID",
    databaseURL: "https://tribly-app.firebaseio.com"
};
```

### 3. التحقق من الاتصال
افتح Console وتحقق من الرسالة:
```
✅ Firebase initialized successfully
```

---

## الدوال المتاحة

### قائمة الانتظار (Waitlist)

#### `addToWaitlist(email)`
إضافة مستخدم إلى قائمة الانتظار

**المعاملات:**
- `email` (string): البريد الإلكتروني للمستخدم

**الإرجاع:** 
- كائن المستخدم مع رقم الانتظار

**مثال:**
```javascript
const user = await addToWaitlist('user@example.com');
console.log('رقم الانتظار:', user.queueNumber);
```

#### `getWaitlistPosition(email)`
الحصول على موضع المستخدم في قائمة الانتظار

**المعاملات:**
- `email` (string): البريد الإلكتروني

**الإرجاع:**
- كائن يحتوي على الموضع وبيانات الحساب

**مثال:**
```javascript
const position = await getWaitlistPosition('user@example.com');
console.log('موضعك:', position.position);
```

---

### حسابات المستخدمين (Users)

#### `createUserProfile(email, password, profileData)`
إنشاء حساب مستخدم جديد

**المعاملات:**
```javascript
{
    email: "user@example.com",
    password: "password123",
    profileData: {
        name: "اسم المستخدم",
        phoneNumber: "+966123456789",
        bio: "نبذة شخصية",
        avatar: "url",
        interests: ["اهتمام1", "اهتمام2"],
        location: "الرياض"
    }
}
```

**الإرجاع:** كائن ملف المستخدم

**مثال:**
```javascript
const user = await createUserProfile(
    'user@example.com',
    'password123',
    {
        name: 'أحمد محمود',
        location: 'الرياض'
    }
);
```

#### `loginUser(email, password)`
تسجيل دخول المستخدم

**مثال:**
```javascript
const user = await loginUser('user@example.com', 'password123');
if (user) {
    console.log('مرحباً بـ', user.name);
}
```

#### `logoutUser()`
تسجيل خروج المستخدم

**مثال:**
```javascript
await logoutUser();
console.log('تم تسجيل الخروج');
```

#### `updateUserProfile(uid, updates)`
تحديث بيانات المستخدم

**مثال:**
```javascript
await updateUserProfile(uid, {
    bio: 'البيو الجديد',
    interests: ['برمجة', 'تقنية']
});
```

#### `getUserProfile(uid)`
الحصول على بيانات المستخدم

**مثال:**
```javascript
const profile = await getUserProfile(userId);
console.log('الاسم:', profile.name);
```

#### `getCurrentUser()`
الحصول على المستخدم الحالي المسجل دخول

**مثال:**
```javascript
const user = getCurrentUser();
if (user) {
    console.log('معرف المستخدم:', user.uid);
}
```

#### `onAuthStateChanged(callback)`
مراقبة حالة تسجيل الدخول

**مثال:**
```javascript
onAuthStateChanged((user) => {
    if (user) {
        console.log('المستخدم مسجل دخول');
    } else {
        console.log('المستخدم غير مسجل دخول');
    }
});
```

---

### المجتمعات (Communities)

#### `createCommunity(communityData, creatorUid)`
إنشاء مجتمع جديد

**المعاملات:**
```javascript
{
    communityData: {
        name: "اسم المجتمع",
        description: "وصف المجتمع",
        icon: "emoji",
        banner: "url"
    },
    creatorUid: "uid"
}
```

**مثال:**
```javascript
const community = await createCommunity({
    name: 'مجتمع البرمجة',
    description: 'لمحبي البرمجة والتقنية',
    icon: '💻'
}, currentUserId);
```

#### `joinCommunity(communityId, userUid)`
الانضمام إلى مجتمع

**مثال:**
```javascript
await joinCommunity('community_123', userId);
console.log('تم الانضمام إلى المجتمع');
```

#### `getAllCommunities()`
الحصول على قائمة المجتمعات

**مثال:**
```javascript
const communities = await getAllCommunities();
communities.forEach(community => {
    console.log(community.name);
});
```

---

### أدوات عامة

#### `isFirebaseReady()`
التحقق من جاهزية Firebase

**مثال:**
```javascript
if (isFirebaseReady()) {
    console.log('Firebase جاهز');
}
```

#### `checkFirebaseReady()`
فحص جاهزية Firebase مع رسالة تنبيه

**مثال:**
```javascript
if (!checkFirebaseReady()) {
    console.warn('Firebase لم يتم تحميله بعد');
}
```

---

## أمثلة عملية

### مثال 1: نموذج التسجيل في قائمة الانتظار

```html
<form id="waitlistForm">
    <input type="email" id="email" placeholder="بريدك الإلكتروني">
    <button type="submit">انضم إلى قائمة الانتظار</button>
    <p id="result"></p>
</form>

<script>
document.getElementById('waitlistForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    
    try {
        const result = await addToWaitlist(email);
        if (result) {
            document.getElementById('result').textContent = 
                `✅ تم التسجيل! رقم الانتظار: ${result.queueNumber}`;
        }
    } catch (error) {
        document.getElementById('result').textContent = 
            `❌ خطأ: ${error.message}`;
    }
});
</script>
```

### مثال 2: نموذج تسجيل دخول

```javascript
async function handleLogin(email, password) {
    try {
        const user = await loginUser(email, password);
        if (user) {
            console.log('✅ تم تسجيل الدخول:', user.name);
            // إعادة التوجيه
            window.location.href = 'home.html';
        } else {
            alert('❌ بيانات تسجيل الدخول غير صحيحة');
        }
    } catch (error) {
        alert('❌ خطأ: ' + error.message);
    }
}
```

### مثال 3: عرض ملف المستخدم

```javascript
document.addEventListener('DOMContentLoaded', async () => {
    onAuthStateChanged(async (user) => {
        if (user) {
            const profile = await getUserProfile(user.uid);
            
            // عرض البيانات
            document.getElementById('userName').textContent = profile.name;
            document.getElementById('userBio').textContent = profile.bio;
            document.getElementById('userLocation').textContent = profile.location;
            
            // عرض الاهتمامات
            const interestsHtml = profile.interests
                .map(i => `<span class="tag">${i}</span>`)
                .join('');
            document.getElementById('interests').innerHTML = interestsHtml;
        } else {
            window.location.href = 'login.html';
        }
    });
});
```

### مثال 4: إنشاء مجتمع جديد

```javascript
async function createNewCommunity() {
    const name = document.getElementById('communityName').value;
    const description = document.getElementById('communityDesc').value;
    const icon = document.getElementById('communityIcon').value;
    
    const currentUser = getCurrentUser();
    
    const community = await createCommunity({
        name,
        description,
        icon
    }, currentUser.uid);
    
    if (community) {
        alert(`✅ تم إنشاء المجتمع: ${community.name}`);
        // إعادة التوجيه
        window.location.href = 'communities.html';
    }
}
```

### مثال 5: عرض المجتمعات

```javascript
async function displayCommunities() {
    const communities = await getAllCommunities();
    
    const container = document.getElementById('communitiesList');
    container.innerHTML = communities.map(c => `
        <div class="community-card">
            <h3>${c.icon} ${c.name}</h3>
            <p>${c.description}</p>
            <p>الأعضاء: ${c.memberCount}</p>
            <button onclick="joinCommunity('${c.id}', '${getCurrentUser().uid}')">
                انضم
            </button>
        </div>
    `).join('');
}

displayCommunities();
```

---

## مشاكل شائعة وحلولها

### ❌ Firebase is not defined

**المشكلة:**
```
Uncaught ReferenceError: firebase is not defined
```

**الحل:**
1. تأكد من تحميل Firebase SDK قبل firebase-init.js
2. تحقق من ترتيب السكريبتات:
```html
<!-- صحيح ✅ -->
<script src="firebase-app.js"></script>
<script src="firebase-database.js"></script>
<script src="firebase-auth.js"></script>
<script src="js/firebase-init.js"></script> <!-- آخر شيء -->
```

### ❌ Permission denied

**المشكلة:**
```
Error: Permission denied
```

**الحل:**
1. اذهب إلى Firebase Console
2. افتح Realtime Database > Rules
3. أضف قواعس الأمان الصحيحة
4. اضغط Publish

### ❌ User not found

**المشكلة:**
```
Error: There is no user record
```

**الحل:**
استخدم `createUserProfile` أولاً قبل `loginUser`:
```javascript
// أولاً: إنشاء الحساب
await createUserProfile(email, password, profileData);

// ثانياً: تسجيل الدخول
await loginUser(email, password);
```

### ❌ Empty response from database

**المشكلة:**
```
null أو undefined
```

**الحل:**
1. تحقق من وجود البيانات في Firebase Console
2. تحقق من المسار الصحيح
3. تحقق من قواعس الأمان (الوصول للقراءة يجب أن يكون مفعلاً)

### ⚠️ الاتصال بطيء

**الحل:**
- استخدم `.once('value')` بدلاً من `.on('value')` عند الحاجة لقراءة واحدة
- استخدم البحث بحسب معايير محددة للبيانات الكبيرة
- استخدم localStorage كنسخة احتياطية

---

## 📚 موارد إضافية

- [Firebase Documentation](https://firebase.google.com/docs)
- [Realtime Database Guide](https://firebase.google.com/docs/database)
- [Authentication Guide](https://firebase.google.com/docs/auth)
- [Security Rules](https://firebase.google.com/docs/database/security)

---

**آخر تحديث**: 21 يناير 2026
**الإصدار**: 1.0.0
**الحالة**: ✅ جاهز للاستخدام
