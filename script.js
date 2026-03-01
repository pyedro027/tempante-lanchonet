const SITE_CONFIG = {
  brandName: "Maria Bunita Lanches",
  tagline: "QUALIDADE E SABOR EM CADA DETALHE", // você troca depois pelo slogan real
  whatsappNumber: "558184051820",
  addressText: "Av. Sérgio Cardoso, 1227 - Novo Mexico",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+S%C3%A9rgio+Cardoso,+1227+-+Novo+Mexico",
  deliveryText: "Apenas retirada no local.",
  instagram: "", // se não tiver, deixa vazio
  hours: [
    { day: "Segunda", time: "18h às 23h" },
    { day: "Terça", time: "Fechado" },
    { day: "Quarta", time: "18h às 23h" },
    { day: "Quinta", time: "18h às 23h" },
    { day: "Sexta", time: "18h às 23h" },
    { day: "Sábado", time: "18h às 23h" },
    { day: "Domingo", time: "Consultar disponibilidade" },
  ],
};

const PRODUCTS = [
  {
    id: "hamburger",
    category: "Hambúrgueres",
    name: "Hamburger",
    price: 17.0,
    description: "Pão, carne artesanal, queijo, tomate, molho da casa e batata palha.",
  },
  {
    id: "x-salada",
    category: "Hambúrgueres",
    name: "X-Salada",
    price: 22.0,
    description:
      "Pão, carne artesanal, ovo, queijo, presunto, tomate, alface, molho da casa, milho e batata palha.",
  },
  {
    id: "x-tudo",
    category: "Hambúrgueres",
    name: "X-Tudo",
    price: 28.0,
    description:
      "Pão, carne artesanal, ovo, bacon, queijo, presunto, tomate, alface, milho, molho da casa e batata palha.",
  },
  {
    id: "x-duplo",
    category: "Hambúrgueres",
    name: "X-Duplo",
    price: 34.0,
    description:
      "Pão, duas carnes artesanais, ovo, bacon, queijo, presunto, tomate, alface, milho, molho da casa, batata palha e calabresa.",
  },
  {
    id: "x-bacon",
    category: "Hambúrgueres",
    name: "X-Bacon",
    price: 24.0,
    description:
      "Pão, carne artesanal, bacon, queijo, tomate, alface, milho, molho da casa e batata palha.",
  },
  {
    id: "x-burguer",
    category: "Hambúrgueres",
    name: "X-Burguer",
    price: 20.0,
    description:
      "Pão, carne artesanal, queijo, presunto, tomate, alface, milho, molho da casa e batata palha.",
  },
  {
    id: "x-banana",
    category: "Hambúrgueres",
    name: "X-Búrguer de Banana",
    price: 23.0,
    description:
      "Pão, ovo, carne artesanal, queijo muçarela, tomate, alface, milho, batata palha e banana da terra.",
  },
  {
    id: "x-egg-bacon",
    category: "Hambúrgueres",
    name: "X-Egg Bacon",
    price: 27.0,
    description:
      "Pão, carne artesanal, ovo, muçarela, bacon, batata palha, milho, tomate, alface e molho da casa.",
  },
  { id: "batata-media", category: "Batatas", name: "Batata Média", price: 15.0, description: "Porção crocante na medida certa." },
  {
    id: "batata-calabresa",
    category: "Batatas",
    name: "Batata Grande com Calabresa",
    price: 23.0,
    description: "Batata grande com cobertura generosa de calabresa.",
  },
  {
    id: "batata-bacon",
    category: "Batatas",
    name: "Batata Grande com Bacon",
    price: 24.0,
    description: "Batata grande com bacon crocante.",
  },
  {
    id: "suco",
    category: "Bebidas",
    name: "Suco (consultar disponibilidade)",
    price: 8.5,
    description: "Consulte os sabores disponíveis no dia.",
  },
  { id: "refri-lata", category: "Bebidas", name: "Refrigerante lata", price: 7.0, description: "Lata gelada.", flavors: ["Coca-Cola Normal", "Coca-Cola Zero", "Guaraná Antarctica"] },
  { id: "refri-600", category: "Bebidas", name: "Refrigerante 600ml", price: 9.0, description: "Garrafa 600ml.", flavors: ["Coca-Cola Normal", "Coca-Cola Zero", "Guaraná Antarctica"] },
  { id: "refri-15", category: "Bebidas", name: "Refrigerante 1,5L", price: 12.0, description: "Ideal para compartilhar.", flavors: ["Coca-Cola Normal", "Coca-Cola Zero", "Guaraná Antarctica"] },
  { id: "agua", category: "Bebidas", name: "Água mineral", price: 3.0, description: "Sem gás." },
  { id: "agua-gas", category: "Bebidas", name: "Água mineral com gás", price: 3.5, description: "Com gás." },
  { id: "add-carne", category: "Adicionais", name: "Carne artesanal", price: 5.5, description: "Extra." },
  { id: "add-queijo", category: "Adicionais", name: "Queijo", price: 3.0, description: "Extra." },
  { id: "add-banana", category: "Adicionais", name: "Banana da terra", price: 3.0, description: "Extra." },
  { id: "add-bacon", category: "Adicionais", name: "Bacon", price: 4.0, description: "Extra." },
  { id: "add-calabresa", category: "Adicionais", name: "Calabresa", price: 3.0, description: "Extra." },
  { id: "add-ovo", category: "Adicionais", name: "Ovo", price: 2.5, description: "Extra." },
];

