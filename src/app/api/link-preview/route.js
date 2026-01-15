
import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    try {
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0; +http://localhost:3000)'
            }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch URL');
        }

        const html = await res.text();
        const $ = cheerio.load(html);

        const title = $('meta[property="og:title"]').attr('content') || $('title').text() || 'No Title';
        const description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || '';
        let image = $('meta[property="og:image"]').attr('content');

        // Handle relative URLs for image
        if (image && !image.startsWith('http')) {
            const baseUrl = new URL(url).origin;
            image = `${baseUrl}${image}`;
        }

        // Fallback or specific handling for GitHub if needed (GitHub usually has good OG tags)

        const domain = new URL(url).hostname.replace('www.', '');

        return NextResponse.json({
            title,
            description,
            image,
            domain,
            url
        });
    } catch (error) {
        console.error('Link Preview Error:', error);
        return NextResponse.json({
            title: url,
            description: '',
            image: null,
            domain: new URL(url).hostname,
            error: true
        });
    }
}
