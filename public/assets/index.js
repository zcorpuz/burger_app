// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".submit").on("click", event => {
      let id = $(this).data("id");
  
      const newDevouredState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // POST *************************************************
    $(".create-form").on("submit", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const addedBurger = {
      burger_name: $("#ca").val().trim(),
      devoured_burger: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: addedBurger
    }).then(
      function() {
        console.log("Created New Burger");
        // Reload the page to get the updated list
        location.reload();
      }
      );
    });
    
});

//Need to figure out how to get right buttons to render created burgers

//Each rendered burger will have a Devour Button where it will delete burger

//Every burger added will be added to MySql

//Every Devoured burger will be removed from Database