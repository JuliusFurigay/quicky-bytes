let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
    let products = [...document.querySelectorAll('.container .products-container .product')];
    for (var i = currentItem; i < currentItem + 3; i++){
        products[i].style.display = 'inline-block';
    }
    currentItem += 3;
    
    if(currentItem >= products.length){
        loadMoreBtn.style.display = 'none';
    }
}