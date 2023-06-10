let commentContainer = document.getElementById("comment-container");
let replyContainer = document.getElementById("reply-container");

/* Create a input box for comment and reply */
function createInputBox() {
    let div = document.createElement("div");
    div.setAttribute("class", "comment-details");

    div.innerHTML += `
            <input type="text" placeholder="Add Your Reply" class="input">
            <button class="btn submit">Post</button>`;

    return div;
}
/* To Show the results */
function addReply(text) {
    let div = document.createElement("div");
    div.setAttribute("class", "all-comment");
    div.innerHTML += `
        <div class="cardcomment">
            <span class="text">${text}</span>
            <span id="reply" class="rreply">Add Reply</span>
        </div>`;
    return div;
}
/* Click Event */
commentContainer.addEventListener("click", function (e) {
    let replyClicked = e.target.classList.contains("reply");
    let rreplyClicked = e.target.classList.contains("rreply");
    let submitClicked = e.target.classList.contains("submit");
    let closestCard = e.target.closest(".all-comment")

    if (replyClicked) {
        // add input box
        closestCard.appendChild(createInputBox());
    }

    if (rreplyClicked) {
        // add input box
        closestCard.appendChild(createInputBox());
    }

    if (submitClicked) {
        // add reply box
        const commentDetails = e.target.closest(".comment-details");
        if (commentDetails.children[0].value) {
            closestCard.appendChild(addReply(commentDetails.children[0].value));
            commentDetails.remove();
        }

    }
})