const categoryFilter = document.getElementById("categoryFilter");
const yearFilter = document.getElementById("yearFilter");
const cards = document.querySelectorAll(".achievement-square");

function filterCards() {
    const category = categoryFilter.value;
    const year = yearFilter.value;

    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const cardYear = card.dataset.year;

        const categoryMatch = (category === 'all' || cardCategory === category);
        const years = card.dataset.year.split(",");
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
