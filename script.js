// Simulated product data stored as an array of objects
const productDatabase = [
    {
        name: "Iphone",
        price: "$10",
        website: "https://www.triveniworld.com/en-kw/products/apple-iphone-xr-black-128-gb"
    },
    {
        name: "Iphone",
        price: "$20",
        website: "https://www.wizekart.com/communications/7799-apple-iphone-xr-black-64-gb.html?srsltid=AfmBOoo_v4ZnktlvKJRoanWMHkNcfmZ3uspA0ud2EkXS-3yp0MmA4rxGLik"
    },
    {
        name: "Iphone",
        price: "$15",
        website: "https://www.flipkart.com/mobiles/apple~brand/pr?sid=tyy,4io"
    },
    {
        name: "Redmi",
        price: "$15",
        website: "https://www.flipkart.com/mobiles/mi~brand/pr?sid=tyy,4io"
    },
    {
        name: "Redmi",
        price: "$10",
        website: "https://www.flipkart.com/redmi-10-power-power-black-128-gb/p/itm97f5d2ec83588?pid=MOBGHDXFYKKZFZGV&lid=LSTMOBGHDXFYKKZFZGVCWAYVV&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=bb3fcf43-8d70-45b0-9088-dc782fe5c46f.MOBGHDXFYKKZFZGV.SEARCH&ppt=browse&ppn=browse&ssid=vg9k9myeww0000001710662518248"
    }
];

async function search() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = "<p>Loading...</p>";

    // Filter products based on search term
    const filteredProducts = productDatabase.filter(product => product.name.toLowerCase().includes(searchTerm));

    // Clear previous results
    resultsContainer.innerHTML = "";

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            resultsContainer.innerHTML += `
                <div class="product">
                    <h3>${product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Website: <a href="${product.website}">${product.website}</a></p>
                </div>
            `;
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
}
