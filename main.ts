game.setDialogFrame(img`
. . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`)
scene.setBackgroundColor(3)
let a = game.askForNumber("")
if (a <= 5) {
    game.splash("Hello Yeti App", convertToText(a))
} else {
    game.splash("Hello", "Happy Console")
}
