import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://google.com.ua`;

test('Checking installation commands in TestCafe portal', async t => {
    await t
        .typeText('[name=q]', 'TestCafe io').pressKey('enter')
        .click(Selector('a').withText('testcafe.io').nth(0))
        .expect(Selector('.description').innerText).eql('TestCafe is a user-friendly end-to-end testing solution. Free and open-source test runner. Powerful desktop app.');

    await t
        .click(Selector('.header-right-nav a').nth(0))
        .click(Selector('a').withText('Install TestCafe'))
        .expect(Selector('code').withText('npm i -g testcafe').visible).ok()
        .expect(Selector('code').withText('node --version').visible).ok()
        .expect(Selector('code').withText('npm --version').visible).ok()
        .expect(Selector('code').withText('npm install -g npm@latest').visible).ok()
        .expect(Selector('code').withText('curl -qL https://www.npmjs.com/install.sh | sh').visible).ok()
        .expect(Selector('code').withText('npm install --save @ffmpeg-installer/ffmpeg').visible).ok()
        .expect(Selector('code').withText('yarn init').visible).ok()
        .expect(Selector('code').withText('yarn add -D testcafe').visible).ok()
});
