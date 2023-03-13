var findingBadData = [10,-7,-3,8,4,-2,-1];
   var data = 0;
for( var i=0; i<findingBadData.length;i++){
    if(findingBadData[i]>0){
        data++;
       
    }
}
console.log(data);