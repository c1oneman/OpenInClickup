if (window.location.href.startsWith("https://app.clickup.com")) {
  console.log("ClickUp: Redirecting to ClickUp app...");
  window.location = window.location.href.replace(
    "https://app.clickup.com",
    "clickup://"
  );
  // close the tab
  window.close();
}
