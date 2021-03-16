import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Posts')        
    }
    
    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the best post of the world!</p>
            <ul>
                <li><a href='/posts/1' data-link>Linkedin Profile</a></li>
            </ul>
        ` 
        
    }
}