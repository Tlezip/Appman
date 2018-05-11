const threeSum = (nums, target) => {
  // put your code here !!
  let result = []
  let i,j,k
  for(i=0 ; i< nums.length ; i++){
    for(j=i+1 ; j<nums.length ; j++){
      for(k=j+1 ; k < nums.length ; k++){
        if(nums[i]+nums[j]+nums[k] == target){
          result.push([nums[i],nums[j],nums[k]])
        }
      }
    }
  }
  console.log(result)
};

module.exports = { threeSum };
