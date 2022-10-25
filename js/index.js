// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  unitPrice=product.querySelector('.price').firstElementChild.innerHTML
  quantity=product.querySelector('.quantity').firstElementChild.value
  subtotal=product.querySelector('.subtotal').firstElementChild
  subtotal.innerHTML=unitPrice*quantity
  return unitPrice*quantity


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const listProduct = document.getElementsByClassName('product');
  total=0;
  [...listProduct].forEach(el=>{
    total+=updateSubtotal(el);
  })

  // ITERATION 3
  //... your code goes here
  const totalTag=document.getElementById('total-value')
  totalTag.firstElementChild.innerHTML=total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  //... your code goes here
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nome=document.querySelector('.create-product').getElementsByTagName('input')
  console.log(nome[1].value)
  if (nome[0].value===''){
    alert('Digite o nome do produto!!')
    return
  }
  if (nome[1].value==='0'){
    alert('Digite o valor unitário do produto!!')
    return
  }
  const table=document.getElementsByTagName('tbody')[0];
  const nextLine=document.createElement('tr')
  nextLine.setAttribute('class','product')
  nextLine.innerHTML=`<td class="name">
  <span>${nome[0].value}</span>
</td>
<td class="price">$<span>${nome[1].value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`
  btn=nextLine.getElementsByClassName('btn-remove')[0]
  btn.addEventListener('click', removeProduct);
  table.appendChild(nextLine)
  nome[0].value=''
  nome[1].value=0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const listaBotoes= document.getElementsByClassName('btn-remove');
  [...listaBotoes].forEach(btn=>{
    btn.addEventListener('click', removeProduct);
  })
  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});

