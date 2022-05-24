export default {
  // format
  "*.{js,ts,tsx}": ["yarn format", "eslint --cache --fix"],

  // type-checking
  "src/**/{*.js,*.ts,*.tsx}": ["npm run typecheck --if-present"],
};
