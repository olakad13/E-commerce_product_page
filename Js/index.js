const minusIcon = document.getElementById("minus");
const plusIcon = document.getElementById("plus");
const numOfSneakers = document.getElementById("no-of-items");
const addToCArtButton = document.getElementsByClassName("button")[0];
const numOfItemSelected = document.getElementById("items-selected");
const cartIcon = document.getElementById("cart-icon");
const cartCard = document.getElementsByClassName("pop-up-container")[0];
const cartContent = document.getElementsByClassName("inner-division")[0];
const totalAmountSection = document.getElementsByClassName("total-amount-section")[0];
const previews = Array.from(document.getElementsByClassName("previews"));
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const mainImage = document.getElementById("main-image");
const lightBox = document.getElementById("lightbox");
const closeBtn = document.getElementById("lightbox-close-btn");
const lightBoxPrev = document.getElementById("lightbox-prev-btn");
const lightBoxNext = document.getElementById("lightbox-next-btn");
const lightboxImg = document.getElementById("lightbox-image");
const menu = document.getElementById("menu");
const navigation = document.getElementById("navigation");
const navCloseBtn = document.getElementById("nav-close");
const imagesSrc = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg",            "images/image-product-4.jpg"];



let number = 0;
let count = 0;
let imageIndex = 0;



plusIcon.addEventListener("click", addition);
minusIcon.addEventListener("click", subtraction);
addToCArtButton.addEventListener("click", addTocartList);
cartIcon.addEventListener("click", displayCartCard);
prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
closeBtn.addEventListener("click", closeLightBox);
lightBoxPrev.addEventListener("click", () => {

    lightboxImg.src = `${imagesSrc[imageIndex]}`
    prevImage();

});
lightBoxNext.addEventListener("click", () => {

    lightboxImg.src = `${imagesSrc[imageIndex]}`
    nextImage();

});

mainImage.addEventListener("click", () => {
    if (screen.width > 450) {
        lightBox.style.display = "flex";
    }
});


menu.addEventListener("click",() => {
    navigation.classList.add("animate");
    cartCard.style.display = "none";
});

navCloseBtn.addEventListener("click", () => {
    navigation.classList.remove("animate");
})

previews.forEach(preview => {
    preview.addEventListener("click", changeImage);
})


function addition() {
    number++;
    numOfSneakers.innerHTML = `${number}`;
}


function subtraction() {
    if (number > 0) {
        number--;
    }
    numOfSneakers.innerHTML = `${number}`;
}


function addTocartList() {
    numOfItemSelected.innerHTML = number;
    if ((numOfItemSelected.innerHTML) > 0) {
        numOfItemSelected.style.visibility = 'visible';
    }
    if (number === 0) {
        numOfItemSelected.style.visibility = 'hidden';
    }
    changeContent();
}


function displayCartCard() {
    cartCard.classList.toggle("display-cart");
    changeContent();
}


function changeContent() {
    let price = 125;
    let num = Number((numOfItemSelected.innerHTML));
    const innerDivContent = document.getElementById("inner-div");
    cartContent.style.color = "var(--Dark-grayish-blue)";
    if (num > 0) {
        innerDivContent.innerHTML = `
            <div>
                <img src="images/image-product-1-thumbnail.jpg" alt="">
                <div>
                    <div class="title">Fall Limited Edition Sneakers</div>
                    <div class="total-amount-section">$${price}.00 * ${num} 
                        <strong class="black">$${price*num}.00</strong>
                    </div>
                </div> 
                <img src="images/icon-delete.svg" alt="" onclick="deleteContent()">
            </div>
            <button>Checkout</button>
        `;
    } else {
        innerDivContent.innerHTML = `<p>Your cart is empty</p>`;
    }
}


function deleteContent() {
    numOfItemSelected.innerHTML = 0;
    number = 0;
    numOfItemSelected.style.visibility = 'hidden';
    document.getElementById("inner-div").innerHTML = "<p>Your cart is empty</p>";
}


function changeImage() {
    mainImage.src = `${imagesSrc[previews.indexOf(this)]}`;
}


function nextImage() {
    imageIndex++;
    if (imageIndex > imagesSrc.length - 1) {
        imageIndex = 0;
    }
    mainImage.src = `${imagesSrc[imageIndex]}`;
    
}


function prevImage() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = imagesSrc.length - 1;
    }
    mainImage.src = `${imagesSrc[imageIndex]}`;
    
}

function closeLightBox() {
    lightBox.style.display = "none";
}