# 🍔 Food Wagen - Meal Discovery App

A modern Next.js web application for discovering, managing, and searching meals. Find delicious food nearby with an intuitive interface!

**[Live Demo](https://food-wagen.vercel.app)** | **[GitHub](https://github.com/xCHLOMIx/food-wagen)**

---

## ⚡ Quick Start (2 minutes)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# http://localhost:3000
```

---

## ✨ Features

- 🔍 **Search Meals** - Filter meals by name in real-time
- ➕ **Add Meals** - Create new meals with form validation
- ✏️ **Edit Meals** - Update meal information
- 🗑️ **Delete Meals** - Remove meals with confirmation
- ⭐ **Ratings & Prices** - View meal ratings and prices
- 🏪 **Status Display** - See restaurant open/closed status
- 📱 **Responsive Design** - Works on mobile, tablet, desktop
- ⚡ **Fast Loading** - Skeleton loaders during data fetch
- 🧪 **Well Tested** - 5 comprehensive tests included

---

## 🛠️ Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| Next.js | 16.0.1 | React framework & SSR |
| React | 19.2.0 | UI components |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Styling |
| React Icons | ^5.5.0 | Icon library |
| Jest | Latest | Testing |
| React Testing Library | Latest | Component tests |

---

## 📁 Project Structure

```
components/          # React components (10)
├── MealCard.tsx     # Individual meal display
├── MealsList.tsx    # Meals grid & API calls
├── MealForm.tsx     # Add/Edit form
├── SearchForm.tsx   # Search input
└── ...

hooks/               # Custom hooks (3)
├── useCreate.tsx    # Create meal hook
├── useEdit.tsx      # Edit meal hook
└── useDelete.tsx    # Delete meal hook

app/                 # Next.js app directory
├── page.tsx         # Home page
└── layout.tsx       # Root layout

lib/                 # Utilities
├── types.ts         # TypeScript interfaces
└── data.ts          # Constants

__tests__/           # Test files (2 files, 5 tests)
├── MealCard.test.tsx     # Component rendering
└── MealsList.test.tsx    # API integration
```

---

## 🚀 Development

### Available Commands

```bash
npm run dev              # Start dev server (port 3000)
npm run build            # Build for production
npm start                # Start production server
npm test                 # Run tests
npm run test:watch      # Tests in watch mode
npm run lint            # Check code quality
npm run lint -- --fix   # Auto-fix code issues
```

### Development Server

```bash
npm run dev
```

Opens [http://localhost:3000](http://localhost:3000)

- Auto-reloads on file changes
- Shows TypeScript errors in terminal

---

## 🧪 Testing

### Run Tests

```bash
# Run all tests once
npm test

# Run in watch mode
npm run test:watch

# With coverage report
npm test -- --coverage
```

### Test Results

```
PASS __tests__/MealCard.test.tsx
PASS __tests__/MealsList.test.tsx

Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
```

### Test Coverage

- **MealCard Tests** - Component rendering with different props
- **MealsList Tests** - API data fetching and search functionality

---

## 🔗 API Integration

### Base URL
```
https://6852821e0594059b23cdd834.mockapi.io
```

### Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/Food` | Get all meals |
| GET | `/Food?name=query` | Search meals |
| GET | `/Food/:id` | Get single meal |
| POST | `/Food` | Create meal |
| PUT | `/Food/:id` | Update meal |
| DELETE | `/Food/:id` | Delete meal |

### Meal Data Structure

```json
{
  "id": "1",
  "name": "Delicious Burger",
  "avatar": "/burger.jpg",
  "rating": "4.5",
  "Price": "12.99",
  "logo": "/restaurant-logo.jpg",
  "open": true
}
```

---

## 🧩 Main Components

### MealCard
Displays individual meal with actions.
```typescript
<MealCard 
  meal={mealData}
  refetch={handleRefetch}
  deleteQuick={handleDelete}
/>
```

### MealsList
Fetches and displays meals in grid.
```typescript
<MealsList search={searchQuery} />
```

### MealForm
Modal for adding/editing meals with validation.
```typescript
<MealForm 
  showForm={isVisible}
  setShowForm={setIsVisible}
  refetch={handleRefetch}
/>
```

---

## 🪝 Custom Hooks

### useCreate
Create new meals.
```typescript
const { error, errors, handleSubmit, loading } = useCreate()
await handleSubmit({ meal: mealData })
```

### useEdit
Edit existing meals.
```typescript
const { error, errors, handleSubmit, loading } = useEdit()
await handleSubmit({ meal: mealData, id: mealId })
```

### useDelete
Delete meals.
```typescript
const { loading, success, deleteMeal } = useDelete()
await deleteMeal(mealId)
```

---

## 📋 Form Validation

All fields required:
- ✓ Meal name
- ✓ Meal image URL
- ✓ Rating (1-5)
- ✓ Price
- ✓ Restaurant logo URL
- ✓ Open/Closed status

Error messages displayed inline.

---

## 🎨 Styling

### Tailwind CSS Classes

Custom classes available in `app/globals.css`:
- `.food-input` - Input field styling
- `.food-badge` - Price badge styling
- `.food-outline-button` - Secondary button style

### Responsive Breakpoints

- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1280px+

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

Or connect GitHub:
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy (automatic on push)

### Environment Variables

```env
NEXT_PUBLIC_API_URL=https://6852821e0594059b23cdd834.mockapi.io
```

---

## 🔧 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Tests Failing
```bash
npm test -- --clearCache
npm test
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Styles Not Showing
Restart dev server: `npm run dev`

---

## ✅ Pre-Deployment Checklist

- [ ] `npm test` - All tests passing
- [ ] `npm run lint` - No linting errors
- [ ] `npm run build` - Build succeeds
- [ ] Environment variables set
- [ ] Responsive design tested
- [ ] Forms working correctly
- [ ] API calls functional

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make changes and test: `npm test`
4. Commit: `git commit -m "Add new feature"`
5. Push: `git push origin feature/new-feature`
6. Create Pull Request

---

## 📖 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Jest Testing](https://jestjs.io/docs/getting-started)

---

## 📄 License

MIT License - Feel free to use this project for any purpose.

---

## 👤 Author

**xCHLOMIx** - [GitHub](https://github.com/xCHLOMIx)

---

**Last Updated:** November 12, 2025  
**Status:** Production Ready ✅
