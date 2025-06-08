//Helper functions for creating and setting elements on DOM
export const createElements = (element, id = "", text = "") => {

    let create = document.createElement(element);

    if (id != "") {
        create.setAttribute('id', id);
        create.setAttribute('class', id);
    }

    create.textContent = text;

    return create;
}


export const setAttributes = (attributes, elements = "" | []) => {
    let properties = Object.keys(attributes);
    let values = Object.values(attributes);

    let attribs = "";

    let valueCount = 0;

   if (Array.isArray(elements)) {
        elements.map((element) => {
            for (let i = 0; i < Object.keys(attributes).length; i++) {
            
                element.setAttribute(properties[i], values[i]);
            }
        })
   }else {
        for (let i = 0; i < Object.keys(attributes).length; i++) {
            
            elements.setAttribute(properties[i], values[i]);
        }
   }
    
     
}

export const attachElements = (parent, children = "" | []) => {
    if (Array.isArray(children)) {
        children.map((child) => {
            parent.appendChild(child);
        })
    }else{
        parent.appendChild(children);
    }
}