import SingleNews from "@/components/News/SingleNews";
import NewsCard from '@/components/News/News';

const page = () => {
  return (
    <div>
        <SingleNews />
       <div className='mt24 mb-24'>
        <NewsCard />
    </div>
    </div>
  )
}

export default page