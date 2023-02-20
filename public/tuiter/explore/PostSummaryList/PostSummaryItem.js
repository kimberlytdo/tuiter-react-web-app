const PostSummaryList = (posts) => {
    return(`
    <div class="row ms-1 me-1 post">
            <div class="col-10 mt-2">
              <span class="wd-suggested-post-color d-block"
                >${posts.topic}</span
              >
              <span
                >${posts.userName} <i class="fa-sharp fa-solid fa-circle-check"></i
              ></span>
              <span class="wd-suggested-post-color">- ${posts.time}</span>
              <p class="fw-bold">
                ${posts.title}
              </p>
            </div>
            <div class="col-2 mt-2">
              <img
                class="w-100"
                src="${posts.image}"/>
            </div>
          </div>
    `);
}
export default PostSummaryList;