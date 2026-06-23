// ── PAF Design Guide — data.js ─────────────────────────

window.PANELS = {};

// ── HELPERS ────────────────────────────────────────────
function dims(arr) {
  return '<div class="dims">' + arr.map(function(d){ return '<span class="dim-badge">' + d + '</span>'; }).join('') + '</div>';
}

function table(rows) {
  var html = '<table class="spec-table"><thead><tr><th>Element</th><th>Specification & Limit</th></tr></thead><tbody>';
  rows.forEach(function(r) {
    html += '<tr><td>' + r[0] + '</td><td>' + r[1] + (r[2] ? '<span class="spec-note">' + r[2] + '</span>' : '') + '</td></tr>';
  });
  return html + '</tbody></table>';
}

function rule(type, icon, label, text) {
  return '<div class="rule-box ' + type + '"><span class="rule-icon">' + icon + '</span><div class="rule-content"><span class="rule-label">' + label + '</span><span class="rule-text">' + text + '</span></div></div>';
}

function tabs(prefix, items) {
  var btns = '<div class="tabs">';
  var panels = '';
  items.forEach(function(item, i) {
    btns += '<button class="tab-btn' + (i===0?' active':'') + '" data-prefix="' + prefix + '" data-tab="' + item.id + '">' + item.label + '</button>';
    panels += '<div class="tab-panel' + (i===0?' active':'') + '" id="' + prefix + '-' + item.id + '">' + item.content + '</div>';
  });
  btns += '</div>';
  return btns + panels;
}

function header(eyebrow, title, desc) {
  return '<div class="format-header"><div class="format-eyebrow">' + eyebrow + '</div><h2 class="format-title">' + title + '</h2>' + (desc ? '<p class="format-desc">' + desc + '</p>' : '') + '</div>';
}

function shead(text) {
  return '<div class="section-head">' + text + '</div>';
}

// ── HOME ────────────────────────────────────────────────
window.PANELS['home'] = header('Overview', 'Design Size Guide', 'Select any platform from the sidebar — or click a card below — to see exact dimensions, content limits, safe zones, and golden rules.') +
'<div class="home-grid">' +
[
  ['instagram','linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)','📸','Instagram','6 formats'],
  ['facebook','#1877F2','f','Facebook','5 formats'],
  ['twitter','#000','𝕏','Twitter / X','4 formats'],
  ['linkedin','#0A66C2','in','LinkedIn','5 formats'],
  ['youtube','#FF0000','▶','YouTube','4 formats'],
  ['pinterest','#E60023','P','Pinterest','3 formats'],
  ['snapchat','#FFFC00','👻','Snapchat','2 formats'],
  ['whatsapp','#25D366','💬','WhatsApp','3 formats'],
  ['threads','#000','@','Threads','2 formats'],
  ['reddit','#FF4500','R','Reddit','2 formats'],
  ['book','#B5800A','📚','Book Cover','Front, Spine, Back'],
  ['print','#555','🖨','Print Posters','A4, A3, A2, A1'],
  ['digital','#1B3A5C','🖥','Digital Banners','Web, Email, Ads'],
  ['brief','#3D6B55','📋','Design Brief','27 questions'],
  ['guidelines','#B5800A','📐','Design Guidelines','Professional standards'],
].map(function(c){
  return '<div class="home-card" data-target="'+c[0]+'">' +
    '<div class="home-icon" style="background:'+c[1]+'">'+c[2]+'</div>' +
    '<div><span class="home-name">'+c[3]+'</span><span class="home-count">'+c[4]+'</span></div>' +
    '</div>';
}).join('') + '</div>';

// ── INSTAGRAM ───────────────────────────────────────────
window.PANELS['instagram'] = header('Instagram', 'Instagram Formats', '') +
tabs('ig', [
  { label: 'Post 1:1', id: 'sq', content:
    dims(['1080 × 1080 px','1:1 Square','72 dpi','RGB','Max 30 MB']) +
    table([
      ['Headline','Max 5–7 words','Font size guide: 60–80px on canvas'],
      ['Subheading','Max 10–12 words','Font size: 30–40px'],
      ['Body Text','Max 20–25 words','Font size: 18–24px'],
      ['CTA','Max 3–5 words'],
      ['Text Area','Max 30% of total image area'],
      ['Safe Zone','Keep all elements 80px from all edges'],
      ['File Format','JPG or PNG'],
    ]) +
    rule('navy','⚡','Golden Rule','If it cannot be read in 3 seconds while scrolling — cut it. One clear message wins every time.')
  },
  { label: 'Post 4:5', id: 'pt', content:
    dims(['1080 × 1350 px','4:5 Portrait','72 dpi','RGB']) +
    table([
      ['Headline','Max 6–8 words','Font size: 65–85px'],
      ['Subheading','Max 12–15 words','Font size: 32–42px'],
      ['Body Text','Max 25–30 words','Font size: 20–26px'],
      ['Text Area','Max 35% of total image area'],
      ['Safe Zone','80px from all edges'],
      ['Advantage','35% more vertical space than 1:1'],
    ]) +
    rule('sage','💡','Note','4:5 occupies more screen space in feed. Instagram slightly favours portrait format for organic reach.')
  },
  { label: 'Carousel', id: 'cr', content:
    dims(['1080 × 1080 px per slide','1:1','72 dpi','Max 10 slides']) +
    table([
      ['Slide 1 (Hook)','Max 5–7 words only','This is your scroll-stopper. Max 2 elements on slide 1.'],
      ['Slides 2–9','Max 30–40 words per slide','One idea per slide. Never split one thought across two slides.'],
      ['Last Slide','Max 10 words + handle/logo','Always include a clear next step.'],
      ['Total Slides','4–10 recommended','Under 4 slides: use a static post instead.'],
      ['Continuity','Leave 80px visible on right edge','Teaser to next slide — encourages swipes.'],
    ]) +
    rule('navy','📐','Rule','One slide = one idea. Slide 1 must create a curiosity gap that pulls them in.')
  },
  { label: 'Story', id: 'st', content:
    dims(['1080 × 1920 px','9:16 Vertical','72 dpi','Max 30 MB']) +
    table([
      ['Headline','Max 4–6 words','Font: 70–90px'],
      ['Body Text','Max 15 words maximum'],
      ['Top Safe Zone','Avoid top 250px','Profile icon and username overlay here'],
      ['Bottom Safe Zone','Avoid bottom 250px','Reply bar and link area'],
      ['Active Zone','1080 × 1420 px centre band','All critical content must live here'],
    ]) +
    rule('red','⚠️','Critical','Stories are consumed in under 3 seconds. Design for instant understanding — no reading required.')
  },
  { label: 'Reel Cover', id: 're', content:
    dims(['1080 × 1920 px','9:16','72 dpi','Cover thumbnail']) +
    table([
      ['Full Canvas','1080 × 1920 px'],
      ['Feed Preview','1080 × 1350 px centred','This is what shows in profile grid'],
      ['Title Text','Max 5 words','Must be legible at small thumbnail size'],
      ['Safe Zone','Keep text within central 900 × 1200 px'],
      ['File Format','JPG or PNG for cover · MP4 for video'],
    ]) +
    rule('sage','💡','Note','Reel covers appear in profile grid cropped to 1:1. Design so the central square still works when top/bottom are cropped.')
  },
  { label: 'Profile Pic', id: 'pp', content:
    dims(['320 × 320 px (upload)','Displays at 110 × 110 px','Circular crop']) +
    table([
      ['Upload Size','Min 320 × 320 px','Recommend 1000 × 1000 px for future-proofing'],
      ['Display Size','110 × 110 px mobile · 180 × 180 px desktop'],
      ['Crop','Circular — keep all elements within central 80% of canvas'],
      ['Text','Avoid text — too small to read at display size'],
    ]) +
    rule('amber','⚡','Rule','Must be recognisable at 40px — the size it appears in comments and DMs.')
  },
]);

