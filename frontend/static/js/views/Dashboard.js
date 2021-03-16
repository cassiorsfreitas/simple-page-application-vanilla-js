import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Dashboard')        
    }
    
    async getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p>Esse in consectetur labore nisi laborum ad anim sunt laboris veniam in sint anim. Quis fugiat laborum do exercitation fugiat pariatur Lorem.</p>
            <p><a href='/posts' data-link>View recent posts</a></p>
        ` 
        
    }
}