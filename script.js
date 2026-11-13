const WHATSAPP_NUMBER = "18623798696";

const products = {
  parfait5: { es: "Parfait de mora · 5 oz", en: "Blackberry parfait · 5 oz", price: 4 },
  parfait9: { es: "Parfait de mora · 9 oz", en: "Blackberry parfait · 9 oz", price: 6 },
  rice5: { es: "Arroz con leche · 5 oz", en: "Rice pudding · 5 oz", price: 4 },
  rice9: { es: "Arroz con leche · 9 oz", en: "Rice pudding · 9 oz", price: 6 },
  gelatin5: { es: "Gelatina mosaico · 5 oz", en: "Mosaic gelatin · 5 oz", price: 4 },
  gelatin9: { es: "Gelatina mosaico · 9 oz", en: "Mosaic gelatin · 9 oz", price: 6 },
  mango5: { es: "Cheesecake de mango · 5 oz", en: "Mango cheesecake · 5 oz", price: 4 },
  mango9: { es: "Cheesecake de mango · 9 oz", en: "Mango cheesecake · 9 oz", price: 6 },
  carlota5: { es: "Carlota de limón · 5 oz", en: "Lime carlota · 5 oz", price: 4 },
  carlota9: { es: "Carlota de limón · 9 oz", en: "Lime carlota · 9 oz", price: 6 },
  passion5: { es: "Mousse de maracuyá · 5 oz", en: "Passion fruit mousse · 5 oz", price: 4 },
  passion9: { es: "Mousse de maracuyá · 9 oz", en: "Passion fruit mousse · 9 oz", price: 6 },
};

