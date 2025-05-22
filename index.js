const open = document.querySelectorAll(".open-tab");
const close = document.querySelectorAll(".close-tab");
const accordions = document.querySelectorAll(".accordion");


for (let i = 0; i < open.length; i++) {
    open[i].addEventListener("click", function() {

        let panel = open[i].parentElement.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
        open[i].style.display = "none";
        close[i].style.display = "block";
    })
}

for (let i = 0; i < open.length; i++) {
    close[i].addEventListener("click", function() {

        let panel = open[i].parentElement.nextElementSibling;
        panel.style.maxHeight = null;
        close[i].style.display = "none";
        open[i].style.display = "block";
    })
}
