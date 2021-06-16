import React from 'react';
import './tab-list.scss';
import { ITabItem, TabItem } from './tab-item';

export function TabList(props: { list: ITabItem[] }) {
  return (
    <div className="tab-list">
      {props.list.map(item => (
        <TabItem key={item.title} {...item}></TabItem>
      ))}
    </div>
  );
}
