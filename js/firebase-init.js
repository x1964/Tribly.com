// Firebase Configuration - أضف مفاتيح مشروعك هنا
const firebaseConfig = {
    apiKey: "AIzaSyD_REPLACE_WITH_YOUR_API_KEY",
    authDomain: "tribly-app.firebaseapp.com",
    projectId: "tribly-app",
    storageBucket: "tribly-app.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID",
    databaseURL: "https://tribly-app.firebaseio.com"
};

// Initialize Firebase
let db = null;
let auth = null;
let isFirebaseReady = false;

if (typeof firebase !== 'undefined') {
    try {
        firebase.initializeApp(firebaseConfig);
        db = firebase.database();
        auth = firebase.auth();
        isFirebaseReady = true;
        console.log('✅ Firebase initialized successfully');
    } catch (error) {
        console.error('❌ Firebase initialization error:', error);
    }
} else {
    console.warn('⚠️ Firebase SDK not loaded. Please include Firebase scripts in your HTML.');
}

// Firebase Helper Functions - دوال مساعدة

/**
 * التحقق من جاهزية Firebase
 */
function checkFirebaseReady() {
    if (!isFirebaseReady) {
        console.warn('Firebase is not ready yet');
        return false;
    }
    return true;
}

/**
 * إضافة مستخدم إلى قائمة الانتظار
 */
async function addToWaitlist(email) {
    if (!checkFirebaseReady()) return null;
    
    try {
        const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const userData = {
            email: email,
            queueNumber: Math.floor(Math.random() * 9000) + 1000,
            registrationDate: new Date().toLocaleDateString('ar-EG'),
            timestamp: new Date().toISOString(),
            priority: 'عادية',
            status: 'في الانتظار',
            referralCount: 0,
            notified: false,
            shares: {
                whatsapp: 0,
                twitter: 0,
                facebook: 0,
                email: 0
            }
        };
        
        await db.ref(`waitlist/${userId}`).set(userData);
        
        // Save to localStorage as backup
        localStorage.setItem('userId', userId);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('queueNumber', userData.queueNumber);
        
        console.log('✅ User added to waitlist:', userId);
        return { id: userId, ...userData };
    } catch (error) {
        console.error('❌ Error adding to waitlist:', error);
        return null;
    }
}

/**
 * الحصول على موضع المستخدم في قائمة الانتظار
 */
async function getWaitlistPosition(email) {
    if (!checkFirebaseReady()) return null;
    
    try {
        const snapshot = await db.ref('waitlist').orderByChild('email').equalTo(email).once('value');
        const data = snapshot.val();
        
        if (!data) return null;
        
        const userEntry = Object.entries(data)[0];
        const userId = userEntry[0];
        const queueNumber = userEntry[1].queueNumber;
        
        // Count users with lower queue number
        const allUsers = await db.ref('waitlist').once('value');
        const allData = allUsers.val();
        
        let position = 1;
        if (allData) {
            for (const [key, user] of Object.entries(allData)) {
                if (user.queueNumber < queueNumber) {
                    position++;
                }
            }
        }
        
        return {
            position: position,
            queueNumber: queueNumber,
            userId: userId,
            ...userEntry[1]
        };
    } catch (error) {
        console.error('❌ Error getting waitlist position:', error);
        return null;
    }
}

/**
 * إنشاء حساب مستخدم جديد
 */
async function createUserProfile(email, password, profileData) {
    if (!checkFirebaseReady()) return null;
    
    try {
        // Create authentication user
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const uid = userCredential.user.uid;
        
        // Save profile to database
        const userProfile = {
            uid: uid,
            email: email,
            name: profileData.name || '',
            phoneNumber: profileData.phoneNumber || '',
            bio: profileData.bio || '',
            avatar: profileData.avatar || '',
            interests: profileData.interests || [],
            location: profileData.location || '',
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString()
        };
        
        await db.ref(`users/${uid}`).set(userProfile);
        
        console.log('✅ User profile created:', uid);
        return userProfile;
    } catch (error) {
        console.error('❌ Error creating user profile:', error);
        return null;
    }
}

/**
 * تسجيل الدخول
 */
