/**
 * Interactive Service Folder Switcher for "O QUE FAZEMOS?"
 * Switches the active service details with the real text from the original wi-id.com
 */

const servicesData = {
  dev: {
    title: "Desenvolvimento de Website",
    badge: "Websites & Landing Pages",
    route: "/servicos/desenvolvimento-web/",
    paragraphs: [
      "Criamos sites exclusivos, alinhados com a identidade visual da sua marca. Cada detalhe é pensado para transmitir os valores que você e sua marca tem o desejo de transmitir.",
      "Nossos sites são desenvolvidos com foco na experiência do usuário. Utilizamos as mais recentes tecnologias para garantir que seu site seja rápido, responsivo e compatível com todos os dispositivos, proporcionando uma experiência consistente em qualquer lugar.",
      "Priorizamos a segurança do seu site. Implementamos medidas robustas para proteger seus dados e os de seus clientes."
    ]
  },
  sistemas: {
    title: "Sistemas Web",
    badge: "Software Sob Medida",
    route: "/servicos/sistemas-web/",
    paragraphs: [
      "Em um mundo cada vez mais digital, a eficiência dos sistemas web torna-se crucial para o sucesso empresarial. Apresentamos soluções de desenvolvimento de sistemas web com um compromisso inabalável com a seriedade profissional, visando impulsionar a sua operação para níveis superiores.",
      "Criamos sistemas web personalizados que se adaptam perfeitamente às necessidades específicas do seu negócio. Desde automação de processos até gestão de dados, entregamos soluções que otimizam suas operações."
    ]
  },
  portais: {
    title: "Portais de Conteúdo",
    badge: "CMS & Comunicação",
    route: "/servicos/",
    paragraphs: [
      "Criamos portais de conteúdo que refletem a identidade única da sua marca. Cada elemento visual é cuidadosamente projetado para transmitir profissionalismo e atrair seu público-alvo.",
      "Oferecemos sistemas de gerenciamento de conteúdo (CMS) poderosos e intuitivos, permitindo que você atualize e adicione conteúdo de maneira simples, mantendo seu portal sempre relevante."
    ]
  },
  app: {
    title: "Apps para Smartphone",
    badge: "iOS & Android",
    route: "/servicos/aplicativos-mobile/",
    paragraphs: [
      "Desenvolvemos aplicativos sob medida para atender às necessidades exclusivas do seu negócio. Cada detalhe é cuidadosamente planejado para garantir uma experiência de usuário excepcional.",
      "Nossos aplicativos são construídos com foco em desempenho, garantindo que sua funcionalidade seja suave e eficiente.",
      "Nosso compromisso não termina com o lançamento. Oferecemos suporte contínuo, atualizações e melhorias para garantir que seu aplicativo esteja sempre alinhado com as demandas em constante evolução do mercado."
    ]
  },
  loja: {
    title: "Lojas Virtuais",
    badge: "E-commerce & Vendas",
    route: "/servicos/ecommerce/",
    paragraphs: [
      "Criamos lojas virtuais com design único, alinhadas à identidade da sua marca.",
      "Colocamos sua loja virtual nos holofotes. Otimizamos cada detalhe para os motores de busca, aumentando sua visibilidade online e atraindo tráfego qualificado.",
      "Eleve sua presença digital com uma loja virtual que não apenas vende, mas também encanta. Confiança, segurança e eficiência são os pilares de nosso serviço de desenvolvimento de lojas virtuais profissionais."
    ]
  },
  contMult: {
    title: "Conteúdo Multimídia",
    badge: "Animações & Mídia",
    route: "/servicos/",
    paragraphs: [
      "Trabalhamos com Conteúdos de multimídia, que são materiais que utilizam uma combinação de diferentes formas de mídia, como texto, imagens, áudio, vídeo e elementos interativos. Essa abordagem permite uma experiência mais rica e envolvente para o usuário, pois aproveita diversas formas de comunicação simultaneamente.",
      "Utilizamos em Websites, Sistemas, Aplicativos mobile e Animações Interativas."
    ]
  },
  equipe: {
    title: "Equipe Técnica",
    badge: "Squads Dedicadas",
    route: "/servicos/outsourcing/",
    paragraphs: [
      "Oferecemos uma equipe técnica no desenvolvimento de software para sua empresa, buscando soluções tecnológicas personalizadas e eficientes. O papel dessas equipes vai muito além da simples codificação, envolvendo diversas fases do ciclo de vida do software, desde a concepção da ideia até a implementação e manutenção contínua.",
      "Nossa equipe técnica é dedicada ao desenvolvimento de software composta por profissionais especializados em diversas áreas, como desenvolvedores de software, BackOps, analistas de sistemas, designers de interface e testadores de qualidade."
    ]
  }
};

export function initServicesTabs() {
  const folderButtons = document.querySelectorAll('.folder-tab-btn');
  const detailsTarget = document.getElementById('service-details-target');

  if (!folderButtons.length || !detailsTarget) return;

  function renderServiceDetails(serviceKey) {
    const s = servicesData[serviceKey];
    if (!s) return;

    detailsTarget.innerHTML = `
      <div class="service-detail-card-inner">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4); flex-wrap: wrap; gap: var(--space-2);">
          <h3 style="font-size: 1.5rem; color: #FFFFFF; margin: 0;">${s.title}</h3>
          <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--color-neon-cyan); background: rgba(0, 240, 255, 0.1); padding: 4px 10px; border-radius: 4px; border: 1px solid rgba(0, 240, 255, 0.3);">${s.badge}</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-6);">
          ${s.paragraphs.map(p => `<p style="font-size: 0.9375rem; line-height: 1.7; color: var(--color-text-secondary); margin: 0;">${p}</p>`).join('')}
        </div>
        <div style="display: flex; justify-content: flex-end;">
          <a href="${s.route}" class="btn-pill-gradient" style="padding: 0.6rem 1.5rem; font-size: 0.6875rem;">
            <span>Ver Página do Serviço &gt;</span>
          </a>
        </div>
      </div>
    `;

    folderButtons.forEach(btn => {
      if (btn.getAttribute('data-service-key') === serviceKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  folderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-service-key');
      renderServiceDetails(key);
    });
  });

  // Default to 'sistemas' or 'dev'
  renderServiceDetails('dev');
}
