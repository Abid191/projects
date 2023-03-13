// var bela = [85,75];
// var dela = [69,97];

// if(bela > dela){
//     console.log('first bela')
// }
// else{
//     console.log('dela first')
// }


// function numbers(variable){
// //   console.log(variable)
//     var large = variable[0]
//   for( var i=0; i<variable.length; i++){
//     var hei = variable[i]
//     // console.log()
//     if(hei<large){
//        large = hei;
//        console.log(large)
//     }
//   }
//   return "large";
  
// }
// var nums = [120,156,17,8,65,55];
// numbers(nums);


function lowest(numbers){
 return Math.max(...numbers);
}

var numbers = [45, 100, 99, 3, 2, 4];
var minLowest = lowest(numbers);
console.log(minLowest);
