import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface CardData {
  title: string;
  imageUrl: string;
  description: string;
}

@customElement('card-list')
export class CardList extends LitElement {
  @state() 
  private cards: CardData[] = [];
  @state() 
  private filteredCard: CardData | null = null
  @state() 
  private searchInput: string = ''
  @state() 
  private isLoading: boolean = false

  static styles = css`
  
    input{
      left: 5%;
      ;
    }
    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      width: 400px;
    }

    .card img {
      
      border-radius: 4px;
      margin-bottom: 8px;
      position: relative;
      left: 25%;
      
    }

    .card p{
      //position: relative;
      left: 5%;
      position: relative;
      top: 25%;
    }
  `
  async connectedCallback() {
    super.connectedCallback()
    await this.fetchData()
  }
  //Este metodo hace de simulacion  de obtencion de datos
  async fetchData() {
    //Simula la petcion
    await new Promise(resolve => setTimeout(resolve, 2000))

    this.cards = [
      {
        title: 'Tarjeta 1',
        imageUrl: 'https://picsum.photos/id/70/200',
        description: '(╯︵╰) Que miedo estar aqui o relajante. (╯︵╰)',
      },
      {
        title: 'Tarjeta 2',
        imageUrl: 'https://picsum.photos/id/15/200',
        description: '٩(◕‿◕｡)۶ Cascadita ٩(◕‿◕｡)۶',
      },
      {
        title: 'Tarjeta 3',
        imageUrl: 'https://picsum.photos/id/18/200',
        description: '( ◠‿◠ ) Lugar perfecto para un picnic ( ◠‿◠ )',
      },
      {
        title: 'Tarjeta 4',
        imageUrl: 'https://picsum.photos/id/10/200',
        description: '┐(︶▽︶)┌ Sin ideas ┐(︶▽︶)┌',
      },
    ]
    this.filteredCard = this.cards[0]
  }
  
  handleSearchInput(event: Event) {
    const input = event.target as HTMLInputElement
    this.searchInput = input.value
    this.isLoading = true

    // Aqui hice el filtro del array y solo mostramos lo que coincida con el texto de busqueda
    setTimeout(() => {
      const filteredCards = this.cards.filter(card =>
        card.title.toLowerCase().includes(this.searchInput.toLowerCase())
      )
      this.filteredCard = filteredCards[0] || null
      this.isLoading = false
    }, 2000)
  }

  render() {
    return html`
      <input
        aling
        type="text"
        placeholder="Numero de tarjeta a buscar"
        .value="${this.searchInput}"
        @input="${this.handleSearchInput}"
      />
      ${this.isLoading
        ? html`<p>(･ω<)☆ Buscando card, espere porfavor. (･ω<)☆</p>`
        : html`
            ${this.filteredCard
              ? html`
                  <div class="card">
                    <h2>${this.filteredCard.title}</h2>
                    <img
                      src="${this.filteredCard.imageUrl}"
                      alt="${this.filteredCard.title}"
                    />
                    <p>${this.filteredCard.description}</p>
                  </div>
                `
              : html`<p>（>﹏<） No se encontró ninguna tarjeta （>﹏<）</p>`}
          `}
    `;
  }
}