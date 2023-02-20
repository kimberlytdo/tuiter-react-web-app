const PostList = (post) => {
    return (`
    <div class="wd-flex-container list-group-item">

    <div class="row center-post">
        <div class="col-2 pe-0 pb-0 mb-0">
            <img width="50px" src=${post.profile} class="wd-flex-container wd-avatar-image rounded-circle">
        </div>
        <div class="col-10 ps-0">
            <p class="wd-handle-font mb-0 pb-0"><b>${post.userName}</b> <i class="bi bi-check-circle-fill"></i> 
                <span class="text-secondary"> @${post.handle} &#183; ${post.time}</span></p>
            <p class="wd-content-font pt-0 mt-0">${post.text}</p>
            <img src='${post.image}' class="wd-content-image img-fluid rounded-3"></div>
            <div class="d-flex justify-content-between pt-2 text-secondary">
                <span class=""><i class="fa fa-comment wd-fg-color-lightgray p-3"></i><span>${post.comments}</span></span>
                <span class=""><i class="fa fa-retweet wd-fg-color-lightgray p-3"></i><span>${post.tweets}</span></span>
                <span class=""><i class="fa fa-heart wd-fg-color-lightgray p-3"></i><span>${post.likes}</span></span>
                <span class=""><i class="fa fa-share wd-fg-color-lightgray p-3"></i></span>
            </div>
        </div>
    </div>

   `);
}

export default PostList;