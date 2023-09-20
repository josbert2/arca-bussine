import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
    
    try {
        const users = await prisma.users.findMany();
        
        return NextResponse.json({
            users,
            message: "Users fetched successfully"
        })

    } catch (error) {
        console.log(error)
        return NextResponse.error({
            status: 500,
            message: error.message
        })
    }
}

export async function POST(request) {
    
    const { name, email } = await request.json();

    const user = await prisma.users.create({
        data: {
            name,
            email,
            password: "123456",

        },
    });


    const getLastInsertId = await prisma.users.findFirst({
        orderBy: {
            id: "desc"
        }
    })

    return NextResponse.json({
        user,
        getLastInsertId,
        message: "User created successfully"
    })
}
