const akun = document.querySelector(".get-name");
akun.textContent = sessionStorage.getItem('name');

const themeButton = document.querySelector(".theme-button")

themeButton.onclick = () => {
    document.body.classList.toggle('dark-mode')
    themeButton.textContent = themeButton.textContent === "light_mode" ? "dark_mode" : "light_mode"
}

const personButton = document.querySelector(".person-account")

personButton.onclick = () => {
    document.querySelector(".custom-model-main").classList.add("model-open")
}

const closeButton = document.querySelector(".close-btn, .bg-overlay")

closeButton.onclick = () => {
    document.querySelector(".custom-model-main").classList.remove("model-open")
}


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6ec47bd4e8mshdd2ae3b0c720355p1b3b2ajsnede45e78cdb4',
        'X-RapidAPI-Host': 'target-com-store-product-reviews-locations-data.p.rapidapi.com'
    }
};

const filterProduct = [2,16,14]

filterProduct.map((val)=>
fetch('https://fakestoreapi.com/products', options)
.then(response => response.json())
.then((res) => {

    const imageHtml = document.querySelector(".list-trend-product")
	const listProduct = document.createElement('li')
    listProduct.classList.add('container-product')

    const figurImage = document.createElement('figure')
    figurImage.classList.add('figure-img')
    const image = document.createElement('img')
    image.src = res[val].image
    image.classList.add('image-product')
    const freeOngkir = document.createElement('img')
    freeOngkir.src='../image/free-shipping.png'
    freeOngkir.classList.add('free-ongkir')
    const cashBack = document.createElement('img')
    cashBack.src='../image/cashback.png'
    cashBack.classList.add('cash-back')
    figurImage.appendChild(cashBack)
    figurImage.appendChild(freeOngkir)
    figurImage.appendChild(image)
    listProduct.appendChild(figurImage)
   
    const titleImage = document.createElement('div')
    titleImage.classList.add('title-product')
    const deskTitle = document.createElement('h4')
    deskTitle.textContent = res[val].title
    titleImage.appendChild(deskTitle)
    listProduct.appendChild(titleImage)

    const ratingProduct = document.createElement('div')
    ratingProduct.classList.add('rate-product')
    const rateProduct1 =document.createElement('span')
    rateProduct1.classList.add('material-symbols-outlined')
    rateProduct1.textContent='star'
    ratingProduct.appendChild(rateProduct1)
    const rateProduct2 =document.createElement('span')
    rateProduct2.classList.add('material-symbols-outlined')
    rateProduct2.textContent='star'
    ratingProduct.appendChild(rateProduct2)
    const rateProduct3 =document.createElement('span')
    rateProduct3.classList.add('material-symbols-outlined')
    rateProduct3.textContent='star'
    ratingProduct.appendChild(rateProduct3)
    const rateProduct4 =document.createElement('span')
    rateProduct4.classList.add('material-symbols-outlined')
    rateProduct4.textContent='star'
    ratingProduct.appendChild(rateProduct4)
    const rateProduct5 =document.createElement('span')
    rateProduct5.classList.add('material-symbols-outlined')
    rateProduct5.textContent='star'
    ratingProduct.appendChild(rateProduct5)
    listProduct.appendChild(ratingProduct)

    const bottomDeskProduct = document.createElement('div')
    bottomDeskProduct.classList.add('price-product')
    const priceProduct = document.createElement('p')
    priceProduct.textContent= `Price : $ ${res[val].price}`
    const stockProduct = document.createElement('p')
    stockProduct.textContent=`${res[val].rating.count} stock`
    const iconCart = document.createElement('span')
    iconCart.classList.add('material-symbols-outlined')
    iconCart.id='icon-cart'
    iconCart.textContent='shopping_cart'
    bottomDeskProduct.appendChild(stockProduct)
    bottomDeskProduct.appendChild(priceProduct)
    bottomDeskProduct.appendChild(iconCart)
    listProduct.appendChild(bottomDeskProduct)

    const flashSale = document.createElement('img')
    flashSale.src='../image/flash-sale.png'
    flashSale.classList.add('flash-sale')
    listProduct.appendChild(flashSale)

    imageHtml.appendChild(listProduct)
})
.catch(err => console.error(err))
)

document.querySelector('.cart-button').onclick = () => {
    document.querySelector('.cart-panel').classList.toggle("open");
}

var cartPanel = document.querySelector('.cart-panel')

const cartProduct = [2,3,5,6,18]
var tampPrice =0
cartProduct.map((val)=>
fetch('https://fakestoreapi.com/products', options)
.then(response => response.json())
.then((res) => {

    const cartTable = document.querySelector('.cart-table')
    const listProduct = document.createElement('tr')
	const nameProduct = document.createElement('td')
    const priceProduct = document.createElement('td')
    const inputCount = document.createElement('td')
    let countPrice = document.createElement('td')
    nameProduct.textContent=res[val].title
    priceProduct.textContent=`$ ${res[val].price}`
    priceProduct.classList.add('price-product-table')
    inputCount.textContent=5
    inputCount.classList.add('count-product-table')
    countPrice.textContent=`$ ${5*res[val].price}`
    countPrice.classList.add('count-price-table')
    tampPrice+=(5*res[val].price)
    listProduct.appendChild(nameProduct)
    listProduct.appendChild(priceProduct)
    listProduct.appendChild(inputCount)
    listProduct.appendChild(countPrice)
    cartTable.appendChild(listProduct)

    const totalQty = document.querySelector('.total-qty')
    totalQty.textContent=25
    const totalPrice = document.querySelector('.total-price')
    totalPrice.textContent=`$ ${tampPrice.toFixed(2)}`
})
.catch(err => console.error(err))
)