const CatCardSpecial = ({name, image, about}) => {
  return (`
    <div class="card">
      <h3>${name}</h3>
      <img src="${image}" width="313" height="320" alt="изображение кота"/>
      <p>${about}</p>
    </div>
  `)
}

export {
  CatCardSpecial
}
