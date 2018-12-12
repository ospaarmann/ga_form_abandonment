var FormTracker = {
  init: function(gtag, form_id) {
    this.$gtag = gtag;
    this.$formHistory = [];
    this.$formIsSubmitted = false;
    this.$formId = form_id;
    this.$form = document.getElementById(form_id);

  },
  }
}
