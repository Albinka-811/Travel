function myFunction () {
    let closed = false
    const blocks = [...document.querySelectorAll('.pictures-column')]
    const btn = document.getElementById('pictures-toggle')

    btn.addEventListener('click', function () {
        for (let elem of blocks.slice(1)) {
            elem.classList.toggle('hide', closed)
        }
        closed = !closed
    })
}

myFunction()
