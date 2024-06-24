const homeButton = document.getElementById("home-button")

function selectButton(button) {
    const buttons = document.querySelectorAll('.top-nav-button');
    
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });
    
    button.classList.add('selected');
}

selectButton(homeButton)

document.addEventListener("DOMContentLoaded", function() {
    
})