// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
  // تهيئة جميع المكونات
  initContactForm();
  initMap();
  initBackToTop();
  initMenu();
  loadProfileImage();
  initValidation();
});

// تهيئة نموذج الاتصال
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('successMessage');
  const errorMsg = document.getElementById('errorMessage');
  
  // تحديث عداد الأحرف
  document.querySelectorAll('input, textarea, select').forEach(input => {
    if (input.id) {
      const counter = document.getElementById(`${input.id}Count`);
      if (counter) {
        input.addEventListener('input', () => {
          const count = input.value.length;
          const max = input.getAttribute('maxlength') || 100;
          counter.textContent = `${count}/${max}`;
          
          // تغيير اللون حسب النسبة
          const percentage = (count / max) * 100;
          if (percentage > 90) {
            counter.style.color = '#ff4757';
          } else if (percentage > 70) {
            counter.style.color = '#ffa502';
          } else {
            counter.style.color = '#6ae44d';
          }
        });
      }
    }
  });
  
  // التحقق في الوقت الحقيقي
  form.addEventListener('input', function(e) {
    validateField(e.target);
  });
  
  // إرسال النموذج
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      showError('يرجى تصحيح الأخطاء في النموذج');
      return;
    }
    
    // إظهار حالة التحميل
    showLoading(true);
    
    try {
      // محاكاة إرسال البيانات
      await simulateSubmission();
      
      // إظهار رسالة النجاح
      const ticketNum = 'TBLY-' + Date.now().toString().slice(-6);
      document.getElementById('ticketNumber').textContent = ticketNum;
      showSuccess();
      
      // حفظ في localStorage
      saveContactMessage();
      
      // إعادة تعيين النموذج
      setTimeout(() => {
        form.reset();
        resetCharCounters();
        showLoading(false);
      }, 2000);
      
    } catch (error) {
      showError('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
      showLoading(false);
    }
  });
}

// التحقق من الحقل
function validateField(field) {
  const errorElement = document.getElementById(`${field.id}Error`);
  let isValid = true;
  let message = '';
  
  if (field.required && !field.value.trim()) {
    isValid = false;
    message = 'هذا الحقل مطلوب';
  } else if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      isValid = false;
      message = 'البريد الإلكتروني غير صالح';
    }
  } else if (field.id === 'phone' && field.value) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    if (!phoneRegex.test(field.value.replace(/\s/g, ''))) {
      isValid = false;
      message = 'رقم الهاتف غير صالح';
    }
  } else if (field.id === 'message' && field.value.length < 10) {
    isValid = false;
    message = 'الرسالة قصيرة جداً (10 أحرف على الأقل)';
  }
  
  // تحديث حالة الحقل
  if (isValid) {
    field.classList.remove('error');
    field.classList.add('success');
    errorElement.textContent = '';
  } else {
    field.classList.remove('success');
    field.classList.add('error');
    errorElement.textContent = message;
  }
  
  return isValid;
}

// التحقق من النموذج بأكمله
function validateForm() {
  const form = document.getElementById('contactForm');
  const fields = form.querySelectorAll('input, textarea, select');
  let isValid = true;
  
  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  
  return isValid;
}

// إظهار/إخفاء التحميل
function showLoading(show) {
  const overlay = document.getElementById('loadingOverlay');
  const submitBtn = document.getElementById('submitBtn');
  const submitLoader = document.getElementById('submitLoader');
  
  if (show) {
    overlay.style.display = 'flex';
    submitBtn.disabled = true;
    submitLoader.style.display = 'flex';
  } else {
    overlay.style.display = 'none';
    submitBtn.disabled = false;
    submitLoader.style.display = 'none';
  }
}

// محاكاة إرسال البيانات
function simulateSubmission() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1500);
  });
}

// إظهار رسالة النجاح
function showSuccess() {
  const successMsg = document.getElementById('successMessage');
  successMsg.classList.add('show');
  
  // إخفاء تلقائي بعد 5 ثوان
  setTimeout(() => {
    successMsg.classList.remove('show');
  }, 5000);
}

// إظهار رسالة الخطأ
function showError(message) {
  const errorMsg = document.getElementById('errorMessage');
  const errorText = document.getElementById('errorText');
  
  errorText.textContent = message;
  errorMsg.classList.add('show');
  
  // إخفاء تلقائي بعد 5 ثوان
  setTimeout(() => {
    errorMsg.classList.remove('show');
  }, 5000);
}

// حفظ الرسالة
function saveContactMessage() {
  const form = document.getElementById('contactForm');
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    newsletter: document.getElementById('newsletter').checked,
    date: new Date().toISOString(),
    status: 'pending'
  };
  
  let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  messages.push(formData);
  localStorage.setItem('contactMessages', JSON.stringify(messages));
}

// إعادة تعيين العدادات
function resetCharCounters() {
  document.querySelectorAll('.char-count').forEach(counter => {
    counter.textContent = '0/100';
    counter.style.color = '#6ae44d';
  });
}

// تهيئة القائمة
function initMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', 
        navLinks.classList.contains('active')
      );
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

// تهيئة زر العودة للأعلى
function initBackToTop() {
  const backBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });
  
  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// تهيئة الخريطة
function initMap() {
  const mapPlaceholder = document.getElementById('mapPlaceholder');
  const openMapBtn = document.getElementById('openMap');
  const zoomInBtn = document.getElementById('zoomIn');
  const zoomOutBtn = document.getElementById('zoomOut');
  
  let scale = 1;
  
  if (zoomInBtn && zoomOutBtn) {
    zoomInBtn.addEventListener('click', () => {
      scale = Math.min(scale + 0.1, 2);
      mapPlaceholder.style.transform = `scale(${scale})`;
    });
    
    zoomOutBtn.addEventListener('click', () => {
      scale = Math.max(scale - 0.1, 0.5);
      mapPlaceholder.style.transform = `scale(${scale})`;
    });
  }
  
  if (openMapBtn) {
    openMapBtn.addEventListener('click', () => {
      const address = encodeURIComponent('الإسكندرية، مصر');
      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    });
  }
}

// تحميل صورة الملف الشخصي
function loadProfileImage() {
  const profileImg = document.getElementById('profileImg');
  if (profileImg) {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      profileImg.src = savedAvatar;
    }
  }
}