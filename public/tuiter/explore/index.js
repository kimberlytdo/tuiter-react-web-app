/* global $ */
import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowListItem/index.js";
import ExploreComponent from "./ExploreScreen.js";

function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-2 col-xl-2">
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 text-white">
     ${ExploreComponent()}
     
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
   <div class="list-group">
   <a class="list-group-item">Who to follow</a>
   ${WhoToFollowList()}
   </div>
   </div>
  </div>
   `);
}
$(exploreComponent);