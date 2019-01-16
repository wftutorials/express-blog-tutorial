const nav = [
    { link: '/', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' },
    { link: '/post/create', title: 'Create' },
    { link: '/logout', title: 'Logout' }
  ];

const gnav = [
    { link: '/', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' },
    { link: '/post/create', title: 'Create' },
    { link: '/login', title: 'Login' }
  ];

exports.guestNav = nav;

exports.userNav = gnav;
