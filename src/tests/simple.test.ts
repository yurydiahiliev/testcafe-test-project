import { Selector } from 'testcafe';
import { searchInGoogle } from './roles';

fixture `Getting Started`

test('Test 1 - Checking installation commands in TestCafe portal', async t => {
    await testSteps(t);
});

test('Test 2 - Checking installation commands in TestCafe portal', async t => {
    await testSteps(t);
});

test('Test 3 - Checking installation commands in TestCafe portal', async t => {
    await testSteps(t);
});

test('Test 4 - Checking installation commands in TestCafe portal', async t => {
    await testSteps(t);
});

test('Test 5 - Checking installation commands in TestCafe portal', async t => {
    await testSteps(t);
});

test('Test 6 - Checking installation commands in TestCafe portal', async t => {
    await testSteps(t);
});

async function testSteps(t: TestController) {
    await t
        .useRole(searchInGoogle)
        .click(Selector('.header-right-nav a').nth(0))
        .click(Selector('a').withText('Install TestCafe'))
        .expect(Selector('code').withText('npm i -g testcafe').visible).ok()
        .expect(Selector('code').withText('node --version').visible).ok()
        .expect(Selector('code').withText('npm --version').visible).ok()
        .expect(Selector('code').withText('npm install -g npm@latest').visible).ok()
        .expect(Selector('code').withText('curl -qL https://www.npmjs.com/install.sh | sh').visible).ok()
        .expect(Selector('code').withText('npm install --save @ffmpeg-installer/ffmpeg').visible).ok()
        .expect(Selector('code').withText('yarn init').visible).ok()
        .expect(Selector('code').withText('yarn add -D testcafe').visible).ok();
}

