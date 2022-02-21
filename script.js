let dropDown = document.querySelectorAll(".footer4-title");
let hamburger = document.querySelector(".header-menu");
let close = document.querySelector(".close");
let mainDropDown = document.querySelector(".header-dropdown");
let overlay = document.getElementById("overlay");
let modal = document.querySelector(".signupModal");
let closeModal = document.querySelector(".closeModal");
let signIn = document.querySelector(".header-signin");
let favOverlay = document.getElementById("favOverlay");
for (let i = 0; i < 4; i++) {
  dropDown[i].addEventListener("click", function (e) {
    e.target.nextElementSibling.classList.toggle("displayNone");
  });
}

hamburger.addEventListener("click", function (e) {
  mainDropDown.classList.toggle("show");
  overlay.classList.toggle("hidden");
});
close.addEventListener("click", function () {
  mainDropDown.classList.toggle("show");
  if (!overlay.classList.contains("hidden")) overlay.classList.toggle("hidden");
});

signIn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
closeModal.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
overlay.addEventListener("click", function () {
  if (!mainDropDown.classList.contains("show")) {
    modal.classList.toggle("hidden");
  } else {
    mainDropDown.classList.toggle("show");
  }
  overlay.classList.toggle("hidden");
});

//section2-tile
//section3-img
//section6-tile
let tiles1 = document.querySelectorAll(".section2-tile");
let tiles2 = document.querySelectorAll(".section3-img");

tiles1.forEach((tile) => {
  tile.addEventListener("click", function (e) {
    let target = e.target.closest(".section2-tile").dataset;
    let img = target.src;
    let name = target.name;
    renderImg(img, name);
  });
});
tiles2.forEach((tile) => {
  tile.addEventListener("click", function (e) {
    let target = e.target.closest(".section3-img").dataset;
    let img = target.src;
    let name = target.name;
    renderImg(img, name);
  });
});

const renderImg = (img, name) => {
  favOverlay.classList.remove("hidden");
  document.body.insertAdjacentHTML(
    `beforeend`,
    `<div class="signupModal" id="favModal">
  <div class="whitebg">
    <img src="/images/x-svgrepo-com.svg" alt="" class="closeModal" id="closeFavoriteModal"  />
  </div>
  <div class="modalContent">
  <div class="favAddSection">
    <div>
      <div class="favAdd">Add to favorites</div>
      <div class="favAddName">${name}</div>
    </div>
    <img class="favImg"src="${img}" alt="">
  </div>
    <div class="favTitle">Before you can do that...</div>
    <div class="favSignin"> Sign in or register with you email address</div>
    <div class="modalLabel1">Email address</div>
    <input type="text" class="email modalInput1" />
    <button class="signupButton">Continue</button>
    <div class="center">
      <div class="login">Trouble signing in?</div>
    </div>

    <button class="google">
      <img src="images/modal/image (23).svg" alt="" /> Continue with Google
    </button>
    <button class="facebook">
      <img src="images/modal/image (24).svg" alt="" /> Continue with
      Facebook
    </button>
    <button class="apple">
      <img src="images/modal/image (25).svg" alt="" /> Continue with Apple
    </button>
    <div class="tos">
      By clicking Sign in or Continue with Google, Facebook, or Apple, you
      agree to Etsy's
      <div class="pw">Terms of Use</div>
      and
      <div class="pw">Privacy Policy</div>
      . Etsy may send you communications; you may change your preferences in
      your account settings. We'll never post without your permission.
    </div>
  </div>
</div>`
  );
  let favModalClose = document.getElementById("closeFavoriteModal");
  let favModal = document.getElementById(`favModal`);
  favModalClose.addEventListener("click", function () {
    favModal.remove();
    favOverlay.classList.toggle("hidden");
  });
  favOverlay.addEventListener("click", function () {
    favModal.remove();
    favOverlay.classList.add("hidden");
  });
};
