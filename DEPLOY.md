# 🚀 Guia de Deploy

## Deploy na Vercel (Recomendado)

### Método 1: Via GitHub (Recomendado)

1. **Faça push do código para o GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```

2. **Conecte com a Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe seu repositório do GitHub
   - Configure as variáveis de ambiente (se necessário)
   - Clique em "Deploy"

3. **Configure o domínio personalizado:**
   - Vá em Settings → Domains
   - Adicione seu domínio
   - Configure os DNS conforme instruções

### Método 2: Via Vercel CLI

```bash
# Instale a Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

## Variáveis de Ambiente

Configure as seguintes variáveis no painel da Vercel:

```env
# Analytics (Opcional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=seudominio.com
# ou
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email (Opcional)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Site URL
NEXT_PUBLIC_SITE_URL=https://seudominio.com
```

## Deploy em Outras Plataformas

### Netlify

1. Conecte seu repositório GitHub
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Adicione variáveis de ambiente
4. Deploy!

### Railway

1. Conecte seu repositório
2. Adicione variáveis de ambiente
3. Railway detectará automaticamente Next.js
4. Deploy!

### Cloudflare Pages

1. Conecte repositório GitHub
2. Build settings:
   - Build command: `npm run build`
   - Build output: `.next`
3. Adicione variáveis de ambiente
4. Deploy!

## Otimizações Pré-Deploy

### 1. Comprimir Imagens

```bash
# Use uma ferramenta como squoosh.app ou imagemin
# Ou configure next/image para otimização automática
```

### 2. Verificar Performance

```bash
# Build de produção local
npm run build
npm run start

# Teste com Lighthouse
# Chrome DevTools > Lighthouse > Generate Report
```

### 3. Verificar SEO

- [ ] Metadata completa em todas as páginas
- [ ] Open Graph tags configuradas
- [ ] Sitemap.xml acessível
- [ ] robots.txt configurado
- [ ] Schema.org implementado

### 4. Verificar Acessibilidade

```bash
# Use ferramentas como:
# - axe DevTools (extensão do Chrome)
# - WAVE (extensão)
# - Lighthouse Accessibility Report
```

## Monitoramento Pós-Deploy

### Analytics

**Plausible (Recomendado):**

- Sem cookies, privacy-friendly
- Dashboard simples e eficiente
- Configure em [plausible.io](https://plausible.io)

**Google Analytics:**

- Mais completo, mas usa cookies
- Configure GA4 para melhor privacidade

### Performance Monitoring

**Vercel Analytics:**

- Incluído gratuitamente
- Real User Metrics (RUM)
- Core Web Vitals

**Alternativas:**

- New Relic
- Datadog
- Sentry (para erros)

## Checklist Pós-Deploy

- [ ] Site acessível via HTTPS
- [ ] Domínio customizado funcionando (se aplicável)
- [ ] Formulário de contato testado
- [ ] Analytics configurado e funcionando
- [ ] Todas as páginas carregam corretamente
- [ ] Links internos e externos funcionando
- [ ] Performance score ≥ 95 no Lighthouse
- [ ] SEO score = 100 no Lighthouse
- [ ] Acessibilidade score ≥ 95
- [ ] Responsivo em mobile, tablet e desktop
- [ ] Dark mode funcionando
- [ ] Imagens otimizadas carregando
- [ ] Fontes carregando corretamente

## Manutenção

### Atualizações de Conteúdo

```bash
# Edite myoverview.md ou lib/content.ts
# Faça commit e push
git add .
git commit -m "Update content"
git push

# Vercel fará deploy automático
```

### Atualizações de Dependências

```bash
# Verificar atualizações
npm outdated

# Atualizar todas
npm update

# Ou atualizar manualmente
npm install next@latest react@latest

# Teste localmente
npm run build
npm run start

# Deploy
git add .
git commit -m "Update dependencies"
git push
```

### Monitorar Core Web Vitals

Acesse regularmente:

- Vercel Analytics Dashboard
- Google Search Console
- PageSpeed Insights

Metas:

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Troubleshooting

### Build Failed

```bash
# Limpe cache e reinstale
rm -rf .next node_modules
npm install
npm run build
```

### Imagens Não Carregam

- Verifique `next.config.js` → `images.remotePatterns`
- Confirme que imagens estão em `public/`
- Use sempre `next/image` para otimização

### Formulário Não Envia

- Verifique API key do Resend em variáveis de ambiente
- Confirme que `/api/contact` está acessível
- Veja logs no dashboard da Vercel

### Performance Baixa

- Ative compressão gzip/brotli (automático na Vercel)
- Use ISR (Incremental Static Regeneration) se aplicável
- Implemente lazy loading para componentes pesados
- Minimize JavaScript com code splitting

## Recursos Úteis

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Web.dev Performance](https://web.dev/performance/)
- [MDN Web Docs](https://developer.mozilla.org/)
