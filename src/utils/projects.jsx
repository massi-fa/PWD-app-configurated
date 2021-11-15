import js from '../res/js.svg';
import c from '../res/c.svg';
import cpiu from '../res/cpiu.svg';
import unity from '../res/unity.svg';
import react from '../res/react.svg';
import node from '../res/node.svg';
import mongodb from '../res/mongodb.svg';
import python from '../res/python.svg';

const projects = [
  {
    id: '1',
    name: 'Disparity in recommendation systems',
    description: 'Analysis of gender disparities in referral systems',
    languages: [
      {
        id: '1',
        image: python,
      },
    ],
    link: 'https://github.com/massi-fa/RecSys2019_DeepLearning_Evaluation/blob/master/README.md',
  },
  {
    id: '2',
    name: 'Serra APP',
    description: 'Prototype of an administration panel for an automated greenhouse',
    languages: [
      {
        id: '1',
        image: js,
      },
    ],
    link: 'https://github.com/massi-fa/serrapp',
  },
  {
    id: '3',
    name: 'Menu APP',
    description: 'Prototype of a menu app using MERN technology',
    languages: [
      {
        id: '1',
        image: js,
      },
      {
        id: '2',
        image: node,
      },
      {
        id: '3',
        image: react,
      },
      {
        id: '4',
        image: mongodb,
      },
    ],
    link: 'https://github.com/massi-fa/MenuApp',
  },
  {
    id: '4',
    name: 'Stillosu APP',
    description: 'Prototype of an app to manage your closet',
    languages: [
      {
        id: '1',
        image: js,
      },
      {
        id: '2',
        image: react,
      },
    ],
    link: 'https://github.com/massi-fa/Valium-Project',
  },
  {
    id: '5',
    name: 'VGD Project',
    description: 'Unity 3d game with 3 levels',
    languages: [
      {
        id: '1',
        image: unity,
      },
      {
        id: '2',
        image: cpiu,
      },
    ],
    link: 'https://github.com/massi-fa/VGD',
  },
  {
    id: '6',
    name: 'PacMan',
    description: 'Pacman game made using the Ncurses library and thread concurrency on linux',
    languages: [
      {
        id: '1',
        image: c,
      },
    ],
    link: 'https://github.com/massi-fa/Pacman--C-Ncurses-Linux-',
  },
];

export default projects;
