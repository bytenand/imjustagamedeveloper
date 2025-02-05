document.addEventListener("scroll", function () {
    let scrollY = window.scrollY;

    
    document.querySelector(".Foreground2").style.transform = `translateY(${scrollY * 0.35}px)`;
    document.querySelector(".Foreground3").style.transform = `translateY(${scrollY * 0.45}px)`;
    document.querySelector(".Skyscape").style.transform = `translateY(${scrollY * 0.5}px)`;
    document.querySelector(".TopClouds").style.transform = `translateY(${scrollY * 0.85}px)`;
    document.querySelector(".BottomClouds").style.transform = `translateY(${scrollY * 0.75}px)`;
    document.querySelector(".Mountains").style.transform = `translateY(${scrollY * 0.4}px)`;
});

let cloudOffset = 0; // Start position

function animateClouds() {
    cloudOffset -= 0.05; // Adjust speed (negative moves left)
    

    // Reset position when clouds move too far left to create a loop
    if (cloudOffset < -window.innerWidth) {
        cloudOffset = window.innerWidth;
    }

    requestAnimationFrame(animateClouds);
}

// Start animation
animateClouds();
