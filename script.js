/* =========================================================
   ESRAA GALLERY - script.js
   Premium handmade boutique e-commerce functionality
   Tech: Vanilla JavaScript only
   ========================================================= */


/* =========================================================
   1. EASY-TO-EDIT BRAND CONFIG
   Update payment links, contact details, and brand info here.
   ========================================================= */

const BRAND_CONFIG = {
  brandName: "ESRAA GALLERY",
  currency: "USD",
  contactEmail: "hello@esraagallery.com",
  location: "New Jersey, USA",

  socialLinks: {
    instagram: "https://www.instagram.com/esra_gallery0?igsh=MW5odTM0amhsaGp4cw==",
    etsy: "https://www.etsy.com/shop/EsraGallery0",
    facebook: "https://www.facebook.com/"
  },

  paymentLinks: {
    // Replace these placeholders with your real payment links later.
    zelleEmail: "hello@esraagallery.com",
    venmoBusiness: "https://venmo.com/u/your-business-placeholder",
    stripe: "https://buy.stripe.com/your-placeholder-link",
    paypal: "https://www.paypal.com/paypalme/your-placeholder-link"
  }
};


/* =========================================================
   2. PRODUCT DATA
   Edit products, prices, images, colors, badges, and stock here.
   Product cards are created automatically from this array.
   ========================================================= */

