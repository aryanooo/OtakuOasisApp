// Function to delete elements by ID
function mydelete(variable) {
    const v1 = document.getElementById(variable);
    if (v1) {
        v1.parentNode.removeChild(v1);
    } else {
        console.log("No ID found");
    }
}

// Function to check button click
function check() {
    console.log("clicked");
}

// Function to toggle dropdown menu and polygon fill
function toggleDropdown() {
    const button = document.getElementById("drop-btn");
    button.classList.toggle("active");
    console.log("clicked");

    // Toggle the fill color of the polygon
    const polygon = document.getElementById("lol");
    const fill = polygon.getAttribute("fill");
    if (fill === "transparent") {
        polygon.setAttribute("fill", "black");
    } else {
        polygon.setAttribute("fill", "transparent");
    }
}
