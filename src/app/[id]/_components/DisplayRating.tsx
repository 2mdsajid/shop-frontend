import React from 'react'

type Props = {}


function StarIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }
  

const DisplayRating = (props: Props) => {
    return (
        <div>
            <div className="flex items-center">
                <div className="flex items-center mr-2">
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-gray-300 w-5 h-5" />
                </div>
                <span className="text-sm text-gray-500">34 Ratings | 7 Answered Questions</span>
            </div>
        </div>
    )
}

export default DisplayRating