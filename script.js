/* ================================================================
   LK VIBES MUSIC PLAYER — 100 SONGS | 5 LANGUAGES
   ================================================================ */

// ==================== SONG DATABASE (100 Songs) ====================
// Compact format: [id, title, artist, album, year, duration, category, language, 'color1 color2 color3', primaryColor]
const SD = [
  // ──── ENGLISH (25) ────
  [1,'Believer','Imagine Dragons','Evolve',2017,204,'Rock','English','#c0392b #e74c3c #8b0000','#c0392b'],
  [2,'Blinding Lights','The Weeknd','After Hours',2020,200,'Pop','English','#6a0dad #e040fb #ff6f00','#6a0dad'],
  [3,'Shape of You','Ed Sheeran','÷ Divide',2017,233,'Pop','English','#ff8f00 #f4511e #bf360c','#ff8f00'],
  [4,'Sunflower','Post Malone & Swae Lee','Spider-Verse',2018,158,'Hip-Hop','English','#fdd835 #ff6f00 #e65100','#fdd835'],
  [5,'Levels','Avicii','True',2013,198,'EDM','English','#1565c0 #42a5f5 #0d47a1','#1565c0'],
  [6,'Lofi Dreams','Chillhop Music','Lofi Beats',2021,252,'Lo-Fi','English','#004d40 #00897b #26a69a','#004d40'],
  [7,'Bohemian Rhapsody','Queen','A Night at the Opera',1975,354,'Rock','English','#4a148c #880e4f #311b92','#4a148c'],
  [8,'Someone Like You','Adele','21',2011,285,'Pop','English','#0097a7 #00838f #006064','#0097a7'],
  [9,'Lose Yourself','Eminem','8 Mile',2002,326,'Hip-Hop','English','#37474f #546e7a #cfd8dc','#37474f'],
  [10,'Closer','The Chainsmokers ft. Halsey','Collage',2016,244,'EDM','English','#d81b60 #ad1457 #880e4f','#d81b60'],
  [11,'Rolling in the Deep','Adele','21',2011,228,'Pop','English','#1a237e #283593 #3949ab','#1a237e'],
  [12,'Uptown Funk','Bruno Mars','Uptown Special',2014,270,'Pop','English','#e91e63 #f44336 #ff5722','#e91e63'],
  [13,'Old Town Road','Lil Nas X','7 EP',2019,157,'Hip-Hop','English','#795548 #8d6e63 #a1887f','#795548'],
  [14,'Starboy','The Weeknd','Starboy',2016,230,'Pop','English','#b71c1c #c62828 #d32f2f','#b71c1c'],
  [15,'Bad Guy','Billie Eilish','WWAFAWDWG',2019,194,'Pop','English','#76ff03 #1b5e20 #33691e','#1b5e20'],
  [16,'Faded','Alan Walker','Different World',2015,212,'EDM','English','#b0bec5 #78909c #546e7a','#78909c'],
  [17,'See You Again','Wiz Khalifa ft. Charlie Puth','Furious 7',2015,237,'Hip-Hop','English','#42a5f5 #1e88e5 #ffd54f','#1e88e5'],
  [18,'Perfect','Ed Sheeran','÷ Divide',2017,263,'Pop','English','#e91e63 #f48fb1 #fce4ec','#e91e63'],
  [19,'Counting Stars','OneRepublic','Native',2013,257,'Rock','English','#1a237e #ffc107 #ff8f00','#1a237e'],
  [20,'Thunder','Imagine Dragons','Evolve',2017,187,'Rock','English','#0d47a1 #1565c0 #e040fb','#0d47a1'],
  [21,'Stay','Kid LAROI & Justin Bieber','F*CK LOVE 3',2021,141,'Pop','English','#ff6e40 #ff3d00 #dd2c00','#ff3d00'],
  [22,'Havana','Camila Cabello','Camila',2018,215,'Pop','English','#d84315 #bf360c #e64a19','#d84315'],
  [23,'Attention','Charlie Puth','Voicenotes',2017,211,'Pop','English','#1b5e20 #2e7d32 #388e3c','#1b5e20'],
  [24,'Titanium','David Guetta ft. Sia','Nothing but the Beat',2011,245,'EDM','English','#455a64 #607d8b #90a4ae','#455a64'],
  [25,'Photograph','Ed Sheeran','x Multiply',2014,258,'Pop','English','#ff8a65 #ff7043 #f4511e','#ff7043'],
  // ──── HINDI (25) ────
  [26,'Tum Hi Ho','Arijit Singh','Aashiqui 2',2013,262,'Bollywood','Hindi','#b71c1c #e53935 #d32f2f','#b71c1c'],
  [27,'Kal Ho Naa Ho','Sonu Nigam','Kal Ho Naa Ho',2003,322,'Bollywood','Hindi','#e65100 #ff9800 #ffb74d','#e65100'],
  [28,'Channa Mereya','Arijit Singh','Ae Dil Hai Mushkil',2016,289,'Bollywood','Hindi','#4a148c #7b1fa2 #9c27b0','#4a148c'],
  [29,'Kesariya','Arijit Singh','Brahmastra',2022,268,'Bollywood','Hindi','#e65100 #ff6d00 #ffab40','#e65100'],
  [30,'Chaiyya Chaiyya','Sukhwinder Singh','Dil Se',1998,324,'Bollywood','Hindi','#ff6f00 #f57f17 #f9a825','#ff6f00'],
  [31,'Tujhe Dekha Toh','Kumar Sanu & Lata','DDLJ',1995,298,'Bollywood','Hindi','#827717 #9e9d24 #c0ca33','#827717'],
  [32,'Kun Faya Kun','A.R. Rahman & Javed Ali','Rockstar',2011,456,'Bollywood','Hindi','#1a237e #303f9f #3f51b5','#1a237e'],
  [33,'Kabira','Tochi Raina & Arijit Singh','YJHD',2013,232,'Bollywood','Hindi','#4e342e #5d4037 #6d4c41','#4e342e'],
  [34,'Gerua','Arijit Singh & Antara Mitra','Dilwale',2015,275,'Bollywood','Hindi','#ef6c00 #f57c00 #fb8c00','#ef6c00'],
  [35,'Tera Ban Jaunga','Akhil & Tulsi Kumar','Kabir Singh',2019,222,'Bollywood','Hindi','#c62828 #d32f2f #e53935','#c62828'],
  [36,'Apna Time Aayega','Ranveer Singh','Gully Boy',2019,280,'Bollywood','Hindi','#263238 #37474f #fdd835','#263238'],
  [37,'Gallan Goodiyaan','Various Artists','Dil Dhadakne Do',2015,288,'Bollywood','Hindi','#e8710a #f9a825 #fbc02d','#e8710a'],
  [38,'Ae Dil Hai Mushkil','Arijit Singh','ADHM',2016,270,'Bollywood','Hindi','#6a1b9a #7b1fa2 #8e24aa','#6a1b9a'],
  [39,'Agar Tum Saath Ho','Arijit & Alka Yagnik','Tamasha',2015,335,'Bollywood','Hindi','#880e4f #ad1457 #c2185b','#880e4f'],
  [40,'Tum Se Hi','Mohit Chauhan','Jab We Met',2007,305,'Bollywood','Hindi','#e65100 #ef6c00 #f57c00','#e65100'],
  [41,'Dil Diyan Gallan','Atif Aslam','Tiger Zinda Hai',2017,258,'Bollywood','Hindi','#b71c1c #c62828 #d32f2f','#b71c1c'],
  [42,'Kala Chashma','Badshah & Neha Kakkar','Baar Baar Dekho',2016,260,'Bollywood','Hindi','#212121 #424242 #76ff03','#212121'],
  [43,'Ilahi','Arijit Singh','YJHD',2013,205,'Bollywood','Hindi','#0277bd #0288d1 #039be5','#0277bd'],
  [44,'Mast Magan','Arijit Singh & Chinmayi','2 States',2014,245,'Bollywood','Hindi','#e8710a #ff8a65 #ffab91','#e8710a'],
  [45,'Badtameez Dil','Benny Dayal','YJHD',2013,258,'Bollywood','Hindi','#d50000 #ff1744 #ff5252','#d50000'],
  [46,'Malhari','Vishal Dadlani','Bajirao Mastani',2015,225,'Bollywood','Hindi','#ff6f00 #ffa000 #ffc107','#ff6f00'],
  [47,'Zaalima','Arijit Singh & Harshdeep','Raees',2017,272,'Bollywood','Hindi','#1a237e #283593 #ffd54f','#1a237e'],
  [48,'Dil Dhadakne Do','Priyanka & Farhan','ZNMD',2011,248,'Bollywood','Hindi','#01579b #0277bd #0288d1','#01579b'],
  [49,'Raabta Title Track','Arijit Singh','Raabta',2017,302,'Bollywood','Hindi','#4a148c #6a1b9a #7b1fa2','#4a148c'],
  [50,'Muskurane Ki Wajah','Arijit Singh','CityLights',2014,283,'Bollywood','Hindi','#546e7a #607d8b #78909c','#546e7a'],
  // ──── TELUGU (20) ────
  [51,'Buttabomma','Armaan Malik','Ala Vaikunthapurramuloo',2020,207,'Tollywood','Telugu','#880e4f #e91e63 #f48fb1','#880e4f'],
  [52,'Samajavaragamana','Sid Sriram','Ala Vaikunthapurramuloo',2020,287,'Tollywood','Telugu','#1a237e #3f51b5 #7986cb','#1a237e'],
  [53,'Inkem Inkem','Sid Sriram','Geetha Govindam',2018,244,'Tollywood','Telugu','#bf360c #ff5722 #ff8a65','#bf360c'],
  [54,'Srivalli','Sid Sriram','Pushpa',2021,208,'Tollywood','Telugu','#3e2723 #6d4c41 #8d6e63','#3e2723'],
  [55,'Ramuloo Ramulaa','Anurag Kulkarni','Ala Vaikunthapurramuloo',2020,223,'Tollywood','Telugu','#d50000 #ff1744 #ffd600','#d50000'],
  [56,'Saami Saami','Mounika Yadav','Pushpa',2021,215,'Tollywood','Telugu','#bf360c #e64a19 #ff5722','#bf360c'],
  [57,'Oo Antava','Indravathi Chauhan','Pushpa',2021,230,'Tollywood','Telugu','#ad1457 #c2185b #e91e63','#ad1457'],
  [58,'Natu Natu','Rahul & Kaala Bhairava','RRR',2022,278,'Tollywood','Telugu','#e65100 #ff6d00 #ff9100','#e65100'],
  [59,'Komuram Bheemudo','Kaala Bhairava','RRR',2022,265,'Tollywood','Telugu','#1b5e20 #2e7d32 #fdd835','#1b5e20'],
  [60,'Mind Block','Blaaze & Ranina','Sarileru Neekevvaru',2020,218,'Tollywood','Telugu','#0d47a1 #1565c0 #e040fb','#0d47a1'],
  [61,'Choosi Chudangane','Sid Sriram','Chalo',2018,247,'Tollywood','Telugu','#e65100 #ff6f00 #e91e63','#e65100'],
  [62,'Undiporaadhey','Sid Sriram','Hushaaru',2018,292,'Tollywood','Telugu','#0d47a1 #1565c0 #42a5f5','#0d47a1'],
  [63,'Natu Natu Remix','Rahul Sipligunj','RRR Remix',2022,195,'Tollywood','Telugu','#e65100 #ff3d00 #dd2c00','#e65100'],
  [64,'Dosti','Amit Trivedi','RRR',2022,252,'Tollywood','Telugu','#5d4037 #6d4c41 #ffa000','#5d4037'],
  [65,'Jaragandi','Vishal Mishra','Game Changer',2025,208,'Tollywood','Telugu','#00c853 #00e676 #69f0ae','#00c853'],
  [66,'Bala Bala','Rahul Sipligunj','Akhanda',2021,198,'Tollywood','Telugu','#ff6f00 #f57f17 #d50000','#ff6f00'],
  [67,'Penny Song','Vishal Mishra','Sarkaru Vaari Paata',2022,224,'Tollywood','Telugu','#00838f #0097a7 #00acc1','#00838f'],
  [68,'Kushi Title Song','Hesham Abdul Wahab','Kushi',2023,268,'Tollywood','Telugu','#e91e63 #f48fb1 #fce4ec','#e91e63'],
  [69,'Ranjithame','Anirudh Ravichander','Varisu',2023,215,'Tollywood','Telugu','#1a237e #283593 #ffc107','#1a237e'],
  [70,'Sittharala Sirapadu','Sid Sriram','Ala Vaikunthapurramuloo',2020,238,'Tollywood','Telugu','#ff6f00 #ff8f00 #ffa726','#ff6f00'],
  // ──── TAMIL (15) ────
  [71,'Why This Kolaveri Di','Dhanush','3',2011,208,'Kollywood','Tamil','#37474f #607d8b #90a4ae','#37474f'],
  [72,'Rowdy Baby','Dhanush & Dhee','Maari 2',2018,250,'Kollywood','Tamil','#e65100 #ff9800 #ffc107','#e65100'],
  [73,'Vaathi Coming','Anirudh Ravichander','Master',2021,195,'Kollywood','Tamil','#1b5e20 #4caf50 #81c784','#1b5e20'],
  [74,'Aalaporan Tamizhan','A.R. Rahman','Mersal',2017,284,'Kollywood','Tamil','#b71c1c #d32f2f #ffc107','#b71c1c'],
  [75,'Kutti Story','Anirudh Ravichander','Master',2021,198,'Kollywood','Tamil','#2e7d32 #43a047 #66bb6a','#2e7d32'],
  [76,'Enjoy Enjaami','Dhee & Arivu','Independent',2021,246,'Kollywood','Tamil','#33691e #558b2f #689f38','#33691e'],
  [77,'Kaathalae Kaathalae','Govind Vasantha','96',2018,310,'Kollywood','Tamil','#6a1b9a #8e24aa #ab47bc','#6a1b9a'],
  [78,'Kannalane','K.S. Chithra','Bombay',1995,342,'Kollywood','Tamil','#bf360c #e64a19 #827717','#bf360c'],
  [79,'Oo Solriya','Anirudh Ravichander','Don',2022,215,'Kollywood','Tamil','#ad1457 #d81b60 #e91e63','#ad1457'],
  [80,'Chilla Chilla','Anirudh Ravichander','Thunivu',2023,218,'Kollywood','Tamil','#c62828 #d32f2f #e53935','#c62828'],
  [81,'Arabic Kuthu','Anirudh Ravichander','Beast',2022,228,'Kollywood','Tamil','#ff6f00 #ffa000 #00c853','#ff6f00'],
  [82,'Naan Pizhai','Sid Sriram','Vaanam Kottattum',2020,295,'Kollywood','Tamil','#1565c0 #1976d2 #42a5f5','#1565c0'],
  [83,'Vaa Vaathi','Dhanush','Vaathi',2023,210,'Kollywood','Tamil','#2e7d32 #43a047 #fdd835','#2e7d32'],
  [84,'Mazhai Kuruvi','A.R. Rahman','CCV',2018,268,'Kollywood','Tamil','#546e7a #78909c #b0bec5','#546e7a'],
  [85,'Thee Thalapathy','Anirudh Ravichander','Varisu',2023,205,'Kollywood','Tamil','#c62828 #ff6f00 #ffc107','#c62828'],
  // ──── KANNADA (15) ────
  [86,'Bombe Helutaithe','Raghu Dixit','Raajakumara',2017,275,'Sandalwood','Kannada','#c62828 #ff5252 #ff8a80','#c62828'],
  [87,'Belageddu','Armaan Malik','Kirik Party',2016,302,'Sandalwood','Kannada','#311b92 #7c4dff #b388ff','#311b92'],
  [88,'Rangitaranga Theme','Anup Bhandari','RangiTaranga',2015,225,'Sandalwood','Kannada','#006064 #00bcd4 #4dd0e1','#006064'],
  [89,'Karabuu','Sanjith Hegde','Roberrt',2021,215,'Sandalwood','Kannada','#6a1b9a #ab47bc #ce93d8','#6a1b9a'],
  [90,'Salaga Title Track','Chandan Shetty','Salaga',2021,238,'Sandalwood','Kannada','#b71c1c #d32f2f #212121','#b71c1c'],
  [91,'Kanasalu Neene','Sonu Nigam','Raajakumara',2017,285,'Sandalwood','Kannada','#e65100 #ff8f00 #ffb74d','#e65100'],
  [92,'Ondu Malebillu','Karthik','Chakravyuha',2016,248,'Sandalwood','Kannada','#0277bd #039be5 #4fc3f7','#0277bd'],
  [93,'Amma I Love You','Sid Sriram','AILU',2018,262,'Sandalwood','Kannada','#5d4037 #795548 #a1887f','#5d4037'],
  [94,'Devatha','Ananya Bhat','KGF Chapter 2',2022,232,'Sandalwood','Kannada','#212121 #424242 #ffc107','#212121'],
  [95,'Nee Hrudayake','Armaan Malik','Raajakumara',2017,252,'Sandalwood','Kannada','#880e4f #c2185b #e91e63','#880e4f'],
  [96,'Dia Title Song','Sanjith Hegde','Dia',2020,242,'Sandalwood','Kannada','#e91e63 #f48fb1 #fce4ec','#e91e63'],
  [97,'Maadeva','Ananya Bhat','KGF',2018,258,'Sandalwood','Kannada','#263238 #37474f #ffa000','#263238'],
  [98,'Jothe Jotheyali','Sonu Nigam','Manasaare',2009,305,'Sandalwood','Kannada','#4e342e #6d4c41 #a1887f','#4e342e'],
  [99,'Nee Sigoovaregu','Raghu Dixit','Lucia',2013,268,'Sandalwood','Kannada','#1b5e20 #388e3c #66bb6a','#1b5e20'],
  [100,'Summane Yaakaagide','Sid Sriram','Garuda Gamana',2021,288,'Sandalwood','Kannada','#0d47a1 #1976d2 #42a5f5','#0d47a1']
];

