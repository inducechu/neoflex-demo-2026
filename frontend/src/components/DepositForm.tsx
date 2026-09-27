import React, { useState } from 'react';
import { CalculationRequest } from '../types/deposit';

interface DepositFormProps {
  onCalculate: (data: CalculationRequest) => void;
  loading: boolean;
}

export default function DepositForm({ onCalculate, loading }: DepositFormProps) {
  const [amount, setAmount] = useState<string>('100000');
  const [months, setMonths] = useState<string>('12');
  const [rate, setRate] = useState<string>('8.5');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numAmount = Number(amount);
    const numMonths = Number(months);
    const numRate = Number(rate);

    if (isNaN(numAmount) || numAmount <= 0) {
      setError('Сумма вклада должна быть больше 0');
      return;
    }
    if (isNaN(numMonths) || numMonths <= 0 || !Number.isInteger(numMonths)) {
      setError('Срок должен быть целым числом больше 0');
      return;
    }
    if (isNaN(numRate) || numRate <= 0) {
      setError('Годовая ставка должна быть больше 0');
      return;
    }

    setError(null);
    onCalculate({ amount: numAmount, months: numMonths, rate: numRate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Сумма вклада (₽):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          placeholder="100 000"
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Срок (месяцы):</label>
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          placeholder="12"
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Годовая ставка (%):</label>
        <input
          type="number"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          placeholder="8.5"
        />
      </div>

      {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Расчет...' : 'Рассчитать'}
      </button>
    </form>
  );
}
