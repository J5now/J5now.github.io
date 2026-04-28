var posts=["2026/04/28/JDex2/","2025/11/17/世界征服者3逆向分析/","2025/11/17/飞车小游戏XPosed模块实战/","2025/11/17/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };