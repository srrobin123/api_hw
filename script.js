const api = fetch("https://randomuser.me/api/?results=50")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        card(data.results)
    }).catch((err)=>{
        console.log(err)
    })


const card = (values) =>{
    values.forEach(element => {
        const container = document.getElementById("container")
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        <h2>${element.name.title} ${element.name.first} ${element.name.last}</h2>
        <img src="${element.picture.large}">
        <h3>Age: ${element.dob.age}</h3>
        <button class="btn" id="${element.login.uuid}">Click here</button>
        `
        container.appendChild(card)
    });
    
    const btn = document.getElementsByClassName("btn")
    Array.from(btn).forEach(e=>{
        e.addEventListener("click",()=>{
            console.log(e.getAttribute("id"))
        })
    })
}


