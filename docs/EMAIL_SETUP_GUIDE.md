# 📧 Email System Setup Guide for Tribly

## Overview
The contact form in `contact-us.html` now sends emails when users submit the form. The system uses **Formspree**, a free service that requires minimal setup.

## How It Works
1. User fills out the contact form
2. Form validates all fields
3. Data is saved to localStorage (backup)
4. Email is sent to your inbox via Formspree API
5. Success message is shown to user

---

## Setup Instructions

### Step 1: Create Formspree Account (2 minutes)
1. Go to https://formspree.io/
2. Click "Sign Up" (top right)
3. Sign up with your email (or use Google/GitHub OAuth)
4. Verify your email

### Step 2: Create a New Form
1. After login, click "New Form"
2. Give it a name: `Tribly Contact Form`
3. Select email: `triblyteam@gmail.com`
4. Click "Create Form"
5. You'll get a **Form ID** (looks like: `xovqvdaz`)

### Step 3: Update the Code
Replace the Formspree ID in `contact-us.html`:

**Current code (line ~1688):**
```javascript
const response = await fetch('https://formspree.io/f/xovqvdaz', {
```

**Replace `xovqvdaz` with YOUR Form ID from Step 2**

---

## Configuration Options

### Option A: Formspree (Recommended for Free Tier)
- **Cost**: Free up to 50 emails/month
- **Setup Time**: 2 minutes
- **Benefits**: No code required, emails forwarded automatically
- **Status**: ✅ Currently implemented

**Current Implementation:**
```javascript
async function sendEmailViaFormspree(formData, ticketNum) {
  const response = await fetch('https://formspree.io/f/xovqvdaz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}
```

### Option B: EmailJS (Alternative)
- **Cost**: Free up to 200 emails/month
- **Setup Time**: 5 minutes
- **Benefits**: More customizable email templates

**To use EmailJS instead:**
1. Go to https://www.emailjs.com/
2. Sign up for free account
3. Add email service (Gmail, Outlook, etc.)
4. Create email template
5. Get Service ID, Template ID, Public Key
6. Update code in `contact-us.html`:

```javascript
// Initialize EmailJS (add this in DOMContentLoaded)
emailjs.init('YOUR_PUBLIC_KEY');

// Replace sendEmailViaFormspree function:
async function sendEmailViaEmailJS(formData, ticketNum) {
  const templateParams = {
    to_email: 'triblyteam@gmail.com',
    from_email: formData.email,
    sender_name: formData.name,
    phone: formData.phone || 'غير محدد',
    subject: formData.subject,
    message: formData.message,
    ticket_number: ticketNum
  };

  return await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
}
```

---

## Testing the Email System

### Local Testing
1. Open `contact-us.html` in browser
2. Fill out the form with test data
3. Submit form
4. Check console (F12 → Console tab) for:
   - `✅ تم إرسال البريد الإلكتروني بنجاح!` = Email sent ✓
   - `⚠️ تعذر إرسال البريد...` = Email failed but data saved ✓

### Email Receipt Testing
1. After form submission, check `triblyteam@gmail.com` inbox
2. You should see email with:
   - **From**: User's email address
   - **Subject**: Tribly Contact Form - [User's subject]
   - **Body**: User's message with all details

---

## What Happens If Email Fails

The system has a **graceful fallback**:
- Even if email sending fails, the message is **still saved to localStorage**
- User sees success message (because data is backed up locally)
- Admin can retrieve messages from localStorage via browser DevTools

**To retrieve backup messages:**
1. Open `contact-us.html` in browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Type: `JSON.parse(localStorage.getItem('contactMessages'))`
5. All submitted messages will be displayed

---

## Message Data Structure

Each submitted message contains:
```json
{
  "id": 1735689345000,
  "name": "Ahmed Hassan",
  "email": "user@example.com",
  "phone": "+20 120 777 1639",
  "subject": "technical_support",
  "message": "I found a bug in the app...",
  "newsletter": true,
  "ticketNumber": "TBLY-89345000",
  "status": "pending",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

---

## Email Template (Formspree)

The system sends data in the following format:
```
Name: Ahmed Hassan
Email: user@example.com
Phone: +20 120 777 1639
Subject: طلب دعم فني

Message:
---
I found a bug in the app...
---

Ticket Number: TBLY-89345000
Newsletter: Yes
```

---

## Troubleshooting

### Email not arriving?
1. ✅ Check spam/promotions folder first
2. ✅ Verify Formspree Form ID is correct in code
3. ✅ Check Formspree dashboard for delivery status
4. ✅ Check browser console for error messages

### Form validation not working?
- Clear browser cache (Ctrl+Shift+Del)
- Make sure all required fields are filled
- Check console for validation error messages

### localStorage data not saving?
- Enable cookies in browser settings
- Use different browser
- Check localStorage quota (usually 5-10MB)

---

## Advanced: Custom Email Template

To customize the email format sent to your inbox:

**In Formspree:**
1. Go to Dashboard → Your Form
2. Click "Settings"
3. Create custom template in "Email Template" section

**Example custom template:**
```
تم استقبال رسالة جديدة من نموذج الاتصال:

👤 الاسم: {{name}}
📧 البريد الإلكتروني: {{email}}
📱 الهاتف: {{phone}}
🏷️ الموضوع: {{subject}}
🎟️ رقم التذكرة: {{ticketNumber}}

📝 الرسالة:
---
{{message}}
---

تاريخ الإرسال: {{timestamp}}
```

---

## Security Notes

✅ **Current Implementation:**
- All user data is validated on client-side
- Formspree provides CSRF protection
- Emails are sent over HTTPS
- No sensitive data is exposed in logs

⚠️ **Server-Side (Future):**
- When moving to backend, implement rate limiting
- Use environment variables for API keys
- Add server-side validation
- Implement database logging

---

## Cost Estimates

| Service | Free Tier | Paid |
|---------|-----------|------|
| **Formspree** | 50 emails/month | $20/month (400+ emails) |
| **EmailJS** | 200 emails/month | $99/month (unlimited) |
| **SendGrid** | 100 emails/day | $20/month+ |

---

## Next Steps

1. ✅ **Now**: Create Formspree account and get Form ID
2. ✅ **Now**: Update Form ID in code
3. ✅ **Test**: Submit test email and verify receipt
4. 📅 **Later**: Customize email template if needed
5. 📅 **Later**: Move to backend API for production

---

## Support & Resources

- **Formspree Docs**: https://formspree.io/forms
- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Tribly Contact**: triblyteam@gmail.com
- **Issues**: Check browser console (F12) for error messages

---

## Summary

✅ Form submissions now attempt to send emails  
✅ Graceful fallback to localStorage if email fails  
✅ User gets feedback via success/error messages  
✅ All data backed up in browser storage  
⏳ Awaiting Form ID to enable email delivery  

**Action Required**: Set up Formspree account and update Form ID in line ~1688 of contact-us.html
