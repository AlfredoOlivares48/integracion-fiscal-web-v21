const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      status.textContent = 'Por favor complete los campos obligatorios.';
      form.reportValidity();
      return;
    }
    status.textContent = 'Formulario de demostración: la validación funciona. Falta conectar el envío al correo del despacho.';
  });
}

/* DEMO_FORM_ONLY:
   El formulario valida la interfaz, pero NO transmite datos a ningún servidor.
   Se conectará únicamente después de definir el hosting/backend definitivo.
*/

document.querySelectorAll('.whatsapp-pending').forEach(el=>el.addEventListener('click',e=>e.preventDefault()));

// v5 carousel: preserves the supplied image order 1 -> 2 -> 3.
(() => {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.hero-slide')];
  const dots = [...carousel.querySelectorAll('[data-slide]')];
  let current = 0, timer;
  const show = (i) => {
    current = (i + slides.length) % slides.length;
    slides.forEach((el,n)=>el.classList.toggle('is-active',n===current));
    dots.forEach((el,n)=>el.classList.toggle('is-active',n===current));
  };
  const restart = () => { clearInterval(timer); timer=setInterval(()=>show(current+1),6500); };
  carousel.querySelector('[data-prev]')?.addEventListener('click',()=>{show(current-1);restart();});
  carousel.querySelector('[data-next]')?.addEventListener('click',()=>{show(current+1);restart();});
  dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);restart();}));
  restart();
})();
// v11 contact intent: appointment fields are progressively disclosed in contacto.html.
