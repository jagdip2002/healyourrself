import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkvqa2JG7VPcu11WR4FYIJxOx4Lw--bS4",
  authDomain: "heal-yourr-self.firebaseapp.com",
  projectId: "heal-yourr-self",
  storageBucket: "heal-yourr-self.firebasestorage.app",
  messagingSenderId: "934808740053",
  appId: "1:934808740053:web:3488cf085764a7d14f825c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

window._auth = auth; 
window._db = db; 
window._provider = provider;
window._signInWithPopup = signInWithPopup;
window._createUser = createUserWithEmailAndPassword;
window._signIn = signInWithEmailAndPassword;
window._signOut = signOut;
window._doc = doc; 
window._setDoc = setDoc; 
window._getDoc = getDoc;

onAuthStateChanged(auth, async function(user) {
  window.currentUser = user || null;
  var signinBtn = document.getElementById('nav-signin-btn');
  var userBtn = document.getElementById('nav-user-btn');
  var userName = document.getElementById('nav-user-name');
  if (user) {
    if (signinBtn) signinBtn.style.display = 'none';
    if (userBtn) userBtn.style.display = 'flex';
    if (userName) userName.textContent = (user.displayName || user.email).split(' ')[0];
    var snap = await getDoc(doc(db, 'users', user.uid));
    window.cartItems = (snap.exists() && snap.data().cart) ? snap.data().cart : [];
    renderCart();
  } else {
    if (signinBtn) signinBtn.style.display = 'flex';
    if (userBtn) userBtn.style.display = 'none';
    window.cartItems = [];
    renderCart();
  }
});

window.saveCartToFirebase = async function() {
  if (!window.currentUser) return;
  await setDoc(doc(db, 'users', window.currentUser.uid), { cart: window.cartItems }, { merge: true });
};

window.sendOrderConfirmationEmail = async function(orderData) {
  // This function sends email via Firebase Cloud Functions
  // You need to set up a Cloud Function to handle this
  try {
    await fetch('https://us-central1-heal-yourr-self.cloudfunctions.net/sendOrderEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
  } catch(e) { 
    console.log('Email notification queued:', e.message); 
  }
};

window.signInWithGoogle = async function() {
  try {
    var result = await signInWithPopup(auth, provider);
    await setDoc(doc(db, 'users', result.user.uid), { name: result.user.displayName, email: result.user.email, photo: result.user.photoURL }, { merge: true });
    closeAuthModal();
  } catch(e) { document.getElementById('auth-error').textContent = e.message; }
};

window.signUpEmail = async function() {
  var name = document.getElementById('auth-name').value.trim();
  var email = document.getElementById('auth-email').value.trim();
  var pass = document.getElementById('auth-pass').value;
  if (!name||!email||!pass) { document.getElementById('auth-error').textContent = 'Please fill all fields'; return; }
  if (pass.length < 6) { document.getElementById('auth-error').textContent = 'Password must be at least 6 characters'; return; }
  try {
    var result = await createUserWithEmailAndPassword(auth, email, pass);
    await setDoc(doc(db, 'users', result.user.uid), { name, email, createdAt: new Date().toISOString() }, { merge: true });
    closeAuthModal();
  } catch(e) { document.getElementById('auth-error').textContent = e.message; }
};

window.signInEmail = async function() {
  var email = document.getElementById('auth-email').value.trim();
  var pass = document.getElementById('auth-pass').value;
  if (!email||!pass) { document.getElementById('auth-error').textContent = 'Please fill all fields'; return; }
  try {
    await signInWithEmailAndPassword(auth, email, pass);
    closeAuthModal();
  } catch(e) { document.getElementById('auth-error').textContent = 'Wrong email or password'; }
};

window.signOutUser = async function() {
  await signOut(auth);
  document.getElementById('profile-modal').classList.remove('open');
};

window.saveAddress = async function() {
  if (!window.currentUser) { alert('Please sign in first'); return; }
  var addr = {
    name: document.getElementById('addr-name').value,
    phone: document.getElementById('addr-phone').value,
    line1: document.getElementById('addr-line1').value,
    city: document.getElementById('addr-city').value,
    state: document.getElementById('addr-state').value,
    pincode: document.getElementById('addr-pincode').value
  };
  await setDoc(doc(db, 'users', window.currentUser.uid), { address: addr }, { merge: true });
  document.getElementById('addr-saved-msg').style.display = 'block';
  setTimeout(function(){ document.getElementById('addr-saved-msg').style.display='none'; }, 2500);
};

window.loadAddress = async function() {
  if (!window.currentUser) return;
  var snap = await getDoc(doc(db, 'users', window.currentUser.uid));
  if (snap.exists() && snap.data().address) {
    var a = snap.data().address;
    document.getElementById('addr-name').value = a.name||'';
    document.getElementById('addr-phone').value = a.phone||'';
    document.getElementById('addr-line1').value = a.line1||'';
    document.getElementById('addr-city').value = a.city||'';
    document.getElementById('addr-state').value = a.state||'';
    document.getElementById('addr-pincode').value = a.pincode||'';
  }
};
