const pdfUrl = "../portfolio.pdf";

const script = document.createElement("script");

script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.4.149/pdf.min.mjs";
script.type = "module";

script.onload = async () => {
    const pdfjsLib = window["pdfjs-dist/build/pdf"];

    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;

    document.querySelector(".loading").textContent =
        `${pdf.numPages} pages loaded`;
};

document.head.appendChild(script);
