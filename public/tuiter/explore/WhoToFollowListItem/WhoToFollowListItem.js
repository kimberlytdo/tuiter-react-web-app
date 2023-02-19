const WhoToFollowListItem = (who) => {
    return(`
    <div class="">
       <div class="list-group d-inline-flex">
       <img src="${who.avatarIcon}"/>
         <a class="list-group-item" href="/">${who.userName}
         <i class="fa fa-circle"></i>
         <p href="/">@${who.handle}</p>
         </a>
       </div>
       <div class="mt-2 d-inline-flex">
         <a href="tweet.html"
            class="btn btn-primary rounded-pill">
            Follow</a>
       </div>
   </div>
 `);
}
export default WhoToFollowListItem;