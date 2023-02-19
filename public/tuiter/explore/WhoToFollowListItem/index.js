import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
function WhoToFollowList() {
    return(`
     ${who.map(value => {
        return(WhoToFollowListItem(value));
    }).join('')
    }
    `);
}
export default WhoToFollowList;