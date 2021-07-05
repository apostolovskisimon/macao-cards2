import React from 'react'
import Card from './Card'

interface Props {

}

export const Cards = (props: Props) => {
    return (
        <div className="cards">
            <Card cardColor="red" cardNumber="5" cardSign="&hearts;" front={false} />
            <Card cardColor="black" cardNumber="A" cardSign="&clubs;" front={true} />
            <Card cardColor="black" cardNumber="A" cardSign="&clubs;" front={true} jokerCard={true} />

        </div>
    )
}

