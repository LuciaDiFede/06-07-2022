

(function () {
  

  const newProducts = Array.from(Array(12), (_, index) => {
    return {
      id:1,
      name: `TV - ${index}`,
      price: 40 + index 
    };
  });


  const shop = {

    page: 0,
    perPage: 4,
    products: [], 

    setPage(newPage){
      this.page = newPage;
      this.renderHTML();
    },

    getProducts() {
      const startIndex = this.page * this.perPage;
      const endIndex = startIndex + this.perPage;
      const slicedProducts = this.products.slice(startIndex, endIndex);
      return slicedProducts;
    },

    setProducts(products){
      this.products = products;
      this.renderHTML();
    },

    renderHTML() {
      
      const productsHTML = this.getProducts()
      .map((product) => {
      const { name, price } = product;
      return `<li>${name} - ${price}€</li>`;
       })
      
      .join("");
      document.querySelector(".shop").innerHTML = `
      <h2>Offerte lampo</h2>
      <div>Page: ${this.page}</div>
      <div>Showing: ${this.getProducts().length}/${this.products.length}</div>
      <ul>${productsHTML}</ul>
      `;
    }
  };

  shop.setProducts(newProducts);

  const $buttons = document.querySelectorAll('.pagination button');

  $buttons.forEach(($button) => {
    console.log($button);
  

  $button.addEventListener("click", function () {
    const newPage = Number(this.innerText) -1;
    shop.setPage(newPage);

   }); 
  });
}) ();

