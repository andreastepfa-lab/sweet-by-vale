const WHATSAPP_NUMBER = "18623798696";

const products = {
  parfait: { es: "Parfait de mora · 9 oz", en: "Blackberry parfait · 9 oz", price: 6 },
  rice: { es: "Arroz con leche", en: "Rice pudding", price: 5 },
  gelatin: { es: "Gelatina mosaico", en: "Mosaic gelatin", price: 5 },
  mango: { es: "Cheesecake de mango · 9 oz", en: "Mango cheesecake · 9 oz", price: 6 },
  carlota: { es: "Carlota de limón · 9 oz", en: "Lime carlota · 9 oz", price: 6 },
  passionSmall: { es: "Mousse de maracuyá · Pequeño", en: "Passion fruit mousse · Small", price: 3 },
  passionLarge: { es: "Mousse de maracuyá · Grande 9 oz", en: "Passion fruit mousse · Large 9 oz", price: 6 },
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
    heroStoryKicker: "Todo comenzó con una idea dulce…",
    heroStoryTitle: "Una pequeña emprendedora con un gran sueño",
    heroStoryText: "Valeria prepara cada creación con ilusión y cuida los pequeños detalles. Su meta es seguir aprendiendo mientras lleva un poquito de felicidad a cada familia.",
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
    menuTitle: "Elige tu próximo favorito",
    menuDescription: "Todos los precios están expresados en dólares. Elige la fecha que necesitas y prepararemos tu pedido especialmente para ese día.",
    classicSize: "Presentación individual",
    parfaitName: "Parfait de mora",
    parfaitDescription: "Cottage cheese, mora, arequipe, granola y arándanos.",
    riceName: "Arroz con leche",
    riceDescription: "Cremoso, casero y terminado con el sabor tradicional de la canela.",
    gelatinName: "Gelatina mosaico",
    gelatinDescription: "Colorida, cremosa y perfecta para grandes y pequeños.",
    mangoName: "Cheesecake de mango",
    mangoDescription: "Base de galleta, mezcla cremosa y mango fresco.",
    carlotaName: "Carlota de limón",
    carlotaDescription: "Suave crema de limón con una delicada base de galleta.",
    fromThree: "Desde $3",
    twoSizes: "Dos tamaños",
    passionName: "Mousse de maracuyá",
    passionDescription: "Base de galleta, mousse sedosa y cobertura de maracuyá.",
    addOrder: "Agregar al pedido",
    smallThree: "Pequeño · $3",
    largeSix: "Grande 9 oz · $6",
    storyEyebrow: "Nuestro compromiso",
    storyTitle: "Lo que Valeria quiere compartir en cada postre",
    storyParagraphOne: "Valeria quiere que cada postre llegue fresco, bonito y lleno de sabor, listo para acompañar un momento especial o simplemente alegrar el día de alguien.",
    storyParagraphTwo: "Por eso cada pedido se prepara con tiempo, atención y el apoyo de su familia. Cada compra también la ayuda a continuar aprendiendo y haciendo crecer este sueño.",
    promiseIntro: "Cada pedido se prepara con",
    promiseOne: "Preparación por encargo",
    promiseTwo: "Ingredientes seleccionados",
    promiseThree: "Presentación cuidada",
    chooseDesserts: "Elegir mis postres",
    orderEyebrow: "Pedidos por WhatsApp",
    orderTitle: "Arma tu pedido",
    orderDescription: "Agrega tus postres y envía los datos. Si eliges domicilio, confirmaremos el cargo adicional según la ubicación.",
    directContact: "Contacto directo",
    nameLabel: "Tu nombre",
    dateLabel: "Fecha deseada",
    methodLabel: "Método preferido",
    selectOption: "Selecciona una opción",
    pickupOption: "Recogida en Wayne",
    deliveryOption: "Entrega a domicilio · cargo adicional",
    paymentLabel: "Forma de pago",
    selectPayment: "Selecciona una opción",
    cashOption: "Efectivo",
    addressLabel: "Zona o dirección aproximada",
    addressPlaceholder: "Ciudad, calle o código postal",
    notesLabel: "Notas o detalles",
    notesPlaceholder: "Horario, alergias o indicaciones especiales",
    sendWhatsApp: "Enviar pedido por WhatsApp",
    formNote: "Puedes pagar por Zelle o en efectivo. El total corresponde a los postres; la entrega a domicilio tiene un cargo adicional según la ubicación. El pedido se confirma por WhatsApp.",
    serviceEyebrow: "Wayne, New Jersey",
    serviceTitle: "Recogida en Wayne o entrega a domicilio",
    serviceDescription: "La entrega a domicilio tiene un cargo adicional calculado según la ubicación y confirmado antes de preparar el pedido.",
    askAvailability: "Consultar disponibilidad",
    footerTagline: "Creaciones dulces hechas con cariño",
    backTop: "Volver arriba",
    emptyCart: "Todavía no has agregado postres. Elige tus favoritos en el menú.",
    estimatedTotal: "Total de postres",
    orderAlert: "Agrega al menos un postre antes de enviar tu pedido.",
    added: "Agregado",
    messageHello: "Hola, quiero hacer un pedido de Sweet by Vale:",
    messageTotal: "Total estimado",
    messageName: "Nombre",
    messageDate: "Fecha deseada",
    messageMethod: "Método",
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
    heroStoryKicker: "It all began with a sweet idea…",
    heroStoryTitle: "A young entrepreneur with a big dream",
    heroStoryText: "Valeria prepares every creation with excitement and cares for the little details. Her goal is to keep learning while bringing a little happiness to every family.",
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
    menuTitle: "Choose your next favorite",
    menuDescription: "All prices are in US dollars. Choose the date you need, and we will prepare your order especially for that day.",
    classicSize: "Individual serving",
    parfaitName: "Blackberry parfait",
    parfaitDescription: "Cottage cheese, blackberry, dulce de leche, granola, and blueberries.",
    riceName: "Rice pudding",
    riceDescription: "Creamy, homemade, and finished with the traditional flavor of cinnamon.",
    gelatinName: "Mosaic gelatin",
    gelatinDescription: "Colorful, creamy, and perfect for children and adults.",
    mangoName: "Mango cheesecake",
    mangoDescription: "Cookie base, creamy cheesecake filling, and fresh mango.",
    carlotaName: "Lime carlota",
    carlotaDescription: "Smooth lime cream with a delicate cookie base.",
    fromThree: "From $3",
    twoSizes: "Two sizes",
    passionName: "Passion fruit mousse",
    passionDescription: "Cookie base, silky mousse, and passion fruit topping.",
    addOrder: "Add to order",
    smallThree: "Small · $3",
    largeSix: "Large 9 oz · $6",
    storyEyebrow: "Our promise",
    storyTitle: "What Valeria wants to share in every dessert",
    storyParagraphOne: "Valeria wants every dessert to arrive fresh, beautiful, and full of flavor, ready for a special moment or simply to brighten someone's day.",
    storyParagraphTwo: "That is why every order is prepared with time, attention, and her family's support. Every purchase also helps her keep learning and growing this dream.",
    promiseIntro: "Every order is prepared with",
    promiseOne: "Made to order",
    promiseTwo: "Selected ingredients",
    promiseThree: "Thoughtful presentation",
    chooseDesserts: "Choose my desserts",
    orderEyebrow: "Orders through WhatsApp",
    orderTitle: "Build your order",
    orderDescription: "Add your desserts and details. If you choose delivery, we will confirm the additional fee based on your location.",
    directContact: "Direct contact",
    nameLabel: "Your name",
    dateLabel: "Requested date",
    methodLabel: "Preferred method",
    selectOption: "Select an option",
    pickupOption: "Pickup in Wayne",
    deliveryOption: "Home delivery · additional fee",
    paymentLabel: "Payment method",
    selectPayment: "Select an option",
    cashOption: "Cash",
    addressLabel: "Area or approximate address",
    addressPlaceholder: "City, street, or ZIP code",
    notesLabel: "Notes or details",
    notesPlaceholder: "Time, allergies, or special instructions",
    sendWhatsApp: "Send order through WhatsApp",
    formNote: "You can pay with Zelle or cash. The total covers desserts only; home delivery has an additional fee based on location. The order is confirmed through WhatsApp.",
    serviceEyebrow: "Wayne, New Jersey",
    serviceTitle: "Pickup in Wayne or home delivery",
    serviceDescription: "Home delivery has an additional fee calculated by location and confirmed before the order is prepared.",
    askAvailability: "Check availability",
    footerTagline: "Sweet creations made with love",
    backTop: "Back to top",
    emptyCart: "You have not added any desserts yet. Choose your favorites from the menu.",
    estimatedTotal: "Dessert total",
    orderAlert: "Add at least one dessert before sending your order.",
    added: "Added",
    messageHello: "Hello, I would like to place a Sweet by Vale order:",
    messageTotal: "Estimated total",
    messageName: "Name",
    messageDate: "Requested date",
    messageMethod: "Method",
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
  return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, quantity]) => sum + products[id].price * quantity, 0);
}

