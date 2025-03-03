function clamp(x, min, max) {
    return Math.max(min, Math.min(x, max));
}

document.addEventListener("DOMContentLoaded", () => {
    const parallaxClasses = [".just-a-dev-label", ".developer-label", ".fullstack-game-label", ".about-me-text", ".header-text", ".long-about-me-text", ".skill-set-button"];
    const stopPoint = window.innerHeight;

    const foregroundCliff1= document.querySelector(".foreground-cliff-1")
    const foregroundCliff2 = document.querySelector(".foreground-cliff-2")

    const topCloudContainer = document.querySelector(".top-cloud-container")
    const bottomCloudContainer = document.querySelector(".bottom-cloud-container")

    const foregroundMountains1 = document.querySelector(".foreground-mountains-1")
    const foregroundMountains2 = document.querySelector(".foreground-mountains-2")
    const middlegroundMountains1 = document.querySelector(".middleground-mountains-1")
    const middlegroundMountains2 = document.querySelector(".middleground-mountains-2")
    const backgroundMountains1 = document.querySelector(".background-mountains-1")
    const backgroundMountains2 = document.querySelector(".background-mountains-2")

    const sun = document.querySelector(".sun")
    const skyscape = document.querySelector(".skyscape")
    
    document.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        let scrollHeight = document.documentElement.scrollHeight;
        let allowedScrollHeight = scrollHeight / 3;

        foregroundCliff1.style.transform = `translateY(${clamp(scrollY * 0.35, 0, allowedScrollHeight)}px)`;
        foregroundCliff2.style.transform = `translateY(${clamp(scrollY * 0.45, 0, allowedScrollHeight)}px)`;
        topCloudContainer.style.transform = `translateY(${clamp(scrollY * 0.85, 0, allowedScrollHeight)}px)`;
        bottomCloudContainer.style.transform = `translateY(${clamp(scrollY * 0.75, 0, allowedScrollHeight)}px)`;
        sun.style.transform = `translateY(${clamp(scrollY * 0.8, 0, allowedScrollHeight)}px)`;
        skyscape.style.transform = `translateY(${clamp(scrollY * 0.2, 0, allowedScrollHeight)}px)`;

        foregroundMountains1.style.transform = `translateY(${clamp(scrollY * 0.3, 0, allowedScrollHeight)}px)`;
        foregroundMountains2.style.transform = `translateY(${clamp(scrollY * 0.42, 0, allowedScrollHeight)}px)`;
        middlegroundMountains1.style.transform = `translateY(${clamp(scrollY * 0.52, 0, allowedScrollHeight)}px)`;
        middlegroundMountains2.style.transform = `translateY(${clamp(scrollY * 0.625, 0, allowedScrollHeight)}px)`;
        backgroundMountains1.style.transform = `translateY(${clamp(scrollY * 0.7, 0, allowedScrollHeight)}px)`;
        backgroundMountains2.style.transform = `translateY(${clamp(scrollY * 0.775, 0, allowedScrollHeight)}px)`;

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

        document.querySelectorAll(".cave-foreground-2, .cave-middleground-1, .cave-middleground-2, .cave-background-1, .cave-background-2, .cave-lantern-light").forEach(el => {
            let parent = el.closest(".cave-container");
            if (!parent) return;
    
            let parentRect = parent.getBoundingClientRect();
            let viewportHeight = window.innerHeight;
            let viewportWidth = window.innerWidth;
    
            let speed = parseFloat(el.dataset.speed) || 1;

            let aspectRatio = viewportWidth / viewportHeight;
            let intensityFactor = Math.min(1, aspectRatio * 1.5);

            let progress = (parentRect.top + parentRect.height / 2 - viewportHeight / 2) / (viewportHeight / (intensityFactor));
            let offset = progress * speed * (viewportHeight / 100) * intensityFactor;
            
            el.style.transform = `translateY(${offset}px)`;
        });
    }, { passive: true });

    function adjustMargins() {
        let innerWidth = window.innerWidth
        let aboutMeContent = document.querySelector(".about-me-content");

        if (innerWidth < 1362) {
            aboutMeContent.style.marginLeft = "5%";
            aboutMeContent.style.marginRight = "5%";
        } else {
            aboutMeContent.style.marginLeft = "15%";
            aboutMeContent.style.marginRight = "15%";
        }

        let justADevLabel = document.querySelector(".just-a-dev-label");
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