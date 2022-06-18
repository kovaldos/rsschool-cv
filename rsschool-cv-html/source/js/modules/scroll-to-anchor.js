// Script for smooth scrolling only because of MacOS and ios - Start -
import {scrollTo} from '../utils/scroll-to';
const initScrollToAnchor = () => {
  const anchorLinks = document.querySelectorAll('[data-target]');
  if (anchorLinks.length) {
    anchorLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const currentBlock = link.getAttribute('data-target');
        const blockTop = document.getElementById(currentBlock).offsetTop;
        e.preventDefault();
        scrollTo(blockTop, 400);
      });
    });
  }
};
export {initScrollToAnchor};
// Script for smooth scrolling only because of MacOS and ios - End -
