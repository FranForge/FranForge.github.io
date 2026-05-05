let activeTags = [];

const filteredView = document.getElementById("filtered-view");
const defaultView = document.getElementById("default-view");

const filteredContainer = document.getElementById("filtered-container");
const filterTagsDisplay = document.getElementById("filter-tags");
const noResults = document.getElementById("no-results");

const cards = filteredContainer.querySelectorAll(".card");
const tagButtons = document.querySelectorAll(".tag-btn");
const clearButton = document.getElementById("clear-filters");

console.log("SCRIPT CARGADO");
console.log("cards:", cards.length);
console.log("buttons:", tagButtons.length);

function update() {

    console.log("Updating view with active tags:", activeTags);

    if(activeTags.length === 0){
        defaultView.style.display = "block";
        filteredView.style.display = "none";
        return;
    } else {
        defaultView.style.display = "none";
        filteredView.style.display = "block";
        filterTagsDisplay.textContent = activeTags.join(", ");
    }

    let visibleCount = 0;

    cards.forEach(card => {
        const tags = card.dataset.tags?.split(",") || [];

        const match =
            activeTags.length === 0 ||
            activeTags.every(tag => tags.includes(tag));

        if (match) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
}

function onTagButtonClick(event){
    const btn = event.currentTarget;
    const tag = btn.dataset.tag;

    console.log("TAG BUTTON CLICKED:", tag);

    //Includes toggle and enables or disables the button active state
    if(activeTags.includes(tag)){
        activeTags = activeTags.filter(t => t !== tag);
        btn.classList.remove("active");
    } else {
        activeTags.push(tag);
        btn.classList.add("active");
    }

    update();
}

function onTagClearClick(event){

    console.log("CLEAR BUTTON CLICKED");

    activeTags = [];
    tagButtons.forEach(btn => btn.classList.remove("active"));
    update();
}

tagButtons.forEach(btn => {
    btn.addEventListener("click", onTagButtonClick);
    });

clearButton?.addEventListener("click", onTagClearClick);