// ── FACEBOOK ────────────────────────────────────────────
window.PANELS['facebook'] = header('Facebook', 'Facebook Formats', '') +
tabs('fb', [
  { label: 'Feed Post', id: 'post', content:
    dims(['1200 × 630 px','1.91:1 Landscape','72 dpi']) +
    table([
      ['Recommended','1200 × 630 px or 1080 × 1080 px (square)'],
      ['Headline','Max 5–7 words','Font: 55–75px'],
      ['Subheading','Max 10–15 words'],
      ['Body Text','Max 20–25 words'],
      ['Text in Image','Keep under 20% of image area','More text = reduced organic reach'],
      ['Safe Zone','80px from all edges'],
    ]) +
    rule('navy','⚡','Note','Facebook reduces reach of images with over 20% text. Keep text minimal in the image — use the post caption for detail.')
  },
  { label: 'Page Cover', id: 'cover', content:
    dims(['820 × 312 px','Desktop · 640 × 360 px Mobile','72 dpi']) +
    table([
      ['Canvas Size','820 × 312 px recommended'],
      ['Mobile Safe Zone','Central 640 × 312 px — sides cropped on mobile'],
      ['Bottom Safe Zone','Avoid bottom 100px','Overlapped by profile pic on mobile'],
      ['Text Safe Zone','Keep critical text in central 500 × 200 px'],
    ]) +
    rule('red','⚠️','Critical','Cover displays differently on desktop vs mobile. Always test both views before publishing.')
  },
  { label: 'Story', id: 'story', content:
    dims(['1080 × 1920 px','9:16','72 dpi']) +
    table([
      ['Canvas','1080 × 1920 px'],
      ['Top Safe Zone','Avoid top 250px'],
      ['Bottom Safe Zone','Avoid bottom 250px'],
      ['Text','Max 15 words · Centred in active zone'],
    ])
  },
  { label: 'Event Cover', id: 'event', content:
    dims(['1200 × 628 px','~1.9:1','72 dpi']) +
    table([
      ['Canvas','1200 × 628 px'],
      ['Event Name','Max 6 words · Dominant element'],
      ['Date & Time','Required — include clearly'],
      ['Location','Short and readable if physical event'],
      ['Organiser Logo','Corner placement · Max 15% of canvas'],
    ]) +
    rule('sage','💡','Note','Event cover must communicate What, When, Where in under 5 seconds. These are the three non-negotiables.')
  },
  { label: 'Profile Pic', id: 'pp', content:
    dims(['180 × 180 px (upload)','Circular crop']) +
    table([
      ['Upload Size','Min 180 × 180 px · Recommend 800 × 800 px'],
      ['Display','170 × 170 px desktop · 128 × 128 px mobile'],
      ['Crop','Circular · Keep elements within central 80%'],
    ])
  },
]);

// ── TWITTER / X ─────────────────────────────────────────
window.PANELS['twitter'] = header('Twitter / X', 'Twitter / X Formats', '') +
tabs('tw', [
  { label: 'Post Image', id: 'post', content:
    dims(['1600 × 900 px','16:9 or 1:1','72 dpi']) +
    table([
      ['Recommended','1600 × 900 px (16:9) or 1080 × 1080 px (1:1)'],
      ['Minimum','600 × 335 px'],
      ['Headline','Max 5–7 words','Must work without post text'],
      ['Multiple Images','Up to 4 per post — sizes auto-adjusted'],
      ['File Format','JPG, PNG, GIF · Max 5 MB (JPG/PNG)'],
    ]) +
    rule('navy','⚡','Note','X/Twitter crops 16:9 images in feed to show a 2:1 preview. Keep critical content in the centre third.')
  },
  { label: 'Header Banner', id: 'header', content:
    dims(['1500 × 500 px','3:1 Landscape','72 dpi']) +
    table([
      ['Canvas','1500 × 500 px'],
      ['Profile Pic Overlap','Avoid bottom-left 200 × 200 px area'],
      ['Mobile Crop','Sides may be cropped — keep critical content centred'],
      ['Text Safe Zone','Within central 900 × 400 px'],
    ])
  },
  { label: 'Summary Card', id: 'card', content:
    dims(['1200 × 628 px','Twitter Summary Card']) +
    table([
      ['Canvas','1200 × 628 px'],
      ['Headline','Max 6 words · Auto-truncated by platform'],
      ['Description','Max 200 characters in meta description'],
      ['Use','og:image meta tag for link previews'],
    ])
  },
  { label: 'Profile Pic', id: 'pp', content:
    dims(['400 × 400 px','Circular crop']) +
    table([
      ['Upload','Min 400 × 400 px · Max 2 MB'],
      ['Display','48 × 48 px in feed · Circular crop'],
      ['Text','Avoid — illegible at small sizes'],
    ])
  },
]);

// ── LINKEDIN ────────────────────────────────────────────
window.PANELS['linkedin'] = header('LinkedIn', 'LinkedIn Formats', '') +
tabs('li', [
  { label: 'Post Image', id: 'post', content:
    dims(['1200 × 627 px','~1.91:1','72 dpi']) +
    table([
      ['Recommended','1200 × 627 px or 1080 × 1080 px (square)'],
      ['Headline','Max 6–8 words · Professional tone'],
      ['Brand','Logo required · Top or bottom corner'],
      ['Carousel','Up to 9 pages · PDF upload · 1080 × 1080 px per page'],
    ]) +
    rule('navy','💼','LinkedIn Context','Design must look credible and polished. LinkedIn audience is professional — avoid overly playful or casual design.')
  },
  { label: 'Article Cover', id: 'article', content:
    dims(['1920 × 1080 px','16:9','72 dpi']) +
    table([
      ['Canvas','1920 × 1080 px'],
      ['Title Overlay','LinkedIn shows article title over image'],
      ['Key Zone','Upper 60% of image — keep clear for title overlay'],
    ])
  },
  { label: 'Profile Banner', id: 'banner', content:
    dims(['1584 × 396 px','4:1','72 dpi']) +
    table([
      ['Canvas','1584 × 396 px'],
      ['Profile Pic Overlap','Avoid bottom-left 200px zone'],
      ['Text','Keep within central 900 × 300 px'],
    ])
  },
  { label: 'Company Banner', id: 'company', content:
    dims(['1128 × 191 px','~5.9:1','72 dpi']) +
    table([
      ['Canvas','1128 × 191 px'],
      ['Logo Overlap','Avoid left 200px — company logo placed there'],
      ['Text','Tagline max 6 words'],
    ])
  },
  { label: 'Profile Pic', id: 'pp', content:
    dims(['400 × 400 px','Circular crop']) +
    table([
      ['Upload','Min 400 × 400 px · Max 8 MB'],
      ['Display','Circular at 200 × 200 px'],
    ])
  },
]);

// ── YOUTUBE ─────────────────────────────────────────────
window.PANELS['youtube'] = header('YouTube', 'YouTube Formats', '') +
tabs('yt', [
  { label: 'Thumbnail', id: 'thumb', content:
    dims(['1280 × 720 px','16:9','72 dpi','Max 2 MB']) +
    table([
      ['Canvas','1280 × 720 px min · 1920 × 1080 px recommended'],
      ['Title Text','Max 4–6 words · Large, high contrast'],
      ['Font Size','Min 60px on 1280px canvas'],
      ['Thumbnail Test','Must be readable at 168 × 94 px (search result size)','Non-negotiable'],
      ['File Format','JPG, PNG, GIF, BMP · Max 2 MB'],
    ]) +
    rule('red','⚠️','Critical','Test at 168×94px — mobile search size. If text is illegible or image unclear at that size, redesign entirely.')
  },
  { label: 'Channel Banner', id: 'banner', content:
    dims(['2560 × 1440 px','Multiple device views']) +
    table([
      ['Upload Canvas','2560 × 1440 px'],
      ['TV Display','Full 2560 × 1440 px shown'],
      ['Desktop Display','2560 × 423 px (top strip)'],
      ['Mobile Display','1546 × 423 px (central band)'],
      ['Safe Zone','1546 × 423 px — visible on ALL devices','Critical content must stay within this zone'],
    ]) +
    rule('amber','⚡','Safe Zone Rule','Everything important must sit within the 1546×423 safe zone. Outside that area is invisible on mobile.')
  },
  { label: 'Shorts Cover', id: 'shorts', content:
    dims(['1080 × 1920 px','9:16 Vertical']) +
    table([
      ['Canvas','1080 × 1920 px'],
      ['Shorts Shelf','Shows as 1:1 crop in Shorts shelf — design for both'],
      ['Title Area','Avoid top 200px and bottom 400px — UI overlay zones'],
      ['Text','Max 5 words · High contrast · Centre-weighted'],
    ])
  },
  { label: 'Profile Pic', id: 'pp', content:
    dims(['800 × 800 px','Circular crop']) +
    table([
      ['Upload','Min 98 × 98 px · Recommend 800 × 800 px'],
      ['Display','Circular · 88 × 88 px on channel page'],
      ['Safe Zone','Keep all elements within central 70% of canvas'],
    ])
  },
]);

// ── PINTEREST ───────────────────────────────────────────
window.PANELS['pinterest'] = header('Pinterest', 'Pinterest Formats', '') +
tabs('pi', [
  { label: 'Standard Pin', id: 'std', content:
    dims(['1000 × 1500 px','2:3 Portrait','72 dpi']) +
    table([
      ['Recommended','1000 × 1500 px (2:3 ratio)'],
      ['Minimum','600 × 900 px'],
      ['Max Ratio','1:2.1 — taller pins get cut off in feed'],
      ['Headline','Max 6–8 words · Overlay on image'],
      ['Text Overlay','Max 40% of image area'],
      ['Logo','Bottom corner · Small · Required for brand pins'],
      ['File Format','JPG or PNG · Max 20 MB'],
    ]) +
    rule('navy','💡','Pinterest Context','Pinterest is a visual search engine. Pins with clear, readable text overlays and vertical orientation perform significantly better.')
  },
  { label: 'Infographic Pin', id: 'info', content:
    dims(['1000 × 2100 px max','1:2.1 max ratio','72 dpi']) +
    table([
      ['Canvas','1000 × 2100 px max (platform limit)'],
      ['Use','Step-by-step guides, lists, comparison charts'],
      ['Sections','3–7 clear sections · Vertical flow top to bottom'],
      ['Body Text','Min 20px on canvas · Must be readable in-app'],
    ])
  },
  { label: 'Profile Pic', id: 'pp', content:
    dims(['165 × 165 px display','Circular crop']) +
    table([
      ['Upload','Min 165 × 165 px · Recommend 800 × 800 px'],
      ['Crop','Circular · Keep elements within 80% of canvas'],
    ])
  },
]);

