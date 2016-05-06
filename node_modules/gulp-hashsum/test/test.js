/* eslint no-unused-expressions:0 */

'use strict';

var mock = require('mock-fs');
var fs = require('fs');
var path = require('path');
var gutil = require('gulp-util');
var expect = require('chai').expect;
var sleep = require('sleep');
var hashsum = require('../index.js');
var _ = require('lodash');

describe('gulp-hashsum', function () {
	function streamFiles(stream, files) {
		files.forEach(function (file) {
			stream.write(new gutil.File({
				contents: fs.readFileSync(file),
				path: path.resolve(file)
			}));
		});
		stream.end();
	}

	// FIXME: Ugly way to advance time
	function waitTimeAdvance(time) {
		while (!(new Date() > time)) {
			sleep.usleep(1);
		}
	}

	beforeEach(function () {
		mock({
			'/dir1': {
				'file1': 'contents1',
				'file2': 'contents2',
				'dir2': {
					'file3': 'contents3',
					'file4': 'contents4'
				}
			},
			'/dir3': {
				'file5': 'contents5',
				'file6': 'contents6'
			}
		});
	});

	afterEach(mock.restore);

	it('should write hashes to current dir', function (done) {
		var files = ['/dir1/file1', '/dir1/file2'];
		var stream = hashsum();

		stream.on('end', function () {
			var data = fs.readFileSync(path.resolve(process.cwd(), 'SHA1SUMS')).toString();
			expect(data).to.match(/3ff1f9baca7bf41fe4a12222436025c036ba88bf {2}(.*)\n14de86e007f14bc0c6bc9a84d21cb9da908495ae {2}(.*)\n/);
			done();
		});

		streamFiles(stream, files);
	});

	it('should write hashes to specified dest dir', function (done) {
		var files = ['/dir1/file1', '/dir1/file2'];
		var stream = hashsum({dest: '/dir1'});

		stream.on('end', function () {
			var data = fs.readFileSync('/dir1/SHA1SUMS').toString();
			expect(data).to.eql(
				'3ff1f9baca7bf41fe4a12222436025c036ba88bf  file1\n' +
				'14de86e007f14bc0c6bc9a84d21cb9da908495ae  file2\n'
			);
			done();
		});

		streamFiles(stream, files);
	});

	it('should write hashes to the specified filename', function (done) {
		var files = ['/dir1/file1', '/dir1/file2'];
		var stream = hashsum({dest: '/dir1', filename: 'mysum'});

		stream.on('end', function () {
			var data = fs.readFileSync('/dir1/mysum').toString();
			expect(data).to.eql(
				'3ff1f9baca7bf41fe4a12222436025c036ba88bf  file1\n' +
				'14de86e007f14bc0c6bc9a84d21cb9da908495ae  file2\n'
			);
			done();
		});

		streamFiles(stream, files);
	});

	it('should write hashes to the specified filename in subdir', function (done) {
		var files = ['/dir1/file1', '/dir1/file2'];
		var stream = hashsum({dest: '/dir1', filename: 'mysubdir/mysum'});

		stream.on('end', function () {
			var data = fs.readFileSync('/dir1/mysubdir/mysum').toString();
			expect(data).to.eql(
				'3ff1f9baca7bf41fe4a12222436025c036ba88bf  ../file1\n' +
				'14de86e007f14bc0c6bc9a84d21cb9da908495ae  ../file2\n'
			);
			done();
		});

		streamFiles(stream, files);
	});

	it('should write sha1 hashes', function (done) {
		var files = ['/dir1/file1', '/dir1/file2'];
		var stream = hashsum({dest: '/dir1', hash: 'sha1'});

		stream.on('end', function () {
			var data = fs.readFileSync('/dir1/SHA1SUMS').toString();
			expect(data).to.eql(
				'3ff1f9baca7bf41fe4a12222436025c036ba88bf  file1\n' +
				'14de86e007f14bc0c6bc9a84d21cb9da908495ae  file2\n'
			);
			done();
		});

		streamFiles(stream, files);
	});

	it('should write md5 hashes', function (done) {
		var files = ['/dir1/file1', '/dir1/file2'];
		var stream = hashsum({dest: '/dir1', hash: 'md5'});

		stream.on('end', function () {
			var data = fs.readFileSync('/dir1/MD5SUMS').toString();
			expect(data).to.eql(
				'4891e2a24026da4dea5b4119e1dc1863  file1\n' +
				'b2d0efbdc48f4b7bf42f8ab76d71f84e  file2\n'
			);
			done();
		});

		streamFiles(stream, files);
	});

	it('should generate hashes for files in same dir', function (done) {
		var files = ['/dir1/file1', '/dir1/file2'];
		var stream = hashsum({dest: '/dir1'});

		stream.on('end', function () {
			var data = fs.readFileSync('/dir1/SHA1SUMS').toString();
			expect(data).to.eql(
				'3ff1f9baca7bf41fe4a12222436025c036ba88bf  file1\n' +
				'14de86e007f14bc0c6bc9a84d21cb9da908495ae  file2\n'
			);
			done();
		});

		streamFiles(stream, files);
	});

	it('should generate hashes for files in subdirs', function (done) {
		var files = ['/dir1/file1', '/dir1/dir2/file3'];
		var stream = hashsum({dest: '/dir1'});

		stream.on('end', function () {
			var data = fs.readFileSync('/dir1/SHA1SUMS').toString();
			expect(data).to.eql(
				'6550c709edccd89dfed16afacf28bc844d23bdd3  dir2/file3\n' +
				'3ff1f9baca7bf41fe4a12222436025c036ba88bf  file1\n'
			);
			done();
		});

		streamFiles(stream, files);
	});

	it('should generate hashes for files in sibling dirs', function (done) {
		var files = ['/dir1/file1', '/dir1/dir2/file3'];
		var stream = hashsum({dest: '/dir3'});

		stream.on('end', function () {
			var data = fs.readFileSync('/dir3/SHA1SUMS').toString();
			expect(data).to.eql(
				'6550c709edccd89dfed16afacf28bc844d23bdd3  ../dir1/dir2/file3\n' +
				'3ff1f9baca7bf41fe4a12222436025c036ba88bf  ../dir1/file1\n'
			);
			done();
		});

		streamFiles(stream, files);
	});

	it('should not overwrite the file if files have not changed', function (done) {
		var files = ['/dir1/file1', '/dir1/dir2/file3'];
		streamFiles(hashsum({dest: '/dir1'}), files);
		var modified = fs.statSync('/dir1/SHA1SUMS').mtime;
		waitTimeAdvance(modified);

		var stream = hashsum({dest: '/dir1'});
		stream.on('end', function () {
			expect(fs.statSync('/dir1/SHA1SUMS').mtime).to.eql(modified);
			done();
		});

		streamFiles(stream, files);
	});

	it('should not overwrite the file if file contents have not changed', function (done) {
		var files = ['/dir1/file1', '/dir1/dir2/file3'];
		streamFiles(hashsum({dest: '/dir1'}), files);
		var modified = fs.statSync('/dir1/SHA1SUMS').mtime;
		waitTimeAdvance(modified);

		fs.writeFileSync('/dir1/file1', 'contents1');

		var stream = hashsum({dest: '/dir1'});
		stream.on('end', function () {
			expect(fs.statSync('/dir1/SHA1SUMS').mtime).to.eql(modified);
			done();
		});

		streamFiles(stream, files);
	});

	it('should overwrite the file if files have changed', function (done) {
		var files = ['/dir1/file1', '/dir1/dir2/file3'];
		streamFiles(hashsum({dest: '/dir1'}), files);
		var modified = fs.statSync('/dir1/SHA1SUMS').mtime;
		waitTimeAdvance(modified);

		fs.writeFileSync('/dir1/file1', 'New contents');

		var stream = hashsum({dest: '/dir1'});
		stream.on('end', function () {
			expect(fs.statSync('/dir1/SHA1SUMS').mtime).to.be.greaterThan(modified);
			done();
		});

		streamFiles(stream, files);
	});

	it('should overwrite the file if force and files have not changed', function (done) {
		var files = ['/dir1/file1', '/dir1/dir2/file3'];
		streamFiles(hashsum({dest: '/dir1'}), files);
		var modified = fs.statSync('/dir1/SHA1SUMS').mtime;
		waitTimeAdvance(modified);

		var stream = hashsum({dest: '/dir1', force: true});
		stream.on('end', function () {
			expect(fs.statSync('/dir1/SHA1SUMS').mtime).to.be.greaterThan(modified);
			done();
		});

		streamFiles(stream, files);
	});

	it('should pass through all files', function (done) {
		var files = ['/dir1/file1', '/dir1/dir2/file3'];

		var stream = hashsum({dest: '/dir1', force: true});

		var unprocessedFiles = _.clone(files);
		stream.on('data', function(file) {
			expect(unprocessedFiles).to.contain(file.path);
			expect(file.contents.toString()).to.equal('contents' + _.last(file.path));
			_.pull(unprocessedFiles, file.path);
		});

		stream.on('end', function () {
			expect(unprocessedFiles).to.be.empty;
			done();
		});

		streamFiles(stream, files);
	});

	it('should pass through null files', function (done) {
		var stream = hashsum({dest: '/dir1', force: true});

		stream.on('data', function(file) {
			expect(file.path).to.be('/dir1/foo1');
			expect(file.contents).to.be(null);
		});

		stream.on('end', function () {
			done();
		});

		stream.write(new gutil.File({contents: null, path: '/dir1/foo'}));
		stream.end();
	});


	// FIXME: This test doesn't test this case properly. I 
	it('should not accept streams', function (done) {
		var stream = hashsum({dest: '/dir1', force: true});

		var file = new gutil.File({ contents: fs.createReadStream('/dir1/file1'), path: '/dir1/file1' });
		expect(function () { stream.write(file); }).to.Throw();
		done();
	});
});
