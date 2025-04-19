controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gamemode == 1) {
        if (pointer.bottom == 106) {
            pointer.bottom = 119
        } else {
            pointer.bottom = 106
        }
    } else if (gamemode == 2) {
        if (pointer.top != 58) {
            pointer.y += -15
        } else {
            pointer.y += 45
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gamemode == 1) {
        if (pointer.left == 0 && pointer.bottom == 106) {
            statusbar.setFlag(SpriteFlag.Invisible, true)
            statusZone.setImage(img`
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
                f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.
                f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f.
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
                `)
            statusZone.bottom = 120
            textSprite = textsprite.create(default_waffle_movelist[0])
            textSprite.left = 8
            textSprite.top = 62
            textSprite = textsprite.create(default_waffle_movelist[1])
            textSprite.left = 8
            textSprite.top = 77
            textSprite = textsprite.create(default_waffle_movelist[2])
            textSprite.left = 8
            textSprite.top = 92
            textSprite = textsprite.create(default_waffle_movelist[3])
            textSprite.left = 8
            textSprite.top = 107
            gamemode = 2
            pointer.top = 58
        }
    } else if (gamemode == 2) {
        gamemode = 3
        for (let value of sprites.allOfKind(SpriteKind.Text)) {
            sprites.destroy(value)
        }
        statusZone.setImage(img`
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111f.......
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f......
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f......
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.....
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.....
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f....
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f....
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f...
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f...
            dfdfdffd222222222222222444444444444444444333333333355555555555555555dddddddddddddddddd1f..
            dfdfdfdf222222222222222444444444444444444333333333355555555555555555dddddddddddddddddd1f..
            dfffdffd222222222222222444444444444444444333333333355555555555555555ddddddddddddddddddd1f.
            dfdfdfdd222222222222222444444444444444444333333333355555555555555555ddddddddddddddddddd1f.
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddffddfffdfffddffdddffddfdfdddddddddddddddddddddddddfffdfffdfffddfdfdddffdddddd1f
            ddddddddddfddfddfdddfddfddfdfddfdfdfddddddddddddddddddddddddddfdddfddfdddfdfdfdfdddddddd1f
            ddddddddddffffddfdddfddffffdfddddffdddddddddddddddddddddddddddfdddfddffddfdfdfddffdddddd1f
            ddddddddddfddfddfdddfddfddfdfddfdfdfddddddddddddddddddddddddddfdddfddfdddfdddfddddfddddd1f
            ddddddddddfddfddfdddfddfddfddffddfdfdddddddddddddddddddddddddfffddfddfffdfdddfddffdddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            ddddddddddfdddddfddffddfffdfffdfffdfffdfffdfdddffddddddddddddfffddfddfdfdddfdddddddddddd1f
            ddddddddddfddfddfdfddfdfdddfdddfdddfdddfdddfddfddddddddddddddfddfdfddfdffddfdddddddddddd1f
            dddddddddddfdfdfddffffdffddffddffddffddffddfdddffddddddddddddfffddfddfdfdfdfdddddddddddd1f
            dddddddddddfdfdfddfddfdfdddfdddfdddfdddfdddfdddddfdddddddddddfddfdfddfdfddffdddddddddddd1f
            ddddddddddddfdfdddfddfdfdddfffdfdddfdddfffdfffdffddddddddddddfddfddfffdfdddfdddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
            `)
        statusZone.bottom = 152
        sprites.destroy(pointer)
        statusbar.setFlag(SpriteFlag.Invisible, false)
        statusbar.bottom = 118
        game.showLongText("Player 1 used " + "(attack)", DialogLayout.Bottom)
        actuallyinitbattle(img`
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
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gamemode == 1) {
        if (pointer.left == 0) {
            pointer.left = 51
        } else {
            pointer.left = 0
        }
    }
})
function initbattle (badguyimg: Image) {
    statusbar = statusbars.create(60, 4, StatusBarKind.Health)
    statusbar.bottom = 118
    statusbar.left = 8
    statusbar.z = 5
    badguystatusbar = statusbars.create(60, 4, StatusBarKind.Health)
    badguystatusbar.top = 2
    badguystatusbar.right = 152
    badguystatusbar.z = 5
    fighter = sprites.create(default_waffle[1], SpriteKind.Player)
    fighter.setPosition(-50, 70)
    badguy = sprites.create(badguyimg, SpriteKind.Player)
    badguy.setPosition(210, 45)
    statusZone = sprites.create(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111f.......
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f......
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f......
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.....
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.....
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f....
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f....
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f...
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f...
        dfdfdffd222222222222222444444444444444444333333333355555555555555555dddddddddddddddddd1f..
        dfdfdfdf222222222222222444444444444444444333333333355555555555555555dddddddddddddddddd1f..
        dfffdffd222222222222222444444444444444444333333333355555555555555555ddddddddddddddddddd1f.
        dfdfdfdd222222222222222444444444444444444333333333355555555555555555ddddddddddddddddddd1f.
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddffddfffdfffddffdddffddfdfdddddddddddddddddddddddddfffdfffdfffddfdfdddffdddddd1f
        ddddddddddfddfddfdddfddfddfdfddfdfdfddddddddddddddddddddddddddfdddfddfdddfdfdfdfdddddddd1f
        ddddddddddffffddfdddfddffffdfddddffdddddddddddddddddddddddddddfdddfddffddfdfdfddffdddddd1f
        ddddddddddfddfddfdddfddfddfdfddfdfdfddddddddddddddddddddddddddfdddfddfdddfdddfddddfddddd1f
        ddddddddddfddfddfdddfddfddfddffddfdfdddddddddddddddddddddddddfffddfddfffdfdddfddffdddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        ddddddddddfdddddfddffddfffdfffdfffdfffdfffdfdddffddddddddddddfffddfddfdfdddfdddddddddddd1f
        ddddddddddfddfddfdfddfdfdddfdddfdddfdddfdddfddfddddddddddddddfddfdfddfdffddfdddddddddddd1f
        dddddddddddfdfdfddffffdffddffddffddffddffddfdddffddddddddddddfffddfddfdfdfdfdddddddddddd1f
        dddddddddddfdfdfddfddfdfdddfdddfdddfdddfdddfdddddfdddddddddddfddfdfddfdfddffdddddddddddd1f
        ddddddddddddfdfdddfddfdfdddfffdfdddfdddfffdfffdffddddddddddddfddfddfffdfdddfdddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        `, SpriteKind.Player)
    statusZone.bottom = 152
    statusZone.left = 0
    fighter.vx = 100
    badguy.vx = -100
    badguystatuszone = sprites.create(img`
        f1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        f1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        .f1ddddddddddddddddddd555555555555555553333333333444444444444444444222222222222222dfdfdffd
        .f1ddddddddddddddddddd555555555555555553333333333444444444444444444222222222222222dfdfdfdf
        ..f1dddddddddddddddddd555555555555555553333333333444444444444444444222222222222222dfffdffd
        ..f1dddddddddddddddddd555555555555555553333333333444444444444444444222222222222222dfdfdfdd
        ...f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ...f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ....f1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ....f1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        .....f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        .....f1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ......f1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ......f1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        .......f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
        .......fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        `, SpriteKind.Player)
    badguystatuszone.top = 0
    badguystatuszone.right = 160
    pause(1000)
    fighter.vx = 0
    badguy.vx = 0
    actuallyinitbattle(badguyimg)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gamemode == 1) {
        if (pointer.left == 0) {
            pointer.left = 51
        } else {
            pointer.left = 0
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gamemode == 1) {
        if (pointer.bottom == 106) {
            pointer.bottom = 119
        } else {
            pointer.bottom = 106
        }
    } else if (gamemode == 2) {
        if (pointer.top != 103) {
            pointer.y += 15
        } else {
            pointer.y += -45
        }
    }
})
function actuallyinitbattle (img2: Image) {
    statusbar.bottom = 118
    pause(200)
    pauseUntil(() => controller.A.isPressed())
    gamemode = 1
    statusZone.setImage(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.......
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111f.......
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f......
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f......
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.....
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f.....
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f....
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f....
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f...
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f...
        dfdfdffd222222222222222444444444444444444333333333355555555555555555dddddddddddddddddd1f..
        dfdfdfdf222222222222222444444444444444444333333333355555555555555555dddddddddddddddddd1f..
        dfffdffd222222222222222444444444444444444333333333355555555555555555ddddddddddddddddddd1f.
        dfdfdfdd222222222222222444444444444444444333333333355555555555555555ddddddddddddddddddd1f.
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddffddfffdfffddffdddffddfdfdddddddddddddddddddddddddfffdfffdfffddfdfdddffdddddd1f
        ddddddddddfddfddfdddfddfddfdfddfdfdfddddddddddddddddddddddddddfdddfddfdddfdfdfdfdddddddd1f
        ddddddddddffffddfdddfddffffdfddddffdddddddddddddddddddddddddddfdddfddffddfdfdfddffdddddd1f
        ddddddddddfddfddfdddfddfddfdfddfdfdfddddddddddddddddddddddddddfdddfddfdddfdddfddddfddddd1f
        ddddddddddfddfddfdddfddfddfddffddfdfdddddddddddddddddddddddddfffddfddfffdfdddfddffdddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        ddddddddddfdddddfddffddfffdfffdfffdfffdfffdfdddffddddddddddddfffddfddfdfdddfdddddddddddd1f
        ddddddddddfddfddfdfddfdfdddfdddfdddfdddfdddfddfddddddddddddddfddfdfddfdffddfdddddddddddd1f
        dddddddddddfdfdfddffffdffddffddffddffddffddfdddffddddddddddddfffddfddfdfdfdfdddddddddddd1f
        dddddddddddfdfdfddfddfdfdddfdddfdddfdddfdddfdddddfdddddddddddfddfdfddfdfddffdddddddddddd1f
        ddddddddddddfdfdddfddfdfdddfffdfdddfdddfffdfffdffddddddddddddfddfddfffdfdddfdddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1f
        `)
    statusZone.bottom = 152
    statusZone.y += -32
    statusbar.y += -32
    pointer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . f f . . . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . . . f f . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    pointer.left = 0
    pointer.bottom = 106
}
let badguystatuszone: Sprite = null
let badguy: Sprite = null
let fighter: Sprite = null
let badguystatusbar: StatusBarSprite = null
let textSprite: TextSprite = null
let statusZone: Sprite = null
let statusbar: StatusBarSprite = null
let pointer: Sprite = null
let gamemode = 0
let default_waffle_movelist: string[] = []
let default_waffle: Image[] = []
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
game.setDialogFrame(img`
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
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 1 1 1 1 2 2 . . . . 
    . . . . 2 2 1 2 2 1 2 2 . . . . 
    . . . . 2 2 1 1 1 1 2 2 . . . . 
    . . . . 2 2 1 2 2 1 2 2 . . . . 
    . . . . . 2 1 2 2 1 2 . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("", DialogLayout.Bottom)
default_waffle = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . b 4 4 b . . . . . . 
    . . . . 4 3 b 4 3 b 4 3 . . . . 
    . . . b b b b b b b b b b . . . 
    . . 4 b 4 1 1 4 4 1 1 4 b 4 . . 
    . . 3 b 4 1 f 4 3 f 1 3 b 3 . . 
    . b b b b 1 f b b f 1 b b b b . 
    . 4 4 b 4 4 b 4 4 b 4 4 b 4 4 . 
    . 4 3 b 4 3 b 4 3 b 4 3 b 4 3 . 
    . b b b b b b b b b b b b b b . 
    . . 4 b 4 4 b 4 4 b 4 4 b 4 . . 
    . . 3 b 4 3 b 4 3 b 4 3 b 3 . . 
    . . . b b b b b b b b b b . . . 
    . . . . 4 3 b 4 4 b 4 3 . . . . 
    . . . . . . b 4 3 b . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    ..........bb444bb...............
    ..........bb444bb...............
    ..........bb444bb...............
    ......4433bb433bb4433...........
    ......4433bb433bb4433...........
    .....bbbbbbbbbbbbbbbbb..........
    .....bbbbbbbbbbbbbbbbb..........
    ...44b4444bb444bb4444b44........
    ...44b4444bb444bb4444b44........
    ...33b4433bb433bb4433b33........
    ...33b4433bb433bb4433b33........
    ...33b4433bb433bb4433b33........
    .bbbbbbbbbbbbbbbbbbbbbbbb.......
    .bbbbbbbbbbbbbbbbbbbbbbbb.......
    .4444b4444bb444bb4444b444.......
    .4444b4444bb444bb4444b444.......
    .4433b4433bb433bb4433b443.......
    .4433b4433bb433bb4433b443.......
    .bbbbbbbbbbbbbbbbbbbbbbbb.......
    .bbbbbbbbbbbbbbbbbbbbbbbb.......
    ...44b4444bb444bb4444b44........
    ...44b4444bb444bb4444b44........
    ...44b4444bb444bb4444b44........
    ...33b4433bb433bb4433b33........
    ...33b4433bb433bb4433b33........
    .....bbbbbbbbbbbbbbbbb..........
    .....bbbbbbbbbbbbbbbbb..........
    ......4433bb444bb4433...........
    ......4433bb444bb4433...........
    ..........bb433bb...............
    ..........bb433bb...............
    ................................
    `, img`
    ..........bb444bb...............
    ..........bb444bb...............
    ..........bb444bb...............
    ......4433bb433bb4433...........
    ......4433bb433bb4433...........
    .....bbbbbbbbbbbbbbbbb..........
    .....bbbbbbbbbbbbbbbbb..........
    ...44b444111444111444b44........
    ...44b441111444111144b44........
    ...33b44111f433f11133b33........
    ...33b4411ff433ff1133b33........
    ...33b4411ff433ff1133b33........
    .bbbbbbb11ffbbbff11bbbbbb.......
    .bbbbbbb11ffbbbff11bbbbbb.......
    .4444b4444bb444bb4444b444.......
    .4444b4444bb444bb4444b444.......
    .4433b4433bb433bb4433b443.......
    .4433b4433bb433bb4433b443.......
    .bbbbbbbbbbbbbbbbbbbbbbbb.......
    .bbbbbbbbbbbbbbbbbbbbbbbb.......
    ...44b4444bb444bb4444b44........
    ...44b4444bb444bb4444b44........
    ...44b4444bb444bb4444b44........
    ...33b4433bb433bb4433b33........
    ...33b4433bb433bb4433b33........
    .....bbbbbbbbbbbbbbbbb..........
    .....bbbbbbbbbbbbbbbbb..........
    ......4433bb444bb4433...........
    ......4433bb444bb4433...........
    ..........bb433bb...............
    ..........bb433bb...............
    ................................
    `]
default_waffle_movelist = [
"Syrup Blast",
"Quick Attack",
"Butter Bomb",
"Heal Up",
"3",
"2",
"5",
"+5"
]
initbattle(default_waffle[2])
