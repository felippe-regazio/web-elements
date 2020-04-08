#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');

let src_dir = './src';
let el_name = process.argv[2];

if (!el_name) {
	console.log(chalk.red('Please, define a name for your new element.\n'));
	process.exit(0);
}

if (el_name.indexOf('el-') != 0 && el_name.indexOf('fm-') != 0) {
	el_name = `el-${el_name}`;
}

if (fs.existsSync(`${src_dir}/${el_name}`)){
	console.log(chalk.red(`Element folder "${src_dir}/${el_name}" already exists.\n`));
	process.exit(0);
}

console.log(chalk.green(`Creating "${el_name}" basic structure...`));
fs.mkdirSync(`${src_dir}/${el_name}`);


const js_file = `import './${el_name}.scss';

customElements.define('${el_name}', class extends HTMLDivElement {

	constructor () {
		super();
	}

	connectedCallback () {
		console.log('Hello World');
	}
}, {extends: 'div'});`;

const scss_file = `[is="${el_name}"] {
	
}`;

let files = {
	[`${el_name}.js`]: js_file,
	[`${el_name}.scss`]: scss_file,
	"readme.md": ""
}

Object.keys(files).forEach((file_name, index) => {
	const file = `${src_dir}/${el_name}/${file_name}`;
	fs.writeFileSync(file, files[file_name]);
	console.log(`Created ${file}`);
});

console.log(chalk.green('Done!\n'));