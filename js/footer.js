{
    const body = document.body,
    html = document.documentElement;

    const dheight = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );

    const footer = document.querySelector('.footer');

    if (dheight <= window.innerHeight) {
        footer.classList.add('fixed-bottom');
    }
}