purple-sector/
│
├── public/                      # קבצים סטטיים (לוגואים, תמונות וכו')
├── styles/                      # קובצי CSS או Tailwind globals
│   └── globals.css
│
├── components/                  # קומפוננטות לשימוש חוזר
│   ├── PredictionForm.tsx
│   ├── LeaderboardTable.tsx
│   └── RaceCard.tsx
│
├── lib/                         # קוד כללי לשיתוף בפרויקט
│   ├── db.ts                    # חיבור ל-MongoDB
│   ├── utils.ts                 # פונקציות עזר
│   └── scoring.ts               # לוגיקה של חישוב ניקוד
│
├── models/                      # סכמות (Schemas) של MongoDB
│   ├── prediction.model.ts
│   ├── user.model.ts
│   └── raceResult.model.ts
│
├── app/                         # App Router – מבנה מודרני של דפים
│   ├── layout.tsx               # Layout גלובלי
│   ├── page.tsx                 # עמוד הבית ("/")
│   ├── leaderboard/
│   │   └── page.tsx             # עמוד טבלת ניקוד
│   ├── predictions/
│   │   └── page.tsx             # עמוד הניחושים
│   └── api/                     # API routes (Node.js-like)
│       ├── predictions/
│       │   ├── route.ts         # POST / GET לניחושים
│       └── auth/
│           ├── login/route.ts   # התחברות
│           └── register/route.ts# הרשמה
│
├── middleware.ts               # Middleware ל-auth או redirect
├── tailwind.config.ts          # הגדרות Tailwind
├── next.config.js              # הגדרות Next.js
├── .env.local                  # משתני סביבה (Mongo URI וכו')
└── package.json
