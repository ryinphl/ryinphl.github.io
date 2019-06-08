pl.view.createBook = {
  setupUserInterface: function () {
    var saveButton = document.forms['Book'].commit;
    // load all book objects
    Book.loadAll();
    // Set an event handler for the save/submit button
    saveButton.addEventListener("click", 
        pl.view.createBook.handleSaveButtonClickEvent);
    document.addEventListener("unload", function () {
        Book.saveAll(); 
    });
  },
  // save user input data
  handleSaveButtonClickEvent: function () {
    var formEl = document.forms['Book'];
    var slots = { isbn: formEl.isbn.value, 
        title: formEl.title.value, 
        year: formEl.year.value};
    Book.create(slots);
    formEl.reset();
  }
};
