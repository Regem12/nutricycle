# Firebase Custom Password Reset Page Setup

Follow these steps to configure Firebase to use your custom password reset page instead of Firebase's default hosted page.

---

## 📋 **Steps to Configure Firebase Console**

### **Step 1: Go to Firebase Console**

1. Open https://console.firebase.google.com
2. Select your project: **authnutricycle**
3. Go to **Authentication** from the left sidebar

### **Step 2: Configure Email Templates**

1. Click on the **Templates** tab at the top
2. Find **Password reset** in the list
3. Click the **pencil icon (Edit)** on the Password reset template

### **Step 3: Set Custom Action URL**

Scroll down to find the **Customize action URL** section:

**For Local Development:**

```
http://localhost:5173/reset-password
```

**For Production (Vercel):**

```
https://nutricycle.vercel.app/reset-password
```

> **Note:** You can only set one URL at a time. Switch between local and production as needed, or use production URL always (it will work for both).

### **Step 4: Save Changes**

1. Click **Save** at the bottom of the page
2. Your custom reset page is now configured! 🎉

---

## 🧪 **Testing the Custom Reset Page**

### **Test Flow:**

1. **Request Password Reset**
   - Go to: http://localhost:5173/admin/login
   - Click "Forgot Password?"
   - Enter an email address
   - Click "Send Reset Link"

2. **Check Email**
   - Open the email inbox for the address you used
   - You should receive a "Password Reset" email from Firebase
   - Check spam folder if you don't see it

3. **Click Reset Link**
   - Click the "Reset Password" link in the email
   - You should be redirected to YOUR custom page at `/reset-password`
   - The URL will include an `oobCode` parameter (this is normal)

4. **Reset Password**
   - Enter a new password (at least 6 characters)
   - See the password strength indicator
   - Confirm the password
   - Click "Reset Password"
   - You should see a success message and be redirected to login

5. **Login with New Password**
   - Try logging in with your new password
   - It should work! 🎉

---

## 🎨 **What Your Users Will See**

### **Custom Page Features:**

✅ **NutriCycle Branding** - Matches your app's design
✅ **Password Strength Indicator** - Shows strength in real-time
✅ **Show/Hide Password Toggle** - Better UX
✅ **Password Requirements** - Clear checklist
✅ **Password Match Indicator** - Visual confirmation
✅ **Error Handling** - Clear error messages
✅ **Loading States** - Smooth user experience
✅ **Auto-redirect** - Goes back to login after success

---

## 🔧 **Troubleshooting**

### **Issue: Link still goes to Firebase's page**

**Solution:** Make sure you saved the custom URL in Firebase Console. It can take a few minutes to propagate.

### **Issue: "Invalid or missing reset code" error**

**Solutions:**

- Check that the `oobCode` parameter is in the URL
- The link may have expired (links expire after 1 hour)
- The link may have already been used (can only be used once)
- Request a new reset link

### **Issue: Password reset doesn't work**

**Solutions:**

- Check browser console for errors
- Ensure password is at least 6 characters
- Make sure Firebase credentials are correct in `.env`
- Try refreshing the page and entering password again

### **Issue: Email not received**

**Solutions:**

- Check spam/junk folder
- Wait a few minutes (can take 1-5 minutes)
- Try a different email address
- Check Firebase Console > Authentication to see if user exists

---

## 🚀 **Production Deployment**

When deploying to production:

1. **Update Firebase Console:**
   - Change the custom action URL to your production URL
   - Example: `https://nutricycle.vercel.app/reset-password`

2. **Update Frontend `.env`:**

   ```env
   VITE_API_URL=https://your-backend-url.railway.app/api
   ```

3. **Test on Production:**
   - Request a password reset on production
   - Verify email arrives
   - Verify link redirects to production page
   - Complete the password reset flow

---

## 📧 **Customizing the Email Template (Optional)**

You can also customize the email that Firebase sends:

1. In Firebase Console > Authentication > Templates > Password reset
2. Edit the email template sections:
   - **Email subject:** Change "Reset your password for [App Name]"
   - **Email body:** Customize the message
   - **Sender name:** Change who the email appears to be from

3. Use these variables in your template:
   - `%LINK%` - The password reset link (required)
   - `%APP_NAME%` - Your app name
   - `%EMAIL%` - User's email address

**Example Custom Email:**

```
Hello,

We received a request to reset your password for your NutriCycle account.

Click the link below to create a new password:
%LINK%

This link will expire in 1 hour.

If you didn't request this, you can safely ignore this email.

Thanks,
The NutriCycle Team
```

---

## ✅ **All Set!**

Your custom password reset page is now:

- ✅ Connected to Firebase
- ✅ Fully functional
- ✅ Beautifully designed
- ✅ Production-ready

Users will have a seamless, branded experience when resetting their passwords! 🎉
