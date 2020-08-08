import {rootUrl} from '../tests.js';
import {Selector} from 'testcafe';

const headerLinkArticles = Selector('header')
  .find('a')
  .withExactText('Articles');

fixture`Home`.page(rootUrl);

test('Header link Articles', async t => {
  await t
    .takeScreenshot({
      path: 'home.png',
      fullPage: true,
    })
    .click(headerLinkArticles)
    .expect(Selector('h1').innerText)
    .contains('Articles')
    .takeScreenshot({
      path: 'articles/articles-index.png',
      fullPage: true,
    });
});
