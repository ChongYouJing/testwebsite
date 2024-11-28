
function setupNav(){
    let navUl = document.getElementById('nav-ul')
    // cancelAnim(navUl);

    navUl.append(
        createLi('Home', 'nav-li', 'testing.html'),
        createLi('About', 'nav-li', 'about.html'),
        createLi('HTML', 'nav-li', 'learnhtml.html'),
        createLi('CSS', 'nav-li', 'learncss.html'),
        createLi('Javascript', 'nav-li', 'learnjs.html'),
    )
}


function setupAside(){
    let asideUl = document.getElementById('aside-ul')
    // cancelAnim(asideUl);

    let asideUiArr = []
let sectionHeaders = document.getElementsByClassName('section-header')
for (let i = 0; i < sectionHeaders.length; i++) {
    let newId  = "section" + (i + 1)
    let sectionHeaderContent = sectionHeaders[i].textContent
    sectionHeaders[i].id = newId

    asideUiArr.push(createLi(sectionHeaderContent, 'aside-li', "#" + newId))
}
asideUl.append(...asideUiArr)
}

class TEST {
    constructor() {
        console.log("test class")
    }
}