const products = [
  {
    id: 1,
    name: "Floral Resin Domino Set",
    slug: "floral-resin-domino-set",
    category: "Resin",
    collection: "Best Sellers",
    price: 45,
    salePrice: null,
    description:
      "A handmade floral resin domino set crafted with elegant colors, delicate details, and a premium gift-ready boutique feel.",
    seoDescription:
      "Shop a handmade floral resin domino set by ESRAA GALLERY, perfect for luxury gifting, game nights, and boutique home decor.",
    images: ["images/products/product-1-1.jpg", "images/products/product-1-2.jpg"],
    hoverImage: "images/products/product-1-2.jpg",
    colors: [
      { name: "Cream", hex: "#f8f1e7" },
      { name: "Gold", hex: "#b88a44" },
      { name: "Soft Pink", hex: "#e9b7b7" }
    ],
    availability: "In Stock",
    quantity: 6,
    customOrder: true,
    badges: ["Best Seller"]
  },
  {
    id: 2,
    name: "Handmade Resin Bookmark",
    slug: "handmade-resin-bookmark",
    category: "Resin",
    collection: "New Arrivals",
    price: 16,
    salePrice: null,
    description:
      "A one-of-a-kind handmade resin bookmark with soft boutique details, perfect for readers, teachers, and thoughtful gifts.",
    seoDescription:
      "Handmade resin bookmark by ESRAA GALLERY, designed as a meaningful custom gift and elegant reading accessory.",
    images: ["images/products/product-2-1.jpg", "images/products/product-2-2.jpg"],
    hoverImage: "images/products/product-2-2.jpg",
    colors: [
      { name: "Clear", hex: "#f7fbff" },
      { name: "Blush", hex: "#f4c6c6" },
      { name: "Gold", hex: "#d9b879" }
    ],
    availability: "In Stock",
    quantity: 12,
    customOrder: true,
    badges: ["New"]
  },
  {
    id: 3,
    name: "Custom Resin Chess Set",
    slug: "custom-resin-chess-set",
    category: "Resin",
    collection: "Gift Ideas",
    price: 95,
    salePrice: null,
    description:
      "A premium handmade custom resin chess set designed for collectors, home decor lovers, and meaningful luxury gifting.",
    seoDescription:
      "Custom handmade resin chess set by ESRAA GALLERY with elegant boutique craftsmanship and personalized color options.",
    images: ["images/products/product-3-1.jpg", "images/products/product-3-2.jpg"],
    hoverImage: "images/products/product-3-2.jpg",
    colors: [
      { name: "Emerald", hex: "#173f35" },
      { name: "Milky White", hex: "#f5f0e9" },
      { name: "Gold", hex: "#b88a44" }
    ],
    availability: "In Stock",
    quantity: 3,
    customOrder: true,
    badges: ["Best Seller"]
  },
  {
    id: 4,
    name: "Resin Tic-Tac-Toe Set",
    slug: "resin-tic-tac-toe-set",
    category: "Resin",
    collection: "On Sale",
    price: 38,
    salePrice: 30,
    description:
      "A playful handmade resin tic-tac-toe set with polished boutique style, perfect for coffee tables and gift boxes.",
    seoDescription:
      "Handmade resin tic-tac-toe set by ESRAA GALLERY, a stylish custom gift and elegant handmade game set.",
    images: ["images/products/product-4-1.jpg", "images/products/product-4-2.jpg"],
    hoverImage: "images/products/product-4-2.jpg",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Green", hex: "#456b5f" },
      { name: "Gold", hex: "#b88a44" }
    ],
    availability: "In Stock",
    quantity: 5,
    customOrder: true,
    badges: ["Sale"]
  },
  {
    id: 5,
    name: "Handmade Soy Candle",
    slug: "handmade-soy-candle",
    category: "Candles",
    collection: "Winter",
    price: 24,
    salePrice: null,
    description:
      "A warm handmade soy candle created for cozy moments, thoughtful gifting, and elegant home styling.",
    seoDescription:
      "Handmade soy candle by ESRAA GALLERY, perfect for cozy home decor, gifts, and boutique candle lovers.",
    images: ["images/products/product-5-1.jpg", "images/products/product-5-2.jpg"],
    hoverImage: "images/products/product-5-2.jpg",
    colors: [
      { name: "Cream", hex: "#f8f1e7" },
      { name: "Amber", hex: "#c18955" },
      { name: "Warm Gold", hex: "#d9b879" }
    ],
    availability: "In Stock",
    quantity: 10,
    customOrder: false,
    badges: ["New"]
  },
  {
    id: 6,
    name: "Handmade Ceramic Bowl",
    slug: "handmade-ceramic-bowl",
    category: "Pottery",
    collection: "Home Decor",
    price: 34,
    salePrice: null,
    description:
      "A handmade ceramic bowl with a clean boutique finish, created for home styling, gifting, and everyday beauty.",
    seoDescription:
      "Handmade ceramic bowl by ESRAA GALLERY, crafted for elegant home decor and meaningful boutique gifting.",
    images: ["images/products/product-6-1.jpg", "images/products/product-6-2.jpg"],
    hoverImage: "images/products/product-6-2.jpg",
    colors: [
      { name: "Ivory", hex: "#f7efe3" },
      { name: "Clay", hex: "#b88f71" },
      { name: "Dark Green", hex: "#173f35" }
    ],
    availability: "In Stock",
    quantity: 4,
    customOrder: true,
    badges: []
  },
  {
    id: 7,
    name: "Resin Hair Comb",
    slug: "resin-hair-comb",
    category: "Accessories",
    collection: "Summer",
    price: 18,
    salePrice: null,
    description:
      "A handmade resin hair comb with delicate details and a feminine boutique style for everyday elegance.",
    seoDescription:
      "Handmade resin hair comb by ESRAA GALLERY, a beautiful accessory and custom gift for her.",
    images: ["images/products/product-7-1.jpg", "images/products/product-7-2.jpg"],
    hoverImage: "images/products/product-7-2.jpg",
    colors: [
      { name: "Blush", hex: "#e8b5b5" },
      { name: "Clear", hex: "#f7fbff" },
      { name: "Gold", hex: "#b88a44" }
    ],
    availability: "In Stock",
    quantity: 8,
    customOrder: true,
    badges: ["New"]
  },
  {
    id: 8,
    name: "Resin Home Decor Tray",
    slug: "resin-home-decor-tray",
    category: "Home Decor",
    collection: "Best Sellers",
    price: 52,
    salePrice: null,
    description:
      "A polished handmade resin tray designed for jewelry, candles, coffee tables, and luxury boutique home decor.",
    seoDescription:
      "Handmade resin home decor tray by ESRAA GALLERY, perfect for jewelry, candles, coffee tables, and elegant gifts.",
    images: ["images/products/product-8-1.jpg", "images/products/product-8-2.jpg"],
    hoverImage: "images/products/product-8-2.jpg",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Gold", hex: "#d9b879" },
      { name: "Green", hex: "#173f35" }
    ],
    availability: "In Stock",
    quantity: 2,
    customOrder: true,
    badges: ["Best Seller"]
  },
  {
    id: 9,
    name: "Custom Handmade Gift Box",
    slug: "custom-handmade-gift-box",
    category: "Custom Orders",
    collection: "Gift Ideas",
    price: 65,
    salePrice: null,
    description:
      "A curated custom handmade gift box created with boutique details for birthdays, holidays, weddings, and special occasions.",
    seoDescription:
      "Custom handmade gift box by ESRAA GALLERY with resin art, candles, accessories, and personalized boutique gifts.",
    images: ["images/products/product-9-1.jpg", "images/products/product-9-2.jpg"],
    hoverImage: "images/products/product-9-2.jpg",
    colors: [
      { name: "Custom", hex: "#d8c3a5" },
      { name: "Cream", hex: "#f8f1e7" },
      { name: "Gold", hex: "#b88a44" }
    ],
    availability: "Made to Order",
    quantity: 20,
    customOrder: true,
    badges: ["New"]
  },
  {
    id: 10,
    name: "Handmade Boutique Bag",
    slug: "handmade-boutique-bag",
    category: "Bags",
    collection: "Summer",
    price: 42,
    salePrice: 36,
    description:
      "A handmade boutique bag designed with soft feminine details, perfect for gifting and styling with accessories.",
    seoDescription:
      "Handmade boutique bag by ESRAA GALLERY, a feminine accessory for gifts, styling, and boutique looks.",
    images: ["images/products/product-10-1.jpg", "images/products/product-10-2.jpg"],
    hoverImage: "images/products/product-10-2.jpg",
    colors: [
      { name: "Beige", hex: "#d8c3a5" },
      { name: "Cream", hex: "#f8f1e7" },
      { name: "Black", hex: "#151515" }
    ],
    availability: "In Stock",
    quantity: 6,
    customOrder: false,
    badges: ["Sale"]
  },
  {
    id: 11,
    name: "Seasonal Winter Gift",
    slug: "seasonal-winter-gift",
    category: "Handmade Items",
    collection: "Winter",
    price: 28,
    salePrice: null,
    description:
      "A cozy seasonal handmade gift designed for winter moments, warm homes, and meaningful celebrations.",
    seoDescription:
      "Seasonal winter handmade gift by ESRAA GALLERY, perfect for cozy gifting and boutique holiday decor.",
    images: ["images/products/product-11-1.jpg", "images/products/product-11-2.jpg"],
    hoverImage: "images/products/product-11-2.jpg",
    colors: [
      { name: "Cream", hex: "#f8f1e7" },
      { name: "Brown", hex: "#8b654b" },
      { name: "Gold", hex: "#b88a44" }
    ],
    availability: "In Stock",
    quantity: 7,
    customOrder: true,
    badges: []
  },
  {
    id: 12,
    name: "Limited Floral Resin Art Piece",
    slug: "limited-floral-resin-art-piece",
    category: "Resin",
    collection: "On Sale",
    price: 58,
    salePrice: 46,
    description:
      "A limited handmade floral resin art piece with boutique details, soft colors, and elegant display appeal.",
    seoDescription:
      "Limited floral resin art piece by ESRAA GALLERY, handmade for luxury gifting and elegant home decor.",
    images: ["images/products/product-12-1.jpg", "images/products/product-12-2.jpg"],
    hoverImage: "images/products/product-12-2.jpg",
    colors: [
      { name: "Floral", hex: "#e9b7b7" },
      { name: "Clear", hex: "#f7fbff" },
      { name: "Gold", hex: "#d9b879" }
    ],
    availability: "Sold Out",
    quantity: 0,
    customOrder: true,
    badges: ["Sale", "Sold Out"]
  }
];


/* =========================================================
   3. GLOBAL STATE
   ========================================================= */

let cart = [];
let currentHeroSlide = 0;
let heroInterval = null;
let activeQuickViewProduct = null;


/* =========================================================
   4. DOM HELPERS
   ========================================================= */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

function formatMoney(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: BRAND_CONFIG.currency
  }).format(amount);
}

function getProductById(productId) {
  return products.find((product) => Number(product.id) === Number(productId));
}

function getProductPrice(product) {
  return product.salePrice || product.price;
}

function isProductAvailable(product) {
  return product.availability !== "Sold Out" && product.quantity > 0;
}

function safeText(value) {
  return String(value || "").trim();
}

function lockBody() {
  document.body.classList.add("no-scroll");
}

