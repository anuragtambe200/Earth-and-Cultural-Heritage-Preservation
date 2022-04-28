function Function1 () {
    scene.setBackgroundColor(0)
    tiles.setCurrentTilemap(tilemap`level7`)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    Tree = sprites.create(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `, SpriteKind.Player)
    Player_2 = sprites.create(assets.image`myImage`, SpriteKind.Player)
    Tree.setPosition(32, 31)
    Player_2.setPosition(39, 38)
    mySprite.setPosition(102, 48)
    mySprite.setImage(img`
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 4 8 4 8 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 8 8 8 4 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 . 4 . 4 . . . . . . 
        . . . . 4 . . 4 . . 4 . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . 4 . . . . . 4 . . . . . 
        `)
    animation.runImageAnimation(
    Player_2,
    [img`
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 4 8 4 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 4 4 4 8 8 . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . 2 . . . 8 . . . . . . . . 
        . . 2 2 . . 8 8 8 . . . . . . . 
        . 2 2 . 2 8 . 8 . 8 . . . . . . 
        . . . . . 2 . 8 . . 8 . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . 8 . . . 8 . . . . . . 
        . . . . 8 . . . . . 8 . . . . . 
        `,img`
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 4 8 4 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 4 4 4 8 8 . . . . . 
        . 2 2 2 . 8 8 8 8 8 . . . . . . 
        . 2 2 2 . . 8 8 8 . . . . . . . 
        . 2 2 2 . . . 8 . . . . . . . . 
        . . . 2 8 8 8 8 8 . . . . . . . 
        . . . 2 . . . 8 . 8 . . . . . . 
        . . . . . . . 8 . . 8 . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 . 8 . . . . . . . 
        . . . . . 8 . . . 8 . . . . . . 
        . . . . 8 . . . . . 8 . . . . . 
        `],
    500,
    true
    )
    mySprite.sayText("Please don't cut this tree.", 2000, false)
    pause(5000)
    animation.runImageAnimation(
    Tree,
    [img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `,img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `],
    200,
    false
    )
    animation.stopAnimation(animation.AnimationTypes.All, Player_2)
    mySprite.sayText("We will suffocate!", 2000, false)
    pause(1700)
    Player_2.setImage(img`
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
        `)
    mySprite.setImage(img`
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
        `)
    pause(300)
    game.splash("We should not cut trees because they provide oxygen. No trees means no oxygen.")
}
function Function3 () {
    tiles.setCurrentTilemap(tilemap`level6`)
    mySprite.setPosition(55, 70)
    mySprite.setImage(img`
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 4 8 4 8 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 8 8 8 4 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 . 4 . . . . . 
        . . . . . . . 4 . 4 . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 . 4 . . . . . . . . 
        . . . . 4 . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . 4 . . . . . 4 . . . . . 
        `)
    Player_2.setPosition(66, 70)
    mySprite.sayText("See how much smoke this factory is making!", 3000, false)
    pause(3000)
    Player_2.sayText("Yes, it's making a lot of smoke!", 3000, false)
    mySprite.setImage(img`
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 4 8 4 8 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 8 8 8 4 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 . 4 . 4 . . . . . . 
        . . . . 4 . . 4 . . 4 . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . 4 . . . . . 4 . . . . . 
        `)
    pause(3000)
    mySprite.sayText("This causes air pollution.", 2000, false)
    pause(2000)
    Player_2.sayText("And it also damages ozone layer, which increases global warming.", 3000, false)
    pause(3000)
    mySprite.sayText("But what can we do to reduce the smoke from this factory?", 3000, false)
    pause(3000)
    Player_2.sayText("We can add an air filter on the chimney which will filter the smoke.", 3000, false)
    pause(3000)
    mySprite.sayText("But this will not stop vehicles polluting the surroundings.", 3000, false)
    pause(3000)
    Player_2.sayText("We can use electric vehicles, which do not pollute the environment.", 3000, false)
    pause(3000)
    mySprite.sayText("And also they do not waste fuel!", 3000, false)
    pause(3000)
    game.splash("We should not pollute our surroundings. We should try our best to use electric appliances which do not pollute the environment.")
}
function Function2 () {
    tiles.setCurrentTilemap(tilemap`level8`)
    Tree.setImage(img`
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
        `)
    mySprite.setImage(img`
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 4 8 4 8 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 8 8 8 4 4 . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 . 4 . 4 . . . . . . 
        . . . . 4 . . 4 . . 4 . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . 4 . . . . . 4 . . . . . 
        `)
    Player_2.setImage(assets.image`myImage`)
    Player_2.setPosition(96, 190)
    mySprite.setPosition(110, 190)
    mySprite.sayText("What are you doing?", 1500, false)
    pause(2000)
    tiles.setCurrentTilemap(tilemap`level9`)
    pause(1000)
    tiles.setCurrentTilemap(tilemap`level5`)
    pause(500)
    mySprite.sayText("The entire mosque got destroyed!", 1500, false)
    pause(1700)
    game.splash("We should not destroy cultural buildings, because destroying them also destroys cultural heritage.")
}
let Player_2: Sprite = null
let Tree: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ........................
    ..........bbbb..........
    ........bbddddbb........
    .......bddbbbbddb.......
    ......bdbbddddbbdb......
    .....bdbbdbbbbdbbdb.....
    .....bdbdbddddbdbdb.....
    .....cdbbdbbbbdbbdc.....
    .....cbdbbddddbbdbc.....
    .....efbddbbbbddbce.....
    .....eeffbddddbccee.....
    .....eeeeffcccceee......
    .....ceeeeeeeeeeee......
    .....ceeeeeeeeeeee......
    .....feeeeeeeeeeee......
    .....cceeeeeeeeeee......
    ......feeeeeeeeeee......
    .....6fceeeeeeeeee6.....
    ....6776eeeeeeeee676....
    ...6777666eeee6666776...
    ..67768e67766777667776..
    ...668ee7768867788666...
    ......ee77eeee77ecee....
    ......ee6eeeeee6eef.....
    `, SpriteKind.Player)
Function1()
Function2()
Function3()
game.splash("Thank You!")
