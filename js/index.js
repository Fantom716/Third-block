const foodButton = document.querySelector('.menu__buttons-food');
const drinksButton = document.querySelector('.menu__buttons-drinks');
const takeawayButton = document.querySelector('.menu__buttons-takeaway');
const img = document.querySelector('.menu__image-example');

const imgObject = {
    food: {
        src: "img/food-menu.jpg",
        alt: "food menu"
    },
    drinks: {
        src: "img/drinks-menu.jpg",
        alt: "drinks menu"
    },
    takeaway: {
        src: "img/takeaway-menu.jpg",
        alt: "takeaway menu"
    },
};

foodButton.addEventListener('click', () => {
    img.src = imgObject.food.src;
    img.alt = imgObject.food.alt;
});

drinksButton.addEventListener('click', () => {
    img.src = imgObject.drinks.src;
    img.alt = imgObject.drinks.alt;
});

takeawayButton.addEventListener('click', () => {
    img.src = imgObject.takeaway.src;
    img.alt = imgObject.takeaway.alt
});