var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // About page
 {
    path: '/seasons/',
    url: './pages/seasons.html',
    name: 'seasons',
  },
  {
    path: '/years_1996-2000/',
    url: './pages/years_1996-2000.html',
    name: 'years_1996-2000',
  },
  {
    path: '/years_2001-2010/',
    url: './pages/years_2001-2010.html',
    name: 'years_2001-2010',
  },
  {
    path: '/years_2011-2016/',
    url: './pages/years_2011-2016.html',
    name: 'years_2011-2016',
  },
  {
    path: '/fall-1996/',
    url: './pages/1996/fall-1996.html',
    name: 'fall-1996',
  },
   {
    path: '/spring-1996/',
    url: './pages/1996/spring-1996.html',
    name: 'spring-1996',
  },
  {
    path: '/fall-1997/',
    url: './pages/1997/fall-1997.html',
    name: 'fall-1997',
  },
   {
    path: '/spring-1997/',
    url: './pages/1997/spring-1997.html',
    name: 'spring-1997',
  },
  {
    path: '/fall-1998/',
    url: './pages/1998/fall-1998.html',
    name: 'fall-1998',
  },
   {
    path: '/spring-1998/',
    url: './pages/1998/spring-1998.html',
    name: 'spring-1998',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
