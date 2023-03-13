document.getElementById('friends').addEventListener('click',function(){
 const friends = document.getElementsByClassName('friend')
 for(const frind of friends){
    frind.style.backgroundColor = 'lightblue';
 }

})
// document.getElementById('creat').addEventListener('click',function(){
//     const newFriend = document.getElementById('friends')
//     const friend = document.createElement('div')
//     // friend.classList.add('friend')
//     friend.innerHTML = `
//     <h3 class="friend-name">friend-$</h3>
//     <p>Lorem ipsum dolor sit amet.</p>
//     `
//     newFriend.appendChild(friend)
// })