var pages = {};
pages.index = {
  path: '/',
  body: '',
  attributes:{ title: 'Mobile Route' }
};
pages.login = {
  path: '/login',
  body: '<p>1</p>',
  attributes:{ title: 'login'}
};
pages.dashboard = {
  path: '/dashboard',
  body: '<p>2</p>',
  attributes:{ title: 'dashboards'}
};
pages.map = {
  path: '/map',
  body: '<p>3</p>',
  attributes:{ title: 'Map' }
};
pages.tasks = {
  path: '/tasks',
  body: '<p>4</p>',
  attributes:{ title: 'Tasks'}
};
pages.calendar = {
  path: '/calendar',
  body: '<p>5</p>',
  attributes:{ title: 'Calendar'}
};
pages.privacy = {
  path: '/privacy',
  body: '<p>6</p>',
  attributes:{ title: 'Privacy Policy'}
};
pages.profile = {
  path: '/profile',
  body: '<p>7</p>',
  attributes:{ title: 'Profile'}
};

module.exports = pages;
