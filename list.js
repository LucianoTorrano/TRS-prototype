const data = ["Productos sin cascara:","Nueces","Almendras","Castañas","Nueces","Almendras","Castañas","Nueces","Almendras","Castañas"];

addList(data);
addList(data);


function addList(data){
    const listsContainer = document.getElementById("listsContainer");
    const list = document.createElement('div');
    list.classList.add('list');
    const listTitle = document.createElement('h2');
    listTitle.innerHTML = `${data[0]}`;
    listTitle.classList.add("subtitle");

    list.appendChild(listTitle);

    listsContainer.appendChild(list);
    const productList = document.createElement('ul');
    productList.classList.add('product-list');

    for (let i = 1; i < data.length; i++) {
        const productItem = document.createElement('li');
        productItem.classList.add('product-item')
        const productName = document.createElement('h3');
        productName.classList.add('product-name');
        productItem.appendChild(productName);
        productName.innerHTML = `${data[i]}`;
        productList.appendChild(productItem);
        list.appendChild(productList);
    }

}