import { connectDB } from "@/app/database";
import { History } from "@/app/models/history";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { trackingNumber } = await params;
    const res = await History.findOne({ tracking_number: trackingNumber });
    return NextResponse.json({ data: res });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
export async function POST(req, { params }) {
  try {
    await connectDB();
    const { trackingNumber } = await params;
    const res = await History.findOne({ tracking_number: trackingNumber });
    const { date, location, status, notes } = await req.json();
    console.log(res);

    const updatedShipment = await History.findByIdAndUpdate(
      res._id,
      { $push: { history: { date, location, status, notes } } }, // Tambahkan riwayat baru
      { new: true } // Mengembalikan dokumen yang telah diperbarui)
    );

    return NextResponse.json({ message: updatedShipment });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
