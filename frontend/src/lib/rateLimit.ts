interface RateLimitData {
  submissions: number[];
  lastReset: number;
}

const RATE_LIMIT_KEY = 'contact_form_submissions';
const MAX_SUBMISSIONS_PER_HOUR = 3;
const HOUR_IN_MS = 60 * 60 * 1000;

export function checkRateLimit(): { allowed: boolean; remainingTime?: number } {
  const now = Date.now();
  const stored = localStorage.getItem(RATE_LIMIT_KEY);

  let data: RateLimitData = stored ? JSON.parse(stored) : { submissions: [], lastReset: now };

  // Reset if more than an hour has passed
  if (now - data.lastReset > HOUR_IN_MS) {
    data = { submissions: [], lastReset: now };
  }

  // Clean old submissions (older than 1 hour)
  data.submissions = data.submissions.filter(timestamp => now - timestamp < HOUR_IN_MS);

  if (data.submissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
    const oldestSubmission = Math.min(...data.submissions);
    const remainingTime = HOUR_IN_MS - (now - oldestSubmission);
    return { allowed: false, remainingTime };
  }

  return { allowed: true };
}

export function recordSubmission(): void {
  const now = Date.now();
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const data: RateLimitData = stored ? JSON.parse(stored) : { submissions: [], lastReset: now };

  data.submissions.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
}

export function formatTimeRemaining(ms: number): string {
  const minutes = Math.ceil(ms / (1000 * 60));
  return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
}