// console.log("hi");
// navigator.vibrate(1000);
// این متد گوشی رو به لرزه در میاره و عدد به میلی ثانیه هست
document.getElementById('toggleButton').addEventListener('click', function() {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block'; // نمایش المان‌ها
            this.innerHTML ='<i class="icono-cross"></i>'; // تغییر متن دکمه
        } else {
            element.style.display = 'none'; // پنهان کردن المان‌ها
            this.innerHTML = '<i class="icono-hamburger"></i>'; // تغییر متن دکمه
        }
    });
});
document.getElementById('toggleButton').addEventListener('click', function() {
    const elements = document.querySelectorAll('.element2');
    elements.forEach(element => {
        if (element.style.display === 'block' || element.style.display === '') {
            element.style.display = 'none'; // نمایش المان‌ها
            this.innerHTML ='<i class="icono-cross"></i>'; // تغییر متن دکمه
        } else {
            element.style.display = 'block'; // پنهان کردن المان‌ها
            this.innerHTML = '<i class="icono-hamburger"></i>'; // تغییر متن دکمه
        }
    });
});
document.getElementById('toggleButton').addEventListener('click', function() {
    const elements = document.querySelectorAll('.body');
    elements.forEach(element => {
        if (element.style.filter === 'blur(0)' || element.style.filter === '') {
            element.style.filter = 'blur(2)'; // نمایش المان‌ها
            this.innerHTML ='<i class="icono-cross"></i>'; // تغییر متن دکمه
        } else {
            element.style.filter= 'blur(0)'; // پنهان کردن المان‌ها
            this.innerHTML = '<i class="icono-hamburger"></i>'; // تغییر متن دکمه
        }
    });
});
