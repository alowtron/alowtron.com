function navBarDisplay(page, subfolder = false) {
    let indexClass = ""
    if (page == "index") {
        indexClass = "class=\"active\""
    } else {
        indexClass = ""
    }
    if (page == "projects") {
        projectClass = "class=\"active\""
    } else {
        projectClass = ""
    }
    if (page == "about") {
        aboutClass = "class=\"active\""
    } else {
        aboutClass = ""
    }
    if (page == "blog") {
        blogClass = "class=\"active\""
    } else {
        blogClass = ""
    }
    if (subfolder == true) {
        upFolder = "../"
    } else {
        upFolder = ""
    }
    document.write(
        "<nav>",
            `<a href=\"index.html\"> <img src=\"${upFolder}images/logo.png\" class=\"logo\" alt=\"Logo\" ></img> </a>`,
                "<ul>",
                    "<li>",
                        `<li ${indexClass}><a href=\"${upFolder}index.html\">Home</a></li>`,
                        `<li ${projectClass}><a href=\"${upFolder}projects.html\">Projects</a></li>`,
                        `<li ${aboutClass}><a href=\"${upFolder}about.html\">About</a></li>`,
                        `<li ${blogClass}><a href=\"${upFolder}blog.html\">Blog</a></li>`,
                    "</li>",
                "</ul>",
        "</nav>"
    )
}
 