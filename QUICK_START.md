# 🚀 Guia de Início Rápido

## Instalação e Execução

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Variáveis de Ambiente (Opcional)

Copie o conteúdo de `env.example.txt` para um novo arquivo `.env.local`:

```bash
# Crie o arquivo
touch .env.local

# Copie o conteúdo de env.example.txt para .env.local
# Edite conforme necessário
```

### 3. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### 4. Build para Produção

```bash
npm run build
npm run start
```

## 📝 Customização Rápida

### Atualizar Informações Pessoais

Edite o arquivo `myoverview.md` ou atualize os dados em `lib/content.ts`.

### Mudar Foto de Perfil

Substitua o arquivo `public/profile.png` pela sua foto.

### Adicionar Projetos

Edite o array `projects` em `app/projetos/page.tsx`.

### Cores do Tema

Edite as variáveis CSS em `app/globals.css`:

```css
:root {
  --primary: 238 79% 60%; /* Cor primária */
  --secondary: 173 80% 40%; /* Cor secundária */
  --accent: 38 92% 50%; /* Cor de destaque */
}
```

## 🔧 Integrações Opcionais

### Analytics (Plausible)

1. Crie conta em [plausible.io](https://plausible.io)
2. Adicione em `.env.local`:

```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=seudominio.com
```

### Formulário de Contato (Resend)

1. Crie conta em [resend.com](https://resend.com)
2. Adicione em `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

3. Descomente código em `app/api/contact/route.ts`

## 📦 Deploy na Vercel

1. Faça push para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Configure variáveis de ambiente
5. Deploy!

## ✅ Checklist Pré-Deploy

- [ ] Atualizou `myoverview.md` com suas informações
- [ ] Substituiu `public/profile.png` pela sua foto
- [ ] Atualizou projetos em `app/projetos/page.tsx`
- [ ] Configurou variáveis de ambiente (se aplicável)
- [ ] Testou localmente com `npm run build && npm run start`
- [ ] Verificou todas as páginas funcionando
- [ ] Testou formulário de contato (se configurado)

## 🆘 Problemas Comuns

### Erro de Build

```bash
# Limpe cache e reinstale
rm -rf .next node_modules
npm install
npm run build
```

### Erro de Tipos TypeScript

```bash
npm run type-check
```

### Erro de Lint

```bash
npm run lint
```

## 📚 Documentação Completa

Veja [README.md](README.md) para documentação completa.
