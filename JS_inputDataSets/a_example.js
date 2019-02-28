let slides;

let horizon = 'H';
let vertic = 'V';

let photos_H = [];
let photos_V = [];
let photos = [];

//We can only have hundred up to 100 tags
//for the photo

let Htags = [
    ['tag1', 'tag2', 'tag3']
];
let Htags_num = [];
let Vtags_1 = [
    ['tag1', 'tag2', 'tag3']
];
let Vtags_2 = [
    ['tag4', 'tag3', 'tag5']
];

let mini_num = 0;

function shuffleArr(array){
    for(let i = array.length-1; i> 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[0][i];
        array[0][i] = array[0][i];
        array[0][j] = temp;
     }
}
for(let i = 0; i < 4; i++){
    Htags_num[i] = shuffleArr(Htags); 
    photos[i] = horizon + Htags_num[i].length + Htags_num[i]; 
}


