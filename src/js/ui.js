const navbar = document.getElementById('navbar');
// const navbarLogo = document.querySelector('.navbar-logo');
const searchIcon = document.getElementById('navbar-search');
const closeIcon = document.getElementById('navbar-close');

const toggle = element => (removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
}

const navbarVariable = toggle(navbar);

// const logoVariable = toggle(navbarLogo);

searchIcon.addEventListener('click', () =>
    navbarVariable('no-search', 'search'));

closeIcon.addEventListener('click', () =>
    navbarVariable('search', 'no-search'));

const openHeader = (id) => (event) => {
    // console.log(event);
    const elemento = document.getElementById(id);
    elemento.classList.toggle('close');
}

export {
    openHeader
};

// const testCard = document.getElementById('test-card');

// testCard.addEventListener('click', () => openHeader('test-card'));