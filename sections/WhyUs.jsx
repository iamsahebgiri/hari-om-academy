import React from 'react';
import WhyUsItem from '../components/WhyUsItem';

export default function WhyUs() {
  return (
    <div>
      <WhyUsItem color="#8777D9" icon="ion-planet" title="Advanced Classrooms" description="Technology is a driving force in education, opening up many doors and preparing students for what lies ahead, not behind. We provide cutting-edge technology in our learning space for everyone." src="/advanced_classroom.svg" reverse />
      <WhyUsItem color="#00C7E6" icon="ion-rocket" title="Competitive Environment" description="We live in a competitive world where everything is relative. Millions of students and individual attend competitive exams every year. If you are not competitive you will be left behind in the race. " src="/competitive.svg" />
      <WhyUsItem color="#FFAB00" icon="ion-book" title="Open Library" description="Nothing is pleasanter than exploring a library. Besides providing books to student we also conduct group discussion in library regularly to fill the mind of youngsters with knowledge." src="/library.svg" reverse />
      <WhyUsItem color="#57D9A3" icon="ion-golf" title="Goal Oriented Studies" description=" A person without a goal is a person without a life. You are studying everyday to achieve your goal someday. Our faculties work day and night to achieve your goal. " src="/goal.svg" />
      <WhyUsItem color="#6B778C" icon="ion-wallet" title="Financial Aid" description="Economical conditions should never hinder you in your preparation as long as you study well. We provide scholarship and free classes to the economically backward students of the nation." src="/economic_support.svg" reverse />
    </div>
  );
}
