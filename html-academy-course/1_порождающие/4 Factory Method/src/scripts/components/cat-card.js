export default class CatCard {
  
  constructor(props) {
    this.name = props.name
    this.image = props.image
    this.about = props.about
  }
  
  render() {
    return (`
      <div class="card">
        <h3><span class="special">special<br></span>${this.name}</h3>
        <img src="${this.image}" width="313" height="320" alt="изображение кота"/>
        <p>${this.about}</p>
      </div>
    `)
  }
}

