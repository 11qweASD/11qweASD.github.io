var posts=["2025/06/22/这是一篇新我的博文/","2025/06/22/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };