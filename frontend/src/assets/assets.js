import logo from './logo.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.jpg'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.webp'
import hero_img from './hero_img.jpg'
import hero_img1 from './hero_img1.jpg'
import hero_img2 from './hero_img2.jpg'
import hero_img3 from './hero_img3.jpg'
import hero_img4 from './hero_img4.jpg'
import hero_img5 from './hero_img5.webp'
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.jpg'
import support_img from './support_img.png'
import cross_icon from './cross_icon.png'
import star_icon from './star_icon.jpg'
import star_dull_icon from './star_dull_icon.png'
import bin_icon from "./bin_icon.png"
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import googlePay_logo from './googlePay_logo.png'
import paytm_logo from './paytm_logo.jpg'
import phonePe_logo from './phonePe_logo.png'
import about_img from './about_img.jpg'
import contact_img from './contact_img.jpg'

const assets = {
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    hero_img,
    hero_img1,
    hero_img2,
    hero_img3,
    hero_img4,
    hero_img5,
    exchange_icon,
    quality_icon,
    support_img,
    cross_icon,
    star_icon,
    star_dull_icon,
    bin_icon,
    stripe_logo,
    razorpay_logo,
    googlePay_logo,
    paytm_logo,
    phonePe_logo,
    about_img,
    contact_img
}

export const products = [
    {
        id: "aaa",
        name: "Chocolate Truffle Cake",
        description: "Rich chocolate indulgence",
        price: 1000,
        image: [hero_img1],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aab",
        name: "Strawberry Delight Cake",
        description: "Fresh fruity sweetness",
        price: 400,
        image: [hero_img2],
        category: "Egg",
        subCategory: "Vanilla",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: false
    },
    {
        id: "aac",
        name: "Classic Vanilla Cake",
        description: "Lighty creamy classic",
        price: 300,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Vanilla",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aad",
        name: "Pineapple Cream Cake",
        description: "Tropical juicy flavor",
        price: 350,
        image: [hero_img4],
        category: "Eggless",
        subCategory: "Butterscotch",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: false
    },
    {
        id: "aae",
        name: "Red Velvet Cake",
        description: "Smooth velvety richness",
        price: 450,
        image: [hero_img5],
        category: "Eggless",
        subCategory: "Butterscotch",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aaf",
        name: "Mango Magic Cake",
        description: "Sweet mango bliss",
        price: 600,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Butterscotch",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: false
    },
    {
        id: "aag",
        name: "Choco Caramel Cake",
        description: "Gooey caramel chocolate",
        price: 550,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "CheeseCake",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aah",
        name: "ButterScotch Crunch Cake",
        description: "Crunchy sweet delight",
        price: 500,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "CheeseCake",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: false
    },
    {
        id: "aai",
        name: "Oreo Cream Cake",
        description: "Cookies creamy goodness",
        price: 700,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: false
    },
    {
        id: "aaj",
        name: "Ferrero Rocher Cake",
        description: "Nutty chocolate luxury",
        price: 750,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aak",
        name: "Lemon Zest Cake",
        description: "Tangy citrus freshness",
        price: 750,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aal",
        name: "Black Forest Cake",
        description: "Chocolate cherry delight",
        price: 750,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aam",
        name: "Blueberry Bliss Cake",
        description: "Sweet tangy berry burst",
        price: 750,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aan",
        name: "Kitkat Chocolate Cake",
        description: "Crispy chocolate layers",
        price: 750,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aao",
        name: "Rasmalai Fusion Cake",
        description: "Indian creamy fusion delight",
        price: 750,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aao",
        name: "Rasmalai Fusion Cake",
        description: "Indian creamy fusion delight",
        price: 750,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    },
    {
        id: "aao",
        name: "Rasmalai Fusion Cake",
        description: "Indian creamy fusion delight",
        price: 750,
        image: [hero_img3],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: true
    }
]

export default assets