// Troquei a chave pra não misturar carrinho do template antigo com este site
const CART_KEY = "maria_bunita_cart";

let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
let activeCategory = "Todos";

function formatMoney(value) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

function openWhatsApp(messageText) {
  const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
  window.open(url, "_blank", "noopener");
}

function persistCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId, qty = 1, flavor = null, skipAdditionals = false) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  // Hambúrguer: abre modal de adicionais (a menos que já venha de lá)
  if (product.category === "Hambúrgueres" && !skipAdditionals) {
    showAdditionalsModal(product);
    return;
  }

  // Refrigerante: abre modal de sabor
  if (product.flavors && product.flavors.length && !flavor) {
    showFlavorModal(product);
    return;
  }

  const cartKey = flavor ? `${product.id}__${flavor}` : product.id;
  const displayName = flavor ? `${product.name} (${flavor})` : product.name;

  const found = cart.find((item) => item.key === cartKey);
  if (found) {
    found.qty += qty;
  } else {
    cart.push({ key: cartKey, id: product.id, name: displayName, price: product.price, qty });
  }

  persistCart();
  renderCart();
}

function removeFromCart(cartKey) {
  cart = cart.filter((item) => item.key !== cartKey);
  persistCart();
  renderCart();
}

function setQty(cartKey, qty) {
  if (qty <= 0) {
    removeFromCart(cartKey);
    return;
  }
  const item = cart.find((row) => row.key === cartKey);
  if (!item) return;
  item.qty = qty;
  persistCart();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = '<article class="product-box"><p>Nenhum item encontrado.</p></article>';
    return;
  }

  grid.innerHTML = list
    .map(
      (product) => `
      <article class="product-box">
        <figure class="product-media">
          <img src="images/products/${product.id}.jpg" alt="${product.name}" onerror="this.style.display='none'" />
          <span class="placeholder-icon"></span>
          <span class="img-disclaimer">Imagem ilustrativa</span>
        </figure>
        <h3>${product.name}</h3>
        <p>${product.description || ""}</p>
        <strong class="product-price">${formatMoney(product.price)}</strong>
        <div class="product-actions">
          <button class="pill pill-accent mini" type="button" data-add="${product.id}">Adicionar</button>
          <button class="pill pill-outline mini" type="button" data-now="${product.id}">Pedir agora</button>
        </div>
      </article>
    `
    )
    .join("");
}

