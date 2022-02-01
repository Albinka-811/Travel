function myFunction (blocksSelector, btnSelector, hideStateClass = 'hide') {
    let closed = false
    const blocks = [...document.querySelectorAll(blocksSelector)]
    const btn = document.getElementById(btnSelector)

    btn.addEventListener('click', function () {
        for (let elem of blocks.slice(1)) {
            elem.classList.toggle(hideStateClass, closed)
        }
        closed = !closed
    })
}

export {
    myFunction,
}
