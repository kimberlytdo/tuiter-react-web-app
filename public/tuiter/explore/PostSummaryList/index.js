import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";
function PostSummaryList() {
    return(`
     ${posts.map(value => {
        return(PostSummaryItem(value));
    }).join('')
    }
    `);
}
export default PostSummaryList;
