import React from 'react'

const MatchesBlock = ({match}) =>{
        
    console.log(match)

    return (
            <div className="match_block">
                <div className="match_date">
                    {match.final ? match.date : `Match not played yet: ${match.date}`}
                </div>
            </div>
        )
    } 

export default MatchesBlock;