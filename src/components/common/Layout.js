import { useEffect, useRef } from 'react';

function Layout({ name, children, bgImage }) {
  const frame = useRef(null);

  useEffect(() => {
    frame.current.classList.remove('on');
    frame.current.classList.add('on');
  }, []);

  return (
    <section className={`content ${name}`} ref={frame}>
      <figure className={`bg ${name}Bg`}>
        <img src={bgImage} />
      </figure>
      <div className='inner'>
        <h1>{name}</h1>
        {children}
      </div>
    </section>
  );
}

export default Layout;
