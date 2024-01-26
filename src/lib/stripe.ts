import Stripe from "stripe";

export const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2023-10-16",
  typescript: true,
});

export const getStripe = (secretKey: string) => {
  return new Stripe(secretKey, {
    apiVersion: "2023-10-16",
    typescript: true,
  });
};
