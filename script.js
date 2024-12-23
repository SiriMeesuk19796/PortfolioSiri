var typed = new Typed(".text1", {
    strings: ["Computer Science student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuIcon = document.getElementById('menu-icon');
const tapbar = document.querySelector('.Tapbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
    tapbar.classList.toggle('active');
}

document.querySelectorAll('.Tapbar a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.Tapbar a.active')?.classList.remove('active');
        this.classList.add('active');
    });
});

function setActiveLink() {
    const links = document.querySelectorAll('.Tapbar a');
    const currentHash = window.location.hash || '#Home'; // ตั้งค่า #Home ถ้าไม่มี hash
    links.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// เรียกฟังก์ชันเมื่อโหลดหน้าเว็บ
window.addEventListener('load', setActiveLink);

// เรียกฟังก์ชันเมื่อเปลี่ยน hash
window.addEventListener('hashchange', setActiveLink);


// ฟังก์ชันรีเซ็ตแอนิเมชัน
function resetAnimations() {
    const animatedElements = document.querySelectorAll('[class*="animation"], [class*="slide"]');

    animatedElements.forEach(element => {
        // ลบแล้วเพิ่มคลาสใหม่เพื่อรีเซ็ตแอนิเมชัน
        element.classList.remove('animation', 'slideRight', 'slideLeft', 'slideTop', 'slideBottom');
        void element.offsetWidth; // Trigger reflow
        element.classList.add('animation', 'slideRight'); // เพิ่มคลาสที่คุณต้องการ
    });
}

document.querySelectorAll('.Tapbar a').forEach(link => {
    link.addEventListener('click', function () {
        this.style.animation = 'none'; // หยุดแอนิเมชัน
        this.offsetHeight; // Trigger reflow
        this.style.animation = ''; // เริ่มแอนิเมชันใหม่
    });
});

