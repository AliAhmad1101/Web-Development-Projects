console.log("JS is loaded...");

//  const searchInput = document.getElementById("search");
// console.log(searchInput);
//     fetch("movies.json")
//         .then(response => response.json())
//         .then(movies => {
//             searchInput.addEventListener("keyup",() => {
//                 const text = searchInput.value.toLowerCase().trim;
                
//                 if(text === "")
//                     return;

//                 const movie = movies.find(m=> m.name.toLowerCase() === text);

//                 if(movie){
//                     window.location.href = "movie.html?movie="+ enocdeURIComponent(movie.name);
//                 }
//             });
//         });

document.querySelector(".search-btn").onclick = () => {
    const q = document.getElementById("search").value.trim().toLowerCase();
    if (!q) return;

    fetch("movies.json")
    .then(r => r.json())
    .then(d => {
        const m = d.find(x => x.name.toLowerCase() === q);
        if (m) window.location.href = "movie.html?movie=" + encodeURIComponent(m.name);
        else alert("movie not found");

    });
};