var userName = '';
var userEmail = ''; 


function buttonClick() {
    userName =  document.getElementById('nameInput').value;
    userEmail = document.getElementById('emailInput').value;
    
    if (typeof newrelic == 'object') {
        newrelic.addPageAction('submit', {username: userName, email: userEmail});
      }
}
