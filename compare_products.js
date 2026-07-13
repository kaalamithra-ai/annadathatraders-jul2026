import fs from 'fs';

// Read dayjoy.in products from sitemap
const sitemap = fs.readFileSync('dayjoy_products.xml', 'utf8');
const dayjoyMatches = sitemap.match(/ProductDetails\/([^\/]+)/g);
const dayjoyNames = dayjoyMatches.map(m => decodeURIComponent(m.replace('ProductDetails/', '')));

// Normalize for comparison
function normalize(name) {
  return name.toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
}

// Read our current products
const ourContent = fs.readFileSync('app/data/products.ts', 'utf8');
const ourNameMatches = ourContent.match(/name:\s*"([^"]+)"/g);
const ourNames = ourNameMatches.map(m => m.replace(/name:\s*"([^"]+)"/, '$1'));

const ourNorm = new Set(ourNames.map(n => normalize(n)));

// Find missing products
const missing = dayjoyNames.filter(dn => {
  for (const on of ourNorm) {
    const dnClean = dn.replace(/-/g, ' ').toLowerCase();
    const onClean = on.replace(/-/g, ' ').toLowerCase();
    if (dnClean === onClean) return false;

    const dnWords = new Set(dnClean.split(/\s+/));
    const onWords = new Set(onClean.split(/\s+/));

    let smaller, larger;
    if (dnWords.size <= onWords.size) {
      smaller = dnWords;
      larger = onWords;
    } else {
      smaller = onWords;
      larger = dnWords;
    }

    let allPresent = true;
    for (const w of smaller) {
      if (['the', 'and', 'with', 'for', 'new', 'pack', 'size'].includes(w) || /^\d/.test(w) || /^\(/.test(w)) continue;
      if (!larger.has(w)) {
        allPresent = false;
        break;
      }
    }

    if (allPresent && smaller.size > 1) return false;
  }

  return true;
});

console.log('=== DAYJOY PRODUCTS (from sitemap) ===');
dayjoyNames.sort().forEach(n => console.log(n));
console.log('\nTotal dayjoy products:', dayjoyNames.length);

console.log('\n\n=== OUR CURRENT PRODUCTS ===');
ourNames.sort().forEach(n => console.log(n));
console.log('\nTotal our products:', ourNames.length);

console.log('\n\n=== POTENTIALLY MISSING PRODUCTS ===');
missing.sort().forEach(n => console.log(n));
console.log('\nTotal potentially missing:', missing.length);

// Local comparison script only (not part of the Next.js runtime).

