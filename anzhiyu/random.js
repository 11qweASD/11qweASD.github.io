var posts=["k/My-Newst/","k/My-st/","k/My-Nest/","k/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };