class CardNews extends HTMLElement {
    constructor() {
        super();
        
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');

        const author = document.createElement('span');
        author.textContent = "By " + (this.getAttribute('author') || "Anonymous");
        cardLeft.appendChild(author);

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url');
        cardLeft.appendChild(linkTitle);

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card_right')
        
        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('photo') || "https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg";
        newsImage.alt = "Foto da notícia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
        .card {
            width: 720px;
            padding: 15px;
            display: flex;
            flex-direction: row;
            box-shadow: 8px 8px 12px 0 rgb(0, 0, 0, .3);
            justify-content: space-between;
            border-radius: 10px;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        
        .card_left > span {
            font-weight: bold;
        }
        
        .card_left > a {
            margin-top: 10px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left > p {
            color: gray;
        }
        
        .card_right img {
            width: 180px;
            height: 180px;
        }
        `;

        return style
    }
}

customElements.define('card-news', CardNews)