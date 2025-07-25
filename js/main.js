// بيانات المشاريع (صور السلايدر)
const projects = {
  project1: [
    'images/images_project_1/1-1.jpg',
    'images/images_project_1/1-2.jpg',
    'images/images_project_1/1-3.jpg',
    'images/images_project_1/1-4.jpg',
    'images/images_project_1/1-5.jpg',
    'images/images_project_1/1-6.jpg',
    'images/images_project_1/1-7.jpg',
    'images/images_project_1/1-8.jpg',
    'images/images_project_1/1-9.jpg',
    'images/images_project_1/1-10.jpg',
    'images/images_project_1/1-11.jpg',
    'images/images_project_1/1-12.jpg',
    'images/images_project_1/1-13.jpg',
    'images/images_project_1/1-14.jpg',
    'images/images_project_1/1-15.jpg',
    'images/images_project_1/1-16.jpg',
    'images/images_project_1/1-17.jpg',
    'images/images_project_1/1-18.jpg',
    'images/images_project_1/1-19.jpg',

  ],
  project2: [
    'images/images_project_2/2-0.jpg',
    'images/images_project_2/2-0-1.jpg',
    'images/images_project_2/2-0-2.jpg',
    'images/images_project_2/2-1.png',
    'images/images_project_2/2-2.png',
    'images/images_project_2/2-3.png',
    'images/images_project_2/2-4.png',
    'images/images_project_2/2-5.png',
  ]
};

let currentIndex = 0;
let currentProject = '';

// فتح السلايدر
function openSlider(projectKey) {
  currentProject = projectKey;
  currentIndex = 0;
  document.getElementById('overlay-slider').style.display = 'flex';
  showSlide();
}

// إغلاق السلايدر
function closeSlider() {
  document.getElementById('overlay-slider').style.display = 'none';
}

// عرض الصورة الحالية
function showSlide() {
  const imageEl = document.getElementById('slider-image');
  imageEl.src = projects[currentProject][currentIndex];
}

// الصورة السابقة
function prevSlide() {
  currentIndex = (currentIndex - 1 + projects[currentProject].length) % projects[currentProject].length;
  showSlide();
}

// الصورة التالية
function nextSlide() {
  currentIndex = (currentIndex + 1) % projects[currentProject].length;
  showSlide();
}

// إضافة Event Listeners على الكروت
document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', (event) => {
    // إذا كان العنصر المضغوط رابط <a> أو داخل رابط، لا تشغّل السلايدر
    if (event.target.closest('a')) return;

    const projectKey = item.getAttribute('data-slider');
    openSlider(projectKey);
  });
});