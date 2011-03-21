/* Hide the mobile iphone url bar by scrolling down to the first pixel of content */
function hide_mobile_iphone_url_bar(){
    window.scrollTo(0,1);
}

/* Is the browser likely to be a mobile browser on an iphone with a URL bar? */
function has_mobile_iphone_url_bar(){
  /mobile/i.test(navigator.userAgent) && /iPhone/i.test(navigator.userAgent)
}

/* Is the user browsing on a mobile iphone, to a URL without a fragment, at the top of the page? */
function can_hide_mobile_iphone_url_bar() {
  has_mobile_iphone_url_bar()  && !location.hash && (document.documentElement.scrollTop === 0)
}

/* If we can hide the mobile iPhone URL bar, do it by setting a brief delay, then scrolling to the content */
if (can_hide_mobile_iphone_url_bar()) { 
  addEventListener(
    "load", 
    function() {
      setTimeout(hide_mobile_iphone_url_bar, 100);​
    },
    false
  );
}


