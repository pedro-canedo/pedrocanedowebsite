# Contribuindo

Obrigado por considerar contribuir com este projeto! Aqui estão algumas diretrizes para ajudar.

## Como Contribuir

### Reportar Bugs

Se encontrar um bug, por favor abra uma issue com:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Ambiente (browser, OS, versão do Node)

### Sugerir Melhorias

Para sugestões de features ou melhorias:

1. Verifique se já não existe uma issue similar
2. Abra uma nova issue descrevendo:
   - O problema que a feature resolve
   - Como você imagina a solução
   - Exemplos ou mockups (se aplicável)

### Pull Requests

1. **Fork o repositório**

2. **Clone seu fork:**

```bash
git clone https://github.com/seu-usuario/site-pessoal.git
cd site-pessoal
```

3. **Crie uma branch:**

```bash
git checkout -b feature/sua-feature
# ou
git checkout -b fix/seu-bug-fix
```

4. **Instale dependências:**

```bash
npm install
```

5. **Faça suas alterações**

6. **Teste localmente:**

```bash
npm run dev           # Teste funcionalidade
npm run build         # Teste build
npm run lint          # Verifique linting
npm run type-check    # Verifique tipos
```

7. **Commit suas mudanças:**

```bash
git add .
git commit -m "feat: adiciona nova feature"
# ou
git commit -m "fix: corrige bug X"
```

Use commits semânticos:

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` mudanças na documentação
- `style:` formatação, missing semi colons, etc
- `refactor:` refatoração de código
- `test:` adição de testes
- `chore:` manutenção

8. **Push para seu fork:**

```bash
git push origin feature/sua-feature
```

9. **Abra um Pull Request**

## Diretrizes de Código

### TypeScript

- Use TypeScript strict mode
- Evite `any`, prefira tipos explícitos
- Documente funções complexas

### React/Next.js

- Use Server Components quando possível
- Client Components apenas quando necessário (`'use client'`)
- Componentes funcionais com hooks
- Props bem tipadas

### Estilo de Código

- Use Prettier para formatação (configurado)
- Siga as regras do ESLint
- 100 caracteres por linha
- 2 espaços de indentação
- Single quotes para strings

### Estrutura de Arquivos

```
componente/
├── index.tsx          # Componente principal
├── styles.module.css  # Estilos (se necessário)
└── types.ts          # Types (se complexos)
```

### Commits

```bash
# Bom
git commit -m "feat: add dark mode toggle to navbar"
git commit -m "fix: resolve mobile menu overflow issue"

# Ruim
git commit -m "updates"
git commit -m "fix bug"
```

## Testes

### Unit Tests

```bash
# Executar testes
npm run test

# Watch mode
npm run test:watch
```

### E2E Tests

```bash
# Executar E2E
npm run e2e

# Com UI
npm run e2e:ui
```

## Documentação

- Atualize README.md se adicionar features
- Documente funções complexas com JSDoc
- Mantenha CHANGELOG.md atualizado

## Code Review

Todos os PRs passarão por review. Esperamos:

- Código limpo e bem organizado
- Testes (se aplicável)
- Documentação atualizada
- CI passando (lint, type-check, build)

## Código de Conduta

- Seja respeitoso e construtivo
- Aceite feedback com mente aberta
- Foque no código, não nas pessoas
- Ajude outros contribuidores

## Dúvidas?

Abra uma issue com a tag `question` ou entre em contato:

- Email: devpedrocanedo@gmail.com
- LinkedIn: [Pedro Canedo](https://linkedin.com/in/pedrobalhe)

---

Obrigado por contribuir! 🚀
