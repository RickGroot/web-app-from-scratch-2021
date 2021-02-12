export function router() {

    routie({
        '': () => {
            document.getElementById('home').classList.remove("invis");
            document.getElementById('detail').classList.add("invis");
            document.getElementById('main').classList.remove("invis");
            document.getElementById('post').classList.add("invis");
            document.querySelector('footer').classList.remove("invis");
        },
        'post/:id': () => {
            document.getElementById('home').classList.add("invis");
            document.getElementById('detail').classList.remove("invis");
            document.getElementById('main').classList.add("invis");
            document.getElementById('post').classList.remove("invis");
            document.querySelector('footer').classList.add("invis");
        }
    })

}