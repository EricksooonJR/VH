/* =========================
   MENÚ GLOBAL DE LÍNEAS
   Edita esta lista para agregar, quitar o reordenar opciones en todo el sitio.
========================= */

const lineasMenu = [
  { href: "hogar.html", label: "Línea Hogar" },
  { href: "lavanderia.html", label: "Línea Lavandería" },
  { href: "automotriz.html", label: "Línea Automotriz" },
  { href: "corporal.html", label: "Línea Corporal" },
  { href: "jarcieria.html", label: "Línea Jarcería" },
  { href: "consumibles.html", label: "Línea Consumibles" },
    { href: "despachadores.html", label: "Despachadores" },
  { href: "otros.html", label: "Otros Productos" },
];

/* Productos de la línea Automotriz: edita esta lista para actualizar
   el dropdown en todas las páginas automotrices. */
const productosAutomotrizMenu = [
  { href: "automotriz-abrillantador.html", label: "Abrillantadores" },
  { href: "automotriz-glicerina.html", label: "Glicerina" },
  { href: "automotriz-alumitec.html", label: "Ácido para Metales    (Alumitec)" },
  { href: "automotriz-desengrasante.html", label: "Desengrasante" },
  { href: "automotriz-shampoo.html", label: "Shampoo" },
  { href: "automotriz-cera.html", label: "Cera 37" },
  { href: "automotriz-aromatizante.html", label: "Aromatizante Ambiental" },
];

function cargarMenuProductosAutomotriz() {
  if (!window.location.pathname.split("/").pop().startsWith("automotriz")) return;

  document.querySelectorAll(".navbar .dropdown-btn").forEach((boton) => {
    if (!boton.textContent.trim().toLowerCase().startsWith("productos")) return;

    const contenido = boton.parentElement.querySelector(".dropdown-content");
    if (!contenido) return;

    contenido.innerHTML = productosAutomotrizMenu
      .map(({ href, label }) => `<a href="${href}">${label}</a>`)
      .join("");
  });
}

cargarMenuProductosAutomotriz();

/* Productos de la línea Corporal: edita esta lista para actualizar
   el dropdown en todas las páginas corporales. */
const productosCorporalMenu = [
  { href: "corporal-shampoo-manos.html", label: "Shampoo para Manos" },
  { href: "corporal-crema.html", label: "Crema Corporal" },
  { href: "corporal-gel-antibacterial.html", label: "Gel Antibacterial GAB 75" },
  { href: "corporal-repelente.html", label: "Repelente de Mosquitos" },
  { href: "corporal-shampoo.html", label: "Shampoo Herbal" },
];

function cargarMenuProductosCorporal() {
  if (!window.location.pathname.split("/").pop().startsWith("corporal")) return;

  document.querySelectorAll(".navbar .dropdown-btn").forEach((boton) => {
    if (!boton.textContent.trim().toLowerCase().startsWith("productos")) return;

    const contenido = boton.parentElement.querySelector(".dropdown-content");
    if (!contenido) return;

    contenido.innerHTML = productosCorporalMenu
      .map(({ href, label }) => `<a href="${href}">${label}</a>`)
      .join("");
  });
}

cargarMenuProductosCorporal();

