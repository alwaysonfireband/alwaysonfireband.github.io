module.exports = {
  content: ['public/**/*.html'],
  css: ['public/build/main.css'],
  defaultExtractor: (content) => content.match(/[\w-/:.]+(?<!:)/g) || [],
  output: 'public/build/purged.css',
};
