var posts=["2025/11/17/某战略类手游逆向分析/","2025/11/17/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };