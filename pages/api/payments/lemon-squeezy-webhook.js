import { Buffer } from "buffer";
import crypto from "crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import rawBody from "raw-body";
import { Readable } from "stream";
import lemonSqueezy from "@/lib/lemonSqueezy";

export async function POST(request) {
  const body = await rawBody(Readable.from(Buffer.from(await request.text())));
  const headersList = headers();
  const payload = JSON.parse(body.toString());
  const sigString = headersList.get("x-signature");
  const secret = process.env.LEMONS_SQUEEZY_SIGNATURE_SECRET;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(body).digest("hex"), "utf8");
  const signature = Buffer.from(
    Array.isArray(sigString) ? sigString.join("") : sigString || "",
    "utf8"
  );

  // Check if the webhook event was for this product or not
  if (
    parseInt(payload.data.attributes.product_id) !==
    parseInt(process.env.LEMONS_SQUEEZY_PRODUCT_ID)
  ) {
    return NextResponse.json({ message: "Invalid product" }, { status: 403 });
  }

  // validate signature
  if (!crypto.timingSafeEqual(digest, signature)) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 403 });
  }

  const userId = payload.meta.custom_data[0];

  // Check if custom defined data i.e. the `userId` is there or not
  if (!userId) {
    return NextResponse.json(
      { message: "No userId provided" },
      { status: 403 }
    );
  }

  switch (payload.meta.event_name) {
    case "subscription_created": {
      const subscription =
        await lemonSqueezy.LemonSqueezyClient.getSubscription({
          id: payload.data.id,
        });

      const subscriptionId = subscription.data.id;
      const customerId = payload.data.attributes.customer_id;
      const userEmail = payload.data.attributes.user_email;
      const variantId = subscription.data.attributes.variant_id;
      const currentPeriodEnd = subscription.data.attributes.renews_at;

      //update values in your db
    }

    case "subscription_updated": {
      const subscription =
        await lemonSqueezy.LemonSqueezyClient.getSubscription({
          id: payload.data.id,
        });

      const subscriptionId = subscription.data.id;
      const customerId = payload.data.attributes.customer_id;
      const userEmail = payload.data.attributes.user_email;
      const variantId = subscription.data.attributes.variant_id;
      const currentPeriodEnd = subscription.data.attributes.renews_at;
      //update values in your db
    }

    default: {
      return;
    }
  }
}
