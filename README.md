# 🎵 LK Vibes — Cinematic Music Player

A premium, cinematic music player web application built with pure **HTML, CSS & JavaScript**. Features 20 songs across 5 Indian languages with stunning AI-generated cinematic poster album art, glassmorphism UI, and full playback controls.

![LK Vibes](images/cover1.jpg)

---

## ✨ Features

### 🎵 Music Player Interface
- Cinematic album cover posters
- Song title, artist, album info
- Live playing indicator with animated equalizer bars
- Dynamic background gradient synced to album art
- Fully responsive design (Desktop, Tablet, Mobile)

### ▶️ Playback Controls
- Play / Pause / Stop
- Previous & Next song
- Restart current song
- Mute / Unmute
- Repeat modes (Off → One → All)
- Shuffle mode (Fisher-Yates algorithm)
- Auto-play next song

### 🎚 Progress Bar
- Live playback time display (`1:25 / 3:42`)
- Click-to-seek anywhere on the bar
- Drag-to-seek with mouse & touch support
- Animated progress fill with shimmer effect

### 🔊 Volume Controls
- Volume slider (0-100%)
- Mute toggle button
- Keyboard volume control (↑/↓)
- Volume saved to Local Storage

### 📂 Playlist Panel
- Slide-in panel with all 20 songs
- Song image, title, artist, duration
- Click any song to play
- Highlighted currently playing song
- Animated playing indicator

### ❤️ Favorites
- Add/remove songs to favorites
- Heart icon pop animation
- Favorites view in sidebar
- Persisted in Local Storage

### 🔍 Search
- Real-time filtering by title, artist, or album
- Highlighted matching text
- Debounced for performance
- Clear button

### 📀 Albums Section
- Horizontal scrollable album cards
- Album image, name, artist, year
- Click to filter songs by album

### 🎤 Lyrics Panel
- Modal overlay with lyrics display
- Scrollable lyrics for each song
- Song cover art in header
- Toggle show/hide

### 🎼 Music Categories
- Pop, Rock, Hip-Hop, EDM, Lo-Fi
- Bollywood, Tollywood, Kollywood, Sandalwood
- Filter songs by category chip

### 🌐 Languages
- English, Hindi, Telugu, Tamil, Kannada
- Language filter chips
- Sidebar quick-access by language

### 📊 Recently Played
- Tracks last 10 played songs
- Shows time since last played
- Click to resume playback
- Persisted in Local Storage

### 🎛 Equalizer Animation
- 7 animated bars synced to playback
- Pulse animation while playing
- Pauses when music pauses

### 🎨 Theme Switcher
- Dark Mode (default) — deep blacks with neon accents
- Light Mode — clean whites with purple accents
- Saved preference in Local Storage

### ⌨️ Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `Space` | Play / Pause |
| `←` | Previous Song |
| `→` | Next Song |
| `↑` / `↓` | Volume Up / Down |
| `M` | Mute / Unmute |
| `L` | Toggle Lyrics |
| `F` | Toggle Favorite |

### 🔔 Toast Notifications
- "Now Playing: Song Name"
- "Added to Favorites ❤️"
- "Volume: 80%"
- Auto-dismiss after 3 seconds

### 💾 Local Storage Persistence
- Theme preference
- Last played song & position
- Volume level
- Favorites list
- Repeat & shuffle mode
- Recently played history

---

## 🎬 Song Library (20 Songs, 5 Languages)

| # | Title | Artist | Language | Category |
|---|-------|--------|----------|----------|
| 1 | Believer | Imagine Dragons | English | Rock |
| 2 | Blinding Lights | The Weeknd | English | Pop |
| 3 | Shape of You | Ed Sheeran | English | Pop |
| 4 | Sunflower | Post Malone & Swae Lee | English | Hip-Hop |
| 5 | Levels | Avicii | English | EDM |
| 6 | Lofi Dreams | Chillhop Music | English | Lo-Fi |
| 7 | Tum Hi Ho | Arijit Singh | Hindi | Bollywood |
| 8 | Kal Ho Naa Ho | Sonu Nigam | Hindi | Bollywood |
| 9 | Channa Mereya | Arijit Singh | Hindi | Bollywood |
| 10 | Kesariya | Arijit Singh | Hindi | Bollywood |
| 11 | Buttabomma | Armaan Malik | Telugu | Tollywood |
| 12 | Samajavaragamana | Sid Sriram | Telugu | Tollywood |
| 13 | Inkem Inkem | Sid Sriram | Telugu | Tollywood |
| 14 | Srivalli | Sid Sriram | Telugu | Tollywood |
| 15 | Why This Kolaveri Di | Dhanush | Tamil | Kollywood |
| 16 | Rowdy Baby | Dhanush & Dhee | Tamil | Kollywood |
| 17 | Vaathi Coming | Anirudh | Tamil | Kollywood |
| 18 | Bombe Helutaithe | Raghu Dixit | Kannada | Sandalwood |
| 19 | Belageddu | Armaan Malik | Kannada | Sandalwood |
| 20 | Rangitaranga | Anup Bhandari | Kannada | Sandalwood |

---

## 📁 Folder Structure

```
LKVibesmusicplayer/
├── index.html          # Main HTML structure
├── style.css           # Premium CSS with animations
├── script.js           # Full JavaScript engine
├── README.md           # Documentation
└── images/
    ├── cover1.jpg      # Believer poster
    ├── cover2.jpg      # Blinding Lights poster
    ├── ...
    └── cover20.jpg     # Rangitaranga poster
```

---

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. Click any song to start playing
4. Enjoy! 🎶

> **Note:** Audio is generated using the Web Audio API (synthesized ambient tones). No external MP3 files are required.

---

## 🛠 Technologies

- **HTML5** — Semantic structure & accessibility
- **CSS3** — Custom properties, Grid, Flexbox, animations, glassmorphism
- **JavaScript (ES6+)** — Web Audio API, DOM manipulation, LocalStorage
- **Google Fonts** — Inter & Outfit typefaces
- **AI-Generated Art** — Cinematic poster album covers

---

## 📱 Responsive Design

- **Desktop** (1200px+) — Full sidebar + main grid
- **Tablet** (768-1199px) — Compact sidebar + adjusted grid
- **Mobile** (<768px) — Off-canvas sidebar + stacked now-playing bar

---

*Built with ❤️ by LK Vibes*
