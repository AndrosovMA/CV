/**
 * data for hard_skills_html
 */

document.querySelector('#my-photo').src = data_html.photo;

document.querySelector('#my-name').innerHTML = ` <a href="https://itgid.info/course/html">
Курс HTML для JavaScript разработчиков </a>`;
document.querySelector('#job-title').textContent = data_html.job_title;


/**
 * skills after lerning HTML
 */

let skillsHTML = '';
data_html.hard_skills.forEach(item => {
    skillsHTML += `<li>${item}</li>`;
});
document.querySelector('.skills').innerHTML = skillsHTML;
