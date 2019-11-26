import React from 'react';
import LearningCard from './Card/LearningCard';
import VerbList from './List';
import VerbHeader from './Header';
import Search from './Search';
import ShowVerbListButton from './ShowVerbListButton';

export default () => (
  <>
    <VerbHeader />
    <Search />
    <LearningCard />
    <ShowVerbListButton />
    <VerbList />
  </>
)
