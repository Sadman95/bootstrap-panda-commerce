// document.getElementById('backpack').style.color  = "red";

// section header color change:
let sectionHeading = document.getElementsByClassName('section-header');
for(let i=0; i<sectionHeading.length; i++){
    sectionHeading[i].style.color = 'tomato';
}


// cards border radius change:
let cards = document.getElementsByClassName('card');
for(let i=0; i<cards.length; i++){
    cards[i].style.borderRadius = '30px';
}


// buy now button hide:
let btnBuy = document.getElementsByClassName('buy-btn');

    for (const hideBtn of btnBuy) {
        hideBtn.addEventListener('click', function(){
        hideBtn.style.display = 'none';
        // or
        // hideBtn.parentNode.removeChild(hideBtn);
    })
}


// first shoe image change:
const shoe1 = document.getElementById('first-shoe');
let firstChild = shoe1.firstElementChild;
shoe1.addEventListener('mouseenter', function(){
    firstChild.setAttribute('src', 'images/shoes/shoe-2.png');
})
shoe1.addEventListener('mouseleave', function(){
    firstChild.setAttribute('src', 'images/shoes/shoe-1.png');
})



// backpaack:
const getBackpack = document.getElementById('backpack');
getBackpack.style.width = '180px';
getBackpack.onmouseover = function(){
    getBackpack.style.backgroundColor = 'lightBlue';
    getBackpack.style.borderRadius = '8px';
}

// contact part:
const emailField = document.getElementById('floatingInput');
const submitBtn = document.getElementById('submit');
emailField.addEventListener('keyup', function(event){
    if(event.target.value == 'gmail.com'){
        submitBtn.removeAttribute('disabled');
    }
    else{
        submitBtn.setAttribute('disabled', true);
    }
})

// contact bg change on double click:
const subscribeDiv = document.getElementById('subscribe');
subscribeDiv.style.backgroundColor = 'lightGrey';
subscribeDiv.addEventListener('dblclick', function(){
    subscribeDiv.style.backgroundColor = 'orange';
})