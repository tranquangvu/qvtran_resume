require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

import 'ethereal/css/main.css';
import 'ethereal/js/breakpoints.min.js';
import 'ethereal/js/browser.min.js';

document.addEventListener('turbolinks:load', () => {
  require('ethereal/js/main.js');
});
