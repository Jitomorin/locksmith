import NextImage from "next/image";
export default function Logo({ ...rest }) {
  return <NextImage src="/logos/LOGO.png" alt="logo" width={100} height={75} />;
}
