function getAuthor() {
  return fetch(
    "https://cdn.contentful.com/spaces/lqx8cz94cbtd/environments/master/entries?access_token=8dG_y8BqLdSR9AEqZIGxd2twtwPRYZCNm8bhSMH4MEw&content_type=author&include=2"
  )
    .then((res) => res.json())
    .then((json) => {
      const item = json.items[0];

      const author = {
        name: item.fields.name,
        description: item.fields.description,
      };

      const image = json.includes.Asset.find(
        (asset) => asset.sys.id === item.fields.image.sys.id
      );

      author.image = "https:" + image.fields.file.url;

      return author;
    });
}

async function aboutMe(el) {
  const aboutMeText = document.createElement("div");
  const aboutMeImg = document.createElement("div");
  const author = await getAuthor();

  aboutMeText.innerHTML = `
    <div class="about-me__text-container">
        <h2 class="about-me__title">Soy ${author.name}</h2>
        <p class="about-me__description">${author.description}</p>
    </div>
    `;

    aboutMeImg.innerHTML = `
    <img src="${author.image}" alt="" class="about-me__img">
    `

    el.appendChild(aboutMeText);
    el.appendChild(aboutMeImg);
}
