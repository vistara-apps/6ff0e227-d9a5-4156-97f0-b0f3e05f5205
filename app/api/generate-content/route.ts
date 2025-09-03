import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export async function POST(request: NextRequest) {
  try {
    const { location, type, language = 'en' } = await request.json();

    let prompt = '';
    
    switch (type) {
      case 'rights':
        prompt = `Generate a concise summary of legal rights for ${location} during law enforcement encounters. Focus on constitutional rights, what citizens can and cannot do, and key protections. Keep it practical and actionable. Language: ${language === 'es' ? 'Spanish' : 'English'}`;
        break;
      case 'scripts':
        prompt = `Generate common communication scripts for law enforcement encounters in ${location}. Include phrases for exercising rights, asking about detention status, and de-escalation. Language: ${language === 'es' ? 'Spanish' : 'English'}`;
        break;
      case 'dos_donts':
        prompt = `Generate a list of DO's and DON'Ts for law enforcement encounters in ${location}. Make it specific, actionable, and legally accurate. Language: ${language === 'es' ? 'Spanish' : 'English'}`;
        break;
      default:
        throw new Error('Invalid content type');
    }

    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'system',
          content: 'You are a legal assistant providing accurate, helpful information about civil rights during police encounters. Be concise, practical, and focus on constitutional protections.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.3,
    });

    const content = completion.choices[0]?.message?.content;

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Content generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}
