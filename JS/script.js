let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let country = document.getElementById("country");
let score = document.getElementById("score");
let container = document.getElementById("container");
let btn = document.getElementById("btn");

let a = [];
btn.addEventListener("click", (e) => {
    if (
        firstname.value == "" ||
        lastname.value == "" ||
        country.value == "" ||
        score.value == ""
    ) {
        let required = document.querySelector("#required");
        required.innerText = "All fields are required";
        required.style.display = "block";
    } else {
        required.style.display = "none";
        a.push({
            firstname: firstname.value,
            lastname: lastname.value,
            country: country.value,
            score: score.value,
        });
        sortArray();
    }
});

function sortArray() {
    container.innerHTML = "";
    let dateObject = new Date();
    let month = dateObject.toLocaleString("default", { month: "long" });
    (day = dateObject.getDate()),
        (year = dateObject.getFullYear()),
        (time = dateObject.toLocaleTimeString().slice(0, 8));

    a.sort((x, y) => y.score - x.score);

    a.forEach((e, index, array) => {
        console.log(array);
        let box = document.createElement("div");
        box.classList.add("box");
        let ul = document.createElement("ul");
        ul.classList.add("ul");
        ul.innerHTML = `
    <li class="first1">${index + 1}</li>
    <li class="name list"><p>${e.firstname + " " + e.lastname
            }</p><p class="list year">${month} ${day}: ${year} ${time}</p> </li>  
     <li class="country list">${e.country}</li> 
     <li class="score list">${e.score}</li> 
     <li class="del list"><span class="material-symbols-outlined">delete</span></li> 
     <li class="plus list">+5</li>
      <li class="minus list">-5</li>`;

        let boxscore = ul.querySelector(".score");
        let plus = ul.querySelector(".plus");
        let minus = ul.querySelector(".minus");
        plus.addEventListener("click", () => {
            boxscore.innerText = parseInt(boxscore.innerText) + 5;
            e.score = parseInt(e.score) + 5;
            sortArray();
        });
        minus.addEventListener("click", () => {
            boxscore.innerText = parseInt(boxscore.innerText) - 5;
            e.score = parseInt(e.score) - 5;
            sortArray();
        });

        box.appendChild(ul);
        container.appendChild(box);
        if (index === 0) {
            let first1 = ul.querySelector(".first1");
            let imgElement = document.createElement("img");
            imgElement.classList.add("img1");
            imgElement.src = "./Image/Cup.webp";
            first1.innerText = "";
            first1.appendChild(imgElement);
        }

        let deleteBtn = ul.querySelector(".del");
        deleteBtn.addEventListener("click", () => {
            console.log(index);
            a.splice(index, 1);
            sortArray();
        });
    });
}
