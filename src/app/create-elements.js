//Helper functions for creating and setting elements on DOM
const createElements = (element, text = "") => {

    let create = document.createElement(element)

    create.textContent = text;

    return create;
}


const setAttributes = (attributes, elements = []|"") => {
    let properties = Object.keys(attributes);
    let values = Object.values(attributes);

   for (let i = 0; i < Object.keys(attributes).length; i++) {
       
       if (Array.isArray(elements)) {
            elements.map(element => {
                element.setAttribute(properties[i], values[i])
            })
       } else {
           elements.setAttribute(properties[i], values[i])
       }
    
    }
}

const attachElements = (parent, children = ""|[]) => {
    if (Array.isArray(children)) {
        children.map((child) => parent.append(child));
    }
    else{
        parent.append(children);
    }
}


export {createElements, setAttributes, attachElements}