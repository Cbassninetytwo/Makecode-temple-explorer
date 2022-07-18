namespace SpriteKind {
    export const exit = SpriteKind.create()
    export const tiki = SpriteKind.create()
    export const map = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (flags > 0) {
        mySprite3 = sprites.createProjectileFromSprite(img`
            . . . . . . 2 2 2 2 2 2 2 2 2 2 
            . . . . . . 2 2 2 2 2 2 2 2 2 2 
            . . . . . . 2 2 2 2 2 2 2 2 2 2 
            . . . . . . 2 2 2 2 2 2 2 2 2 2 
            . . . . . . 2 2 2 2 2 2 2 2 2 2 
            . . . . . . 2 2 2 2 2 2 2 2 2 2 
            . . . . . . 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . . 2 2 
            `, mySprite, 0, 0)
        mySprite3.setFlag(SpriteFlag.AutoDestroy, false)
        flags += -1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    music.spooky.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(5)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tiki, function (sprite, otherSprite) {
    info.changeScoreBy(20)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        flags += 1
        otherSprite.destroy()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(10)
    tiles.setTileAt(location, assets.tile`myTile6`)
})
let mySprite3: Sprite = null
let mySprite: Sprite = null
let flags = 0
flags = 10
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . e e e e e e e e e e . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . d f d d f d . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . d f f f f d . . . . . . 
    . . . e e e 1 1 e e e . . . . . 
    . . e . e e 1 1 e e . e . . . . 
    . . d . e e 1 1 e e . d . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . f f . . f f . . . . . . 
    `, SpriteKind.Player)
info.setScore(0)
controller.moveSprite(mySprite, 150, 150)
info.setLife(3)
scene.setBackgroundColor(11)
game.setDialogTextColor(12)
game.setDialogFrame(img`
    ...cc......................ccc...
    ..cddc..bbbb...bbbbb.bbbb.ccddc..
    .cbdddcbdddbbbbbdbbbbbdddbcdddbc.
    bddddd111dddb111b111bddd111dddddb
    bbdddd11dbdb111111111bdbd1dddddbb
    cbddd111ddd11111d11111ddd1dddddbc
    .cddddd1111d111d1d111d11111ddddc.
    .cb111d1111111111111111111dd11bc.
    ..b111111111111111111111111111bb.
    ..b111111111111111111111111111bb.
    ..bb1111111111111111111111111bbb.
    .bbdb1d1111111111111111111d1bdbb.
    .bdddd111111111111111111111ddddb.
    .bddbd111111111111111111111dbddb.
    .bdb1d111111111111111111111d1bdb.
    .b111111111111111111111111d111bb.
    .b1111111111111111111111111111bb.
    bb111d111111111111111111111111bb.
    bdb1d111111111111111111111dbddbb.
    bddbd111111111111111111111ddddbb.
    bdddd11111111111111111111d1bdbbb.
    bbdb1d1111111111111111111111bbb..
    .bb11111111111111111111111111bb..
    .b111111111111111111111111111bb..
    .b111111111111111111111dd1111bc..
    cb11dd1111111111d111d111ddddddc..
    cdddd11111d111dd11111ddd11ddddbc.
    bddd111ddd1111111111bdbd11ddddbb.
    bdddd11dbdb1111b111bddd111dddddb.
    ddddd111dddb111dbbbbbdddbcdddbcc.
    cbdddcbdddbbbbbbbb..bbbbbccddcc..
    .cddcbcbbbb...bb.........cbccbc..
    ..cc.............................
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 4 4 4 4 4 5 5 . . . . 
    . . 5 5 4 5 5 5 5 5 4 5 5 . . . 
    . . 5 5 4 5 5 4 5 5 4 5 5 . . . 
    . . 5 5 4 5 5 4 5 5 4 5 5 . . . 
    . . 5 5 4 5 5 4 5 5 4 5 5 . . . 
    . . 5 5 4 5 5 5 5 5 4 5 5 . . . 
    . . . 5 5 4 4 4 4 4 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("Temple Explorer", DialogLayout.Full)
game.showLongText("You are a brave archeologist exploring an ancient temple, get points but watch out for ghosts. The golden tiki is worth the most, but ends the game. Good luck!", DialogLayout.Full)
scene.setBackgroundColor(11)
info.startCountdown(150)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    .......5555555555.......
    ......555555555555......
    ......555555555555......
    ......555f5555f555......
    ......555f5555f555......
    ......555555555555......
    ......555555555555......
    ......5555f55f5555......
    ......5555f55f5555......
    ......555f5555f555......
    ......5555f55f5555......
    ......555555555555......
    ......555555555555......
    ......5555ffff5555......
    ......555555555555......
    ......555555555555......
    ......555555555555......
    ......555555555555......
    ......555555555555......
    ......555555555555......
    ......555555555555......
    ......555555555555......
    ......555555555555......
    ......555555555555......
    ......555555555555......
    ......555555555555......
    ......b5555555555b......
    .......b55555555b.......
    `, SpriteKind.tiki)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile2`)
mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
