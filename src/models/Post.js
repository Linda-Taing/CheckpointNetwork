import { Profile } from "./Account.js";

export class Post {
    constructor(data) {
        this.id = data.id || ''
        this.body = data.body
        this.creatorId = data.creatorId
        this.likeIds = data.likeIds
        this.creator = new Profile(data.creator)
        this.likes = data.likes
        this.createdAt = new Date(data.createdAt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
        this.imgUrl = data.imgUrl || "https://images.unsplash.com/photo-1677225113975-b407e7fa5efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    }




}