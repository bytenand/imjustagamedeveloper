function clamp(x, min, max) {
    return Math.max(min, Math.min(x, max));
}

document.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    
    let scrollHeight = document.documentElement.scrollHeight
    let allowedScrollHeight = scrollHeight / 4

    document.querySelector(".ForegroundRocks").style.transform = `translateY(${clamp(scrollY * 0.35, 0, allowedScrollHeight)}px)`;
    document.querySelector(".BackgroundRocks").style.transform = `translateY(${clamp(scrollY * 0.45, 0, allowedScrollHeight)}px)`;
    document.querySelector(".Skyscape").style.transform = `translateY(${clamp(scrollY * 0.5, 0, allowedScrollHeight)}px)`;
    document.querySelector(".TopClouds").style.transform = `translateY(${clamp(scrollY * 0.85, 0, allowedScrollHeight)}px)`;
    document.querySelector(".BottomClouds").style.transform = `translateY(${clamp(scrollY * 0.75, 0, allowedScrollHeight)}px)`;
    document.querySelector(".Mountains").style.transform = `translateY(${clamp(scrollY * 0.4, 0, allowedScrollHeight)}px)`;
    document.querySelector(".Sun").style.transform = `translateY(${clamp(scrollY * 0.6, 0, allowedScrollHeight)}px)`;
    document.querySelector(".Skyscape").style.transform = `translateY(${clamp(scrollY * 0.4, 0, allowedScrollHeight)}px)`;
}, { passive: true });