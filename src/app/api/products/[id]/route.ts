import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    await sql`DELETE FROM products WHERE id = ${resolvedParams.id}`;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const { name, description, price, image_url, category } = await request.json();
    const updatedProduct = await sql`
      UPDATE products
      SET name = ${name}, description = ${description}, price = ${price}, image_url = ${image_url}, category = ${category}
      WHERE id = ${resolvedParams.id}
      RETURNING *
    `;
    return NextResponse.json(updatedProduct[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}