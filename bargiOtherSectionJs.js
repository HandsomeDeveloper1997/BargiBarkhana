const bargiOtherProducts = [{
    id:1,
    img:"suveniri",
    name:"დეკორატიული სანათი",
    fakeprice:50,
    realprice:35,
    imgname:"სანათი"

},

{
    id:2,
    img:"dekoracia2",
    name:"დეკორატიული სანათი",
    fakeprice:50,
    realprice:35,
    imgname:"სანათი"
},

{
    id:3,
    img:"decoration3",
    name:"ეზოს სანათი",
    fakeprice:25,
    realprice:15,
    imgname:"სანათი"
},

{
    id:4,
    img:"decoration4",
    name:"დეკორატიული ქვიშის საათი",
    fakeprice:65,
    realprice:45,
    imgname:"საათი"
},

{
    id:5,
    img:"decoration5",
    name:"სამკაულის შესანახი ზარდახშა",
    fakeprice:55,
    realprice:35,
    imgname:"ზარდახშა"
},

{
    id:6,
    img:"decoration6",
    name:"დეკორატიული სანათი",
    fakeprice:40,
    realprice:25,
    imgname:"სანათი"

},

{
    id:7,
    img:"decoration7",
    name:"დეკორატიული სანათი",
    fakeprice:50,
    realprice:25,
    imgname:"სანათი"
},

{
    id:8,
    img:"decoration8",
    name:"დეკორატიული სუვენირი",
    fakeprice:45,
    realprice:30,
    imgname:"სუვენირი"

},

{
    id:9,
    img:"decoration9",
    name:"ელექტრო სანათი",
    fakeprice:52,
    realprice:35,
    imgname:"ელექტროსანათი"
}



];

let otherProducts = '';

bargiOtherProducts.forEach((product)=>{

otherProducts+=
`            
<div class="other--section--div">
    <img src="./photos/${product.img}.jpg" alt=${product.imgname} class="other--decoration2">
    <div class="other--section--name">${product.name}</div>
    <div>ფასი <del>${product.fakeprice}&#8382;</del> ${product.realprice}&#8382;</div>
    <div>გსურს შეძენა?</div>
    <strong> დაგვირეკეთ 555 30 27 04</strong>
</div>

`;

})

document.querySelector(".other--js--products").innerHTML = otherProducts;

