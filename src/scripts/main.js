import '../styles/main.css';
import { initNavigation } from './navigation.js';
import { initContactForm } from './contact-form.js';
import { initPortfolioFilter } from './portfolio-filter.js';
import { initServicesTabs } from './services-tabs.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initContactForm();
  initPortfolioFilter();
  initServicesTabs();
});
