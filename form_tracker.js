var FormAbandonmentTracker = {
  init: function(gtag, form_id, event_category, event_action = 'FormAbandonment') {
    this.$gtag = gtag;
    this.$eventCategory = event_category ? event_category : form_id;
    this.$eventAction = event_action;

    this.$formHistory = [];
    this.$formIsSubmitted = false;
    this.$formId = form_id;
    this.$form = document.getElementById(form_id);

    if(!gtag) {
      console.error("FormTracker Error: Please pass in your gtag object when initializing FormTracker.");
      return;
    }
    if(!this.$form) {
      console.error("FormTracker Error: Please specify the correct form id when initializing FormTracker.");
      return;
    }
    this.attachEvents();
  },
  attachEvents: function() {
    let that = this;
    this.$form.querySelectorAll('select').forEach(function(el) {
      el.addEventListener('change', function(e) { return that.onFieldChange(e); });
    });
    this.$form.querySelectorAll('input, textarea').forEach(function(el) {
      el.addEventListener('input', function(e) { return that.onFieldInput(e); });
    });
    this.$form.addEventListener('submit', function(e) { return that.onFormSubmit(e) });
  },
  onFieldChange: function(event) {
    let field_id = event.target.id;
    this.addFieldToHistory(field_id);
    console.log(field_id);
  },
  onFieldInput: function(event) {
    let field_id = event.target.id;
    this.addFieldToHistory(field_id);
    console.log(field_id);
  },
  addFieldToHistory: function(field_id) {
    this.$formHistory.push(field_id);
    this.$formHistory = this.$formHistory.filter((v, i, a) => a.indexOf(v) === i).sort();
    console.log(this.$formHistory);
  },
  onFormSubmit: function(event) {

    this.clearFormHistory();
  },
  sendEvent: function() {

  },
  clearFormHistory: function() {
    this.$formHistory = [];
  }
}
