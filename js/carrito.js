const rowProduct = document.querySelector('.row-product');

let allProducts = [];
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#products-count');

const data = [
  {
    id: 1,
    name: 'PC Gamer Haku RGB AMD A10 7800',
    price: 1499,
    image: 'imagenes/Productos/pcgamer1.jpg'
  },
  {
    id: 2,
    name: 'PC Gamer Haku RGB Plus Core i5 6th',
    price: 1899,
    image: 'imagenes/Productos/pcgamer2.jpg'
  },
  {
    id: 3,
    name: 'PC Gamer Haku Red Plus Core i5 6th',
    price: 2099,
    image: 'imagenes/Productos/pcgamer3.jpg'
  },
  {
    id: 4,
    name: 'PC Gamer Ryu RGB Core i5',
    price: 1899,
    image: 'imagenes/Productos/pcgamer4.jpg'
  },
  {
    id: 5,
    name: 'PC Gamer Draco RGB Core i7 6th',
    price: 2199,
    image: 'imagenes/Productos/pcgamer5.jpg'
  },
  {
    id: 6,
    name: 'PC Gamer Draco Red Core I7 6th',
    price: 2499,
    image: 'imagenes/Productos/pcgamer6.jpg'
  },
  {
    id: 7,
    name: 'PC Gamer Draco Blue Core i5 11400F 11th',
    price: 2799,
    image: 'imagenes/Productos/pcgamer7.jpg'
  },
  {
    id: 8,
    name: 'PC Gamer K-PLUS Orange Core i9 11900F',
    price: 4999,
    image: 'imagenes/Productos/pcgamer8.jpg'
  },
  {
    id: 9,
    name: 'PC Gamer Draco RGB Ryzen 5 3600',
    price: 2999,
    image: 'imagenes/Productos/pcgamer9.jpg'
  },
  {
    id: 10,
    name: 'PC Gamer Storm RGB Plus Ryzen 5 5600X',
    price: 3299,
    image: 'imagenes/Productos/pcgamer10.jpg'
  },
  {
    id: 11,
    name: 'PC Gamer Ultra Falkor RGB Ryzen AMD Ryzen 97900',
    price: 7999,
    image: 'imagenes/Productos/pcgamer11.jpg'
  },
  {
    id: 12,
    name: 'PC Gamer Max Falkor RGB Ryzen 9 7900',
    price: 9299,
    image: 'imagenes/Productos/pcgamer12.jpg'
  },
  {
    id: 13,
    name: "Laptops Asus Creator Gaming Core i9 13th 15.6\"",
    price: 7099,
    image: "imagenes/Productos/laptop1.jpg"
  },
  {
    id: 14,
    name: "Laptops Asus TUF FX507Zi GAMING 15.6\" Core i7 12th",
    price: 7299,
    image: "imagenes/Productos/laptop2.jpg"
  },
  {
    id: 15,
    name: "Laptops HP Victus FA0033DX 15.6\" Core i5 12th",
    price: 3999,
    image: "imagenes/Productos/laptop3.jpg"
  },
  {
    id: 16,
    name: "Laptops Lenovo LOQ 15IAX9I 15.6'' Core i5 12th",
    price: 4099,
    image: "imagenes/Productos/laptop4.jpg"
  },
  {
    id: 17,
    name: "Laptop Lenovo V15 IRU 15.6'' Core i5 13420",
    price: 2599,
    image: "imagenes/Productos/laptop5.jpg"
  },
  {
    id: 18,
    name: "Laptops HP 255 G10 15.6'' Ryzen 3 7330U",
    price: 2199,
    image: "imagenes/Productos/laptop6.jpg"
  },
  {
    id: 19,
    name: "Laptops Lenovo V15 G3 AIP 15.6'' Core i3 1215U",
    price: 1799,
    image: "imagenes/Productos/laptop7.jpg"
  },
  {
    id: 20,
    name: "Laptops Lenovo V15 G4 15.6\" AMD 7120U",
    price: 1199,
    image: "imagenes/Productos/laptop8.jpg"
  },
  {
    id: 21,
    name: "Laptops HP Envy 16\" Core i7 13th",
    price: 6699,
    image: "imagenes/Productos/laptop9.jpg"
  },
  {
    id: 22,
    name: "Laptops Lenovo LOQ 15IAX9 15.6\" Core i7 13th",
    price: 5699,
    image: "imagenes/Productos/laptop10.jpg"
  },
  {
    id: 23,
    name: "Laptops Acer Nitro 5 AN515-58 Core i5 12th 15.6\"",
    price: 3849,
    image: "imagenes/Productos/laptop11.jpg"
  },
  {
    id: 24,
    name: "Laptops ASUS TUF gaming FA506NF-HN004 15.6'' Ryzen 5",
    price: 3499,
    image: "imagenes/Productos/laptop12.jpg"
  },
  {
    id: 25,
    name: 'Celular Apple Iphone 13 128gb',
    price: 4388,
    image: 'imagenes/Productos/celular1.avif'
  },
  {
    id: 26,
    name: 'Celular Samsung Galaxy A15 8GB RAM 256GB',
    price: 938,
    image: 'imagenes/Productos/celular2.avif'
  },
  {
    id: 27,
    name: 'Celular Xiaomi Redmi 13c 8+256gb',
    price: 767,
    image: 'imagenes/Productos/celular3.avif'
  },
  {
    id: 28,
    name: 'Galaxy A55 8gb 256gb',
    price: 1699,
    image: 'imagenes/Productos/celular4.avif'
  },
  {
    id: 29,
    name: 'Iphone 15 128Gb',
    price: 5488,
    image: 'imagenes/Productos/celular5.avif'
  },
  {
    id: 30,
    name: 'Galaxy A06 4g 64gb Black',
    price: 429,
    image: 'imagenes/Productos/celular6.avif'
  },
  {
    id: 31,
    name: 'Celular Xiaomi 14 Ultra',
    price: 4199,
    image: 'imagenes/Productos/celular7.avif'
  },
  {
    id: 32,
    name: 'Celular Xiaomi POCO C65 8GB RAM 256GB.',
    price: 797,
    image: 'imagenes/Productos/celular8.avif'
  },
  {
    id: 33,
    name: 'Smartphone Moto G24 4+256 Gris',
    price: 499,
    image: 'imagenes/Productos/celular9.avif'
  },
  {
    id: 34,
    name: 'Xiaomi Redmi Note 13 PRO 4G 8GB 256GB Verde - 23117RA68G',
    price: 809,
    image: 'imagenes/Productos/celular10.avif'
  },
  {
    id: 35,
    name: 'REDMI NOTE 13 PRO 8GB RAM 256GB ROM MIDNIGHT BLACK + AUDIFONO M25',
    price: 949,
    image: 'imagenes/Productos/celular11.avif'
  },
  {
    id: 36,
    name: 'Xiaomi Redmi Note 13 4G 8GB RAM 256GB Verde - 23129RA5FL',
    price: 639,
    image: 'imagenes/Productos/celular12.avif'
  },
  {
    id: 37,
    name: "Televisor 65 Crystal Uhd Du8000 4k Tizen Os Smart Tv (2024)",
    price: 1899,
    image: "imagenes/Productos/TV1.avif"
  },
  {
    id: 38,
    name: "Televisor Hisense Qled 50 50q6n 4k Google Tv",
    price: 1099,
    image: "imagenes/Productos/TV2.avif"
  },
  {
    id: 39,
    name: "Televisor Jvc 70\" Isdbt 4k Uhd Google Tv Os",
    price: 1799,
    image: "imagenes/Productos/TV3.avif"
  },
  {
    id: 40,
    name: "Televisor 55\" Lg Nanocell 4k Thinq Ai 55nano80tsa (2024)",
    price: 1749,
    image: "imagenes/Productos/TV4.avif"
  },
  {
    id: 41,
    name: "Televisor JVC 32\" ISDBT HD Android 11 OS",
    price: 479,
    image: "imagenes/Productos/TV5.avif"
  },
  {
    id: 42,
    name: "Televisor 55 Qled 4k Q60d Tizen Os Smart Tv (2024)",
    price: 1999,
    image: "imagenes/Productos/TV6.avif"
  },
  {
    id: 43,
    name: "Televisor Hyundai LED 50\" HYLED5020G4 Google TV",
    price: 1168,
    image: "imagenes/Productos/TV7.avif"
  },
  {
    id: 44,
    name: "Televisor JVC LED 43'' 4K UHD Android TV LT-43KB628",
    price: 699,
    image: "imagenes/Productos/TV8.avif"
  },
  {
    id: 45,
    name: "Televisor JVC 50\" UHD 4K Google TV LT-50KB538",
    price: 1099,
    image: "imagenes/Productos/TV9.avif"
  },
  {
    id: 46,
    name: "Televisor JVC Led 58\" UHD Google Tv",
    price: 1199,
    image: "imagenes/Productos/TV10.avif"
  },
  {
    id: 47,
    name: "Televisor 55\" LG QNED 4K ThinQ AI 55QNED80TSA (2024)",
    price: 2399,
    image: "imagenes/Productos/TV11.avif"
  },
  {
    id: 48,
    name: "Televisor Samsung The Frame 50\" Qled 4k Qn50ls03bagxp",
    price: 2499,
    image: "imagenes/Productos/TV12.avif"
  },
  {
    "id": 49,
    "name": "AURICULARES LOGITECH G335",
    "price": 259,
    "image": "imagenes/Productos/accesorio1.jpg"
  },
  {
    "id": 59,
    "name": "Auricular Logitech G432",
    "price": 269,
    "image": "imagenes/Productos/accesorio2.jpg"
  },
  {
    "id": 51,
    "name": "Escritorio GAMER 1STPLAYER Moto-C 1260",
    "price": 799,
    "image": "imagenes/Productos/accesorio3.jpg"
  },
  {
    "id": 52,
    "name": "Escritorio GAMER GAMEMAX D140",
    "price": 499,
    "image": "imagenes/Productos/accesorio4.jpg"
  },
  {
    "id": 53,
    "name": "Mousepad Gamer RGB Halion HA-MP15",
    "price": 70,
    "image": "imagenes/Productos/accesorio5.jpg"
  },
  {
    "id": 54,
    "name": "KIT THUNDERWOL 4 EN 1",
    "price": 159,
    "image": "imagenes/Productos/accesorio6.jpg"
  },
  {
    "id": 55,
    "name": "Mouse Havit Gamer Gamenote MS1033",
    "price": 59,
    "image": "imagenes/Productos/accesorio7.jpg"
  },
  {
    "id": 56,
    "name": "Mouse Gamer Teros TE-1210G RGB Gaming",
    "price": 64,
    "image": "imagenes/Productos/accesorio8.jpg"
  },
  {
    "id": 57,
    "name": "SILLA GAMER HALION HA-S44",
    "price": 599,
    "image": "imagenes/Productos/accesorio9.jpg"
  },
  {
    "id": 58,
    "name": "SILLA GAMER HALION HA S47",
    "price": 599,
    "image": "imagenes/Productos/accesorio10.jpg"
  },
  {
    "id": 59,
    "name": "Tarjeta de video RTX 3070 Ti NVIDIA 8 GB GDDR6X",
    "price": 2699,
    "image": "imagenes/Productos/accesorio11.jpg"
  },
  {
    "id": 60,
    "name": "Tarjeta de video RTX 4080 super GIGABYTE 16GB GDDR6X",
    "price": 5099,
    "image": "imagenes/Productos/accesorio12.jpg"
  }
];

const saveCartToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(allProducts));
};

document.addEventListener('click', e => {
  if (e.target.classList.contains('btn-add-cart')) {
    const productId = e.target.getAttribute('data-id');
    const product = data.find(p => p.id == productId);
    const infoProduct = {
      id: product.id,
      quantity: 1,
      title: product.name,
      price: product.price,
      image: product.image,
    };

    const exists = allProducts.some(product => product.id == infoProduct.id);
    if (exists) {
      allProducts = allProducts.map(product => {
        if (product.id == infoProduct.id) {
          product.quantity++;
        }
        return product;
      });
    } else {
      allProducts = [...allProducts, infoProduct];
    }

    showHTML();
    saveCartToLocalStorage();
  }
});

rowProduct.addEventListener('click', e => {
  if (e.target.classList.contains('icon-close')) {
    const productId = e.target.parentElement.getAttribute('data-id');
    allProducts = allProducts.filter(product => product.id != productId);
    showHTML();
    saveCartToLocalStorage();
  }
});

const showHTML = () => {
  rowProduct.innerHTML = '';
  if (!allProducts.length) {
    rowProduct.innerHTML = `<p class="cart-empty"> El carrito está vacio</p>`;
  }

  let total = 0;
  let totalOfProducts = 0;

  allProducts.forEach(product => {
    const containerProduct = document.createElement('div');
    containerProduct.classList.add('cart-product');
    containerProduct.setAttribute('data-id', product.id);

    containerProduct.innerHTML = `
                <div class="info-product">
                    <span class="cant-product">${product.quantity}</span>
                    <span class="title-product">${product.title}</span>
                    <span class="price-product">S/ ${product.price}</span>
                </div>
                <button class="icon-close" data-id="${product.id}" title="Eliminar">x</button>
            `;

    rowProduct.append(containerProduct);

    total += product.price * product.quantity;
    totalOfProducts += product.quantity;
  });

  valorTotal.innerHTML = `S/ ${total.toFixed(2)}`;
  countProducts.innerText = totalOfProducts;
};

document.addEventListener('DOMContentLoaded', function () {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    allProducts = JSON.parse(savedCart);
    showHTML();
  }

  // Para resaltar el link de la página actual
  const currentPath = window.location.pathname.split('/').pop();
  const prodLinks = document.querySelectorAll('.links-products li');
  prodLinks.forEach(link => {
    const linkPath = link.querySelector('a').getAttribute('href');
    if (linkPath == currentPath) {
      link.classList.add('active');
    }
  });
});