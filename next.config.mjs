// @ts-check
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  disable: process.env.NODE_ENV === "development",
});

export default withPWA({
  distDir: process.env.DEPLOY ? "build" : undefined,
});
