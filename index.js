

function shoppingList(){

    $('#js-shopping-list-form').submit(function(event) {
        //get item
        event.preventDefault();
        const item = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
        
      //add item to list
        if (item !== "") {
            $('ul').append(`<li>
            <span class = "shopping-item">${item}</span>
            <div class = "shopping-item-controls">
              <button class = "shopping-item-toggle">
                <span class = "button-label">check</span>
              </button>
              <button class = "shopping-item-delete">
                <span class = "button-label">delete</span>
              </button>
            </div>
          </li>`);
          //clear form field
          $('#shopping-list-entry').val("");
        }
    });
    //cross item off or not
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });

    //remove item from list
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

};

  
$(shoppingList);