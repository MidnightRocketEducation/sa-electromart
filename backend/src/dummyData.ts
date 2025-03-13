import { Laptop } from "./models/Laptop";
import { Phone } from "./models/Phone";
import { PlayStation } from "./models/PlayStation";
import { SSD } from "./models/SSD";

export const recommendedProducts: (Laptop | Phone | SSD | PlayStation)[] = [
  // Laptops
  new Laptop("Laptop Pro 16'", "https://i5.walmartimages.com/seo/HP-Stream-14-Laptop-Intel-Celeron-N4000-4GB-SDRAM-32GB-eMMC-Office-365-1-yr-Royal-Blue_4f941fe6-0cf3-42af-a06c-7532138492fc_2.cb8e85270e731cb1ef85d431e49f0bf2.jpeg", 2399),
  new Laptop("Laptop Air 13'", "https://s3.eu-north-1.amazonaws.com/foeniks-component-storage-staging/product/b9a19d36-552c-4166-83bc-6633ba7dbe54/65ac89c12f1c3762629555ed/825x550.jpg", 999),
  new Laptop("Gaming Laptop GX5", "https://oechsle.vteximg.com.br/arquivos/ids/15396300-1000-1000/image-98b7428fffe440d4b73929922ad34501.jpg?v=638283539680870000", 1499),
  new Laptop("Laptop UltraSlim 14'", "https://www.elgiganten.dk/image/dv_web_D1800010021478325/618778/hp-laptop-15s-r3-38128-156-barbar-computer--pdp_zoom-3000--pdp_main-540.jpg", 1099),
  new Laptop("Laptop Workstation W10", "https://pcudlejning.dk/wp-content/uploads/2022/09/Lenovo-Legion-Y540.jpeg", 2599),

  // Phones
  new Phone("Smartphone X12", "https://www.elgiganten.dk/image/dv_web_D180001002838576/361914/iphone-13-5g-smartphone-128gb-starlight--pdp_zoom-3000--pdp_main-540.jpg", 999),
  new Phone("Smartphone Galaxy G20", "https://cdn.lomax.dk/images/t_item_max/f_auto/v1630998173/produkter/70122740_1/samsung-galaxy-z-fold3-5g-256gb-smartphone-sort-1.jpg", 1099),
  new Phone("Phone Ultra U11", "https://www.avxperten.dk/billeder/doro-8110-4g-smartphone-6-1tm-450x450.jpg", 1199),
  new Phone("Phone Compact C4", "https://www.tradeinn.com/f/13790/137905228/nokia-2.4-2gb-32gb-6.5-smartphone.jpg", 699),
  new Phone("Smartphone Note N10", "https://cf-images.dustin.eu/cdn-cgi/image/format=auto,quality=75,width=828,,fit=contain/image/d200001272319/apple-iphone-15-128gb-pink.jpg", 899),

  // PlayStations
  new PlayStation("PlayStation 5", "https://salgsbutikken.dk/images/Sony-PlayStation-5-(PS5)-Digital-Edition.jpg", 499),
  new PlayStation("PlayStation 5 Digital", "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AJ73DC/b9bc14b104ec4c51bb0ff34e206df1c0.jpg/f/playstation-4-slim-konsol-500gb-nordic.jpg", 399),
  new PlayStation("PlayStation 4 Pro", "https://files.refurbed.com/ii/playstation-3-slim-1679925309.jpg", 399),
  new PlayStation("PlayStation 4 Slim", "https://toysnloot.dk/wp-content/uploads/2021/01/playstation3-1st-gen.jpg", 299),
  new PlayStation("PlayStation Classic", "https://cdn.cdon.com/media-dynamic/images/product/cloud/store/Consoles/000/108/784/401/108784401-206715428-11453-org.jpg?cache=133090911364066900&impolicy=product", 59),

  // SSDs
  new SSD("SSD Supreme 1TB", "https://www.avxperten.dk/billeder/wd-green-ssd-hardisk-1tb-sata-iii-2-5tm-big.jpg", 149),
  new SSD("SSD UltraSpeed 500GB", "https://cf-images.dustin.eu/cdn-cgi/image/format=auto,quality=75,width=828,,fit=contain/image/d200001001863272/wd-red-sa500-nas-ssd-ssd-500gb-25-sata-600.jpg", 99),
  new SSD("SSD Budget 2TB", "https://www.proshop.dk/Images/915x900/2808375_d79d48229f43.png", 199),
  new SSD("SSD Portable P1 1TB", "https://www.proshop.dk/Images/915x900/3076198_60558dd3e988.jpg", 109),
  new SSD("SSD Extreme X2 2TB", "https://geekd.dk/cdn/shop/products/be503047-b696-44b3-9e14-58b373ec3abd.jpg?v=1642682050", 299),
];
