const form = document.querySelector("form");
const confirmBtn = document.querySelector(".confirm")
const showButton = document.querySelector(".newbook-btn")
const closeButton = document.querySelector(".close")
const dialog = document.querySelector("dialog")
const container = document.querySelector(".card-container")
const cards = document.querySelector(".cards")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    addBookToLibrary();
   
})

const myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

function addBookToLibrary() {

    const title = document.querySelector("[data-title]").value
    const author = document.querySelector("[data-author]").value
    const pages = document.querySelector("[data-pages]").value
    const read = document.querySelector("[data-read]").checked

    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
    showCard() 
  }


container.addEventListener("click", (e) => {
    let currentIndex = e.target.dataset.indexNumber;

        if (e.target.textContent === "Delete"){
            myLibrary.splice(currentIndex, 1)
            console.log(`cards dataset = ${currentIndex}`)
            showCard()  
        }      
})


function showCard(){

    while (container.firstChild) {
      container.lastChild.remove();
    }
    myLibrary.forEach((book, index) => {

        const card = document.createElement("div")
        card.classList.add("cards")
        container.appendChild(card)

        const pTitle = document.createElement("p")
        pTitle.textContent = `${book.title}`

        const pAuthor = document.createElement("p")
        pAuthor.textContent = `By ${book.author}`

        const pPages = document.createElement("p")
        pPages.style.fontSize = "15px"
        pPages.textContent = `${book.pages} Pages`

        const line = document.createElement("hr")

        const pRead = document.createElement("p")
        if (book.read === false){
             pRead.textContent = `Not read`
        }
        else {
             pRead.textContent = `Read`
        }
        
        const div = document.createElement("div")
        div.classList.add("edit")
        const edit = document.createElement("button")
        edit.classList.add("edit-btn")
        edit.textContent = "Edit"
        const del = document.createElement("button")
        del.classList.add("delete")
        del.setAttribute("data-index-number", index)
        del.textContent = "Delete"

        card.appendChild(pTitle)
        card.appendChild(pAuthor)
        card.appendChild(pPages)
        card.appendChild(line)
        card.appendChild(pRead)
        card.appendChild(div)
        div.appendChild(edit)
        div.appendChild(del)

    });
   
    const p = document.querySelectorAll("p")
    p.forEach((para) => para.classList.add("info")) 
}

showButton.addEventListener("click", () => {
        console.log("Show is working")
        dialog.showModal();
});
      
closeButton.addEventListener("click", () => {
        console.log("Close is working")
        dialog.close();
});
    