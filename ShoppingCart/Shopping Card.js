let articles = Array.from(document.getElementsByClassName("sub-container"));
let crossed = Array.from(document.getElementsByClassName("cross"))
let favorites = Array.from(document.getElementsByClassName("heart"))
let quantity = Array.from(document.getElementsByClassName("quantity"))
let plusBtn = Array.from(document.getElementsByClassName("plus"))
let minusBtn = Array.from(document.getElementsByClassName("minus"))
let prices = Array.from(document.getElementsByClassName("prix"))
let total = document.getElementById("total");

// total des produits

function calculateSum(){
    let sum = 0
    for(let i=0 ; i<articles.length ; i++){
        sum+=  parseInt(quantity[i].innerHTML)*parseInt(prices[i].innerHTML)
    }
    return   total.innerHTML=sum
}

// bouton de croix

for(let i=0;i<crossed.length;i++){
    crossed[i].addEventListener("click",function (event){ 
        articles[i].style.display="none"
        quantity[i].innerHTML = 0
        calculateSum()
    })
// incon de coeur

    favorites[i].addEventListener("click",function (event){ 
        if (favorites[i].style.fill !== "red"){
            favorites[i].style.fill = "red"
        }
        else{favorites[i].style.fill = "" }
        
    })
    // boutton de (+)

    plusBtn[i].addEventListener("click" , function (event){

        quantity[i].innerHTML ++ ;
        calculateSum()
return quantity[i].innerHTML;
    })

    // boutton de moins

minusBtn[i].addEventListener("click", function(event){

   if(quantity[i].innerHTML>0)

    quantity[i].innerHTML -- ;
    calculateSum()

    return quantity[i].innerHTML ;


    })
}

    