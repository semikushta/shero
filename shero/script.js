document.addEventListener("DOMContentLoaded", function () {
    // Handle dynamic loading of new products
    const newProducts = [
        {
            img: "images/color1.png",
            price: "$449.99",
            name: "Rok Quill Rotary Tattoo Machine",
            color: "Copper"
        },
        {
            img: "images/color2.png",
            price: "$449.99",
            name: "Rok Quill Rotary Tattoo Machine",
            color: "Blue"
        },
        {
            img: "images/color3.png",
            price: "$1,199.99",
            name: "Rok Quill Rotary Tattoo Machine",
            color: ""
        },
        {
            img: "images/color4.png",
            price: "$1,199.99",
            name: "Rok Quill Rotary Tattoo Machine",
            color: ""
        },
        {
            img: "images/color5.png",
            price: "$1,199.99",
            name: "Rok Quill Rotary Tattoo Machine",
            color: ""
        }
    ];

    const carouselContainer = document.querySelector(".carousel-container");

    newProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("carousel-slide");
        productElement.innerHTML = `
            <div class="product-info">
                <img src="${product.img}" alt="${product.name}" class="new-product-img">
                <div class="description">
                    <p class="p-color">${product.price}</p>
                    <p>${product.name}</p>
                    <p>${product.color}</p>
                </div>
            </div>
        `;
        carouselContainer.appendChild(productElement);
    });

    // Handle navbar dropdowns
    const accountLink = document.querySelector('.right-links a:nth-child(2)');
    const cartLink = document.querySelector('.right-links a:nth-child(3)');

    accountLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Account dropdown clicked');
    });

    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Cart dropdown clicked');
    });

    // Handle search functionality
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');

    searchIcon.addEventListener('click', () => {
        alert(`Searching for: ${searchInput.value}`);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`Searching for: ${searchInput.value}`);
        }
    });

    // Carousel controls
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Initial display of the first slide
    showSlide(currentIndex);

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Optionally, you can add event listeners for manual controls
    document.querySelector('.carousel-container').addEventListener('click', nextSlide);
});