// ==================== LYRICS GENERATOR ====================
function generateLyrics(title, artist, album, language, category) {
  const moodLines = {
    Rock: ['Thunder echoes through electric skies','Guitars scream what words cannot say','Hearts of fire burn through the night','Rhythm pounding, spirits soaring high','The stage is set, the crowd ignites'],
    Pop: ['Dancing under city lights so bright','Melodies that paint the sky with wonder','Hearts connect through every note','Voices rise in perfect harmony','A symphony of joy and light'],
    'Hip-Hop': ['Beats drop heavy, words cut deep','Streets tell stories rhythm keeps','Rising higher, breaking chains','Every verse a revolution','Flow like water, sharp like steel'],
    EDM: ['Bass reverberates through every soul','Lights explode in neon dreams','Lost in waves of sound and color','The drop hits and the world transforms','Electric pulses, infinite loops'],
    'Lo-Fi': ['Rain taps gently on the glass','Vinyl crackle fills the quiet room','Pages turn in amber light','Soft keys dance on sleepy chords','Time moves slow in peaceful haze'],
    Bollywood: ['Dil ki dharkan mein sangeet hai','Mohabbat ka safar, rangeen raahein','Khwaabon ki duniya mein kho jaana','Zindagi ki dhun, pyaar ka gaana','Sapnon se sajaya ye jahaan'],
    Tollywood: ['Hrudayam lo sangeetham mogindhi','Premaku ardhamu ee paata cheppindhi','Kanulalo velugu, manasulo paata','Aakasham antha nee premey','Adhe nee navvu naa pranam'],
    Kollywood: ['Isai malaigal pozhigindrana','Idhayam thudikkum inimaiyil','Kaadhal paatum oru raagam','Vazhkai enum sangeetham','Nenjil nilaikkum geetham idhu'],
    Sandalwood: ['Hrudayada haadu mogindide','Jeevana sangeetha nadeythide','Kanasina lokadalli nee iddhiya','Preethiya haadu kelidhe naan','Sangeethave ninna preethiyu']
  };
  const lines = moodLines[category] || moodLines.Pop;
  return `🎵 ${title}\n   by ${artist}\n\n${lines[0]}\n${lines[1]}\n${lines[2]}\n${lines[3]}\n${lines[4]}\n\nFrom the album "${album}"\n${language} · ${category}`;
}

