
const addproduct = ()=>{
    const productName = document.getElementById('product-name')
const productQuantity = document.getElementById('product-quantity')
const Pname = productName.value
const Pquality = productQuantity.value

productName.value = ''
productQuantity.value = ''
console.log(Pname,Pquality)
disPlayProduct(Pname,Pquality)

}

const disPlayProduct = (Pname,Pquality) =>{
    const ul = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = ` ${Pname}: ${Pquality}`
    ul.appendChild(li)
}

const getStoredShoppingCart = () =>{
    let cart = {}
    const stroreCart = localStorage.getItem('cart')
    if(stroreCart){
        cart = JSON.parse(stroreCart)
    }
    return cart
}

const saveProductToLocalStorage = (Pname,Pquality)=>{
   const cart = getStoredShoppingCart()
   cart [Pname] = Pquality
   const cartStringify = JSON.stringify(cart)
   localStorage.setItem ('cart',cartStringify)

}