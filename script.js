const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "With a sad heart"
    }, 0);
    setTimeout(() => {
        text.textContent = "we remember"
    }, 5000);
    setTimeout(() => {
        text.textContent = "Our fallen HEROES"
    }, 10000);
    setTimeout(() => {
        text.textContent = "REST ON CHAMPS!!"
    }, 15000);
}

textLoad();
setInterval(textLoad, 20000)