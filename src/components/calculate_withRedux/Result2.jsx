import { useSelector } from 'react-redux';
import React from 'react'

export default function Result2() {

    const {result} = useSelector(state => state.count_reducer);

    console.log("result:",result);

    return (
        <div>
            Result: {result}
        </div>
    );
}