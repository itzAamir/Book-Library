class Library {
    addBook(book, author, bookType) {
        let html = `<tr>
                    <td>${book}</td>
                    <td>${author}</td>
                    <td>${bookType}</td>
                </tr>`
        let table = document.getElementById("tableBody");
        table.innerHTML += html;
    }
}


document.getElementById("submit").addEventListener("click", submitForm);

function submitForm(e) {
    let user = new Library();
    e.preventDefault();
    let book = document.getElementById("book").value.toUpperCase();
    let author = document.getElementById("author").value.toUpperCase();
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let thriller = document.getElementById("thriller");
    let type;
    if (fiction.checked) {
        type = fiction.value.toUpperCase();
    }
    else if (programming.checked) {
        type = programming.value.toUpperCase();
    }
    else if (thriller.checked) {
        type = thriller.value.toUpperCase();
    }
    user.addBook(book, author, type);
}
