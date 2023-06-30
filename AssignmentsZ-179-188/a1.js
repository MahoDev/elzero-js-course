let promise = new Promise(function (resolve, reject) {
  let requester = new XMLHttpRequest();
  requester.onload = function () {
    if (this.status === 200) {
      let articles = JSON.parse(this.responseText);
      articles.length = 5;
      resolve(articles);
    } else {
      reject(new Error("request not successful"));
    }
  };
  requester.open("GET", "articles.json");
  requester.send();
});

promise.then((resolvedValue) => {
  for (let i = 0; i < resolvedValue.length; i++) {
    //can't use document.write or it will mess up the page loading,
    //since it is run after the page loads and replaces the script elements.
    const articleDiv = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    title.textContent = resolvedValue[i].title;
    description.textContent = resolvedValue[i].description;
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    document.body.appendChild(articleDiv);
  }
});