function unlockBody() {
  const anyOverlayOpen =
    $(".mobile-menu.is-open") ||
    $(".cart-drawer.is-open") ||
    $(".search-overlay.is-open") ||
    $(".quick-view-modal.is-open");

  if (!anyOverlayOpen) {
    document.body.classList.remove("no-scroll");
  }
}


/* =========================================================
   5. HERO SLIDESHOW
   ========================================================= */

function initHeroSlideshow() {
  const slides = $$(".hero-slide");
  const dots = $$(".hero-dot");

  if (!slides.length) return;

  function showSlide(index) {
    currentHeroSlide = index;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
  }

  function goToNextSlide() {
    const nextIndex = (currentHeroSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.slideIndex);
      showSlide(index);

      clearInterval(heroInterval);
      heroInterval = setInterval(goToNextSlide, 5500);
    });
  });

  heroInterval = setInterval(goToNextSlide, 5500);
}


/* =========================================================
   6. MOBILE MENU
   ========================================================= */

function openMobileMenu() {
  const menu = $("[data-mobile-menu]");
  const backdrop = $("[data-menu-backdrop]");
  const openButton = $("[data-menu-open]");

  if (!menu || !backdrop) return;

  backdrop.hidden = false;

  requestAnimationFrame(() => {
    menu.classList.add("is-open");
    backdrop.classList.add("is-visible");
  });

  menu.setAttribute("aria-hidden", "false");
  openButton?.setAttribute("aria-expanded", "true");
  lockBody();

  const firstFocusable = $("[data-menu-close]", menu);
  firstFocusable?.focus();
}

function closeMobileMenu() {
  const menu = $("[data-mobile-menu]");
  const backdrop = $("[data-menu-backdrop]");
  const openButton = $("[data-menu-open]");

  if (!menu || !backdrop) return;

  menu.classList.remove("is-open");
  backdrop.classList.remove("is-visible");
  menu.setAttribute("aria-hidden", "true");
  openButton?.setAttribute("aria-expanded", "false");

  setTimeout(() => {
    if (!menu.classList.contains("is-open")) {
      backdrop.hidden = true;
    }
  }, 260);

  unlockBody();
}

function initMobileMenu() {
  $$("[data-menu-open]").forEach((button) => {
    button.addEventListener("click", openMobileMenu);
  });

  $$("[data-menu-close]").forEach((button) => {
    button.addEventListener("click", closeMobileMenu);
  });

  const backdrop = $("[data-menu-backdrop]");
  backdrop?.addEventListener("click", closeMobileMenu);

  $$("[data-menu-link]").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  const menuCartLink = $("[data-menu-cart-link]");
  menuCartLink?.addEventListener("click", () => {
    closeMobileMenu();
    openCartDrawer();
  });
}


/* =========================================================
   7. SEARCH OVERLAY
   ========================================================= */

function openSearchOverlay() {
  const overlay = $("[data-search-overlay]");
  const input = $("[data-search-input]");

  if (!overlay) return;

  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  $$("[data-search-open]").forEach((btn) => btn.setAttribute("aria-expanded", "true"));
  lockBody();

  setTimeout(() => input?.focus(), 100);
}

function closeSearchOverlay() {
  const overlay = $("[data-search-overlay]");

  if (!overlay) return;

  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  $$("[data-search-open]").forEach((btn) => btn.setAttribute("aria-expanded", "false"));
  unlockBody();
}

