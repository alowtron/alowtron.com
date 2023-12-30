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
    document.write(
        "<nav>",
            "<a href=\"index.html\"> <img src=\"logo.png\" class=\"logo\" alt=\"Logo\" ></img> </a>",
                "<ul>",
                    "<li>",
                        `<li ${indexClass}><a href=\"index.html\">Home</a></li>`,
                        `<li ${projectClass}><a href=\"projects.html\">Projects</a></li>`,
                        "<li><a href=\"about.html\">About</a></li>",
                    "</li>",
                "</ul>",
        "</nav>"
    )
}
