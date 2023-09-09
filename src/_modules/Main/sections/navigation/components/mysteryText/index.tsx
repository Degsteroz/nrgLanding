import React, { useEffect, useState, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { useStore } from '@/store';

import config from '../../config';

import styles from './styles.module.sass';

const MysteryText = observer(() => {
  const [words, setWords] = useState<string[]>([]);
  const secretWords = useMemo(
    () => ['howard', 'phillips', 'lovecraft'],
    [],
  );
  const {
    mainPageStore: {
      currentState,
      mysteryReached,
      setMysterySolved,
      setNewState
    },
  } = useStore();

  useEffect(() => {
    if (!words.length || mysteryReached) return;
    const isReached = secretWords
      .every(searchWord => words.includes(searchWord));

    if (!isReached && words.length === 3) {
      setTimeout(() =>setWords(
        prev => prev.filter(
          item => secretWords.includes(item),
        ),
      ), 500);
    }
    if (!isReached) return;

    setMysterySolved();
  }, [secretWords, setMysterySolved, words, mysteryReached]);

  useEffect(() => {
    if (mysteryReached) {
      setWords(secretWords);
    }
  }, [mysteryReached, secretWords]);

  const unfocused = currentState === 'MAIN';
  const handleClickOnWord = (word: string, isActive: boolean) => {
    if (unfocused) return setNewState('MAP');

    setWords(prevState => (
      isActive
        ? prevState.filter(prevWord => prevWord !== word)
        : [...prevState, word]
    ));
  };

  const wordsArray = config.secretText.split(' ');

  const getWordsComponents = () => {
    return wordsArray.map((word, index) => {
      const key = word + '__' + index;
      const isActive = words.indexOf(word) !== -1;
      const isInList = mysteryReached && secretWords.includes(word);

      const wordClassName = `${styles.wordsWrapper__word} ${(isActive || isInList) ? styles['--active'] : ''} ${mysteryReached ? styles['--hidden'] : ''}`;

      const handleClick = () => {
        if (unfocused || mysteryReached) return;
        handleClickOnWord(word, isActive);
      };

      return (
        <div
          className={wordClassName}
          key={key}
          onClick={handleClick}
        >
          {word}
        </div>
      );
    });
  };

  const componentClassName = `${styles.mysteryComponent} ${unfocused ? styles['--hidden'] : ''}`;
  const imageClassName = `${styles.mysteryImage} ${mysteryReached ? styles['--visible'] : ''}`;

  return (
    <div className={componentClassName}>
      <div className={styles.wordsWrapper}>
        {getWordsComponents()}
      </div>

      <Image
        src={config.logoImage}
        alt="image"
        className={imageClassName}
        width={500}
        height={500}
      />
    </div>
  );
});

export default MysteryText;
