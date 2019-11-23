# vimcalendar

## What?

This this a advent calendar for [@nwikstrand](https://github.com/nwikstrand).

I guess it started years ago when I suggested on making the switch over to Vim.
Since then there has been a constand flow of links, blog posts, plugins and
all things I came across that could inspire to make the jump.

Finally it happened.

Shortly after there was some jokes around the office, some serious ideas about
having a weekly command, christmas was coming up and the idea of a advent
calendar came up. 

On a lab day at [Hemnet](http://github.com/hemnet) I decided to make it happen.


## How?

The code in this repository will deploy
[simple text files](https://github.com/pean/vimcalendar/tree/master/days) to a
AWS S3 bucket with a hashed filename.

[QR codes](https://github.com/pean/vimcalendar/tree/master/qrcodes) are
generated pointing to the URL at AWS.

These QR codes will be printed and glued to a physical calendar along with the
acutal command.

![vimcalendar](https://raw.githubusercontent.com/pean/vimcalendar/master/adventcalendar.jpeg?token=AAFGONHLPDPAZPGPL673UKK53GENY)
