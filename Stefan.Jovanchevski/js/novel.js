class Novel extends Book {
    constructor(id, title, author, publisher, yearOfPublication, length, series, seriesNumber, ISBN, review) {
        super(id, "novel", title, author, publisher, yearOfPublication, length, ISBN, review)
        this.series = series;
        this.seriesNumber = seriesNumber;
    }
}