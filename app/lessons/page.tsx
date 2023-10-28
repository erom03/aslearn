import React from 'react';
import GetOutput from "../components/getOutput"
import util from 'node:util';
import LessonCard from '../components/LessonCard';

const exec = util.promisify(require('node:child_process').exec);

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