// ── SNAPCHAT ────────────────────────────────────────────
window.PANELS['snapchat'] = header('Snapchat', 'Snapchat Formats', '') +
tabs('sc', [
  { label: 'Snap / Story', id: 'snap', content:
    dims(['1080 × 1920 px','9:16 Vertical','72 dpi']) +
    table([
      ['Canvas','1080 × 1920 px'],
      ['Top Safe Zone','Avoid top 200px — UI overlay'],
      ['Bottom Safe Zone','Avoid bottom 350px — reply bar and actions'],
      ['Active Zone','1080 × 1370 px centre band'],
      ['Text','Max 10 words · High contrast'],
      ['File Format','JPG or PNG · Max 5 MB'],
    ]) +
    rule('sage','💡','Snapchat Context','Snapchat audience is young and expects casual, authentic content. Conversational and spontaneous-looking visuals work better than polished corporate design.')
  },
  { label: 'Discover / Ad', id: 'discover', content:
    dims(['1080 × 1920 px','Discover / Ad']) +
    table([
      ['Canvas','1080 × 1920 px'],
      ['Logo','Required · Top left · Max 100 × 100 px'],
      ['Headline','Max 34 characters'],
      ['Brand Name','Max 25 characters'],
      ['Call to Action','Max 25 characters'],
    ])
  },
]);

// ── WHATSAPP ────────────────────────────────────────────
window.PANELS['whatsapp'] = header('WhatsApp', 'WhatsApp Formats', '') +
tabs('wa', [
  { label: 'Shared Image', id: 'img', content:
    dims(['1080 × 1080 px recommended','1:1 or 4:5']) +
    table([
      ['Recommended','1080 × 1080 px or 800 × 800 px'],
      ['Max File Size','16 MB · WhatsApp compresses — use high quality originals'],
      ['Headline','Max 5–7 words · Self-explanatory without caption'],
      ['Body Text','Max 20 words in image'],
      ['Logo','Small corner placement · Do not watermark over content'],
      ['Contact Info','Max 1–2 lines · Phone or website · Required for forward-able content'],
    ]) +
    rule('red','⚠️','Critical','WhatsApp images are forwarded without the original caption. The image must explain itself completely. Include event name, date, and contact — all within the image.')
  },
  { label: 'Status', id: 'status', content:
    dims(['1080 × 1920 px','9:16 Vertical']) +
    table([
      ['Canvas','1080 × 1920 px'],
      ['Duration','Image status: 7 seconds displayed'],
      ['Safe Zones','Avoid top 150px and bottom 250px — UI bars'],
      ['Text','Max 10–12 words · Large and readable'],
    ])
  },
  { label: 'Profile Pic', id: 'pp', content:
    dims(['500 × 500 px','Circular crop']) +
    table([
      ['Upload','Any size · Recommend 800 × 800 px'],
      ['Display','Circular · ~54 × 54 px in chat list'],
      ['Logo','Must be recognisable at 54px · No text'],
    ])
  },
]);

// ── THREADS ─────────────────────────────────────────────
window.PANELS['threads'] = header('Threads', 'Threads Formats', '') +
tabs('th', [
  { label: 'Post Image', id: 'post', content:
    dims(['1080 × 1080 px or 1080 × 1350 px','1:1 or 4:5']) +
    table([
      ['Square','1080 × 1080 px (1:1)'],
      ['Portrait','1080 × 1350 px (4:5)'],
      ['Max per post','Up to 10 images'],
      ['Max File Size','8 MB per image'],
      ['Headline','Max 5–7 words'],
    ]) +
    rule('sage','💡','Threads Context','Threads is conversation-first. Images support the text — they rarely stand alone. Design to complement what you write, not replace it.')
  },
  { label: 'Profile Pic', id: 'pp', content:
    dims(['Shared with Instagram','Circular crop']) +
    table([
      ['Source','Threads uses the same profile picture as Instagram'],
      ['Change','Update through Instagram settings'],
      ['Size','See Instagram Profile Pic specs'],
    ])
  },
]);

// ── REDDIT ──────────────────────────────────────────────
window.PANELS['reddit'] = header('Reddit', 'Reddit Formats', '') +
tabs('rd', [
  { label: 'Post Image', id: 'post', content:
    dims(['1200 × 628 px or 1080 × 1080 px','Flexible']) +
    table([
      ['Recommended','1200 × 628 px (landscape) or 1080 × 1080 px (square)'],
      ['Max File Size','20 MB for images'],
      ['Text in Image','Minimal — Reddit values content over promotion'],
      ['Infographics','Perform well in niche subreddits — ensure text is readable'],
    ]) +
    rule('amber','⚡','Reddit Context','Reddit communities are sceptical of promotional content. Design should provide genuine value — infographics, data, educational content. Overtly branded content often receives negative engagement.')
  },
  { label: 'Community Banner', id: 'banner', content:
    dims(['1920 × 384 px','5:1 Landscape']) +
    table([
      ['Canvas','1920 × 384 px'],
      ['Display','Cropped to 1920 × 128 px on community page'],
      ['Mobile','Further cropped — keep critical content centred'],
      ['Text','Minimal — community name already shown by platform'],
    ])
  },
]);

// ── BOOK COVER ──────────────────────────────────────────
window.PANELS['book'] = header('Book Cover', 'Book Cover Formats', 'Print requires 300 dpi minimum. Always include 3mm bleed on all sides.') +
tabs('bk', [
  { label: 'Front Cover', id: 'front', content:
    dims(['Variable by publisher','300 dpi','CMYK for print · RGB for digital']) +
    table([
      ['Title','Max 1–5 words · Dominant visual hierarchy','Must be legible at 150×230px thumbnail'],
      ['Subtitle','Max 8–12 words · Smaller than title'],
      ['Author Name','Required · Verify exact spelling with publisher'],
      ['Tagline','Max 10–12 words · Optional'],
      ['Bleed','3mm bleed on all sides'],
      ['Safe Zone','Keep all text 8mm from trim edge'],
      ['Thumbnail Test','Must be readable at 150 × 230 px','Non-negotiable for online retail'],
    ]) +
    rule('red','⚠️','Critical','Book cover title must be readable as a small thumbnail — the size it appears on Amazon and Flipkart. If illegible at 150×230px, typography must be revised.')
  },
  { label: 'Spine', id: 'spine', content:
    dims(['Width = page count × paper weight','300 dpi','CMYK']) +
    table([
      ['Minimum Width','6mm minimum for any text'],
      ['Content','Title + Author Name + Publisher Logo only'],
      ['Orientation','Text runs bottom to top (standard for English books)'],
      ['Font Size','Min 7pt at print dimensions'],
      ['Publisher Logo','Bottom of spine · Small · Required'],
    ]) +
    rule('amber','⚡','Note','Confirm page count and paper weight with the printer before designing. Books under 100 pages may have insufficient spine width for any text.')
  },
  { label: 'Back Cover', id: 'back', content:
    dims(['Same height as front','300 dpi','CMYK']) +
    table([
      ['Hook Headline','Max 10–15 words · Must compel reader to open the book'],
      ['Description','Max 100–150 words · 3–4 paragraphs · Min 9pt print'],
      ['Author Bio','Max 50 words · Third person · Below description'],
      ['Endorsements','Max 2–3 quotes · Max 25 words each · Name and title required'],
      ['Barcode','Bottom right · 35 × 25 mm min · Do not overlap text'],
      ['ISBN','Above barcode · Verify number before print'],
      ['Price','Above barcode · Confirm with publisher'],
    ]) +
    rule('navy','📖','Back Cover Rule','The back cover must answer: Why should I buy this book? The hook headline is the most important element.')
  },
]);