async function loginUser(email, password) {
    if (!checkFirebaseReady()) return null;
    
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const uid = userCredential.user.uid;
        
        // Get user profile
        const snapshot = await db.ref(`users/${uid}`).once('value');
        const userProfile = snapshot.val();
        
        console.log('✅ User logged in:', uid);
        return userProfile;
    } catch (error) {
        console.error('❌ Error logging in:', error);
        return null;
    }
}

/**
 * تحديث ملف المستخدم
 */
async function updateUserProfile(uid, updates) {
    if (!checkFirebaseReady()) return null;
    
    try {
        updates.lastUpdated = new Date().toISOString();
        await db.ref(`users/${uid}`).update(updates);
        
        console.log('✅ User profile updated:', uid);
        return updates;
    } catch (error) {
        console.error('❌ Error updating user profile:', error);
        return null;
    }
}

/**
 * الحصول على ملف المستخدم
 */
async function getUserProfile(uid) {
    if (!checkFirebaseReady()) return null;
    
    try {
        const snapshot = await db.ref(`users/${uid}`).once('value');
        return snapshot.val();
    } catch (error) {
        console.error('❌ Error getting user profile:', error);
        return null;
    }
}

/**
 * إنشاء مجتمع جديد
 */
async function createCommunity(communityData, creatorUid) {
    if (!checkFirebaseReady()) return null;
    
    try {
        const communityId = `community_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const community = {
            id: communityId,
            name: communityData.name,
            description: communityData.description || '',
            creator: creatorUid,
            members: { [creatorUid]: true },
            memberCount: 1,
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
            icon: communityData.icon || '',
            banner: communityData.banner || ''
        };
        
        await db.ref(`communities/${communityId}`).set(community);
        
        console.log('✅ Community created:', communityId);
        return community;
    } catch (error) {
        console.error('❌ Error creating community:', error);
        return null;
    }
}

/**
 * الانضمام إلى مجتمع
 */
async function joinCommunity(communityId, userUid) {
    if (!checkFirebaseReady()) return null;
    
    try {
        await db.ref(`communities/${communityId}/members/${userUid}`).set(true);
        
        // Increment member count
        const snapshot = await db.ref(`communities/${communityId}/memberCount`).once('value');
        const currentCount = snapshot.val() || 0;
        await db.ref(`communities/${communityId}/memberCount`).set(currentCount + 1);
        
        console.log('✅ User joined community:', communityId);
        return true;
    } catch (error) {
        console.error('❌ Error joining community:', error);
        return false;
    }
}

/**
 * الحصول على قائمة المجتمعات
 */
async function getAllCommunities() {
    if (!checkFirebaseReady()) return [];
    
    try {
        const snapshot = await db.ref('communities').once('value');
        const data = snapshot.val();
        
        if (!data) return [];
        
        return Object.values(data);
    } catch (error) {
        console.error('❌ Error getting communities:', error);
        return [];
    }
}

/**
 * تسجيل الخروج
 */
async function logoutUser() {
    if (!checkFirebaseReady()) return false;
    
    try {
        await auth.signOut();
        console.log('✅ User logged out');
        return true;
    } catch (error) {
        console.error('❌ Error logging out:', error);
        return false;
    }
}

/**
 * الحصول على المستخدم الحالي
 */
function getCurrentUser() {
    if (!checkFirebaseReady()) return null;
    return auth.currentUser;
}

/**
 * مراقبة حالة المستخدم
 */
function onAuthStateChanged(callback) {
    if (!checkFirebaseReady()) return null;
    return auth.onAuthStateChanged(callback);
}

/**
 * الحصول على جميع مستخدمي قائمة الانتظار
 */
async function getAllWaitlistUsers() {
    if (!checkFirebaseReady()) return [];
    
    try {
        const snapshot = await db.ref('waitlist').once('value');
        const data = snapshot.val();
        
        if (!data) return [];
        
        // تحويل البيانات إلى مصفوفة وترتيبها حسب رقم الانتظار
        const users = Object.entries(data).map(([id, user]) => ({
            id: id,
            ...user
        })).sort((a, b) => a.queueNumber - b.queueNumber);
        
        console.log('✅ Got all waitlist users:', users.length);
        return users;
    } catch (error) {
        console.error('❌ Error getting waitlist users:', error);
        return [];
    }
}

/**
 * الحصول على إحصائيات قائمة الانتظار
 */
async function getWaitlistStats() {
    if (!checkFirebaseReady()) return null;
    
    try {
        const waitlist = await getAllWaitlistUsers();
        
        const stats = {
            total: waitlist.length,
            pending: waitlist.filter(u => u.status === 'في الانتظار').length,
            approved: waitlist.filter(u => u.status === 'موافق عليه').length,
            rejected: waitlist.filter(u => u.status === 'مرفوض').length,
            highPriority: waitlist.filter(u => u.priority === 'عالية').length,
            normalPriority: waitlist.filter(u => u.priority === 'عادية').length
        };
        
        console.log('✅ Waitlist stats:', stats);
        return stats;
    } catch (error) {
        console.error('❌ Error getting waitlist stats:', error);
        return null;
    }
}

/**
 * الحصول على إحصائيات المستخدمين
 */
async function getUserStats() {
    if (!checkFirebaseReady()) return null;
    
    try {
        const snapshot = await db.ref('users').once('value');
        const data = snapshot.val();
        
        if (!data) {
            return {
                total: 0,
                verified: 0,
                active: 0,
                inactive: 0
            };
        }
        
        const users = Object.values(data);
        const stats = {
            total: users.length,
            verified: users.filter(u => u.verified).length,
            active: users.filter(u => u.lastActive && Date.now() - new Date(u.lastActive).getTime() < 86400000).length,
            inactive: users.filter(u => !u.lastActive || Date.now() - new Date(u.lastActive).getTime() >= 86400000).length
        };
        
        console.log('✅ User stats:', stats);
        return stats;
    } catch (error) {
        console.error('❌ Error getting user stats:', error);
        return null;
    }
}

/**
 * الحصول على آخر المستخدمين المسجلين
 */
async function getRecentUsers(limit = 5) {
    if (!checkFirebaseReady()) return [];
    
    try {
        const snapshot = await db.ref('users').orderByChild('createdAt').once('value');
        const data = snapshot.val();
        
        if (!data) return [];
        
        const users = Object.entries(data).map(([id, user]) => ({
            id: id,
            ...user
        })).reverse().slice(0, limit);
        
        console.log('✅ Got recent users:', users.length);
        return users;
    } catch (error) {
        console.error('❌ Error getting recent users:', error);
        return [];
    }
}

/**
 * تحديث حالة مستخدم في قائمة الانتظار
 */
async function updateWaitlistUserStatus(userId, status) {
    if (!checkFirebaseReady()) return false;
    
    try {
        await db.ref(`waitlist/${userId}/status`).set(status);
        console.log('✅ Updated user status:', userId, status);
        return true;
    } catch (error) {
        console.error('❌ Error updating user status:', error);
        return false;
    }
}

/**
 * الحصول على عدد المستخدمين النشطين اليوم
 */
async function getActiveTodayCount() {
    if (!checkFirebaseReady()) return 0;
    
    try {
        const today = new Date().toISOString().split('T')[0];
        const snapshot = await db.ref('users').once('value');
        const data = snapshot.val();
        
        if (!data) return 0;
        
        const activeCount = Object.values(data).filter(user => {
            const lastActive = user.lastActive ? new Date(user.lastActive).toISOString().split('T')[0] : null;
            return lastActive === today;
        }).length;
        
        console.log('✅ Active today count:', activeCount);
        return activeCount;
    } catch (error) {
        console.error('❌ Error getting active today count:', error);
        return 0;
    }
}

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isFirebaseReady: () => isFirebaseReady,
        checkFirebaseReady,
        addToWaitlist,
        getWaitlistPosition,
        createUserProfile,
        loginUser,
        logoutUser,
        updateUserProfile,
        getUserProfile,
        createCommunity,
        joinCommunity,
        getAllCommunities,
        getCurrentUser,
        onAuthStateChanged,
        getAllWaitlistUsers,
        getWaitlistStats,
        getUserStats,
        getRecentUsers,
        updateWaitlistUserStatus,
        getActiveTodayCount
    };
}
