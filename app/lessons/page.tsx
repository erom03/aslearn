import React from 'react';
import LessonCard from '../components/LessonCard';

const Lessons = () => {
  return (
    
      <div className="flex flex-col items-center justify-center gap-6">
      <LessonCard lessonName='Introductory' parentToChild={'lessons/subLessons'} isSolvable={true}/>
      <LessonCard lessonName='Novice' parentToChild={'/'} isSolvable={false}/>
      <LessonCard lessonName='Intermediate' parentToChild={'/'} isSolvable={false}/>
      <LessonCard lessonName='Advanced' parentToChild={'/'} isSolvable={false}/>
      <LessonCard lessonName='Expert' parentToChild={'/'} isSolvable={false}/>
      </div>
  )
}

export default Lessons;
