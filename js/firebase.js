// Firebase Configuration
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
let db, auth;

// Check if Firebase is already loaded
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    auth = firebase.auth();
}

// Waitlist Management Functions
class WaitlistManager {
    constructor() {
        this.userQueue = {};
        this.totalUsers = 0;
    }

    // Register user in waitlist
    async registerUser(email) {
        try {
            // Check if email already exists
            const existingUser = await this.getUserByEmail(email);
            if (existingUser) {
                console.log('User already registered');
                return existingUser;
            }

            // Generate unique queue number
            const queueNumber = await this.generateQueueNumber();
            const timestamp = new Date().toISOString();
            const registrationDate = new Date().toLocaleDateString('ar-EG');

            // Create user object
            const userData = {
                email: email,
                queueNumber: queueNumber,
                registrationDate: registrationDate,
                timestamp: timestamp,
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

            // Save to Firebase
            const userId = this.generateUserId();
            if (db) {
                await db.ref('waitlist/' + userId).set(userData);
            }

            // Save to localStorage as backup
            localStorage.setItem('queueNumber', queueNumber);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('registrationDate', registrationDate);
            localStorage.setItem('userId', userId);

            return { ...userData, id: userId };
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    }

    // Get user by email
    async getUserByEmail(email) {
        try {
            if (!db) {
                // Fallback to localStorage
                const stored = localStorage.getItem('userEmail');
                if (stored === email) {
                    return {
                        email: email,
                        queueNumber: localStorage.getItem('queueNumber'),
                        registrationDate: localStorage.getItem('registrationDate')
                    };
                }
                return null;
            }

            const snapshot = await db.ref('waitlist').orderByChild('email').equalTo(email).once('value');
            const data = snapshot.val();

            if (data) {
                const firstUser = Object.entries(data)[0];
                return { ...firstUser[1], id: firstUser[0] };
            }
            return null;
        } catch (error) {
            console.error('Error getting user:', error);
            return null;
        }
    }

    // Get user position in queue
    async getUserPosition(queueNumber) {
        try {
            if (!db) {
                // Fallback: estimate position
                return Math.floor(Math.random() * 1000) + 245;
            }

            const snapshot = await db.ref('waitlist').orderByChild('queueNumber').once('value');
            const data = snapshot.val();

            if (!data) return null;

            let position = 0;
            for (const [key, user] of Object.entries(data)) {
                if (user.queueNumber < queueNumber) {
                    position++;
                }
            }

            return position;
        } catch (error) {
            console.error('Error getting user position:', error);
            return null;
        }
    }

    // Generate unique queue number
    async generateQueueNumber() {
        try {
            if (!db) {
                // Fallback: random number
                return Math.floor(Math.random() * 4000) + 1000;
            }

            const snapshot = await db.ref('waitlist').once('value');
            const data = snapshot.val();

            let maxQueueNumber = 1000;
            if (data) {
                for (const [key, user] of Object.entries(data)) {
                    if (user.queueNumber > maxQueueNumber) {
                        maxQueueNumber = user.queueNumber;
                    }
                }
            }

            return maxQueueNumber + 1;
        } catch (error) {
            console.error('Error generating queue number:', error);
            return Math.floor(Math.random() * 4000) + 1000;
        }
    }

    // Generate unique user ID
    generateUserId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Update referral count
    async addReferral(userId) {
        try {
            if (db) {
                const snapshot = await db.ref('waitlist/' + userId + '/referralCount').once('value');
                const currentCount = snapshot.val() || 0;
                await db.ref('waitlist/' + userId + '/referralCount').set(currentCount + 1);

                // Update priority if referrals > 3
                if (currentCount + 1 >= 3) {
                    await db.ref('waitlist/' + userId + '/priority').set('عالية');
                }
            } else {
                // Fallback to localStorage
                const current = parseInt(localStorage.getItem('referralCount') || '0');
                localStorage.setItem('referralCount', current + 1);
            }

            return true;
        } catch (error) {
            console.error('Error adding referral:', error);
            return false;
        }
    }

    // Track social shares
    async trackShare(userId, platform) {
        try {
            if (db) {
                const snapshot = await db.ref(`waitlist/${userId}/shares/${platform}`).once('value');
                const currentCount = snapshot.val() || 0;
                await db.ref(`waitlist/${userId}/shares/${platform}`).set(currentCount + 1);
            } else {
                const current = parseInt(localStorage.getItem(`share_${platform}`) || '0');
                localStorage.setItem(`share_${platform}`, current + 1);
            }
            return true;
        } catch (error) {
            console.error('Error tracking share:', error);
            return false;
        }
    }

    // Get user info
    async getUserInfo(userId) {
        try {
            if (!db) {
                return {
                    email: localStorage.getItem('userEmail') || 'example@email.com',
                    queueNumber: localStorage.getItem('queueNumber') || '1245',
                    registrationDate: localStorage.getItem('registrationDate'),
                    priority: 'عادية',
                    referralCount: localStorage.getItem('referralCount') || '0'
                };
            }

            const snapshot = await db.ref('waitlist/' + userId).once('value');
            return snapshot.val();
        } catch (error) {
            console.error('Error getting user info:', error);
            return null;
        }
    }

    // Get leaderboard (top referrers)
    async getLeaderboard(limit = 10) {
        try {
            if (!db) {
                return [];
            }

            const snapshot = await db.ref('waitlist').orderByChild('referralCount').limitToLast(limit).once('value');
            const data = snapshot.val();

            if (!data) return [];

            const leaderboard = [];
            for (const [key, user] of Object.entries(data)) {
                leaderboard.push({
                    email: user.email,
                    referralCount: user.referralCount || 0,
                    priority: user.priority
                });
            }

            return leaderboard.reverse();
        } catch (error) {
            console.error('Error getting leaderboard:', error);
            return [];
        }
    }

    // Get total queue size
    async getQueueSize() {
        try {
            if (!db) {
                return Math.floor(Math.random() * 2000) + 3000;
            }

            const snapshot = await db.ref('waitlist').once('value');
            const data = snapshot.val();
            return data ? Object.keys(data).length : 0;
        } catch (error) {
            console.error('Error getting queue size:', error);
            return 0;
        }
    }

    // Get completion percentage
    async getCompletionPercentage() {
        try {
            if (!db) {
                return Math.floor(Math.random() * 40) + 20;
            }

            const snapshot = await db.ref('stats').once('value');
            const data = snapshot.val();
            return data?.completionPercentage || 35;
        } catch (error) {
            console.error('Error getting completion percentage:', error);
            return 35;
        }
    }
}

// Initialize WaitlistManager
const waitlistManager = new WaitlistManager();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { waitlistManager, WaitlistManager };
}
