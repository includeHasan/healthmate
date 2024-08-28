"use client"
import * as Switch from '@radix-ui/react-switch'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const CardWithSkeleton = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate image loading
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <div className="bg-surface p-4 rounded-lg shadow-md max-w-sm">
      <div className="relative w-full h-48 mb-4">
        {isLoading ? (
          <div className="absolute inset-0 bg-textSecondary animate-pulse rounded" />
        ) : (
          <Image
            src="/path-to-your-image.jpg"
            alt="Card image"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        )}
      </div>
      <h3 className="text-lg font-semibold text-textPrimary mb-2">Card Title</h3>
      <p className="text-textSecondary">This is a card with an image skeleton loader.</p>
    </div>
  )
}

const page = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
   
    const initialTheme = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDarkMode(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme)
  }, [])

  const toggleTheme = (checked) => {
    setIsDarkMode(checked)
    const theme = checked ? 'dark' : 'light'
    localStorage.theme = theme
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(theme)
  }

  return (
    <div className='bg-background min-h-screen p-8'>
      <h1 className='text-4xl font-bold text-primary mb-8'>Color Preview</h1>
      
      <div className='space-y-6'>
        <div className='bg-surface p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-textSecondary mb-4'>Surface Color</h2>
          <p className='text-textSecondary'>This box demonstrates the surface color.</p>
        </div>

        <div className='bg-primary text-surface p-4 rounded-md inline-block'>
          <span className='font-medium text-textSecondary'>Primary Color Button</span>
        </div>

        <div className='space-y-2'>
          <p className='text-textPrimary'>This is primary text color.</p>
          <p className='text-textSecondary'>This is secondary text color.</p>
        </div>

        <CardWithSkeleton />

        <div className="flex items-center">
          <span className="mr-2 text-textPrimary">Theme:</span>
          <label htmlFor="theme-switch" className="flex items-center cursor-pointer">
            <div className="relative">
              <Switch.Root
                id="theme-switch"
                onCheckedChange={toggleTheme}
                checked={isDarkMode}
                className="w-14 h-7 bg-textSecondary rounded-full shadow-inner"
              >
                <Switch.Thumb className="block w-6 h-6 bg-surface rounded-full shadow transition transform translate-x-0 data-[state=checked]:translate-x-7" />
              </Switch.Root>
            </div>
            <div className="ml-3 text-textSecondary">
              {isDarkMode ? 'Dark' : 'Light'}
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default page