// ==================== BUILD SONGS ARRAY ====================
const SONGS = SD.map(([id,title,artist,album,albumYear,duration,category,language,gc,coverColor]) => {
  const [c1,c2,c3] = gc.split(' ');
  return {
    id, title, artist, album, albumYear, duration, category, language,
    frequency: 220 * Math.pow(2, ((id - 1) % 24) / 12),
    coverGradient: `linear-gradient(135deg, ${c1}, ${c2}${c3 ? ', ' + c3 : ''})`,
    coverColor, coverImage: `images/cover${id}.jpg`,
    lyrics: generateLyrics(title, artist, album, language, category)
  };
});

// ==================== CATEGORIES & LANGUAGES ====================
const CATEGORIES = ['All','Pop','Rock','Hip-Hop','EDM','Lo-Fi','Bollywood','Tollywood','Kollywood','Sandalwood'];
const LANGUAGES = ['All','English','Hindi','Telugu','Tamil','Kannada'];

// ==================== STATE ====================
const state = {
  currentSongIndex: 0, isPlaying: false, volume: 80, isMuted: false,
  repeatMode: 'none', shuffleMode: false, currentTime: 0,
  favorites: [], recentlyPlayed: [], theme: 'dark',
  activeCategory: 'All', activeLanguage: 'All', searchQuery: '',
  currentView: 'home', playlistOpen: false, lyricsOpen: false, sidebarOpen: false,
  shuffledIndices: [], shufflePosition: 0, lastSongId: null, lastPlaybackTime: 0
};

