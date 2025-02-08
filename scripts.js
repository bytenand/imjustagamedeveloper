function clamp(x, min, max) {
    return Math.max(min, Math.min(x, max));
}

document.addEventListener("DOMContentLoaded", () => {
    const parallaxClasses = [".JustADevLabel", ".DeveloperLabel", ".FullstackGameLabel", ".AboutMeText", ".HeaderText", ".LongAboutMeText", ".SkillButton"];
    const stopPoint = window.innerHeight;

    const topClouds = document.querySelector(".TopClouds")
    const foregroundRocks = document.querySelector(".ForegroundRocks")
    const backgroundRocks = document.querySelector(".BackgroundRocks")
    const bottomClouds = document.querySelector(".BottomClouds")
    const mountains = document.querySelector(".Mountains")
    const sun = document.querySelector(".Sun")
    const skyscape = document.querySelector(".Skyscape")
    
    document.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        let scrollHeight = document.documentElement.scrollHeight;
        let allowedScrollHeight = scrollHeight / 3;

        foregroundRocks.style.transform = `translateY(${clamp(scrollY * 0.35, 0, allowedScrollHeight)}px)`;
        backgroundRocks.style.transform = `translateY(${clamp(scrollY * 0.45, 0, allowedScrollHeight)}px)`;
        topClouds.style.transform = `translateY(${clamp(scrollY * 0.85, 0, allowedScrollHeight)}px)`;
        bottomClouds.style.transform = `translateY(${clamp(scrollY * 0.75, 0, allowedScrollHeight)}px)`;
        mountains.style.transform = `translateY(${clamp(scrollY * 0.4, 0, allowedScrollHeight)}px)`;
        sun.style.transform = `translateY(${clamp(scrollY * 0.6, 0, allowedScrollHeight)}px)`;
        skyscape.style.transform = `translateY(${clamp(scrollY * 0.4, 0, allowedScrollHeight)}px)`;

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
        let innerWidth = window.innerWidth
        let aboutMeContainer = document.querySelector(".AboutMeContainer");

        if (innerWidth < 1362) {
            aboutMeContainer.style.marginLeft = "5%";
            aboutMeContainer.style.marginRight = "5%";
        } else {
            aboutMeContainer.style.marginLeft = "15%";
            aboutMeContainer.style.marginRight = "15%";
        }

        let justADevLabel = document.querySelector(".JustADevLabel");
        if (innerWidth < 500) {
            justADevLabel.style.marginTop = "13vh";
        } else if (innerWidth < 1100) {
            justADevLabel.style.marginTop = "9vh";
        } else {
            justADevLabel.style.marginTop = "0";
        }

    }

    adjustMargins();

    window.addEventListener("resize", adjustMargins);
});