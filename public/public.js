$(document).ready( function(){

    $(".eatBurger").on("click", function(event) {

      event.preventDefault();
  
      let updatedBurger = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + this.id, {
        type: "PUT",
        data: updatedBurger
      }).then(
        function() {
          console.log("Ate Burger");
          location.assign("/");
        }
      );
    });
  
    $(".addBurger").on("click", function(event) {
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#burger_name").val().trim()
      };
  
      console.log( `[POSTING to server]`, newBurger )

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          location.reload("/");
        }
      );
    });
  });