const translations = {
  es: {
    brandTagline: "Creaciones dulces",
    navMenu: "Menú",
    navStory: "Nuestra historia",
    navOrder: "Pedir",
    orderNow: "Haz tu pedido",
    heroEyebrow: "La historia de Sweet by Vale",
    heroTitle: "El dulce sueño de Valeria, hecho con cariño.",
    heroDescription: "Sweet by Vale nació de la ilusión de Valeria por crear postres bonitos y deliciosos. Con el apoyo de su familia, cada pedido le permite aprender, crecer y compartir un poquito de alegría.",
    heroStoryKicker: "Aprender haciendo",
    heroStoryTitle: "Un pequeño emprendimiento con un gran propósito",
    heroStoryText: "Cada creación ayuda a Valeria a desarrollar su creatividad, asumir responsabilidades y dar nuevos pasos como joven emprendedora.",
    dreamRibbon: "Hecho por encargo en Wayne, NJ",
    seeMenu: "Ver todos los postres",
    startOrder: "Comenzar pedido",
    freshPoint: "Preparados por encargo",
    waynePoint: "Entrega a domicilio disponible",
    confirmPoint: "Disponibilidad confirmada por WhatsApp",
    introStrip: "Un antojo especial para compartir, celebrar o simplemente hacer más dulce tu día.",
    paymentShort: "Zelle o efectivo",
    whatsappContact: "Escríbenos por WhatsApp",
    whatsappShort: "WhatsApp",
    menuEyebrow: "Nuestro portafolio",
    menuTitle: "Elige tu postre favorito",
    menuDescription: "Elige entre 5 oz y 9 oz, selecciona la fecha y prepara tu pedido.",
    chooseSize: "Elige el tamaño",
    parfaitName: "Parfait de mora",
    parfaitDescription: "Fruta, granola y arequipe, con la base que prefieras.",
    chooseBase: "Elige la base",
    greekYogurt: "Yogur griego",
    riceName: "Arroz con leche",
    riceDescription: "Receta casera que puedes terminar con los toppings que prefieras.",
    chooseToppings: "Elige tus toppings",
    cinnamonTopping: "Canela espolvoreada",
    condensedTopping: "Leche condensada",
    raisinsTopping: "Uvas pasas",
    gelatinName: "Gelatina mosaico",
    gelatinDescription: "Cubos de gelatina de distintos sabores en una presentación colorida.",
    mangoName: "Cheesecake de mango",
    mangoDescription: "Base de galleta, mezcla cremosa y mango fresco.",
    carlotaName: "Carlota de limón",
    carlotaDescription: "Suave crema de limón con una delicada base de galleta.",
    passionName: "Mousse de maracuyá",
    passionDescription: "Base de galleta, mousse sedosa y cobertura de maracuyá.",
    sizeFiveFour: "5 oz · $4",
    sizeNineSix: "9 oz · $6",
    storyEyebrow: "El impacto de cada pedido",
    storyTitle: "Más que un postre, una oportunidad para crecer",
    storyQuote: "Cada pedido es un paso más en el sueño de Valeria.",
    storyParagraphOne: "Cada compra le permite a Valeria practicar la organización, cuidar la presentación, atender a sus clientes y comprender el valor de trabajar por sus metas.",
    discoverCreations: "Descubre sus creaciones",
    orderEyebrow: "Pedidos por WhatsApp",
    orderTitle: "Arma tu pedido",
    orderDescription: "Agrega tus postres y elige el tamaño. El arroz con leche permite seleccionar toppings.",
    directContact: "Contacto directo",
    nameLabel: "Tu nombre",
    dateLabel: "Fecha deseada",
    methodLabel: "Método de entrega",
    selectOption: "Selecciona una opción",
    pickupOption: "Recogida en Wayne",
    deliveryOption: "Entrega a domicilio",
    paymentLabel: "Forma de pago",
    selectPayment: "Selecciona una opción",
    cashOption: "Efectivo",
    addressLabel: "Zona o dirección aproximada",
    addressPlaceholder: "Ciudad, calle o código postal",
    notesLabel: "Recomendaciones o indicaciones especiales",
    notesPlaceholder: "Alergias, cambios o cualquier detalle necesario",
    sendWhatsApp: "Enviar pedido por WhatsApp",
    formNote: "Puedes pagar por Zelle o en efectivo. El pedido se confirma por WhatsApp.",
    serviceEyebrow: "Wayne, New Jersey",
    serviceTitle: "Recogida en Wayne o entrega a domicilio",
    serviceDescription: "La entrega a domicilio tiene un cargo adicional calculado según la ubicación y confirmado antes de preparar el pedido.",
    askAvailability: "Consultar disponibilidad",
    footerTagline: "Creaciones dulces hechas con cariño",
    backTop: "Volver arriba",
    emptyCart: "Todavía no has agregado postres. Elige tus favoritos en el menú.",
    estimatedTotal: "Valor total",
    orderAlert: "Agrega al menos un postre antes de enviar tu pedido.",
    added: "Agregado",
    messageHello: "Hola, quiero hacer un pedido de Sweet by Vale:",
    messageTotal: "Total estimado",
    messageName: "Nombre",
    messageDate: "Fecha deseada",
    messageMethod: "Método de entrega",
    messagePayment: "Forma de pago",
    messageAddress: "Zona o dirección",
    messageNotes: "Notas",
    messageConfirm: "Por favor, confírmame disponibilidad y detalles de entrega.",
    pickupValue: "Recogida en Wayne",
    deliveryValue: "Entrega a domicilio (cargo adicional por confirmar)",
    zelleValue: "Zelle",
    cashValue: "Efectivo",
  },
  en: {
    brandTagline: "Sweet creations",
    navMenu: "Menu",
    navStory: "Our story",
    navOrder: "Order",
    orderNow: "Place an order",
    heroEyebrow: "The Sweet by Vale story",
    heroTitle: "Valeria's sweet dream, made with love.",
    heroDescription: "Sweet by Vale began with Valeria's excitement for creating beautiful, delicious desserts. With her family's support, every order helps her learn, grow, and share a little joy.",
    heroStoryKicker: "Learning by doing",
    heroStoryTitle: "A small business with a meaningful purpose",
    heroStoryText: "Each creation helps Valeria develop her creativity, take on responsibilities, and move forward as a young entrepreneur.",
    dreamRibbon: "Made to order in Wayne, NJ",
    seeMenu: "Explore all desserts",
    startOrder: "Start an order",
    freshPoint: "Prepared to order",
    waynePoint: "Home delivery available",
    confirmPoint: "Availability confirmed by WhatsApp",
    introStrip: "A special treat to share, celebrate, or simply make your day a little sweeter.",
    paymentShort: "Zelle or cash",
    whatsappContact: "Message us on WhatsApp",
    whatsappShort: "WhatsApp",
    menuEyebrow: "Our portfolio",
    menuTitle: "Choose your favorite dessert",
    menuDescription: "Choose between 5 oz and 9 oz, select the date, and build your order.",
    chooseSize: "Choose a size",
    parfaitName: "Blackberry parfait",
    parfaitDescription: "Fruit, granola, and dulce de leche with your preferred base.",
    chooseBase: "Choose a base",
    greekYogurt: "Greek yogurt",
    riceName: "Rice pudding",
    riceDescription: "A homemade recipe finished with your choice of toppings.",
    chooseToppings: "Choose your toppings",
    cinnamonTopping: "Ground cinnamon",
    condensedTopping: "Condensed milk",
    raisinsTopping: "Raisins",
    gelatinName: "Mosaic gelatin",
    gelatinDescription: "Colorful cubes of gelatin in assorted flavors.",
    mangoName: "Mango cheesecake",
    mangoDescription: "Cookie base, creamy cheesecake filling, and fresh mango.",
    carlotaName: "Lime carlota",
    carlotaDescription: "Smooth lime cream with a delicate cookie base.",
    passionName: "Passion fruit mousse",
    passionDescription: "Cookie base, silky mousse, and passion fruit topping.",
    sizeFiveFour: "5 oz · $4",
    sizeNineSix: "9 oz · $6",
    storyEyebrow: "The impact of every order",
    storyTitle: "More than dessert, an opportunity to grow",
    storyQuote: "Every order is another step in Valeria's dream.",
    storyParagraphOne: "Every purchase allows Valeria to practice organization, care for each presentation, serve her customers, and understand the value of working toward her goals.",
    discoverCreations: "Discover her creations",
    orderEyebrow: "Orders through WhatsApp",
    orderTitle: "Build your order",
    orderDescription: "Add your desserts and choose a size. Rice pudding includes topping selections.",
    directContact: "Direct contact",
    nameLabel: "Your name",
    dateLabel: "Requested date",
    methodLabel: "Delivery method",
    selectOption: "Select an option",
    pickupOption: "Pickup in Wayne",
    deliveryOption: "Home delivery",
    paymentLabel: "Payment method",
    selectPayment: "Select an option",
    cashOption: "Cash",
    addressLabel: "Area or approximate address",
    addressPlaceholder: "City, street, or ZIP code",
    notesLabel: "Recommendations or special instructions",
    notesPlaceholder: "Allergies, changes, or any necessary details",
    sendWhatsApp: "Send order through WhatsApp",
    formNote: "You can pay with Zelle or cash. The order is confirmed through WhatsApp.",
    serviceEyebrow: "Wayne, New Jersey",
    serviceTitle: "Pickup in Wayne or home delivery",
    serviceDescription: "Home delivery has an additional fee calculated by location and confirmed before the order is prepared.",
    askAvailability: "Check availability",
    footerTagline: "Sweet creations made with love",
    backTop: "Back to top",
    emptyCart: "You have not added any desserts yet. Choose your favorites from the menu.",
    estimatedTotal: "Order total",
    orderAlert: "Add at least one dessert before sending your order.",
    added: "Added",
    messageHello: "Hello, I would like to place a Sweet by Vale order:",
    messageTotal: "Estimated total",
    messageName: "Name",
    messageDate: "Requested date",
    messageMethod: "Delivery method",
    messagePayment: "Payment method",
    messageAddress: "Area or address",
    messageNotes: "Notes",
    messageConfirm: "Please confirm availability and delivery details.",
    pickupValue: "Pickup in Wayne",
    deliveryValue: "Home delivery (additional fee to be confirmed)",
    zelleValue: "Zelle",
    cashValue: "Cash",
  },
};

