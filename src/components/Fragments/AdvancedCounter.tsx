import React, { useEffect, useState } from 'react';

const AdvancedCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [step, setStep] = useState<number>(1);
  const [savedMessage, setSavedMessage] = useState<string>('');

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => prev - step);

  const reset = () => {
    setCount(0);
    setHistory([0]);
  };

  useEffect(() => {
    setHistory(prev => [...prev, count]);

    const saveToLocalStorage = setTimeout(() => {
      localStorage.setItem('counterValue', count.toString());
      setSavedMessage('Changes saved.');
    }, 1000);

    return () => clearTimeout(saveToLocalStorage);
  }, [count]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') increment();
      else if (e.key === 'ArrowDown') decrement();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [step]);

  return (
    <div  className='mt-20 mx-auto border max-w-96 border-black/10 p-10'>
      <h2>Counter</h2>
      <h3>Current Count: <strong>{count}</strong></h3>

      <div style={{ marginBottom: 16 }}>
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={reset} style={{ backgroundColor: 'red', color: 'white' }}>
          Reset
        </button>
      </div>

      <div>
        Step Value:
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          style={{ width: 60, marginLeft: 8 }}
        />
      </div>

      <p><em>{savedMessage}</em></p>

      <div style={{ marginTop: 16, textAlign: 'left' }}>
        <strong>Count History:</strong>
        <ul>
          {history.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>

      <p className='mt-12 text-lg'>
        Use <strong>ArrowUp</strong> to increment and <strong>ArrowDown</strong> to decrement.
      </p>
    </div>
  );
};

export default AdvancedCounter;
