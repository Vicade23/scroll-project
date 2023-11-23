const menuButton = document.getElementById('menu-button');
const myLists = document.getElementById('myLists');
const navigetorss = document.getElementById('nav');
const backgroungImages = document.getElementById('bg-image');
const gradientContainer = document.getElementById('lgt-green');
const imgContainer = document.getElementById('img-container');
const links = document.querySelectorAll('.links');
links.forEach((myLink)=>{
    myLink.addEventListener('click',()=>{
        menuButton.click()
    })
})
menuButton.addEventListener('click', ()=>{
    if (myLists.classList.contains('lists')) {
        gradientContainer.classList.remove('lgt-green2')
        backgroungImages.classList.remove('bg-image-style2')
        imgContainer.classList.remove('img-container2')
        myLists.classList.remove('lists')
    }
    else {
        gradientContainer.classList.add('lgt-green2')
        backgroungImages.classList.add('bg-image-style2')
        imgContainer.classList.add('img-container2')
        myLists.classList.add('lists')
    }
});
window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 87) {
        navigetorss.classList.add('nav2');
    }
    else {
        navigetorss.classList.remove('nav2');
    }
})