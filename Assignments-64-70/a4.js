function specialMix(...data) {
    let sum = 0;

    function checkValues(data){
        for(const i in data){
            if (Number.isInteger(data[i])){
                return "Numbers";
            }
            else if (Number.isInteger(+data[i][0])){
                return "Strings With Numbers"
            }
        }
        return "Strings";

    }
    if (checkValues(data) == "Numbers"){
        for(const i in data){
            if (Number.isInteger(data[i])){
                sum += data[i];
            }
        }
        return sum;
    }
    else if (checkValues(data) == "Strings With Numbers"){
        for(const i in data){
            if (Number.isInteger(+data[i][0])){
                sum += + data[i].slice(0,2);
            }
        }
        return sum;
    }
    else{
        return "All is Strings";
    }
 }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings