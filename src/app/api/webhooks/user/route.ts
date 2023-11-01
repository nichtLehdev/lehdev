import { type IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, type WebhookRequiredHeaders } from "svix";
import { db } from "~/server/db";

const webhookSecret = process.env.WEBHOOK_SECRET ?? "";

async function handler(request: Request) {
  const payload = await request.json();
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-signature": headersList.get("svix-signature"),
    "svix-timestamp": headersList.get("svix-timestamp"),
  };

  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders,
    ) as Event;
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  const eventType: EventType = evt.type;
  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, ...attributes } = evt.data;

    await db.user.upsert({
      where: { external_id: id as string },
      create: { external_id: id as string, attributes },
      update: { attributes },
    });
  } else if (eventType === "user.deleted") {
    const { id } = evt.data;

    await db.user.delete({
      where: { external_id: id as string },
    });
  }
}

type EventType = "user.created" | "user.updated" | "user.deleted" | "*";
type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
