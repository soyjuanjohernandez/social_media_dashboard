var checkbox = document.querySelector('.input-switch');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        // alert("hola");
        // trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        // trans()
        // alert("hola2");
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

// let trans = () => {
//     document.documentElement.classList.add('transition');
//     window.setTimeout(() => {
//         document.documentElement.classList.remove('transition');
//     }, 1000)
// }