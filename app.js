/*console.log("hello world");
var name = "surbhi";
console.log(name);

var n = 5;
if (n<5) {
  console.log("n is less than 5");
}
else {
  console.log("n is equal or greater than 5");
}

var user = "surbhimaniyar"
function sayhello(name){
  console.log("hello " + name);
  console.log(user);
}
sayhello("100");

function dowork(work){
  work();
}
dowork(function(){
  console.log("working.....");
});

console.log(document);
var logoElements = document.getElementsByClassName('logo');
var logo = logoElements[0];
logo.textContent="hello";
var logoName = logo.textContent;
console.log(logoName);


var signInButton = document.getElementById("signIn-Button");

console.log(signInButton);
console.log(signInButton.id);*/

function ButtonClicked(){
  console.log("Button clicked");
}

/*var user1 = {
  name: "surbhi",
  id: 04,
  username: "surbhimaniyar",
  sayhello: function(){
    console.log("hello" + this.name);
  }
};
var user2 = {
  name: "chintan",
  id: 27,
  username: "chintanbuddhadev",
  sayhello: function(){
    console.log("hello" + this.name);
  }
};
var user3 = {
  name: "Jeremy",
  id: 30,
  username: "Jeremygonsalvis",
  sayhello: function(){
    console.log("hello" + this.name);
  }
};

console.log(user.name,user.username,user.id);
user.sayhello();

var users = [user1,user2,user3];
console.log(users[1]);
for(var i=0;i<users.length;i++){
  console.log(users[i].name,users[i].username,users[i].id);
}

var message = new Object();
message.text = "hello";
console.log(message.text);
*/
click("signIn-Button",logInUser);
/*var database = firebase.database();
var databaseRef = database.ref();

databaseRef.on('value',function(snapshot){
  console.log(snapshot.val());
});

var usersRef database.ref("users");
usersRef.child("1234").set({
  email: "surbhimaniyar@gmail.com"
});*/
