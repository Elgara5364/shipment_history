import { connectDB } from "@/app/database";
import { History } from "@/app/models/history";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const searchParams = req.nextUrl.searchParams;
    const searchQuery = searchParams.get("tracking_number") || "";
    // console.log(searchQuery);

    // const { name } = await params;
    const item = await History.find({ tracking_number: searchQuery });
    return NextResponse.json({ data: item });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const {
      tracking_number,
      item_name,
      sender,
      recipient,
      send_date,
      status,
      history,
    } = await req.json();

    const newShipment = new History({
      tracking_number,
      item_name,
      sender,
      recipient,
      send_date,
      status,
      history, // Riwayat kosong pada awalnya
    });

    const savedShipment = await newShipment.save();
    return NextResponse.json({
      message: "Pengiriman berhasil dibuat",
      shipment: savedShipment,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
}
