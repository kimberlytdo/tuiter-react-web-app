const WhoToFollowListItem = (who) => {
    return(`
    <a class="list-group-item" id="who-to-follow" href="#list-profile">
              <div class="row">
                <div class="col-2">
                  <img
                    class="rounded-circle" style="width: 40px; height: auto"
                    src="${who.avatarIcon}"
                  />
                </div>
                <div class="col-7" style="text-align: left;">
                  <span
                    >${who.userName} <i class="fa fa-circle"></i
                  ></span>
                  <span class="d-block">@${who.handle}</span>
                </div>
                <div class="col-3">
                  <button type="button" class="btn btn-primary rounded-pill">
                    Follow
                  </button>
                </div>
              </div>
            </a>
 `);
}
export default WhoToFollowListItem;