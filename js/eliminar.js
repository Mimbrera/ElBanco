$(document).on('click', '.bote', function(event) {
    event.preventDefault();
    $(this).closest('tr').remove();
  });