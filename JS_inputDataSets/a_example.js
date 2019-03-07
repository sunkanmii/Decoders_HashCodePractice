let slides;

let horizon = 'H';
let vertic = 'V';

let photos_H = 0;
let photos_V = 0;
let photos = [];

let Htags_num = [];
let Vtags_num = [];

let fs = require("fs");

//If you need to access the file directly...not sure
//if this a practised method
// let str1 = fs.readFile('../Data_sets/a_example.txt', "utf-8", function(err, buf){
//     console.log(buf.toString());
// });
let i = 0;

let path = require("path");
let path1 = path.join(__dirname, '..', 'Data_sets', 'a_example.txt'); 
let str1 = fs.readFileSync(path1, 'utf8');

console.log(str1)

let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('../Data_sets/a_example.txt')
});
lineReader.on('line', function (line) {
    if(isNaN(parseInt(line))){
        console.log('Line from file:', line);
        for(; i < slides; ){
            photos[i] = line.split(" ");
            console.log(photos[i]);
            i++;
            break;
        }
        if(i === 4){
        for(j = 0; j < slides; j++){
            console.log(photos[j]);
    }
    }
}
    else{
        slides = parseInt(line);
        console.log(slides);
    }

    });

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
// // }
// function getRandInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function randString(text_1, strNo){
//     let possible_1 = "abcdeodfg";        
    
//     for (let j = 0; j < strNo; j++){
//         text_1 += possible_1.charAt(getRandInt(0, possible_1.length));
//     }
//     return text_1;
// }

// //how many times i want this to iterate

// function example_a(index){
//     let i;
//     for(i = 0; i < index; i++){  
        
//         let Htag_randomIndex = getRandInt(2, 8);
//         let Htag_strLen = getRandInt(2, 4);
//         let Vtag_randomIndex = getRandInt(2, 8);
//         let Vtag_strLen = getRandInt(2, 4);     
        
//         Htags_num[i] = new Array(Htag_randomIndex);  
//         Vtags_1_num[i] = new Array(Vtag_randomIndex); 
//         photos_H[i] = new Array(Htag_randomIndex);
//         photos_V[i] = new Array(Vtag_randomIndex);
        
//         for(let j = 0; j < Htag_randomIndex; j++){
//             Htags_num[i][j] = randString("", Htag_strLen);
//         }
//         for(let j = 0; j < Vtag_randomIndex; j++){
//             Vtags_1_num[i][j] = randString("", Vtag_strLen);
//         }
//         for(let j = 0; j < Htag_randomIndex; j++){     
//             photos_H[i][1] = horizon + " " + Htags_num[i].length + " " + Htags_num[i].join(" "); 
//         }
//         for(let j = 0; j < Vtag_randomIndex; j++){     
//             photos_V[i][1] = vertic + " " + Vtags_1_num[i].length + " " + Vtags_1_num[i].join(" ");
//         }
//         photos.length = photos_V.length + photos_H.length;   
//         if(i === index - 1){
//             console.log(photos.length);
//             let k;
//             for(k = 0; k < index; k++){
                
//                 let Htag_randomIndex = getRandInt(2, 8);
//                 let Htag_strLen = getRandInt(2, 4);
//                 let Vtag_randomIndex = getRandInt(2, 8);
//                 let Vtag_strLen = getRandInt(2, 4);     
//                 let output = "";
//                 Htags_num[i] = new Array(Htag_randomIndex);  
//                 Vtags_1_num[i] = new Array(Vtag_randomIndex); 
//                 photos_H[i] = new Array(Htag_randomIndex);
//                 photos_V[i] = new Array(Vtag_randomIndex);
//                 for(let j = 0; j < Htag_randomIndex; j++){
//                     Htags_num[i][j] = randString("", Htag_strLen);
//                 }
//                 for(let j = 0; j < Vtag_randomIndex; j++){
//                     Vtags_1_num[i][j] = randString("", Vtag_strLen);
//                 }
//                 for(let j = 0; j < Htag_randomIndex; j++){     
//                     photos_H[i][1] = horizon + " " + Htags_num[i].length + " " + Htags_num[i].join(" "); 
//                 }
//                 for(let j = 0; j < Vtag_randomIndex; j++){     
//                     photos_V[i][1] = vertic + " " + Vtags_1_num[i].length + " " + Vtags_1_num[i].join(" ");
//                 }
//                 while(k !== index - 1){
//                     output_1 = getRandInt(1, 3);
//                     output_2 = getRandInt(1, 3);
//                     if(output_1 === 1 && output_2 === 1){
//                         output += photos_H[i][1] + photos_H[i][1];
//                     }
//                     else if(output_1 === 1 && output_2 === 2){
//                         output += photos_H[i][1] + photos_V[i][1];
//                     }
//                     else if(output_1 === 2 && output_2 === 1){
//                         output += photos_V[i][1] + photos_H[i][1];
//                     }
//                     else if(output_1 === 2 && output_2 === 2){
//                         output += photos_V[i][1] + photos_V[i][1];
//                     }
//                     else{
//                         output += photos_H[i][1] + photos_V[i][1];
//                     }
//                     if(output.length === 156){
//                         output += "\n"
//                     }
//                 }
//             }
//         }
//     }
// }
// // function makeid() {
//     //     var text = "";
//     //     var possible = "ABCDEFG";
    
//     //     for (var i = 0; i < 5; i++)
// //       text += possible.charAt(Math.floor(Math.random() * possible.length));
  
// //     return text;
// //   }

// example_a(4);
