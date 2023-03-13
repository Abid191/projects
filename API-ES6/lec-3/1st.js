function loadPost(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => localPosts(data))
}
function localPosts(posts){
    const postsContainer = document.getElementById('post-container')
  for(const post of posts){
    const div = document.createElement('div')
    div.innerHTML = `
    <h4> User-${post.userId} </h4>
    <h3> Post:${post.title} title </h3>
    <p> description: ${post.body} </p>
    `
    postsContainer.appendChild(div)
  }
}
loadPost()