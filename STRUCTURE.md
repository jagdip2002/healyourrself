# Heal Yourr Self - Code Structure

Your code has been successfully split into separate files for better organization and maintainability.

## 📁 File Structure

```
heal-yourr-self/
├── index.html              # HTML structure and markup
├── styles.css              # All CSS styling
├── app.js                  # Application JavaScript (cart, modals, UI logic)
├── firebase-config.js      # Firebase configuration and authentication
└── README.md               # This file
```

## 📄 File Descriptions

### **index.html**
- Contains the HTML structure and markup
- References external `styles.css` for styling
- References external `app.js` for functionality
- Loads Firebase configuration from `firebase-config.js`
- Clean, semantic HTML without embedded styles or scripts

### **styles.css**
- All CSS styling (variables, layouts, animations, responsive design)
- CSS custom properties (CSS variables) for consistent theming
- Media queries for responsive design
- All component styles (buttons, modals, cards, navigation, etc.)

### **app.js**
- Product data and management
- Cart system functionality
- Modal and overlay interactions
- Shop tab filtering
- Authentication UI handling
- Profile and order history management
- Mobile menu toggle
- All user interaction logic

### **firebase-config.js**
- Firebase initialization and configuration
- Authentication setup (Google Sign-In, Email/Password)
- Firestore database references
- Authentication state management
- Address and cart persistence
- Order confirmation email setup

## 🚀 How to Use

1. Make sure all 4 files (`index.html`, `styles.css`, `app.js`, `firebase-config.js`) are in the same directory
2. Open `index.html` in a browser
3. The page will load with all styling and functionality

## 🔧 File Relationships

```
index.html
    ├─→ Imports: styles.css (via <link>)
    ├─→ Imports: app.js (via <script>)
    └─→ Imports: firebase-config.js (via <script type="module">)

app.js
    └─→ Depends on: Window variables set by firebase-config.js

firebase-config.js
    └─→ Sets up: Global window variables for auth and database
```

## 📝 Notes

- **Firebase Configuration**: Update your Firebase credentials in `firebase-config.js` if needed
- **Responsive Design**: All responsive styles are in `styles.css`
- **Product Data**: All product information is stored in `app.js` - easily updatable
- **CSS Variables**: Modify color scheme in `:root` section of `styles.css`

## ✅ Features Included

- ✨ Product shop with filtering tabs
- 🛒 Shopping cart system (Firebase-backed)
- 👤 User authentication (Google & Email/Password)
- 📦 Order management and history
- 🎁 Newsletter subscription popup
- 💾 Address saving and auto-loading
- 📱 Fully responsive design
- 🌙 Beautiful UI with smooth animations

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --terra: #B5603A;
  --sage: #6B7C5E;
  /* ... other colors ... */
}
```

### Add More Products
Edit the products object in `app.js`:
```javascript
window.products = {
  'new-product': {
    name: 'Product Name',
    price: '₹999',
    // ... other properties
  }
}
```

### Modify Firebase Setup
Edit credentials in `firebase-config.js` and update your database rules

---

**Version**: 1.0  
**Created**: April 15, 2026  
**Status**: Fully Functional ✅
