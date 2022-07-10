const sectionEl = document.querySelector('.detail-section');

const div = document.createElement('div');
const imgEl = document.createElement('img');

const params = new URLSearchParams(window.location.search);

imgEl.src = `../assets/${params.get('id')}.png`;

div.classList.add('detail-item');

div.append(imgEl);
sectionEl.append(div);
