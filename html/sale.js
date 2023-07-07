const productListElement = document.querySelector('.list-produk');
fetch('https://fakestoreapi.com/products')
    .then(function (response) {
        return response.json();
    }).then(function (products) {
        for (let product of products) {
            var listProductElement = document.createElement('li');
            listProductElement.className = 'container-product';

            const figur = document.createElement('figure');
            figur.classList.add('figure-img')
            const image = document.createElement('img');
            image.src = product.image;
            image.classList.add('image-product')
            listProductElement.appendChild(figur);
            figur.appendChild(image);

            const titleElement = document.createElement('div');
            titleElement.classList.add('title-product')
            const linkTitle = document.createElement('h4');
            linkTitle.textContent = product.title;
            titleElement.appendChild(linkTitle);
            listProductElement.appendChild(titleElement);

            const priceElement = document.createElement('div');
            priceElement.classList.add('price-product')
            const priceProduk = document.createElement('p')
            priceProduk.textContent = 'Price : $' + product.price
            const stock = document.createElement('p')
            stock.textContent = product.rating.count + ' stock'
            const iconElement = document.createElement('span');
            iconElement.classList.add('material-symbols-outlined')
            iconElement.id = 'icon-cart'
            iconElement.textContent = 'shopping_cart'
            priceElement.appendChild(iconElement)
            priceElement.appendChild(priceProduk);
            priceElement.appendChild(stock)
            listProductElement.appendChild(priceElement);

            productListElement.appendChild(listProductElement);


        }
    });


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (scrollY >= 150) {
        navbar.classList.add('bg');
    } else {
        navbar.classList.remove('bg');
    }
})