let language = "es";
const cart = {};

const orderSummary = document.getElementById("orderSummary");
const cartCount = document.getElementById("headerCartCount");
const languageToggle = document.getElementById("languageToggle");
const orderForm = document.getElementById("orderForm");
const requestedDate = document.getElementById("requestedDate");
const fulfillmentSelect = document.getElementById("fulfillment");
const paymentMethodSelect = document.getElementById("paymentMethod");
const deliveryAddressField = document.getElementById("deliveryAddressField");
const deliveryAddress = document.getElementById("deliveryAddress");

function money(value) {
  return new Intl.NumberFormat(language === "es" ? "es-US" : "en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
}

function cartQuantity() {
  return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
}

function cartTotal() {
  return Object.values(cart).reduce((sum, item) => sum + products[item.productId].price * item.quantity, 0);
}

function renderCart() {
  const entries = Object.entries(cart).filter(([, item]) => item.quantity > 0);
  cartCount.textContent = String(cartQuantity());

  if (!entries.length) {
    orderSummary.innerHTML = `<p class="empty-order">${translations[language].emptyCart}</p>`;
    return;
  }

  const rows = entries
    .map(([cartId, item]) => {
      const product = products[item.productId];
      const customization = item.options.map((option) => option[language]).join(" · ");
      return `
        <div class="order-row">
          <div>
            <strong>${product[language]}</strong>
            ${customization ? `<small class="order-customization">${customization}</small>` : ""}
            <small>${money(product.price)} c/u</small>
          </div>
          <div class="quantity-control" aria-label="Cantidad de ${product[language]}">
            <button type="button" data-cart-action="decrease" data-cart-id="${cartId}" aria-label="Disminuir cantidad">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-action="increase" data-cart-id="${cartId}" aria-label="Aumentar cantidad">+</button>
          </div>
          <strong>${money(product.price * item.quantity)}</strong>
        </div>`;
    })
    .join("");

  orderSummary.innerHTML = `
    <div class="order-items">${rows}</div>
    <div class="order-total">
      <span>${translations[language].estimatedTotal}</span>
      <strong>${money(cartTotal())}</strong>
    </div>`;
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  languageToggle.textContent = language === "es" ? "EN" : "ES";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[language][key]) element.placeholder = translations[language][key];
  });

  renderCart();
}

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.product;
    const card = button.closest(".product-card");
    const options = [...card.querySelectorAll(".product-options input:checked")].map((input) => ({
      es: input.dataset.optionEs,
      en: input.dataset.optionEn,
    }));
    const optionKey = options.map((option) => option.es).join("|") || "standard";
    const cartId = `${productId}::${optionKey}`;
    if (!cart[cartId]) cart[cartId] = { productId, options, quantity: 0 };
    cart[cartId].quantity += 1;
    renderCart();

    const originalKey = button.dataset.i18n;
    button.classList.add("added");
    button.textContent = translations[language].added;
    window.setTimeout(() => {
      button.classList.remove("added");
      button.textContent = translations[language][originalKey];
    }, 900);
  });
});

