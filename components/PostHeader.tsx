import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'
import { Separator } from './ui/separator'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>,
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <div className='max-w-[1000px] mt-12'>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:flex items-center gap-6">
        {author && <Avatar name={author.name} picture={author.picture} />}
      <Separator orientation='vertical' className='border' />
      <Date dateString={date} />
      </div>

      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg italic">
          <Date dateString={date} />
        </div>
      </div>
    </div>
  )
}
