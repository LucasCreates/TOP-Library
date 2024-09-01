const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".newbook-btn");
const closeButton = document.querySelector(".close");
const confirmButton = document.querySelector(".confirm");
const indicator = document.querySelector(".indicator");
const container = document.querySelector(".card-container");
const form = document.querySelector("form")
const card = document.querySelectorAll(".cards")

const testBtn = document.querySelector(".test")

const myLibrary = []


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

Book.prototype.info = function(){
    if(this.read === true){
        this.read = "have read"
    }
    else {
        this.read = "not read yet"
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    addBookToLibrary();

    const para = document.querySelectorAll(".subjects")
    const paraArray = [...para]
    paraArray.forEach(para => {
        // para.style.color = "blue"
        // para.style.display = "none"
    })

   


    
})


function addBookToLibrary() {
   
    const titleInput = document.querySelector("[data-title]").value
    const authorInput = document.querySelector("[data-author]").value
    const pagesInput = document.querySelector("[data-pages]").value
    const readInput = document.querySelector("[data-read]").checked
 
    const book = new Book(titleInput, authorInput, pagesInput, readInput)
    myLibrary.push(book)
    displayBook(book)   
    
}

testBtn.addEventListener("click", function(){
    console.log(myLibrary)
})


showButton.addEventListener("click", () => {
    dialog.showModal();
});
  
  // "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});

function displayBook(book){
    const createCard = ` 
    <div class="cards">
        <div class="card">
            <div class="book">
                <div class="subjects">
                    <p class="book-title">Title: <span class="title info">${book.title}</span></p>
                    <p class="book-author">Author: <span class="author info">${book.author}</span></p>
                    <p class="book-pages">Pages: <span class="pages info">${book.pages}</span></p>
                    <hr>
                    <p class="book-read">Read: <span class="read info">${book.read}</span></p>
                </div>
            </div>
        </div>
    </div>`;
 container.insertAdjacentHTML('beforeend', createCard);



}


const cardsArray = [...card];
cardsArray.forEach(card => {
    card.addEventListener("click", (e) => {
        e = "Working"
        console.log(e)
    })
})


// card.addEventListener("click", () => {
//     console.log("hover working")
// })







// const dialog = document.querySelector("dialog");
// const showButton = document.querySelector(".newbook-btn");
// const closeButton = document.querySelector(".close");
// const confirmButton = document.querySelector(".confirm");
// // const readButton = document.querySelector(".read-btn");
// const indicator = document.querySelector(".indicator");
// const container = document.querySelector(".card-container");
// const create = document.querySelector(".test")

// // const title = document.querySelector("[data-title")
// // const author = document.querySelector("[data-author")
// // const pages = document.querySelector("[data-pages")
// // const read = document.querySelector("[data-read")






// const myLibrary = [
//     {
//         title: "2920, vol 02 - Sun's Dawn",
//         author: "Carlovac Townway",
//         pages: 213,
//         read: true
//     }
// ]






// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
  
// }


// Book.prototype.info = function(){
//     if(this.read === true){
//         this.read = "have read"
//     }
//     else {
//         this.read = "not read yet"
//     }
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
// }






// const createCard = (card, ...args) => {
//     const c = document.createElement(card);
//     args.forEach(arg =>{
//         if (arg instanceof HTMLElement)
//             c.appendChild(arg);
//         else if (typeof arg == "string")
//             c.appendChild(document.createTextNode(arg));
//         else 
//         Object.entries(arg).forEach(([key, value]) => c.setAttribute(key, value));
//     });
//     return c
    
// };




    


// create.addEventListener("click", function(){
//     console.log("click workinng")

//     container.append(    
//         createCard("div", {class: "cards"},
//         createCard("div", {class: "book"},
//         createCard("div", {class: "subjects"},
//         createCard("p", {class: "book-title" },
//         createCard("span", {class: "info"})),
//         createCard("p", {class: "book-author" },
//         createCard("span", {class: "info"})),
//         createCard("p", {class: "book-pages" },
//         createCard("span", {class: "info"})),
//         createCard("p", {class: "book-read" },
//         createCard("span", {class: "info"})
//                         )
//                     )
//                 )       
//             )
//         )


    
//     // const classes = ["card-container", "cards", "card", "book", "subject"]

//     // for (i = 0; i <= classes.length; i++){
//     //     console.log(classes[i])
//     //     classes[i] = document.createElement("div")
//     //     classes[i].classList.add(classes[i])
//     //     let setClass = classes[i]
//     //     console.log(setClass)
//     //     container.appendChild(setClass)
//     // }
// })

// function addBookToLibrary() {
   
//     const titleInput = document.querySelector("[data-title]").value
//     const authorInput = document.querySelector("[data-author]").value
//     const pagesInput = document.querySelector("[data-pages]").value
//     const readInput = document.querySelector("[data-read]").checked
   
//     myLibrary.push(new Book(titleInput, authorInput, pagesInput, readInput))
   
    
// }

