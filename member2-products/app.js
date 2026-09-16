/**
 * OCCASIO 🎁 – MEMBER 2: CATEGORIES & PRODUCTS
 * High-performance Catalog, SVG Vector Art Engine, Confetti Physics,
 * Sliding Filter Pill Indicator, Fly-to-Cart Animation & Cart Drawer
 */

// ==========================================
// 1. PRODUCT & SVG ART DATASET
// ==========================================
const PRODUCTS = [
  // 🎂 1. BIRTHDAY
  {
    id: 'bday-hamper',
    name: 'Gourmet Birthday Celebration Hamper',
    category: 'birthday',
    categoryLabel: 'Birthday',
    occasionIcon: '🎂',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviewsCount: 142,
    description: 'Deluxe celebration box featuring artisanal chocolates, festive confetti popper, and personalized wooden card.',
    fullDescription: 'Make their special birthday unforgettable with this curated deluxe party gift basket. Packed with premium handcrafted chocolates, gourmet roasted nuts, reusable sparkling balloon kit, and a custom laser-engraved birthday keepsake.',
    svgType: 'bday-hamper',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=700&q=80',
    features: ['Personalized Wooden Name Tag', 'Includes Handwritten Card', 'Express 24h Dispatch', 'Handmade & Eco-friendly'],
    inStock: true
  },
  {
    id: 'bday-cake',
    name: 'Artisan Midnight Blue Velvet Cake',
    category: 'birthday',
    categoryLabel: 'Birthday',
    occasionIcon: '🎂',
    price: 38.00,
    originalPrice: 48.00,
    rating: 4.8,
    reviewsCount: 98,
    description: 'Freshly baked tiered blue velvet cake with edible 24K gold foil flakes and sparkler candle set.',
    fullDescription: 'An ultra-moist blue velvet sponge layered with smooth Madagascar vanilla cream cheese frosting, finished with shimmering cyan glaze and gold leaf accents.',
    svgType: 'bday-cake',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=700&q=80',
    features: ['100% Eggless Option Available', 'Includes Sparkler Candles', 'Temperature Controlled Delivery', 'Serves 8-10 Guests'],
    inStock: true
  },
  {
    id: 'bday-lamp',
    name: 'Custom 3D Moon & Star Galaxy Lamp',
    category: 'birthday',
    categoryLabel: 'Birthday',
    occasionIcon: '🎂',
    price: 34.50,
    originalPrice: 45.00,
    rating: 4.9,
    reviewsCount: 112,
    description: 'Rechargeable touch-sensor LED lamp engraved with custom birthday wishes and moonlit starry night ambiance.',
    fullDescription: 'An atmospheric night light featuring 16 color variations, wireless remote control, and personalized photo/message engraving on durable optical acrylic glass.',
    svgType: 'bday-lamp',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=700&q=80',
    features: ['16 RGB Color Modes', 'Remote & Touch Control', 'Rechargeable Battery', 'Custom Laser Inscription'],
    inStock: true
  },
  {
    id: 'bday-box',
    name: 'Smart Surprise Explosion Photo Box',
    category: 'birthday',
    categoryLabel: 'Birthday',
    occasionIcon: '🎂',
    price: 58.00,
    originalPrice: 75.00,
    rating: 4.7,
    reviewsCount: 84,
    description: 'Handcrafted explosion gift box with 6 layered compartments, pull-out cards, and center present vault.',
    fullDescription: 'An inventive handmade explosion gift box with cascading memories, miniature photo holders, confetti spring inserts, and a center jewel compartment for additional presents.',
    svgType: 'gift-box',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=700&q=80',
    features: ['Holds up to 24 Photos', 'Interactive Pop-up Action', 'Surprise Center Vault', 'Premium Matte Finish'],
    inStock: true
  },

  // 💐 2. ANNIVERSARY
  {
    id: 'anniv-rose',
    name: 'Eternal Preserved Rose Glass Dome',
    category: 'anniversary',
    categoryLabel: 'Anniversary',
    occasionIcon: '💐',
    price: 59.00,
    originalPrice: 85.00,
    rating: 5.0,
    reviewsCount: 165,
    description: 'Real natural rose preserved to last 3+ years in a crystal glass bell jar with warm fairy LED lighting.',
    fullDescription: 'Symbolize everlasting love with this timeless enchanted preserved rose. Requires zero watering and stays vibrant for years under its crystal-clear dome.',
    svgType: 'anniv-rose',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=700&q=80',
    features: ['Lasts 3 to 5 Years', 'Integrated Warm Fairy LEDs', 'Solid Walnut Base', 'Zero Maintenance'],
    inStock: true
  },
  {
    id: 'anniv-watch',
    name: 'Minimalist Couple Dual Timepieces',
    category: 'anniversary',
    categoryLabel: 'Anniversary',
    occasionIcon: '💐',
    price: 135.00,
    originalPrice: 190.00,
    rating: 4.8,
    reviewsCount: 74,
    description: 'Pair of elegant sapphire-coated analog quartz watches with midnight blue mesh straps.',
    fullDescription: 'Designed for couples celebrating milestones. Water-resistant up to 50m, boasting ultra-slim 7mm bezels, sunray dials, and complimentary customized caseback engraving.',
    svgType: 'anniv-watch',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80',
    features: ['Set of 2 Watches', 'Sapphire Crystal Glass', 'Free Back Engraving', '3ATM Water Resistance'],
    inStock: true
  },
  {
    id: 'anniv-frame',
    name: 'Silver Plated Eternity Memory Frame',
    category: 'anniversary',
    categoryLabel: 'Anniversary',
    occasionIcon: '💐',
    price: 42.00,
    originalPrice: 55.00,
    rating: 4.7,
    reviewsCount: 52,
    description: 'Sterling silver plated hinged dual frame engraved with milestone years and romantic quotes.',
    fullDescription: 'Honor your journey together. Holds two 5x7 inch portraits with anti-tarnish protective coating and high-clarity optical glass.',
    svgType: 'anniv-frame',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80',
    features: ['Anti-Tarnish Silvering', 'Holds 2 Large Photos', 'Velvet Backing', 'Gift Box Included'],
    inStock: true
  },

  // ❤️ 3. VALENTINE'S DAY
  {
    id: 'val-bouquet',
    name: 'Enchanted Crimson Valentine Bouquet',
    category: 'valentines',
    categoryLabel: "Valentine's Day",
    occasionIcon: '❤️',
    price: 69.00,
    originalPrice: 95.00,
    rating: 4.9,
    reviewsCount: 310,
    description: 'Stunning arrangement of 24 velvety red roses paired with baby’s breath and signature satin ribbon.',
    fullDescription: 'Express passionate love with our top-grade fresh Dutch roses. Hand-tied by expert florists with hydroponic hydration wrap for maximum fresh bloom longevity.',
    svgType: 'val-bouquet',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80',
    features: ['24 Long-Stem Red Roses', 'Freshness Guarantee 7 Days', 'Hand-Tied Satin Bow', 'Complimentary Love Note'],
    inStock: true
  },
  {
    id: 'val-pendant',
    name: 'Interlocking Heart 18K Rose Gold Pendant',
    category: 'valentines',
    categoryLabel: "Valentine's Day",
    occasionIcon: '❤️',
    price: 89.00,
    originalPrice: 120.00,
    rating: 4.9,
    reviewsCount: 188,
    description: 'Delicate necklace featuring two intertwined hearts adorned with shimmering cubic zirconia crystals.',
    fullDescription: 'Crafted with hypoallergenic sterling silver plated in rich 18K rose gold, representing two lives bound together by love. Includes luxury velvet jewel chest.',
    svgType: 'val-pendant',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
    features: ['18K Rose Gold Plating', 'AAA+ Cubic Zirconia', 'Adjustable Chain Length', 'Hypoallergenic & Lead-free'],
    inStock: true
  },
  {
    id: 'val-music',
    name: 'Vintage Wooden Melody Love Music Box',
    category: 'valentines',
    categoryLabel: "Valentine's Day",
    occasionIcon: '❤️',
    price: 26.50,
    originalPrice: 38.00,
    rating: 4.7,
    reviewsCount: 94,
    description: 'Hand-cranked musical box playing "Can’t Help Falling in Love" with intricate laser carvings.',
    fullDescription: 'Delightful nostalgic keepsake constructed from sustainable birch wood. Turn the vintage brass handle to hear the timeless romantic melody with rich resonance.',
    svgType: 'gift-box',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=700&q=80',
    features: ['No Batteries Required', 'Mechanical Wind-up Brass', 'Carved Floral Patterns', 'Compact Pocket Sized'],
    inStock: true
  },

  // 💍 4. MARRIAGE
  {
    id: 'marr-rings',
    name: 'Solitaire Diamond Wedding Ring Set',
    category: 'marriage',
    categoryLabel: 'Marriage',
    occasionIcon: '💍',
    price: 260.00,
    originalPrice: 350.00,
    rating: 5.0,
    reviewsCount: 92,
    description: 'Matching his & hers platinum finish wedding bands with central brilliant-cut certified moissanite.',
    fullDescription: 'Timeless wedding bands crafted in durable 950 platinum overlay. Precision channel-set stones that glisten brilliantly under any lighting with lifetime warranty.',
    svgType: 'marr-rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
    features: ['Certified VVS1 Moissanite', 'Comfort-Fit Contoured Interior', 'Laser Inscription Included', 'Luxury Wooden Ring Box'],
    inStock: true
  },
  {
    id: 'marr-silk',
    name: 'Royal Heritage Silk Saree & Kurta Gift Set',
    category: 'marriage',
    categoryLabel: 'Marriage',
    occasionIcon: '💍',
    price: 220.00,
    originalPrice: 290.00,
    rating: 4.9,
    reviewsCount: 68,
    description: 'Opulent Kanchipuram silk saree with pure zari border paired with matching midnight blue silk kurta.',
    fullDescription: 'The ultimate wedding luxury gift set. Features authentic pure mulberry silk woven with intricate golden zari motifs that celebrate union, prosperity, and cultural elegance.',
    svgType: 'pub-silk',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80',
    features: ['Authentic Mulberry Silk', 'Pure Gold Zari Weave', 'Includes Couple Set', 'Certified Handloom Mark'],
    inStock: true
  },
  {
    id: 'marr-flutes',
    name: 'Hand-Cut Crystal Wedding Toasting Flutes',
    category: 'marriage',
    categoryLabel: 'Marriage',
    occasionIcon: '💍',
    price: 75.00,
    originalPrice: 99.00,
    rating: 4.8,
    reviewsCount: 112,
    description: 'Set of 2 lead-free bohemian crystal champagne flutes with stems filled with sparkling diamond crystals.',
    fullDescription: 'Raise a toast to a lifetime of happiness with these radiant wedding flutes. Weighted stems filled with hundreds of sparkling micro-crystals.',
    svgType: 'marr-flutes',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80',
    features: ['Lead-Free Bohemian Crystal', 'Stem Filled With Crystals', 'Engraving Available', 'Luxury Padded Gift Chest'],
    inStock: true
  },

  // 🎉 5. PUBERTY
  {
    id: 'pub-half-saree',
    name: 'Traditional Half-Saree (Langa Voni) Silk Set',
    category: 'puberty',
    categoryLabel: 'Puberty',
    occasionIcon: '🎉',
    price: 185.00,
    originalPrice: 240.00,
    rating: 4.9,
    reviewsCount: 57,
    description: 'Exquisite silk lehenga, contrast embroidered blouse fabric, and dhavani dupatta honoring milestone coming-of-age.',
    fullDescription: 'Specially designed for traditional Ritu Kala Samskara (Puberty / Half Saree Ceremony). Handwoven with shimmering borders, peacock motifs, and auspicious color combinations.',
    svgType: 'pub-silk',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80',
    features: ['Pure Art Silk & Brocade', 'Embroidered Border Dhavani', 'Auspicious Milestone Colors', 'Traditional Zari Craft'],
    inStock: true
  },
  {
    id: 'pub-jewel',
    name: 'Temple Jewelry Hair Ornament & Jhumka Set',
    category: 'puberty',
    categoryLabel: 'Puberty',
    occasionIcon: '🎉',
    price: 92.00,
    originalPrice: 130.00,
    rating: 4.8,
    reviewsCount: 43,
    description: 'Traditional Suryan & Chandran hair ornaments, Maang Tikka, and Jhumkas with emerald and ruby stonework.',
    fullDescription: 'Complete traditional adornment set for young girls on their milestone celebration. Crafted with antique matte gold finish and high-grade kemp stones.',
    svgType: 'pub-jewel',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
    features: ['Traditional Temple Motif', 'Antique Gold Polish', 'Set of 5 Accessories', 'Velvet Storage Box'],
    inStock: true
  },
  {
    id: 'pub-brass',
    name: 'Auspicious Brass Pooja & Shagun Gift Casket',
    category: 'puberty',
    categoryLabel: 'Puberty',
    occasionIcon: '🎉',
    price: 54.00,
    originalPrice: 75.00,
    rating: 4.7,
    reviewsCount: 39,
    description: 'Hand-carved brass Kumkum box, deepam diya, and auspicious shagun coins presented in wooden trunk.',
    fullDescription: 'A traditional blessing hamper gifted by relatives and elders during ceremony rituals, conveying prosperity, good fortune, and grace.',
    svgType: 'gift-box',
    image: 'https://images.unsplash.com/photo-1609137144822-2615c4d5c90b?auto=format&fit=crop&w=700&q=80',
    features: ['Solid Pure Brass Items', 'Hand-Engraved Detailing', 'Traditional Wooden Chest', 'Auspicious Ritual Ready'],
    inStock: true
  },

  // 🎁 6. OTHER OCCASIONS
  {
    id: 'oth-basket',
    name: 'Grand Gourmet Housewarming Gift Basket',
    category: 'other',
    categoryLabel: 'Other Occasions',
    occasionIcon: '🎁',
    price: 65.00,
    originalPrice: 89.00,
    rating: 4.9,
    reviewsCount: 120,
    description: 'Woven wicker basket overflowing with organic specialty teas, honey jars, roasted nuts & scented candles.',
    fullDescription: 'Perfect for Housewarmings, Promotions, Baby Showers, and New Beginnings. Packed with natural organic treats, aromatherapy candles, and celebration goodies.',
    svgType: 'oth-basket',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80',
    features: ['Reusable Willow Basket', 'Organic Specialty Teas', 'Soy Aromatherapy Candle', 'Eco-Friendly Packing'],
    inStock: true
  },
  {
    id: 'oth-award',
    name: 'Executive Crystal Trophy & Pen Desk Set',
    category: 'other',
    categoryLabel: 'Other Occasions',
    occasionIcon: '🎁',
    price: 48.00,
    originalPrice: 65.00,
    rating: 4.8,
    reviewsCount: 78,
    description: 'Customizable optical crystal desk memento with matching handcrafted rosewood ballpoint pen.',
    fullDescription: 'Ideal for Corporate Milestones, Graduations, Farewells, and Retirement ceremonies. Crisp laser engraving available for recipient names and achievements.',
    svgType: 'gift-box',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=700&q=80',
    features: ['Optical K9 Crystal', 'Natural Rosewood Pen', 'Free Text Engraving', 'Leather Executive Case'],
    inStock: true
  },
  {
    id: 'oth-dryfruit',
    name: 'Festive Imperial Dry Fruits & Saffron Box',
    category: 'other',
    categoryLabel: 'Other Occasions',
    occasionIcon: '🎁',
    price: 52.00,
    originalPrice: 70.00,
    rating: 4.9,
    reviewsCount: 145,
    description: 'Royal velvet box with 4 airtight brass jars filled with pistachios, cashews, Mamra almonds & saffron.',
    fullDescription: 'Elevate festive gifting for Diwali, Eid, Christmas, New Year, and Family reunions with premium hand-sorted grade A dry fruits and authentic Kashmiri saffron.',
    svgType: 'oth-basket',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80',
    features: ['Grade-A California Nuts', 'Pure Kashmiri Kesar Saffron', 'Airtight Brass Jars', 'Royal Blue Velvet Box'],
    inStock: true
  }
];

