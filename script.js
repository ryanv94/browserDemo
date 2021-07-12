var userName = document.getElementById('nameInput').value;
var userEmail = document.getElementById('emailInput').value;

function buttonClick() {

    if (typeof newrelic == 'object') {
        newrelic.addPageAction('Submit', {'username': userName, 'email': userEmail});
        alert('Data sent to New Relic - try out: SELECT * FROM PageAction WHERE actionName = \'Submit\' SINCE TODAY')
      }



}
