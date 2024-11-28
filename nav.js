document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('js-menu');
    var navbarToggle = document.getElementById('js-navbar-toggle');

    navbarToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function (event) {
        var isClickInsideMenu = menu.contains(event.target);
        var isClickInsideNavbarToggle = navbarToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideNavbarToggle && menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });

    // Prevent closing when clicking inside the menu
    menu.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
