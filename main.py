

mySprite = sprites.create(assets.image("""
    myImage
"""), SpriteKind.player)
controller.move_sprite(mySprite)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
scene.camera_follow_sprite(mySprite)
tiles.place_on_random_tile(mySprite, sprites.castle.tile_path5)
game.splash("Plant A Tree")