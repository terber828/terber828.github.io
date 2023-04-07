index.html

line 2 language is in english(for obvious reasons)

line 5/8 for the header/ favicon for this page

line 6 contains link to stylesheet

line 7 contains link to scripts

line 11 contains nav bar(class = navbar)

line 17/18/19 calls function changeColorPalette(1,2 or 3 respectively)() changes colour scheme of website

line 23 main class

line 24-26 hero image

line 27 - 48 articles, text boxes

----------------------------------------------------------------------

Tactics.html

line 2 language is in english(for obvious reasons)

line 5/8 for the header/ favicon for this page

line 6 contains link to stylesheet

line 7 contains link to scripts

line 11 contains nav bar(class = navbar)

line 17/18/19 calls function changeColorPalette(1,2 or 3 respectively)() changes colour scheme of website

line 23 main class

line 24-26 hero class + paragraph text

line 28-94 articles 

line 41,58,75,92 calls function confirm download, confirms if want to download, then downloads file

----------------------------------------------------------------------

profile.html

line 2 language is in english(for obvious reasons)

line 5/8 for the header/ favicon for this page

line 6 contains link to stylesheet

line 7 contains link to scripts

line 11 contains nav bar(class = navbar)

line 17/18/19 calls function changeColorPalette(1,2 or 3 respectively)() changes colour scheme of website

line 23 main class

line 25 picture of myself 

line 33-42 a 2x2 table

line 57 calls function submitalert() sends a response after button is clicked

line 63-67 buttons that call function review()
line 69-71 paragraphs getting updated by function review()
line 73-78 a photo gallery

----------------------------------------------------------------------

styles.css

:root{} 	initialize colour variables to be changed

*{} 		make font arial

body{}	flexbox
table,td,th table 

line 30-104	style website mobile first

line 105-146 tablet styling for devices with min-width 1100px (given many tablets are 720p)
line 147-182 desktop styling for devices with min-width 1900px (given many desktops are 1020p)
line 183-211 form styling

----------------------------------------------------------------------

script.js

<<conditional>>
@function confirmDownload()
returns true if user selected yes - therefore doing the action and incrementing numfilesdownloaded
if numfiles downloaded ==4 ->push notification

<<notification>>
@function submitAlert()
makes a push notification

<<Colour changers>>
@function changeColorPalette1
changes variables of --MainColour, --AccentColor, --HighlighColor, and --TextColor
@function changeColorPalette2
changes variables of --MainColour, --AccentColor, --HighlighColor, and --TextColor
@function changeColorPalette3
changes variables of --MainColour, --AccentColor, --HighlighColor, and --TextColor

<<event handlers>>
@function review(){
if (numReviewButtonPresses==0) changes innerhtml
else calls function troll()
then increments numReviewButtonPresses
<<event handlers>>
@function troll(){
appends "ha" to end of element with id review
updates timesClicked's html with  a message + numReviewButtonPresses


Citations 

Anonymous(sports balls comments - sportsballs icon png) seekpng (2023/02/09) <https://www.seekpng.com/ipng/u2y3a9y3t4u2y3i1_sports-balls-comments-sports-balls-icon-png/>

Anonymous (HD Black Football Referee Whistle Icon Transparent Background) citypng (2023/02/09) <https://www.citypng.com/photo/22720/hd-black-football-referee-whistle-icon-transparent-background>

Kriengkrai Meechai (mail icon vector) vecteezy (2023/02/09) <https://www.vecteezy.com/vector-art/4999412-mail-icon-vector-envelope-sign-email-symbol>

kdwb (house symbol) cleanpng (2023/02/09) <https://www.cleanpng.com/png-scalable-vector-graphics-computer-icons-house-file-7009404/>

Jonathan Peterson (Green Football Field) Pexels (2023/04/06)<https://www.pexels.com/photo/green-football-field-399187/>

