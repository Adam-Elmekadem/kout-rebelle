# Rebelle — Shift / 01

An original cold-weather streetwear brand chapter for [Kout Project](../). The site includes a cinematic campaign landing page, an eight-piece collection with category and price filters, dedicated product pages, a persistent bag, a guided concept checkout, and About and Contact pages.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run check` and `npm run build` before publishing.

## Brand files

- [Brand system](./BRAND_SYSTEM.md)
- [Image prompts](./IMAGE_PROMPTS.md)
- `public/images/`: original campaign and product concept images, optimized as WebP

## Publishing

GitHub: https://github.com/Adam-Elmekadem/kout-rebelle  
Netlify: https://kout-rebelle.netlify.app/

## Demo interactions

- The bag persists in this browser through local storage. Sizes and quantities can be changed before checkout.
- The checkout has shipping, payment preview, review, and completion pages. Shipping fields stay in memory for the current tab. Card and PayPal are visual choices only: there are no payment fields, charge, order, or payment service connection.
- Try `SHIFT10` or `FROST15` in the checkout coupon field. Discounts and shipping are illustrative.
- The Contact form is a local preview. It does not send a message; the page also links to the project creator's GitHub profile.

The site is a portfolio concept. Products and prices are illustrative. It is not affiliated with any existing fashion, automotive, or beverage company.
