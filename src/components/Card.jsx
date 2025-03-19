import React from 'react'

function Card() {
  return (
    <div><div class="bg-white rounded-md shadow-md overflow-hidden p-4 max-w-sm">
    <img class="w-full" src="https://tailwindflex.com/public/images/profile/118.png?ver=1" alt="Info card image"  />
    <div class="px-6 py-4">
        <h2 class="text-lg font-bold leading-tight text-gray-900">
            Info Card Title</h2>
        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div></div>
  )
}

export default Card