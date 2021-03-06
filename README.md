# A Game of Rock Paper Scissors Lizard Spock

[![Build Status](https://travis-ci.org/ivank/rpsls.svg?branch=master)](https://travis-ci.org/ivank/rpsls)

[![Pierre_ciseaux_feuille_lézard_spock_aligned.svg](/rpsls.svg)](https://rpsls.ikerin.com)

> **Play this game at**
> [https://rpsls.ikerin.com](https://rpsls.ikerin.com)

RPSLS is an extension to the original game of rock-paper-scissors. The additional characters were added by [Sam Kass and Karen Bryla](http://www.samkass.com/theories/RPSSL.html) before being adopted, reordered, and [overpopularised by The Big Bang Theory](http://bigbangtheory.wikia.com/wiki/Rock_Paper_Scissors_Lizard_Spock).

## The rules

Scissors cuts paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock. Spock smashes scissors. Scissors decapitates lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. Rock crushes scissors.

## Why?

This is a React & Redux app, built with create-react-app and hosted at firebase. It was made to practice those technologies in a greenfield project and as a task given in a recruitment process.

## Run locally and experiment

You can run your own version of this game (and modify it). To do so you need to install the dependencies and add some firebase credentials.

```bash
yarn install
yarn start
```

For the firebase inforamtion, add a `.env.local` file, [create your firebase project](https://firebase.google.com/docs/web/setup) and fill in the environment variables from `.env` in your `.env.local`.

## Attribution

Image By [DMacks](//commons.wikimedia.org/wiki/User:DMacks) ([talk](//commons.wikimedia.org/wiki/User_talk:DMacks)) - Edited (repositioned elements) version of [File:Pierre ciseaux feuille lézard spock.svg](//commons.wikimedia.org/wiki/File:Pierre_ciseaux_feuille_l%C3%A9zard_spock.svg), which is by [Nojhan](//commons.wikimedia.org/wiki/User:Nojhan) and licensed GFDL/cc-by-sa-3.0,2.5,2.0,1.0, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), [Link](https://commons.wikimedia.org/w/index.php?curid=13241299)
