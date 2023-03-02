let start3 = 1;
let end3 = 6;
let breaker = 2;

for(i = start3; i <= end3; i++){
    console.log(i);
    console.log(`--${breaker}`);
    console.log(`--${breaker+breaker}`);
}

/* Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/