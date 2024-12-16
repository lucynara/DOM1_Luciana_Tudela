
const paragraphs = document.querySelectorAll(".text-paragraph");
const randomColorBtn = document.querySelector("#randomColorBtn");
const boldTextBtn = document.querySelector("#boldTextBtn");
const toggleVisibilityBtn = document.querySelector("#toggleVisibilityBtn");


randomColorBtn.addEventListener("click", () => {
    paragraphs.forEach(p => {
        p.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
});


boldTextBtn.addEventListener("click", () => {
    paragraphs.forEach(p => {
        p.style.fontWeight = p.style.fontWeight === "bold" ? "normal" : "bold";
    });
});


toggleVisibilityBtn.addEventListener("click", () => {
    paragraphs.forEach(p => {
        p.style.display = p.style.display === "none" ? "block" : "none";
    });
});


const titleInput = document.querySelector("#titleInput");
const paragraphInput = document.querySelector("#paragraphInput");
const createArticleBtn = document.querySelector("#createArticleBtn");
const articlesContainer = document.querySelector("#articlesContainer");

createArticleBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const paragraph = paragraphInput.value.trim();
    if (!title || !paragraph) {
        alert("Compila entrambi i campi.");
        return;
    }
    const date = new Date().toLocaleDateString();
    const article = document.createElement("div");
    article.classList.add("article");
    article.innerHTML = `<h5>${title}</h5><p>${paragraph}</p><small>Pubblicato il ${date}</small>`;
    articlesContainer.appendChild(article);
    titleInput.value = "";
    paragraphInput.value = "";
});


let contacts = [
    { id: 1, name: "Nicola" },
    { id: 2, name: "Fabio" },
    { id: 3, name: "Luca" },
    { id: 4, name: "Giulia" }
];

const contactsList = document.querySelector("#contactsList");
const sortByIdAsc = document.querySelector("#sortByIdAsc");
const sortByIdDesc = document.querySelector("#sortByIdDesc");
const sortByNameAsc = document.querySelector("#sortByNameAsc");
const sortByNameDesc = document.querySelector("#sortByNameDesc");

function renderContacts() {
    contactsList.innerHTML = "";
    contacts.forEach(contact => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `ID: ${contact.id} - Nome: ${contact.name}`;
        contactsList.appendChild(li);
    });
}

sortByIdAsc.addEventListener("click", () => {
    contacts.sort((a, b) => a.id - b.id);
    renderContacts();
});

sortByIdDesc.addEventListener("click", () => {
    contacts.sort((a, b) => b.id - a.id);
    renderContacts();
});

sortByNameAsc.addEventListener("click", () => {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    renderContacts();
});

sortByNameDesc.addEventListener("click", () => {
    contacts.sort((a, b) => b.name.localeCompare(a.name));
    renderContacts();
});


renderContacts();
