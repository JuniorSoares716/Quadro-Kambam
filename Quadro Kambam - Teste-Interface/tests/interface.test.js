const puppeteer = require('puppeteer');
test("adicionar", async function(){
	const browser = puppeteer.launch({
		headless: true,
		slowMo: 80,
		args: ['--window-size=1920,1080']
	});
	const page = await browser.newPage();
	await page.goto("http://localhost:5000/");
	await page.click('button#btnCadastrar');
	await page.type('#inputAtividade','Requisitos novos', {delay:100});
	await page.click('#btnAdcAtivi');
	// const finalText = await page.evoluate(() => document.querySelector('ativi').textContent);
	// expect(finalText).toContain('(atividade)');
},30000);