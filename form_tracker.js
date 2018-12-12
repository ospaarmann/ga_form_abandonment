var FormTracker = {
  init: function(gtag, form_id) {
    this.$gtag = gtag;
    this.$formHistory = [];
    this.$formIsSubmitted = false;
    this.$formId = form_id;
    this.$form = document.getElementById(form_id);

    this.attachEvents();
  },
  attachEvents: function() {
    let that = this;
    document.querySelectorAll('select').forEach(function(el) {
      el.addEventListener('change', function(e) { return that.onFieldChange(e); });
    });
    document.querySelectorAll('input, textarea').forEach(function(el) {
      el.addEventListener('input', function(e) { return that.onFieldInput(e); });
    });
    this.$form.addEventListener('submit', function(e) { return that.onFormSubmit(e) });
  },
  onFieldChange(event) {
    let field = event.target;
    let field_name = event.target.name;
    console.log(field_name);
  },
  onFieldInput(event) {
    let field = event.target;
    let field_name = event.target.name;
    console.log(field_name);
  },
  onFormSubmit(event) {
    console.log("Form Submit");
  },
  sendEvent: function() {

  },
  }
}
