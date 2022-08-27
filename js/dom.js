document.getElementById('change-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friends');
    for(let friend of friends){
        friend.style.backgroundColor = 'green'
    }
    
})

document.getElementById('btn-center').addEventListener('click', function(){
    const centerContent = document.getElementById('friend-four');
    centerContent.style.textAlign = 'center'
})

document.getElementById('add-btn').addEventListener('click', function(){
    const friendContainer = document.getElementById('friend-container');
    const friend = document.createElement('div')
    friend.classList.add('friends')
    friend.innerHTML = `
        <h1>Add New Friend</h1>
        <p>You Are my Love</p>
    `
    friendContainer.appendChild(friend)

})