// ==================== AUDIO ENGINE ====================
class AudioEngine {
  constructor() { this.ctx = null; this.masterGain = null; this.oscillators = []; this.gainNodes = []; this.initialized = false; }
  init() {
    if (this.initialized) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0;
    this.masterGain.connect(this.ctx.destination);
    this.initialized = true;
  }
  ensureContext() { if (!this.initialized) this.init(); if (this.ctx.state === 'suspended') this.ctx.resume(); }
  play(frequency, volume = 0.5) {
    this.ensureContext(); this.stop();
    const freqs = [frequency, frequency * 1.25, frequency * 1.5, frequency * 2];
    const types = ['sine', 'triangle', 'sine', 'sine'];
    const gains = [0.12, 0.06, 0.08, 0.04];
    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain();
      osc.type = types[i]; osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gains[i], this.ctx.currentTime);
      osc.connect(gain); gain.connect(this.masterGain); osc.start();
      this.oscillators.push(osc); this.gainNodes.push(gain);
    });
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.4);
  }
  stop() {
    if (!this.ctx) return;
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.15);
    const o = this.oscillators, g = this.gainNodes;
    setTimeout(() => { o.forEach(x => { try{x.stop();}catch(e){} }); g.forEach(x => { try{x.disconnect();}catch(e){} }); }, 200);
    this.oscillators = []; this.gainNodes = [];
  }
  setVolume(v) {
    if (!this.ctx || !this.masterGain) return;
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(v, this.ctx.currentTime + 0.05);
  }
}

// ==================== PLAYBACK SIMULATOR ====================
class PlaybackSimulator {
  constructor() { this.currentTime = 0; this.duration = 0; this.isPlaying = false; this.startTimestamp = 0; this.rafId = null; this.onTimeUpdate = null; this.onEnded = null; }
  play(duration, startFrom = 0) {
    this.duration = duration; this.currentTime = startFrom;
    this.startTimestamp = performance.now() - (startFrom * 1000);
    this.isPlaying = true; this._tick();
  }
  _tick() {
    if (!this.isPlaying) return;
    const elapsed = (performance.now() - this.startTimestamp) / 1000;
    this.currentTime = Math.min(elapsed, this.duration);
    if (this.currentTime >= this.duration) {
      this.isPlaying = false; this.currentTime = this.duration;
      if (this.onTimeUpdate) this.onTimeUpdate(this.currentTime, this.duration);
      if (this.onEnded) this.onEnded(); return;
    }
    if (this.onTimeUpdate) this.onTimeUpdate(this.currentTime, this.duration);
    this.rafId = requestAnimationFrame(() => this._tick());
  }
  pause() { this.isPlaying = false; if (this.rafId) cancelAnimationFrame(this.rafId); }
  seek(time) {
    this.currentTime = Math.max(0, Math.min(time, this.duration));
    this.startTimestamp = performance.now() - (this.currentTime * 1000);
    if (this.onTimeUpdate) this.onTimeUpdate(this.currentTime, this.duration);
    if (this.isPlaying) { if (this.rafId) cancelAnimationFrame(this.rafId); this._tick(); }
  }
  reset() { this.pause(); this.currentTime = 0; this.duration = 0; }
}

