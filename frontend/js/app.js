import '../css/styles.css';

import UI from '../js/UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderBooks();
});

document.getElementById('bookForm')
    .addEventListener('submit', (e) => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const book = new FormData();
        book.append('image', image[0]);
        book.append('title', title);
        book.append('author', author);
        book.append('isbn', isbn);

        const ui = new UI();
        ui.addANewBook(book);
        ui.renderMessage('New book added', 'success', 3000);

        e.preventDefault();
    });

    document.getElementById('books')
        .addEventListener('click', (e) => {
            if (e.target.classList.contains('delete')) {
                const ui = new UI();
                ui.deleteBook(e.target.getAttribute('_id'));
                ui.renderMessage('Book removed', 'danger', 2000);
            }
            e.preventDefault();
        });
