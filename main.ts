namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function initTimeView () {
    scene.createRenderable(0, function (target: Image, camera: scene.Camera) {
    const s = "Time " + formatTime(lapTime)+"  Best "+formatTime(bestTime)
    const font = image.font8
    const width = font.charWidth * s.length;
    const left = (screen.width >> 1) - (width >> 1) + 1;
    screen.fillRect(left, 0, width, font.charHeight, 0);
    screen.print(s, left, 0, 3, font);
})
function formatTime(t:number) {
    if (t==0) {
        return "--.--"
    }
    const seconds = Math.idiv(t, 1000)
    const remainder = Math.idiv(t % 1000, 10)
    return formatDecimal(seconds) + "." + formatDecimal(remainder)
}
function formatDecimal(val: number) {
    val |= 0;
    if (val < 10) {
        return "0" + val;
    }
    return val.toString();
}
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    checkPoint = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(392, music.beat(BeatFraction.Eighth))
    direction += 1
    direction = direction % 4
    setSpriteDirection()
})
function setSpriteDirection () {
    mySprite.setImage(cars[direction])
    mySprite.ax = accel * dx[direction]
    mySprite.ay = accel * dy[direction]
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorMixed, function (sprite, location) {
    if (checkPoint == 1) {
        checkPoint = 0
        startTime = game.runtime()
        if (bestTime == 0 || lapTime < bestTime) {
            bestTime = lapTime
            music.powerUp.play()
        }
    }
})
let startTime = 0
let checkPoint = 0
let cars: Image[] = []
let dy: number[] = []
let dx: number[] = []
let direction = 0
let accel = 0
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(sprites.vehicle.carRedLeft, SpriteKind.Player)
mySprite.setPosition(192, 48)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`18001800020202020202020202020202020202020202020202020202020b0b0b0b0b0b0b0b0b0b0c070707070707070707070702020b0b0b0b0b0b0b0b0b0b0c070707070707070707070702020b0b0b0b0b0b0b0b0b0b0c070707070707070707070702020b0b0b0b0b0b0b0b0b0b0c070707070707070707070702020b0b0b0b0b0b0b0b0b0b0c070707070707070707070702020b0b0b0b0b020202020202020202020202070707070702020b0b0b0b0b020303030303030303030302070707070702020b0b0b0b0b020303030303030303030302070707070702020b0b0b0b0b020303030303030303030302070707070702020b0b0b0b0b020303030303030303030302070707070702020b0b0b0b0b0203030303030303030303020606060606020206060606060203030303030303030303020b0b0b0b0b020207070707070203030303030303030303020b0b0b0b0b020207070707070203030303030303030303020b0b0b0b0b020207070707070203030303030303030303020b0b0b0b0b020207070707070203030303030303030303020b0b0b0b0b020207070707070202020202020202020202020b0b0b0b0b0202070707070707070707070707050b0b0b0b0b0b0b0b0b0202070707070707070707070707050b0b0b0b0b0b0b0b0b0202070707070707070707070707050b0b0b0b0b0b0b0b0b0202070707070707070707070707050b0b0b0b0b0b0b0b0b0202070707070707070707070707050b0b0b0b0b0b0b0b0b02020202020202020202020202020202020202020202020202`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass3,sprites.dungeon.floorLight0,sprites.dungeon.floorDark0,sprites.dungeon.floorDark2,sprites.builtin.crowd0,sprites.builtin.crowd5,sprites.builtin.crowd2,sprites.dungeon.floorLight2,sprites.dungeon.floorMixed,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight5,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight4,sprites.dungeon.floorDark5,sprites.builtin.crowd1,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd6,sprites.builtin.crowd7],
            TileScale.Sixteen
        ))
accel = 220
direction = 0
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
cars = [sprites.vehicle.carRedLeft, sprites.vehicle.carRedFront, sprites.vehicle.carRedRight, sprites.vehicle.carRedBack]
setSpriteDirection()
let bestTime = 0
let lapTime = 0
initTimeView()
checkPoint = 0
game.showLongText("Turn your car by \"A\" button.", DialogLayout.Bottom)
startTime = game.runtime()
game.onUpdate(function () {
    mySprite.vx = mySprite.vx * 0.97
    mySprite.vy = mySprite.vy * 0.97
    lapTime = game.runtime() - startTime
})
