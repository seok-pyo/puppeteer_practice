const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://forum.obsidian.md/c/plugins/10');

  const data = await page.$$eval(
    'td.main-link.clearfix.topic-list-data > span > a',
    // (element) => element.textContext
    (elements) => {
      return elements.map((element) => element.textContent.trim());
    }
  );

  console.log(data);

  await browser.close();
})();
