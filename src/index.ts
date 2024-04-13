import { Hono } from 'hono';
import { Ai } from '@cloudflare/ai';
import html from './pages/index.html';

export interface Env {
	AI: any;
	MY_BUCKET: any;
}

const app = new Hono<{ Bindings: Env }>();

app.get('/', async (c) => {
	return c.html(html);
});

app.post('/quote', async (c) => {
	const ai = new Ai(c.env.AI);

	const messages = [
		{
			role: 'user',
			// content: `Select a random animal and write a motivational quote about that animal. Limit the quote to 50 words,
			// 	Start with I am a/an [animal] and end with a positive message. For example, I am a lion and I am strong and brave.`,

			content: `Select a random animal and write a motivational quote about that animal. Limit the quote to 50 words`,
		},
	];

	const response = await ai.run('@cf/openchat/openchat-3.5-0106', { messages });

	return c.json({ draft: response });
});

app.post('/image', async (c) => {
	const ai = new Ai(c.env.AI);
	const { prompt } = await c.req.json();

	if (!prompt) {
		return c.json({ error: 'Prompt is required' });
	}

	const image = await ai.run('@cf/lykon/dreamshaper-8-lcm', { prompt });
	console.log(image);

	c.status(200);
	c.header('Content-Type', 'image/png'); // means binary data
	return c.body(image);
});

export default app;
