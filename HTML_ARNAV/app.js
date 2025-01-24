const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")
const products =[
    {
        id:1,
        tittle: "NIKE",
        price: 5500,
        colors: [
            {
                code: "brown",
                img: "./img/travis.png",
            },
            {
                code: "blue",
                img: " " ,
            },
        ],
    },
    {
        id: 2,
        tittle: "ADIDAS",
        price: 3500,
        colors: [
            {
                code: "white",
                img: "./img/adiyez.png",
            },
            {
                code: "black",
                img: " ",
            },
        ] ,

    },
    {
        id: 3,
        tittle: "PUMA",
        price: 3800,
        colors: [
            {
                code: "white",
                img: "./img/pumax.png",
            },
            {
                code: "black",
                img: "",
            },
        ] ,

    },
    {
        id: 4,
        tittle: "NEW BALANCE",
        price: 4500,
        colors: [
            {
                code: "green",
                img: "./img/newba.png",
            },
            {
                code: "orange",
                img: " ",
            },
        ] ,

    },
    {
        id: 5,
        tittle: "COLLABS",
        price: 5500,
        colors: [
            {
                code: "brown",
                img: "./img/travis.png",
            },
            {
                code: "blue",
                img: " ",
            },
        ] ,

    },
    
];
let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");




menuItems.forEach((item, index) => {
    item.addEventListener("click", () =>{
      //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change the choosen product
        choosenProduct = products[index]


        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.tittle;
        currentProductPrice.textContent ="₹" + choosenProduct.price ;
        currentProductImg.src = choosenProduct.colors[0].img
        
        //assigning new colors in change color
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });



});
});
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});
currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    //for retting backg and text color
    currentProductSizes.forEach((size)=>{
        size.style.backgroundColor= "white"
        size.style.color="black"

    });
    //for setting the backgc and text color
    size.style.backgroundColor= "black"
    size.style.color="white"
  });
});
 
//for opening and closing payment
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex"
});
close.addEventListener("click",()=>{
    payment.style.display = "none"
});