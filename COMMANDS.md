# 📝 Comandos Úteis

Referência rápida de todos os comandos disponíveis no projeto.

## 🚀 Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Acessar em http://localhost:3000
```

## 🏗️ Build & Produção

```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção (após build)
npm run start

# Build e start em sequência
npm run build && npm run start
```

## ✅ Qualidade de Código

```bash
# Executar ESLint
npm run lint

# Verificar tipos TypeScript
npm run type-check

# Formatar código com Prettier
npm run format

# Executar tudo (lint + type-check + build)
npm run lint && npm run type-check && npm run build
```

## 🧪 Testes

```bash
# Testes unitários (Jest)
npm run test

# Testes em watch mode
npm run test:watch

# Testes E2E (Playwright)
npm run e2e

# Testes E2E com UI
npm run e2e:ui

# Gerar coverage
npm run test -- --coverage
```

## 📦 Deploy

```bash
# Deploy com Vercel CLI
vercel

# Deploy para produção
vercel --prod

# Deploy preview
vercel --prod=false
```

## 🔧 Manutenção

```bash
# Verificar pacotes desatualizados
npm outdated

# Atualizar todos os pacotes
npm update

# Atualizar pacote específico
npm install nome-do-pacote@latest

# Limpar cache e reinstalar
rm -rf .next node_modules package-lock.json
npm install

# Analisar bundle size
npm run build
npx @next/bundle-analyzer
```

## 🎨 Customização

```bash
# Adicionar novo componente shadcn/ui
npx shadcn-ui@latest add [component-name]

# Exemplos:
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add input
```

## 🔍 Debug

```bash
# Build com debug info
npm run build -- --debug

# Analisar bundle
ANALYZE=true npm run build

# Verificar rotas
npm run build && npx next info
```

## 📊 Performance

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun

# Analisar performance
npm run build
npm run start
# Depois use Chrome DevTools > Lighthouse
```

## 🌐 Git & GitHub

```bash
# Inicializar repositório
git init
git add .
git commit -m "Initial commit"

# Conectar com remote
git remote add origin https://github.com/seu-usuario/site-pessoal.git
git branch -M main
git push -u origin main

# Criar nova branch
git checkout -b feature/nova-feature

# Commit com mensagem semântica
git commit -m "feat: adiciona nova funcionalidade"
git commit -m "fix: corrige bug X"
git commit -m "docs: atualiza documentação"
```

## 🔐 Variáveis de Ambiente

```bash
# Criar arquivo .env.local
touch .env.local

# Adicionar variável
echo "NEXT_PUBLIC_PLAUSIBLE_DOMAIN=seudominio.com" >> .env.local

# Verificar variáveis
cat .env.local
```

## 📝 Gerenciamento de Conteúdo

```bash
# Editar perfil
nano myoverview.md
# ou
code myoverview.md

# Editar projetos
code app/projetos/page.tsx

# Atualizar experiência
code lib/content.ts
```

## 🖼️ Otimização de Imagens

```bash
# Instalar imagemin (opcional)
npm install -D imagemin imagemin-webp imagemin-mozjpeg

# Otimizar imagens manualmente
# Ou use: https://squoosh.app/
```

## 🌍 Internacionalização (Futuro)

```bash
# Instalar next-intl (se quiser i18n)
npm install next-intl

# Configurar idiomas
mkdir -p messages
touch messages/pt-BR.json
touch messages/en.json
```

## 🔄 Atualizar Next.js

```bash
# Verificar versão atual
npx next --version

# Atualizar Next.js
npm install next@latest react@latest react-dom@latest

# Verificar breaking changes
npx @next/codemod@latest upgrade
```

## 📱 PWA (Progressive Web App)

```bash
# Instalar next-pwa (opcional)
npm install next-pwa

# Configurar em next.config.js
```

## 🛡️ Segurança

```bash
# Auditar dependências
npm audit

# Corrigir vulnerabilidades
npm audit fix

# Corrigir forçadamente (cuidado!)
npm audit fix --force

# Verificar licenças
npx license-checker
```

## 📈 Monitoramento

```bash
# Instalar Sentry (opcional)
npm install @sentry/nextjs

# Configurar
npx @sentry/wizard@latest -i nextjs
```

## 🔧 Troubleshooting

```bash
# Limpar cache Next.js
rm -rf .next

# Limpar cache npm
npm cache clean --force

# Reinstalar tudo
rm -rf node_modules package-lock.json
npm install

# Verificar porta em uso
lsof -i :3000
kill -9 [PID]

# Rodar em porta diferente
PORT=3001 npm run dev
```

## 📚 Documentação

```bash
# Gerar documentação TypeScript
npm install -D typedoc
npx typedoc --out docs src

# Gerar Storybook (opcional)
npx storybook@latest init
```

## 🎯 Scripts Personalizados

Adicione estes scripts em `package.json` se necessário:

```json
{
  "scripts": {
    "clean": "rm -rf .next out node_modules",
    "fresh": "npm run clean && npm install",
    "check": "npm run lint && npm run type-check",
    "pre-commit": "npm run lint && npm run type-check",
    "analyze": "ANALYZE=true npm run build"
  }
}
```

## 💡 Dicas Rápidas

```bash
# Verificar se tudo está OK antes de commit
npm run lint && npm run type-check && npm run build

# Desenvolvimento com type checking contínuo
npm run type-check -- --watch

# Ver tamanho do bundle
npm run build
ls -lh .next/static/chunks/

# Verificar qual processo está usando a porta
lsof -ti:3000 | xargs kill

# Executar múltiplos comandos
npm run lint & npm run type-check & wait

# Criar backup do projeto
tar -czf backup-$(date +%Y%m%d).tar.gz .
```

## 🔗 Links Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Vercel Docs](https://vercel.com/docs)

---

💡 **Dica:** Adicione estes comandos como snippets no seu editor ou crie aliases no seu shell!