// ==================== UTILITIES ====================
function formatTime(s) { const m = Math.floor(Math.floor(s) / 60); return `${m}:${(Math.floor(s) % 60).toString().padStart(2,'0')}`; }
function debounce(fn, d) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), d); }; }
function shuffleArray(a) { const r=[...a]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];} return r; }
function highlightText(t, q) { if(!q) return t; return t.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`,'gi'),'<span class="search-highlight">$1</span>'); }

function getFilteredSongs() {
  let songs = [...SONGS];
  if (state.activeCategory !== 'All') songs = songs.filter(s => s.category === state.activeCategory);
  if (state.activeLanguage !== 'All') songs = songs.filter(s => s.language === state.activeLanguage);
  if (state.searchQuery) { const q = state.searchQuery.toLowerCase(); songs = songs.filter(s => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q) || s.album.toLowerCase().includes(q)); }
  if (state.currentView === 'favorites') songs = songs.filter(s => state.favorites.includes(s.id));
  return songs;
}

function getUniqueAlbums() {
  const m = new Map();
  SONGS.forEach(s => { if (!m.has(s.album)) m.set(s.album, { name:s.album, artist:s.artist, year:s.albumYear, coverGradient:s.coverGradient, coverImage:s.coverImage, coverColor:s.coverColor, songs:[] }); m.get(s.album).songs.push(s); });
  return Array.from(m.values());
}

// ==================== INSTANCES ====================
const audioEngine = new AudioEngine();
const playback = new PlaybackSimulator();

// ==================== DOM ====================
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
let DOM = {};

function cacheDom() {
  DOM = {
    loading:$('#loading'), bgGradient:$('#bgGradient'),
    searchInput:$('#searchInput'), searchClear:$('#searchClear'), themeToggle:$('#themeToggle'),
    sidebar:$('#sidebar'), sidebarOverlay:$('#sidebarOverlay'), sidebarToggle:$('#sidebarToggle'),
    mainContent:$('#mainContent'), heroSection:$('#heroSection'), heroBg:$('#heroBg'),
    heroCover:$('#heroCover'), heroTitle:$('#heroTitle'), heroArtist:$('#heroArtist'),
    heroAlbum:$('#heroAlbum'), heroYear:$('#heroYear'), heroLang:$('#heroLang'), heroPlayBtn:$('#heroPlayBtn'),
    languageChips:$('#languageChips'), categoryChips:$('#categoryChips'),
    songsGrid:$('#songsGrid'), noResults:$('#noResults'), albumsScroll:$('#albumsScroll'), recentScroll:$('#recentScroll'),
    songsSection:$('#songsSection'), albumsSection:$('#albumsSection'), recentSection:$('#recentSection'),
    nowPlayingBar:$('#nowPlayingBar'), npBg:$('#npBg'), npCover:$('#npCover'),
    npTitle:$('#npTitle'), npArtist:$('#npArtist'), npFavBtn:$('#npFavBtn'),
    playBtn:$('#playBtn'), prevBtn:$('#prevBtn'), nextBtn:$('#nextBtn'),
    shuffleBtn:$('#shuffleBtn'), repeatBtn:$('#repeatBtn'), restartBtn:$('#restartBtn'),
    progressBar:$('#progressBar'), progressFill:$('#progressFill'),
    currentTimeEl:$('#currentTime'), totalTimeEl:$('#totalTime'),
    muteBtn:$('#muteBtn'), volumeSlider:$('#volumeSlider'), lyricsToggle:$('#lyricsBtn'),
    equalizer:$('#equalizer'), playlistToggle1:$('#playlistToggle'), playlistToggle2:$('#playlistToggle2'),
    playlistPanel:$('#playlistPanel'), playlistClose:$('#playlistClose'), playlistList:$('#playlistList'),
    lyricsOverlay:$('#lyricsOverlay'), lyricsPanel:$('#lyricsPanel'), lyricsClose:$('#lyricsClose'),
    lyricsCover:$('#lyricsCover'), lyricsTitle:$('#lyricsTitle'), lyricsArtist:$('#lyricsArtist'), lyricsText:$('#lyricsText'),
    toastContainer:$('#toastContainer')
  };
}

// ==================== TOAST ====================
function showToast(msg, type = 'info') {
  const icons = {info:'🎵',success:'✅',warning:'⚠️',error:'❌',favorite:'❤️',volume:'🔊'};
  const t = document.createElement('div'); t.className = `toast ${type}`;
  t.innerHTML = `<span class="toast-icon">${icons[type]||icons.info}</span><span>${msg}</span>`;
  DOM.toastContainer.appendChild(t);
  setTimeout(() => { t.classList.add('removing'); setTimeout(() => t.remove(), 300); }, 3000);
}

// ==================== LOCAL STORAGE ====================
const LS = { theme:'lkv_theme', volume:'lkv_vol', favorites:'lkv_fav', recent:'lkv_rec', repeat:'lkv_rep', shuffle:'lkv_shuf', lastSong:'lkv_last', lastTime:'lkv_lt' };
function saveLS(k,v) { try{localStorage.setItem(k,JSON.stringify(v));}catch(e){} }
function loadLS(k,d) { try{const v=localStorage.getItem(k);return v!==null?JSON.parse(v):d;}catch(e){return d;} }
function loadAllState() {
  state.theme=loadLS(LS.theme,'dark'); state.volume=loadLS(LS.volume,80);
  state.favorites=loadLS(LS.favorites,[]); state.recentlyPlayed=loadLS(LS.recent,[]);
  state.repeatMode=loadLS(LS.repeat,'none'); state.shuffleMode=loadLS(LS.shuffle,false);
  state.lastSongId=loadLS(LS.lastSong,null); state.lastPlaybackTime=loadLS(LS.lastTime,0);
}
function saveState() { saveLS(LS.theme,state.theme); saveLS(LS.volume,state.volume); saveLS(LS.favorites,state.favorites); saveLS(LS.recent,state.recentlyPlayed); saveLS(LS.repeat,state.repeatMode); saveLS(LS.shuffle,state.shuffleMode); }

// ==================== THEME ====================
function setTheme(t) { state.theme=t; document.documentElement.setAttribute('data-theme',t); if(DOM.themeToggle){DOM.themeToggle.innerHTML=t==='dark'?'🌙':'☀️';} saveLS(LS.theme,t); }
function toggleTheme() { setTheme(state.theme==='dark'?'light':'dark'); showToast(`${state.theme==='dark'?'Dark':'Light'} Mode`,'info'); }

// ==================== BACKGROUND GRADIENT ====================
function updateBgGradient(c) { if(DOM.bgGradient) DOM.bgGradient.style.background=`radial-gradient(ellipse at 30% 20%, ${c}33 0%, transparent 60%)`; }

// ==================== PLAYER CORE ====================
function getCurrentSong() { return SONGS[state.currentSongIndex] || SONGS[0]; }

function playSong(index, seekTo = 0) {
  if (index < 0 || index >= SONGS.length) return;
  state.currentSongIndex = index; const song = getCurrentSong();
  state.isPlaying = true; state.currentTime = seekTo;
  audioEngine.play(song.frequency, (state.isMuted ? 0 : state.volume / 100) * 0.5);
  playback.play(song.duration, seekTo);
  updateNowPlayingUI(); updatePlayBtnUI(); updateEqualizerUI(); updateBgGradient(song.coverColor);
  highlightActiveSongCard(); updatePlaylistHighlight(); updateHeroSection(song);
  if(DOM.npBg) DOM.npBg.style.backgroundImage = `url('${song.coverImage}'), ${song.coverGradient}`;
  addToRecentlyPlayed(song.id);
  saveLS(LS.lastSong, song.id); saveLS(LS.lastTime, 0);
  showToast(`Now Playing: ${song.title}`, 'info');
}

function togglePlayPause() { audioEngine.ensureContext(); state.isPlaying ? pauseSong() : resumeSong(); }
function pauseSong() { state.isPlaying=false; playback.pause(); audioEngine.stop(); updatePlayBtnUI(); updateEqualizerUI(); state.currentTime=playback.currentTime; saveLS(LS.lastTime,state.currentTime); }
function resumeSong() { const s=getCurrentSong(); state.isPlaying=true; audioEngine.play(s.frequency,(state.isMuted?0:state.volume/100)*0.5); playback.play(s.duration,state.currentTime); updatePlayBtnUI(); updateEqualizerUI(); }

function nextSong() {
  let n; if(state.shuffleMode){state.shufflePosition++;if(state.shufflePosition>=state.shuffledIndices.length){generateShuffledIndices();state.shufflePosition=0;}n=state.shuffledIndices[state.shufflePosition];}else{n=(state.currentSongIndex+1)%SONGS.length;} playSong(n);
}
function prevSong() { if(playback.currentTime>3){restartSong();return;} let p; if(state.shuffleMode){state.shufflePosition=Math.max(0,state.shufflePosition-1);p=state.shuffledIndices[state.shufflePosition];}else{p=(state.currentSongIndex-1+SONGS.length)%SONGS.length;} playSong(p); }
function restartSong() { if(state.isPlaying){playback.seek(0);state.currentTime=0;}else{state.currentTime=0;playSong(state.currentSongIndex);} }

function onSongEnded() {
  switch(state.repeatMode){case 'one':playSong(state.currentSongIndex);break;case 'all':nextSong();break;default:if(state.currentSongIndex<SONGS.length-1||state.shuffleMode){nextSong();}else{pauseSong();state.currentTime=0;playback.currentTime=0;updateProgressUI(0,getCurrentSong().duration);}break;}
}
function setRepeatMode() { const m=['none','one','all'];state.repeatMode=m[(m.indexOf(state.repeatMode)+1)%m.length];updateRepeatBtnUI();saveLS(LS.repeat,state.repeatMode);const l={none:'Repeat Off',one:'Repeat One',all:'Repeat All'};showToast(l[state.repeatMode],'info'); }
function toggleShuffle() { state.shuffleMode=!state.shuffleMode;if(state.shuffleMode)generateShuffledIndices();updateShuffleBtnUI();saveLS(LS.shuffle,state.shuffleMode);showToast(state.shuffleMode?'Shuffle On 🔀':'Shuffle Off','info'); }
function generateShuffledIndices() { const i=SONGS.map((_,i)=>i).filter(i=>i!==state.currentSongIndex);state.shuffledIndices=shuffleArray(i);state.shuffledIndices.unshift(state.currentSongIndex);state.shufflePosition=0; }

// ==================== PROGRESS BAR ====================
playback.onTimeUpdate = function(c, t) { state.currentTime=c; updateProgressUI(c,t); if(Math.floor(c)%5===0)saveLS(LS.lastTime,c); };
playback.onEnded = onSongEnded;
function updateProgressUI(c, t) { if(!DOM.progressFill) return; DOM.progressFill.style.width=`${t>0?(c/t)*100:0}%`; DOM.currentTimeEl.textContent=formatTime(c); DOM.totalTimeEl.textContent=formatTime(t); }

function setupProgressBar() {
  if(!DOM.progressBar) return; let drag=false;
  function seek(e){const r=DOM.progressBar.getBoundingClientRect();const p=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));playback.seek(p*getCurrentSong().duration);state.currentTime=playback.currentTime;}
  DOM.progressBar.addEventListener('mousedown',e=>{drag=true;seek(e);});
  document.addEventListener('mousemove',e=>{if(drag)seek(e);}); document.addEventListener('mouseup',()=>{drag=false;});
  DOM.progressBar.addEventListener('touchstart',e=>{drag=true;seek(e.touches[0]);},{passive:true});
  DOM.progressBar.addEventListener('touchmove',e=>{if(drag)seek(e.touches[0]);},{passive:true});
  DOM.progressBar.addEventListener('touchend',()=>{drag=false;});
}

// ==================== VOLUME ====================
function setVolume(v) { state.volume=Math.max(0,Math.min(100,v));state.isMuted=state.volume===0;if(state.isPlaying)audioEngine.setVolume((state.isMuted?0:state.volume/100)*0.5);if(DOM.volumeSlider)DOM.volumeSlider.value=state.volume;updateMuteBtnUI();saveLS(LS.volume,state.volume); }
function toggleMute() { state.isMuted=!state.isMuted;if(state.isPlaying)audioEngine.setVolume(state.isMuted?0:(state.volume/100)*0.5);updateMuteBtnUI();showToast(state.isMuted?'Muted 🔇':`Volume: ${state.volume}%`,'volume'); }
function updateMuteBtnUI() { if(!DOM.muteBtn) return; DOM.muteBtn.innerHTML=state.isMuted||state.volume===0?'🔇':state.volume<50?'🔉':'🔊'; }

// ==================== FAVORITES ====================
function toggleFavorite(id) { const i=state.favorites.indexOf(id);if(i>-1){state.favorites.splice(i,1);showToast('Removed from Favorites','info');}else{state.favorites.push(id);showToast('Added to Favorites ❤️','favorite');}saveLS(LS.favorites,state.favorites);updateFavoriteBtnUI();updateSongCardFavs();if(state.currentView==='favorites')renderSongsGrid(); }
function isFavorite(id) { return state.favorites.includes(id); }
function updateFavoriteBtnUI() { if(!DOM.npFavBtn) return;const f=isFavorite(getCurrentSong().id);DOM.npFavBtn.innerHTML=f?'❤️':'🤍';DOM.npFavBtn.classList.toggle('favorited',f); }
function updateSongCardFavs() { $$('.song-card-fav').forEach(b=>{const id=parseInt(b.dataset.songId);const f=isFavorite(id);b.innerHTML=f?'❤️':'🤍';b.classList.toggle('favorited',f);}); }

// ==================== RECENTLY PLAYED ====================
function addToRecentlyPlayed(id) { state.recentlyPlayed=state.recentlyPlayed.filter(r=>r.id!==id);state.recentlyPlayed.unshift({id,time:Date.now()});if(state.recentlyPlayed.length>15)state.recentlyPlayed.pop();saveLS(LS.recent,state.recentlyPlayed);renderRecentlyPlayed(); }
function getTimeSince(ts) { const d=Math.floor((Date.now()-ts)/1000);if(d<60)return 'Just now';if(d<3600)return `${Math.floor(d/60)}m ago`;if(d<86400)return `${Math.floor(d/3600)}h ago`;return `${Math.floor(d/86400)}d ago`; }

// ==================== SEARCH ====================
function handleSearch(q) { state.searchQuery=q.trim();if(DOM.searchClear)DOM.searchClear.classList.toggle('visible',q.length>0);renderSongsGrid(); }
function clearSearch() { state.searchQuery='';if(DOM.searchInput)DOM.searchInput.value='';if(DOM.searchClear)DOM.searchClear.classList.remove('visible');renderSongsGrid(); }

// ==================== UI UPDATES ====================
function updateNowPlayingUI() {
  const s=getCurrentSong();if(!DOM.npTitle) return;
  DOM.npTitle.textContent=s.title;DOM.npArtist.textContent=s.artist;DOM.totalTimeEl.textContent=formatTime(s.duration);
  DOM.npCover.onerror=function(){this.style.display='none';this.parentElement.style.background=s.coverGradient;};
  DOM.npCover.src=s.coverImage;DOM.npCover.alt=s.title;DOM.npCover.style.display='';DOM.npCover.parentElement.style.background='';
  updateFavoriteBtnUI();DOM.nowPlayingBar.classList.remove('hidden');if(state.lyricsOpen)updateLyricsPanel();
}
function updatePlayBtnUI() { if(DOM.playBtn)DOM.playBtn.innerHTML=state.isPlaying?'⏸':'▶️'; }
function updateEqualizerUI() { if(DOM.equalizer)DOM.equalizer.classList.toggle('playing',state.isPlaying); }
function updateRepeatBtnUI() { if(!DOM.repeatBtn) return;const i={none:'🔁',one:'🔂',all:'🔁'};DOM.repeatBtn.innerHTML=i[state.repeatMode];DOM.repeatBtn.classList.toggle('active',state.repeatMode!=='none'); }
function updateShuffleBtnUI() { if(DOM.shuffleBtn)DOM.shuffleBtn.classList.toggle('active',state.shuffleMode); }
function highlightActiveSongCard() { $$('.song-card').forEach(c=>c.classList.toggle('playing',parseInt(c.dataset.songIndex)===state.currentSongIndex)); }
function updatePlaylistHighlight() { $$('.playlist-item').forEach(i=>i.classList.toggle('active',parseInt(i.dataset.songIndex)===state.currentSongIndex)); }

// ==================== HERO ====================
function updateHeroSection(song) {
  if(!DOM.heroTitle) return; song=song||getCurrentSong();
  DOM.heroTitle.textContent=song.title;DOM.heroArtist.textContent=song.artist;DOM.heroAlbum.textContent=song.album;DOM.heroYear.textContent=song.albumYear;DOM.heroLang.textContent=song.language;
  DOM.heroCover.onerror=function(){this.style.background=song.coverGradient;this.src='';};
  DOM.heroCover.src=song.coverImage;
  if(DOM.heroBg){DOM.heroBg.style.backgroundImage=`url('${song.coverImage}'), ${song.coverGradient}`;DOM.heroBg.style.background=DOM.heroBg.style.backgroundImage||song.coverGradient;}
}

// ==================== RENDER SONGS GRID ====================
function renderSongsGrid() {
  if(!DOM.songsGrid) return; const songs=getFilteredSongs();
  if(songs.length===0){DOM.songsGrid.innerHTML='';DOM.noResults.classList.remove('hidden');return;}
  DOM.noResults.classList.add('hidden');const q=state.searchQuery;
  DOM.songsGrid.innerHTML=songs.map((song,idx)=>{
    const si=SONGS.indexOf(song),ip=si===state.currentSongIndex,fav=isFavorite(song.id),d=Math.min(idx,6);
    return `<div class="song-card animate-in animate-delay-${d} ${ip?'playing':''}" data-song-index="${si}" data-song-id="${song.id}">
      <div class="song-card-cover-wrap"><div class="song-card-cover-gradient" style="background:${song.coverGradient}"><img class="song-card-cover" src="${song.coverImage}" alt="${song.title}" onerror="this.style.display='none'"></div>
      <div class="poster-overlay"></div>
      <div class="song-card-playing-indicator"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>
      <button class="song-card-fav ${fav?'favorited':''}" data-song-id="${song.id}" onclick="event.stopPropagation();toggleFavorite(${song.id})">${fav?'❤️':'🤍'}</button>
      <button class="song-card-play" onclick="event.stopPropagation();playSong(${si})">▶</button></div>
      <div class="song-card-info"><div class="song-card-title">${q?highlightText(song.title,q):song.title}</div><div class="song-card-artist">${q?highlightText(song.artist,q):song.artist}</div>
      <div class="song-card-meta"><span class="lang-badge">${song.language}</span><span class="song-card-duration">${formatTime(song.duration)}</span></div></div></div>`;
  }).join('');
  DOM.songsGrid.querySelectorAll('.song-card').forEach(c=>c.addEventListener('click',()=>playSong(parseInt(c.dataset.songIndex))));
  requestAnimationFrame(()=>initScrollAnimations());
}

// ==================== RENDER ALBUMS ====================
function renderAlbums() {
  if(!DOM.albumsScroll) return;const albums=getUniqueAlbums();
  DOM.albumsScroll.innerHTML=albums.slice(0,30).map(a=>`<div class="album-card" data-album="${a.name}">
    <div class="song-card-cover-wrap" style="border-radius:var(--r-md)"><div class="song-card-cover-gradient" style="background:${a.coverGradient}"><img class="album-card-cover song-card-cover" src="${a.coverImage}" alt="${a.name}" onerror="this.style.display='none'"></div></div>
    <div class="album-card-title">${a.name}</div><div class="album-card-artist">${a.artist}</div><div class="album-card-year">${a.year} · ${a.songs.length} song${a.songs.length>1?'s':''}</div></div>`).join('');
  DOM.albumsScroll.querySelectorAll('.album-card').forEach(c=>c.addEventListener('click',()=>{
    state.searchQuery=c.dataset.album;if(DOM.searchInput)DOM.searchInput.value=c.dataset.album;if(DOM.searchClear)DOM.searchClear.classList.add('visible');renderSongsGrid();DOM.songsSection.scrollIntoView({behavior:'smooth'});
  }));
}

// ==================== RENDER RECENTLY PLAYED ====================
function renderRecentlyPlayed() {
  if(!DOM.recentScroll) return;
  if(state.recentlyPlayed.length===0){DOM.recentScroll.innerHTML='<p style="color:var(--text-muted);padding:12px;">No recently played songs yet.</p>';return;}
  DOM.recentScroll.innerHTML=state.recentlyPlayed.map(r=>{const s=SONGS.find(x=>x.id===r.id);if(!s)return '';const si=SONGS.indexOf(s);
    return `<div class="recent-card" data-song-index="${si}"><div class="song-card-cover-gradient recent-card-cover" style="background:${s.coverGradient};border-radius:var(--r-sm);position:relative;width:48px;height:48px;flex-shrink:0"><img class="recent-card-cover" src="${s.coverImage}" alt="${s.title}" onerror="this.style.display='none'" style="position:absolute;inset:0;border-radius:inherit"></div>
    <div class="recent-card-info"><div class="recent-card-title">${s.title}</div><div class="recent-card-artist">${s.artist}</div><div class="recent-card-time">${getTimeSince(r.time)}</div></div></div>`;
  }).join('');
  DOM.recentScroll.querySelectorAll('.recent-card').forEach(c=>c.addEventListener('click',()=>playSong(parseInt(c.dataset.songIndex))));
}

// ==================== RENDER PLAYLIST ====================
function renderPlaylistPanel() {
  if(!DOM.playlistList) return;
  DOM.playlistList.innerHTML=SONGS.map((s,i)=>{const a=i===state.currentSongIndex;
    return `<div class="playlist-item ${a?'active':''}" data-song-index="${i}">
    <div class="playlist-item-index"><span>${i+1}</span><div class="playlist-item-playing"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></div>
    <div class="song-card-cover-gradient playlist-item-cover" style="background:${s.coverGradient};position:relative"><img class="playlist-item-cover" src="${s.coverImage}" alt="${s.title}" onerror="this.style.display='none'" style="position:absolute;inset:0;border-radius:inherit"></div>
    <div class="playlist-item-info"><div class="playlist-item-title">${s.title}</div><div class="playlist-item-artist">${s.artist}</div></div>
    <div class="playlist-item-duration">${formatTime(s.duration)}</div></div>`;
  }).join('');
  DOM.playlistList.querySelectorAll('.playlist-item').forEach(i=>i.addEventListener('click',()=>playSong(parseInt(i.dataset.songIndex))));
}

// ==================== RENDER CHIPS ====================
function renderCategoryChips() { if(!DOM.categoryChips) return;DOM.categoryChips.innerHTML=CATEGORIES.map(c=>`<button class="category-chip ${state.activeCategory===c?'active':''}" data-category="${c}">${c}</button>`).join('');DOM.categoryChips.querySelectorAll('.category-chip').forEach(c=>c.addEventListener('click',()=>{state.activeCategory=c.dataset.category;$$('.category-chip').forEach(x=>x.classList.toggle('active',x.dataset.category===state.activeCategory));renderSongsGrid();})); }
function renderLanguageChips() { if(!DOM.languageChips) return;DOM.languageChips.innerHTML=LANGUAGES.map(l=>`<button class="language-chip ${state.activeLanguage===l?'active':''}" data-language="${l}">${l}</button>`).join('');DOM.languageChips.querySelectorAll('.language-chip').forEach(c=>c.addEventListener('click',()=>{state.activeLanguage=c.dataset.language;$$('.language-chip').forEach(x=>x.classList.toggle('active',x.dataset.language===state.activeLanguage));renderSongsGrid();})); }

// ==================== LYRICS ====================
function toggleLyricsPanel() { state.lyricsOpen=!state.lyricsOpen;if(DOM.lyricsPanel)DOM.lyricsPanel.classList.toggle('open',state.lyricsOpen);if(DOM.lyricsOverlay)DOM.lyricsOverlay.classList.toggle('open',state.lyricsOpen);if(DOM.lyricsToggle)DOM.lyricsToggle.classList.toggle('active',state.lyricsOpen);if(state.lyricsOpen)updateLyricsPanel(); }
function updateLyricsPanel() { const s=getCurrentSong();if(DOM.lyricsTitle)DOM.lyricsTitle.textContent=s.title;if(DOM.lyricsArtist)DOM.lyricsArtist.textContent=s.artist;if(DOM.lyricsText)DOM.lyricsText.innerHTML=s.lyrics.split('\n').map(l=>`<div class="line">${l||'&nbsp;'}</div>`).join('');if(DOM.lyricsCover){DOM.lyricsCover.onerror=function(){this.style.background=s.coverGradient;this.src='';};DOM.lyricsCover.src=s.coverImage;} }

// ==================== PLAYLIST TOGGLE ====================
function togglePlaylistPanel() { state.playlistOpen=!state.playlistOpen;if(DOM.playlistPanel)DOM.playlistPanel.classList.toggle('open',state.playlistOpen);if(state.playlistOpen)renderPlaylistPanel(); }

// ==================== SIDEBAR ====================
function setActiveView(view) {
  state.currentView=view;$$('.sidebar-item').forEach(i=>i.classList.toggle('active',i.dataset.view===view));
  const sections={home:['heroSection','languageChips','categoryChips','songsSection','albumsSection','recentSection'],favorites:['songsSection'],recent:['recentSection'],albums:['albumsSection']};
  ['heroSection','languageChips','categoryChips','songsSection','albumsSection','recentSection'].forEach(s=>{const el=document.getElementById(s)||DOM[s];if(el)el.style.display='none';});
  (sections[view]||sections.home).forEach(s=>{const el=document.getElementById(s)||DOM[s];if(el)el.style.display='';});
  const st=DOM.songsSection?.querySelector('.section-title');if(st){const t={home:'🎵 All Songs',favorites:'❤️ Favorites',recent:'🕐 Recently Played',albums:'💿 Albums'};st.innerHTML=`<span class="icon">${(t[view]||t.home).split(' ')[0]}</span> ${(t[view]||t.home).split(' ').slice(1).join(' ')}`;}
  renderSongsGrid();if(view==='recent')renderRecentlyPlayed();if(view==='albums')renderAlbums();
  if(state.sidebarOpen)toggleSidebar();
}
function toggleSidebar() { state.sidebarOpen=!state.sidebarOpen;if(DOM.sidebar)DOM.sidebar.classList.toggle('open',state.sidebarOpen);if(DOM.sidebarOverlay)DOM.sidebarOverlay.classList.toggle('open',state.sidebarOpen); }

// ==================== KEYBOARD ====================
function setupKeyboardShortcuts() {
  document.addEventListener('keydown',e=>{if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
    switch(e.code){case 'Space':e.preventDefault();togglePlayPause();break;case 'ArrowRight':e.preventDefault();nextSong();break;case 'ArrowLeft':e.preventDefault();prevSong();break;case 'KeyM':toggleMute();break;case 'KeyL':toggleLyricsPanel();break;case 'KeyF':toggleFavorite(getCurrentSong().id);break;case 'ArrowUp':e.preventDefault();setVolume(state.volume+5);showToast(`Volume: ${state.volume}%`,'volume');break;case 'ArrowDown':e.preventDefault();setVolume(state.volume-5);showToast(`Volume: ${state.volume}%`,'volume');break;}
  });
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() { const o=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting){en.target.classList.add('visible');o.unobserve(en.target);}});},{threshold:0.1,rootMargin:'0px 0px -30px 0px'});$$('.animate-in:not(.visible)').forEach(el=>o.observe(el)); }

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  DOM.playBtn?.addEventListener('click',togglePlayPause);DOM.prevBtn?.addEventListener('click',prevSong);DOM.nextBtn?.addEventListener('click',nextSong);
  DOM.restartBtn?.addEventListener('click',restartSong);DOM.shuffleBtn?.addEventListener('click',toggleShuffle);DOM.repeatBtn?.addEventListener('click',setRepeatMode);
  DOM.muteBtn?.addEventListener('click',toggleMute);DOM.volumeSlider?.addEventListener('input',e=>setVolume(parseInt(e.target.value)));DOM.volumeSlider?.addEventListener('change',()=>showToast(`Volume: ${state.volume}%`,'volume'));
  DOM.npFavBtn?.addEventListener('click',()=>toggleFavorite(getCurrentSong().id));DOM.themeToggle?.addEventListener('click',toggleTheme);
  DOM.searchInput?.addEventListener('input',debounce(e=>handleSearch(e.target.value),200));DOM.searchClear?.addEventListener('click',clearSearch);
  DOM.lyricsToggle?.addEventListener('click',toggleLyricsPanel);DOM.lyricsClose?.addEventListener('click',toggleLyricsPanel);DOM.lyricsOverlay?.addEventListener('click',toggleLyricsPanel);
  DOM.playlistToggle1?.addEventListener('click',togglePlaylistPanel);DOM.playlistToggle2?.addEventListener('click',togglePlaylistPanel);DOM.playlistClose?.addEventListener('click',togglePlaylistPanel);
  DOM.sidebarToggle?.addEventListener('click',toggleSidebar);DOM.sidebarOverlay?.addEventListener('click',toggleSidebar);
  $$('.sidebar-item').forEach(i=>i.addEventListener('click',()=>setActiveView(i.dataset.view||'home')));
  DOM.heroPlayBtn?.addEventListener('click',()=>{if(state.isPlaying)pauseSong();else if(playback.currentTime>0)resumeSong();else playSong(state.currentSongIndex);});
  setupProgressBar();setupKeyboardShortcuts();
}

// ==================== INIT ====================
function init() {
  loadAllState();cacheDom();setTheme(state.theme);
  if(DOM.volumeSlider)DOM.volumeSlider.value=state.volume;updateMuteBtnUI();updateRepeatBtnUI();updateShuffleBtnUI();
  if(state.lastSongId){const i=SONGS.findIndex(s=>s.id===state.lastSongId);if(i>=0){state.currentSongIndex=i;state.currentTime=state.lastPlaybackTime||0;}}
  updateHeroSection(getCurrentSong());renderCategoryChips();renderLanguageChips();renderSongsGrid();renderAlbums();renderRecentlyPlayed();
  updateNowPlayingUI();updateProgressUI(state.currentTime,getCurrentSong().duration);
  setupEventListeners();if(state.shuffleMode)generateShuffledIndices();
  setTimeout(()=>{if(DOM.loading)DOM.loading.classList.add('hidden');},800);
  setTimeout(()=>initScrollAnimations(),1000);
  // Update footer song count
  const countEl = document.getElementById('footerSongCount');
  if(countEl) countEl.textContent = SONGS.length;
}

document.addEventListener('DOMContentLoaded', init);
