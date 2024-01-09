function navBarDisplay(page, subfolder = false) {
    let indexClass = ""
    if (page == "index") {
        indexClass = "class=\"active\""
    }
    let projectClass = ""
    if (page == "projects") {
        projectClass = "class=\"active\""
    }
    let aboutClass = ""
    if (page == "about") {
        aboutClass = "class=\"active\""
    }
    let blogClass = ""
    if (page == "blog") {
        blogClass = "class=\"active\""
    }
    let upFolder = ""
    if (subfolder == true) {
        upFolder = "../"
    }
    document.write(
        "<nav>",
            `<a href=\"index.html\"> <img src=\"${upFolder}images/logo.png\" class=\"logo\" alt=\"Logo\" ></img> </a>`,
                "<ul>",

                        `<li ${indexClass}><a href=\"${upFolder}index.html\">Home</a></li>`,
                        `<li ${projectClass}><a href=\"${upFolder}projects.html\">Projects</a></li>`,
                        `<li ${aboutClass}><a href=\"${upFolder}about.html\">About</a></li>`,
                        `<li ${blogClass}><a href=\"${upFolder}blog.html\">Blog</a></li>`,

                "</ul>",
        "</nav>"
    )
}
 