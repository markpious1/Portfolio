
//nav variables
const navMenuIcon = document.getElementById('open-menu');
const closeMenuIcon = document.getElementById('close-menu');
const navitems = document.querySelector('.nav-items');

//skills variables
const head = document.querySelectorAll('.head');
const tools = document.querySelectorAll('.tools');



// NAVIGATION MENU
const open = ()=> {
    navitems.style.right = "0";
    closeMenuIcon.style.display = "block";
    navMenuIcon.style.display = "none";
    closeMenuIcon.style.color = "#fff";
}
const close = ()=> {
    navitems.style.right = "-100%";
    closeMenuIcon.style.color = "#fff";
    navMenuIcon.style.display = "block";
    closeMenu.style.display = "none";
}

navMenuIcon.addEventListener('click',open);
closeMenuIcon.addEventListener('click', close);


//clicking on each nav-items(ul li 'a') close the entire navbar
const eachNavItemClick = document.querySelectorAll('ul.nav-items li a');
eachNavItemClick.forEach(item=> {
    item.addEventListener('click',close)
});


// SKILLS SECTION

head[0].addEventListener('click',()=> {
    tools[0].classList.toggle('active');   
})

head[1].addEventListener('click',()=> {
    tools[1].classList.toggle('active');   
})

head[2].addEventListener('click',()=> {
    tools[2].classList.toggle('active');   
})

head[3].addEventListener('click',()=> {
    tools[3].classList.toggle('active');   
})

const overlays = document.querySelector('.overlays');
const disappear = document.querySelector('.disappear').addEventListener('click',()=> {
    overlays.style.left = "-100%";
})



