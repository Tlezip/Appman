const maxFloor = input => {
  // put your code here !!
  let allbrick = 0
  let floor = 1
  for(floor=1 ; allbrick<input ; floor++){
    allbrick += (floor*2-1)
  }
  if(allbrick > input){
    floor -= 1
  }
  console.log(floor)
};

module.exports = { maxFloor };
