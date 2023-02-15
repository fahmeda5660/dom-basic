document.getElementById('post-comment').addEventListener('click', function(){
    console.log('ok?')
    const newCommentBox  = document.getElementById('new-comment');
    const newCommentText = newCommentBox.value;
    console.log(newCommentText);
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newCommentText;
    console.log(p.innerText);
    commentContainer.appendChild(p);
    newCommentBox.value = ' ';
})