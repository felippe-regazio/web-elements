const fs = require('fs');
const chalk = require('chalk');

let els_dir = './source';
let el_name = process.argv[2];

if (!el_name) {
	console.log(chalk.red('Please, define a name for your new element.\n'));
	process.exit(0);
}

if (el_name.indexOf('el-') != 0) {
	el_name = `el-${el_name}`;
}

if (fs.existsSync(`${els_dir}/${el_name}`)){
	console.log(chalk.red(`Element folder "${els_dir}/${el_name}" already exists.\n`));
	process.exit(0);
}

console.log(chalk.green(`Creating "${el_name}" basic structure...`));
fs.mkdirSync(`${els_dir}/${el_name}`);


const js_file = `window.customElements.define('${el_name}', class extends HTMLDivElement {

	constructor () {
		super();
	}

	connectedCallback () {
		console.log('Hello World');
	}
}, {extends: 'div'});`;

let files = {
	[`${el_name}.js`]: js_file,
	[`${el_name}.scss`]: "",
	"readme.md": ""
}

Object.keys(files).forEach((file_name, index) => {
	const file = `${els_dir}/${el_name}/${file_name}`;
	fs.writeFile(file, files[file_name], err => {
		if (err) throw err;
		console.log(`Created ${file}`);
	});
});