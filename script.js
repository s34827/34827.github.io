// เปิด/ปิดป๊อปอัพรายละเอียดผลงาน
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('[data-modal]');
  const backdrops = document.querySelectorAll('.modal-backdrop');

  function openModal(id) {
    const el = document.getElementById('modal-' + id);
    if (!el) return;
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
    const closeBtn = el.querySelector('.close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(el) {
    el.classList.remove('open');
    document.body.style.overflow = '';
  }

  cards.forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.modal));
  });

  backdrops.forEach(backdrop => {
    backdrop.querySelector('[data-close]')?.addEventListener('click', () => closeModal(backdrop));
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal(backdrop);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      backdrops.forEach(b => { if (b.classList.contains('open')) closeModal(b); });
    }
  });
});
