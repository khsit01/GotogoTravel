// 建成旅行社 GOTOGO TRAVEL — 互動腳本

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    // 手機版漢堡選單開關
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
            });
        });
    }

    // 捲動進場淡入動畫
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry, i) {
                if (entry.isIntersecting) {
                    // 同批元素依序錯開淡入
                    entry.target.style.transitionDelay = (i % 3) * 0.1 + 's';
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealEls.forEach(function (el) { observer.observe(el); });
    } else {
        // 不支援時直接顯示
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }
});
