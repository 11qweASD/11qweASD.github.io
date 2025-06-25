var posts=["smk/hkkom/","smk/kk80/","smk/hello-world/","smk/slv/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };