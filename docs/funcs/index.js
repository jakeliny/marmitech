const CreateElement = (typeDiv, ParentDiv, text, attribute) => {
   const element = document.createElement(typeDiv)

   const validText = text ?? ''
   const validAttribute = attribute ?? ''
   const validParentDiv = ParentDiv ?? ''

   if (validText !== '') element.append(text)

   if (validAttribute !== '')
      Object.keys(attribute).map((a) => element.setAttribute(a, attribute[a]))

   if (validParentDiv !== '') ParentDiv.append(element)

   return element
}

const CreateElementNS = (typeDiv, ParentDiv, attribute) => {
   const element = document.createElementNS(
      'http://www.w3.org/2000/svg',
      typeDiv,
   )

   const testAttribute = attribute ?? ''
   const testParentDiv = ParentDiv ?? ''

   if (testAttribute !== '')
      Object.keys(attribute).map((a) => element.setAttribute(a, attribute[a]))

   if (testParentDiv !== '') ParentDiv.append(element)

   return element
}

const RemoveElement = function (element, attribute) {
   let a = element.querySelector(`${attribute}`)
   if (a !== null) {
      a.remove()
   }
}
