(function() {
  /* ── PRODUCT DATA ── */

  window.products = {
    'rose-quartz': {
      name: 'Rose Quartz Bracelet',
      type: 'Bracelet · Heart Chakra',
      price: '₹800',
      img: 'rose-quartz.jpg',
      placeholder: '♡',
      link: 'https://payments.cashfree.com/links?code=ea7vdg342ql0_AAAAAAASyjU',
      attrs: { Chakra: 'Heart', Element: 'Water', Planet: 'Venus', Color: 'Pink' },
      desc: 'The ultimate stone of love and compassion. Rose Quartz opens the heart to all kinds of love — self love, family love, romantic love and friendship.',
      benefits: ['Boosts self-love and self-worth','Heals relationship issues and heartbreak','Brings peace, calmness and harmony','Promotes mutual understanding','Inspires compassion and kindness']
    },
    'garnet': {
      name: 'Garnet Bracelet',
      type: 'Bracelet · Sacral Chakra',
      price: '₹1,100',
      img: 'garnet.jpg',
      placeholder: '◉',
      link: '#',
      attrs: { Chakra: 'Sacral', Element: 'Fire', Planet: 'Mars', Color: 'Deep Red' },
      desc: 'A powerful energising and regenerating stone especially for women. Garnet cleanses and re-energises the chakras while inspiring love and devotion.',
      benefits: ['Powerful energising stone for women','Cleanses and re-energises all chakras','Vitalises, purifies and balances energy','Inspires love and devotion','Helps let go of old and obsolete patterns','Opens heart and bestows self-confidence','Regulates blood circulation','Sharpens self-perception','Stone of commitment','Promotes hormonal balance for women']
    },
    'amethyst': {
      name: 'Amethyst Bracelet',
      type: 'Bracelet · Crown Chakra',
      price: '₹900',
      img: 'amethyst.jpg',
      placeholder: '◈',
      link: '#',
      attrs: { Chakra: 'Crown', Element: 'Air', Planet: 'Jupiter', Color: 'Purple' },
      desc: 'A powerful and protective stone with a high spiritual vibration. Amethyst is a natural tranquiliser that relieves stress and strain.',
      benefits: ['Improves focus, concentration and decision making','Brings success, serenity and new opportunities','Reduces insomnia and promotes deep sleep','Promotes hormonal balance','Powerful protective stone','Encourages selflessness and spiritual wisdom','Strengthens immune system']
    },
    'citrine': {
      name: 'Citrine Bracelet',
      type: 'Bracelet · Solar Plexus',
      price: '₹2,000',
      img: 'citrine.jpg',
      placeholder: '✦',
      link: '#',
      attrs: { Chakra: 'Solar Plexus', Element: 'Fire', Planet: 'Sun', Color: 'Yellow' },
      desc: 'Known as the Merchant\'s Stone — Citrine is one of the most powerful stones for attracting abundance, wealth and success into your life.',
      benefits: ['Attracts wealth, prosperity and success','Imparts inner joy, wonder and enthusiasm','Brings financial abundance and opportunities','Promotes positivity and optimism','Awakens creativity and imagination','Raises self-esteem and self-confidence','Powerful cleanser and regenerator','Aids digestion and physical health']
    },
    'iron-pyrite': {
      name: 'Iron Pyrite Bracelet',
      type: 'Bracelet · Solar Plexus',
      price: '₹1,100',
      img: 'iron-pyrite.jpg',
      placeholder: '⬡',
      link: '#',
      attrs: { Chakra: 'Solar Plexus', Element: 'Earth', Planet: 'Mars', Color: 'Gold' },
      desc: 'Fool\'s Gold — but nothing foolish about its power. Iron Pyrite is a powerful stone for manifestation, protection and attracting abundance.',
      benefits: ['Attracts wealth and financial abundance','Offers powerful energetic protection','Strengthens the solar plexus chakra','Protects and strengthens the aura','Ideal for meditation on manifestations','Grounds energy in home and workplace']
    },
    'money-magnet': {
      name: 'Money Magnet Bracelet',
      type: 'Combination Bracelet',
      price: '₹1,100',
      img: 'money-magnet.jpg',
      placeholder: '◇',
      link: '#',
      attrs: { Stones: '4 crystals', Purpose: 'Abundance', Energy: 'High', Type: 'Combination' },
      desc: 'A powerful combination of Tiger Eye, Pyrite, Citrine and Aventurine — each chosen for its unique ability to draw abundance and amplify prosperity.',
      benefits: ['Tiger Eye promotes confidence and focus','Pyrite attracts wealth and prosperity mindset','Citrine radiates positive energy and success','Aventurine adds luck and growth opportunities','Together they create a powerful abundance field']
    },
    'triple-protection': {
      name: 'Triple Protection Bracelet',
      type: 'Combination Bracelet',
      price: '₹1,100',
      img: 'triple-protection.jpg',
      placeholder: '◉',
      link: '#',
      attrs: { Stones: '3 crystals', Purpose: 'Protection', Energy: 'Grounding', Type: 'Combination' },
      desc: 'The ultimate protection bracelet — Tiger Eye, Black Obsidian and Hematite working together to shield your energy on all levels.',
      benefits: ['Tiger Eye brings protection and personal power','Black Obsidian shields against all negativity','Hematite absorbs and transmutes negative energy','Promotes emotional healing and grounding','Enhances vitality, strength and courage']
    },
    'malachite': {
      name: 'Malachite Bracelet',
      type: 'Bracelet · Heart Chakra',
      price: '₹2,300',
      img: 'malachite.jpg',
      placeholder: '◉',
      link: '#',
      attrs: { Chakra: 'Heart', Element: 'Earth', Planet: 'Venus', Color: 'Green' },
      desc: 'The most important healing stone of the new millennium. Malachite absorbs negative energies from the atmosphere and body like no other stone.',
      benefits: ['Grounds spiritual energies deeply','Absorbs all kinds of negative energies','Placed in home protects against radiation','Brings deep emotional healing','Opens heart to unconditional love','Brings harmony and peace','Clears and activates all chakras','Balances mood swings and heals cramps','Boosts immune and nervous systems','Lowers blood pressure, treats asthma and arthritis']
    },
    'sandstone': {
      name: 'Sandstone Bracelet',
      type: 'Bracelet · Root Chakra',
      price: '₹2,000',
      img: 'sandstone.jpg',
      placeholder: '◇',
      link: '#',
      attrs: { Chakra: 'Root', Element: 'Earth', Energy: 'Grounding', Color: 'Beige' },
      desc: 'A stone of creativity and deep grounding. Sandstone provides the mental clarity and stability needed to follow your true path in life.',
      benefits: ['Stone of creativity and mental focus','Removes distractions and provides clarity','Provides deep grounding and stability','Stabilises emotions and overcomes stress','Symbolises strength and resilience','Helps uncover truth and dispel illusions','Fosters self-confidence']
    },
    'tanzanite': {
      name: 'Tanzanite Bracelet',
      type: 'Bracelet · Third Eye & Crown',
      price: '₹4,600',
      img: 'tanzanite.jpg',
      placeholder: '✦',
      link: '#',
      attrs: { Chakra: 'Third Eye', Element: 'Storm', Rarity: 'Premium', Color: 'Blue-Violet' },
      desc: 'One of the rarest and most powerful stones on earth. Tanzanite connects you to higher consciousness and facilitates communication with higher dimensions.',
      benefits: ['Connects to higher consciousness','Stimulates intuition and higher perception','Aids in detoxifying body and improves vitality','Soothing and deeply calming energy','Heals throat, third eye and crown chakra','Dissolves old patterns of disease and karma','Gives optimism and inspiration','Increases compassion for self','Heals skin related illness']
    },
    'azurite': {
      name: 'Azurite Bracelet',
      type: 'Bracelet · Third Eye',
      price: '₹900',
      img: 'azurite.jpg',
      placeholder: '◈',
      link: '#',
      attrs: { Chakra: 'Third Eye', Element: 'Water', Planet: 'Jupiter', Color: 'Deep Blue' },
      desc: 'A stone of enlightenment and spiritual guidance. Azurite expands the mind and deepens your connection to spiritual truth.',
      benefits: ['Brings enlightenment and awakening','Provides spiritual guidance','Powerful physical and emotional healer','Expands the mind and consciousness','Supports mental healing and clarity','Instils bravery and courage','Aligns you to your truth','Deep emotional healing']
    },
    'firoza': {
      name: 'African Firoza Bracelet',
      type: 'Bracelet · Throat Chakra',
      price: '₹1,600',
      img: 'firoza.jpg',
      placeholder: '◇',
      link: '#',
      attrs: { Chakra: 'Throat', Element: 'Water', Origin: 'Africa', Color: 'Turquoise' },
      desc: 'The powerful Feroza stone is one of the oldest known healing stones. It is a strong attractor of prosperity and financial opportunities.',
      benefits: ['Attracts prosperity and abundance','Brings financial opportunities to the wearer','Helps get maximum financial support','Overcomes financial crisis and poverty','Results in an abundant and happy life']
    },
    'carnelian': {
      name: 'Carnelian Bracelet',
      type: 'Bracelet · Sacral Chakra',
      price: '₹900',
      img: 'carnelian.jpg',
      placeholder: '◉',
      link: '#',
      attrs: { Chakra: 'Sacral', Element: 'Fire', Planet: 'Mars', Color: 'Orange-Red' },
      desc: 'A stabilising crystal that restores vitality and motivation. Carnelian makes you fearless, action-oriented and truthful in all areas of life.',
      benefits: ['Makes you fearless and action-oriented','Enhances skills, talents and creativity','Natural cleanser — cleanses other crystals','Brings abundance and prosperity','Restores vitality and motivation','Stimulates metabolism and creativity','Powerful protector against negative energies','Balances all chakras','Aids with anxiety, depression and stress','Increases fertility and female health']
    },
    'lapis-lazuli': {
      name: 'Lapis Lazuli Bracelet',
      type: 'Bracelet · Third Eye',
      price: '₹1,000',
      img: 'lapis-lazuli.jpg',
      placeholder: '⬡',
      link: '#',
      attrs: { Chakra: 'Third Eye', Element: 'Water', Planet: 'Saturn', Color: 'Deep Blue Gold' },
      desc: 'A stone of wisdom, truth and royal energy. Lapis Lazuli has been used for thousands of years to awaken the third eye and activate inner power.',
      benefits: ['Boosts the immune system','Awakens the third eye','Lowers blood pressure','Purifies the blood','Soothes inflammation','Activates inner power','Connects to inner truth','Brings positive magic and manifestation']
    },
    'serpentine': {
      name: 'Serpentine Bracelet',
      type: 'Bracelet · All Chakras',
      price: '₹900',
      img: 'serpentine.jpg',
      placeholder: '◇',
      link: '#',
      attrs: { Chakra: 'All Chakras', Element: 'Earth', Energy: 'Kundalini', Color: 'Green' },
      desc: 'An earthing stone that opens new pathways for Kundalini energy to rise. Serpentine is exceptional for meditation and deep spiritual exploration.',
      benefits: ['Earthing stone for meditation','Opens psychic abilities','Opens new pathways for Kundalini energy','Brings wisdom and clarity','Helps feel more in control of life','Corrects mental and emotional imbalance','Brings contact with angelic guidance','Heals baggage from past relationships','Excellent for pain relief','Cleanses and detoxifies blood and body']
    },
    'red-jasper': {
      name: 'Red Jasper Bracelet',
      type: 'Bracelet · Root Chakra',
      price: '₹900',
      img: 'red-jasper.jpg',
      placeholder: '♡',
      link: '#',
      attrs: { Chakra: 'Root', Element: 'Earth', Energy: 'Grounding', Color: 'Deep Red' },
      desc: 'A deeply nurturing and protective stone. Red Jasper brings a gentle calming energy that supports you through stress and difficulty.',
      benefits: ['Brings relaxation and contentment','Deep nurturing and compassion energy','Strong protection from negative forces','Supports completion of projects','Promotes healing on all levels','Has a deeply calming effect','Detoxifies blood and circulatory system']
    },
    'labradorite': {
      name: 'Labradorite Bracelet',
      type: 'Bracelet · All Chakras',
      price: '₹1,500',
      img: 'labradorite.jpg',
      placeholder: '✦',
      link: '#',
      attrs: { Chakra: 'All Chakras', Element: 'Storm', Energy: 'Magical', Color: 'Iridescent' },
      desc: 'A stone of magic and transformation. Labradorite is the stone of healers, diviners and all who travel the universe seeking knowledge.',
      benefits: ['Stone of magic for healers and diviners','Aids in deep self-discovery','Awakens inner spirit and psychic abilities','Creates a protective shield around the aura','Brings personal magical powers to the surface','Enhances clairvoyance and telepathy','Assists communication with higher guides','Brings out the best in people','Lowers blood pressure']
    },
    'ruby-zoisite': {
      name: 'Ruby Zoisite Bracelet',
      type: 'Bracelet · Crown Chakra',
      price: '₹900',
      img: 'ruby-zoisite.jpg',
      placeholder: '◈',
      link: '#',
      attrs: { Chakra: 'Crown & Heart', Element: 'Storm', Energy: 'Soul', Color: 'Green & Pink' },
      desc: 'A powerful stone that activates the crown chakra and creates altered states of consciousness. Ruby Zoisite is exceptional for soul healing.',
      benefits: ['Activates the crown chakra','Creates altered states of consciousness','Facilitates access to soul memory','Supports spiritual learning','Promotes healthy individuality','Deeply helpful in soul healing','Amplifies the aura strongly']
    },
    'green-onyx': {
      name: 'Green Onyx Bracelet',
      type: 'Bracelet · Heart Chakra',
      price: '₹900',
      img: 'green-onyx.jpg',
      placeholder: '◉',
      link: '#',
      attrs: { Chakra: 'Heart', Element: 'Earth', Energy: 'Strength', Color: 'Green' },
      desc: 'A strength-giving stone that empowers you to be the master of your own destiny. Green Onyx promotes vigour, steadfastness and stamina.',
      benefits: ['Gives great strength and power','Imparts self-confidence','Helps you master your own destiny','Promotes vigor, steadfastness and stamina','Aids in learning life lessons','Improves public speaking and memory','Improves sense of logic','Attracts positive energy','Increases courage','Helps comfort and heal the heart']
    }
  };

  var currentProductKey = null;
  
  /* ── OPEN MODAL ── */
  window.openProduct = function(key) {
    currentProductKey = key;
    var p = products[key];
    if (!p) return;
    document.getElementById('modal-type').textContent = p.type;
    document.getElementById('modal-name').textContent = p.name;
    document.getElementById('modal-price').textContent = p.price;
    document.getElementById('modal-desc').textContent = p.desc;

    var img = document.getElementById('modal-img');
    var ph = document.getElementById('modal-img-placeholder');
    img.src = p.img;
    img.style.display = 'block';
    img.onerror = function() { img.style.display = 'none'; ph.style.display = 'block'; ph.textContent = p.placeholder; };
    ph.style.display = 'none';

    var attrsHtml = '';
    for (var k in p.attrs) {
      attrsHtml += '<div class="modal-attr"><div class="modal-attr-label">' + k + '</div><div class="modal-attr-value">' + p.attrs[k] + '</div></div>';
    }
    document.getElementById('modal-attrs').innerHTML = attrsHtml;

    var benefitsHtml = '';
    p.benefits.forEach(function(b) {
      benefitsHtml += '<li><span class="dot-b"></span>' + b + '</li>';
    });
    document.getElementById('modal-benefits').innerHTML = benefitsHtml;

    var buyBtn = document.getElementById('modal-buy');
    buyBtn.href = p.link;
    buyBtn.textContent = 'Buy Now';

    document.getElementById('product-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  /* ── CLOSE MODAL ── */
  window.closeModal = function() {
    document.getElementById('product-modal').classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('product-modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
  
  // Prevent Add to Cart clicks from propagating to parent product card
  document.addEventListener('click', function(e) {
    // Stop propagation for buttons to prevent parent card click
    if (e.target.classList.contains('add-btn') || e.target.closest('button')) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  }, true);
  
  // Add event listener to product cards to prevent openProduct when clicking buttons
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.product-card');
    if (card && (e.target.classList.contains('add-btn') || e.target.closest('button'))) {
      e.stopImmediatePropagation();
      e.preventDefault();
      return false;
    }
  }, true);
  
  // Show popup after 2 seconds (skip if already subscribed this session)
  window.addEventListener('load', function () {
    if (!sessionStorage.getItem('subscribed')) {
      setTimeout(function () {
        document.getElementById('popup-overlay').style.display = 'flex';
      }, 2000);
    }
  });

  window.closePopup = function() {
    document.getElementById('popup-overlay').style.display = 'none';
  };

  document.getElementById('popup-close').addEventListener('click', window.closePopup);
  document.getElementById('popup-overlay').addEventListener('click', function (e) {
    if (e.target === this) window.closePopup();
  });

  window.handlePopupSubscribe = function() {
    var email = document.getElementById('popup-email').value;
    if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('popup-email').style.borderColor = '#E24B4A';
      return;
    }
    // ── Replace this with your Mailchimp / EmailJS action ──
    console.log('Subscribed:', email);
    sessionStorage.setItem('subscribed', 'true');
    document.getElementById('popup-body').innerHTML =
      '<div id="popup-success">' +
        '<div class="check"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>' +
        '<h3>Welcome aboard!</h3>' +
        '<p style="color:var(--muted);font-size:14px;margin-top:6px;">Check your inbox for a welcome gift.</p>' +
      '</div>';
    setTimeout(closePopup, 2500);
  }

  /* ── FOOTER SUBSCRIBE ── */
  window.handleFooterSubscribe = function() {
    var email = document.getElementById('footer-email').value;
    if (!email.includes('@')) return;
    console.log('Footer subscribe:', email);
    sessionStorage.setItem('subscribed', 'true');
    document.getElementById('footer-email').value = '';
    document.getElementById('footer-msg').style.display = 'block';
  }

  /* ── SHOP TABS ── */
  window.switchTab = function(tab, btn) {
    document.querySelectorAll('.shop-tab').forEach(function (t) { t.classList.remove('active'); });
    btn.classList.add('active');
    var cards = document.querySelectorAll('.product-card');
    cards.forEach(function (card) {
      if (tab === 'all' || card.dataset.cat === tab) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  /* ── CART SYSTEM ── */
  window.cartItems = [];

  window.addToCart = function(btn, key) {
    // This function is no longer used - kept for compatibility
    var p = products[key];
    if (!p) return;
    var existing = window.cartItems.find(function(i){ return i.key===key; });
    if (existing) {
      existing.qty += 1;
    } else {
      window.cartItems.push({ key: key, name: p.name, type: p.type, price: p.price, priceNum: parseInt(p.price.replace(/[^0-9]/g,'')), img: p.img, placeholder: p.placeholder, qty: 1 });
    }
    renderCart();
    if (window.saveCartToFirebase) window.saveCartToFirebase();
    openCart();
  }

  window.addToCartFromModal = function() {
    if (!currentProductKey) return;
    var key = currentProductKey;
    var p = products[key];
    if (!p) return;
    
    // Add to cart directly (no auth needed)
    var existing = window.cartItems.find(function(i){ return i.key===key; });
    if (existing) {
      existing.qty += 1;
    } else {
      window.cartItems.push({ key: key, name: p.name, type: p.type, price: p.price, priceNum: parseInt(p.price.replace(/[^0-9]/g,'')), img: p.img, placeholder: p.placeholder, qty: 1 });
    }
    
    // Show success
    var btn = document.getElementById('modal-add-cart');
    btn.textContent = 'Added to Cart ✓';
    btn.style.background = 'var(--sage)';
    setTimeout(function(){
      btn.textContent = 'Add to Cart';
      btn.style.background = '';
    }, 1500);
    
    renderCart();
    if (window.saveCartToFirebase) window.saveCartToFirebase();
  }

  window.renderCart = function() {
    var items = window.cartItems || [];
    var badge = document.getElementById('cart-badge');
    var totalQty = items.reduce(function(s,i){ return s+i.qty; }, 0);
    if (badge) { badge.textContent = totalQty; badge.className = totalQty > 0 ? 'visible' : ''; }
    var countHead = document.getElementById('cart-count-head');
    if (countHead) countHead.textContent = totalQty > 0 ? totalQty + ' item' + (totalQty>1?'s':'') : '';

    var container = document.getElementById('cart-items');
    var footer = document.getElementById('cart-footer');
    var emptyDiv = document.getElementById('cart-empty');
    if (!container) return;

    if (items.length === 0) {
      if (emptyDiv) emptyDiv.style.display = 'block';
      if (footer) footer.style.display = 'none';
      container.innerHTML = '<div id="cart-empty"><div class="ei">🛒</div><p>Your cart is empty</p><button class="btn" onclick="closeCart()">Continue Shopping</button></div>';
      return;
    }

    if (footer) footer.style.display = 'block';
    var html = '';
    var subtotal = 0;
    items.forEach(function(item, idx) {
      subtotal += item.priceNum * item.qty;
      var imgHtml = '<div class="cart-item-img"><img src="'+item.img+'" alt="'+item.name+'" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'block\'"><span style="display:none;">'+item.placeholder+'</span></div>';
      html += '<div class="cart-item">' + imgHtml +
        '<div class="cart-item-info">' +
          '<p class="cart-item-name">'+item.name+'</p>' +
          '<p class="cart-item-type">'+item.type+'</p>' +
          '<div class="cart-item-bottom">' +
            '<span class="cart-item-price">'+item.price+'</span>' +
            '<div class="cart-qty">' +
              '<button class="qty-btn" onclick="changeQty('+idx+',-1)">−</button>' +
              '<span class="qty-num">'+item.qty+'</span>' +
              '<button class="qty-btn" onclick="changeQty('+idx+',1)">+</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<button class="cart-item-remove" onclick="removeFromCart('+idx+')">✕</button>' +
      '</div>';
    });
    container.innerHTML = html;
    var fmt = '₹' + subtotal.toLocaleString('en-IN');
    var sub = document.getElementById('cart-subtotal'); if(sub) sub.textContent = fmt;
    var tot = document.getElementById('cart-total'); if(tot) tot.textContent = fmt;
  }

  window.changeQty = function(idx, delta) {
    window.cartItems[idx].qty += delta;
    if (window.cartItems[idx].qty <= 0) window.cartItems.splice(idx, 1);
    renderCart();
    if (window.saveCartToFirebase) window.saveCartToFirebase();
  }

  window.removeFromCart = function(idx) {
    window.cartItems.splice(idx, 1);
    renderCart();
    if (window.saveCartToFirebase) window.saveCartToFirebase();
  }

  window.openCart = function() {
    document.getElementById('cart-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  window.closeCart = function() {
    document.getElementById('cart-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  window.handleCheckout = function() {
    if (!window.currentUser) { openAuthModal(); return; }
    var items = window.cartItems;
    if (!items || items.length === 0) return;
    
    var total = items.reduce(function(s,i){ return s + i.priceNum*i.qty; }, 0);
    var orderData = {
      id: 'order_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      userId: window.currentUser.uid,
      email: window.currentUser.email,
      items: items.map(function(i) { return { key: i.key, name: i.name, qty: i.qty, price: i.price }; }),
      subtotal: total,
      total: total,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Save order to Firestore
    window._setDoc(window._doc(window._db, 'orders', orderData.id), orderData).then(function() {
      // Also add to user's orders array
      return window._getDoc(window._doc(window._db, 'users', window.currentUser.uid));
    }).then(function(userSnap) {
      var userData = userSnap.data() || {};
      var userOrders = userData.orders || [];
      userOrders.push(orderData);
      return window._setDoc(window._doc(window._db, 'users', window.currentUser.uid), { orders: userOrders }, { merge: true });
    }).then(function() {
      // Send confirmation email
      if (window.sendOrderConfirmationEmail) {
        window.sendOrderConfirmationEmail(orderData);
      }
      // Proceed to Cashfree payment
      initiateCashfreePayment(orderData, total);
    }).catch(function(err) {
      console.error('Order creation failed:', err);
      alert('Error creating order. Please try again.');
    });
  }

  window.initiateCashfreePayment = function(orderData, amount) {
    // Initialize Cashfree payment
    // IMPORTANT: Replace these with your actual Cashfree credentials from dashboard
    var merchantId = "YOUR_MERCHANT_ID"; // Get from Cashfree Account Settings
    var orderId = orderData.id;
    var customerEmail = orderData.email;
    
    // Build order summary
    var orderSummary = 'Heal Yourr Self Order\n';
    orderData.items.forEach(function(item) {
      orderSummary += '\n' + item.name + ' x ' + item.qty + ' = ' + item.price;
    });
    orderSummary += '\n\nTotal: ₹' + amount;
    
    // Option 1: Open Cashfree Payment Link (requires backend setup)
    // var paymentLink = 'https://payments.cashfree.com/links/' + merchantId + '?order_id=' + orderId;
    // window.open(paymentLink, '_blank');
    
    // Option 2: Show payment instructions (temporary solution)
    alert('Order #' + orderId + ' has been created!\n\n' + orderSummary + '\n\nPayment link will be sent to: ' + customerEmail + '\n\nCheck your email for payment details.');
    
    // Clear cart after successful order placement
    window.cartItems = [];
    window.saveCartToFirebase();
    renderCart();
    closeCart();
    
    // Update UI to show order confirmation
    alert('✅ Order confirmed! Thank you for your purchase.\n\nOrder ID: ' + orderId);
  }

  /* ── AUTH MODAL ── */
  window.openAuthModal = function() {
    var productModal = document.getElementById('product-modal');
    productModal.classList.add('hidden');
    document.getElementById('auth-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  window.closeAuthModal = function() {
    var productModal = document.getElementById('product-modal');
    productModal.classList.remove('hidden');
    document.getElementById('auth-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
display = 'flex
  document.getElementById('auth-overlay').addEventListener('click', function(e){ if(e.target===this) closeAuthModal(); });

  window.switchAuthTab = function(tab) {
    document.getElementById('tab-signin').className = 'auth-tab' + (tab==='signin'?' active':'');
    document.getElementById('tab-signup').className = 'auth-tab' + (tab==='signup'?' active':'');
    document.getElementById('auth-name-wrap').style.display = tab==='signup' ? 'block' : 'none';
    document.getElementById('auth-submit-btn').textContent = tab==='signup' ? 'Create Account' : 'Sign In';
    document.getElementById('auth-error').textContent = '';
    window._authMode = tab;
  }
  window._authMode = 'signin';

  window.handleAuthSubmit = function() {
    if (window._authMode === 'signup') { if(window.signUpEmail) window.signUpEmail(); }
    else { if(window.signInEmail) window.signInEmail(); }
  }

  /* ── PROFILE MODAL ── */
  window.openProfileModal = function() {
    var user = window.currentUser;
    if (!user) return;
    var pName = document.getElementById('profile-display-name');
    var pEmail = document.getElementById('profile-display-email');
    var pAvatar = document.getElementById('profile-avatar');
    if (pName) pName.textContent = user.displayName || user.email;
    if (pEmail) pEmail.textContent = user.email;
    if (pAvatar) {
      if (user.photoURL) { pAvatar.innerHTML = '<img src="'+user.photoURL+'" alt="avatar">'; }
      else { pAvatar.textContent = (user.displayName || user.email)[0].toUpperCase(); }
    }
    
    // Load and display order history
    loadOrderHistory(user.uid);
    
    document.getElementById('profile-modal').classList.add('open');
    if (window.loadAddress) window.loadAddress();
  }

  window.loadOrderHistory = function(userId) {
    var orderContainer = document.getElementById('order-history-container');
    if (!orderContainer) {
      console.warn('Order history container not found');
      return;
    }
    
    // Query orders collection for this user
    var ordersRef = window._doc(window._db, 'users', userId);
    window._getDoc(ordersRef).then(function(snap) {
      if (snap.exists() && snap.data().orders) {
        var orders = snap.data().orders;
        displayOrders(orders);
      } else {
        orderContainer.innerHTML = '<p style="color: var(--muted); text-align: center; padding: 20px;">No orders yet</p>';
      }
    }).catch(function(err) {
      console.error('Error loading orders:', err);
      orderContainer.innerHTML = '<p style="color: #E24B4A;">Error loading order history</p>';
    });
  }

  window.displayOrders = function(orders) {
    var container = document.getElementById('order-history-container');
    var html = '';
    
    if (!orders || orders.length === 0) {
      container.innerHTML = '<p style="color: var(--muted); text-align: center; padding: 20px;">No orders yet</p>';
      return;
    }
    
    orders.forEach(function(order, idx) {
      var date = new Date(order.createdAt).toLocaleDateString('en-IN');
      var statusColor = order.status === 'completed' ? '#3B6D11' : order.status === 'pending' ? '#C49A3C' : '#E24B4A';
      
      html += '<div style="background: var(--ivory); border-radius: 8px; padding: 16px; margin-bottom: 12px; border-left: 4px solid ' + statusColor + '">' +
        '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">' +
          '<span style="font-weight: 500; color: var(--charcoal);">Order #' + (idx + 1) + '</span>' +
          '<span style="font-size: 11px; padding: 4px 10px; background: ' + statusColor + '; color: #fff; border-radius: 12px; text-transform: uppercase;">' + order.status + '</span>' +
        '</div>' +
        '<p style="font-size: 12px; color: var(--muted); margin: 4px 0;">Date: ' + date + '</p>' +
        '<p style="font-size: 14px; color: var(--terra); font-weight: 500; margin: 4px 0;">₹' + order.total.toLocaleString('en-IN') + '</p>' +
        '<p style="font-size: 12px; color: var(--muted);">' + order.items.length + ' item(s)</p>' +
      '</div>';
    });
    
    container.innerHTML = html;
  }

  /* ── MOBILE MENU ── */
  window.toggleMenu = function() {
    var links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
      links.style.display = 'none';
    } else {
      links.style.cssText = 'display:flex; flex-direction:column; position:absolute; top:64px; left:0; width:100%; background:var(--cream); padding:20px 24px; gap:20px; border-bottom:1px solid rgba(181,96,58,0.15); z-index:499;';
    }
  };
})();