function cartItemsTemplate(targetId) {
  const list = document.getElementById(targetId);
  if (!list) return;

  if (!cart.length) {
    list.innerHTML = "<p>Seu carrinho está vazio.</p>";
    return;
  }

  list.innerHTML = cart
    .map(
      (item) => `
      <article class="cart-row">
        <div class="cart-row-top">
          <strong>${item.name}</strong>
          <button class="ghost-link" type="button" data-remove="${item.key}">Remover</button>
        </div>
        <small>${formatMoney(item.price)} cada</small>
        <div class="qty-strip">
          <button type="button" class="qty-btn" data-dec="${item.key}">-</button>
          <span>${item.qty}</span>
          <button type="button" class="qty-btn" data-inc="${item.key}">+</button>
        </div>
      </article>
    `
    )
    .join("");
}

function renderCart() {
  const itemsCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = getCartTotal();

  const totalMain = document.getElementById("cartTotal");
  const totalMobile = document.getElementById("cartTotalMobile");
  const countBadge = document.getElementById("cartCountBadge");
  const floating = document.getElementById("openCartMobile");

  if (totalMain) totalMain.textContent = formatMoney(total);
  if (totalMobile) totalMobile.textContent = formatMoney(total);
  if (countBadge) countBadge.textContent = `${itemsCount} ${itemsCount === 1 ? "item" : "itens"}`;
  if (floating) floating.textContent = `Carrinho (${itemsCount})`;

  cartItemsTemplate("cartList");
  cartItemsTemplate("cartListMobile");
}

function applySearchAndFilter() {
  const search = (document.getElementById("searchField")?.value || "").toLowerCase().trim();
  // Adicionais nunca aparecem no grid — eles aparecem no modal ao adicionar hambúrguer
  let filtered = PRODUCTS.filter((item) => item.category !== "Adicionais");

  if (activeCategory !== "Todos") {
    filtered = filtered.filter((item) => item.category === activeCategory);
  }

  if (search) {
    filtered = filtered.filter((item) => item.name.toLowerCase().includes(search));
  }

  renderProducts(filtered);
}

function addFeaturedToCart() {
  const wall = document.getElementById("featured-wall");
  if (!wall) return;

  wall.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-featured-id]");
    if (!trigger) return;
    addToCart(trigger.dataset.featuredId, 1);
    showToast("Adicionado ao carrinho");
  });

  wall.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const trigger = event.target.closest(".feature-tile");
    if (!trigger) return;
    event.preventDefault();
    addToCart(trigger.dataset.featuredId, 1);
    showToast("Adicionado ao carrinho");
  });
}

function applySiteConfig() {
  document.querySelectorAll("[data-config='brandName']").forEach((el) => (el.textContent = SITE_CONFIG.brandName));
  document.querySelectorAll("[data-config='tagline']").forEach((el) => (el.textContent = SITE_CONFIG.tagline));
  document.querySelectorAll("[data-config='addressText']").forEach((el) => (el.textContent = SITE_CONFIG.addressText));
  document.querySelectorAll("[data-config='deliveryText']").forEach((el) => (el.textContent = SITE_CONFIG.deliveryText));

  // Instagram: se vazio, some com a seção pra não ficar feio
  const hasInstagram = Boolean((SITE_CONFIG.instagram || "").trim());

  document.querySelectorAll("[data-config='instagramText']").forEach((el) => {
    if (hasInstagram) el.textContent = `@${SITE_CONFIG.instagram}`;
  });

  document.querySelectorAll("[data-config-link='mapsUrl']").forEach((el) => (el.href = SITE_CONFIG.mapsUrl));

  document.querySelectorAll("[data-config-link='instagramUrl']").forEach((el) => {
    if (hasInstagram) el.href = `https://instagram.com/${SITE_CONFIG.instagram}`;
  });

  // Esconde containers do instagram se não tiver
  if (!hasInstagram) {
    document.querySelectorAll("[data-instagram-block]").forEach((block) => (block.style.display = "none"));
  }
}

