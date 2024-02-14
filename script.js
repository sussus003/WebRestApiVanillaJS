const dataContainer = document.getElementById("data-container");

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post) => {
      /* console.log(post); */
      const postElement = document.createElement("p");
      postElement.textContent = `
                Post ID : ${post.id} - Title : ${post.title}, Body: ${post.body}
            `;
            dataContainer.appendChild(postElement);
    });
  })
  .catch((error) => {
    console.log("Error When fetching",error);
  })
