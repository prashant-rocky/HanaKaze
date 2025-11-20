

// Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500, // time in ms (2.5 seconds per slide)
        disableOnInteraction: false, // keep autoplay after user swipes
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".TmySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});

// menu
// ---------------- Menu Data ----------------
const menuData1 = [
    { 
        id: 1, 
        name: "Salmon Nigiri (鮭握り)", 
        description: "Fresh, buttery salmon laid over lightly seasoned sushi rice.", 
        price: "¥450", 
        image: "assets/images/product1.jpg" 
    },
    { 
        id: 2, 
        name: "Tonkotsu Ramen (豚骨ラーメン)", 
        description: "Rich, slow-cooked pork bone broth served with tender chashu and soft-boiled egg.", 
        price: "¥900", 
        image: "assets/images/product2.jfif" 
    },
    { 
        id: 3, 
        name: "Chicken Teriyaki (照り焼きチキン)", 
        description: "Grilled chicken glazed with house-made teriyaki sauce and fresh vegetables.", 
        price: "¥780", 
        image: "assets/images/product3.png" 
    },
    { 
        id: 4, 
        name: "Tempura Platter (天ぷら盛り合わせ)", 
        description: "Crispy shrimp and seasonal vegetables fried to golden perfection.", 
        price: "¥650", 
        image: "assets/images/product4.webp" 
    }
];

const menuData2 = [
    { 
        id: 5, 
        name: "Beef Gyudon Bowl (牛丼)", 
        description: "Thinly sliced beef simmered in sweet-savory dashi broth over rice.", 
        price: "¥720", 
        image: "assets/images/product5.webp" 
    },
    { 
        id: 6, 
        name: "California Roll (カリフォルニアロール)", 
        description: "A popular roll filled with crab, avocado, and cucumber, topped with sesame seeds.", 
        price: "¥550", 
        image: "assets/images/product6.jfif" 
    },
    { 
        id: 7, 
        name: "Yakisoba Stir-Fry (焼きそば)", 
        description: "Wok-fried noodles with vegetables and your choice of chicken or seafood.", 
        price: "¥680", 
        image: "assets/images/product7.jpg" 
    },
    { 
        id: 8, 
        name: "Matcha Cheesecake (抹茶チーズケーキ)", 
        description: "Creamy cheesecake infused with premium Japanese matcha.", 
        price: "¥500", 
        image: "assets/images/product8.jfif" 
    }
];

// ---------------- Render Menus ----------------
document.addEventListener("DOMContentLoaded", () => {

    // ✅ Home Page: menu1
    const menu1 = document.getElementById("menu1");
    if (menu1) {
        menuData1.forEach(menu => {
            menu1.innerHTML += createMenuItem(menu);
        });
    }

    // ✅ Home Page: menu2
    const menu2 = document.getElementById("menu2");
    if (menu2) {
        menuData2.forEach(menu => {
            menu2.innerHTML += createMenuItem(menu);
        });
    }

});


// ---------------- Helper Function ----------------
function createMenuItem(menu) {
    return `
        <div class="col-md-12 text-start py-3" key="${menu.id}">
            <div class="products d-flex">
                <div class="img px-2">
                    <img src="${menu.image}" alt="${menu.name}" height="100" width="100" class="productImg">
                </div>
                <div class="productName pt-3">
                    <h4 class="d-inline">${menu.name} .....</h4>
                    <h5 class="d-inline float-end">${menu.price}</h5>
                    <p>${menu.description}</p>
                </div>
            </div>
        </div>
    `;
}
// reservation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");
    const BthankYouCard = document.getElementById("BthankYouCard");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Hide form & show thank you card
            form.style.display = "none";
            BthankYouCard.style.display = "block";

            // After 3 sec hide thank you card & show form again
            setTimeout(() => {
                BthankYouCard.style.display = "none";
                form.style.display = "block";
                form.reset();
            }, 3000);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const successMessage = document.getElementById("successMessage");

    if (commentForm && successMessage) {
        commentForm.addEventListener("submit", function (e) {
            e.preventDefault();
            successMessage.style.display = "block";

            // Hide success message after 3 sec
            setTimeout(() => {
                successMessage.style.display = "none";
                commentForm.reset();
            }, 3000);
        });
    }
});
