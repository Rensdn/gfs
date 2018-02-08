

## What is it

Write a file to automatically create a directory function based on node - based FS

## Installation

### NPM

```js

npm install mkfs

```

## Examples

```js

var gfs = require('mkfs');

gfs.writeFilesSync("/var/www/storage/export/filename",data,"utf-8");

gfs.writeFiles("/var/www/storage/export/filename",data,"utf-8");

gfs.mkdirs("/var/www/storage/export/filename");

