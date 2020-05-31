const products = [
  {
    name: 'Milk',
    quantity: 1,
    isPurchased: true,
  },
  {
    name: 'Honey',
    quantity: 1,
    isPurchased: true,
  },
  {
    name: 'Tuna',
    quantity: 3,
    isPurchased: false,
  },
];
const initTable = (products) => {
  const table = document.querySelector('#shoppinglist');
  const confirmBtns = document.querySelectorAll('button');
  products.forEach((product) => {
    table.append(rowLayout(product));
    confirmBtns.forEach((confirmBtn) => {
      if (confirmBtn.contains('#confirmPurchase'))
        confirmBtn.classList.add('purchase');
      if (confirmBtn.contains('#deleteProduct'))
        confirmBtn.classList.add('delete-product');
    });
  });
};

const rowLayout = (product) => {
  const rowLayout = document.createElement('tr');
  let newRowLayoutContent = `
    <td class="product">${product.name}</td>
    <td class="product">${product.quantity}</td>
    `;
  let purchasedIconTrue = `
    <td class="product purchased-icon">${printPurchasedIcon(product)}</td>
    `;
  let purchasedIconFalse = `
    <td class="product"></td>
    `;
  let btns = `
    <td><button id = "confirmPurchase" class = "purchase">confirm purchase</button></td>
    <td><button id = "deleteProduct" class = "delete-product">delete product</button></td>
    `;
  rowLayout.innerHTML += newRowLayoutContent;
  if (product.isPurchased) rowLayout.innerHTML += purchasedIconTrue;
  else rowLayout.innerHTML += purchasedIconFalse;
  rowLayout.innerHTML += btns;
  return rowLayout;
};

const printPurchasedIcon = (product) => {
  let newPurchasedIcon = document.createElement('div');
  newPurchasedIcon.classList.add('container-scale');
  let newPurchasedIconContent = `
    <img src="./images/svgs/confirm.svg" alt="confirm purchase"> 
    `;
  newPurchasedIcon.innerHTML = newPurchasedIconContent;
  const purchasedIcons = document.querySelectorAll('.purchased-icon');
  purchasedIcons.forEach((purchasedIcon) => {
    purchasedIcon.append(newPurchasedIcon);
  });
  return '';
};

initTable(products);
const shoppinglist = document.querySelector('#shoppinglist');
const tableContent = document.querySelectorAll('.product');
for (let i = 0; i < tableContent.length; i++) {
  if (tableContent[i].classList.contains('purchased-icon')) {
    let product = tableContent[i].parentElement;
    shoppinglist.append(product);
  }
}