function searchProducts(query) {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return [];

  return products.filter((product) => {
    const searchableText = [
      product.name,
      product.slug,
      product.category,
      product.collection,
      product.description,
      product.seoDescription,
      product.availability,
      product.colors.map((color) => color.name).join(" "),
      product.badges.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

function renderSearchResults(results, query) {
  const resultsContainer = $("[data-search-results]");
  if (!resultsContainer) return;

  if (!query.trim()) {
    resultsContainer.innerHTML = `<p class="empty-message">Start typing to search handmade products.</p>`;
    return;
  }

  if (!results.length) {
    resultsContainer.innerHTML = `
      <p class="empty-message">
        No products found for “${query}”. Try searching resin, candles, gifts, bookmarks, pottery, or custom.
      </p>
    `;
    return;
  }

  resultsContainer.innerHTML = results.map((product) => createProductCard(product)).join("");
}

function initSearchOverlay() {
  $$("[data-search-open]").forEach((button) => {
    button.addEventListener("click", openSearchOverlay);
  });

  $$("[data-search-close]").forEach((button) => {
    button.addEventListener("click", closeSearchOverlay);
  });

  const overlay = $("[data-search-overlay]");
  const panel = $(".search-panel");
  const input = $("[data-search-input]");

  overlay?.addEventListener("click", (event) => {
    if (!panel?.contains(event.target)) {
      closeSearchOverlay();
    }
  });

  input?.addEventListener("input", () => {
    const query = input.value;
    const results = searchProducts(query);
    renderSearchResults(results, query);
  });
}


/* =========================================================
   8. PRODUCT CARD RENDERING
   ========================================================= */

function createBadgeMarkup(product) {
  if (!product.badges || !product.badges.length) return "";

  return `
    <div class="product-badges" aria-label="Product badges">
      ${product.badges
        .map((badge) => {
          const className = badge.toLowerCase().replaceAll(" ", "-");
          return `<span class="product-badge ${className}">${badge}</span>`;
        })
        .join("")}
    </div>
  `;
}

function createColorSwatches(product) {
  if (!product.colors || !product.colors.length) return "";

  return `
    <div class="color-swatches" aria-label="Available colors">
      ${product.colors
        .map(
          (color) => `
          <span
            class="color-swatch"
            style="--swatch-color: ${color.hex};"
            title="${color.name}"
            aria-label="${color.name}"
          ></span>
        `
        )
        .join("")}
    </div>
  `;
}

function createPriceMarkup(product) {
  if (product.salePrice) {
    return `
      <div class="product-price-row">
        <span class="product-price sale-price">${formatMoney(product.salePrice)}</span>
        <span class="product-price original-price">${formatMoney(product.price)}</span>
      </div>
    `;
  }

  return `
    <div class="product-price-row">
      <span class="product-price">${formatMoney(product.price)}</span>
    </div>
  `;
}

function createProductCard(product) {
  const available = isProductAvailable(product);
  const image = product.images?.[0] || "images/products/product-1-1.jpg";
  const hoverImage = product.hoverImage || product.images?.[1] || image;

  return `
    <article class="product-card" data-product-card data-product-id="${product.id}">
      <div class="product-image-wrap">
        <a
          href="#product-details"
          class="product-image-link"
          aria-label="View details for ${product.name}"
          data-quick-view-trigger
          data-product-id="${product.id}"
        >
          <img
            src="${image}"
            alt="${product.name} - ${product.seoDescription}"
            class="product-image"
            loading="lazy"
          />
          <img
            src="${hoverImage}"
            alt="${product.name} alternate view"
            class="product-hover-image"
            loading="lazy"
          />
        </a>

        ${createBadgeMarkup(product)}

        <div class="product-actions">
          <button
            type="button"
            class="btn btn-light js-quick-view"
            data-product-id="${product.id}"
            aria-label="Open quick view for ${product.name}"
          >
            Quick View
          </button>

          <button
            type="button"
            class="btn btn-primary js-add-to-cart"
            data-product-id="${product.id}"
            ${available ? "" : "disabled"}
            aria-label="${available ? `Add ${product.name} to cart` : `${product.name} is sold out`}"
          >
            ${available ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
      </div>

      <div class="product-info">
        <p class="product-category">${product.category}</p>

        <h3 class="product-name">
          <a href="#product-details" data-quick-view-trigger data-product-id="${product.id}">
            ${product.name}
          </a>
        </h3>

        <p class="product-description">${product.description}</p>

        ${createPriceMarkup(product)}

        ${createColorSwatches(product)}

        <p class="product-stock-note ${available ? "" : "sold-out"}">
          ${available ? `${product.availability} · ${product.quantity} available` : "Sold Out"}
        </p>
      </div>
    </article>
  `;
}

function renderProducts(productList = products) {
  const grid = $("[data-product-grid]");
  if (!grid) return;

  if (!productList.length) {
    grid.innerHTML = `
      <p class="empty-message">
        No products match your filters. Try another category, collection, or price range.
      </p>
    `;
    return;
  }

  grid.innerHTML = productList.map((product) => createProductCard(product)).join("");
}

function renderFeaturedSections() {
  const newGrid = $("[data-new-arrivals-grid]");
  const bestGrid = $("[data-best-sellers-grid]");
  const saleGrid = $("[data-sale-grid]");
  const accessoriesGrid = $("[data-accessories-grid]");

  if (newGrid) {
    const newProducts = products
      .filter((product) => product.badges.includes("New") || product.collection === "New Arrivals")
      .slice(0, 4);

    newGrid.innerHTML = newProducts.map((product) => createProductCard(product)).join("");
  }

  if (bestGrid) {
    const bestProducts = products
      .filter((product) => product.badges.includes("Best Seller") || product.collection === "Best Sellers")
      .slice(0, 4);

    bestGrid.innerHTML = bestProducts.map((product) => createProductCard(product)).join("");
  }

  if (saleGrid) {
    const saleProducts = products
      .filter((product) => product.salePrice || product.badges.includes("Sale"))
      .slice(0, 4);

    saleGrid.innerHTML = saleProducts.map((product) => createProductCard(product)).join("");
  }

  if (accessoriesGrid) {
    const accessoryProducts = products
      .filter((product) => ["Accessories", "Bags"].includes(product.category))
      .slice(0, 4);

    accessoriesGrid.innerHTML = accessoryProducts.map((product) => createProductCard(product)).join("");
  }
}


/* =========================================================
   9. PRODUCT FILTERS
   ========================================================= */

function getFilteredProducts() {
  const category = $("[data-filter-category]")?.value || "all";
  const collection = $("[data-filter-collection]")?.value || "all";
  const price = $("[data-filter-price]")?.value || "all";
  const special = $("[data-filter-special]")?.value || "all";

  return products.filter((product) => {
    const productPrice = getProductPrice(product);
    const available = isProductAvailable(product);

    const matchesCategory = category === "all" || product.category === category;
    const matchesCollection =
      collection === "all" ||
      product.collection === collection ||
      product.badges.includes(collection.replace("s", ""));

    let matchesPrice = true;

    if (price === "under-25") {
      matchesPrice = productPrice < 25;
    } else if (price === "25-50") {
      matchesPrice = productPrice >= 25 && productPrice <= 50;
    } else if (price === "50-100") {
      matchesPrice = productPrice > 50 && productPrice <= 100;
    } else if (price === "over-100") {
      matchesPrice = productPrice > 100;
    }

    let matchesSpecial = true;

    if (special === "sale") {
      matchesSpecial = Boolean(product.salePrice) || product.badges.includes("Sale");
    } else if (special === "available") {
      matchesSpecial = available;
    } else if (special === "sold-out") {
      matchesSpecial = !available;
    } else if (special === "best-seller") {
      matchesSpecial = product.badges.includes("Best Seller") || product.collection === "Best Sellers";
    } else if (special === "new") {
      matchesSpecial = product.badges.includes("New") || product.collection === "New Arrivals";
    }

    return matchesCategory && matchesCollection && matchesPrice && matchesSpecial;
  });
}

function applyFilters() {
  const filteredProducts = getFilteredProducts();
  renderProducts(filteredProducts);
}

function initProductFilters() {
  const filterForm = $("[data-filter-form]");
  if (!filterForm) return;

  filterForm.addEventListener("change", applyFilters);

  filterForm.addEventListener("reset", () => {
    setTimeout(() => {
      renderProducts(products);
    }, 0);
  });

  $$("[data-filter-shortcut]").forEach((shortcut) => {
    shortcut.addEventListener("click", () => {
      const category = shortcut.dataset.filterShortcut;
      const categorySelect = $("[data-filter-category]");

      if (categorySelect) {
        categorySelect.value = category;
        setTimeout(applyFilters, 50);
      }
    });
  });

  $$("[data-collection-link]").forEach((link) => {
    link.addEventListener("click", () => {
      const collection = link.dataset.collectionLink;
      const collectionSelect = $("[data-filter-collection]");

      if (collectionSelect) {
        collectionSelect.value = collection;
        setTimeout(applyFilters, 50);
      }
    });
  });
}


/* =========================================================
   10. QUICK VIEW MODAL
   ========================================================= */

function openQuickView(productId) {
  const product = getProductById(productId);
  const modal = $("[data-quick-view-modal]");
  const backdrop = $("[data-modal-backdrop]");

  if (!product || !modal || !backdrop) return;

  activeQuickViewProduct = product;

  const image = $("[data-quick-view-image]");
  const category = $("[data-quick-view-category]");
  const name = $("[data-quick-view-name]");
  const price = $("[data-quick-view-price]");
  const description = $("[data-quick-view-description]");
  const colors = $("[data-quick-view-colors]");
  const quantityInput = $("[data-quick-view-quantity]");
  const addButton = $("[data-quick-view-add]");

  if (image) {
    image.src = product.images?.[0] || "images/products/product-1-1.jpg";
    image.alt = `${product.name} by ESRAA GALLERY`;
  }

  if (category) category.textContent = product.category;
  if (name) name.textContent = product.name;
  if (description) description.textContent = product.description;
  if (quantityInput) quantityInput.value = "1";

  if (price) {
    price.innerHTML = product.salePrice
      ? `
        <span class="product-price sale-price">${formatMoney(product.salePrice)}</span>
        <span class="product-price original-price">${formatMoney(product.price)}</span>
      `
      : `<span class="product-price">${formatMoney(product.price)}</span>`;
  }

  if (colors) {
    colors.innerHTML = createColorSwatches(product);
  }

  if (addButton) {
    const available = isProductAvailable(product);
    addButton.disabled = !available;
    addButton.textContent = available ? "Add to Cart" : "Sold Out";
    addButton.dataset.productId = product.id;
  }

  backdrop.hidden = false;

  requestAnimationFrame(() => {
    modal.classList.add("is-open");
    backdrop.classList.add("is-visible");
  });

  modal.setAttribute("aria-hidden", "false");
  lockBody();

  setTimeout(() => $("[data-quick-view-close]")?.focus(), 100);
}

function closeQuickView() {
  const modal = $("[data-quick-view-modal]");
  const backdrop = $("[data-modal-backdrop]");

  if (!modal || !backdrop) return;

  modal.classList.remove("is-open");
  backdrop.classList.remove("is-visible");
  modal.setAttribute("aria-hidden", "true");
  activeQuickViewProduct = null;

  setTimeout(() => {
    if (!modal.classList.contains("is-open")) {
      backdrop.hidden = true;
    }
  }, 260);

  unlockBody();
}

function initQuickView() {
  document.addEventListener("click", (event) => {
    const quickViewButton = event.target.closest(".js-quick-view");
    const quickViewLink = event.target.closest("[data-quick-view-trigger]");

    if (quickViewButton || quickViewLink) {
      event.preventDefault();
      const productId = quickViewButton?.dataset.productId || quickViewLink?.dataset.productId;
      openQuickView(productId);
    }
  });

  $$("[data-quick-view-close]").forEach((button) => {
    button.addEventListener("click", closeQuickView);
  });

  const backdrop = $("[data-modal-backdrop]");
  backdrop?.addEventListener("click", closeQuickView);

  const quantityInput = $("[data-quick-view-quantity]");

  $("[data-quick-view-qty-minus]")?.addEventListener("click", () => {
    if (!quantityInput) return;
    quantityInput.value = Math.max(1, Number(quantityInput.value || 1) - 1);
  });

  $("[data-quick-view-qty-plus]")?.addEventListener("click", () => {
    if (!quantityInput) return;
    const max = activeQuickViewProduct?.quantity || 99;
    quantityInput.value = Math.min(max, Number(quantityInput.value || 1) + 1);
  });

  $("[data-quick-view-add]")?.addEventListener("click", () => {
    if (!activeQuickViewProduct) return;

    const quantity = Math.max(1, Number(quantityInput?.value || 1));
    addToCart(activeQuickViewProduct.id, quantity);
    closeQuickView();
    openCartDrawer();
  });

  $("[data-open-sample-product]")?.addEventListener("click", () => {
    openQuickView(products[0].id);
  });
}


/* =========================================================
   11. CART LOCALSTORAGE
   ========================================================= */

function saveCart() {
  localStorage.setItem("esraaGalleryCart", JSON.stringify(cart));
}

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem("esraaGalleryCart")) || [];

    cart = savedCart
      .filter((item) => getProductById(item.id))
      .map((item) => ({
        id: Number(item.id),
        quantity: Math.max(1, Number(item.quantity || 1))
      }));
  } catch (error) {
    cart = [];
  }
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  return cart.reduce((total, item) => {
    const product = getProductById(item.id);
    if (!product) return total;

    return total + getProductPrice(product) * item.quantity;
  }, 0);
}

function updateCartCount() {
  $$("[data-cart-count]").forEach((countElement) => {
    countElement.textContent = String(getCartCount());
  });
}

function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);

  if (!product || !isProductAvailable(product)) return;

  const existingItem = cart.find((item) => Number(item.id) === Number(productId));
  const safeQuantity = Math.max(1, Number(quantity));

  if (existingItem) {
    existingItem.quantity = Math.min(product.quantity, existingItem.quantity + safeQuantity);
  } else {
    cart.push({
      id: Number(productId),
      quantity: Math.min(product.quantity, safeQuantity)
    });
  }

  saveCart();
  renderCart();
  updateCheckoutSummary();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => Number(item.id) !== Number(productId));
  saveCart();
  renderCart();
  updateCheckoutSummary();
}

