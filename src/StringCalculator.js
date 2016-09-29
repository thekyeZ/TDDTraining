function calculator(string){

  var delimiter = "\n"

  // console.log(Number(string));
  if(string.length <= 0) return 0; //if empty, return 0;
  if(Number(string) < 0) throw new Error('negatives not allowed');

  if(string.includes("//")){
    delimiter = (string.split('\n'))[0].slice(-1);
    var numbers = (string.split('\n'))[1].split(delimiter);
  }
  else{
    var numbers = string.split(',');
  }

  var num = new Array();
  for(var i=0; i<numbers.length; i++){
      numbers[i] = numbers[i].split(delimiter);
  }

  for(var i=0; i<numbers.length; i++){
      for(var j=0; j<numbers[i].length; j++){
        num.push(numbers[i][j]);
      }
  }

  if(numbers.length == 1) return Number(numbers[0]);

  // console.log(numbers);
  var result = 0;
  var errorMsg = "";

  for(var i=0; i<num.length; i++){
      if(Number(num[i]) < 0) {
        errorMsg += num[i] + ", ";
      }
      result += Number(num[i]);
  }

  if(errorMsg.length > 0)
  {
    throw new Error('Numbers ' + errorMsg + 'are not allowed');
  }

  return result;
}
