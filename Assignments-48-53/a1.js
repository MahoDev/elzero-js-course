let start1 = 10;
let end1 = 100;
let exclude1 = 40;

let i = start1

for(; start1 <= end1 ; start1+= i){
    if(start1 != exclude1){
        console.log(start1);
    }
}

/*Output
10
20
30
50
60
70
80
90
100 */