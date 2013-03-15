/**
 * RequireJS Module Definition - AMD 'sugar' syntax
 */
define(function (require) {

  //module dependencies
  var BaseView = require('../js/prototypes/viewBase');

  return BaseView.extend({
    onModelChanged: function () {
    },
    onModelDestroyed: function () {
    },
    onModelRequested: function () {
    },
    onModelSynced: function () {
    },
    onModelError: function () {
    },
    onModelInvalid: function () {
    },
    onClose: function () {
    }
  });
});
