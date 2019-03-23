import React from 'react';

interface Props {
  bar: string;
}

const App: React.FC<Props> = ({ bar = 3 }) => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div>
      <div>{bar}</div>
    </div>
  );
};
