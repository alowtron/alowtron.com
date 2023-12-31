function navBarDisplay(page) {
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
    document.write(
        "<nav>",
            "<a href=\"index.html\"> <img src=\"logo.png\" class=\"logo\" alt=\"Logo\" ></img> </a>",
                "<ul>",
                    "<li>",
                        `<li ${indexClass}><a href=\"index.html\">Home</a></li>`,
                        `<li ${projectClass}><a href=\"projects.html\">Projects</a></li>`,
                        `<li ${aboutClass}><a href=\"about.html\">About</a></li>`,
                        `<li ${blogClass}><a href=\"blog.html\">Blog</a></li>`,
                    "</li>",
                "</ul>",
        "</nav>"
    )
}
