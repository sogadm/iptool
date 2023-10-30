// 运行时加载HTML文件并插入页面
function loadPage(page, scripts) {
  $.ajax({
    url: page,
    success: function(responseText) {
      $("#content").html(responseText);

      // 匹配加载的页面中是否含有js
      var regDetectJs = /<script(.|\n)*?>(.|\n|\r\n)*?<\/script>/ig;
      var jsContained = responseText.match(regDetectJs);
      // 如果包含js，则一段一段的取出js再加载执行
      if(jsContained) {
        // 分段取出js正则
        var regGetJS = /<script(.|\n)*?>((.|\n|\r\n)*)?<\/script>/im;
        // 按顺序分段执行js
        var jsNums = jsContained.length;
        for (var i=0; i<jsNums; i++) {
          var jsSection = jsContained[i].match(regGetJS);
          if(jsSection[2]) {
            $.globalEval(jsSection[2]);
          }
        }
      }

      loadScripts(scripts, 0);
    }
  });
}

// 加载并执行JavaScript文件
function loadScript(src, callback) {
  $.getScript(src, callback);
}

// 递归加载所有脚本
function loadScripts(scripts, index) {
  if (index < scripts.length) {
    loadScript(scripts[index], function() {
      loadScripts(scripts, index + 1);
    });
  }
}

// 默认加载第一个页面
loadPage("./static/pageipgs.html", ["./static/pageipgs.js"]);