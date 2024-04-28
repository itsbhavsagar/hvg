/* <![CDATA[ */
$(document).ready(function () {
  function submitForm(formId, messageDivId) {
    var $form = $(formId);
    var action = $form.attr('action');

    $(messageDivId).slideUp(750, function () {
      $(messageDivId).hide();
      $form.find('button[type="submit"]').attr('disabled', 'disabled');

      $.post(action, $form.serialize(), function (data) {
        $(messageDivId).html(data).slideDown('slow');
        if (data.match('success') != null) {
          $form.slideUp('slow');
        }
        $form.find('button[type="submit"]').removeAttr('disabled');
      });
    });

    return false;
  }

  $('#newsletter_form').submit(function () {
    return submitForm('#newsletter_form', '#message-newsletter');
  });

  $('#bookingform').submit(function () {
    return submitForm('#bookingform', '#message-booking');
  });

  $('#contactform').submit(function () {
    return submitForm('#contactform', '#message-contact');
  });
});
/* ]]> */
