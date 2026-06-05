/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider } from "@tanstack/react-router";
import { StartClient } from "@tanstack/react-start/client";
import { getRouter } from "./router";

declare global {
  interface Window {
    $_TSR?: {
      router?: unknown;
    };
  }
}

const router = getRouter();

export default function App() {
  // If we are in a client-side environment that wasn't server-rendered (no $_TSR or $_TSR.router),
  // fall back to rendering RouterProvider directly so the SPA loads flawlessly.
  if (typeof window !== "undefined" && (!window.$_TSR || !window.$_TSR.router)) {
    return <RouterProvider router={router} />;
  }

  return <StartClient />;
}