/* Categorías de Jarciería: edita nombres, rutas, descripciones e imágenes aquí. */
const productosJarcieriaMenu = [
  ["escobas", "Escobas"],
  ["mechudos", "Mechudos"],
  ["jaladores", "Jaladores"],
  ["cepillos", "Cepillos"],
  ["mop", "MOP"],
  ["guantes", "Guantes"],
  ["pastillas", "Pastillas"],
  ["recogedor", "Recogedor"],
  ["fibras", "Fibras"],
  ["cubetas", "Cubetas"],
  ["atomizador", "Atomizador"],
  ["venenos", "Venenos"],
  ["bolsas", "Bolsas"],
  ["detergente-en-polvo", "Detergente en Polvo"],
  ["trapos-jergas-microfibras-franelas", "Trapos, Jergas, Microfibras y Franelas"],
  ["tapetes", "Tapetes"],
  ["cestos", "Cestos"],
  ["otros", "Otros"],
].map(([id, nombre]) => ({
  id,
  nombre,
  descripcion: {
    escobas: "Modelos para barrer pisos y patios, desde opciones ligeras para el hogar hasta cepillos de mayor resistencia.",
    mechudos: "Mechudos de pabilo y microfibra para limpiar pisos; hay opciones de distintos pesos y presentaciones.",
    jaladores: "Jaladores de varios tamaños para retirar agua de pisos y superficies lisas, con alternativas de base plástica y neopreno.",
    cepillos: "Cepillos para tareas de limpieza general, lavado y tallado de distintas superficies.",
    mop: "Mops para facilitar la limpieza de pisos y cubrir superficies amplias con comodidad.",
    guantes: "Guantes para proteger las manos durante las labores de limpieza y manejo de productos.",
    pastillas: "Pastillas limpiadoras prácticas para apoyar la limpieza y dejar una sensación fresca en el espacio.",
    recogedor: "Recogedores para juntar polvo y residuos después de barrer; disponibles en diferentes estilos.",
    fibras: "Fibras de limpieza para tallar y remover suciedad en utensilios y superficies resistentes.",
    cubetas: "Cubetas para preparar soluciones de limpieza, transportar agua y apoyar las tareas del hogar.",
    atomizador: "Atomizadores para aplicar líquidos de limpieza de forma práctica y controlada.",
    venenos: "Productos para el control de plagas en el hogar. Sigue las instrucciones de uso indicadas en cada envase.",
    bolsas: "Bolsas para recolección de residuos y necesidades cotidianas de limpieza y organización.",
    "detergente-en-polvo": "Detergente en polvo para el lavado de ropa y la limpieza cotidiana.",
    "trapos-jergas-microfibras-franelas": "Paños para secar, limpiar y sacudir: trapos, jergas, microfibras y franelas para diferentes tareas.",
    tapetes: "Tapetes funcionales para ayudar a mantener limpios y ordenados los espacios de entrada y uso diario.",
    cestos: "Cestos para reunir residuos y mantener organizados los espacios del hogar o negocio.",
    otros: "Artículos complementarios de jarciería para resolver distintas necesidades de limpieza y mantenimiento.",
  }[id],
  imagen: {
    escobas: "img/escobas-banner.jpeg",
    mechudos: "img/mechudos-banner.jpeg",
    jaladores: "img/jaladores-banner.jpeg",
    cepillos: "img/cepillos-banner.jpeg",
    mop: "img/mop-banner.jpeg",
    guantes: "img/guantes-banner.jpeg",
    pastillas: "img/pastillas-banner.jpeg",
    recogedor: "img/recogedor-banner.jpeg",
    fibras: "img/fibras-banner.jpeg",
    cubetas: "img/cubetas-banner.jpeg",
    atomizador: "img/atomizador-banner.jpeg",
    venenos: "img/venenos-banner.jpeg",
    bolsas: "img/bolsas-banner.jpeg",
    "detergente-en-polvo": "img/detergente-banner.jpeg",
    "trapos-jergas-microfibras-franelas": "img/trapos-banner.jpeg",
    tapetes: "img/tapetes-banner.jpeg",
    cestos: "img/cestos-banner.jpeg",
    otros: "img/otros-banner.jpeg",
  }[id] || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
}));

