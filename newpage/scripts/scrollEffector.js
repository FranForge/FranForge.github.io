function applyScrollEffect()
{
    const elements = document.querySelectorAll('.scroll-effect');

    //Recorre todos los elementos.
    for(let i = 0; i < elements.length; i++)
    {
        const yMinValue = elements[i].dataset.scrollMinY;

        //Si es 0 se establece al maximo scroll de la pagina.
        const yMaxValue = elements[i].dataset.scrollMaxY === "0"
        ? Number.MAX_SAFE_INTEGER
        : Number(elements[i].dataset.scrollMaxY);

        //Verificamos el scroll de la ventana.
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || window.pageYOffset;

            if(scrollY > yMinValue && scrollY < yMaxValue)
            {
                if(!elements[i].classList.contains('scroll-effect-on'))
                {
                    elements[i].classList.add('scroll-effect-on');
                }
            }
            else
            {
                elements[i].classList.remove('scroll-effect-on');
            }

        });
    }
}

applyScrollEffect();