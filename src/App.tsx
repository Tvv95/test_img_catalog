import React, { useState, useEffect, useRef } from 'react';
import './App.sass';
import { uniqueId, mergeWith, isArray } from 'lodash';

function App() {
  const [tag, setTag] = useState<string>('');
  const [tagSubmitted, setTagSumb] = useState<string>('');
  const [dataImg, setDataImg] = useState<Array<object>>([]);
  const [isBtnActive, setBtnActive] = useState<boolean>(true);
  const [isGrouped, setGrouped] = useState<boolean>(false);
  const [isMsgShowed, setMsgState] = useState<boolean>(false);
  const [isImgNotFound, setImgFoundStatus] = useState<boolean>(false);
  const [error, setError] = useState<number | null>(null);
  const timerId = useRef<any>();

  const getRandomInt = (min: number, max: number): number => {
    const nmb = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(nmb);
  }

  const getRandomWord = (length: number): string => {
    const result = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
      result.push(alphabet.charAt(getRandomInt(1, alphabet.length)));
    }
    return result.join('');
  }

  const startDelayMode = (): void => {
    const randomNmb = getRandomWord(getRandomInt(1, 10));
    setTag(randomNmb);
    setTagSumb(randomNmb);
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (tag === '') {
      setMsgState(true);
    } else if (tag === 'delay') {
      startDelayMode();
      timerId.current = setInterval(startDelayMode, 5000);
    } else {
      setTagSumb(tag);
    }
  }

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTag(evt.target.value.replace(/^,|,{2,}|[^a-zA-Z,]/, ''));
  }

  const handleReset = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setTag('');
    clearTimeout(timerId.current);
    setDataImg([]);
  }

  const fetchData = (): void => {
    setBtnActive(false);
    Promise.all(tagSubmitted.split(',').map(currentTag => fetch(`https://api.giphy.com/v1/gifs/random?api_key=MCinVvF5uqpmYQPkxunJqBPtgaVXfNJ8&tag=${currentTag}`)))
      .then(response => Promise.all(response.map(currResponse => {
        if (currResponse.status !== 200) {
          throw currResponse.status;
        }
        return currResponse.json();
      })))
      .then(json => json.map(currentJson => currentJson.data.image_url))
      .then(urlImg => {
        if (urlImg.includes(undefined)) {
          setImgFoundStatus(true);
        } else {
          setDataImg([...dataImg, { [tagSubmitted]: [...urlImg] }]);
        }
      })
      .catch((err): void => setError(err))
      .finally(() => setBtnActive(true));
  }

  useEffect(() => {
    if (tagSubmitted !== '') {
      fetchData();
      setTagSumb('');
    }
  }, [tagSubmitted]);

  useEffect(() => {
    if (tag !== '') {
      setMsgState(false);
    }
    if (isImgNotFound) {
      setImgFoundStatus(false);
    }
  }, [tag])

  const customizer = (objValue: any, srcValue: any) => {
    if (isArray(objValue)) {
      if (isArray(objValue[0])) {
        return [...objValue, srcValue];
      }
      return [objValue, srcValue];
    }
  }

  function renderImgs() {
    if (isGrouped) {
      const groupedData = {};
      dataImg.map(current => mergeWith(groupedData, current, customizer));
      return Object.entries(groupedData).map((current: any) => {
        return (<div className='card' key={uniqueId()}><h5 className='card-title'>{current[0]}</h5>
          {current[1].map((elem: any) => <div className='card insideCard' key={uniqueId()}><img className='card-img img-fluid' key={uniqueId()} src={elem} alt={current[0]} onClick={() => setTag(current[0])} /></div>)}</div>);
      })
    }
    return dataImg.map((current) => Object.entries(current).map((elem) => {
      return <div className='card mb-2' key={uniqueId()}>
        {elem[1].map((cur: any) => <img className='card-img img-fluid' key={uniqueId()} src={cur} alt={elem[0]} onClick={() => setTag(elem[0])} />)}
      </div>
    }))
  }

  return (
    <div className="App">
      <form className='justify-content-center align-items-center' onSubmit={handleSubmit}>
        <div className='alerts'>
          {isMsgShowed ? <span className='alert alert-danger'>Заполните поле!</span> : null}
          {isImgNotFound ? <span className='alert alert-danger'>По тегу ничего не найдено!</span> : null}
          {error ? <span className='alert alert-danger'>Ошибка {error}!</span> : null}
        </div>
        <input type="text" autoFocus onChange={handleInputChange} value={tag} placeholder='Введите тег' />
        <button className='btn btn-success' type='submit' disabled={!isBtnActive}>{isBtnActive ? 'Загрузить' : 'Загрузка...'}</button>
        <button className='btn btn-danger' type='reset' onClick={handleReset}>Очистить</button>
        <button className='btn btn-info' type='button' onClick={() => setGrouped(!isGrouped)}>{isGrouped ? 'Разгруппировать' : 'Группировать'}</button>
      </form>
      <div className='container'>
        <div className='card-deck'>
          {renderImgs()}
        </div>
      </div>
    </div>
  );
}

export default App;
