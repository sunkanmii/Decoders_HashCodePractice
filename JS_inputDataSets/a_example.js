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

// function shuffleArr(array){
    //     var currentIndex = array.length, temporaryValue, randomIndex;
    //     while (0 !== currentIndex) {
        //       randomIndex = Math.floor(Math.random() * currentIndex);
        //       currentIndex -= 1;  
        //       temporaryValue = array[currentIndex];
        //       array[currentIndex] = array[randomIndex];
        //       array[randomIndex] = temporaryValue;
        //     }
//     return array;
// }
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randString(text_1, randInd){
    let possible_1 = "abcdeodfg";        
    // let possible_2 = "bdhatikl";
    
    for (let j = 0; j < randInd; j++){
        text_1 += possible_1.charAt(getRandInt(0, possible_1.length));
    }
    // for(let j = 0; j < 3; j++){
    //     text_2 += possible_2.charAt(getRandInt(0, possible_2.length));
    //     text_2 = "";
    // }
    return text_1;
}

//how many times i want this to iterate

function example_a(index){

    for(let i = 0; i < index; i++){  
       
        let Htag_randomIndex = getRandInt(1, 4); 
        let Vtag_randomIndex = getRandInt(1, 4);     
        
        Htags_num[i] = new Array(Htag_randomIndex);  
        Vtags_1_num[i] = new Array(Vtag_randomIndex); 
        
        for(let j = 0; j < Htag_randomIndex; j++){
            Htags_num[i][j] = randString("", Htag_randomIndex);
        }
        for(let j = 0; j < index; j++){
            Vtags_1_num[i][j] = randString("", Vtag_randomIndex);
        }
        for(let j = 0; j < Htag_randomIndex; j++){     
            photos_H[i] = horizon + " " + Htags_num[i].length + " " + Htags_num[i][1]; 
        }
        for(let j = 0; j < Vtag_randomIndex; j++){     
            photos_V[i] = vertic + " " + Vtags_1_num[i].length + " " + Vtags_1_num[i][1];
        }
        console.log(photos_H[i] + photos_V[i]);
    }
    
    photos.length = photos_V.length + photos_H.length;
    console.log(photos.length)
}

// function makeid() {
//     var text = "";
//     var possible = "ABCDEFG";
  
//     for (var i = 0; i < 5; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
  
//     return text;
//   }


example_a(3);
