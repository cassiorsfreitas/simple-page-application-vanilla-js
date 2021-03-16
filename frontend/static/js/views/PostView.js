import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Viewing Post')        
    }
    
    async getHtml() {
        if (this.params.id == 1) {
            return `
                <h1>Linkdin Profile</h1>
                <p>I'm Cássio Freitas from Brazil (🇧🇷). I started my career as Marketing Analyst and Digital Traffic Manager in 2015, and I am currently Code Cadet of the 52nd class of the Academia de Código.</p>
                <p><a href='https://www.linkedin.com/in/cassiorsfreitas/' data-link>Connect with me</a></p>
            ` 
        }

        if (this.params.id == 2) {
            return `
                <h1>Posts</h1>
                <p>You are viewing the best post of the world!</p>
            ` 
        }
        
    }
}
