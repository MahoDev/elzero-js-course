let fetchPromise = fetch("articles.json");

fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((responseBody) => {
    //seperate from a1.js elements.
    let seperator = document.createElement("hr");
    document.body.appendChild(seperator);
    for (let i = 0; i < 5; i++) {
      const articleDiv = document.createElement("div");
      const title = document.createElement("h3");
      const description = document.createElement("p");
      title.textContent = responseBody[i].title;
      description.textContent = responseBody[i].description;
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      document.body.appendChild(articleDiv);
    }
  });
