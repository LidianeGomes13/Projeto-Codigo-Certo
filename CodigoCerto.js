const el = document.querySelector ('#text');
const text = "Sobre, Gosto Pesssoal, Motivações, Lidiane Gomes, Habilidades, HTML, CSS, JavaScript ";
const interval = 300;
function showText (el, text, interval){
    const char = text.split('').reverse();
    const typer = setInterval (() => {
        if (!char.lenght){
            return clearInterval(typer);
        }
        const next = char.pop();
        
        el.innerHTML += next;

    }

    )
}
showText (el, text, interval);
