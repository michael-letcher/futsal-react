import React from 'react';
import './tab-item.scss';
// import * from ''

export interface ITabItem {
  title: string;
  active?: boolean;
}

export function TabItem(props: ITabItem) {
  return (
    <div className={`tab-list-item ${props.active ? 'active' : ''}`}>
      {props.title}
    </div>
  );
}
