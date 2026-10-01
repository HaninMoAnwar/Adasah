import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'

const pageInfo  = {
    pageName:'about',
    tag:'من نحن',
    titleStart:'مهمتنا هي',
    highlighted:'الإعلام والإلهام',
    titleRest:'',
    description:'مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.'
}
export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  
  return (
    <div>
      <Hero pageInfo={pageInfo} />
    </div>
  )
}
