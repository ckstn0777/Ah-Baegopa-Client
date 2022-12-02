import Link from 'next/link'

function SearchRankRow({ rank, keyword }: { rank: number; keyword: string }) {
  return (
    <li>
      <Link href="#" className="flexbox-center gap-2 py-1 px-1">
        <span className="text-body1 text-gray4 font-bold">{rank}</span>
        <span className="flex-1 font-bold">{keyword}</span>
        <span className="text-caption1 text-gray4">new</span>
      </Link>
    </li>
  )
}

export default SearchRankRow
