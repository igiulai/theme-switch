// src/features/theme/ThemeSwitch.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from './themeSlice';
import { RootState } from '../../app/store';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state: RootState) => state.theme.color);

  const themeColors = [    
    '#282c34', // Dark blue
    '#1a1a2e', // Dark purple
    '#16213e', // Navy blue
    '#4a148c', // Deep purple
    '#006064', // Dark cyan
  ];

  return (
    <div style={{ margin: '20px 0' }}>
      <h4>Theme Color:</h4>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {themeColors.map((color) => (
          <button
            key={color}
            onClick={() => dispatch(changeTheme(color))}
            style={{
              backgroundColor: color,
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border: currentColor === color ? '2px solid white' : 'none',
              cursor: 'pointer',
            }}
            title={`Change to ${color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitch;