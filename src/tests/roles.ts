import { Role, Selector } from "testcafe"

export const searchInGoogle = Role('http://google.com.ua', async t => {
    await t
        .typeText('[name=q]', 'TestCafe io').pressKey('enter')
        .click(Selector('a').withText('testcafe.io').nth(0))
        .expect(Selector('.description').innerText).eql('TestCafe is a user-friendly end-to-end testing solution. Free and open-source test runner. Powerful desktop app.');
}, { preserveUrl: true })