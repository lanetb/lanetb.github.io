const aboutMe = document.querySelector('.aboutMe');
const aboutMeHead = document.querySelector('.aboutMeHead');
const aboutMeText = document.querySelector('.aboutMeText');
const work = document.querySelector('.work');
const workHead = document.querySelector('.workHead');
const workText = document.querySelector('.workText');
const workText1 = document.querySelector('.workText1');
const workText2 = document.querySelector('.workText2');
const workText3 = document.querySelector('.workText3');
const school = document.querySelector('.school');
const schoolHead = document.querySelector('.schoolHead');
const schoolText = document.querySelector('.schoolText');
const bottom = document.querySelector('.bottom');

aboutMe.addEventListener('click', function() {
    aboutMe.classList.add('active');
    work.classList.remove('active');
    school.classList.remove('active');
    aboutMeHead.classList.remove('hidden');
    aboutMeText.classList.remove('hidden');
    workHead.classList.add('hidden');
    workText.classList.add('hidden');
    schoolHead.classList.add('hidden');
    schoolText.classList.add('hidden');
    workText1.classList.add('hidden');
    workText2.classList.add('hidden');
    workText3.classList.add('hidden');
});

work.addEventListener('click', function() {
    aboutMe.classList.remove('active');
    work.classList.add('active');
    school.classList.remove('active');
    aboutMeHead.classList.add('hidden');
    aboutMeText.classList.add('hidden');
    workHead.classList.remove('hidden');
    workText.classList.remove('hidden');
    schoolHead.classList.add('hidden');
    schoolText.classList.add('hidden');
    workText1.classList.remove('hidden');
    workText2.classList.remove('hidden');
    workText3.classList.remove('hidden');
});

school.addEventListener('click', function() {
    aboutMe.classList.remove('active');
    work.classList.remove('active');
    school.classList.add('active');
    aboutMeHead.classList.add('hidden');
    aboutMeText.classList.add('hidden');
    workHead.classList.add('hidden');
    workText.classList.add('hidden');
    schoolHead.classList.remove('hidden');
    schoolText.classList.remove('hidden');
    workText1.classList.add('hidden');
    workText2.classList.add('hidden');
    workText3.classList.add('hidden');
});
