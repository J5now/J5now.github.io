var posts=["2025/11/17/hello-world/","2025/11/17/世界征服者3逆向分析/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };