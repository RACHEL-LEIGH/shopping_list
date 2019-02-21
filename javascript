$(function() {
  //This code is executed when someone clicks "Add Item"
  $(".add-item").on("click", function(event) {
    event.preventDefault();
    var listItem = $(".item-input").val();
    var itemHtml =
      "<li><span class='item-check'></span><span class='item-text'>" +
      listItem +
      "</span><span class='item-remove'></span></li>";
    $(".shopping-list").prepend(itemHtml);
    $(".item-input").val("");
  });
  // -------------------

  // This code is executed when someone clicks the "X" button

  $(".shopping-list").on("click", ".item-remove", function(event) {
    $(event.currentTarget)
      .parent()
      .remove();
  });
  // -------------------

  // This code is executed when someone clicks the checkbox

  $(".shopping-list").on("click", ".item-check", function(event) {
    $(event.currentTarget).toggleClass("complete");
  });
  // -------------------
});
