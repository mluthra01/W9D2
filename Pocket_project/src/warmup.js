
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const pTag = document.createElement("p");
    pTag.innerHTML = string;

    if (htmlElement.children.length > 0) {
        while (htmlElement.firstChild) {
            htmlElement.removeChild(htmlElement.firstChild);
        }
    }
    htmlElement.appendChild(pTag)
};

// htmlGenerator('Party Time.', partyHeader);
// console.log(partyHeader)