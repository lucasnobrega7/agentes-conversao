import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { 
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'agentes-conversao',
      environment: process.env.NODE_ENV
    },
    { 
      status: 200 
    }
  );
}