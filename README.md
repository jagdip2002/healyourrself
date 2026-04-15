# Heal Yourr Self 🌿

A beautiful, modern e-commerce website for crystals, meditations, and healing sessions.

## Features

✨ **Product Catalog** - Browse and shop ethically-sourced crystals  
🧘 **Guided Meditations** - Download and listen to healing meditation MP3s  
💫 **Healing Sessions** - Book one-on-one energy healing sessions  
🔐 **Secure Authentication** - Google Sign In & Email/Password auth via Firebase  
🛒 **Shopping Cart** - Add/remove items with persistent cart storage  
📦 **Order Tracking** - View complete order history in your account  
💳 **Payment Processing** - Integrated Cashfree payment gateway  
📧 **Email Notifications** - Automatic order confirmation emails  

## Technologies

- **Frontend**: HTML5, CSS3, Vanilla JavaScript  
- **Database**: Firebase Firestore  
- **Authentication**: Firebase Auth (Google OAuth + Email/Password)  
- **Payments**: Cashfree Payment Gateway  
- **Hosting**: Firebase Hosting / Netlify  
- **Emails**: Firebase Cloud Functions + Nodemailer  

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/jagdip2002/Healyourrself.git
   cd Healyourrself
   ```

2. Open `index (4).html` in your browser or deploy to Netlify

3. Configure Firebase:
   - Update Firebase credentials in the script block
   - Setup Firestore database rules

4. Configure Cashfree:
   - Add your Merchant ID to the payment handler function

## Firestore Collections

- **users/{userId}** - User profile, cart, addresses, order history
- **orders/{orderId}** - Complete order records with status tracking

## File Structure

```
heal-yourr-self/
├── index (4).html          # Main website (HTML + CSS + JavaScript)
├── .gitignore
└── README.md
```

## Firebase Setup

Update the Firebase config in `index (4).html`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Deployment

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically on every git push

### Deploy to Firebase Hosting
```bash
firebase deploy
```

## Future Enhancements

- [ ] Admin dashboard for order management
- [ ] Product inventory management
- [ ] Customer reviews & ratings
- [ ] SMS notifications
- [ ] Subscription plans
- [ ] Affiliate program

## Author

**Heal Yourr Self** - Crystals, Meditations & Healing Sessions  
Made with love & intention ✨

---

For more information, visit [heal-yourr-self.firebaseapp.com](https://heal-yourr-self.firebaseapp.com)
