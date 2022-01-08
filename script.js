import k from './kaboom.js'
import * as funcs from './functions.js'

const TILE_SIZE = 16;

k.loadSpriteAtlas("assets/sprites/cow_full.png", {
  'cow': {
    x:0,
    y:0,
    width:512,
    height:1024,
    sliceX:4,
    sliceY:8,
    anims: {
      'walk-up': {from: 0, to: 3, loop: true, speed:15},
      'walk-left': {from: 4, to: 7, loop: true, speed:15},
      'walk-down': {from: 8, to: 11, loop: true, speed:15},
      'walk-right': {from: 12, to: 15, loop: true, speed:15},
      'eat-up': {from: 16, to: 19, loop: true, pingpong: true, speed:5},
      'eat-left': {from: 20, to: 23, loop: true, pingpong: true, speed:5},
      'eat-down': {from: 24, to: 27, loop: true, pingpong: true, speed:5},
      'eat-right': {from: 28, to: 31, loop: true, pingpong: true, speed:5},
      'idle-up': {from: 0, to: 0, loop: false, speed: 1},
      'idle-left': {from: 4, to: 4, loop: false, speed: 1},
      'idle-down': {from: 8, to: 8, loop: false, speed: 1},
      'idle-right': {from: 12, to: 12, loop: false, speed: 1},
    }
  }
})

k.loadSpriteAtlas("assets/tiles/textures.png", {
  grass: {
    x:0,
    y:0,
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  grass2: {
    x: 8*TILE_SIZE,
    y: 2*TILE_SIZE,
    width: TILE_SIZE,
    height: TILE_SIZE,
  },
  flowers: {
    x: 5*TILE_SIZE,
    y: 10*TILE_SIZE,
    width: TILE_SIZE,
    height: TILE_SIZE,
  }
})

k.layers([
    "background",
    "game"
], "game");

k.scene('rodeo', funcs.StartRodeo)
k.go('rodeo')
