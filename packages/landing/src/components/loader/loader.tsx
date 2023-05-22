import React from 'react';
import style from './loader.module.css';

const App = () => {
  const [count, updateCount] = React.useState(0);
  
  if (count > 100) updateCount(0);
  else
    setTimeout(() => {
      updateCount(count + Math.ceil(Math.random() * 5));
    }, 1000);
  
  return (
    <div className={style.bigBlock}>
      <div className={style.h1}>{count}<div className={style.span}>%</div></div>
      <div className={style.p}>в стадии деплоя</div>
      <div className={style.block}>
        <div className={style.lizard} style={{width: count + '%'}}></div>
      </div>
    </div>
  );
};

export default App;
