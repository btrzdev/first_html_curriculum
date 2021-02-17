const portifolioItems = document.querySelectorAll('.portifolio-item');
const modalID = 'modal-portifolio';

for (let item of portifolioItems) {
    item.addEventListener('click', () => {
        const iframe = document.getElementById('portifolio-frame');
        if (item.id == 'portifolio-item1') {
            iframe.src = 'https://front-end-menthor1.vercel.app/'
        }
        else if (item.id == 'portifolio-item2') {
            iframe.src = 'https://firsthtmlpage.vercel.app/'
        }
        document.getElementById(modalID)
            .classList.add('show-modal');
    }, modalID);
}

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    document.getElementById(modalID)
        .classList.remove('show-modal');
}, modalID);
