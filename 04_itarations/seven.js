let twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                let result=[i,j]
                console.log(result)
            }
            
        }
    }
}

const arr = [2,7,11,15]
twoSum(arr,9)