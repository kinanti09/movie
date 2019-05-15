import React from 'react'
import { Link } from 'react-router-dom';

export default function notFound() {
  return (
    <div>
      <h3>We couldn't find what you were looking for :(</h3>
      <Link to='/'>Here you can browse the movies</Link>
    </div>
  )
}
