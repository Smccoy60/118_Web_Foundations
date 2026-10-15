const sitePages = [
    { key: "index", href: "index.html", label: "Home" },
    { key: "about", href: "About.html", label: "About" },
    { key: "resources", href: "Resources.html", label: "Payroll Administration Resources" },
    { key: "employeeResources", href: "EmployeeResources.html", label: "Employee Resources" }
]

function createSiteLink(page, currentPage) {
    const isCurrentPage = page.key === currentPage;

    return `
        <li>
            <a href="${page.href}"${isCurrentPage ? 'class="active" aria-current="page"' : ""}>${page.label}
            </a>
        </li>
    `;
}

function renderSiteHeader() {
    const header = document.querySelector("#nav-list");

    if (!header) {
        return;
    }

    const currentPage = document.body.dataset.page || "";
    const links = sitePages
        .map(function (page) {
            return createSiteLink(page, currentPage);
    })
        .join("");

    header.innerHTML = `
        <nav class="site-nav" aria-label="Main navigation">
            <ul>
                ${links}
            </ul>
        </nav>
    `;
}

renderSiteHeader();
