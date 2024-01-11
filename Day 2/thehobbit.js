function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.info = function () {
        console.log(this.title + ' by ' + this.author + ',' + this.pages + ' pages ' + hasRead + ' read yet.'); 
    };
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", 295, "not");
theHobbit.info();

