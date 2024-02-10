function greet(name, callback) {
  const greeting = "Hello" + name;
  callback(greeting);
}

function displayGreeting(message) {
  console.log(message);
}

greet("Sunil Kumar", displayGreeting);

/**
 * Callback hell  | Pyramid of doom
 */
getUser(function (user) {
  getPost(user.id, function (post) {
    console.log("User info and post successfully displayed");
  });
});
