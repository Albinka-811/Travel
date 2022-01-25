function myFunction () {
    let closed = false
    let blocks = [...document.querySelectorAll('.pictures-column')]
    let btn = document.getElementById('pictures-toggle')

    btn.addEventListener('click', function () {
        for (let elem of blocks.slice(1)) {
            elem.classList.toggle('hide', closed)
        }
        closed = !closed
        console.log(closed)
    })
}

myFunction()
