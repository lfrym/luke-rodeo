import k from './kaboom.js'
const TILE_SIZE = 16;
const TILE_SCALE = 2;

function GenerateMap(worldHeight, worldWidth) {
    var levelString = []
    for (let y = 0; y < worldHeight / (TILE_SIZE*TILE_SCALE); y++) {
      levelString[y] = ''
      for (let x = 0; x < worldWidth / (TILE_SIZE*TILE_SCALE); x++) {
        var type = Math.random()
        if (type < 0.4){
          levelString[y] +='b'
        }
        else if (type >= 0.4 && type < 0.42) {
          levelString[y] += 'f'
        }
        else {
          levelString[y] += 'a'
        }
      }
    }
    return levelString
  }

function SetupEnvironment(windowHeight, windowWidth) {
    var levelString = GenerateMap(windowHeight, windowWidth)

    k.addLevel(levelString, {
      width: TILE_SIZE*TILE_SCALE,
      height: TILE_SIZE*TILE_SCALE,
      "a": () => [
          k.sprite("grass"),
          k.area(),
          k.solid(),
          k.scale(TILE_SCALE),
          k.layer("background")
      ],
  
      "b": () => [
          k.sprite("grass2"),
          k.area(),
          k.solid(),
          k.scale(TILE_SCALE),
          k.layer("background")
      ],
      "f": () => [
          k.sprite("flowers"),
          k.area(),
          k.solid(),
          k.scale(TILE_SCALE),
          k.layer("background")
      ],
      any() { return undefined }
    })
  }
  
function CharacterMovement() {
    // Create Character
    const cow = k.add([
      k.pos(width()*0.5, height()*0.5),
      k.sprite('cow'),
      k.origin('center')
    ])
  
    cow.play('idle-up')
  
    // Check for input on each frame
    cow.action( () => {
      const left = k.keyIsDown("left")
      const right = k.keyIsDown("right")
      const up = k.keyIsDown("up")
      const down = k.keyIsDown("down")
      const space = k.keyIsDown("space")
  
      const speed = 2
      const curAnim = cow.curAnim()
  
      if (left) {
        if (curAnim != 'walk-left') {
          cow.play('walk-left')
        }
        cow.pos.x -= speed
      }
  
      else if (right) {
        if (curAnim != 'walk-right') {
          cow.play('walk-right')
        }
        cow.pos.x += speed
      }
  
      else if (up) {
        if (curAnim != 'walk-up') {
          cow.play('walk-up')
        }
        cow.pos.y -= speed
      }
  
      else if (down) {
        if (curAnim != 'walk-down') {
          cow.play('walk-down')
        }
        cow.pos.y += speed
      }
  
      else if (space) {
        const direction = curAnim.split('-').pop() ?? 'down'
        if (curAnim != `eat-${direction}`) {
          cow.play(`eat-${direction}`)
        }
      }
  
      else {
        const direction = curAnim.split('-').pop() ?? 'down'
        cow.play(`idle-${direction}`)
      }
    })
  }
  
export function StartRodeo(windowHeight=window.screen.height, windowWidth=window.screen.width) {
    SetupEnvironment(windowHeight, windowWidth)
    CharacterMovement()
}