const sectionEl = document.querySelector('.main-section');

for (let i = 2; i < 34; i++) {
    const div = document.createElement('div');
    const aTag = document.createElement('a');
    const imgEl = document.createElement('img');

    aTag.href = `./detail/?id=${i + 1}`;
    imgEl.src = `./assets/${i + 1}.png`;

    div.classList.add('gallery-item');

    aTag.append(imgEl);
    div.append(aTag);
    sectionEl.append(div);
} 