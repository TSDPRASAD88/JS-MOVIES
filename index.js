const movies = document.getElementById("Movies");

function fetchMovies() {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=3114b5ee&s=Avengers")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("Fetched data:", data);

                data.Search.forEach((element) => {
                    const div = document.createElement("div");
                    div.className = "Movie-card";
                    const img = document.createElement("img");
                    const h3 = document.createElement("h3");

                    img.src = element.Poster;
                    h3.innerText = element.Title;
                    div.append(img, h3);
                    const closeButton=document.getElementById("close");
                    closeButton.addEventListener("click",()=>{
                        const model=document.getElementById("model");
                        model.style.display="none";
                    })
                    div.addEventListener("click",()=>{
                        const model = document.getElementById("model");
                        model.style.display = "block";
                        const title = document.getElementById("title");
                        title.innerText = element.Title;
                        const year = document.getElementById("year");
                        year.innerText = element.Year;
                    })
                    movies.appendChild(div);
                });
            
            
        })
        .catch((err) => {
            console.error(err);
        });
}

fetchMovies();