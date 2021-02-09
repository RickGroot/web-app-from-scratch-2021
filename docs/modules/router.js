export function router() {
    document.getElementById('home').classList.remove("invis");
    document.getElementById('detail').classList.add("invis");
    routie({
        'post/:id': () => {
            document.getElementById('home').classList.add("invis");
            document.getElementById('detail').classList.remove("invis");
        }
    })
}