import Stripe from "stripe";
import dotenv from "dotenv";
import path from "path"

dotenv.config({
  path: path.resolve(__dirname, "../../.env")
})

export const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY ?? '', {
  apiVersion: "2023-10-16",
  typescript: true,
});
