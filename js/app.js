/**
 * Основные данные - шапка резюме
 */
document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
document.querySelector('.summary').textContent = data.summary;

/**
 * section data
 */
let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += ` <h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;


/**
 * contact data
 */
document.querySelector('.contacts-block').innerHTML += `<li><span class="material-icons">phone</span> <a href="tel:${data.phone}">${data.phone_1} </a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><span class="material-icons">email</span> <a href="mailto:${data.email_1}">${data.email_1}</a></li>`
// document.querySelector('.contacts-block').innerHTML += `<li><span class="material-icons">email</span> <a href="mailto:${data.email_2}">${data.email_2}</a></li>`
// document.querySelector('.contacts-block').innerHTML += `<li><span class="material-icons">phone</span> <a href="callto:${data.skype}">${data.skype}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><span class="material-icons"><span class="material-icons-outlined">account_circle</span></span> <a href="${data.linkedin}">Profile GitHub</a></li>`
document.querySelector('.age').innerHTML = `<p>Возраст -  ${data.age}</p>`;
document.querySelector('.address').innerHTML = `<p>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;

/**
 * hard skills
 */
let skillsData = '';
data.hard_skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

/**
 * soft skills
 */
let skillsData2 = '';
data.soft_skills.forEach(item => {
    skillsData2 += `<li>${item}</li>`;
});
document.querySelector('.skills-list2').innerHTML = skillsData2;

/**
 * education
 */
let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}, ${item[2]}, ${item[3]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

