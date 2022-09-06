let button = document.querySelector(".btn");
let st = document.querySelector(".drop-down");
let input = document.querySelector(".input");
let image = document.querySelector(".planet-image");
let weightvalue = document.querySelector(".weight-value"); 

function acc( M , r){
const G = 6.67 * Math.pow(10,-11);
let result = (G*M)/r*r;
return result;
}

function callback(){
    // code to get the image of the planet 
    let text = st.value+".png";
    let newsrc = "images/"+text;
    image.src = newsrc;
    // Code to get the value of the weight on a particular planet 
    let weight = 0;
    if(st.value == "Earth"){
    weight = 9.8 * input.value;
    weightvalue.innerHTML = weight+" Newton";
    }
    else if(st.value == "Mars"){
    weight = 3.7 * input.value;
    weightvalue.innerHTML = weight+" Newton";
    }
    else if(st.value == "Jupiter"){
    weight = 24.58 * input.value;
    weightvalue.innerHTML = weight+" Newton";
    }
    else if(st.value == "Moon"){
    weight = 1.625 * input.value;
    weightvalue.innerHTML = weight+" Newton";
    }
    else if(st.value == "Mercury"){
    weight = 3.7 * input.value;
    weightvalue.innerHTML = weight+" Newton";
    }
    else if(st.value == "Venus"){
    weight = 8.87 * input.value;
    weightvalue.innerHTML = weight+" Newton";
    }
    else if(st.value == "Neptune"){
    weight = 11.15 * input.value;
    weightvalue.innerHTML = weight+" Newton";
    }
    else if(st.value == "Uranus"){
    weight = 8.69 * input.value;
    weightvalue.innerHTML = weight+" Newton";
    }
    else if(st.value == "Pluto"){
    weight = 0.62 * input.value;
    weightvalue.innerHTML = weight+" Newton";
    }
    else if(st.value == "Saturn"){
    weight = 8.96 * input.value;
    weightvalue.innerHTML = weight+" Newton";
    }
}

button.addEventListener('click',callback);