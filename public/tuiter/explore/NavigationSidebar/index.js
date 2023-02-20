const NavigationSidebar = (active) => {
    return (`
    <div class="mb-3 list-group">
        <div class="list-group-item">
            <i class="fab fa-twitter"></i>
        </div>

        <a href="../explore/HomeScreen/index.html" class="list-group-item list-group-item-action  id="${active === "home"? "active": ""}">
            <i class="fas fa-home"></i>
            <div class="d-none d-xl-inline m-lg-1">Home</div>
        </a>
        
        <a href="../index.html" class="list-group-item list-group-item-action id="${active === "explore"? "active": ""}">
            <i class="fas fa-hashtag"></i>
            <div class="d-none d-xl-inline m-lg-1">Explore</div>
        </a>

        <a href="#" id="messages-sidebar" class="list-group-item list-group-item-action ${active === "messages"? "active": ""}">
            <i class="fas fa-envelope"></i>
            <div class="d-none d-xl-inline m-lg-1">Messages</div>
        </a>

        <a href="#" id="notifications-sidebar" class="list-group-item list-group-item-action ${active === "notifications"? "active": ""}">
            <i class="fas fa-bell"></i>
            <div class="d-none d-xl-inline m-lg-1">Notifications</div>
        </a>

        <a href="#" id="bookmarks-sidebar" class="list-group-item list-group-item-action ${active === "bookmarks"? "active": ""}">
            <i class="fas fa-bookmark"></i>
            <div class="d-none d-xl-inline m-lg-1">Bookmarks</div>
        </a>

        <a href="#" id="lists-sidebar" class="list-group-item list-group-item-action ${active === "lists"? "active": ""}"">
            <i class="fas fa-list"></i>
            <div class="d-none d-xl-inline m-lg-1">Lists</div>
        </a>

        <a href="#" id="profile-sidebar" class="list-group-item list-group-item-action ${active === "profile"? "active": ""}"">
            <i class="fas fa-user"></i>
            <div class="d-none d-xl-inline m-lg-1">Profile</div>
        </a>

        <a href="#" id="more-sidebar" class="list-group-item list-group-item-action ${active === "more"? "active": ""}"">
            <i class="fas fa-circle"></i>
            <div class="d-none d-xl-inline m-lg-1">More</div>
        </a>
    </div>

    <div class="d-grid">
        <button type="button" class="btn btn-primary rounded-pill ">
            Tweet
        </button>
    </div>
 `);

}
export default NavigationSidebar;