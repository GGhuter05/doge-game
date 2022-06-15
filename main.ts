input.onButtonPressed(Button.A, function () {
    dude.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
    basic.pause(100)
    basic.showNumber(game.score())
    basic.pause(100)
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    dude.change(LedSpriteProperty.Y, -1)
})
let dude: game.LedSprite = null
dude = game.createSprite(2, 2)
let badguy = game.createSprite(0, 1)
game.setScore(10)
basic.forever(function () {
    badguy.change(LedSpriteProperty.X, 1)
    basic.pause(500)
})
basic.forever(function () {
    if (badguy.get(LedSpriteProperty.X) == dude.get(LedSpriteProperty.X) && badguy.get(LedSpriteProperty.Y) == dude.get(LedSpriteProperty.Y)) {
        game.addScore(-1)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (game.score() == 0) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (badguy.get(LedSpriteProperty.X) == 4) {
        badguy.set(LedSpriteProperty.Y, randint(0, 4))
        badguy.set(LedSpriteProperty.X, 0)
    }
})
