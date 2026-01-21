/**
 * Profile Synchronization Module
 * يقوم بتحديث صور البروفايل عبر جميع الصفحات
 */

class ProfileSync {
  constructor() {
    this.profileImages = document.querySelectorAll('[data-profile-sync]');
    this.avatarKey = 'userAvatar';
    this.initSync();
  }

  /**
   * تهيئة نظام المزامنة
   */
  initSync() {
    // تحميل الصورة عند فتح الصفحة
    this.loadProfileImage();

    // الاستماع للتغييرات في localStorage
    window.addEventListener('storage', () => this.loadProfileImage());

    // الاستماع للحدث المخصص
    window.addEventListener('profileImageUpdated', () => this.loadProfileImage());

    // تحديث الصورة كل 5 ثوانٍ (للتأكد)
    setInterval(() => this.checkAndUpdateImage(), 5000);
  }

  /**
   * تحميل صورة البروفايل من localStorage وتحديث جميع الصور
   */
  loadProfileImage() {
    const savedAvatar = localStorage.getItem(this.avatarKey);
    
    if (savedAvatar) {
      // تحديث جميع صور البروفايل في الصفحة
      const profileImages = document.querySelectorAll('.profile, #profileImg, #homeProfileImg');
      profileImages.forEach(img => {
        if (img && img.src !== savedAvatar) {
          img.src = savedAvatar;
          console.log('✅ تم تحديث صورة البروفايل:', img.id || 'unnamed');
        }
      });

      // تحديث صور البيانات المخصصة
      this.profileImages.forEach(img => {
        if (img.src !== savedAvatar) {
          img.src = savedAvatar;
        }
      });
    }
  }

  /**
   * التحقق من التحديثات تلقائياً
   */
  checkAndUpdateImage() {
    const savedAvatar = localStorage.getItem(this.avatarKey);
    const profileImg = document.querySelector('#profileImg') || 
                       document.querySelector('#homeProfileImg') ||
                       document.querySelector('.profile');

    if (savedAvatar && profileImg && profileImg.src !== savedAvatar) {
      this.loadProfileImage();
    }
  }

  /**
   * حفظ صورة جديدة وتحديث جميع الصفحات
   */
  static saveAndSync(imageData) {
    localStorage.setItem('userAvatar', imageData);
    window.dispatchEvent(new Event('profileImageUpdated'));
    
    // إرسال حدث للصفحات الأخرى
    if (window.opener) {
      window.opener.dispatchEvent(new Event('profileImageUpdated'));
    }
  }

  /**
   * الحصول على صورة البروفايل الحالية
   */
  static getCurrentImage() {
    return localStorage.getItem('userAvatar') || null;
  }
}

// تهيئة المزامنة عند تحميل الصفحة
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.profileSync = new ProfileSync();
  });
} else {
  window.profileSync = new ProfileSync();
}
