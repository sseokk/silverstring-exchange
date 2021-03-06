function NoticeApi () {
    this.call = function(uri, callback, resultProcFunc, params) {
        $.ajax({
            url: uri
            , type: "POST"
            , dataType: 'json'
            , contentType:"application/json; charset=UTF-8"
            , data: JSON.stringify(params)
            , success: function (result) {
                resultProcFunc(result.data);
                return callback(result.data);
            }
            , error:function(e){
                var data = new Object();
                data.code = 1000;
                data.msg = JSON.parse(e.responseText).message;
                return callback(data);
            }
        });
        return true;
    };

    this.getNotices = function(callback, params) {
        return this.call("/api/notice/getNotices", callback, function(data) {
        }, params);
    }
}

var noticeApi = new NoticeApi();