/* Artículos de Escobas: cambia la imagen de cada artículo cuando tengas sus fotos. */
const articulosEscobas = [
  "Abanico Chica",
  "Abanico Grande Plus",
  "Abanico Económica",
  "Naranja Moño",
  "Veneciana",
  "Italy Cepillo con Bastón",
  "Maxilim Línea Económica",
  "Lava coche Ideal",
  "Arcoíris",
  "Infantil",
  "Cepillo Mega",
  "Cepillo Duro CI-30",
  "Cepillo Duro CI-40",
  "Cepillo Duro CI-60",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Mechudos: cambia cada ruta al agregar las fotos de producto. */
const articulosMechudos = [
  { nombre: "Pabilo Rojo 600 gr", color: "#b52635" },
  { nombre: "Pabilo Naranja/Azul 300 gr", color: "#1986bd" },
  { nombre: "Pabilo Amarillo 400 gr", color: "#d5aa16" },
  { nombre: "Microfibra SHALY", color: "#1686c0" },
  { nombre: "Copar Chico (sin bastón)", color: "#3976a8" },
  { nombre: "Para Coche con Mango", color: "#267c72" },
].map((articulo) => ({
  ...articulo,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
}));

/* Artículos de Jaladores: cambia cada ruta al agregar las fotos de producto. */
const articulosJaladores = [
  "Jumbo 40 cm",
  "Patrona 40 cm",
  "Jumbo 50 cm",
  "Patrona 50 cm",
  "Neopreno 40 cm (Base Plástica)",
  "Neopreno 45 cm Heavy Duty Doble Esponja Base Metálica",
  "Neopreno 75 cm Doble Esponja Base Metálica Industrial",
  "Neopreno 75 cm Heavy Duty Doble Esponja Base Metálica",
  "Para Vidrios Jumbito",
  "Para Vidrios Palma de Oro (Doble Esponja)",
  "Para Vidrios Perico PLV40",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Cepillos: cambia cada ruta al agregar las fotos de producto. */
const articulosCepillos = [
  "Manual Perico CP20",
  "Manual Perico CP30",
  "Manual Perico CP35",
  "Manual Perico CP45",
  "Manual Titiz TP117",
  "Manual Titiz TP108",
  "Manual Rectangular Titiz TP109",
  "Manual 8’ PVC Gris (Brustech)",
  "Manual 8’ Nylon Blanco (Brustech)",
  "Manual Suave Cubasa",
  "Lechuguillo #4",
  "Lechuguillo #10",
  "Lechuguillo #14 Raiz",
  "Con Mango VC50",
  "Escobeta PE1 Perico",
  "Escobillon Biberon",
  "Para Ropa",
  "Alambre Pretul",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de MOP: cambia cada ruta al agregar las fotos de producto. */
const articulosMop = [
  "Completo Económico 40 cm",
  "Funda MOP Económico 40 cm",
  "Completo Económico 60 cm",
  "Funda MOP Económico 60 cm",
  "Completo Económico 90 cm",
  "Funda MOP Económico 90 cm",
  "Completo Económico 120 cm",
  "Funda MOP Económico 120 cm",
  "Funda MOP Económico 150 cm",
  "Base MOP Económico 150 cm",
  "Completo El Castor 45 cm",
  "Funda MOP El Castor 45 cm",
  "Completo El Castor 60 cm",
  "Funda MOP El Castor 60 cm",
  "Completo El Castor 90 cm",
  "Funda MOP El Castor 90 cm",
  "Completo El Castor 125 cm",
  "Funda MOP El Castor 125 cm",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Guantes: cambia cada ruta al agregar las fotos de producto. */
const articulosGuantes = [
  "Nitrilo Chico Sponya",
  "Nitrilo Mediano Sponya",
  "Nitrilo Grande Sponya",
  "Látex Chico Sponya",
  "Látex Mediano Sponya",
  "Látex Grande Sponya",
  "Nitrilo Desechable Ambiderm",
  "Microfibra",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Pastillas: cambia cada ruta al agregar las fotos de producto. */
const articulosPastillas = [
  "La China de Puebla Media Luna",
  "Wiese WC Redonda 60 gr",
  "Flash Media Luna",
  "Azul Estrella Marina",
  "De Cloro 1plg Cuñete 50 Kg",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Recogedor: cambia cada ruta al agregar las fotos de producto. */
const articulosRecogedor = [
  "Perico Plástico con Goma",
  "Económico Mango de Madera",
  "Metal Reforzado",
  "Vertical Oval Tipo Maroma",
  "Manual Perico",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Fibras: cambia cada ruta al agregar las fotos de producto. */
const articulosFibras = [
  "Metálica Mediana",
  "Metálica Jumbo",
  "Shaly Tira 12 Piezas",
  "P66 (Blanca)",
  "P76 (Negra)",
  "P94 Esponja Scotch",
  "P96 (Verde) Scotch",
  "Fregon",
  "Esponja Azul",
  "Cuadritela Grande",
  "Cuadritela Chica",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Cubetas: cambia cada ruta al agregar las fotos de producto. */
const articulosCubetas = [
  "Económica Splash #12",
  "Económica Reciclada #12",
  "Carrasco Cilíndrica #12",
  "Carrasco CH Barril #15",
  "Carrasco G Barril #18",
  "Exprimidora",
  "Flexible Mia CH #10",
  "Flexible Ideal MD #14",
  "Flexible Ideal G #18",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Atomizadores: cambia cada ruta al agregar las fotos de producto. */
const articulosAtomizadores = [
  "Canyon Industrial 1 litro",
  "Genérico 500 ml",
  "Genérico 250 ml",
  "Genérico 125 ml",
  "Cola de Pato (Mecanismo)",
  "Guala (Mecanismo)",
  "Silla Montar (Dosificador R28)",
  "Envase Boston Spray 60 ml",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Venenos: cambia cada ruta al agregar las fotos de producto. */
const articulosVenenos = [
  "Tira Veneno en Polvo Caníbales 12/20 gr",
  "Tira Veneno en Polvo Ácido Bórico 12/20 gr",
  "Tira Veneno Rata Churro 12/20 gr",
  "Tira Veneno para Rata Almendra 12/20 gr",
  "Veneno en Polvo Hormiga Exone ½ Kg",
  "Trampa Pega Ratones Mediano Clean House 4 Div",
  "Tira para Mosca",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Bolsas: cambia cada ruta al agregar las fotos de producto. */
const articulosBolsas = [
  "Bolsa Negra 50*70",
  "Bolsa Negra Premium 60*90",
  "Bolsa Negra 90*120",
  "Bolsa Transparente 50*70",
  "Bolsa Camisa Chica",
  "Bolsa Camisa Mediana",
  "Bolsa Camisa Grande",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Detergente en Polvo: cambia cada ruta al agregar las fotos. */
const articulosDetergentePolvo = [
  "Roma Polvo 10 Kg",
  "Roma Polvo 1 Kg",
  "Roma Polvo 250 gr",
  "Arcoíris 9 Kg",
  "Wixo 1 Kg",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Trapos, Jergas y Microfibras: agrega las fotos en cada ruta. */
const articulosTraposJergasMicrofibras = [
  "Trapo Microfibra 40*40 cm",
  "Trapo Microfibra Oscuro",
  "Trapo Económico Cocina",
  "Microfibra Jerga 1*60 cm",
  "Jerga SARGA 50 cm",
  "Franela Gris",
  "Franela Roja",
  "Rollo de Franela Blanca Carper 25 metros",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

/* Artículos de Tapetes: cambia cada ruta al agregar las fotos de producto. */
const articulosTapetes = [
  "Tapete Sanitizante Grande",
  "Tapete Migitorio Wiese Antisalpicaduras",
  "Tapete Migitorio Wiese con Regilla",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca"][index],
}));

/* Artículos de Cestos: cambia cada ruta al agregar las fotos de producto. */
const articulosCestos = [
  "Papelero Mini Negro",
  "Papelero Mediano Negro",
  "Papelero Grande Negro",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca"][index],
}));

/* Artículos de Otros Jarciería: cambia cada ruta al agregar las fotos. */
const articulosOtrosJarcieria = [
  "Tendedero Ocaña (Blanco)",
  "Tendedero de Plástico (10 m)",
  "Pinza Ropa Laloplast",
  "Embudo Chico",
  "Embudo Grande",
  "Jícara Plástico (Bastidor)",
  "Mandil Hule Largo",
  "Sosa Mony",
  "Sosa en Escamas Oven Cleaner 100g",
  "Coladera Atrapador Plástico",
  "Wiese Madera 400 ml",
  "Wiese Aroma 365 g",
  "Glade Aroma 275 ml",
  "Lysol Aerosol 354 g",
  "Harpic Limpiador para Baños",
  "Piedra Pomex",
  "Bomba Fregadero",
  "WC Cosmo Escobillón WC Sin Base",
  "WC Perico con Base",
  "Bomba WC Patrona",
  "Bomba de Primavera",
  "Plumero",
  "Higiénica Baño (Ducha)",
  "Rastrillo Económico",
  "Toallas Húmedas Escudo",
  "Cubrebocas Tricapa 50 pz",
  "Espátula Flexible 2” Pretul",
  "Lija de Agua 360",
  "Encendedor Económico",
  "Encendedor Telescopio",
  "Encendedor Soplete Grande",
].map((nombre, index) => ({
  nombre,
  imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  color: ["#0b74c9", "#1686c0", "#2797ca", "#3aa7d3", "#4eb5dc"][index % 5],
}));

function cargarMenuJarcieria() {
  const pagina = window.location.pathname.split("/").pop();
  if (!pagina.startsWith("jarcieria")) return;

  document.querySelectorAll(".navbar .dropdown-btn").forEach((boton) => {
    if (!boton.textContent.trim().toLowerCase().startsWith("productos")) return;
    const contenido = boton.parentElement.querySelector(".dropdown-content");
    if (!contenido) return;
    contenido.innerHTML = productosJarcieriaMenu
      .map(({ nombre }) => `<span>${nombre}</span>`)
      .join("");
  });

  const contenedor = document.querySelector("[data-categorias-jarcieria]");
  if (contenedor) {
    contenedor.innerHTML = productosJarcieriaMenu
      .map(({ id, nombre, descripcion, imagen }, index) => `
          <div id="categoria-${id}" class="linea-card" style="--color-linea: ${["#4b8f8c", "#4b8eb0", "#7b77a8"][index % 3]}">
            <img src="${imagen}" alt="${nombre}" class="linea-img" loading="lazy" />
            <h3>${nombre.toUpperCase()}</h3>
            <p>${descripcion}</p>
          </div>
      `)
      .join("");
  }

  const detalle = document.querySelector("[data-categoria-jarcieria]");
  if (detalle) {
    const id = new URLSearchParams(window.location.search).get("categoria");
    const categoria = productosJarcieriaMenu.find((item) => item.id === id) || productosJarcieriaMenu.at(-1);
    document.title = `${categoria.nombre} | Jarciería VANHOGAR`;
    detalle.textContent = categoria.nombre.toUpperCase();
    const descripcion = document.querySelector("[data-descripcion-jarcieria]");
    if (descripcion) descripcion.textContent = categoria.descripcion;
    const imagen = document.querySelector("[data-imagen-jarcieria]");
    if (imagen) {
      imagen.src = categoria.imagen;
      imagen.alt = categoria.nombre;
    }
  }

  const listaArticulos = {
    escobas: articulosEscobas,
    mechudos: articulosMechudos,
    jaladores: articulosJaladores,
    cepillos: articulosCepillos,
    mop: articulosMop,
    guantes: articulosGuantes,
    pastillas: articulosPastillas,
    recogedor: articulosRecogedor,
    fibras: articulosFibras,
    cubetas: articulosCubetas,
    atomizador: articulosAtomizadores,
    venenos: articulosVenenos,
    bolsas: articulosBolsas,
    "detergente-en-polvo": articulosDetergentePolvo,
    "trapos-jergas-microfibras-franelas": articulosTraposJergasMicrofibras,
    tapetes: articulosTapetes,
    cestos: articulosCestos,
    otros: articulosOtrosJarcieria,
  }[document.body.dataset.paginaJarcieria];
  if (listaArticulos) {
    const selector = document.querySelector("[data-articulos-jarcieria]");
    const tituloArticulo = document.querySelector("[data-articulo-escobas-titulo]");
    if (selector) {
      selector.innerHTML = listaArticulos
        .map(({ nombre, imagen, color }, index) => `<option value="${imagen}" data-color="${color}" ${index === 0 ? "selected" : ""}>${nombre}</option>`)
        .join("");
      const seleccionarArticulo = () => {
        const opcion = listaArticulos[selector.selectedIndex];
        cambiarAroma(opcion.nombre, opcion.imagen, opcion.color, selector);
        selector.style.backgroundColor = "transparent";
        selector.style.backgroundImage = "linear-gradient(135deg, #ffffff, #d8fff5, #8fd3f4)";
        selector.style.color = "#0b5e78";
        if (tituloArticulo) tituloArticulo.textContent = `Modelo Actual: ${opcion.nombre}`;
      };
      selector.addEventListener("change", seleccionarArticulo);
      seleccionarArticulo();
    }
  }
}

cargarMenuJarcieria();

const productosConsumibles = [
  {
    nombre: "Papel Higiénico Junior",
    imagen: "img/junior.jpeg",
    descripcion: "Rollos de tamaño compacto para dispensadores Junior. Una opción práctica para baños de hogares, oficinas y negocios.",
  },
  {
    nombre: "Papel Higiénico Jumbo",
    imagen: "img/jumbo.jpeg",
    descripcion: "Rollos de mayor metraje para baños con uso frecuente; ayudan a reducir los cambios de rollo durante el día.",
  },
  {
    nombre: "Toalla en Rollo",
    imagen: "img/toalla.jpeg",
    descripcion: "Toalla de papel en rollo para secado de manos y tareas de limpieza. Compatible con dispensadores de rollo según el formato.",
  },
  {
    nombre: "Toalla Interdoblada",
    imagen: "img/interdoblada.jpeg",
    descripcion: "Toallas plegadas para dispensar una pieza a la vez, facilitar el secado de manos y mantener el área ordenada.",
  },
  {
    nombre: "Servilleta Barramesa",
    imagen: "img/servilleta.jpeg",
    descripcion: "Servilletas para mesas, cafeterías y servicios de alimentos; prácticas para acompañar comidas y bebidas.",
  },
];

function cargarProductosConsumibles() {
  const contenedor = document.querySelector("[data-productos-consumibles]");
  if (!contenedor) return;

  contenedor.innerHTML = productosConsumibles
    .map(({ nombre, imagen, descripcion }, index) => `
      <article class="linea-card" style="--color-linea: ${["#4b8f8c", "#4b8eb0", "#7b77a8"][index % 3]}">
        <img src="${imagen}" alt="${nombre}" class="linea-img" loading="lazy" />
        <h3>${nombre.toUpperCase()}</h3>
        <p>${descripcion}</p>
      </article>
    `)
    .join("");
}

cargarProductosConsumibles();

/* Secciones de Despachadores: edita nombres, rutas, imágenes y textos aquí. */
const seccionesDespachadores = [
  {
    id: "jabonera",
    nombre: "Jabonera",
    imagen: "img/jaboneras-banner.jpeg",
    descripcion: "Dispensadores manuales y automáticos para jabón líquido o espuma, con opciones en distintos colores y capacidades para baños y áreas de servicio.",
    banner: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1800&auto=format&fit=crop",
    presentaciones: [
      { nombre: "FORTE Blanca", imagen: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop", color: "#edf0f2", texto: "#263238" },
      { nombre: "FORTE Negra", imagen: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop", color: "#242629", texto: "#ffffff" },
      { nombre: "Aitanna JOFFEL blanca 1000 ml", imagen: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop", color: "#f5f4ef", texto: "#263238" },
      { nombre: "Aitana JOFFEL negra 800 ml", imagen: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop", color: "#292b2e", texto: "#ffffff" },
      { nombre: "KIMBERLY CLARK humo", imagen: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop", color: "#7d858c", texto: "#ffffff" },
      { nombre: "Automática elite negra", imagen: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop", color: "#17191c", texto: "#ffffff" },
    ],
  },
  {
    id: "despachador-papel",
    nombre: "Despachador de papel",
    imagen: "img/despachadores-banner.jpeg",
    descripcion: "Dispensadores para papel higiénico en rollo jumbo y toallas interdobladas. Ayudan a mantener el papel protegido y accesible en baños de hogares, oficinas y negocios.",
    banner: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1800&auto=format&fit=crop",
    presentaciones: [
      { nombre: "Papel higiénico JR FORTE Blanco", imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", color: "#edf0f2", texto: "#263238" },
      { nombre: "Papel higiénico JR FORTE Negro", imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", color: "#242629", texto: "#ffffff" },
      { nombre: "Papel higiénico JR KIMBERLY CLARK Humo", imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", color: "#7d858c", texto: "#ffffff" },
      { nombre: "Toalla Interdoblada FORTE Negro", imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", color: "#292b2e", texto: "#ffffff" },
      { nombre: "Toalla Interdoblada FORTE Blanco", imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", color: "#f5f4ef", texto: "#263238" },
      { nombre: "Toalla Interdoblada Smart Blanco Jofel", imagen: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop", color: "#e6ecef", texto: "#263238" },
    ],
  },
  {
    id: "otros-despachadores",
    nombre: "Otros",
    imagen: "img/otrosdespa-banner.jpeg",
    descripcion: "Repuestos y consumibles para complementar los dispensadores, como jabón en espuma y gel antibacterial para mantener abastecidas las estaciones de higiene.",
    banner: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=1800&auto=format&fit=crop",
    presentaciones: [
      { nombre: "Jabón espuma Tork Premium 6/1000 ml", imagen: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=1200&auto=format&fit=crop", color: "#145b87", texto: "#ffffff" },
      { nombre: "Repuesto gel antibacterial Gojo", imagen: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=1200&auto=format&fit=crop", color: "#e68a24", texto: "#242424" },
    ],
  },
];

function cargarSeccionesDespachadores() {
  const contenedor = document.querySelector("[data-secciones-despachadores]");
  if (contenedor) {
    contenedor.innerHTML = seccionesDespachadores
      .map(({ id, nombre, imagen, descripcion }, index) => `
          <div id="seccion-${id}" class="linea-card" style="--color-linea: ${["#4b8f8c", "#4b8eb0", "#7b77a8"][index % 3]}">
            <img src="${imagen}" alt="${nombre}" class="linea-img" />
            <h3>${nombre.toUpperCase()}</h3>
            <p>${descripcion}</p>
          </div>
      `)
      .join("");
  }

  const nombreSeccion = document.querySelector("[data-despachador-titulo]");
  const slug = document.body.dataset.despachadorSeccion;
  const seccion = seccionesDespachadores.find(({ id }) => id === slug);
  if (seccion) {
    if (nombreSeccion) {
      nombreSeccion.textContent = seccion.nombre.toUpperCase();
    }
    document.title = `${seccion.nombre} | Despachadores VANHOGAR`;
    const descripcion = document.querySelector("[data-despachador-descripcion]");
    if (descripcion) descripcion.textContent = seccion.descripcion;
    const imagen = document.querySelector("[data-despachador-banner]");
    if (imagen) {
      imagen.src = seccion.banner;
      imagen.alt = seccion.nombre;
    }
    const imagenProducto = document.getElementById("productoImagen");
    const presentaciones = document.querySelector("[data-despachador-presentaciones]");
    if (imagenProducto && seccion.presentaciones?.length) {
      imagenProducto.src = seccion.presentaciones[0].imagen;
      imagenProducto.alt = seccion.presentaciones[0].nombre;
    }
    if (presentaciones && seccion.presentaciones?.length) {
      presentaciones.innerHTML = seccion.presentaciones
        .map(({ nombre, imagen, color, texto = "#fff" }, index) => `
          <button class="aroma-btn${index === 0 ? " active" : ""}" type="button" data-text-color="${texto}" style="${index === 0 ? `background:${color};color:${texto}` : ""}">
            ${nombre}
          </button>
        `)
        .join("");
      presentaciones.querySelectorAll(".aroma-btn").forEach((boton, index) => {
        const opcion = seccion.presentaciones[index];
        boton.addEventListener("click", () => {
          cambiarAroma(opcion.nombre, opcion.imagen, opcion.color, boton);
          const imagenProducto = document.getElementById("productoImagen");
          if (imagenProducto) imagenProducto.alt = opcion.nombre;
        });
      });
      const tituloPresentacion = document.querySelector("[data-despachador-presentacion-titulo]");
      if (tituloPresentacion) tituloPresentacion.textContent = seccion.presentaciones[0].nombre;
    }
  }
}

cargarSeccionesDespachadores();

function cargarMenuLineas() {
  const botonesLineas = document.querySelectorAll(".navbar .dropdown-btn");

  botonesLineas.forEach((boton) => {
    const etiqueta = boton.textContent.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (etiqueta !== "lineas") return;

    const contenido = boton.parentElement.querySelector(".dropdown-content");

    if (!contenido) return;

    contenido.innerHTML = lineasMenu
      .map(({ href, label }) => `<a href="${href}">${label}</a>`)
      .join("");
  });
}

cargarMenuLineas();

/* Dropdowns de navegación: alternan al hacer clic y se cierran al salir. */
const dropdownButtons = document.querySelectorAll(".navbar .dropdown-btn");

function cerrarDropdowns(excepto = null) {
  document.querySelectorAll(".navbar .dropdown.is-open").forEach((dropdown) => {
    if (dropdown === excepto) return;
    dropdown.classList.remove("is-open");
    dropdown.querySelector(".dropdown-btn")?.setAttribute("aria-expanded", "false");
  });
}

dropdownButtons.forEach((boton) => {
  const dropdown = boton.closest(".dropdown");
  if (!dropdown) return;
  boton.setAttribute("aria-expanded", "false");
  boton.addEventListener("click", (event) => {
    event.preventDefault();
    const abrir = !dropdown.classList.contains("is-open");
    cerrarDropdowns(dropdown);
    dropdown.classList.toggle("is-open", abrir);
    boton.setAttribute("aria-expanded", String(abrir));
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar .dropdown")) cerrarDropdowns();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") cerrarDropdowns();
});

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function changeSlide() {
  if (slides.length === 0) return;

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  });
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

        <a href="https://www.instagram.com/vanhogartehuacan?exln=MTZ0OTU4MnMxMWx5NA==" class="social-card instagram" target="_blank">
          <i class="fa-brands fa-instagram"></i>
          <span>Instagram</span>
        </a>

        <a href="https://wa.me/522383868293" class="social-card whatsapp" target="_blank">
          <i class="fa-brands fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>

        <a href="https://www.tiktok.com/@vanhogartehuacan?_r=1&_t=ZS-9AktZGSC9ga" class="social-card tiktok" target="_blank">
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
  actualizarLinkMuestra(" ");
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

/* ===== EFECTO VAPOR SPA CORPORAL ===== */

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".spa-vapor");

  if (!contenedor || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  for (let i = 0; i < 12; i++) {
    const nube = document.createElement("div");
    const tamano = Math.random() * 190 + 190;

    nube.classList.add("nube-vapor");
    nube.style.width = `${tamano}px`;
    nube.style.height = `${tamano * 1.15}px`;
    nube.style.left = `${Math.random() * 100}%`;
    nube.style.animationDuration = `${Math.random() * 6 + 11}s`;
    nube.style.animationDelay = `${-(Math.random() * 6 + 1)}s`;

    contenedor.appendChild(nube);
  }
});


function cambiarAroma(nombre, imagen, color, elemento, descripcion) {
  // Cambiar imagen
  const productoImagen = document.getElementById("productoImagen");
  if (productoImagen) {
    productoImagen.src = imagen;
  }

  // Cambiar título
  const titulo = document.getElementById("aromaTitulo");
  if (titulo) {
    titulo.textContent = "Modelo Actual: " + nombre;
  }

  // Cambiar descripción (si existe)
  const descripcionProducto = document.getElementById("descripcionProducto");
  if (descripcionProducto && descripcion) {
    descripcionProducto.textContent = descripcion;
  }

  // Si viene de botones
  if (
    elemento &&
    elemento.classList &&
    elemento.classList.contains("aroma-btn")
  ) {
    document.querySelectorAll(".aroma-btn").forEach((btn) => {
      btn.classList.remove("active");
      btn.style.background = "";
      btn.style.color = "";
    });

    elemento.classList.add("active");
    elemento.style.background = color;
    elemento.style.color = elemento.dataset.textColor || "#fff";
  }

  // Si viene de un selector
  if (elemento && elemento.tagName === "SELECT") {
    elemento.style.backgroundColor = color;
    elemento.style.color = "#fff";
  }

  const videoBluePower = document.querySelector(
    '[data-video-uso][data-video-requires-selection="blue-power"]',
  );
  if (videoBluePower) {
    videoBluePower.hidden = !(
      elemento?.matches?.("[data-video-uso-blue-power]") ||
      nombre.trim().toLowerCase() === "blue power"
    );
  }

  // Actualizar botón de WhatsApp
  if (typeof actualizarLinkMuestra === "function") {
    actualizarLinkMuestra(nombre);
  }
}

/* Reproductor flotante de demostraciones (se incluye solo en Alumitec y Blue Power). */
document.querySelectorAll("[data-video-uso]").forEach((widget) => {
  const toggle = widget.querySelector(".video-uso-toggle");
  const panel = widget.querySelector(".video-uso-panel");
  const close = widget.querySelector(".video-uso-cerrar");
  const content = widget.querySelector("[data-video-contenido]");
  const source = widget.dataset.videoSrc?.trim();

  if (source && content) {
    content.replaceChildren();
    const youtubeId = source.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/i)?.[1];
    const vimeoId = source.match(/vimeo\.com\/(\d+)/i)?.[1];

    if (youtubeId || vimeoId) {
      const frame = document.createElement("iframe");
      frame.src = youtubeId
        ? `https://www.youtube-nocookie.com/embed/${youtubeId}`
        : `https://player.vimeo.com/video/${vimeoId}`;
      frame.title = widget.dataset.videoTitle || "Demostración de uso";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      content.append(frame);
    } else {
      const video = document.createElement("video");
      video.src = source;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      content.append(video);
    }
  }

  const setOpen = (open) => {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(panel.hidden));
  close.addEventListener("click", () => setOpen(false));
});

/*==================================
        ESPUMA LAVANDERÍA
==================================*/

document.addEventListener("DOMContentLoaded", () => {

    const foam = document.querySelector(".foam-container");

    if (!foam) return;

    function crearBurbuja(arriba = false) {

        const b = document.createElement("div");

        b.className = "foamBubble";

        const size = Math.random() * 20 + 8;

        b.style.width = size + "px";
        b.style.height = size + "px";

        b.style.left = Math.random() * 100 + "%";

        /* Color parecido a la imagen */
        b.style.background = `
            radial-gradient(circle at 30% 30%,
            rgba(255,255,255,.95) 0%,
            rgba(228,245,255,.90) 45%,
            rgba(184,226,255,.55) 75%,
            rgba(184,226,255,0) 100%)
        `;

        b.style.boxShadow = `
            0 0 10px rgba(180,220,255,.85),
            inset -3px -3px 5px rgba(255,255,255,.45)
        `;

        if(arriba){

            b.style.top = Math.random()*40 + "px";

            b.animate([
                {
                    transform:"translateY(0) scale(.4)",
                    opacity:0
                },
                {
                    opacity:1,
                    offset:.2
                },
                {
                    transform:"translateY(120px) scale(1)",
                    opacity:0
                }
            ],{

                duration:1800 + Math.random()*700,

                easing:"ease-out",

                fill:"forwards"

            });

        }else{

            b.style.bottom = Math.random()*40 + "px";

            b.animate([
                {
                    transform:"translateY(0) scale(.4)",
                    opacity:0
                },
                {
                    opacity:1,
                    offset:.2
                },
                {
                    transform:"translateY(-140px) scale(1)",
                    opacity:0
                }
            ],{

                duration:1800 + Math.random()*700,

                easing:"ease-out",

                fill:"forwards"

            });

        }

        foam.appendChild(b);

        setTimeout(()=>{

            b.remove();

        },2600);

    }

    const intervalo = setInterval(()=>{

        crearBurbuja(true);   // arriba

        crearBurbuja(false);  // abajo

    },70);

    setTimeout(()=>{

        clearInterval(intervalo);

setTimeout(() => {

    foam.style.opacity = "0";
    foam.style.transform = "scale(1.02)";

    setTimeout(() => {

        foam.remove();

    }, 1200);

}, 2500);

    },5000);

});