function bindGlobalUI() {
  const topbar = document.querySelector(".topbar");
  window.addEventListener("scroll", () => {
    if (!topbar) return;
    topbar.classList.toggle("scrolled", window.scrollY > 12);
  });

  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  menuBtn?.addEventListener("click", () => {
    navMenu?.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(navMenu?.classList.contains("open")));
  });

  document.querySelectorAll("[data-action='direct-whatsapp']").forEach((btn) => {
    btn.addEventListener("click", () => openWhatsApp("Olá! Quero fazer um pedido para retirada. Pode me ajudar?"));
  });

  document.querySelectorAll("[data-action='order-help']").forEach((btn) => {
    btn.addEventListener("click", () => openWhatsApp("Olá! Quero fazer um pedido para retirada. Pode me ajudar?"));
  });
}

function showAdditionalsModal(product) {
  document.getElementById("additionalsModal")?.remove();

  const additionals = PRODUCTS.filter((p) => p.category === "Adicionais");

  const modal = document.createElement("div");
  modal.id = "additionalsModal";
  modal.className = "name-modal-backdrop";
  modal.innerHTML = `
    <div class="name-modal-box additionals-box" role="dialog" aria-modal="true" aria-labelledby="additionalsModalTitle">
      <h3 id="additionalsModalTitle">Deseja algum adicional?</h3>
      <p class="additionals-subtitle">${product.name} — ${formatMoney(product.price)}</p>

      <div class="additionals-list">
        ${additionals.map((a) => `
          <label class="additional-item">
            <input type="checkbox" class="additional-check" data-id="${a.id}" data-name="${a.name}" data-price="${a.price}" />
            <span class="additional-info">
              <span class="additional-name">${a.name}</span>
              <span class="additional-price">+${formatMoney(a.price)}</span>
            </span>
          </label>
        `).join("")}
      </div>

      <div class="name-modal-actions" style="margin-top: 8px;">
        <button class="pill pill-accent" type="button" id="additionalsConfirm">Adicionar ao carrinho</button>
        <button class="pill pill-outline" type="button" id="additionalsCancel">Sem adicionais</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const doAdd = () => {
    // Coleta os adicionais ANTES de remover o modal do DOM
    const checked = [...modal.querySelectorAll(".additional-check:checked")];
    modal.remove();

    // Adiciona o hambúrguer com skipAdditionals=true pra não entrar em loop
    addToCart(product.id, 1, null, true);

    // Adiciona cada adicional marcado separadamente no carrinho
    checked.forEach((chk) => {
      const addProduct = PRODUCTS.find((p) => p.id === chk.dataset.id);
      if (!addProduct) return;
      const cartKey = `${addProduct.id}__${product.id}`;
      const found = cart.find((item) => item.key === cartKey);
      if (found) {
        found.qty += 1;
      } else {
        cart.push({ key: cartKey, id: addProduct.id, name: `${addProduct.name} (adicional)`, price: addProduct.price, qty: 1 });
      }
    });

    persistCart();
    renderCart();
    showToast("Adicionado ao carrinho!");
  };

  // Confirmar com adicionais selecionados
  document.getElementById("additionalsConfirm").addEventListener("click", doAdd);

  // Pular adicionais — só adiciona o hambúrguer
  document.getElementById("additionalsCancel").addEventListener("click", () => {
    modal.remove();
    addToCart(product.id, 1, null, true);
    showToast("Adicionado ao carrinho!");
  });

  modal.addEventListener("click", (e) => { if (e.target === modal) modal.remove(); });
}

function showFlavorModal(product) {
  document.getElementById("flavorModal")?.remove();

  const modal = document.createElement("div");
  modal.id = "flavorModal";
  modal.className = "name-modal-backdrop";
  modal.innerHTML = `
    <div class="name-modal-box" role="dialog" aria-modal="true" aria-labelledby="flavorModalTitle">
      <h3 id="flavorModalTitle">Escolha o sabor</h3>
      <p>${product.name} &mdash; ${formatMoney(product.price)}</p>
      <div class="flavor-options">
        ${product.flavors.map((f) => `
          <button type="button" class="flavor-btn" data-flavor="${f}">
            <span class="flavor-icon">${flavorIcon(f)}</span>
            ${f}
          </button>
        `).join("")}
      </div>
      <button class="pill pill-outline" type="button" id="flavorModalCancel">Cancelar</button>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelectorAll(".flavor-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.remove();
      addToCart(product.id, 1, btn.dataset.flavor);
      showToast(btn.dataset.flavor + " adicionado!");
    });
  });

  document.getElementById("flavorModalCancel").addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.remove(); });
}

