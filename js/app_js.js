/**
 * data for hard_skills_js
 */
document.querySelector('#my-photo-js').src = data_js.photo;

document.querySelector('#my-name-js').innerHTML = `<a href="https://itgid.info/course/javascript-2">
  Курс JavaScript </a>`;
document.querySelector('#job-title-js').textContent = data_js.job_title;

/**
 * skills after lerning JS
 */
let skillsJS = '';
data_js.hard_skills.forEach(item => {
    skillsJS += `<li>${item}</li>`;
});
document.querySelector('.skillsJS').innerHTML = skillsJS;
