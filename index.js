
async function getPizza() {
    const url = 'https://pizzaallapala.p.rapidapi.com/productos';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9bf7d478a0msha05ec9476256651p1c5c87jsn543747bb964e',
            'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        let { mensaje, productos } = result;
        productos.map(({ linkImagen, precio, nombre, id }) => {
            renderUI(linkImagen, precio,nombre, id);
            quickView(linkImagen, id,nombre,precio);
        });
    } catch (error) {
        console.error(error);
    }
}

function renderUI(image, price, title,id) {
    let foodWrapper = document.getElementById('food_wrapper');


    let card = `<div class="foodCard">
                    <div class="foodImage">
                        <img src=${image} alt="">
                    </div>
                    <div class="food_title">${title}</div>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>                    
                        <i class="fa-regular fa-star"></i>                    
                        <i class="fa-regular fa-star"></i>                    
                    </div>
                    <div class="food_price">
                        <span style="text-decoration:line-through;margin:5px;color:grey;">$${parseInt(price) + 15.00}.00</span>$${price}
                    </div>
                    <div class="Btns">
                        <button>Add to Cart</button>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" id="view${id}">Quick View</button>
                    </div>
                </div>`;
    foodWrapper.innerHTML += card;
}

function quickView(image, id,title,price) {




    let modalImage = document.getElementsByClassName('modal-image');
    let modalBodyHeading = document.getElementById('body-heading');
    let modalBodyPrice = document.getElementById('body_price');

    for(let i = 0;i < modalImage.length;i++){
        modalImage[i].setAttribute('id',`product${id}`)
        console.log(modalImage[i],id);
        modalImage[i].src = image;

    }

    modalBodyHeading.innerText = title;
    modalBodyPrice.innerHTML = `<span style="text-decoration:line-through;margin:5px;color:grey;">$${parseInt(price) + 15.00}.00</span><span style="color:red">$${price}</span>`;



}

getPizza();