// function displayCard(){
//     const cards = document.createElement("div")
//     const card = document.createElement("div")
//     const book = document.createElement("div")
//     const subjects = document.createElement("div")

//     const title = document.createElement("p")
//     const author = document.createElement("p")
//     const pages = document.createElement("p")
//     const line = document.createElement("hr")
//     const read = document.createElement("p")

//     const titleSpan = document.createElement("span")
//     const authorSpan = document.createElement("span")
//     const pagesSpan = document.createElement("span")
//     const readSpan = document.createElement("span")

//     const spanTitle = document.querySelector(".title")
//     spanTitle.classList.add("info")
//     const infoText = document.querySelector(".book-info")
//     infoText.classList.add("info")
 
    
//     span.classList.add("info")

//     cards.classList.add("cards")
//     card.classList.add("card")
//     book.classList.add("book")
//     subjects.classList.add("subjects")

//     title.classList.add("book-title")
//     author.classList.add("book-author")
//     pages.classList.add("book-pages")
//     read.classList.add("book-read")


//     titleSpan.classList.add("info")
//     authorSpan.classList.add("info")
//     pagesSpan.classList.add("info")
//     readSpan.classList.add("info")

//     title.textContent = `Title: `;
//     author.textContent = `By: `;
//     pages.textContent = `Pages: `;
//     read.textContent = `Read: `;
    
  


//     container.appendChild(cards)
//     cards.appendChild(card)
//     card.appendChild(book)
//     book.appendChild(subjects)
//     subjects.appendChild(title)
//     subjects.appendChild(author)
//     subjects.appendChild(pages)
//     subjects.appendChild(line)
//     subjects.appendChild(read)

//     infoText.appendChild(span)


  
//     // container.append(    
//     //     createCard("div", {class: "cards"},
//     //     createCard("div", {class: "card"},
//     //     createCard("div", {class: "book"},
//     //     createCard("div", {class: "subjects"},
//     //     createCard("p", {class: "book-title" },
//     //     createCard("span", {class: "title info"})),
//     //     createCard("p", {class: "book-author" },
//     //     createCard("span", {class: "info"})),
//     //     createCard("p", {class: "book-pages" },
//     //     createCard("span", {class: "info"})),
//     //     createCard("p", {class: "book-read" },
//     //     createCard("span", {class: "info"})
//     //                     )
//     //                 )
//     //             )       
//     //         )
//     //     )
//     // )
//     // const pTitle = document.querySelector(".book-title")
//     // pTitle.textContent = "Title: "
  
   
//     // console.log(pTitle)

//     for (const books of myLibrary){
      

        
//         authorSpan.textContent = books.author
//         pagesSpan.textContent = books.pages
        
//         // const title = document.querySelector(".title")
//         // const author = document.querySelector(".author")
//         // const pages = document.querySelector(".pages")
//         // const read = document.querySelector(".read")
//         // console.log(title)
//         // title.textContent = books.title
//         // author.textContent = books.author
//         // pages.textContent = books.pages
//         // read.textContent = books.read
    
        
//         if (books.read === true){
//             readSpan.textContent = ` Have read.`;
//         }
//         else {
//             readSpan.textContent = " Not read."
//         }
       
//         title.appendChild(titleSpan)
//         author.appendChild(authorSpan)
//         pages.appendChild(pagesSpan)
//         read.appendChild(readSpan)

       
        
       
//     }


    
// }


// confirmButton.addEventListener("click", (e) =>{
// //    console.log(this.value) 
// //    console.log(e.value) 
// //    console.log(title.value)
//    e.preventDefault();
//     console.log(myLibrary)
//     addBookToLibrary()
//     displayCard()
// })

// showButton.addEventListener("click", () => {
//     console.log("Show is working")
//     dialog.showModal();
// });
  
//   // "Close" button closes the dialog
// closeButton.addEventListener("click", () => {
//     console.log("Close is working")
//     dialog.close();
// });

// // readButton.addEventListener("click", () => {
// //     if (readButton.name === "read"){
        
// //         readButton.value = readButton.name
// //         // console.log(readButton.name)
// //         indicator.style.background = "rgba(165, 42, 42, 0.452)";
// //         indicator.style.boxShadow = "1px 1px 10px 5px rgb(202, 117, 117)";
// //         indicator.style.border = "1px solid  rgb(182, 122, 122)";

    
// //         indicator.textContent = "Not read"
// //         readButton.name = "unread";
// //         readButton.value = true;
// //     }
// //     else {
        
// //         readButton.value = readButton.name;
// //         indicator.style.background = "rgba(55, 163, 41, 0.781)";
// //         indicator.style.boxShadow = "1px 1px 10px 5px rgb(131, 202, 117)";
// //         indicator.style.border = "1px solid rgb(148, 192, 139)";
// //         indicator.textContent = "Read"
// //         readButton.name = "read";
// //         readButton.value = false;
// //     }
    
// // });