function renderCart() {
  const entries = Object.entries(cart).filter(([, quantity]) => quantity > 0);
  cartCount.textContent = String(cartQuantity());

  if (!entries.length) {
    orderSummary.innerHTML = `<p class="empty-order">${translations[language].emptyCart}</p>`;
    return;
  }

  const rows = entries
    .map(([id, quantity]) => {
      const product = products[id];
      return `
        <div class="order-row">
          <div>
            <strong>${product[language]}</strong>
            <small>${money(product.price)} c/u</small>
          </div>
          <div class="quantity-control" aria-label="Cantidad de ${product[language]}">
            <button type="button" data-cart-action="decrease" data-product-id="${id}" aria-label="Disminuir cantidad">−</button>
            <span>${quantity}</span>
            <button type="button" data-cart-action="increase" data-product-id="${id}" aria-label="Aumentar cantidad">+</button>
          </div>
          <strong>${money(product.price * quantity)}</strong>
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
    const id = button.dataset.product;
    cart[id] = (cart[id] || 0) + 1;
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

  const id = button.dataset.productId;
  const change = button.dataset.cartAction === "increase" ? 1 : -1;
  cart[id] = Math.max(0, (cart[id] || 0) + change);
  if (cart[id] === 0) delete cart[id];
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
  const entries = Object.entries(cart).filter(([, quantity]) => quantity > 0);

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

  const productLines = entries.map(([id, quantity]) => {
    const product = products[id];
    return `- ${quantity} × ${product[language]} (${money(product.price)}) = ${money(product.price * quantity)}`;
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
