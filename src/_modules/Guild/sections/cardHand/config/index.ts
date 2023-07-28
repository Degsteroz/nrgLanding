import { IPlayer } from '../interfaces';
import { PORTRAIT } from '@/config/config';

type IPlayers = IPlayer[]

const players: IPlayers = [
  {
    id: 'id0',
    photo: PORTRAIT + 'Roksana_ylc7b3',
    name: 'Оксана Фоменко',
    description: 'Моя прекрасная несравненная <a href="https://twitter.com/Zloi_Aiko" target="_blank">жена</a>, ' +
      'чья красота затмевает звёзды и луну.'
  },
  {
    id: 'id1',
    photo: PORTRAIT + 'Roksana_ylc7b3',
    name: 'Оксана Фоменко',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac.'
  },
  {
    id: 'id2',
    photo: PORTRAIT + 'Roksana_ylc7b3',
    name: 'Оксана Фоменко',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac.'
  },
  {
    id: 'id3',
    photo: PORTRAIT + 'Roksana_ylc7b3',
    name: 'Оксана Фоменко',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac.'
  },
  {
    id: 'id4',
    photo: PORTRAIT + 'Roksana_ylc7b3',
    name: 'Оксана Фоменко',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac.'
  },
];

export default players;
