import {cpSync, rmSync} from 'node:fs';
import {resolve} from 'node:path';

const cssPath = resolve('./css/vendor');
const jsPath = resolve('./js/vendor');

function main() {
    clean();
    distributeMicrolight();
}

function clean() {
    console.log(`Clean existing assets`);
    rmSync(cssPath, {recursive: true, force: true});
    rmSync(jsPath, {recursive: true, force: true});
}

function distributeMicrolight() {
    console.log(`Distributing Microlight`);
    cpSync('node_modules/microlight/microlight.js', resolve(jsPath, 'microlight.min.js'));
}

main();