function flavorIcon(flavor) {
  const f = flavor.toLowerCase();
  if (f.includes("zero")) return "⚫";
  if (f.includes("coca")) return "🔴";
  if (f.includes("guaraná") || f.includes("guarana")) return "🟡";
  return "🥤";
}

function showNameModal() {
  // Remove modal anterior se existir
  document.getElementById("nameModal")?.remove();

  const modal = document.createElement("div");
  modal.id = "nameModal";
  modal.className = "name-modal-backdrop";
  modal.innerHTML = `
    <div class="name-modal-box" role="dialog" aria-modal="true" aria-labelledby="nameModalTitle">
      <h3 id="nameModalTitle">Qual é o seu nome?</h3>
      <p>Para identificar seu pedido na retirada.</p>
      <input
        id="nameModalInput"
        class="name-modal-input"
        type="text"
        placeholder="Ex: Maria, João…"
        maxlength="60"
        autocomplete="given-name"
      />
      <div class="name-modal-actions">
        <button class="pill pill-accent" type="button" id="nameModalConfirm">Finalizar no WhatsApp</button>
        <button class="pill pill-outline" type="button" id="nameModalCancel">Cancelar</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const input = document.getElementById("nameModalInput");
  const confirmBtn = document.getElementById("nameModalConfirm");
  const cancelBtn = document.getElementById("nameModalCancel");

  // Foca o input automaticamente
  requestAnimationFrame(() => input.focus());

  const sendOrder = () => {
    const name = input.value.trim();
    if (!name) {
      input.classList.add("input-error");
      input.placeholder = "Por favor, informe seu nome";
      input.focus();
      return;
    }
    modal.remove();
    const lines = cart.map((item) => `${item.qty}x ${item.name} - ${formatMoney(item.price)}`);
    const message = `Olá! Me chamo *${name}* e quero fazer um pedido para retirada:\n${lines.join("\n")}\nTotal: ${formatMoney(getCartTotal())}`;
    openWhatsApp(message);
  };

  confirmBtn.addEventListener("click", sendOrder);
  cancelBtn.addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.remove(); });
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") sendOrder(); });
  input.addEventListener("input", () => input.classList.remove("input-error"));
}

function bindMenuPage() {
  const categories = ["Todos", "Hambúrgueres", "Batatas", "Bebidas"];
  const chips = document.getElementById("categoryChips");
  if (chips) {
    chips.innerHTML = categories
      .map(
        (category) =>
          `<button type="button" class="filter-chip ${category === activeCategory ? "active" : ""}" data-chip="${category}">${category}</button>`
      )
      .join("");

    chips.addEventListener("click", (event) => {
      const chip = event.target.closest("[data-chip]");
      if (!chip) return;
      activeCategory = chip.dataset.chip;
      chips.querySelectorAll(".filter-chip").forEach((el) => el.classList.toggle("active", el === chip));
      applySearchAndFilter();
    });
  }

  document.getElementById("searchField")?.addEventListener("input", applySearchAndFilter);

  document.getElementById("productGrid")?.addEventListener("click", (event) => {
    const addBtn = event.target.closest("[data-add]");
    const nowBtn = event.target.closest("[data-now]");

    if (addBtn) {
      addToCart(addBtn.dataset.add, 1);
      showToast("Adicionado ao carrinho");
      return;
    }

    if (nowBtn) {
      const product = PRODUCTS.find((item) => item.id === nowBtn.dataset.now);
      if (!product) return;
      openWhatsApp(`Olá! Quero pedir agora (retirada): 1x ${product.name} - ${formatMoney(product.price)}`);
    }
  });

  const handleCartEvents = (containerId) => {
    const container = document.getElementById(containerId);
    container?.addEventListener("click", (event) => {
      const remove = event.target.closest("[data-remove]");
      const inc = event.target.closest("[data-inc]");
      const dec = event.target.closest("[data-dec]");

      if (remove) removeFromCart(remove.dataset.remove);
      if (inc) {
        const row = cart.find((item) => item.key === inc.dataset.inc);
        if (row) setQty(row.key, row.qty + 1);
      }
      if (dec) {
        const row = cart.find((item) => item.key === dec.dataset.dec);
        if (row) setQty(row.key, row.qty - 1);
      }
    });
  };

  handleCartEvents("cartList");
  handleCartEvents("cartListMobile");

  const finish = () => {
    if (!cart.length) {
      showToast("Seu carrinho está vazio");
      return;
    }
    showNameModal();
  };

  document.getElementById("finishOrderBtn")?.addEventListener("click", finish);
  document.getElementById("finishOrderBtnMobile")?.addEventListener("click", finish);

  const drawer = document.getElementById("mobileDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  document.getElementById("openCartMobile")?.addEventListener("click", () => {
    if (!drawer || !backdrop) return;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.hidden = false;
  });
  document.getElementById("closeDrawer")?.addEventListener("click", () => {
    if (!drawer || !backdrop) return;
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
  });
  backdrop?.addEventListener("click", () => {
    if (!drawer || !backdrop) return;
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
  });

  applySearchAndFilter();
}

function bindHomePage() {
  const hoursList = document.getElementById("hours-list");
  if (hoursList) {
    const dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const todayName = dayNames[new Date().getDay()];

    hoursList.innerHTML = SITE_CONFIG.hours
      .map((item) => {
        const isToday = item.day === todayName;
        const isClosed = item.time.toLowerCase() === "fechado";
        return `
          <li class="${isToday ? "today" : ""}">
            <span class="hours-day">${item.day}</span>
            <span class="hours-time ${isClosed ? "closed" : ""}">${item.time}</span>
          </li>
        `;
      })
      .join("");
  }
  addFeaturedToCart();
}

function getOpenStatus() {
  const dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const now = new Date();
  const todayName = dayNames[now.getDay()];
  const todayConfig = SITE_CONFIG.hours.find((h) => h.day === todayName);

  if (!todayConfig) return { open: false, nextOpen: null };

  const time = todayConfig.time.toLowerCase().trim();

  // Fechado explícito
  if (time === "fechado") return { open: false, todayTime: null };

  // Consultar disponibilidade — trata como aberto
  if (time.includes("consultar")) return { open: true, todayTime: todayConfig.time };

  // Formato "18h às 23h" — extrai abertura e fechamento
  const match = time.match(/(\d+)h(?:\s*às?\s*(\d+)h)?/);
  if (!match) return { open: true, todayTime: todayConfig.time };

  const openHour  = parseInt(match[1]);
  const closeHour = parseInt(match[2] || "23");
  const currentHour = now.getHours() + now.getMinutes() / 60;

  const isOpen = currentHour >= openHour && currentHour < closeHour;
  return { open: isOpen, todayTime: todayConfig.time, openHour, closeHour };
}

function updateWhatsAppFloat() {
  const btn = document.querySelector(".whatsapp-float");
  if (!btn) return;

  const status = getOpenStatus();

  if (status.open) {
    btn.classList.remove("wpp-closed");
    btn.querySelector("span") && (btn.querySelector("span").textContent = "WhatsApp");
  } else {
    btn.classList.add("wpp-closed");
    btn.querySelector("span") && (btn.querySelector("span").textContent = "Fechado agora");
  }
}

function init() {
  applySiteConfig();
  bindGlobalUI();
  renderCart();
  updateWhatsAppFloat();
  // Atualiza o status a cada minuto (caso o cliente fique na página na hora de abrir/fechar)
  setInterval(updateWhatsAppFloat, 60000);

  if (document.body.dataset.page === "home") bindHomePage();
  if (document.body.dataset.page === "menu") bindMenuPage();
}

init();