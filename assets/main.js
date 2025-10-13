const html = String.raw;

fetchData();

function renderProject(project) {
  let { title, description, date, slug, tags, deployedFromDist } = project;

  let formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  let tagHtml = '';
  tags.forEach(tag => {
    tagHtml += `<span>${tag}</span>`;
  });

  let previewUrl = deployedFromDist ? `${slug}/dist/` : `${slug}/`;

  let projectTemplate = html`
    <div class="project">
      <div class="screenshot">
        <img src="./assets/screenshots/${slug}.jpg" alt="Screenshot" />
      </div>
      <strong class="title">${title}</strong>
      <div class="description">${description}</div>
      <div class="date">
        <iconify-icon icon="mdi:calendar" inline></iconify-icon>
        ${formattedDate}
      </div>
      <div class="tags">${tagHtml}</div>
      <a href="${previewUrl}" target="_blank" rel="noopener noreferrer">
        Open Live Preview
        <iconify-icon icon="mdi:open-in-new" inline></iconify-icon>
      </a>
    </div>
  `;

  document.querySelector('.container').innerHTML += projectTemplate;
}

async function fetchData() {
  let response = await fetch('./assets/projects_data.json');
  let data = await response.json();

  data.forEach(project => {
    renderProject(project);
  });
}
