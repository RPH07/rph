//sidenav
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

//slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transsition: 600,
    interval: 3000
});

//parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

//materialboxed
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// scrollspy
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {
    scrollOffset: 50
});


// dropdown
const dropdown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdown);