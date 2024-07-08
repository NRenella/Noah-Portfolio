function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleText(button) {
    const container = button.closest('.details-container');
    const moreText = container.querySelector('.more-text');
    const isOpen = moreText.classList.contains('open');

    // Toggle the clicked container's more-text
    if (isOpen) {
        moreText.classList.remove('open');
        moreText.style.height = '0';
        button.innerHTML = 'Read More <i class="fa fa-bars"></i>';
    } else {
        moreText.classList.add('open');
        moreText.style.height = `${moreText.scrollHeight}px`; // Set height to scrollHeight
        button.innerHTML = 'Read Less <i class="fa fa-chevron-up"></i>';
    }
}