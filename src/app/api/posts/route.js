import { NextResponse } from 'next/server'


export async function GET() {
    return NextResponse.json({items: [{id:1, title:"Hello World"}]})
}

// export async function POST() {
//     // form data
//     // api json post data
//     return NextResponse.json({hello: "abc"})
// }