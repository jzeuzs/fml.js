import fetch from 'node-fetch';
import { load } from 'cheerio';

/**
 * Fetches a random FML quote.
 * @returns {Promise<string>} The quote.
 */
export default async (): Promise<string> => {
	const text = await (await fetch('https://www.fmylife.com/random')).text();
	const $ = load(text, { normalizeWhitespace: true });
	const fml = $('a.article-link').first().text().trim();

	return fml;
};
