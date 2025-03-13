import express, { Request, Response } from 'express';
import { recommendedProducts } from './dummyData';

const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get("/get-product-recommendations", (_: Request, res: Response) => {
  const randomNumber = Math.random();

  if (randomNumber > 0.5) {
    const shuffledProducts = recommendedProducts
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const randomProducts = shuffledProducts.slice(0, 5);
    return res.json(randomProducts);
  }

  return res.status(500).send('Internal Server Error');
});

app.get("/get-products-by-category", (req: Request, res: Response) => {
  const products = recommendedProducts.filter((product) => {
    if (product.productType == req.query.productType) return product;
  })

  return res.json(products);
});

app.get("/unfinished-feature", (_: Request, res: Response) => {
  // Oh no, this feature is not ready for production!
  return res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
