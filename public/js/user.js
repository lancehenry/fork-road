$(document).ready(function () {
  // Getting references to the restaurant name input and author container, as well as the table body
  var restaurantInput = $("#restaurant");

  // $(document).on("submit", "#restaurant", getReviews);
  // $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the initial list of Authors
  // getReviews();

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getReviews() {
    $.get("/api/dishreviews", function (data) {
      return data
    });
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
      .then(getAuthors);
  }
});
