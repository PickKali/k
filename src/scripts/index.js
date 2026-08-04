import { openModal, closeModal, visibleModal } from "./picomodal";

$(function () {
  $(".projectcard").on("click", function (event) {
    //most readable line of code
    openModal(
      $(`#${$(event.target).closest("article").prop("id") + "_modal"}`)[0],
    );
  });
  $(".closemodal").on("click", function (event) {
    //second most readable line of code
    closeModal(visibleModal);
  });

  $("#projectbutton").on("click", function (e) {
    console.log("uhh");
    $("html").scrollTop($("#Projects").offset().top);
  });
});
