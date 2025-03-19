window.onload = function () {
    
    // SELECT THE BODY
    let portfolioBody = document.querySelector("#landing_portfolio__body");
    if(!portfolioBody) {
        portfolioBody = document.querySelector("body");
    }

    // SELECT THE GITHUB ICON
    let githubBlackIcon = document.querySelector("#github_black_logo");
    let githubWhiteIcon = document.querySelector("#github_white_logo");
    let xBlackIcon = document.querySelector("#x_black_logo");
    let xWhiteIcon = document.querySelector("#x_white_logo");
    
    // COLORFUL THEME
    const sectionFunct1 = document.querySelector("#grid__funct_1");
    if (sectionFunct1) {
        sectionFunct1.addEventListener("click", function () {
            const linkStylesheet = document.querySelector("#grid_theme_scss");
            if (linkStylesheet) {
                linkStylesheet.setAttribute(
                    "href",
                    "./src/styles/main-grid-colorful.scss"
                );

                if(portfolioBody.hasAttribute("style")) {
                    portfolioBody.removeAttribute("style")
                }

                if(githubBlackIcon.classList.contains("display_none")) githubBlackIcon.classList.remove("display_none")
                if(!githubWhiteIcon.classList.contains("display_none")) githubWhiteIcon.classList.add("display_none")
                if(xBlackIcon.classList.contains("display_none")) xBlackIcon.classList.remove("display_none")
                if(!xWhiteIcon.classList.contains("display_none")) xWhiteIcon.classList.add("display_none")
            }
        });
    }

    // LIGHT THEME
    const sectionFunct3 = document.querySelector("#grid__funct_3");
    if (sectionFunct3) {
        sectionFunct3.addEventListener("click", function () {
            const linkStylesheet = document.querySelector("#grid_theme_scss");
            if (linkStylesheet) {
                linkStylesheet.setAttribute(
                    "href",
                    "./src/styles/main-grid-white.scss"
                );

                if(portfolioBody.hasAttribute("style")) {
                    portfolioBody.removeAttribute("style")
                }

                if(githubBlackIcon.classList.contains("display_none")) githubBlackIcon.classList.remove("display_none")
                if(!githubWhiteIcon.classList.contains("display_none")) githubWhiteIcon.classList.add("display_none")
                if(xBlackIcon.classList.contains("display_none")) xBlackIcon.classList.remove("display_none")
                if(!xWhiteIcon.classList.contains("display_none")) xWhiteIcon.classList.add("display_none")


            }
        });
    }

    // DARK THEME
    const sectionFunct4 = document.querySelector("#grid__funct_4");
    if (sectionFunct4) {
        sectionFunct4.addEventListener("click", function () {
            const linkStylesheet = document.querySelector("#grid_theme_scss");

            if (linkStylesheet) {
                linkStylesheet.setAttribute(
                    "href",
                    "./src/styles/main-grid-dark.scss"
                );

                if(portfolioBody.hasAttribute("style")) {
                    portfolioBody.removeAttribute("style")
                }

                
                if(githubWhiteIcon.classList.contains("display_none")) githubWhiteIcon.classList.remove("display_none")
                if(!githubBlackIcon.classList.contains("display_none")) githubBlackIcon.classList.add("display_none")
                if(xWhiteIcon.classList.contains("display_none")) xWhiteIcon.classList.remove("display_none")
                if(!xBlackIcon.classList.contains("display_none")) xBlackIcon.classList.add("display_none")
            }
        });
    }

    // SWITCH BG
    const sectionFunct2 = document.querySelector("#grid__funct_2");
    if (sectionFunct2) {
        sectionFunct2.addEventListener("click", function () {
            
            let colors = [
                "#111111",
                "#222222",
                "#303030",
                "#f4f4f4",
                "#F5F5F5",
                "#F0F0F0",
                "#6997a5",
                "#5a9eb9",
                "#ff934b",
                "#FCCA46",
                "#ceffb2",
                "#619B8A",
                "#B1B1B1",
                "#9f70b4"
            ]
            
            let nRandom = Math.floor(Math.random() * colors.length)
            
            portfolioBody.style.backgroundColor = colors[nRandom];
            
        });
    }
};
