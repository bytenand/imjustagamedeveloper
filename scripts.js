function clamp(x, min, max) {
    return Math.max(min, Math.min(x, max));
}

document.addEventListener("DOMContentLoaded", () => {
    const parallaxClasses = [".JustADevLabel", ".DeveloperLabel", ".FullstackGameLabel", ".AboutMeText", ".HeaderText", ".LongAboutMeText", ".SkillButton"];
    const stopPoint = window.innerHeight;
    
    document.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        
        let scrollHeight = document.documentElement.scrollHeight;
        let allowedScrollHeight = scrollHeight / 3;
    
        document.querySelector(".ForegroundRocks").style.transform = `translateY(${clamp(scrollY * 0.35, 0, allowedScrollHeight)}px)`;
        document.querySelector(".BackgroundRocks").style.transform = `translateY(${clamp(scrollY * 0.45, 0, allowedScrollHeight)}px)`;
        document.querySelector(".Skyscape").style.transform = `translateY(${clamp(scrollY * 0.5, 0, allowedScrollHeight)}px)`;
        document.querySelector(".TopClouds").style.transform = `translateY(${clamp(scrollY * 0.85, 0, allowedScrollHeight)}px)`;
        document.querySelector(".BottomClouds").style.transform = `translateY(${clamp(scrollY * 0.75, 0, allowedScrollHeight)}px)`;
        document.querySelector(".Mountains").style.transform = `translateY(${clamp(scrollY * 0.4, 0, allowedScrollHeight)}px)`;
        document.querySelector(".Sun").style.transform = `translateY(${clamp(scrollY * 0.6, 0, allowedScrollHeight)}px)`;
        document.querySelector(".Skyscape").style.transform = `translateY(${clamp(scrollY * 0.4, 0, allowedScrollHeight)}px)`;

        parallaxClasses.forEach(className => {
            document.querySelectorAll(className).forEach(element => {
                let elementRect = element.getBoundingClientRect();
                let elementTop = elementRect.top;
                
                if (elementTop < stopPoint) { 
                    let moveAmount = Math.min((stopPoint - elementTop) * 0.4, stopPoint / 8);
                    let opacityAmount = Math.min((stopPoint - elementTop) / stopPoint * 4, 1);

                    element.style.transform = `translateY(-${moveAmount}px)`;
                    element.style.opacity = opacityAmount;
                }
            });
        });


    }, { passive: true });

    function adjustMargins() {
        let aboutMeContainer = document.querySelector(".AboutMeContainer");

        if (!aboutMeContainer) {
            console.error("Element with class 'AboutMeContainer' not found!");
            return;
        }

        if (window.innerWidth < 1362) {
            aboutMeContainer.style.marginLeft = "5%";
            aboutMeContainer.style.marginRight = "5%";
        } else {
            aboutMeContainer.style.marginLeft = "15%";
            aboutMeContainer.style.marginRight = "15%";
        }
    }

    adjustMargins();

    window.addEventListener("resize", adjustMargins);
});