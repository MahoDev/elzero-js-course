let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if(haystack.includes(needle)){
    console.log("Found");
}
if(haystack.indexOf(needle) !== -1){
    console.log("Found");
}
if(haystack.lastIndexOf(needle) !== -1){
    console.log("Found");
}