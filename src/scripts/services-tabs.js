/**
 * Service Tabs Switcher for "O QUE FAZEMOS? / NOSSOS SERVIÇOS"
 * Works with pre-rendered pure HTML panels to guarantee 100% crawlability & SEO indexation
 * without relying on JavaScript to display the content.
 */
export function initServicesTabs() {
  const folderButtons = document.querySelectorAll('.folder-tab-btn');
  const panels = document.querySelectorAll('.service-detail-panel');

  if (!folderButtons.length || !panels.length) return;

  function activateTab(serviceKey, setFocus = false) {
    folderButtons.forEach((btn) => {
      const isMatch = btn.getAttribute('data-service-key') === serviceKey;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      if (isMatch && setFocus) {
        btn.focus();
      }
    });

    panels.forEach((panel) => {
      const isMatch = panel.id === `service-panel-${serviceKey}`;
      panel.classList.toggle('active', isMatch);
    });
  }

  folderButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const serviceKey = btn.getAttribute('data-service-key');
      if (serviceKey) {
        activateTab(serviceKey);
      }
    });

    // Keyboard navigation for WAI-ARIA tabs
    btn.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        targetIndex = (index + 1) % folderButtons.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        targetIndex = (index - 1 + folderButtons.length) % folderButtons.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetIndex = folderButtons.length - 1;
      }

      if (targetIndex !== null) {
        const targetBtn = folderButtons[targetIndex];
        const key = targetBtn.getAttribute('data-service-key');
        if (key) {
          activateTab(key, true);
        }
      }
    });
  });
}
