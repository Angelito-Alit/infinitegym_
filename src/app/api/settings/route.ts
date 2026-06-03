import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const settings = await sql`SELECT config_data FROM site_settings WHERE id = 1`;
    return NextResponse.json(settings[0]?.config_data || {});
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const configData = JSON.stringify(data);
    await sql`
      INSERT INTO site_settings (id, config_data) 
      VALUES (1, ${configData}::jsonb)
      ON CONFLICT (id) DO UPDATE SET config_data = ${configData}::jsonb
    `;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}