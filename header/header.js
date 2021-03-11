var search = document.getElementById("search");
search.addEventListener("click", searchBox);

var search = document.getElementById("searchBox");
function searchBox(){
    search.style.display = "block";
}

// close search
var clsearch = document.getElementById("clSearch");
clsearch.addEventListener("click", closeSearch);

function closeSearch(){
    search.style.display = "none";
}

// search

var searchD = document.getElementById("searchData");
// console.log(searchD)
searchD.addEventListener("click", searchData);

function searchData(){
    var input = document.getElementById("searchInput").value;
    console.log(input)

    let url = `https://himalayausa.com/search?type=product&q=${input}`;
    location.href = url;

    input.value = null;
}

//  On Mouse Over shop

let shop = document.getElementById("shop");
let navDropdown = document.getElementById("navDropdown");

shop.addEventListener("mouseover", ()=>{
    navDropdown.style.visibility = "visible";
    shop.style.cursor = "pointer"
})

navDropdown.addEventListener("mouseleave", ()=>{
    navDropdown.style.visibility = "hidden";
})

// userData

let user = document.getElementById("user");
user.addEventListener("click", userOptions);

let userDropdown = document.getElementById("userDropdown")

function userOptions() {
    userDropdown.style.visibility = "visible";
}

userDropdown.addEventListener("mouseleave", ()=>{
    userDropdown.style.visibility = "hidden";
})