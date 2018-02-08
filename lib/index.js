/**
 * Created by ren on 17-12-8.
 */
var fs = require('fs');
var path = require('path');
var _fs = fs;
var  gfs={
    // 同步创建
    sync: function (dirname) {
        var path = require('path');
        if(fs.existsSync(dirname)){
            return true;
        }else{
            if(gfs.sync(path.dirname(dirname))){
                fs.mkdirSync(dirname);
                return true;
            }
        }
    },
    writeFileSync : function(dirpath,content,utf) {
        utf=utf||'utf8'
        var dirArray = dirpath.split('/');
        var deldir = dirArray.pop();
        var joindir = dirArray.join('/');
        gfs.sync(joindir);
        fs.writeFileSync(dirpath,content,utf);
    },
    writeFile :function(dirpath,content,utf,cb){
        utf=utf||'utf8'
        var dirArray = dirpath.split('/');
        var deldir = dirArray.pop();
        var joindir = dirArray.join('/');
        gfs.sync(joindir);
        fs.writeFile(dirpath, content, utf,cb);
    }
};
if (_fs.writeFilesSync == null&&_fs.writeFiles==null) {
    _fs.writeFilesSync = gfs.writeFileSync;
    _fs.writeFiles = gfs.writeFile;
    _fs.mkdirs = gfs.sync;
};

module.exports = _fs;