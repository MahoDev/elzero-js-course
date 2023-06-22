//Note: assignment 6 in elzero site is same as youtube challenge.

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
{
  let re = /(?:https?:\/\/)?(?:www\.)?elzero\.org(?:.+)?/;
  console.log(url1.match(re)[0]); 
  console.log(url2.match(re)[0]); 
  console.log(url3.match(re)[0]); 
  console.log(url4.match(re)[0]); 
  console.log(url5.match(re)[0]);
}