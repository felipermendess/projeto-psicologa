function initScrollIntoView(){
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToView(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth', 
      block: 'start',
    });
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToView);
  })
}
initScrollIntoView();