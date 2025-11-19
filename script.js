document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("crd");
    const flipBtn = document.getElementById("fp");

    // Button flip
    flipBtn.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
    });

    // Hover flip
    card.addEventListener("mouseenter", () => {
        card.classList.add("is-flipped");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("is-flipped");

    });

    function show() {
        document.querySelector(".card").classList.toggle("visible")
        document.querySelector(".qr").classList.toggle("visible")
    }

    const QR = document.getElementById("code")
    QR.addEventListener("click", ()=>{
        show();
    })



    const redirect = document.getElementById("W")
    redirect.addEventListener("click",()=>{
        window.location.href = "https://www.codevelly.in/"
    })
})

