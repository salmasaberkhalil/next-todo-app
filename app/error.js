'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Error({ error, reset }) {
  const router = useRouter()
  
  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold mb-4">An unexpected error occurred!</h1>
      <p className="mb-6">We apologize for the inconvenience, please try again.</p>
      
      <div className="space-x-4">
        <button 
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Try again
        </button>
        
        <button 
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Return to homepage
        </button>
      </div>
    </div>
  )
}