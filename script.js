// Mobile menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger?.addEventListener("click", () => navLinks.classList.toggle("show"));

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp form sender
function sendWhatsApp(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const zip = document.getElementById("zip").value.trim();
  const service = document.getElementById("service").value;
  const msg = document.getElementById("msg").value.trim();

  const text = `Hola, soy ${name}. Mi teléfono es ${phone}. ZIP: ${zip}. Estoy interesado en: ${service}. Mensaje: ${msg}`;
  const url = `https://wa.me/17862908401?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
  return false;
}

// Simple i18n (ES/EN)
const i18n = {
  es: {
    nav_services:"Servicios",
    nav_gallery:"Galería",
    nav_testimonials:"Testimonios",
    nav_process:"Proceso",
    nav_quote:"Cotiza Gratis",
    badge:"🔥 Cortinas listas en 72 horas o TE DEVOLVEMOS TU DINERO",
    hero_title:"Cortinas, Blinds & Shades personalizados <br/>para tu casa o negocio en Miami",
    hero_sub:"Fabricación e instalación premium con medición gratis. Blackout, Zebra, Roller, Screen y motorizadas.",
    hero_cta:"Agenda tu medición gratis",
    hero_whatsapp:"Habla por WhatsApp",
    trust_local:"Servicio local Miami-Dade",
    trust_warranty:"Garantía de por vida",
    hero_card_title:"Instalación rápida",
    hero_card_text:"Tu proyecto empieza hoy y se instala en tiempo récord.",
    stat_1:"Garantía",
    stat_2:"Instalaciones",
    stat_3:"Clientes felices",
    services_title:"Servicios",
    services_sub:"Todo hecho a medida con acabados premium.",
    srv_roller:"Minimalistas, elegantes y fáciles de mantener.",
    srv_zebra:"Control de luz perfecto con diseño moderno.",
    srv_blackout:"Oscuridad total para dormir o cine en casa.",
    srv_screen:"Protección solar sin perder la vista exterior.",
    srv_motor:"Automatiza con control remoto o Alexa/Google.",
    srv_drapes:"Sheers, linen, velvet y diseños personalizados.",
    services_cta:"Cotiza ahora",
    gallery_title:"Galería (Before & After)",
    gallery_sub:"Aquí van tus fotos reales. Puedes reemplazarlas cuando quieras.",
    gal_1:"Sala moderna",
    gal_2:"Habitación blackout",
    gal_3:"Zebra shades",
    gal_4:"Cocina roller",
    gal_5:"Screen shades",
    gal_6:"Cortinas elegantes",
    testi_title:"Lo que dicen nuestros clientes",
    testi_sub:"Reemplaza estos textos con testimonios reales tuyos.",
    t1:"“Increíble servicio y super rápido. En 3 días tenía todo instalado.”",
    t2:"“Calidad premium. Las zebra shades quedaron perfectas.”",
    t3:"“Los recomiendo 100%. Excelente atención y precios justos.”",
    process_title:"Nuestro proceso",
    process_sub:"Simple, rápido, sin complicaciones.",
    p1_title:"Medición Gratis",
    p1_text:"Vamos a tu casa, medimos y te asesoramos con telas y estilos.",
    p2_title:"Cotización en 15 min",
    p2_text:"Te damos precio claro, sin sorpresas.",
    p3_title:"Producción Express",
    p3_text:"Fabricamos tu pedido con materiales premium.",
    p4_title:"Instalación 72h",
    p4_text:"Si no cumplimos, te devolvemos tu dinero. Así de simple.",
    contact_title:"Cotiza Gratis Hoy",
    contact_sub:"Respóndenos y te llamamos en minutos.",
    f_name:"Nombre",
    f_phone:"Teléfono",
    f_zip:"ZIP Code",
    f_service:"Servicio",
    f_msg:"Mensaje",
    f_submit:"Enviar por WhatsApp",
    f_note:"Al enviar, se abrirá WhatsApp con tu mensaje listo.",
    info_title:"Contacto directo",
    info_whatsapp:"Escríbenos ahora",
    hours_title:"Horario",
    hours_text:"Lunes a Sábado: 8:00 AM – 7:00 PM<br>Domingo: Solo citas",
    foot_desc:"Cortinas premium en Miami con instalación garantizada en 72 horas."
  },
  en: {
    nav_services:"Services",
    nav_gallery:"Gallery",
    nav_testimonials:"Reviews",
    nav_process:"Process",
    nav_quote:"Free Quote",
    badge:"🔥 Shades ready in 72 hours or YOUR MONEY BACK",
    hero_title:"Custom Blinds & Shades <br/>for homes and businesses in Miami",
    hero_sub:"Premium manufacturing & installation with free measurements. Blackout, Zebra, Roller, Screen and motorized.",
    hero_cta:"Book a free measurement",
    hero_whatsapp:"Chat on WhatsApp",
    trust_local:"Local Miami-Dade service",
    trust_warranty:"Lifetime warranty",
    hero_card_title:"Fast installation",
    hero_card_text:"Your project starts today and installs in record time.",
    stat_1:"Guarantee",
    stat_2:"Installations",
    stat_3:"Happy clients",
    services_title:"Services",
    services_sub:"Made to measure with premium finishes.",
    srv_roller:"Minimal, elegant, easy to clean.",
    srv_zebra:"Perfect light control with modern design.",
    srv_blackout:"Total darkness for bedrooms or home theater.",
    srv_screen:"Solar protection without losing your view.",
    srv_motor:"Smart control with remote or Alexa/Google.",
    srv_drapes:"Sheers, linen, velvet and custom drapes.",
    services_cta:"Get a quote",
    gallery_title:"Gallery (Before & After)",
    gallery_sub:"Replace these with your real projects anytime.",
    gal_1:"Modern living room",
    gal_2:"Blackout bedroom",
    gal_3:"Zebra shades",
    gal_4:"Kitchen roller",
    gal_5:"Screen shades",
    gal_6:"Elegant drapes",
    testi_title:"What our clients say",
    testi_sub:"Replace with your real testimonials.",
    t1:"“Amazing service and super fast. Installed in 3 days.”",
    t2:"“Premium quality. Zebra shades look perfect.”",
    t3:"“100% recommended. Great attention and fair prices.”",
    process_title:"Our process",
    process_sub:"Simple, fast, no stress.",
    p1_title:"Free Measurement",
    p1_text:"We visit, measure and guide you on fabrics and styles.",
    p2_title:"Quote in 15 min",
    p2_text:"Clear pricing, no surprises.",
    p3_title:"Express Production",
    p3_text:"We make your order with premium materials.",
    p4_title:"72h Installation",
    p4_text:"If we miss it, you get your money back. Simple.",
    contact_title:"Get a Free Quote Today",
    contact_sub:"Message us and we’ll call you in minutes.",
    f_name:"Name",
    f_phone:"Phone",
    f_zip:"ZIP Code",
    f_service:"Service",
    f_msg:"Message",
    f_submit:"Send via WhatsApp",
    f_note:"This will open WhatsApp with your message ready.",
    info_title:"Direct contact",
    info_whatsapp:"Message us now",
    hours_title:"Hours",
    hours_text:"Mon–Sat: 8:00 AM – 7:00 PM<br>Sun: By appointment",
    foot_desc:"Premium shades in Miami with guaranteed 72-hour installation."
  }
};

let currentLang = "es";
const langToggle = document.getElementById("langToggle");

function applyLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  langToggle.textContent = lang === "es" ? "EN" : "ES";
  currentLang = lang;
}
langToggle?.addEventListener("click", () => {
  applyLang(currentLang === "es" ? "en" : "es");
});
applyLang("es");
