if("undefined" != typeof SPIDER_FLOW_VERSION){
    if(SPIDER_FLOW_VERSION < '0.5.0'){
        layui.layer.open({
            title : '版本更新',
            content : '新版本v0.5.0已发布',
            btn : ['前去看看','忽略'],
            yes : function(index){
                layui.layer.close(index);
                window.open('https://www.spiderflow.org/changelog.html');
            }
        })
    }
}