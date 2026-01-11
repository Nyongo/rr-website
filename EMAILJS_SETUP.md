# EmailJS Setup Instructions

## Configuration Complete ✅

EmailJS has been integrated into your contact form. You just need to add your **Public Key** to complete the setup.

## Steps to Complete Setup

### 1. Get Your EmailJS Public Key

1. Log in to your [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Go to **Integration** → **API Keys**
3. Copy your **Public Key**

### 2. Add Public Key to Configuration

Open `src/scripts/contact-form.ts` and update line 6:

```typescript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'; // Replace with your actual Public Key
```

### 3. Verify EmailJS Template Variables

Make sure your EmailJS template (`template_7d8gcin`) has these variables configured:

- `{{from_name}}` - Full Name
- `{{from_email}}` - Email Address  
- `{{school_name}}` - School Name
- `{{number_of_students}}` - Number of Students
- `{{message}}` - Message Content

### 4. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section on your site
3. Fill out and submit the form
4. Check your Gmail inbox for the email

## Current Configuration

- **Service ID**: `service_2tf1p3j`
- **Template ID**: `template_7d8gcin`
- **Email Provider**: Gmail
- **Public Key**: _Needs to be added (see step 2)_

## Features Included

✅ Form validation  
✅ Loading states during submission  
✅ Success message display  
✅ Error handling with user-friendly messages  
✅ Form reset after successful submission  
✅ Auto-hide success message after 10 seconds  

## Notes

- The Public Key is safe to include in client-side code (it's meant to be public)
- All form data is sent securely through EmailJS
- The form includes client-side validation (required fields)
- Error messages will display if EmailJS is not properly configured

## Troubleshooting

If emails aren't sending:

1. Verify your Public Key is correct
2. Check that your EmailJS template variables match the form field names
3. Ensure your Gmail account is properly connected in EmailJS
4. Check the browser console for any error messages
5. Verify your EmailJS service is active and has available quota
