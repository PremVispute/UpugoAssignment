import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="container mx-auto py-6 px-6 md:px-8 lg:px-16">
      {children}
    </div>
  )
}

export default Container
