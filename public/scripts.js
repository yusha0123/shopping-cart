const fetchProducts = () => {
  axios.get("/products").then((response) => {
    const data = response.data;
    data.products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card", "mb-3");

      card.innerHTML = `
      <img src="${product.imageUrl}" class="card-img-top" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">Rs: ${product.price}</p>
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-primary">Details</button>
           <button type="button" class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
        </div>
      </div>
    `;
      document.getElementById("product-container").appendChild(card);
    });
  });
};

document.addEventListener("DOMContentLoaded", fetchProducts);

const deleteProduct = (id) => {
  axios
    .delete(`/products/${id}`)
    .then((result) => {
      console.log(result);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};
