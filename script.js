darkmode = document.getElementById('dark');
lightmode = document.getElementById('light');
body = document.querySelector('body');
navbar = document.getElementsByTagName('nav');
darkmode.addEventListener('click',()=>{
    console.log('dark');
    body.classList.add("dark");
    body.classList.remove("light");
    darkmode.style.display = "none";
    lightmode.style.display = "block";
});
lightmode.addEventListener('click',()=>{
    console.log('light');
    body.classList.add("light");
    body.classList.remove("dark");
    lightmode.style.display = "none";
    darkmode.style.display = "block";
});
menu = document.getElementById('menu');
list = document.getElementById('mobile');
menu.addEventListener('click',()=>{
    if(list.style.display==="block"){
     list.style.display = "none";   
    } else {
        list.style.display = "block";
    } 
});