import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const products = await sql`SELECT * FROM products ORDER BY created_at DESC`;
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, description, price, image_url, category } = await request.json();
    const newProduct = await sql`
      INSERT INTO products (name, description, price, image_url, category)
      VALUES (${name}, ${description}, ${price}, ${image_url}, ${category})
      RETURNING *
    `;
    return NextResponse.json(newProduct[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}