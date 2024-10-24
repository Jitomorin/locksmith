import cn from "classnames";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface CoverImageProps {
  title: string;
  slug?: string;
  image: any;
  priority?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props;
  const image = source?.asset?._ref ? (
    <div
      className={cn("shadow-small", {
        "transition-shadow duration-200 hover:shadow-large rounded-lg": slug,
      })}
    >
      {/* <Image
        className="h-auto w-full rounded-lg"
        width={2000}
        height={500}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      /> */}
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