function updateCartQuantity(productId, newQuantity) {
  const product = getProductById(productId);
  const item = cart.find((cartItem) => Number(cartItem.id) === Number(productId));

  if (!product || !item) return;

  const safeQuantity = Math.max(1, Math.min(product.quantity || 1, Number(newQuantity)));

  item.quantity = safeQuantity;

  saveCart();
  renderCart();
  updateCheckoutSummary();
}


/* =========================================================
   12. CART DRAWER
   ========================================================= */

function openCartDrawer() {
  const drawer = $("[data-cart-drawer]");
  const backdrop = $("[data-cart-backdrop]");

  if (!drawer || !backdrop) return;

  backdrop.hidden = false;

  requestAnimationFrame(() => {
    drawer.classList.add("is-open");
    backdrop.classList.add("is-visible");
  });

  drawer.setAttribute("aria-hidden", "false");
  $$("[data-cart-open]").forEach((btn) => btn.setAttribute("aria-expanded", "true"));
  lockBody();

  setTimeout(() => $("[data-cart-close]")?.focus(), 100);
}

function closeCartDrawer() {
  const drawer = $("[data-cart-drawer]");
  const backdrop = $("[data-cart-backdrop]");

  if (!drawer || !backdrop) return;

  drawer.classList.remove("is-open");
  backdrop.classList.remove("is-visible");
  drawer.setAttribute("aria-hidden", "true");
  $$("[data-cart-open]").forEach((btn) => btn.setAttribute("aria-expanded", "false"));

  setTimeout(() => {
    if (!drawer.classList.contains("is-open")) {
      backdrop.hidden = true;
    }
  }, 260);

  unlockBody();
}

