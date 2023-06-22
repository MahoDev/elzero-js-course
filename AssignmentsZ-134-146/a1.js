let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
//Made use of non-capturing groups (?:)
let pattern = /(?:\w+:?){8}/
console.log(ip.match(pattern));