// ── PRINT POSTERS ───────────────────────────────────────
window.PANELS['print'] = header('Print Posters', 'Print Poster Formats', 'All print formats require 300 dpi minimum and CMYK colour mode.') +
tabs('pr', [
  { label: 'A4', id: 'a4', content:
    dims(['210 × 297 mm','300 dpi','CMYK','3mm bleed']) +
    table([
      ['Headline','Max 6–8 words · Font: 36–60pt'],
      ['Subheading','Max 15 words · Font: 18–24pt'],
      ['Body Text','Max 50–60 words · Font: 10–12pt'],
      ['Safe Zone','10mm from all trim edges'],
      ['Bleed','3mm on all sides'],
    ]) +
    rule('navy','🖨','Print Rule','A poster is read from distance first. Headline must work from 2 metres. Body text is for close reading — keep it short.')
  },
  { label: 'A3', id: 'a3', content:
    dims(['297 × 420 mm','300 dpi','CMYK','3mm bleed']) +
    table([
      ['Headline','Max 8–10 words · Font: 48–72pt'],
      ['Subheading','Max 20 words · Font: 22–30pt'],
      ['Body Text','Max 80–100 words · Font: 11–14pt'],
      ['Safe Zone','12mm from all trim edges'],
      ['Bleed','3mm on all sides'],
    ])
  },
  { label: 'A2', id: 'a2', content:
    dims(['420 × 594 mm','300 dpi','CMYK','5mm bleed']) +
    table([
      ['Headline','Max 8–10 words · Font: 72–120pt'],
      ['Subheading','Max 20 words · Font: 30–42pt'],
      ['Body Text','Max 100–150 words · Font: 12–16pt'],
      ['Safe Zone','15mm from all trim edges'],
      ['Bleed','5mm on all sides'],
      ['Viewing Distance','3–5 metres'],
    ])
  },
  { label: 'A1', id: 'a1', content:
    dims(['594 × 841 mm','150–300 dpi','CMYK','5mm bleed']) +
    table([
      ['Headline','Max 6–8 words · Font: 120–200pt'],
      ['Subheading','Max 15 words · Font: 48–72pt'],
      ['Body Text','Minimal — A1 is for impact, not information'],
      ['Safe Zone','20mm from all trim edges'],
      ['Bleed','5mm on all sides'],
      ['Resolution','150 dpi acceptable at A1 — 300 dpi files are very large'],
      ['Viewing Distance','5+ metres'],
    ]) +
    rule('sage','💡','A1 Principle','At A1 size, people see the design before they read it. Three elements maximum: headline, visual, logo.')
  },
]);

// ── DIGITAL BANNERS ─────────────────────────────────────
window.PANELS['digital'] = header('Digital Banners', 'Digital Banner Formats', 'All digital formats use RGB colour mode. No bleed required.') +
tabs('db', [
  { label: 'Website Hero', id: 'hero', content:
    dims(['1920 × 1080 px','16:9','72 dpi','RGB']) +
    table([
      ['Headline','Max 6–8 words · Font: 60–90px'],
      ['Subheading','Max 12–15 words · Font: 28–40px'],
      ['CTA Button','Max 4–5 words · Min 44px height for touch targets'],
      ['Text Area','Max 50% of banner'],
      ['Content Safe Zone','Keep content in central 1280px'],
      ['Colour Mode','RGB — not CMYK'],
    ]) +
    rule('sage','💡','Note','Website heroes are seen for under 2 seconds before scroll. Headline and CTA are the only two things that matter.')
  },
  { label: 'Email Header', id: 'email', content:
    dims(['600 × 200 px','3:1','72 dpi','RGB']) +
    table([
      ['Canvas','600 × 200 px standard'],
      ['Headline','Max 5–7 words'],
      ['Logo','Required · Left-aligned or centred · Max 150px height'],
      ['Image Blocking','Many email clients block images by default','Critical info must also appear in email body text'],
    ]) +
    rule('red','⚠️','Critical','Never put essential information only inside an email header image. Outlook and many clients block images by default.')
  },
  { label: 'Leaderboard Ad', id: 'leader', content:
    dims(['728 × 90 px','Standard Leaderboard','72 dpi']) +
    table([
      ['Canvas','728 × 90 px'],
      ['Logo','Left side · Max 80px height'],
      ['Message','Max 5–6 words · Right of logo'],
      ['CTA','Max 3 words · Right edge button'],
      ['File Size','Max 150 KB for Google Display Network'],
    ])
  },
  { label: 'Half Page Ad', id: 'half', content:
    dims(['300 × 600 px','Half Page Display','72 dpi']) +
    table([
      ['Canvas','300 × 600 px'],
      ['Headline','Max 5 words · Large · Top third'],
      ['Visual','Centre · Primary emotional driver'],
      ['CTA','Bottom third · Max 4 words · High contrast button'],
      ['File Size','Max 150 KB for Google Display Network'],
    ])
  },
]);

// ── DESIGN BRIEF ────────────────────────────────────────
function briefCat(num, title, qs) {
  var html = '<div class="brief-section"><button class="brief-cat open" type="button">' + num + ' · ' + title + ' <em class="arrow">▾</em></button>';
  html += '<div class="brief-questions open">';
  qs.forEach(function(q, i) {
    html += '<div class="brief-q"><div class="brief-q-num">0' + (i + parseInt(num)) + '</div><div><div class="brief-q-text">' + q[0] + '</div><div class="brief-q-hint">' + q[1] + '</div></div></div>';
  });
  html += '</div></div>';
  return html;
}

