/**
 * GIFTLY - STATIC DATA REPOSITORY
 * js/data.js
 * Contains all static collections: gifts, categories, testimonials, and FAQs.
 */

/* ==========================================================================
   FEATURED GIFTS DATA (6 Items)
   ========================================================================== */
const giftsData = [
  {
    id: "g1",
    name: "Luxury Eternal Rose Box",
    category: "Anniversary & Romance",
    price: "₹2,499",
    oldPrice: "₹3,499",
    rating: 4.9,
    reviews: 184,
    discount: "28% OFF",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
    desc: "Hand-preserved real Parisian roses in a velvet gold-embossed box, lasting up to 3 years."
  },
  {
    id: "g2",
    name: "Personalized Celestial Star Map",
    category: "Special Moments",
    price: "₹1,899",
    oldPrice: "₹2,599",
    rating: 4.8,
    reviews: 142,
    discount: "26% OFF",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    desc: "Custom high-resolution constellation map replicating the exact night sky of your milestone date."
  },
  {
    id: "g3",
    name: "Artisanal Gourmet Chocolate Hamper",
    category: "Festive & Celebrations",
    price: "₹1,699",
    oldPrice: "₹2,199",
    rating: 5.0,
    reviews: 215,
    discount: "22% OFF",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
    desc: "16 handcrafted single-origin Belgian truffles presented with silk ribbons and personalized note."
  },
  {
    id: "g4",
    name: "Aromatherapy Ceramic Diffuser Set",
    category: "Wellness & Birthday",
    price: "₹2,199",
    oldPrice: "₹2,999",
    rating: 4.9,
    reviews: 98,
    discount: "27% OFF",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    desc: "Minimalist ultrasonic ceramic mist diffuser paired with 4 pure organic botanical essential oils."
  },
  {
    id: "g5",
    name: "Vintage Golden Quill & Leather Journal",
    category: "Keepsakes & Graduations",
    price: "₹1,499",
    oldPrice: "₹1,999",
    rating: 4.7,
    reviews: 86,
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    desc: "Top-grain genuine leather bound journal accompanied by a brass-dipped calligraphy fountain pen."
  },
  {
    id: "g6",
    name: "Celebration Champagne & Flutes Hamper",
    category: "Wedding & Congratulations",
    price: "₹3,299",
    oldPrice: "₹4,299",
    rating: 5.0,
    reviews: 164,
    discount: "23% OFF",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    desc: "Twin monogrammed crystal flutes, artisanal sparkling nectar, and gourmet sweet pairings."
  }
];

/* ==========================================================================
   OCCASIONS & CATEGORIES DATA (12 Items)
   - First 6 are shown on index.html
   - All 12 are showcased on categories.html
   ========================================================================== */
