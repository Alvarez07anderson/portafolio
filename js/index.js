const formulario = document.querySelector("#formulario");
const buttonMailTo = document.querySelector("#acao-enviar");
formulario.addEventListener("submit", handleSubit);

function handleSubit(event) {
    event.preventDefault();
    const form = new FormData(this);
    buttonMailTo.setAttribute("href", `mailto:alvarez07anderson@gmail.com?subject= nome ${form.get("nome")} Email ${form.get("email")}&body=${form.get("mensagem")}`);
    buttonMailTo.click();
};

function generatePDF() {
    const element = document.getElementById("documento");

    html2pdf()
    .from(element)
    .save();
};