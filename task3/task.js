document.addEventListener('DOMContentLoaded', function() {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const bookElement = document.getElementById('book');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            fontSizeLinks.forEach(link => {
                link.classList.remove('font-size_active');
            });
            this.classList.add('font-size_active');

            bookElement.classList.remove('book_fs-small', 'book_fs-big');

            const size = this.getAttribute('data-size');
            if (size === 'small') {
                bookElement.classList.add('book_fs-small');
            } else if (size === 'big') {
                bookElement.classList.add('book_fs-big');
            }
        });
    });
});