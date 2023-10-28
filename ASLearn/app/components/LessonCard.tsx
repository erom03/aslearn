import Link from 'next/link'
import React from 'react'

interface props{
    parentToChild: any
    lessonName : string
    isSolvable : boolean
}

const LessonCard = (props : props, parentToChild : props) => {
  return (
    <div className=" border-gray-200 dark:border-gray-600 w-[95%]">
      {(() => {
        if (props.isSolvable) {
          return (
            <div>    
              <div className="flex justify-between rounded-lg shadow-md ring-1 ring-black ring-opacity-5 mx-auto p-10 w-2/3">
                  <div className="my-auto">{props.lessonName}</div>
                  <div><Link href={props.parentToChild}><button className="font-bold h-12 px-12 m-auto text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Begin</button></Link></div>
              </div>
            </div>
          )
        } else {
          return (
            <div>    
              <div className="flex justify-between rounded-lg shadow-md ring-1 ring-black ring-opacity-5 mx-auto p-10 w-2/3">
                  <div className="my-auto">{props.lessonName}</div>
                  <div><button className="font-bold h-12 px-12 m-auto text-white transition-colors duration-150 bg-zinc-500 rounded-lg focus:shadow-outline hover:bg-zinc-600">Locked</button></div>
              </div>
            </div>
          )
        }
      })()}
    </div>
  )
}

export default LessonCard