window.PANELS['brief'] = header('Design Brief', 'Project Design Brief', 'Complete all sections before submitting to the designer. A thorough brief reduces revision rounds.') +
briefCat('01', 'Purpose & Goal', [
  ['What is this design for?', 'e.g. Book launch poster, event banner, Instagram carousel, social media campaign'],
  ['What is the single most important message?', 'If the audience reads only one thing — what should it be?'],
  ['What action should the viewer take after seeing this?', 'e.g. Buy, register, share, visit website, attend event'],
  ['How will success be measured?', 'e.g. Event registrations, website clicks, shares, inquiries'],
]) +
briefCat('05', 'Target Audience', [
  ['Who is the primary audience?', 'Age range, profession, interest area, reading background'],
  ['What does the audience already know about this topic?', 'Complete novice / somewhat familiar / well-informed'],
  ['What is the audience\'s main motivation or pain point?', 'Why would they care about this book or event?'],
]) +
briefCat('08', 'Content & Text', [
  ['Headline — exact text:', 'Write exactly as it should appear. The designer will not guess or rephrase.'],
  ['Subheading — exact text:', 'Optional. Keep to 10–12 words maximum.'],
  ['Body text or description — exact text:', 'Only if required. Word count must respect format limits (see Size Guide).'],
  ['Call-to-action (CTA) — exact text:', 'e.g. "Register Now", "Available on Amazon", "Free Download"'],
  ['Mandatory elements to include:', 'e.g. PAF logo, author photo, ISBN, website URL, social handles, QR code, date, venue'],
  ['Language:', 'English / Hindi / Bilingual — if bilingual, specify which text appears in which language'],
  ['Book title, subtitle, or tagline (if applicable):', 'Provide exact spelling and capitalisation as it appears on the book.'],
]) +
briefCat('15', 'Visual Style', [
  ['Brand colours to use:', 'Provide HEX codes if possible. e.g. #1B3A5C Navy, #C0392B Red'],
  ['Brand fonts:', 'If known. Otherwise describe the tone: classic serif / modern sans / handwritten'],
  ['Tone this design should convey:', 'Circle all that apply: Serious · Spiritual · Inspiring · Bold · Minimal · Warm · Urgent · Celebratory'],
  ['Reference designs or visual inspiration:', 'Share links, screenshots, or describe the look and feel clearly.'],
  ['Elements or styles to avoid:', 'e.g. No dark backgrounds, no decorative fonts, no stock photography'],
  ['Is there a specific photo or image to include?', 'If yes — provide the file or confirm it will be shared separately.'],
]) +
briefCat('21', 'Technical & Timeline', [
  ['Final output — Digital / Print / Both?', 'Digital uses RGB. Print uses CMYK. Both means two separate files.'],
  ['Which format(s) are needed?', 'Select all that apply — see the Size Guide sections on the left'],
  ['Required file types on delivery:', 'e.g. JPG (social), PDF (print), PNG (transparent), PSD/AI (editable source)'],
  ['Deadline for first draft:', 'Allow minimum 48 hours for a single design, 5 working days for complex work.'],
  ['Deadline for final delivery:', ''],
  ['How many revision rounds are allowed?', 'Standard: 2 rounds included.'],
  ['Any other notes or special requirements?', 'Print vendor requirements, file size limits, accessibility needs, etc.'],
]) +
'<br>' +
rule('navy','📋','Designer\'s Note','A complete brief saves everyone time. The more thoroughly this form is filled, the fewer revision rounds will be needed. When in doubt — over-specify.') +
rule('red','⚠️','Content Team Reminder','Submit exact text. Do not write "something like..." or "you can decide." The designer works with what is provided. Vague briefs produce vague designs.');

