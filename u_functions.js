class BoolRef {

    constructor(value) {
        this.value = value;
    }
}




function cancelAnim(element) {
    element.getAnimations().forEach((anim) => {
        anim.cancel();
    });
}


function restartAnim(element) {
    element.getAnimations().forEach((anim) => {
        anim.play();
    });
}


function toggleNav(boolref, targetid, openclass, closeclass) {
    let nav = document.getElementById(targetid)
    let classToRemove = boolref.value ? openclass : closeclass;
    let classToAdd = boolref.value ? closeclass : openclass;
    boolref.value = !boolref.value;
    nav.classList.remove(classToRemove);
    restartAnim(nav);
    nav.classList.add(classToAdd);
}



function createLi(label, className, linkto) {
    let li = document.createElement('li')
    li.classList.add(className)
    let anchor = document.createElement('a')
    anchor.setAttribute('href', linkto)
    anchor.append(document.createTextNode(label))
    li.append(anchor)
    return li
}


function createSectionHeader(text) {
    let header = document.createElement('header')
    header.classList.add('section-header')
    header.append(document.createTextNode(text))
    return header
}


/**
 * Creates a div element and assigns the given text as its innerHTML.
 * This is useful for creating real HTML elements from text, such as
 * when testing how real elements would look like with a certain piece
 * of HTML.
 * @param {string} text - The text to assign as the innerHTML of the created div element.
 * @returns {Element} - The created div element.
 */
function createRealHTML(text) {
    let div = document.createElement('div')
    div.innerHTML = text
    return div
}

/**
 * Creates a series of nested elements with the given text as the innerText of the innermost element.
 * @param {string[]} wrappperElementsArr - An array of strings where each string is the name of the element to wrap around the text.
 * @param {string} text - The text to be placed inside the wrapper elements.
 * @returns {Element} - The outermost element created, which contains the text and all the wrapper elements.
 */
function createWrappedText(wrappperElementsArr, text) {
    let wrapperElements = wrappperElementsArr
    let firstWrapper = null
    let subsequentParents = null
    for (let i = 0; i < wrapperElements.length; i++) {
        let wrapper = document.createElement(wrapperElements[i]);
        if (i == 0) {
            firstWrapper = wrapper
        } else {
            subsequentParents.appendChild(wrapper);
        }
        subsequentParents = wrapper
    }
    let textNode = document.createTextNode(text);
    subsequentParents.append(textNode);

    return firstWrapper
}
/**
 * Creates an HTML pre element containing code highlighted by the Highlight.js library.
 * @param {String} code - The code to be highlighted.
 * @param {String} language - The language of the code to be highlighted.
 * @returns {HTMLElement} - A pre element containing the highlighted code.
 */
function create_hljs_syntaxHighlightCode(code, language) {
    let highlighted = hljs.highlight(code, { language: language })
    let pre = document.createElement('pre')
    pre.innerHTML = highlighted.value
    return pre
}

/**
 * Creates an HTML paragraph element containing a code snippet with its explanation.
 * The code snippet is displayed within a <code> tag and separated from its explanation by a hyphen.
 *
 * @param {String} text1 - The code snippet to be displayed.
 * @param {String} text2 - The explanation of the code snippet.
 * @returns {HTMLElement} - A paragraph element containing the formatted code snippet and explanation.
 */
function createExplain(text1, text2) {
    let explainContainer = document.createElement('p')
    explainContainer.setAttribute('class', 'explain-container')

    let codeSnippet = document.createElement('code')
    codeSnippet.setAttribute('class', 'explain-code-snippet')
    codeSnippet.textContent = text1

    let seperator = document.createElement('span')
    seperator.append(document.createTextNode(' - '))

    let codeExplain = document.createTextNode(text2)

    explainContainer.append(codeSnippet, seperator, codeExplain)

    return explainContainer
}


function createPanelPair(elementArr1, elementArr2) {
    let panelContainer = document.createElement('div')
    let leftPanel = document.createElement('div')
    let rightPanel = document.createElement('div')
    panelContainer.classList.add('panel-container')
    leftPanel.classList.add('left-panel')
    rightPanel.classList.add('right-panel')

    leftPanel.append(...elementArr1)
    rightPanel.append(...elementArr2)

    panelContainer.append(leftPanel, rightPanel)

    return panelContainer
}