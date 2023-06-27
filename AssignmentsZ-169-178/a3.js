{
  let requester = new XMLHttpRequest();
  requester.open("GET", "a1.json");
  requester.send();

  let mainData,
    updatedData = "";
  requester.onreadystatechange = function () {
    if (this.readyState === 4) {
      mainData = JSON.parse(this.responseText);
      for (let article in mainData) {
        mainData[article].category = "All";
      }
      console.log(mainData);
      updatedData = JSON.stringify(mainData);
      console.log(updatedData);
    }
  };
}
