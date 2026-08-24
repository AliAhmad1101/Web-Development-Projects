fetch("movies.json")
    .then(response => response.json())
    .then(data => {
        const params = new
        URLSearchParams(window.location.search);
        const moviename = 
        params.get("movie");

        const movie = data.find(m => m.name === moviename);

        if(!movie){
        //    / alert("Movie not found !");
        }

        document.getElementById("poster").src = movie.poster;
        document.getElementById("title").textContent = movie.name;
        document.getElementById("genre").textContent = movie.genre;
        document.getElementById("rating").textContent = movie.score;
        document.getElementById("year").textContent = movie.year;
        document.getElementById("summary").textContent = movie.summary;

        const recommendations = data.filter(m => m.genre === movie.genre && m.name !== movie.name).slice(0,24);

        const recommendDiv = document.getElementById("recommendations");
        recommendations.forEach(rec=> {
            console.log("poster: ",rec.poster);
            const card = document.createElement("div");
            card.classList.add("rec-card");

            card.innerHTML = `<img src="${rec.poster}" referrerpolicy="no-referrer" class="rec-poster">`;

            card.onclick = () => {
                window.location.href = `movie.html?movie=${encodeURIComponent(rec.name)}`;

            };

            recommendDiv.appendChild(card);
        });

    });