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

    const mountains1 = document.querySelector(".Mountains1")
    const mountains2 = document.querySelector(".Mountains2")
    const mountains3 = document.querySelector(".Mountains3")
    const mountains4 = document.querySelector(".Mountains4")
    const mountains5 = document.querySelector(".Mountains5")
    const mountains6 = document.querySelector(".Mountains6")

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
        sun.style.transform = `translateY(${clamp(scrollY * 0.8, 0, allowedScrollHeight)}px)`;
        skyscape.style.transform = `translateY(${clamp(scrollY * 0.2, 0, allowedScrollHeight)}px)`;

        mountains1.style.transform = `translateY(${clamp(scrollY * 0.3, 0, allowedScrollHeight)}px)`;
        mountains2.style.transform = `translateY(${clamp(scrollY * 0.42, 0, allowedScrollHeight)}px)`;
        mountains3.style.transform = `translateY(${clamp(scrollY * 0.52, 0, allowedScrollHeight)}px)`;
        mountains4.style.transform = `translateY(${clamp(scrollY * 0.625, 0, allowedScrollHeight)}px)`;
        mountains5.style.transform = `translateY(${clamp(scrollY * 0.7, 0, allowedScrollHeight)}px)`;
        mountains6.style.transform = `translateY(${clamp(scrollY * 0.775, 0, allowedScrollHeight)}px)`;

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

        document.querySelectorAll(".CaveSection1, .CaveSection2, .CaveSection3, .CaveSection4, .CaveSection5, .CaveLanternLight").forEach(el => {
            let rect = el.getBoundingClientRect();
            let viewportHeight = window.innerHeight;

            let speed = parseFloat(el.dataset.speed) || 20;

            // Calculate normalized position: -1 (top), 0 (middle), 1 (bottom)
            let progress = (rect.top + rect.height / 2 - viewportHeight / 2) / (viewportHeight / 2);
    
            // Adjust transform based on progress (tweak multiplier as needed)
            let offset = progress * speed; // Adjust 20 to control effect strength
            el.style.transform = `translateY(${clamp(offset, 0, 100000)}px)`;
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