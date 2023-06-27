{
  let requester = new XMLHttpRequest();
  requester.open("GET", "a1.json");
  requester.send();

  requester.onreadystatechange = function () {
    if (this.readyState === 4) {
      let articles = JSON.parse(this.responseText);

      let dataDiv = document.createElement("div");
      dataDiv.setAttribute("id", "data");
      for (let article in articles) {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        dataDiv.appendChild(div);
        h2.innerText = `${articles[article].title}`;
        p1.innerText = `${articles[article].body}`;
        p2.innerText = `Author: ${articles[article].author}`;
        p3.innerText = `Category: ${articles[article].category}`;
      }
      document.body.appendChild(dataDiv);
    }
  };
}
