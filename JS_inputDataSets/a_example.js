let slides;

let horizon = 'H';
let vertic = 'V';

let photos_H = [];
let photos_V = [];
let photos = [];

//We can only have hundred up to 100 tags
//for the photo

let Htags = [];
let Htags_num = [];

let Vtags_1_num = [];

let Vtags_1 = [];
let Vtags_2 = [];

function shuffleArr(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}
//how many times i want this to iterate
function example_a(index){
   
    for(let i = 0; i < index; i++){  

        let text_1 = "";
        let text_2 = "";
        let text_3 = ""; 
        let possible_1 = "abcde2dfg";
        let possible_2 = "bcr3saop"; 

        for (let j = 0; j < 7; j++){
            text_1 += possible_1.charAt(Math.floor(Math.random() * possible_1.length));
            text_2 += possible_2.charAt(Math.floor(Math.random()* possible_2.length));
        }
        console.log(text_1)

        Htags_num[i] = text_1;  
        Vtags_1_num[i] = text_2;        
    }
    for(let i = 0; i < index; i++){        
        photos_H[i] = horizon + " " + Htags_num.length + Htags_num[i]; 
        photos_V[i] = vertic + " " + Vtags_1_num.length + Vtags_1_num[i];
    }
    photos.length = photos_V.length + photos_H.length;
    console.log(photos.length)
    
    for(let i = 0; i < index; i++){
        console.log(photos_H[i] + photos_V[i]);
    }
}

// function makeid() {
//     var text = "";
//     var possible = "ABCDEFG";
  
//     for (var i = 0; i < 5; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
  
//     return text;
//   }

example_a(3);
