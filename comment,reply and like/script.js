/* Function to create a new reply element */
function createReplyElement(content) {
    const replyElement = document.createElement("div");
    replyElement.classList.add("reply");
    replyElement.innerHTML = `
    <p>${content}</p>
    <button class="like">Like</button>
    <span class="likes">0</span>
    <button class="reply">Reply</button>
    <button class="delete">Delete</button>
    <div class="reply-box" style="display: none;">
      <input placeholder="Enter your reply"></input>
      <button class="post-reply">Post</button>
    </div>
    <div class="replies"></div>
  `;
    return replyElement;
}

/* Post Img Like Count */
var like = document.getElementById("likeme"),
    count = 0;
like.onclick = function () {
    count += 1;
    like.innerHTML = "Likes: " + count;
};

/* Toggle(display none and block) for main comment input */ 
function toggleContent() {
    var content = document.getElementById("comments");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


/* Function to add a new reply to the thread */
function addReply(content, parentReply = null) {
    const replyElement = createReplyElement(content);
    const replyBox = replyElement.querySelector(".reply-box");
    const postReplyButton = replyElement.querySelector(".post-reply");

    /* Function to handle posting a reply */
    function postReply() {
        const replyContent = replyBox.querySelector("input").value;
        if (replyContent.trim() !== "") {
            addReply(replyContent, replyElement);
            replyBox.style.display = "none";
        }
    }

    /* Add event listener for post reply button */
    postReplyButton.addEventListener("click", postReply);

    if (parentReply) {
        const repliesContainer = parentReply.querySelector(".replies");
        repliesContainer.appendChild(replyElement);
    } else {
        const thread = document.getElementById("comments");
        thread.appendChild(replyElement);
    }

    /* Function to handle deleting a reply */
    function deleteReply() {
        replyElement.remove();
    }

    /* Add event listener for delete button */
    const deleteButton = replyElement.querySelector(".delete");
    deleteButton.addEventListener("click", deleteReply);

    /* Function to handle liking a reply */
    function likeReply() {
        const likesElement = replyElement.querySelector(".likes");
        let likes = parseInt(likesElement.innerText);
        likes++;
        likesElement.innerText = likes.toString();
    }

    /* Add event listener for like button */
    const likeButton = replyElement.querySelector(".like");
    likeButton.addEventListener("click", likeReply);

    /* Function to handle toggling reply input visibility */
    function toggleReplyBox() {
        if (replyBox.style.display === "none") {
            replyBox.style.display = "block";
        } else {
            replyBox.style.display = "none";
        }
    }

    /*Add event listener for reply button */
    const replyButton = replyElement.querySelector(".reply");
    replyButton.addEventListener("click", toggleReplyBox);
}

/* Function to handle posting the main reply */
function postMainReply() {
    const mainReplyContent = document.getElementById("main-reply").value;
    if (mainReplyContent.trim() !== "") {
        addReply(mainReplyContent);
        document.getElementById("main-reply").value = "";
    }
}

/* Add event listener for post main reply button */
const postMainReplyButton = document.getElementById("post-main-reply");
postMainReplyButton.addEventListener("click", postMainReply);