function createCartItemMarkup(item) {
  const product = getProductById(item.id);

  if (!product) return "";

  const image = product.images?.[0] || "images/products/product-1-1.jpg";
  const price = getProductPrice(product);

  return `
    <article class="cart-item" data-cart-item="${product.id}">
      <img
        src="${image}"
        alt="${product.name} in cart"
        loading="lazy"
      />

      <div class="cart-item-info">
        <h3 class="cart-item-title">${product.name}</h3>
        <p class="cart-item-price">${formatMoney(price)} each</p>

        <div class="cart-item-controls">
          <div class="cart-qty-controls" aria-label="Quantity controls for ${product.name}">
            <button
              type="button"
              aria-label="Decrease ${product.name} quantity"
              data-cart-qty-minus="${product.id}"
            >
              -
            </button>

            <span aria-label="Current quantity">${item.quantity}</span>

            <button
              type="button"
              aria-label="Increase ${product.name} quantity"
              data-cart-qty-plus="${product.id}"
            >
              +
            </button>
          </div>

          <button
            type="button"
            class="cart-remove-btn"
            data-cart-remove="${product.id}"
            aria-label="Remove ${product.name} from cart"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderCart() {
  const cartItemsContainer = $("[data-cart-items]");
  const cartSubtotalElement = $("[data-cart-subtotal]");

  if (!cartItemsContainer || !cartSubtotalElement) return;

  if (!cart.length) {
    cartItemsContainer.innerHTML = `<p class="empty-message">Your cart is currently empty.</p>`;
  } else {
    cartItemsContainer.innerHTML = cart.map((item) => createCartItemMarkup(item)).join("");
  }

  cartSubtotalElement.textContent = formatMoney(getCartSubtotal());
  updateCartCount();
}

function initCartDrawer() {
  $$("[data-cart-open]").forEach((button) => {
    button.addEventListener("click", openCartDrawer);
  });

  $$("[data-cart-close]").forEach((button) => {
    button.addEventListener("click", closeCartDrawer);
  });

  const backdrop = $("[data-cart-backdrop]");
  backdrop?.addEventListener("click", closeCartDrawer);

  const checkoutButton = $("[data-cart-checkout]");
  checkoutButton?.addEventListener("click", () => {
    closeCartDrawer();
    setTimeout(() => {
      $("#checkout")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  });

  document.addEventListener("click", (event) => {
    const addButton = event.target.closest(".js-add-to-cart");

    if (addButton) {
      const productId = addButton.dataset.productId;
      addToCart(productId, 1);
      openCartDrawer();
    }

    const removeButton = event.target.closest("[data-cart-remove]");

    if (removeButton) {
      removeFromCart(removeButton.dataset.cartRemove);
    }

    const qtyMinus = event.target.closest("[data-cart-qty-minus]");

    if (qtyMinus) {
      const productId = qtyMinus.dataset.cartQtyMinus;
      const item = cart.find((cartItem) => Number(cartItem.id) === Number(productId));

      if (item) {
        updateCartQuantity(productId, item.quantity - 1);
      }
    }

    const qtyPlus = event.target.closest("[data-cart-qty-plus]");

    if (qtyPlus) {
      const productId = qtyPlus.dataset.cartQtyPlus;
      const item = cart.find((cartItem) => Number(cartItem.id) === Number(productId));

      if (item) {
        updateCartQuantity(productId, item.quantity + 1);
      }
    }
  });
}


/* =========================================================
   13. CHECKOUT SUMMARY
   ========================================================= */

function createCheckoutSummaryItem(item) {
  const product = getProductById(item.id);

  if (!product) return "";

  const image = product.images?.[0] || "images/products/product-1-1.jpg";
  const price = getProductPrice(product);
  const lineTotal = price * item.quantity;

  return `
    <article class="summary-item">
      <img
        src="${image}"
        alt="${product.name} order summary image"
        loading="lazy"
      />

      <div>
        <h4>${product.name}</h4>
        <p>Qty: ${item.quantity} · ${formatMoney(price)} each</p>
      </div>

      <strong>${formatMoney(lineTotal)}</strong>
    </article>
  `;
}

function updateCheckoutSummary() {
  const summaryContainer = $("[data-checkout-summary]");
  const totalElement = $("[data-checkout-total]");

  if (!summaryContainer || !totalElement) return;

  if (!cart.length) {
    summaryContainer.innerHTML = `
      <p class="empty-message">
        Your selected products will appear here after adding items to your cart.
      </p>
    `;
  } else {
    summaryContainer.innerHTML = cart.map((item) => createCheckoutSummaryItem(item)).join("");
  }

  totalElement.textContent = formatMoney(getCartSubtotal());
}


/* =========================================================
   14. PAYMENT INSTRUCTIONS
   ========================================================= */

function getPaymentInstructionMarkup(method) {
  if (method === "zelle") {
    return `
      <h3>Zelle / Manual Bank Payment</h3>
      <p>
        After submitting your order request, send payment through Zelle to:
        <strong>${BRAND_CONFIG.paymentLinks.zelleEmail}</strong>.
      </p>
      <p>
        Include your name and “ESRAA GALLERY order” in the payment note.
      </p>
    `;
  }

  if (method === "venmo") {
    return `
      <h3>Venmo Business Payment Link</h3>
      <p>
        After submitting your order request, complete payment using the Venmo Business payment link:
      </p>
      <p>
        <a href="${BRAND_CONFIG.paymentLinks.venmoBusiness}" target="_blank" rel="noopener noreferrer">
          Open Venmo Payment Link
        </a>
      </p>
    `;
  }

  if (method === "stripe") {
    return `
      <h3>Stripe Payment Link</h3>
      <p>
        Use Stripe only as an optional card payment link. This website does not collect credit card numbers.
      </p>
      <p>
        <a href="${BRAND_CONFIG.paymentLinks.stripe}" target="_blank" rel="noopener noreferrer">
          Open Stripe Payment Link
        </a>
      </p>
    `;
  }

  if (method === "paypal") {
    return `
      <h3>PayPal Payment Link</h3>
      <p>
        After submitting your order request, complete payment using the PayPal link:
      </p>
      <p>
        <a href="${BRAND_CONFIG.paymentLinks.paypal}" target="_blank" rel="noopener noreferrer">
          Open PayPal Payment Link
        </a>
      </p>
    `;
  }

  return `
    <h3>Payment Instructions</h3>
    <p>
      Choose a payment method to see instructions. Payment links are placeholders and can be updated in script.js.
    </p>
  `;
}

function updatePaymentInstructions() {
  const method = $("[data-payment-method]")?.value || "";
  const instructions = $("[data-payment-instructions]");

  if (!instructions) return;

  instructions.innerHTML = getPaymentInstructionMarkup(method);
}

function initPaymentInstructions() {
  const paymentSelect = $("[data-payment-method]");
  paymentSelect?.addEventListener("change", updatePaymentInstructions);
}


/* =========================================================
   15. CHECKOUT FORM VALIDATION + ORDER CONFIRMATION
   Static site note:
   This does not send orders to a backend yet.
   Connect Formspree, EmailJS, Netlify Forms, or your own backend later.
   ========================================================= */

function setFormError(fieldName, message) {
  const errorElement = $(`[data-error-for="${fieldName}"]`);
  if (errorElement) errorElement.textContent = message;
}

function clearFormErrors() {
  $$("[data-error-for]").forEach((errorElement) => {
    errorElement.textContent = "";
  });
}

function validateCheckoutForm(form) {
  clearFormErrors();

  const formData = new FormData(form);

  const customerName = safeText(formData.get("customerName"));
  const customerEmail = safeText(formData.get("customerEmail"));
  const customerPhone = safeText(formData.get("customerPhone"));
  const shippingAddress = safeText(formData.get("shippingAddress"));
  const paymentMethod = safeText(formData.get("paymentMethod"));

  let valid = true;

  if (!customerName) {
    setFormError("customerName", "Please enter your full name.");
    valid = false;
  }

  if (!customerEmail || !customerEmail.includes("@")) {
    setFormError("customerEmail", "Please enter a valid email address.");
    valid = false;
  }

  if (!customerPhone) {
    setFormError("customerPhone", "Please enter your phone number.");
    valid = false;
  }

  if (!shippingAddress) {
    setFormError("shippingAddress", "Please enter your shipping address.");
    valid = false;
  }

  if (!paymentMethod) {
    setFormError("paymentMethod", "Please choose a payment method.");
    valid = false;
  }

  return valid;
}

function buildOrderObject(form) {
  const formData = new FormData(form);

  const orderItems = cart.map((item) => {
    const product = getProductById(item.id);

    return {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: getProductPrice(product),
      quantity: item.quantity,
      total: getProductPrice(product) * item.quantity
    };
  });

  return {
    orderNumber: `EG-${Date.now()}`,
    createdAt: new Date().toISOString(),
    customer: {
      name: safeText(formData.get("customerName")),
      email: safeText(formData.get("customerEmail")),
      phone: safeText(formData.get("customerPhone")),
      shippingAddress: safeText(formData.get("shippingAddress"))
    },
    paymentMethod: safeText(formData.get("paymentMethod")),
    orderNote: safeText(formData.get("orderNote")),
    customOrder: Boolean(formData.get("customOrder")),
    customOrderDetails: safeText(formData.get("customOrderDetails")),
    items: orderItems,
    subtotal: getCartSubtotal()
  };
}

function saveLastOrder(order) {
  localStorage.setItem("esraaGalleryLastOrder", JSON.stringify(order));
}

function showThankYouSection(order) {
  const thankYouSection = $("[data-thank-you-section]");
  const confirmationSummary = $("[data-confirmation-summary]");

  if (!thankYouSection || !confirmationSummary) return;

  const paymentLabelMap = {
    zelle: "Zelle / Manual Bank Payment",
    venmo: "Venmo Business Payment Link",
    stripe: "Stripe Payment Link",
    paypal: "PayPal Payment Link"
  };

  const itemsMarkup = order.items.length
    ? `
      <ul>
        ${order.items
          .map(
            (item) => `
            <li>
              ${item.name} × ${item.quantity} — ${formatMoney(item.total)}
            </li>
          `
          )
          .join("")}
      </ul>
    `
    : `<p>No product items were added. This may be a custom order request.</p>`;

  confirmationSummary.innerHTML = `
    <h3>Order Request Summary</h3>
    <p><strong>Order Number:</strong> ${order.orderNumber}</p>
    <p><strong>Name:</strong> ${order.customer.name}</p>
    <p><strong>Email:</strong> ${order.customer.email}</p>
    <p><strong>Phone:</strong> ${order.customer.phone}</p>
    <p><strong>Payment Method:</strong> ${paymentLabelMap[order.paymentMethod] || order.paymentMethod}</p>
    <p><strong>Estimated Subtotal:</strong> ${formatMoney(order.subtotal)}</p>

    <h4>Items</h4>
    ${itemsMarkup}

    ${
      order.customOrder
        ? `
          <h4>Custom Order Details</h4>
          <p>${order.customOrderDetails || "Custom order selected. Details should be confirmed with ESRAA GALLERY."}</p>
        `
        : ""
    }

    <div class="payment-instructions">
      ${getPaymentInstructionMarkup(order.paymentMethod)}
    </div>
  `;

  thankYouSection.hidden = false;

  setTimeout(() => {
    thankYouSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

function initCheckoutForm() {
  const form = $("[data-checkout-form]");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateCheckoutForm(form)) return;

    const customOrderChecked = $("[data-custom-order-checkbox]")?.checked;

    if (!cart.length && !customOrderChecked) {
      alert("Please add at least one product to your cart or select a custom order request.");
      return;
    }

    const order = buildOrderObject(form);
    saveLastOrder(order);
    showThankYouSection(order);

    // Clear cart after successful order request.
    cart = [];
    saveCart();
    renderCart();
    updateCheckoutSummary();

    form.reset();
    updatePaymentInstructions();
  });
}


/* =========================================================
   16. BASIC CONTACT + NEWSLETTER FORMS
   Static placeholders to avoid broken buttons.
   Connect these to Formspree, EmailJS, Netlify Forms, or backend later.
   ========================================================= */

function initStaticForms() {
  const contactForm = $("[data-contact-form]");
  const newsletterForm = $("[data-newsletter-form]");
  const footerNewsletterForm = $("[data-footer-newsletter-form]");

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you. Your message is ready to be connected to an email service like Formspree, EmailJS, Netlify Forms, or a backend.");
    contactForm.reset();
  });

  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for joining the ESRAA GALLERY list. Connect this form to an email service later.");
    newsletterForm.reset();
  });

  footerNewsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for joining the ESRAA GALLERY list. Connect this form to an email service later.");
    footerNewsletterForm.reset();
  });
}


/* =========================================================
   17. SMOOTH SECTION BEHAVIOR
   ========================================================= */

function initSmoothLinks() {
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const target = $(href);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}


/* =========================================================
   18. GLOBAL KEYBOARD ACCESSIBILITY
   Escape closes menu, cart, search, and modal.
   ========================================================= */

function initKeyboardControls() {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    closeMobileMenu();
    closeCartDrawer();
    closeSearchOverlay();
    closeQuickView();
  });
}


/* =========================================================
   19. CURRENT YEAR
   ========================================================= */

function initCurrentYear() {
  $$("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}


/* =========================================================
   20. INITIALIZE EVERYTHING
   ========================================================= */

function initEsraaGalleryWebsite() {
  loadCart();

  initCurrentYear();
  initHeroSlideshow();
  initMobileMenu();
  initSearchOverlay();
  initQuickView();
  initCartDrawer();
  initProductFilters();
  initPaymentInstructions();
  initCheckoutForm();
  initStaticForms();
  initSmoothLinks();
  initKeyboardControls();

  renderProducts(products);
  renderFeaturedSections();
  renderCart();
  updateCheckoutSummary();
  updatePaymentInstructions();
}

document.addEventListener("DOMContentLoaded", initEsraaGalleryWebsite);
/* =========================================================
   ESRAA GALLERY - final-polish.js
   Safe global polish patch.
   Include this AFTER script.js on every page:
   <script src="final-polish.js" defer></script>

   Purpose:
   - Keeps burger menu links pointing to individual page files
   - Fixes old same-page #section links if they still exist
   - Adds current-page indicator
   - Adds safer external-link attributes
   - Does not change cart/search/quick-view/product logic
   ========================================================= */

(function () {
  "use strict";

  const ROUTES = [
    ["Home", "index.html"],
    ["Shop All Products", "shop.html"],
    ["New Arrivals", "shop.html#new-arrivals"],
    ["Best Sellers", "shop.html#best-sellers"],
    ["On Sale", "shop.html#on-sale"],
    ["Summer Collection", "shop.html#summer"],
    ["Winter Collection", "shop.html#winter"],
    ["Bags & Accessories", "shop.html#bags-accessories"],
    ["Product Details / Quick View", "product-details.html"],
    ["Cart", "cart.html"],
    ["Checkout / Order Request", "checkout.html"],
    ["Custom Orders", "custom-orders.html"],
    ["About", "about.html"],
    ["Contact", "contact.html"],
    ["Exchange & Refund Policy", "refund-policy.html"],
    ["FAQ", "faq.html"],
    ["Thank You / Order Confirmation", "thank-you.html"]
  ];

  const SAME_PAGE_TO_PAGE = {
    "#home": "index.html",
    "#shop": "shop.html",
    "#new-arrivals": "shop.html#new-arrivals",
    "#best-sellers": "shop.html#best-sellers",
    "#on-sale": "shop.html#on-sale",
    "#summer": "shop.html#summer",
    "#winter": "shop.html#winter",
    "#bags-accessories": "shop.html#bags-accessories",
    "#product-details": "product-details.html",
    "#cart": "cart.html",
    "#checkout": "checkout.html",
    "#custom-orders": "custom-orders.html",
    "#about": "about.html",
    "#contact": "contact.html",
    "#refund-policy": "refund-policy.html",
    "#faq": "faq.html",
    "#thank-you": "thank-you.html",
    "index.html#home": "index.html",
    "index.html#shop": "shop.html",
    "index.html#checkout": "checkout.html",
    "index.html#custom-orders": "custom-orders.html",
    "index.html#about": "about.html",
    "index.html#contact": "contact.html",
    "index.html#refund-policy": "refund-policy.html",
    "index.html#faq": "faq.html",
    "index.html#thank-you": "thank-you.html"
  };

  function normalizePathname(pathname) {
    const last = pathname.split("/").filter(Boolean).pop() || "index.html";
    return last === "Esraa_Gallery" ? "index.html" : last;
  }

  function currentFileName() {
    const file = normalizePathname(window.location.pathname);
    return file.includes(".html") ? file : "index.html";
  }

  function buildBurgerMenu() {
    const nav = document.querySelector(".mobile-menu-nav");
    if (!nav) return;

    nav.setAttribute("aria-label", "All website pages");
    nav.innerHTML = ROUTES.map(([label, href]) => {
      const isCart = href === "cart.html";
      const className = isCart ? ' class="mobile-cart-link"' : "";
      const cartCount = isCart
        ? ' <span class="cart-count-inline" data-cart-count>0</span>'
        : "";

      return `<a href="${href}"${className} data-menu-link>${label}${cartCount}</a>`;
    }).join("");
  }

  function normalizeLinks() {
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");

      if (SAME_PAGE_TO_PAGE[href]) {
        link.setAttribute("href", SAME_PAGE_TO_PAGE[href]);
      }

      if (link.hostname && link.hostname !== window.location.hostname) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  function markCurrentPage() {
    const current = currentFileName();

    document.querySelectorAll(".mobile-menu-nav a[href]").forEach((link) => {
      const hrefFile = (link.getAttribute("href") || "").split("#")[0] || "index.html";
      if (hrefFile === current) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function closeMenuOnPageLinkClick() {
    document.addEventListener("click", (event) => {
      const menuLink = event.target.closest(".mobile-menu-nav a[data-menu-link]");
      if (!menuLink) return;

      const menu = document.querySelector("[data-mobile-menu]");
      const backdrop = document.querySelector("[data-menu-backdrop]");
      const openButton = document.querySelector("[data-menu-open]");

      if (menu) {
        menu.classList.remove("is-open");
        menu.setAttribute("aria-hidden", "true");
      }

      if (backdrop) {
        backdrop.classList.remove("is-visible");
        setTimeout(() => {
          if (!backdrop.classList.contains("is-visible")) {
            backdrop.hidden = true;
          }
        }, 260);
      }

      if (openButton) {
        openButton.setAttribute("aria-expanded", "false");
      }

      document.body.classList.remove("no-scroll");
    });
  }

  function finalPolishInit() {
    buildBurgerMenu();
    normalizeLinks();
    markCurrentPage();
    closeMenuOnPageLinkClick();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", finalPolishInit);
  } else {
    finalPolishInit();
  }
})();
