document.addEventListener("scroll", function () {
    let scrollY = window.scrollY;

    document.querySelector(".ForegroundRocks").style.transform = `translateY(${scrollY * 0.35}px)`;
    document.querySelector(".BackgroundRocks").style.transform = `translateY(${scrollY * 0.45}px)`;
    document.querySelector(".Skyscape").style.transform = `translateY(${scrollY * 0.5}px)`;
    document.querySelector(".TopClouds").style.transform = `translateY(${scrollY * 0.85}px)`;
    document.querySelector(".BottomClouds").style.transform = `translateY(${scrollY * 0.75}px)`;
    document.querySelector(".Mountains").style.transform = `translateY(${scrollY * 0.4}px)`;
    document.querySelector(".Sun").style.transform = `translateY(${scrollY * 0.6}px)`;
    document.querySelector(".Skyscape").style.transform = `translateY(${scrollY * 0.4}px)`;
}, { passive: true });