const categoriesData = [
  {
    id: "cat-birthday",
    name: "Birthday Celebrations",
    count: "120+ Gifts",
    icon: "fa-cake-candles",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80",
    desc: "Joyful hampers, keepsake jewelry, and delightful surprises designed to light up their big day."
  },
  {
    id: "cat-anniversary",
    name: "Romantic Anniversary",
    count: "95+ Gifts",
    icon: "fa-heart",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
    desc: "Eternal roses, engraved love lockets, and intimate experiences to honor timeless memories."
  },
  {
    id: "cat-wedding",
    name: "Weddings & Couples",
    count: "80+ Gifts",
    icon: "fa-champagne-glasses",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    desc: "Bespoke home accents, monogrammed glassware, and elegant hampers for the newlyweds."
  },
  {
    id: "cat-valentine",
    name: "Valentine & Romance",
    count: "110+ Gifts",
    icon: "fa-gift",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
    desc: "Heartwarming gestures, velvety chocolates, and scent sets that express your deepest love."
  },
  {
    id: "cat-baby",
    name: "Baby Shower & Newborn",
    count: "65+ Gifts",
    icon: "fa-baby-carriage",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    desc: "Organic cotton bundles, milestone scrapbooks, and adorable nursery comfort gifts."
  },
  {
    id: "cat-festive",
    name: "Festive & Holidays",
    count: "150+ Gifts",
    icon: "fa-wand-magic-sparkles",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80",
    desc: "Handmade diyas, gourmet sweet baskets, and golden decor pieces to illuminate traditions."
  },
  {
    id: "cat-corporate",
    name: "Corporate & Executive",
    count: "70+ Gifts",
    icon: "fa-briefcase",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    desc: "Refined leather goods, desk statement accessories, and luxury tea tasting blends."
  },
  {
    id: "cat-housewarming",
    name: "Housewarming",
    count: "85+ Gifts",
    icon: "fa-house-chimney",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    desc: "Artistic ceramic vases, botanical planters, and ambient soy wax candle collections."
  },
  {
    id: "cat-congrats",
    name: "Congratulations & Promo",
    count: "60+ Gifts",
    icon: "fa-award",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
    desc: "Appreciation stationery, celebration treats, and motivational keepsakes for achievements."
  },
  {
    id: "cat-wellness",
    name: "Spa & Wellness",
    count: "55+ Gifts",
    icon: "fa-spa",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    desc: "Himalayan bath salts, herbal infusion sets, and plush silk sleep masks for pure calm."
  },
  {
    id: "cat-personalized",
    name: "Custom Engraved Gifts",
    count: "90+ Gifts",
    icon: "fa-pen-nib",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    desc: "Custom engraved wooden frames, jewelry initials, and personalized memory journals."
  },
  {
    id: "cat-pets",
    name: "Pet Lovers Specials",
    count: "40+ Gifts",
    icon: "fa-paw",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    desc: "Pawprint impression kits, custom pet portraits, and gourmet organic pet treat jars."
  }
];

/* ==========================================================================
   TESTIMONIALS DATA (3 Items)
   ========================================================================== */
const testimonialsData = [
  {
    id: "t1",
    name: "Aanya Sharma",
    role: "Bangalore, Verified Customer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "Giftly made my sister's wedding anniversary unforgettable! The Eternal Rose Box arrived in immaculate condition with breathtaking gold ribbon packaging. The handwritten note touch was so heartfelt."
  },
  {
    id: "t2",
    name: "Rohan Varma",
    role: "Mumbai, Verified Customer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "I needed a rush delivery for my fiancée's birthday and was skeptical, but Giftly delivered in under 4 hours! The custom celestial star map brought genuine happy tears. Simply world-class quality."
  },
  {
    id: "t3",
    name: "Priyanka Patel",
    role: "Delhi NCR, Verified Customer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "The attention to detail in packaging is unlike any other luxury store. Every item feels like a bespoke treasure. The artisanal chocolate hamper was fresh, rich, and truly premium!"
  }
];

/* ==========================================================================
   FAQS DATA (5 Items)
   ========================================================================== */
const faqsData = [
  {
    id: "faq-1",
    question: "How does same-day luxury delivery work?",
    answer: "We offer priority same-day delivery across 50+ major metro cities for all orders placed before 3:00 PM. Each gift is carefully inspected, packed in temperature-monitored conditions, and hand-delivered with protective gift packaging."
  },
  {
    id: "faq-2",
    question: "Can I add a personalized greeting card or message?",
    answer: "Absolutely! Every Giftly order includes a complimentary gold-embossed greeting card. During your selection, you can craft a custom message which our calligraphers transcribe into a keepsake envelope."
  },
  {
    id: "faq-3",
    question: "What makes Giftly packaging unique?",
    answer: "All Giftly presents are housed in rigid eco-luxury keepsake boxes tied with dual-faced satin ribbons, finished with our signature wax seal and protective cushioning to guarantee a showroom-grade unboxing experience."
  },
  {
    id: "faq-4",
    question: "Are your eternal roses and botanical gifts natural?",
    answer: "Yes, our eternal roses are 100% natural blossoms harvested at peak bloom in Ecuador and Paris. They undergo a non-toxic preservation process that retains their soft petal texture and vibrant colors for up to 3 years without water."
  },
  {
    id: "faq-5",
    question: "What is your return or replacement guarantee?",
    answer: "We offer a 100% Delight Guarantee. In the rare event that your gift arrives damaged or fails to match your expectations, our concierge support will dispatch a replacement immediately or process a full refund within 24 hours."
  }
];
