"use client";
import React from 'react'
import type { RootState } from '@/Redux/store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/Redux/features/counterSlice'

export function About() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
 

      <h1>{count}</h1>
    </div>
  )
}