let linkshed = document.querySelector(".part-link");
let links = document.querySelectorAll(".links > li");
let linksi = document.querySelectorAll(".links > li > a > i");
let link = document.querySelectorAll(".hide-link");
let buttonhed = document.querySelector(".buttonhed");
let buttonbar = document.querySelector(".bar > button");
let closes = document.querySelector(".closes");
let page_bar = document.querySelector(".page-bar");
let hedbar = document.querySelector(".hedbar");
let search = document.querySelector(".search");
let hedser = document.querySelector(".hedser");
let pageser = document.querySelector(".pageser");
let closesser = document.querySelector(".closesser");
let nums = document.querySelector(".number");
let num = document.querySelector(".number num");
let courses = document.querySelector(".corsess");
let slide = document.querySelector(".corsess  .slide");
let headar = document.querySelector("header");
let btnscrol = document.querySelector(".scrollbutton");




// start part loader 
document.body.style.overflow="hidden"
let load=document.querySelector(".loader")
window.onload=()=>{
load.style.display="none"
document.body.style.overflow="auto"
}
// end part loader 
// part scrol bar
headar.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
/////// part search
search.onclick = function () {
  hedser.style.width = "100vw";
  hedser.style.height = "100vh";
  hedser.style.borderRadius = "0px";
  hedser.style.left = "0px";
  setTimeout(() => {
    pageser.classList.add("block");
  }, 1000);
};
closesser.onclick = function () {
  hedser.style.width = "0vw";
  hedser.style.height = "0vh";
  hedser.style.borderRadius = "50%";
  hedser.style.left = "50%";
  pageser.classList.remove("block");
};
/////// part links phone
if (window.screen.width <= 992) {
  page_bar.appendChild(linkshed);
  page_bar.appendChild(buttonhed);
}
///////// phone
buttonbar.onclick = function () {
  hedbar.classList.add("block");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    page_bar.style.transform = "translateX(0%)";
  }, 10);
};
closes.onclick = function () {
  document.body.style.overflowY = "auto";
  page_bar.style.transform = "translateX(-100%)";

  setTimeout(() => {
    hedbar.classList.remove("block");
  }, 500);
};
////////////////////// part links hide



links.forEach((item, index) => {

  item.addEventListener("click", () => {
    link.forEach((item2, index2) => {
      if (index != index2 + 1) {
        item2.classList.remove("flex");
        linksi.forEach((icon, inedex3) => {
          if (index2 == inedex3) {
            icon.classList.add("fa-angle-left");
            icon.classList.remove("fa-close");
          }
        });
      }
      if (index == index2 + 1) {
        item2.classList.toggle("flex");
        linksi.forEach((icon, inedex3) => {
          if (index2 == inedex3) {
            icon.classList.toggle("fa-angle-left");
            icon.classList.toggle("fa-close");
          }
        });
      }
    });

  });
});

// link.forEach((item,index)=>{
//   setTimeout(() => {
//     if(item.classList.item("flex")){
//       window.onclick=function(){
//         item.classList.remove("flex");
//       }
      
//     }
//   }, 2000);
// })
// linksi.forEach((item,index)=>{
//   setTimeout(() => {
//     if(item.classList.item("flex")){
//       window.onclick=function(){
//         item.classList.remove("fa-angle-left");
//       }
      
//     }
//   }, 1000);
// })
// part counter
function count(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 100);
}
count(document.querySelector(".num"));
///////// scrolltop
btnscrol.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
///////////////////// part slick slider
$(".fadex").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 3000,
});

$(".single-item-rtl").slick({
  rtl: true,
});

if (window.screen.width >= 768) {
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
} else if (window.screen.width <= 768) {
  $(".autoplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}
$(".autoplay2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