// ── DESIGN GUIDELINES ───────────────────────────────────
window.PANELS['guidelines'] = header('Design Guidelines', 'Professional Design Standards', 'Industry-standard rules for logo usage, typography, spacing, colour contrast, and layout composition.') +
tabs('gl', [
  { label: 'Logo Standards', id: 'logo', content:
    shead('Logo Size Rules') +
    table([
      ['Digital Minimum','24px height','Below this size, logo detail is lost and becomes illegible'],
      ['Print Minimum','10mm height','For high-resolution print. Below 10mm — use icon-only version'],
      ['Clear Space','Equal to cap-height of the logo on all sides','This is the minimum breathing space — never place other elements closer'],
      ['Min Clear Space','16px digital · 6mm print','Hard minimum — cannot be reduced under any circumstance'],
      ['Recommended Clear Space','Equal to full logo height on all sides','Ideal rule — use whenever space allows'],
    ]) +
    shead('Logo Versions') +
    '<div class="gl-grid">' +
    '<div class="gl-card"><div class="gl-card-label">Primary Logo</div><div class="gl-card-value">Full</div><div class="gl-card-desc">Wordmark + icon. Use whenever space allows. Preferred version for all brand communications.</div></div>' +
    '<div class="gl-card"><div class="gl-card-label">Secondary Logo</div><div class="gl-card-value">Horizontal</div><div class="gl-card-desc">For wide, narrow spaces. Header banners, email signatures, website nav.</div></div>' +
    '<div class="gl-card"><div class="gl-card-label">Icon Only</div><div class="gl-card-value">Mark</div><div class="gl-card-desc">App icons, favicons, social profile pictures, small spaces under 40px.</div></div>' +
    '<div class="gl-card"><div class="gl-card-label">Monochrome</div><div class="gl-card-value">Single colour</div><div class="gl-card-desc">When printing single colour, embossing, or using on photographic backgrounds.</div></div>' +
    '</div>' +
    shead('Correct Logo Usage') +
    '<div class="do-dont-grid">' +
    '<div class="do-box"><span class="do-label">✅ Do</span>' +
    '<div class="do-dont-item">✓ Use on white or light neutral backgrounds</div>' +
    '<div class="do-dont-item">✓ Maintain minimum clear space at all times</div>' +
    '<div class="do-dont-item">✓ Use approved colour versions only</div>' +
    '<div class="do-dont-item">✓ Scale proportionally — lock aspect ratio</div>' +
    '<div class="do-dont-item">✓ Use monochrome version on dark photography</div>' +
    '</div>' +
    '<div class="dont-box"><span class="dont-label">❌ Don\'t</span>' +
    '<div class="do-dont-item">✗ Stretch or distort the logo</div>' +
    '<div class="do-dont-item">✗ Rotate or tilt the logo</div>' +
    '<div class="do-dont-item">✗ Apply drop shadows or effects</div>' +
    '<div class="do-dont-item">✗ Change the logo colours</div>' +
    '<div class="do-dont-item">✗ Place on busy backgrounds without contrast</div>' +
    '<div class="do-dont-item">✗ Use below minimum size</div>' +
    '</div></div>'
  },
  { label: 'Typography', id: 'type', content:
    shead('Type Scale — 8pt Base Grid') +
    '<div style="background:var(--surface);border:1px solid var(--border);padding:1rem;margin-bottom:1.25rem">' +
    '<div class="type-row"><div class="type-meta"><span class="type-meta-size">64px / 48pt</span><span class="type-meta-name">Display</span></div><div class="type-sample" style="font-size:clamp(1.6rem,4vw,2.2rem);font-family:\'Playfair Display\',serif;font-weight:700;line-height:1.1">Display Heading</div></div>' +
    '<div class="type-row"><div class="type-meta"><span class="type-meta-size">40px / 30pt</span><span class="type-meta-name">H1</span></div><div class="type-sample" style="font-size:clamp(1.3rem,3vw,1.8rem);font-weight:700;line-height:1.2">Heading Level One</div></div>' +
    '<div class="type-row"><div class="type-meta"><span class="type-meta-size">28px / 21pt</span><span class="type-meta-name">H2</span></div><div class="type-sample" style="font-size:clamp(1.1rem,2.5vw,1.4rem);font-weight:600;line-height:1.3">Heading Level Two</div></div>' +
    '<div class="type-row"><div class="type-meta"><span class="type-meta-size">22px / 16pt</span><span class="type-meta-name">H3</span></div><div class="type-sample" style="font-size:1.1rem;font-weight:600;line-height:1.4">Heading Level Three</div></div>' +
    '<div class="type-row"><div class="type-meta"><span class="type-meta-size">18px / 14pt</span><span class="type-meta-name">Body Large</span></div><div class="type-sample" style="font-size:1rem;line-height:1.65">Body large — lead paragraphs, introductions, pull quotes.</div></div>' +
    '<div class="type-row"><div class="type-meta"><span class="type-meta-size">16px / 12pt</span><span class="type-meta-name">Body</span></div><div class="type-sample" style="font-size:.94rem;line-height:1.65">Body text — standard paragraph text for all body copy, descriptions, and general content.</div></div>' +
    '<div class="type-row"><div class="type-meta"><span class="type-meta-size">14px / 10pt</span><span class="type-meta-name">Body Small</span></div><div class="type-sample" style="font-size:.82rem;line-height:1.55">Small body — captions, secondary descriptions, footnotes, image credits.</div></div>' +
    '<div class="type-row"><div class="type-meta"><span class="type-meta-size">12px / 9pt</span><span class="type-meta-name">Label</span></div><div class="type-sample" style="font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase">LABEL · TAG · METADATA</div></div>' +
    '<div class="type-row"><div class="type-meta"><span class="type-meta-size">10px / 8pt</span><span class="type-meta-name">Micro</span></div><div class="type-sample" style="font-size:.68rem;color:var(--muted)">Legal, disclaimers, footnotes only. Never use for readable content.</div></div>' +
    '</div>' +
    shead('Typography Rules') +
    table([
      ['Line Height — Body','1.5 to 1.65','Tighter = harder to read. Looser = loses cohesion.'],
      ['Line Height — Display','1.1 to 1.2','Tighter for large text — open spacing looks unconnected'],
      ['Letter Spacing — Body','0 to 0.02em','Natural spacing — do not increase for body text'],
      ['Letter Spacing — Labels','0.08 to 0.15em','Uppercase labels need increased tracking for readability'],
      ['Max Line Length','65–75 characters per line','Longer lines reduce readability significantly'],
      ['Minimum Print Size','8pt for body · 6pt absolute minimum','Below 8pt, most readers struggle'],
      ['Minimum Digital Size','12px for body · 10px absolute minimum','Below 10px fails accessibility standards'],
    ])
  },
  { label: 'Spacing System', id: 'spacing', content:
    shead('8px Grid System') +
    '<p style="font-size:.85rem;color:var(--muted);margin-bottom:1.25rem;line-height:1.65">All spacing values must be multiples of 8px. This creates visual rhythm and consistency across all designs. Never use arbitrary values like 13px, 17px, or 22px.</p>' +
    '<div style="background:var(--surface);border:1px solid var(--border);padding:1rem;margin-bottom:1.25rem">' +
    [['4px','1/2 unit','Micro — gap between icon and label, tight inline elements'],
     ['8px','1 unit','Tight — gap between related elements in same component'],
     ['16px','2 units','Standard — internal padding, gap between list items'],
     ['24px','3 units','Comfortable — gap between components, card padding'],
     ['32px','4 units','Section — gap between separate sections on same page'],
     ['48px','6 units','Large — major section separation, page-level breathing room'],
     ['64px','8 units','Generous — hero padding, large section gaps'],
     ['96px','12 units','Maximum — page-level margins on large screens'],
    ].map(function(r) {
      var barWidth = Math.min(parseInt(r[0]) * 1.5, 150);
      return '<div class="spacing-row"><span class="spacing-label">' + r[0] + '</span><div class="spacing-bar-wrap"><div class="spacing-bar" style="width:' + barWidth + 'px;background:var(--navy)"></div></div><span class="spacing-desc"><strong>' + r[1] + '</strong> — ' + r[2] + '</span></div>';
    }).join('') +
    '</div>' +
    shead('Spacing Rules') +
    table([
      ['Component Padding','16px minimum inside all cards and components'],
      ['Related Elements','8px gap — elements that belong together (label + input)'],
      ['Separate Elements','24–32px gap — visually distinct sections'],
      ['Section Separation','48px minimum — major content sections'],
      ['Page Margins','32px mobile · 48–64px desktop'],
      ['Grid Gutters','16px mobile · 24px desktop (between columns)'],
    ])
  },
  { label: 'Colour & Contrast', id: 'contrast', content:
    shead('WCAG 2.1 Contrast Requirements') +
    '<div class="gl-grid">' +
    '<div class="gl-card"><div class="gl-card-label">AA — Normal Text</div><div class="gl-card-value" style="color:var(--navy)">4.5 : 1</div><div class="gl-card-desc">Minimum ratio for body text under 18pt (or 14pt bold). Required for accessibility compliance.</div></div>' +
    '<div class="gl-card"><div class="gl-card-label">AA — Large Text</div><div class="gl-card-value" style="color:var(--sage)">3.0 : 1</div><div class="gl-card-desc">Large text is 18pt+ regular or 14pt+ bold. Lower threshold due to easier legibility at size.</div></div>' +
    '<div class="gl-card"><div class="gl-card-label">AAA — Normal Text</div><div class="gl-card-value" style="color:var(--amber)">7.0 : 1</div><div class="gl-card-desc">Enhanced standard. Aim for this on critical body text where accessibility is a priority.</div></div>' +
    '<div class="gl-card"><div class="gl-card-label">UI Components</div><div class="gl-card-value" style="color:var(--red)">3.0 : 1</div><div class="gl-card-desc">Buttons, form borders, icons, and interactive elements must meet this threshold.</div></div>' +
    '</div>' +
    shead('PAF Books Colour Palette') +
    '<div class="swatch-grid">' +
    [
      ['#1B3A5C','Navy Blue','Text on white: 9.4:1 ✅ AAA','var(--navy)'],
      ['#C0392B','Red','Text on white: 4.6:1 ✅ AA','var(--red)'],
      ['#3D6B55','Sage Green','Text on white: 5.2:1 ✅ AA','var(--sage)'],
      ['#B5800A','Amber','Text on white: 4.5:1 ✅ AA','var(--amber)'],
      ['#F4F2EF','Background','Navy on bg: 9.1:1 ✅ AAA','#ddd'],
      ['#FFFFFF','Surface White','Navy on white: 9.4:1 ✅ AAA','#ccc'],
    ].map(function(s) {
      return '<div class="swatch"><div class="swatch-color" style="background:' + s[0] + '"></div><div class="swatch-info"><span class="swatch-name">' + s[1] + '</span><span class="swatch-hex">' + s[0] + '</span><span class="swatch-ratio">' + s[3].replace('var(--navy)','').replace('var(--red)','').replace('var(--sage)','').replace('var(--amber)','').replace('#ddd','').replace('#ccc','') + s[2] + '</span></div></div>';
    }).join('') +
    '</div>' +
    shead('Colour Rules') +
    table([
      ['Never below 12px','Do not use small text on coloured backgrounds','Contrast ratio is insufficient at tiny sizes even if technically passing'],
      ['Red + Green','Avoid red/green combinations for critical information','8% of men and 0.5% of women have red-green colour blindness'],
      ['Reverse text','White text on dark: navy must be darker than #2C5282','White text on light colours rarely meets AA standard'],
      ['Transparency','Semi-transparent elements must still meet contrast requirements','Test at the actual rendered colour, not the source colour'],
    ]) +
    rule('amber','⚡','Check Your Contrast','Use WebAIM Contrast Checker (webaim.org/resources/contrastchecker) to verify any colour combination before finalising a design.')
  },
  { label: 'Layout & Composition', id: 'layout', content:
    shead('Visual Hierarchy') +
    table([
      ['Maximum Levels','3 levels of visual hierarchy per design','More than 3 levels creates confusion — nothing reads as important'],
      ['Level 1','Primary — largest, most prominent','One element only. This is what the eye sees first.'],
      ['Level 2','Secondary — supporting information','Smaller, lower contrast, or less prominent placement'],
      ['Level 3','Tertiary — context and detail','Smallest, lowest contrast. Never competes with Level 1.'],
      ['Bold = Emphasis','If everything is bold, nothing is bold','Use weight and size sparingly for true emphasis'],
    ]) +
    shead('Reading Patterns') +
    '<div class="gl-grid">' +
    '<div class="gl-card"><div class="gl-card-label">F-Pattern</div><div class="gl-card-value" style="font-size:1rem">Web / Long Text</div><div class="gl-card-desc">Readers scan top horizontally, then move down the left side. Place key information at top and along the left margin.</div></div>' +
    '<div class="gl-card"><div class="gl-card-label">Z-Pattern</div><div class="gl-card-value" style="font-size:1rem">Ads / Posters</div><div class="gl-card-desc">Eye travels: top-left → top-right → diagonal → bottom-left → bottom-right. Place logo top-left, CTA bottom-right.</div></div>' +
    '<div class="gl-card"><div class="gl-card-label">Rule of Thirds</div><div class="gl-card-value" style="font-size:1rem">Photography / Layout</div><div class="gl-card-desc">Divide canvas into 3×3 grid. Place key elements at intersection points — more dynamic than centred placement.</div></div>' +
    '<div class="gl-card"><div class="gl-card-label">Golden Ratio</div><div class="gl-card-value" style="font-size:1rem">1 : 1.618</div><div class="gl-card-desc">Naturally pleasing proportions. Use for content area to sidebar ratio, image to text ratio, column widths.</div></div>' +
    '</div>' +
    shead('Grid System') +
    table([
      ['Desktop Grid','12 columns · 24px gutters · 32px side margins','Standard layout grid for all web and large-format designs'],
      ['Tablet Grid','8 columns · 20px gutters · 24px side margins'],
      ['Mobile Grid','4 columns · 16px gutters · 16px side margins'],
      ['Whitespace Rule','Minimum 20% of layout area must be whitespace','Whitespace directs the eye and gives designs room to breathe'],
      ['Alignment','All elements must align to the grid','Random placement creates visual noise and amateur appearance'],
      ['Proximity','Related elements must be grouped visually','Distance implies separation — use spacing to show relationships'],
    ]) +
    shead('Safe Zones Summary') +
    table([
      ['Instagram Post','80px from all edges'],
      ['Instagram Story','Top 250px · Bottom 250px'],
      ['YouTube Banner','1546 × 423 px central zone'],
      ['YouTube Thumbnail','Test at 168 × 94 px'],
      ['Book Cover','8mm from trim edge · 3mm bleed'],
      ['Print A4/A3','10–12mm from trim edge · 3mm bleed'],
      ['Print A1/A2','15–20mm from trim edge · 5mm bleed'],
      ['Web Hero Banner','Central 1280px zone'],
    ]) +
    rule('navy','📐','Core Principle','Good design is invisible. If a viewer notices the design before the message — the design has failed. Every layout decision should serve the content, never compete with it.')
  },
]);
