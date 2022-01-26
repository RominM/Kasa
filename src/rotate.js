const Rotate = () => {
  const dropbox = document.querySelector('.dropbox-head');
  dropbox.addEventListener('click', () => {
    dropbox.classList.add('open');
  });
};

export default Rotate;
