//= require support/json2
//= require jquery

window.passing = true;
window.failing = false;

// create the log method on console in case it doesn't exist -- several tests
// rely on it being spied upon
if (!window.console) {
  window.console = {log: function() {}};
}
