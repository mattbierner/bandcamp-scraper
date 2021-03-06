var bandcamp = require('../lib/index');

var params = {
  tag: 'nuwrld',
  page: 1
};

bandcamp.tag(params, function(error, tagResults) {
  if (error) {
    console.log(error);
  } else {
    console.log(tagResults);
  }
});

/*
[ { name: 'RPGウィンドウズ ビスタ',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://bedlamtapes.bandcamp.com/album/rpg' },
  { name: 'Celebrating Digital Artifacts',
    artist: 'Dante Mars Ajeto！',
    url: 'https://bedlamtapes.bandcamp.com/album/celebrating-digital-artifacts' },
  { name: 'Heavy Black Heart',
    artist: 'death\'s dynamic shroud',
    url: 'https://orangemilkrecords.bandcamp.com/album/heavy-black-heart' },
  { name: 'OPERATION ETERNAL ECSTACY',
    artist: 'General Translator',
    url: 'https://bedlamtapes.bandcamp.com/album/operation-eternal-ecstacy' },
  { name: 'SEAWRLDハートブレーク',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/seawrld' },
  { name: '世界大戦OLYMPICS',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://orangemilkrecords.bandcamp.com/album/olympics' },
  { name: '#NUWRLDの気持ち',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/nuwrld' },
  { name: 'I\'ll Try Living Like This',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/ill-try-living-like-this' },
  { name: 'memory of a memory',
    artist: '[ D A T A B U R S T ]',
    url: 'https://boguscollective.bandcamp.com/album/memory-of-a-memory' },
  { name: 'Stepdad',
    artist: 'Zima Clearmalt',
    url: 'https://boguscollective.bandcamp.com/album/stepdad' },
  { name: 'S k y  S p a',
    artist: '[ D A T A B U R S T ]',
    url: 'https://boguscollective.bandcamp.com/album/s-k-y-s-p-a' },
  { name: 'J u n g l e  P l a n e t',
    artist: '[ D A T A B U R S T ]',
    url: 'https://boguscollective.bandcamp.com/album/j-u-n-g-l-e-p-l-a-n-e-t' },
  { name: 'H a r d w a r e E x c h a n g e',
    artist: '[ D A T A B U R S T ]',
    url: 'https://boguscollective.bandcamp.com/album/h-a-r-d-w-a-r-e-e-x-c-h-a-n-g-e' },
  { name: 'Dusk Falls On The Amazon',
    artist: '[ D A T A B U R S T ]',
    url: 'https://boguscollective.bandcamp.com/album/dusk-falls-on-the-amazon' },
  { name: 'CLASSROOM SEXXTAPE',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/classroom-sexxtape' },
  { name: 'VIRTUAL UTOPIA EXPERIENCE',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/virtual-utopia-experience' },
  { name: 'DERELICTメガタワー',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/derelict-3' },
  { name: '世界大戦OLYMPICS',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/olympics' },
  { name: 'runescape.wav符文風景骨架',
    artist: 'runescape斯凱利',
    url: 'https://runescapeskelly.bandcamp.com/album/runescape-wav' },
  { name: 'De₳d Mi$$TҰ',
    artist: 'ClearVisionDream Productions',
    url: 'https://clearvisiondreamproductions.bandcamp.com/album/de-d-mi-t' },
  { name: 'WELCOME HOME',
    artist: 'Golden Living Room',
    url: 'https://goldenlivingroom.bandcamp.com/album/welcome-home' },
  { name: 'Post-Internet',
    artist: 'Golden Living Room',
    url: 'https://goldenlivingroom.bandcamp.com/album/post-internet' },
  { name: '失われた時REGRET',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://midnightmoontapes.bandcamp.com/album/regret' },
  { name: 'NEW GAIA',
    artist: 'NEW GAIA',
    url: 'https://ailanthusrecordings.bandcamp.com/album/new-gaia' },
  { name: 'RPGウィンドウズ ビスタ',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/rpg' },
  { name: 'ティーンファンタジー：MYSTIC QUEST',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/mystic-quest' },
  { name: 'HARDWRLD',
    artist: 'CONSUMERプロダクト',
    url: 'https://blcr.bandcamp.com/album/hardwrld' },
  { name: '失われた時REGRET',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/regret' },
  { name: '신세기 EVANGELIS',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/evangelis' },
  { name: 'NEW NOSTALGIA',
    artist: 'Golden Living Room',
    url: 'https://goldenlivingroom.bandcamp.com/album/new-nostalgia' },
  { name: 'D.E.S.I.R.E.私が若い頃',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/d-e-s-i-r-e' },
  { name: 'シェンムーONLINE',
    artist: 'death\'s dynamic shroud.wmv',
    url: 'https://deathsdynamicshroud.bandcamp.com/album/online' },
  { name: 'Autoscopy',
    artist: 'Golden Living Room',
    url: 'https://goldenlivingroom.bandcamp.com/album/autoscopy' },
  { name: 'I\'ll Try Living Like This (NUWRLD Version)',
    artist: 'Ghost Diamond',
    url: 'https://ghostdiamond.bandcamp.com/album/ill-try-living-like-this-nuwrld-version' },
  { name: 'Dreams',
    artist: 'Winter Sleep',
    url: 'https://winter-sleep.bandcamp.com/album/dreams' },
  { name: 'just end it ✓✓✓',
    artist: 'm a l i b l u e : (',
    url: 'https://adhesivesounds.bandcamp.com/album/just-end-it' },
  { name: 'failure',
    artist: 'm a l i b l u e : (',
    url: 'https://adhesivesounds.bandcamp.com/album/failure' },
  { name: '私は眠っているだけです',
    artist: 'SHENZHEN GLOBAL',
    url: 'https://new-world.bandcamp.com/album/--5' },
  { name: 'Return To Dream City',
    artist: 'Winter Sleep',
    url: 'https://winter-sleep.bandcamp.com/album/return-to-dream-city' },
  { name: 'PLUG IN, DROP OUT',
    artist: 'Golden Living Room',
    url: 'https://goldenlivingroom.bandcamp.com/album/plug-in-drop-out' } ]
*/
