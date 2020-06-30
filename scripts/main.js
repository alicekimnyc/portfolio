function init() {
const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {

  $("body").animate({ scrollTop: 0 }, "slow");
});
}
