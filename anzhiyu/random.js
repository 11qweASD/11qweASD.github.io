var posts=["2026/02/21/My-Nest/","2026/02/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };