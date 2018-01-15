var app = app || {};
(module => {

    const bookListPage = {};

    const markup = `
            <div class="book-pages">
                <div >
                    <div >
                        <img src="{{{image_url}}}" alt="" width="400">
                    </div>
                    <hr>
                    <div class="attribution">
                        <h1>
                            <a href="/book-detail-page/{{book_id}}" >{{title}}</a>
                        </h1>
                        <h2> by {{author}} </h2>
                    </div>
                </div>
                <hr>
            </div>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#book-list-slot').empty()
        app.Book.all.forEach(thing => {
            $('#book-list-slot').append((template(thing)))
        })
    }

    bookListPage.init = () => {

        $('#book-list-page').off()

        $('#book-list-page').on('click', '.delete', (event) => {
            const book_id = $(event.target).data('book_id')
            const confirmed = confirm('Are you sure?')
            if (confirmed) {
                app.Book.delete(book_id).then(renderThings)
            }
        })

        $('#book-list-page').on('click', '.show-book', (event) => {
            const book_id = $(event.target).data('book_id')
            page('/book-detail-page/' + book_id)
        })
        $('#book-list-page').on('click', '.update-book', (event) => {
            const book_id = $(event.target).data('book_id')
            page('/book-edit-page/' + book_id)
        })

        app.Book.fetchAll().then(() => {
            renderThings()
            $('#book-list-page').show()
        })
    }

    module.bookListPage = bookListPage
})(app)