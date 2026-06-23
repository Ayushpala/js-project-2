function showProducts(){
    let products = [
        {
            name : "Protein Powder",
            price : 2500,
            category : "Supplement",
            image : "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500"
        },

        {
            name : "Dumbbell",
            price : 1200,
            category : "Equipment",
            image : "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=500"
        },

        {
            name : "Creatine",
            price : 900,
            category : "Supplement",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcIYHe3FvBQC7UHe8DGalzaNhdkiQzcZqTQ&s"
        },

        {
            name : "Gym Gloves",
            price : 500,
            category : "Accessories",
            image : "https://m.media-amazon.com/images/I/41hFWFFNE5L._SY300_SX300_QL70_FMwebp_.jpg"
        }
    ];


    let output = document.getElementById("output");

    output.innerHTML = "";

    // for - of loop

    for(let product of products){
        // if - else

            if(product.price > 1000){
                output.innerHTML += ` 
                    <div class="card expensive">
                        <img src="${product.image}" alt="${product.name}">

                        <h3>${product.name}</h3>

                        <p><strong>Price : </strong>₹${product.price}</p>

                        <p><strong>Category : </strong>${product.category}</p>

                        <span class="red tag">Expensive Product</span>
                    </div> `;
            } 

            else{
                output.innerHTML += ` 
                    <div class="card budget">
                        <img src="${product.image}" alt="${product.name}">

                        <h3>${product.name}</h3>

                        <p><strong>Price : </strong>₹${product.price}</p>

                        <p><strong>Category : </strong>${product.category}</p>

                        <span class="green tag">Budget Product</span>
                    </div> `;
            }
    }
}