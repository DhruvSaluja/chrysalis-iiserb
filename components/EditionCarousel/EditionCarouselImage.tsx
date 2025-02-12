import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CarouselImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 shadow-lg hover:shadow-medium ': slug,
      })}
    >
      <Image
        className="max-h-[90vh] shadow-lg"
        width={1900}
        height={1000}
        alt=""
        src={urlForImage(source).height(1000).width(1900).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

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
  )
}
