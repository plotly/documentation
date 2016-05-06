# [gulp-hashsum: Generate checksum files with Gulp](https://el-tramo.be/gulp-hashsum)

A [Gulp](http://gulpjs.com/) plugin for generating a checksum file with the hash checksums of the
passed files. The file follows the same format as `shasum`, `sha1sum`, `md5sum`, and similar tools.

Since it only writes the file when the checksums have changed, can also be used as a timestamp.

## Installation

    npm install gulp-hashsum --save-dev


## Usage

### Generate a hash file

The following generates a file `app/SHA1SUMS` with all the SHA-1 checksums of all the
`.js` files in the `app` directory.

    var hashsum = require("gulp-hashsum");

    gulp.src(["app/**/*.js"]).
        pipe(hashsum({dest: "app"}));

The contents of the `SHA1SUMS` file will look like this:

		3ff1f9baca7bf41fe4a12222436025c036ba88bf  main.js
		14de86e007f14bc0c6bc9a84d21cb9da908495ae  submodule/sub.js


### Use a different hash than SHA-1

The following generates a file `app/MD5SUMS` with all the MD5 checksums of all the
`.js` files in the `app` directory.

    var hashsum = require("gulp-hashsum");

    gulp.src(["app/**/*.js"]).
        pipe(hashsum({dest: "app", hash: "md5"}));


### Use it as a timestamp

Since `gulp-hashsum` only writes the hash file whenever its content changes, you can
use it as a checksum file, e.g. to restart Passenger Phusion whenever a file changes,
by specifying `restart.txt` as the filename:

    var hashsum = require("gulp-hashsum");

    gulp.src(["app/**/*.js"]).
        pipe(hashsum({filename: "tmp/restart.txt"}));


## API

### `hashsum(options)`

- **`options.dest`** - *string*  
    The destination directory of the hash file.  
    Default: `process.cwd()` (the current working directory)

- **`options.filename`** - *string*  
    The filename of the hash file.  
    Default: `<HASH-NAME>SUMS` (i.e. `SHA1SUMS` when `sha1` is used as hash function)

- **`options.hash`** - *string*  
    The hash function to use. Must be one supported by 
    [crypto](https://www.npmjs.org/package/crypto).  
    Default: `sha1`

- **`options.force`** - *boolean*  
    Always overwrite the hashsum file, regardless of whether the contents changed.  
    Default: `false`

- **`options.delimiter`** - *string*  
    Separator between hashsum and filename.
    Default: `  ` (two spaces)
