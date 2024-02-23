import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";


export async function DELETE(req, { params }) {
    try {
        const {id} = params;
        console.log(id)
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({message: "Ticket deleted"}, {status: 200})
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}