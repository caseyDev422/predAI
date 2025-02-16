import { FC } from 'react';

interface StatRowProps {
  label: string;
  value: string | number | undefined;
}

const StatRow: FC<StatRowProps> = ({ label, value }) => {
  return (
    <div className='flex flex-row gap-4 p-2'>
      <span className='font-bold w-32 text-left'>{label}:</span>
      <span className='flex-1'>{value}</span>
    </div>
  );
};

export default StatRow;