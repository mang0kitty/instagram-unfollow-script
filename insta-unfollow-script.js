openFollowersWindow().then(function() {
  unfollowAllUsers();
});
function getUsername() {
  var userNameElement = document.getElementsByTagName("h1")[0];
  if (!userNameElement) throw new Error("No title to get username from");
  return userNameElement.innerHTML;
}
function getFollowersElementWithUsername(username) {
  const followersElement = document.querySelectorAll(
    'a[href="/' + username + '/following/"]'
  )[0];
  if (!followersElement) throw new Error("No followers element was found");
  return followersElement;
}
function getFollowersElement() {
  getFollowersElementWithUsername(getUsername());
}

function openFollowersWindow() {
  var followersElement = getFollowersElement();
  followersElement.click();
}
function unfollowAllUsers() {
  const unfollowButtonText = "Following";
  const unfollowConfirmationButtonText = "Follow";

  var buttons = document.getElementsByTagName("button");
  var totalUsersFollowing = buttons.length;
  if (!totalUsersFollowing) {
    alert(
      "Error: no Following buttons found, might need to change button text"
    );
  }
  let currentTime = 0;
  let step = 60 * 1000;

  for (let i = 0; i < buttons.length; i++) {
    setTimeout(function() {
      if (buttons[i].innerHTML.includes(unfollowButtonText)) {
        console.log(`Unfollowing ${i}of ${totalUsersFollowing}`);
      }
      if (i === totalUsersFollowing) {
        console.log("Script executed succesfully");
      }
      buttons.trigger("click");
      setTimeout(function() {
        var btn = $(`button:contains('${unfollowConfirmationButtonText}')`);
        if (btn) {
          btn.trigger("click");
        }
      }, 100);
    }, currentTime);

    currentTime += step;
  }
}
