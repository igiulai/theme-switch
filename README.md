# Redux Toolkit Theme Switcher

## Цель работы
Освоение навыков управления состоянием приложения с использованием Redux Toolkit на примере реализации переключения тем.

## Описание проекта
Демонстрационное приложение с функционалом счетчика и возможностью переключения цветовой темы. Проект создан на основе шаблона Redux для Vite.

## Функционал
- Счетчик с базовыми операциями (инкремент, декремент)
- Асинхронные операции с счетчиком
- Переключение цветовой темы приложения
- Отображение случайных цитат

## Установка и запуск

1. Создайте проект из шаблона:
```bash
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
cd my-app
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите приложение:
```bash
npm run dev
```

## Структура проекта

### Redux-логика
- `features/counter` - логика работы счетчика
- `features/theme` - логика переключения тем (новый модуль)
- `features/quotes` - логика работы с цитатами
- `app/store.ts` - хранилище состояния

### Компоненты
- `Counter` - компонент счетчика
- `ThemeSwitch` - компонент переключения темы
- `Quotes` - компонент отображения цитат

## Реализация переключения тем

### 1. Создание slice для темы
```typescript
// features/theme/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  color: string;
}

const initialState: ThemeState = {
  color: '#282c34', // цвет по умолчанию
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
```

### 2. Добавление в хранилище
```typescript
// app/store.ts
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quotes: quotesReducer,
    theme: themeReducer,
  },
});
```

### 3. Компонент переключателя темы
```typescript
// features/theme/ThemeSwitch.tsx
import { useDispatch } from 'react-redux';
import { changeTheme } from './themeSlice';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const themes = ['#282c34', '#61dafb', '#ff0000', '#00ff00'];

  return (
    <div>
      {themes.map((color) => (
        <button 
          key={color}
          onClick={() => dispatch(changeTheme(color))}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};
```

### 4. Применение темы в App
```typescript
// App.tsx
const themeColor = useSelector((state: RootState) => state.theme.color);

return (
  <div className="App" style={{ backgroundColor: themeColor }}>
    {/* ... */}
    <ThemeSwitch />
  </div>
);
```

## Тестирование
Запустите тесты для проверки функционала:
```bash
npm test
```
