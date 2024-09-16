import React from 'react';

const Transcription = ({ output }) => {
  const finalText = output.map((val) => val.text);

  return <div>{finalText}</div>;
};

export default Transcription;
