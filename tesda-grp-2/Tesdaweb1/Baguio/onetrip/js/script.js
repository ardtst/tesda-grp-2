let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

document.addEventListener('DOMContentLoaded', function () {
    const imgModalBox = document.getElementById("img-modal-box");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Function to open the image modal
    function openImageModal(imageSrc) {
        const imgModal = document.getElementById("img-modal");
        const imgElement = imgModal.querySelector('img');
        imgElement.src = imageSrc;
        imgModalBox.style.display = "block";
    }

    // Function to close the image modal
    function closeImageModal() {
        imgModalBox.style.display = "none";
    }

    // Add click event listeners to gallery items to open the image modal
    galleryItems.forEach(function (item) {
        const imageSrc = item.querySelector('img').src;
        item.addEventListener('click', function () {
            openImageModal(imageSrc);
        });
    });

    // Add event listener for the "Esc" key press
    document.addEventListener('keyup', function (event) {
        if (event.key === "Escape") {
            closeImageModal();
        }
    });
});