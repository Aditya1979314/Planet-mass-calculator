let button = document.querySelector(".btn");
let st = document.querySelector(".drop-down");
let input = document.querySelector(".input");
let image = document.querySelector(".planet-image");
let weightvalue = document.querySelector(".weight-value"); 

function callback(){
    // code to get the image of the planet 
    let text = st.value+".png";
    let newsrc = "images/"+text;
    image.src = newsrc;
    // Code to get the value of the weight on a particular planet 
    let weight = 0;
    let EarthWeight = 9.8 * input.value;
    if(st.value == "Earth"){
    weightvalue.innerHTML = input.value+" kg";
    }
    else if(st.value == "Mars"){
    let r = (3.7 * input.value)/EarthWeight;
    let weight = Math.round(r*input.value);
    weightvalue.innerHTML = weight+" kg";
    }
    else if(st.value == "Jupiter"){
    let r = (24.5 * input.value)/EarthWeight;
    let weight = Math.round(r*input.value);
    weightvalue.innerHTML = weight+" kg";
    }
    else if(st.value == "Moon"){
   let r = (1.625 * input.value)/EarthWeight;
   let weight = Math.round(r*input.value);
    weightvalue.innerHTML = weight+" kg";
    }
    else if(st.value == "Mercury"){
    let r = (3.7 * input.value)/EarthWeight;
   let weight = Math.round(r*input.value);
    weightvalue.innerHTML = weight+" kg";
    }
    else if(st.value == "Venus"){
   let r = (8.87 * input.value)/EarthWeight;
    let weight = Math.round(r*input.value);
    weightvalue.innerHTML = weight+" kg";
    }
    else if(st.value == "Neptune"){
  let r = (11.15 * input.value)/EarthWeight;
  let weight = Math.round(r*input.value);
    weightvalue.innerHTML = weight+" kg";
    }
    else if(st.value == "Uranus"){
 let r = (8.69 * input.value)/EarthWeight;
   let weight = Math.round(r*input.value);
    weightvalue.innerHTML = weight+" kg";
    }
    else if(st.value == "Pluto"){
 let r = (0.62 * input.value)/EarthWeight;
  let weight = Math.round(r*input.value);
    weightvalue.innerHTML = weight+" kg";
    }
    else if(st.value == "Saturn"){
    let r = (8.96 * input.value)/EarthWeight;
    let weight = Math.round(r*input.value);
    weightvalue.innerHTML = weight+" kg";
    }
}

button.addEventListener('click',callback);
