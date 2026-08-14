(function(){
  var header=document.getElementById("siteHeader");
  var toggle=document.getElementById("navToggle");
  var nav=document.getElementById("siteNav");
  function onScroll(){if(!header)return;if(window.scrollY>12)header.classList.add("is-solid");else header.classList.remove("is-solid");}
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
  if(toggle&&nav){
    toggle.addEventListener("click",function(){var open=document.body.classList.toggle("nav-open");toggle.setAttribute("aria-expanded",open?"true":"false");});
    nav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){document.body.classList.remove("nav-open");toggle.setAttribute("aria-expanded","false");});});
  }
})();