const minStep = input => {
  // put your code here !!
  while(input != 1){
    if(input % 2 == 0 && input != 0){
      input = input/2
    } else {
      if(input <= 0){
        input = input+1
      } else {
        input = input-1
      }
    }
  }
  return input;
};

module.exports = { minStep };
