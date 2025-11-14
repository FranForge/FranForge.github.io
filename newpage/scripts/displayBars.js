//Observa las barras.
const barObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            entry.target.style.width = entry.target.dataset.barFill;
        }
        else
        {
            entry.target.style.width = 0;
        }
    })
},{
    root: null,
    rootMargin: "0px 0px 0% 0px",
    threshold: 0.1
});

//Agrega solo las barras.
document.querySelectorAll('.bar').forEach(el => {
    barObserver.observe(el);
})