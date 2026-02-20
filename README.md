# Brasa Urbana Burgers — Template Gourmet Dark (HTML/CSS/JS)

Template estático com **2 páginas** (`index.html` e `cardapio.html`) em HTML/CSS/JS puro, com carrinho persistente e finalização por WhatsApp.

## Estrutura de arquivos
- `index.html` — Home
- `cardapio.html` — Cardápio + Carrinho
- `styles.css` — Tema visual e responsividade
- `script.js` — Configuração, produtos e regras do carrinho

---

## Personalização rápida

### 1) Trocar nome e frase da marca
No arquivo `script.js`, edite:

```js
SITE_CONFIG.brandName
SITE_CONFIG.tagline
```

### 2) Trocar WhatsApp, endereço e Maps
No mesmo objeto `SITE_CONFIG`, edite:

```js
SITE_CONFIG.whatsappNumber
SITE_CONFIG.addressText
SITE_CONFIG.mapsUrl
```

### 3) Trocar logo
- Coloque sua logo em: `images/logo.png`
- Se não existir, o site mostra fallback elegante com monograma automático.

### 4) Trocar imagem hero
- Coloque a imagem principal em: `images/hero.jpg`
- Se não existir, o hero usa fallback premium com gradiente.

### 5) Adicionar imagens de produtos
Cada card tenta carregar imagem automaticamente por `id`:

```text
images/products/<id>.jpg
```

Exemplo:
- `images/products/x-tudo.jpg`
- `images/products/refri-lata.jpg`

Se a imagem não existir, aparece placeholder bonito.

### 6) Editar produtos e preços
No `script.js`, altere o array `PRODUCTS`.

---

## Deploy rápido na Vercel
1. Suba os arquivos para um repositório GitHub.
2. Acesse https://vercel.com.
3. Clique em **Add New Project**.
4. Selecione o repositório.
5. Deploy com configurações padrão (site estático).
6. Pronto: a Vercel gera a URL automaticamente.
