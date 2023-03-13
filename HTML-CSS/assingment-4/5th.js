function gesmsToDiamond(input1,input2,input3){

    var first = input1 * 21;
    var second = input2 * 32 ;
    var third = input3 * 43 ;

    var total = first+second+third
    console.log(total)
    var subtraction = total - 2000;
    return subtraction
}


subtraction = gesmsToDiamond(10,20,30)
console.log(subtraction)

