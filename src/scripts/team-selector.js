import teamData from '../data/team.json';

/**
 * Interactive Squad / "Selecione um Jogador" Component matching Retro Arcade Character Selection
 */
export function initTeamSelector() {
  const cardContainer = document.getElementById('character-card-target');
  const quoteContainer = document.getElementById('character-quote-target');
  const avatarButtons = document.querySelectorAll('.character-mini-avatar-btn');
  const prevBtn = document.getElementById('team-prev-btn');
  const nextBtn = document.getElementById('team-next-btn');

  if (!cardContainer) return;

  let currentIndex = 0;
  const baseUrl = import.meta.env.BASE_URL || './';

  function resolveAssetUrl(path) {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const clean = path.replace(/^\.\//, '').replace(/^\//, '');
    return baseUrl + clean;
  }

  function renderCharacter(player) {
    if (!player) return;
    const photoUrl = resolveAssetUrl(player.photo);

    cardContainer.innerHTML = `
      <div class="character-card-avatar" aria-label="Foto de ${player.name}">
        <img src="${photoUrl}" alt="${player.name} - ${player.role}" class="character-card-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <div class="character-card-svg-fallback" style="display: none; width: 100%; height: 100%;">
          ${player.avatarSvg}
        </div>
      </div>
      <div class="character-card-header">
        <div class="character-card-name">${player.name}</div>
        <span class="character-card-role">${player.role}</span>
      </div>
      <div class="character-stats-list">
        ${player.stats.map(s => `
          <div class="character-stat-row">
            <span class="stat-name">${s.name}</span>
            <span class="character-stat-stars">${s.stars}</span>
          </div>
        `).join('')}
      </div>
      <div class="character-card-bio">
        ${player.bio}
      </div>
    `;

    if (quoteContainer) {
      quoteContainer.innerHTML = `
        <div class="quote-balloon">
          <p class="quote-text">"${player.quote}"</p>
          <span class="quote-author">— ${player.name} (${player.role})</span>
        </div>
      `;
    }

    avatarButtons.forEach(btn => {
      const pid = btn.getAttribute('data-player-id');
      if (pid === player.id) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
  }

  avatarButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      currentIndex = idx;
      renderCharacter(teamData[currentIndex]);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + teamData.length) % teamData.length;
      renderCharacter(teamData[currentIndex]);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % teamData.length;
      renderCharacter(teamData[currentIndex]);
    });
  }

  // Keyboard navigation support
  document.addEventListener('keydown', (e) => {
    const squadSection = document.getElementById('sobre') || document.getElementById('equipe');
    if (!squadSection) return;

    const rect = squadSection.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isInView) return;

    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + teamData.length) % teamData.length;
      renderCharacter(teamData[currentIndex]);
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % teamData.length;
      renderCharacter(teamData[currentIndex]);
    }
  });

  // Initial render (Luísa by default)
  const defaultPlayer = teamData.find(p => p.id === 'luisa') || teamData[0];
  if (defaultPlayer) {
    currentIndex = teamData.indexOf(defaultPlayer);
    renderCharacter(defaultPlayer);
  }
}
