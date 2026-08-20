import '../styles/main.css';
import { initNavigation } from './navigation.js';
import { initTeamSelector } from './team-selector.js';
import { initContactForm } from './contact-form.js';
import { initPortfolioFilter } from './portfolio-filter.js';
import { initServicesTabs } from './services-tabs.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTeamSelector();
  initContactForm();
  initPortfolioFilter();
  initServicesTabs();
});
