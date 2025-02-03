const homeButton = document.getElementById("home-button")

function selectButton(button) {
    const buttons = document.querySelectorAll('.top-nav-button');
    
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });
    
    button.classList.add('selected');
}

selectButton(homeButton)

function scrollToDiv(divId) {
    const div = document.getElementById(divId);

    let offsetVh = 10;
    let offsetPx = (offsetVh / 100) * window.innerHeight;

    const elementPosition = div.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - offsetPx, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    const topNav = document.getElementById("top-nav")

    function updateTopNav(scrollAmount) {
        if (scrollAmount > 0) {
            topNav.classList.add("scrolled");
        } else {
            topNav.classList.remove("scrolled");
        }
    }

    document.addEventListener("scroll", function() {
        let scrollAmount = window.scrollY

        updateTopNav(scrollAmount)
    })

    function observeFromName(name) {
        const elements = document.querySelectorAll(name);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(entry.target.dataset.animation);
                }
            });
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    observeFromName(".about-section")
    observeFromName(".why-me-section")
    observeFromName(".work-section-content")
    observeFromName(".work-section-row-coloumn-showcase-container")
    observeFromName(".section-dot-container-content")
})

let elements = []

function addStareElement(element, MAX_ANGLE) {
    elements.push({
        element: element,
        MAX_ANGLE: MAX_ANGLE
    });
}

const frameworkImage = document.getElementById('framework-image');
let lastMousePosition = { x: 0, y: 0 };

addStareElement(frameworkImage, 30)

function updateIndividualElement(element, mouseX, mouseY, MAX_ANGLE) {
    const boundingRect = element.getBoundingClientRect();
    const centerX = boundingRect.left + boundingRect.width / 2;
    const centerY = boundingRect.top + boundingRect.height / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const angleY = (deltaX / boundingRect.width) * 2 * MAX_ANGLE;
    const angleX = (deltaY / boundingRect.height) * -2 * MAX_ANGLE;
    
    const clampedAngleX = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, angleX));
    const clampedAngleY = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, angleY));

    element.style.transform = `translate(0, 0) rotateX(${clampedAngleX}deg) rotateY(${clampedAngleY}deg)`;
}

document.addEventListener('mousemove', (e) => {
    lastMousePosition = { x: e.clientX, y: e.clientY };

    elements.forEach (element => {
        updateIndividualElement(element.element, lastMousePosition.x, lastMousePosition.y, element.MAX_ANGLE);
    })
});

document.addEventListener('scroll', () => {
    elements.forEach (element => {
        updateIndividualElement(element.element, lastMousePosition.x, lastMousePosition.y, element.MAX_ANGLE);
    })
});