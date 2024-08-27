

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(this.read === true){
            this.read = "have read"
        }
        else {
            this.read = "not read yet"
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        
        
    }
    
}

const book = new Book("The Dream", "Ezra Tsigarides", 432, true)

console.log(book.info())