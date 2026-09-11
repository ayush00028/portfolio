/**
 * =========================================================================
 * SECURITY UTILITIES & INPUT SANITIZATION
 * =========================================================================
 * Multi-layer client-side security to prevent XSS, URL injection,
 * parameter pollution, and spam flooding.
 */

// Escape HTML characters to prevent cross-site scripting (XSS)
export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\//g, '&#x2F;');
}

// Sanitize user inputs by trimming, stripping script/html tags, and capping length
export function sanitizeInput(str, maxLength = 1000) {
  if (typeof str !== 'string') return '';
  
  // 1. Strip script tags and event handlers
  let cleaned = str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '');

  // 2. Normalize whitespace
  cleaned = cleaned.trim();

  // 3. Enforce maximum length
  if (cleaned.length > maxLength) {
    cleaned = cleaned.slice(0, maxLength);
  }

  return cleaned;
}

// Verify that a URL is safe to navigate to (strictly http, https, or mailto)
export function isSafeUrl(url) {
  if (!url || typeof url !== 'string') return false;
  
  // Exclude placeholders from being flagged as malicious
  if (url.startsWith('[ADD') || url.startsWith('#')) return true;

  const trimmed = url.trim().toLowerCase();
  
  // Strictly disallow javascript:, data:, vbscript:, or file: URIs
  const disallowedProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
  for (const protocol of disallowedProtocols) {
    if (trimmed.startsWith(protocol)) {
      console.warn(`[Security Warning] Blocked unsafe URL protocol: ${url}`);
      return false;
    }
  }

  // Must begin with approved scheme or relative anchor
  return trimmed.startsWith('https://') || trimmed.startsWith('http://') || trimmed.startsWith('mailto:');
}

// Strict email validation
export function validateEmail(email) {
  if (!email || typeof email !== 'string') return false;
  // RFC 5322 compliant regex pattern
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return re.test(email.trim()) && email.length <= 100;
}

// Client-side rate limiting to prevent spam flooding
export function checkRateLimit(key = 'portfolio_contact_cooldown', cooldownSeconds = 30) {
  try {
    const lastTimestamp = localStorage.getItem(key);
    if (!lastTimestamp) return { allowed: true, remainingSeconds: 0 };

    const elapsed = (Date.now() - parseInt(lastTimestamp, 10)) / 1000;
    if (elapsed < cooldownSeconds) {
      return { allowed: false, remainingSeconds: Math.ceil(cooldownSeconds - elapsed) };
    }
    return { allowed: true, remainingSeconds: 0 };
  } catch {
    return { allowed: true, remainingSeconds: 0 };
  }
}

export function recordRateLimit(key = 'portfolio_contact_cooldown') {
  try {
    localStorage.setItem(key, Date.now().toString());
  } catch (e) {
    console.warn("Storage access restricted:", e);
  }
}
