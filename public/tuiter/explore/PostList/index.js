/* global $ */

import PostList from "./PostList.js";
import posts from "./posts.js";

const PostItem = () => {
    return (`

        ${
        posts.map(todo => {
            return (PostList(todo));
        }).join('')
    }
       `);
}

// $('#wd-main-section').append(`${PostSummaryList()}`);

export default PostItem;