// ==========================================
// 2. SVG VECTOR ART GENERATOR
// ==========================================
function getProductSvgArt(type) {
  switch(type) {
    case 'bday-cake':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
            <linearGradient id="creamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#bae6fd"/>
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="85" rx="38" ry="8" fill="#071228" opacity="0.6"/>
          <!-- Base Tier -->
          <rect x="20" y="55" width="60" height="26" rx="4" fill="url(#cakeGrad)"/>
          <ellipse cx="50" cy="55" rx="30" ry="6" fill="url(#creamGrad)"/>
          <!-- Top Tier -->
          <rect x="30" y="36" width="40" height="20" rx="3" fill="url(#cakeGrad)"/>
          <ellipse cx="50" cy="36" rx="20" ry="4" fill="url(#creamGrad)"/>
          <!-- Candles & Flames -->
          <rect x="42" y="24" width="3" height="12" fill="#ffffff" rx="1"/>
          <rect x="55" y="24" width="3" height="12" fill="#ffffff" rx="1"/>
          <circle cx="43.5" cy="20" r="3" fill="#fbbf24"/>
          <circle cx="56.5" cy="20" r="3" fill="#fbbf24"/>
          <circle cx="43.5" cy="20" r="1.5" fill="#f43f5e"/>
          <circle cx="56.5" cy="20" r="1.5" fill="#f43f5e"/>
        </svg>
      `;

    case 'bday-hamper':
    case 'oth-basket':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="basketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0f2b5c"/>
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="86" rx="36" ry="8" fill="#071228" opacity="0.6"/>
          <!-- Basket Body -->
          <path d="M22 48 L28 82 Q50 88 72 82 L78 48 Z" fill="url(#basketGrad)" stroke="#38bdf8" stroke-width="2"/>
          <!-- Basket Texture -->
          <path d="M28 58 Q50 64 72 58 M26 68 Q50 74 74 68" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5" fill="none"/>
          <!-- Bottle & Items inside -->
          <rect x="44" y="25" width="12" height="25" rx="3" fill="#38bdf8"/>
          <circle cx="36" cy="42" r="9" fill="#00f2fe"/>
          <rect x="58" y="34" width="14" height="16" rx="2" fill="#fbbf24"/>
          <!-- Ribbons -->
          <path d="M50 48 Q40 38 32 46 Q50 56 50 48 Z" fill="#f43f5e"/>
          <path d="M50 48 Q60 38 68 46 Q50 56 50 48 Z" fill="#f43f5e"/>
          <circle cx="50" cy="48" r="4" fill="#ffffff"/>
        </svg>
      `;

    case 'bday-lamp':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#00f2fe" stop-opacity="1"/>
              <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#0284c7" stop-opacity="0.3"/>
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="85" rx="28" ry="6" fill="#071228" opacity="0.6"/>
          <!-- Wooden Base -->
          <path d="M35 72 L65 72 L62 82 L38 82 Z" fill="#132347" stroke="#38bdf8" stroke-width="1.5"/>
          <!-- Glowing Sphere Moon -->
          <circle cx="50" cy="42" r="28" fill="url(#lampGlow)"/>
          <!-- Craters & Stars -->
          <circle cx="42" cy="35" r="4" fill="rgba(255,255,255,0.4)"/>
          <circle cx="58" cy="48" r="6" fill="rgba(255,255,255,0.3)"/>
          <circle cx="52" cy="28" r="2.5" fill="rgba(255,255,255,0.5)"/>
        </svg>
      `;

    case 'anniv-rose':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="86" rx="28" ry="6" fill="#071228" opacity="0.6"/>
          <!-- Base -->
          <ellipse cx="50" cy="80" rx="25" ry="5" fill="#132347" stroke="#38bdf8" stroke-width="1.5"/>
          <!-- Glass Dome -->
          <path d="M30 80 L30 40 A20 20 0 0 1 70 40 L70 80 Z" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="1.5"/>
          <!-- Rose Bloom -->
          <circle cx="50" cy="44" r="9" fill="#f43f5e"/>
          <circle cx="48" cy="42" r="6" fill="#fb7185"/>
          <!-- Stem -->
          <path d="M50 53 Q52 64 48 76" stroke="#10b981" stroke-width="2.5" fill="none"/>
          <path d="M50 60 Q42 58 44 64 Z" fill="#10b981"/>
          <!-- Sparkles -->
          <circle cx="38" cy="48" r="1.5" fill="#fbbf24"/>
          <circle cx="62" cy="54" r="1.5" fill="#fbbf24"/>
        </svg>
      `;

    case 'anniv-watch':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="86" rx="30" ry="6" fill="#071228" opacity="0.6"/>
          <!-- Straps -->
          <rect x="42" y="10" width="16" height="80" rx="3" fill="#0c1d3b" stroke="#38bdf8" stroke-width="1.5"/>
          <!-- Watch Bezel -->
          <circle cx="50" cy="50" r="24" fill="#0f2b5c" stroke="#38bdf8" stroke-width="3"/>
          <circle cx="50" cy="50" r="20" fill="#08142b"/>
          <!-- Hands -->
          <line x1="50" y1="50" x2="50" y2="36" stroke="#00f2fe" stroke-width="2" stroke-linecap="round"/>
          <line x1="50" y1="50" x2="60" y2="50" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
          <circle cx="50" cy="50" r="3" fill="#ffffff"/>
        </svg>
      `;

    case 'anniv-frame':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <rect x="24" y="20" width="52" height="62" rx="4" fill="#0c1d3b" stroke="#38bdf8" stroke-width="3"/>
          <rect x="30" y="26" width="40" height="50" rx="2" fill="#122952"/>
          <circle cx="50" cy="45" r="10" fill="#38bdf8"/>
          <path d="M34 68 Q50 54 66 68 Z" fill="#00f2fe"/>
          <!-- Heart Badge -->
          <path d="M50 78 Q45 74 42 70 A4 4 0 0 1 50 68 A4 4 0 0 1 58 70 Q55 74 50 78 Z" fill="#f43f5e"/>
        </svg>
      `;

    case 'val-bouquet':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <path d="M34 50 L46 88 L54 88 L66 50 Z" fill="#0c234a" stroke="#38bdf8" stroke-width="2"/>
          <!-- Cluster of red roses -->
          <circle cx="50" cy="32" r="10" fill="#f43f5e"/>
          <circle cx="38" cy="40" r="9" fill="#e11d48"/>
          <circle cx="62" cy="40" r="9" fill="#e11d48"/>
          <circle cx="50" cy="45" r="9" fill="#be123c"/>
          <!-- Ribbon Bow -->
          <path d="M50 68 Q40 60 36 66 Q50 74 50 68 Z" fill="#00f2fe"/>
          <path d="M50 68 Q60 60 64 66 Q50 74 50 68 Z" fill="#00f2fe"/>
          <circle cx="50" cy="68" r="3" fill="#ffffff"/>
        </svg>
      `;

    case 'val-pendant':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Chain -->
          <path d="M30 15 Q50 50 50 56 Q50 50 70 15" stroke="#38bdf8" stroke-width="1.5" fill="none" stroke-dasharray="2,2"/>
          <!-- Interlocking Hearts -->
          <path d="M46 68 Q36 58 36 50 A8 8 0 0 1 52 46 Q56 50 52 56 Z" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <path d="M54 68 Q64 58 64 50 A8 8 0 0 0 48 46 Q44 50 48 56 Z" fill="none" stroke="#00f2fe" stroke-width="3"/>
          <circle cx="50" cy="53" r="3" fill="#fbbf24"/>
        </svg>
      `;

    case 'marr-rings':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Two Interlocking Wedding Rings -->
          <ellipse cx="40" cy="55" rx="18" ry="18" fill="none" stroke="#38bdf8" stroke-width="4.5"/>
          <ellipse cx="60" cy="55" rx="18" ry="18" fill="none" stroke="#fbbf24" stroke-width="4.5"/>
          <!-- Diamond Solitaire -->
          <polygon points="40,30 46,37 40,44 34,37" fill="#00f2fe"/>
          <polygon points="40,24 44,30 36,30" fill="#ffffff"/>
          <circle cx="40" cy="30" r="1.5" fill="#ffffff"/>
        </svg>
      `;

    case 'marr-flutes':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Flute 1 -->
          <path d="M36 25 L44 25 L42 55 L38 55 Z" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="1.5"/>
          <line x1="40" y1="55" x2="40" y2="78" stroke="#38bdf8" stroke-width="2"/>
          <ellipse cx="40" cy="78" rx="10" ry="3" fill="#38bdf8"/>
          <!-- Flute 2 (clinking) -->
          <path d="M64 25 L56 25 L58 55 L62 55 Z" fill="rgba(0, 242, 254, 0.25)" stroke="#00f2fe" stroke-width="1.5" transform="rotate(-8 60 55)"/>
          <line x1="60" y1="55" x2="60" y2="78" stroke="#00f2fe" stroke-width="2" transform="rotate(-8 60 55)"/>
          <ellipse cx="60" cy="78" rx="10" ry="3" fill="#00f2fe" transform="rotate(-8 60 55)"/>
          <!-- Cheers Stars -->
          <circle cx="50" cy="22" r="2.5" fill="#fbbf24"/>
          <circle cx="50" cy="14" r="1.5" fill="#ffffff"/>
        </svg>
      `;

    case 'pub-silk':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Traditional Silk Lehenga Drape -->
          <path d="M30 35 L70 35 L82 82 Q50 90 18 82 Z" fill="#0c234a" stroke="#38bdf8" stroke-width="2"/>
          <!-- Golden Brocade Border -->
          <path d="M20 74 Q50 82 80 74 L82 82 Q50 90 18 82 Z" fill="#fbbf24"/>
          <!-- Diagonal Zari Pallu / Dhavani -->
          <path d="M36 35 L64 35 L38 82 L24 80 Z" fill="#0284c7" opacity="0.85"/>
          <circle cx="50" cy="54" r="4" fill="#fbbf24"/>
          <circle cx="42" cy="65" r="3" fill="#00f2fe"/>
          <circle cx="58" cy="65" r="3" fill="#00f2fe"/>
        </svg>
      `;

    case 'pub-jewel':
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Temple Jewelry Tikka & Jhumka -->
          <line x1="50" y1="18" x2="50" y2="40" stroke="#fbbf24" stroke-width="2"/>
          <circle cx="50" cy="45" r="12" fill="#13244a" stroke="#fbbf24" stroke-width="2.5"/>
          <circle cx="50" cy="45" r="5" fill="#f43f5e"/>
          <!-- Jhumka Bell Bottom -->
          <path d="M38 65 Q50 56 62 65 L60 74 L40 74 Z" fill="#fbbf24"/>
          <circle cx="42" cy="77" r="1.5" fill="#00f2fe"/>
          <circle cx="50" cy="78" r="2" fill="#00f2fe"/>
          <circle cx="58" cy="77" r="1.5" fill="#00f2fe"/>
        </svg>
      `;

    default: // generic gift box
      return `
        <svg viewBox="0 0 100 100" class="product-art-svg" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="42" width="56" height="42" rx="4" fill="#0f2b5c" stroke="#38bdf8" stroke-width="2"/>
          <rect x="18" y="32" width="64" height="14" rx="3" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
          <rect x="46" y="32" width="8" height="52" fill="#00f2fe"/>
          <circle cx="50" cy="24" r="7" fill="#f43f5e"/>
        </svg>
      `;
  }
}

