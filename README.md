# Work in Ideas (WiiD) — Website Oficial

> **"We are makers"** — Desenvolvimento de software sob medida, aplicativos mobile, sistemas web e plataformas digitais de alta performance.

Website estático moderno construído com foco em **SEO de alta relevância**, **Core Web Vitals**, **velocidade de carregamento**, **acessibilidade** e **deploy automatizado via GitHub Pages**.

---

## 🚀 Tecnologias & Arquitetura

- **Core**: HTML5 Semântico, Vanilla CSS Moderno (Design Tokens, Glassmorphism, Microinterações), JavaScript ESNext modular.
- **Build Tool**: [Vite](https://vitejs.dev/) configurado para Multi-Page Application (MPA).
- **SEO & Indexação**:
  - Estrutura semântica rigorosa com único `<h1>` por página e hierarquia lógica.
  - Metadados completos: Title, Description, Canonical, Robots, Open Graph e Twitter Cards.
  - Schema.org JSON-LD estruturado (`Organization`, `LocalBusiness`, `WebSite`, `Service`, `BreadcrumbList`).
  - Geração automática de `sitemap.xml` e `robots.txt`.
- **Performance & Core Web Vitals**:
  - Zero dependência de plugins pesados ou bibliotecas desnecessárias.
  - Otimização de assets, CSS minificado e lazy loading de imagens.
  - Target 100/100 no Google PageSpeed Insights / Lighthouse.
- **CI/CD & Hospedagem**:
  - Deploy automatizado no **GitHub Pages** via GitHub Actions a cada push na branch `main`.
  - Suporte a domínio próprio (`wi-id.com`) configurado com arquivo `CNAME`.

---

## 📁 Estrutura de Diretórios

```
Work-In-Ideas-WiiD/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Pipeline de CI/CD para GitHub Pages
├── public/
│   ├── CNAME                       # Domínio wi-id.com
│   ├── robots.txt                  # Regras de indexação para bots
│   ├── sitemap.xml                 # Mapa do site para Googlebot
│   └── favicon.svg                 # Ícone vetorial da marca
├── src/
│   ├── data/
│   │   ├── site.json               # Dados institucionais, contatos e métricas
│   │   ├── services.json           # Detalhamento de serviços e palavras-chave
│   │   ├── team.json               # Dados da equipe para o "Selecione um Jogador"
│   │   ├── clients.json            # 40+ clientes reais da Work in Ideas
│   │   └── projects.json           # Cases de sucesso e entregáveis
│   ├── styles/
│   │   ├── variables.css           # Design tokens e variáveis de cores
│   │   ├── reset.css               # Reset CSS moderno e acessível
│   │   ├── typography.css          # Tipografia, fontes e tags <title>
│   │   ├── layout.css              # Grids, header glassmorphism, footer
│   │   ├── components.css          # Botões, cards, seletor de equipe, marquee
│   │   └── main.css                # Arquivo mestre de estilos
│   └── scripts/
│       ├── main.js                 # Inicializador da aplicação
│       ├── navigation.js           # Menu mobile e scroll suave
│       ├── team-selector.js        # Interatividade "Selecione um Jogador"
│       ├── contact-form.js         # Máscara de telefone e disparo WhatsApp
│       └── portfolio-filter.js     # Filtro por categorias de projetos
├── index.html                      # Página Inicial (Home)
├── servicos/
│   ├── index.html                  # Catálogo Geral de Serviços
│   ├── desenvolvimento-web/        # Página de Serviço SEO: Websites
│   ├── sistemas-web/               # Página de Serviço SEO: Sistemas Web
│   ├── aplicativos-mobile/         # Página de Serviço SEO: Apps iOS/Android
│   ├── ecommerce/                  # Página de Serviço SEO: Lojas Virtuais
│   └── outsourcing/                # Página de Serviço SEO: Squads Ágeis
├── projetos/
│   └── index.html                  # Portfólio de Projetos & 40+ Clientes
├── sobre/
│   └── index.html                  # Institucional, Filosofia & Sede
├── contato/
│   └── index.html                  # Contato, Localização & WhatsApp
├── package.json
└── vite.config.js
```

---

## 🛠️ Comandos de Desenvolvimento

### 1. Instalação das dependências:
```bash
npm install
```

### 2. Executar localmente em modo de desenvolvimento:
```bash
npm run dev
```
Acesse em: `http://localhost:3000`

### 3. Gerar o build de produção estático:
```bash
npm run build
```
Os arquivos otimizados serão gerados no diretório `dist/`.

### 4. Visualizar o build de produção localmente:
```bash
npm run preview
```

---

## 🌐 Informações de Contato & Sede

- **Empresa**: Work in Ideas (WiiD)
- **WhatsApp**: [(62) 98339-8612](https://wa.me/5562983398612)
- **E-mail**: `contato@wi-id.com`
- **Endereço**: Rua 137, nº 556, Qd. 50, Lt. 01, 1º andar, Sala 101, Ed. Alvorada, Setor Marista, Goiânia/GO, CEP: 74170-120
