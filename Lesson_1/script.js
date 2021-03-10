const storageMock = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

let Cart = []
document.addEventListener("DOMContentLoaded", function () {
    fillStorageTable(storageMock);
});

function fillStorageTable(items) {
    let storageTable = document.getElementById('storage');

    items.forEach(e => {
        let itemTR = document.createElement('tr');
        itemTR.innerHTML = `<td>${e.title}</td><td>${e.price}</td>`;
        storageTable.append(itemTR);
        itemTR.addEventListener('click', addToCart);
    });
};

Sum = 0;

function addToCart() {
    let cartTR = document.createElement("tr");
    cartTR.innerHTML = `<td>${this.childNodes[0].textContent}</td><td>${this.childNodes[1].textContent}</td>`;
    document.getElementById('cart').append(cartTR);
    Sum += parseInt(this.childNodes[1].textContent.toString());
    document.getElementById('sum').innerHTML = Sum;
}