// ==========================================
// 3. APPLICATION STATE
// ==========================================
const appState = {
  activeCategory: 'all',
  searchQuery: '',
  priceFilter: 'all',
  ratingFilter: 'all',
  sortFilter: 'featured',
  cart: JSON.parse(localStorage.getItem('occasio_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('occasio_wishlist') || '[]'),
  selectedProduct: null
};

// ==========================================
// 4. DOM REFERENCES
// ==========================================
const UI = {
  // Brand & Nav
  brandLogo: document.getElementById('brandLogo'),
  searchInput: document.getElementById('searchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  wishlistNavBtn: document.getElementById('wishlistNavBtn'),
  wishlistCount: document.getElementById('wishlistCount'),
  cartNavBtn: document.getElementById('cartNavBtn'),
  cartNavIcon: document.getElementById('cartNavIcon'),
  cartCount: document.getElementById('cartCount'),
  // Hero
  interactiveGiftBox: document.getElementById('interactiveGiftBox'),
  giftBoxContainer: document.getElementById('giftBoxContainer'),
  reopenGiftBtn: document.getElementById('reopenGiftBtn'),
  confettiCanvas: document.getElementById('confettiCanvas'),
  // Occasion Cards & Tabs
  occasionCards: document.querySelectorAll('.occasion-card'),
  filterTabs: document.querySelectorAll('.filter-tab'),
  slidingIndicator: document.getElementById('slidingIndicator'),
  filterTabsTrack: document.getElementById('filterTabsTrack'),
  // Toolbar & Filters
  activeCategoryName: document.getElementById('activeCategoryName'),
  productsCountBadge: document.getElementById('productsCountBadge'),
  priceFilterSelect: document.getElementById('priceFilterSelect'),
  ratingFilterSelect: document.getElementById('ratingFilterSelect'),
  sortFilterSelect: document.getElementById('sortFilterSelect'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  emptyResetBtn: document.getElementById('emptyResetBtn'),
  activeFiltersRow: document.getElementById('activeFiltersRow'),
  filterTagsContainer: document.getElementById('filterTagsContainer'),
  clearAllFiltersBtn: document.getElementById('clearAllFiltersBtn'),
  // Products Grid
  productsGrid: document.getElementById('productsGrid'),
  emptyStateCard: document.getElementById('emptyStateCard'),
  // Modal
  productModal: document.getElementById('productModal'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  modalDynamicBody: document.getElementById('modalDynamicBody'),
  // Cart Drawer
  cartBackdrop: document.getElementById('cartBackdrop'),
  closeCartBtn: document.getElementById('closeCartBtn'),
  cartItemsList: document.getElementById('cartItemsList'),
  cartSubtotal: document.getElementById('cartSubtotal'),
  cartTotal: document.getElementById('cartTotal'),
  clearCartBtn: document.getElementById('clearCartBtn'),
  checkoutBtn: document.getElementById('checkoutBtn'),
  // Toast
  toastStack: document.getElementById('toastStack'),
  // Aurora Parallax
  blob1: document.getElementById('blob1'),
  blob2: document.getElementById('blob2'),
  blob3: document.getElementById('blob3')
};

// ==========================================
// 5. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initConfetti();
  initParallax();
  updateCategoryCounts();
  renderCatalog();
  updateCartDisplay();
  updateWishlistDisplay();
  setupEventListeners();

  // Trigger opening hero gift box and celebration confetti on load
  setTimeout(() => {
    triggerGiftBoxPop();
  }, 600);

  // Position initial sliding pill
  setTimeout(() => {
    updateSlidingIndicator('all');
  }, 100);
});

// ==========================================
// 6. EVENT ATTACHMENTS
// ==========================================
function setupEventListeners() {
  // Hero Gift Box Click
  UI.giftBoxContainer.addEventListener('click', triggerGiftBoxPop);
  UI.reopenGiftBtn.addEventListener('click', () => {
    triggerGiftBoxPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 6 Occasion Cards Click
  UI.occasionCards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      filterByOccasion(cat);
      // Smooth scroll to catalog
      document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Filter Tabs Click
  UI.filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-tab');
      filterByOccasion(cat);
    });
  });

  // Search Live Input
  UI.searchInput.addEventListener('input', (e) => {
    appState.searchQuery = e.target.value.trim().toLowerCase();
    UI.clearSearchBtn.style.display = appState.searchQuery ? 'block' : 'none';
    renderCatalog();
  });

  UI.clearSearchBtn.addEventListener('click', () => {
    UI.searchInput.value = '';
    appState.searchQuery = '';
    UI.clearSearchBtn.style.display = 'none';
    renderCatalog();
  });

  // Dropdown Select Filters
  UI.priceFilterSelect.addEventListener('change', (e) => {
    appState.priceFilter = e.target.value;
    renderCatalog();
  });

  UI.ratingFilterSelect.addEventListener('change', (e) => {
    appState.ratingFilter = e.target.value;
    renderCatalog();
  });

  UI.sortFilterSelect.addEventListener('change', (e) => {
    appState.sortFilter = e.target.value;
    renderCatalog();
  });

  // Reset Filters
  UI.resetFiltersBtn.addEventListener('click', resetAllFilters);
  UI.emptyResetBtn.addEventListener('click', resetAllFilters);
  UI.clearAllFiltersBtn.addEventListener('click', resetAllFilters);

  // Cart Open / Close
  UI.cartNavBtn.addEventListener('click', openCartDrawer);
  UI.closeCartBtn.addEventListener('click', closeCartDrawer);
  UI.cartBackdrop.addEventListener('click', (e) => {
    if (e.target === UI.cartBackdrop) closeCartDrawer();
  });

  // Clear Cart
  UI.clearCartBtn.addEventListener('click', () => {
    if (appState.cart.length === 0) return;
    appState.cart = [];
    saveCartState();
    updateCartDisplay();
    displayToast('Shopping bag cleared', 'fa-trash-can');
  });

  // Checkout Simulation
  UI.checkoutBtn.addEventListener('click', () => {
    if (appState.cart.length === 0) {
      displayToast('Your cart is empty! Add gifts first.', 'fa-circle-exclamation');
      return;
    }
    launchConfettiBurst(window.innerWidth / 2, window.innerHeight / 2);
    displayToast('🎉 Order placed successfully! Thank you for choosing Occasio.', 'fa-circle-check');
    appState.cart = [];
    saveCartState();
    updateCartDisplay();
    setTimeout(closeCartDrawer, 1400);
  });

  // Wishlist Nav Button
  UI.wishlistNavBtn.addEventListener('click', () => {
    if (appState.wishlist.length === 0) {
      displayToast('Wishlist is empty. Click the heart on any gift to save it!', 'fa-heart');
    } else {
      displayToast(`You have ${appState.wishlist.length} item(s) saved in your wishlist!`, 'fa-heart');
    }
  });

  // Modal Close
  UI.closeModalBtn.addEventListener('click', closeDetailsModal);
  UI.productModal.addEventListener('click', (e) => {
    if (e.target === UI.productModal) closeDetailsModal();
  });

  // Global Keys
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailsModal();
      closeCartDrawer();
    }
  });

  // Resize handler to adjust sliding pill
  window.addEventListener('resize', () => {
    updateSlidingIndicator(appState.activeCategory);
  });
}

