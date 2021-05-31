import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import "./tabs.scss"
import News from '../news/news';
import Chat from '../chat/chat';





export default function NavTabs() {
  const [blockHeight, setBlockHeight] = useState()


  useEffect(()=>{
      setBlockHeight(window.innerHeight)
  },[])

  const [value, setValue] = React.useState(1);

  const handleChange = ( newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs">
      <div className="tabs__nav-bar">
        <div className={classNames('tabs__nav-bar-item','tabs__nav-bar-item-border', {
          'tabs__nav-bar-item-active': value == 1
        })}
        onClick = {()=> handleChange(1)}
        >ЧАТ</div>
        <div className={classNames('tabs__nav-bar-item', {
          'tabs__nav-bar-item-active': value == 2
        })}
        onClick = {()=> handleChange(2)}
        >НОВОСТИ</div>
      </div>
      <div className="tabs__content" style={{height: blockHeight-105  + 'px'}}>
        {value === 1 && <Chat />}
        {value === 2 && <News />}

      </div>

    </div>


  );
}