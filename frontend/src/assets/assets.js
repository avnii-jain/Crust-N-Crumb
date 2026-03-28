import logo from './logo.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.jpg'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.webp'
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

import hero_img from './hero_img.jpg'
import aa from './aa.webp'
import ab from './ab.jpg'
import ac from './ac.jpg'
import ad from './ad.webp'
import ae from './ae.webp'
import af from "./af.avif"
import ag from "./ag.avif"
import ah from "./ah.jpg"
import ai from "./ai.jpg"
import aj from "./aj.jpg"
import ak from "./ak.jpg"
import al from "./al.webp"
import am from "./am.png"
import an from "./an.jpg"
import ao from "./ao.png"
import ap from "./ap.webp"
import aq from "./aq.jpg"
import ar from "./ar.jpg"
import as from "./as.jpg"
import at from "./at.png"
import au from "./au.webp"
import av from "./av.jpg"
import aw from "./aw.jpg"
import ax from "./ax.jpg"
import ay from "./ay.jpg"
import az from "./az.jpg"
import ba from "./ba.webp"
import bb from "./bb.jpg"
import bc from "./bc.jpg"
import bd from "./bd.webp"
import be from "./be.jpg"

const assets = {
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
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
    contact_img,

    hero_img,
    aa,
    ab,
    ac,
    ad,
    ae,
    af,
    ag,
    ah,
    ai,
    aj,
    ak,
    al,
    am,
    an,
    ao,
    ap,
    aq,
    ar,
    as,
    at,
    au,
    av,
    aw,
    ax,
    ay,
    az,
    ba,
    bb,
    bc,
    bd,
    be
}

export const products = [
    {
        id: "aa",
        name: "Chocolate Truffle Cake",
        description: "Rich chocolate indulgence",
        price: 1000,
        image: [aa],
        category: "Egg",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "ab",
        name: "Strawberry Delight Cake",
        description: "Fresh fruity sweetness",
        price: 400,
        image: [ab],
        category: "Eggless",
        subCategory: "Vanilla",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "ac",
        name: "Classic Vanilla Cake",
        description: "Lighty creamy classic",
        price: 300,
        image: [ac],
        category: "Eggless",
        subCategory: "Vanilla",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "ad",
        name: "Pineapple Cream Cake",
        description: "Tropical juicy flavor",
        price: 350,
        image: [ad],
        category: "Eggless",
        subCategory: "Butterscotch",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "ae",
        name: "Red Velvet Cake",
        description: "Smooth velvety richness",
        price: 450,
        image: [ae],
        category: "Eggless",
        subCategory: "Butterscotch",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "af",
        name: "Mango Magic Cake",
        description: "Sweet mango bliss",
        price: 600,
        image: [af],
        category: "Eggless",
        subCategory: "Butterscotch",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "ag",
        name: "Choco Caramel Cake",
        description: "Gooey caramel chocolate",
        price: 550,
        image: [ag],
        category: "Eggless",
        subCategory: "CheeseCake",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "ah",
        name: "ButterScotch Crunch Cake",
        description: "Crunchy sweet delight",
        price: 500,
        image: [ah],
        category: "Eggless",
        subCategory: "CheeseCake",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "ai",
        name: "Oreo Cream Cake",
        description: "Cookies creamy goodness",
        price: 700,
        image: [ai],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "aj",
        name: "Ferrero Rocher Cake",
        description: "Nutty chocolate luxury",
        price: 750,
        image: [aj],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "ak",
        name: "Lemon Zest Cake",
        description: "Tangy citrus freshness",
        price: 750,
        image: [ak],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "al",
        name: "Black Forest Cake",
        description: "Chocolate cherry delight",
        price: 750,
        image: [al],
        category: "Egg",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "am",
        name: "Blueberry Bliss Cake",
        description: "Sweet tangy berry burst",
        price: 750,
        image: [am],
        category: "Egg",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "an",
        name: "Kitkat Chocolate Cake",
        description: "Crispy chocolate layers",
        price: 750,
        image: [an],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "ao",
        name: "Rasmalai Fusion Cake",
        description: "Indian creamy fusion delight",
        price: 750,
        image: [ao],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "ap",
        name: "Coffee Mocha Cake",
        description: "Rich coffee chocolate flavor",
        price: 750,
        image: [ap],
        category: "Egg",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "aq",
        name: "Chocolate Fudge Cake",
        description: "Dense fudgy richness",
        price: 750,
        image: [aq],
        category: "Egg",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "ar",
        name: "White Forest Cake",
        description: "Light creamy cherry delight",
        price: 750,
        image: [ar],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "as",
        name: "Paan Flavour Cake",
        description: "Refreshing desi twist",
        price: 750,
        image: [as],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "at",
        name: "Nutella Hazelnut Cake",
        description: "Creamy nutty indulgence",
        price: 750,
        image: [at],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "au",
        name: "Rainbow Cake",
        description: "Colorful fun layers",
        price: 750,
        image: [au],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "av",
        name: "Chocolate Chip Cake",
        description: "Soft choco chip bites",
        price: 750,
        image: [av],
        category: "Egg",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "aw",
        name: "Milk Cake (Tres Leches)",
        description: "Soft milky sweetness",
        price: 750,
        image: [aw],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "ax",
        name: "Banana Walnut Cake",
        description: "Moist nutty goodness",
        price: 750,
        image: [ax],
        category: "Egg",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "ay",
        name: "Coconut Cream Cake",
        description: "Light tropical sweetness",
        price: 750,
        image: [ay],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "az",
        name: "Dark Chocolate Cake",
        description: "Intense cocoa flavor",
        price: 750,
        image: [az],
        category: "Egg",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "ba",
        name: "Honey Almond Cake",
        description: "Mild sweet nutty taste",
        price: 750,
        image: [ba],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "bb",
        name: "Gulab Jamun Cake",
        description: "Syrupy desi indulgence",
        price: 750,
        image: [bb],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "bc",
        name: "Tiramisu Cake",
        description: "Coffee creamy elegance",
        price: 750,
        image: [bc],
        category: "Egg",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: true
    },
    {
        id: "bd",
        name: "Pistachio Cake",
        description: "Rich nutty flavor",
        price: 750,
        image: [bd],
        category: "Eggless",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg"],
        bestseller: false
    },
    {
        id: "be",
        name: "Marble Cake",
        description: "Vanilla chocolate swirl",
        price: 750,
        image: [be],
        category: "Egg",
        subCategory: "Chocolate",
        sizes: ["0.5 kg", "1 kg", "2 kg", "3kg", "4kg"],
        bestseller: false
    }
]

export default assets