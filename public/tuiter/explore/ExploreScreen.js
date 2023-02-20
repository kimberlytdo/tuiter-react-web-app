import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
    <div class="row">
    <div class="col-10">
      <div class="input-group" style="border-radius: 50px; background-color: white" >
        <span class="rounded-0 p-2" style="margin-left: 10px">
          <i class="bi bi-search text-dark"></i>
        </span>
        <input type="text" class="form-control border-start-0 wd-rounded-bottom-right-1 wd-rounded-top-right-1" style="border-bottom-right-radius: 40px; border-top-right-radius: 40px;" placeholder="Search Twitter"/>
      </div>
    </div>
    <div class="col-2">
      <i style="color: white; font-size: 30px" class="text-primary bi bi-gear-fill"></i>
    </div>
  </div>
  <!-- Tabs -->
  <div class="mt-2">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link bg-primary text-white" aria-current="page" href="#"
          >For You</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li
        class="nav-item d-block d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block"
      >
        <a class="nav-link" href="#">Sports</a>
      </li>
      <li
        class="nav-item d-block d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block"
      >
        <a class="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
  </div>
  <!-- Image -->
  <div class="mt-2 position-relative mb-2">
    <img class="w-100" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" />
    <h2
      class="overlay-text position-absolute fixed-bottom margin-left-10 text-black"
    >
      SpaceX's Spaceship
    </h2>
  </div>
  ${PostSummaryList()}
    `);
}
export default ExploreComponent;