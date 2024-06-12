import { NextResponse } from 'next/server'

export async function POST() {
    // form data
    // api json post data
    return NextResponse.json({hello: "abc"})
}