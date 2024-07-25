let mobile=document.querySelector('.header .mobile');
let ul=document.querySelector('.navBox ul');
mobile.addEventListener('click',function (){
    document.querySelector('.navBox').style.display='block';
    ul.classList='animate';
    ul.style.right='0';
})