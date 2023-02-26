export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.graduated = data.graduated
    this.coverImg = data.coverImg || "https://images.unsplash.com/photo-1676297712943-ea0ad2201230?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    this.github = data.github
    this.linkedin = data.linkedin
    this.class = data.class
  }
}


export class Account extends Profile {
  constructor(data) {
    super(data)
    this.email = data.email
  }
}