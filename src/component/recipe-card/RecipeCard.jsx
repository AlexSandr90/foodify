import React from 'react';

import './recipe-card.scss'

const RecipeCard = () => {


    return (
        <div className='recipe-card'>
            <img
                src="https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg"
                alt=""
                className='recipe-img'
            />
            <div className='card-info'>
                <h2 className='recipe-name'>
                    Fish fofos
                </h2>
                <p className='recipe-description'>
                    STEP 1\r\n\r\nPut the fish into a lidded pan and pour over
                    enough water to cover. Bring to a simmer and gently poach
                    for 10 minutes over a low heat with the lid on. Drain and
                    flake the fish.\r\n\r\nSTEP 2\r\n\r\nPut the fish, potato,
                    green chilli, coriander, cumin, black pepper, garlic and
                    ginger in a large bowl. Season, add the rice flour, mix
                    well and break in 1 egg. Stir the mixture and divide into
                    15, then form into small logs. Break the remaining eggs
                    into a bowl and whisk lightly. Put the breadcrumbs into
                    another bowl. Dip each fofo in the beaten egg followed by
                    the breadcrumb mixture. Chill for 20 minutes.\r\n\r\nSTEP
                    3\r\n\r\nHeat 1cm of oil in a large frying pan over a medium
                    heat. Fry the fofos in batches for 2 minutes on each side,
                    turning gently to get an even golden brown colour all over.
                    Drain on kitchen paper and repeat with the remaining fofos.
                    \r\n\r\nSTEP 4\r\n\r\nFor the onion salad, mix together the
                    onion, coriander and lemon juice with a pinch of salt. Serve
                    with the fofos and mango chutney.
                </p>
            </div>
        </div>
    )
};

export default RecipeCard;