orderSummary.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const id = button.dataset.cartId;
  const change = button.dataset.cartAction === "increase" ? 1 : -1;
  cart[id].quantity = Math.max(0, cart[id].quantity + change);
  if (cart[id].quantity === 0) delete cart[id];
  renderCart();
});

languageToggle.addEventListener("click", () => {
  setLanguage(language === "es" ? "en" : "es");
});

fulfillmentSelect.addEventListener("change", () => {
  const needsAddress = fulfillmentSelect.value === "delivery";
  deliveryAddressField.classList.toggle("is-hidden", !needsAddress);
  deliveryAddress.required = needsAddress;
  if (!needsAddress) deliveryAddress.value = "";
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = Object.entries(cart).filter(([, item]) => item.quantity > 0);

  if (!entries.length) {
    window.alert(translations[language].orderAlert);
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (!orderForm.reportValidity()) return;

  const customerName = document.getElementById("customerName").value.trim();
  const fulfillment = fulfillmentSelect.value;
  const paymentMethod = paymentMethodSelect.value;
  const notes = document.getElementById("notes").value.trim();
  const methodText = fulfillment === "pickup" ? translations[language].pickupValue : translations[language].deliveryValue;
  const paymentText = paymentMethod === "zelle" ? translations[language].zelleValue : translations[language].cashValue;

  const productLines = entries.map(([, item]) => {
    const product = products[item.productId];
    const customization = item.options.map((option) => option[language]).join(", ");
    const details = customization ? ` · ${customization}` : "";
    return `- ${item.quantity} × ${product[language]}${details} (${money(product.price)}) = ${money(product.price * item.quantity)}`;
  });

  const message = [
    translations[language].messageHello,
    "",
    ...productLines,
    "",
    `${translations[language].messageTotal}: ${money(cartTotal())}`,
    `${translations[language].messageName}: ${customerName}`,
    `${translations[language].messageDate}: ${requestedDate.value}`,
    `${translations[language].messageMethod}: ${methodText}`,
    `${translations[language].messagePayment}: ${paymentText}`,
    fulfillment === "delivery" ? `${translations[language].messageAddress}: ${deliveryAddress.value.trim()}` : "",
    notes ? `${translations[language].messageNotes}: ${notes}` : "",
    "",
    translations[language].messageConfirm,
  ]
    .filter(Boolean)
    .join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

const today = new Date();
const offset = today.getTimezoneOffset();
requestedDate.min = new Date(today.getTime() - offset * 60000).toISOString().split("T")[0];

setLanguage("es");
