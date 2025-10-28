import {cpSync, rmSync} from 'node:fs';
import {resolve} from 'node:path';

const cssPath = resolve('./css/vendor');
const jsPath = resolve('./js/vendor');

function main() {
    clean();
    distributeMicrolight();
    distributeRelativeTime();
    distributeOpenProps();
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

function distributeRelativeTime() {
    console.log(`Distributing Relative Time`);
    cpSync('node_modules/@github/relative-time-element/dist/bundle.js', resolve(jsPath, 'github-elements/relative-time.js'));
}

function distributeOpenProps() {
    console.log(`Distributing OpenProps`);
    cpSync('node_modules/open-props/open-props.min.css', resolve(cssPath, 'open-props/open-props.min.css'));
}

main();