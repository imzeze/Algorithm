var jump = function(nums) {
let curr = -1;
let next = 0;
let answer = 0;

    for(let i=0; next<nums.length-1; i++) {
        if(i > curr) {
            answer++;
            curr = next;
        }
        next = Math.max(next, nums[i] + i);
    }

    return answer;

};
