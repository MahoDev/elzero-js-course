let requester = new XMLHttpRequest();

requester.open("GET", "a1.json");
requester.send();

requester.onreadystatechange = function () {
  if (this.readyState === 4 && this.response !== "") {
    console.log(requester.responseText);
  }
  console.log("Data Loaded");
};