// ==========================================
// 7. OCCASION FILTERING & SLIDING PILL SYNC
// ==========================================
window.filterByOccasion = function(category) {
  appState.activeCategory = category;

  // Sync Category Cards Active State
  UI.occasionCards.forEach(card => {
    if (card.getAttribute('data-category') === category) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  // Sync Tabs & Sliding Pill
  UI.filterTabs.forEach(tab => {
    if (tab.getAttribute('data-tab') === category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  updateSlidingIndicator(category);
  renderCatalog();
};

function updateSlidingIndicator(category) {
  const activeTab = Array.from(UI.filterTabs).find(tab => tab.getAttribute('data-tab') === category);
  if (!activeTab || !UI.slidingIndicator) return;

  const trackRect = UI.filterTabsTrack.getBoundingClientRect();
  const tabRect = activeTab.getBoundingClientRect();

  const offsetLeft = tabRect.left - trackRect.left;
  const width = tabRect.width;

  UI.slidingIndicator.style.transform = `translateX(${offsetLeft}px)`;
  UI.slidingIndicator.style.width = `${width}px`;
}

function updateCategoryCounts() {
  const counts = {
    birthday: 0,
    anniversary: 0,
    valentines: 0,
    marriage: 0,
    puberty: 0,
    other: 0
  };

  PRODUCTS.forEach(p => {
    if (counts[p.category] !== undefined) counts[p.category]++;
  });

  Object.keys(counts).forEach(cat => {
    const badge = document.getElementById(`badge-count-${cat}`);
    if (badge) badge.textContent = `${counts[cat]} items`;
  });
}

function getFilteredDataset() {
  return PRODUCTS.filter(item => {
    // Category match
    if (appState.activeCategory !== 'all' && item.category !== appState.activeCategory) {
      return false;
    }

    // Search query match
    if (appState.searchQuery) {
      const q = appState.searchQuery;
      const matchTitle = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCat = item.categoryLabel.toLowerCase().includes(q);
      const matchFeatures = item.features.some(f => f.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchCat && !matchFeatures) {
        return false;
      }
    }

    // Price range match
    if (appState.priceFilter === 'under-50' && item.price >= 50) return false;
    if (appState.priceFilter === '50-100' && (item.price < 50 || item.price > 100)) return false;
    if (appState.priceFilter === '100-200' && (item.price < 100 || item.price > 200)) return false;
    if (appState.priceFilter === 'above-200' && item.price <= 200) return false;

    // Rating match
    if (appState.ratingFilter !== 'all' && item.rating < parseFloat(appState.ratingFilter)) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    switch (appState.sortFilter) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      case 'featured':
      default: return 0;
    }
  });
}

function resetAllFilters() {
  appState.activeCategory = 'all';
  appState.searchQuery = '';
  appState.priceFilter = 'all';
  appState.ratingFilter = 'all';
  appState.sortFilter = 'featured';

  UI.searchInput.value = '';
  UI.clearSearchBtn.style.display = 'none';
  UI.priceFilterSelect.value = 'all';
  UI.ratingFilterSelect.value = 'all';
  UI.sortFilterSelect.value = 'featured';

  filterByOccasion('all');
  displayToast('Filters reset to default', 'fa-rotate-left');
}

// ==========================================
// 8. PRODUCT RENDERING & CARD GENERATION
// ==========================================
function renderCatalog() {
  const filtered = getFilteredDataset();

  // Update Title text indicator
  const titles = {
    all: '✨ All Occasions',
    birthday: '🎂 Birthday Gifts',
    anniversary: '💐 Anniversary Romance',
    valentines: "❤️ Valentine's Specials",
    marriage: '💍 Marriage & Wedding',
    puberty: '🎉 Puberty Ceremonies',
    other: '🎁 Other Celebrations'
  };
  UI.activeCategoryName.textContent = titles[appState.activeCategory] || 'All Occasions';
  UI.productsCountBadge.textContent = `${filtered.length} Product${filtered.length === 1 ? '' : 's'}`;

  // Update Applied Tag Pills
  updateFilterTagsBar();

  // Handle empty state
  if (filtered.length === 0) {
    UI.productsGrid.innerHTML = '';
    UI.emptyStateCard.style.display = 'block';
    return;
  }
  UI.emptyStateCard.style.display = 'none';

  // Render Product Cards
  UI.productsGrid.innerHTML = filtered.map(item => {
    const isWish = appState.wishlist.includes(item.id);
    const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);

    return `
      <article class="product-item-card" data-id="${item.id}">
        <!-- SVG Vector Art Media Wrapper -->
        <div class="product-art-wrapper" id="art-${item.id}">
          ${getProductSvgArt(item.svgType)}

          <div class="card-top-badges">
            <span class="occ-badge-tag">${item.occasionIcon} ${item.categoryLabel}</span>
            <span class="discount-badge-tag">${discount}% OFF</span>
          </div>

          <button 
            class="card-wishlist-action ${isWish ? 'active' : ''}" 
            onclick="toggleProductWishlist('${item.id}', event)"
            title="${isWish ? 'Remove from wishlist' : 'Save to wishlist'}"
            aria-label="Wishlist"
          >
            <i class="${isWish ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <!-- Content Body -->
        <div class="product-card-body">
          <div class="card-star-rating">
            <div class="star-icons">
              ${renderStars(item.rating)}
            </div>
            <span class="star-score">${item.rating.toFixed(1)}</span>
            <span class="review-tally">(${item.reviewsCount})</span>
          </div>

          <h3 class="product-item-title" title="${item.name}">${item.name}</h3>
          <p class="product-item-desc">${item.description}</p>

          <div class="price-display-row">
            <span class="price-current">$${item.price.toFixed(2)}</span>
            <span class="price-original">$${item.originalPrice.toFixed(2)}</span>
            <span class="price-savings">Save $${(item.originalPrice - item.price).toFixed(2)}</span>
          </div>

          <div class="product-card-buttons">
            <button class="btn btn-outline" onclick="openDetailsModal('${item.id}')">
              <i class="fa-solid fa-eye"></i> View Details
            </button>
            <button class="btn btn-primary" onclick="handleAddToCart('${item.id}', event, 1)">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderStars(rating) {
  let output = '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.4;
  for (let i = 0; i < full; i++) output += '<i class="fa-solid fa-star"></i>';
  if (half) output += '<i class="fa-solid fa-star-half-stroke"></i>';
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) output += '<i class="fa-regular fa-star"></i>';
  return output;
}

function updateFilterTagsBar() {
  const tags = [];
  if (appState.activeCategory !== 'all') {
    tags.push({ label: `Occasion: ${appState.activeCategory}`, type: 'cat' });
  }
  if (appState.searchQuery) {
    tags.push({ label: `Search: "${appState.searchQuery}"`, type: 'search' });
  }
  if (appState.priceFilter !== 'all') {
    tags.push({ label: `Price: ${UI.priceFilterSelect.options[UI.priceFilterSelect.selectedIndex].text}`, type: 'price' });
  }
  if (appState.ratingFilter !== 'all') {
    tags.push({ label: `Rating: ${UI.ratingFilterSelect.options[UI.ratingFilterSelect.selectedIndex].text}`, type: 'rating' });
  }

  if (tags.length > 0) {
    UI.activeFiltersRow.style.display = 'flex';
    UI.filterTagsContainer.innerHTML = tags.map(tag => `
      <span class="filter-tag-pill">
        ${tag.label}
        <button onclick="removeFilter('${tag.type}')" title="Remove filter">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </span>
    `).join('');
  } else {
    UI.activeFiltersRow.style.display = 'none';
  }
}

window.removeFilter = function(type) {
  if (type === 'cat') filterByOccasion('all');
  if (type === 'search') {
    appState.searchQuery = '';
    UI.searchInput.value = '';
    UI.clearSearchBtn.style.display = 'none';
  }
  if (type === 'price') {
    appState.priceFilter = 'all';
    UI.priceFilterSelect.value = 'all';
  }
  if (type === 'rating') {
    appState.ratingFilter = 'all';
    UI.ratingFilterSelect.value = 'all';
  }
  renderCatalog();
};

// ==========================================
// 9. FLY-TO-CART ANIMATION & CART SYSTEM
// ==========================================
window.handleAddToCart = function(productId, event, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Execute Fly to Cart Animation if trigger element exists
  if (event && event.target) {
    const card = event.target.closest('.product-item-card');
    const artWrapper = card ? card.querySelector('.product-art-wrapper') : null;
    if (artWrapper) {
      animateFlyToCart(artWrapper);
    }
  }

  // Add Item to State
  const existing = appState.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    appState.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      svgType: product.svgType,
      categoryLabel: product.categoryLabel,
      occasionIcon: product.occasionIcon,
      quantity: qty
    });
  }

  saveCartState();
  updateCartDisplay();
  triggerCartBump();
  displayToast(`Added ${qty}x "${product.name}" to bag!`, 'fa-bag-shopping');
};

function animateFlyToCart(sourceElement) {
  const rect = sourceElement.getBoundingClientRect();
  const cartRect = UI.cartNavBtn.getBoundingClientRect();

  // Create clone
  const clone = document.createElement('div');
  clone.className = 'flying-product-clone';
  clone.innerHTML = sourceElement.querySelector('svg') ? sourceElement.querySelector('svg').outerHTML : '🎁';
  clone.style.top = `${rect.top}px`;
  clone.style.left = `${rect.left + (rect.width / 2) - 30}px`;

  document.body.appendChild(clone);

  // Trigger curve flight to cart icon
  requestAnimationFrame(() => {
    clone.style.top = `${cartRect.top + (cartRect.height / 2) - 30}px`;
    clone.style.left = `${cartRect.left + (cartRect.width / 2) - 30}px`;
    clone.style.transform = 'scale(0.2) rotate(360deg)';
    clone.style.opacity = '0';
  });

  setTimeout(() => {
    if (clone.parentNode) clone.parentNode.removeChild(clone);
  }, 750);
}

function triggerCartBump() {
  UI.cartCount.classList.remove('cart-bump');
  UI.cartNavIcon.classList.remove('cart-bump');
  void UI.cartCount.offsetWidth; // force reflow
  UI.cartCount.classList.add('cart-bump');
  UI.cartNavIcon.classList.add('cart-bump');
}

window.adjustCartQty = function(productId, delta) {
  const index = appState.cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  appState.cart[index].quantity += delta;
  if (appState.cart[index].quantity <= 0) {
    appState.cart.splice(index, 1);
    displayToast('Item removed from shopping bag', 'fa-trash-can');
  }

  saveCartState();
  updateCartDisplay();
};

window.deleteFromCart = function(productId) {
  appState.cart = appState.cart.filter(item => item.id !== productId);
  saveCartState();
  updateCartDisplay();
  displayToast('Item removed from shopping bag', 'fa-trash-can');
};

function saveCartState() {
  localStorage.setItem('occasio_cart', JSON.stringify(appState.cart));
}

function updateCartDisplay() {
  const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
  UI.cartCount.textContent = totalItems;

  if (appState.cart.length === 0) {
    UI.cartItemsList.innerHTML = `
      <div class="cart-empty-notice">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4>Your shopping bag is empty</h4>
        <p>Pick a celebration category and add memorable gifts!</p>
      </div>
    `;
    UI.cartSubtotal.textContent = '$0.00';
    UI.cartTotal.textContent = '$0.00';
    return;
  }

  const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  UI.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  UI.cartTotal.textContent = `$${subtotal.toFixed(2)}`;

  UI.cartItemsList.innerHTML = appState.cart.map(item => `
    <div class="cart-card-row">
      <div class="cart-thumb-img">
        ${getProductSvgArt(item.svgType)}
      </div>
      <div class="cart-card-details">
        <h4 class="cart-product-title">${item.name}</h4>
        <div class="cart-product-price">$${(item.price * item.quantity).toFixed(2)} <span style="font-size:0.75rem; color:var(--text-dim);">($${item.price.toFixed(2)} ea)</span></div>
        <div class="cart-actions-row">
          <div class="cart-stepper">
            <button onclick="adjustCartQty('${item.id}', -1)" aria-label="Decrease quantity">-</button>
            <span>${item.quantity}</span>
            <button onclick="adjustCartQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
          <button class="cart-trash-btn" onclick="deleteFromCart('${item.id}')" title="Delete">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function openCartDrawer() {
  UI.cartBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  UI.cartBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// 10. PRODUCT DETAILS MODAL
// ==========================================
window.openDetailsModal = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  appState.selectedProduct = product;

  let modalQty = 1;
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  UI.modalDynamicBody.innerHTML = `
    <div class="modal-split-grid">
      <!-- Media Pane -->
      <div class="modal-media-pane">
        ${getProductSvgArt(product.svgType)}
      </div>

      <!-- Details Pane -->
      <div class="modal-info-pane">
        <span class="modal-tag-row">
          ${product.occasionIcon} ${product.categoryLabel}
        </span>
        <h2 class="modal-product-title" id="modalProductTitle">${product.name}</h2>

        <div class="modal-pricing-bar">
          <div>
            <span class="modal-price-val">$${product.price.toFixed(2)}</span>
            <span class="price-original" style="font-size:1rem; margin-left:0.5rem;">$${product.originalPrice.toFixed(2)}</span>
            <span class="price-savings" style="margin-left:0.75rem;">${discount}% OFF</span>
          </div>

          <div class="card-star-rating">
            <div class="star-icons">${renderStars(product.rating)}</div>
            <span class="star-score">${product.rating.toFixed(1)}</span>
            <span class="review-tally">(${product.reviewsCount} reviews)</span>
          </div>
        </div>

        <p class="modal-full-desc">${product.fullDescription}</p>

        <!-- Bullet Features -->
        <div class="modal-features-list">
          ${product.features.map(f => `
            <div class="feature-bullet">
              <i class="fa-solid fa-circle-check"></i>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>

        <!-- Quantity & Add Button -->
        <div class="modal-qty-control">
          <label style="font-weight:700; color:var(--text-muted);">Quantity:</label>
          <div class="stepper-box">
            <button id="modalQtyMinus">-</button>
            <input type="text" id="modalQtyInput" value="1" readonly>
            <button id="modalQtyPlus">+</button>
          </div>
        </div>

        <div style="display:flex; gap:0.75rem;">
          <button class="btn btn-primary" style="flex:1;" id="modalAddBtn">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart • $${product.price.toFixed(2)}
          </button>
          <button class="btn btn-outline" onclick="toggleProductWishlist('${product.id}', event)">
            <i class="${appState.wishlist.includes(product.id) ? 'fa-solid text-danger' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  // Stepper handlers
  const qtyInput = document.getElementById('modalQtyInput');
  const qtyMinus = document.getElementById('modalQtyMinus');
  const qtyPlus = document.getElementById('modalQtyPlus');
  const modalAddBtn = document.getElementById('modalAddBtn');

  qtyMinus.addEventListener('click', () => {
    if (modalQty > 1) {
      modalQty--;
      qtyInput.value = modalQty;
      modalAddBtn.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Add to Cart • $${(product.price * modalQty).toFixed(2)}`;
    }
  });

  qtyPlus.addEventListener('click', () => {
    if (modalQty < 10) {
      modalQty++;
      qtyInput.value = modalQty;
      modalAddBtn.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Add to Cart • $${(product.price * modalQty).toFixed(2)}`;
    }
  });

  modalAddBtn.addEventListener('click', (e) => {
    handleAddToCart(product.id, e, modalQty);
    closeDetailsModal();
  });

  UI.productModal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

function closeDetailsModal() {
  UI.productModal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// 11. WISHLIST MANAGEMENT
// ==========================================
window.toggleProductWishlist = function(productId, event) {
  if (event) event.stopPropagation();

  const idx = appState.wishlist.indexOf(productId);
  if (idx > -1) {
    appState.wishlist.splice(idx, 1);
    displayToast('Removed from your wishlist', 'fa-heart-crack');
  } else {
    appState.wishlist.push(productId);
    displayToast('Saved to your wishlist! ❤️', 'fa-heart');
  }

  localStorage.setItem('occasio_wishlist', JSON.stringify(appState.wishlist));
  updateWishlistDisplay();
  renderCatalog();
};

function updateWishlistDisplay() {
  UI.wishlistCount.textContent = appState.wishlist.length;
}

// ==========================================
// 12. TOAST STACK NOTIFICATIONS
// ==========================================
function displayToast(msg, icon = 'fa-circle-info') {
  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-ico"></i>
    <span>${msg}</span>
  `;

  UI.toastStack.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2800);
}

// ==========================================
// 13. INTERACTIVE 3D GIFT BOX & CONFETTI ENGINE
// ==========================================
function triggerGiftBoxPop() {
  UI.interactiveGiftBox.classList.remove('opened');
  void UI.interactiveGiftBox.offsetWidth; // reflow
  UI.interactiveGiftBox.classList.add('opened');

  const rect = UI.interactiveGiftBox.getBoundingClientRect();
  const originX = rect.left + (rect.width / 2);
  const originY = rect.top + (rect.height / 3);

  launchConfettiBurst(originX, originY);
  displayToast('Surprise gift unlocked! Enjoy special offers. 🎁', 'fa-wand-magic-sparkles');
}

// Confetti Particle Physics
let confettiCtx = null;
let confettiParticles = [];
let confettiAnimId = null;

function initConfetti() {
  const canvas = UI.confettiCanvas;
  if (!canvas) return;
  confettiCtx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
}

function launchConfettiBurst(x, y) {
  if (!confettiCtx) return;

  const colors = ['#00f2fe', '#38bdf8', '#0284c7', '#ffffff', '#fbbf24', '#f43f5e'];
  const particleCount = 75;

  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5);
    const speed = Math.random() * 8 + 4;
    confettiParticles.push({
      x: x || window.innerWidth / 2,
      y: y || window.innerHeight / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      life: 1,
      decay: Math.random() * 0.015 + 0.012
    });
  }

  if (!confettiAnimId) {
    animateConfetti();
  }
}

function animateConfetti() {
  if (!confettiCtx) return;
  confettiCtx.clearRect(0, 0, UI.confettiCanvas.width, UI.confettiCanvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.22; // gravity
    p.vx *= 0.98; // drag
    p.rotation += p.rotationSpeed;
    p.life -= p.decay;

    if (p.life <= 0 || p.y > UI.confettiCanvas.height) {
      confettiParticles.splice(i, 1);
      continue;
    }

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.globalAlpha = p.life;
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    confettiCtx.restore();
  }

  if (confettiParticles.length > 0) {
    confettiAnimId = requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimId = null;
    confettiCtx.clearRect(0, 0, UI.confettiCanvas.width, UI.confettiCanvas.height);
  }
}

// ==========================================
// 14. MOUSE PARALLAX AURORA MESH
// ==========================================
function initParallax() {
  window.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth) - 0.5;
    const mouseY = (e.clientY / window.innerHeight) - 0.5;

    if (UI.blob1) UI.blob1.style.transform = `translate(${mouseX * 40}px, ${mouseY * 40}px)`;
    if (UI.blob2) UI.blob2.style.transform = `translate(${-mouseX * 50}px, ${-mouseY * 50}px)`;
    if (UI.blob3) UI.blob3.style.transform = `translate(${mouseX * 25}px, ${mouseY * 25}px)`;
  });
}
