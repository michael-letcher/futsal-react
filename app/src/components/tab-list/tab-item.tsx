import React from 'react';
import './tab-item.scss';
// import * from ''

export interface ITabItem {
  id: string;
  title: string;
  active?: boolean;
  onClick: (id: string) => void;
}

export function TabItem(props: ITabItem) {
  return (
    <div
      className={`tab-list-item ${props.active ? 'active' : ''}`}
      onClick={() => props.onClick(props.id)}
    >
      {props.title}
    </div>
  );
}
