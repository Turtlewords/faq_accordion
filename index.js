const open = document.querySelectorAll(".open-tab");
const close = document.querySelectorAll(".close-tab");
const tabs = document.querySelectorAll(".tab");


for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {

        this.classList.toggle("active");
        let panel = tabs[i].nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            close[i].style.display = "none";
            open[i].style.display = "block";
            
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            
            open[i].style.display = "none";
            close[i].style.display = "block";
        }
        
    })
}

tabs.forEach((tab) => {
    tab.addEventListener("keypress", (e) => {
        if (e.key == "Enter" || e.key == " ") {
            e.preventDefault();
            tab.click();
        }
    })
})

