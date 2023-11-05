const project_name = [
    ['Css Playing Car', 'Css Playing Car implementing Html , Css', 'https://github.com/shamodhas/Internet-Technologies-Assignment-04'],
    ['student Management System', 'student Management System implementing PRF Concept', 'https://github.com/kavitharangani/liveChat.git'],
    ['Group Chat Application', 'Group chat application implementing java socket programming', 'https://github.com/kavitharangani/liveChat.git'],
    ['Pharmacy Management System', 'Pharmacy Management software implementing Layered Architecture', 'https://github.com/kavitharangani/Pharmacy.git'],
    ['Connect Four Game', 'Connect Four Game implementing Oop Concept', 'https://github.com/kavitharangani/liveChat.git'],
    ['POS Management System', 'POS Management System implementing Html, Css, JavScript', 'https://github.com/kavitharangani/liveChat.git'],
    ['Test', 'test']
];
let project_index = 0;
window.addEventListener('load', () => {
    const carousels = document.querySelectorAll('.my-project-carousel');
    for (let i = 0; i < carousels.length; i++) carousel(carousels[i]);
});
function carousel(root) {
    var
        figure = root.querySelector('.project-carousel-item'),
        nav = root.querySelector('.project-carousel-nav'),
        images = figure.children,
        n = images.length,
        bfc = ('bfc' in root.dataset),
        theta = 2 * Math.PI / n,
        currImage = 0;

    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });

    setupNavigation();

    function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));
        figure.style.transformOrigin = `50% 50% ${-apothem}px`;

        for (var i = 0; i < n; i++)
            images[i].style.padding = `20px`;
        for (i = 1; i < n; i++) {
            images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
            images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        if (bfc)
            for (i = 0; i < n; i++)
                images[i].style.backfaceVisibility = 'hidden';

        rotateCarousel(currImage);
    }

    function setupNavigation() {
        nav.addEventListener('click', (e)=>{
            e.stopPropagation();

            var t = e.target;
            if (t.tagName.toUpperCase() !== 'BUTTON')
                return;
            // if(project_index === 7) project_index = 0;
            if (t.classList.contains('next')) {
                project_index++;
                currImage++;
            } else
            {
                project_index--;
                currImage--;
            }
            rotateCarousel(currImage);
        }, true);
    }
    function rotateCarousel(imageIndex) {
        if (project_index < 0) project_index = project_index + 8;
        if (project_index > 7) project_index = project_index - 8;
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
        $('.my-project-header h5').text(project_name[project_index][0])
        $('.my-project-header p').text(project_name[project_index][1])
        $('.my-project-header a').attr('href', project_name[project_index][2]);
        console.log(project_index)
    }
}