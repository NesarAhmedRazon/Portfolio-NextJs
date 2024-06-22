"use server";

export default async function WPLink() {
  const envSSR = process.env.WP_URL;

  return envSSR;
}
