# 🚀 COMECE AQUI!

## Bem-vindo ao seu novo site profissional!

Seu site pessoal foi criado com sucesso! Este guia vai te orientar nos primeiros passos.

---

## 📋 Checklist de Início Rápido

### ✅ Passo 1: Instalar Dependências (5 min)

```bash
cd "/Users/pedro/projetos-pessoais/Site Pessoal/pedrocanedowebsite"
npm install
```

### ✅ Passo 2: Executar Localmente (1 min)

```bash
npm run dev
```

**Acesse:** [http://localhost:3000](http://localhost:3000)

### ✅ Passo 3: Verificar o Site (10 min)

Navegue pelas páginas e confira:

- ✅ Home - Hero com sua foto
- ✅ Sobre - Bio e habilidades
- ✅ Experiência - Timeline profissional
- ✅ Projetos - Portfólio
- ✅ Contato - Formulário
- ✅ Dark/Light mode funcionando

---

## 🎨 Personalização Básica

### 1. Atualizar Foto de Perfil

Sua foto já está em `public/profile.png`. Para trocar:

```bash
# Substitua o arquivo ou renomeie sua nova foto para profile.png
cp /caminho/para/sua/foto.png public/profile.png
```

### 2. Ajustar Conteúdo

O conteúdo vem de `myoverview.md`. Para adicionar/editar:

```bash
# Edite o arquivo
code myoverview.md

# Ou atualize diretamente em lib/content.ts
code lib/content.ts
```

### 3. Adicionar Mais Projetos

```bash
# Edite o array de projetos
code app/projetos/page.tsx
```

### 4. Mudar Cores

```bash
# Edite as variáveis CSS
code app/globals.css

# Procure por :root e .dark
# Personalize as cores primary, secondary, accent
```

---

## 🔧 Configurações Opcionais

### Analytics (Recomendado)

**Opção 1: Plausible (sem cookies, privacy-friendly)**

1. Crie conta em [plausible.io](https://plausible.io)
2. Adicione seu domínio
3. Crie arquivo `.env.local`:

```bash
echo "NEXT_PUBLIC_PLAUSIBLE_DOMAIN=pedrocanedo.dev" > .env.local
```

**Opção 2: Google Analytics**

1. Crie propriedade GA4
2. Adicione em `.env.local`:

```bash
echo "NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX" > .env.local
```

3. Descomente o código GA em `components/analytics.tsx`

### Formulário de Contato (Recomendado)

Para receber emails via formulário:

1. Crie conta gratuita em [resend.com](https://resend.com)
2. Obtenha sua API key
3. Adicione em `.env.local`:

```bash
echo "RESEND_API_KEY=re_xxxxxxxxxxxxx" >> .env.local
```

4. Descomente o código em `app/api/contact/route.ts` (linhas 18-33)

---

## 🚀 Deploy na Vercel (15 min)

### Método Recomendado: Via GitHub

**1. Criar Repositório GitHub:**

```bash
git init
git add .
git commit -m "🎉 Initial commit - Site Profissional Pedro Canedo"
git branch -M main

# Crie um repositório no GitHub e depois:
git remote add origin https://github.com/pedro-canedo/site-pessoal.git
git push -u origin main
```

**2. Deploy na Vercel:**

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. Configure variáveis de ambiente (se tiver)
5. Clique em "Deploy"

**3. Configurar Domínio (Opcional):**

- Vá em Settings → Domains
- Adicione seu domínio personalizado
- Configure DNS conforme instruções

---

## 📚 Documentação Disponível

Criamos vários guias para te ajudar:

| Arquivo                | Descrição                         |
| ---------------------- | --------------------------------- |
| **README.md**          | Documentação completa do projeto  |
| **QUICK_START.md**     | Guia de início rápido             |
| **DEPLOY.md**          | Guia detalhado de deploy          |
| **PROJECT_SUMMARY.md** | Resumo completo do que foi criado |
| **COMMANDS.md**        | Todos os comandos úteis           |
| **CONTRIBUTING.md**    | Como contribuir (se open source)  |
| **CHANGELOG.md**       | Histórico de mudanças             |

---

## 🎯 Próximas Ações Sugeridas

### Curto Prazo (Esta Semana)

- [ ] Executar localmente e testar todas as páginas
- [ ] Personalizar conteúdo em `myoverview.md`
- [ ] Adicionar seus projetos reais
- [ ] Fazer deploy na Vercel
- [ ] Configurar analytics (Plausible ou GA)

### Médio Prazo (Este Mês)

- [ ] Configurar domínio personalizado
- [ ] Integrar formulário de contato (Resend)
- [ ] Adicionar certificados/conquistas
- [ ] Criar página de blog (opcional)
- [ ] Otimizar imagens

### Longo Prazo (Próximos Meses)

- [ ] Adicionar testes E2E completos
- [ ] Implementar newsletter (Buttondown/ConvertKit)
- [ ] Criar páginas de cases detalhados
- [ ] Adicionar seção de palestras/talks
- [ ] Internacionalização (PT/EN)

---

## 🛠️ Comandos Essenciais

```bash
# Desenvolvimento
npm run dev              # Iniciar servidor local

# Build & Produção
npm run build           # Criar build de produção
npm run start           # Rodar build localmente

# Qualidade
npm run lint            # Verificar código
npm run type-check      # Verificar tipos
npm run format          # Formatar código

# Testes
npm run test            # Testes unitários
npm run e2e             # Testes E2E

# Deploy
vercel --prod          # Deploy produção (Vercel CLI)
```

---

## ❓ FAQ Rápido

**P: Como adiciono mais páginas?**
R: Crie uma pasta em `app/` com um `page.tsx`. Ex: `app/blog/page.tsx`

**P: Como mudo as cores do tema?**
R: Edite as variáveis CSS em `app/globals.css` nas seções `:root` e `.dark`

**P: Como adiciono componentes shadcn/ui?**
R: Use `npx shadcn-ui@latest add [component-name]`

**P: O formulário não envia emails. O que fazer?**
R: Configure Resend seguindo as instruções na seção "Formulário de Contato"

**P: Como atualizo minha foto?**
R: Substitua `public/profile.png` pela sua nova foto

**P: Posso usar outro serviço de email?**
R: Sim! Edite `app/api/contact/route.ts` e integre com SendGrid, Mailgun, etc.

---

## 🆘 Precisa de Ajuda?

1. **Documentação:** Leia os arquivos .md nesta pasta
2. **Erros de Build:** Execute `npm run lint` e `npm run type-check`
3. **Issues:** Verifique se é algo relacionado às dependências
4. **Comunidade:** Next.js Discord, Stack Overflow
5. **Contato Direto:** devpedrocanedo@gmail.com

---

## ✅ Verificação Final

Antes do deploy, confirme:

- [ ] `npm install` executado com sucesso
- [ ] `npm run dev` funciona localmente
- [ ] Todas as páginas estão acessíveis
- [ ] Conteúdo personalizado (bio, projetos, etc.)
- [ ] Foto de perfil atualizada
- [ ] `npm run build` completa sem erros
- [ ] Dark mode funciona corretamente
- [ ] Links externos funcionam
- [ ] Formulário de contato testado (se configurado)

---

## 🎉 Parabéns!

Seu site profissional está pronto! Agora é só:

1. ✅ Testar localmente
2. ✅ Personalizar conteúdo
3. ✅ Fazer deploy
4. ✅ Compartilhar com o mundo!

**Seu site ficará em:**

- Vercel: `https://seu-site.vercel.app`
- Domínio personalizado: `https://pedrocanedo.dev` (quando configurar)

---

## 🚀 Comece Agora!

```bash
# 1. Instale
npm install

# 2. Execute
npm run dev

# 3. Acesse
# http://localhost:3000
```

**Boa sorte com seu novo site! 🎊**

---

_Desenvolvido com ❤️ usando Next.js 14, TypeScript e Tailwind CSS_
