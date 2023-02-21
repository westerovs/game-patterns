const render = (container, template, place = 'beforeend') => {
    if (container instanceof Element) {
        container.insertAdjacentHTML(place, template)
    }
}

export {
    render
}
