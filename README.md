# Pedro Canedo - Site Pessoal

Site pessoal e portfólio profissional de Pedro Canedo, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + shadcn/ui
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Formulários:** React Hook Form + Zod
- **Temas:** next-themes (Dark/Light mode)
- **Analytics:** Plausible (opcional)
- **SEO:** Metadata completa, sitemap, robots.txt, schema.org

## 📋 Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/pedro-canedo/site-pessoal.git
cd site-pessoal
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente (opcional):

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite .env.local com suas configurações
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
.
├── app/                    # App Router (Next.js 14)
│   ├── api/               # API Routes
│   ├── contato/           # Página de Contato
│   ├── experiencia/       # Página de Experiência
│   ├── privacidade/       # Política de Privacidade
│   ├── projetos/          # Página de Projetos
│   ├── sobre/             # Página Sobre
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Home page
│   ├── globals.css        # Estilos globais
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI (shadcn/ui)
│   ├── analytics.tsx     # Analytics
│   ├── contact-form.tsx  # Formulário de contato
│   ├── footer.tsx        # Footer
│   ├── navbar.tsx        # Navbar
│   ├── structured-data.tsx # Schema.org JSON-LD
│   └── theme-provider.tsx  # Provider de temas
├── lib/                   # Utilitários e helpers
│   ├── content.ts        # Parser do conteúdo
│   └── utils.ts          # Funções utilitárias
├── public/               # Arquivos estáticos
│   └── profile.png       # Foto de perfil
├── myoverview.md         # Fonte de dados do perfil
└── package.json          # Dependências do projeto
```

## 🎨 Customização

### Cores e Tema

As cores podem ser customizadas em `app/globals.css`:

```css
:root {
  --primary: 238 79% 60%; /* Indigo */
  --secondary: 173 80% 40%; /* Teal */
  --accent: 38 92% 50%; /* Amber */
  /* ... */
}
```

### Conteúdo

O conteúdo principal é gerenciado em `myoverview.md` e parseado em `lib/content.ts`. Para atualizar suas informações:

1. Edite `myoverview.md`
2. Ajuste o parser em `lib/content.ts` se necessário
3. O conteúdo será automaticamente refletido no site

### Projetos

Os projetos são definidos em `app/projetos/page.tsx`. Adicione ou edite projetos no array `projects`.

## 📧 Formulário de Contato

O formulário de contato está configurado mas requer integração com um serviço de email:

### Opção 1: Resend (Recomendado)

1. Crie uma conta em [resend.com](https://resend.com)
2. Obtenha sua API key
3. Adicione ao `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

4. Descomente o código em `app/api/contact/route.ts`

### Opção 2: Outros serviços

Você pode integrar com SendGrid, Mailgun, ou qualquer outro serviço de email editando `app/api/contact/route.ts`.

## 📊 Analytics

### Plausible (Recomendado - sem cookies)

1. Crie uma conta em [plausible.io](https://plausible.io)
2. Adicione seu domínio
3. Configure em `.env.local`:

```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=seudominio.com
```

### Google Analytics

1. Crie uma propriedade GA4
2. Configure em `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Descomente o código GA em `components/analytics.tsx`

## 🚢 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Configure as variáveis de ambiente
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pedro-canedo/site-pessoal)

### Outras plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- AWS Amplify
- Cloudflare Pages

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Qualidade de código
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript
npm run format       # Formata código com Prettier

# Testes (opcional)
npm run test         # Executa testes
npm run test:watch   # Testes em modo watch
npm run e2e          # Testes end-to-end
npm run e2e:ui       # Testes E2E com UI
```

## ✅ Checklist de SEO

- [x] Metadata completa em todas as páginas
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Schema.org JSON-LD (Person, WebSite, ProfilePage)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Imagens otimizadas com next/image
- [x] Fonte otimizada com next/font
- [x] Acessibilidade (semântica HTML, alt text, ARIA labels)

## 🎯 Performance

O site é otimizado para máxima performance:

- **Next.js 14** com App Router
- **Server Components** para melhor performance
- **Lazy loading** de imagens
- **Font optimization** com next/font
- **CSS otimizado** com Tailwind
- **Bundle size** minimizado

**Metas Lighthouse:**

- Performance: ≥ 95
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: 100

## 🔒 Privacidade

O site respeita a privacidade dos visitantes:

- Analytics sem cookies (Plausible)
- Coleta mínima de dados
- Política de privacidade clara
- Conformidade com LGPD/GDPR

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Pedro Canedo**

- Website: [pedrocanedo.dev](https://pedrocanedo.dev)
- GitHub: [@pedro-canedo](https://github.com/pedro-canedo)
- LinkedIn: [Pedro Canedo](https://linkedin.com/in/pedrobalhe)
- Email: devpedrocanedo@gmail.com

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)
- [Lucide Icons](https://lucide.dev/)

---

Desenvolvido com ❤️ por Pedro Canedo
