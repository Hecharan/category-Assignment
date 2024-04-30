function showTab(tab, category) {
    // Remove background color from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.style.backgroundColor = '';
      tab.style.color = '';
    });

    // Highlight selected tab
    tab.style.backgroundColor = 'black';
    tab.style.color = 'white';

    // Fetch and display products
    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
      .then(response => response.json())
      .then(data => {
        const categoryData = data.categories.find(cat => cat.category_name === category);
        if (!categoryData) {
          console.error('Category not found:', category);
          return;
        }

        const products = categoryData.category_products;
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';
        products.forEach(product => {
          const card = createProductCard(product);
          productContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching product data:', error));
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    if (product.badge_text) {
      const badge = document.createElement('span');
      badge.classList.add('badge');
      badge.textContent = product.badge_text;
      card.appendChild(badge);
    }

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title;
    card.appendChild(image);

    const titleVendorContainer = document.createElement('div');
    titleVendorContainer.classList.add('title-vendor-container');

    const title = document.createElement('h3');
    title.textContent = product.title;
    title.style.marginRight = '10px'; // Add margin between title and vendor name
    titleVendorContainer.appendChild(title);

    const vendor = document.createElement('p');
    vendor.textContent = '.' + product.vendor;
    titleVendorContainer.appendChild(vendor);

    card.appendChild(titleVendorContainer);

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');

    const decimalPrice = parseFloat(product.price).toFixed(2);

    const price = document.createElement('p');
    price.innerHTML = '<strong>Rs ' + decimalPrice + '</strong>';
    price.style.marginRight = '10px'; // Add margin after the price
    priceContainer.appendChild(price);

    // Compare at price with line through it
    if (product.compare_at_price) {
        const decimalCompareAtPrice = parseFloat(product.compare_at_price).toFixed(2);
        const compareAtPrice = document.createElement('p');
        const del = document.createElement('del');
        del.textContent = 'Rs ' + decimalCompareAtPrice;
        compareAtPrice.appendChild(del);
        compareAtPrice.style.marginLeft = '10px'; // Add margin before the compare at price
        priceContainer.appendChild(compareAtPrice);
    }

    // Calculate discount percentage
    if (product.compare_at_price && product.price < product.compare_at_price) {
        const discountPercentage = ((product.compare_at_price - product.price) / product.compare_at_price * 100).toFixed(2);
        const discount = document.createElement('p');
        discount.textContent = discountPercentage + '% off';
        discount.style.color = 'red';
        priceContainer.appendChild(discount);
    }

    card.appendChild(priceContainer);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.classList.add('add-to-cart-btn');
    card.appendChild(addToCartBtn);

    return card;
}

// Show default tab on page load
showTab(document.querySelector('.tab'), 'Men');
