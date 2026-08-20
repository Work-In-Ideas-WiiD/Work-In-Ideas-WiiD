/**
 * Contact Form Handler, Phone Masking & WhatsApp Dispatcher
 */
export function initContactForm() {
  const form = document.getElementById('contact-form');
  const phoneInput = document.getElementById('phone-input');

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 11) val = val.slice(0, 11);

      if (val.length > 10) {
        // (99) 99999-9999
        e.target.value = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
      } else if (val.length > 6) {
        // (99) 9999-9999
        e.target.value = `(${val.slice(0, 2)}) ${val.slice(2, 6)}-${val.slice(6)}`;
      } else if (val.length > 2) {
        // (99) 9999
        e.target.value = `(${val.slice(0, 2)}) ${val.slice(2)}`;
      } else if (val.length > 0) {
        // (99
        e.target.value = `(${val}`;
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name-input')?.value || '';
      const email = document.getElementById('email-input')?.value || '';
      const phone = document.getElementById('phone-input')?.value || '';
      const service = document.getElementById('service-select')?.value || 'Software Sob Medida';
      const message = document.getElementById('message-input')?.value || '';

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn?.innerHTML || 'Enviar Mensagem';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Redirecionando para o WhatsApp...</span>';
      }

      // Format message for WhatsApp
      const text = `*Novo Contato via Site WiiD*\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*WhatsApp/Tel:* ${phone}\n*Interesse:* ${service}\n*Mensagem:* ${message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/5562983398612?text=${encodedText}`;

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Mensagem Enviada! Abrir novamente</span>';
        }
      }, 600);
    });
  }
}
