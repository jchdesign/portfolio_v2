import React from 'react'

import CardLong from './CardLong'

function CardSection({data}) {
  return (
    <section className='card-section'>
        {data.length!==0 &&
            data.map((item) => (
                <CardLong
                    key={item.key}
                    listing={item.listing}
                    link={item.link}
                    imgCard={item.imgCard}
                    miniOverview={item.miniOverview}
                />
            ))
        }
    </section>
  )
}

export default CardSection