import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) =>
  NextResponse.redirect(new URL("/events/all", request.url));

export const config = {
  matcher: ["/events"],
};
