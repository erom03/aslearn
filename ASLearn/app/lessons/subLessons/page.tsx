import React from 'react';
import util from 'node:util';
import LessonCard from '../../components/LessonCard';

const exec = util.promisify(require('node:child_process').exec);

// function findAddress(name : any){
//     if(isNaN(name)){
//         return "/";
//     } else{
//         return name;
//     }
// } {/*address=findAddress()*/}

const Lessons = () => {
  return (
    
      <div className="flex flex-col items-center justify-center gap-6">
      <LessonCard lessonName='Lesson 1: A' parentToChild={'/lessons/subLessons/introLessonA'} isSolvable={true}/>
      <LessonCard lessonName='Lesson 2: B' parentToChild={'/'} isSolvable={false}/>
      <LessonCard lessonName='Lesson 3: C' parentToChild={'/'} isSolvable={false}/> 
      <LessonCard lessonName='Lesson 4: D' parentToChild={'/'} isSolvable={false}/>
      <LessonCard lessonName='Lesson 5: E' parentToChild={'/'} isSolvable={false}/>
      <LessonCard lessonName='Lesson 6: F' parentToChild={'/'} isSolvable={false}/>
      </div>
  )
}

export default Lessons;
