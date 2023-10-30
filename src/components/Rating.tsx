import React from 'react';

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingProps) => {
    console.log('Rating rendered')
    if (props.value === 1) {
        return <>
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
        </>
    } else if (props.value === 2) {
        return <>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
        </>
    } else if (props.value === 3) {
        return <>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={false} />
        </>
    } else if (props.value === 4) {
        return <>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={false} />
        </>
    } else if (props.value === 5) {
        return <>
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
        </>
    } else {
        return <>
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
        </>
    }

}
// Typing Star
type StarProps = {
    selected: boolean
}
export const Star = (props: StarProps) => {
    console.log('Star rendered')
    if (props.selected === true) {
        return <><b>Star </b></>
    } else {
        return <>Star </>
    }
}