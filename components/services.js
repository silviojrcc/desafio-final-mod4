function getServices() {
    return fetch(
      "https://cdn.contentful.com/spaces/lqx8cz94cbtd/environments/master/entries?access_token=8dG_y8BqLdSR9AEqZIGxd2twtwPRYZCNm8bhSMH4MEw&content_type=work&include=2"
    )
      .then((res) => res.json())
      .then((json) => {
        const fieldsCollection = json.items.map((item) => {
          
          const trabajo = {
            title: item.fields.titulo,
            description: item.fields.descripcion,
            url: item.fields.url,
          };
          
          const imagen = json.includes.Asset.find(
            (asset) => asset.sys.id === item.fields.imagen.sys.id
          );
          trabajo.image = "https:" + imagen.fields.file.url;
          
          return trabajo;
        });
  
        return fieldsCollection;
      });
  }

async function services(){
    const cardsContainer = document.querySelector(".my-services__cards-container");
    
    const services = await getServices();

    services.forEach(service => {
        card(cardsContainer, service);
    });
    
}
services();