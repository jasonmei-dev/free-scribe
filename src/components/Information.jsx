import { useState } from 'react';
import Transcription from './Transcription';
import Translation from './Translation';

const Information = ({ output }) => {
  const [tab, setTab] = useState('transcription');

  const handleCopy = () => {
    navigator.clipboard.writeText();
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download(`Freescribe_${new Date().toDateString()}.txt`);
    document.body.appendChild(element);
    element.click();
  };

  return (
    <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 justify-center text-center pb-20 max-w-prose w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
        Your <span className="text-blue-400 bold">Transcription</span>
      </h1>
      <div className="grid grid-cols-2 mx-auto bg-white shadow rounded-full overflow-hidden">
        <button onClick={() => setTab('transcription')} className={'px-4 duration-200 py-1 ' + (tab === 'transcription' ? 'bg-blue-400 text-white' : 'text-blue-400 hover:text-blue-600')}>
          Transcription
        </button>
        <button onClick={() => setTab('translation')} className={'px-4 duration-200 py-1 ' + (tab === 'translation' ? 'bg-blue-400 text-white' : 'text-blue-400 hover:text-blue-600')}>
          Translation
        </button>
      </div>
      <div className="my-8 flex flex-col">{tab === 'transcription' ? <Transcription output={output} /> : <Translation />}</div>
      <div className="flex items-center gap-4 mx-auto">
        <button onClick={handleCopy} title="Copy" className="bg-white hover:text-blue-500 duration-200 text-blue-300 p-2 rounded px-2 aspect-square grid place-items-center">
          <i className="fa-solid fa-copy"></i>
        </button>
        <button onClick={handleDownload} title="Download" className="bg-white hover:text-blue-500 duration-200 text-blue-300 p-2 rounded px-2 aspect-square grid place-items-center">
          <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </main>
  );
};

export default Information;
