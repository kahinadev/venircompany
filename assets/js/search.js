function searchSide() {
    var search = document.getElementById("search-form");

    if (search.style.width === "80%") {
        search.style.width = "0%";
    } else {
        search.style.width = "80%";
    }
}