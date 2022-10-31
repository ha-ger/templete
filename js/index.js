let imgs=["im1.jpg","im4.jpg","im5.jpg","im8.jpg","im9.jpg","im10.jpg"]
let land=document.querySelector(".landing")

let backgroundOp = true;
let counter ;

function handle(event){

event.target.parentElement.querySelectorAll(".active").forEach((element)=>{
  element.classList.remove("active")

})
event.target.classList.add("active")

}

// for icons//
let icons=document.querySelector(".icons .fa-gear")
let setting=document.querySelector(".setting")

icons.onclick=function(){

    setting.classList.toggle("open")
    icons.classList.toggle("fa-spin")

}





//for color setting
if(localStorage.color!=null){
  document.documentElement.style.setProperty("--main-color",localStorage.color)
document.querySelectorAll(".col li").forEach((ele)=>{
ele.classList.remove("active")
if(ele.dataset.color===localStorage.color){
  ele.classList.add("active")

}

})

  


}
let color=document.querySelectorAll(".col li")


color.forEach((li)=>{
  li.addEventListener("click",function(e){
    document.documentElement.style.setProperty("--main-color",e.target.dataset.color)

  localStorage.setItem("color",e.target.dataset.color)
  handle(e)

})

})
//for background





function randomFun(){
  if(backgroundOp === true){

  counter=setInterval(function(){
    let random=Math.trunc(Math.random()*imgs.length);

     land.style.backgroundImage='url("images/'+imgs[random]+'")'


 },3000)
} 


 }


 randomFun()



let locaal=window.localStorage.getItem("backOption")

if(locaal!==null){


  document.querySelectorAll(".allSpan span").forEach((element)=>{
    element.classList.remove("active")
  })

if(locaal === "true")

{  backgroundOp===true

  document.querySelector(".yes").classList.add("active")




}

if(locaal === "false")
{
 backgroundOp===false
  clearInterval(counter)
  land.style.backgroundImage='url("images/'+imgs[0]+'")'

  document.querySelector(".no").classList.add("active")

}


}






let spann=document.querySelectorAll(".allSpan span")
spann.forEach((span)=>{

span.addEventListener("click",function(e){


if(e.target.dataset.back === "yes"){
  backgroundOp = true
randomFun()
localStorage.setItem("backOption", true)
}
if(e.target.dataset.back === "no"){

  backgroundOp = false
  clearInterval(counter)

window.localStorage.setItem("backOption", false)

}
handle(e)

})


})






//slills//
let skills=document.querySelector(".skills")

window.onscroll = function(){
 

  let offset=skills.offsetTop
  let outer=skills.offsetHeight
  let inner=this.innerHeight
let windowScroll=this.pageYOffset

if( windowScroll >(offset + outer - inner)- 300)
{
  let spans=document.querySelectorAll(".skillprogress span")

  spans.forEach((ele)=>{
    ele.style.width = ele.dataset.width
  })
}



if( windowScroll < (offset + outer - inner)-300)
{
  let spans=document.querySelectorAll(".skillprogress span")

  spans.forEach((ele)=>{
    ele.style.width ="0%"
})


}






}
// for galeery

let galery=document.querySelectorAll(".photo img")
let overlay=document.querySelector(".overlay")
let pop=document.querySelector(".pop img")
popdiv=document.querySelector(".pop")
let h=document.querySelector("h3")
galery.forEach((image)=>{

image.addEventListener("click",function(){

overlay.style.display="block"
popdiv.style.display="block"
pop.src = image.src
pop.alt=image.alt

if(pop.alt!==null){
  h.innerText= pop.alt

}else{
h.remove()}
})

})

let button=document.querySelector(".mark small")
console.log(button)

button.onclick=function(){
  popdiv.style.display="none"

  overlay.style.display="none"

}
// start bullets
// away to go location bullet

// let allbullet=document.querySelectorAll(".allbull .bullet")
// allbullet.forEach(element => {
//   element.addEventListener("click",function(e){

// document.querySelector(e.target.dataset.locate).scrollIntoView({
//   behavior: "smooth"
// })


//   })
// });

 let allbullet=document.querySelectorAll(".allbull .bullet")
let links=document.querySelectorAll(".links li a")
function goto(element){
element.forEach((ele)=>{
ele.addEventListener("click",function(e){
  e.preventDefault()
document.querySelector(e.target.dataset.locate).scrollIntoView({
  behavior:"smooth"
})

})
})
}
goto(allbullet)
goto(links)


// //localstorage)



let bullSpan=document.querySelectorAll(".show span")
let nav=document.querySelector(".allbull")

if(localStorage.showBull!==null){

bullSpan.forEach((span)=>{
  span.classList.remove("active")
})

if(localStorage.getItem("showBull")==="block"){
  nav.style.display="block"
document.querySelector(".yah").classList.add("active")

}else{
  nav.style.display="none"
  document.querySelector(".not").classList.add("active")


}

}



bullSpan.forEach((span)=>{
  span.addEventListener("click",function(e){
    handle(e)

if(e.target.dataset.sho==="yess"){

  nav.style.display="block"
localStorage.setItem("showBull","block")

}else{
  nav.style.display="none"
  localStorage.setItem("showBull","none")

}

  })
})



// end bullets
// reset//
let reset=document.querySelector(".reset")
reset.onclick=function(){

localStorage.removeItem("showBull");
localStorage.removeItem("color");
localStorage.removeItem("backOption");
window.location.reload()
reset.style.background="red"
}

// toogle menue
let toggle=document.querySelector(".toggle")
let opendLinks=document.querySelector(".links ")




toggle.onclick=function(e){
e.stopPropagation();


opendLinks.classList.toggle("opened")
toggle.classList.toggle("new")
}



opendLinks.onclick=function(e){
  e.stopPropagation();
  
  }
  


document.addEventListener("click",function(e){


  if(e.target!==toggle && e.target!==opendLinks){

if(opendLinks.classList.contains("opened")){

  opendLinks.classList.remove("opened")
  toggle.classList.toggle("new")

}
  
  }
})

// for the top of page






window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}; 