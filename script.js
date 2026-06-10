

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
  if (slides.length === 0) return;

  slides[currentSlide].classList.remove("active");

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
}

if (slides.length > 0) {
  setInterval(changeSlide, 5000);
}

/* =========================
   FILTRO PRODUCTOS
========================= */

const buttons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");
const searchInput = document.getElementById("searchInput");
let currentCategory = "all";

function filterProducts() {
  if (!searchInput || products.length === 0) return;

  const searchText = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const category = product.dataset.category;

    const title = product.querySelector("h3").textContent.toLowerCase();

    const categoryMatch = currentCategory === "all" || currentCategory === category;
    const searchMatch = title.includes(searchText);

    if (categoryMatch && searchMatch) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

if (buttons.length > 0) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      currentCategory = button.dataset.category;

      filterProducts();
    });
  });
}

if (searchInput) {
  searchInput.addEventListener("input", filterProducts);
}

/* =========================
   FILTROS DESDE DROPDOWN
========================= */

const dropdownLinks = document.querySelectorAll(".dropdown-content a");
const filterButtons = document.querySelectorAll(".filter-btn");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) return;

    const category = href.replace("#", "");

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    const targetButton = document.querySelector(
      `.filter-btn[data-category="${category}"]`
    );

    if (targetButton) {
      targetButton.classList.add("active");
      targetButton.click();
    }
  });
});

/* =========================
   CAMBIAR AROMA / MODELO
========================= */

function cambiarAroma(nombre, imagen, boton) {
  const productoImagen = document.getElementById("productoImagen");
  const aromaTitulo = document.getElementById("aromaTitulo");

  if (productoImagen) {
    productoImagen.src = imagen;
  }

  if (aromaTitulo) {
    const textoActual = aromaTitulo.innerText.toLowerCase();

    if (textoActual.includes("aroma")) {
      aromaTitulo.innerText = "Aroma Actual: " + nombre;
    } else {
      aromaTitulo.innerText = "Modelo Actual: " + nombre;
    }
  }

  actualizarLinkMuestra(nombre);

  const botones = document.querySelectorAll(".aroma-btn");

  botones.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (boton) {
    boton.classList.add("active");
  }
}

/* =========================
   CONTACTO GLOBAL
========================= */

function cargarContactoGlobal() {
  let contactoContainer = document.getElementById("contacto-container");
  let whatsappContainer = document.getElementById("whatsapp-container");
  const footer = document.querySelector("footer");

  if (!contactoContainer) {
    contactoContainer = document.createElement("div");
    contactoContainer.id = "contacto-container";

    if (footer) {
      footer.before(contactoContainer);
    } else {
      document.body.appendChild(contactoContainer);
    }
  }

  if (!whatsappContainer) {
    whatsappContainer = document.createElement("div");
    whatsappContainer.id = "whatsapp-container";

    if (footer) {
      footer.before(whatsappContainer);
    } else {
      document.body.appendChild(whatsappContainer);
    }
  }

  contactoContainer.innerHTML = `
    <section class="contacto" id="contacto">
      <h2>Contacto</h2>

      <p class="contacto-texto">
        Síguenos en nuestras redes sociales y contáctanos para más información
        sobre nuestros productos.
      </p>

      <div class="social-container">
        <a href="https://www.facebook.com/share/18KSguB1Kg/?mibextid=wwXIfr" class="social-card facebook" target="_blank">
          <i class="fa-brands fa-facebook-f"></i>
          <span>Facebook</span>
        </a>

        <a href="https://www.instagram.com/van_hogar?utm_source=qr" class="social-card instagram" target="_blank">
          <i class="fa-brands fa-instagram"></i>
          <span>Instagram</span>
        </a>

        <a href="https://wa.me/522383868293" class="social-card whatsapp" target="_blank">
          <i class="fa-brands fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>

        <a href="https://www.tiktok.com/@vanhogar?_r=1&_t=ZS-976EAyrtW41" class="social-card tiktok" target="_blank">
          <i class="fa-brands fa-tiktok"></i>
          <span>TikTok</span>
        </a>
      </div>

      <div class="sucursales-container">
        <a href="https://maps.google.com" target="_blank" class="btn-sucursales">
          <i class="fa-solid fa-location-dot"></i>
          <span>Ver Sucursales</span>
        </a>
      </div>
    </section>
  `;

  whatsappContainer.innerHTML = `
    <a href="https://wa.me/522383868293" class="whatsapp-float" target="_blank">
      <i class="fa-brands fa-whatsapp"></i>

      <div class="whatsapp-text">
        <span>¿Necesitas ayuda?</span>
        <strong>Contáctanos</strong>
      </div>
    </a>
  `;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", cargarContactoGlobal);
} else {
  cargarContactoGlobal();
}

function actualizarColorSelector(select) {
  select.style.backgroundColor =
    select.options[select.selectedIndex].dataset.color;
  select.style.color = "#ffffff";
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".aroma-select");

  if (select) {
    actualizarColorSelector(select);
  }
});

function actualizarLinkMuestra(aroma) {
  const btn = document.querySelector(".btn-muestra-gratis");

  if (!btn) return;

  let nombreProducto = "Producto";

  const contenedorProducto = document.querySelector(".producto-info-page");

  if (contenedorProducto) {
    const titulo = contenedorProducto.querySelector("h1, h2, h3");

    if (titulo) {
      nombreProducto = titulo.textContent.trim();
    }
  }

  const mensaje = `Quisiera solicitar mi muestra gratis del producto ${nombreProducto} ${aroma}`;

  btn.href =
    "https://wa.me/522383868293?text=" +
    encodeURIComponent(mensaje);
}
document.addEventListener("DOMContentLoaded", () => {
  actualizarLinkMuestra("Lavanda");
});



/* ===== EFECTO LIMPIEZA HOGAR ===== */

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".burbujas-limpieza");

  if (!contenedor) return;

  for (let i = 0; i < 35; i++) {
    const burbuja = document.createElement("div");

    burbuja.classList.add("burbuja");

    const size = Math.random() * 50 + 10;

    burbuja.style.width = `${size}px`;
    burbuja.style.height = `${size}px`;

    burbuja.style.left = `${Math.random() * 100}%`;

    burbuja.style.animationDuration =
      `${Math.random() * 4 + 3}s`;

    burbuja.style.animationDelay =
      `${Math.random() * 2}s`;

    contenedor.appendChild(burbuja);
  }

  setTimeout(() => {
    contenedor.remove();
  }, 8000);
});

