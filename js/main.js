// <!-- ****************************************************-->
// <!-- Floating labels for forms  -->
// <!-- ****************************************************-->
require(['jquery'], function($) {
$('.form-control').on('input', function() {
  var $field = $(this).closest('.field-wrapper'); 
  if (this.value) {
    $field.addClass('field-label-visible');
  } else {
    $field.removeClass('field-label-visible');
  }
});

});