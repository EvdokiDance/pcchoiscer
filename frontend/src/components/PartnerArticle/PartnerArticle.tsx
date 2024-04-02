import React, { FC, useEffect, useState } from 'react'
import Container from '../Container/Container'
import { ArticleType } from '../AdminArticleItem/AdminArticle';
import { getAllPartnerArticles } from '../../api/api';
import { Link } from 'react-router-dom';

export const PartnerArticle: FC = () => {

    const [partnerArticle, setPartnerArticle] = useState<ArticleType>(null);

    useEffect(() => {
        (async () => {
            const partnerArticles = await getAllPartnerArticles();
            if (partnerArticles.length > 0) {
              const sortedArticles = partnerArticles.sort(
                (a, b) => Number(a.id) - Number(b.id)
              );
              setPartnerArticle(partnerArticles[sortedArticles.length-1]);
            }
          })()
    }, [])


    const children = partnerArticle && <div className="grid grid-cols-12 gap-4">
    <div className="max-w-[600px] col-span-12 lg:col-span-6 lg:justify-self-center">
        <img className="w-[100%] h-[100%] max-h-[310px] rounded-xl object-cover"  alt="" src={partnerArticle.img}/>
    </div>
    <div className="col-[1/-1] lg:col-[7/-1] flex flex-col justify-start text-base gap-3">
          <p className="text-gray-500 uppercase">Партнеские материл от «{partnerArticle.companyName}»</p>
          <p className="font-bold mb-3 text-[20px]">{partnerArticle.title}</p>
          <p>{partnerArticle.description}</p>
          <p>{partnerArticle.text}</p>
    </div>
  </div>

    return (
        <>
          {partnerArticle ? <section className={`bg-red-900 py-10 mb-3 ${partnerArticle.link && 'hover:hover:bg-red-800 transition ease-in-out delay-75'}`}>
         <Container>
        {
            partnerArticle.link ? <Link to={partnerArticle.link} target='blank'>{children}</Link> : children
        }
        </Container>
        </section> : null}
        </>
    )
}
