const categoryFilter = document.getElementById("categoryFilter");
const yearFilter = document.getElementById("yearFilter");
const cards = document.querySelectorAll(".achievement-square");

function filterCards() {
    const category = categoryFilter.value;
    const year = yearFilter.value;

    cards.forEach(card => {
        const categories = card.dataset.category.split(",");
        const years = card.dataset.year.split(",");

        const categoryMatch = category === "all" || categories.includes(category);
        const yearMatch = year === "all" || years.includes(year);

        if (categoryMatch && yearMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

categoryFilter.addEventListener('change', filterCards);
yearFilter.addEventListener('change', filterCards);
