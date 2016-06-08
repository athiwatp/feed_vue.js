var speed = .7
var jump_speed = speed / 2
var head_speed = speed / 2

e = 'Circ.easeInOut'

TweenMax.to('#runner', jump_speed, {
  ease: Sine.easeIn,
  y: '5px',
  rotation: 3,
  transformOrigin: '161px 60px',
  yoyo: true,
  repeat: -1
})

TweenMax.to('#head', head_speed, {
  rotation: -3,
  transformOrigin: '15px 78px',
  yoyo: true,
  repeat: -1
})

TweenMax.to('#arm-right', speed,
  {
    ease: e,
    rotation: -120,
    transformOrigin: '130px 22px',
    yoyo: true,
    repeat: -1
  })

TweenMax.to('#arm-right-lower', speed,
  {
    ease: e,
    rotation: -55,
    transformOrigin: '36px 11px',
    yoyo: true,
    repeat: -1
  })

TweenMax.to('#arm-left', speed,
  {
    ease: e,
    rotation: 140,
    transformOrigin: '22px 57px',
    yoyo: true,
    repeat: -1
  })

TweenMax.to('#arm-left-lower', speed,
  {
    ease: e,
    rotation: -5,
    transformOrigin: '17px 95px',
    yoyo: true,
    repeat: -1
  })

TweenMax.to('#leg-right', speed,
  {
    ease: e,
    rotation: 80,
    transformOrigin: '47px 27px',
    yoyo: true,
    repeat: -1
  })

TweenMax.to('#leg-right-lower', speed,
  {
    ease: e,
    rotation: 80,
    transformOrigin: '20px 22px',
    yoyo: true,
    repeat: -1
  })

TweenMax.to('#leg-left', speed,
  {
    ease: e,
    rotation: -80,
    transformOrigin: '185px 31px',
    yoyo: true,
    repeat: -1
  })

TweenMax.to('#leg-left-lower', speed,
  {
    ease: e,
    rotation: -80,
    transformOrigin: '160px 48px',
    yoyo: true,
    repeat: -1
  })

TweenMax.to('#mp3', head_speed, {
  ease: Power2.easeOut,
  y: '3px',
  rotation: 3,
  transformOrigin: '161px 60px',
  yoyo: true,
  repeat: -1
})
