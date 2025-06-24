var posts=["smk/hkkom/","smk/hello-world/","smk/slv/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };